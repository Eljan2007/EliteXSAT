/* ==========================================================================
   EliteXSAT — Math tools: a resizable split-panel Desmos graphing calculator
   (shown in the Math section of the test, like Bluebook) and a math typesetter
   that turns "a/b" text into a stacked fraction and "√x" into a proper radical.
   Attaches to: Apex.calc, Apex.fractions, Apex.isMathDomain
   ========================================================================== */
window.Apex = window.Apex || {};

/* ----- Desmos calculator: a resizable split panel (Math section) -----
   Opening it docks a big Desmos graphing calculator on the LEFT and slides the
   question to the RIGHT; a draggable divider in the middle resizes the two sides.
   The pane + Desmos instance are SIBLINGS of the per-question render area (they
   live in [data-stage], not [data-stage-inner]), so they survive question
   navigation — the calculator keeps its expressions until the runner closes. */
Apex.calc = (function () {
  let pane = null, splitter = null, instance = null, stage = null, open = false, pct = 50;

  function buildPane() {
    pane = document.createElement("div");
    pane.className = "calc-pane";
    pane.innerHTML =
      `<div class="calc-head">
         <span class="calc-title">${Apex.icons.get("calculator")} Calculator</span>
         <button class="calc-close" data-calc-close aria-label="Close calculator">${Apex.icons.get("x")}</button>
       </div>
       <div class="calc-body" data-calc-body></div>`;
    const body = pane.querySelector("[data-calc-body]");
    if (window.Desmos && Desmos.GraphingCalculator) {
      instance = Desmos.GraphingCalculator(body, { border: false, expressionsTopbar: true, settingsMenu: true, lockViewport: false });
    } else {
      body.innerHTML = `<div class="calc-offline">The Desmos calculator couldn't load.<br>It needs an internet connection.</div>`;
    }
    pane.querySelector("[data-calc-close]").addEventListener("click", hide);

    splitter = document.createElement("div");
    splitter.className = "calc-split";
    splitter.title = "Drag to resize the calculator";
    splitter.addEventListener("mousedown", startDrag);
  }

  // Dock the calculator on the left of the stage and slide the question pane right.
  function show(root) {
    const st = root.querySelector("[data-stage]");
    if (!st) return;
    if (!pane) buildPane();
    stage = st;
    const inner = st.querySelector("[data-stage-inner]");
    st.insertBefore(splitter, inner);   // order becomes: [calc-pane][splitter][stage-inner]
    st.insertBefore(pane, splitter);
    st.classList.add("calc-open");
    st.style.flexDirection = "row";     // inline beats the stylesheet's column default
    st.style.setProperty("--calc-w", pct + "%");
    open = true; syncBtn();
    if (instance) setTimeout(() => instance.resize(), 50);
  }

  function hide() {
    if (stage) { stage.classList.remove("calc-open"); stage.style.flexDirection = "column"; }
    if (splitter && splitter.parentNode) splitter.parentNode.removeChild(splitter);
    if (pane && pane.parentNode) pane.parentNode.removeChild(pane);
    open = false; syncBtn();
  }

  // Keep the toolbar's Calculator button highlight in sync no matter how the
  // panel was opened/closed (toolbar click, the pane's × button, or auto-hide).
  function syncBtn() {
    const root = stage && stage.closest(".qbank-runner");
    const b = root && root.querySelector("[data-calc]");
    if (b) { b.classList.toggle("on", open); b.setAttribute("aria-pressed", open); }
  }

  function toggle(root) { open ? hide() : show(root); }

  // Drag the middle divider to resize — left grows the calculator, right grows the question.
  function startDrag(e) {
    if (!stage) return;
    e.preventDefault();
    stage.classList.add("calc-dragging"); document.body.style.userSelect = "none";
    const onMove = (ev) => {
      const r = stage.getBoundingClientRect();
      pct = Math.max(28, Math.min(72, ((ev.clientX - r.left) / r.width) * 100));
      stage.style.setProperty("--calc-w", pct + "%");
    };
    const onUp = () => {
      stage.classList.remove("calc-dragging"); document.body.style.userSelect = "";
      document.removeEventListener("mousemove", onMove); document.removeEventListener("mouseup", onUp);
      if (instance) instance.resize();
    };
    document.addEventListener("mousemove", onMove); document.addEventListener("mouseup", onUp);
  }

  function reset() {
    try { if (instance && instance.destroy) instance.destroy(); } catch (e) {}
    hide(); pane = null; splitter = null; instance = null; stage = null; open = false;
  }

  return { toggle, hide, reset, isOpen: () => open };
})();

/* ----- math typesetter: stacked fractions + square roots (numeric AND algebraic) -----
   Turns "a/b" into a stacked <span class="frac"> and "√x" / "√(…)" into a proper radical
   (a √ sign with an overline "vinculum" over the radicand) — e.g. 6x^24/(18x^7), √(2k+7),
   (−3 ± √13)/2. Works on the DOM, not raw HTML: every non-text child (sup, img, <table>, …)
   becomes a private-use SENTINEL char before the regexes run, so they span <sup> exponents
   and parenthesised groups yet never corrupt tag attributes (e.g. the slashes inside an
   <img src="…/…"> path). Radicals are rendered FIRST and collapsed to a sentinel, so a √
   inside a fraction — or a fraction inside a √ — both come out right. MATH content only
   (RW dates like 9/11 are left alone). Idempotent: a rendered fraction/radical has no
   "/" or "√" left to match. */
Apex.fractions = (function () {
  const SUP_BASE = 0xE000, GEN_BASE = 0xE800, OTHER_BASE = 0xF000;   // PUA sentinels: sup/generated = operand, other = boundary
  const ROOT = "√";                                    // √ (square-root sign)
  const CORE = "A-Za-z0-9\\u00B2\\u00B3\\u00B9\\u2070-\\u209F\\uE000-\\uEFFF";   // operand chars (no dot); incl. sup & generated sentinels
  const RUN = "[." + CORE + "]*[" + CORE + "]";                       // a run may hold INTERIOR dots (1.5) but can't END in one
  const FRAC_SRC = "(?:\\([^()]*\\)|" + RUN + ")\\s*/\\s*(?:\\([^()]*\\)|" + RUN + ")";
  const RAD_SRC = ROOT + "\\s*(\\([^()]*\\)|" + RUN + ")";
  const esc1 = (c) => (c === "<" ? "&lt;" : c === ">" ? "&gt;" : c === "&" ? "&amp;" : c);
  let gen = 0;

  // A real fraction's segment has a digit, a "(", a unicode super/subscript, or a sentinel
  // (a <sup> exponent or an already-rendered radical) — skips word/word like "and/or".
  function mathy(seg) {
    for (let i = 0; i < seg.length; i++) {
      const c = seg.charCodeAt(i);
      if ((c >= 48 && c <= 57) || c === 40 ||
          c === 0x00B2 || c === 0x00B3 || c === 0x00B9 ||
          (c >= 0x2070 && c <= 0x209F) ||
          (c >= SUP_BASE && c <= 0xEFFF)) return true;
    }
    return false;
  }
  // index of the dividing "/" that sits OUTSIDE any parentheses
  function topSlash(s) {
    let d = 0;
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
      if (c === "(") d++; else if (c === ")") d--;
      else if (c === "/" && d <= 0) return i;
    }
    return -1;
  }
  // drop one matching outer ( ) pair, e.g. "(2k+7)" → "2k+7"
  function unwrap(s) {
    if (s.length >= 2 && s[0] === "(" && s[s.length - 1] === ")") {
      let d = 0;
      for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") d++;
        else if (s[i] === ")") { d--; if (d === 0 && i < s.length - 1) return s; }
      }
      return s.slice(1, -1);
    }
    return s;
  }
  // turn a sentinel-bearing buffer slice back into HTML (sentinels → their HTML, text escaped)
  function expand(s, map) { let r = ""; for (const ch of s) r += (map[ch] !== undefined ? map[ch] : esc1(ch)); return r; }
  function sentinel(html, map) { const code = String.fromCharCode(GEN_BASE + (gen++)); map[code] = html; return code; }

  // √x → radical (rendering any fraction inside the radicand too), collapsed to one sentinel
  function radPass(buf, map) {
    let changed = false;
    const out = buf.replace(new RegExp(RAD_SRC, "g"), (m, rad) => {
      const inner = unwrap(rad.trim());
      if (!inner) return m;
      changed = true;
      const innerHTML = expand(fracPass(inner, map).buf, map);
      return sentinel('<span class="sqrt"><span class="sqrt-sign">' + ROOT + '</span><span class="sqrt-rad">' + innerHTML + "</span></span>", map);
    });
    return { buf: out, changed };
  }
  // a/b → stacked fraction, collapsed to one sentinel (fresh RegExp each call → safe to nest)
  function fracPass(buf, map) {
    let changed = false;
    const out = buf.replace(new RegExp(FRAC_SRC, "g"), (seg) => {
      const slash = topSlash(seg);
      if (slash < 0 || !mathy(seg)) return seg;
      const num = unwrap(seg.slice(0, slash).trim()), den = unwrap(seg.slice(slash + 1).trim());
      if (!num || !den) return seg;
      changed = true;
      return sentinel('<span class="frac"><span class="frac-n">' + expand(num, map) + '</span><span class="frac-d">' + expand(den, map) + "</span></span>", map);
    });
    return { buf: out, changed };
  }
  function processEl(el) {
    const t = el && el.textContent;
    if (!t || (t.indexOf("/") < 0 && t.indexOf(ROOT) < 0)) return;
    Array.prototype.forEach.call(el.children, processEl);   // bottom-up: typeset inside sup/tables first
    gen = 0;
    let buf = "", n = 0; const map = {};
    el.childNodes.forEach((node) => {
      if (node.nodeType === 3) buf += node.nodeValue;       // text
      else if (node.nodeType === 1) {                        // element → sentinel (sup = operand, else boundary)
        const code = String.fromCharCode((node.tagName === "SUP" ? SUP_BASE : OTHER_BASE) + n);
        map[code] = node.outerHTML; buf += code; n++;
      }
    });
    const r = radPass(buf, map); buf = r.buf;               // radicals first…
    const f = fracPass(buf, map); buf = f.buf;              // …then fractions
    if (r.changed || f.changed) el.innerHTML = expand(buf, map);
  }
  return function (root) {
    if (!root) return;
    root.querySelectorAll(".q-prompt, .passage, .ch-text, .qr-expl, .grid-in-note").forEach(processEl);
  };
})();

Apex.isMathDomain = (d) => /algebra|advanced math|problem-solving|geometry|trigonometry/i.test(d || "");
