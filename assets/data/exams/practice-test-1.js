/* Practice Test 1 — a representative full-length Digital SAT form with the
   real two-section / two-module structure (Reading & Writing, then Math).
   Original questions. Expand each module toward the official 27/27 + 22/22
   length by following HOW-TO-ADD-EXAMS.md. */
Apex.bank.register({
  id: "practice-test-1",
  title: "Practice Test 1",
  type: "full",
  tagline: "Full-length, two sections, four modules",
  description:
    "A complete practice form built like the real Digital SAT: a Reading & Writing section and a Math section, each split into two timed modules. Finish for an estimated 400–1600 score with a domain-by-domain breakdown.",
  adaptive: false,
  sections: [
    {
      id: "rw",
      modules: [
        {
          id: "pt1-rw-1",
          name: "Module 1",
          minutes: 16,
          questions: [
            {
              id: "pt1-rw-1-1",
              domain: "Craft and Structure", skill: "Words in Context", difficulty: "medium",
              passage:
                "<p>Although the word “robot” often conjures images of metal humanoids, many of the most useful robots are ______: they are built for a single repetitive job—welding a seam, sorting parcels—rather than for all-purpose versatility.</p>",
              prompt: "Which choice completes the text with the most logical and precise word?",
              options: [
                { id: "A", text: "elaborate" }, { id: "B", text: "specialized" },
                { id: "C", text: "autonomous" }, { id: "D", text: "obsolete" },
              ],
              answer: "B",
              explanation:
                "The clue “built for a single repetitive job … rather than for all-purpose versatility” defines a specialized machine. Elaborate (complex), autonomous (self-governing), and obsolete (outdated) don't capture the single-task contrast.",
            },
            {
              id: "pt1-rw-1-2",
              domain: "Craft and Structure", skill: "Text Structure and Purpose", difficulty: "hard",
              passage:
                "<p>In 1977 the two Voyager probes each carried a gold-plated record etched with sounds and images of Earth: greetings in dozens of languages, birdsong, a human heartbeat. The probes were not expected to meet any recipient for tens of thousands of years. The record, then, was less a letter than a gesture—a statement about how humanity wished to be remembered.</p>",
              prompt: "Which choice best states the main purpose of the text?",
              options: [
                { id: "A", text: "To explain the process used to manufacture the Voyager records." },
                { id: "B", text: "To argue that the Voyager probes will probably be found by extraterrestrials." },
                { id: "C", text: "To characterize the Voyager record as a symbolic gesture rather than a practical message." },
                { id: "D", text: "To compare the scientific instruments aboard the two Voyager probes." },
              ],
              answer: "C",
              explanation:
                "The closing sentence frames the record as “less a letter than a gesture”—symbolic, not practical. The text never details manufacturing (A), predicts discovery (B), or compares instruments (D).",
            },
            {
              id: "pt1-rw-1-3",
              domain: "Information and Ideas", skill: "Command of Evidence (Textual)", difficulty: "medium",
              passage:
                "<p>A city planner claims that adding street trees to a neighborhood can measurably lower its summer temperatures.</p>",
              prompt: "Which finding, if true, would most directly support the planner's claim?",
              options: [
                { id: "A", text: "Trees planted in parks tend to grow taller than trees planted along streets." },
                { id: "B", text: "Streets lined with mature trees were, on average, several degrees cooler than nearby treeless streets on summer afternoons." },
                { id: "C", text: "Surveys show that most residents prefer streets that have trees." },
                { id: "D", text: "Planting and maintaining street trees can be costly for city governments." },
              ],
              answer: "B",
              explanation:
                "The claim is specifically about lower temperatures. Choice B provides a direct temperature comparison supporting it. Preferences (C), cost (D), and park-vs-street height (A) don't bear on whether trees cool the air.",
            },
            {
              id: "pt1-rw-1-4",
              domain: "Standard English Conventions", skill: "Boundaries", difficulty: "medium",
              passage:
                "<p>The harpsichord and the piano look similar, but they make sound in different ways. The harpsichord plucks its strings ______ the piano strikes its strings with small felt-covered hammers.</p>",
              prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
              options: [
                { id: "A", text: "strings," }, { id: "B", text: "strings;" },
                { id: "C", text: "strings:" }, { id: "D", text: "strings and" },
              ],
              answer: "B",
              explanation:
                "Two independent clauses that contrast are correctly joined by a semicolon. A comma alone (A) creates a comma splice; a colon (C) wrongly promises an explanation or list; “and” without a preceding comma (D) makes a run-on.",
            },
            {
              id: "pt1-rw-1-5",
              domain: "Standard English Conventions", skill: "Form, Structure, and Sense", difficulty: "medium",
              passage:
                "<p>The collection of fossils that the museum acquired last year ______ specimens from every continent, including a rare feathered dinosaur.</p>",
              prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
              options: [
                { id: "A", text: "include" }, { id: "B", text: "includes" },
                { id: "C", text: "are including" }, { id: "D", text: "including" },
              ],
              answer: "B",
              explanation:
                "The subject is the singular noun “collection” (not the plural “fossils” in the modifying phrase), so it takes the singular verb “includes.” “Include” and “are including” are plural; “including” leaves the sentence without a main verb.",
            },
          ],
        },
        {
          id: "pt1-rw-2",
          name: "Module 2",
          minutes: 16,
          questions: [
            {
              id: "pt1-rw-2-1",
              domain: "Craft and Structure", skill: "Words in Context", difficulty: "medium",
              passage:
                "<p>Far from being ______, the deep sea teems with life: bioluminescent fish, ghostly jellyfish, and dense communities of tube worms cluster around hydrothermal vents on the ocean floor.</p>",
              prompt: "Which choice completes the text with the most logical and precise word?",
              options: [
                { id: "A", text: "barren" }, { id: "B", text: "turbulent" },
                { id: "C", text: "shallow" }, { id: "D", text: "uniform" },
              ],
              answer: "A",
              explanation:
                "“Far from being ___, the deep sea teems with life” sets up an opposite: the blank must mean lifeless, i.e., barren. Turbulent, shallow, and uniform don't contrast with teeming life.",
            },
            {
              id: "pt1-rw-2-2",
              domain: "Craft and Structure", skill: "Cross-Text Connections", difficulty: "hard",
              passage:
                "<p><strong>Text 1</strong></p><p>Some economists argue that remote work raises productivity: without commutes and open-office noise, employees gain hours of focused, uninterrupted time.</p>" +
                "<p><strong>Text 2</strong></p><p>Other researchers are cautious. Fully remote teams, they note, often lose the unplanned exchanges that spark new ideas—the hallway chats and overheard conversations that rarely occur on a scheduled video call.</p>",
              prompt: "Based on the texts, how would the researchers in Text 2 most likely respond to the argument in Text 1?",
              options: [
                { id: "A", text: "By agreeing that long commutes are the main obstacle to productivity." },
                { id: "B", text: "By granting that remote work can improve focus while warning that it may weaken collaborative innovation." },
                { id: "C", text: "By denying that working from home removes any office distractions." },
                { id: "D", text: "By insisting that office noise actually helps employees concentrate." },
              ],
              answer: "B",
              explanation:
                "Text 2 doesn't dispute the focus benefit in Text 1; it adds a concern about lost spontaneous collaboration. That balanced “yes, but” is choice B. The others contradict Text 2's actual points.",
            },
            {
              id: "pt1-rw-2-3",
              domain: "Information and Ideas", skill: "Inferences", difficulty: "hard",
              passage:
                "<p>A honeybee colony keeps its internal temperature remarkably steady even as outdoor conditions swing. When the hive grows too warm, workers fan their wings and spread droplets of water to cool it; when it turns cold, they cluster tightly and shiver to generate heat. This suggests that the colony's temperature control depends less on any single bee than on ______</p>",
              prompt: "Which choice most logically completes the text?",
              options: [
                { id: "A", text: "the body size of the queen bee." },
                { id: "B", text: "the coordinated activity of many workers." },
                { id: "C", text: "the outdoor temperature by itself." },
                { id: "D", text: "the total age of the hive." },
              ],
              answer: "B",
              explanation:
                "Every example—fanning, spreading water, clustering, shivering—is a group of workers acting together. “Depends less on any single bee than on ___” points to collective, coordinated behavior (B).",
            },
            {
              id: "pt1-rw-2-4",
              domain: "Expression of Ideas", skill: "Transitions", difficulty: "medium",
              passage:
                "<p>Aluminum is one of the most abundant metals in Earth's crust. ______ for most of human history it was so hard to separate from its ore that refined aluminum was rarer—and pricier—than gold well into the 1800s.</p>",
              prompt: "Which choice completes the text with the most logical transition?",
              options: [
                { id: "A", text: "Therefore," }, { id: "B", text: "Likewise," },
                { id: "C", text: "Nevertheless," }, { id: "D", text: "For instance," },
              ],
              answer: "C",
              explanation:
                "Abundant in the crust, yet historically rare and costly—that's a contrast, so “Nevertheless” fits. “Therefore” marks a result, while “Likewise” and “For instance” signal similarity or example.",
            },
            {
              id: "pt1-rw-2-5",
              domain: "Expression of Ideas", skill: "Rhetorical Synthesis", difficulty: "medium",
              passage:
                "<p>While researching, a student took the following notes:</p>" +
                "<ul style='margin:0 0 0 18px;list-style:disc'><li>The axolotl is a salamander native to lakes near Mexico City.</li><li>Unlike most amphibians, it never fully metamorphoses, keeping gills and larval features for life.</li><li>It can regrow lost limbs, parts of its heart, and even portions of its brain.</li><li>It is critically endangered in the wild.</li></ul>",
              prompt:
                "The student wants to emphasize the axolotl's regenerative ability. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
              options: [
                { id: "A", text: "The axolotl, a salamander, lives in lakes near Mexico City and is critically endangered." },
                { id: "B", text: "Unlike most amphibians, the axolotl never fully metamorphoses." },
                { id: "C", text: "The axolotl can regrow lost limbs, parts of its heart, and even portions of its brain." },
                { id: "D", text: "The axolotl keeps its gills and other larval features throughout its life." },
              ],
              answer: "C",
              explanation:
                "Only choice C foregrounds regeneration—regrowing limbs, heart tissue, and brain. The other options describe habitat, conservation status, or the lack of metamorphosis, which don't serve the stated goal.",
            },
          ],
        },
      ],
    },
    {
      id: "math",
      modules: [
        {
          id: "pt1-math-1",
          name: "Module 1",
          minutes: 18,
          calculator: true,
          questions: [
            {
              id: "pt1-m-1-1",
              domain: "Algebra", skill: "Linear models", difficulty: "easy", type: "mcq",
              prompt:
                "A taxi charges a flat fee of $3 plus $2 for each mile traveled. Which equation gives the total cost c, in dollars, of a ride that covers m miles?",
              options: [
                { id: "A", text: "c = 2 + 3m" }, { id: "B", text: "c = 3 + 2m" },
                { id: "C", text: "c = 5m" }, { id: "D", text: "c = 3m + 2" },
              ],
              answer: "B",
              explanation:
                "The fixed $3 fee is constant; the $2-per-mile charge scales with m. Total cost = 3 + 2m. (Choice D reverses the roles of the fee and the per-mile rate.)",
            },
            {
              id: "pt1-m-1-2",
              domain: "Algebra", skill: "Slope of a line", difficulty: "medium", type: "mcq",
              prompt: "Line ℓ passes through the points (1, 4) and (3, 10). What is the slope of line ℓ?",
              options: [
                { id: "A", text: "2" }, { id: "B", text: "3" },
                { id: "C", text: "1/3" }, { id: "D", text: "7" },
              ],
              answer: "B",
              explanation:
                "Slope = (change in y)/(change in x) = (10 − 4)/(3 − 1) = 6/2 = 3.",
            },
            {
              id: "pt1-m-1-3",
              domain: "Problem-Solving and Data Analysis", skill: "Ratios and proportions", difficulty: "medium", type: "grid",
              prompt:
                "A recipe that serves 4 people requires 6 cups of flour. Using the same ratio, how many cups of flour are needed to serve 10 people?",
              answer: ["15"],
              explanation:
                "Flour per person = 6 ÷ 4 = 1.5 cups. For 10 people: 1.5 × 10 = 15 cups. (Or set up 6/4 = x/10, so x = 60/4 = 15.)",
            },
            {
              id: "pt1-m-1-4",
              domain: "Advanced Math", skill: "Quadratic equations", difficulty: "medium", type: "mcq",
              prompt: "What are the solutions to x² − 5x + 6 = 0?",
              options: [
                { id: "A", text: "x = −2 and x = −3" }, { id: "B", text: "x = 2 and x = 3" },
                { id: "C", text: "x = 1 and x = 6" }, { id: "D", text: "x = −1 and x = 6" },
              ],
              answer: "B",
              explanation:
                "Factor: x² − 5x + 6 = (x − 2)(x − 3) = 0, so x = 2 or x = 3. (Check: 2 + 3 = 5 and 2 × 3 = 6.)",
            },
            {
              id: "pt1-m-1-5",
              domain: "Geometry and Trigonometry", skill: "Angles in a triangle", difficulty: "easy", type: "mcq",
              prompt: "In triangle ABC, angle A measures 40° and angle B measures 75°. What is the measure of angle C?",
              options: [
                { id: "A", text: "55°" }, { id: "B", text: "65°" },
                { id: "C", text: "75°" }, { id: "D", text: "115°" },
              ],
              answer: "B",
              explanation:
                "The interior angles of a triangle sum to 180°. So angle C = 180° − 40° − 75° = 65°.",
            },
          ],
        },
        {
          id: "pt1-math-2",
          name: "Module 2",
          minutes: 18,
          calculator: true,
          questions: [
            {
              id: "pt1-m-2-1",
              domain: "Advanced Math", skill: "Exponents", difficulty: "easy", type: "grid",
              prompt: "If 2ˣ = 32, what is the value of x?",
              answer: ["5"],
              explanation: "32 is 2 × 2 × 2 × 2 × 2 = 2⁵, so 2ˣ = 2⁵ means x = 5.",
            },
            {
              id: "pt1-m-2-2",
              domain: "Algebra", skill: "Linear inequalities", difficulty: "medium", type: "mcq",
              prompt: "Which value of x satisfies the inequality 5 − 2x > 1?",
              options: [
                { id: "A", text: "x = 0" }, { id: "B", text: "x = 2" },
                { id: "C", text: "x = 3" }, { id: "D", text: "x = 5" },
              ],
              answer: "A",
              explanation:
                "Solve: 5 − 2x > 1 → −2x > −4 → x < 2 (the inequality flips when dividing by a negative). Only x = 0 is less than 2.",
            },
            {
              id: "pt1-m-2-3",
              domain: "Problem-Solving and Data Analysis", skill: "Mean of a data set", difficulty: "easy", type: "grid",
              prompt: "What is the arithmetic mean (average) of the numbers 4, 8, 9, 11, and 8?",
              answer: ["8"],
              explanation: "Mean = sum ÷ count = (4 + 8 + 9 + 11 + 8) ÷ 5 = 40 ÷ 5 = 8.",
            },
            {
              id: "pt1-m-2-4",
              domain: "Advanced Math", skill: "Quadratic models", difficulty: "hard", type: "mcq",
              prompt:
                "A ball is thrown upward so that its height, in feet, after t seconds is h(t) = −16t² + 64t. After how many seconds does the ball reach its maximum height?",
              options: [
                { id: "A", text: "1 second" }, { id: "B", text: "2 seconds" },
                { id: "C", text: "4 seconds" }, { id: "D", text: "64 seconds" },
              ],
              answer: "B",
              explanation:
                "The maximum of a parabola h(t) = at² + bt occurs at t = −b/(2a) = −64/(2·−16) = 64/32 = 2 seconds.",
            },
            {
              id: "pt1-m-2-5",
              domain: "Geometry and Trigonometry", skill: "Area of a circle", difficulty: "medium", type: "mcq",
              prompt: "A circle has a radius of 5. What is the area of the circle?",
              options: [
                { id: "A", text: "10π" }, { id: "B", text: "25π" },
                { id: "C", text: "50π" }, { id: "D", text: "100π" },
              ],
              answer: "B",
              explanation: "Area = πr² = π(5)² = 25π.",
            },
          ],
        },
      ],
    },
  ],
});
