/* ==========================================================================
   Apex SAT Prep — Data layer (auth + persistence)
   One async interface, two interchangeable drivers:
     • local    — accounts + progress in this browser (zero setup, private)
     • supabase — real accounts + cross-device sync (set in config.js)
   Attaches to: Apex.store
   ========================================================================== */
window.Apex = window.Apex || {};

Apex.store = (function () {
  const cfg = Apex.config;
  const S = Apex.util.store;

  let _user = null;            // cached current user { id, name, email, targetScore }
  const _listeners = new Set();
  const emit = () => _listeners.forEach((cb) => { try { cb(_user); } catch (e) {} });

  /* ============================ LOCAL DRIVER ============================ */
  // NOTE: local accounts are for single-device, private practice. The
  // password "hash" below is light obfuscation, NOT real security — switch
  // config.backend to "supabase" for genuine authentication.
  const local = (() => {
    const hash = (str) => {
      let h = 5381;
      for (let i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) >>> 0;
      return h.toString(16);
    };
    const users = () => S.get("users", []);
    const saveUsers = (u) => S.set("users", u);
    const pub = (u) => u && { id: u.id, name: u.name, email: u.email, targetScore: u.targetScore || 1400 };

    return {
      async init() {
        const sid = S.get("session");
        if (sid) { const u = users().find((x) => x.id === sid); _user = pub(u) || null; }
      },
      async signUp({ name, email, password }) {
        email = (email || "").trim().toLowerCase();
        if (!name || !email || !password) throw new Error("All fields are required.");
        if (password.length < 6) throw new Error("Password must be at least 6 characters.");
        const all = users();
        if (all.some((u) => u.email === email)) throw new Error("An account with that email already exists.");
        const u = { id: "u_" + Apex.util.uid(), name: name.trim(), email,
          pass: hash(email + "::" + password), targetScore: 1400, createdAt: Date.now() };
        all.push(u); saveUsers(all);
        S.set("session", u.id); _user = pub(u); emit(); return _user;
      },
      async signIn({ email, password }) {
        email = (email || "").trim().toLowerCase();
        const u = users().find((x) => x.email === email);
        if (!u || u.pass !== hash(email + "::" + password)) throw new Error("Incorrect email or password.");
        S.set("session", u.id); _user = pub(u); emit(); return _user;
      },
      async signInGuest() {
        const all = users();
        let u = all.find((x) => x.email === "guest@local");
        if (!u) { u = { id: "u_guest", name: "Guest", email: "guest@local", pass: "", targetScore: 1400, createdAt: Date.now() }; all.push(u); saveUsers(all); }
        S.set("session", u.id); _user = pub(u); emit(); return _user;
      },
      async signOut() { S.remove("session"); _user = null; emit(); },
      async updateProfile(patch) {
        const all = users(); const u = all.find((x) => x.id === _user.id);
        if (!u) return;
        Object.assign(u, patch); saveUsers(all); _user = pub(u); emit(); return _user;
      },
      _key: (base) => `${base}.${_user ? _user.id : "anon"}`,
      async listAttempts() {
        return (S.get(this._key("attempts"), [])).sort((a, b) => b.finishedAt - a.finishedAt);
      },
      async getAttempt(id) { return (S.get(this._key("attempts"), [])).find((a) => a.id === id) || null; },
      async saveAttempt(a) {
        const list = S.get(this._key("attempts"), []);
        list.push(a); S.set(this._key("attempts"), list); return a;
      },
      async deleteAttempt(id) {
        S.set(this._key("attempts"), S.get(this._key("attempts"), []).filter((a) => a.id !== id));
      },
      async saveProgress(state) { S.set(this._key("progress"), state); },
      async getProgress() { return S.get(this._key("progress"), null); },
      async clearProgress() { S.remove(this._key("progress")); },
      async saveReport(r) {
        const arr = S.get("reports", []);
        const rec = { id: "r" + Date.now(), created_at: new Date().toISOString(), status: "open", email: _user ? _user.email : null, message: r.message, context: r.context || "" };
        arr.unshift(rec); S.set("reports", arr); return rec;
      },
      async listReports() { return S.get("reports", []); },
      async updateReport(id, patch) {
        const arr = S.get("reports", []); const i = arr.findIndex((x) => String(x.id) === String(id));
        if (i >= 0) { Object.assign(arr[i], patch); S.set("reports", arr); }
      },
    };
  })();

  /* ========================== SUPABASE DRIVER ========================== */
  const remote = (() => {
    let sb = null;

    const loadSdk = () => new Promise((resolve, reject) => {
      if (window.supabase && window.supabase.createClient) return resolve();
      const s = document.createElement("script");
      s.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
      s.onload = () => resolve();
      s.onerror = () => reject(new Error("Could not load the Supabase SDK (check your connection)."));
      document.head.appendChild(s);
    });

    const profileFrom = async (authUser) => {
      if (!authUser) return null;
      let name = authUser.user_metadata?.name || authUser.email.split("@")[0];
      let targetScore = 1400;
      const { data } = await sb.from("profiles").select("name,target_score").eq("id", authUser.id).maybeSingle();
      if (data) { name = data.name || name; targetScore = data.target_score || targetScore; }
      return { id: authUser.id, name, email: authUser.email, targetScore };
    };

    return {
      async init() {
        if (!cfg.supabase.url || !cfg.supabase.anonKey)
          throw new Error("Supabase backend selected but url/anonKey are empty in config.js.");
        await loadSdk();
        sb = window.supabase.createClient(cfg.supabase.url, cfg.supabase.anonKey);
        const { data } = await sb.auth.getUser();
        _user = await profileFrom(data?.user);
        sb.auth.onAuthStateChange(async (_evt, session) => {
          _user = await profileFrom(session?.user); emit();
        });
      },
      async signUp({ name, email, password }) {
        const { data, error } = await sb.auth.signUp({
          email, password, options: { data: { name } },
        });
        if (error) throw new Error(error.message);
        if (data.user) await sb.from("profiles").upsert({ id: data.user.id, name, target_score: 1400 });
        if (!data.session) throw new Error("Check your email to confirm your account, then sign in.");
        _user = await profileFrom(data.user); emit(); return _user;
      },
      async signIn({ email, password }) {
        const { data, error } = await sb.auth.signInWithPassword({ email, password });
        if (error) throw new Error(error.message);
        _user = await profileFrom(data.user); emit(); return _user;
      },
      async signOut() { await sb.auth.signOut(); _user = null; emit(); },
      async updateProfile(patch) {
        const row = {};
        if (patch.name != null) row.name = patch.name;
        if (patch.targetScore != null) row.target_score = patch.targetScore;
        await sb.from("profiles").upsert({ id: _user.id, ...row });
        Object.assign(_user, patch); emit(); return _user;
      },
      async listAttempts() {
        const { data, error } = await sb.from("attempts").select("payload").eq("user_id", _user.id).order("created_at", { ascending: false });
        if (error) return [];
        return (data || []).map((r) => r.payload);
      },
      async getAttempt(id) { return (await this.listAttempts()).find((a) => a.id === id) || null; },
      async saveAttempt(a) {
        await sb.from("attempts").insert({
          id: a.id, user_id: _user.id, exam_id: a.examId, total: a.score.total, payload: a,
        });
        return a;
      },
      async deleteAttempt(id) { await sb.from("attempts").delete().eq("id", id).eq("user_id", _user.id); },
      async saveProgress(state) { await sb.from("progress").upsert({ user_id: _user.id, payload: state }); },
      async getProgress() {
        const { data } = await sb.from("progress").select("payload").eq("user_id", _user.id).maybeSingle();
        return data?.payload || null;
      },
      async clearProgress() { await sb.from("progress").delete().eq("user_id", _user.id); },
      async saveReport(r) {
        const { data, error } = await sb.from("reports").insert({
          user_id: _user ? _user.id : null, email: _user ? _user.email : null, message: r.message, context: r.context || "",
        }).select().maybeSingle();
        if (error) throw new Error(error.message);
        return data;
      },
      async listReports() {
        const { data, error } = await sb.from("reports").select("*").order("created_at", { ascending: false });
        return error ? [] : (data || []);
      },
      async updateReport(id, patch) { await sb.from("reports").update(patch).eq("id", id); },
    };
  })();

  /* ============================== FACADE =============================== */
  let driver = local;
  let ready = null;

  async function init() {
    if (ready) return ready;
    ready = (async () => {
      if (cfg.backend === "supabase") {
        try { driver = remote; await remote.init(); }
        catch (e) {
          console.warn("[Apex] Supabase init failed, falling back to local:", e.message);
          Apex.ui && Apex.ui.toast("Cloud backend unavailable — using local mode.", "bad", 4200);
          driver = local; await local.init();
        }
      } else { driver = local; await local.init(); }
    })();
    return ready;
  }

  /* Derived stats across attempts for the dashboard */
  async function getStats() {
    const attempts = await driver.listAttempts();
    const completed = attempts.filter((a) => a.score && a.score.total != null);
    const best = completed.reduce((m, a) => Math.max(m, a.score.total), 0);
    const latest = completed[0] || null;
    const avg = completed.length ? Math.round(completed.reduce((s, a) => s + a.score.total, 0) / completed.length) : 0;
    const totalMinutes = Math.round(attempts.reduce((s, a) => s + (a.durationSec || 0), 0) / 60);
    // per-domain accuracy aggregate
    const domains = {};
    completed.forEach((a) => {
      Object.entries(a.score.domains || {}).forEach(([k, v]) => {
        domains[k] = domains[k] || { correct: 0, total: 0, section: v.section };
        domains[k].correct += v.correct; domains[k].total += v.total;
      });
    });
    return { attempts, completed, count: completed.length, best, avg, latest, totalMinutes, domains };
  }

  return {
    init,
    mode: () => (driver === remote ? "supabase" : "local"),
    currentUser: () => _user,
    onAuth: (cb) => { _listeners.add(cb); return () => _listeners.delete(cb); },
    signUp: (p) => driver.signUp(p),
    signIn: (p) => driver.signIn(p),
    signInGuest: () => (driver.signInGuest ? driver.signInGuest() : Promise.reject(new Error("Guest mode is only available in local mode."))),
    signOut: () => driver.signOut(),
    updateProfile: (p) => driver.updateProfile(p),
    listAttempts: () => driver.listAttempts(),
    getAttempt: (id) => driver.getAttempt(id),
    saveAttempt: (a) => driver.saveAttempt(a),
    deleteAttempt: (id) => driver.deleteAttempt(id),
    saveProgress: (s) => driver.saveProgress(s),
    getProgress: () => driver.getProgress(),
    clearProgress: () => driver.clearProgress(),
    saveReport: (r) => driver.saveReport(r),
    listReports: () => driver.listReports(),
    updateReport: (id, p) => driver.updateReport(id, p),
    getStats,
  };
})();
