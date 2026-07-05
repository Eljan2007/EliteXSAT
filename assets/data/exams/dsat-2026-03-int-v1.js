/* ==========================================================================
   Digital SAT — March 2026 (International), Version 1.
   Built from "@SAT_SPACE March 26 ver 1.pdf".
   NON-ADAPTIVE (one Module 2 per section): R&W Module 2 = Hard, Math Module 2 = Hard.
   The PDF is image-based with no answer key, so questions are transcribed + AI-solved
   (tutor should spot-check the keys). Modules still being filled are ph() placeholders.
   ========================================================================== */
(function () {
  const ph = (id, math) => ({
    id: id + "-p1",
    domain: math ? "Algebra" : "Information and Ideas",
    skill: math ? "Linear equations" : "Central Ideas and Details",
    difficulty: "medium",
    type: "mcq",
    passage: math ? "" : "<p><b>Placeholder.</b> The real questions from the March 2026 · V1 PDF are transcribed into this module in batches.</p>",
    prompt: "Placeholder question (to be replaced) — the marked answer is A.",
    options: [{ id: "A", text: "A (placeholder)" }, { id: "B", text: "B" }, { id: "C", text: "C" }, { id: "D", text: "D" }],
    answer: "A",
    explanation: "Placeholder — to be replaced with the real question and worked solution.",
  });

  const cw = "Which choice completes the text with the most logical and precise word or phrase?";
  const conv = "Which choice completes the text so that it conforms to the conventions of Standard English?";
  const cell = "border:1px solid var(--border);padding:6px 11px;text-align:center";

  // ---- Reading & Writing, Module 1 (27 questions) ----
  const RW_M1 = [
    { id: "v1-rw-m1-1", domain: "Craft and Structure", skill: "Words in Context", difficulty: "medium",
      passage: "<p>The Apollo Moon landings (1969–1972) left charged particle detectors and equipment too heavy for liftoff on the Moon and produced large amounts of data. Researcher Philip Metzger, who is investigating the long-term effects of being on the Moon, continues to use Apollo's data, demonstrating that the missions' value to science ______</p>",
      prompt: cw, options: [{ id: "A", text: "persists" }, { id: "B", text: "responds" }, { id: "C", text: "arrives" }, { id: "D", text: "agrees" }],
      answer: "A", explanation: "Metzger “continues to use” decades-old Apollo data, showing the missions' value to science still continues — i.e., <b>persists</b>.",
      choiceExpl: { A: "<b>Correct.</b> Metzger “continues to use” decades-old Apollo data, so the missions' value to science keeps going — it <b>persists</b>.", B: "“Responds” needs something to react to, and a mission's value doesn't react — nothing in the text prompts a response.", C: "“Arrives” implies the value is only now appearing, but the data has already been useful for <i>decades</i>.", D: "“Agrees” requires two parties in accord; a mission's value can't agree with anything, and no comparison is drawn." } },

    { id: "v1-rw-m1-2", domain: "Craft and Structure", skill: "Words in Context", difficulty: "medium",
      passage: "<p>The following text is from Billie Jean King's 2021 autobiography <i>All In</i>.</p><p>[P]eople on both sides of my family had repeatedly demonstrated an independent streak. In the end, that was the temperament I gravitated toward, too. Both the Moffitts and the members of my mother's clan, the Jermans, came from mining and oil-geyser towns on the western frontier. They kept their heads down and worked, worked, worked. But they also bucked convention.</p>",
      prompt: "As used in the text, what does the word “demonstrated” most nearly mean?",
      options: [{ id: "A", text: "Protested" }, { id: "B", text: "Defined" }, { id: "C", text: "Exhibited" }, { id: "D", text: "Confirmed" }],
      answer: "C", explanation: "The family members repeatedly showed — <b>exhibited</b> — an independent streak (they “bucked convention”).",
      choiceExpl: { A: "“Protested” means objected or opposed — but the family embraced their independent streak; they weren't fighting it.", B: "“Defined” means gave meaning to; they didn't explain what independence is, they displayed it.", C: "<b>Correct.</b> To “demonstrate” a trait here is to show or <b>exhibit</b> it — they visibly displayed independence by “bucking convention.”", D: "“Confirmed” means verified a prior claim, but nothing earlier is being proven true; the sense is display, not proof." } },

    { id: "v1-rw-m1-3", domain: "Craft and Structure", skill: "Words in Context", difficulty: "medium",
      passage: "<p>Scientists studying marine ecosystems were surprised by the extent of internal carbon recycling by red coralline algae. While some ______ of carbon was expected, the scientists found that the algae reabsorb nearly 40% of the carbon dioxide they produce during calcification processes and harness it for photosynthesis.</p>",
      prompt: cw, options: [{ id: "A", text: "reuse" }, { id: "B", text: "imitation" }, { id: "C", text: "supply" }, { id: "D", text: "examination" }],
      answer: "A", explanation: "The algae reabsorb and reuse the CO₂ they produce; some <b>reuse</b> of carbon was expected, but its extent surprised scientists.",
      choiceExpl: { A: "<b>Correct.</b> The algae “reabsorb… and harness” the CO₂ they make — that is <b>reuse</b>; some reuse was expected, but its extent surprised scientists.", B: "“Imitation” means copying; carbon isn't being imitated, it's being recycled.", C: "“Supply” doesn't fit “some ___ of carbon was expected… but the extent”; the passage is about recycling carbon, not supplying it.", D: "“Examination” means inspection; the algae aren't studying carbon, they're reusing it." } },

    { id: "v1-rw-m1-4", domain: "Craft and Structure", skill: "Words in Context", difficulty: "medium",
      passage: "<p>The traditional Puerto Rican dish mofongo, characterized broadly by its base of mashed plantains, is often ______ in its preparation and serving style. Coastal families typically serve it with fresh-caught octopus and shrimp, mountain families tend to prepare it with chicharrones, and restaurant chefs in San Juan explore innovations like topping the dish with guarapo (juice from sugarcane).</p>",
      prompt: cw, options: [{ id: "A", text: "seasonal" }, { id: "B", text: "proprietary" }, { id: "C", text: "meticulous" }, { id: "D", text: "localized" }],
      answer: "D", explanation: "Preparation varies by place (coast, mountains, San Juan), so the dish is <b>localized</b> in how it's made and served.",
      choiceExpl: { A: "“Seasonal” means changing with the time of year, but the dish varies by <i>place</i>, not by season.", B: "“Proprietary” means privately owned or secret; mofongo is a traditional dish made widely, not owned.", C: "“Meticulous” means done with great care; the point is regional variety, not carefulness.", D: "<b>Correct.</b> Coastal, mountain, and San Juan cooks each prepare it differently, so the dish is <b>localized</b> — tied to place." } },

    { id: "v1-rw-m1-5", domain: "Craft and Structure", skill: "Words in Context", difficulty: "medium",
      passage: "<p>The following text is from Charles Chesnutt's 1905 novel <i>The Colonel's Dream</i>. Mr. French and Mr. Kirby work together.</p><p>Mr. French, the senior partner, who sat opposite Kirby, was an older man — a safe guess would have placed him somewhere in the debatable ground between forty and fifty; of a <u>good</u> height, as could be seen even from the seated figure, the upper part of which was held erect with the unconscious ease which one associates with military training.</p>",
      prompt: "As used in the text, what does the word “good” most nearly mean?",
      options: [{ id: "A", text: "Reliable" }, { id: "B", text: "Courteous" }, { id: "C", text: "Considerable" }, { id: "D", text: "Capable" }],
      answer: "C", explanation: "“Of a good height,” describing a tall, erect figure, means a <b>considerable</b> height.",
      choiceExpl: { A: "“Reliable” means dependable — a height can't be dependable.", B: "“Courteous” describes polite manners, not physical size.", C: "<b>Correct.</b> “Of a good height,” describing a tall, erect, military figure, means a <b>considerable</b> (notable) height.", D: "“Capable” means able or skilled; it says nothing about how tall someone is." } },

    { id: "v1-rw-m1-6", domain: "Craft and Structure", skill: "Text Structure and Purpose", difficulty: "easy",
      passage: "<p>The Uffington White Horse in England is a large chalk image of a horse made by ancient peoples. Monuments like these were an inspiration for the land art movement that began in the 1960s. Land artists create works set in the outdoors. For example, in her 1976 work <i>Sun Tunnels</i>, Nancy Holt placed four tubes made of concrete in a Utah desert to form an X and frame the sun.</p>",
      prompt: "Which choice best states the main purpose of the text?",
      options: [{ id: "A", text: "The text argues against placing works of art outside." }, { id: "B", text: "The text provides information about the land art movement." }, { id: "C", text: "The text describes the popularity of art galleries in the 1960s." }, { id: "D", text: "The text describes the benefits of being an artist." }],
      answer: "B", explanation: "The text explains what land art is and gives an example, so it <b>provides information about the land art movement</b>.",
      choiceExpl: { A: "The text never <i>argues against</i> outdoor art — it neutrally describes and even celebrates an example of it.", B: "<b>Correct.</b> The text defines land art and gives an example (Holt's <i>Sun Tunnels</i>), so its purpose is to <b>inform about the land art movement</b>.", C: "Art galleries aren't mentioned; land art is set <i>outdoors</i>, not in galleries.", D: "The text discusses the movement and its works, not the personal benefits of being an artist." } },

    { id: "v1-rw-m1-7", domain: "Craft and Structure", skill: "Text Structure and Purpose", difficulty: "medium",
      passage: "<p>Though Chloe Zhao's films are fictional, she incorporates real events into them in a documentary-like style and casts nonprofessional actors who reside in the places that she aims to portray. She also encourages these actors, whether they are teenagers living on the Pine Ridge Indian Reservation or adults who travel the country for work, to put as much of themselves into their roles as possible. Her approach adds powerful resonance to films that explore the highly personal experiences of place and home, and often the difficult decision to stay or leave.</p>",
      prompt: "Which choice best states the main purpose of the text?",
      options: [{ id: "A", text: "To discuss how Chloe Zhao's background in documentary filmmaking has influenced her storytelling style in films." }, { id: "B", text: "To emphasize that Chloe Zhao's decisions during the filmmaking process reinforce the themes of her films." }, { id: "C", text: "To summarize how Chloe Zhao's style of filmmaking changed over the course of her career." }, { id: "D", text: "To argue that Chloe Zhao's films are best understood as documentaries." }],
      answer: "B", explanation: "The text links her choices (real events, local nonprofessional actors) to the resonance of her films' themes — her decisions <b>reinforce the themes</b>.",
      choiceExpl: { A: "The text never says Zhao has a documentary <i>background</i> — it says she uses a documentary-like <i>style</i>; her training isn't the focus.", B: "<b>Correct.</b> It ties her choices (real events, local nonprofessional actors) to the “powerful resonance” of her films' themes — her decisions <b>reinforce the themes</b>.", C: "Nothing describes how her style <i>changed over her career</i>; only her current approach is discussed.", D: "It explains her methods, not an <i>argument</i> that her films are really documentaries — it calls them fictional." } },

    { id: "v1-rw-m1-8", domain: "Craft and Structure", skill: "Text Structure and Purpose", difficulty: "hard",
      passage: "<p>While many initiatives aimed at limiting atmospheric warming focus on curbing emissions of methane (CH₄), a greenhouse gas that is typically generated by microbially mediated processes, Lisa Y. Stein and Mary E. Lidstrom caution that under certain circumstances, such efforts cause microbial communities to accelerate production of nitrous oxide (N₂O), another potent greenhouse gas, thus offsetting the impact of CH₄ reduction. Researchers, therefore, need to take such biological interactions into account to ensure that any CH₄ mitigation strategy has an overall positive climate effect.</p>",
      prompt: "Which choice best describes the overall structure of the text?",
      options: [{ id: "A", text: "It mentions a phenomenon that negatively affects the environment, summarizes competing methods for remedying that phenomenon, and then concedes that even apparently distinct methods share similar problems." }, { id: "B", text: "It describes a widely accepted approach to addressing an environmental issue caused by a type of chemical emissions, indicates a potential disadvantage of that approach, and then discusses an implication of that disadvantage." }, { id: "C", text: "It reports on a predicament resulting from emissions of a particular greenhouse gas, outlines a strategy aimed at solving that predicament, and then admonishes those who utilize that strategy without fully comprehending its ramifications." }, { id: "D", text: "It presents an ongoing environmental challenge, demonstrates why the impact of that challenge may intensify over time, and then criticizes a misguidedly narrow attempt to address that impact." }],
      answer: "B", explanation: "It describes the common approach (curbing CH₄), notes a drawback (it can boost N₂O), then the implication (account for biological interactions) — matching <b>B</b>.",
      choiceExpl: { A: "No “competing methods” are summarized, and the text never concedes that distinct methods share a problem — it follows one approach.", B: "<b>Correct.</b> It gives the widely used approach (curbing CH₄), a drawback (it can raise N₂O), then an implication (account for biological interactions).", C: "The passage advises researchers; it doesn't “admonish” anyone — the tone is cautionary, not scolding.", D: "It never argues the challenge will <i>intensify over time</i>, and it criticizes no one — it points out a side effect." } },

    { id: "v1-rw-m1-9", domain: "Information and Ideas", skill: "Central Ideas and Details", difficulty: "easy",
      passage: "<p>A debut novel is the first book that an author has published. An example of a debut novel is <i>The Skin I'm In</i> by Sharon G. Flake. It was published in 1998. Debut novels are especially interesting to literary critics and readers because these books offer a look at new voices in the literary world.</p>",
      prompt: "Which choice best states the main topic of the text?",
      options: [{ id: "A", text: "The benefits of reading" }, { id: "B", text: "Famous literary critics" }, { id: "C", text: "Debut novels" }, { id: "D", text: "Careers in the publishing industry" }],
      answer: "C", explanation: "Every sentence is about <b>debut novels</b> — defining them and explaining why they interest readers.",
      choiceExpl: { A: "“Benefits of reading” is never discussed; the text is about a kind of book, not the value of reading.", B: "Literary critics appear only as people <i>interested</i> in debut novels — not as the topic.", C: "<b>Correct.</b> Every sentence defines debut novels and explains why they interest readers — that's the topic.", D: "Publishing <i>careers</i> aren't mentioned; the focus is the books, not industry jobs." } },

    { id: "v1-rw-m1-10", domain: "Information and Ideas", skill: "Command of Evidence", difficulty: "easy",
      passage: "<p style=\"text-align:center;font-weight:600;margin-bottom:8px\">Brown Bears in Katmai National Park, Alaska</p>" +
        "<table style=\"border-collapse:collapse;margin:0 auto 14px;font-size:.94rem\"><thead><tr>" +
        "<th style=\"" + cell + "\">Bear identification number</th><th style=\"" + cell + "\">Sex</th><th style=\"" + cell + "\">Age (years)</th><th style=\"" + cell + "\">Approximate weight (pounds)</th></tr></thead><tbody>" +
        "<tr><td style=\"" + cell + "\">173</td><td style=\"" + cell + "\">female</td><td style=\"" + cell + "\">10</td><td style=\"" + cell + "\">400</td></tr>" +
        "<tr><td style=\"" + cell + "\">122</td><td style=\"" + cell + "\">male</td><td style=\"" + cell + "\">3</td><td style=\"" + cell + "\">200</td></tr>" +
        "<tr><td style=\"" + cell + "\">117</td><td style=\"" + cell + "\">female</td><td style=\"" + cell + "\">6</td><td style=\"" + cell + "\">325</td></tr>" +
        "<tr><td style=\"" + cell + "\">103</td><td style=\"" + cell + "\">male</td><td style=\"" + cell + "\">4</td><td style=\"" + cell + "\">275</td></tr></tbody></table>" +
        "<p>Scientists collected information about brown bears in Katmai National Park in Alaska. This information included each bear's sex, age, and approximate weight. For the bear with identification number 122, for example, the scientists recorded that the bear was ______</p>",
      prompt: "Which choice most effectively uses data from the table to complete the statement?",
      options: [{ id: "A", text: "male, 4 years old, and weighed approximately 275 pounds." }, { id: "B", text: "female, 10 years old, and weighed approximately 400 pounds." }, { id: "C", text: "male, 3 years old, and weighed approximately 200 pounds." }, { id: "D", text: "female, 6 years old, and weighed approximately 325 pounds." }],
      answer: "C", explanation: "The table row for bear 122 shows male, 3 years old, ~200 pounds — choice <b>C</b>.",
      choiceExpl: { A: "“Male, 4 years old, 275 pounds” is bear <b>103</b>'s row, not bear 122's.", B: "“Female, 10, 400 pounds” is bear <b>173</b>'s row.", C: "<b>Correct.</b> The table's row for bear 122 reads male, 3 years old, ~200 pounds.", D: "“Female, 6, 325 pounds” is bear <b>117</b>'s row, not bear 122's." } },

    { id: "v1-rw-m1-11", domain: "Information and Ideas", skill: "Command of Evidence", difficulty: "medium",
      passage: "<p><i>Great Expectations</i> is an 1861 novel by Charles Dickens. The narrator describes his uncle, Joe Gargery, as being both powerful and tender: ______</p>",
      prompt: "Which quotation from <i>Great Expectations</i> most effectively illustrates the claim?",
      options: [{ id: "A", text: "“There I stood, for minutes, looking at Joe, already at work with a glow of health and strength upon his face that made it show as if the bright sun of the life in store for him were shining on it.”" }, { id: "B", text: "“In his working-clothes, Joe was a well-knit characteristic-looking blacksmith; in his holiday clothes, he was more like a scarecrow in good circumstances, than anything else.”" }, { id: "C", text: "“I have often thought [Joe] since, like the steam-hammer that can crush a man or pat an egg-shell, in his combination of strength with gentleness.”" }, { id: "D", text: "“Estella opened the gate as usual, and, the moment she appeared, Joe took his hat off and stood weighing it by the brim in both his hands.”" }],
      answer: "C", explanation: "Choice C directly pairs <b>strength with gentleness</b> (“crush a man or pat an egg-shell”), illustrating “powerful and tender.”",
      choiceExpl: { A: "This shows Joe's “health and strength” only — it captures power but not tenderness.", B: "This contrasts his work vs. holiday clothes; it's about appearance, not strength <i>and</i> gentleness.", C: "<b>Correct.</b> “Crush a man or pat an egg-shell” pairs strength with gentleness — exactly “powerful and tender.”", D: "This just shows Joe being polite (taking off his hat); it doesn't show power at all." } },

    { id: "v1-rw-m1-12", domain: "Information and Ideas", skill: "Command of Evidence", difficulty: "medium",
      passage: "<img src=\"assets/img/exams/v1-rw-m1-q12.png\" alt=\"Line graph: Fish Population in a Taiwanese Tide Pool, January 2001 to October 2001\" style=\"max-width:330px;width:100%;display:block;margin:0 auto 16px\" />" +
        "<p>Lin-Tai Ho and colleagues counted fish in a tide pool in Taiwan at several times during the year and found that some species had a significantly higher maximum population count than others. For example, the highest count for the combtooth blenny was 62 individuals in January of 2001, whereas the highest count for the striated rockskipper was ______</p>",
      prompt: "Which choice most effectively uses data from the graph to complete the example?",
      options: [{ id: "A", text: "16 individuals in October of 2001." }, { id: "B", text: "15 individuals in July of 2001." }, { id: "C", text: "72 individuals in January of 2001." }, { id: "D", text: "5 individuals in July of 2001." }],
      answer: "D", explanation: "On the graph the striated rockskipper (dotted line, open circles) peaks at about 5 individuals in July 2001 — choice <b>D</b>.",
      choiceExpl: { A: "“16 in October” doesn't match the striated rockskipper's highest point on the graph.", B: "“15 in July” isn't the rockskipper's count — that misreads the line.", C: "“72 in January” is higher than every line on the graph (even the blenny's 62).", D: "<b>Correct.</b> The striated rockskipper's highest point is about 5 individuals, in July 2001." } },

    { id: "v1-rw-m1-13", domain: "Information and Ideas", skill: "Command of Evidence", difficulty: "hard",
      passage: "<p>In the early 1970s, art historian Michael Baxandall created an approach to viewing art called the “period eye,” which explains how to look at art through the lens of its historical period. Baxandall argued that it is critical that art historians understand and communicate the original social and cultural contexts of older works of art so that it is clear what the artists intended and how the pieces would have been understood by their original viewers. <u>Since it was first introduced, Baxandall's period eye has significantly influenced the practice of art history.</u></p>",
      prompt: "Which statement, if true, would most strongly support the claim in the underlined sentence?",
      options: [{ id: "A", text: "Many art historians working before the 1970s produced detailed analyses of the social and cultural contexts of older artworks, though few extended that approach to artworks produced in their own lifetimes." }, { id: "B", text: "Art historians working today have largely rejected the idea, common among Baxandall's predecessors, that artists' intentions should influence how artworks are interpreted." }, { id: "C", text: "For some historical periods, it is difficult for art historians to reconstruct how the original viewers of artworks understood what artists' intentions for their works were." }, { id: "D", text: "Numerous art historians of the late twentieth century and twenty-first century have focused their scholarship on how various artworks were interpreted at the time of their creation." }],
      answer: "D", explanation: "If many later art historians study how artworks were understood at their creation (Baxandall's core idea), that shows his period eye has <b>significantly influenced</b> the field — D.",
      choiceExpl: { A: "This describes work done <i>before</i> the 1970s, so it can't show that Baxandall's later idea was influential.", B: "Rejecting artists' intentions would <i>undercut</i> the period eye, not show its influence.", C: "A <i>difficulty</i> in applying the approach is a limitation — it doesn't show the idea shaped the field.", D: "<b>Correct.</b> Many later historians focusing on how artworks were understood at creation (his core idea) shows the period eye <b>significantly influenced</b> art history." } },

    { id: "v1-rw-m1-14", domain: "Information and Ideas", skill: "Inferences", difficulty: "medium",
      passage: "<p>Last-mile delivery refers to the final step in delivering packages to customers — and this final step can be very difficult. Delivery companies are contending with the increasing popularity of next-day delivery and with complex and inefficient delivery routes, resulting in a growing bottleneck of packages in the last-mile delivery stage. These companies have been experimenting with innovative solutions in last-mile delivery, including autonomous delivery robots (robots that deliver parcels from a van). Unfortunately, many of these innovations create new obstacles (e.g., robots travel relatively slowly since they must navigate many ground-level obstacles) and are not ready for full-scale implementation. As a result, delivery companies will likely ______</p>",
      prompt: "Which choice most logically completes the text?",
      options: [{ id: "A", text: "encourage consumers to expect next-day delivery only for products that are widely available." }, { id: "B", text: "be able to meet consumers' expectations for next-day delivery in many areas but not in all regions." }, { id: "C", text: "have little incentive to find a solution to last-mile delivery challenges." }, { id: "D", text: "continue to struggle with last-mile delivery operations until viable solutions become available." }],
      answer: "D", explanation: "Since current innovations aren't ready, companies will keep facing the problem — they'll <b>continue to struggle</b> until workable solutions appear (D).",
      choiceExpl: { A: "The text never suggests limiting next-day delivery to <i>widely available</i> products.", B: "“Many areas but not all regions” isn't supported — the passage stresses the innovations aren't ready <i>anywhere</i> yet.", C: "The growing bottleneck gives companies <i>strong</i> incentive to solve the problem, not “little incentive.”", D: "<b>Correct.</b> Since current fixes aren't ready, companies will <b>continue to struggle</b> until viable solutions appear." } },

    { id: "v1-rw-m1-15", domain: "Information and Ideas", skill: "Inferences", difficulty: "medium",
      passage: "<p>The olona shrub is one of many forest plant species native to Oahu (a Hawaiian island) that are at risk of extinction in the wild. Ecologists say that fruit-eating birds help support these species' population numbers by dropping seeds from the plants' fruits to different spots where new plants can grow. The birds native to Oahu that used to do this have all gone extinct over time. However, the common waxbill and other fruit-eating bird species brought to the island in the last 150 years have been found to spread plant seeds. Based on this finding, some ecologists suggest that olona shrubs and other forest plants native to Oahu ______</p>",
      prompt: "Which choice most logically completes the text?",
      options: [{ id: "A", text: "probably established themselves on the island at about the same time as common waxbills and other fruit-eating birds did." }, { id: "B", text: "may now depend on non-native birds, such as the common waxbill, to help maintain and increase their populations on the island." }, { id: "C", text: "were likely already close to extinction long before non-native birds arrived on the island." }, { id: "D", text: "seem to produce fewer fruits per plant now than they did when fruit-eating birds native to the island were still present." }],
      answer: "B", explanation: "Native seed-spreading birds are extinct, but introduced birds now spread seeds, so the plants may now <b>depend on non-native birds</b> (B).",
      choiceExpl: { A: "When the plants <i>established</i> themselves isn't discussed — only who spreads their seeds now.", B: "<b>Correct.</b> Native seed-spreaders are extinct, but introduced birds now spread the seeds, so the plants may now <b>depend on non-native birds</b>.", C: "Whether the plants were near extinction <i>before</i> non-native birds arrived isn't addressed.", D: "The text says nothing about the plants producing <i>fewer fruits</i> now." } },

    { id: "v1-rw-m1-16", domain: "Standard English Conventions", skill: "Form, Structure, and Sense", difficulty: "hard",
      passage: "<p>Established in 1935 for the specific purpose of promoting collective bargaining between US labor unions and employers, ______ helped the nation recover from the Great Depression.</p>",
      prompt: conv, options: [{ id: "A", text: "the US government's many ways, just one of which was the National Labor Relations Act (NLRA)," }, { id: "B", text: "the National Labor Relations Act (NLRA) was just one of many ways the US government" }, { id: "C", text: "many ways, just one of which was the National Labor Relations Act (NLRA), were how the US government" }, { id: "D", text: "the US government in many ways, just one of which was the National Labor Relations Act (NLRA)," }],
      answer: "B", explanation: "The opening modifier describes the thing established in 1935 — the NLRA — so the noun right after the comma must be “the National Labor Relations Act (NLRA),” which only <b>B</b> supplies without a dangling modifier.",
      choiceExpl: { A: "Puts “the US government's many ways” after the modifier, so “Established in 1935” wrongly describes “ways.”", B: "<b>Correct.</b> The 1935 modifier describes the <b>NLRA</b>, so “the National Labor Relations Act (NLRA)” must follow the comma — only B does this.", C: "“many ways… were how the US government” leaves the opening modifier dangling and is ungrammatical.", D: "Makes “Established in 1935” describe <i>the US government</i> — a dangling modifier." } },

    { id: "v1-rw-m1-17", domain: "Standard English Conventions", skill: "Boundaries", difficulty: "medium",
      passage: "<p>In their 2019 study of butterfly diversity at Rupa Lake in Nepal, researcher Hari Adhikari and his colleagues counted eight Paris peacock ______ to the Papilionidae family, the Paris peacock (<i>Papilio paris</i>) is known to be rare.</p>",
      prompt: conv, options: [{ id: "A", text: "butterflies, belonging" }, { id: "B", text: "butterflies. Belonging" }, { id: "C", text: "butterflies and belonging" }, { id: "D", text: "butterflies belonging" }],
      answer: "B", explanation: "A boundary is needed: “…counted eight Paris peacock butterflies.” Then “Belonging to the Papilionidae family,” modifies “the Paris peacock.” Only <b>B</b> ends the first sentence and starts the modifier correctly.",
      choiceExpl: { A: "“butterflies, belonging…” joins the modifier with only a comma, creating a run-on.", B: "<b>Correct.</b> End the first sentence at “…butterflies.”; then “Belonging to the Papilionidae family,” modifies “the Paris peacock.”", C: "“and belonging” makes a faulty compound — the sentence no longer parses.", D: "“butterflies belonging… the Paris peacock… is known” fuses two sentences with no boundary." } },

    { id: "v1-rw-m1-18", domain: "Standard English Conventions", skill: "Boundaries", difficulty: "medium",
      passage: "<p>How a folktale begins depends largely on the language in which it ______ folktales told in the Pashto language open with a phrase that roughly means “there was this work that.” English-language folktales, on the other hand, often begin with “once upon a time.”</p>",
      prompt: conv, options: [{ id: "A", text: "originates. Many" }, { id: "B", text: "originates, many" }, { id: "C", text: "originates many" }, { id: "D", text: "originates many," }],
      answer: "A", explanation: "“…depends largely on the language in which it originates.” is complete; “Many folktales told in the Pashto language…” begins a new sentence. A period (choice <b>A</b>) correctly separates the two independent clauses.",
      choiceExpl: { A: "<b>Correct.</b> “…the language in which it originates.” is complete, and “Many folktales…” starts a new sentence, so a period fits.", B: "A comma after “originates” splices two independent clauses together.", C: "No punctuation fuses the two independent clauses into a run-on.", D: "Putting the comma after “many” mis-joins the clauses and still leaves a run-on." } },

    { id: "v1-rw-m1-19", domain: "Standard English Conventions", skill: "Form, Structure, and Sense", difficulty: "easy",
      passage: "<p>Maize was among the many plant species from the Western Hemisphere introduced into the Eastern Hemisphere in the years following Christopher Columbus's first transatlantic voyage in 1492. This ongoing transfer of species between hemispheres ______ now known as the Columbian Exchange.</p>",
      prompt: conv, options: [{ id: "A", text: "were" }, { id: "B", text: "being" }, { id: "C", text: "is" }, { id: "D", text: "are" }],
      answer: "C", explanation: "The subject “This ongoing transfer” is singular, so it takes the singular verb <b>is</b>.",
      choiceExpl: { A: "“were” is plural and past tense; the singular subject “This ongoing transfer” needs a singular present verb.", B: "“being” isn't a finite verb — it can't serve as the sentence's main verb.", C: "<b>Correct.</b> The singular subject “This ongoing transfer” takes the singular verb <b>is</b>.", D: "“are” is plural and doesn't agree with the singular subject “transfer.”" } },

    { id: "v1-rw-m1-20", domain: "Standard English Conventions", skill: "Form, Structure, and Sense", difficulty: "hard",
      passage: "<p>Now seen as a mechanical precursor to the e-reader, Spanish educator and inventor Angela Ruiz Robles's <i>Enciclopedia Mecanica</i> eschewed pages in favor of three horizontal paper scrolls that could be easily swapped out to accommodate a range of subjects. Though Ruiz Robles's prototype had limited functionality, interactive features described in her 1949 patent — such as a button labeled “verb” that would illuminate relevant text when pressed — ______ an impressive early vision of hypertext.</p>",
      prompt: conv, options: [{ id: "A", text: "revealing" }, { id: "B", text: "has revealed" }, { id: "C", text: "reveals" }, { id: "D", text: "reveal" }],
      answer: "D", explanation: "The subject is plural — “interactive features … reveal an impressive early vision.” The plural verb <b>reveal</b> agrees with “features.”",
      choiceExpl: { A: "“revealing” is a participle, not a finite verb — the sentence would have no main verb.", B: "“has revealed” is singular; it doesn't agree with the plural subject “features.”", C: "“reveals” is singular; the plural subject “interactive features” needs a plural verb.", D: "<b>Correct.</b> The plural subject “interactive features” takes the plural verb <b>reveal</b>." } },

    { id: "v1-rw-m1-21", domain: "Standard English Conventions", skill: "Boundaries", difficulty: "medium",
      passage: "<p>In the seventeenth century, market-savvy British greenhouses scrambled to cultivate ______ the small group of wealthy consumers who could afford to import them from the Caribbean, the fruits had become a status symbol.</p>",
      prompt: conv, options: [{ id: "A", text: "pineapples for" }, { id: "B", text: "pineapples, which for" }, { id: "C", text: "pineapples, for" }, { id: "D", text: "pineapples. For" }],
      answer: "D", explanation: "Two independent clauses need a full stop: “…scrambled to cultivate pineapples.” then “For the small group of wealthy consumers…, the fruits had become a status symbol.” Choice <b>D</b> avoids the comma splice.",
      choiceExpl: { A: "“pineapples for the small group…, the fruits had become” leaves a dangling phrase and a run-on.", B: "“which for… they could afford to import them” is tangled and doesn't form one clean clause.", C: "A comma after “pineapples” splices the two independent clauses (a comma splice).", D: "<b>Correct.</b> “…scrambled to cultivate pineapples.” and “For the small group…, the fruits had become a status symbol.” are two sentences — a period avoids the splice." } },

    { id: "v1-rw-m1-22", domain: "Expression of Ideas", skill: "Transitions", difficulty: "medium",
      passage: "<p>It's tempting to think that the comic strips <i>Jump Start</i> and <i>Wee Pals</i> have the same main purpose — to amuse — because both feature humorous situations. ______ <i>Wee Pals</i> focuses just as much on challenging readers with sociopolitical commentary as it does on making them laugh.</p>",
      prompt: "Which choice completes the text with the most logical transition?",
      options: [{ id: "A", text: "Likewise," }, { id: "B", text: "Next," }, { id: "C", text: "In reality," }, { id: "D", text: "In other words," }],
      answer: "C", explanation: "The second sentence corrects the “tempting” assumption, so a contrast/correction transition — <b>In reality,</b> — fits.",
      choiceExpl: { A: "“Likewise” signals agreement, but the second sentence <i>contradicts</i> the assumption that both strips only amuse.", B: "“Next” signals sequence; there's no step-by-step order here.", C: "<b>Correct.</b> The sentence corrects a “tempting” but mistaken assumption, so the correction transition <b>In reality,</b> fits.", D: "“In other words” signals restatement, but the sentence adds a <i>contrasting</i> fact, not a paraphrase." } },

    { id: "v1-rw-m1-23", domain: "Expression of Ideas", skill: "Transitions", difficulty: "medium",
      passage: "<p>Karel Capek's 1920 play <i>R.U.R. (Rossum's Universal Robots)</i>, in which artificial workers overthrow their masters, left an indelible mark on the science fiction genre, and the English language, by introducing the term “robot” (derived from the Czech word <i>robota</i>, meaning “indentured labor” or “drudgery”). ______ Capek's play also contributed to a venerable literary and mythological tradition: using artificial beings as mirrors and foils for humanity.</p>",
      prompt: "Which choice completes the text with the most logical transition?",
      options: [{ id: "A", text: "Despite its creation of such an iconic trope," }, { id: "B", text: "By achieving such a lofty goal," }, { id: "C", text: "Ultimately limited in its lasting influence," }, { id: "D", text: "Beyond the simple coining of a term," }],
      answer: "D", explanation: "The play did more than coin “robot” — it also joined a deeper literary tradition. “<b>Beyond the simple coining of a term,</b>” signals that added contribution.",
      choiceExpl: { A: "“Despite…” signals contrast, but the next idea <i>adds</i> to the play's influence rather than opposing it.", B: "The play's “lofty goal” isn't the point — the sentence turns to a further contribution.", C: "The play was highly <i>influential</i>, so “limited in its lasting influence” contradicts the passage.", D: "<b>Correct.</b> Besides coining “robot,” the play also joined a deeper literary tradition — “<b>Beyond the simple coining of a term,</b>” signals that added contribution." } },

    { id: "v1-rw-m1-24", domain: "Expression of Ideas", skill: "Rhetorical Synthesis", difficulty: "medium",
      passage: "<p>While researching a topic, a student has taken the following notes:</p><ul><li>The Expedition of Humphry Clinker (1771) is an epistolary novel by English author Tobias Smollett.</li><li>Epistolary novels are novels written primarily as a series of fictional documents.</li><li>These documents can be letters, journal entries, newspaper clippings, and more.</li><li>The Expedition of Humphry Clinker consists primarily of letters.</li><li>The letters are sent between four family members, their maid, and a young man.</li></ul>",
      prompt: "The student wants to define the term “epistolary novel.” Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: [{ id: "A", text: "Tobias Smollett's novel The Expedition of Humphry Clinker was published in 1771 and consists primarily of letters sent between four family members, their maid, and a young man." }, { id: "B", text: "Consisting primarily of letters sent between four family members, their maid, and a young man, Tobias Smollett's The Expedition of Humphry Clinker is an epistolary novel." }, { id: "C", text: "Published in 1771, The Expedition of Humphry Clinker is an epistolary novel by English author Tobias Smollett." }, { id: "D", text: "An epistolary novel is a novel written primarily as a series of fictional documents, such as letters, journal entries, or newspaper clippings." }],
      answer: "D", explanation: "Only <b>D</b> actually defines what an epistolary novel is; the others describe one specific novel instead.",
      choiceExpl: { A: "This describes Smollett's specific novel; it doesn't <i>define</i> what an epistolary novel is.", B: "This labels one novel as epistolary but never states what the term means.", C: "This gives the novel's date and author, not a definition of the term.", D: "<b>Correct.</b> Only D defines the term — an epistolary novel is written as a series of fictional documents (letters, journal entries, etc.)." } },

    { id: "v1-rw-m1-25", domain: "Expression of Ideas", skill: "Rhetorical Synthesis", difficulty: "medium",
      passage: "<p>While researching a topic, a student has taken the following notes:</p><ul><li>The capital of Jamaica is Kingston.</li><li>The largest city in Jamaica by population is Kingston.</li><li>The capital of Morocco is Rabat.</li><li>The largest city in Morocco by population is Casablanca.</li></ul>",
      prompt: "The student wants to make a generalization about capital cities. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: [{ id: "A", text: "Casablanca and Rabat are both cities in Morocco." }, { id: "B", text: "A country's capital city is not always the country's most populous city." }, { id: "C", text: "Rabat, not Casablanca, is the capital of Morocco." }, { id: "D", text: "The capital of Morocco is Rabat, while the capital of Jamaica is Kingston." }],
      answer: "B", explanation: "Kingston is both capital and largest in Jamaica, but Morocco's capital (Rabat) isn't its largest (Casablanca) — so the generalization is that a capital <b>isn't always the most populous city</b> (B).",
      choiceExpl: { A: "This is a fact about Morocco's cities, not a <i>generalization</i> about capitals.", B: "<b>Correct.</b> Kingston is capital and largest, but Rabat (capital) isn't Morocco's largest — so a capital <b>isn't always the most populous city</b>.", C: "This corrects a detail about Morocco; it's not a general statement about capitals.", D: "This lists two capitals but draws no general conclusion." } },

    { id: "v1-rw-m1-26", domain: "Expression of Ideas", skill: "Rhetorical Synthesis", difficulty: "medium",
      passage: "<p>While researching a topic, a student has taken the following notes:</p><ul><li>The A.M. Turing Award is a prestigious award given by the Association for Computing Machinery (ACM).</li><li>The ACM gives the award for “major contributions of lasting importance to computing.”</li><li>It is named after groundbreaking British mathematician Alan Turing.</li><li>Edgar F. Codd won the award in 1981.</li></ul>",
      prompt: "The student wants to explain whom the award is named for and identify one recipient of it. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: [{ id: "A", text: "The A.M. Turing Award, which is named for British mathematician Alan Turing, was given to Edgar F. Codd in 1981." }, { id: "B", text: "In 1981, Edgar F. Codd won the A.M. Turing Award, which is given for “major contributions of lasting importance to computing.”" }, { id: "C", text: "The A.M. Turing Award is given for “major contributions of lasting importance to computing.”" }, { id: "D", text: "It was in 1981 that Edgar F. Codd won the A.M. Turing Award." }],
      answer: "A", explanation: "Only <b>A</b> states both whom the award is named for (Alan Turing) and a recipient (Edgar F. Codd).",
      choiceExpl: { A: "<b>Correct.</b> Only A gives both details — the award is named for Alan Turing <i>and</i> was given to Edgar F. Codd (1981).", B: "This names a recipient (Codd) but not whom the award is named for.", C: "This states only the award's criteria — neither the namesake nor a recipient.", D: "This names a recipient but omits whom the award is named for." } },

    { id: "v1-rw-m1-27", domain: "Expression of Ideas", skill: "Rhetorical Synthesis", difficulty: "medium",
      passage: "<p>While researching a topic, a student has taken the following notes:</p><ul><li>Albert Einstein's theory of general relativity allows for potential shortcuts through spacetime.</li><li>These hypothetical spacetime tunnels are known as wormholes.</li><li>For matter to travel through a wormhole, it would need to have negative energy density.</li><li>Negative energy density means that the matter would have less energy than empty space.</li><li>Such matter has not been shown to exist.</li></ul>",
      prompt: "The student wants to acknowledge a complication affecting travel through wormholes. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: [{ id: "A", text: "The hypothetical tunnels known as wormholes would be potential shortcuts through spacetime were it not for one complication: they have less energy than empty space." }, { id: "B", text: "Einstein's theory of general relativity allows for potential spacetime shortcuts called wormholes but does not explain how matter with negative energy density could travel through them." }, { id: "C", text: "For matter to travel through a wormhole, the matter would need to have less energy than empty space; such matter has not been shown to exist." }, { id: "D", text: "For wormholes to be possible, according to Einstein's theory of general relativity, they would have to allow for potential shortcuts through spacetime." }],
      answer: "C", explanation: "The complication is that travel requires negative-energy-density matter, which “has not been shown to exist” — stated directly in <b>C</b>.",
      choiceExpl: { A: "This garbles the complication and drops the key point that such matter “has not been shown to exist.”", B: "The real complication isn't that the theory “does not explain” travel — it's that the required matter may not exist.", C: "<b>Correct.</b> Travel needs negative-energy-density matter, which “has not been shown to exist” — the complication, stated directly.", D: "This just restates what wormholes are; it names no complication." } },
  ];

  // ---- Reading & Writing, Module 2 (HARD, 27 questions) ----
  const RW_M2 = [
    { id: "v1-rw-m2-1", domain: "Craft and Structure", skill: "Words in Context", difficulty: "medium",
      passage: "<p>Recitals by Catherine Kautsky, known for her virtuosity on the piano, are rightly described as ______ given that they can feature not just the performance of a musical piece but also a lecture on the piece's composer and a slideshow contextualizing the time in which it was composed.</p>",
      prompt: cw, options: [{ id: "A", text: "circumscribed" }, { id: "B", text: "multifaceted" }, { id: "C", text: "undiscerning" }, { id: "D", text: "exuberant" }],
      answer: "B", explanation: "The recitals combine performance, lecture, and slideshow — many facets — so they are <b>multifaceted</b>.",
      choiceExpl: { A: "“Circumscribed” means limited or restricted — the opposite of recitals that add a lecture and slideshow.", B: "<b>Correct.</b> The recitals combine performance, lecture, and slideshow — many sides — so they are <b>multifaceted</b>.", C: "“Undiscerning” means lacking judgment; it describes a person's taste, not a rich, many-part event.", D: "“Exuberant” means lively — a tone, not the “not just… but also…” variety the sentence stresses." } },

    { id: "v1-rw-m2-2", domain: "Craft and Structure", skill: "Words in Context", difficulty: "hard",
      passage: "<p>Among saltwater fish species, there is a clear association between habitat latitude and morphological variety. While tropical species are ______ deep-bodied physical forms (body shapes that are laterally compressed but vertically extended), polar and temperate species are highly dispersed across the morphological spectrum.</p>",
      prompt: cw, options: [{ id: "A", text: "habituated to" }, { id: "B", text: "authenticated by" }, { id: "C", text: "concentrated among" }, { id: "D", text: "contemporary with" }],
      answer: "C", explanation: "Tropical species cluster in one body type (deep-bodied) while others are dispersed, so they are <b>concentrated among</b> deep-bodied forms.",
      choiceExpl: { A: "“Habituated to” means accustomed to; species aren't accustomed to a body shape — they <i>have</i> it.", B: "“Authenticated by” means proven genuine; body forms don't authenticate species.", C: "<b>Correct.</b> Tropical species cluster in one body type while others are dispersed, so they are <b>concentrated among</b> deep-bodied forms.", D: "“Contemporary with” means existing at the same time; the contrast is about body shape, not time." } },

    { id: "v1-rw-m2-3", domain: "Craft and Structure", skill: "Words in Context", difficulty: "hard",
      passage: "<p>The following text is adapted from Edith Wharton's 1911 novella <i>Ethan Frome</i>. The narrator has asked the woman he rents a room from about Ethan Frome, a town resident he encountered recently.</p><p>Her mind was a store-house of innocuous anecdote and any question about her acquaintances brought forth a volume of detail; but on the subject of Ethan Frome I found her unexpectedly reticent. There was no hint of disapproval in her <u>reserve</u>; I merely felt in her an insurmountable reluctance to speak of him.</p>",
      prompt: "As used in the text, what does the word “reserve” most nearly mean?",
      options: [{ id: "A", text: "Constraint" }, { id: "B", text: "Modesty" }, { id: "C", text: "Composure" }, { id: "D", text: "Misgiving" }],
      answer: "A", explanation: "Her “reserve” is defined as “an insurmountable reluctance to speak of him” — a self-imposed holding back, i.e., <b>constraint</b>.",
      choiceExpl: { A: "<b>Correct.</b> Her “reserve” is defined as “an insurmountable reluctance to speak of him” — a self-imposed holding back, i.e., <b>constraint</b>.", B: "“Modesty” means humility about oneself; her silence is about Ethan, not self-effacement.", C: "“Composure” means calmness; the point is her unwillingness to speak, not how calm she is.", D: "“Misgiving” means doubt or worry — but the text says there was “no hint of disapproval” in her reserve." } },

    { id: "v1-rw-m2-4", domain: "Craft and Structure", skill: "Words in Context", difficulty: "hard",
      passage: "<p>The work of Tobias Gerstenberg et al. on tracking eye movements supports a theory that people envision ______ scenarios when making causal judgments: when subjects were asked to look at two colliding billiard balls and judge whether one caused or prevented the other's movement through a gate, their eyes looked at where the target ball would have gone if the ball that altered its path did not exist.</p>",
      prompt: cw, options: [{ id: "A", text: "analogical" }, { id: "B", text: "counterfactual" }, { id: "C", text: "retrospective" }, { id: "D", text: "ambivalent" }],
      answer: "B", explanation: "Subjects imagined where the ball “would have gone” if the other ball “did not exist” — a contrary-to-fact, i.e., <b>counterfactual</b>, scenario.",
      choiceExpl: { A: "“Analogical” means reasoning by analogy; subjects imagined an alternative outcome, not a comparison.", B: "<b>Correct.</b> Subjects pictured where the ball “would have gone” if the other ball “did not exist” — a contrary-to-fact, i.e., <b>counterfactual</b>, scenario.", C: "“Retrospective” means looking back at what <i>did</i> happen; here they imagine what did <i>not</i> happen.", D: "“Ambivalent” means having mixed feelings — irrelevant to imagining an alternative path." } },

    { id: "v1-rw-m2-5", domain: "Craft and Structure", skill: "Text Structure and Purpose", difficulty: "medium",
      passage: "<p><u>On receiving good news, people's first instinct might be to immediately share it</u>, but a recent experiment suggests that keeping it a secret can be psychologically beneficial. Study participants were randomly assigned to reflect on an experience in which they either shared good news or kept it to themselves. On average, those who kept good news secret reported feeling more energized by the experience than participants who shared did, perhaps, as the researchers suggest, because the choice to savor good news is usually a personal one and autonomous motivation is linked with feelings of vitality.</p>",
      prompt: "Which choice best describes the function of the underlined portion in the text as a whole?",
      options: [{ id: "A", text: "It indicates a reason why skepticism about the conclusions of the psychological study mentioned in the text is likely warranted." }, { id: "B", text: "It reports the main conclusion of a study into a social phenomenon whose methodology is critiqued in the text." }, { id: "C", text: "It presents a scenario whose psychological impact was investigated in the study summarized in the text." }, { id: "D", text: "It provides an observation about human behavior that was validated by the experiment summarized in the text." }],
      answer: "C", explanation: "The underlined behavior (the urge to share good news) is exactly what the study examined by comparing sharing with keeping it secret — a <b>scenario whose psychological impact was investigated</b>.",
      choiceExpl: { A: "The underlined urge isn't a reason to doubt the study — the study tests it, it doesn't undercut it.", B: "It's not the study's conclusion; the conclusion is that keeping news secret feels more energizing.", C: "<b>Correct.</b> The underlined behavior (the urge to share good news) is the very scenario the study investigated by comparing sharing vs. keeping it secret.", D: "The experiment did <i>not</i> validate that instinct — it found the opposite (secrecy felt better), so it isn't a “validated” observation." } },

    { id: "v1-rw-m2-6", domain: "Craft and Structure", skill: "Cross-Text Connections", difficulty: "hard",
      passage: "<p><b>Text 1</b></p><p>For decades, ornithologists assumed that if they saw a singing winter wren — a bird species found in temperate North America — they must be observing a male trying to attract a mate or claim territory. As Peter J.B. Slater and Nigel I. Mann have emphasized, however, a similar assumption can't be made about birds in the tropics, where females sing as often as males do. Slater and Mann call for more research on this discrepancy between tropical and temperate female birdsong.</p><p><b>Text 2</b></p><p>Recent evidence shows that a female winter wren is as capable of song as a male is. In fact, female birdsong is more common among temperate species than currently assumed, claim Evangeline Rose and colleagues. These female songbirds sing less frequently than males do, and in duller tones, making it “easy for researchers to miss the quiet and hidden females and focus on the loud and colorful males,” says Rose.</p>",
      prompt: "Based on the texts, how would Rose and colleagues (Text 2) most likely respond to the assertion by Slater and Mann (Text 1) about the different prevalence of female birdsong in temperate and tropical areas?",
      options: [{ id: "A", text: "They would concede that the geographic difference in prevalence is real but argue that the frequency with which male tropical birds sing has been overstated by previous researchers." }, { id: "B", text: "They would caution that the seeming difference in prevalence may be an artifact of researchers' tendency to study birdsong among temperate species more frequently than among tropical species." }, { id: "C", text: "They would raise the possibility that the difference in prevalence may be due to differences in the timing of the mating season among temperate and tropical bird species." }, { id: "D", text: "They would argue that the apparent difference in prevalence may partly reflect a difference in the ease with which female birdsong and male birdsong can be detected." }],
      answer: "D", explanation: "Rose stresses that temperate female song is quiet and easily missed next to loud males, so the apparent temperate/tropical gap may just reflect how much harder female song is to <b>detect</b> (D).",
      choiceExpl: { A: "Rose doesn't concede the gap is real — she suggests it may be an illusion of detection.", B: "Rose's point is that quiet females are <i>missed</i>, not that tropical species are studied less often.", C: "Mating-season timing is never raised by Rose — that's outside both texts.", D: "<b>Correct.</b> Rose stresses temperate female song is quiet and easily missed next to loud males, so the apparent gap may reflect how hard female song is to <b>detect</b>." } },

    { id: "v1-rw-m2-7", domain: "Craft and Structure", skill: "Cross-Text Connections", difficulty: "hard",
      passage: "<p><b>Text 1</b></p><p>In separate studies, Yanbo Xiao and colleagues and Xinhua He and colleagues examined whether plants transfer nutrients to one another using a common mycorrhizal network (CMN) — a lattice of fungal strands in the soil. Xiao and colleagues excluded all pathways other than the CMN by using barriers to keep the plants' root systems separate while allowing mycorrhizal strands through — a crucial step He and colleagues' study did not take.</p><p><b>Text 2</b></p><p>Xiao and colleagues took the necessary precaution of separating the plants' root systems (thereby excluding root-to-root transmission). However, any barrier used must allow the thread-like hyphae of a CMN to pass through, and this permeability would also allow liquids through. Thus, the researchers' experimental design cannot ensure that any nutrient transfer observed can be attributed to a CMN and not to some other pathway.</p>",
      prompt: "Based on the texts, how would the author of Text 2 most likely respond to the characterization of Xiao and colleagues' study in Text 1?",
      options: [{ id: "A", text: "By arguing that the author of Text 1 has conflated the method used by Xiao and colleagues with that used by He and colleagues." }, { id: "B", text: "By claiming that the author of Text 1 has misrepresented what Xiao and colleagues were trying to achieve with their experimental design." }, { id: "C", text: "By asserting that the author of Text 1 has overstated the effectiveness of the method that Xiao and colleagues used." }, { id: "D", text: "By pointing out that the author of Text 1 has overlooked studies that reported results that contradict those reported by Xiao and colleagues." }],
      answer: "C", explanation: "Text 1 praises Xiao's barrier as a “crucial step,” but Text 2 notes the barrier still lets liquids through, so it can't isolate the CMN — Text 2 would say Text 1 <b>overstated the method's effectiveness</b> (C).",
      choiceExpl: { A: "Text 2 doesn't say Text 1 mixed up the two studies — it accepts that Xiao used a barrier.", B: "Text 2 agrees on what Xiao was trying to do; it disputes whether the method <i>worked</i>.", C: "<b>Correct.</b> Text 1 calls Xiao's barrier a “crucial step,” but Text 2 notes it still lets liquids through, so Text 1 <b>overstated the method's effectiveness</b>.", D: "Neither text mentions other, contradicting studies." } },

    { id: "v1-rw-m2-8", domain: "Information and Ideas", skill: "Inferences", difficulty: "hard",
      passage: "<p>Since 2012, a consortium of research institutions has released an annual report that ranks countries by their populations' well-being, which the authors of the report derive using data from a globally administered survey of respondents' self-assessed levels of happiness. However, some other scholars caution that this approach reflects a tendentious understanding of the relationship between these two metrics. For example, studies have revealed a tendency among people in some non-Western countries to regard individual happiness as less important to their well-being than other ideals (e.g., a sense of harmony or balance).</p>",
      prompt: "Based on the text, what is a potential weakness of the annual report issued by the consortium of research institutions?",
      options: [{ id: "A", text: "It may not adequately account for cultural variations in the value attached to a particular concept." }, { id: "B", text: "It relies on survey responses from participants who may not be representative of their countries' cultural norms." }, { id: "C", text: "It overlooks how philosophies regarding a particular concept have evolved over time." }, { id: "D", text: "It includes survey data from a wide range of Western countries but only from a narrow set of non-Western countries." }],
      answer: "A", explanation: "The report equates happiness with well-being, yet some cultures value happiness less in their conception of well-being — so it may not account for <b>cultural variation in the value attached to happiness</b> (A).",
      choiceExpl: { A: "<b>Correct.</b> The report equates happiness with well-being, yet some cultures value happiness less in their idea of well-being — so it may not account for <b>cultural variation in the value attached to a concept</b>.", B: "The text doesn't say respondents are unrepresentative of their cultures — it questions the happiness-equals-well-being assumption.", C: "How the concept has “evolved over time” is never discussed.", D: "The passage never claims the non-Western sample is too narrow." } },

    { id: "v1-rw-m2-9", domain: "Information and Ideas", skill: "Central Ideas and Details", difficulty: "medium",
      passage: "<p>While no one doubts that politicians are influenced by a variety of incentives, it is generally agreed that they seek to support policies their constituents favor — after all, they risk losing office if they do not. Direct contact with constituents via such means as public events and emails from voters is a major source of politicians' beliefs about their constituents' views, but it is susceptible to a selection effect. There is little reason to presume that individuals with the time, resources, and strength of feeling to directly engage with their representatives are themselves broadly representative.</p>",
      prompt: "Which choice best states the main idea of the text?",
      options: [{ id: "A", text: "Politicians aim to advocate for their constituents' policy preferences, but politicians' understanding of those preferences may be skewed." }, { id: "B", text: "People who are likely to contact their elected representatives do not tend to be representative of politicians' constituents generally." }, { id: "C", text: "Direct contact with constituents shapes politicians' beliefs about policies their constituents favor, and they try to act in accordance with those beliefs." }, { id: "D", text: "Although politicians have an incentive to act in accordance with their constituents' views, that is not the only incentive shaping their actions." }],
      answer: "A", explanation: "Politicians try to follow constituents' preferences, but their main source of those preferences (self-selected contacts) is unrepresentative, so their <b>understanding may be skewed</b> (A). B is just a supporting detail.",
      choiceExpl: { A: "<b>Correct.</b> Politicians aim to follow constituents' preferences, but their main source of those preferences (self-selected contacts) is unrepresentative, so their <b>understanding may be skewed</b>.", B: "True, but it's a supporting <i>detail</i> — the main idea links that fact to politicians' behavior.", C: "This restates the setup but omits the key twist: that the direct contact is unrepresentative.", D: "The “other incentives” idea is only a concession in the opening clause, not the main point." } },

    { id: "v1-rw-m2-10", domain: "Information and Ideas", skill: "Central Ideas and Details", difficulty: "hard",
      passage: "<p>Within higher education, studying philosophy requires that students be conversant with the field's foundational texts and historical figures. By contrast, doing philosophy within or beyond the academy demands the creative, self-directed application of acquired expertise to enduring questions about the nature of existence and knowledge. While both approaches engage with influential figures, those who do philosophy treat such figures as vital interlocutors who facilitate new insights rather than as ossified authorities who, though relevant to the present, primarily represent the discipline's past.</p>",
      prompt: "Based on the text, which choice best describes the relationship between doing philosophy and studying philosophy?",
      options: [{ id: "A", text: "Doing philosophy represents a departure from the norms that govern scholarly inquiry, whereas studying philosophy requires conformation to these norms." }, { id: "B", text: "Doing philosophy involves developing novel ideas through imagined dialogue with past philosophers based on knowledge of those philosophers' views acquired by studying philosophy." }, { id: "C", text: "Doing philosophy helps students formulate concrete solutions to practical issues, whereas studying philosophy prioritizes engagement with historical arguments in the field." }, { id: "D", text: "Doing philosophy requires students to challenge the ideas articulated by past philosophers, especially when these ideas are broadly accepted by other people studying philosophy." }],
      answer: "B", explanation: "Doing philosophy applies expertise gained by studying and treats past figures as “vital interlocutors” for new insight — i.e., novel ideas via <b>imagined dialogue with past philosophers, built on knowledge from studying</b> (B).",
      choiceExpl: { A: "The text doesn't frame doing philosophy as breaking scholarly <i>norms</i> — it's about how each treats past figures.", B: "<b>Correct.</b> Doing philosophy applies expertise gained by studying and treats past figures as “vital interlocutors” for new insight — novel ideas via imagined dialogue built on study.", C: "“Concrete solutions to practical issues” overstates it — the text says “enduring questions,” not practical problems.", D: "The text says doing philosophy treats figures as interlocutors, not that it must <i>challenge</i> widely accepted ideas." } },

    { id: "v1-rw-m2-11", domain: "Information and Ideas", skill: "Command of Evidence", difficulty: "hard",
      passage: "<p>Researchers have identified over eighty gestures made by nonhuman great apes, such as clapping and rocking from side to side, that appear to convey information and that seem to be biologically inherited. Kirsty E. Graham and Catherine Hobaiter hypothesized that humans may be able to interpret great ape gestures, either through an evolutionary inheritance or as part of more general human cognitive abilities. The researchers tested this hypothesis by enlisting participants in an online game in which they had to correctly identify the meanings of ape gestures seen in videos. Though participants achieved some success, <u>it is unclear whether they sometimes did so by making use of additional context provided by the images or sounds in the video recordings</u>.</p>",
      prompt: "Which statement, if true, would most strongly support the underlined claim?",
      options: [{ id: "A", text: "Participants correctly identified gestures at the same rate for videos in which the apes made sounds in addition to gestures and videos in which the apes were silent." }, { id: "B", text: "When apes made mouth-touching gestures, which participants tended to correctly interpret as requests for food, the food was visible in the videos." }, { id: "C", text: "Participants were more readily able to identify an ape gesture when it meant “climb on my back” than when it meant “let's be friendly.”" }, { id: "D", text: "Participants correctly interpreted ape gestures more than 50 percent of the time, whereas they would have only identified gestures correctly 25 percent of the time if they had been guessing." }],
      answer: "B", explanation: "The underlined claim is that participants' success might have come from extra context (images/sounds) rather than the gestures themselves. Choice B shows exactly that: when they correctly read a mouth-touching gesture as a request for food, the food was visible in the video — so the image, not the gesture, may have driven the answer.",
      choiceExpl: { A: "Equal accuracy with and without sound would <i>weaken</i> the claim that extra context helped.", B: "<b>Correct.</b> When participants correctly read the mouth-touching gesture as a food request, the food was visible — so the image, not the gesture, may have given it away.", C: "One gesture being easier than another says nothing about extra <i>context</i> from the videos.", D: "Beating chance shows some success but not <i>why</i> — it doesn't isolate the context effect." } },

    { id: "v1-rw-m2-12", domain: "Information and Ideas", skill: "Command of Evidence", difficulty: "hard",
      passage: "<img src=\"assets/img/exams/v1-rw-m2-q12.png\" alt=\"Bar graph: Proportion of the Three Most Commonly Exhibited Mobility Patterns, in the US and Cote d'Ivoire\" style=\"max-width:360px;width:100%;display:block;margin:0 auto 16px\" />" +
        "<p>Researchers used anonymized location data from the US and Cote d'Ivoire to document people's daily patterns of mobility, using these results to test the efficacy of the researchers' predictive computer model. In each country, unidirectional cycles among two, three, or four locations were empirically the most common pattern types; the graph shows each of these pattern types as a proportion of all pattern instances found for that country (e.g., the measured value for CI 3 in the graph, 0.12, indicates that the three-location pattern constituted 12% of all pattern instances in the Cote d'Ivoire data). The researchers ran their model twice under different assumptions, concluding that emphasizing the salience of local population density over personal preferences generally yielded the best results.</p>",
      prompt: "Which choice most effectively uses data from the graph to illustrate the researchers' conclusion?",
      options: [{ id: "A", text: "Under the assumption that density is more salient than preferences, the US 2 and CI 2 proportions are approximately 0.65 and 0.85, respectively, significantly higher than the values predicted under the other assumption and thus farther than those predictions from the measured values." }, { id: "B", text: "Under the assumption that preferences are more salient than density, the US 2 and CI 2 proportions were predicted to be approximately 0.45 and 0.35, respectively, both below the measured values, whereas under the other assumption, the model overestimated the proportion for US 2 and overestimated that for CI 2." }, { id: "C", text: "Under the assumption that preferences are more salient than density, the two-location patterns (US 2 and CI 2) were predicted to be most frequent in the data even though neither proportion was projected to exceed 0.5, well below the proportion predicted under the other assumption." }, { id: "D", text: "Under the assumption that preferences are more salient than density, the US 2 and CI 2 proportions were predicted to be in the range of 0.3 to 0.5, placing them farther from the measured values than were those predicted under the other assumption." }],
      answer: "D", explanation: "The conclusion is that the density model fits best. The “emphasis preferences” bars for US 2 (~0.47) and CI 2 (~0.33) sit in the 0.3–0.5 range and are farther from the measured values than the density model's — exactly what <b>D</b> says.",
      choiceExpl: { A: "It misreads the density-assumption bars and claims they're farther off — but the density model is the <i>better</i> fit.", B: "It says the density model “overestimated” both, contradicting the conclusion that density fits best.", C: "It claims the preference model still made the two-location pattern most frequent, which the graph doesn't support.", D: "<b>Correct.</b> The “emphasis preferences” bars for US 2 (~0.47) and CI 2 (~0.33) fall in the 0.3–0.5 range and lie farther from the measured values than the density model's — matching the conclusion that density fits best." } },

    { id: "v1-rw-m2-13", domain: "Information and Ideas", skill: "Inferences", difficulty: "hard",
      passage: "<p>Across brown bears — omnivores with high dietary plasticity — there is wide variety in dietary mix, which may reflect genetics, local resource availability, or social learning (cubs stay with their mothers for two years or more). Evaluating these possibilities, Anne Hertel et al. analyzed 30 years of data on trophic position (indicative of dietary mix) for female brown bears. After separation, daughters, who tended to settle near their mothers, occupied the same trophic positions as their mothers for two years, but the correlation disappeared by year five. Trophic correlation with unrelated individuals in similar habitats was modest, while habitat-independent correlation with nonmaternal relatives (e.g., cousins) was no different than with unrelated individuals. These findings suggest that ______</p>",
      prompt: "Which choice most logically completes the text?",
      options: [{ id: "A", text: "social learning and resource fluctuations may both play a role in dietary mix among females, at least temporarily, though genetic factors appear to make a significant contribution as well." }, { id: "B", text: "female dietary mix is best understood as changeable and contingent on fluctuating environmental conditions rather than as the result of social learning or genetic factors." }, { id: "C", text: "dietary mix among females may reflect a social learning effect that eventually diminishes, though environmental constraints cannot be ruled out as a contributing factor." }, { id: "D", text: "growing dissimilarity between mothers and daughters with regard to dietary mix may reflect changes in the resources available in maternal habitats, though social learning could also contribute to the trend." }],
      answer: "C", explanation: "Mothers and daughters match for two years then diverge (a social-learning effect that fades), and similar-habitat individuals correlate modestly (environment matters); cousins are no more similar than strangers (genetics ruled out). So: a diminishing <b>social-learning effect, with environment not ruled out</b> (C).",
      choiceExpl: { A: "Genetics is <i>ruled out</i> — cousins were no more similar than unrelated bears.", B: "Environment isn't the sole factor; mothers and daughters matched for two years, pointing to social learning.", C: "<b>Correct.</b> Mother-daughter diets match for two years then diverge (social learning that fades), similar-habitat bears correlate modestly (environment), and cousins match no better than strangers (genetics ruled out).", D: "This picks resource change alone and ignores the two-year mother-daughter match that indicates social learning." } },

    { id: "v1-rw-m2-14", domain: "Information and Ideas", skill: "Inferences", difficulty: "medium",
      passage: "<p>The advent of online streaming has led many music listeners to drift away from ownership of music (through downloads or through physical media such as compact discs) and toward the streaming services YouTube Music and Jango, among others. Datta et al. studied the impact of this change on the variety of music that listeners consume. The researchers reasoned that the ownership model of music assigns a cost per song to acquiring a variety of music, while streaming services typically charge a flat fee for access to an entire music catalog, making variety free, which suggests that ______</p>",
      prompt: "Which choice most logically completes the text?",
      options: [{ id: "A", text: "listeners who use streaming services would be more likely to give physical copies of music as gifts to others than to purchase physical copies for themselves." }, { id: "B", text: "music publishers who choose to forgo releasing music on physical media are likely to see no change in revenue." }, { id: "C", text: "the music choices of listeners who use streaming services would likely be more varied than those of listeners who do not use streaming services." }, { id: "D", text: "listeners who prefer to purchase compact discs rather than use a service such as YouTube Music or Jango would tend to listen to older music." }],
      answer: "C", explanation: "If streaming makes variety free (no per-song cost), streaming listeners face no penalty for exploring, so their music choices should be <b>more varied</b> than non-streamers' (C).",
      choiceExpl: { A: "Gift-giving of physical copies isn't what the cost-of-variety reasoning predicts.", B: "Publisher revenue isn't the focus — the study is about listeners' variety.", C: "<b>Correct.</b> If streaming makes variety free (no per-song cost), streaming listeners face no penalty for exploring, so their choices should be <b>more varied</b> than non-streamers'.", D: "Whether CD buyers prefer older music doesn't follow from the free-variety premise." } },

    { id: "v1-rw-m2-15", domain: "Information and Ideas", skill: "Inferences", difficulty: "hard",
      passage: "<p>Some farms are expanding their mix of crop species in an effort to reduce nonagricultural biodiversity loss caused by increasing agricultural specialization, in which farmers focus on a limited range of crops or livestock species to improve yields and, thus, their revenues. To study the joint environmental and economic effects of diversification practices (which can encompass improved soil and water management as well as increased variety in crops and livestock), Laura Vang Rasmussen and team analyzed data from 2,655 farms in eleven countries. They found that using multiple diversification practices concurrently had greater potential for improving both nonagricultural biodiversity and yields than using a single strategy did. Their finding suggests that ______</p>",
      prompt: "Which choice most logically completes the text?",
      options: [{ id: "A", text: "farmers who are reluctant to switch from specializing in a single crop to cultivating a variety of crops incorrectly assume that any improvements in yields will be insufficient to offset the costs associated with making that transition." }, { id: "B", text: "farmers who focus primarily on increasing crop variety without engaging in other diversification practices will likely help reverse nonagricultural biodiversity loss, but their farms will produce smaller yields than if they had continued to focus on developing a single crop." }, { id: "C", text: "agricultural diversification doesn't inherently involve a trade-off between environmental and economic considerations, but farmers' chances of avoiding that outcome may be diminished if they focus on crop variety to the exclusion of other diversification practices." }, { id: "D", text: "it is more expensive to increase crop variety while simultaneously implementing other diversification practices than it is to increase crop variety and then subsequently implement other diversification practices." }],
      answer: "C", explanation: "Using multiple practices together improved both biodiversity and yields, so diversification need not pit environment against economics — but relying on crop variety alone (excluding other practices) makes that win-win less likely (C).",
      choiceExpl: { A: "The finding is about combining practices, not about farmers' mistaken cost assumptions.", B: "The study found multiple practices improved <i>both</i> biodiversity and yields — it doesn't say crop variety alone lowers yields below specialization.", C: "<b>Correct.</b> Multiple practices together improved both biodiversity and yields, so diversification need not pit environment against economics — but crop variety alone makes that win-win less likely.", D: "The relative <i>cost</i> of doing the practices together vs. one after another isn't discussed." } },

    { id: "v1-rw-m2-16", domain: "Standard English Conventions", skill: "Boundaries", difficulty: "medium",
      passage: "<p>A bias toward studying birds and mammals over fish was one of the many shortcomings researcher Sonia Llorente-Culebras and her team ______ analyzing nearly 400 biodiversity studies from around the globe.</p>",
      prompt: conv, options: [{ id: "A", text: "discovered. While" }, { id: "B", text: "discovered, while" }, { id: "C", text: "discovered while" }, { id: "D", text: "discovered: while" }],
      answer: "C", explanation: "“…the many shortcomings … the team discovered while analyzing nearly 400 studies” reads as one sentence; “while analyzing…” is a tight adverbial phrase that takes <b>no punctuation</b> (C).",
      choiceExpl: { A: "A period wrongly splits “the shortcomings the team discovered” from “while analyzing…,” which belong together.", B: "The comma isn't needed — “while analyzing…” is an essential adverbial phrase, not a parenthetical.", C: "<b>Correct.</b> “…the shortcomings the team discovered while analyzing nearly 400 studies” is one clause; the “while” phrase takes <b>no punctuation</b>.", D: "A colon must follow a complete clause and introduce an explanation — neither is true here." } },

    { id: "v1-rw-m2-17", domain: "Standard English Conventions", skill: "Form, Structure, and Sense", difficulty: "hard",
      passage: "<p>Jane Austen's <i>Northanger Abbey</i> (1818) is considered a satire of another novel popular at the time: Ann Radcliffe's <i>The Mysteries of Udolpho</i> (1794), which Austen's heroine, Catherine Morland, is depicted reading. However, the similarity of the ______ experiences — the predicaments of both Catherine and Radcliffe's Emily St. Aubert result from men's greed — suggests that underlying the satire is a social critique.</p>",
      prompt: conv, options: [{ id: "A", text: "novel's protagonist's" }, { id: "B", text: "novels' protagonists" }, { id: "C", text: "novels' protagonists'" }, { id: "D", text: "novel's protagonists'" }],
      answer: "C", explanation: "There are two novels (novels') and two protagonists (Catherine and Emily) who own the experiences (protagonists'). Both plural possessives are needed: <b>novels' protagonists'</b> (C).",
      choiceExpl: { A: "Singular “novel's protagonist's” ignores that there are <i>two</i> novels and two protagonists.", B: "“novels' protagonists” makes the protagonists plural but drops the possessive needed before “experiences.”", C: "<b>Correct.</b> Two novels (novels') and two protagonists who own the experiences (protagonists') — both plural possessives: <b>novels' protagonists'</b>.", D: "“novel's” is singular, but two novels are being compared." } },

    { id: "v1-rw-m2-18", domain: "Standard English Conventions", skill: "Form, Structure, and Sense", difficulty: "hard",
      passage: "<p>As part of his effort to identify Bronze Age pathways across Sicily, archaeologist Dario Calderone created three-dimensional digital models of the terrain via aerial photogrammetry. The drone ______ the landscape, which included archaeological sites from as far back as the Early Neolithic Period, flew in a pattern that ensured 60 percent forward overlap and 20 percent side overlap between individual images.</p>",
      prompt: conv, options: [{ id: "A", text: "photographs" }, { id: "B", text: "photographing" }, { id: "C", text: "was photographing" }, { id: "D", text: "photographed" }],
      answer: "B", explanation: "The sentence's main verb is “flew,” so the blank needs a participle, not a second main verb: “The drone <b>photographing</b> the landscape … flew in a pattern….”",
      choiceExpl: { A: "“photographs” is a second finite verb, leaving “photographs… flew” with no connection.", B: "<b>Correct.</b> The main verb is “flew,” so the blank needs a participle: “The drone <b>photographing</b> the landscape … flew in a pattern….”", C: "“was photographing” is a finite verb, creating a comma splice with “flew.”", D: "“photographed” is also a finite past-tense verb, colliding with the main verb “flew.”" } },

    { id: "v1-rw-m2-19", domain: "Standard English Conventions", skill: "Boundaries", difficulty: "medium",
      passage: "<p>Before the ratification of the 19th Amendment in 1920, many US territories extended voting rights to women, in part to spur westward migration that would help these territories meet population thresholds for statehood. The Territory of Wyoming approved women's suffrage in 1869 before attaining statehood in ______ while eastern states, lacking the same incentive, did not follow suit until after the turn of the century.</p>",
      prompt: conv, options: [{ id: "A", text: "1890, for example," }, { id: "B", text: "1890, for example:" }, { id: "C", text: "1890, for example;" }, { id: "D", text: "1890; for example," }],
      answer: "A", explanation: "“for example” is a parenthetical and needs a comma on each side: “…attaining statehood in 1890, for example, while eastern states…” The “while” clause is subordinate, so no semicolon or colon is needed (A).",
      choiceExpl: { A: "<b>Correct.</b> “for example” is a parenthetical, so it takes a comma on each side: “…statehood in 1890, for example, while eastern states…”", B: "A colon after “for example” wrongly promises a list or explanation that doesn't follow.", C: "A semicolon after “for example” would need two independent clauses, but the “while” clause is subordinate.", D: "A semicolon before “for example” cuts the parenthetical off from the clause it belongs to." } },

    { id: "v1-rw-m2-20", domain: "Standard English Conventions", skill: "Form, Structure, and Sense", difficulty: "hard",
      passage: "<p>In economics, soybeans are considered a commodity because they are essentially interchangeable, “essentially” being a word that admits a degree of latitude. In 2021, researchers J. Shorish, M. Stephenson, and M. Zargham devised a mathematical model of fungibility (interchangeability) that would account for such variation. Distinguishing “exactly the same” and “nearly the same” commodities — whether crops, lumber, or precious metals — ______ among their primary aims.</p>",
      prompt: conv, options: [{ id: "A", text: "was" }, { id: "B", text: "were" }, { id: "C", text: "having been" }, { id: "D", text: "being" }],
      answer: "A", explanation: "The subject is the gerund phrase “Distinguishing … commodities,” which is singular and needs a finite verb: “Distinguishing … <b>was</b> among their primary aims.”",
      choiceExpl: { A: "<b>Correct.</b> The subject is the singular gerund phrase “Distinguishing … commodities,” which needs the singular finite verb <b>was</b>.", B: "“were” is plural; the gerund-phrase subject is singular.", C: "“having been” isn't a finite verb — the sentence would lack a main verb.", D: "“being” likewise isn't a finite main verb." } },

    { id: "v1-rw-m2-21", domain: "Standard English Conventions", skill: "Boundaries", difficulty: "hard",
      passage: "<p>The legacy of the Spanish Empire, which once controlled portions of five continents, is evident in Spanish-speaking Uruguay, one of many places that reveal their imperial history in their language. Contrast Uruguay with Belgium, which ceased to be part of the empire in ______ the latter's connection to the empire is so attenuated that Spanish is seldom spoken there today.</p>",
      prompt: conv, options: [{ id: "A", text: "1714 and" }, { id: "B", text: "1714" }, { id: "C", text: "1714," }, { id: "D", text: "1714;" }],
      answer: "D", explanation: "Two independent clauses (“Contrast Uruguay with Belgium … in 1714” and “the latter's connection … is so attenuated …”) must be joined by a semicolon: <b>1714;</b> (D). The others create a run-on or comma splice.",
      choiceExpl: { A: "“and” would join parallel elements, but the two parts are full independent clauses — this makes a run-on.", B: "No punctuation fuses the two independent clauses into a run-on.", C: "A comma between the two independent clauses is a comma splice.", D: "<b>Correct.</b> Two independent clauses (“Contrast Uruguay with Belgium … in 1714” and “the latter's connection … is so attenuated…”) are correctly joined by a semicolon: <b>1714;</b>." } },

    { id: "v1-rw-m2-22", domain: "Expression of Ideas", skill: "Transitions", difficulty: "medium",
      passage: "<p>To determine the approximate age of sand engravings excavated from a coastal site in South Africa, archaeologist Charles Helm and colleagues collected samples of sediments surrounding the engravings; these samples were then analyzed using a method known as optically stimulated luminescence (OSL) dating. ______ OSL dating indicated that the engravings were between 129,000 and 149,000 years old.</p>",
      prompt: "Which choice completes the text with the most logical transition?",
      options: [{ id: "A", text: "Similarly," }, { id: "B", text: "Ultimately," }, { id: "C", text: "By comparison," }, { id: "D", text: "In addition," }],
      answer: "B", explanation: "The dating result is the end point of the process just described (collect samples → analyze → result), so the conclusive transition <b>Ultimately,</b> fits.",
      choiceExpl: { A: "“Similarly” signals likeness, but the result isn't parallel to the sampling step — it follows from it.", B: "<b>Correct.</b> The dating result is the end point of the process just described (collect → analyze → result), so the conclusive <b>Ultimately,</b> fits.", C: "“By comparison” sets up a contrast between two things; only one process is described.", D: "“In addition” adds a separate point, but this is the <i>outcome</i> of the process, not an extra fact." } },

    { id: "v1-rw-m2-23", domain: "Expression of Ideas", skill: "Transitions", difficulty: "medium",
      passage: "<p>When it was built in the nineteenth century, the Eiffel Tower was criticized — even protested — for its unique appearance. ______ the spire-like structure earned not just acceptance but adoration, and its iconic design is now echoed in everything from the Eiffel Tower replica in Lake Buena Vista, Florida, to the Funkturm Berlin in Berlin, Germany.</p>",
      prompt: "Which choice completes the text with the most logical transition?",
      options: [{ id: "A", text: "Ultimately," }, { id: "B", text: "For example," }, { id: "C", text: "Thus," }, { id: "D", text: "Similarly," }],
      answer: "A", explanation: "The tower went from criticized to adored over time, so the time-resolving transition <b>Ultimately,</b> captures the eventual reversal.",
      choiceExpl: { A: "<b>Correct.</b> The tower went from criticized to adored <i>over time</i>, so the time-resolving <b>Ultimately,</b> captures the eventual reversal.", B: "“For example” would introduce an instance, but the sentence reports a change, not an example.", C: "“Thus” signals a logical result, but adoration didn't logically follow from criticism — it reversed it over time.", D: "“Similarly” signals likeness, yet acceptance <i>contrasts</i> with the earlier criticism." } },

    { id: "v1-rw-m2-24", domain: "Expression of Ideas", skill: "Transitions", difficulty: "medium",
      passage: "<p>Luminata Ilinca Ignat is a space scientist who works on the James Webb Space Telescope, or JWST. Thanks in part to Ilinca Ignat's contributions, the telescope is now positioned near the Sun-Earth L2 Lagrange point, almost one million miles beyond Earth's orbit. ______ the JWST's predecessor, the Hubble Telescope, is only about 340 miles above Earth's surface.</p>",
      prompt: "Which choice completes the text with the most logical transition?",
      options: [{ id: "A", text: "By contrast," }, { id: "B", text: "Secondly," }, { id: "C", text: "Similarly," }, { id: "D", text: "Therefore," }],
      answer: "A", explanation: "JWST sits ~1 million miles away while Hubble is only ~340 miles up — a sharp contrast, so <b>By contrast,</b> fits.",
      choiceExpl: { A: "<b>Correct.</b> JWST sits ~1 million miles away while Hubble is only ~340 miles up — a sharp contrast, so <b>By contrast,</b> fits.", B: "“Secondly” signals the next item in a list; there's no enumerated sequence here.", C: "“Similarly” signals likeness, but the two distances are opposite extremes.", D: "“Therefore” signals a conclusion, but Hubble's distance doesn't follow from JWST's." } },

    { id: "v1-rw-m2-25", domain: "Expression of Ideas", skill: "Transitions", difficulty: "hard",
      passage: "<p>In a given rock formation, Rhaetian rock from 208.5 million years ago might directly abut Lochkovian rock from 419.2 million years ago, with millions of years of material missing in between. ______ time did not stand still during these intervening years; the unaccounted-for sedimentary material was likely removed from the stratigraphic record via erosion and weathering.</p>",
      prompt: "Which choice completes the text with the most logical transition?",
      options: [{ id: "A", text: "As a result," }, { id: "B", text: "In particular," }, { id: "C", text: "Of course," }, { id: "D", text: "On the contrary," }],
      answer: "C", explanation: "The missing rock layers don't mean time paused — obviously it didn't. The concessive “<b>Of course,</b>” acknowledges that self-evident point before explaining the gap.",
      choiceExpl: { A: "“As a result” signals cause-and-effect, but time not stopping isn't caused by the missing layers.", B: "“In particular” narrows to a specific case; the sentence makes a general, obvious point.", C: "<b>Correct.</b> The missing layers don't mean time paused — obviously it didn't. The concessive <b>Of course,</b> grants that self-evident point before explaining the gap.", D: "“On the contrary” rejects a prior claim, but nothing claimed that time stood still." } },

    { id: "v1-rw-m2-26", domain: "Expression of Ideas", skill: "Transitions", difficulty: "medium",
      passage: "<p>The Sino-Tibetan language of Loke has only about 7,500 living speakers. Although most Loke speakers live in Nepal, where the language originated, Loke is also spoken in New York City. ______ the New York-based Endangered Language Alliance has identified a group of Loke speakers in the city's Allerton neighborhood, in the borough of the Bronx.</p>",
      prompt: "Which choice completes the text with the most logical transition?",
      options: [{ id: "A", text: "In addition," }, { id: "B", text: "Nonetheless," }, { id: "C", text: "Specifically," }, { id: "D", text: "Meanwhile," }],
      answer: "C", explanation: "The second sentence gives the specific case behind “also spoken in New York City” (a Bronx neighborhood), so <b>Specifically,</b> fits.",
      choiceExpl: { A: "“In addition” adds a new point, but the sentence <i>elaborates</i> on “also spoken in New York City.”", B: "“Nonetheless” signals contrast, yet the sentence supports, not opposes, the prior claim.", C: "<b>Correct.</b> The second sentence gives the specific case behind “also spoken in New York City” (a Bronx neighborhood), so <b>Specifically,</b> fits.", D: "“Meanwhile” signals a simultaneous but separate event; this is the same fact, made specific." } },

    { id: "v1-rw-m2-27", domain: "Expression of Ideas", skill: "Rhetorical Synthesis", difficulty: "hard",
      passage: "<p>While researching a topic, a student has taken the following notes:</p><ul><li>Shanawdithit (1801–1829) was a Beothuk cartographer (mapmaker).</li><li>Her maps of Newfoundland's Beothuk Lake outline both the lake and various points around the lake where encounters between the Indigenous Beothuk people and British colonists occurred.</li><li>Her maps are notable for depicting the experiences the Beothuk had within the landscape.</li><li>Contemporary Potawatomi cartographer Margaret Pearce: Indigenous cartography emphasizes “experienced space, or place, as opposed to the Western convention of depicting space as universal, homogenized, and devoid of human experience.”</li><li>Pearce: “Indigenous cartographies are as diverse as Indigenous cultures, from Hawaiian performative cartographies to Navajo verbal maps and sand paintings.”</li></ul>",
      prompt: "The student wants to describe Shanawdithit's approach and explain its significance. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: [{ id: "A", text: "By depicting experiences of the Beothuk that occurred around Beothuk Lake, Shanawdithit's maps reflect Indigenous cartography's emphasis on “experienced space, or place” rather than the landscape alone." }, { id: "B", text: "According to Pearce, Indigenous cartography, such as Shanawdithit's maps of Beothuk Lake, emphasizes “experienced space, or place,” with a variety of approaches that reflect the diversity of Indigenous cultures." }, { id: "C", text: "Shanawdithit mapped Beothuk Lake through significant encounters that occurred there, an approach that Pearce describes as “depicting space as universal [and] homogenized.”" }, { id: "D", text: "Shanawdithit's maps are part of a broader tradition of Indigenous cartography that, according to Pearce, ranges from “Hawaiian performative cartographies to Navajo verbal maps and sand paintings.”" }],
      answer: "A", explanation: "Only <b>A</b> both describes her approach (mapping Beothuk experiences around the lake) and explains its significance (it embodies Indigenous cartography's emphasis on “experienced space, or place”). C wrongly attributes the Western convention to her.",
      choiceExpl: { A: "<b>Correct.</b> A both describes her approach (mapping Beothuk experiences around the lake) and explains its significance — it embodies Indigenous cartography's emphasis on “experienced space, or place.”", B: "This centers Pearce and the diversity of cultures; it doesn't focus on describing Shanawdithit's own approach and significance.", C: "This wrongly pins the <i>Western</i> convention (“universal [and] homogenized”) on Shanawdithit — the opposite of her Indigenous approach.", D: "This only places her in a broad tradition (Hawaiian, Navajo examples); it doesn't describe <i>her</i> approach or its significance." } },
  ];

  // ---- Math, Module 1 (22 questions) ----
  const tbl = "border-collapse:collapse;margin:0 auto 14px;font-size:.95rem";
  const MATH_M1 = [
    { id: "v1-m1-1", domain: "Algebra", skill: "Linear equations in one variable", difficulty: "easy", type: "grid",
      prompt: "If 6 + x = 70, what is the value of 48 + 8x?", answer: ["560"],
      explanation: "From 6 + x = 70, x = 64. Then 48 + 8(64) = 48 + 512 = <b>560</b>." },

    { id: "v1-m1-2", domain: "Problem-Solving and Data Analysis", skill: "Probability", difficulty: "easy", type: "mcq",
      prompt: "<table style=\"" + tbl + "\"><thead><tr><th style=\"" + cell + "\">Type of entree</th><th style=\"" + cell + "\">Number of people</th></tr></thead><tbody>" +
        "<tr><td style=\"" + cell + "\">Beef</td><td style=\"" + cell + "\">17</td></tr><tr><td style=\"" + cell + "\">Chicken</td><td style=\"" + cell + "\">20</td></tr>" +
        "<tr><td style=\"" + cell + "\">Fish</td><td style=\"" + cell + "\">6</td></tr><tr><td style=\"" + cell + "\">Vegetarian</td><td style=\"" + cell + "\">7</td></tr>" +
        "<tr><td style=\"" + cell + "\">Total</td><td style=\"" + cell + "\">50</td></tr></tbody></table>" +
        "<div>A total of 50 people attended a conference and were offered 4 types of entrees. The table shows the number of people who chose each type of entree. If one of these people is selected at random, what is the probability of selecting a person who chose a vegetarian entree?</div>",
      options: [{ id: "A", text: "7/100" }, { id: "B", text: "7/50" }, { id: "C", text: "1/4" }, { id: "D", text: "7/10" }],
      answer: "B", explanation: "7 of the 50 people chose vegetarian, so the probability is <b>7/50</b>." },

    { id: "v1-m1-3", domain: "Algebra", skill: "Linear equations in one variable", difficulty: "easy", type: "mcq",
      prompt: "The equation y = 30x + 100 gives the total cost y, in dollars, for a small business to produce x shirts. How many shirts can the business produce for a total cost of $550?",
      options: [{ id: "A", text: "-3" }, { id: "B", text: "15" }, { id: "C", text: "18" }, { id: "D", text: "21" }],
      answer: "B", explanation: "550 = 30x + 100 → 450 = 30x → x = <b>15</b>." },

    { id: "v1-m1-4", domain: "Geometry and Trigonometry", skill: "Lines, angles, and triangles", difficulty: "easy", type: "mcq",
      prompt: "Triangles XYZ and RST are congruent, where XY = 654 and YZ = 654. If RS = ST, what is the length of segment RS?",
      options: [{ id: "A", text: "327" }, { id: "B", text: "654" }, { id: "C", text: "1,308" }, { id: "D", text: "1,962" }],
      answer: "B", explanation: "Because XYZ ≅ RST, RS corresponds to XY, so RS = XY = <b>654</b>." },

    { id: "v1-m1-5", domain: "Problem-Solving and Data Analysis", skill: "Ratios, rates, and proportions", difficulty: "easy", type: "grid",
      prompt: "A length of 590 meters is equal to how many decimeters? (1 meter = 10 decimeters)", answer: ["5900"],
      explanation: "590 m × 10 dm/m = <b>5,900</b> decimeters." },

    { id: "v1-m1-6", domain: "Problem-Solving and Data Analysis", skill: "Ratios, rates, and proportions", difficulty: "medium", type: "grid",
      prompt: "An object traveled 0.20 meters for every 4.0 seconds it was in motion. If the object was in motion for 24 seconds, what is the total distance, in meters, the object traveled?", answer: ["1.2", "6/5"],
      explanation: "Rate = 0.20 m / 4.0 s = 0.05 m/s. Over 24 s: 0.05 × 24 = <b>1.2</b> meters." },

    { id: "v1-m1-7", domain: "Advanced Math", skill: "Nonlinear functions", difficulty: "easy", type: "mcq",
      prompt: "The function f is defined by f(x) = 6(4)<sup>x</sup>. What is the value of f(x) when x = 3?",
      options: [{ id: "A", text: "64" }, { id: "B", text: "81" }, { id: "C", text: "258" }, { id: "D", text: "384" }],
      answer: "D", explanation: "f(3) = 6(4)³ = 6 × 64 = <b>384</b>." },

    { id: "v1-m1-8", domain: "Advanced Math", skill: "Nonlinear functions", difficulty: "medium", type: "mcq",
      prompt: "The number of cells of the bacteria <i>Bacillus megaterium</i> doubles every 25 minutes during its growth period when placed in a medium of sucrose-salts in a controlled laboratory environment. If a sample of 980 cells of <i>Bacillus megaterium</i> is placed in sucrose-salts in a controlled laboratory environment, which function f best represents the number of cells of the bacteria x minutes after the growth period begins, where x is less than the number of minutes in the growth period?",
      options: [{ id: "A", text: "f(x) = 980(1/2)<sup>x/25</sup>" }, { id: "B", text: "f(x) = 980(2)<sup>x/25</sup>" }, { id: "C", text: "f(x) = 980(1/3)<sup>x/25</sup>" }, { id: "D", text: "f(x) = 980(3)<sup>x/25</sup>" }],
      answer: "B", explanation: "Starting at 980 and doubling (×2) every 25 minutes gives f(x) = <b>980(2)<sup>x/25</sup></b>." },

    { id: "v1-m1-9", domain: "Algebra", skill: "Linear functions", difficulty: "medium", type: "grid",
      prompt: "A model predicts that a certain elephant calf weighed 208 pounds when it was born and that the calf gained 3 pounds per day in its first year of life. This model is defined by an equation in the form f(x) = a + bx, where f(x) is the predicted weight, in pounds, of the elephant calf x days after it was born, and a and b are constants. What is the value of a?", answer: ["208"],
      explanation: "At birth (x = 0), f(0) = a = the starting weight = <b>208</b> pounds." },

    { id: "v1-m1-10", domain: "Advanced Math", skill: "Equivalent expressions", difficulty: "easy", type: "grid",
      prompt: "The expression 13x³ + 19x³ − 17x³ is equivalent to bx³, where b is a constant. What is the value of b?", answer: ["15"],
      explanation: "13 + 19 − 17 = <b>15</b>, so b = 15." },

    { id: "v1-m1-11", domain: "Advanced Math", skill: "Nonlinear equations", difficulty: "medium", type: "mcq",
      prompt: "x² − 20x = 0<br>Which of the following is a solution to the given equation?",
      options: [{ id: "A", text: "40" }, { id: "B", text: "20" }, { id: "C", text: "10" }, { id: "D", text: "√20" }],
      answer: "B", explanation: "x² − 20x = x(x − 20) = 0, so x = 0 or x = <b>20</b>." },

    { id: "v1-m1-12", domain: "Geometry and Trigonometry", skill: "Right triangles and trigonometry", difficulty: "medium", type: "mcq",
      prompt: "<img src=\"assets/img/exams/v1-math-m1-q12.png\" alt=\"Right triangle ABC with the right angle at B; hypotenuse AC = 49 and leg AB = 26\" style=\"max-width:330px;width:100%;display:block;margin:0 auto 10px\" /><div class=\"tiny faint\" style=\"text-align:center;margin-bottom:10px\">Note: Figure not drawn to scale.</div><div>In the right triangle shown, what is the value of cos A?</div>",
      options: [{ id: "A", text: "1/49" }, { id: "B", text: "1/26" }, { id: "C", text: "26/49" }, { id: "D", text: "49/26" }],
      answer: "C", explanation: "cos A = (side adjacent to A)/(hypotenuse) = AB/AC = <b>26/49</b>." },

    { id: "v1-m1-13", domain: "Algebra", skill: "Linear functions", difficulty: "medium", type: "mcq",
      prompt: "<table style=\"" + tbl + "\"><thead><tr><th style=\"" + cell + "\">x</th><th style=\"" + cell + "\">t(x)</th></tr></thead><tbody>" +
        "<tr><td style=\"" + cell + "\">29</td><td style=\"" + cell + "\">15</td></tr><tr><td style=\"" + cell + "\">32</td><td style=\"" + cell + "\">33/2</td></tr><tr><td style=\"" + cell + "\">51</td><td style=\"" + cell + "\">26</td></tr></tbody></table>" +
        "<div>For the linear function t, the table shows three values of x and their corresponding values of t(x). Function v is defined by v(x) = t(x) − 4. What is the x-intercept of the graph of y = v(x) in the xy-plane?</div>",
      options: [{ id: "A", text: "(-1, 0)" }, { id: "B", text: "(3, 0)" }, { id: "C", text: "(7, 0)" }, { id: "D", text: "(8, 0)" }],
      answer: "C", explanation: "t has slope (16.5 − 15)/(32 − 29) = 0.5, so t(x) = 0.5x + 0.5. Then v(x) = 0.5x − 3.5; setting v(x) = 0 gives x = <b>7</b>." },

    { id: "v1-m1-14", domain: "Advanced Math", skill: "Nonlinear functions", difficulty: "medium", type: "mcq",
      prompt: "For the polynomial function f, the graph of y = f(x) in the xy-plane passes through the points (−5, 0), (3, 0), and (4, 0). Which of the following must be a factor of f(x)?",
      options: [{ id: "A", text: "x + 3" }, { id: "B", text: "x + 4" }, { id: "C", text: "x − 3" }, { id: "D", text: "x − 5" }],
      answer: "C", explanation: "An x-intercept at x = 3 means (x − 3) is a factor — choice <b>C</b>." },

    { id: "v1-m1-15", domain: "Algebra", skill: "Linear equations in two variables", difficulty: "medium", type: "mcq",
      prompt: "What is the x-intercept of a line in the xy-plane that has a slope of −4/7 and passes through the point (0, 12)?",
      options: [{ id: "A", text: "(-21, 0)" }, { id: "B", text: "(-4, 0)" }, { id: "C", text: "(7, 0)" }, { id: "D", text: "(21, 0)" }],
      answer: "D", explanation: "The line is y = −(4/7)x + 12. Set y = 0: (4/7)x = 12 → x = 21, so the x-intercept is <b>(21, 0)</b>." },

    { id: "v1-m1-16", domain: "Geometry and Trigonometry", skill: "Circles", difficulty: "easy", type: "grid",
      prompt: "A circle has a circumference of 10π centimeters. What is the diameter, in centimeters, of the circle?", answer: ["10"],
      explanation: "C = πd, so 10π = πd → d = <b>10</b> centimeters." },

    { id: "v1-m1-17", domain: "Algebra", skill: "Linear equations in two variables", difficulty: "medium", type: "mcq",
      prompt: "A neighborhood consists of a 3-hectare park and a 34-hectare residential area. The total number of trees in the neighborhood is 4,832. The equation 3x + 34y = 4,832 represents this situation. Which of the following is the best interpretation of x in this context?",
      options: [{ id: "A", text: "The average number of trees per hectare in the park" }, { id: "B", text: "The average number of trees per hectare in the residential area" }, { id: "C", text: "The total number of trees in the park" }, { id: "D", text: "The total number of trees in the residential area" }],
      answer: "A", explanation: "3x is the park's tree total (3 hectares × x), so x is the <b>average number of trees per hectare in the park</b>." },

    { id: "v1-m1-18", domain: "Geometry and Trigonometry", skill: "Circles", difficulty: "medium", type: "mcq",
      prompt: "In the xy-plane, an equation of circle A is (x − 5)² + (y − 7)² = 16. Circle B has the same center as circle A but has a radius that is twice the radius of circle A. Which equation represents circle B?",
      options: [{ id: "A", text: "(x − 5)² + (y − 7)² = 32" }, { id: "B", text: "(x − 5)² + (y − 7)² = 64" }, { id: "C", text: "(x − 5)² + (y − 7)² = 128" }, { id: "D", text: "(x − 5)² + (y − 7)² = 256" }],
      answer: "B", explanation: "Circle A has radius √16 = 4, so circle B has radius 8 and radius² = 64: <b>(x − 5)² + (y − 7)² = 64</b>." },

    { id: "v1-m1-19", domain: "Problem-Solving and Data Analysis", skill: "One-variable data", difficulty: "medium", type: "mcq",
      prompt: "<table style=\"" + tbl + "\"><thead><tr><th style=\"" + cell + "\">Number of employees</th><th style=\"" + cell + "\">Number of stores</th></tr></thead><tbody>" +
        "<tr><td style=\"" + cell + "\">1 to 6</td><td style=\"" + cell + "\">2</td></tr><tr><td style=\"" + cell + "\">7 to 12</td><td style=\"" + cell + "\">3</td></tr>" +
        "<tr><td style=\"" + cell + "\">13 to 18</td><td style=\"" + cell + "\">1</td></tr><tr><td style=\"" + cell + "\">19 to 24</td><td style=\"" + cell + "\">6</td></tr>" +
        "<tr><td style=\"" + cell + "\">25 to 30</td><td style=\"" + cell + "\">1</td></tr></tbody></table>" +
        "<div>The table shown summarizes the number of employees at each of the 13 stores in a shopping plaza. Which of the following could be the median number of employees for the stores in the shopping plaza?</div>",
      options: [{ id: "A", text: "1" }, { id: "B", text: "9" }, { id: "C", text: "15" }, { id: "D", text: "21" }],
      answer: "D", explanation: "With 13 stores, the median is the 7th value in order. Counting up (2, then 3, then 1, then 6…), the 7th store falls in the “19 to 24” group, so the median could be <b>21</b>." },

    { id: "v1-m1-20", domain: "Problem-Solving and Data Analysis", skill: "Percentages", difficulty: "hard", type: "grid",
      prompt: "For the positive quantities m, q, and r, m is 20% of m + q + r, q is 30% of q + r, and the value of r is 1,358. What is the value of m?", answer: ["485"],
      explanation: "q = 0.3(q + r) → 0.7q = 0.3(1,358) → q = 582. Then m = 0.2(m + q + r) → 0.8m = 0.2(582 + 1,358) = 388 → m = <b>485</b>." },

    { id: "v1-m1-21", domain: "Advanced Math", skill: "Nonlinear functions", difficulty: "hard", type: "mcq",
      prompt: "<img src=\"assets/img/exams/v1-math-m1-q21.png\" alt=\"Graph of y = f(x) + 2: a decreasing exponential curve that flattens toward y = 2 on the left and drops steeply on the right\" style=\"max-width:300px;width:100%;display:block;margin:0 auto 12px\" /><div>The graph of y = f(x) + 2 is shown, where f is defined by an equation of the form f(x) = a(b)<sup>x</sup> + c. If a, b, and c are integer constants and c ≤ 0, which equation could define f?</div>",
      options: [{ id: "A", text: "f(x) = −5(3)<sup>x</sup>" }, { id: "B", text: "f(x) = −5(3)<sup>x</sup> − 1" }, { id: "C", text: "f(x) = −5(3)<sup>x</sup> − 3" }, { id: "D", text: "f(x) = −5(3)<sup>x</sup> − 5" }],
      answer: "A", explanation: "y = f(x) + 2 has a horizontal asymptote at y = 2, so f(x) approaches 0, meaning c + 2 = 2 → c = 0. Thus f(x) = <b>−5(3)<sup>x</sup></b> (A)." },

    { id: "v1-m1-22", domain: "Algebra", skill: "Systems of two linear equations", difficulty: "hard", type: "mcq",
      prompt: "30x = 1,800y − 2,700<br>One of the two equations in a system of linear equations is given. The system has no solution. Which equation could be the second equation in this system?",
      options: [{ id: "A", text: "(1/30)x = 2y" }, { id: "B", text: "(1/30)x = 60y − 90" }, { id: "C", text: "x = 2y" }, { id: "D", text: "x = 60y − 90" }],
      answer: "A", explanation: "The given line simplifies to x = 60y − 90. No solution means a parallel line: same slope, different intercept. (1/30)x = 2y gives x = 60y (slope 60, intercept 0) — parallel to x = 60y − 90, so <b>A</b>. (D is the same line; B and C have different slopes.)" },
  ];

  // ---- Math, Module 2 (HARD, 22 questions). Answers verified against the PDF's answer key. ----
  const MATH_M2 = [
    { id: "v1-m2-1", domain: "Algebra", skill: "Linear equations in one variable", difficulty: "easy", type: "mcq",
      prompt: "A candle is made of 18 ounces of wax. When the candle is burning, the amount of wax in the candle decreases by 1 ounce every 4 hours. If 8 ounces of wax remain in this candle, for how many hours has it been burning?",
      options: [{ id: "A", text: "3" }, { id: "B", text: "7" }, { id: "C", text: "32" }, { id: "D", text: "40" }],
      answer: "D", explanation: "18 − 8 = 10 ounces have burned. At 1 ounce every 4 hours, that takes 10 × 4 = <b>40</b> hours." },

    { id: "v1-m2-2", domain: "Problem-Solving and Data Analysis", skill: "Two-variable data", difficulty: "medium", type: "mcq",
      prompt: "<img src=\"assets/img/exams/v1-math-m2-q2.png\" alt=\"Scatterplot of y vs x for data set A with a decreasing line of best fit\" style=\"max-width:320px;width:100%;display:block;margin:0 auto 12px\" /><div>The scatterplot shows the relationship between two variables, x and y, for data set A. A line of best fit for the data is also shown. Data set B is created by subtracting 8 units from the value of y for each data point from data set A. Which of the following is closest to the y-coordinate of the y-intercept of the line of best fit for data set B?</div>",
      options: [{ id: "A", text: "39.17" }, { id: "B", text: "48" }, { id: "C", text: "52.22" }, { id: "D", text: "72.33" }],
      answer: "A", explanation: "The line of best fit for set A has a y-intercept of about 47. Shifting every point down 8 units lowers the intercept by 8, to about 47 − 8 ≈ <b>39.17</b>." },

    { id: "v1-m2-3", domain: "Advanced Math", skill: "Nonlinear functions", difficulty: "medium", type: "mcq",
      prompt: "q(x) = 12(2)<sup>x</sup><br>Which table gives three values of x and their corresponding values of q(x) for function q?",
      options: [{ id: "A", text: "x = −1, 0, 1  →  q(x) = −24, 0, 24" }, { id: "B", text: "x = −1, 0, 1  →  q(x) = 1/6, 2, 24" }, { id: "C", text: "x = −1, 0, 1  →  q(x) = 1/6, 12, 24" }, { id: "D", text: "x = −1, 0, 1  →  q(x) = 6, 12, 24" }],
      answer: "D", explanation: "q(−1) = 12(1/2) = 6, q(0) = 12, q(1) = 24 — choice <b>D</b>." },

    { id: "v1-m2-4", domain: "Advanced Math", skill: "Nonlinear functions", difficulty: "medium", type: "grid",
      prompt: "For the exponential function g, the value of g(x) doubles for every increase of 2 in the value of x. If g(5) = 13, what is the value of g(7)?", answer: ["26"],
      explanation: "Increasing x by 2 doubles g, so g(7) = 2 × g(5) = 2 × 13 = <b>26</b>." },

    { id: "v1-m2-5", domain: "Geometry and Trigonometry", skill: "Right triangles and trigonometry", difficulty: "medium", type: "mcq",
      prompt: "The length of a rectangle's diagonal is √34, and the length of one of the rectangle's sides is 5. What is the perimeter of the rectangle?",
      options: [{ id: "A", text: "34" }, { id: "B", text: "16" }, { id: "C", text: "15" }, { id: "D", text: "8" }],
      answer: "B", explanation: "The other side = √(34 − 5²) = √9 = 3. Perimeter = 2(5 + 3) = <b>16</b>." },

    { id: "v1-m2-6", domain: "Algebra", skill: "Systems of two linear equations", difficulty: "medium", type: "mcq",
      prompt: "2x + 12y = 6<br>x + 8y = 1<br>The solution to the given system of equations is (x, y). What is the value of x + 4y?",
      options: [{ id: "A", text: "9" }, { id: "B", text: "7" }, { id: "C", text: "5" }, { id: "D", text: "1" }],
      answer: "C", explanation: "Solving gives x = 9 and y = −1, so x + 4y = 9 + 4(−1) = <b>5</b>." },

    { id: "v1-m2-7", domain: "Advanced Math", skill: "Equivalent expressions", difficulty: "medium", type: "mcq",
      prompt: "The expression 6x<sup>24</sup>/(18x<sup>7</sup>) is equivalent to (1/3)x<sup>b</sup>, where b is a constant and x &gt; 0. What is the value of b?",
      options: [{ id: "A", text: "7/24" }, { id: "B", text: "24/7" }, { id: "C", text: "17" }, { id: "D", text: "31" }],
      answer: "C", explanation: "6/18 = 1/3 and x²⁴ ÷ x⁷ = x²⁴⁻⁷ = x¹⁷, so b = <b>17</b>." },

    { id: "v1-m2-8", domain: "Advanced Math", skill: "Nonlinear functions", difficulty: "medium", type: "grid",
      prompt: "An object is kicked from a platform. The equation h = −4.9t² + 8t + 11 represents this situation, where h is the height of the object above the ground, in meters, t seconds after it is kicked. According to the equation, what is the height, in meters, from which the object was kicked?", answer: ["11"],
      explanation: "At the moment it is kicked, t = 0, so h = −4.9(0) + 8(0) + 11 = <b>11</b> meters." },

    { id: "v1-m2-9", domain: "Algebra", skill: "Linear equations in two variables", difficulty: "medium", type: "mcq",
      prompt: "<table style=\"" + tbl + "\"><thead><tr><th style=\"" + cell + "\">Number of cars</th><th style=\"" + cell + "\">Maximum number of passengers and crew</th></tr></thead><tbody>" +
        "<tr><td style=\"" + cell + "\">3</td><td style=\"" + cell + "\">139</td></tr><tr><td style=\"" + cell + "\">6</td><td style=\"" + cell + "\">271</td></tr><tr><td style=\"" + cell + "\">10</td><td style=\"" + cell + "\">447</td></tr></tbody></table>" +
        "<div>The table shows the linear relationship between the number of cars, c, on a commuter train and the maximum number of passengers and crew, p, that the train can carry. Which equation represents the linear relationship between c and p?</div>",
      options: [{ id: "A", text: "44c − p = −7" }, { id: "B", text: "44c − p = 7" }, { id: "C", text: "44p − c = −7" }, { id: "D", text: "44p − c = 7" }],
      answer: "A", explanation: "The slope is (271 − 139)/(6 − 3) = 44, and p = 44c + 7 (since 139 = 44·3 + 7). Rearranged: 44c − p = −7 — choice <b>A</b>." },

    { id: "v1-m2-10", domain: "Advanced Math", skill: "Nonlinear equations", difficulty: "medium", type: "mcq",
      prompt: "x(x + 3) − 1 = 0<br>What are the solutions to the given equation?",
      options: [{ id: "A", text: "x = (−3 ± √13)/2" }, { id: "B", text: "x = (−3 ± √5)/2" }, { id: "C", text: "x = (3 ± √13)/2" }, { id: "D", text: "x = (3 ± √5)/2" }],
      answer: "A", explanation: "x² + 3x − 1 = 0. By the quadratic formula, x = (−3 ± √(9 + 4))/2 = <b>(−3 ± √13)/2</b>." },

    { id: "v1-m2-11", domain: "Algebra", skill: "Linear inequalities in two variables", difficulty: "medium", type: "mcq",
      prompt: "y ≤ x + 14<br>y ≥ −3x − 14<br>Which point (x, y) is a solution to the given system of inequalities in the xy-plane?",
      options: [{ id: "A", text: "(0, −15)" }, { id: "B", text: "(0, 15)" }, { id: "C", text: "(−8, 0)" }, { id: "D", text: "(8, 0)" }],
      answer: "D", explanation: "Testing (8, 0): 0 ≤ 8 + 14 = 22 ✓ and 0 ≥ −3(8) − 14 = −38 ✓. Only <b>(8, 0)</b> satisfies both." },

    { id: "v1-m2-12", domain: "Algebra", skill: "Linear equations in one variable", difficulty: "hard", type: "mcq",
      prompt: "35x + 3 = k(7x + 3) + 7x<br>In the given equation, k is a constant. The equation has exactly one solution. Which value CANNOT be the value of k?",
      options: [{ id: "A", text: "5" }, { id: "B", text: "4" }, { id: "C", text: "0" }, { id: "D", text: "−4" }],
      answer: "B", explanation: "The right side is (7k + 7)x + 3k. A unique solution needs 35 ≠ 7k + 7, i.e., k ≠ 4. If k = 4 the x-terms match and there is no single solution, so k <b>cannot</b> be 4." },

    { id: "v1-m2-13", domain: "Algebra", skill: "Linear functions", difficulty: "hard", type: "mcq",
      prompt: "<table style=\"" + tbl + "\"><thead><tr><th style=\"" + cell + "\">x</th><th style=\"" + cell + "\">y</th></tr></thead><tbody>" +
        "<tr><td style=\"" + cell + "\">−12</td><td style=\"" + cell + "\">46</td></tr><tr><td style=\"" + cell + "\">a</td><td style=\"" + cell + "\">16</td></tr><tr><td style=\"" + cell + "\">2</td><td style=\"" + cell + "\">b</td></tr></tbody></table>" +
        "<div>The table shows three values of x and their corresponding values of y, where a and b are constants. There is a linear relationship between x and y. In the xy-plane, the y-intercept of the line representing this relationship is (0, −14). What is the value of a + b?</div>",
      options: [{ id: "A", text: "−30" }, { id: "B", text: "−29" }, { id: "C", text: "−20" }, { id: "D", text: "−19" }],
      answer: "A", explanation: "With y-intercept −14 and the point (−12, 46): 46 = −12m − 14 → m = −5, so y = −5x − 14. Then 16 = −5a − 14 → a = −6, and b = −5(2) − 14 = −24. So a + b = <b>−30</b>." },

    { id: "v1-m2-14", domain: "Algebra", skill: "Linear equations in two variables", difficulty: "hard", type: "grid",
      prompt: "Line s is perpendicular to line t in the xy-plane. Line s passes through the points (6, 7/8) and (−3, −17/8). Line t passes through the points (−8, 39) and (k, 78). What is the value of k?", answer: ["-21"],
      explanation: "Slope of s = (7/8 − (−17/8))/(6 − (−3)) = 3/9 = 1/3, so slope of t = −3. Then 39/(k + 8) = −3 → k + 8 = −13 → k = <b>−21</b>." },

    { id: "v1-m2-15", domain: "Advanced Math", skill: "Equivalent expressions", difficulty: "hard", type: "mcq",
      prompt: "y = 2x² − 24x + 54<br>The given equation represents a parabola in the xy-plane. Which of the following equations that represent the same parabola displays the x-intercepts as constants or coefficients?",
      options: [{ id: "A", text: "y = 2(x² − 12x) + 54" }, { id: "B", text: "y = 2x(x − 12) + 54" }, { id: "C", text: "y = 2(x − 6)² − 18" }, { id: "D", text: "y = 2(x − 9)(x − 3)" }],
      answer: "D", explanation: "Factoring: 2x² − 24x + 54 = 2(x − 3)(x − 9). The factored form <b>D</b> shows the x-intercepts x = 3 and x = 9 directly." },

    { id: "v1-m2-16", domain: "Geometry and Trigonometry", skill: "Lines, angles, and triangles", difficulty: "hard", type: "mcq",
      prompt: "<img src=\"assets/img/exams/v1-math-m2-q16.png\" alt=\"Parallel lines m and n cut by two transversals AE and CD meeting at point B; D and E on line m, A and C on line n\" style=\"max-width:340px;width:100%;display:block;margin:0 auto 6px\" /><div class=\"tiny faint\" style=\"text-align:center;margin-bottom:10px\">Note: Figure not drawn to scale.</div><div>In the figure, line m is parallel to line n, and lines AE and CD intersect at point B. Which additional piece of information is sufficient to prove that triangle ABC is congruent to triangle EBD?</div>",
      options: [{ id: "A", text: "AB = 12 and DB = 12" }, { id: "B", text: "AB = 12 and EB = 12" }, { id: "C", text: "Triangles ABC and EBD are isosceles." }, { id: "D", text: "No additional information is necessary to determine that the two triangles are congruent." }],
      answer: "B", explanation: "Because m ∥ n, ∠BAC = ∠BED (alternate interior angles) and ∠ABC = ∠EBD (vertical angles), so the triangles are similar (AA). Adding AB = EB (the corresponding sides) makes them congruent by ASA — choice <b>B</b>." },

    { id: "v1-m2-17", domain: "Advanced Math", skill: "Nonlinear functions", difficulty: "hard", type: "mcq",
      prompt: "f(x) = 12(7)<sup>x</sup><br>The function f is defined by the given equation. If g(x) = f(x + 2), which of the following equations defines the function g?",
      options: [{ id: "A", text: "g(x) = 24(7)<sup>x</sup>" }, { id: "B", text: "g(x) = 588(7)<sup>x</sup>" }, { id: "C", text: "g(x) = 24(14)<sup>x</sup>" }, { id: "D", text: "g(x) = 144(49)<sup>x</sup>" }],
      answer: "B", explanation: "g(x) = f(x + 2) = 12(7)<sup>x+2</sup> = 12 · 7² · 7<sup>x</sup> = 12 · 49 · 7<sup>x</sup> = <b>588(7)<sup>x</sup></b>." },

    { id: "v1-m2-18", domain: "Problem-Solving and Data Analysis", skill: "Percentages", difficulty: "hard", type: "mcq",
      prompt: "The value of a painting increased by 179% from the end of 2017 to the end of 2018 and then decreased by 23% from the end of 2018 to the end of 2019. What was the net percentage increase in the value of the painting from the end of 2017 to the end of 2019?",
      options: [{ id: "A", text: "114.83%" }, { id: "B", text: "137.83%" }, { id: "C", text: "156.00%" }, { id: "D", text: "243.17%" }],
      answer: "A", explanation: "Multiply the factors: 2.79 × 0.77 = 2.1483, a net increase of 2.1483 − 1 = 1.1483 = <b>114.83%</b>." },

    { id: "v1-m2-19", domain: "Advanced Math", skill: "Nonlinear equations", difficulty: "hard", type: "grid",
      prompt: "(2/7)(2x + 7)(x + √(2k+7))(x − √(2k+7)) = 0<br>In the given equation, k is a positive constant. The product of the solutions to the equation is 63. What is the value of k?", answer: ["5.5", "11/2"],
      explanation: "The solutions are −7/2 and ±√(2k+7), so their product is (−7/2)·(−(2k+7)) = (7/2)(2k+7). Setting (7/2)(2k+7) = 63 gives 2k+7 = 18 → k = <b>5.5</b>." },

    { id: "v1-m2-20", domain: "Advanced Math", skill: "Nonlinear equations", difficulty: "hard", type: "mcq",
      prompt: "4x² − px + w = −87<br>In the given equation, p and w are integer constants. The equation has exactly one real solution. Which is NOT a possible value of w?",
      options: [{ id: "A", text: "−23" }, { id: "B", text: "13" }, { id: "C", text: "81" }, { id: "D", text: "313" }],
      answer: "C", explanation: "Writing 4x² − px + (w + 87) = 0, one real solution means the discriminant is 0: p² = 16(w + 87), which must be a perfect square. w = 81 gives 16(168) = 2,688, which is not a perfect square, so <b>81</b> is impossible (the others give 1024, 1600, 6400)." },

    { id: "v1-m2-21", domain: "Geometry and Trigonometry", skill: "Area and volume", difficulty: "hard", type: "grid",
      prompt: "<table style=\"" + tbl + "\"><thead><tr><th style=\"" + cell + "\"></th><th style=\"" + cell + "\">Area (square inches)</th></tr></thead><tbody>" +
        "<tr><td style=\"" + cell + "\">Trapezoid ABCD</td><td style=\"" + cell + "\">440</td></tr><tr><td style=\"" + cell + "\">Trapezoid EFGH</td><td style=\"" + cell + "\">11,000</td></tr></tbody></table>" +
        "<div>Trapezoid ABCD is similar to trapezoid EFGH, where A, B, C, and D correspond to E, F, G, and H, respectively. The length of side AB is 55 inches. What is the length, in inches, of side EF?</div>", answer: ["275"],
      explanation: "The area ratio is 11,000/440 = 25, so the side-length ratio is √25 = 5. Thus EF = 5 × 55 = <b>275</b> inches." },

    { id: "v1-m2-22", domain: "Geometry and Trigonometry", skill: "Right triangles and trigonometry", difficulty: "hard", type: "mcq",
      prompt: "In triangle JKL, the measure of angle J is (90b)°, the measure of angle K is (69a)°, and the measure of angle L is (21a)°, where a and b are constants. Which of the following must be true?",
      options: [{ id: "A", text: "cos L &gt; sin K" }, { id: "B", text: "cos L = sin K" }, { id: "C", text: "cos L &lt; sin K" }, { id: "D", text: "There is not enough information to compare the values of cos L and sin K." }],
      answer: "D", explanation: "The angle sum gives 90b + 69a + 21a = 180, i.e., a + b = 2, but a itself is not fixed. Whether cos L is greater than, equal to, or less than sin K depends on the value of a, so there is <b>not enough information</b> (D)." },
  ];

  Apex.bank.register({
    id: "dsat-2026-03-int-v1",
    title: "March 2026",
    type: "digital",
    region: "International",
    version: "A",
    year: 2026,
    monthNum: 3,
    tagline: "International · Version A",
    description: "Digital SAT — March 2026 international form, Version A (R&W Module 2 Hard, Math Module 2 Hard).",
    adaptive: false,
    sections: [
      { id: "rw", modules: [
        { id: "v1-rw-m1", stage: 1, name: "Reading and Writing — Module 1", minutes: 32, questions: RW_M1 },
        { id: "v1-rw-m2", stage: 2, variant: "hard", name: "Reading and Writing — Module 2 (Hard)", minutes: 32, questions: RW_M2 },
      ] },
      { id: "math", modules: [
        { id: "v1-math-m1", stage: 1, name: "Math — Module 1", minutes: 35, calculator: true, questions: MATH_M1 },
        { id: "v1-math-m2", stage: 2, variant: "hard", name: "Math — Module 2 (Hard)", minutes: 35, calculator: true, questions: MATH_M2 },
      ] },
    ],
  });
})();
