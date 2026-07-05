/* ==========================================================================
   EliteXSAT — Application bootstrap, left sidebar, and hash router
   Attaches to: Apex.app
   ========================================================================== */
window.Apex = window.Apex || {};

Apex.app = (function () {
  const { qs, qsa, esc, initials, clamp } = Apex.util;
  const icon = Apex.icons.get;

  let headerEl, appEl, booted = false;

  /* Collapsible icon-only sidebar (One UI focus mode) */
  let collapsed = Apex.util.store.get("sidebarCollapsed", false);
  function applyCollapsed(b) {
    document.body.classList.toggle("sidebar-collapsed", b);
    const btn = qs("[data-collapse]", headerEl);
    if (btn) { btn.title = b ? "Expand sidebar" : "Collapse sidebar";
      btn.innerHTML = `${icon(b ? "chevron-right" : "chevron-left")}<span class="si-label">${b ? "Expand" : "Collapse"}</span>`; }
    positionNavPill(); setTimeout(positionNavPill, 520);
  }
  function toggleCollapse() { collapsed = !collapsed; Apex.util.store.set("sidebarCollapsed", collapsed); applyCollapsed(collapsed); }
  function setFocus(b) { applyCollapsed(b ? true : collapsed); }   // focus collapses; else restore pref

  /* Sidebar navigation model (grouped into "windows") */
  const NAV = [
    { name: "tests",   route: "#/tests",   label: "Digital SAT",       icon: "file-text", group: 1 },
    { name: "bank",    route: "#/bank",    label: "Question Bank",     icon: "layers",    group: 1 },
    { name: "shuffle", route: "#/shuffle", label: "Shuffled Practice", icon: "shuffle",   group: 1 },
    { name: "data",    route: "#/data",    label: "Your Data",         icon: "bar-chart", group: 1 },
    { name: "reading", route: "#/reading", label: "Reading Article",   icon: "book-open", group: 2 },
    { name: "vocab",   route: "#/vocab",   label: "Vocabulary",        icon: "type",      group: 2 },
  ];

  const routes = [
    { re: /^#\/tests\/?$/,      name: "tests",   run: (c) => Apex.views.tests(c) },
    { re: /^#\/bank\/?$/,       name: "bank",    run: (c) => Apex.views.questionBank(c) },
    { re: /^#\/shuffle\/?$/,    name: "shuffle", run: (c) => Apex.views.shuffled(c) },
    { re: /^#\/data\/?$/,       name: "data",    run: (c) => Apex.views.data(c) },
    { re: /^#\/reading\/?$/,    name: "reading", run: (c) => Apex.views.reading(c) },
    { re: /^#\/vocab\/?$/,      name: "vocab",   run: (c) => Apex.views.vocab(c) },
    { re: /^#\/pricing\/?$/,    name: "pricing", run: (c) => Apex.views.pricing(c) },
    { re: /^#\/account\/?$/,    name: "account", run: (c) => Apex.views.profile(c) },
    { re: /^#\/reports\/?$/,    name: "reports", run: (c) => Apex.views.reports(c) },
    { re: /^#\/results\/(.+)$/, name: "results", run: (c, m) => Apex.views.results(c, { id: m[1] }) },
  ];

  function go(hash) { if (location.hash === hash) route(); else location.hash = hash; }
  function currentName() {
    const h = location.hash || "#/tests";
    for (const r of routes) if (h.match(r.re)) return r.name;
    return "tests";
  }

  /* ------------------------------------------------------------- sidebar */
  const brandImg = () => `<img class="brand-logo" src="${Apex.config.logo}" alt="${esc(Apex.config.brand)} logo" />`;
  const wordmark = () => `<span class="brand-name">Elite<b>X</b>SAT</span>`;
  const themeIcon = () => icon(Apex.theme.current() === "dark" ? "sun" : "moon");

  function navItem(n) {
    return `<a class="side-item" data-nav="${n.name}" href="${n.route}" title="${esc(n.label)}">${icon(n.icon)}<span class="si-label">${esc(n.label)}</span></a>`;
  }

  function renderShell() {
    const user = Apex.store.currentUser();
    if (!user) { headerEl.innerHTML = ""; document.body.classList.remove("has-sidebar"); return; }
    document.body.classList.add("has-sidebar");
    const g1 = NAV.filter((n) => n.group === 1).map((n) => navItem(n)).join("");
    const g2 = NAV.filter((n) => n.group === 2).map((n) => navItem(n)).join("");
    headerEl.innerHTML = `
      <div class="app-topbar">
        <button class="btn btn-ghost" data-drawer-open aria-label="Open menu">${icon("menu")}</button>
        <span class="brand">${brandImg()} ${wordmark()}</span>
        <button class="icon-btn" data-theme-toggle aria-label="Toggle theme" style="margin-left:auto;width:40px;height:40px">${themeIcon()}</button>
      </div>
      <div class="scrim" data-scrim></div>
      <aside class="sidebar" data-sidebar>
        <div class="side-win side-win-logo">
          <a class="side-logo" href="#/tests" data-logo aria-label="${esc(Apex.config.brand)} home">${brandImg()} ${wordmark()}</a>
        </div>
        <nav class="side-win side-nav"><span class="side-pill"></span>${g1}</nav>
        <nav class="side-win side-nav"><span class="side-pill"></span>${g2}</nav>
        <div class="side-spacer"></div>
        <nav class="side-win side-nav"><span class="side-pill"></span>
          <a class="side-item" data-nav="pricing" href="#/pricing" title="Pricing">${icon("tag")}<span class="si-label">Pricing</span></a>
          <button class="side-account" data-nav="account" data-account title="${esc(user.name)}">
            <span class="avatar" style="width:38px;height:38px;font-size:.82rem">${esc(initials(user.name))}</span>
            <span class="sa-text" style="min-width:0;overflow:hidden"><span class="sa-name">${esc(user.name.split(" ")[0])}</span><br><span class="sa-mail">${esc(user.email)}</span></span>
          </button>
          <button class="side-item" data-theme-toggle title="Appearance">${themeIcon()}<span class="si-label">Appearance</span></button>
          <button class="side-item" data-collapse title="Collapse sidebar">${icon("chevron-left")}<span class="si-label">Collapse</span></button>
        </nav>
      </aside>`;
    wireShell();
    updateActive();
    applyCollapsed(collapsed);
  }

  function updateActive() {
    const cur = currentName();
    qsa("[data-nav]", headerEl).forEach((el) => el.classList.toggle("active", el.dataset.nav === cur));
    positionNavPill();
  }

  /* Slide the crimson selection pill to the active nav item (per nav window). */
  function positionNavPill() {
    const active = qs("[data-nav].active", headerEl);
    const activeNav = active ? active.closest(".side-nav") : null;
    qsa(".side-nav", headerEl).forEach((nav) => {
      const pill = nav.querySelector(".side-pill"); if (!pill) return;
      if (nav === activeNav && active) {
        pill.style.transform = `translateY(${active.offsetTop}px)`;
        pill.style.height = active.offsetHeight + "px";
        pill.classList.add("show");
      } else pill.classList.remove("show");
    });
  }

  function closeDrawer() { qs("[data-sidebar]", headerEl)?.classList.remove("open"); qs("[data-scrim]", headerEl)?.classList.remove("show"); }
  function openDrawer() { qs("[data-sidebar]", headerEl)?.classList.add("open"); qs("[data-scrim]", headerEl)?.classList.add("show"); }

  function wireShell() {
    qs("[data-drawer-open]", headerEl)?.addEventListener("click", openDrawer);
    qs("[data-scrim]", headerEl)?.addEventListener("click", closeDrawer);
    qs("[data-account]", headerEl)?.addEventListener("click", () => { go("#/account"); closeDrawer(); });
    qs("[data-logo]", headerEl)?.addEventListener("click", closeDrawer);
    qs("[data-collapse]", headerEl)?.addEventListener("click", toggleCollapse);
    qsa("[data-nav][href]", headerEl).forEach((a) => a.addEventListener("click", (e) => {
      e.preventDefault();             // re-render even when the hash is unchanged, so that
      go(a.getAttribute("href"));     // clicking the section you're already in (e.g. while
      closeDrawer();                  // reading a book) returns to that section's main view.
    }));
    qsa("[data-theme-toggle]", headerEl).forEach((b) => b.addEventListener("click", () => {
      Apex.theme.toggle();
      qsa("[data-theme-toggle]", headerEl).forEach((x) => {
        const hasLabel = x.querySelector(".si-label"); const svg = themeIcon();
        x.innerHTML = hasLabel ? `${svg}<span class="si-label">Appearance</span>` : svg;
      });
    }));
  }

  /* mouse-follow wobble on the sidebar logo (One UI parallax) */
  function initWobble() {
    if (Apex.util.prefersReducedMotion()) return;
    document.addEventListener("mousemove", (e) => {
      const logo = qs(".side-logo");
      if (!logo) return;
      const r = logo.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / window.innerWidth;
      const dy = (e.clientY - (r.top + r.height / 2)) / window.innerHeight;
      const ry = clamp(dx * 30, -18, 18), rx = clamp(-dy * 30, -18, 18);
      logo.style.transform = `perspective(520px) rotateY(${ry}deg) rotateX(${rx}deg) translate(${dx * 7}px, ${dy * 7}px)`;
    });
    document.addEventListener("mouseleave", () => { const l = qs(".side-logo"); if (l) l.style.transform = ""; });
  }

  /* ------------------------------------------------------------- router */
  async function route() {
    document.querySelector(".define-panel")?.remove();   // close any open reader definition panel on navigation
    if (Apex.engine.active()) return;
    const user = Apex.store.currentUser();

    if (!user) {
      document.body.classList.remove("has-sidebar");
      headerEl.innerHTML = "";
      appEl.className = "app-main";
      await Apex.views.auth(appEl);
      return;
    }
    if (!qs("[data-sidebar]", headerEl)) renderShell();
    appEl.className = "app-main";
    updateActive();
    applyCollapsed(collapsed);   // reset to preference; views may enter focus mode

    const hash = location.hash || "#/tests";
    let matched = null, m = null;
    for (const r of routes) { m = hash.match(r.re); if (m) { matched = r; break; } }
    if (!matched) { go("#/tests"); return; }

    appEl.innerHTML = `<div class="container"><div class="stack gap-3" style="padding:30px 0">
      <div class="skel" style="height:30px;width:240px"></div>
      <div class="skel" style="height:120px"></div><div class="skel" style="height:220px"></div></div></div>`;
    try { await matched.run(appEl, m); }
    catch (err) { console.error(err); appEl.innerHTML = `<div class="container"><div class="card card-pad"><h2 class="h3">Something went wrong</h2><p class="muted">${esc(err.message)}</p></div></div>`; }
    window.scrollTo({ top: 0 });
  }

  /* -------------------------------------------------------- exam launch */
  async function startExam(examId) {
    const exam = Apex.bank.get(examId);
    if (!exam) return Apex.ui.toast("That test could not be found.", "bad");
    const prog = await Apex.store.getProgress();
    if (prog && prog.examId === examId) { Apex.engine.start(exam, prog); return; }
    if (prog && prog.examId !== examId) {
      const ok = await Apex.ui.confirm({
        title: "Start a new test?",
        message: `You have an unfinished “${(Apex.bank.get(prog.examId) || {}).title || "test"}.” Starting this one will discard that progress.`,
        confirmText: "Start new test", danger: true,
      });
      if (!ok) return;
      await Apex.store.clearProgress();
    }
    Apex.engine.start(exam);
  }
  async function resume() {
    const prog = await Apex.store.getProgress();
    const exam = prog && Apex.bank.get(prog.examId);
    if (exam) Apex.engine.start(exam, prog); else Apex.ui.toast("No test to resume.", "bad");
  }

  /* ---------------------------------------------------------- bootstrap */
  async function boot() {
    if (booted) return; booted = true;
    headerEl = qs("#header"); appEl = qs("#app");

    document.addEventListener("click", (e) => {
      const s = e.target.closest("[data-start]");
      if (s) { e.preventDefault(); startExam(s.dataset.start); }
    });
    document.addEventListener("keydown", (e) => {
      if ((e.key === "Enter" || e.key === " ") && e.target.matches("[role=button][data-start]")) {
        e.preventDefault(); startExam(e.target.dataset.start);
      }
    });
    initWobble();
    window.addEventListener("resize", Apex.util.debounce(positionNavPill, 150));

    Apex.engine.onFinish = (attempt) => go("#/results/" + attempt.id);
    Apex.engine.onExit = () => go("#/tests");

    Apex.store.onAuth(() => {
      renderShell();
      if (!location.hash || location.hash === "#/") location.hash = "#/tests";
      route();
    });
    window.addEventListener("hashchange", route);

    appEl.innerHTML = `<div class="center" style="min-height:60vh"><span class="spinner" style="width:34px;height:34px"></span></div>`;
    await Apex.store.init();
    // Frictionless entry: in local mode, drop straight into the app as a guest.
    if (!Apex.store.currentUser() && Apex.store.mode() === "local") {
      try { await Apex.store.signInGuest(); } catch (e) {}
    }
    route();
  }

  return { boot, go, route, startExam, resume, setFocus, toggleCollapse };
})();

document.addEventListener("DOMContentLoaded", Apex.app.boot);
