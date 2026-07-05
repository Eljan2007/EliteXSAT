/* ==========================================================================
   Digital SAT — 2023 May (International), Reading & Writing.
   REFERENCE EXAM built from the user's "2023 May @EliteXSAT.pdf".
   The PDF contains questions only; answers + explanations were solved by the
   AI and should be spot-checked by the tutor. Add more exams as sibling files
   (Apex.bank.register) and a <script> tag in app.html — see HOW-TO-ADD-EXAMS.md.
   ========================================================================== */
Apex.bank.register({
  id: "dsat-2023-05-int",
  title: "May 2023",
  type: "digital",
  region: "International",
  version: "",
  year: 2023,
  monthNum: 5,
  rwOnly: true,
  tagline: "Reading & Writing · International form",
  description: "Digital SAT Reading & Writing simulation — 2023 May international form.",
  // ADAPTIVE: Module 1 is standard; Module 2 is the easy OR hard form, chosen from the
  // Module-1 score. R&W routes to the HARD Module 2 at >= 19 correct (Math would be >= 14).
  adaptive: true,
  sections: [
    {
      id: "rw",
      adaptive: true,
      routeThreshold: 19,
      modules: [
        {
          id: "rw-2305-m1",
          stage: 1,
          name: "Reading and Writing — Module 1",
          minutes: 32,
          questions: [
            {
              id: "x2305-rw-1",
              domain: "Craft and Structure",
              skill: "Words in Context",
              difficulty: "medium",
              passage:
                "<p>The following text is from John Matheus's 1925 novel <i>Fog</i>. The story happens in a city where heavy fog has set in.</p><p>The little conductor stood on tiptoe in an effort to keep one hand on the signal rope, craning his neck in a vain and dissatisfied endeavor to pierce the miasma of the fog. The motorman chafed in his box, thinking of the drudging lot of the laboring man. He <u>registered</u> discontent.</p>",
              prompt: "As used in the text, what does the word “registered” most nearly mean?",
              options: [
                { id: "A", text: "enrolled" },
                { id: "B", text: "valued" },
                { id: "C", text: "disregarded" },
                { id: "D", text: "displayed" },
              ],
              answer: "D",
              explanation:
                "The motorman “chafed” and brooded over the hard lot of the laboring man, so he outwardly <b>displayed</b> — showed — his discontent. “Enrolled” and “valued” don't fit showing a feeling, and “disregarded” is the opposite of expressing it.",
            },
            {
              id: "x2305-rw-2",
              domain: "Craft and Structure",
              skill: "Words in Context",
              difficulty: "easy",
              passage:
                "<p>The Istiqlal Mosque in Jakarta, Indonesia, is a massive mosque that can accommodate approximately 200,000 people at once, making it an ______ sight to behold.</p>",
              prompt: "Which choice completes the text with the most logical and precise word or phrase?",
              options: [
                { id: "A", text: "idealized" },
                { id: "B", text: "intricate" },
                { id: "C", text: "imposing" },
                { id: "D", text: "illusory" },
              ],
              answer: "C",
              explanation:
                "A “massive” mosque holding 200,000 people is grand and impressive in scale, which is what <b>imposing</b> means. “Idealized” and “illusory” suggest something imagined rather than real, and “intricate” (full of detail) doesn't capture the point about sheer size.",
            },
            {
              id: "x2305-rw-3",
              domain: "Craft and Structure",
              skill: "Words in Context",
              difficulty: "medium",
              passage:
                "<p>Although fewer companies trade their stocks on the Tehran Stock Exchange in Tehran, Iran, than on the stock exchanges in London, Mumbai, or Tokyo, the Tehran Stock Exchange has the advantage of focusing on local companies and thus reflecting economic circumstances that are ______ Iran. This sensitivity to unique, rapidly evolving local conditions benefits the companies and investors alike.</p>",
              prompt: "Which choice completes the text with the most logical and precise word or phrase?",
              options: [
                { id: "A", text: "irrelevant to" },
                { id: "B", text: "prohibitive in" },
                { id: "C", text: "distinctive to" },
                { id: "D", text: "unchanging in" },
              ],
              answer: "C",
              explanation:
                "The next sentence calls the conditions “unique” to Iran, so the exchange reflects circumstances <b>distinctive to</b> Iran. “Irrelevant to” contradicts the advantage being described, “unchanging” conflicts with “rapidly evolving,” and “prohibitive in” doesn't fit the meaning.",
            },
            {
              id: "x2305-rw-4",
              domain: "Craft and Structure",
              skill: "Text Structure and Purpose",
              difficulty: "hard",
              passage:
                "<p>In a study by Mika R. Moran, Daniel A. Rodriguez, and colleagues, residents of Caracas, Venezuela, and of Fortaleza, Brazil, were surveyed about parks in their cities. Of the 1,043 respondents from Caracas, 44.7% indicated that they use the city's parks, and of the 938 respondents from Fortaleza, 35.7% indicated using city parks. <u>It may be tempting to assume the difference is due to different levels of access to parks:</u> however, given that the percentage of Caracas respondents who reported living within a 10-minute walk of a park was much lower than that reported by Fortaleza respondents, greater proximity alone can't explain the difference in park use.</p>",
              prompt: "Which choice best describes the function of the underlined portion in the text as a whole?",
              options: [
                { id: "A", text: "It introduces a counterexample to the scenario described earlier in the text." },
                { id: "B", text: "It provides context to help understand the scope of the researchers' survey." },
                { id: "C", text: "It marks a shift from a discussion of the researchers' conclusion to a discussion of their methods." },
                { id: "D", text: "It presents a potential explanation for the team's findings that the text goes on to refute." },
              ],
              answer: "D",
              explanation:
                "The underlined sentence offers a “tempting” explanation for the gap in park use (differing access), and the clause after “however” rejects it (“greater proximity alone can't explain the difference”). So it sets up an explanation the text then refutes — choice D.",
            },
            {
              id: "x2305-rw-5",
              domain: "Information and Ideas",
              skill: "Command of Evidence",
              difficulty: "hard",
              passage:
                "<p>The following text is adapted from Anton Chekhov's 1899 play <i>Uncle Vanya</i>. Professor Serebrakoff retires and moves to his country estate, which Vanya manages with the help of Sonia, the professor's daughter from a previous marriage.</p><p>Chekhov portrays the professor as being someone adjusting to living at the country estate, as is evident when…</p>",
              prompt: "Which quotation from Uncle Vanya most effectively illustrates the claim?",
              options: [
                { id: "A", text: "Professor Serebrakoff says, “I am a book-worm and a scholar, and am unfamiliar with practical affairs. I cannot, I find, dispense with the help of well-informed people.”" },
                { id: "B", text: "Professor Serebrakoff says to Helena, “My darling, don't leave me alone with [Vanya]. He will begin lecture me.”" },
                { id: "C", text: "Professor Serebrakoff says to Helena, “I am used to my library and the lecture hall and to the esteem and admiration of my colleagues. Now I suddenly find myself plunged into this wilderness (the cottage), condemned to see the same stupid people from morning till night and listen to their futile conversations.”" },
                { id: "D", text: "Vanya says to Professor Serebrakoff, “You write on art without knowing anything about it. Those books of yours which I used to admire are not worth one copper kopeck. You are a hoax!”" },
              ],
              answer: "C",
              explanation:
                "The claim is that the professor is <i>adjusting</i> to country-estate life. Choice C shows exactly that tension — he contrasts his old life of “my library and the lecture hall” with being “plunged into this wilderness (the cottage),” capturing his difficult adjustment. The other quotations are about his impracticality (A), avoiding Vanya (B), or Vanya's opinion of him (D).",
            },
            {
              id: "x2305-rw-6",
              domain: "Information and Ideas",
              skill: "Central Ideas and Details",
              difficulty: "medium",
              passage:
                "<p>The following text is from Jerome K. Jerome's 1889 novel <i>Three Men in a Boat</i>.</p><p>We are creatures of the sun, we men and women. We love light and life. That is why we crowd into the towns and cities, and the country grows more and more deserted every year. In the sunlight—in the daytime, when Nature is alive and busy all around us, we like the open hillsides and the deep woods well enough: but in the night, when our Mother Earth has gone to sleep, and left us waking, oh! the world seems so lonesome, and we get frightened, like children in a silent house. Then we sit and sob, and long for the gas-lit streets, and the sound of human voices, and the answering throb of human life.</p>",
              prompt: "Which choice best states the main purpose of the text?",
              options: [
                { id: "A", text: "To indicate that crowded areas can cause people to feel as though they are children again" },
                { id: "B", text: "To caution people not to be so quick to dismiss the natural beauty that can be found in rural areas" },
                { id: "C", text: "To address common traits that motivate many people to choose to live in urban environments" },
                { id: "D", text: "To illustrate the idea that most people tend to prefer hillsides in the country to certain aspects of towns and cities" },
              ],
              answer: "C",
              explanation:
                "The passage explains <i>why</i> people “crowd into the towns and cities” — a shared love of “light and life” and a fear of the lonesome night — so its purpose is to describe common traits that draw people to urban life (C). It never cautions against dismissing rural beauty (B) or claims people prefer the country (D), and the “children” image (A) is just one supporting detail.",
            },
            {
              id: "x2305-rw-7",
              domain: "Information and Ideas",
              skill: "Central Ideas and Details",
              difficulty: "medium",
              passage:
                "<p>Falcons and horses can see in three dimensions (3D), which helps them perceive distance and depth. Octopuses and squid are thought to lack 3D vision. Many researchers once thought the same about cuttlefish, but Trevor Wardill and his team wanted to test whether this assumption was true. The team studied how cuttlefish wearing 3D glasses reacted to 3D images of shrimp (a favorite prey) projected on a tank wall. Cuttlefish changed their striking position to match the 3D images, suggesting that their vision is more like that of falcons and horses than that of octopuses or squid.</p>",
              prompt: "Which choice best describes the main idea of the text?",
              options: [
                { id: "A", text: "Cuttlefish eyes are much more complex than those of falcons or horses." },
                { id: "B", text: "Wardill's team designed 3D glasses for cuttlefish." },
                { id: "C", text: "Before completing their study, Wardill's team thought that cuttlefish have 3D vision, but horses may not." },
                { id: "D", text: "The findings of Wardill's team's study suggest that, like falcons and horses, cuttlefish may also have 3D vision." },
              ],
              answer: "D",
              explanation:
                "The study's result — cuttlefish adjusting their strike to 3D images — “suggest[s] that their vision is more like that of falcons and horses,” i.e., that cuttlefish likely have 3D vision (D). The 3D glasses (B) are just a tool, not the main point; A and C distort what the text says.",
            },
          ],
        },
        {
          id: "rw-2305-m2-easy",
          stage: 2,
          variant: "easy",
          name: "Reading and Writing — Module 2 (Easy)",
          minutes: 32,
          questions: [
            { id: "rw-2305-m2e-1", domain: "Information and Ideas", skill: "Central Ideas and Details", difficulty: "easy",
              passage: "<p><b>Placeholder — Module 2 (Easy), question 1.</b> The real <i>easy</i> Module 2 questions go here. Send them and I'll drop them in.</p>",
              prompt: "Placeholder question — the marked answer is A.",
              options: [{ id: "A", text: "Correct (placeholder)" }, { id: "B", text: "B" }, { id: "C", text: "C" }, { id: "D", text: "D" }],
              answer: "A", explanation: "Placeholder — to be replaced with the real question and explanation." },
            { id: "rw-2305-m2e-2", domain: "Craft and Structure", skill: "Words in Context", difficulty: "easy",
              passage: "<p><b>Placeholder — Module 2 (Easy), question 2.</b></p>",
              prompt: "Placeholder question — the marked answer is B.",
              options: [{ id: "A", text: "A" }, { id: "B", text: "Correct (placeholder)" }, { id: "C", text: "C" }, { id: "D", text: "D" }],
              answer: "B", explanation: "Placeholder." },
          ],
        },
        {
          id: "rw-2305-m2-hard",
          stage: 2,
          variant: "hard",
          name: "Reading and Writing — Module 2 (Hard)",
          minutes: 32,
          questions: [
            { id: "rw-2305-m2h-1", domain: "Information and Ideas", skill: "Inferences", difficulty: "hard",
              passage: "<p><b>Placeholder — Module 2 (Hard), question 1.</b> The real <i>hard</i> Module 2 questions go here.</p>",
              prompt: "Placeholder question — the marked answer is C.",
              options: [{ id: "A", text: "A" }, { id: "B", text: "B" }, { id: "C", text: "Correct (placeholder)" }, { id: "D", text: "D" }],
              answer: "C", explanation: "Placeholder — to be replaced." },
            { id: "rw-2305-m2h-2", domain: "Craft and Structure", skill: "Text Structure and Purpose", difficulty: "hard",
              passage: "<p><b>Placeholder — Module 2 (Hard), question 2.</b></p>",
              prompt: "Placeholder question — the marked answer is D.",
              options: [{ id: "A", text: "A" }, { id: "B", text: "B" }, { id: "C", text: "C" }, { id: "D", text: "Correct (placeholder)" }],
              answer: "D", explanation: "Placeholder." },
          ],
        },
      ],
    },
  ],
});
