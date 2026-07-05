/* Reading & Writing — Skills Drill (single-module section practice). */
Apex.bank.register({
  id: "rw-skills-drill",
  title: "Reading & Writing: Skills Drill",
  type: "section",
  tagline: "Targeted R&W practice across every domain",
  description:
    "A focused set covering Craft & Structure, Information & Ideas, Standard English Conventions, and Expression of Ideas. Great for a quick, untimed-feeling warm-up between full tests.",
  sections: [
    {
      id: "rw",
      modules: [
        {
          id: "rwd-1",
          name: "Reading and Writing",
          minutes: 15,
          questions: [
            {
              id: "rwd-1-1",
              domain: "Standard English Conventions", skill: "Form, Structure, and Sense", difficulty: "easy",
              passage:
                "<p>After months of deliberation, the committee finally released ______ recommendations for reducing traffic downtown.</p>",
              prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
              options: [
                { id: "A", text: "its" }, { id: "B", text: "it's" },
                { id: "C", text: "its'" }, { id: "D", text: "their" },
              ],
              answer: "A",
              explanation:
                "“Committee” is a singular collective noun, so the possessive is “its.” “It's” means “it is,” “its'” isn't a word, and “their” is plural.",
            },
            {
              id: "rwd-1-2",
              domain: "Expression of Ideas", skill: "Transitions", difficulty: "medium",
              passage:
                "<p>The new bridge shortened the average cross-town commute by nearly twenty minutes. ______ within a year it had become one of the busiest crossings in the region.</p>",
              prompt: "Which choice completes the text with the most logical transition?",
              options: [
                { id: "A", text: "However," }, { id: "B", text: "As a result," },
                { id: "C", text: "In contrast," }, { id: "D", text: "Nonetheless," },
              ],
              answer: "B",
              explanation:
                "A faster commute caused the bridge to become heavily used—a cause-and-effect relationship best signaled by “As a result.” The other options mark contrast.",
            },
            {
              id: "rwd-1-3",
              domain: "Craft and Structure", skill: "Words in Context", difficulty: "medium",
              passage:
                "<p>Critics praised the novelist's ______ prose, marveling that she could convey a character's entire history in a single, carefully chosen sentence.</p>",
              prompt: "Which choice completes the text with the most logical and precise word?",
              options: [
                { id: "A", text: "verbose" }, { id: "B", text: "economical" },
                { id: "C", text: "ornate" }, { id: "D", text: "careless" },
              ],
              answer: "B",
              explanation:
                "Conveying a whole history in one sentence shows economy—doing much with few words. “Verbose” and “ornate” imply excess; “careless” is negative and unearned by the praise.",
            },
            {
              id: "rwd-1-4",
              domain: "Information and Ideas", skill: "Command of Evidence (Quantitative)", difficulty: "hard",
              passage:
                "<p>A researcher tested how long a certain battery lasts at different temperatures. At 25 °C it ran for 10 hours; at 0 °C, for 6 hours; and at −15 °C, for only 3 hours. She concluded that colder temperatures shorten the battery's life.</p>",
              prompt: "Which choice best uses data from the text to support the researcher's conclusion?",
              options: [
                { id: "A", text: "At 25 °C, the battery ran for 10 hours." },
                { id: "B", text: "As the temperature fell from 25 °C to −15 °C, the battery's run time dropped from 10 hours to 3 hours." },
                { id: "C", text: "The battery was tested at three different temperatures." },
                { id: "D", text: "At 0 °C, the battery lasted longer than it did at −15 °C." },
              ],
              answer: "B",
              explanation:
                "The conclusion is about a downward trend, so the best support shows run time falling as temperature falls (B). Choice A and D cite single points, and C describes the method, not the trend.",
            },
            {
              id: "rwd-1-5",
              domain: "Standard English Conventions", skill: "Boundaries", difficulty: "medium",
              passage:
                "<p>The starter kit contains everything a beginning artist needs ______ a hardbound sketchbook, a set of graphite pencils, and a kneaded eraser.</p>",
              prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
              options: [
                { id: "A", text: "needs," }, { id: "B", text: "needs:" },
                { id: "C", text: "needs;" }, { id: "D", text: "needs" },
              ],
              answer: "B",
              explanation:
                "A complete sentence (“The starter kit contains everything a beginning artist needs”) followed by a list is introduced with a colon. A comma or semicolon there is incorrect, and no punctuation makes the list run on.",
            },
            {
              id: "rwd-1-6",
              domain: "Craft and Structure", skill: "Text Structure and Purpose", difficulty: "medium",
              passage:
                "<p>For centuries, mapmakers filled the unknown edges of their charts with sea serpents and dire warnings. These images were not mere decoration: they marked the border between charted knowledge and genuine mystery, reminding viewers how much of the world still lay beyond reach.</p>",
              prompt: "Which choice best states the main idea of the text?",
              options: [
                { id: "A", text: "Old maps were valued mainly as decorative works of art." },
                { id: "B", text: "The monsters drawn on old maps signaled the limits of what was then known." },
                { id: "C", text: "Early mapmakers cared more about artistry than about accuracy." },
                { id: "D", text: "People once believed that sea serpents truly lived in distant oceans." },
              ],
              answer: "B",
              explanation:
                "The text explicitly says the images “marked the border between charted knowledge and genuine mystery”—i.e., they signaled the edge of current knowledge (B). The other choices contradict “not mere decoration” or add claims the text doesn't make.",
            },
          ],
        },
      ],
    },
  ],
});
