/* ==========================================================================
   Apex SAT Prep — Question bank registry
   Exam files in assets/data/exams/*.js call Apex.bank.register({...}).
   See HOW-TO-ADD-EXAMS.md for the exam format.
   Attaches to: Apex.bank
   ========================================================================== */
window.Apex = window.Apex || {};

Apex.bank = (function () {
  const exams = [];                 // ordered list of registered exams
  const examById = Object.create(null);
  const qIndex = Object.create(null);   // qid → { question, examId }

  const sectionMeta = {
    rw:   { id: "rw",   name: "Reading and Writing", shortName: "Reading & Writing", color: "rw",   icon: "book-open",   calculator: false },
    math: { id: "math", name: "Math",                shortName: "Math",              color: "math", icon: "calculator", calculator: true  },
  };

  /* Lightweight validation — helps anyone authoring new exams */
  function validate(exam) {
    const warn = (m) => console.warn(`[Apex.bank] ${exam.id || "exam"}: ${m}`);
    if (!exam.id) return warn("missing id");
    if (!exam.sections || !exam.sections.length) return warn("no sections");
    let count = 0;
    exam.sections.forEach((sec) => {
      if (!sectionMeta[sec.id]) warn(`unknown section id "${sec.id}" (expected rw | math)`);
      (sec.modules || []).forEach((mod) => {
        (mod.questions || []).forEach((q) => {
          count++;
          if (!q.id) warn("a question is missing an id");
          if (q.type === "grid") {
            if (q.answer == null) warn(`grid question ${q.id} has no answer`);
          } else {
            if (!q.options || q.options.length < 2) warn(`question ${q.id} needs options`);
            if (!q.answer || !(q.options || []).some((o) => o.id === q.answer))
              warn(`question ${q.id} answer "${q.answer}" does not match any option id`);
          }
        });
      });
    });
    return count;
  }

  // Forms that share a sitting (same `title`) are lettered A, B, C… in registration order.
  // There is no US/International split: a date's forms are one alphabetical run.
  const versionSeq = {};
  function letterFor(title) {
    const n = versionSeq[title] || 0;
    versionSeq[title] = n + 1;
    return String.fromCharCode(65 + n);   // A, B, C, …
  }

  function register(exam) {
    const count = validate(exam);
    if (exam.type === "digital" && exam.title) {
      exam.version = letterFor(exam.title);
      delete exam.region;
      // Legacy blurbs still carry the old region ("International · Verbal Hard") and the old
      // hard-coded version letter, which no longer matches the letter assigned above. Strip both:
      // the region split is gone, and the version is shown by the badge.
      const REGION = "International|Int'l|Int|US|North American|North America|Asia[- ]?Pacific";
      const clean = (s) => String(s || "")
        .replace(new RegExp("^\\s*(?:" + REGION + ")\\s*[·\\-–—:]\\s*", "i"), "")        // "International · …"
        .replace(new RegExp("\\b(?:" + REGION + ")\\s+(?=(?:\\w+\\s+)*form\\b)", "gi"), "") // "US prediction form"
        .replace(/[,;]?\s*·?\s*Version\s+[A-Z]\b/gi, "")                                   // stale version letter
        .replace(/\s{2,}/g, " ").replace(/^\s*[·\-–—,]\s*/, "").trim();
      if (exam.tagline) exam.tagline = clean(exam.tagline);
      if (exam.description) exam.description = clean(exam.description);
    }
    // stamp questions with section + index globally
    exam.sections.forEach((sec) => {
      (sec.modules || []).forEach((mod) => {
        (mod.questions || []).forEach((q) => {
          q.section = sec.id;
          q.type = q.type || "mcq";
          q._examId = exam.id;
          qIndex[q.id] = { question: q, examId: exam.id };
        });
      });
    });
    exam._questionCount = count;
    if (examById[exam.id]) {
      const i = exams.findIndex((e) => e.id === exam.id);
      if (i >= 0) exams[i] = exam;
    } else {
      exams.push(exam);
    }
    examById[exam.id] = exam;
    return exam;
  }

  const list = () => exams.slice();
  const byType = (type) => exams.filter((e) => e.type === type);
  const get = (id) => examById[id] || null;
  const question = (qid) => (qIndex[qid] ? qIndex[qid].question : null);

  /* Total scored question count + estimated minutes for display */
  function summarize(exam) {
    let q = 0, min = 0;
    exam.sections.forEach((sec) => {
      let mods = sec.modules || [];
      // A student takes Module 1 + ONE Module-2 form (easy/hard are parallel variants),
      // so when a section is split into stage-2 variants, count just one of them.
      const stage2 = mods.filter((m) => m.stage === 2);
      if (stage2.length) {
        const stage1 = mods.filter((m) => (m.stage || 1) === 1);
        mods = stage1.concat([stage2[0]]);
      }
      mods.forEach((mod) => {
        q += (mod.questions || []).length;
        min += mod.minutes || (Apex.config.defaultModuleMinutes[sec.id] || 30);
      });
    });
    return { questions: q, minutes: min, sections: exam.sections.length };
  }

  /* Flat ordered list of every question in an exam (used for full grading) */
  function flatQuestions(exam) {
    const out = [];
    exam.sections.forEach((sec) =>
      (sec.modules || []).forEach((mod) =>
        (mod.questions || []).forEach((q) => out.push(q))));
    return out;
  }

  // A section is adaptive only if BOTH a stage-2 "easy" AND a stage-2 "hard" form exist.
  // (A section with only one Module-2 form — e.g. hard-only — runs as a normal linear test.)
  function sectionIsAdaptive(sec) {
    if (!sec || !sec.adaptive) return false;
    const v = (sec.modules || []).filter((m) => m.stage === 2);
    return v.some((m) => m.variant === "easy") && v.some((m) => m.variant === "hard");
  }
  const isAdaptive = (exam) => (exam.sections || []).some(sectionIsAdaptive);

  // The test's display name. Digital exams show their month/year (from `title`) plus the
  // version letter, e.g. "March 2026 Version B"; everything else uses its title.
  function fullName(exam) {
    if (!exam) return "";
    if (exam.version) return (exam.title ? exam.title + " " : "") + "Version " + exam.version;
    return exam.title || "";
  }

  return { register, list, byType, get, question, summarize, flatQuestions, sectionMeta, sectionIsAdaptive, isAdaptive, fullName };
})();
