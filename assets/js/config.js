/* ==========================================================================
   Apex SAT Prep — Configuration
   Edit this file to brand the app and to switch on the cloud backend.
   ========================================================================== */
window.Apex = window.Apex || {};

Apex.config = {
  brand: "EliteXSAT",
  adminEmail: "elcanehmedli2007@gmail.com",   // this account sees the in-app "Problem reports" page (must match the email in supabase/schema.sql)
  logo: "assets/img/logo.png",
  tagline: "Practice the Digital SAT. Reach your peak.",

  /* -------------------------------------------------------------------
     BACKEND
     - "local"    → accounts + progress are stored in this browser only
                    (works instantly, zero setup, fully private).
     - "supabase" → real accounts + cross-device sync via Supabase.
                    Set backend to "supabase" AND fill in supabase.url + anonKey.
                    Then run supabase/schema.sql in your Supabase SQL editor.
     ------------------------------------------------------------------- */
  backend: "supabase",

  supabase: {
    url: "https://jdclhlatadsphtzsfyxi.supabase.co",
    anonKey: "sb_publishable_cugzJjnGNHDi2Yo7KSIG3Q_M_RlCKYX",   // publishable key — safe to expose in the app
  },

  /* Scoring — Digital SAT is 200–800 per section, 400–1600 total. */
  score: { sectionMin: 200, sectionMax: 800 },

  /* Default per-module time limits (minutes) if a module omits its own. */
  defaultModuleMinutes: { rw: 32, math: 35 },

  /* Show a timed break screen between the two sections (real test = 10 min). */
  breakMinutes: 10,
};
