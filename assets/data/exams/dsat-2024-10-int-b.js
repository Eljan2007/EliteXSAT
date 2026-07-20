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
      passage: `<p>Whether a French king such as Louis XII or Louis IV presided over a momentous reign or a quiet one, the course of that reign turned on questions of legitimacy; it thus cannot be grasped without also grasping the factors that let the king ______ his claim to the throne successfully.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `assert` }, { id: `B`, text: `annotate` }, { id: `C`, text: `reciprocate` }, { id: `D`, text: `disengage` }],
      answer: `A` },

    { id: `oib-rw-m1-3`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The Nobel Prize in Physics is frequently awarded to just one individual, as it was to Roger Penrose in 2020. Yet at times the committee chooses to honor work credited to two or three people, and in such cases the prize is awarded ______. In 2017, for example, Rainer Weiss counted among those recognized for &ldquo;the detection of gravitational waves.&rdquo;</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `retroactively` }, { id: `B`, text: `jointly` }, { id: `C`, text: `ceremoniously` }, { id: `D`, text: `reluctantly` }],
      answer: `B` },

    { id: `oib-rw-m1-4`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The following text is adapted from the 1895 poem “Ojistoh” by Emily Pauline Johnson, a Kanien'kehá:ka (Mohawk) writer also known as Tekahionwake.</p><p>I am Ojistoh, I am she, the wife<br>Of him whose name <u>breathes</u> bravery and life<br>And courage to the tribe who calls him chief.<br>I am Ojistoh, his white star, and he<br>Is land, and lake, and sky—and soul to me.</p>`,
      prompt: `As used in the text, what does the word “breathes” most nearly mean?`,
      options: [{ id: `A`, text: `Imparts` }, { id: `B`, text: `Renounces` }, { id: `C`, text: `Assents` }, { id: `D`, text: `Absorbs` }],
      answer: `A` },

    { id: `oib-rw-m1-5`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The cheetah can run astonishingly fast&mdash;reaching up to 112 kilometers per hour (km/hr)&mdash;yet it is still markedly slower than the peregrine falcon, which can dive at speeds of nearly 320 km/hr. That difference is largely ______ of the way the traits enabling flight place fewer limits on top speed than the traits suited to running over the open land do.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `a consequence` }, { id: `B`, text: `an objective` }, { id: `C`, text: `a repudiation` }, { id: `D`, text: `an explanation` }],
      answer: `A` },

    { id: `oib-rw-m1-6`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Though the novelist Corin Vale, who wrote <em>The Glass Orchard</em>, is far less widely known than the best-selling American authors of the last half century, admired figures have championed his work, among them the poet Elena March and the critic Harold Speer. In his afterword to Vale&rsquo;s novel <em>Threshold</em>, Speer praises its deft fusion of what the playwright Friedrich Schiller called the naive and sentimental modes&mdash;where Schiller held that a work must be either naive (bent on depicting reality) or sentimental (bent on developing ideas), <em>Threshold</em> shows that a single work can be both at once.</p>`,
      prompt: `Which choice best states the main purpose of the text?`,
      options: [{ id: `A`, text: `To argue that every piece of writing must fall into one of two categories.` }, { id: `B`, text: `To set a writer&rsquo;s work beside that of a poet who prized it.` }, { id: `C`, text: `To explain what led an author to write a certain book.` }, { id: `D`, text: `To offer a reason a literary critic admires a certain novel.` }],
      answer: `D` },

    { id: `oib-rw-m1-7`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Community science, in which professional scientists team up with amateur enthusiasts on a question, is frequently a productive and engaging way to do research. It can let people take part in conservation, kindle a young person&rsquo;s interest in science, and enlarge the pool of data a team can gather. The approach proved central to a study by the biologist Priya Sundaram and colleagues on how a moth&rsquo;s coloring relates to its choice of flower, drawing on reports from hundreds of students and residents across southern Idaho.</p>`,
      prompt: `Which choice best describes the overall structure of the text?`,
      options: [{ id: `A`, text: `It introduces the subject of a scientific study, notes the study&rsquo;s importance, and then reports the study&rsquo;s results.` }, { id: `B`, text: `It argues for a new way of doing scientific research, remarks on the public&rsquo;s view of it, and then shows how it was applied in a study.` }, { id: `C`, text: `It names a specific research approach, gives a few of its benefits, and then points to a study that used it.` }, { id: `D`, text: `It traces the rise of a kind of scientific collaboration, shows its use in one field, and then proposes future collaborative projects.` }],
      answer: `C` },

    { id: `oib-rw-m1-8`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The following text is adapted from Jerome K. Jerome's 1889 novel <i>Three Men in a Boat (To Say Nothing of the Dog)</i>.</p><p>We [people] are creatures of the sun. We love light and life. That is why we crowd into the towns and cities, and the country grows more and more deserted every year. In the sunlight—in the daytime, when Nature is alive and busy all around us, we like the open hill-sides and the deep woods well enough: but in the night, when our Mother Earth has gone to sleep, and left us waking, oh! the world seems so lonesome, and we get frightened, like children in a silent house. Then we sit and sob, and long for the gas-lit streets, and the sound of human voices, and the answering throb of human life.</p>`,
      prompt: `Which choice best states the main purpose of the text?`,
      options: [{ id: `A`, text: `To convey that living in crowded places can leave people feeling downcast.` }, { id: `B`, text: `To warn people not to write off the natural beauty of the countryside too readily.` }, { id: `C`, text: `To illustrate that most people, on the whole, favor country hillsides over certain features of towns and cities.` }, { id: `D`, text: `To set out the shared impulses that lead many people to choose life in a city.` }],
      answer: `D` },

    { id: `oib-rw-m1-9`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `medium`, type: `mcq`,
      passage: `<p>&ldquo;Chocolate&rdquo; is a loanword&mdash;a word that starts out in one tongue and is later taken up by another. It reached English along an indirect path from <em>chocolate</em>, the Spanish name for the sweet drink prepared from cacao. Spanish had in turn taken the term from Nahuatl, a language Indigenous to central Mexico, in which its early form is <em>xocolatl</em>. &ldquo;Tomato,&rdquo; too, is Indigenous in origin and made its way into English by way of Spanish, but here the ultimate source is once more Nahuatl, whose word for the plant is <em>tomatl</em>.</p>`,
      prompt: `The author makes which point about the Spanish language?`,
      options: [{ id: `A`, text: `It has taken words from Indigenous languages and also given words to them.` }, { id: `B`, text: `Its share of English vocabulary is roughly equal to the combined share from Indigenous languages.` }, { id: `C`, text: `It has acted as a channel through which Indigenous languages have shaped English.` }, { id: `D`, text: `It borrowed words from two Indigenous languages in about equal numbers.` }],
      answer: `C` },

    { id: `oib-rw-m1-10`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `hard`, type: `mcq`,
      passage: `<p>In a study by Sofia Herrera, Daniel Osei, and colleagues, residents of Cartagena, Colombia, and of Recife, Brazil, were asked about the parks in the cities where they live. Among the 284 respondents from Cartagena, 51.2% said they use the city&rsquo;s parks, while among the 902 respondents from Recife, only 33.9% said they do. Because the share of Cartagena respondents who reported having other sought-after amenities near their parks was far lower than the share among the Recife respondents, the wide gap in park use cannot be put down to Cartagena residents enjoying more access to desirable nonpark amenities close to their parks.</p>`,
      prompt: `Which choice best describes the main idea of the text?`,
      options: [{ id: `A`, text: `Although the study showed that Recife&rsquo;s parks are likelier to sit near other amenities than Cartagena&rsquo;s are, Cartagena has more amenities overall than Recife does.` }, { id: `B`, text: `The study&rsquo;s findings suggest that adding more amenities near city parks would probably raise park use in Cartagena but not in Recife.` }, { id: `C`, text: `The study&rsquo;s finding that a larger share of residents use parks in Cartagena than in Recife is partly due to there being more parks in Cartagena.` }, { id: `D`, text: `Even though a larger share of residents use the parks in Cartagena than in Recife, that gap does not stem from greater access to amenities near Cartagena&rsquo;s parks.` }],
      answer: `D` },

    { id: `oib-rw-m1-11`, domain: `Information and Ideas`, skill: `Command of Evidence (Quantitative)`, difficulty: `hard`, type: `mcq`,
      passage: `<div style='text-align:center;font-weight:600;font-size:12px;margin:2px 0'>Defensive Behavior and Breeding Traits of Selected Bird Species</div><table style='border-collapse:collapse;margin:6px auto'><tr><th style='border:1px solid var(--border);padding:3px 12px'>Scientific name</th><th style='border:1px solid var(--border);padding:3px 12px'>Common name</th><th style='border:1px solid var(--border);padding:3px 12px'>Uses broken-wing display?</th><th style='border:1px solid var(--border);padding:3px 12px'>Incubation length (days)</th><th style='border:1px solid var(--border);padding:3px 12px'>Who incubates</th><th style='border:1px solid var(--border);padding:3px 12px'>Most broods per year</th></tr><tr><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'><em>Mergus merganser</em></td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>common merganser</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>No</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>32</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>1 parent</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>1</td></tr><tr><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'><em>Limosa limosa</em></td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>black-tailed godwit</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>No</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>28</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>2 parents</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>1</td></tr><tr><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'><em>Anthus pratensis</em></td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>meadow pipit</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>Yes</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>13</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>1 parent</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>3</td></tr><tr><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'><em>Vanellus vanellus</em></td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>northern lapwing</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>Yes</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>15</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>2 parents</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>2</td></tr></table><p>In a wide-ranging review of the existing literature, Marta Ferreira and her team recorded how often the broken-wing display&mdash;a defensive act seen in <em>Charadrius hiaticula</em> (the ringed plover) and many other species&mdash;occurs across the class Aves. Finding the display recorded in 285 species from 52 families, the team took the behavior to have evolved on its own several times, and so looked at ecological and life-history traits thought to be tied to its appearance, among them traits bearing on reproductive investment and on future chances to reproduce. From that review the team concluded that ______</p>`,
      prompt: `Which choice most effectively uses data from the table to complete the conclusion?`,
      options: [{ id: `A`, text: `the chance for several broods, the number of incubating parents, and the length of incubation are equally tied to use of the broken-wing display.` }, { id: `B`, text: `the length of incubation and the chance for several broods show a stronger tie to the broken-wing display than the count of incubating parents does.` }, { id: `C`, text: `the broken-wing display shows up most often in species with fewer chances to breed in a year owing to longer incubation periods.` }, { id: `D`, text: `in species that have more than a single incubating parent, the broken-wing display tends to accompany longer incubation.` }],
      answer: `B` },

    { id: `oib-rw-m1-12`, domain: `Information and Ideas`, skill: `Command of Evidence (Textual)`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Water flowing around an obstruction throws off vortices (swirl patterns) of varying size; by sensing these vortices, a fish is able to gauge the size and the position of the obstruction ahead of it. Using models of three different head shapes&mdash;narrow (width small relative to length), intermediate, and wide (width large relative to length)&mdash;Rui Nakamura, Elsa Vogt, and Tomas Ibarra found that, for medium-sized vortices, the wide-headed fish were the least able to tell those vortices apart from ordinary turbulence in the surrounding water. On that basis, a second team has hypothesized that, under low-visibility conditions, wider-headed fish do worse than narrower-headed ones at picking out obstructions.</p>`,
      prompt: `Which finding, if true, would most directly support the second research team's hypothesis?`,
      options: [{ id: `A`, text: `In a low-visibility trial with obstructions that threw off medium-sized vortices, a study found that some individual banded houndsharks (<em>Triakis scyllium</em>), a relatively narrow-headed fish, ran into the obstructions more frequently than other individuals of the same fish did.` }, { id: `B`, text: `In a low-visibility trial with obstructions that threw off medium-sized vortices, a study found that the wider-headed suckermouth catfish (<em>Hypostomus plecostomus</em>) ran into obstructions more frequently than the narrower-headed banded houndshark (<em>Triakis scyllium</em>) did.` }, { id: `C`, text: `In a low-visibility trial with obstructions that threw off medium-sized vortices, a study found that the narrower-headed banded houndshark (<em>Triakis scyllium</em>) ran into the obstructions as frequently as the wider-headed suckermouth catfish (<em>Hypostomus plecostomus</em>) did.` }, { id: `D`, text: `In a low-visibility trial with obstructions that threw off medium-sized vortices, a study found that the suckermouth catfish (<em>Hypostomus plecostomus</em>), a relatively wide-headed fish, struck over half of the obstructions it faced.` }],
      answer: `B` },

    { id: `oib-rw-m1-13`, domain: `Information and Ideas`, skill: `Command of Evidence (Textual)`, difficulty: `medium`, type: `mcq`,
      passage: `<p><em>Cane</em>, published in 1923, is a novel by Jean Toomer. At one point in the book Toomer sets the narrator&rsquo;s outlook on life against that of Avey, the woman the narrator loves, writing, ______</p>`,
      prompt: `Which quotation from <i>Cane</i> most effectively illustrates the claim?`,
      options: [{ id: `A`, text: `“Avey was as silent as those great trees whose tops we looked down upon. She has always been like that. At least, to me.”` }, { id: `B`, text: `“A band in one of the buildings a fair distance off was playing a march. I wished they would stop. Their playing was like a tin spoon in one's mouth.”` }, { id: `C`, text: `“[Avey would] smile appreciation, but it was an impersonal smile, never for me.”` }, { id: `D`, text: `“As time went on, [Avey's] indifference to things began to pique me; I was ambitious. I left [our small hometown] earlier than she did.”` }],
      answer: `D`, pdOptions: true },

    { id: `oib-rw-m1-14`, domain: `Information and Ideas`, skill: `Command of Evidence (Quantitative)`, difficulty: `medium`, type: `mcq`,
      passage: `<div style="text-align:center;font-weight:600;font-size:12px;margin:2px 0">Share of Non-Hexagonal Cells in the Hives of Three Honeybee Species</div><table style="border-collapse:collapse;margin:6px auto"><tr><th style="border:1px solid var(--border);padding:3px 12px">Species</th><th style="border:1px solid var(--border);padding:3px 12px">5-sided cells (%)</th><th style="border:1px solid var(--border);padding:3px 12px">7-sided cells (%)</th><th style="border:1px solid var(--border);padding:3px 12px">8-sided cells (%)</th></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">black dwarf honeybee</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">2.4</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">2.3</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">0.1</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">dwarf honeybee</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">2.6</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">2.0</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">0.2</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">western honeybee</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">0.5</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">0.4</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">0.1</td></tr></table><p>A honeybee hive is built mostly of hexagonal (six-sided) cells, in which the queen lays her eggs. The cells holding worker eggs&mdash;which grow into nonreproductive workers&mdash;are smaller than the cells holding drone eggs, which grow into drones, though the difference varies by species. The size difference creates a building problem&mdash;sections of small cells are hard to join neatly to sections of large ones&mdash;and it grows worse as the difference widens. To bridge the gaps as they build, bees rely on cells with more or fewer than six sides. Studying hive structure, a student examines data on three species and concludes that ______</p>`,
      prompt: `Which choice most effectively uses data from the graph to complete the student's conclusion?`,
      options: [{ id: `A`, text: `the cells that hold worker eggs probably come closer in size to those holding drone eggs in the western honeybee&rsquo;s hives than in those of either the dwarf honeybee or the black dwarf honeybee.` }, { id: `B`, text: `the black dwarf honeybee and the western honeybee probably both set aside their eight-sided cells for drone eggs, whereas the dwarf honeybee likely uses seven-sided cells for them.` }, { id: `C`, text: `the western honeybee probably draws on many more cell shapes when it builds than either of the two dwarf species does.` }, { id: `D`, text: `the share of hexagonal cells is probably a touch lower in the western honeybee&rsquo;s hives than in those of either dwarf species.` }],
      answer: `A` },

    { id: `oib-rw-m1-15`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Paints and dyes get their color from pigments. Ocher, a mineral-based pigment, is used to make several colors, red among them; red ocher takes its color from iron oxide. Some pigments are instead plant-based, and plant-based pigments carry a high level of carbon. A 2023 study had archaeologists test the red pigment on ornamented beads that people of the Natufian culture had crafted roughly 15,000 years ago. On several of the beads, the pigment turned out to hold no iron at all but a high level of carbon. From that result, the researchers concluded that ______</p>`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `some of the beads studied were colored by the Natufian makers with plant-based pigments rather than with ocher.` }, { id: `B`, text: `the beadmakers probably turned to plants for pigment because ocher was hard to obtain.` }, { id: `C`, text: `the Natufian beadmakers favored plant-based pigments because such pigments are far brighter than mineral-based ones.` }, { id: `D`, text: `these particular Natufian beads are the oldest known instance of plant-based pigments used to decorate beads.` }],
      answer: `A` },

    { id: `oib-rw-m1-16`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Works by Amalia Mesa-Bains and Pepon Osorio appeared at the Smithsonian American Art Museum, in its show <em>Our America: The Latino Presence in American Art</em>. That 2013 exhibition honored the wide-ranging achievements ______ artists of Latin American heritage.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `of;` }, { id: `B`, text: `of:` }, { id: `C`, text: `of,` }, { id: `D`, text: `of` }],
      answer: `D` },

    { id: `oib-rw-m1-17`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The space shuttle <em>Discovery</em> roared off the launchpad on December 2, 1992, to begin Mission ______ seven days and seven hours in total, that mission ended when the shuttle touched down at Edwards Air Force Base in California.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `STS-53, lasting` }, { id: `B`, text: `STS-53, it lasted` }, { id: `C`, text: `STS-53 lasting` }, { id: `D`, text: `STS-53. Lasting` }],
      answer: `D` },

    { id: `oib-rw-m1-18`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `easy`, type: `mcq`,
      passage: `<p>Trade was central to the Majapahit Empire, which held sway across parts of Southeast Asia from about 1293 to 1527 CE. Its people ______ rice, salt, and dyewood to trade with neighboring societies. In return they took in prized goods, such as ceramics, silver, and glassware.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `are producing` }, { id: `B`, text: `produce` }, { id: `C`, text: `produced` }, { id: `D`, text: `will produce` }],
      answer: `C` },

    { id: `oib-rw-m1-19`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `<p>London&rsquo;s Globe Theatre is a reconstruction of the celebrated venue where many of Shakespeare&rsquo;s plays were first staged. In 1613, during a performance, a prop cannon ______ and set the Globe&rsquo;s thatched roof alight. No one was harmed, but within two hours the original Globe was gone.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `has malfunctioned` }, { id: `B`, text: `malfunctioned` }, { id: `C`, text: `will malfunction` }, { id: `D`, text: `malfunctions` }],
      answer: `B` },

    { id: `oib-rw-m1-20`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The Many Farms Chapter, 168,000 acres, is one of 110 such chapters within the Navajo ______ <em>Din&eacute; bizaad</em> (the language of the Navajo), it is known as <em>D&aacute;&rsquo;&aacute;k&rsquo;eh Halání</em>.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `Nation, in` }, { id: `B`, text: `Nation. In` }, { id: `C`, text: `Nation and in` }, { id: `D`, text: `Nation in` }],
      answer: `B` },

    { id: `oib-rw-m1-21`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>As a leading figure in the American Anti-Slavery Society during the mid-1800s, Charles L. Reason of ______ a central role in the movement to abolish slavery in the United States.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `Kentucky. Played` }, { id: `B`, text: `Kentucky: played` }, { id: `C`, text: `Kentucky; played` }, { id: `D`, text: `Kentucky played` }],
      answer: `D` },

    { id: `oib-rw-m1-22`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The leaning Garisenda Tower, which tilts a full four degrees, draws crowds in central Bologna. But measurements taken in 2023 revealed that the tower was rotating in a worrying way. ______ officials closed off the area around it so experts could look for ways to stabilize the twelfth-century structure.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `In comparison,` }, { id: `B`, text: `As a result,` }, { id: `C`, text: `For example,` }, { id: `D`, text: `Similarly,` }],
      answer: `B` },

    { id: `oib-rw-m1-23`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>A language that is no longer spoken by anyone is considered to be extinct. ______ the Umbrian language, once widely spoken across parts of central Italy, died out at around the first century BCE.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `Therefore,` }, { id: `B`, text: `Admittedly,` }, { id: `C`, text: `For example,` }, { id: `D`, text: `In conclusion,` }],
      answer: `C` },

    { id: `oib-rw-m1-24`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Researchers studying asteroid deflection have zeroed in on secondary bodies like S/2018 (2018 EB), a moonlet circling the near-Earth asteroid known as 2018 EB. NASA, in 2022, deliberately slammed a probe into one such body, the moonlet Dimorphos. ______ the orbital period of Dimorphos around the near-Earth asteroid Didymos shifted for good.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `In addition,` }, { id: `B`, text: `Specifically,` }, { id: `C`, text: `Consequently,` }, { id: `D`, text: `In comparison,` }],
      answer: `C` },

    { id: `oib-rw-m1-25`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `easy`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>Fossil specimens of dinosaurs are on display at science museums around the world.</li><li>Plenty of these specimens are given nicknames.</li><li>The Houston Museum of Natural Science in Houston, Texas, holds a dinosaur fossil specimen nicknamed Wyrex.</li><li>Wyrex lived toward the close of the Cretaceous, an age that came to an end over 65 million years ago.</li><li>It belongs to the genus <em>Tyrannosaurus</em>.</li></ul>`,
      prompt: `The student wants to provide an example of a dinosaur fossil specimen's nickname. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `Plenty of dinosaur fossil specimens carry nicknames, among them one held at a museum in Houston, Texas.` }, { id: `B`, text: `Fossil specimens of dinosaurs can be seen at museums around the world, and many of them are given nicknames.` }, { id: `C`, text: `Wyrex is the nickname of a <em>Tyrannosaurus</em> fossil specimen held at the Houston Museum of Natural Science in Houston, Texas.` }, { id: `D`, text: `A <em>Tyrannosaurus</em> fossil specimen dating to the close of the Cretaceous, over 65 million years ago, is held at the Houston Museum of Natural Science.` }],
      answer: `C` },

    { id: `oib-rw-m1-26`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>Given each year for outstanding work in mathematics, the Abel Prize is a highly distinguished honor.</li><li>Karen Uhlenbeck won the prize in 2019 for her foundational work in geometric analysis.</li><li>Robert Langlands won the prize in 2018 for a visionary program connecting number theory and representation theory.</li></ul>`,
      prompt: `The student wants to emphasize the order in which Manuel Blum and Raj Reddy won the A.M. Turing Award. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `Karen Uhlenbeck and Robert Langlands both won the Abel Prize, an award given for outstanding work in mathematics.` }, { id: `B`, text: `Robert Langlands won the Abel Prize in 2018; Karen Uhlenbeck won it later, in 2019.` }, { id: `C`, text: `In 2019, Karen Uhlenbeck won the Abel Prize for her foundational work in geometric analysis.` }, { id: `D`, text: `It was in 2018 that Robert Langlands won the Abel Prize.` }],
      answer: `B` },

    { id: `oib-rw-m1-27`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>At night, ships and other craft rely on the vital beams that lighthouses cast out to find their way.</li><li>Before automation, each lighthouse was run by a lighthouse keeper.</li><li>Ida Lewis was the keeper at Lime Rock Light in Rhode Island.</li><li>She held that post from 1857 to 1911.</li><li>Kate Walker was the keeper at Robbins Reef Light in New York.</li><li>She held that post from 1894 to 1919.</li></ul>`,
      prompt: `The student wants to emphasize the order in which the two lighthouse keepers began their careers. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `Ida Lewis stopped serving as a lighthouse keeper in 1911, whereas Kate Walker stopped in 1919.` }, { id: `B`, text: `Kate Walker took up the work of a lighthouse keeper only years after Ida Lewis had begun hers.` }, { id: `C`, text: `From 1857 to 1911, the nighttime waters of Rhode Island were safer to cross thanks to lighthouse keepers Kate Walker and Ida Lewis.` }, { id: `D`, text: `Before automation, lighthouse keepers like Ida Lewis and Kate Walker were vital to safe passage for watercraft.` }],
      answer: `B` },
    ];

  const RW_M2 = [
    { id: `oib-rw-m2-1`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>A good deal of research on income inequality carried out in the 2010s, despite its claims of worldwide scope, suffered from a narrow focus on a few prosperous nations across North America and Western Europe, owing in part to data gaps. Researchers would later ______ this weakness once they gained fresh access to banking records held in Asian and Eastern European nations, such as China and Hungary.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `mitigate` }, { id: `B`, text: `presuppose` }, { id: `C`, text: `validate` }, { id: `D`, text: `categorize` }],
      answer: `A` },

    { id: `oib-rw-m2-2`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `hard`, type: `mcq`,
      passage: `<p>A leading account of the Moon&rsquo;s origin, the &ldquo;giant impact&rdquo; theory, holds that a protoplanet named Theia struck the young Earth, hurling debris into orbit that over time gathered into the Moon. Theia itself long remained purely ______, but Qian Yuan and fellow researchers now say they have spotted fragments of the protoplanet deep in the lowest part of Earth&rsquo;s mantle.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `notional` }, { id: `B`, text: `spurious` }, { id: `C`, text: `veritable` }, { id: `D`, text: `desultory` }],
      answer: `A` },

    { id: `oib-rw-m2-3`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Political blogs with openly partisan leanings became a fixture of American media around the turn of the 2000s. Some commentators welcomed the trend, insisting that such blogs offered a refreshing candor that traditional news lacked; less ______ observers replied that these blogs tended toward ideological extremes that pushed political polarization to troubling levels.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `misanthropic` }, { id: `B`, text: `earnest` }, { id: `C`, text: `sanguine` }, { id: `D`, text: `recalcitrant` }],
      answer: `C` },

    { id: `oib-rw-m2-4`, domain: `Craft and Structure`, skill: `Text, Structure, and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `<p>During Rome&rsquo;s republican era, which drew to a close during the first century BCE, libraries belonged mostly to wealthy individuals who kept tight control over who could see their collections. Rome&rsquo;s first public library opened its doors in 28 BCE, soon joined by one that Emperor Augustus commissioned. As the modern scholar Bianca Ferraro observes, though, these two strands are less separate than they appear, since the emperor and the private owners alike saw their libraries as an extension of their personal patronage, only on vastly different scales.</p>`,
      prompt: `Which choice best states the main purpose of the text?`,
      options: [{ id: `A`, text: `To sketch how the public could use libraries across Rome&rsquo;s republican era.` }, { id: `B`, text: `To argue that Rome&rsquo;s early imperial leaders held too much sway over libraries.` }, { id: `C`, text: `To claim that ancient Rome&rsquo;s private libraries and its first public ones shared a basic likeness.` }, { id: `D`, text: `To cast doubt on the idea that private Roman libraries vanished during the first century BCE.` }],
      answer: `C` },

    { id: `oib-rw-m2-5`, domain: `Craft and Structure`, skill: `Text, Structure, and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The following text is from George Marion McClellan's 1895 poem “Eternity.”</p><p>My spirit swoons, and all my senses cry<br>For Ocean's breast and covering of the sky.<br>Rock me to sleep, ye waves, and outward bound,<br>Just let me drift far out from toil and care,<br>Where lapping of the waves shall be the sound,<br>Which mingled with the winds that gently bear<br>Me on between a peaceful sea and sky,<br>To make my soothing slumberous lullaby.</p>`,
      prompt: `Which choice best states the main purpose of the text?`,
      options: [{ id: `A`, text: `To express how deeply the speaker yearns for the ocean to bring on a sense of inner calm.` }, { id: `B`, text: `To set the pressures of the speaker&rsquo;s daily life against the calm of being lulled to sleep by the sea.` }, { id: `C`, text: `To show the growing intensity of the speaker&rsquo;s wish to escape lasting hardship by drifting on the ocean.` }, { id: `D`, text: `To justify the speaker&rsquo;s misgivings about drifting off across the ocean toward some quiet place.` }],
      answer: `A` },

    { id: `oib-rw-m2-6`, domain: `Craft and Structure`, skill: `Cross-Text Connections`, difficulty: `hard`, type: `mcq`,
      passage: `<p><b>Text 1</b></p><p>Across parts of Finland, the pine marten is a leading predator of the bank vole. The researcher Aino Virtanen and colleagues reported that once the predation pressure on bank voles briefly eased, vole numbers climbed sharply. The result illustrates a basic ecological <u>principle</u>: predators hold prey numbers in check.</p><p><b>Text 2</b></p><p>Mateo Rivas and colleagues found that keeping jaguars out of a site in the Pantanal, Brazil, where they usually hunt marsh deer had no meaningful effect on how many marsh deer there were. Many other predator-removal studies do report a rise in prey numbers, but those studies tend to focus on small, fast-breeding prey&mdash;birds, voles, rabbits&mdash;rather than large, slow-breeding prey like marsh deer, which may explain why their results differ from those of Rivas and colleagues.</p>`,
      prompt: `Based on the texts, the author of Text 2 would most likely agree with which statement about the “principle” mentioned in Text 1?`,
      options: [{ id: `A`, text: `It has some support in the evidence, but should not be taken as true in every case.` }, { id: `B`, text: `A few studies have challenged it, though their findings have not won wide acceptance.` }, { id: `C`, text: `It might apply to certain predators, though only because they happen to share particular physical traits.` }, { id: `D`, text: `It is plausible, yet many of the studies that back it suffer from flaws in method.` }],
      answer: `A` },

    { id: `oib-rw-m2-7`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Many artists linked with hyperpop, a style of electronic music that surfaced in the 2010s, follow the template refined by the American musician Laura Les, whose sound leans on driving beats and bold synthesizer parts. Yet the movement is far from uniform&mdash;the Venezuelan recording artist Arca, for one, folds Latin rhythms into her hyperpop tracks. Such variety is fostered in part by the streaming service Spotify, whose curated hyperpop playlist balances a common thread with room for difference.</p>`,
      prompt: `Which statement about Arca is best supported by the text?`,
      options: [{ id: `A`, text: `Some of her recordings follow the Laura Les template, while others break from it entirely.` }, { id: `B`, text: `She arrived at her distinctive sound on her own, apart from the other acts on Spotify&rsquo;s hyperpop playlist.` }, { id: `C`, text: `Her music departs from the usual hyperpop sound yet does not abandon it.` }, { id: `D`, text: `Her place on Spotify&rsquo;s hyperpop playlist spurred established artists to try stylistic experiments.` }],
      answer: `C` },

    { id: `oib-rw-m2-8`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `hard`, type: `mcq`,
      passage: `<p>The economist Adam Smith is celebrated for the image of the invisible hand&mdash;an image he is said to have used to lay out a sturdy account of how people, chasing their own economic interests, generate benefits for all. Note &ldquo;said&rdquo;: as the scholar Gavin Kennedy has shown, Smith uses the image just once in his economic writing&mdash;to make a narrow point about mercantilism, the day&rsquo;s reigning theory&mdash;and it drew little notice until certain twentieth-century economists, keen to lend their views a pedigree, made it a paradigm.</p>`,
      prompt: `Which choice best states the main idea of the text?`,
      options: [{ id: `A`, text: `Some twentieth-century economists gave Smith&rsquo;s image of the invisible hand a weight it lacks in Smith&rsquo;s own work, yet it remains a useful account of how people acting in self-interest produce benefits for all.` }, { id: `B`, text: `Smith&rsquo;s image of the invisible hand is often read as an account of how people acting in self-interest produce benefits for all, but he meant it as a subtle critique of mercantilism.` }, { id: `C`, text: `The fame of Smith&rsquo;s image of the invisible hand owes far less to the part it plays in Smith&rsquo;s own work than to the way certain later economists promoted it for ends of their own.` }, { id: `D`, text: `Though Smith is celebrated for his image of the invisible hand, it drew little notice until twentieth-century economists came to see it as a sturdy account that foreshadowed their own views.` }],
      answer: `C` },

    { id: `oib-rw-m2-9`, domain: `Information and Ideas`, skill: `Command of Evidence (Textual)`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The 1838 book <em>Memoirs of Elleanor Eldridge</em>, written by Elleanor Eldridge and Frances Harriet Whipple Green, dwells at one point on how deeply restful sleep can be for the young, the authors writing, ______</p>`,
      prompt: `Which quotation from <i>Memoirs of Elleanor Eldridge</i> most effectively illustrates the claim?`,
      options: [{ id: `A`, text: `“Let us, dear reader, remember the punishment of idle curiosity, as taught in the true and affecting history [named] ‘Blue Beard;’ and, striving to be content with the facts in the case, seek not to lift the veil, which the sensibility of true love, and feminine delicacy, have alike conspired to draw.”` }, { id: `B`, text: `“Then let no one turn with too much [fussiness] from the simple story of the humble Elleanor, though it may contain few, or none, of the thrilling charms of poetry and passion.”` }, { id: `C`, text: `“Blessed are the slumbers of the innocent! They are kindlier than balm, and they refresh and gladden the spirit of childhood, like ministerings from a better world.”` }, { id: `D`, text: `“Home is home, to the lowly as well as the great; and no rank, or color, destroys its sacred character, its power over the mind, and the affections.”` }],
      answer: `C`, pdOptions: true },

    { id: `oib-rw-m2-10`, domain: `Information and Ideas`, skill: `Command of Evidence (Textual)`, difficulty: `hard`, type: `mcq`,
      passage: `<p>In its earliest days, Earth is believed to have had a stagnant-lid tectonic setup, one in which the outer rocky shell (the lithosphere) stayed largely fixed and traded no material with the mantle below it. A team of researchers set out to date the shift from that setup to a plate-tectonic one, in which the outer shell splits into moving plates that let lithospheric and mantle material mingle freely. By studying the chemistry of lithospheric and mantle-derived rocks aged anywhere from 285 million to 3.8 billion years, the team placed the shift at about 3.2 billion years ago.</p>`,
      prompt: `Which finding, if true, would most directly support the researchers' conclusion?`,
      options: [{ id: `A`, text: `The older a lithospheric rock is, the more its chemistry resembles that of mantle-derived rock, and that link grows markedly stronger at about 3.2 billion years old.` }, { id: `B`, text: `Younger mantle-derived rocks&mdash;those under 3.2 billion years old&mdash;hold some material missing from older mantle rocks yet present in lithospheric rocks of the same age or older.` }, { id: `C`, text: `Rocks derived from the mantle and older than 3.2 billion years turn out to show far more compositional variety than do lithospheric rocks of the same age.` }, { id: `D`, text: `Of the rocks dated to more than 3.2 billion years old, far more are mantle-derived than lithospheric, while among rocks younger than that the reverse holds.` }],
      answer: `B` },

    { id: `oib-rw-m2-11`, domain: `Information and Ideas`, skill: `Command of Evidence (Quantitative)`, difficulty: `hard`, type: `mcq`,
      passage: `<div style='text-align:center;font-weight:600;font-size:12px;margin:2px 0'>Model vs. Participant Enjoyment Ratings: Correlation by Painting Style</div><table style='border-collapse:collapse;margin:6px auto'><tr><th style='border:1px solid var(--border);padding:3px 12px'>Participant</th><th style='border:1px solid var(--border);padding:3px 12px'>Abstract</th><th style='border:1px solid var(--border);padding:3px 12px'>Cubist</th></tr><tr><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>P6</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>0.43</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>0.27</td></tr><tr><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>P1</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>0.23</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>0.38</td></tr><tr><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>P5</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>0.20</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>0.07</td></tr></table><p>The neuroscientist Kiyohito Iigaya and colleagues built a computer model meant to gauge how much a person would enjoy a given artwork, rating it somewhere between 1 (meaning not at all) and 4 (meaning very much). They then had participants apply that same scale to a number of painting sets in various styles, then measured the correlation between the model&rsquo;s predicted ratings and the participants&rsquo; reported ones. Suppose P6 rated the abstract and the cubist paintings equally; the table&rsquo;s data then imply a prediction from the model&mdash;namely, that ______</p>`,
      prompt: `Which choice most effectively uses data from the graph to complete the example?`,
      options: [{ id: `A`, text: `for P6, the ratings given to abstract and to cubist paintings would come out equal.` }, { id: `B`, text: `for P6, the ratings given to abstract and to cubist paintings would come out unequal.` }, { id: `C`, text: `P6 would take less pleasure in the abstract works than in the cubist works.` }, { id: `D`, text: `P6 would take more pleasure in the abstract works than in the cubist works.` }],
      answer: `D` },

    { id: `oib-rw-m2-12`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Scholars are giving more and more attention to how ecological knowledge is passed on and preserved in Indigenous songs (for instance, Kazakh songs about water and where to forage, and songs of the O&rsquo;odham that name desert plants). One study, led by the ethnobiologist Dana Lepofsky and colleagues, drew on the knowledge of a song keeper for a coastal First Nation, learning from songs that tell of terraced beds the people built in the tidal zone to grow clams for food. Archaeological signs of a marked rise in clam size and numbers in that area, occurring alongside the recorded past use of the method the songs describe, support the conclusion that ______</p>`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `people from outside the community took up the practice after seeing how well it worked along that coast.` }, { id: `B`, text: `the practice used by the community&rsquo;s ancestors not only kept a food source going but also made it more plentiful.` }, { id: `C`, text: `the archaeological record backs the practices named in this First Nation&rsquo;s songs more strongly than those named in Kazakh and O&rsquo;odham songs.` }, { id: `D`, text: `though today&rsquo;s community members deeply understand and value the practices of their ancestors, they no longer carry them out.` }],
      answer: `B` },

    { id: `oib-rw-m2-13`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `<p>In 1974 the collective Asco, a group of Chicano artists, produced <em>Instant Mural</em> by taping two of its own members&mdash;Patssi Valdez and Humberto Sandoval&mdash;to an outdoor wall in East Los Angeles. Plainly the piece comments on constraint, yet many critics dwell on Valdez and the social limits women faced then&mdash;an understandable emphasis, but one that leaves the role of her male collaborator, Sandoval, unaddressed. We ought instead to recall that in 1974 the art world had long confined its recognition of Chicano artists to sociohistorical muralists, so that nonmuralist Chicano artists&mdash;Asco&rsquo;s members among them&mdash;could barely show their work; weighing that context opens a reading that fits all the evidence, letting us conclude that ______</p>`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `Valdez&rsquo;s presence in the piece points to the social limits then placed on women, while Sandoval&rsquo;s points to the resentment Chicano muralists felt at going unrecognized.` }, { id: `B`, text: `<em>Instant Mural</em> is best read less as a protest against the social limits then placed on women than as a protest against how sociohistorical muralists depicted Chicano culture.` }, { id: `C`, text: `the work centers on the double bind faced by female Chicano artists&mdash;constrained both by gender-role expectations and by the sidelining of certain kinds of art.` }, { id: `D`, text: `the piece reflects less on the social limits placed on women in particular than on the constraining aesthetic expectations that Chicano artists as a whole had to face.` }],
      answer: `D` },

    { id: `oib-rw-m2-14`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Even though what is now called the Cassegrain reflector was first built by Bonaventura Cavalieri, the telescope bears the name of the seventeenth-century French astronomer Laurent Cassegrain instead. It might seem that such cases&mdash;where a discovery or idea does not carry the name of whoever first reached it&mdash;would be ______ they belong instead to a long list of examples of Stigler&rsquo;s law.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `rare, on the contrary,` }, { id: `B`, text: `rare, on the contrary;` }, { id: `C`, text: `rare on the contrary,` }, { id: `D`, text: `rare; on the contrary,` }],
      answer: `D` },

    { id: `oib-rw-m2-15`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The 2019 group show <em>Black Refractions: Highlights from The Studio Museum in Harlem</em>, held at San Francisco&rsquo;s Museum of the African Diaspora, featured work by the celebrated artist Lorna Simpson, a figure best known for multimedia pieces that set images of African American women alongside spare snippets of text. Her work challenges familiar assumptions about race, gender, history, and ______ she has been widely credited with broadening what conceptual photographic art could be.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `memory, and` }, { id: `B`, text: `memory and` }, { id: `C`, text: `memory,` }, { id: `D`, text: `memory` }],
      answer: `A` },

    { id: `oib-rw-m2-16`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Aygun Hasanova is a novelist from Ganja, Azerbaijan, who has drawn wide international praise in recent years. Writers working in other genres&mdash;poetry or the stage, say&mdash;are less apt to be recognized beyond their own countries&rsquo; borders, though many are still well ______ Kanan Aliyev, for instance, is a celebrated playwright from Azerbaijan.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `known,` }, { id: `B`, text: `known:` }, { id: `C`, text: `known and` }, { id: `D`, text: `known` }],
      answer: `B` },

    { id: `oib-rw-m2-17`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Recent study of 2010 BL4&mdash;an outer-solar-system body circling between Jupiter and Neptune&mdash;has found its color to be gray, hinting at an icy makeup. Readings like this stay ultimately ______ the body&rsquo;s gray tint may be a side effect of radiation, of solar wind, or of collisions with other bodies rather than a clue to its composition.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `speculative, though;` }, { id: `B`, text: `speculative, though,` }, { id: `C`, text: `speculative; though` }, { id: `D`, text: `speculative, though` }],
      answer: `A` },

    { id: `oib-rw-m2-18`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Sei Sh&#333;nagon&rsquo;s <em>Pillow Book</em> includes a list called &ldquo;Splendid Things,&rdquo; in which the writer delights in grape-colored cloth, wisteria coiling round a tree, and a garden blanketed in snow. Sh&#333;nagon, a lady-in-waiting to Empress Teishi, observes so keenly that her reflections on court life in tenth-century Japan ______ readers a thousand years on.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `has fascinated` }, { id: `B`, text: `fascinate` }, { id: `C`, text: `is fascinating` }, { id: `D`, text: `fascinates` }],
      answer: `B` },

    { id: `oib-rw-m2-19`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Present-day Yerevan, Armenia, once served as the capital of the Armenian Soviet Socialist Republic, one of many nominally self-governing republics that made up the Soviet Union. Every one of those republics ______ drawn up along ethnolinguistic lines: most people of the Armenian Republic, for example, spoke Armenian.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `have been` }, { id: `B`, text: `are` }, { id: `C`, text: `was` }, { id: `D`, text: `were` }],
      answer: `C` },

    { id: `oib-rw-m2-20`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>When, in 2017, the Cambridge University students Lucy Moss and Toby Marlow resolved to write a musical of their own, one of their hopes was to hand their female actor friends meaty roles to perform. ______ the pair created <em>Six</em>, a show that retells the story of King Henry VIII&rsquo;s six wives, giving each queen a starring role.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `To that end,` }, { id: `B`, text: `In summary,` }, { id: `C`, text: `For example,` }, { id: `D`, text: `In other words,` }],
      answer: `A` },

    { id: `oib-rw-m2-21`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The prime meridian, the world&rsquo;s marker of zero degrees longitude fixed in 1884, was first set using coordinates worked out from astronomical observation. ______ as the decades passed, newer calculations kept yielding coordinates of ever greater precision, and yet the prime meridian stayed put; only in the 1980s, prompted by better geodetic data, was it officially shifted&mdash;about one hundred meters east.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `Specifically,` }, { id: `B`, text: `Again and again,` }, { id: `C`, text: `Granted,` }, { id: `D`, text: `To that end,` }],
      answer: `C` },

    { id: `oib-rw-m2-22`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>Astronomical bodies that orbit the Sun yet are neither planets nor comets are known as minor planets.</li><li>Over her career, the astronomer Jane Luu has turned up many minor planets.</li><li>Working with David C. Jewitt and Chadwick Trujillo, she spotted the minor planet (19308) 1996 TO66 on October 12, 1996.</li><li>Together with David C. Jewitt, Chadwick Trujillo, and David J. Tholen, she spotted the minor planet (24978) 1998 HJ151 on April 28, 1998.</li></ul>`,
      prompt: `Which choice most effectively uses information from the given sentences to emphasize the discovery of (19308) 1996 TO66 to an audience already familiar with Jane Luu?`,
      options: [{ id: `A`, text: `The first of the two, (19308) 1996 TO66, turned up in 1996; the second came two years later, in 1998, once David J. Tholen had joined the group.` }, { id: `B`, text: `Jane Luu had a hand in finding two minor planets: (19308) 1996 TO66, on October 12, 1996, and (24978) 1998 HJ151, on April 28, 1998.` }, { id: `C`, text: `Jane Luu, a celebrated astronomer, has to her name a long list of minor-planet discoveries, (19308) 1996 TO66 among them.` }, { id: `D`, text: `It was on October 12, 1996, that Jane Luu, working with David C. Jewitt and Chadwick Trujillo, turned up a thrilling find: the minor planet (19308) 1996 TO66.` }],
      answer: `D` },

    { id: `oib-rw-m2-23`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>Masatoshi Koshiba was a Japanese particle physicist.</li><li>Subatomic particles are the focus of particle physicists&rsquo; work.</li><li>Among the hardest of these to understand are neutrinos.</li><li>Neutrinos were first detected in the mid-twentieth century.</li><li>Koshiba is known for his research detecting cosmic neutrinos.</li></ul>`,
      prompt: `The student wants to provide an example of a particle physicist whose research focuses on neutrinos. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `Neutrinos are one variety of subatomic particle that physicists are still working hard to understand.` }, { id: `B`, text: `The particle physicist Masatoshi Koshiba is known for his research detecting cosmic neutrinos.` }, { id: `C`, text: `The research done on cosmic neutrinos shows the kind of work particle physicists do to deepen our grasp of subatomic particles.` }, { id: `D`, text: `Studying cosmic neutrinos is one way, among others, that particle physicists deepen their knowledge of these particles.` }],
      answer: `B` },

    { id: `oib-rw-m2-24`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `easy`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>The name supercontinent refers to a single landmass holding most or nearly all of Earth&rsquo;s continents.</li><li>Continents drift together into supercontinents over time and later break apart.</li><li>This cycle, thought to unfold over hundreds of millions of years, goes by the name the supercontinent cycle.</li><li>Kenorland, a supercontinent, took shape roughly 2.7 billion years ago.</li><li>Rodinia, another supercontinent, took shape roughly 1.1 billion years ago.</li></ul>`,
      prompt: `The student wants to emphasize the order in which the supercontinents were formed. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `The supercontinent Rodinia formed long after the supercontinent Kenorland.` }, { id: `B`, text: `Kenorland came together about 2.7 billion years ago and later broke apart.` }, { id: `C`, text: `Assembling and later splitting across immense stretches of time, supercontinents hold most or nearly all of Earth&rsquo;s continents.` }, { id: `D`, text: `Kenorland and Rodinia were both supercontinents&mdash;single landmasses holding most or nearly all of Earth&rsquo;s continents.` }],
      answer: `A` },

    { id: `oib-rw-m2-25`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li><em>Zeno at the Edge of the Known World</em> is a 1992 sculpture by the American artist Bruce Nauman.</li><li>It is a green neon sign spelling out a stream of words.</li><li><em>Cloud Study</em> is a 2015 sculpture by the British artist Cerith Wyn Evans.</li><li>It is a white neon sign in a loose, drifting shape.</li><li>Advertisers embraced neon signs in the 1920s but cooled on them by the 1960s.</li><li>Artists, by contrast, took up neon in the 1960s, and it remains a favorite of theirs today.</li></ul>`,
      prompt: `The student wants to emphasize a difference between the two sculptures. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `Cast into a run of words in <em>Zeno at the Edge of the Known World</em> (1992), a drifting form in <em>Cloud Study</em> (2015), and a sales pitch in decades gone by, neon lighting has taken on a range of uses.` }, { id: `B`, text: `Both sculptures are made of neon, yet one spells out words while the other stays decidedly abstract.` }, { id: `C`, text: `Nauman&rsquo;s sculpture dates to 1992 and Wyn Evans&rsquo;s to 2015, both well after neon signs had passed their advertising heyday.` }, { id: `D`, text: `The sculptures by Bruce Nauman and Cerith Wyn Evans put neon signs to different uses, showing how flexible the popular medium can be.` }],
      answer: `B` },

    { id: `oib-rw-m2-26`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>Art critics can take either of two broad approaches, formal analysis or contextual analysis.</li><li>Formal analysis looks at an artwork&rsquo;s visual elements, such as line, color, and composition.</li><li>Such an analysis of Piet Mondrian&rsquo;s <em>Broadway Boogie Woogie</em> might examine how its grid of colored squares creates a sense of rhythm.</li><li>Contextual analysis instead weighs the historical and cultural setting of the time in which an artwork was made.</li><li>Such an analysis of Diego Rivera&rsquo;s <em>Man at the Crossroads</em> might weigh how its imagery engaged the fierce political debates of the 1930s.</li></ul>`,
      prompt: `The student wants to present contextual analysis to an audience unfamiliar with the concept. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `A formal analysis of <em>Broadway Boogie Woogie</em> might examine how its grid of colored squares creates a sense of rhythm.` }, { id: `B`, text: `<em>Man at the Crossroads</em> and its imagery engaged the political debates of the 1930s in a way worth weighing.` }, { id: `C`, text: `Contextual analysis, one of the two approaches to art criticism, weighs the historical and cultural setting of an artwork&rsquo;s time.` }, { id: `D`, text: `What sets formal analysis apart from contextual analysis is its focus on an artwork&rsquo;s visual elements.` }],
      answer: `C` },

    { id: `oib-rw-m2-27`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>The stream length of a river measures the full distance along the winding line the river itself traces.</li><li>The valley length of a river measures the distance along a straight line from the river&rsquo;s start to its end.</li><li>A river&rsquo;s curviness, or its sinuosity, is found by dividing its stream length by its valley length.</li><li>Rivers of low sinuosity have a stream length 1 to 1.5 times their valley length; rivers of high sinuosity, 1.5 times or more.</li><li>The Kuskokwim River, in the United States, has a high sinuosity.</li><li>The Diamantina River in Australia has low sinuosity.</li></ul>`,
      prompt: `The student wants to compare the curviness of the two rivers. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `The high-sinuosity Diamantina River in Australia is curvier than the low-sinuosity Kuskokwim River in the United States.` }, { id: `B`, text: `The Kuskokwim River in the United States proves more sinuous than the Diamantina River in Australia, its channel straying further from a straight valley line.` }, { id: `C`, text: `Setting the stream lengths of the Kuskokwim and Diamantina rivers against their valley lengths lets one work out their curviness, or sinuosity.` }, { id: `D`, text: `In both the Kuskokwim and the Diamantina rivers, curviness comes from comparing stream length with valley length.` }],
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
