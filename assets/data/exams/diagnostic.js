/* Quick Diagnostic — a short, mixed warm-up to estimate a starting score.
   All questions are original, written to mirror the Digital SAT. */
Apex.bank.register({
  id: "diagnostic",
  title: "Quick Diagnostic",
  type: "diagnostic",
  tagline: "A 20-minute snapshot of where you stand",
  description:
    "A short, mixed set across Reading & Writing and Math. Use it to estimate a starting score and reveal which skills to focus on first.",
  adaptive: false,
  sections: [
    {
      id: "rw",
      modules: [
        {
          id: "rw-d1",
          name: "Reading and Writing",
          minutes: 10,
          questions: [
            {
              id: "d-rw-1",
              domain: "Craft and Structure",
              skill: "Words in Context",
              difficulty: "medium",
              passage:
                "<p>Working largely alone, the geologist Marie Tharp spent years translating sonar soundings into the first detailed maps of the ocean floor. Some colleagues initially dismissed her findings, but the evidence she assembled was so ______ that skeptics could no longer ignore it.</p>",
              prompt: "Which choice completes the text with the most logical and precise word?",
              options: [
                { id: "A", text: "preliminary" },
                { id: "B", text: "compelling" },
                { id: "C", text: "conventional" },
                { id: "D", text: "perplexing" },
              ],
              answer: "B",
              explanation:
                "“Skeptics could no longer ignore it” signals that the evidence was highly convincing, which is what compelling means. Preliminary (early/incomplete) and conventional (ordinary) undercut that force, and perplexing (confusing) is the opposite of convincing.",
            },
            {
              id: "d-rw-2",
              domain: "Information and Ideas",
              skill: "Central Ideas and Details",
              difficulty: "medium",
              passage:
                "<p>The mimic octopus (<em>Thaumoctopus mimicus</em>) can change not only its color but also the shape and posture of its body. By flattening itself and trailing its arms, it can pass for a flatfish; by tucking its arms and undulating, it can resemble a venomous sea snake. Researchers think this versatility lets it deter a wide range of predators.</p>",
              prompt: "Which choice best states the main idea of the text?",
              options: [
                { id: "A", text: "The mimic octopus changes color more effectively than other octopuses do." },
                { id: "B", text: "The mimic octopus can imitate several different animals to protect itself." },
                { id: "C", text: "The mimic octopus is the only animal able to impersonate a sea snake." },
                { id: "D", text: "The main predators of the mimic octopus are flatfish and sea snakes." },
              ],
              answer: "B",
              explanation:
                "The text stresses the octopus's versatility—imitating multiple animals—to deter predators, which choice B captures. The other choices overstate (C), distort (D), or focus on a comparison the text never makes (A).",
            },
            {
              id: "d-rw-3",
              domain: "Expression of Ideas",
              skill: "Transitions",
              difficulty: "medium",
              passage:
                "<p>Most of Jupiter's many moons are small and irregularly shaped, which suggests they are asteroids captured by the planet's gravity. The four largest moons, ______ are nearly spherical and probably formed alongside Jupiter itself.</p>",
              prompt: "Which choice completes the text with the most logical transition?",
              options: [
                { id: "A", text: "for example," },
                { id: "B", text: "however," },
                { id: "C", text: "therefore," },
                { id: "D", text: "in addition," },
              ],
              answer: "B",
              explanation:
                "The large, spherical moons contrast with the small, irregular ones described first, so a contrast transition (however) is needed. “For example” and “in addition” signal continuation, and “therefore” signals a result—none fits the contrast.",
            },
            {
              id: "d-rw-4",
              domain: "Standard English Conventions",
              skill: "Boundaries",
              difficulty: "easy",
              passage:
                "<p>Karl von Frisch, who shared a Nobel Prize for his research on animal behavior ______ spent decades decoding how honeybees use a “waggle dance” to share the location of food.</p>",
              prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
              options: [
                { id: "A", text: "behavior," },
                { id: "B", text: "behavior" },
                { id: "C", text: "behavior:" },
                { id: "D", text: "behavior;" },
              ],
              answer: "A",
              explanation:
                "The clause “who shared a Nobel Prize … behavior” is nonrestrictive and was opened with a comma after “Frisch,” so it must be closed with a comma before the main verb “spent.” A colon or semicolon would wrongly break the sentence, and omitting punctuation leaves the interrupter unclosed.",
            },
          ],
        },
      ],
    },
    {
      id: "math",
      modules: [
        {
          id: "math-d1",
          name: "Math",
          minutes: 12,
          calculator: true,
          questions: [
            {
              id: "d-m-1",
              domain: "Algebra",
              skill: "Linear equations in one variable",
              difficulty: "easy",
              type: "mcq",
              prompt: "If 3x − 7 = 14, what is the value of 6x − 5?",
              options: [
                { id: "A", text: "19" },
                { id: "B", text: "37" },
                { id: "C", text: "42" },
                { id: "D", text: "47" },
              ],
              answer: "B",
              explanation:
                "From 3x − 7 = 14, add 7 to get 3x = 21, so x = 7. Then 6x − 5 = 6(7) − 5 = 42 − 5 = 37. (Shortcut: 6x = 2·3x = 42, then subtract 5.)",
            },
            {
              id: "d-m-2",
              domain: "Problem-Solving and Data Analysis",
              skill: "Percentages",
              difficulty: "easy",
              type: "grid",
              prompt:
                "A jacket originally priced at $80 is marked down by 25%. What is the sale price of the jacket, in dollars?",
              answer: ["60"],
              explanation:
                "A 25% markdown leaves 75% of the price: 0.75 × 80 = 60. (Equivalently, 25% of 80 is 20, and 80 − 20 = 60.)",
            },
            {
              id: "d-m-3",
              domain: "Advanced Math",
              skill: "Function notation",
              difficulty: "medium",
              type: "mcq",
              prompt: "The function f is defined by f(x) = 2x² − 3x + 1. What is the value of f(3)?",
              options: [
                { id: "A", text: "8" },
                { id: "B", text: "10" },
                { id: "C", text: "28" },
                { id: "D", text: "46" },
              ],
              answer: "B",
              explanation:
                "Substitute x = 3: f(3) = 2(3)² − 3(3) + 1 = 2(9) − 9 + 1 = 18 − 9 + 1 = 10.",
            },
            {
              id: "d-m-4",
              domain: "Geometry and Trigonometry",
              skill: "Right triangles",
              difficulty: "easy",
              type: "mcq",
              prompt:
                "In a right triangle, the two legs have lengths 6 and 8. What is the length of the hypotenuse?",
              options: [
                { id: "A", text: "10" },
                { id: "B", text: "12" },
                { id: "C", text: "14" },
                { id: "D", text: "48" },
              ],
              answer: "A",
              explanation:
                "By the Pythagorean theorem, hypotenuse = √(6² + 8²) = √(36 + 64) = √100 = 10. (This is the common 3-4-5 triangle scaled by 2.)",
            },
          ],
        },
      ],
    },
  ],
});
