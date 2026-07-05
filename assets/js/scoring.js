/* ==========================================================================
   Apex SAT Prep — Scoring
   Converts raw performance into estimated Digital SAT scores (200–800 per
   section, 400–1600 total) and a per-domain accuracy breakdown.
   Attaches to: Apex.scoring
   NOTE: The real SAT uses statistical equating that varies by form. This is a
   transparent estimate — a gentle curve over % correct, rounded to 10.
   ========================================================================== */
window.Apex = window.Apex || {};

Apex.scoring = (function () {
  const MIN = (Apex.config.score && Apex.config.score.sectionMin) || 200;
  const MAX = (Apex.config.score && Apex.config.score.sectionMax) || 800;

  /* raw (correct), total → scaled section score rounded to nearest 10 */
  function rawToScaled(correct, total) {
    if (!total) return MIN;
    const ratio = Apex.util.clamp(correct / total, 0, 1);
    const curved = Math.pow(ratio, 0.85);            // slight lift in the mid-range
    const raw = MIN + (MAX - MIN) * curved;
    return Apex.util.clamp(Math.round(raw / 10) * 10, MIN, MAX);
  }

  /* Parse "3/4", ".75", "1.5", "-2" → number (or NaN) */
  function toNumber(v) {
    if (v == null) return NaN;
    const s = String(v).trim().replace(/\s+/g, "");
    if (s === "") return NaN;
    if (s.includes("/")) {
      const [a, b] = s.split("/");
      const n = parseFloat(a), d = parseFloat(b);
      return d ? n / d : NaN;
    }
    return parseFloat(s);
  }

  /* Is a given response correct for a question? */
  function isCorrect(q, given) {
    if (given == null || given === "") return false;
    if (q.type === "grid") {
      const accepted = Array.isArray(q.answer) ? q.answer : [q.answer];
      const g = toNumber(given);
      return accepted.some((acc) => {
        if (String(acc).trim() === String(given).trim()) return true;     // exact text
        const a = toNumber(acc);
        return !isNaN(a) && !isNaN(g) && Math.abs(a - g) < 1e-6;           // numeric equality
      });
    }
    // multiple choice — compare option letters case-insensitively
    return String(given).trim().toUpperCase() === String(q.answer).trim().toUpperCase();
  }

  /* Grade a flat list of presented questions against a responses map.
     questions: [{ id, section, domain, type, answer, ... }]
     responses: { qid: given } */
  function grade(questions, responses) {
    responses = responses || {};
    const sections = {};       // sectionId → { raw, total }
    const domains = {};        // domainName → { correct, total, section }
    const results = {};        // qid → { correct, given, answer, answered }
    let correctCount = 0;

    questions.forEach((q) => {
      const given = responses[q.id];
      const answered = given != null && given !== "";
      const correct = isCorrect(q, given);
      results[q.id] = { correct, given: answered ? given : null, answer: q.answer, answered };
      if (correct) correctCount++;

      sections[q.section] = sections[q.section] || { raw: 0, total: 0 };
      sections[q.section].total++;
      if (correct) sections[q.section].raw++;

      const dk = q.domain || "General";
      domains[dk] = domains[dk] || { correct: 0, total: 0, section: q.section };
      domains[dk].total++;
      if (correct) domains[dk].correct++;
    });

    const sectionScores = {};
    let total = 0;
    Object.entries(sections).forEach(([sid, s]) => {
      const scaled = rawToScaled(s.raw, s.total);
      sectionScores[sid] = { raw: s.raw, total: s.total, scaled, pct: Math.round((s.raw / s.total) * 100) };
      total += scaled;
    });

    return {
      total,
      correctCount,
      totalCount: questions.length,
      sections: sectionScores,
      domains,
      results,
    };
  }

  /* Encouraging one-line verdict based on total score */
  function verdict(total) {
    if (total >= 1500) return { label: "Outstanding", tone: "ok" };
    if (total >= 1350) return { label: "Strong", tone: "ok" };
    if (total >= 1150) return { label: "On track", tone: "brand" };
    if (total >= 950) return { label: "Building up", tone: "warn" };
    return { label: "Just getting started", tone: "warn" };
  }

  return { rawToScaled, isCorrect, grade, toNumber, verdict, MIN, MAX };
})();
