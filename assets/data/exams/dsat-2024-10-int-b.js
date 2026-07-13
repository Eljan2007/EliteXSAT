/* ==========================================================================
   Digital SAT — October 2024 (International), Version B.
   Rebuilt in EliteXSAT's native UI from teacher-authored SAT-style prediction
   forms (2027 Prediction October International). RW sorted into canonical Digital
   SAT domain order; Math ordered easy -> hard. Answers solved independently and
   cross-checked against each form's compiled answer key; conflicted / cross-filled
   items are noted in the build log (not shown to students). No explanations. */
(function () {
  const RW_M1 = [
    { id: `oib-rw-m1-1`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `easy`, type: `mcq`,
      passage: `<p>The following text is adapted from Mary Seacole's 1857 autobiography <i>Wonderful Adventures of Mrs. Seacole in Many Lands</i>.</p><p>That journey across the Isthmus [of Panama], insignificant in distance as it was, was by no means an easy one. It seemed as if nature had determined to throw every <u>conceivable</u> obstacle in the way of those who should seek to join the two great oceans of the world.</p>`,
      prompt: `As used in the text, what does the word “conceivable” most nearly mean?`,
      options: [{ id: `A`, text: `Imaginable` }, { id: `B`, text: `Obvious` }, { id: `C`, text: `Reasonable` }, { id: `D`, text: `Dependable` }],
      answer: `A` },

    { id: `oib-rw-m1-2`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Whether the reign of a French monarch such as Louis XII or Louis IV was historically consequential or relatively uneventful, its trajectory was shaped by questions of legitimacy and therefore cannot be understood without a corollary understanding of the factors that allowed the monarch to ______ his right to hold the throne successfully.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `assert` }, { id: `B`, text: `annotate` }, { id: `C`, text: `reciprocate` }, { id: `D`, text: `disengage` }],
      answer: `A` },

    { id: `oib-rw-m1-3`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Often, the Nobel Prize in Chemistry is given to a single person, such as Theodore William Richards in 1914. But sometimes the Nobel Committee wants to reward work attributed to two or three individuals, in which case, the award is given ______. For instance, in 2020, Jennifer Doudna was among those awarded for “the development of a method for genome editing.”</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `retroactively` }, { id: `B`, text: `jointly` }, { id: `C`, text: `ceremoniously` }, { id: `D`, text: `reluctantly` }],
      answer: `B` },

    { id: `oib-rw-m1-4`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The following text is adapted from the 1895 poem “Ojistoh” by Emily Pauline Johnson, a Kanien'kehá:ka (Mohawk) writer also known as Tekahionwake.</p><p>I am Ojistoh, I am she, the wife<br>Of him whose name <u>breathes</u> bravery and life<br>And courage to the tribe who calls him chief.<br>I am Ojistoh, his white star, and he<br>Is land, and lake, and sky—and soul to me.</p>`,
      prompt: `As used in the text, what does the word “breathes” most nearly mean?`,
      options: [{ id: `A`, text: `Imparts` }, { id: `B`, text: `Renounces` }, { id: `C`, text: `Assents` }, { id: `D`, text: `Absorbs` }],
      answer: `A` },

    { id: `oib-rw-m1-5`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The swordfish can swim very fast—up to 97 kilometers per hour (km/hr)—but it is significantly slower than the golden eagle, which can fly at speeds up to 320 km/hr. The difference between these speeds is largely ______ of the fact that the features that make flight possible do less to limit top speeds than the features suitable for swimming through water.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `a consequence` }, { id: `B`, text: `an objective` }, { id: `C`, text: `a repudiation` }, { id: `D`, text: `an explanation` }],
      answer: `A` },

    { id: `oib-rw-m1-6`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Though John Crowley, author of <i>Engine Summer</i>, is perhaps not as well known as the most commercially successful American writers of the past fifty years, influential figures have championed his work, including the poet James Merrill and the literary critic Harold Bloom. In his afterword to Crowley's book <i>Little, Big</i>, Bloom praises the novel's adroit blend of what playwright Friedrich Schiller termed the naive and sentimental modes—while Schiller thought works could be classified as either naive (seeking to describe reality) or sentimental (seeking to develop ideas), <i>Little, Big</i> demonstrates that a work can be both.</p>`,
      prompt: `Which choice best states the main purpose of the text?`,
      options: [{ id: `A`, text: `To argue that all writing must be classified as belonging to one of two categories` }, { id: `B`, text: `To compare the work of a writer with the work of a poet who admired him` }, { id: `C`, text: `To explain what inspired an author to write a particular work` }, { id: `D`, text: `To present a reason why a literary critic is impressed by a certain novel` }],
      answer: `D` },

    { id: `oib-rw-m1-7`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Community science, which involves professional scientists collaborating with amateur science enthusiasts to study a topic, is often an effective and engaging way to conduct research. It can allow people to assist with conservation efforts, spark youth interest in science, and increase the amount of data researchers can collect. This approach was essential to the success of a study by biologist Abbigail Merrill and colleagues of how butterfly color relates to flower choice, which included findings from hundreds of students and community members in northwestern Arkansas.</p>`,
      prompt: `Which choice best describes the overall structure of the text?`,
      options: [{ id: `A`, text: `It introduces the topic of a scientific study, describes the study's importance, and then presents the study's results.` }, { id: `B`, text: `It argues for a new approach to scientific research, comments on the public's opinion about the approach, and then describes how that approach was applied in a certain study.` }, { id: `C`, text: `It identifies a particular approach to research, lists some benefits of that approach, and then mentions a study in which that approach was used.` }, { id: `D`, text: `It describes the development of a type of scientific collaboration, shows how that type of collaboration has been used in a particular field of study, and then suggests future collaborative projects.` }],
      answer: `C` },

    { id: `oib-rw-m1-8`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The following text is adapted from Jerome K. Jerome's 1889 novel <i>Three Men in a Boat (To Say Nothing of the Dog)</i>.</p><p>We [people] are creatures of the sun. We love light and life. That is why we crowd into the towns and cities, and the country grows more and more deserted every year. In the sunlight—in the daytime, when Nature is alive and busy all around us, we like the open hill-sides and the deep woods well enough: but in the night, when our Mother Earth has gone to sleep, and left us waking, oh! the world seems so lonesome, and we get frightened, like children in a silent house. Then we sit and sob, and long for the gas-lit streets, and the sound of human voices, and the answering throb of human life.</p>`,
      prompt: `Which choice best states the main purpose of the text?`,
      options: [{ id: `A`, text: `To convey that crowded areas can cause people to experience feelings of sadness` }, { id: `B`, text: `To caution people not to be so quick to dismiss the natural beauty that can be found in rural areas` }, { id: `C`, text: `To illustrate the idea that most people tend to prefer hillsides in the country to certain aspects of towns and cities` }, { id: `D`, text: `To address common traits that motivate many people to choose to live in urban environments` }],
      answer: `D` },

    { id: `oib-rw-m1-9`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `medium`, type: `mcq`,
      passage: `<p>“Tomato” is an example of a loanword—that is, a word that originated in one language and was later adopted by another. The word came to English indirectly from <i>tomate</i>, the Spanish word for the widely cultivated plant. Spanish had borrowed it from Nahuatl, an Indigenous language of Central Mexico, in which the word's original form is <i>tomatl</i>. “Maize” is also Indigenous in origin and entered English through Spanish. But in this case, the original source was Taíno, a language of the Caribbean islands, in which the word for the corn plant is <i>mahis</i>.</p>`,
      prompt: `The author makes which point about the Spanish language?`,
      options: [{ id: `A`, text: `It has borrowed words from Indigenous languages and contributed words to them.` }, { id: `B`, text: `Its contribution to English vocabulary roughly equals the collective contribution by Indigenous languages.` }, { id: `C`, text: `It has served as a medium through which Indigenous languages have influenced English.` }, { id: `D`, text: `It adopted Nahuatl and Taíno words in approximately equal numbers.` }],
      answer: `C` },

    { id: `oib-rw-m1-10`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `hard`, type: `mcq`,
      passage: `<p>In a study by Mika R. Moran, Daniel A. Rodriguez, and colleagues, residents of Panama City, Panama, and Fortaleza, Brazil, were surveyed about parks in their cities. Of the 318 respondents from Panama City, 53.5% indicated that they use the city's parks, and of the 938 respondents from Fortaleza, 35.7% indicated using city parks. Given that the percentage of Panama City respondents who reported having access to other desired amenities near parks was much lower than that reported by Fortaleza respondents, the difference in park use can't be explained by Panama City residents having more access to desired nonpark amenities near parks.</p>`,
      prompt: `Which choice best describes the main idea of the text?`,
      options: [{ id: `A`, text: `Even though the study found that parks in Fortaleza are more likely to be close to other amenities than parks in Panama City are, Panama City has more amenities overall than Fortaleza does.` }, { id: `B`, text: `The study's findings suggest that an increase in the number of amenities near city parks would likely increase park use in Panama City but not in Fortaleza.` }, { id: `C`, text: `The study's finding that a greater proportion of residents use parks in Panama City than in Fortaleza is partly due to the greater prevalence of parks in Panama City.` }, { id: `D`, text: `Although the study found that a greater proportion of residents use parks in Panama City than in Fortaleza, that difference isn't due to greater access to amenities near parks in Panama City.` }],
      answer: `D` },

    { id: `oib-rw-m1-11`, domain: `Information and Ideas`, skill: `Command of Evidence (Quantitative)`, difficulty: `hard`, type: `mcq`,
      passage: `<div style="text-align:center;font-weight:600;font-size:12px;margin:2px 0">Defensive Behavior and Reproductive Traits of Select Bird Species</div><table style="border-collapse:collapse;margin:6px auto"><tr><th style="border:1px solid var(--border);padding:3px 12px">Scientific name</th><th style="border:1px solid var(--border);padding:3px 12px">Common name</th><th style="border:1px solid var(--border);padding:3px 12px">Performs broken-wing display?</th><th style="border:1px solid var(--border);padding:3px 12px">Length of incubation (days)</th><th style="border:1px solid var(--border);padding:3px 12px">Incubation duty</th><th style="border:1px solid var(--border);padding:3px 12px">Maximum number of broods per year</th></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center"><i>Bucephala islandica</i></td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Barrow's goldeneye</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">No</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">34</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">1 parent</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">1</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center"><i>Numenius arquata</i></td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Eurasian curlew</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">No</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">30</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">2 parents</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">1</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center"><i>Eremophila alpestris</i></td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">horned lark</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Yes</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">12</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">1 parent</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">3</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center"><i>Zenaida asiatica</i></td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">white-winged dove</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Yes</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">14</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">2 parents</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">2</td></tr></table><p>In an extensive review of existing literature, Léna de Framond and team cataloged the prevalence of broken-wing display—a defensive behavior observed in <i>Haematopus longirostris</i> (pied oystercatcher) and many other species—throughout the Aves class. Documentation of the display in 285 species across 52 families suggests the behavior likely evolved independently multiple times, prompting the team to consider ecological and life-history characteristics with hypothesized associations to the behavior's emergence, including traits related to reproduction investment and future reproduction potential. Based on their review of those traits, the team concluded that ______</p>`,
      prompt: `Which choice most effectively uses data from the table to complete the conclusion?`,
      options: [{ id: `A`, text: `capacity for multiple broods, number of parental incubators, and incubation duration are equally associated with the use of broken-wing display.` }, { id: `B`, text: `incubation duration and capacity for multiple broods are more strongly associated with the use of broken-wing display than the number of parental incubators is.` }, { id: `C`, text: `broken-wing display is most often observed in species with less opportunity to reproduce in a year due to longer incubation periods.` }, { id: `D`, text: `among species with more than one parental incubator, the use of broken-wing display is associated with greater incubation duration.` }],
      answer: `B` },

    { id: `oib-rw-m1-12`, domain: `Information and Ideas`, skill: `Command of Evidence (Textual)`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Water flowing around an obstruction creates vortices (patterns of swirls) of varying size; by detecting the vortices, fish can determine the size and position of the obstruction. Testing by Yuzo R. Yanagisuru, Otar Akanyeti, and James C. Liao using models of three head shapes—narrow (low ratio of width to length), intermediate, and wide (high ratio of width to length)—showed that for medium-sized vortices, fish with wide heads would be least able to distinguish between vortices and general turbulence in the water. A second research team has therefore hypothesized that in low-visibility conditions, wider-headed fish will be less likely than narrower-headed fish to detect obstructions.</p>`,
      prompt: `Which finding, if true, would most directly support the second research team's hypothesis?`,
      options: [{ id: `A`, text: `A study using obstructions that created medium-sized vortices in low-visibility conditions found that some specimens of dusky smooth-hound (<i>Mustelus canis</i>), which has a relatively narrow head, bumped into the obstructions more often than other specimens of the same fish did.` }, { id: `B`, text: `A study using obstructions that created medium-sized vortices in low-visibility conditions found that the wider-headed bristlemouth (<i>Chaetostoma yurubiense</i>) bumped into obstructions more often than the narrower-headed dusky smooth-hound (<i>Mustelus canis</i>) did.` }, { id: `C`, text: `A study using obstructions that created medium-sized vortices in low-visibility conditions found that the narrower-headed dusky smooth-hound (<i>Mustelus canis</i>) bumped into the obstructions just as often as the wider-headed bristlemouth (<i>Chaetostoma yurubiense</i>) did.` }, { id: `D`, text: `A study using obstructions that created medium-sized vortices in low-visibility conditions found that the bristlemouth (<i>Chaetostoma yurubiense</i>), which has a relatively wide head, bumped into more than half of the obstructions.` }],
      answer: `B` },

    { id: `oib-rw-m1-13`, domain: `Information and Ideas`, skill: `Command of Evidence (Textual)`, difficulty: `medium`, type: `mcq`,
      passage: `<p><i>Cane</i> is a 1923 novel by Jean Toomer. In one portion of the novel, Toomer establishes a contrast between the narrator's attitude toward life and the attitude of the narrator's love interest, Avey, writing, ______</p>`,
      prompt: `Which quotation from <i>Cane</i> most effectively illustrates the claim?`,
      options: [{ id: `A`, text: `“Avey was as silent as those great trees whose tops we looked down upon. She has always been like that. At least, to me.”` }, { id: `B`, text: `“A band in one of the buildings a fair distance off was playing a march. I wished they would stop. Their playing was like a tin spoon in one's mouth.”` }, { id: `C`, text: `“[Avey would] smile appreciation, but it was an impersonal smile, never for me.”` }, { id: `D`, text: `“As time went on, [Avey's] indifference to things began to pique me; I was ambitious. I left [our small hometown] earlier than she did.”` }],
      answer: `D` },

    { id: `oib-rw-m1-14`, domain: `Information and Ideas`, skill: `Command of Evidence (Quantitative)`, difficulty: `medium`, type: `mcq`,
      passage: `<div style="text-align:center;font-weight:600;font-size:12px;margin:2px 0">Percentage of Nonhexagonal Cells in Hives of Three Honeybee Species</div><svg viewBox="0 0 340 250" role="img" aria-label="bar chart" style="max-width:360px;width:100%;display:block;margin:6px auto"><line x1="40.0" y1="204.0" x2="310.0" y2="204.0" stroke="currentColor" stroke-width="1.3"/><line x1="40.0" y1="204.0" x2="310.0" y2="204.0" stroke="currentColor" stroke-width="0.5" opacity="0.16"/><text x="36.0" y="207.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">0</text><line x1="40.0" y1="175.0" x2="310.0" y2="175.0" stroke="currentColor" stroke-width="0.5" opacity="0.16"/><text x="36.0" y="178.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">0.5</text><line x1="40.0" y1="146.0" x2="310.0" y2="146.0" stroke="currentColor" stroke-width="0.5" opacity="0.16"/><text x="36.0" y="149.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">1</text><line x1="40.0" y1="117.0" x2="310.0" y2="117.0" stroke="currentColor" stroke-width="0.5" opacity="0.16"/><text x="36.0" y="120.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">1.5</text><line x1="40.0" y1="88.0" x2="310.0" y2="88.0" stroke="currentColor" stroke-width="0.5" opacity="0.16"/><text x="36.0" y="91.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">2</text><line x1="40.0" y1="59.0" x2="310.0" y2="59.0" stroke="currentColor" stroke-width="0.5" opacity="0.16"/><text x="36.0" y="62.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">2.5</text><line x1="40.0" y1="30.0" x2="310.0" y2="30.0" stroke="currentColor" stroke-width="0.5" opacity="0.16"/><text x="36.0" y="33.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">3</text><rect x="49.0" y="59.0" width="22.1" height="145.0" fill="#4C8BF5" opacity="0.9"/><rect x="73.0" y="64.8" width="22.1" height="139.2" fill="#E8833A" opacity="0.9"/><rect x="97.0" y="202.8" width="22.1" height="1.2" fill="#3FA45B" opacity="0.9"/><text x="85.0" y="220.0" font-size="9.5" fill="currentColor" text-anchor="middle">black dwarf honeybee</text><rect x="139.0" y="53.2" width="22.1" height="150.8" fill="#4C8BF5" opacity="0.9"/><rect x="163.0" y="82.2" width="22.1" height="121.8" fill="#E8833A" opacity="0.9"/><rect x="187.0" y="192.4" width="22.1" height="11.6" fill="#3FA45B" opacity="0.9"/><text x="175.0" y="220.0" font-size="9.5" fill="currentColor" text-anchor="middle">dwarf honeybee</text><rect x="229.0" y="177.9" width="22.1" height="26.1" fill="#4C8BF5" opacity="0.9"/><rect x="253.0" y="183.7" width="22.1" height="20.3" fill="#E8833A" opacity="0.9"/><rect x="277.0" y="201.1" width="22.1" height="2.9" fill="#3FA45B" opacity="0.9"/><text x="265.0" y="220.0" font-size="9.5" fill="currentColor" text-anchor="middle">western honeybee</text><rect x="40.0" y="228.0" width="9" height="9" fill="#4C8BF5"/><text x="52.0" y="236.0" font-size="9" fill="currentColor">5-sided cells</text><rect x="123.2" y="228.0" width="9" height="9" fill="#E8833A"/><text x="135.2" y="236.0" font-size="9" fill="currentColor">7-sided cells</text><rect x="206.4" y="228.0" width="9" height="9" fill="#3FA45B"/><text x="218.4" y="236.0" font-size="9" fill="currentColor">8-sided cells</text></svg><p>Honeybee hives consist mainly of hexagonal (six-sided) units called cells, in which queens lay eggs. Hexagonal cells for eggs that develop into nonreproductive workers are smaller than those for eggs that develop into reproductive drones, though the size difference varies by species. Difference in cell size results in a construction problem—it's hard to neatly connect sections of small cells to sections of large cells—that worsens as the difference increases. To fill in gaps between the sections when building a hive, bees rely on cells that have more or fewer than six sides. A student studying beehive structure consults data on three species, concluding that ______</p>`,
      prompt: `Which choice most effectively uses data from the graph to complete the student's conclusion?`,
      options: [{ id: `A`, text: `cells for worker eggs are probably closer in size to cells for drone eggs in the hives of the western honeybee than in the hives of the dwarf honeybee and the black dwarf honeybee.` }, { id: `B`, text: `both the western honeybee and the black dwarf honeybee probably reserve eight-sided cells for drone eggs, while the dwarf honeybee likely deposits drone eggs in seven-sided cells.` }, { id: `C`, text: `the western honeybee probably relies on many more geometrical shapes when constructing cells than either the dwarf honeybee or the black dwarf honeybee does.` }, { id: `D`, text: `the percentage of hexagonal cells is probably slightly lower in the hives of the western honeybee than in the hives of the dwarf honeybee and the black dwarf honeybee.` }],
      answer: `A` },

    { id: `oib-rw-m1-15`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Pigments give paints and dyes their color. Ocher is a mineral-based pigment used to make several colors, including red. Red ocher gets its color from iron oxide. Pigments can also be plant-based; plant-based pigments contain a high level of carbon. In a 2023 study, archaeologists tested the red pigment on decorated beads made by members of the Natufian culture approximately 15,000 years ago. The test showed that the pigment found on several beads contained no iron but had a high level of carbon. This finding led the researchers to conclude that ______</p>`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `the Natufian beadmakers used plant-based pigments rather than ocher to decorate some of the beads examined in the study.` }, { id: `B`, text: `the pigments used by the Natufian beadmakers likely came from plants because ocher was difficult to find.` }, { id: `C`, text: `the Natufian beadmakers preferred to use plant-based pigments because they are much brighter than mineral-based pigments are.` }, { id: `D`, text: `the Natufian beads examined in the study are the oldest surviving examples of the use of plant-based pigments for decorating beads.` }],
      answer: `A` },

    { id: `oib-rw-m1-16`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Works by Rafael Soriano and Rupert García were featured in the Smithsonian American Art Museum's exhibition <i>Our America: The Latino Presence in American Art</i>. This 2013 exhibition celebrated the diverse achievements ______ artists of Latin American descent.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `of;` }, { id: `B`, text: `of:` }, { id: `C`, text: `of,` }, { id: `D`, text: `of` }],
      answer: `D` },

    { id: `oib-rw-m1-17`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>On December 2, 1992, the space shuttle <i>Discovery</i> blasted off into space, commencing Mission ______ seven days and seven hours, the mission ended when the shuttle landed at Edwards Air Force Base in California.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `STS-53, lasting` }, { id: `B`, text: `STS-53, it lasted` }, { id: `C`, text: `STS-53 lasting` }, { id: `D`, text: `STS-53. Lasting` }],
      answer: `D` },

    { id: `oib-rw-m1-18`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `easy`, type: `mcq`,
      passage: `<p>Trade was vital to the Srivijaya Empire, which reigned in Southeast Asia from around 600 CE to 1200 CE. Its people ______ tin, medicines, and wood to sell to neighboring societies. In exchange, they received valuable items, such as spices, silk, and porcelain.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `are producing` }, { id: `B`, text: `produce` }, { id: `C`, text: `produced` }, { id: `D`, text: `will produce` }],
      answer: `C` },

    { id: `oib-rw-m1-19`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The Globe Theatre in London is a reconstruction of the famed venue where many of Shakespeare's plays were first performed. In 1613, a prop cannon ______ during a performance and ignited the Globe's thatched roof. No one was hurt, but in two hours the original Globe was gone.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `has malfunctioned` }, { id: `B`, text: `malfunctioned` }, { id: `C`, text: `will malfunction` }, { id: `D`, text: `malfunctions` }],
      answer: `B` },

    { id: `oib-rw-m1-20`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Many Farms Chapter, which covers 168,000 acres, is one of the 110 chapters of the Navajo ______ <i>Diné bizaad</i> (the Navajo language), the chapter is called <i>Dá'ák'eh Halání</i>.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `Nation, in` }, { id: `B`, text: `Nation. In` }, { id: `C`, text: `Nation and in` }, { id: `D`, text: `Nation in` }],
      answer: `B` },

    { id: `oib-rw-m1-21`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>As a leader of the National Woman Suffrage Association in the late 1800s, Ann Quinby of ______ an important role in the campaign to secure voting rights for US women.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `Kentucky. Played` }, { id: `B`, text: `Kentucky: played` }, { id: `C`, text: `Kentucky; played` }, { id: `D`, text: `Kentucky played` }],
      answer: `D` },

    { id: `oib-rw-m1-22`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Famous for its four-degree tilt, the leaning Garisenda Tower is a popular attraction in Bologna's city center. However, measurements taken in 2023 showed that the tower was rotating in a concerning way. ______ city officials closed the area around the tower so experts could explore solutions to stabilize the historical twelfth-century structure.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `In comparison,` }, { id: `B`, text: `As a result,` }, { id: `C`, text: `For example,` }, { id: `D`, text: `Similarly,` }],
      answer: `B` },

    { id: `oib-rw-m1-23`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>When languages are no longer spoken, they are considered extinct. ______ the Umbrian language went extinct around the first century BCE, though it was once widely spoken in parts of central Italy.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `Therefore,` }, { id: `B`, text: `Admittedly,` }, { id: `C`, text: `For example,` }, { id: `D`, text: `In conclusion,` }],
      answer: `C` },

    { id: `oib-rw-m1-24`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Scientists studying asteroid deflection have focused on secondary objects such as S/2018 (2018 EB), a moonlet orbiting the near-Earth asteroid 2018 EB. In 2022 NASA intentionally crashed a probe into just such an object, the moonlet Dimorphos. ______ Dimorphos's orbital period around the near-Earth asteroid Didymos was permanently altered.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `In addition,` }, { id: `B`, text: `Specifically,` }, { id: `C`, text: `Consequently,` }, { id: `D`, text: `In comparison,` }],
      answer: `C` },

    { id: `oib-rw-m1-25`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `easy`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>Dinosaur fossil specimens can be found at science museums all over the world.</li><li>Many dinosaur fossil specimens are given nicknames.</li><li>The Great Plains Dinosaur Museum and Field Station in Malta, Montana, houses a dinosaur fossil specimen nicknamed Roberta.</li><li>Roberta lived in the Late Cretaceous period, which ended more than 65 million years ago.</li><li>It is a member of the genus <i>Brachylophosaurus</i>.</li></ul>`,
      prompt: `The student wants to provide an example of a dinosaur fossil specimen's nickname. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `Nicknames are given to many dinosaur fossil specimens, including one housed at a museum in Malta, Montana.` }, { id: `B`, text: `Dinosaur fossil specimens can be found at museums all over the world, and many of these specimens are given nicknames.` }, { id: `C`, text: `Roberta is the nickname of a <i>Brachylophosaurus</i> fossil specimen housed at the Great Plains Dinosaur Museum and Field Station in Malta, Montana.` }, { id: `D`, text: `A <i>Brachylophosaurus</i> fossil specimen from the Late Cretaceous period, which ended more than 65 million years ago, is housed at the Great Plains Dinosaur Museum and Field Station.` }],
      answer: `C` },

    { id: `oib-rw-m1-26`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>The A.M. Turing Award is a prestigious award given for “major contributions of lasting importance to computing.”</li><li>Manuel Blum won the award in 1995 for contributions to the foundations of computational complexity theory.</li><li>Raj Reddy won the award in 1994 for pioneering the development of large-scale artificial intelligence systems.</li></ul>`,
      prompt: `The student wants to emphasize the order in which Manuel Blum and Raj Reddy won the A.M. Turing Award. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `Manuel Blum and Raj Reddy both won the A.M. Turing Award, which is given for “major contributions of lasting importance to computing.”` }, { id: `B`, text: `Raj Reddy won the A.M. Turing Award in 1994; Manuel Blum won it later, in 1995.` }, { id: `C`, text: `In 1995, Manuel Blum won the A.M. Turing Award for contributions to the foundations of computational complexity theory.` }, { id: `D`, text: `It was in 1994 that Raj Reddy won the A.M. Turing Award.` }],
      answer: `B` },

    { id: `oib-rw-m1-27`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>Lighthouses send out crucial light signals to help ships and other watercraft navigate at night.</li><li>Before automation, lighthouses were run by lighthouse keepers.</li><li>Catherine A. Moore was the lighthouse keeper at Black Rock Harbor Light in Connecticut.</li><li>She held this position from 1817 to 1878.</li><li>Laura J. Hecox was the lighthouse keeper at Santa Cruz Light in California.</li><li>She held this position from 1883 to 1917.</li></ul>`,
      prompt: `The student wants to emphasize the order in which the two lighthouse keepers began their careers. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `Catherine A. Moore's career as a lighthouse keeper ended in 1878, whereas Laura J. Hecox's ended in 1917.` }, { id: `B`, text: `Laura J. Hecox began her career as a lighthouse keeper years after Catherine A. Moore did.` }, { id: `C`, text: `From 1817 to 1878, the nighttime waters of Connecticut were more navigable thanks to lighthouse keepers Laura J. Hecox and Catherine A. Moore.` }, { id: `D`, text: `Before automation, lighthouse keepers like Catherine A. Moore and Laura J. Hecox were crucial to ensuring safe navigation for watercraft.` }],
      answer: `B` },
  ];

  const RW_M2 = [
    { id: `oib-rw-m2-1`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Despite stated claims of global relevance, much major research on income inequality performed in the 2010s suffered from a myopic focus on a few wealthy countries in North America and Western Europe, partly due to limited data availability. Researchers would later ______ this shortcoming after gaining new access to banking records located in nations in Asia, such as China, and Eastern Europe, such as Hungary.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `mitigate` }, { id: `B`, text: `presuppose` }, { id: `C`, text: `validate` }, { id: `D`, text: `categorize` }],
      answer: `A` },

    { id: `oib-rw-m2-2`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `hard`, type: `mcq`,
      passage: `<p>One popular theory of the origin of the Moon, the “big whack,” posits that a protoplanet called Theia collided with Earth, flinging debris into orbit that eventually coalesced into the Moon. Until recently, Theia was ______, but researcher Qian Yuan and colleagues now claim to have identified pieces of the protoplanet in the lowermost section of Earth's mantle.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `notional` }, { id: `B`, text: `spurious` }, { id: `C`, text: `veritable` }, { id: `D`, text: `desultory` }],
      answer: `A` },

    { id: `oib-rw-m2-3`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Political blogs with conspicuous ideological alignments became an integral component of US media in the early 2000s. While some commentators lauded this development, asserting that such blogs had a welcome transparency missing from traditional news, less ______ observers countered that such blogs tended to ideological extremes that exacerbated political polarization to problematic levels.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `misanthropic` }, { id: `B`, text: `earnest` }, { id: `C`, text: `sanguine` }, { id: `D`, text: `recalcitrant` }],
      answer: `C` },

    { id: `oib-rw-m2-4`, domain: `Craft and Structure`, skill: `Text, Structure, and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `<p>During Rome's republican period, which ended in the first century BCE, libraries were predominantly owned by wealthy individuals who tightly controlled access to their book collections. The first public library became available in Rome in 28 BCE and was soon followed by one commissioned by Emperor Augustus. As modern scholar Fabio Fernandes notes, however, these two traditions aren't as distinct as they seem, as both the emperor and the private library owners viewed their libraries as extensions of their personal patronage, just on vastly differing scales.</p>`,
      prompt: `Which choice best states the main purpose of the text?`,
      options: [{ id: `A`, text: `To give a brief overview of public access to libraries throughout Rome's republican period` }, { id: `B`, text: `To contend that early imperial leaders in Rome wielded too much influence over libraries` }, { id: `C`, text: `To assert that private and early public libraries in ancient Rome had an essential similarity` }, { id: `D`, text: `To call into question the notion that private Roman libraries disappeared during the first century BCE` }],
      answer: `C` },

    { id: `oib-rw-m2-5`, domain: `Craft and Structure`, skill: `Text, Structure, and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The following text is from George Marion McClellan's 1895 poem “Eternity.”</p><p>My spirit swoons, and all my senses cry<br>For Ocean's breast and covering of the sky.<br>Rock me to sleep, ye waves, and outward bound,<br>Just let me drift far out from toil and care,<br>Where lapping of the waves shall be the sound,<br>Which mingled with the winds that gently bear<br>Me on between a peaceful sea and sky,<br>To make my soothing slumberous lullaby.</p>`,
      prompt: `Which choice best states the main purpose of the text?`,
      options: [{ id: `A`, text: `To convey the speaker's longing for the ocean to impart a sense of inner tranquility` }, { id: `B`, text: `To contrast the demands of the speaker's everyday life with the serenity of being rocked to sleep by the ocean` }, { id: `C`, text: `To illustrate the increasing intensity of the speaker's desire to escape ongoing hardship by gliding on the ocean` }, { id: `D`, text: `To justify the speaker's qualms about being transported by the ocean to a quiet destination` }],
      answer: `A` },

    { id: `oib-rw-m2-6`, domain: `Craft and Structure`, skill: `Cross-Text Connections`, difficulty: `hard`, type: `mcq`,
      passage: `<p><b>Text 1</b></p><p>In parts of the Northwest Territories, Canada, the rough-legged hawk is a major predator of the collared lemming. Researcher Alice Kenney and colleagues found that when predation pressure on collared lemmings was temporarily reduced, their numbers significantly increased. This finding illustrates a foundational ecological <u>principle</u>: predators control prey population numbers.</p><p><b>Text 2</b></p><p>Robert D. Hayes and colleagues found that excluding wolves from a site in Yukon, Canada, where they typically prey on Dall sheep had no significant effect on Dall sheep abundance. Many other predation relief studies show an increase in prey abundance, but those studies often focus on small, rapidly reproducing prey, like birds, lemmings, and rabbits, rather than large, slowly reproducing prey, like Dall sheep, which could account for the difference between those results and Hayes and colleagues' results.</p>`,
      prompt: `Based on the texts, the author of Text 2 would most likely agree with which statement about the “principle” mentioned in Text 1?`,
      options: [{ id: `A`, text: `It has some evidential support, but it should not be regarded as universally applicable.` }, { id: `B`, text: `It has been challenged by some studies, but the findings of those studies have not been widely accepted.` }, { id: `C`, text: `It may be true for some predators but only because those predators share certain physical characteristics.` }, { id: `D`, text: `It is plausible, but many of the studies that support it have methodological flaws.` }],
      answer: `A` },

    { id: `oib-rw-m2-7`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Many artists associated with hyperpop, a movement in electronic music that emerged in the 2010s, conform to the model perfected by American musician Laura Les: bold synthesizer arrangements, propulsive beats, and electronically manipulated vocals. Yet the movement is hardly uniform: Venezuelan recording artist Arca incorporates Latin rhythms into the hyperpop sound, for example. Such stylistic diversity is encouraged in part by the music-streaming app Spotify, whose curated playlist of hyperpop songs balances cohesion with variety.</p>`,
      prompt: `Which statement about Arca is best supported by the text?`,
      options: [{ id: `A`, text: `While some of her recordings conform to the model perfected by Laura Les, others reject it outright.` }, { id: `B`, text: `She developed her unique sound without being influenced by other artists on Spotify's hyperpop playlist.` }, { id: `C`, text: `Her music diverges from the typical hyperpop sound but doesn't abandon it.` }, { id: `D`, text: `Her inclusion on Spotify's hyperpop playlist inspired established artists to embrace stylistic experimentation.` }],
      answer: `C` },

    { id: `oib-rw-m2-8`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Eighteenth-century economist Adam Smith is famed for his metaphor of the invisible hand, which he putatively used to illustrate a robust model of how individuals produce aggregate benefits by pursuing their own economic interests. Note “putatively”: as Gavin Kennedy has shown, Smith deploys this metaphor only once in his economic writings—to make a narrow point about the then-dominant economic theory of mercantilism—and it was largely ignored until some twentieth-century economists eager to secure an intellectual pedigree for their views elevated it to a fully-fledged paradigm.</p>`,
      prompt: `Which choice best states the main idea of the text?`,
      options: [{ id: `A`, text: `Some twentieth-century economists gave Smith's metaphor of the invisible hand a significance it does not have in Smith's work, but it is nevertheless a useful model of how individuals produce aggregate benefits by pursuing their own economic interests.` }, { id: `B`, text: `Smith's metaphor of the invisible hand has been interpreted as a model of how individuals acting in their own interest produce aggregate benefits, but it was intended as a subtle critique of the economic theory of mercantilism.` }, { id: `C`, text: `The reputation of Smith's metaphor of the invisible hand is not due to the importance of the metaphor in Smith's work but rather to the promotion of the metaphor by some later economists for their own ends.` }, { id: `D`, text: `Although Smith is famed for his metaphor of the invisible hand, the metaphor was largely ignored until economists in the twentieth century came to realize that the metaphor was a robust model that anticipated their own views.` }],
      answer: `C` },

    { id: `oib-rw-m2-9`, domain: `Information and Ideas`, skill: `Command of Evidence (Textual)`, difficulty: `medium`, type: `mcq`,
      passage: `<p><i>Memoirs of Elleanor Eldridge</i> is an 1838 historical account by Elleanor Eldridge and Frances Harriet Whipple Green. In the book, the authors describe how restorative sleep can be for young people, writing, ______</p>`,
      prompt: `Which quotation from <i>Memoirs of Elleanor Eldridge</i> most effectively illustrates the claim?`,
      options: [{ id: `A`, text: `“Let us, dear reader, remember the punishment of idle curiosity, as taught in the true and affecting history [named] ‘Blue Beard;’ and, striving to be content with the facts in the case, seek not to lift the veil, which the sensibility of true love, and feminine delicacy, have alike conspired to draw.”` }, { id: `B`, text: `“Then let no one turn with too much [fussiness] from the simple story of the humble Elleanor, though it may contain few, or none, of the thrilling charms of poetry and passion.”` }, { id: `C`, text: `“Blessed are the slumbers of the innocent! They are kindlier than balm, and they refresh and gladden the spirit of childhood, like ministerings from a better world.”` }, { id: `D`, text: `“Home is home, to the lowly as well as the great; and no rank, or color, destroys its sacred character, its power over the mind, and the affections.”` }],
      answer: `C` },

    { id: `oib-rw-m2-10`, domain: `Information and Ideas`, skill: `Command of Evidence (Textual)`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Early Earth is thought to have been characterized by a stagnant lid tectonic regime, in which the upper lithosphere (the outer rocky layer) was essentially immobile and there was no interaction between the lithosphere and the underlying mantle. Researchers investigated the timing of the transition from a stagnant lid regime to a tectonic plate regime, in which the lithosphere is fractured into dynamic plates that in turn allow lithospheric and mantle material to mix. Examining chemical data from lithospheric and mantle-derived rocks ranging from 285 million to 3.8 billion years old, the researchers dated the transition to 3.2 billion years ago.</p>`,
      prompt: `Which finding, if true, would most directly support the researchers' conclusion?`,
      options: [{ id: `A`, text: `There is a positive correlation between the age of lithospheric rocks and their chemical similarity to mantle-derived rocks, and that correlation increases significantly in strength at around 3.2 billion years old.` }, { id: `B`, text: `Mantle-derived rocks younger than 3.2 billion years contain some material that is not found in older mantle-derived rocks but is found in older and contemporaneous lithospheric rocks.` }, { id: `C`, text: `Mantle-derived rocks older than 3.2 billion years show significantly more compositional diversity than lithospheric rocks older than 3.2 billion years do.` }, { id: `D`, text: `Among rocks known to be older than 3.2 billion years, significantly more are mantle derived than lithospheric, but the opposite is true for the rocks younger than 3.2 billion years.` }],
      answer: `B` },

    { id: `oib-rw-m2-11`, domain: `Information and Ideas`, skill: `Command of Evidence (Quantitative)`, difficulty: `hard`, type: `mcq`,
      passage: `<div style="text-align:center;font-weight:600;font-size:12px;margin:2px 0">Correlation between Model-Predicted and Participant-Reported Enjoyment Ratings, by Painting Style</div><svg viewBox="0 0 340 250" role="img" aria-label="bar chart" style="max-width:360px;width:100%;display:block;margin:6px auto"><line x1="40.0" y1="204.0" x2="310.0" y2="204.0" stroke="currentColor" stroke-width="1.3"/><line x1="40.0" y1="204.0" x2="310.0" y2="204.0" stroke="currentColor" stroke-width="0.5" opacity="0.16"/><text x="36.0" y="207.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">0</text><line x1="40.0" y1="169.2" x2="310.0" y2="169.2" stroke="currentColor" stroke-width="0.5" opacity="0.16"/><text x="36.0" y="172.2" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">0.1</text><line x1="40.0" y1="134.4" x2="310.0" y2="134.4" stroke="currentColor" stroke-width="0.5" opacity="0.16"/><text x="36.0" y="137.4" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">0.2</text><line x1="40.0" y1="99.6" x2="310.0" y2="99.6" stroke="currentColor" stroke-width="0.5" opacity="0.16"/><text x="36.0" y="102.6" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">0.3</text><line x1="40.0" y1="64.8" x2="310.0" y2="64.8" stroke="currentColor" stroke-width="0.5" opacity="0.16"/><text x="36.0" y="67.8" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">0.4</text><line x1="40.0" y1="30.0" x2="310.0" y2="30.0" stroke="currentColor" stroke-width="0.5" opacity="0.16"/><text x="36.0" y="33.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">0.5</text><rect x="53.5" y="54.4" width="33.1" height="149.6" fill="#4C8BF5" opacity="0.9"/><rect x="89.5" y="124.0" width="33.1" height="80.0" fill="#E8833A" opacity="0.9"/><rect x="125.5" y="134.4" width="33.1" height="69.6" fill="#3FA45B" opacity="0.9"/><text x="107.5" y="220.0" font-size="9.5" fill="currentColor" text-anchor="middle">Abstract</text><rect x="188.5" y="110.0" width="33.1" height="94.0" fill="#4C8BF5" opacity="0.9"/><rect x="224.5" y="71.8" width="33.1" height="132.2" fill="#E8833A" opacity="0.9"/><rect x="260.5" y="179.6" width="33.1" height="24.4" fill="#3FA45B" opacity="0.9"/><text x="242.5" y="220.0" font-size="9.5" fill="currentColor" text-anchor="middle">Cubist</text><rect x="40.0" y="228.0" width="9" height="9" fill="#4C8BF5"/><text x="52.0" y="236.0" font-size="9" fill="currentColor">P6</text><rect x="63.8" y="228.0" width="9" height="9" fill="#E8833A"/><text x="75.8" y="236.0" font-size="9" fill="currentColor">P1</text><rect x="87.6" y="228.0" width="9" height="9" fill="#3FA45B"/><text x="99.6" y="236.0" font-size="9" fill="currentColor">P5</text></svg><p>Neuroscientist Kiyohito Iigaya and colleagues developed a computational model to predict how much a person will enjoy a particular work of art on a scale from 1 (not at all) to 4 (very much). They then recruited participants to use the same scale to rate several sets of paintings in various styles and calculated the correlation between the ratings predicted by the model and those reported by the participants. Assuming participant P6 gave equal ratings to the abstract and cubist paintings, the data in the graph indicate the model predicted that ______</p>`,
      prompt: `Which choice most effectively uses data from the graph to complete the example?`,
      options: [{ id: `A`, text: `P6's rating for abstract and cubist paintings would equal one another.` }, { id: `B`, text: `P6's ratings for abstract and cubist paintings would differ from one another.` }, { id: `C`, text: `P6 would derive less aesthetic pleasure from abstract paintings than from cubist paintings.` }, { id: `D`, text: `P6 would derive more aesthetic pleasure from abstract paintings than from cubist paintings.` }],
      answer: `D` },

    { id: `oib-rw-m2-12`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Scholars are increasingly exploring the communication and preservation of ecological knowledge through Indigenous songs (e.g., Kazakh songs about water and foraging quality and those of the O'odham people about desert plants). In one study, ethnobiologist Dana Lepofsky et al. received insight from Kwaxsistalla Wathl'thla, a song keeper for the Kwakwaka'wakw people in Canada, into songs referencing the people's use of terraced gardens in intertidal zones along the Pacific Northwest coast for the cultivation of clams for consumption. Archaeological evidence of significant increases in clam size and abundance in that area concurrent with the documented past implementation of the method described in the songs supports the conclusion that ______</p>`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `non-Indigenous people around the Pacific Northwest coast adopted the practice developed by the Kwakwaka'wakw people after observing its efficacy.` }, { id: `B`, text: `the practice used by ancestors of modern Kwakwaka'wakw people not only effectively maintained a food source but also promoted its robustness.` }, { id: `C`, text: `there is greater corroboration in the archaeological record of ecological practices described in Kwakwaka'wakw songs than of those described in Kazakh and O'odham songs.` }, { id: `D`, text: `although contemporary Kwakwaka'wakw people have a deep understanding of and appreciation for the fishing and farming practices used by their ancestors, they no longer implement those methods.` }],
      answer: `B` },

    { id: `oib-rw-m2-13`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `<p>For its 1974 work <i>Instant Mural</i>, the Chicano art collective Asco taped members Patssi Valdez and Humberto Sandoval to an outdoor wall in East Los Angeles. The work is manifestly a commentary on constraint, but many critics focus on Valdez and the social constraints women faced at the time, which is understandable but leaves the presence of Valdez's male collaborator Sandoval unexplained. We should instead consider that in 1974, the art establishment's recognition of Chicano artists was (and had long been) restricted to sociohistorical muralists, leaving nonmuralist Chicano artists—like Asco's members—struggling to even exhibit their work; attending to this context opens an interpretation that accounts for all the evidence, allowing us to conclude that ______</p>`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `while Valdez's presence in <i>Instant Mural</i> represents the social constraints placed on women at the time, Sandoval's presence represents Chicano muralists' frustration at their lack of recognition by the art establishment.` }, { id: `B`, text: `<i>Instant Mural</i> is best understood not as a critique of the social constraints placed on women but rather as a critique of sociohistorical muralists' depictions of Chicano culture.` }, { id: `C`, text: `the main subject of <i>Instant Mural</i> is female Chicano artists' experience of being doubly constrained by gender-role expectations and the marginalization of certain types of art.` }, { id: `D`, text: `<i>Instant Mural</i> is a reflection on the constraining aesthetic expectations placed on Chicano artists in general rather than on the social constraints placed on women specifically.` }],
      answer: `D` },

    { id: `oib-rw-m2-14`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Despite the fact that what is now known as the Cassegrain reflector was first constructed by Bonaventura Cavalieri, the telescope is named after the seventeenth-century French astronomer Laurent Cassegrain. One might assume cases like this, where a discovery or concept is not named after the first person who discovered it, to be ______ they are counted among a litany of examples of Stigler's law.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `rare, on the contrary,` }, { id: `B`, text: `rare, on the contrary;` }, { id: `C`, text: `rare on the contrary,` }, { id: `D`, text: `rare; on the contrary,` }],
      answer: `D` },

    { id: `oib-rw-m2-15`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Included in <i>Black Refractions: Highlights from The Studio Museum in Harlem</i>, a 2019 group exhibition at the Museum of the African Diaspora in San Francisco, California, was the work of artist Lorna Simpson, who is best known for her multimedia artworks that juxtapose images of African American women with text fragments. Her work challenges conventional notions of race, gender, history, and ______ she is credited with expanding the horizons of conceptual photographic art.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `memory, and` }, { id: `B`, text: `memory and` }, { id: `C`, text: `memory,` }, { id: `D`, text: `memory` }],
      answer: `A` },

    { id: `oib-rw-m2-16`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Moussa Ould Ebnou is a novelist from Boutilimit, Mauritania, who has earned international acclaim in recent years. Writers of other literary forms, such as poetry and drama, are less likely to be recognized beyond their nations' borders, but many are still well ______ Koulsy Lamko, for example, is a celebrated playwright from Chad.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `known,` }, { id: `B`, text: `known:` }, { id: `C`, text: `known and` }, { id: `D`, text: `known` }],
      answer: `B` },

    { id: `oib-rw-m2-17`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Recent analysis of 2010 BL4—an outer solar system object orbiting the Sun between Jupiter and Neptune—has determined its color to be gray, suggesting an icy composition. Such interpretations are ultimately ______ the object's gray coloration may be an incidental effect of radiation, solar wind, or collisions with other objects rather than evidence of its physical makeup.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `speculative, though;` }, { id: `B`, text: `speculative, though,` }, { id: `C`, text: `speculative; though` }, { id: `D`, text: `speculative, though` }],
      answer: `A` },

    { id: `oib-rw-m2-18`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `<p>In the list “Splendid Things” from Sei Shōnagon's <i>Pillow Book</i>, the author delights in grape-colored fabric, wisteria vines around a tree, and a snow-covered garden. So shrewd an observer is Shōnagon, a lady-in-waiting to Empress Teishi, that her book's musings on tenth-century Japanese courtly life ______ readers a thousand years later.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `has fascinated` }, { id: `B`, text: `fascinate` }, { id: `C`, text: `is fascinating` }, { id: `D`, text: `fascinates` }],
      answer: `B` },

    { id: `oib-rw-m2-19`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The present-day city of Dushanbe, Tajikistan, was the capital of the Tajik Autonomous Soviet Socialist Republic, one of many nominally autonomous republics within the Soviet Union. Each of these republics ______ established along ethnolinguistic lines: most residents of the Tajik Republic spoke Persian, for example.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `have been` }, { id: `B`, text: `are` }, { id: `C`, text: `was` }, { id: `D`, text: `were` }],
      answer: `C` },

    { id: `oib-rw-m2-20`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>When, in 2017, Cambridge University students Lucy Moss and Toby Marlow decided they wanted to develop a musical together, one of their goals was for their female actor friends to have good parts to play. ______ they created the show <i>Six</i>, a retelling of the history of King Henry VIII's wives in which each of the six queens has a starring role.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `To that end,` }, { id: `B`, text: `In summary,` }, { id: `C`, text: `For example,` }, { id: `D`, text: `In other words,` }],
      answer: `A` },

    { id: `oib-rw-m2-21`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The prime meridian, the global indicator of zero degrees longitude established in 1884, was originally determined using astronomically derived coordinates. ______ as decades passed, new calculations would reveal increasingly precise coordinates, yet the prime meridian remained unchanged; it wasn't until the 1980s that, spurred by improved geodetic data, the prime meridian was officially moved—roughly one hundred meters east.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `Specifically,` }, { id: `B`, text: `Again and again,` }, { id: `C`, text: `Granted,` }, { id: `D`, text: `To that end,` }],
      answer: `C` },

    { id: `oib-rw-m2-22`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>Minor planets are astronomical objects that orbit the Sun but are neither planets nor comets.</li><li>Astronomer Jane Luu has discovered many minor planets in her career.</li><li>Alongside colleagues David C. Jewitt and Chadwick Trujillo, she discovered the minor planet (19308) 1996 TO66 on October 12, 1996.</li><li>Alongside colleagues David C. Jewitt, Chadwick Trujillo, and David J. Tholen, she discovered the minor planet (24978) 1998 HJ151 on April 28, 1998.</li></ul>`,
      prompt: `Which choice most effectively uses information from the given sentences to emphasize the discovery of (19308) 1996 TO66 to an audience already familiar with Jane Luu?`,
      options: [{ id: `A`, text: `First there was the discovery of (19308) 1996 TO66 on October 12, 1996, and then on April 28, 1998, Jane Luu discovered yet another minor planet with the help of her colleagues David C. Jewitt, Chadwick Trujillo, and David J. Tholen.` }, { id: `B`, text: `Astronomer Jane Luu helped discover not only the minor planet (19308) 1996 TO66 on October 12, 1996, but also (24978) 1998 HJ151 on April 28, 1998.` }, { id: `C`, text: `Jane Luu is an astronomer famous for her discovery of many minor planets in our solar system, including (19308) 1996 TO66.` }, { id: `D`, text: `On October 12, 1996, Jane Luu and her colleagues David C. Jewitt and Chadwick Trujillo made the exciting discovery of the minor planet (19308) 1996 TO66.` }],
      answer: `D` },

    { id: `oib-rw-m2-23`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>Samoil M. Bilenky is a Russian particle physicist.</li><li>Particle physicists study subatomic particles.</li><li>Neutrinos are some of the least understood subatomic particles.</li><li>Neutrinos were first discovered in the mid-twentieth century.</li><li>Bilenky is known for his research on neutrino oscillations.</li></ul>`,
      prompt: `The student wants to provide an example of a particle physicist whose research focuses on neutrinos. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `Neutrinos are a type of subatomic particle that particle physicists are still trying to understand.` }, { id: `B`, text: `Particle physicist Samoil M. Bilenky is known for his research on neutrino oscillations.` }, { id: `C`, text: `The research done on neutrino oscillations exemplifies the work particle physicists do to advance our understanding of subatomic particles.` }, { id: `D`, text: `By studying neutrino oscillations—to name just one example—particle physicists can learn more about neutrinos.` }],
      answer: `B` },

    { id: `oib-rw-m2-24`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `easy`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>A supercontinent is a single landmass made up of most or all of Earth's continents.</li><li>Over time, continents merge together to form supercontinents, which then break apart.</li><li>This process is believed to take hundreds of millions of years and is known as the supercontinent cycle.</li><li>Ur was a supercontinent that formed about 3.1 billion years ago.</li><li>Columbia was a supercontinent that formed about 1.8 billion years ago.</li></ul>`,
      prompt: `The student wants to emphasize the order in which the supercontinents were formed. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `The supercontinent Columbia formed long after the supercontinent Ur.` }, { id: `B`, text: `Ur formed about 3.1 billion years ago but eventually broke apart.` }, { id: `C`, text: `Forming and breaking apart over hundreds of millions of years, supercontinents are made up of most or all of Earth's continents.` }, { id: `D`, text: `Ur and Columbia were both supercontinents, single landmasses made up of most or all of Earth's continents.` }],
      answer: `A` },

    { id: `oib-rw-m2-25`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li><i>Catharsis, Conversion, Traumata</i> is a 1986 sculpture by American artist Joseph Kosuth.</li><li>It consists of a blue neon sign that spells out the title phrase.</li><li><i>Harvest Moon</i> is a 2013 sculpture by British/Pakistani artist Shezad Dawood.</li><li>It consists of a yellow neon sign that forms an abstract moon shape.</li><li>Neon signs became popular with advertisers in the 1920s and began to decline in popularity in the 1960s.</li><li>Neon signs became popular with artists in the 1960s and continue to be popular today.</li></ul>`,
      prompt: `The student wants to emphasize a difference between the two sculptures. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `Molded into an evocative phrase in <i>Catharsis, Conversion, Traumata</i> (1986), an abstract form in <i>Harvest Moon</i> (2013), and an advertising tool in decades past, neon lighting has a number of different applications.` }, { id: `B`, text: `While the sculptures share a common material, one spells out a phrase while the other is decidedly more abstract.` }, { id: `C`, text: `Kosuth's sculpture was made in 1986 and Dawood's in 2013, both well after the advertising heyday of neon signs had passed.` }, { id: `D`, text: `American artist Joseph Kosuth's and British/Pakistani artist Shezad Dawood's sculptures have employed neon signs in different ways, demonstrating the versatility of the popular material.` }],
      answer: `B` },

    { id: `oib-rw-m2-26`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>Pattern analysis and contextual analysis are two approaches to art criticism.</li><li>Pattern analysis examines the repetition of visual elements in an artwork.</li><li>Such an analysis of Andy Warhol's <i>Campbell's Soup Cans</i> might consider how the painting's repetition of images of soup cans emphasizes the excesses of consumer culture.</li><li>Contextual analysis considers the historical and cultural contexts of an artwork's time.</li><li>Such an analysis of Pablo Picasso's <i>Les Demoiselles d'Avignon</i> might consider how the painting's portrayal of fragmented human figures challenged conventions of beauty during a time of cultural upheaval (early twentieth century).</li></ul>`,
      prompt: `The student wants to present contextual analysis to an audience unfamiliar with the concept. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `A pattern analysis of <i>Campbell's Soup Cans</i> might consider how the painting's repetition of images of soup cans emphasizes the excesses of consumer culture.` }, { id: `B`, text: `<i>Les Demoiselles d'Avignon</i>'s portrayal of fragmented human figures challenged conventions of beauty during a time of cultural upheaval (early twentieth century).` }, { id: `C`, text: `An approach to art criticism, contextual analysis considers the historical and cultural contexts of an artwork's time.` }, { id: `D`, text: `Pattern analysis differs from contextual analysis in that pattern analysis examines the repetition of visual elements in an artwork.` }],
      answer: `C` },

    { id: `oib-rw-m2-27`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>A river's stream length is the length of a line that follows along the river path.</li><li>A river's valley length is the length of a straight line drawn from the beginning of the river to the end.</li><li>The river's curviness, or sinuosity, is the ratio of the river's stream length to its valley length.</li><li>Low-sinuosity rivers have a stream length 1–1.5 times longer than their valley length, and high-sinuosity rivers have a stream length 1.5 or more times longer than their valley length.</li><li>The Embarras River in Canada has high sinuosity.</li><li>The Luni River in India has low sinuosity.</li></ul>`,
      prompt: `The student wants to compare the curviness of the two rivers. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `The high-sinuosity Luni River in India is curvier than the low-sinuosity Embarras River in Canada.` }, { id: `B`, text: `The Embarras River's ratio of stream length to valley length, also known as sinuosity, is greater than that of the Luni River.` }, { id: `C`, text: `By comparing the stream lengths of the Embarras and Luni rivers to their valley lengths, one can calculate their curviness, or sinuosity.` }, { id: `D`, text: `In both the Embarras and the Luni rivers, curviness is determined by comparing stream length to valley length.` }],
      answer: `B` },
  ];

  const MATH_M1 = [
    { id: `oib-math-m1-1`, domain: `Algebra`, skill: `Linear equations in two variables`, difficulty: `easy`, type: `mcq`,
      prompt: `<div>Line <i>r</i> in the xy-plane has a slope of −8 and passes through the point (0, 60). Which equation defines line <i>r</i>?</div>`,
      options: [{ id: `A`, text: `y = −8x + 60` }, { id: `B`, text: `y = −8x + 52` }, { id: `C`, text: `y = −8x − 52` }, { id: `D`, text: `y = −8x − 60` }],
      answer: `A` },

    { id: `oib-math-m1-2`, domain: `Advanced Math`, skill: `Equivalent expressions`, difficulty: `easy`, type: `mcq`,
      prompt: `<div>Which expression is equivalent to 19(x<sup>2</sup> − 8)?</div>`,
      options: [{ id: `A`, text: `19x<sup>2</sup> + 11` }, { id: `B`, text: `19x<sup>2</sup> − 8` }, { id: `C`, text: `19x<sup>2</sup> − 27` }, { id: `D`, text: `19x<sup>2</sup> − 152` }],
      answer: `D` },

    { id: `oib-math-m1-3`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `easy`, type: `grid`,
      prompt: `<div>The function <i>f</i> is defined by f(x) = 5x<sup>3</sup> + 3. What is the value of f(2)?</div>`,
      answer: [`43`] },

    { id: `oib-math-m1-4`, domain: `Algebra`, skill: `Linear inequalities in one or two variables`, difficulty: `easy`, type: `mcq`,
      prompt: `<div>A car travels at a speed of at least 40 miles per hour but no more than 65 miles per hour for a certain part of a trip. Which inequality represents this situation, where <i>x</i> is the speed of the car, in miles per hour, on this part of the trip?</div>`,
      options: [{ id: `A`, text: `x ≥ 40` }, { id: `B`, text: `x ≥ 65` }, { id: `C`, text: `40 ≤ x ≤ 65` }, { id: `D`, text: `x ≤ 105` }],
      answer: `C` },

    { id: `oib-math-m1-5`, domain: `Problem-Solving and Data Analysis`, skill: `Ratios, rates, proportional relationships, and units`, difficulty: `easy`, type: `grid`,
      prompt: `<div>The ratio of <i>k</i> to <i>p</i> is constant. If k = 4, then p = 3. What is the value of <i>k</i> when p = 24?</div>`,
      answer: [`32`] },

    { id: `oib-math-m1-6`, domain: `Algebra`, skill: `Linear functions`, difficulty: `easy`, type: `grid`,
      prompt: `<div style='text-align:center;margin-bottom:6px'>h(x) = x + b</div><div>For the linear function <i>h</i>, <i>b</i> is a constant and h(0) = 26. What is the value of <i>b</i>?</div>`,
      answer: [`26`] },

    { id: `oib-math-m1-7`, domain: `Advanced Math`, skill: `Equivalent expressions`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>Which expression is equivalent to (x)<sup>1/17</sup>, where x &gt; 0?</div>`,
      options: [{ id: `A`, text: `(1/17)·x` }, { id: `B`, text: `<sup>17</sup>√x` }, { id: `C`, text: `17·x` }, { id: `D`, text: `(x)<sup>17</sup>` }],
      answer: `B` },

    { id: `oib-math-m1-8`, domain: `Problem-Solving and Data Analysis`, skill: `Two-variable data: models and scatterplots`, difficulty: `medium`, type: `mcq`,
      prompt: `<svg viewBox="0 0 300 250" role="img" aria-label="scatterplot" style="max-width:340px;width:100%;display:block;margin:6px auto"><clipPath id="cp82729"><rect x="26.0" y="26.0" width="248.0" height="198.0"/></clipPath><line x1="26.0" y1="224.0" x2="26.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="57.0" y1="224.0" x2="57.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="88.0" y1="224.0" x2="88.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="119.0" y1="224.0" x2="119.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="150.0" y1="224.0" x2="150.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="181.0" y1="224.0" x2="181.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="212.0" y1="224.0" x2="212.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="243.0" y1="224.0" x2="243.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="274.0" y1="224.0" x2="274.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="224.0" x2="274.0" y2="224.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="191.0" x2="274.0" y2="191.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="158.0" x2="274.0" y2="158.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="125.0" x2="274.0" y2="125.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="92.0" x2="274.0" y2="92.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="59.0" x2="274.0" y2="59.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="26.0" x2="274.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="224.0" x2="274.0" y2="224.0" stroke="currentColor" stroke-width="1.4"/><line x1="26.0" y1="224.0" x2="26.0" y2="26.0" stroke="currentColor" stroke-width="1.4"/><text x="26.0" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">0</text><text x="88.0" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">1</text><text x="150.0" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">2</text><text x="212.0" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">3</text><text x="274.0" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">4</text><text x="22.0" y="194.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">5</text><text x="22.0" y="161.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">10</text><text x="22.0" y="128.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">15</text><text x="22.0" y="95.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">20</text><text x="22.0" y="62.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">25</text><text x="22.0" y="29.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">30</text><g clip-path="url(#cp82729)"><line x1="26.0" y1="39.2" x2="274.0" y2="197.6" stroke="currentColor" stroke-width="1.8"/><circle cx="26.0" cy="39.2" r="3.1" fill="currentColor"/><circle cx="57.0" cy="78.8" r="3.1" fill="currentColor"/><circle cx="88.0" cy="92.0" r="3.1" fill="currentColor"/><circle cx="119.0" cy="105.2" r="3.1" fill="currentColor"/><circle cx="150.0" cy="111.8" r="3.1" fill="currentColor"/><circle cx="181.0" cy="131.6" r="3.1" fill="currentColor"/><circle cx="212.0" cy="151.4" r="3.1" fill="currentColor"/><circle cx="243.0" cy="184.4" r="3.1" fill="currentColor"/><circle cx="274.0" cy="197.6" r="3.1" fill="currentColor"/></g><text x="26.0" y="14" font-size="11" font-style="italic" fill="currentColor" text-anchor="middle">y</text><text x="282.0" y="242" font-size="11" font-style="italic" fill="currentColor">x</text></svg><div>Which of the following is closest to the slope of this line of best fit?</div>`,
      options: [{ id: `A`, text: `−6` }, { id: `B`, text: `−1/6` }, { id: `C`, text: `1/6` }, { id: `D`, text: `6` }],
      answer: `A` },

    { id: `oib-math-m1-9`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `grid`,
      prompt: `<div>The y-intercept of the graph of y = x<sup>2</sup> + 15 in the xy-plane is (0, y). What is the value of <i>y</i>?</div>`,
      answer: [`15`] },

    { id: `oib-math-m1-10`, domain: `Algebra`, skill: `Linear equations in two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>What is the slope of the graph of 48x − 6y = −32 in the xy-plane?</div>`,
      options: [{ id: `A`, text: `−8` }, { id: `B`, text: `−3/2` }, { id: `C`, text: `3/2` }, { id: `D`, text: `8` }],
      answer: `D` },

    { id: `oib-math-m1-11`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<div style='text-align:center;margin-bottom:6px'>−5(v − 8)(v − 2)(v + 9) = 0</div><div>What value of <i>v</i> is a solution to the given equation?</div>`,
      options: [{ id: `A`, text: `−5` }, { id: `B`, text: `−2` }, { id: `C`, text: `8` }, { id: `D`, text: `9` }],
      answer: `C` },

    { id: `oib-math-m1-12`, domain: `Algebra`, skill: `Linear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>Scientists collected fallen acorns that each housed a colony of the ant species <i>P. ohioensis</i> and analyzed each colony's structure. For any of these colonies, if the colony has <i>x</i> worker ants, the equation y = 0.67x + 2.6, where 20 ≤ x ≤ 110, gives the predicted number of larvae, <i>y</i>, in the colony. If one of these colonies has 53 worker ants, which of the following is closest to the predicted number of larvae in the colony?</div>`,
      options: [{ id: `A`, text: `173` }, { id: `B`, text: `75` }, { id: `C`, text: `56` }, { id: `D`, text: `38` }],
      answer: `D` },

    { id: `oib-math-m1-13`, domain: `Geometry and Trigonometry`, skill: `Lines, angles, and triangles`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>In triangle DEF, the measure of angle D is 40° and the measure of angle E is 95°. In triangle RST, the measure of angle R is 40° and the measure of angle S is 95°. Which of the following additional pieces of information is needed to determine whether triangle DEF is similar to triangle RST?</div>`,
      options: [{ id: `A`, text: `The measure of angle F` }, { id: `B`, text: `The measure of angle T` }, { id: `C`, text: `The measure of angle F and the measure of angle T` }, { id: `D`, text: `No additional information is needed.` }],
      answer: `D` },

    { id: `oib-math-m1-14`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `medium`, type: `grid`,
      prompt: `<div>If −7(13 − 5x) + 3 = −8(13 − 5x) + 21, what is the value of 13 − 5x?</div>`,
      answer: [`18`] },

    { id: `oib-math-m1-15`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>The function f(x) = (1/9)(x − 4)<sup>2</sup> + 5 gives a toy car's height above the ground f(x), in inches, <i>x</i> seconds after it started moving on an elevated track, where 0 ≤ x ≤ 10. Which of the following is the best interpretation of the vertex of the graph of y = f(x) in the xy-plane?</div>`,
      options: [{ id: `A`, text: `The toy car's minimum height was 5 inches above the ground.` }, { id: `B`, text: `The toy car's minimum height was 4 inches above the ground.` }, { id: `C`, text: `The toy car's height was 5 inches above the ground when it started moving.` }, { id: `D`, text: `The toy car's height was 4 inches above the ground when it started moving.` }],
      answer: `A` },

    { id: `oib-math-m1-16`, domain: `Advanced Math`, skill: `Exponential functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>The function f(t) = 30,000(2)<sup>t/370</sup> gives the number of bacteria in a population <i>t</i> minutes after an initial observation. How much time, in minutes, does it take for the number of bacteria in the population to double?</div>`,
      options: [{ id: `A`, text: `2` }, { id: `B`, text: `370` }, { id: `C`, text: `740` }, { id: `D`, text: `30,000` }],
      answer: `B` },

    { id: `oib-math-m1-17`, domain: `Problem-Solving and Data Analysis`, skill: `Probability and conditional probability`, difficulty: `medium`, type: `mcq`,
      prompt: `<table style="border-collapse:collapse;margin:6px auto"><tr><th style="border:1px solid var(--border);padding:3px 12px"></th><th style="border:1px solid var(--border);padding:3px 12px">Flames</th><th style="border:1px solid var(--border);padding:3px 12px">Sharks</th><th style="border:1px solid var(--border);padding:3px 12px">Total</th></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Small</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">8</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">7</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">15</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Medium</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">22</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">34</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">56</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Large</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">14</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">27</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">41</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Total</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">44</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">68</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">112</td></tr></table><div>A bin contains a mixture of T-shirts for two sports teams. The table shows the number of T-shirts in the bin, classified by size and sports team. One T-shirt from the bin will be selected at random. What is the probability of selecting a T-shirt that is medium, given that the T-shirt is a Flames T-shirt?</div>`,
      options: [{ id: `A`, text: `0.20` }, { id: `B`, text: `0.22` }, { id: `C`, text: `0.39` }, { id: `D`, text: `0.50` }],
      answer: `D` },

    { id: `oib-math-m1-18`, domain: `Geometry and Trigonometry`, skill: `Circles`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>The measure of angle <i>R</i> is 5π/6 radians. The measure of angle <i>T</i> is 7π/12 radians greater than the measure of angle <i>R</i>. What is the measure of angle <i>T</i>, in degrees?</div>`,
      options: [{ id: `A`, text: `105` }, { id: `B`, text: `150` }, { id: `C`, text: `255` }, { id: `D`, text: `510` }],
      answer: `C` },

    { id: `oib-math-m1-19`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `hard`, type: `mcq`,
      prompt: `<div style='text-align:center;margin-bottom:6px'>g(x) = x<sup>2</sup> + (27/2)x</div><div>Which expression represents the minimum value of the given function?</div>`,
      options: [{ id: `A`, text: `−(27/2)<sup>2</sup>` }, { id: `B`, text: `−(27/4)<sup>2</sup>` }, { id: `C`, text: `(27/4)<sup>2</sup>` }, { id: `D`, text: `(27/2)<sup>2</sup>` }],
      answer: `B` },

    { id: `oib-math-m1-20`, domain: `Problem-Solving and Data Analysis`, skill: `Percentages`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>The expression 0.33x represents the result of decreasing a positive quantity <i>x</i> by what percent?</div>`,
      options: [{ id: `A`, text: `6.7%` }, { id: `B`, text: `67%` }, { id: `C`, text: `3.3%` }, { id: `D`, text: `33%` }],
      answer: `B` },

    { id: `oib-math-m1-21`, domain: `Geometry and Trigonometry`, skill: `Right triangles and trigonometry`, difficulty: `hard`, type: `grid`,
      prompt: `<svg viewBox="0 0 400 180" role="img" aria-label="figure" style="max-width:340px;width:100%;display:block;margin:6px auto"><line x1='25' y1='150' x2='310' y2='150' stroke='currentColor' stroke-width='1.6'/><line x1='310' y1='150' x2='310' y2='80' stroke='currentColor' stroke-width='1.6'/><line x1='25' y1='150' x2='310' y2='80' stroke='currentColor' stroke-width='1.6'/><polyline points='298,150 298,138 310,138' fill='none' stroke='currentColor' stroke-width='1'/><text x='40' y='146' font-size='12' font-style='italic' fill='currentColor'>θ</text><text x='95' y='103' font-size='11' fill='currentColor'>length of the ramp</text><text x='315' y='108' font-size='11' fill='currentColor'>height</text><text x='315' y='121' font-size='11' fill='currentColor'>of the ramp</text><text x='163' y='168' font-size='12' font-style='italic' fill='currentColor'>x</text></svg><div class="tiny faint" style="text-align:center;margin:2px 0 8px">Note: Figure not drawn to scale.</div><div>According to a US law, ramps for use by the general public must form an angle with level ground such that tan θ ≤ 1/12. If the ramp in the figure conforms to this law and has a height of 28.4 inches, what is the least possible value of <i>x</i>, in inches?</div>`,
      answer: [`340.8`] },

    { id: `oib-math-m1-22`, domain: `Geometry and Trigonometry`, skill: `Area and volume`, difficulty: `hard`, type: `mcq`,
      prompt: `<div>The edge length, in inches, of cube Y is 3/64 the edge length, in inches, of cube X. The surface area, in square inches, of cube Y is <i>n</i> times the surface area, in square inches, of cube X. What is the value of <i>n</i>?</div>`,
      options: [{ id: `A`, text: `9/4,096` }, { id: `B`, text: `27/2,048` }, { id: `C`, text: `3/64` }, { id: `D`, text: `9/32` }],
      answer: `A` },
  ];

  const MATH_M2 = [
    { id: `oib-math-m2-1`, domain: `Algebra`, skill: `Linear equations in two variables`, difficulty: `easy`, type: `mcq`,
      prompt: `<div>The value of <i>y</i> is 8 more than twice the value of <i>x</i>. Which equation represents <i>y</i> in terms of <i>x</i>?</div>`,
      options: [{ id: `A`, text: `y = 10x + 2` }, { id: `B`, text: `y = 2x + 8` }, { id: `C`, text: `y = 10x + 8` }, { id: `D`, text: `y = 8x + 2` }],
      answer: `B` },

    { id: `oib-math-m2-2`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>To purchase a used car at a total price of 11,000 dollars, a onetime down payment is required, and then fixed monthly payments are made for the remaining amount owed for the car. The equation 11,000 = 2,200 + 200t represents this situation, where <i>t</i> is the number of fixed monthly payments that are made. Which of the following is the best interpretation of 200 in this context?</div>`,
      options: [{ id: `A`, text: `The amount, in dollars, of the down payment` }, { id: `B`, text: `The amount, in dollars, of each fixed monthly payment` }, { id: `C`, text: `The total amount, in dollars, paid for the car after <i>t</i> fixed monthly payments` }, { id: `D`, text: `The total number of fixed monthly payments` }],
      answer: `B` },

    { id: `oib-math-m2-3`, domain: `Algebra`, skill: `Linear equations in two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>Line <i>k</i> is defined by y = 3x − 2. Line <i>j</i> is parallel to line <i>k</i> in the xy-plane and passes through the point (0, 1). Which equation defines line <i>j</i>?</div>`,
      options: [{ id: `A`, text: `y = x − 2` }, { id: `B`, text: `y = 3x + 1` }, { id: `C`, text: `y = −x − 2` }, { id: `D`, text: `y = −3x + 1` }],
      answer: `B` },

    { id: `oib-math-m2-4`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>How many solutions does the equation 5x + 3 = 5x have?</div>`,
      options: [{ id: `A`, text: `Zero` }, { id: `B`, text: `Exactly one` }, { id: `C`, text: `Exactly two` }, { id: `D`, text: `Infinitely many` }],
      answer: `A` },

    { id: `oib-math-m2-5`, domain: `Advanced Math`, skill: `Exponential functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>A model predicts that the population of a certain town was 5,000 in 2008. The model also predicts that each year for the next 5 years, the population <i>p</i> increased by 4% of the previous year's population. Which equation best represents this model, where <i>x</i> is the number of years after 2008, for x ≤ 5?</div>`,
      options: [{ id: `A`, text: `p = 0.96(5,000)<sup>x</sup>` }, { id: `B`, text: `p = 1.04(5,000)<sup>x</sup>` }, { id: `C`, text: `p = 5,000(0.96)<sup>x</sup>` }, { id: `D`, text: `p = 5,000(1.04)<sup>x</sup>` }],
      answer: `D` },

    { id: `oib-math-m2-6`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>A park rents beach umbrellas to visitors. The park earns revenue of 15 dollars for each beach umbrella they rent for the day. On Wednesday, the park earned 435 dollars in profit from renting beach umbrellas after paying daily expenses of 150 dollars. How many beach umbrellas did the park rent on Wednesday? (profit = total revenue − total expenses)</div>`,
      options: [{ id: `A`, text: `19` }, { id: `B`, text: `29` }, { id: `C`, text: `38` }, { id: `D`, text: `39` }],
      answer: `D` },

    { id: `oib-math-m2-7`, domain: `Advanced Math`, skill: `Equivalent expressions`, difficulty: `medium`, type: `mcq`,
      prompt: `<div style='text-align:center;margin-bottom:6px'>r = √(9w − 5)</div><div>The given equation relates the real numbers <i>r</i> and <i>w</i>, where w &gt; 5/9. Which equation correctly expresses <i>w</i> in terms of <i>r</i>?</div>`,
      options: [{ id: `A`, text: `w = √(−5r + 9)` }, { id: `B`, text: `w = √(9r − 5)` }, { id: `C`, text: `w = r<sup>2</sup>/9 + 5/9` }, { id: `D`, text: `w = r<sup>2</sup>/9 + 5` }],
      answer: `C` },

    { id: `oib-math-m2-8`, domain: `Geometry and Trigonometry`, skill: `Area and volume`, difficulty: `hard`, type: `mcq`,
      prompt: `<div>A hemisphere is half of a sphere. If a hemisphere has a radius of 83 inches, which of the following is closest to the volume, in cubic inches, of this hemisphere?</div>`,
      options: [{ id: `A`, text: `14,400` }, { id: `B`, text: `57,700` }, { id: `C`, text: `898,200` }, { id: `D`, text: `1,197,500` }],
      answer: `D` },

    { id: `oib-math-m2-9`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `hard`, type: `grid`,
      prompt: `<div>For a certain type of rope, the equation y = 900ax<sup>2</sup>, where <i>a</i> is a constant, gives the estimated breaking strength <i>y</i>, in pounds, of a rope with a circumference of <i>x</i> inches. Based on this equation, if a rope of this type has a circumference of 0.75 inches, it has an estimated breaking strength of 708.75 pounds. What is the estimated breaking strength, in pounds, of a rope of this type that has a circumference of 4.50 inches?</div>`,
      answer: [`25515`] },

    { id: `oib-math-m2-10`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `hard`, type: `mcq`,
      prompt: `<div>The function <i>h</i> is defined by h(x) = (x + p)(x − 4)(2x − 6), where <i>p</i> is a constant. In the xy-plane, the graph of y = h(x) passes through the point (−6, 0). What is the value of h(0)?</div>`,
      options: [{ id: `A`, text: `144` }, { id: `B`, text: `1` }, { id: `C`, text: `−6` }, { id: `D`, text: `−72` }],
      answer: `A` },

    { id: `oib-math-m2-11`, domain: `Algebra`, skill: `Linear inequalities in one or two variables`, difficulty: `hard`, type: `grid`,
      prompt: `<div>If x ≥ −8 represents all solutions to the inequality ax − 18 ≤ 14, where <i>a</i> is a constant, what is the greatest possible value of <i>a</i>?</div>`,
      answer: [`-4`] },

    { id: `oib-math-m2-12`, domain: `Algebra`, skill: `Systems of two linear equations in two variables`, difficulty: `hard`, type: `mcq`,
      prompt: `<div style='text-align:center;margin-bottom:2px'>5(3x) + 4(8y) = 16</div><div style='text-align:center;margin-bottom:6px'>−5(3x) + 4(8y) = 16</div><div>The solution to the given system of equations is (x, y). What is the value of 3x + 8y?</div>`,
      options: [{ id: `A`, text: `0.5` }, { id: `B`, text: `0.8` }, { id: `C`, text: `4` }, { id: `D`, text: `16` }],
      answer: `C` },

    { id: `oib-math-m2-13`, domain: `Problem-Solving and Data Analysis`, skill: `Percentages`, difficulty: `hard`, type: `grid`,
      prompt: `<div>For the positive quantities <i>h</i>, <i>j</i>, and <i>k</i>, 35% of <i>h</i> is equivalent to 49% of <i>j</i>, and <i>j</i> is equivalent to 45% of <i>k</i>. What percentage of <i>k</i> is <i>h</i>? (Disregard the % sign when entering your answer. For example, if your answer is 39%, enter 39)</div>`,
      answer: [`63`] },

    { id: `oib-math-m2-14`, domain: `Advanced Math`, skill: `Nonlinear equations in one variable and systems of equations`, difficulty: `hard`, type: `grid`,
      prompt: `<div style='text-align:center;margin-bottom:6px'>4x<sup>2</sup> + 19 = 32x + r</div><div>In the given equation, <i>r</i> is a constant. The equation has exactly one real solution. What is the value of <i>r</i>?</div>`,
      answer: [`-45`] },

    { id: `oib-math-m2-15`, domain: `Advanced Math`, skill: `Exponential functions`, difficulty: `hard`, type: `mcq`,
      prompt: `<div>For the function <i>f</i>, for every increase of 2 in the value of <i>x</i>, the value of f(x) increases by a factor of <i>c</i>, where <i>c</i> is a constant. Which of the following equivalent forms of function <i>f</i> displays the value of <i>c</i> as the base or the coefficient?</div>`,
      options: [{ id: `A`, text: `f(x) = 48(2)<sup>6x</sup>` }, { id: `B`, text: `f(x) = 48(8)<sup>2x</sup>` }, { id: `C`, text: `f(x) = 48(64)<sup>x</sup>` }, { id: `D`, text: `f(x) = 48(4,096)<sup>x/2</sup>` }],
      answer: `D` },

    { id: `oib-math-m2-16`, domain: `Geometry and Trigonometry`, skill: `Right triangles and trigonometry`, difficulty: `hard`, type: `grid`,
      prompt: `<svg viewBox="0 0 340 200" role="img" aria-label="figure" style="max-width:340px;width:100%;display:block;margin:6px auto"><line x1='20' y1='170' x2='320' y2='170' stroke='currentColor' stroke-width='1.6'/><line x1='320' y1='170' x2='320' y2='40' stroke='currentColor' stroke-width='1.6'/><line x1='20' y1='170' x2='320' y2='40' stroke='currentColor' stroke-width='1.6'/><line x1='95' y1='170' x2='95' y2='137.5' stroke='currentColor' stroke-width='1.4'/><polyline points='308,170 308,158 320,158' fill='none' stroke='currentColor' stroke-width='1'/><polyline points='83,170 83,158 95,158' fill='none' stroke='currentColor' stroke-width='1'/><text x='6' y='178' font-size='13' font-style='italic' fill='currentColor'>A</text><text x='80' y='133' font-size='13' font-style='italic' fill='currentColor'>B</text><text x='90' y='187' font-size='13' font-style='italic' fill='currentColor'>C</text><text x='325' y='42' font-size='13' font-style='italic' fill='currentColor'>D</text><text x='325' y='180' font-size='13' font-style='italic' fill='currentColor'>E</text><text x='34' y='149' font-size='11' fill='currentColor'>√61</text><text x='53' y='186' font-size='11' fill='currentColor'>6</text><text x='200' y='186' font-size='11' fill='currentColor'>18</text></svg><div class="tiny faint" style="text-align:center;margin:2px 0 8px">Note: Figure not drawn to scale.</div><div>In the figure shown, AB = √61 units, AC = 6 units, and CE = 18 units. What is the area, in square units, of triangle ADE?</div>`,
      answer: [`240`] },

    { id: `oib-math-m2-17`, domain: `Algebra`, skill: `Systems of two linear equations in two variables`, difficulty: `hard`, type: `grid`,
      prompt: `<svg viewBox="0 0 300 250" role="img" aria-label="line graph" style="max-width:340px;width:100%;display:block;margin:6px auto"><clipPath id="cp67695"><rect x="26.0" y="26.0" width="248.0" height="198.0"/></clipPath><line x1="26.0" y1="224.0" x2="26.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="57.0" y1="224.0" x2="57.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="88.0" y1="224.0" x2="88.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="119.0" y1="224.0" x2="119.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="150.0" y1="224.0" x2="150.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="181.0" y1="224.0" x2="181.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="212.0" y1="224.0" x2="212.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="243.0" y1="224.0" x2="243.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="274.0" y1="224.0" x2="274.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="224.0" x2="274.0" y2="224.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="202.0" x2="274.0" y2="202.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="180.0" x2="274.0" y2="180.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="158.0" x2="274.0" y2="158.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="136.0" x2="274.0" y2="136.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="114.0" x2="274.0" y2="114.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="92.0" x2="274.0" y2="92.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="70.0" x2="274.0" y2="70.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="48.0" x2="274.0" y2="48.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="26.0" x2="274.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="202.0" x2="274.0" y2="202.0" stroke="currentColor" stroke-width="1.4"/><line x1="243.0" y1="224.0" x2="243.0" y2="26.0" stroke="currentColor" stroke-width="1.4"/><text x="88.0" y="213.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">-10</text><text x="165.5" y="213.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">-5</text><text x="243.0" y="213.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">0</text><text x="239.0" y="150.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">5</text><text x="239.0" y="95.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">10</text><text x="239.0" y="40.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">15</text><g clip-path="url(#cp67695)"><line x1="26.0" y1="21.6" x2="274.0" y2="215.2" stroke="currentColor" stroke-width="1.9"/><circle cx="243.0" cy="191.0" r="2.6" fill="currentColor"/><circle cx="88.0" cy="70.0" r="2.6" fill="currentColor"/></g></svg><div>The graph of line <i>g</i> is shown in the xy-plane. Line <i>k</i> is defined by 165x + py = w, where <i>p</i> and <i>w</i> are constants. If line <i>k</i> is graphed in this xy-plane, resulting in the graph of a system of two linear equations, the system of two linear equations will have infinitely many solutions. What is the value of p + w?</div>`,
      answer: [`300`] },

    { id: `oib-math-m2-18`, domain: `Problem-Solving and Data Analysis`, skill: `Distributions and measures of center and spread`, difficulty: `hard`, type: `mcq`,
      prompt: `<div>Each of the following frequency tables represents a data set. Which of these frequency tables represents the data set with the smallest standard deviation?</div>`,
      options: [{ id: `A`, text: `<table style='border-collapse:collapse;margin:4px auto'><tr><td style='border:1px solid var(--border);padding:2px 12px'>Value</td><td style='border:1px solid var(--border);padding:2px 12px'>Frequency</td></tr><tr><td style='border:1px solid var(--border);padding:2px 12px;text-align:center'>5</td><td style='border:1px solid var(--border);padding:2px 12px;text-align:center'>0</td></tr><tr><td style='border:1px solid var(--border);padding:2px 12px;text-align:center'>6</td><td style='border:1px solid var(--border);padding:2px 12px;text-align:center'>10</td></tr><tr><td style='border:1px solid var(--border);padding:2px 12px;text-align:center'>7</td><td style='border:1px solid var(--border);padding:2px 12px;text-align:center'>55</td></tr><tr><td style='border:1px solid var(--border);padding:2px 12px;text-align:center'>8</td><td style='border:1px solid var(--border);padding:2px 12px;text-align:center'>10</td></tr><tr><td style='border:1px solid var(--border);padding:2px 12px;text-align:center'>9</td><td style='border:1px solid var(--border);padding:2px 12px;text-align:center'>0</td></tr></table>` }, { id: `B`, text: `<table style='border-collapse:collapse;margin:4px auto'><tr><td style='border:1px solid var(--border);padding:2px 12px'>Value</td><td style='border:1px solid var(--border);padding:2px 12px'>Frequency</td></tr><tr><td style='border:1px solid var(--border);padding:2px 12px;text-align:center'>5</td><td style='border:1px solid var(--border);padding:2px 12px;text-align:center'>11</td></tr><tr><td style='border:1px solid var(--border);padding:2px 12px;text-align:center'>6</td><td style='border:1px solid var(--border);padding:2px 12px;text-align:center'>17</td></tr><tr><td style='border:1px solid var(--border);padding:2px 12px;text-align:center'>7</td><td style='border:1px solid var(--border);padding:2px 12px;text-align:center'>19</td></tr><tr><td style='border:1px solid var(--border);padding:2px 12px;text-align:center'>8</td><td style='border:1px solid var(--border);padding:2px 12px;text-align:center'>17</td></tr><tr><td style='border:1px solid var(--border);padding:2px 12px;text-align:center'>9</td><td style='border:1px solid var(--border);padding:2px 12px;text-align:center'>11</td></tr></table>` }, { id: `C`, text: `<table style='border-collapse:collapse;margin:4px auto'><tr><td style='border:1px solid var(--border);padding:2px 12px'>Value</td><td style='border:1px solid var(--border);padding:2px 12px'>Frequency</td></tr><tr><td style='border:1px solid var(--border);padding:2px 12px;text-align:center'>5</td><td style='border:1px solid var(--border);padding:2px 12px;text-align:center'>15</td></tr><tr><td style='border:1px solid var(--border);padding:2px 12px;text-align:center'>6</td><td style='border:1px solid var(--border);padding:2px 12px;text-align:center'>15</td></tr><tr><td style='border:1px solid var(--border);padding:2px 12px;text-align:center'>7</td><td style='border:1px solid var(--border);padding:2px 12px;text-align:center'>15</td></tr><tr><td style='border:1px solid var(--border);padding:2px 12px;text-align:center'>8</td><td style='border:1px solid var(--border);padding:2px 12px;text-align:center'>15</td></tr><tr><td style='border:1px solid var(--border);padding:2px 12px;text-align:center'>9</td><td style='border:1px solid var(--border);padding:2px 12px;text-align:center'>15</td></tr></table>` }, { id: `D`, text: `<table style='border-collapse:collapse;margin:4px auto'><tr><td style='border:1px solid var(--border);padding:2px 12px'>Value</td><td style='border:1px solid var(--border);padding:2px 12px'>Frequency</td></tr><tr><td style='border:1px solid var(--border);padding:2px 12px;text-align:center'>5</td><td style='border:1px solid var(--border);padding:2px 12px;text-align:center'>18</td></tr><tr><td style='border:1px solid var(--border);padding:2px 12px;text-align:center'>6</td><td style='border:1px solid var(--border);padding:2px 12px;text-align:center'>14</td></tr><tr><td style='border:1px solid var(--border);padding:2px 12px;text-align:center'>7</td><td style='border:1px solid var(--border);padding:2px 12px;text-align:center'>11</td></tr><tr><td style='border:1px solid var(--border);padding:2px 12px;text-align:center'>8</td><td style='border:1px solid var(--border);padding:2px 12px;text-align:center'>14</td></tr><tr><td style='border:1px solid var(--border);padding:2px 12px;text-align:center'>9</td><td style='border:1px solid var(--border);padding:2px 12px;text-align:center'>18</td></tr></table>` }],
      answer: `A` },

    { id: `oib-math-m2-19`, domain: `Geometry and Trigonometry`, skill: `Circles`, difficulty: `hard`, type: `mcq`,
      prompt: `<div style='text-align:center;margin-bottom:6px'>x<sup>2</sup> − 4x + y<sup>2</sup> − 8y − 80 = 0</div><div>In the xy-plane, the graph of the given equation is a circle. If this circle is inscribed in a square, what is the perimeter of the square?</div>`,
      options: [{ id: `A`, text: `20` }, { id: `B`, text: `40` }, { id: `C`, text: `80` }, { id: `D`, text: `320` }],
      answer: `C` },

    { id: `oib-math-m2-20`, domain: `Algebra`, skill: `Systems of two linear equations in two variables`, difficulty: `hard`, type: `mcq`,
      prompt: `<div style='text-align:center;margin-bottom:6px'>7x + 5y = 2</div><div>The given equation is one equation in a system of two linear equations. If the system of equations has at least one solution, which of the following equations could be the other equation in the system?</div><div style='margin-top:6px'>I. 10.5x + 7.5y = 3<br>II. 10.5x − 7.5y = 3</div>`,
      options: [{ id: `A`, text: `I only` }, { id: `B`, text: `II only` }, { id: `C`, text: `I and II` }, { id: `D`, text: `Neither I nor II` }],
      answer: `C` },

    { id: `oib-math-m2-21`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `hard`, type: `mcq`,
      prompt: `<div>The function <i>f</i> is defined by f(x) = ax<sup>2</sup> + bx + c, where <i>a</i>, <i>b</i>, and <i>c</i> are constants. The graph of y = f(x) in the xy-plane passes through the points (8, 0) and (−2, 0). If <i>a</i> is an integer greater than 1, which of the following could be the value of a + b?</div>`,
      options: [{ id: `A`, text: `−10` }, { id: `B`, text: `−5` }, { id: `C`, text: `6` }, { id: `D`, text: `7` }],
      answer: `A` },

    { id: `oib-math-m2-22`, domain: `Problem-Solving and Data Analysis`, skill: `Ratios, rates, proportional relationships, and units`, difficulty: `hard`, type: `mcq`,
      prompt: `<div>An object's speed is increasing at a rate of 2.7 meters per second squared. What is this rate, in miles per minute squared, rounded to the nearest tenth? (Use 1 mile = 1,609 meters.)</div>`,
      options: [{ id: `A`, text: `0.1` }, { id: `B`, text: `6` }, { id: `C`, text: `72.4` }, { id: `D`, text: `595.9` }],
      answer: `B` },
  ];

  Apex.bank.register({
    id: "dsat-2024-10-int-b",
    title: "October 2024",
    type: "digital",
    region: "International",
    version: "B",
    year: 2024,
    monthNum: 10,
    tagline: "International · Version B",
    description: "Digital SAT — October 2024 International prediction form, Version B (RW reordered into official SAT test order; math ordered easy to hard).",
    adaptive: false,
    sections: [
      { id: "rw", modules: [
        { id: "oib-rw-m1", stage: 1, name: "Reading and Writing — Module 1", minutes: 32, questions: RW_M1 },
        { id: "oib-rw-m2", stage: 2, variant: "hard", name: "Reading and Writing — Module 2 (Hard)", minutes: 32, questions: RW_M2 },
      ] },
      { id: "math", modules: [
        { id: "oib-math-m1", stage: 1, name: "Math — Module 1", minutes: 35, calculator: true, questions: MATH_M1 },
        { id: "oib-math-m2", stage: 2, variant: "hard", name: "Math — Module 2 (Hard)", minutes: 35, calculator: true, questions: MATH_M2 },
      ] },
    ],
  });
})();
