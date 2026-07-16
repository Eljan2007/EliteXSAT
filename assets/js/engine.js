/* ==========================================================================
   Apex SAT Prep — Digital SAT test engine
   Renders a full-screen, module-based testing experience: timed modules,
   MCQ + grid-in questions, answer elimination, flag-for-review, a question
   navigator, section breaks, and resume support. On finish it grades the
   attempt and hands it back via Apex.engine.onFinish(attempt).
   Attaches to: Apex.engine
   ========================================================================== */
window.Apex = window.Apex || {};

Apex.engine = (function () {
  const { qs, esc, fmtTime, uid } = Apex.util;
  const icon = Apex.icons.get;
  const meta = Apex.bank.sectionMeta;

  let state = null;     // the live session
  let refs = {};        // cached DOM nodes
  let tick = null;      // setInterval handle
  let breakTick = null;
  let mounted = false;
  let saveTimer = null;
  let exitAsking = false;   // guards against stacking exit confirms (e.g. rapid Back presses)

  const api = { onFinish: null, onExit: null };

  /* --------------------------------------------------- session bootstrap */
  function start(exam, resume) {
    const startedAt = resume && resume.startedAt ? resume.startedAt : Date.now();
    state = {
      exam,
      sectionIndex: resume ? resume.sectionIndex : 0,
      moduleIndex: resume ? resume.moduleIndex : 0,
      questionIndex: resume ? resume.questionIndex : 0,
      responses: resume ? resume.responses || {} : {},
      flags: new Set(resume ? resume.flags || [] : []),
      elim: resume ? resume.elim || {} : {},
      remainingMap: resume ? resume.remainingMap || {} : {},
      routing: resume ? resume.routing || {} : {},
      presentedModuleIds: resume ? resume.presentedModuleIds || [] : [],
      sectionModules: null,
      elimMode: false,
      annotate: resume ? resume.annotate || false : false,
      annot: resume ? resume.annot || {} : {},
      splitPct: 50,
      dragging: false,
      phase: "test",
      startedAt,
      navOpen: false,
      clockHidden: false,
    };
    mount();
    buildSectionModules();
    enterModule(false);   // preserve initial/resumed questionIndex
    window.addEventListener("beforeunload", beforeUnload);
    // Guard the browser Back button: push a history entry so a Back press is
    // caught here (instead of silently swapping the page under the exam).
    history.pushState({ examGuard: true }, "");
    window.addEventListener("popstate", onPopState);
  }

  // Back button pressed while a test is live → keep the exam in place and ask
  // to leave (same discard-and-delete flow as the logo / Exit button).
  function onPopState() {
    if (!active()) return;
    history.pushState({ examGuard: true }, "");   // re-arm so we stay put while asking
    requestExit();
  }

  const active = () => !!state;

  /* ----------------------------------------------------------- mounting */
  function mount() {
    if (mounted) return;
    const root = document.createElement("div");
    root.className = "engine qbank-runner";   // share the Bluebook chrome CSS with the Question Bank runner
    root.id = "engine-root";
    root.innerHTML = `
      <div class="engine-top qr-top">
        <div class="qr-top-left">
          <button class="qr-logo" data-logo-home aria-label="EliteXSAT — leave test"><img src="${Apex.config.logo}" alt="EliteXSAT" /></button>
          <div class="qr-top-titles">
            <div class="et-title" data-title></div>
            <button class="qr-directions" data-directions>Directions ${icon("chevron-down")}</button>
          </div>
        </div>
        <div class="qr-clock-wrap">
          <div class="qr-time" data-clock>--:--</div>
          <button class="qr-hide" data-hideclock>Hide</button>
        </div>
        <div class="qr-tools">
          <button class="qr-tool2" data-annotate aria-pressed="false">${icon("pencil")}<span>Annotate</span></button>
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
    document.body.appendChild(root);
    document.body.style.overflow = "hidden";
    Apex.bgTint.restore(root);   // re-apply the student's saved background color
    refs = {
      root,
      title: qs("[data-title]", root),
      clock: qs("[data-clock]", root),
      hide: qs("[data-hideclock]", root),
      stage: qs("[data-stage]", root),
      stageInner: qs("[data-stage-inner]", root),
      bottom: qs("[data-bottom]", root),
    };
    bindEvents();
    mounted = true;
  }

  function teardown() {
    try { Apex.calc.reset(); } catch (e) {}
    stopTick(); clearInterval(breakTick); breakTick = null;
    window.removeEventListener("beforeunload", beforeUnload);
    window.removeEventListener("popstate", onPopState);
    document.removeEventListener("keydown", onKey);
    if (refs.root) refs.root.remove();
    document.body.style.overflow = "";
    refs = {}; mounted = false; state = null;
  }

  const beforeUnload = (e) => { e.preventDefault(); e.returnValue = ""; return ""; };

  /* ------------------------------------------------------- module logic */
  const section = () => state.exam.sections[state.sectionIndex];
  // Live ordered module list for the CURRENT section. Adaptive sections start with
  // only Module 1; the chosen Module 2 (easy/hard) is appended by routeModuleTwo().
  const sectionModules = () => state.sectionModules || section().modules;
  const module_ = () => sectionModules()[state.moduleIndex];
  const questions = () => module_().questions;
  const question = () => questions()[state.questionIndex];
  const isLastModuleOfSection = () => state.moduleIndex >= sectionModules().length - 1;
  const isLastSection = () => state.sectionIndex >= state.exam.sections.length - 1;

  // Build the live module list when entering a section. Standard → all modules;
  // adaptive → just the Module-1 form (stage 1), plus the already-routed Module 2 on resume.
  function buildSectionModules() {
    const sec = section();
    if (Apex.bank.sectionIsAdaptive(sec)) {
      const m1 = sec.modules.find((m) => (m.stage || 1) === 1) || sec.modules[0];
      const list = [m1];
      const routed = state.routing && state.routing[sec.id];
      if (routed && routed.moduleId) {
        const m2 = sec.modules.find((m) => m.id === routed.moduleId);
        if (m2) list.push(m2);
      }
      state.sectionModules = list;
    } else {
      // Non-adaptive: Module 1 + a single FIXED Module 2 (e.g. a "hard-only" form) —
      // everyone gets the same path. Falls back to the raw module list when the section
      // isn't split into stage-2 variants at all (normal multi-module exams).
      const stage2 = (sec.modules || []).filter((m) => m.stage === 2);
      if (stage2.length) {
        const m1s = (sec.modules || []).filter((m) => (m.stage || 1) === 1);
        const fixed = stage2.find((m) => m.variant === "hard") || stage2[0];
        state.sectionModules = m1s.concat([fixed]);
      } else {
        state.sectionModules = sec.modules.slice();
      }
    }
  }

  // ADAPTIVE ROUTING — after Module 1, choose the easy/hard Module 2 by the Module-1
  // raw score. Real Digital SAT thresholds: R&W ≥19 correct → hard form; Math ≥14 → hard.
  function routeModuleTwo(sec) {
    const m1 = state.sectionModules[0];
    const correct = (m1.questions || []).reduce((n, q) =>
      n + (Apex.scoring.isCorrect(q, state.responses[q.id]) ? 1 : 0), 0);
    const threshold = sec.routeThreshold != null ? sec.routeThreshold : (sec.id === "math" ? 14 : 19);
    const wantHard = correct >= threshold;
    let m2 = sec.modules.find((m) => m.stage === 2 && m.variant === (wantHard ? "hard" : "easy"));
    if (!m2) m2 = sec.modules.find((m) => m.stage === 2);   // fallback if one variant is missing
    if (m2) {
      state.sectionModules.push(m2);
      state.routing[sec.id] = { correct, threshold, variant: m2.variant || null, moduleId: m2.id };
    }
  }
  // Full-length tests (digital SAT sims, full practice tests, and the shuffle mock)
  // get the real ~10-min break between Reading & Writing and Math; short drills don't.
  const breakSeconds = () => {
    const t = state.exam.type;
    const fullLength = (t === "full" || t === "digital" || t === "shuffle");
    return (fullLength ? (Apex.config.breakMinutes || 10) : 0) * 60;
  };

  function enterModule(resetIndex = true) {
    state.phase = "test";
    if (resetIndex) state.questionIndex = 0;
    const mid = module_().id;
    if (state.presentedModuleIds.indexOf(mid) < 0) state.presentedModuleIds.push(mid);
    if (state.remainingMap[mid] == null) {
      const mins = module_().minutes || Apex.config.defaultModuleMinutes[section().id] || 30;
      state.remainingMap[mid] = mins * 60;
    }
    startTick();
    renderQuestion();
    persistNow();
  }

  function startTick() {
    stopTick();
    let n = 0;
    tick = setInterval(() => {
      const mid = module_().id;
      state.remainingMap[mid] = Math.max(0, state.remainingMap[mid] - 1);
      updateClock();
      if (state.remainingMap[mid] <= 0) {
        stopTick();
        Apex.ui.toast("Time's up for this module.", "bad", 3600);
        showModuleReview();
      }
      if (++n % 5 === 0) persistNow();
    }, 1000);
    updateClock();
  }
  function stopTick() { if (tick) { clearInterval(tick); tick = null; } }

  function updateClock() {
    if (!refs.clock) return;
    const mid = module_().id, sec = state.remainingMap[mid] || 0;
    if (state.clockHidden) { refs.clock.classList.add("hidden"); refs.clock.textContent = ""; }
    else { refs.clock.classList.remove("hidden"); refs.clock.textContent = fmtTime(sec); }
    refs.clock.classList.toggle("warn", !state.clockHidden && sec <= 300 && sec > 0);
    if (refs.hide) refs.hide.textContent = state.clockHidden ? "Show" : "Hide";
  }

  /* ---------------------------------------------------------- rendering */
  function renderQuestion() {
    const sec = section(), mod = module_(), q = question();
    const sMeta = meta[sec.id] || { name: sec.id, shortName: sec.id };
    // Top-left shows the TEST name (e.g. "International Version A"), like Bluebook — not the skill.
    refs.title.textContent = Apex.bank.fullName(state.exam) || q.skill || q.domain || mod.name || sMeta.shortName || sMeta.name;

    const hasPassage = !!q.passage;
    const flagged = state.flags.has(q.id);
    const annot = (state.annot && state.annot[q.id]) || {};
    const paneTool = (side) => `<div class="qr-pane-toolbar"><button class="qr-pane-tool" data-pane="${side}" title="Expand this panel" aria-label="Expand this panel">${icon("maximize")}</button></div>`;

    const headHTML = `
      <div class="qr-qhead">
        <span class="q-num">${state.questionIndex + 1}</span>
        <button class="qr-mark ${flagged ? "on" : ""}" data-flag>${icon("bookmark")}<span>${flagged ? "Marked for Review" : "Mark for Review"}</span></button>
        ${q.type === "grid" ? "" : `<button class="qr-abc ${state.elimMode ? "on" : ""}" data-elimmode title="Cross out answer choices">ABC</button>`}
      </div>
      <div class="qr-rule qr-rule-sm"></div>`;

    const promptHTML = `<div class="q-prompt ${hasPassage ? "read" : ""}" data-annot-target="prompt">${annot.prompt != null ? annot.prompt : q.prompt}</div>`;

    let answerHTML;
    if (q.type === "grid") {
      const val = state.responses[q.id] || "";
      answerHTML = `
        <div class="grid-in">
          <input class="input" data-grid type="text" inputmode="text" autocomplete="off"
                 value="${esc(val)}" aria-label="Your answer" />
        </div>`;
    } else {
      const selected = state.responses[q.id];
      const elimSet = state.elim[q.id] || [];
      answerHTML = `
        <div class="choices" role="radiogroup">
          ${q.options.map((o) => {
            const isSel = selected === o.id, isElim = elimSet.includes(o.id);
            return `<button class="choice ${isSel ? "selected" : ""} ${isElim ? "eliminated" : ""}" data-opt="${o.id}" role="radio" aria-checked="${isSel}"><span class="ch-key">${o.id}</span><span class="ch-text">${o.text}</span>${state.elimMode ? `<span class="elim-x" data-elim="${o.id}" title="Eliminate" style="margin-left:auto;align-self:center;color:var(--muted-2)">${icon(isElim ? "refresh" : "x", 'style="width:15px;height:15px"')}</span>` : ""}</button>`;
          }).join("")}
        </div>`;
    }

    const right = `<div class="pane pane-right">${hasPassage ? paneTool("right") : ""}${headHTML}${promptHTML}${answerHTML}</div>`;
    const passageHTML = annot.passage != null ? annot.passage : (q.passage || "");
    const body = hasPassage
      ? `<div class="engine-body two-pane ${state.annotate ? "annotating" : ""}"><div class="pane pane-left">${paneTool("left")}<div class="passage" data-annot-target="passage">${passageHTML}</div></div><div class="qr-splitter" title="Drag to resize the panels"></div>${right}</div>`
      : `<div class="engine-body single ${state.annotate ? "annotating" : ""}">${right}</div>`;

    refs.stageInner.innerHTML = body;
    const ebTwo = qs(".engine-body.two-pane", refs.root);
    if (ebTwo) { ebTwo.style.setProperty("--lf", state.splitPct); ebTwo.style.setProperty("--rf", 100 - state.splitPct); }
    refs.stageInner.firstElementChild.classList.add("view-enter");
    const isMath = section().id === "math";
    if (!isMath && Apex.calc.isOpen()) Apex.calc.hide();   // calculator is Math-only
    const calcBtn = qs("[data-calc]", refs.root);
    if (calcBtn) { calcBtn.style.display = isMath ? "" : "none"; calcBtn.classList.toggle("on", Apex.calc.isOpen()); calcBtn.setAttribute("aria-pressed", Apex.calc.isOpen()); }
    if (isMath) Apex.fractions(refs.stageInner);   // render a/b as stacked fractions in Math
    renderBottom();
    updateClock();
  }

  function renderBottom() {
    const total = questions().length, i = state.questionIndex;
    const user = Apex.store.currentUser();
    refs.bottom.innerHTML = `
      <div class="row gap-2" style="min-width:120px">
        <div class="avatar" style="width:30px;height:30px;font-size:.78rem">${esc(Apex.util.initials(user ? user.name : "You"))}</div>
        <span class="small muted">${esc(user ? user.name.split(" ")[0] : "You")}</span>
      </div>
      <button class="nav-pill" data-nav-open aria-haspopup="true">${icon("grid")} Question ${i + 1} of ${total}${icon("chevron-up")}</button>
      <div class="row gap-2" style="min-width:120px;justify-content:flex-end">
        <button class="btn btn-outline btn-sm" data-back ${i === 0 ? "disabled" : ""} aria-label="Previous question">${icon("chevron-left")}<span class="label-full">Back</span></button>
        <button class="btn btn-primary btn-sm" data-next>${i === total - 1 ? "Review" : "Next"}${icon("chevron-right")}</button>
      </div>`;
  }

  /* ------------------------------------------------------- navigator UI */
  function toggleNavigator(force) {
    const open = force != null ? force : !state.navOpen;
    state.navOpen = open;
    qs(".navigator", refs.root)?.remove();
    if (!open) return;
    const total = questions().length;
    const cells = questions().map((q, idx) => {
      const answered = state.responses[q.id] != null && state.responses[q.id] !== "";
      const flagged = state.flags.has(q.id);
      return `<button class="nav-cell ${answered ? "answered" : ""} ${idx === state.questionIndex ? "current" : ""} ${flagged ? "flagged" : ""}" data-jump="${idx}">${idx + 1}</button>`;
    }).join("");
    const answeredCount = questions().filter((q) => state.responses[q.id] != null && state.responses[q.id] !== "").length;
    const pop = document.createElement("div");
    pop.className = "navigator";
    pop.innerHTML = `
      <div class="row between">
        <strong>${esc(module_().name || "Module")} — ${answeredCount}/${total} answered</strong>
        <button class="btn btn-ghost btn-sm" data-nav-open>${icon("x")}</button>
      </div>
      <div class="nav-grid">${cells}</div>
      <div class="nav-legend">
        <span><span class="nav-cell answered" style="width:16px;height:16px;border:none"></span> Answered</span>
        <span><span class="dot" style="background:var(--warn)"></span> Marked for review</span>
        <span><span class="nav-cell current" style="width:16px;height:16px"></span> Current</span>
      </div>
      <button class="btn btn-dark btn-block" data-next style="margin-top:16px">Go to module review${icon("arrow-right")}</button>`;
    refs.root.appendChild(pop);
  }

  /* --------------------------------------------------- module review UI */
  function showModuleReview() {
    stopTick();
    try { Apex.calc.hide(); } catch (e) {}   // un-dock the calculator so the review screen is full-width
    state.phase = "review";
    toggleNavigator(false);
    const total = questions().length;
    const answered = questions().filter((q) => state.responses[q.id] != null && state.responses[q.id] !== "").length;
    const unanswered = total - answered;
    const flagged = questions().filter((q) => state.flags.has(q.id)).length;
    const cells = questions().map((q, idx) => {
      const isA = state.responses[q.id] != null && state.responses[q.id] !== "";
      const fl = state.flags.has(q.id);
      return `<button class="nav-cell ${isA ? "answered" : ""} ${fl ? "flagged" : ""}" data-jump="${idx}">${idx + 1}</button>`;
    }).join("");
    const nextLabel = isLastModuleOfSection()
      ? (isLastSection() ? "Finish &amp; see score" : "Continue to next section")
      : "Continue to next module";
    refs.stageInner.innerHTML = `
      <div class="center-screen view-enter"><div class="inner" style="max-width:600px">
        <h2 class="h2">You've reached the end of ${esc(module_().name || "this module")}</h2>
        <p class="lead" style="margin:10px 0 22px">Review your answers below. You can jump back to any question${flagged ? `, including the <b>${flagged}</b> you marked for review` : ""}.</p>
        <div class="row gap-3 center" style="margin-bottom:22px">
          <span class="badge badge-ok">${icon("check")} ${answered} answered</span>
          <span class="badge badge-bad">${icon("alert")} ${unanswered} unanswered</span>
          <span class="badge badge-warn">${icon("flag")} ${flagged} marked</span>
        </div>
        <div class="panel card-pad"><div class="nav-grid nav-review">${cells}</div></div>
        <div class="row gap-2 center" style="margin-top:24px">
          <button class="btn btn-outline" data-review-back>${icon("chevron-left")} Back to questions</button>
          <button class="btn btn-primary btn-lg" data-continue>${nextLabel} ${icon("arrow-right")}</button>
        </div>
      </div></div>`;
    refs.bottom.innerHTML = "";
    persistNow();
  }

  /* ------------------------------------------------------------- breaks */
  function showBreak() {
    stopTick();
    try { Apex.calc.hide(); } catch (e) {}
    state.phase = "break";
    const secs = breakSeconds();
    const nextSec = meta[state.exam.sections[state.sectionIndex + 1].id];
    refs.title.innerHTML = `Break<small>Section complete</small>`;
    const render = (left) => {
      refs.stageInner.innerHTML = `
        <div class="center-screen view-enter"><div class="inner">
          <div class="big-icon" style="background:var(--ok-bg);color:var(--ok)">${icon("check-circle")}</div>
          <h2 class="h2">Section complete</h2>
          <p class="lead" style="margin:10px 0 6px">Nice work. Next up: <b>${esc(nextSec.name)}</b>.</p>
          ${secs ? `<p class="muted break-note">Take a short break. The next section begins automatically when the timer ends.</p>
            <div class="timer" style="font-size:2rem;margin:22px auto;display:inline-flex">${icon("timer")}<span data-break>${fmtTime(left)}</span></div><br>` : `<p class="muted">Take a breath whenever you're ready.</p><div style="height:18px"></div>`}
          <button class="btn btn-primary btn-lg" data-section-next>${secs ? "Skip break &amp; continue" : "Continue"} ${icon("arrow-right")}</button>
        </div></div>`;
    };
    refs.bottom.innerHTML = "";
    let left = secs;
    render(left);
    if (secs) {
      clearInterval(breakTick);
      breakTick = setInterval(() => {
        left--;
        const el = qs("[data-break]", refs.root);
        if (el) el.textContent = fmtTime(left);
        if (left <= 0) { clearInterval(breakTick); proceedToNextSection(); }
      }, 1000);
    }
    persistNow();
  }

  /* ------------------------------------------------------- progression */
  function nextQuestion() {
    if (state.phase !== "test") return;
    if (state.questionIndex < questions().length - 1) {
      state.questionIndex++; renderQuestion(); toggleNavigator(false); persistNow();
    } else {
      showModuleReview();
    }
  }
  function prevQuestion() {
    if (state.questionIndex > 0) { state.questionIndex--; renderQuestion(); toggleNavigator(false); persistNow(); }
  }
  function jumpTo(idx) {
    state.phase = "test";
    state.questionIndex = Apex.util.clamp(idx, 0, questions().length - 1);
    if (!tick) startTick();
    renderQuestion(); toggleNavigator(false); persistNow();
  }

  function proceed() {
    const sec = section();
    // Adaptive: after Module 1, choose Module 2 (easy/hard) from the Module-1 score.
    // Only sections with BOTH an easy and a hard form route; otherwise it's linear.
    if (Apex.bank.sectionIsAdaptive(sec) && state.moduleIndex === 0 && state.sectionModules.length === 1) routeModuleTwo(sec);
    if (!isLastModuleOfSection()) { state.moduleIndex++; enterModule(); }
    else if (!isLastSection()) { showBreak(); }
    else { finish(); }
  }
  function proceedToNextSection() {
    clearInterval(breakTick); breakTick = null;
    state.sectionIndex++; state.moduleIndex = 0; buildSectionModules(); enterModule();
  }

  /* ---------------------------------------------------------- finishing */
  function finish() {
    stopTick();
    const exam = state.exam;
    // Grade only the modules actually presented this attempt (adaptive: Module 1 + the chosen Module 2).
    const presented = [];
    exam.sections.forEach((s) => (s.modules || []).forEach((m) => {
      if (state.presentedModuleIds.indexOf(m.id) >= 0) presented.push({ sec: s, mod: m });
    }));
    const flat = [];
    const order = [];
    presented.forEach(({ sec, mod }) => (mod.questions || []).forEach((q) => {
      flat.push(q); order.push({ section: sec.id, moduleId: mod.id, qid: q.id });
    }));
    let score;
    if (exam.scoreMode === "weighted" && Apex.scoring.gradeWeighted) {
      // Shuffle Mock: weighted per-question scoring, with a lower cap on any section
      // whose adaptive route landed on the EASY (Module-1 substitute) 2nd module.
      const caps = {};
      (exam.sections || []).forEach((s) => {
        const r = state.routing && state.routing[s.id];
        caps[s.id] = (r && r.variant === "easy") ? (exam.easyCap || 600) : 800;
      });
      score = Apex.scoring.gradeWeighted(flat, state.responses, { caps });
    } else {
      score = Apex.scoring.grade(flat, state.responses);
    }
    const attempt = {
      id: "a_" + uid(),
      examId: exam.id,
      examTitle: exam.title,
      type: exam.type,
      startedAt: state.startedAt,
      finishedAt: Date.now(),
      durationSec: Math.round((Date.now() - state.startedAt) / 1000),
      responses: state.responses,
      flags: Array.from(state.flags),
      order,
      score,
    };
    window.removeEventListener("beforeunload", beforeUnload);
    Promise.resolve(Apex.store.saveAttempt(attempt))
      .then(() => Apex.store.clearProgress())
      .finally(() => { teardown(); if (api.onFinish) api.onFinish(attempt); });
  }

  async function requestExit() {
    if (exitAsking) return;   // don't stack dialogs on rapid Back presses
    exitAsking = true;
    const ok = await Apex.ui.confirm({
      title: "Leave this test?",
      message: "Your progress will not be saved. This attempt will be deleted and you won't be able to resume it.",
      confirmText: "Leave & delete", cancelText: "Keep testing", danger: true,
    });
    exitAsking = false;
    if (!ok) return;
    // Abandoned mid-test → wipe any saved progress so nothing lingers or resumes.
    try { await Promise.resolve(Apex.store.clearProgress()); } catch (e) {}
    window.removeEventListener("beforeunload", beforeUnload);
    teardown();
    if (api.onExit) api.onExit();
  }

  /* ------------------------------------------------------- persistence */
  function snapshot() {
    return {
      examId: state.exam.id,
      sectionIndex: state.sectionIndex,
      moduleIndex: state.moduleIndex,
      questionIndex: state.questionIndex,
      responses: state.responses,
      flags: Array.from(state.flags),
      elim: state.elim,
      remainingMap: state.remainingMap,
      routing: state.routing,
      presentedModuleIds: state.presentedModuleIds,
      annot: state.annot,
      annotate: state.annotate,
      startedAt: state.startedAt,
      phase: "test",
      savedAt: Date.now(),
    };
  }
  function persistNow() { if (state) Apex.store.saveProgress(snapshot()); }
  function persistSoon() { clearTimeout(saveTimer); saveTimer = setTimeout(persistNow, 600); }

  /* ----------------------------------------------------- event binding */
  function bindEvents() {
    const root = refs.root;

    root.addEventListener("click", (e) => {
      const t = e.target;
      if (!t.closest(".annot-pop") && !t.closest("mark.annot")) qs(".annot-pop", root)?.remove();
      if (t.closest(".annot-pop")) return;
      if (t.closest(".annot-toolbar")) return;
      if (!t.closest(".qr-more-menu") && !t.closest("[data-more]")) qs(".qr-more-menu", root)?.remove();
      if (!t.closest(".qr-bg-menu") && !t.closest("[data-bg]")) qs(".qr-bg-menu", root)?.remove();
      if (t.closest("[data-logo-home]")) return requestExit();
      if (t.closest("[data-exit]")) return requestExit();
      if (t.closest("[data-hideclock]")) { state.clockHidden = !state.clockHidden; updateClock(); return; }
      if (t.closest("[data-ref]")) return openReference();
      if (t.closest("[data-directions]")) return openDirections();
      if (t.closest("[data-annotate]")) {
        state.annotate = !state.annotate;
        const b = t.closest("[data-annotate]"); b.classList.toggle("on", state.annotate); b.setAttribute("aria-pressed", state.annotate);
        qs(".engine-body", root)?.classList.toggle("annotating", state.annotate);
        return;
      }
      const mk = t.closest("mark.annot"); if (mk && state.annotate) { e.stopPropagation(); return openNotePopover(mk); }
      if (t.closest("[data-calc]")) return Apex.calc.toggle(root);   // the calc module keeps the button's "on" state in sync
      if (t.closest("[data-bg]")) { Apex.theme.toggle(); return; }   // one-click instant White↔Dark (no popup)
      if (t.closest("[data-report]")) return Apex.ui.reportModal();
      if (t.closest("[data-more]")) return openMoreMenu(t.closest("[data-more]"));
      const pane = t.closest("[data-pane]");
      if (pane) { const eb = qs(".engine-body.two-pane", root); if (eb) { state.splitPct = pane.dataset.pane === "left" ? (state.splitPct > 55 ? 50 : 60) : (state.splitPct < 45 ? 50 : 40); eb.style.setProperty("--lf", state.splitPct); eb.style.setProperty("--rf", 100 - state.splitPct); } return; }
      if (t.closest("[data-nav-open]")) return toggleNavigator();
      if (t.closest("[data-next]")) return nextQuestion();
      if (t.closest("[data-back]")) return prevQuestion();
      if (t.closest("[data-continue]")) return proceed();
      if (t.closest("[data-section-next]")) return proceedToNextSection();
      if (t.closest("[data-review-back]")) { state.phase = "test"; state.questionIndex = questions().length - 1; if (!tick) startTick(); renderQuestion(); return; }
      const jump = t.closest("[data-jump]");
      if (jump) return jumpTo(+jump.dataset.jump);
      if (t.closest("[data-elimmode]")) { state.elimMode = !state.elimMode; renderQuestion(); return; }
      const elim = t.closest("[data-elim]");
      if (elim) { e.stopPropagation(); return toggleElim(elim.dataset.elim); }
      if (t.closest("[data-flag]")) return toggleFlag();
      const opt = t.closest("[data-opt]");
      if (opt) return selectOption(opt.dataset.opt);
    });

    // draggable splitter between the passage & question panes
    root.addEventListener("mousedown", (e) => {
      if (!e.target.closest(".qr-splitter")) return;
      const eb = qs(".engine-body.two-pane", root); if (!eb) return;
      e.preventDefault();
      state.dragging = true; eb.classList.add("splitting"); document.body.style.userSelect = "none";
      const onMove = (ev) => { const r = eb.getBoundingClientRect(); const pct = Math.max(22, Math.min(78, ((ev.clientX - r.left) / r.width) * 100)); state.splitPct = pct; eb.style.setProperty("--lf", pct); eb.style.setProperty("--rf", 100 - pct); };
      const onUp = () => { eb.classList.remove("splitting"); document.body.style.userSelect = ""; state.dragging = false; document.removeEventListener("mousemove", onMove); document.removeEventListener("mouseup", onUp); };
      document.addEventListener("mousemove", onMove); document.addEventListener("mouseup", onUp);
    });

    // Close the annotate toolbar whenever a new gesture starts elsewhere.
    root.addEventListener("mousedown", (e) => {
      if (!e.target.closest(".annot-toolbar")) qs(".annot-toolbar", root)?.remove();
    });
    // annotation: when Annotate is on, selecting text opens a small toolbar above the
    // selection to pick a highlight colour (blue / light-red / green) or an underline
    // style (straight / wavy).
    root.addEventListener("mouseup", (e) => {
      if (state.dragging || state.annotate !== true) return;
      if (e.target.closest(".annot-toolbar")) return;
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed || !sel.rangeCount) { qs(".annot-toolbar", root)?.remove(); return; }
      const range = sel.getRangeAt(0);
      const node = range.commonAncestorContainer;
      const host = node.nodeType === 1 ? node : node.parentElement;
      const target = host && host.closest("[data-annot-target]");
      if (!target || !target.contains(range.endContainer)) { qs(".annot-toolbar", root)?.remove(); return; }
      showAnnotToolbar(range, target);
    });

    root.addEventListener("input", (e) => {
      if (e.target.matches("[data-grid]")) {
        const q = question();
        state.responses[q.id] = e.target.value.trim();
        persistSoon();
      }
    });

    document.addEventListener("keydown", onKey);
  }

  /* --------------------------------------------- Bluebook chrome helpers */
  function openDirections() {
    Apex.ui.modal({ title: "Directions", size: "lg",
      body: `<div class="small" style="line-height:1.75">Answer every question in this module. You can <b>mark a question for review</b> (the bookmark), <b>cross out answer choices</b> you've ruled out (the <span style="text-decoration:line-through">ABC</span> tool), and <b>annotate</b> the passage by turning on Annotate and selecting text. Use the navigator at the bottom to move between questions. The timer at the top counts <b>down</b> — when it reaches 0:00 the module ends automatically.</div>`,
      actions: `<button class="btn btn-primary" data-close>Got it</button>` });
  }
  function openMoreMenu(btn) {
    qs(".qr-more-menu", refs.root)?.remove();
    const r = btn.getBoundingClientRect();
    const menu = document.createElement("div");
    menu.className = "qr-more-menu";
    menu.style.right = (window.innerWidth - r.right) + "px";
    menu.style.top = (r.bottom + 6) + "px";
    menu.innerHTML = `${section().id === "math" ? `<button class="qr-more-item" data-ref>${icon("file-text")} Reference sheet</button>` : ""}<button class="qr-more-item" data-exit>${icon("log-out")} Leave test</button>`;
    refs.root.appendChild(menu);
  }
  function saveAnnot(target) {
    if (!target) return;
    const q = question();
    (state.annot[q.id] = state.annot[q.id] || {})[target.dataset.annotTarget] = target.innerHTML;
  }
  function openNotePopover(mk) {
    qs(".annot-pop", refs.root)?.remove();
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
    refs.root.appendChild(pop);
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

  // Floating toolbar shown above a fresh text selection: pick a highlight colour or
  // an underline style. The chosen style is baked into the mark's class so it persists.
  function showAnnotToolbar(range, target) {
    qs(".annot-toolbar", refs.root)?.remove();
    const savedRange = range.cloneRange();
    const rect = range.getBoundingClientRect();
    const ulStraight = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4v6a5 5 0 0 0 10 0V4"/><line x1="6" y1="20" x2="18" y2="20"/></svg>`;
    const ulWavy = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4v6a5 5 0 0 0 10 0V4"/><path d="M5 19c1-1.6 3-1.6 4 0s3 1.6 4 0 3-1.6 4 0"/></svg>`;
    const tb = document.createElement("div");
    tb.className = "annot-toolbar";
    tb.innerHTML =
      `<button class="atb-color atb-blue" data-cls="hl-blue" aria-label="Blue highlight" title="Blue"></button>` +
      `<button class="atb-color atb-red" data-cls="hl-red" aria-label="Light red highlight" title="Light red"></button>` +
      `<button class="atb-color atb-green" data-cls="hl-green" aria-label="Green highlight" title="Green"></button>` +
      `<span class="atb-div"></span>` +
      `<button class="atb-ul" data-cls="ul-straight" aria-label="Underline" title="Underline">${ulStraight}</button>` +
      `<button class="atb-ul" data-cls="ul-wavy" aria-label="Wavy underline" title="Wavy underline">${ulWavy}</button>`;
    refs.root.appendChild(tb);
    const tbr = tb.getBoundingClientRect();
    const cx = Math.max(tbr.width / 2 + 8, Math.min(rect.left + rect.width / 2, window.innerWidth - tbr.width / 2 - 8));
    let top = rect.top - tbr.height - 10;
    if (top < 8) { top = rect.bottom + 12; tb.classList.add("below"); }
    tb.style.left = (cx - tbr.width / 2) + "px";   // centre on cx without a transform (the entrance animation owns transform)
    tb.style.top = top + "px";
    tb.addEventListener("mousedown", (e) => e.preventDefault());   // keep the selection alive
    tb.addEventListener("click", (e) => {
      const b = e.target.closest("[data-cls]"); if (!b) return;
      applyAnnot(savedRange, target, b.dataset.cls);
      tb.remove();
    });
  }
  function applyAnnot(range, target, cls) {
    const m = document.createElement("mark");
    m.className = "annot " + cls;
    try { range.surroundContents(m); }
    catch (err) { m.appendChild(range.extractContents()); range.insertNode(m); }
    const sel = window.getSelection(); if (sel) sel.removeAllRanges();
    saveAnnot(target);
  }

  function onKey(e) {
    if (!state || state.phase !== "test") return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const typing = e.target.matches("input, textarea");
    if (e.key === "ArrowRight") { e.preventDefault(); nextQuestion(); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); prevQuestion(); }
    else if (!typing && (e.key === "f" || e.key === "F")) { toggleFlag(); }
    else if (!typing && question().type !== "grid") {
      const map = { a: "A", b: "B", c: "C", d: "D", 1: "A", 2: "B", 3: "C", 4: "D" };
      const letter = map[e.key.toLowerCase()];
      if (letter && question().options.some((o) => o.id === letter)) selectOption(letter);
    }
  }

  function selectOption(optId) {
    const q = question();
    state.responses[q.id] = optId;
    Apex.util.qsa(".choice", refs.stage).forEach((c) => {
      const on = c.dataset.opt === optId;
      c.classList.toggle("selected", on);
      c.setAttribute("aria-checked", on ? "true" : "false");
    });
    persistNow();
  }
  function toggleElim(optId) {
    const q = question();
    const set = new Set(state.elim[q.id] || []);
    set.has(optId) ? set.delete(optId) : set.add(optId);
    state.elim[q.id] = Array.from(set);
    renderQuestion();
  }
  function toggleFlag() {
    const q = question();
    state.flags.has(q.id) ? state.flags.delete(q.id) : state.flags.add(q.id);
    const btn = qs("[data-flag]", refs.stage);
    if (btn) { btn.classList.toggle("on", state.flags.has(q.id)); btn.querySelector("span").textContent = state.flags.has(q.id) ? "Marked" : "Mark for review"; }
    persistNow();
  }

  function openReference() {
    Apex.ui.modal({
      title: "Math reference",
      size: "lg",
      body: `<div class="small" style="line-height:1.9">
        <p><b>Area</b> — rectangle: A = lw · triangle: A = ½bh · circle: A = πr²</p>
        <p><b>Circle</b> — circumference: C = 2πr · arc/sector scale by angle/360°</p>
        <p><b>Pythagorean theorem</b> — a² + b² = c²</p>
        <p><b>Special right triangles</b> — 30-60-90: x, x√3, 2x · 45-45-90: x, x, x√2</p>
        <p><b>Slope</b> — m = (y₂ − y₁) / (x₂ − x₁) · line: y = mx + b</p>
        <p><b>Quadratic formula</b> — x = (−b ± √(b² − 4ac)) / 2a</p>
        <p><b>Volume</b> — box: V = lwh · cylinder: V = πr²h</p>
        <p class="faint" style="margin-top:10px">A calculator is permitted on every Math question. The real test provides a built-in Desmos calculator.</p>
      </div>`,
      actions: `<button class="btn btn-primary" data-close>Got it</button>`,
    });
  }

  return { start, active, requestExit, get onFinish() { return api.onFinish; }, set onFinish(f) { api.onFinish = f; }, get onExit() { return api.onExit; }, set onExit(f) { api.onExit = f; } };
})();
