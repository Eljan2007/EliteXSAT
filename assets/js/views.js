/* ==========================================================================
   Apex SAT Prep — Application views
   Each view is an async function (container, params) that fetches its own
   data, renders, and wires its own events. Attaches to: Apex.views
   ========================================================================== */
window.Apex = window.Apex || {};

Apex.views = (function () {
  const { esc, fmtTime, fmtDate, relTime, countUp, clamp, initials } = Apex.util;
  const icon = Apex.icons.get;
  const meta = Apex.bank.sectionMeta;

  /* ----------------------------------------------------------- helpers */
  const fmtDuration = (min) => (min >= 60 ? `${Math.floor(min / 60)}h ${min % 60}m` : `${min}m`);
  const typeLabel = { full: "Full-length", diagnostic: "Diagnostic", section: "Section practice" };

  function ring(value, max, label, color) {
    const r = 54, c = 2 * Math.PI * r, p = clamp(value / max, 0, 1);
    return `<div class="ring" style="--size:140px">
      <svg viewBox="0 0 120 120">
        <circle class="track" cx="60" cy="60" r="${r}"></circle>
        <circle class="fill" cx="60" cy="60" r="${r}" stroke="${color}"
          stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${c.toFixed(1)}"
          data-ring="${(c * (1 - p)).toFixed(1)}"></circle>
      </svg>
      <div class="label"><b data-count="${value}">0</b><span>${esc(label)}</span></div>
    </div>`;
  }

  function hydrate(container) {
    const apply = (animate) => {
      Apex.util.qsa("[data-ring]", container).forEach((el) => { el.style.strokeDashoffset = el.dataset.ring; });
      Apex.util.qsa("[data-bar]", container).forEach((el) => { el.style.width = el.dataset.bar + "%"; });
      Apex.util.qsa("[data-count]", container).forEach((el) => {
        if (el.dataset.count === "" || isNaN(+el.dataset.count)) return;
        if (animate) countUp(el, +el.dataset.count, { duration: 1100 });
        else el.textContent = el.dataset.count;
      });
    };
    // requestAnimationFrame is paused in hidden/background tabs — never let it
    // gate the final values; only use it to drive the animation when visible.
    if (document.hidden || Apex.util.prefersReducedMotion()) apply(false);
    else requestAnimationFrame(() => apply(true));
    Apex.util.revealInit(container);
  }

  function examCard(exam, last) {
    const s = Apex.bank.summarize(exam);
    const accent = exam.sections.length > 1 ? "brand" : exam.sections[0].id;
    const color = accent === "rw" ? "var(--rw)" : accent === "math" ? "var(--math)" : "var(--brand-600)";
    const ic = exam.type === "full" ? "file-text" : exam.type === "diagnostic" ? "compass" : (exam.sections[0].id === "rw" ? "book-open" : "calculator");
    return `<article class="card test-card card-hover reveal" data-start="${exam.id}" role="button" tabindex="0">
      <div class="tc-top">
        <div class="feature-icon" style="background:${color}1a;color:${color};width:44px;height:44px;border-radius:11px;margin:0">${icon(ic)}</div>
        <span class="badge">${esc(typeLabel[exam.type] || "Practice")}</span>
      </div>
      <div>
        <h3>${esc(exam.title)}</h3>
        <p class="small muted" style="margin-top:6px;line-height:1.5">${esc(exam.tagline || exam.description || "")}</p>
      </div>
      <div class="tc-meta" style="margin-top:auto">
        <span>${icon("list")} ${s.questions} questions</span>
        <span>${icon("clock")} ${s.minutes} min</span>
        ${last ? `<span style="color:var(--ok)">${icon("trending-up")} Last ${last.score.total}</span>` : ""}
      </div>
      <button class="btn btn-primary btn-block" data-start="${exam.id}">
        ${last ? "Retake" : "Start"} ${exam.type === "full" ? "test" : "practice"} ${icon("arrow-right")}
      </button>
    </article>`;
  }

  function attemptRow(a) {
    const v = Apex.scoring.verdict(a.score.total);
    const vColor = v.tone === "ok" ? "var(--ok)" : v.tone === "warn" ? "var(--warn)" : "var(--brand-600)";
    const sec = a.score.sections || {};
    const exam = Apex.bank.get(a.examId);
    // Same badges as the exam catalog card: "Version X" + region (US / Int'l).
    const verBadge = exam && exam.version ? `<span class="badge">Version ${esc(exam.version)}</span>` : "";
    const regBadge = exam && exam.region ? `<span class="badge badge-rw">${/^us/i.test(exam.region) ? "US" : "Int'l"}</span>` : "";
    const ic = exam ? (exam.rwOnly ? "book-open" : exam.mathOnly ? "calculator" : "file-text") : (a.type === "full" ? "file-text" : "compass");
    // R&W + Math scaled section scores (each 200–800) that add up to the total.
    const chip = (lab, val, hi) => val == null ? "" : `<div class="score-chip${hi ? " score-chip-total" : ""}">
        <div class="sc-num mono">${val}</div><div class="sc-lab">${lab}</div>
      </div>`;
    const chips = [
      chip("R&amp;W", sec.rw && sec.rw.scaled),
      chip("Math", sec.math && sec.math.scaled),
      chip("Total", a.score.total, true),
    ].filter(Boolean).join("");
    return `<a class="card test-card card-hover reveal" href="#/results/${a.id}" style="text-decoration:none;color:inherit;gap:14px">
      <div class="tc-top">
        <div class="feature-icon" style="background:var(--brand-50);color:var(--brand-600);width:42px;height:42px;border-radius:11px;margin:0">${icon(ic)}</div>
        <div class="row gap-2" style="flex-wrap:wrap;justify-content:flex-end">${verBadge}${regBadge}</div>
      </div>
      <div>
        <h3>${esc(a.examTitle)}</h3>
        <p class="small muted" style="margin-top:4px">${relTime(a.finishedAt)} · ${a.score.correctCount}/${a.score.totalCount} correct · <span style="color:${vColor};font-weight:600">${esc(v.label)}</span></p>
      </div>
      <div class="score-chips" style="margin-top:auto">${chips}</div>
    </a>`;
  }

  /* ============================================================= AUTH */
  async function auth(container) {
    let mode = "signin";
    const cloud = Apex.store.mode() === "supabase";
    const render = () => {
      container.innerHTML = `
      <div class="container" style="max-width:920px">
        <div class="grid grid-2" style="align-items:center;gap:48px">
          <div class="reveal" style="padding:20px 0">
            <div class="brand" style="margin-bottom:24px">
              <img class="brand-logo" src="${Apex.config.logo}" alt="${esc(Apex.config.brand)} logo" style="height:52px" />
              <span class="brand-name">Elite<b>X</b>SAT</span>
            </div>
            <h1 class="h1" style="margin-bottom:14px">${mode === "signin" ? "Welcome back." : "Start your climb to 1600."}</h1>
            <p class="lead">Track every practice test, see your estimated score, and pinpoint exactly which skills to work on next.</p>
            <ul class="stack gap-3" style="margin-top:26px">
              ${[["target", "Estimated 400–1600 scoring on every test"],
                 ["bar-chart", "Domain-by-domain performance breakdown"],
                 ["refresh", "Pick up unfinished tests right where you left off"]]
                .map(([i, t]) => `<li class="row gap-3"><span class="feature-icon fi-ok" style="width:38px;height:38px;border-radius:10px;margin:0">${icon(i)}</span><span>${t}</span></li>`).join("")}
            </ul>
          </div>
          <div class="card card-pad reveal d1" style="box-shadow:var(--shadow-lg)">
            <div class="seg" style="width:100%;margin-bottom:22px">
              <button class="${mode === "signin" ? "active" : ""}" data-mode="signin" style="flex:1">Sign in</button>
              <button class="${mode === "signup" ? "active" : ""}" data-mode="signup" style="flex:1">Create account</button>
            </div>
            <form data-form class="stack gap-3" novalidate>
              ${mode === "signup" ? `<div class="field"><label class="label" for="f-name">Full name</label>
                <input class="input" id="f-name" name="name" autocomplete="name" placeholder="Alex Rivera" required></div>` : ""}
              <div class="field"><label class="label" for="f-email">Email</label>
                <input class="input" id="f-email" name="email" type="email" autocomplete="email" placeholder="you@email.com" required></div>
              <div class="field"><label class="label" for="f-pass">Password</label>
                <input class="input" id="f-pass" name="password" type="password" autocomplete="${mode === "signin" ? "current-password" : "new-password"}" placeholder="At least 6 characters" required>
                ${mode === "signup" ? '<span class="hint">Use 6+ characters.</span>' : ""}</div>
              <div class="field-error hidden" data-err></div>
              <button class="btn btn-primary btn-lg btn-block" type="submit" data-submit>
                ${mode === "signin" ? "Sign in" : "Create account"} ${icon("arrow-right")}</button>
            </form>
            <button class="btn btn-ghost btn-block" data-demo style="margin-top:10px">${icon("sparkles")} Explore with a demo account</button>
            <button class="btn btn-ghost btn-block" data-guest style="margin-top:6px">Continue as guest ${icon("arrow-right")}</button>
            <p class="tiny faint text-center" style="margin-top:16px">
              ${cloud ? icon("shield", 'style="width:13px;height:13px;display:inline;vertical-align:-2px"') + " Secured by Supabase — synced across devices."
                       : icon("lock", 'style="width:13px;height:13px;display:inline;vertical-align:-2px"') + " Private local account — stored only on this device."}
            </p>
          </div>
        </div>
      </div>`;
      hydrate(container);
      wire();
    };

    const wire = () => {
      Apex.util.qsa("[data-mode]", container).forEach((b) =>
        b.addEventListener("click", () => { mode = b.dataset.mode; render(); }));
      const form = Apex.util.qs("[data-form]", container);
      const errEl = Apex.util.qs("[data-err]", container);
      const showErr = (m) => { errEl.textContent = m; errEl.classList.remove("hidden"); };
      const submitting = (btn, on) => { btn.disabled = on; btn.innerHTML = on ? '<span class="spinner"></span> Please wait…' : (mode === "signin" ? "Sign in " : "Create account ") + icon("arrow-right"); };

      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        errEl.classList.add("hidden");
        const data = Object.fromEntries(new FormData(form));
        const btn = Apex.util.qs("[data-submit]", container);
        submitting(btn, true);
        try {
          if (mode === "signin") await Apex.store.signIn(data);
          else await Apex.store.signUp(data);
          // auth listener in app.js handles the redirect
        } catch (err) { showErr(err.message || "Something went wrong."); submitting(btn, false); }
      });

      Apex.util.qs("[data-demo]", container).addEventListener("click", async () => {
        const creds = { name: "Demo Student", email: "demo@apex.test", password: "demo1234" };
        try { await Apex.store.signIn(creds); }
        catch { try { await Apex.store.signUp(creds); } catch (e) { Apex.ui.toast(e.message, "bad"); } }
      });
      Apex.util.qs("[data-guest]", container)?.addEventListener("click", () => Apex.store.signInGuest());
    };

    render();
  }

  /* ======================================================== DASHBOARD */
  async function dashboard(container) {
    const user = Apex.store.currentUser();
    const [stats, progress] = await Promise.all([Apex.store.getStats(), Apex.store.getProgress()]);
    const resumeExam = progress ? Apex.bank.get(progress.examId) : null;

    // weakest domains (need at least a few questions seen)
    const weak = Object.entries(stats.domains)
      .filter(([, d]) => d.total >= 2)
      .map(([name, d]) => ({ name, pct: Math.round((d.correct / d.total) * 100), section: d.section, ...d }))
      .sort((a, b) => a.pct - b.pct).slice(0, 3);

    const fulls = Apex.bank.byType("full");
    const drills = Apex.bank.byType("section");
    const lastByExam = {};
    stats.completed.forEach((a) => { if (!lastByExam[a.examId]) lastByExam[a.examId] = a; });

    const statCard = (label, value, sub, ic) => `
      <div class="card stat-card reveal">
        <div class="row between"><span class="label">${esc(label)}</span>${icon(ic, 'style="color:var(--faint);width:18px;height:18px"')}</div>
        <div class="value" data-count="${typeof value === "number" ? value : ""}">${typeof value === "number" ? "0" : esc(value)}</div>
        ${sub ? `<div class="tiny muted" style="margin-top:4px">${esc(sub)}</div>` : ""}
      </div>`;

    // Best & average scaled scores per scope (Overall = total, Verbal = R&W, Math),
    // across the attempts that actually include that section.
    const secStats = (key) => {
      const vals = stats.completed
        .map((a) => key === "total" ? a.score.total : (a.score.sections && a.score.sections[key] && a.score.sections[key].scaled))
        .filter((v) => typeof v === "number" && v > 0);
      if (!vals.length) return { best: 0, avg: 0 };
      return { best: Math.max.apply(null, vals), avg: Math.round(vals.reduce((s, v) => s + v, 0) / vals.length) };
    };
    const scoreCard = (label, key, ic) => {
      const s = secStats(key);
      return `<div class="card stat-card reveal">
        <div class="row between"><span class="label">${esc(label)}</span>${icon(ic, 'style="color:var(--faint);width:18px;height:18px"')}</div>
        <div class="sc-two">
          <div><div class="value" data-count="${s.best}">0</div><div class="tiny muted">Best</div></div>
          <div><div class="value sc-avg" data-count="${s.avg}">0</div><div class="tiny muted">Average</div></div>
        </div>
      </div>`;
    };

    container.innerHTML = `
    <div class="container">
      <div class="page-head reveal">
        <span class="eyebrow">${icon("bar-chart", 'style="width:14px;height:14px;display:inline;vertical-align:-2px"')} Your data</span>
        <h1 class="h1" style="margin-top:6px">Welcome back, ${esc((user.name || "there").split(" ")[0])}.</h1>
        <p class="lead">${stats.count ? "Here's how your Digital SAT prep is going." : "Take the Quick Diagnostic to estimate your starting score."}</p>
      </div>

      ${resumeExam ? `
      <div class="card card-pad reveal" style="background:linear-gradient(120deg,var(--brand-700),var(--brand-500));color:#fff;margin-bottom:24px;border:none">
        <div class="row between wrap gap-3">
          <div class="row gap-3">
            <div class="big-icon" style="width:54px;height:54px;border-radius:14px;margin:0;background:rgba(255,255,255,.18);color:#fff">${icon("refresh")}</div>
            <div><div style="font-weight:700;font-size:1.15rem">Resume “${esc(resumeExam.title)}”</div>
              <div class="small" style="opacity:.85">You have an unfinished test in progress.</div></div>
          </div>
          <div class="row gap-2">
            <button class="btn" style="background:rgba(255,255,255,.15);color:#fff;border:none" data-discard>Discard</button>
            <button class="btn" style="background:#fff;color:var(--brand-700)" data-resume>Resume test ${icon("arrow-right")}</button>
          </div>
        </div>
      </div>` : ""}

      <div class="grid grid-stats" style="margin-bottom:30px">
        ${scoreCard("Overall", "total", "trophy")}
        ${scoreCard("Verbal", "rw", "book-open")}
        ${scoreCard("Math", "math", "calculator")}
        ${statCard("Tests completed", stats.count, "keep the streak going", "file-text")}
        ${statCard("Time practiced", fmtDuration(stats.totalMinutes), "focused minutes", "clock")}
      </div>

      <div class="reveal">
        <div class="row between" style="margin-bottom:16px">
          <h2 class="h3">Recent activity</h2>
          ${stats.attempts.length > 6 ? `<a class="nav-link" href="#/account">History ${icon("arrow-right", 'style="width:15px;height:15px;display:inline;vertical-align:-2px"')}</a>` : ""}
        </div>
        ${stats.attempts.length
          ? `<div class="grid grid-3">${stats.attempts.slice(0, 6).map(attemptRow).join("")}</div>`
          : `<div class="card card-pad empty"><div class="big-icon">${icon("bar-chart")}</div><p class="muted">No tests yet. Start one from the <a href="#/tests" style="color:var(--brand-600);font-weight:600">Digital exams</a> page and your scores will appear here.</p></div>`}
      </div>
    </div>`;

    // wire dashboard-specific buttons
    const resumeBtn = Apex.util.qs("[data-resume]", container);
    if (resumeBtn) resumeBtn.addEventListener("click", () => Apex.app.resume());
    const discardBtn = Apex.util.qs("[data-discard]", container);
    if (discardBtn) discardBtn.addEventListener("click", async () => {
      if (await Apex.ui.confirm({ title: "Discard test?", message: "Your in-progress test will be permanently removed.", confirmText: "Discard", danger: true })) {
        await Apex.store.clearProgress(); Apex.app.go("#/data");
      }
    });
    hydrate(container);
  }

  /* =================================================== DIGITAL EXAMS (library) */
  // The "Digital SAT" section — a Reading-library-style grid of full exam
  // simulations, grouped by year and filterable by region (US / International).
  // Each exam is registered in assets/data/exams/*.js (type:"digital") and opens
  // in the timed engine (real per-module countdown + watermark).
  async function digitalExams(container) {
    const digital = Apex.bank.byType("digital");
    const samples = [].concat(Apex.bank.byType("diagnostic"), Apex.bank.byType("full"), Apex.bank.byType("section"));
    const stats = await Apex.store.getStats();
    const lastByExam = {};
    stats.completed.forEach((a) => { if (!lastByExam[a.examId]) lastByExam[a.examId] = a; });
    let region = "all";

    const regionTag = (r) => {
      if (!r) return "";
      const us = /^us/i.test(r);
      // both region badges use the same purple treatment (per user: color Int'l like US)
      return `<span class="badge badge-rw">${us ? "US" : "Int'l"}</span>`;
    };
    function dexCard(exam) {
      const last = lastByExam[exam.id];
      const scope = exam.rwOnly ? "Reading & Writing" : exam.mathOnly ? "Math only" : "Full test";
      const ic = exam.rwOnly ? "book-open" : exam.mathOnly ? "calculator" : "file-text";
      // Module 2 difficulty labels — e.g. "M2 Verbal Hard", "M2 Math Easy". Module 1 is not labelled.
      const m2 = (exam.sections || []).map((sec) => {
        const mods = (sec.modules || []).filter((m) => m.stage === 2);
        if (!mods.length) return "";
        const diff = [...new Set(mods.map((m) => (m.variant || "").toLowerCase()).filter(Boolean))]
          .map((v) => v.charAt(0).toUpperCase() + v.slice(1)).join("/");
        return `M2 ${sec.id === "math" ? "Math" : "Verbal"}${diff ? " " + diff : ""}`;
      }).filter(Boolean);
      return `<article class="card test-card card-hover reveal" data-start="${exam.id}" role="button" tabindex="0">
        <div class="tc-top">
          <div class="row gap-2 dex-badges">${exam.version ? `<span class="badge">Version ${esc(exam.version)}</span>` : ""}${regionTag(exam.region)}</div>
        </div>
        <div>
          <h3>${esc(exam.title)}</h3>
          <p class="small muted" style="margin-top:4px">${m2.length ? m2.map(esc).join("<br>") : esc(scope)}</p>
        </div>
        <button class="btn btn-primary btn-block" style="margin-top:auto" data-start="${exam.id}">${last ? "Retake" : "Start"} exam ${icon("arrow-right")}</button>
      </article>`;
    }

    container.innerHTML = `
    <div class="container">
      <div class="page-head reveal lib-head">
        <div class="lib-head-text">
          <span class="eyebrow">${icon("file-text", 'style="width:14px;height:14px;display:inline;vertical-align:-2px"')} Digital SAT</span>
          <h1 class="h1" style="margin-top:6px">Digital exams</h1>
          <p class="lead">Full Digital SAT simulations with a real per-module timer and instant scoring. Pick a form to begin — more are being added.</p>
        </div>
        <div class="pill-seg lib-head-filter" data-region>
          ${[["all", "All"], ["us", "US"], ["int", "Int'l"]].map(([v, l]) => `<button class="pill-opt${region === v ? " active" : ""}" data-v="${v}">${l}</button>`).join("")}
        </div>
      </div>
      <div data-cards></div>
    </div>`;

    const cardsEl = Apex.util.qs("[data-cards]", container);
    const renderCards = () => {
      const list = digital.filter((e) => region === "all" || (region === "us" ? /^us/i.test(e.region || "") : /^int/i.test(e.region || "")));
      const years = [...new Set(list.map((e) => e.year))].sort((a, b) => b - a);
      cardsEl.innerHTML = list.length ? years.map((y) => {
        const ex = list.filter((e) => e.year === y).sort((a, b) => (b.monthNum || 0) - (a.monthNum || 0) || String(a.region).localeCompare(String(b.region)) || String(a.version).localeCompare(String(b.version)));
        return `<section class="reveal" style="margin-bottom:32px">
          <h2 class="h3" style="margin-bottom:14px">${y}</h2>
          <div class="grid grid-5">${ex.map(dexCard).join("")}</div>
        </section>`;
      }).join("") : `<div class="empty card card-pad"><div class="big-icon">${icon("file-text")}</div><h2 class="h3">No exams in this view</h2><p class="muted">Add exam files in <code>assets/data/exams/</code> (one <code>Apex.bank.register</code> per form) plus a script tag in app.html.</p></div>`;
      Apex.util.revealInit(cardsEl);
    };
    Apex.ui.pillSeg(Apex.util.qs("[data-region]", container), (v) => { region = v; renderCards(); });
    renderCards();
    hydrate(container);
    Apex.app.setFocus(false);
  }

  /* =========================================================== RESULTS */
  async function results(container, params) {
    const a = await Apex.store.getAttempt(params.id);
    if (!a) { container.innerHTML = `<div class="container"><div class="empty card card-pad"><div class="big-icon">${icon("alert")}</div><h2 class="h3">Result not found</h2><p class="muted">This attempt may have been removed.</p><a class="btn btn-primary" href="#/data" style="margin-top:16px">Back to dashboard</a></div></div>`; return; }

    const sec = a.score.sections;
    const rw = sec.rw, math = sec.math;
    const incorrectTotal = a.score.totalCount - a.score.correctCount;
    const examName = Apex.bank.fullName(Apex.bank.get(a.examId)) || a.examTitle;   // e.g. "International Version A"

    // Official Digital SAT domain weightings, for the "Knowledge and Skills" panel.
    const KS = {
      rw: [
        ["Information and Ideas", "26% of test section, 12 - 14 questions"],
        ["Craft and Structure", "28% of test section, 13 - 15 questions"],
        ["Expression of Ideas", "20% of test section, 8 - 12 questions"],
        ["Standard English Conventions", "26% of test section, 11 - 15 questions"],
      ],
      math: [
        ["Algebra", "35% of test section, 13 - 15 questions"],
        ["Advanced Math", "35% of test section, 13 - 15 questions"],
        ["Problem-Solving and Data Analysis", "15% of test section, 5 - 7 questions"],
        ["Geometry and Trigonometry", "15% of test section, 5 - 7 questions"],
      ],
    };
    // our domain names use "&" (e.g. "Craft & Structure"); the CB labels use "and" — match by normalising.
    const normName = (s) => String(s || "").toLowerCase().replace(/&/g, "and").replace(/\s+/g, " ").trim();
    const domByNorm = {};
    Object.entries(a.score.domains).forEach(([name, d]) => { domByNorm[normName(name)] = d; });
    const ksCol = (sid) => KS[sid].map(([name, metaTxt]) => {
      const d = domByNorm[normName(name)];
      const correct = d ? d.correct : 0, total = d ? d.total : 0;
      const boxes = total > 0
        ? Array.from({ length: total }, (_, i) => `<span class="sr-box ${i < correct ? "fill" : ""}"></span>`).join("")
        : `<span class="sr-dom-none">Not on this form</span>`;
      return `<div class="sr-dom">
        <div class="sr-dom-name">${esc(name)}</div>
        <div class="sr-dom-meta">(${esc(metaTxt)})</div>
        <div class="sr-boxes">${boxes}${total > 0 ? `<span class="sr-dom-frac">${correct}/${total}</span>` : ""}</div>
      </div>`;
    }).join("");

    const secDetail = (label, s) => s ? `
      <div class="sr-mini">
        <div class="sr-mini-head">${label}</div>
        <div class="sr-mini-row"><span class="sr-mini-num">${s.raw}</span><span class="sr-mini-lab">Correct<br>Answers</span></div>
        <div class="sr-mini-tot">Total Questions: ${s.total}<br>Incorrect Answers: ${s.total - s.raw}</div>
      </div>` : "";

    // Group the answer key by (section, MODULE) in presentation order, numbering each module from 1
    // (like the real test). cellMeta maps each a.order index → its module label + in-module number,
    // shared with the review list so the two stay consistent.
    const SEC_NAME = (sid) => sid === "rw" ? "Reading and Writing" : sid === "math" ? "Math" : sid;
    const SEC_SHORT = (sid) => sid === "rw" ? "R&W" : sid === "math" ? "Math" : sid;
    const akeyGroups = [];
    const cellMeta = new Array(a.order.length);
    (() => {
      const byKey = {}, modCount = {};
      a.order.forEach((o, i) => {
        const key = o.section + "|" + o.moduleId;
        let g = byKey[key];
        if (!g) {
          modCount[o.section] = (modCount[o.section] || 0) + 1;
          g = byKey[key] = { sectionId: o.section, ordinal: modCount[o.section], label: SEC_NAME(o.section) + " — Module " + modCount[o.section], items: [] };
          akeyGroups.push(g);
        }
        const localNum = g.items.length + 1;
        g.items.push({ o, i, localNum });
        cellMeta[i] = { localNum, ordinal: g.ordinal, sectionId: o.section };
      });
    })();
    // color-coded answer-key cell: shows the CORRECT answer, green if the student got it, red if not.
    const akeyCell = (o, i, num) => {
      const q = Apex.bank.question(o.qid); const r = a.score.results[o.qid];
      if (!q) return "";
      const corr = q.type === "grid" ? (Array.isArray(q.answer) ? q.answer[0] : q.answer) : q.answer;
      // color only: green = correct, red = answered-wrong, grey = skipped (no status text)
      const cls = r.correct ? "ok" : (r.answered ? "bad" : "skip");
      const state = r.correct ? "correct" : (r.answered ? "incorrect" : "skipped");
      return `<button class="sr-ak ${cls}" data-rev="${esc(o.qid)}" aria-label="Question ${num}, correct answer ${esc(String(corr))}, ${state}">
        <span class="sr-ak-n">${num}</span>
        <span class="sr-ak-ans">${esc(String(corr))}</span>
      </button>`;
    };

    container.innerHTML = `
    <div class="container sr-wrap">
      <div class="row between wrap gap-2 reveal" style="margin-bottom:12px">
        <a class="nav-link" href="#/data" style="display:inline-flex">${icon("chevron-left")} Dashboard</a>
        <div class="row gap-2">
          <button class="btn btn-outline btn-sm" data-start="${a.examId}">${icon("refresh")} Retake</button>
          <button class="btn btn-primary btn-sm" data-pdf-download>${icon("file-text")} Download PDF</button>
        </div>
      </div>

      <div data-pdf>
        <div class="sr-head reveal">
          <h1 class="sr-title">Your Practice<br>Score Report</h1>
          <p class="sr-disclaimer">This practice score report is provided by <b>EliteXSAT</b> for your personal use to help you prepare for test day. These are estimated scores — they are not official and cannot be sent to colleges or scholarship programs.</p>
        </div>

        <div class="sr-card reveal">
          <div class="sr-card-head">
            <h2 class="sr-exam">${esc(examName)}</h2>
            <span class="sr-date">${fmtDate(a.finishedAt)}</span>
          </div>
          <div class="sr-grid">
            <div class="sr-col">
              <div class="sr-label">TOTAL SCORE</div>
              <div class="sr-bignum" data-count="${a.score.total}">0</div>
              <div class="sr-range"><b>Score Range:</b> 400-1600</div>
              <div class="sr-rangenote"><b>Score Range:</b> This range reflects the minimum and maximum total score you can get with this assessment.</div>
            </div>
            <div class="sr-col sr-bord">
              <div class="sr-label">SECTION SCORES</div>
              ${rw ? `<div class="sr-sec"><div class="sr-sub">Reading and Writing</div><div class="sr-sec-row"><span class="sr-bignum sr-bignum-sm" data-count="${rw.scaled}">0</span><span class="sr-range"><b>Score Range:</b><br>200-800</span></div></div>` : ""}
              ${math ? `<div class="sr-sec"><div class="sr-sub">Math</div><div class="sr-sec-row"><span class="sr-bignum sr-bignum-sm" data-count="${math.scaled}">0</span><span class="sr-range"><b>Score Range:</b><br>200-800</span></div></div>` : ""}
            </div>
            <div class="sr-col sr-bord">
              <div class="sr-label">SCORE DETAILS</div>
              <div class="sr-sub">Questions Overview</div>
              <div class="sr-sec-row"><span class="sr-bignum sr-bignum-sm" data-count="${a.score.correctCount}">0</span><span class="sr-mini-lab">Correct<br>Answers</span><span class="sr-mini-tot" style="margin-left:auto">Total Questions: ${a.score.totalCount}<br>Total Incorrect: ${incorrectTotal}</span></div>
              <div class="sr-detail-rule"></div>
              <div class="sr-two">${secDetail("Reading and Writing", rw)}${secDetail("Math", math)}</div>
            </div>
          </div>
        </div>

        <div class="sr-ks reveal">
          <h2 class="sr-ks-title">KNOWLEDGE AND SKILLS</h2>
          <p class="sr-ks-sub">View your performance across the ${(rw && math) ? "8" : "4"} content domains measured on the SAT.</p>
          <div class="sr-ks-grid">
            ${rw ? `<div class="sr-ks-col"><div class="sr-ks-h">Reading and Writing</div>${ksCol("rw")}</div>` : ""}
            ${math ? `<div class="sr-ks-col"><div class="sr-ks-h">Math</div>${ksCol("math")}</div>` : ""}
          </div>
        </div>

        <div class="sr-card sr-akey reveal">
          <div class="sr-akey-head">
            <h2 class="sr-ks-title" style="margin:0">Answer key</h2>
            <div class="sr-legend"><span class="sr-leg ok">${icon("check")} Correct</span><span class="sr-leg bad">${icon("x")} Incorrect</span><span class="sr-leg skip"><span class="leg-dot" style="background:var(--faint)"></span> Skipped</span></div>
          </div>
          ${akeyGroups.map((g) => `<div class="sr-akey-sec"><div class="sr-akey-label">${esc(g.label)}</div><div class="sr-akey-grid">${g.items.map(({ o, i, localNum }) => akeyCell(o, i, localNum)).join("")}</div></div>`).join("")}
        </div>
      </div>

      <div class="card card-pad reveal" style="margin-top:24px">
        <div class="row between wrap gap-2" style="margin-bottom:18px">
          <h2 class="h3">Answers &amp; explanations</h2>
          <div class="pill-seg" data-filter>
            <button class="pill-opt active" data-v="all">All</button>
            <button class="pill-opt" data-v="incorrect">Incorrect</button>
            <button class="pill-opt" data-v="marked">Marked</button>
          </div>
        </div>
        <div data-review></div>
      </div>

      <p class="tiny faint reveal" style="margin-top:16px">Scores are estimates based on percentage correct, not official equated scores.${a.score.totalCount < 40 ? " This is a condensed form — fuller tests give a more reliable estimate." : ""}</p>
    </div>`;

    const reviewEl = Apex.util.qs("[data-review]", container);
    const renderReview = (filter) => {
      const rows = a.order.map((o, i) => ({ o, i })).filter(({ o }) => {
        const r = a.score.results[o.qid];
        if (filter === "incorrect") return !r.correct;
        if (filter === "marked") return a.flags.includes(o.qid);
        return true;
      });
      if (!rows.length) { reviewEl.innerHTML = `<p class="muted" style="padding:20px 0">Nothing to show here — great work!</p>`; return; }
      reviewEl.innerHTML = rows.map(({ o, i }) => {
        const q = Apex.bank.question(o.qid); if (!q) return "";
        const r = a.score.results[o.qid];
        const mark = r.correct ? "ok" : r.answered ? "bad" : "skip";
        const markIcon = r.correct ? "check" : r.answered ? "x" : "pause";
        const given = r.given;
        const correctText = q.type === "grid" ? (Array.isArray(q.answer) ? q.answer[0] : q.answer)
          : (q.options.find((op) => op.id === q.answer) ? `${q.answer}. ${textOf(q.options.find((op) => op.id === q.answer))}` : q.answer);
        const givenText = !r.answered ? "—" : q.type === "grid" ? given
          : (q.options.find((op) => op.id === given) ? `${given}. ${textOf(q.options.find((op) => op.id === given))}` : given);
        return `<details class="review-item" id="rev-${esc(o.qid)}" ${filter === "incorrect" ? "open" : ""}>
          <summary class="review-q" style="cursor:pointer;list-style:none">
            <span class="review-mark ${mark}">${icon(markIcon)}</span>
            <span style="flex:1">
              <span class="tiny muted">${cellMeta[i] ? `${SEC_SHORT(cellMeta[i].sectionId)} · Module ${cellMeta[i].ordinal} · Q${cellMeta[i].localNum}` : `Q${i + 1}`} · ${esc(q.skill || q.domain || "")} ${(a.flags || []).includes(o.qid) ? icon("flag", 'style="width:13px;height:13px;display:inline;color:var(--warn);vertical-align:-2px"') : ""}</span>
              <div style="font-weight:500;margin-top:2px">${stripFirst(q.prompt)}</div>
              <div class="tiny" style="margin-top:6px">
                <span style="color:${r.correct ? "var(--ok)" : "var(--bad)"}">Your answer: ${esc(givenText)}</span>
                ${!r.correct ? ` &nbsp;·&nbsp; <span style="color:var(--ok)">Correct: ${esc(correctText)}</span>` : ""}
              </div>
            </span>
            ${icon("chevron-down", 'style="color:var(--faint);align-self:center"')}
          </summary>
          <div class="explain" style="margin-left:38px">
            ${q.passage ? `<div class="passage small" style="margin-bottom:12px">${q.passage}</div>` : ""}
            <h4>Explanation</h4><p>${q.explanation || ""}</p>
          </div>
        </details>`;
      }).join("");
    };
    renderReview("all");
    let curFilter = "all";
    Apex.ui.pillSeg(Apex.util.qs("[data-filter]", container), (v) => { curFilter = v; renderReview(v); });

    // Answer-key tile → open the full question in an 80%-screen popup: prompt, figure, every
    // choice with the correct one green and the student's wrong pick red, plus the explanation.
    // Prev/Next flip through questions instantly. Delegated from the whole .sr-akey card.
    const reviewHTML = (i) => {
      const o = a.order[i]; const q = o && Apex.bank.question(o.qid); const r = o && a.score.results[o.qid];
      if (!q || !r) return `<p class="muted">Question unavailable.</p>`;
      const cm = cellMeta[i];
      const metaLine = cm ? `${SEC_NAME(cm.sectionId)} · Module ${cm.ordinal} · Question ${cm.localNum}` : `Question ${i + 1}`;
      const stateLab = r.correct ? "Correct" : r.answered ? "Incorrect" : "Skipped";
      const stateCol = r.correct ? "var(--ok)" : r.answered ? "var(--bad)" : "var(--muted-2)";
      let opts;
      if (q.type === "grid") {
        const corr = Array.isArray(q.answer) ? q.answer.join(" or ") : q.answer;
        opts = `<div class="rv-opts">
          <div class="rv-opt ok"><span class="rv-badge">${icon("check")}</span><div class="rv-opt-txt"><div class="rv-lab">Correct answer</div><div class="mono rv-grid-ans">${esc(String(corr))}</div></div></div>
          <div class="rv-opt ${r.correct ? "ok" : r.answered ? "bad" : ""}"><span class="rv-badge">${r.correct ? icon("check") : r.answered ? icon("x") : "—"}</span><div class="rv-opt-txt"><div class="rv-lab">Your answer</div><div class="mono rv-grid-ans">${r.answered ? esc(String(r.given)) : "Skipped"}</div></div></div>
        </div>`;
      } else {
        opts = `<div class="rv-opts">${(q.options || []).map((op) => {
          const isC = String(op.id).toUpperCase() === String(q.answer).toUpperCase();
          const isG = r.given != null && String(op.id).toUpperCase() === String(r.given).toUpperCase();
          const cls = isC ? "ok" : isG ? "bad" : "";
          const tag = isC ? (isG ? "Correct · your answer" : "Correct answer") : isG ? "Your answer" : "";
          const badge = isC ? icon("check") : isG ? icon("x") : esc(op.id);
          return `<div class="rv-opt ${cls}"><span class="rv-badge">${badge}</span><div class="rv-opt-txt">${op.text}</div>${tag ? `<span class="rv-tag ${isC ? "ok" : "bad"}">${esc(tag)}</span>` : ""}</div>`;
        }).join("")}</div>`;
      }
      return `<div class="rv-meta"><span>${esc(metaLine)}</span><span class="rv-state" style="color:${stateCol}">${stateLab}</span>${q.skill ? `<span>${esc(q.skill)}</span>` : ""}</div>
        ${q.passage ? `<div class="rv-passage">${q.passage}</div>` : ""}
        <div class="rv-prompt">${q.prompt}</div>
        ${opts}
        <div class="rv-explain"><h4>Explanation</h4>
          ${q.explanation ? `<div class="rv-exp-summary">${q.explanation}</div>` : ""}
          ${q.choiceExpl && q.type !== "grid" ? `<div class="rv-why"><div class="rv-why-title">Why each answer</div>${(q.options || []).map((op) => {
            const why = q.choiceExpl[op.id]; if (!why) return "";
            const isC = String(op.id).toUpperCase() === String(q.answer).toUpperCase();
            return `<div class="rv-why-row ${isC ? "ok" : "bad"}"><span class="rv-why-badge">${isC ? icon("check") : icon("x")} ${esc(op.id)}</span><span class="rv-why-txt">${why}</span></div>`;
          }).join("")}</div>` : ""}
          ${!q.explanation && !q.choiceExpl ? `<div class="muted">No explanation available for this question.</div>` : ""}
        </div>`;
    };
    // Prev/Next stay WITHIN the clicked question's module (R&W M1/M2 = 27, Math M1/M2 = 22),
    // like the real test — not one long 1–98 list. akeyGroups holds each module's items in order.
    let rvModal = null, rvGroup = null, rvPos = 0;
    const rvUpdate = () => {
      if (!rvModal || !rvGroup) return;
      const items = rvGroup.items;
      rvPos = Math.max(0, Math.min(items.length - 1, rvPos));
      const gi = items[rvPos].i;
      const bodyEl = rvModal.root.querySelector("[data-rv-body]");
      if (bodyEl) { bodyEl.innerHTML = reviewHTML(gi); if (bodyEl.parentElement) bodyEl.parentElement.scrollTop = 0; }
      const cnt = rvModal.root.querySelector("[data-rv-count]"); if (cnt) cnt.textContent = `${SEC_SHORT(rvGroup.sectionId)} M${rvGroup.ordinal} · Question ${rvPos + 1} of ${items.length}`;
      const prev = rvModal.root.querySelector("[data-rv-prev]"); if (prev) prev.disabled = rvPos === 0;
      const next = rvModal.root.querySelector("[data-rv-next]"); if (next) next.disabled = rvPos === items.length - 1;
    };
    const openReview = (i) => {
      rvGroup = akeyGroups.find((g) => g.items.some((it) => it.i === i)) || akeyGroups[0];
      rvPos = rvGroup ? rvGroup.items.findIndex((it) => it.i === i) : 0;
      rvModal = Apex.ui.modal({
        title: "Question review",
        body: `<div data-rv-body></div>`,
        actions: `<button class="btn btn-outline btn-sm" data-rv-prev>${icon("chevron-left")} Previous</button>
          <span class="rv-count tiny muted" data-rv-count></span>
          <button class="btn btn-primary btn-sm" data-rv-next>Next ${icon("chevron-right")}</button>`,
        dismissible: true,
      });
      const mEl = rvModal.root.querySelector(".modal"); if (mEl) mEl.classList.add("modal-review");
      const prevBtn = rvModal.root.querySelector("[data-rv-prev]"); if (prevBtn && prevBtn.parentElement) prevBtn.parentElement.style.justifyContent = "space-between";
      rvModal.root.addEventListener("click", (e) => {
        if (e.target.closest("[data-rv-prev]")) { rvPos--; rvUpdate(); }
        else if (e.target.closest("[data-rv-next]")) { rvPos++; rvUpdate(); }
      });
      rvUpdate();
    };
    const akeyGrid = Apex.util.qs(".sr-akey", container);
    if (akeyGrid) akeyGrid.addEventListener("click", (e) => {
      const cell = e.target.closest("[data-rev]"); if (!cell) return;
      const idx = a.order.findIndex((o) => o.qid === cell.dataset.rev);
      if (idx >= 0) openReview(idx);
    });

    // Download the score report (the [data-pdf] block) as a PDF via html2pdf (shared with the reader).
    const dl = Apex.util.qs("[data-pdf-download]", container);
    if (dl) dl.addEventListener("click", async () => {
      Apex.ui.toast("Preparing PDF…");
      try { await ensureHtml2pdf(); } catch { return Apex.ui.toast("Couldn't load the PDF library (offline?).", "bad"); }
      const node = Apex.util.qs("[data-pdf]", container);
      const name = (examName || "score-report").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
      window.html2pdf().set({ margin: 10, filename: name + "-score-report.pdf", html2canvas: { scale: 2, backgroundColor: "#ffffff" }, jsPDF: { unit: "pt", format: "a4" }, pagebreak: { mode: ["css", "legacy"] } }).from(node).save();
    });

    hydrate(container);
  }

  const textOf = (opt) => (opt ? opt.text.replace(/<[^>]+>/g, "") : "");
  const stripFirst = (html) => html; // prompts are short; keep as-is

  /* =========================================================== PROFILE */
  async function profile(container) {
    const user = Apex.store.currentUser();
    const cloud = Apex.store.mode() === "supabase";
    container.innerHTML = `
    <div class="container" style="max-width:760px">
      <div class="page-head reveal"><span class="eyebrow">Account</span><h1 class="h1" style="margin-top:6px">Your profile</h1></div>
      <div class="card card-pad reveal" style="margin-bottom:22px">
        <div class="row gap-3" style="margin-bottom:24px">
          <div class="avatar avatar-lg">${esc(initials(user.name))}</div>
          <div><div style="font-weight:700;font-size:1.2rem">${esc(user.name)}</div><div class="muted small">${esc(user.email)}</div></div>
          <span class="badge ${cloud ? "badge-ok" : "badge-brand"}" style="margin-left:auto">${cloud ? icon("shield") + " Cloud sync" : icon("lock") + " Local"}</span>
        </div>
        <form data-pform class="stack gap-3">
          <div class="field"><label class="label" for="p-name">Display name</label>
            <input class="input" id="p-name" name="name" value="${esc(user.name)}"></div>
          <div class="field"><label class="label" for="p-target">Target score: <b data-tval>${user.targetScore}</b></label>
            <input type="range" id="p-target" name="targetScore" min="400" max="1600" step="10" value="${user.targetScore}" style="accent-color:var(--brand-600)"></div>
          <div><button class="btn btn-primary" type="submit">${icon("check")} Save changes</button></div>
        </form>
      </div>
      <div class="card card-pad reveal" style="margin-bottom:22px">
        <div class="row between wrap gap-3">
          <div><h3 class="h3" style="margin-bottom:4px">Appearance</h3>
          <p class="muted small">Follow your device, or pick a look.</p></div>
          <div class="pill-seg" data-themeseg>
            ${[["system", "monitor", "System"], ["light", "sun", "Light"], ["dark", "moon", "Dark"]].map(([v, ic, lab]) => `<button class="pill-opt${Apex.theme.pref() === v ? " active" : ""}" data-v="${v}">${icon(ic)} ${lab}</button>`).join("")}
          </div>
        </div>
      </div>
      <div class="card card-pad reveal">
        <h3 class="h3" style="margin-bottom:6px">Data &amp; session</h3>
        <p class="muted small" style="margin-bottom:16px">${cloud ? "Your data is stored securely in your Supabase project and synced across devices." : "Your account and progress are stored only in this browser."}</p>
        <div class="row gap-2 wrap">
          <button class="btn btn-outline" data-signout>${icon("log-out")} Sign out</button>
          <button class="btn btn-outline" data-export>${icon("file-text")} Export my data</button>
          ${(Apex.config && Apex.config.adminEmail && (user.email || "").toLowerCase() === Apex.config.adminEmail.toLowerCase()) ? `<a class="btn btn-primary" href="#/reports">${icon("flag")} Problem reports</a>` : ""}
          <button class="btn btn-danger" data-clear style="margin-left:auto">${icon("alert")} Delete all my results</button>
        </div>
      </div>
    </div>`;

    const form = Apex.util.qs("[data-pform]", container);
    const tval = Apex.util.qs("[data-tval]", container);
    form.targetScore.addEventListener("input", (e) => { tval.textContent = e.target.value; });
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      await Apex.store.updateProfile({ name: form.name.value.trim(), targetScore: +form.targetScore.value });
      Apex.ui.toast("Profile saved.", "ok");
    });
    Apex.util.qs("[data-signout]", container).addEventListener("click", () => Apex.store.signOut());
    Apex.util.qs("[data-export]", container).addEventListener("click", async () => {
      const data = { user, attempts: await Apex.store.listAttempts() };
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob); link.download = "apex-sat-data.json"; link.click();
    });
    Apex.util.qs("[data-clear]", container).addEventListener("click", async () => {
      if (await Apex.ui.confirm({ title: "Delete all results?", message: "Every saved attempt will be permanently removed. This cannot be undone.", confirmText: "Delete everything", danger: true })) {
        const list = await Apex.store.listAttempts();
        for (const at of list) await Apex.store.deleteAttempt(at.id);
        await Apex.store.clearProgress();
        Apex.ui.toast("All results deleted.", "ok"); Apex.app.go("#/data");
      }
    });
    Apex.ui.pillSeg(Apex.util.qs("[data-themeseg]", container), (v) => Apex.theme.set(v));
    hydrate(container);
  }

  /* ===================================================== PRACTICE RUNNER */
  /* Single-question, instant-feedback practice used by Question Bank,
     Shuffled Practice, and Reading. Not timed, not saved as a formal test. */
  function runPractice(container, opts) {
    const list = opts.questions.slice();
    let i = 0, correct = 0, seen = 0;

    const head = (extra) => `
      <div class="container" style="max-width:880px">
        <div class="runner-bar reveal">
          <a class="btn btn-ghost btn-sm" href="${opts.returnHash || "#/bank"}">${icon("chevron-left")} Exit</a>
          <div class="bar"><span style="width:${Math.round((seen / list.length) * 100)}%"></span></div>
          <span class="small muted mono">${Math.min(seen + 1, list.length)}/${list.length}</span>
          <span class="badge badge-ok">${icon("check")} ${correct}</span>
        </div>${extra}</div>`;

    function renderQ() {
      const q = list[i];
      const sec = q.section === "rw" ? "rw" : "math";
      const passage = q.passage ? `<div class="passage" style="margin-bottom:18px">${q.passage}</div>` : "";
      let answer;
      if (q.type === "grid") {
        answer = `<input class="input grid-in" data-grid type="text" placeholder="Your answer" autocomplete="off" style="max-width:280px;font-size:1.3rem;font-weight:600;text-align:center" />`;
      } else {
        answer = `<div class="choices">${q.options.map((o) => `
          <button class="choice" data-opt="${o.id}"><span class="ch-key">${o.id}</span><span class="ch-text">${o.text}</span></button>`).join("")}</div>`;
      }
      container.innerHTML = head(`
        <div class="card practice-card runner reveal">
          <div class="q-head">
            <span class="badge ${sec === "rw" ? "badge-rw" : "badge-math"}">${esc(q.skill || q.domain || "")}</span>
            <span class="badge" style="margin-left:auto">${esc((q.difficulty || "").toUpperCase())}</span>
          </div>
          ${passage}
          <div class="q-prompt ${q.passage ? "read" : ""}">${q.prompt}</div>
          ${answer}
          <div data-fb></div>
          <div class="row gap-2" style="margin-top:22px;justify-content:flex-end">
            <button class="btn btn-primary" data-check disabled>Check answer</button>
            <button class="btn btn-primary hidden" data-next>${i === list.length - 1 ? "Finish" : "Next"} ${icon("arrow-right")}</button>
          </div>
        </div>`);
      wireQ(q);
      hydrate(container);
    }

    function wireQ(q) {
      const checkBtn = Apex.util.qs("[data-check]", container);
      let chosen = null;
      if (q.type === "grid") {
        const inp = Apex.util.qs("[data-grid]", container);
        inp.addEventListener("input", () => { chosen = inp.value.trim(); checkBtn.disabled = !chosen; });
      } else {
        Apex.util.qsa(".choice", container).forEach((c) => c.addEventListener("click", () => {
          chosen = c.dataset.opt;
          Apex.util.qsa(".choice", container).forEach((x) => x.classList.toggle("selected", x === c));
          checkBtn.disabled = false;
        }));
      }
      checkBtn.addEventListener("click", () => {
        const ok = Apex.scoring.isCorrect(q, chosen);
        seen++; if (ok) correct++;
        if (q.type !== "grid") {
          Apex.util.qsa(".choice", container).forEach((c) => {
            c.style.pointerEvents = "none";
            if (c.dataset.opt === q.answer) c.classList.add("correct");
            else if (c.dataset.opt === chosen) c.classList.add("wrong");
          });
        } else {
          Apex.util.qs("[data-grid]", container).disabled = true;
        }
        const ans = q.type === "grid" ? (Array.isArray(q.answer) ? q.answer[0] : q.answer) : q.answer;
        Apex.util.qs("[data-fb]", container).innerHTML = `
          <div class="feedback ${ok ? "good" : "bad"}">
            <h4>${icon(ok ? "check-circle" : "x-circle")} ${ok ? "Correct!" : "Not quite"}${ok ? "" : ` — answer: <b>${esc(ans)}</b>`}</h4>
            <p>${q.explanation || ""}</p>
          </div>`;
        checkBtn.classList.add("hidden");
        const nextBtn = Apex.util.qs("[data-next]", container);
        nextBtn.classList.remove("hidden"); nextBtn.focus();
        nextBtn.addEventListener("click", () => { i++; if (i >= list.length) renderSummary(); else renderQ(); });
      });
    }

    function renderSummary() {
      const pct = Math.round((correct / list.length) * 100);
      container.innerHTML = `
      <div class="container" style="max-width:620px">
        <div class="card card-pad text-center reveal" style="margin-top:20px">
          <div class="big-icon" style="background:var(--brand-50);color:var(--brand-600)">${icon("trophy")}</div>
          <h2 class="h2">Practice complete</h2>
          <p class="lead" style="margin:10px 0 18px">You got <b>${correct}</b> of <b>${list.length}</b> correct.</p>
          ${ring(pct, 100, "accuracy", "var(--brand-600)")}
          <div class="row gap-2 center" style="margin-top:24px">
            <button class="btn btn-outline" data-again>${icon("refresh")} Practice again</button>
            <a class="btn btn-primary" href="${opts.returnHash || "#/bank"}">Done ${icon("arrow-right")}</a>
          </div>
        </div>
      </div>`;
      Apex.util.qs("[data-again]", container).addEventListener("click", () => { i = 0; correct = 0; seen = 0; renderQ(); });
      hydrate(container);
    }

    if (!list.length) {
      container.innerHTML = `<div class="container"><div class="empty card card-pad"><div class="big-icon">${icon("layers")}</div><h2 class="h3">No questions here yet</h2><p class="muted">Add more to the bank to practice this set.</p><a class="btn btn-primary" href="${opts.returnHash || "#/bank"}" style="margin-top:14px">Back</a></div></div>`;
      return;
    }
    renderQ();
  }

  /* helper: every question in the bank, flattened */
  function allQuestions() {
    const out = [];
    Apex.bank.list().forEach((ex) => Apex.bank.flatQuestions(ex).forEach((q) => out.push(q)));
    return out;
  }
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  /* ====================================================== QUESTION BANK */
  // Official Digital SAT blueprint (domains → skills). Template only for now —
  // counts are the College Board section targets; questions get wired in later.
  const SAT_BLUEPRINT = {
    rw: { label: "Reading & Writing", total: 2000, accent: "var(--rw)", domains: [
      { name: "Information & Ideas", total: 500, skills: [["Central Ideas & Details", 167], ["Inferences", 167], ["Command of Evidence", 166]] },
      { name: "Craft & Structure", total: 500, skills: [["Words in Context", 167], ["Text Structure & Purpose", 167], ["Cross-Text Connections", 166]] },
      { name: "Expression of Ideas", total: 500, skills: [["Rhetorical Synthesis", 250], ["Transitions", 250]] },
      { name: "Standard English Conventions", total: 500, skills: [["Boundaries", 250], ["Form, Structure & Sense", 250]] },
    ] },
    math: { label: "Math", total: 2000, accent: "var(--math)", domains: [
      { name: "Algebra", total: 700, skills: [["Linear Equations in One Variable", 140], ["Linear Functions", 140], ["Linear Equations in Two Variables", 140], ["Systems of Two Linear Equations", 140], ["Linear Inequalities", 140]] },
      { name: "Advanced Math", total: 700, skills: [["Nonlinear Functions", 234], ["Nonlinear Equations & Systems", 233], ["Equivalent Expressions", 233]] },
      { name: "Problem-Solving & Data Analysis", total: 400, skills: [["Ratios, Rates & Proportions", 58], ["Percentages", 57], ["One-Variable Data", 57], ["Two-Variable Data", 57], ["Probability", 57], ["Inference & Margin of Error", 57], ["Evaluating Statistical Claims", 57]] },
      { name: "Geometry & Trigonometry", total: 200, skills: [["Area & Volume", 50], ["Lines, Angles & Triangles", 50], ["Right Triangles & Trigonometry", 50], ["Circles", 50]] },
    ] },
  };

  // Seed questions for the bank — only Information & Ideas for now (reference/template).
  // Keyed by domain name; add more arrays here (or new domains) to grow the bank.
  const BANK_QUESTIONS = {
    "Information & Ideas": [
      {
        id: "qb-ii-1",
        domain: "Information & Ideas",
        skill: "Central Ideas & Details",
        difficulty: "easy",
        passage: "<p>Researchers and conservationists stress that biodiversity loss due to invasive species is ______. For example, people can take simple steps such as washing their footwear after travel to avoid introducing potentially invasive organisms into new environments.</p>",
        prompt: "Which choice completes the text with the most logical and precise word or phrase?",
        options: [
          { id: "A", text: "preventable" },
          { id: "B", text: "undeniable" },
          { id: "C", text: "common" },
          { id: "D", text: "concerning" },
        ],
        answer: "A",
        explanation: "The example — simple steps people can take to avoid introducing invasive organisms — shows this kind of biodiversity loss can be stopped, so <b>preventable</b> is the most logical choice. “Undeniable,” “common,” and “concerning” may describe the problem but ignore the sentence's point that action can avert it.",
      },
    ],
    "Craft & Structure": [
      {
        id: "qb-2305-rw-1",
        domain: "Craft & Structure",
        skill: "Words in Context",
        difficulty: "medium",
        source: "2023 May (Digital) · RW Q1",
        passage: "<p>The following text is from John Matheus's 1925 novel <i>Fog</i>. The story happens in a city where heavy fog has set in.</p><p>The little conductor stood on tiptoe in an effort to keep one hand on the signal rope, craning his neck in a vain and dissatisfied endeavor to pierce the miasma of the fog. The motorman chafed in his box, thinking of the drudging lot of the laboring man. He <u>registered</u> discontent.</p>",
        prompt: "As used in the text, what does the word “registered” most nearly mean?",
        options: [
          { id: "A", text: "enrolled" },
          { id: "B", text: "valued" },
          { id: "C", text: "disregarded" },
          { id: "D", text: "displayed" },
        ],
        answer: "D",
        explanation: "The motorman “chafed” and brooded over the hard lot of the laboring man, so he outwardly <b>displayed</b> — showed — his discontent. “Enrolled” and “valued” don't fit showing a feeling, and “disregarded” is the opposite of expressing it.",
      },
    ],
  };
  const bankQuestionsFor = (domain, skill) => {
    const list = BANK_QUESTIONS[domain] || [];
    return skill ? list.filter((q) => q.skill === skill) : list.slice();
  };

  async function questionBank(container) {
    const col = (sid) => {
      const s = SAT_BLUEPRINT[sid];
      const domains = s.domains.map((d) => `
        <div class="qb-domain">
          <button class="qb-domain-head" type="button" data-run="${sid}|${esc(d.name)}|">
            <span class="qb-domain-name">${esc(d.name)}</span>
            <span class="qb-domain-count">${d.total}</span>
            <span class="qb-go">${icon("chevron-right")}</span>
          </button>
          <div class="qb-skills-in">
            ${d.skills.map(([name, n]) => `<button class="qb-skill" type="button" data-run="${sid}|${esc(d.name)}|${esc(name)}"><span class="qb-skill-name">${esc(name)}</span><span class="qb-skill-count">${n}</span><span class="qb-go">${icon("chevron-right")}</span></button>`).join("")}
          </div>
        </div>`).join("");
      return `
        <section class="qb-col qb-${sid} reveal" style="--accent:${s.accent}">
          <header class="qb-head">
            <div class="qb-head-text"><h2 class="qb-title">${esc(s.label)}</h2><span class="qb-total">${s.total.toLocaleString()} questions</span></div>
            <button class="btn btn-primary btn-sm qb-start" data-run="${sid}||">${icon("play")} Start</button>
          </header>
          <div class="qb-domains">${domains}</div>
        </section>`;
    };
    container.innerHTML = `
    <div class="container">
      <div class="page-head reveal"><span class="eyebrow">${icon("layers", 'style="width:14px;height:14px;display:inline;vertical-align:-2px"')} Question Bank</span>
        <h1 class="h1" style="margin-top:6px">Practice by skill</h1>
        <p class="lead">Every Digital SAT domain and skill, laid out the way the real test is. Tap a domain or skill to start — questions are being added.</p>
      </div>
      <div class="qb-grid">${col("rw")}${col("math")}</div>
    </div>`;
    Apex.util.qsa("[data-run]", container).forEach((b) => b.addEventListener("click", () => {
      const [sid, domain, skill] = b.dataset.run.split("|");
      const label = SAT_BLUEPRINT[sid].label;
      const qs = domain
        ? bankQuestionsFor(domain, skill || null)
        : SAT_BLUEPRINT[sid].domains.reduce((acc, d) => acc.concat(bankQuestionsFor(d.name, null)), []);
      if (!qs.length) return Apex.ui.toast(`${skill || domain || label} — no questions here yet. Coming soon.`);
      bankRunner({ title: skill || domain || label, subtitle: `Question Bank · ${label}`, questions: qs });
    }));
    hydrate(container);
  }

  /* ============================ QUESTION BANK RUNNER (Bluebook-style, count-up) */
  function bankRunner({ title, subtitle, questions }) {
    const st = { i: 0, responses: {}, flags: new Set(), elim: {}, elimMode: false, elapsed: 0, navOpen: false, hidden: false, annotate: false, annot: {}, splitPct: 50, dragging: false, phase: "solve" };
    let timer = null;
    const fmt = Apex.util.fmtTime;
    const root = document.createElement("div");
    root.className = "engine qbank-runner";
    document.body.appendChild(root);
    document.body.style.overflow = "hidden";
    const q = () => questions[st.i];
    const stage = () => Apex.util.qs("[data-stage]", root);
    const stageInner = () => Apex.util.qs("[data-stage-inner]", root);
    const bottom = () => Apex.util.qs("[data-bottom]", root);

    const shell = () => `
      <div class="engine-top qr-top">
        <div class="qr-top-left">
          <button class="qr-logo" data-logo-home aria-label="EliteXSAT — back to home"><img src="${Apex.config.logo}" alt="EliteXSAT" /></button>
          <div class="qr-top-titles">
            <div class="et-title">${esc(title)}</div>
            <button class="qr-directions" data-directions>Directions ${icon("chevron-down")}</button>
          </div>
        </div>
        <div class="qr-clock-wrap">
          <div class="qr-time ${st.hidden ? "hidden" : ""}" data-clock>${st.hidden ? "" : fmt(st.elapsed)}</div>
          <button class="qr-hide" data-hideclock>${st.hidden ? "Show" : "Hide"}</button>
        </div>
        <div class="qr-tools">
          <button class="qr-tool2 ${st.annotate ? "on" : ""}" data-annotate aria-pressed="${st.annotate}">${icon("pencil")}<span>Annotate</span></button>
          <button class="qr-tool2 qr-calc" data-calc style="display:none">${icon("calculator")}<span>Calculator</span></button>
          <button class="qr-tool2" data-bg aria-label="Appearance">${icon("moon")}<span>Appearance</span></button>
          <button class="qr-tool2" data-report aria-label="Report a problem">${icon("flag")}<span>Report</span></button>
          <button class="qr-tool2" data-more aria-label="More options">${icon("more-vertical")}<span>More</span></button>
        </div>
      </div>
      <div class="qr-rule"></div>
      <div class="engine-stage" data-stage style="flex:1;display:flex;flex-direction:column;overflow:hidden;position:relative">
        <div class="qr-watermark" aria-hidden="true"><img class="qr-wm-logo" src="${Apex.config.logo}" alt="" draggable="false" /></div>
        <div class="qr-stage-inner" data-stage-inner style="flex:1;display:flex;flex-direction:column;min-height:0"></div>
      </div>
      <div class="qr-rule"></div>
      <div class="engine-bottom" data-bottom></div>`;

    function startTimer() { stopTimer(); timer = setInterval(() => { st.elapsed++; const el = Apex.util.qs("[data-clock]", root); if (el && !st.hidden) el.textContent = fmt(st.elapsed); }, 1000); }
    function stopTimer() { if (timer) { clearInterval(timer); timer = null; } }
    function close() { try { Apex.calc.reset(); } catch (e) {} stopTimer(); document.removeEventListener("keydown", onKey); root.remove(); document.body.style.overflow = ""; }

    function renderQuestion() {
      const cur = q(), flagged = st.flags.has(cur.id), sel = st.responses[cur.id], elimSet = st.elim[cur.id] || [];
      const saved = st.annot[cur.id] || {};
      const passageHTML = saved.passage != null ? saved.passage : (cur.passage || "");
      const promptHTML = saved.prompt != null ? saved.prompt : cur.prompt;
      const paneTool = (side) => `<div class="qr-pane-toolbar"><button class="qr-pane-tool" data-pane="${side}" title="Expand this panel" aria-label="Expand this panel">${icon("maximize")}</button></div>`;
      const head = `
        <div class="qr-qhead">
          <span class="q-num">${st.i + 1}</span>
          <button class="qr-mark ${flagged ? "on" : ""}" data-flag>${icon("bookmark")}<span>${flagged ? "Marked for Review" : "Mark for Review"}</span></button>
          <button class="qr-abc ${st.elimMode ? "on" : ""}" data-elimmode title="Cross out answer choices">ABC</button>
        </div>
        <div class="qr-rule qr-rule-sm"></div>`;
      const choices = `
        <div class="choices" role="radiogroup">
          ${cur.options.map((o) => {
            const isSel = sel === o.id, isElim = elimSet.includes(o.id);
            return `<button class="choice ${isSel ? "selected" : ""} ${isElim ? "eliminated" : ""}" data-opt="${o.id}" role="radio" aria-checked="${isSel}"><span class="ch-key">${o.id}</span><span class="ch-text">${esc(o.text)}</span>${st.elimMode ? `<span class="elim-x" data-elim="${o.id}" style="margin-left:auto;align-self:center;color:var(--muted-2)">${icon(isElim ? "refresh" : "x", 'style="width:15px;height:15px"')}</span>` : ""}</button>`;
          }).join("")}
        </div>`;
      const right = `<div class="pane pane-right">${cur.passage ? paneTool("right") : ""}${head}<div class="q-prompt" data-annot-target="prompt">${promptHTML}</div>${choices}</div>`;
      const body = cur.passage
        ? `<div class="engine-body two-pane ${st.annotate ? "annotating" : ""}"><div class="pane pane-left">${paneTool("left")}<div class="passage" data-annot-target="passage">${passageHTML}</div></div><div class="qr-splitter" title="Drag to resize the panels"></div>${right}</div>`
        : `<div class="engine-body single ${st.annotate ? "annotating" : ""}">${right}</div>`;
      stageInner().innerHTML = body;
      const ebTwo = Apex.util.qs(".engine-body.two-pane", root);
      if (ebTwo) { ebTwo.style.setProperty("--lf", st.splitPct); ebTwo.style.setProperty("--rf", 100 - st.splitPct); }
      stageInner().firstElementChild.classList.add("view-enter");
      const isMath = Apex.isMathDomain(cur.domain);
      if (!isMath && Apex.calc.isOpen()) Apex.calc.hide();   // calculator is Math-only
      const calcBtn = Apex.util.qs("[data-calc]", root);
      if (calcBtn) { calcBtn.style.display = isMath ? "" : "none"; calcBtn.classList.toggle("on", Apex.calc.isOpen()); calcBtn.setAttribute("aria-pressed", Apex.calc.isOpen()); }
      if (isMath) Apex.fractions(stageInner());
      renderBottom();
    }

    function renderBottom() {
      const total = questions.length, i = st.i;
      const u = Apex.store.currentUser();
      const name = (u && u.name) ? u.name : "You";
      bottom().innerHTML = `
        <div class="row gap-2 qr-user" style="min-width:130px">
          <div class="avatar" style="width:30px;height:30px;font-size:.78rem">${esc(Apex.util.initials(name))}</div>
          <span class="small muted">${esc(name.split(" ")[0])}</span>
        </div>
        <button class="nav-pill" data-nav-open aria-haspopup="true">${icon("grid")} Question ${i + 1} of ${total}${icon("chevron-up")}</button>
        <div class="row gap-2" style="min-width:130px;justify-content:flex-end">
          <button class="btn btn-outline btn-sm" data-back ${i === 0 ? "disabled" : ""}>${icon("chevron-left")}<span class="label-full">Back</span></button>
          <button class="btn btn-primary btn-sm" data-next>${i === total - 1 ? "Finish" : "Next"}${icon("chevron-right")}</button>
        </div>`;
    }

    function toggleNav(force) {
      const open = force != null ? force : !st.navOpen;
      st.navOpen = open;
      Apex.util.qs(".navigator", root)?.remove();
      if (!open) return;
      const cells = questions.map((qq, idx) => `<button class="nav-cell ${st.responses[qq.id] != null ? "answered" : ""} ${idx === st.i ? "current" : ""} ${st.flags.has(qq.id) ? "flagged" : ""}" data-jump="${idx}">${idx + 1}</button>`).join("");
      const answered = questions.filter((qq) => st.responses[qq.id] != null).length;
      const pop = document.createElement("div");
      pop.className = "navigator";
      pop.innerHTML = `<div class="row between"><strong>${esc(title)} — ${answered}/${questions.length} answered</strong><button class="btn btn-ghost btn-sm" data-nav-open>${icon("x")}</button></div>
        <div class="nav-grid">${cells}</div>
        <button class="btn btn-dark btn-block" data-finish style="margin-top:16px">Finish &amp; review${icon("arrow-right")}</button>`;
      root.appendChild(pop);
    }

    function review() {
      stopTimer(); try { Apex.calc.hide(); } catch (e) {} st.phase = "review"; toggleNav(false);
      const correct = questions.filter((qq) => st.responses[qq.id] === qq.answer).length;
      const cards = questions.map((qq, idx) => {
        const sel = st.responses[qq.id], ok = sel === qq.answer;
        return `<div class="qr-result card card-pad">
          <div class="row between" style="margin-bottom:10px"><span class="q-num">${idx + 1}</span><span class="badge ${ok ? "badge-ok" : "badge-bad"}">${icon(ok ? "check" : "x")} ${ok ? "Correct" : (sel ? "Incorrect" : "Skipped")}</span></div>
          ${qq.passage ? `<div class="passage" style="font-size:.96rem;margin-bottom:12px">${qq.passage}</div>` : ""}
          <div class="q-prompt" style="font-size:1rem">${qq.prompt}</div>
          <div class="choices" style="margin-top:12px">${qq.options.map((o) => `<div class="choice ${o.id === qq.answer ? "correct" : (o.id === sel && !ok ? "wrong" : "")}"><span class="ch-key">${o.id}</span><span class="ch-text">${esc(o.text)}</span></div>`).join("")}</div>
          ${qq.explanation ? `<div class="qr-expl"><b>Why ${esc(qq.answer)}.</b> ${qq.explanation}</div>` : ""}
        </div>`;
      }).join("");
      stageInner().innerHTML = `
        <div class="pane" style="max-width:760px;margin-inline:auto;width:100%">
          <div style="text-align:center;margin-bottom:26px">
            <div class="big-icon" style="background:var(--brand-50);color:var(--brand-600);margin:0 auto 12px">${icon("check-circle")}</div>
            <h2 class="h2">Practice complete</h2>
            <p class="lead"><b>${correct}</b> of <b>${questions.length}</b> correct · time ${fmt(st.elapsed)}</p>
          </div>
          ${cards}
          <div class="row gap-2" style="margin-top:24px;justify-content:center">
            <button class="btn btn-outline" data-restart>${icon("refresh")} Try again</button>
            <button class="btn btn-primary" data-exit>${icon("check")} Done</button>
          </div>
        </div>`;
      if (questions.length && Apex.isMathDomain(questions[0].domain)) Apex.fractions(stageInner());   // stack fractions in the math review too
      bottom().innerHTML = "";
    }

    function go(delta) {
      const ni = st.i + delta;
      if (ni < 0) return;
      if (ni >= questions.length) return review();
      st.i = ni; toggleNav(false); renderQuestion();
    }
    function selectOpt(id) {
      st.responses[q().id] = id;
      Apex.util.qsa(".choice", root).forEach((c) => { const on = c.dataset.opt === id; c.classList.toggle("selected", on); c.setAttribute("aria-checked", on ? "true" : "false"); });
    }
    function onKey(e) {
      if (st.phase !== "solve" || e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
      else { const m = { a: "A", b: "B", c: "C", d: "D", 1: "A", 2: "B", 3: "C", 4: "D" }, L = m[e.key.toLowerCase()]; if (L && q().options.some((o) => o.id === L)) selectOpt(L); }
    }

    function saveAnnot(target) {
      if (!target) return;
      (st.annot[q().id] = st.annot[q().id] || {})[target.dataset.annotTarget] = target.innerHTML;
    }
    function openNotePopover(mk) {
      Apex.util.qs(".annot-pop", root)?.remove();
      const pop = document.createElement("div");
      pop.className = "annot-pop";
      const r = mk.getBoundingClientRect();
      pop.style.left = Math.max(12, Math.min(r.left, window.innerWidth - 272)) + "px";
      pop.style.top = Math.min(r.bottom + 8, window.innerHeight - 160) + "px";
      pop.innerHTML = `<textarea class="annot-note" rows="3" placeholder="Add a note…">${esc(mk.dataset.note || "")}</textarea>
        <div class="row between" style="margin-top:8px">
          <button class="btn btn-ghost btn-sm" data-annot-remove>${icon("x")} Remove</button>
          <button class="btn btn-primary btn-sm" data-annot-save>Save note</button>
        </div>`;
      root.appendChild(pop);
      pop.querySelector(".annot-note").focus();
      pop.querySelector("[data-annot-save]").addEventListener("click", () => {
        const note = pop.querySelector(".annot-note").value.trim();
        if (note) { mk.dataset.note = note; mk.setAttribute("title", note); mk.classList.add("has-note"); }
        else { delete mk.dataset.note; mk.removeAttribute("title"); mk.classList.remove("has-note"); }
        const target = mk.closest("[data-annot-target]"); pop.remove(); saveAnnot(target);
      });
      pop.querySelector("[data-annot-remove]").addEventListener("click", () => {
        const target = mk.closest("[data-annot-target]"), parent = mk.parentNode;
        while (mk.firstChild) parent.insertBefore(mk.firstChild, mk);
        parent.removeChild(mk); parent.normalize();
        pop.remove(); saveAnnot(target);
      });
    }

    root.innerHTML = shell();
    Apex.bgTint.restore(root);   // re-apply the student's saved background color
    root.addEventListener("click", (e) => {
      const t = e.target;
      if (!t.closest(".annot-pop") && !t.closest("mark.annot")) Apex.util.qs(".annot-pop", root)?.remove();
      if (t.closest(".annot-pop")) return;
      if (!t.closest(".qr-more-menu") && !t.closest("[data-more]")) Apex.util.qs(".qr-more-menu", root)?.remove();
      if (!t.closest(".qr-bg-menu") && !t.closest("[data-bg]")) Apex.util.qs(".qr-bg-menu", root)?.remove();
      if (t.closest("[data-bg]")) { Apex.theme.toggle(); return; }   // one-click instant White↔Dark (no popup)
      if (t.closest("[data-annotate]")) {
        st.annotate = !st.annotate;
        const b = t.closest("[data-annotate]"); b.classList.toggle("on", st.annotate); b.setAttribute("aria-pressed", st.annotate);
        Apex.util.qs(".engine-body", root)?.classList.toggle("annotating", st.annotate);
        return;
      }
      const mk = t.closest("mark.annot"); if (mk && st.annotate) { e.stopPropagation(); return openNotePopover(mk); }
      if (t.closest("[data-logo-home]")) { close(); location.hash = "#/tests"; return; }
      if (t.closest("[data-exit]")) return close();
      if (t.closest("[data-restart]")) { try { Apex.calc.reset(); } catch (e) {} Object.assign(st, { i: 0, responses: {}, flags: new Set(), elim: {}, elimMode: false, elapsed: 0, annot: {}, phase: "solve" }); root.innerHTML = shell(); Apex.bgTint.restore(root); startTimer(); renderQuestion(); return; }
      if (t.closest("[data-hideclock]")) {
        st.hidden = !st.hidden;
        const el = Apex.util.qs("[data-clock]", root); if (el) { el.textContent = st.hidden ? "" : fmt(st.elapsed); el.classList.toggle("hidden", st.hidden); }
        t.closest("[data-hideclock]").textContent = st.hidden ? "Show" : "Hide";
        return;
      }
      if (t.closest("[data-directions]")) return Apex.ui.modal({ title: "Directions", size: "lg",
        body: `<div class="small" style="line-height:1.75">Read each question and choose the best answer. You can <b>mark a question for review</b> (the bookmark), <b>cross out answer choices</b> you've eliminated (the <span style="text-decoration:line-through">ABC</span> tool), and <b>annotate</b> the passage. The timer counts <b>up</b> — there's no time limit in the Question Bank, so you can just see how long each question takes.</div>`,
        actions: `<button class="btn btn-primary" data-close>Got it</button>` });
      if (t.closest("[data-calc]")) return Apex.calc.toggle(root);   // the calc module keeps the button's "on" state in sync
      if (t.closest("[data-report]")) return Apex.ui.reportModal();
      if (t.closest("[data-more]")) {
        Apex.util.qs(".qr-more-menu", root)?.remove();
        const r = t.closest("[data-more]").getBoundingClientRect();
        const menu = document.createElement("div");
        menu.className = "qr-more-menu";
        menu.style.right = (window.innerWidth - r.right) + "px";
        menu.style.top = (r.bottom + 6) + "px";
        menu.innerHTML = `<button class="qr-more-item" data-exit>${icon("log-out")} Exit practice</button>`;
        root.appendChild(menu);
        return;
      }
      const pt = t.closest("[data-pane]");
      if (pt) {
        const eb = Apex.util.qs(".engine-body.two-pane", root); if (!eb) return;
        // expand the chosen pane ~50% bigger than the other (60/40); press again to reset
        st.splitPct = pt.dataset.pane === "left" ? (st.splitPct > 55 ? 50 : 60) : (st.splitPct < 45 ? 50 : 40);
        eb.style.setProperty("--lf", st.splitPct); eb.style.setProperty("--rf", 100 - st.splitPct);
        return;
      }
      if (t.closest("[data-nav-open]")) return toggleNav();
      if (t.closest("[data-finish]")) return review();
      if (t.closest("[data-next]")) return go(1);
      if (t.closest("[data-back]")) return go(-1);
      const jp = t.closest("[data-jump]"); if (jp) { st.i = Apex.util.clamp(+jp.dataset.jump, 0, questions.length - 1); toggleNav(false); return renderQuestion(); }
      if (t.closest("[data-elimmode]")) { st.elimMode = !st.elimMode; return renderQuestion(); }
      const elx = t.closest("[data-elim]"); if (elx) { e.stopPropagation(); const id = elx.dataset.elim, set = new Set(st.elim[q().id] || []); set.has(id) ? set.delete(id) : set.add(id); st.elim[q().id] = [...set]; return renderQuestion(); }
      if (t.closest("[data-flag]")) { const id = q().id; st.flags.has(id) ? st.flags.delete(id) : st.flags.add(id); return renderQuestion(); }
      const opt = t.closest("[data-opt]"); if (opt) return selectOpt(opt.dataset.opt);
    });
    root.addEventListener("mousedown", (e) => {
      if (!e.target.closest(".qr-splitter")) return;
      const eb = Apex.util.qs(".engine-body.two-pane", root); if (!eb) return;
      e.preventDefault();
      st.dragging = true; eb.classList.add("splitting"); document.body.style.userSelect = "none";
      const onMove = (ev) => {
        const r = eb.getBoundingClientRect();
        const pct = Math.max(22, Math.min(78, ((ev.clientX - r.left) / r.width) * 100));
        st.splitPct = pct; eb.style.setProperty("--lf", pct); eb.style.setProperty("--rf", 100 - pct);
      };
      const onUp = () => {
        eb.classList.remove("splitting"); document.body.style.userSelect = ""; st.dragging = false;
        document.removeEventListener("mousemove", onMove); document.removeEventListener("mouseup", onUp);
      };
      document.addEventListener("mousemove", onMove); document.addEventListener("mouseup", onUp);
    });
    root.addEventListener("mouseup", () => {
      if (st.dragging) return;
      if (st.annotate !== true) return;
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed || !sel.rangeCount) return;
      const range = sel.getRangeAt(0);
      const node = range.commonAncestorContainer;
      const host = node.nodeType === 1 ? node : node.parentElement;
      const target = host && host.closest("[data-annot-target]");
      if (!target || !target.contains(range.endContainer)) return;
      try { const m = document.createElement("mark"); m.className = "annot"; range.surroundContents(m); }
      catch (err) { const m = document.createElement("mark"); m.className = "annot"; m.appendChild(range.extractContents()); range.insertNode(m); }
      sel.removeAllRanges();
      saveAnnot(target);
    });
    document.addEventListener("keydown", onKey);
    startTimer();
    renderQuestion();
  }

  /* ==================================================== SHUFFLED PRACTICE */
  async function shuffled(container) {
    container.innerHTML = `
    <div class="container" style="max-width:680px">
      <div class="page-head reveal"><span class="eyebrow">${icon("shuffle", 'style="width:14px;height:14px;display:inline;vertical-align:-2px"')} Shuffled Practice</span>
        <h1 class="h1" style="margin-top:6px">Mixed-question warm-up</h1>
        <p class="lead">A random mix from the whole bank — great for keeping every skill sharp.</p></div>
      <div class="card card-pad reveal">
        <div class="field" style="margin-bottom:18px"><span class="label">Section</span>
          <div class="pill-seg" data-sec><button class="pill-opt active" data-v="all">All</button><button class="pill-opt" data-v="rw">Reading &amp; Writing</button><button class="pill-opt" data-v="math">Math</button></div></div>
        <div class="field" style="margin-bottom:24px"><span class="label">How many questions</span>
          <div class="pill-seg" data-len><button class="pill-opt" data-v="5">5</button><button class="pill-opt active" data-v="10">10</button><button class="pill-opt" data-v="20">20</button></div></div>
        <button class="btn btn-primary btn-lg btn-block" data-go>${icon("play")} Start shuffled practice</button>
      </div>
    </div>`;
    let sec = "all", len = 10;
    Apex.ui.pillSeg(Apex.util.qs("[data-sec]", container), (v) => (sec = v));
    Apex.ui.pillSeg(Apex.util.qs("[data-len]", container), (v) => (len = +v));
    Apex.util.qs("[data-go]", container).addEventListener("click", () => {
      let pool = allQuestions();
      if (sec !== "all") pool = pool.filter((q) => q.section === sec);
      runPractice(container, { questions: shuffle(pool).slice(0, len), returnHash: "#/shuffle" });
    });
    hydrate(container);
  }

  /* ===================================================== READING LIBRARY */
  /* CEFR word levels: word -> "A1".."C2". Loaded once. cefr-words.js sets
     Apex.reading.cefrWords synchronously via <script> (works on file://); if only
     the JSON is present (served over http) we fetch it once. Cached in _cefr. */
  let _cefr = null;
  function cefrData() {
    if (!_cefr) _cefr = (Apex.reading && Apex.reading.cefrWords) || {};
    return _cefr;
  }
  async function ensureCefr() {
    if (_cefr) return _cefr;
    if (Apex.reading && Apex.reading.cefrWords) return (_cefr = Apex.reading.cefrWords);
    try { _cefr = await (await fetch("assets/data/cefr-words.json")).json(); }
    catch { _cefr = {}; }
    return _cefr;
  }
  /* Heuristic lemmatizer: strip common inflections to find a base form in the CEFR
     map. Returns { base, level }. Not a real morphological analyzer (misses
     went->go, better->good) but good enough for highlighting. */
  const _lemmaCache = new Map();
  function lemma(word) {
    const w = word.toLowerCase();
    const cached = _lemmaCache.get(w); if (cached) return cached;
    const m = cefrData(), tries = [w];
    const push = (x) => { if (x && x.length > 1 && tries.indexOf(x) < 0) tries.push(x); };
    if (w.endsWith("ies")) push(w.slice(0, -3) + "y");
    if (w.endsWith("es")) push(w.slice(0, -2));
    if (w.endsWith("s") && !w.endsWith("ss")) push(w.slice(0, -1));
    if (w.endsWith("ed")) { push(w.slice(0, -2)); push(w.slice(0, -1));
      if (w.length > 4 && w[w.length - 3] === w[w.length - 4]) push(w.slice(0, -3)); }
    if (w.endsWith("ing")) { push(w.slice(0, -3)); push(w.slice(0, -3) + "e");
      if (w.length > 5 && w[w.length - 4] === w[w.length - 5]) push(w.slice(0, -4)); }
    if (w.endsWith("ly")) push(w.slice(0, -2));
    if (w.endsWith("est")) push(w.slice(0, -3));
    if (w.endsWith("er")) push(w.slice(0, -2));
    let res = { base: w, level: null };
    for (const t of tries) { if (m[t]) { res = { base: t, level: m[t] }; break; } }
    _lemmaCache.set(w, res);
    return res;
  }
  function cefrLevel(word) { return lemma(word).level; }

  // Bundled offline definitions (Free Dictionary API / Wiktionary, CC BY-SA) + Cambridge link.
  function bundledDef(word) {
    const defs = (Apex.reading && Apex.reading.defs) || {};
    const hit = defs[word.toLowerCase()] || defs[lemma(word).base];
    return hit ? { pos: hit.p || "", def: hit.d || "", ex: hit.e || "" } : null;
  }
  const cambridgeUrl = (word) => "https://dictionary.cambridge.org/dictionary/english/" + encodeURIComponent(word.toLowerCase().trim());

  let _fallback = null;
  function fallbackDef(w) {
    if (!_fallback) { _fallback = {}; VOCAB.forEach((v) => (_fallback[v.w.toLowerCase()] = { pos: v.p, def: v.d, syn: [] })); }
    return _fallback[w.toLowerCase()];
  }
  const escBody = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  // Tokenize a paragraph ONCE: wrap every word in <span class="w" data-base data-lv?>.
  // Highlighting is then pure CSS (a container class per active level), so toggling
  // levels never re-tokenizes. Non-word text is HTML-escaped.
  const WORD_RE = /[A-Za-z]+(?:['’-][A-Za-z]+)*/g;
  function tokenizePara(text) {
    let out = "", last = 0, m;
    WORD_RE.lastIndex = 0;
    while ((m = WORD_RE.exec(text))) {
      out += escBody(text.slice(last, m.index));
      const w = m[0], info = lemma(w);
      out += `<span class="w" data-base="${escBody(info.base)}"${info.level ? ` data-lv="${info.level}"` : ""}>${escBody(w)}</span>`;
      last = m.index + w.length;
    }
    out += escBody(text.slice(last));
    return out;
  }

  function ensureHtml2pdf() {
    return new Promise((resolve, reject) => {
      if (window.html2pdf) return resolve();
      const s = document.createElement("script");
      s.src = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";
      s.onload = resolve; s.onerror = reject; document.head.appendChild(s);
    });
  }
  async function exportPdf(p) {
    Apex.ui.toast("Preparing PDF…");
    try { await ensureHtml2pdf(); } catch { return Apex.ui.toast("Couldn't load the PDF library (offline?).", "bad"); }
    const el = document.createElement("div");
    el.style.cssText = "padding:34px;font-family:Georgia,serif;color:#111;background:#fff;width:680px";
    el.innerHTML = `<h1 style="font-size:24px;margin:0 0 4px">${esc(p.title)}</h1>${p.author ? `<p style="color:#555;margin:0 0 18px">${esc(p.author)}</p>` : ""}${p.body.split("\n\n").map((t) => `<p style="line-height:1.7;margin:0 0 12px">${escBody(t)}</p>`).join("")}<p style="margin-top:24px;color:#999;font-size:11px">EliteXSAT · Public-domain text (Project Gutenberg)</p>`;
    window.html2pdf().set({ margin: 14, filename: (p.id || "passage") + ".pdf", html2canvas: { scale: 2 }, jsPDF: { unit: "pt", format: "a4" } }).from(el).save();
  }

  async function showDefine(word) {
    document.querySelector(".define-panel")?.remove();
    const info = lemma(word), lv = info.level;
    const panel = document.createElement("div");
    panel.className = "define-panel";
    panel.innerHTML = `<div class="dp-top"><span class="dp-word">${esc(word)}</span><button class="btn btn-ghost btn-sm" data-dp-close>${icon("x")}</button></div>
      ${lv ? `<div class="dp-tags"><span class="badge badge-brand">CEFR ${lv}</span></div>` : ""}
      <div data-dp-content><div class="row gap-2" style="margin-top:12px"><span class="spinner"></span><span class="muted small">Looking up…</span></div></div>
      <div class="dp-foot"><a class="dp-camb" href="${cambridgeUrl(word)}" target="_blank" rel="noopener">${icon("book-open")} Cambridge Dictionary</a><span class="dp-src">Wiktionary · CC BY-SA</span></div>`;
    document.body.appendChild(panel);
    panel.querySelector("[data-dp-close]").addEventListener("click", () => {
      panel.remove();
      document.querySelectorAll(".w.picked").forEach((s) => s.classList.remove("picked"));
    });
    const content = panel.querySelector("[data-dp-content]");
    const render = (pos, def, ex, syn) => {
      content.innerHTML = `${pos ? `<div class="dp-pos">${esc(pos)}</div>` : ""}<div class="dp-def">${esc(def)}</div>${ex ? `<div class="dp-ex">“${esc(ex)}”</div>` : ""}${syn && syn.length ? `<div class="dp-syn">${syn.slice(0, 5).map((s) => `<span class="badge" data-syn="${esc(s)}">${esc(s)}</span>`).join("")}</div>` : ""}`;
      content.querySelectorAll("[data-syn]").forEach((b) => b.addEventListener("click", () => showDefine(b.dataset.syn)));
    };
    const bundled = bundledDef(word);
    if (bundled) { render(bundled.pos, bundled.def, bundled.ex, []); return; }
    const lookup = async (q) => {
      const res = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + encodeURIComponent(q.toLowerCase()));
      if (!res.ok) throw 0;
      return res.json();
    };
    try {
      let data;
      try { data = await lookup(word); }
      catch (e) { if (info.base && info.base !== word.toLowerCase()) data = await lookup(info.base); else throw e; }
      const meaning = data[0].meanings[0], d0 = meaning.definitions[0];
      let syn = (d0.synonyms || []);
      if (!syn.length) syn = meaning.synonyms || [];
      render(meaning.partOfSpeech, d0.definition, d0.example || "", syn);
    } catch {
      const fb = fallbackDef(word) || fallbackDef(info.base);
      if (fb) render(fb.pos, fb.def, "", fb.syn);
      else content.innerHTML = `<div class="dp-def muted">No definition found${lv ? ` — but it's a CEFR ${lv} word.` : ". Try another word, or check your connection."}</div>`;
    }
  }

  async function reading(container) {
    ensureCefr();   // load word levels once (no-op if already cached)
    const all = (Apex.reading && Apex.reading.passages) || [];
    let band = "all";
    const wc = (p) => p.body.split(/\s+/).filter(Boolean).length;

    function card(p) {
      return `<article class="card read-card card-hover reveal" data-open="${esc(p.id)}" role="button" tabindex="0">
        <div class="row between"><span class="badge band-${esc(p.band)}">${esc(p.band[0].toUpperCase() + p.band.slice(1))}</span>${icon("book-open", 'style="color:var(--brand-300)"')}</div>
        <h3>${esc(p.title)}</h3>
        <div class="rc-meta">${p.author ? esc(p.author) + " · " : ""}${wc(p)} words ${icon("arrow-right", 'style="width:14px;height:14px;margin-left:auto"')}</div>
      </article>`;
    }

    function lib() {
      document.querySelector(".define-panel")?.remove();   // close any lingering word definition
      container.innerHTML = `
      <div class="container">
        <div class="page-head reveal lib-head">
          <div class="lib-head-text">
            <span class="eyebrow">${icon("book-open", 'style="width:14px;height:14px;display:inline;vertical-align:-2px"')} Reading Article</span>
            <h1 class="h1" style="margin-top:6px">Reading library</h1>
            <p class="lead">${all.length} public-domain passages graded Easy → Hard. Highlight words by CEFR level, tap any word for a definition, and export a clean PDF.</p>
          </div>
          <div class="pill-seg lib-head-filter" data-band>
            ${["all", "easy", "middle", "hard"].map((v) => `<button class="pill-opt${band === v ? " active" : ""}" data-v="${v}">${v[0].toUpperCase() + v.slice(1)}</button>`).join("")}
          </div>
        </div>
        <div data-cards></div>
      </div>`;
      const cardsEl = Apex.util.qs("[data-cards]", container);
      const renderCards = () => {
        const list = all.filter((p) => band === "all" || p.band === band);
        cardsEl.innerHTML = list.length ? `<div class="grid grid-5">${list.map(card).join("")}</div>`
          : `<div class="empty card card-pad"><div class="big-icon">${icon("book-open")}</div><h2 class="h3">No passages loaded</h2><p class="muted">Run <code>python tmp/build.py</code> to generate the library — see READING-README.md.</p></div>`;
        Apex.util.qsa("[data-open]", cardsEl).forEach((c) => c.addEventListener("click", () => reader(c.dataset.open)));
        Apex.util.revealInit(cardsEl);
      };
      Apex.ui.pillSeg(Apex.util.qs("[data-band]", container), (v) => { band = v; renderCards(); });
      renderCards();
      hydrate(container);
      Apex.app.setFocus(false);   // full sidebar on the library list
    }

    function reader(id) {
      const p = all.find((x) => x.id === id); if (!p) return lib();
      // Tokenize every paragraph ONCE (each word becomes a span). Highlighting after
      // this is pure CSS via container classes, so toggling levels never re-tokenizes.
      const bodyHtml = p.body.split("\n\n").map((para) => `<p>${tokenizePara(para)}</p>`).join("");
      container.innerHTML = `
      <div class="reader">
        <a class="nav-link reveal" data-back style="display:inline-flex;cursor:pointer;margin-bottom:12px">${icon("chevron-left")} Library</a>
        <div class="card card-pad reveal" style="margin-bottom:18px">
          <div class="reader-head">
            <div class="reader-title">
              <span class="badge band-${esc(p.band)}" style="margin-bottom:10px">${esc(p.band[0].toUpperCase() + p.band.slice(1))}</span>
              <h1 class="h2">${esc(p.title)}</h1>${p.author ? `<p class="muted">${esc(p.author)}</p>` : ""}
            </div>
            <div class="reader-controls">
              <div class="cefr-toolbar">
                <span class="small muted cefr-label">Highlight CEFR</span>
                <div class="pill-seg" data-cefr>
                  ${[["", "Off", "var(--brand-600)"], ["A1", "A1", "#10b981"], ["A2", "A2", "#06b6d4"], ["B1", "B1", "#3b82f6"], ["B2", "B2", "#8b5cf6"], ["C1", "C1", "#f59e0b"], ["C2", "C2", "#ef4444"]].map(([v, lab, col]) => `<button class="pill-opt${v === "" ? " active" : ""}" data-v="${v}" data-color="${col}">${lab}</button>`).join("")}
                </div>
              </div>
              <button class="btn btn-outline" data-pdf>${icon("file-text")} Download PDF</button>
            </div>
          </div>
          <p class="tiny faint" style="margin-top:12px">Pick a level to highlight those words · tap any word for a definition.</p>
        </div>
        <div class="card card-pad reader-body" data-readbody>${bodyHtml}</div>
      </div>`;
      const body = Apex.util.qs("[data-readbody]", container);
      Apex.util.qs("[data-back]", container).addEventListener("click", lib);
      // Single-select One UI pill — highlight one level at a time via a container class.
      const CEFR_LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
      Apex.ui.pillSeg(Apex.util.qs("[data-cefr]", container), (v) => {
        CEFR_LEVELS.forEach((lv) => body.classList.remove("lv-" + lv));
        if (v) body.classList.add("lv-" + v);
      });
      // One delegated listener handles click-to-define for every word.
      body.addEventListener("click", (e) => {
        const span = e.target.closest(".w"); if (!span) return;
        body.querySelectorAll(".w.picked").forEach((s) => s.classList.remove("picked"));
        span.classList.add("picked");
        showDefine(span.textContent);
      });
      Apex.util.qs("[data-pdf]", container).addEventListener("click", () => exportPdf(p));
      hydrate(container);
      window.scrollTo({ top: 0 });
      Apex.app.setFocus(true);    // collapse sidebar to icons for a big reading screen
    }

    lib();
  }

  /* ========================================================= VOCABULARY */
  const VOCAB = [
    { w: "Ameliorate", p: "verb", d: "To make something bad or unsatisfactory better.", e: "New irrigation helped ameliorate the effects of the drought." },
    { w: "Cogent", p: "adjective", d: "Clear, logical, and convincing.", e: "She made a cogent argument for extending the deadline." },
    { w: "Ephemeral", p: "adjective", d: "Lasting for a very short time.", e: "The beauty of the cherry blossoms is ephemeral." },
    { w: "Gregarious", p: "adjective", d: "Fond of company; sociable.", e: "His gregarious nature made him the center of every gathering." },
    { w: "Pragmatic", p: "adjective", d: "Dealing with things sensibly and realistically.", e: "They took a pragmatic approach to the budget cuts." },
    { w: "Tenuous", p: "adjective", d: "Very weak or slight.", e: "The evidence linking the two events was tenuous at best." },
    { w: "Ubiquitous", p: "adjective", d: "Present, appearing, or found everywhere.", e: "Smartphones have become ubiquitous in daily life." },
    { w: "Candor", p: "noun", d: "The quality of being open and honest.", e: "She answered the difficult questions with surprising candor." },
    { w: "Diligent", p: "adjective", d: "Showing careful and persistent effort.", e: "Diligent study paid off when she aced the exam." },
    { w: "Prudent", p: "adjective", d: "Acting with care and thought for the future.", e: "It was prudent to save part of every paycheck." },
    { w: "Mitigate", p: "verb", d: "To make less severe or painful.", e: "Planting trees can mitigate urban heat." },
    { w: "Nuance", p: "noun", d: "A subtle difference in meaning or expression.", e: "A good translator captures every nuance of the original." },
    { w: "Resilient", p: "adjective", d: "Able to recover quickly from difficulties.", e: "The resilient community rebuilt after the storm." },
    { w: "Scrutinize", p: "verb", d: "To examine closely and critically.", e: "Editors scrutinize each sentence for accuracy." },
    { w: "Superfluous", p: "adjective", d: "Unnecessary, more than is needed.", e: "He cut the superfluous details from his essay." },
    { w: "Astute", p: "adjective", d: "Having sharp judgment; perceptive.", e: "An astute investor, she spotted the trend early." },
    { w: "Benevolent", p: "adjective", d: "Well meaning and kindly.", e: "The benevolent donor funded the new library." },
    { w: "Conspicuous", p: "adjective", d: "Standing out so as to be clearly visible.", e: "Her conspicuous talent earned immediate attention." },
    { w: "Inevitable", p: "adjective", d: "Certain to happen; unavoidable.", e: "With practice, improvement was inevitable." },
    { w: "Meticulous", p: "adjective", d: "Showing great attention to detail.", e: "His meticulous notes made review easy." },
  ];
  // --- Vocabulary by CEFR level (words from the Oxford list; defs fetched live) ---
  const VOCAB_LEVELS = [
    ["A1", "#10b981", "Beginner"], ["A2", "#06b6d4", "Elementary"],
    ["B1", "#3b82f6", "Intermediate"], ["B2", "#8b5cf6", "Upper Intermediate"],
    ["C1", "#f59e0b", "Advanced"], ["C2", "#ef4444", "Proficiency"],
  ];
  // Trivial function words kept out of study decks.
  const VOCAB_STOP = new Set(("a an the and or but if then so of to in on at by for from with as " +
    "is am are was were be been being do does did have has had will would can could shall should may might must " +
    "i you he she it we they me him her us them my your his its our their this that these those not no yes " +
    "there here who what which whom whose when where why how").split(" "));
  let _wordsByLevel = null;
  function wordsByLevel() {
    if (_wordsByLevel) return _wordsByLevel;
    _wordsByLevel = { A1: [], A2: [], B1: [], B2: [], C1: [], C2: [] };
    const m = cefrData();
    for (const w in m) {
      if (w.length > 1 && !VOCAB_STOP.has(w) && _wordsByLevel[m[w]]) _wordsByLevel[m[w]].push(w);
    }
    Object.values(_wordsByLevel).forEach((a) => a.sort());
    return _wordsByLevel;
  }
  // Definition for a flashcard back (cached). Falls back to the curated set offline.
  const _vdefCache = new Map();
  async function vocabDef(word) {
    const key = word.toLowerCase();
    if (_vdefCache.has(key)) return _vdefCache.get(key);
    let res = bundledDef(word);   // instant offline definition for most words
    if (!res) {
      try {
        const r = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + encodeURIComponent(key));
        if (!r.ok) throw 0;
        const meaning = (await r.json())[0].meanings[0], d0 = meaning.definitions[0];
        res = { pos: meaning.partOfSpeech || "", def: d0.definition || "", ex: d0.example || "" };
      } catch {
        const fb = fallbackDef(key);
        if (fb) res = { pos: fb.pos, def: fb.def, ex: "" };
      }
    }
    _vdefCache.set(key, res);
    return res;
  }

  async function vocab(container) {
    ensureCefr();

    function levels() {
      const by = wordsByLevel();
      container.innerHTML = `
      <div class="container">
        <div class="page-head reveal"><span class="eyebrow">${icon("type", 'style="width:14px;height:14px;display:inline;vertical-align:-2px"')} Vocabulary</span>
          <h1 class="h1" style="margin-top:6px">Vocabulary by level</h1>
          <p class="lead">Choose a CEFR level and study its words as flashcards — tap a card to flip; meanings load as you go.</p>
        </div>
        <div class="grid grid-3 reveal">
          ${VOCAB_LEVELS.map(([lv, col, name]) => `
            <button class="card card-hover vocab-level" data-level="${lv}" style="--lc:${col}">
              <span class="vocab-level-badge">${lv}</span>
              <h3 class="vocab-level-name">${name}</h3>
              <div class="vocab-level-meta">${by[lv].length} words ${icon("arrow-right", 'style="width:14px;height:14px"')}</div>
            </button>`).join("")}
        </div>
      </div>`;
      Apex.util.qsa("[data-level]", container).forEach((b) => b.addEventListener("click", () => deck(b.dataset.level)));
      hydrate(container);
      Apex.app.setFocus(false);
    }

    function deck(level) {
      const all = wordsByLevel()[level] || [];
      if (!all.length) return levels();
      const col = (VOCAB_LEVELS.find((l) => l[0] === level) || [])[1] || "var(--brand-600)";
      let order = shuffle(all.slice()), idx = 0, flipped = false;

      function render() {
        const word = order[idx];
        container.innerHTML = `
        <div class="container" style="max-width:680px">
          <a class="nav-link reveal" data-back style="display:inline-flex;cursor:pointer;margin-bottom:12px">${icon("chevron-left")} All levels</a>
          <div class="page-head reveal" style="margin-bottom:18px">
            <span class="badge" style="background:${col}1f;color:${col};border-color:${col}55">CEFR ${level}</span>
            <h1 class="h1" style="margin-top:8px">Flashcards</h1>
            <p class="lead">Tap the card to flip. ${idx + 1} of ${order.length}.</p>
          </div>
          <div class="flash" data-flash style="--lc:${col}">
            <div class="flash-inner">
              <div class="flash-face">
                <div class="flash-word">${esc(word.charAt(0).toUpperCase() + word.slice(1))}</div>
                <div class="flash-hint">Tap to reveal the meaning</div>
              </div>
              <div class="flash-face flash-back" data-back-face>
                <div class="row gap-2"><span class="spinner"></span><span class="muted small">Looking up…</span></div>
              </div>
            </div>
          </div>
          <div class="row between" style="margin-top:24px">
            <button class="btn btn-outline" data-prev ${idx === 0 ? "disabled" : ""}>${icon("chevron-left")} Prev</button>
            <button class="btn btn-ghost" data-shuffle>${icon("shuffle")} Shuffle</button>
            <button class="btn btn-primary" data-next ${idx === order.length - 1 ? "disabled" : ""}>Next ${icon("chevron-right")}</button>
          </div>
        </div>`;
        const flashEl = Apex.util.qs("[data-flash]", container);
        const backFace = Apex.util.qs("[data-back-face]", container);
        let loaded = false;
        const loadBack = () => {
          if (loaded) return; loaded = true;
          vocabDef(word).then((d) => {
            if (!backFace.isConnected) return;
            backFace.innerHTML = d
              ? `${d.pos ? `<div class="flash-pos">${esc(d.pos)}</div>` : ""}<div class="flash-def">${esc(d.def)}</div>${d.ex ? `<div class="flash-ex">“${esc(d.ex)}”</div>` : ""}<a class="flash-camb" href="${cambridgeUrl(word)}" target="_blank" rel="noopener">${icon("book-open")} Cambridge</a>`
              : `<div class="flash-def muted">No definition yet.</div><a class="flash-camb" href="${cambridgeUrl(word)}" target="_blank" rel="noopener">${icon("book-open")} Look up on Cambridge</a>`;
            const cl = backFace.querySelector(".flash-camb"); if (cl) cl.addEventListener("click", (e) => e.stopPropagation());
          });
        };
        flashEl.addEventListener("click", () => { flipped = !flipped; flashEl.classList.toggle("flipped", flipped); if (flipped) loadBack(); });
        Apex.util.qs("[data-back]", container).addEventListener("click", levels);
        Apex.util.qs("[data-prev]", container).addEventListener("click", () => { if (idx > 0) { idx--; flipped = false; render(); } });
        Apex.util.qs("[data-next]", container).addEventListener("click", () => { if (idx < order.length - 1) { idx++; flipped = false; render(); } });
        Apex.util.qs("[data-shuffle]", container).addEventListener("click", () => { order = shuffle(all.slice()); idx = 0; flipped = false; render(); });
        hydrate(container);
      }
      render();
      window.scrollTo({ top: 0 });
    }

    levels();
  }

  /* ============================================================ PRICING */
  async function pricing(container) {
    const feat = (t) => `<div class="price-feat">${icon("check")} ${t}</div>`;
    container.innerHTML = `
    <div class="container">
      <div class="page-head text-center reveal" style="max-width:620px;margin-inline:auto">
        <span class="eyebrow">Pricing</span>
        <h1 class="h1" style="margin:8px 0 12px">Simple plans for every goal</h1>
        <p class="lead">Start free. Upgrade when you're ready to go all-in on your score.</p>
      </div>
      <div class="price-grid" style="margin-top:18px">
        <div class="card price-card reveal">
          <h3 class="h3">Free</h3><div class="price-amt">$0<small>/forever</small></div>
          <p class="muted small" style="margin-bottom:16px">Everything you need to get started.</p>
          ${feat("Full-length practice tests")}${feat("Question bank by skill")}${feat("Instant scoring &amp; explanations")}${feat("Progress saved on this device")}
          <a class="btn btn-outline btn-block" href="#/tests" style="margin-top:auto">Get started</a>
        </div>
        <div class="card price-card featured reveal d1">
          <h3 class="h3">Pro</h3><div class="price-amt">$12<small>/month</small></div>
          <p class="muted small" style="margin-bottom:16px">For focused, serious prep.</p>
          ${feat("Everything in Free")}${feat("Unlimited shuffled practice")}${feat("Reading &amp; vocabulary drills")}${feat("Detailed skill analytics")}${feat("Cross-device cloud sync")}
          <a class="btn btn-primary btn-block" href="#/account" style="margin-top:auto">Upgrade to Pro</a>
        </div>
        <div class="card price-card reveal d2">
          <h3 class="h3">Elite</h3><div class="price-amt">$29<small>/month</small></div>
          <p class="muted small" style="margin-bottom:16px">Maximum support to the top.</p>
          ${feat("Everything in Pro")}${feat("Personalized study plan")}${feat("Priority new question packs")}${feat("Goal tracking to test day")}
          <a class="btn btn-dark btn-block" href="#/account" style="margin-top:auto">Go Elite</a>
        </div>
      </div>
      <p class="tiny faint text-center" style="margin-top:24px">Plans are illustrative for this demo — no payment is processed.</p>
    </div>`;
    hydrate(container);
  }

  /* ====================================================== ADMIN — REPORTS */
  async function reports(container) {
    const user = Apex.store.currentUser();
    const adminEmail = ((Apex.config && Apex.config.adminEmail) || "").toLowerCase();
    const isAdmin = user && adminEmail && (user.email || "").toLowerCase() === adminEmail;
    if (!isAdmin) {
      container.innerHTML = `<div class="container" style="max-width:640px">
        <div class="empty card card-pad reveal" style="margin-top:48px"><div class="big-icon">${icon("lock")}</div>
          <h2 class="h3">Admins only</h2>
          <p class="muted">Sign in as the administrator${adminEmail ? ` (<b>${esc(Apex.config.adminEmail)}</b>)` : " (set adminEmail in config.js)"} to view problem reports.</p></div>
      </div>`;
      return;
    }
    let list = [];
    try { list = await Apex.store.listReports(); } catch (e) { list = []; }
    const open = list.filter((r) => r.status !== "resolved").length;
    const row = (r) => `<div class="card card-pad reveal" style="margin-bottom:12px">
      <div class="row between" style="align-items:flex-start;gap:14px">
        <div style="flex:1;min-width:0">
          <div style="white-space:pre-wrap;line-height:1.6${r.status === "resolved" ? ";opacity:.55" : ""}">${esc(r.message)}</div>
          <div class="tiny muted" style="margin-top:8px">${esc(r.email || "anonymous")} · ${esc(fmtDate(new Date(r.created_at).getTime()))}${r.context ? ` · <span style="opacity:.75">${esc(r.context)}</span>` : ""}</div>
        </div>
        <button class="btn btn-sm ${r.status === "resolved" ? "btn-outline" : "btn-primary"}" data-resolve="${esc(String(r.id))}" style="flex:none">${r.status === "resolved" ? icon("check") + " Resolved" : "Mark resolved"}</button>
      </div>
    </div>`;
    const localNote = Apex.store.mode() === "supabase" ? "" : ` · <b>Local mode</b> — only reports from this browser appear here; turn on Supabase to collect every student's reports.`;
    container.innerHTML = `<div class="container" style="max-width:880px">
      <div class="page-head reveal"><span class="eyebrow">${icon("flag", 'style="width:14px;height:14px;display:inline;vertical-align:-2px"')} Admin</span>
        <h1 class="h1" style="margin-top:6px">Problem reports</h1>
        <p class="lead">${list.length} total · ${open} open.${localNote}</p></div>
      ${list.length ? list.map(row).join("") : `<div class="empty card card-pad"><div class="big-icon">${icon("check")}</div><p class="muted">No reports yet — all clear.</p></div>`}
    </div>`;
    Apex.util.qsa("[data-resolve]", container).forEach((b) => b.addEventListener("click", async () => {
      const id = b.dataset.resolve; const rec = list.find((x) => String(x.id) === String(id));
      b.disabled = true;
      try { await Apex.store.updateReport(id, { status: rec && rec.status === "resolved" ? "open" : "resolved" }); reports(container); }
      catch (e) { b.disabled = false; Apex.ui.toast("Couldn't update — try again.", "bad"); }
    }));
    hydrate(container);
  }

  return {
    auth, dashboard, data: dashboard, tests: digitalExams,
    questionBank, shuffled, reading, vocab, pricing, results, profile, reports,
  };
})();
