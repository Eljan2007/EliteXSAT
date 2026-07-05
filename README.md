# EliteXSAT

A polished, fully responsive **Digital SAT practice platform** — full-length module-based tests, a growing question bank, additional section drills, instant 400–1600 scoring, skill-by-skill analytics, accounts, and saved progress.

Built as a **static site** (HTML + CSS + vanilla JavaScript). No build step, no framework, no bundler. It opens in any modern browser and deploys to any static host.

---

## ✨ Highlights

- **Real Digital SAT structure** — two sections (Reading & Writing, then Math), each split into timed modules, with an on-screen question navigator, answer elimination, mark-for-review, a section break, and a math reference sheet.
- **Question bank you can extend** — original, domain-tagged questions (multiple-choice *and* student-produced "grid-in" responses). Add unlimited new exams with one file — see [`HOW-TO-ADD-EXAMS.md`](HOW-TO-ADD-EXAMS.md).
- **Instant, transparent scoring** — estimated 200–800 per section / 400–1600 total, a per-domain accuracy breakdown, and a full answer review with an explanation for every question.
- **Accounts + saved progress** — sign up, track every attempt, resume an unfinished test, and review your history. Local by default; flip a switch for real cloud sync (below).
- **Clean, animated, responsive** — subtle motion (scroll reveals, count-ups, smooth transitions), `prefers-reduced-motion` respected, and tested down to 375 px.

---

## 🚀 Run it

### Option A — just open it
Double-click **`index.html`**. (The marketing page → "Start free" → the app.)

> Browsers are strict about `localStorage` on the `file://` protocol. It works in most Chromium browsers, but for 100% reliable accounts/progress, use Option B.

### Option B — serve locally (recommended)
From this folder:

```bash
# Python (already on this machine)
python -m http.server 5173
# then open http://localhost:5173/index.html
```

```bash
# …or Node
npx serve .
```

---

## 🗂️ Project structure

```
sat-practice-pro/
├── index.html               # Marketing landing page
├── app.html                 # The single-page app (dashboard, tests, results)
├── assets/
│   ├── css/styles.css        # Design system + all components & animations
│   ├── js/
│   │   ├── config.js         # ⚙️ Brand + backend switch (edit this)
│   │   ├── ui.js             # Utilities, SVG icons, toasts, modals
│   │   ├── scoring.js        # Raw → scaled 200–800 scoring
│   │   ├── store.js          # Auth + persistence (local & Supabase drivers)
│   │   ├── bank.js           # Question-bank registry
│   │   ├── engine.js         # The Digital SAT test engine
│   │   ├── views.js          # Auth, dashboard, catalog, results, profile
│   │   └── app.js            # Hash router + bootstrap
│   └── data/exams/           # 📚 One file per practice test (add your own here)
├── supabase/schema.sql       # Cloud backend tables + security policies
├── HOW-TO-ADD-EXAMS.md       # How to author new tests
└── README.md
```

---

## ☁️ Turn on cloud accounts (cross-device sync)

By default the app uses **local mode**: accounts and progress live in the browser — zero setup, fully private. To get real authentication and sync across devices, connect a free [Supabase](https://supabase.com) project:

1. Create a project at supabase.com.
2. Open **SQL Editor → New query**, paste the contents of [`supabase/schema.sql`](supabase/schema.sql), and **Run**. This creates the `profiles`, `attempts`, and `progress` tables with row-level security so each user sees only their own data.
3. *(Optional, for instant sign-in)* In **Authentication → Providers → Email**, turn **off** "Confirm email."
4. In **`assets/js/config.js`**, set:

   ```js
   backend: "supabase",
   supabase: {
     url: "https://YOUR-PROJECT.supabase.co",
     anonKey: "YOUR-ANON-PUBLIC-KEY",
   },
   ```

That's it — the same UI now uses real auth + a Postgres database. The `anonKey` is safe to expose publicly; row-level security enforces per-user access. If Supabase is ever unreachable, the app automatically falls back to local mode.

---

## 🌐 Deploy

It's static — drop the folder on any host:

- **Netlify / Vercel / Cloudflare Pages** — drag-and-drop or connect the repo (no build command; output dir = project root).
- **GitHub Pages** — push the folder and enable Pages.

For local-mode hosting nothing else is needed. For cloud mode, just make sure `config.js` has your Supabase keys.

---

## 📝 Notes & honesty

- **Original content.** Real past SAT exams and the official College Board question bank are copyrighted and are *not* reproduced here. All questions are original, written to match the real exam's domains, skills, and difficulty.
- **Scores are estimates.** The real SAT uses statistical equating that varies per form. This app scales your percentage-correct into the 200–800 range (with a gentle curve) so you can track progress — treat it as a guide, not an official score.
- **Sample size.** The bundled tests are representative forms. The engine is length-agnostic — expand any module toward the official 27/27 + 22/22 question counts by adding questions ([`HOW-TO-ADD-EXAMS.md`](HOW-TO-ADD-EXAMS.md)).
- Not affiliated with or endorsed by the College Board. *SAT* is a trademark of the College Board.

---

## 🎨 Tech & design

Vanilla JS (ES2019), a hand-built CSS design system (indigo primary, color-coded sections, Fraunces + Inter type), and inline Lucide-style SVG icons. No runtime dependencies except the Supabase JS SDK, which loads on demand only when cloud mode is enabled.
