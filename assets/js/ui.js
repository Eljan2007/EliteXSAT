/* ==========================================================================
   Apex SAT Prep — Core utilities, icons, and UI primitives
   Attaches to: Apex.util, Apex.icons, Apex.ui
   ========================================================================== */
window.Apex = window.Apex || {};

/* ---------------------------------------------------------------- Utilities */
Apex.util = (function () {
  const PREFIX = "apex.";

  const esc = (s) =>
    String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");

  const qs = (sel, root = document) => root.querySelector(sel);
  const qsa = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const clamp = (n, min, max) => Math.min(max, Math.max(min, n));

  const uid = () =>
    (Date.now().toString(36) + Math.random().toString(36).slice(2, 8)).toUpperCase();

  const pad = (n) => String(n).padStart(2, "0");

  /* seconds → "M:SS" or "MM:SS" */
  const fmtTime = (sec) => {
    sec = Math.max(0, Math.round(sec));
    const m = Math.floor(sec / 60);
    return `${m}:${pad(sec % 60)}`;
  };

  const fmtDate = (ts) =>
    new Date(ts).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });

  const fmtDateTime = (ts) =>
    new Date(ts).toLocaleString(undefined, { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });

  const relTime = (ts) => {
    const diff = Date.now() - ts, day = 864e5;
    if (diff < 6e4) return "just now";
    if (diff < 36e5) return Math.floor(diff / 6e4) + "m ago";
    if (diff < day) return Math.floor(diff / 36e5) + "h ago";
    if (diff < 7 * day) return Math.floor(diff / day) + "d ago";
    return fmtDate(ts);
  };

  const prefersReducedMotion = () =>
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const debounce = (fn, ms = 200) => {
    let t;
    return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); };
  };

  /* localStorage wrapper — resilient to file:// / private-mode failures */
  const store = {
    get(key, fallback = null) {
      try {
        const v = localStorage.getItem(PREFIX + key);
        return v == null ? fallback : JSON.parse(v);
      } catch (e) { return fallback; }
    },
    set(key, val) {
      try { localStorage.setItem(PREFIX + key, JSON.stringify(val)); return true; }
      catch (e) { return false; }
    },
    remove(key) { try { localStorage.removeItem(PREFIX + key); } catch (e) {} },
  };

  /* Animate a number from 0 → value into an element's textContent */
  const countUp = (elm, value, { duration = 900, format = (n) => Math.round(n) } = {}) => {
    if (!elm) return;
    if (prefersReducedMotion() || duration <= 0) { elm.textContent = format(value); return; }
    const start = performance.now();
    const tick = (now) => {
      const t = clamp((now - start) / duration, 0, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      elm.textContent = format(value * eased);
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  /* IntersectionObserver-based scroll reveal */
  let revealObserver = null;
  const revealInit = (root = document) => {
    // Reduced motion or a hidden tab (IntersectionObserver won't fire) → reveal now
    if (prefersReducedMotion() || document.hidden) {
      qsa(".reveal", root).forEach((el) => el.classList.add("in"));
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("in"); revealObserver.unobserve(e.target); }
        });
      }, { threshold: 0, rootMargin: "0px 0px -40px 0px" });   // threshold 0 so very tall elements still trigger
    }
    qsa(".reveal:not(.in)", root).forEach((el) => revealObserver.observe(el));
  };

  /* event delegation helper */
  const delegate = (root, type, selector, handler) => {
    root.addEventListener(type, (e) => {
      const target = e.target.closest(selector);
      if (target && root.contains(target)) handler(e, target);
    });
  };

  const initials = (name = "") =>
    name.trim().split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase() || "U";

  return {
    esc, qs, qsa, clamp, uid, fmtTime, fmtDate, fmtDateTime, relTime, pad,
    prefersReducedMotion, debounce, store, countUp, revealInit, delegate, initials,
  };
})();

/* -------------------------------------------------------------------- Icons */
Apex.icons = (function () {
  const P = {
    check: '<polyline points="20 6 9 17 4 12"/>',
    x: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
    "check-circle": '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
    "x-circle": '<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>',
    clock: '<circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/>',
    timer: '<line x1="10" y1="2" x2="14" y2="2"/><circle cx="12" cy="14" r="8"/><line x1="12" y1="14" x2="15" y2="11"/>',
    flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>',
    "chevron-right": '<polyline points="9 18 15 12 9 6"/>',
    "chevron-left": '<polyline points="15 18 9 12 15 6"/>',
    "chevron-down": '<polyline points="6 9 12 15 18 9"/>',
    "arrow-right": '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
    "arrow-left": '<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>',
    menu: '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
    "book-open": '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    calculator: '<rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>',
    "bar-chart": '<line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
    user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    "log-out": '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>',
    plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
    refresh: '<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>',
    lightbulb: '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5"/>',
    lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/>',
    sparkles: '<path d="M12 3l1.6 4.6L18 9.2l-4.4 1.6L12 15l-1.6-4.2L6 9.2l4.4-1.6z"/><path d="M19 14l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
    play: '<polygon points="6 4 20 12 6 20 6 4"/>',
    list: '<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>',
    "trending-up": '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M15.5 12.9 17 22l-5-3-5 3 1.5-9.1"/>',
    pencil: '<path d="M17 3a2.83 2.83 0 0 1 4 4L7.5 20.5 2 22l1.5-5.5z"/>',
    info: '<circle cx="12" cy="12" r="9"/><line x1="12" y1="11" x2="12" y2="16"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
    alert: '<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    "graduation-cap": '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1 2.7 3 6 3s6-2 6-3v-5"/>',
    layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
    pause: '<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
    "chevron-up": '<polyline points="18 15 12 9 6 15"/>',
    home: '<path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',
    compass: '<circle cx="12" cy="12" r="9"/><polygon points="16 8 14 14 8 16 10 10 16 8"/>',
    "file-text": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/>',
    sigma: '<path d="M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8L12 12l-5.9 7.2a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2"/>',
    quote: '<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v4c0 1.25.75 2 2 2h2.5"/><path d="M14 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v4c0 1.25.75 2 2 2h2.5"/>',
    shuffle: '<polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/>',
    moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
    tag: '<path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><circle cx="7" cy="7" r="1.2"/>',
    type: '<polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/>',
    "arrow-up-right": '<line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>',
    bookmark: '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>',
    "more-vertical": '<line x1="12" y1="5" x2="12.01" y2="5"/><line x1="12" y1="12" x2="12.01" y2="12"/><line x1="12" y1="19" x2="12.01" y2="19"/>',
    maximize: '<polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>',
    palette: '<circle cx="13.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/><circle cx="17.5" cy="10.5" r="1.2" fill="currentColor" stroke="none"/><circle cx="8.5" cy="7.5" r="1.2" fill="currentColor" stroke="none"/><circle cx="6.5" cy="12.5" r="1.2" fill="currentColor" stroke="none"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.65-.75 1.65-1.69 0-.43-.18-.83-.44-1.12-.28-.29-.43-.65-.43-1.12a1.65 1.65 0 0 1 1.66-1.66H16c3.05 0 5.5-2.5 5.5-5.56C21.5 6 17.5 2 12 2z"/>',
  };

  const get = (name, attrs = "") =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${attrs}>${P[name] || ""}</svg>`;

  return { get, has: (n) => !!P[n] };
})();

/* -------- Exam appearance (White / Dark) -----------------------------------
   The exam "Appearance" tool is just the app's own light/dark theme toggle
   (Apex.theme) surfaced inside the runner — choosing White or Dark flips the real
   theme tokens exactly like the main-screen Appearance control, so dark mode looks
   identical everywhere with no color distortion. Only two options, by request.
   Shared by the mock-test engine and the Question Bank runner (both are .engine). */
Apex.bgTint = (function () {
  const OPTS = [
    { id: "light", label: "White", dot: "#ffffff" },
    { id: "dark",  label: "Dark",  dot: "#141a23" },   // = the real dark --surface
  ];
  const current = () => (Apex.theme.current() === "dark" ? "dark" : "light");
  function apply(root, id) {
    Apex.theme.set(id);                                 // same global toggle as the main screen
    if (root) root.querySelectorAll(".qr-bg-swatch").forEach((s) => s.classList.toggle("on", s.dataset.tint === current()));
  }
  function menu(root, btn) {
    const open = root.querySelector(".qr-bg-menu");
    if (open) { open.remove(); return; }               // toggle closed if already open
    const cur = current(), r = btn.getBoundingClientRect();
    const m = document.createElement("div");
    m.className = "qr-bg-menu";
    m.style.right = (window.innerWidth - r.right) + "px";
    m.style.top = (r.bottom + 6) + "px";
    m.innerHTML = `<div class="qr-bg-title">Appearance</div><div class="qr-bg-grid">` +
      OPTS.map((p) =>
        `<button class="qr-bg-swatch ${p.id === cur ? "on" : ""}" data-tint="${p.id}" title="${p.label}" aria-label="${p.label} appearance">` +
        `<span class="qr-bg-dot" style="background:${p.dot}"></span><span class="qr-bg-lbl">${p.label}</span></button>`
      ).join("") + `</div>`;
    root.appendChild(m);
    m.addEventListener("click", (e) => {
      const s = e.target.closest(".qr-bg-swatch"); if (!s) return;
      apply(root, s.dataset.tint);
    });
  }
  return { OPTS, apply, menu, current, restore: function () {} };
})();

/* --------------------------------------------------------------- UI helpers */
Apex.ui = (function () {
  const { qs } = Apex.util;
  const icon = Apex.icons.get;

  /* Toasts */
  function toast(msg, type = "info", ms = 3200) {
    let wrap = qs(".toast-wrap");
    if (!wrap) { wrap = document.createElement("div"); wrap.className = "toast-wrap"; document.body.appendChild(wrap); }
    const t = document.createElement("div");
    t.className = "toast " + (type === "ok" ? "ok" : type === "bad" ? "bad" : "");
    const ic = type === "ok" ? "check-circle" : type === "bad" ? "x-circle" : "info";
    t.innerHTML = icon(ic) + `<span>${Apex.util.esc(msg)}</span>`;
    t.setAttribute("role", "status");
    wrap.appendChild(t);
    setTimeout(() => {
      t.style.transition = "opacity .25s, transform .25s";
      t.style.opacity = "0"; t.style.transform = "translateY(10px)";
      setTimeout(() => t.remove(), 260);
    }, ms);
  }

  /* Modal — returns { close } */
  let openModal = null;
  function modal({ title = "", body = "", actions = "", size = "" , dismissible = true } = {}) {
    closeModal();
    const backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop";
    backdrop.innerHTML = `
      <div class="modal" role="dialog" aria-modal="true" ${title ? 'aria-label="' + Apex.util.esc(title) + '"' : ""} style="${size === "lg" ? "max-width:560px" : ""}">
        ${title ? `<div class="row between" style="margin-bottom:16px">
            <h3 style="font-size:1.3rem">${Apex.util.esc(title)}</h3>
            ${dismissible ? `<button class="btn btn-ghost btn-sm" data-close aria-label="Close">${icon("x")}</button>` : ""}
          </div>` : ""}
        <div class="modal-body">${body}</div>
        ${actions ? `<div class="row gap-2" style="margin-top:24px;justify-content:flex-end">${actions}</div>` : ""}
      </div>`;
    document.body.appendChild(backdrop);
    document.body.style.overflow = "hidden";

    const close = () => {
      backdrop.remove();
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      openModal = null;
    };
    const onKey = (e) => { if (e.key === "Escape" && dismissible) close(); };
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop && dismissible) close();
      if (e.target.closest("[data-close]")) close();
    });
    document.addEventListener("keydown", onKey);
    openModal = { close, root: backdrop };
    const firstInput = backdrop.querySelector("input, button.btn-primary");
    if (firstInput) setTimeout(() => firstInput.focus(), 50);
    return openModal;
  }
  function closeModal() { if (openModal) openModal.close(); }

  function confirm({ title, message, confirmText = "Confirm", cancelText = "Cancel", danger = false } = {}) {
    return new Promise((resolve) => {
      const m = modal({
        title,
        body: `<p class="muted" style="line-height:1.6">${Apex.util.esc(message)}</p>`,
        actions: `
          <button class="btn btn-ghost" data-cancel>${Apex.util.esc(cancelText)}</button>
          <button class="btn ${danger ? "btn-danger" : "btn-primary"}" data-ok>${Apex.util.esc(confirmText)}</button>`,
      });
      m.root.addEventListener("click", (e) => {
        if (e.target.closest("[data-ok]")) { m.close(); resolve(true); }
        else if (e.target.closest("[data-cancel]")) { m.close(); resolve(false); }
      });
    });
  }

  /* One UI sliding-pill segmented control (single-select).
     `container` holds .pill-opt buttons (one .active; each with data-v, optional
     data-color). onChange(value, btn) fires on user selection. Returns helpers. */
  function pillSeg(container, onChange) {
    const opts = Array.from(container.querySelectorAll(".pill-opt"));
    if (!opts.length) return null;
    let thumb = container.querySelector(".pill-thumb");
    if (!thumb) { thumb = document.createElement("span"); thumb.className = "pill-thumb"; container.insertBefore(thumb, container.firstChild); }
    const move = (btn) => {
      thumb.style.transform = `translateX(${btn.offsetLeft}px)`;
      thumb.style.width = btn.offsetWidth + "px";
      if (btn.dataset.color) thumb.style.background = btn.dataset.color;
    };
    const select = (btn, fire) => {
      if (!btn) return;
      opts.forEach((o) => o.classList.toggle("active", o === btn));
      move(btn);
      if (fire && onChange) onChange(btn.dataset.v, btn);
    };
    opts.forEach((o) => o.addEventListener("click", () => select(o, true)));
    move(container.querySelector(".pill-opt.active") || opts[0]);
    return { select: (v) => select(opts.find((o) => o.dataset.v === v), false),
             reposition: () => move(container.querySelector(".pill-opt.active") || opts[0]) };
  }

  /* "Report a problem" modal — collects a complaint and emails it to Apex.config.supportEmail
     (with a local backup in localStorage). Used by the question-runner + test-engine toolbars. */
  function reportModal(context) {
    const m = modal({
      title: "Report a problem",
      body: `<p class="muted" style="margin:0 0 12px;line-height:1.6">Found a wrong answer, a typo, or a broken figure? Tell us what's off and we'll fix it.</p>
        <textarea data-rep-text class="input" rows="5" placeholder="Describe the problem — which question and what's wrong…" style="width:100%;resize:vertical;font:inherit"></textarea>`,
      actions: `<button class="btn btn-ghost" data-close>Cancel</button><button class="btn btn-primary" data-rep-send>Send report</button>`,
      dismissible: true,
    });
    const send = m.root.querySelector("[data-rep-send]");
    if (send) send.addEventListener("click", async () => {
      const ta = m.root.querySelector("[data-rep-text]");
      const txt = ((ta && ta.value) || "").trim();
      if (!txt) { toast("Please describe the problem first.", "bad"); if (ta) ta.focus(); return; }
      send.disabled = true;
      try {
        await Apex.store.saveReport({ message: txt, context: (context || "") + " · " + location.href });
        m.close();
        toast("Thanks — your report was sent.");
      } catch (e) {
        send.disabled = false;
        toast("Couldn't send the report — please try again.", "bad");
      }
    });
  }

  return { toast, modal, closeModal, confirm, pillSeg, reportModal };
})();

/* ----------------------------------------------------- Theme (dark mode) */
/* Default follows the OS (prefers-color-scheme). Manual override = light|dark.
   Applied by setting <html data-theme="dark|light">. */
Apex.theme = (function () {
  const KEY = "theme";
  const store = Apex.util.store;
  const mq = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)")
                               : { matches: false, addEventListener() {} };
  const pref = () => store.get(KEY, "system");
  const effective = (p) => {
    p = p || pref();
    return p === "dark" || p === "light" ? p : (mq.matches ? "dark" : "light");
  };
  const apply = () => { document.documentElement.dataset.theme = effective(); };
  const set = (p) => { store.set(KEY, p); apply(); };
  if (mq.addEventListener) mq.addEventListener("change", () => { if (pref() === "system") apply(); });
  apply();
  return { apply, set, pref, current: () => document.documentElement.dataset.theme,
           toggle() { set(effective() === "dark" ? "light" : "dark"); } };
})();
