/* Math — Skills Drill (single-module section practice). */
Apex.bank.register({
  id: "math-skills-drill",
  title: "Math: Skills Drill",
  type: "section",
  tagline: "Targeted Math practice across every domain",
  description:
    "A focused set spanning Algebra, Advanced Math, Problem-Solving & Data Analysis, and Geometry & Trigonometry, with a mix of multiple-choice and student-produced-response (grid-in) questions.",
  sections: [
    {
      id: "math",
      modules: [
        {
          id: "md-1",
          name: "Math",
          minutes: 16,
          calculator: true,
          questions: [
            {
              id: "md-1-1",
              domain: "Algebra", skill: "Linear equations in one variable", difficulty: "easy", type: "grid",
              prompt: "If (x / 3) + 4 = 9, what is the value of x?",
              answer: ["15"],
              explanation: "Subtract 4: x/3 = 5. Multiply both sides by 3: x = 15.",
            },
            {
              id: "md-1-2",
              domain: "Problem-Solving and Data Analysis", skill: "Percentages", difficulty: "easy", type: "mcq",
              prompt: "What is 15% of 240?",
              options: [
                { id: "A", text: "24" }, { id: "B", text: "36" },
                { id: "C", text: "40" }, { id: "D", text: "45" },
              ],
              answer: "B",
              explanation: "15% = 0.15, and 0.15 × 240 = 36. (Or 10% of 240 is 24, 5% is 12, and 24 + 12 = 36.)",
            },
            {
              id: "md-1-3",
              domain: "Algebra", skill: "Systems of equations", difficulty: "medium", type: "mcq",
              prompt: "If y = 2x + 1 and y = 11, what is the value of x?",
              options: [
                { id: "A", text: "5" }, { id: "B", text: "6" },
                { id: "C", text: "21" }, { id: "D", text: "23" },
              ],
              answer: "A",
              explanation: "Substitute y = 11 into y = 2x + 1: 11 = 2x + 1, so 2x = 10 and x = 5.",
            },
            {
              id: "md-1-4",
              domain: "Geometry and Trigonometry", skill: "Area of a rectangle", difficulty: "easy", type: "grid",
              prompt: "A rectangle has a length of 9 and a width of 4. What is the area of the rectangle?",
              answer: ["36"],
              explanation: "Area of a rectangle = length × width = 9 × 4 = 36.",
            },
            {
              id: "md-1-5",
              domain: "Problem-Solving and Data Analysis", skill: "Probability", difficulty: "medium", type: "mcq",
              prompt:
                "A bag contains 3 red marbles, 5 blue marbles, and 2 green marbles. If one marble is drawn at random, what is the probability that it is blue?",
              options: [
                { id: "A", text: "1/5" }, { id: "B", text: "1/2" },
                { id: "C", text: "5/2" }, { id: "D", text: "1/10" },
              ],
              answer: "B",
              explanation:
                "There are 3 + 5 + 2 = 10 marbles, 5 of them blue. Probability = 5/10 = 1/2.",
            },
            {
              id: "md-1-6",
              domain: "Advanced Math", skill: "Exponent rules", difficulty: "medium", type: "mcq",
              prompt: "Which expression is equivalent to (x³)(x⁴) for all values of x?",
              options: [
                { id: "A", text: "x⁷" }, { id: "B", text: "x¹²" },
                { id: "C", text: "x" }, { id: "D", text: "2x⁷" },
              ],
              answer: "A",
              explanation:
                "When multiplying powers with the same base, add the exponents: x³ · x⁴ = x³⁺⁴ = x⁷. (Multiplying exponents, x¹², would be (x³)⁴.)",
            },
          ],
        },
      ],
    },
  ],
});
