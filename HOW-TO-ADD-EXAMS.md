# How to add new practice tests

Every exam is one self-contained file in **`assets/data/exams/`**. Adding a test takes two steps:

1. Create a new file, e.g. `assets/data/exams/practice-test-2.js`, that calls `Apex.bank.register({ ... })`.
2. Add one `<script>` line for it in **`app.html`**, in the "Question bank" block:

   ```html
   <script src="assets/data/exams/practice-test-2.js"></script>
   ```

That's it. It appears automatically in the dashboard and practice library, and the engine + scoring handle it with no other changes.

> Why a `.js` file and not `.json`? So the app works when you just **open `app.html`** (no server needed). The file simply registers itself.

---

## The exam format

```js
Apex.bank.register({
  id: "practice-test-2",          // unique, url-safe
  title: "Practice Test 2",
  type: "full",                   // "full" | "diagnostic" | "section"
  tagline: "Full-length, two sections",     // short line shown on the card
  description: "A complete practice form …", // longer blurb
  adaptive: false,

  sections: [
    {
      id: "rw",                   // "rw" (Reading & Writing) or "math"
      modules: [
        {
          id: "pt2-rw-1",         // unique per module
          name: "Module 1",
          minutes: 32,            // countdown for this module
          questions: [ /* question objects — see below */ ],
        },
        { id: "pt2-rw-2", name: "Module 2", minutes: 32, questions: [ /* … */ ] },
      ],
    },
    {
      id: "math",
      modules: [
        { id: "pt2-math-1", name: "Module 1", minutes: 35, calculator: true, questions: [ /* … */ ] },
        { id: "pt2-math-2", name: "Module 2", minutes: 35, calculator: true, questions: [ /* … */ ] },
      ],
    },
  ],
});
```

- A **full** test typically has two sections (`rw`, then `math`), each with two modules.
- A **section drill** has one section with one module.
- To reach official length, put **27** questions in each Reading & Writing module and **22** in each Math module.

---

## Question objects

### Multiple choice (MCQ)

```js
{
  id: "pt2-rw-1-1",               // globally unique question id
  domain: "Craft and Structure",  // used in the analytics breakdown
  skill: "Words in Context",      // shown as the question tag
  difficulty: "medium",           // "easy" | "medium" | "hard"
  type: "mcq",                    // optional; "mcq" is the default
  passage: "<p>Optional passage HTML shown in the left pane…</p>",
  prompt: "Which choice completes the text…?",
  options: [
    { id: "A", text: "first choice" },
    { id: "B", text: "second choice" },
    { id: "C", text: "third choice" },
    { id: "D", text: "fourth choice" },
  ],
  answer: "B",                    // must match an option id
  explanation: "Why B is correct and the others aren't.",
}
```

### Student-produced response (grid-in)

```js
{
  id: "pt2-math-2-7",
  domain: "Algebra",
  skill: "Linear equations",
  difficulty: "medium",
  type: "grid",                   // ← makes it a fill-in
  prompt: "If 2x + 3 = 11, what is the value of x?",
  answer: ["4"],                  // array of accepted answers
  explanation: "2x = 8, so x = 4.",
}
```

Grid-in answers are checked **numerically**, so equivalent forms are all accepted automatically — e.g. `answer: ["3/4", "0.75", ".75"]` will all match. Negatives and fractions are fine.

---

## Valid domain names (for clean analytics)

**Reading & Writing**
`Craft and Structure` · `Information and Ideas` · `Standard English Conventions` · `Expression of Ideas`

**Math**
`Algebra` · `Advanced Math` · `Problem-Solving and Data Analysis` · `Geometry and Trigonometry`

---

## Tips

- **Passages & prompts accept HTML.** Use `<p>`, `<em>`, `<strong>`, `<ul>`, etc. You can even embed an inline `<svg>` figure in a math `prompt` or `passage`.
- **Open the browser console** while testing a new file. `Apex.bank` prints a clear warning if a question is missing an answer or an option id doesn't match — handy for catching typos.
- **Keep ids unique** across *all* exams (the answer-review screen looks questions up by id).
- The estimated score scales with **percentage correct**, so a test works at any length — start small and grow it.
