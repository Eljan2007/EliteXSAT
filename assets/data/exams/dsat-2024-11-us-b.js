/* ==========================================================================
   Digital SAT — November 2024 (US), Version B.
   Rebuilt in EliteXSAT's native UI from teacher-authored SAT-style prediction
   forms (2027 Prediction November USA). RW sorted into canonical Digital SAT
   domain order; Math ordered easy -> hard. Answers solved independently and
   verified against the official 6-version answer key (p099); the student's
   marked picks were treated as guides only. Cross-filled / conflicted items are
   noted in the build log (not shown to students). No explanations. COMPLETE (98 q). */
(function () {
  const RW_M1 = [
    { id: `nub-rw-m1-1`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `The following text is from Jhumpa Lahiri&rsquo;s 2003 novel <em>The Namesake</em>. Gogol, a child, is at a beach in Massachusetts with his father.<br><br>He watches his father raise a kite within minutes into the wind, so high that Gogol must <u>tip</u> his head back in order to see, a rippling speck against the sky. The wind whips around their ears, turning their faces cold.<br><br>&copy;2003 by Jhumpa Lahiri`,
      prompt: `As used in the text, what does the word &ldquo;tip&rdquo; most nearly mean?`,
      options: [{ id: `A`, text: `Lean` }, { id: `B`, text: `Create` }, { id: `C`, text: `Pay` }, { id: `D`, text: `Teach` }],
      answer: `A` },

    { id: `nub-rw-m1-2`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `The Chauvet Cave paintings&mdash;detailed paintings of animals found in what is now France and dating from 30,000&ndash;32,000 years ago&mdash;are thought of as art today, but how the people of the time understood the paintings is _____. They may have thought of the paintings as something akin to art in our modern sense, but it is entirely possible that they did not&mdash;we simply cannot say for certain.`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `unknown` }, { id: `B`, text: `unalterable` }, { id: `C`, text: `unsurprising` }, { id: `D`, text: `uncontroversial` }],
      answer: `A` },

    { id: `nub-rw-m1-3`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `hard`, type: `mcq`,
      passage: `Some ethicists challenge the concept of personal character, claiming that if it were meaningful, situational factors could not, as they clearly can, induce behavior contrary to that character. As Rachana Kamtekar observes, this argument is difficult to reconcile with our lay conception of character: we expect a person of helpful character to be frequently helpful, not _____ helpful.`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `unfailingly` }, { id: `B`, text: `self-servingly` }, { id: `C`, text: `grudgingly` }, { id: `D`, text: `sporadically` }],
      answer: `D` },

    { id: `nub-rw-m1-4`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `Some cities estimate where sidewalks are located using road maps, which is not very accurate. Maryam Hosseini and her team trained a computer program to identify sidewalks in aerial images of Manhattan and used it on images of Chicago. The program&rsquo;s performance was _____ to that of the road-map method: it more accurately identified sidewalks, and it even distinguished between concrete and brick.`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `changed` }, { id: `B`, text: `supportive` }, { id: `C`, text: `similar` }, { id: `D`, text: `superior` }],
      answer: `D` },

    { id: `nub-rw-m1-5`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `Literary production in the period after the Mexican Revolution (which lasted from 1910&ndash;1920) was _____, with writers like Octavio Paz contributing to the outpouring of poetry, fiction, essays, and more. Unfortunately, this flood of interesting writing can divert scholarly attention from the fascinating work of nineteenth-century figures like Guillermo Prieto.`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `occasional` }, { id: `B`, text: `inconsistent` }, { id: `C`, text: `disfavored` }, { id: `D`, text: `prolific` }],
      answer: `D` },

    { id: `nub-rw-m1-6`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `When people think of dinosaurs with feathers, they typically think of winged dinosaurs, such as the four-winged <em>Microraptor</em>. However, many dinosaurs that didn&rsquo;t have wings also had feathers on their bodies. <u>For instance, research indicates that the wingless, speedy <em>Ornithomimus</em> likely had feathers.</u>`,
      prompt: `Which choice best describes the function of the underlined sentence in the text as a whole?`,
      options: [{ id: `A`, text: `It explains the scientific debate about the finding discussed in the previous sentence.` }, { id: `B`, text: `It points out several weaknesses in the theory presented in the previous sentence.` }, { id: `C`, text: `It identifies the researchers who made the discovery mentioned in the previous sentence.` }, { id: `D`, text: `It provides a specific example of the dinosaurs described in the previous sentence.` }],
      answer: `D` },

    { id: `nub-rw-m1-7`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `Known for the albums <em>E.S.P.</em> and <em>&rsquo;Round About Midnight</em>, jazz trumpeter Miles Davis collaborated several times with pianist Gil Evans. Their 1958 adaptation of George Gershwin&rsquo;s opera <em>Porgy and Bess</em> bears little resemblance to the 1935 original. Davis and Evans felt no desire to please listeners expecting an exact duplication of the opera. They omitted parts, such as the aria &ldquo;I Got Plenty of Nuthin&rsquo;,&rdquo; and sometimes made only brief gestures toward Gershwin&rsquo;s melodies. But Davis and Evans&rsquo;s willingness to recompose Gershwin&rsquo;s work led to one of the most enduring albums in Davis&rsquo;s catalog.`,
      prompt: `Which choice best states the main purpose of the text?`,
      options: [{ id: `A`, text: `To summarize the history of a long collaboration between two artists` }, { id: `B`, text: `To describe how two artists transformed another artist&rsquo;s work` }, { id: `C`, text: `To explain why works of art most likely to be praised by critics are those that defy tradition` }, { id: `D`, text: `To present reasons why one work of art should be considered superior to another` }],
      answer: `B` },

    { id: `nub-rw-m1-8`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `hard`, type: `mcq`,
      passage: `The following text is from Julia Alvarez&rsquo;s 2000 novel <em>In the Name of Salom&eacute;</em>. Salom&eacute;, a poet, is hosting guests in the front parlor of her family home, and Ramona is her sister. A salon is a social gathering for the exploration of intellectual ideas.<br><br>It was evening when the two men got up to leave. T&iacute;a Ana had already come into the room several times to see if these guests had departed yet. The front parlor had always been her <u>special province</u>, as she used it for her little school. Now, every evening, it turned into Salom&eacute;&rsquo;s salon, as Ramona called it, and it was never in order for its transformation back to a classroom the following morning.<br><br>&copy;2000 by Julia Alvarez`,
      prompt: `Which choice best describes the function of the reference to the parlor as T&iacute;a Ana&rsquo;s &ldquo;special province&rdquo;?`,
      options: [{ id: `A`, text: `It conveys that T&iacute;a Ana feels honored that her classroom is used for important events.` }, { id: `B`, text: `It characterizes the room as a place where T&iacute;a Ana can go to escape social pressures.` }, { id: `C`, text: `It reveals that T&iacute;a Ana feels as if Salom&eacute; has betrayed her trust by allowing guests into a space she considers her own.` }, { id: `D`, text: `It introduces an idea that helps explain T&iacute;a Ana&rsquo;s apparent eagerness for Salom&eacute;&rsquo;s guests to leave the space.` }],
      answer: `D` },

    { id: `nub-rw-m1-9`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `easy`, type: `mcq`,
      passage: `Dandelions are a kind of weed found in North America. Although dandelions are unwelcome in gardens and on farms, weeds like this do provide some benefits. For example, they can be helpful to pollinators.`,
      prompt: `Which choice best states the main idea of the text?`,
      options: [{ id: `A`, text: `Some weeds can be beneficial.` }, { id: `B`, text: `A variety of plants grow in North America.` }, { id: `C`, text: `Removing weeds is a pleasant task.` }, { id: `D`, text: `Some gardening techniques may increase weed growth.` }],
      answer: `A` },

    { id: `nub-rw-m1-10`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `medium`, type: `mcq`,
      passage: `Optimal foraging theory (OFT) holds that animals&rsquo; foraging behaviors reflect cost-benefit trade-offs that vary by species and with dynamic ecological circumstances. One such circumstance is lunar intensity, which Rodrigo A. V&aacute;squez found to be negatively associated with foraging by olive grass mice but Deborah J. Curtis and colleagues found to be positively associated with foraging by mongoose lemurs. This discrepancy is explicable in terms of OFT: the lemurs&rsquo; greater reliance on vision means that higher lunar intensity benefits them more than it benefits the mice.`,
      prompt: `Information in the text best supports which statement about OFT?`,
      options: [{ id: `A`, text: `It tends to allow for a better understanding of the benefits of ecological circumstances than the costs of those circumstances.` }, { id: `B`, text: `It can account for observations of different species responding differently to similar ecological circumstances.` }, { id: `C`, text: `It can explain why some species act in accordance with cost-benefit trade-offs and others do not.` }, { id: `D`, text: `It may be weakened by the finding that the costs and benefits associated with a particular ecological circumstance vary by species.` }],
      answer: `B` },

    { id: `nub-rw-m1-11`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `medium`, type: `mcq`,
      passage: `<table style="border-collapse:collapse;margin:6px auto"><tr><th style="border:1px solid var(--border);padding:3px 12px">Industry</th><th style="border:1px solid var(--border);padding:3px 12px">Approximate total contribution by industry</th><th style="border:1px solid var(--border);padding:3px 12px">Number of people employed by industry</th><th style="border:1px solid var(--border);padding:3px 12px">Average contribution per employee by industry</th></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Accommodation/food services</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">$5,242,100,000</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">150,373</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">$34,861</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Retail</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">$10,738,800,000</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">179,208</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">$59,924</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Tribal economic activity</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">$7,312,400,000</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">51,674</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">$141,510</td></tr></table>The nearly forty tribes located in Oklahoma, including the Choctaw Nation and the Seminole Nation, operate numerous businesses, employ tens of thousands of people, and generate billions of dollars in revenue. A student in an economics class is researching the tribes&rsquo; collective activity as a single industry. The student wants to compare that industry&rsquo;s role in Oklahoma in 2017 with the roles of other industries in the state. Looking at a table with information about three industries, the student finds that compared with the other two industries, tribal economic activity _____`,
      prompt: `Which choice most effectively uses data from the table to complete the comparison?`,
      options: [{ id: `A`, text: `made the lowest total contribution by industry.` }, { id: `B`, text: `ranked highest in all three economic measures listed in the table.` }, { id: `C`, text: `made the highest average economic contribution per employee.` }, { id: `D`, text: `employed the same number of people as accommodation/food services.` }],
      answer: `C` },

    { id: `nub-rw-m1-12`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `medium`, type: `mcq`,
      passage: `<em>The Age of Innocence</em> is a 1920 novel by Edith Wharton set in 1870s New York City. In the novel, Newland Archer attends an opera. The narrator describes Newland&rsquo;s tendency to follow the social conventions dictated by other men of New York City society who are in the audience: _____`,
      prompt: `Which quotation from <em>The Age of Innocence</em> best illustrates the claim?`,
      options: [{ id: `A`, text: `&ldquo;Singly [the men around Newland] betrayed their inferiority; but grouped together they represented &lsquo;New York,&rsquo; and the habit of masculine solidarity made him accept their doctrine on all the issues called moral.&rdquo;` }, { id: `B`, text: `&ldquo;Newland Archer, leaning against the wall at the back of the club box [where his seat was], turned his eyes from the stage and scanned the opposite side of the house.&rdquo;` }, { id: `C`, text: `&ldquo;Newland Archer felt himself distinctly the superior of these chosen specimens of old New York gentility; he had probably read more, thought more, and even seen a good deal more of the world, than any other man of the number.&rdquo;` }, { id: `D`, text: `&ldquo;No expense had been spared on the setting, which was acknowledged to be very beautiful even by people who shared his acquaintance with the Old World.&rdquo;` }],
      answer: `A` },

    { id: `nub-rw-m1-13`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `<div style="text-align:center;font-weight:600;font-size:12px;margin:2px 0">Mean Body Mass of Birds Known to Perform Broken-Wing Display</div><table style="border-collapse:collapse;margin:6px auto"><tr><th style="border:1px solid var(--border);padding:3px 12px">Bird</th><th style="border:1px solid var(--border);padding:3px 12px">Mean body mass (grams)</th></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">pied-billed grebe</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">409</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">common ringed plover</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">60</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">common snipe</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">126</td></tr></table>One antipredator defense that the grey-headed lapwing uses to protect its nest and young chicks is called &ldquo;broken-wing display&rdquo;; this form of deceptive defense involves an adult bird pretending to be injured and unable to fly in order to distract an approaching predator. Broken-wing display has been documented in 285 bird species from 13 different avian orders. A student predicts that bird species with mean body masses greater than 150 grams do not use deceptive defenses because larger birds tend to be more effective than smaller birds at using aggressive defenses to protect nests from predators, making deceptive defenses unnecessary.`,
      prompt: `Which choice most effectively uses data from the table that weaken the student&rsquo;s prediction?`,
      options: [{ id: `A`, text: `The common ringed plover uses broken-wing display, but the pied-billed grebe does not.` }, { id: `B`, text: `The pied-billed grebe has a mean body mass of 409 grams and is known to perform broken-wing display.` }, { id: `C`, text: `The common snipe uses broken-wing display even though it is larger than the common ringed plover.` }, { id: `D`, text: `The common snipe and the common ringed plover both have a mean body mass under 150 grams and use broken-wing display.` }],
      answer: `B` },

    { id: `nub-rw-m1-14`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `Describing adverbs &ldquo;as damaging to a writer,&rdquo; novelist Graham Greene is one of several authors and literary critics who have recommended minimizing the use of adverbs, especially those ending in <em>-ly</em> (e.g., &ldquo;obediently&rdquo;), in works of fiction. To investigate the prevalence of <em>-ly</em> adverbs in novels, author and statistician Ben Blatt used natural language processing&mdash;machine learning technology that reads and interprets text&mdash;to calculate the rates at which these words occur in the novels of Ernest Hemingway, who was awarded the Nobel Prize in Literature in 1954. Blatt concluded that in Hemingway&rsquo;s oeuvre, there is a negative correlation between <em>-ly</em> adverb proliferation and perceived literary merit.`,
      prompt: `Which finding, if true, would most directly support Blatt&rsquo;s conclusion?`,
      options: [{ id: `A`, text: `Whereas Hemingway&rsquo;s acclaimed novel <em>The Sun Also Rises</em> has one of the lowest <em>-ly</em> adverb rates among Hemingway&rsquo;s works, F. Scott Fitzgerald&rsquo;s classic novel <em>The Great Gatsby</em> has the lowest <em>-ly</em> adverb rate among Fitzgerald&rsquo;s novels.` }, { id: `B`, text: `Whereas Hemingway used on average 80 <em>-ly</em> adverbs per 10,000 words in the 10 novels of Hemingway&rsquo;s that Blatt investigated, Toni Morrison, winner of the 1993 Nobel Prize in Literature, used on average 76 <em>-ly</em> adverbs per 10,000 words in her novels.` }, { id: `C`, text: `In his celebrated novel <em>A Farewell to Arms</em>, Hemingway used 67 <em>-ly</em> adverbs per 10,000 words, whereas 67% of celebrated authors&rsquo; novels that have fewer than 50 <em>-ly</em> adverbs per 10,000 words have been classified as great by critics.` }, { id: `D`, text: `In <em>The Sun Also Rises</em>, which is widely recognized as a literary masterpiece, Hemingway used 63 <em>-ly</em> adverbs per 10,000 words, whereas in his less-acclaimed novel <em>True at First Light</em>, Hemingway used 102 <em>-ly</em> adverbs per 10,000 words.` }],
      answer: `D` },

    { id: `nub-rw-m1-15`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `All stainless steel contains varying amounts of iron, carbon, and corrosion-inhibiting chromium. However, ferritic stainless steel, often used for cooking utensils, contains a higher percentage of chromium (at least 10.5%) than does austenitic stainless steel and a higher concentration of iron, which is responsible for its magnetic properties. Unlike ferritic stainless steel, austenitic stainless steel has a face-centered cubic crystalline structure resulting from the addition of nickel to the alloy. Austenitic stainless steel has two subtypes: the 200 series, often used for washing machines, and the 300 series, which has more nickel than the 200 series and is often used for mining and chemical equipment or compensators. Thus, stainless steel used to manufacture _____`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `cooking utensils will have greater magnetic properties than stainless steel used to manufacture mining and chemical equipment will.` }, { id: `B`, text: `mining and chemical equipment will have a concentration of chromium lower than 10.5%, while stainless steel used for washing machines will not.` }, { id: `C`, text: `cooking utensils will have a face-centered cubic crystalline structure.` }, { id: `D`, text: `compensators will likely have a similar crystalline structure to stainless steel used to manufacture cooking utensils.` }],
      answer: `A` },

    { id: `nub-rw-m1-16`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `hard`, type: `mcq`,
      passage: `While the ancient Celts&mdash;Iron Age peoples who inhabited parts of western and central Europe&mdash;weren&rsquo;t a single unified group, their art often featured common elements. These included intricate patterns of interlocking spiral lines, which often held symbolic _____ of birds, horses, and other animals; and inlaid enamel accents.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `significance; depictions` }, { id: `B`, text: `significance, depictions` }, { id: `C`, text: `significance. Depictions` }, { id: `D`, text: `significance: depictions` }],
      answer: `A` },

    { id: `nub-rw-m1-17`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `easy`, type: `mcq`,
      passage: `Paramaribo, with a population of roughly 250,000 people, _____ home to an impressive 47 percent of Suriname&rsquo;s total population.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `is` }, { id: `B`, text: `are` }, { id: `C`, text: `are being` }, { id: `D`, text: `have been` }],
      answer: `A` },

    { id: `nub-rw-m1-18`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `Robert B. Elliott was one of the nearly two thousand African Americans who won a public office during the Reconstruction era, the twelve-year period that followed the Civil War. A politician from South Carolina, _____`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `Elliott was elected to the US House of Representatives in 1870 by his constituents.` }, { id: `B`, text: `1870 was the year that Elliott was elected to the US House of Representatives by his constituents.` }, { id: `C`, text: `constituents of Elliott elected him to the US House of Representatives in 1870.` }, { id: `D`, text: `in 1870, his constituents elected Elliott to the US House of Representatives.` }],
      answer: `A` },

    { id: `nub-rw-m1-19`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `The small celestial body known as 2060 Chiron is expected to have a relatively short lifetime in the outer solar system. Within just a few million years, 2060 Chiron is likely to migrate into the inner solar system or be destroyed, according to _____ trajectory.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `astronomers modeling of the object&rsquo;s` }, { id: `B`, text: `astronomers&rsquo; modeling of the object&rsquo;s` }, { id: `C`, text: `astronomers modeling of the objects` }, { id: `D`, text: `astronomer&rsquo;s modeling of the object&rsquo;s` }],
      answer: `B` },

    { id: `nub-rw-m1-20`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `hard`, type: `mcq`,
      passage: `<em>Paxillus panuoides</em> fungi have a well-documented association with alder _____ is, symbiotic bonds between fungal hyphae and host tree roots&mdash;the organisms can create extensive nutrient exchange networks.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `trees, by forming mycorrhizal relations&mdash;that` }, { id: `B`, text: `trees by forming mycorrhizal relations, that` }, { id: `C`, text: `trees. By forming mycorrhizal relations&mdash;that` }, { id: `D`, text: `trees by forming mycorrhizal relations. That` }],
      answer: `C` },

    { id: `nub-rw-m1-21`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `hard`, type: `mcq`,
      passage: `Patricia Hampl&rsquo;s essay on &ldquo;terracette,&rdquo; a term referring to a series of terrace-like formations on a hillside, is just one of many essays included in <em>Home Ground: A Guide to the American _____ by Barry Lopez and Debra Gwartney, the book celebrates the rich language used to describe the landscape of North America.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `Landscape</em>, edited` }, { id: `B`, text: `Landscape</em> and edited` }, { id: `C`, text: `Landscape</em> edited` }, { id: `D`, text: `Landscape</em>. Edited` }],
      answer: `D` },

    { id: `nub-rw-m1-22`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `In 2005, notoriously shy American singer-songwriter Ray LaMontagne saw his life change with the success of his hit single &ldquo;Trouble.&rdquo; That year, he performed more than thirty live sets, including at Icahn Stadium in New York, United States, and Th&eacute;&acirc;tre Outremont in Montreal, Canada; _____ he&rsquo;d performed fewer than a dozen times in 2004.`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `often,` }, { id: `B`, text: `additionally,` }, { id: `C`, text: `on the other hand,` }, { id: `D`, text: `similarly,` }],
      answer: `C` },

    { id: `nub-rw-m1-23`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `Unlike in Bolivia, where members of the national legislature are elected by a proportional representation system, legislators in Malaysia are elected via a single-member plurality voting system. _____ candidates in Malaysia are elected when they receive a plurality (i.e., greatest number) of votes.`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `In other words,` }, { id: `B`, text: `Meanwhile,` }, { id: `C`, text: `That being said,` }, { id: `D`, text: `Moreover,` }],
      answer: `A` },

    { id: `nub-rw-m1-24`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `While researching a topic, a student has taken the following notes:<br><ul><li><em>Morning Haiku</em> (2010) is a book of poetry by African American poet Sonia Sanchez.</li><li>Each poem in the book is a sequence of haiku.</li><li>According to the book&rsquo;s publisher, Penguin Random House, the book &ldquo;celebrates the gifts of life and mourns the deaths of revered African American figures.&rdquo;</li><li>The poem &ldquo;5 haiku (for Brother Damu)&rdquo; is written as a sequence of five haiku.</li><li>The poem &ldquo;15 haiku (for Toni Morrison)&rdquo; is written as a sequence of fifteen haiku.</li></ul>`,
      prompt: `The student wants to contrast the number of haiku in each poem. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `The poems in <em>Morning Haiku</em> celebrate the lives or mourn the deaths of &ldquo;revered African American figures,&rdquo; according to the book&rsquo;s publisher, Penguin Random House.` }, { id: `B`, text: `The poem &ldquo;5 haiku (for Brother Damu)&rdquo; consists of five haiku, whereas the poem &ldquo;15 haiku (for Toni Morrison)&rdquo; consists of fifteen.` }, { id: `C`, text: `While &ldquo;5 haiku (for Brother Damu)&rdquo; is about activist Brother Damu, &ldquo;15 haiku (for Toni Morrison)&rdquo; is about writer Toni Morrison.` }, { id: `D`, text: `Both &ldquo;5 haiku (for Brother Damu)&rdquo; and &ldquo;15 haiku (for Toni Morrison)&rdquo; can be found in Sanchez&rsquo;s 2010 collection <em>Morning Haiku</em>.` }],
      answer: `B` },

    { id: `nub-rw-m1-25`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `While researching a topic, a student has taken the following notes:<br><ul><li>The Japanese Ministry of the Environment made a list of 100 soundscapes of Japan.</li><li>Each soundscape on the list was selected for its cultural significance to Japan.</li><li>The sound of the bell at Hikone Castle is on the list.</li><li>The sound of crickets on the banks of the Yodo River is on the list.</li></ul>`,
      prompt: `The student wants to indicate that both soundscapes are on the list. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `Each soundscape on the list, including the sound of the bell at Hikone Castle, was selected for its cultural significance to Japan.` }, { id: `B`, text: `The sound of crickets on the banks of the Yodo River is on the list.` }, { id: `C`, text: `Both the sound of the bell at Hikone Castle and the sound of crickets on the banks of the Yodo River are on the list.` }, { id: `D`, text: `The Japanese Ministry of the Environment made a list of 100 culturally significant soundscapes of Japan.` }],
      answer: `C` },

    { id: `nub-rw-m1-26`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `While researching a topic, a student has taken the following notes:<br><ul><li>The United States has designated more than 500 areas National Wildlife Refuges (NWRs).</li><li>Some NWRs were established specifically to protect endangered species.</li><li>The St. Johns NWR is a 6,255-acre area in Florida, on the Atlantic coast.</li><li>It was established to protect the endangered dusky seaside sparrow.</li><li>The Bitter Creek NWR is a 14,054-acre area in California, on the Pacific coast.</li><li>It was established to protect the endangered California condor.</li></ul>`,
      prompt: `The student wants to contrast the two NWRs. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `Some NWRs were established specifically to protect endangered species such as the California condor.` }, { id: `B`, text: `Both the St. Johns NWR and the Bitter Creek NWR were established to protect endangered species.` }, { id: `C`, text: `While the St. Johns NWR is in Florida, on the Atlantic coast, the Bitter Creek NWR is in California, on the Pacific coast.` }, { id: `D`, text: `The US has designated more than 500 areas NWRs, including the St. Johns NWR in Florida.` }],
      answer: `C` },

    { id: `nub-rw-m1-27`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `While researching a topic, a student has taken the following notes:<br><ul><li>A supercontinent is a single landmass made up of most or all of Earth&rsquo;s continents.</li><li>Over time, continents merge together to form supercontinents, which then break apart.</li><li>This process is believed to take hundreds of millions of years and is known as the supercontinent cycle.</li><li>Kenorland and Rodinia were supercontinents.</li><li>Kenorland formed about 2.6 billion years ago.</li><li>Rodinia formed about 1.1 billion years ago.</li></ul>`,
      prompt: `The student wants to specify when Kenorland formed. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `Long ago, the Earth was home to supercontinents like Kenorland and Rodinia.` }, { id: `B`, text: `The supercontinent Kenorland formed about 2.6 billion years ago.` }, { id: `C`, text: `Over hundreds of millions of years, the supercontinent cycle results in supercontinents forming and breaking apart.` }, { id: `D`, text: `Kenorland was a supercontinent, a single landmass made up of most or all of Earth&rsquo;s continents.` }],
      answer: `B` },
  ];

  const RW_M2 = [
    { id: `nub-rw-m2-1`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `Although Hawaiian literature is highly heterogeneous in many ways, it is also characterized by considerable thematic _____: scholars have drawn connections linking works by writers such as Anwei Skinsnes Law and Gary Pak to the traditional stories of the <em>K&#257;naka Maoli</em>, the Native Hawaiian people.`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `subtlety` }, { id: `B`, text: `sophistication` }, { id: `C`, text: `innovation` }, { id: `D`, text: `continuity` }],
      answer: `D` },

    { id: `nub-rw-m2-2`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `hard`, type: `mcq`,
      passage: `When discussing literary movements in the United States, scholars regularly characterize the works of Amos Bronson Alcott as especially representative of transcendentalism. The reasons for this characterization may seem _____, but linking Alcott with transcendentalism risks disregarding the subtleties in his style that do not neatly conform to the conventions of this literary movement.`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `pretentious` }, { id: `B`, text: `provocative` }, { id: `C`, text: `incongruous` }, { id: `D`, text: `irrefutable` }],
      answer: `D` },

    { id: `nub-rw-m2-3`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `hard`, type: `mcq`,
      passage: `The sloping tile roofs and picturesque fa&ccedil;ade of Mission San Luis Rey de Francia in Oceanside, California, exemplify the Spanish contribution to Californian architecture, an influence that is _____ throughout the state&mdash;architectural tourists visiting the Santa Fe Depot in San Diego, for example, can easily recognize how its style draws inspiration from the Spanish missions.`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `corroborated` }, { id: `B`, text: `understated` }, { id: `C`, text: `disputed` }, { id: `D`, text: `palpable` }],
      answer: `D` },

    { id: `nub-rw-m2-4`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `hard`, type: `mcq`,
      passage: `In 2013 Bridie J.M. Allan and colleagues published a study concluding that ocean acidification has a strong effect on the behavior of <em>Pomacentrus amboinensis</em>, a species of fish. However, Allan and colleagues&rsquo; study relied on a mean sample size of only about 18 fish. In a 2022 review of various scientists&rsquo; conclusions about the impacts of ocean acidification on fish behavior, Timothy D. Clark and colleagues caution that relying on such a relatively small sample size can increase the potential for biased analysis. <u>Such analysis, in turn, can contribute to reports of exaggerated effects.</u>`,
      prompt: `Which choice best describes the function of the underlined sentence in the text as a whole?`,
      options: [{ id: `A`, text: `It summarizes a shift in scientists&rsquo; understanding of how <em>Pomacentrus amboinensis</em> has responded to ocean acidification.` }, { id: `B`, text: `It emphasizes the magnitude of the effect reported by Allan and colleagues of ocean acidification on <em>Pomacentrus amboinensis</em>.` }, { id: `C`, text: `It counters the objection of Clark and colleagues to studies that rely on relatively small sample sizes.` }, { id: `D`, text: `It elaborates on a potential consequence of Allan and colleagues&rsquo; reliance on a relatively small sample size.` }],
      answer: `D` },

    { id: `nub-rw-m2-5`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `medium`, type: `mcq`,
      passage: `<em>Dubautia menziesii</em> is a species in a family of plants known collectively as the silversword alliance, all of which grow only on the Hawaiian Islands. Members of this alliance exhibit an extraordinary range of phenotypes, with some species maturing into vines and others into shrubs and trees. All species in the alliance descended from a single ancestral tarweed plant that arrived on the islands around 5 million years ago. The tarweed&rsquo;s descendants diversified into distinct species as they adapted to live in the wide variety of habitats found on the Hawaiian Islands.`,
      prompt: `Which choice best states the main purpose of the text?`,
      options: [{ id: `A`, text: `To describe the silversword alliance and explain how the plant family became so varied` }, { id: `B`, text: `To describe the specific habitat where <em>Dubautia menziesii</em> are found and identify other plants that share a common ancestor with them` }, { id: `C`, text: `To indicate the specific tarweed ancestor of all plants that grow on the Hawaiian Islands and explain why the plants have such varied physical characteristics` }, { id: `D`, text: `To advance the claim that all plants on the Hawaiian Islands are part of the silversword alliance and list possible ancestors of the plants that make up the alliance` }],
      answer: `A` },

    { id: `nub-rw-m2-6`, domain: `Craft and Structure`, skill: `Cross-Text Connections`, difficulty: `medium`, type: `mcq`,
      passage: `<strong>Text 1</strong><br>One challenge faced by researchers studying global urbanization is that countries may define urban settlements differently. Many countries define urban settlements based on the number of people living in them. However, countries do not all use the same number; for example, Iceland uses a minimum population of 200, while the Netherlands uses 20,000. Other countries use a combination of population and other factors. This variation makes it difficult for researchers to compare aspects of urbanization in different countries.<br><br><strong>Text 2</strong><br>Recently, a group of six international organizations developed global definitions of common types of settlements. The group developed a new measure called the &ldquo;degree of urbanization.&rdquo; This new measure establishes global criteria used to define three types of settlements (cities, towns, and rural areas) and allows researchers to better understand global urbanization rates.`,
      prompt: `Based on the texts, how would the author of Text 2 most likely respond to the problem presented in Text 1?`,
      options: [{ id: `A`, text: `By recommending that a specific institution should further investigate the problem` }, { id: `B`, text: `By suggesting that researchers focus on topics besides urbanization` }, { id: `C`, text: `By noting that a possible solution to the problem is available` }, { id: `D`, text: `By supplying additional ways in which urbanization research is difficult` }],
      answer: `C` },

    { id: `nub-rw-m2-7`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `Mauricio Drelichman and Hans-Joachim Voth&rsquo;s research on the fiscal vulnerability of Philip II (who ruled not only Spain but other regions including much of Belgium from 1556 to 1598) builds on other studies of European early modern state finance, including Hoffman and Norberg&rsquo;s work on the relationship between state finance and political development. But Drelichman and Voth&rsquo;s unique contribution is their reconstruction of the earliest extant set of annual fiscal records for any sovereign state, which demonstrate that Philip&rsquo;s defaults were caused by short-term liquidity crises, not long-term unsustainable debts.`,
      prompt: `What does the text most strongly suggest about the value of Drelichman and Voth&rsquo;s research to their discipline?`,
      options: [{ id: `A`, text: `Drelichman and Voth&rsquo;s research revealed the role of Philip II&rsquo;s debt defaults in exacerbating short-term liquidity crises.` }, { id: `B`, text: `Drelichman and Voth&rsquo;s research uses newly compiled evidence to eliminate one possible reason Philip II defaulted on his debts and to affirm another.` }, { id: `C`, text: `Drelichman and Voth&rsquo;s research builds on earlier work about a particular aspect of European early modern state finance by Hoffman and Norberg and corrects errors in that earlier work.` }, { id: `D`, text: `Drelichman and Voth&rsquo;s research presented a novel body of evidence supporting Hoffman and Norberg&rsquo;s hypothesis regarding why Philip II defaulted on several loans.` }],
      answer: `B` },

    { id: `nub-rw-m2-8`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `Veronica L. Bura, Akito Y. Kawahara, and Jayne E. Yack investigated the evolution and function of sound production in silk moth and hawk moth caterpillars. They found that during harmless simulated attacks on caterpillars, 33% of the tested species produced sound, which ranged from clicks in <em>Antheraea polyphemus</em> to chirps in <em>Schausiella santarosensis</em>. A second research team has claimed that caterpillars use these sounds primarily to communicate with other members of their species.`,
      prompt: `Which finding, if true, would most directly challenge the second team&rsquo;s claim?`,
      options: [{ id: `A`, text: `The sounds caterpillars produced in response to the simulated attacks lacked acoustic characteristics that would make them audible to bats, lizards, or birds, some of the most frequent predators of caterpillars.` }, { id: `B`, text: `Most of the caterpillar species that were found to not produce sound in response to simulated attacks have been observed producing sound during encounters with other members of their species.` }, { id: `C`, text: `Among the caterpillar species that produced sound in response to simulated attacks, no individuals produced sound in the minute before the attacks, but the vast majority of individuals produced sound once the simulated attacks began.` }, { id: `D`, text: `Caterpillars that were found to produce sounds in response to simulated attacks are typically solitary and were tested in isolation.` }],
      answer: `D` },

    { id: `nub-rw-m2-9`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `Apple&rsquo;s introduction of the Apple Watch in 2015 is a quintessential instance of brand extension&mdash;the company leveraged its brand recognition as a computer manufacturer to enter a product category where it had not previously competed. An outstanding question is whether perceived category similarity predicts consumers&rsquo; likelihood of purchasing brand extensions. To answer this question, Alicia Grasby et al. identified 30 extended-brand pairs (e.g., the same brand of cooking oil and butter) in 52 weeks of purchases by approximately 60,000 households and, for each pair, calculated the change in probability of a brand in one category being purchased if the same brand was purchased in the other category.`,
      prompt: `Which choice describes a step that would best allow the researchers to investigate whether perceived category similarity predicts consumers&rsquo; likelihood of purchasing brand extensions?`,
      options: [{ id: `A`, text: `Have a representative sample of the households rate the similarity of the products in the same category, then determine how, if at all, those ratings correlate with the change in probability that the team calculated for each pair.` }, { id: `B`, text: `Poll a representative sample of the households to determine the degree of brand recognition for each brand in the extended-brand pairs, then determine how, if at all, the degree of brand recognition correlates with the frequency with which a different group of households purchased at least one product of that brand.` }, { id: `C`, text: `Have a representative sample of the households rate the similarity of the product categories in each extended-brand pair, then determine how, if at all, those ratings correlate with the change in probability that the team calculated for each pair.` }, { id: `D`, text: `Poll a representative sample of the households to determine the degree of brand recognition of each brand in the extended-brand pairs, then determine how, if at all, the degree of brand recognition correlates with the average cost of each product in the pairs.` }],
      answer: `C` },

    { id: `nub-rw-m2-10`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `medium`, type: `mcq`,
      passage: `<svg viewBox="0 0 470 378" role="img" aria-label="figure" style="max-width:340px;width:100%;display:block;margin:6px auto"><line x1='60' y1='30' x2='60' y2='300' stroke='var(--fg)' stroke-width='1.5'/><line x1='60' y1='300' x2='430' y2='300' stroke='var(--fg)' stroke-width='1.5'/><g stroke='var(--border)' stroke-width='1'><line x1='60' y1='232.5' x2='430' y2='232.5'/><line x1='60' y1='165' x2='430' y2='165'/><line x1='60' y1='97.5' x2='430' y2='97.5'/><line x1='60' y1='30' x2='430' y2='30'/></g><g fill='var(--fg)' font-size='11' text-anchor='end'><text x='54' y='304'>0</text><text x='54' y='236'>0.1</text><text x='54' y='169'>0.2</text><text x='54' y='101'>0.3</text><text x='54' y='34'>0.4</text></g><g stroke='var(--fg)' stroke-width='1'><rect x='110' y='165' width='24' height='135' fill='var(--fg)' fill-opacity='0.55'/><rect x='138' y='131' width='24' height='169' fill='var(--fg)' fill-opacity='0.25'/><rect x='166' y='192' width='24' height='108' fill='var(--fg)' fill-opacity='1'/><rect x='270' y='253' width='24' height='47' fill='var(--fg)' fill-opacity='0.55'/><rect x='298' y='57' width='24' height='243' fill='var(--fg)' fill-opacity='0.25'/><rect x='326' y='91' width='24' height='209' fill='var(--fg)' fill-opacity='1'/></g><g fill='var(--fg)' font-size='12' text-anchor='middle'><text x='150' y='317'>Abstract</text><text x='310' y='317'>Cubist</text><text x='245' y='339'>Painting style</text></g><text x='18' y='165' transform='rotate(-90 18 165)' text-anchor='middle' fill='var(--fg)' font-size='12'>Correlation</text><g stroke='var(--fg)' stroke-width='1'><rect x='150' y='356' width='12' height='12' fill='var(--fg)' fill-opacity='0.55'/><rect x='210' y='356' width='12' height='12' fill='var(--fg)' fill-opacity='0.25'/><rect x='270' y='356' width='12' height='12' fill='var(--fg)' fill-opacity='1'/></g><g fill='var(--fg)' font-size='11'><text x='166' y='366'>P5</text><text x='226' y='366'>P4</text><text x='286' y='366'>P3</text></g></svg><div class="tiny faint" style="text-align:center;margin:2px 0 8px">Correlation between Model-Predicted and Participant-Reported Enjoyment Ratings, by Painting Style</div>Neuroscientist Kiyohito Iigaya and colleagues developed a computational model to predict how much a person will enjoy a particular work of art on a scale from 1 (not at all) to 4 (very much). They then recruited participants to use the same scale to rate several sets of paintings in various styles and calculated the correlation between the ratings predicted by the model and those reported by the participants. Assuming participant P4 gave equal ratings to the abstract and cubist paintings, the data in the graph indicate the model predicted that _____`,
      prompt: `Which choice most effectively uses data from the graph to complete the example?`,
      options: [{ id: `A`, text: `P4&rsquo;s ratings for abstract and cubist paintings would differ from one another.` }, { id: `B`, text: `P4 would derive less aesthetic pleasure from cubist paintings than from abstract paintings.` }, { id: `C`, text: `P4 would derive more aesthetic pleasure from cubist paintings than from abstract paintings.` }, { id: `D`, text: `P4&rsquo;s rating for abstract and cubist paintings would equal one another.` }],
      answer: `A` },

    { id: `nub-rw-m2-11`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `hard`, type: `mcq`,
      passage: `To understand consumer loyalty to specific online retailers, Vijoleta Vrhovac and colleagues conducted a survey using 58 statements as proxy indicators of customer experience with receiving online purchases. The statements were categorized by topic&mdash;e.g., statement 13, &ldquo;I am eagerly awaiting the delivery of the ordered items,&rdquo; was categorized as joyful anticipation&mdash;and respondents, all of whom were from Serbia (which is characterized as having a developing economy), rated the importance of each statement to their experience. Researchers found that participants placed low importance on package aesthetics and high importance on speedy delivery and package tracking, but the researchers cautioned against applying the findings to customers generally, suggesting that _____`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `additional research is needed with participants from countries of varying levels of economic development to determine whether delivery time and tracking are more important than package design to customers broadly.` }, { id: `B`, text: `customers in countries with higher levels of economic development than that of Serbia are likely to regard package design as relatively more important than delivery time and transparency.` }, { id: `C`, text: `the greater importance assigned to delivery time and tracking than to package design may not be observed if the survey were to be given to a larger group of Serbian participants.` }, { id: `D`, text: `online retailers that operate in a variety of countries are more likely to increase customer loyalty if they make their deliveries in less time and allow customers to track those deliveries than if they improve their packaging.` }],
      answer: `A` },

    { id: `nub-rw-m2-12`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `hard`, type: `mcq`,
      passage: `Chelsea Wood et al. tracked temperature-driven changes in the abundance of <em>Lecithaster</em> sp. (a complex life cycle parasite, or CLP, that requires three host species throughout its life cycle), <em>Oceanobdella pallida</em> (a directly transmitted parasite, which requires only one host species), and 83 other parasite taxa found on eight fish species. CLPs are transmitted when an infected host is ingested by an individual of another species, typically shielding CLPs from the external environment, whereas directly transmitted parasites are exposed to external conditions during transmission. However, Wood et al. found that three-host CLP abundance decreased as sea temperatures rose, whereas directly transmitted parasite abundance was largely stable, suggesting that _____`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `as the number of host species involved in a parasite&rsquo;s transmission increases, the parasite is better protected against rising temperatures.` }, { id: `B`, text: `CLPs primarily transmitted by ingestion were less dependent on host species adversely affected by warming temperatures than were CLPs that use other transmission strategies.` }, { id: `C`, text: `any advantages that the transmission strategy used by three-host CLPs may have conferred did not completely offset the negative effects of other temperature-driven factors on CLP abundance.` }, { id: `D`, text: `directly transmitted parasites identified in the study were more likely to use transmission strategies that shield them from warming temperatures than were three-host CLPs.` }],
      answer: `C` },

    { id: `nub-rw-m2-13`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `hard`, type: `mcq`,
      passage: `Prolonged exposure to anthropogenic noise (sounds from human sources like traffic or mining) can affect animals, as Matthew A. Wale and colleagues found in a 2013 study of shore crabs. Researchers conducted a meta-analysis of studies of how such noise affects animals and found that, for every study, relevant traits or behaviors of the animals were observably different between the exposed group and the otherwise similar but unexposed group. Although, on average, studies of arthropods showed larger differences than studies of birds did, for every class of animals examined, there were individual studies showing differences well above the average for arthropods. Therefore, the results of the meta-analysis suggest that _____`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `the differences that studies attribute to exposure to anthropogenic noise are likely to be more pronounced for birds than they are for arthropods.` }, { id: `B`, text: `the difference found in the study conducted by Matthew A. Wale and colleagues was likely larger than the average difference for studies of shore crabs included in the meta-analysis.` }, { id: `C`, text: `the studies in the meta-analysis that examined arthropods were more likely than those that examined birds to specify whether the observed effects were detrimental.` }, { id: `D`, text: `some studies of birds found larger effects of exposure to anthropogenic noise than some studies of arthropods did.` }],
      answer: `D` },

    { id: `nub-rw-m2-14`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `hard`, type: `mcq`,
      passage: `Obsidian hydration dating (OHD), an artifact-dating technique that measures the thickness of the rind that forms on the surface of obsidian (a volcanic glass), can be used to estimate when prehistoric humans used the sharp glass to shape stone tools. The use of OHD requires careful calibration based on a sample&rsquo;s climatic context and _____ temperature fluctuations, variations in water vapor pressure, and differences in glass chemistry are known to affect the rate of rind growth.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `composition, though:` }, { id: `B`, text: `composition though` }, { id: `C`, text: `composition; though` }, { id: `D`, text: `composition, though,` }],
      answer: `A` },

    { id: `nub-rw-m2-15`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `The Aksumite Empire, which reigned in northeast Africa from around 100 CE to 940 CE, benefited from trade with other societies: its merchants exported wheat, gold, and salt and _____ other valuable commodities, such as spices, iron, and textiles, which were then traded locally.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `to import` }, { id: `B`, text: `having imported` }, { id: `C`, text: `importing` }, { id: `D`, text: `imported` }],
      answer: `D` },

    { id: `nub-rw-m2-16`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `easy`, type: `mcq`,
      passage: `In her work, Tlingit artist Tanis S&rsquo;eiltin uses a combination of traditional art techniques and innovative multimedia formats to create striking mixed-media pieces. The Eiteljorg Museum counts pieces by S&rsquo;eiltin in _____ impressive collection of Native artworks.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `its` }, { id: `B`, text: `her` }, { id: `C`, text: `it&rsquo;s` }, { id: `D`, text: `their` }],
      answer: `A` },

    { id: `nub-rw-m2-17`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `hard`, type: `mcq`,
      passage: `On March 3, 2005, American astronomers detected a striking and unusual phenomenon occurring in the constellation Coma Berenices, 4.7 billion light-years from _____ explosion of a massive star, also known as a supernova, an extremely bright yet transient event that typically results from the collapse of a star&rsquo;s core.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `Earth; the` }, { id: `B`, text: `Earth, it was the` }, { id: `C`, text: `Earth. The` }, { id: `D`, text: `Earth: the` }],
      answer: `D` },

    { id: `nub-rw-m2-18`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `hard`, type: `mcq`,
      passage: `Between April 15 and April 28 each year, particles shed by comet 26P/Grigg-Skjellerup enter Earth&rsquo;s atmosphere at a velocity of 18 kilometers per second. Relatively few of these particles are likely to reach Earth&rsquo;s _____ since the meteoroids&rsquo; compression of the air surrounding them causes the vast majority to burn up in the mesosphere, producing the Pi Puppid meteor shower.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `surface. However,` }, { id: `B`, text: `surface; however,` }, { id: `C`, text: `surface, however;` }, { id: `D`, text: `surface, however,` }],
      answer: `D` },

    { id: `nub-rw-m2-19`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `hard`, type: `mcq`,
      passage: `In a chemical reaction, the value known as molar mass helps convert between the mass of the reactants and the mass of the product. The gaseous _____ have molar masses of 162.15 and 56.11 g/mol, respectively.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `compounds, quindoxin and isobutylene,` }, { id: `B`, text: `compounds quindoxin and isobutylene,` }, { id: `C`, text: `compounds, quindoxin and isobutylene` }, { id: `D`, text: `compounds quindoxin and isobutylene` }],
      answer: `D` },

    { id: `nub-rw-m2-20`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `Scientists have figured out why _____ The hazy middle layer of Uranus&rsquo;s atmosphere is much thicker than Neptune&rsquo;s, making Uranus appear lighter in color.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `is Uranus a different shade of blue than Neptune?` }, { id: `B`, text: `Uranus is a different shade of blue than Neptune?` }, { id: `C`, text: `Uranus is a different shade of blue than Neptune.` }, { id: `D`, text: `is Uranus a different shade of blue than Neptune.` }],
      answer: `C` },

    { id: `nub-rw-m2-21`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `hard`, type: `mcq`,
      passage: `The pedagogy of the Suzuki method is rooted in several central _____ by Japanese violinist Shinichi Suzuki, who sought to parallel the linguistic learning environment, the method emphasizes playing instruments from a very young age and teaches students as young as three to play simple folk songs such as &ldquo;Cuckoo.&rdquo;`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `tenets. Developed` }, { id: `B`, text: `tenets, developed` }, { id: `C`, text: `tenets that, developed` }, { id: `D`, text: `tenets developed` }],
      answer: `A` },

    { id: `nub-rw-m2-22`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `Stella Kramrisch and Ilse Bing have both received Lifetime Achievement Awards from the Women&rsquo;s Caucus for Art, though for different reasons. Kramrisch was honored for her work as an art historian; Bing, _____ was recognized for her contributions as a photographer.`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `for instance,` }, { id: `B`, text: `by contrast,` }, { id: `C`, text: `in other words,` }, { id: `D`, text: `as a result,` }],
      answer: `B` },

    { id: `nub-rw-m2-23`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `In a 2022 analysis of 200 terms, researchers found a broad pattern of valence-dependent mutation for which negative words saw a faster rate of cognate replacement&mdash;_____ the rate at which a word will be replaced over time with a noncognate form. Adjectives (e.g., &ldquo;criminal&rdquo;) saw the largest effect; nouns (e.g., &ldquo;victim&rdquo;), meanwhile, saw the smallest.`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `likewise,` }, { id: `B`, text: `in addition,` }, { id: `C`, text: `that is,` }, { id: `D`, text: `for example,` }],
      answer: `C` },

    { id: `nub-rw-m2-24`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `hard`, type: `mcq`,
      passage: `At past Olympics, in contrast to demonstration sports with international appeal, regionally popular sports were exhibited as onetime showcases. _____ while the internationally popular sport of speed skating became a medal event after demonstration, gl&iacute;ma, a combat sport popular in Sweden, only appeared at the 1912 Stockholm Olympics.`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `Granted,` }, { id: `B`, text: `However,` }, { id: `C`, text: `Accordingly,` }, { id: `D`, text: `Moreover,` }],
      answer: `C` },

    { id: `nub-rw-m2-25`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `While researching a topic, a student has taken the following notes:<br><ul><li>Louis Ballard was a classical composer and citizen of the Quapaw Tribe.</li><li>His compositions synthesize Western classical music with elements of various Native musical traditions.</li><li>Ballard&rsquo;s classical piece <em>Live On, Heart of My Nation</em> features a Choctaw hymn.</li><li>Ballard&rsquo;s classical piece <em>Fantasy Aborigine No. 3</em> incorporates a Tewa seashell rattle, a traditional Native instrument.</li></ul>`,
      prompt: `The student wants to emphasize a difference between the two compositions. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `In his two compositions <em>Live On, Heart of My Nation</em> and <em>Fantasy Aborigine No. 3</em>, Ballard blends elements of various Native musical traditions, such as Indigenous hymns or instruments, with Western classical music.` }, { id: `B`, text: `While both compositions integrate various Native musical traditions, <em>Live On, Heart of My Nation</em> does so by featuring a Choctaw hymn and <em>Fantasy Aborigine No. 3</em> does so by incorporating a Tewa seashell rattle.` }, { id: `C`, text: `<em>Live On, Heart of My Nation</em> and <em>Fantasy Aborigine No. 3</em> are two compositions written by Ballard, a classical music composer.` }, { id: `D`, text: `Ballard has different approaches to blending Western classical music with elements of various Native musical traditions, such as using Indigenous hymns and instruments in his compositions.` }],
      answer: `B` },

    { id: `nub-rw-m2-26`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `While researching a topic, a student has taken the following notes:<br><ul><li>A U-shaped curve in a river channel is called a meander.</li><li>A meander forms when water erodes sediment from one side of the riverbank and redeposits that sediment on the opposite side.</li><li>Meanders will gradually change shape and migrate downstream over time.</li><li>A river with high sinuosity has many meanders, and a river with low sinuosity has few.</li><li>The Willapa River in the United States has high sinuosity.</li></ul>`,
      prompt: `The student wants to define the term &ldquo;high-sinuosity river.&rdquo; Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `Over time, the many meanders in the high-sinuosity Willapa River will change shape and migrate downstream.` }, { id: `B`, text: `A high-sinuosity river is one that has many meanders, or U-shaped curves.` }, { id: `C`, text: `High sinuosity is caused by the erosion and redepositing of sediment in a riverbank over time.` }, { id: `D`, text: `A high-sinuosity river has U-shaped curves called meanders that will gradually change shape and shift downstream.` }],
      answer: `B` },

    { id: `nub-rw-m2-27`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `While researching a topic, a student has taken the following notes:<br><ul><li>Saturn has 146 moons, including Iapetus and Mimas.</li><li>Iapetus completes an orbit of Saturn in 79.33 Earth days on average.</li><li>Mimas completes an orbit of Saturn in 0.94 Earth days on average.</li><li>German mathematician and astronomer Johannes Kepler (1571&ndash;1630) described the orbits of planets as elliptical in shape rather than circular.</li><li>Kepler published three laws of planetary motion to describe the orbits of planets around the Sun.</li><li>Kepler&rsquo;s laws also apply to the elliptical orbits of natural satellites (e.g., moons).</li></ul>`,
      prompt: `The student wants to contrast the orbits of the two moons. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `Iapetus&rsquo;s orbit of Saturn is elliptical in shape and takes, on average, 79.33 Earth days, while Mimas&rsquo;s orbit of Saturn is circular in shape and takes, on average, 0.94 Earth days.` }, { id: `B`, text: `Kepler&rsquo;s three laws of planetary motion describe the orbits of planets and natural satellites, including those of Iapetus and Mimas.` }, { id: `C`, text: `Mimas completes its orbit of Saturn many times faster than Iapetus does.` }, { id: `D`, text: `Saturn&rsquo;s moons, specifically Iapetus and Mimas, orbit their planet in the same way the planets orbit the Sun.` }],
      answer: `C` },
  ];

  const MATH_M1 = [
    { id: `nub-math-m1-1`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `easy`, type: `mcq`,
      prompt: `If 6<em>x</em> = 60, what is the value of 7<em>x</em> + 3?`,
      options: [{ id: `A`, text: `73` }, { id: `B`, text: `63` }, { id: `C`, text: `55` }, { id: `D`, text: `45` }],
      answer: `A` },

    { id: `nub-math-m1-2`, domain: `Advanced Math`, skill: `Function notation`, difficulty: `easy`, type: `mcq`,
      prompt: `The function <em>j</em> is defined by <em>j</em>(<em>x</em>) = <em>x</em>/8. What is the value of <em>j</em>(48)?`,
      options: [{ id: `A`, text: `48` }, { id: `B`, text: `40` }, { id: `C`, text: `8` }, { id: `D`, text: `6` }],
      answer: `D` },

    { id: `nub-math-m1-3`, domain: `Advanced Math`, skill: `Interpreting quadratic functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<em>k</em>(<em>x</em>) = &minus;&frac12;<em>x</em><sup>2</sup> + 8<em>x</em> + 20<br>The function <em>k</em> gives the estimated number of students in a school organization <em>x</em> years after the organization was established, where 0 &le; <em>x</em> &le; 10. Which statement is the best interpretation of <em>k</em>(4) = 44?`,
      options: [{ id: `A`, text: `It is estimated there were 4 students in the school organization when it was established.` }, { id: `B`, text: `It is estimated there were 44 students in the school organization when it was established.` }, { id: `C`, text: `It is estimated there were 44 students in the school organization 4 years after it was established.` }, { id: `D`, text: `It is estimated there were 44 students in the school organization 10 years after it was established.` }],
      answer: `C` },

    { id: `nub-math-m1-4`, domain: `Algebra`, skill: `Interpreting linear functions`, difficulty: `easy`, type: `mcq`,
      prompt: `The function <em>t</em>(<em>x</em>) = &minus;3<em>x</em> + 74 gives the estimated temperature, in degrees Fahrenheit, of a town <em>x</em> hours after 6 p.m., where 0 &le; <em>x</em> &le; 5. What is the best interpretation of &minus;3 in this context?`,
      options: [{ id: `A`, text: `The estimated temperature decreases 3 degrees Fahrenheit each hour.` }, { id: `B`, text: `The estimated temperature decreases 74 degrees Fahrenheit each hour.` }, { id: `C`, text: `At 6 p.m., the estimated temperature is &minus;3 degrees Fahrenheit.` }, { id: `D`, text: `At 6 p.m., the estimated temperature is 5 degrees Fahrenheit.` }],
      answer: `A` },

    { id: `nub-math-m1-5`, domain: `Advanced Math`, skill: `Interpreting graphs of functions`, difficulty: `easy`, type: `mcq`,
      prompt: `<svg viewBox="0 0 400 320" role="img" aria-label="figure" style="max-width:340px;width:100%;display:block;margin:6px auto"><line x1='40' y1='250' x2='372' y2='250' stroke='var(--fg)' stroke-width='1.5'/><line x1='250' y1='300' x2='250' y2='30' stroke='var(--fg)' stroke-width='1.5'/><polygon points='372,250 362,245 362,255' fill='var(--fg)'/><polygon points='250,30 245,40 255,40' fill='var(--fg)'/><text x='378' y='255' fill='var(--fg)' font-size='13' font-style='italic'>x</text><text x='240' y='34' fill='var(--fg)' font-size='13' font-style='italic'>y</text><line x1='118' y1='247' x2='118' y2='253' stroke='var(--fg)' stroke-width='1'/><text x='118' y='268' text-anchor='middle' fill='var(--fg)' font-size='11'>-4</text><line x1='184' y1='247' x2='184' y2='253' stroke='var(--fg)' stroke-width='1'/><text x='184' y='268' text-anchor='middle' fill='var(--fg)' font-size='11'>-2</text><line x1='316' y1='247' x2='316' y2='253' stroke='var(--fg)' stroke-width='1'/><text x='316' y='268' text-anchor='middle' fill='var(--fg)' font-size='11'>2</text><line x1='247' y1='190' x2='253' y2='190' stroke='var(--fg)' stroke-width='1'/><text x='240' y='194' text-anchor='end' fill='var(--fg)' font-size='11'>2</text><line x1='247' y1='130' x2='253' y2='130' stroke='var(--fg)' stroke-width='1'/><text x='240' y='134' text-anchor='end' fill='var(--fg)' font-size='11'>4</text><line x1='247' y1='70' x2='253' y2='70' stroke='var(--fg)' stroke-width='1'/><text x='240' y='74' text-anchor='end' fill='var(--fg)' font-size='11'>6</text><path d='M 52 250 L 118 249 L 184 243 L 217 231 L 250 190 L 266 147 L 283 71 L 289 42' fill='none' stroke='var(--fg)' stroke-width='2.5'/></svg><div class="tiny faint" style="text-align:center;margin:2px 0 8px">The graph of the function f, where y = f(x).</div>The graph of the function <em>f</em> is shown, where <em>y</em> = <em>f</em>(<em>x</em>). Which of the following best describes the function <em>f</em>?`,
      options: [{ id: `A`, text: `Increasing linear` }, { id: `B`, text: `Decreasing linear` }, { id: `C`, text: `Increasing exponential` }, { id: `D`, text: `Decreasing exponential` }],
      answer: `C` },

    { id: `nub-math-m1-6`, domain: `Advanced Math`, skill: `Equivalent expressions`, difficulty: `easy`, type: `mcq`,
      prompt: `Which expression is equivalent to 10<em>x</em><sup>2</sup> + 130?`,
      options: [{ id: `A`, text: `10(13<em>x</em><sup>2</sup>)` }, { id: `B`, text: `10(<em>x</em><sup>2</sup> + 13)` }, { id: `C`, text: `130(10<em>x</em><sup>2</sup>)` }, { id: `D`, text: `130(10<em>x</em><sup>2</sup> + 1)` }],
      answer: `B` },

    { id: `nub-math-m1-7`, domain: `Algebra`, skill: `Linear inequalities in context`, difficulty: `medium`, type: `grid`,
      prompt: `An event planner is planning an ice-skating event. It costs the event planner a onetime fee of $30 to rent the skating rink and $10.25 per attendee. The event planner has a budget of $250. What is the greatest number of attendees possible without exceeding the budget?`,
      answer: [`21`] },

    { id: `nub-math-m1-8`, domain: `Advanced Math`, skill: `Radical equations`, difficulty: `medium`, type: `mcq`,
      prompt: `The function <em>f</em> is defined by <em>f</em>(<em>x</em>) = 4&radic;<em>x</em>. For what value of <em>x</em> does <em>f</em>(<em>x</em>) = 28?`,
      options: [{ id: `A`, text: `4` }, { id: `B`, text: `7` }, { id: `C`, text: `16` }, { id: `D`, text: `49` }],
      answer: `D` },

    { id: `nub-math-m1-9`, domain: `Geometry and Trigonometry`, skill: `Similar triangles`, difficulty: `medium`, type: `mcq`,
      prompt: `Triangle <em>PQR</em> is similar to triangle <em>STU</em>, where <em>P</em>, <em>Q</em>, and <em>R</em> correspond to <em>S</em>, <em>T</em>, and <em>U</em>, respectively. In triangle <em>PQR</em>, the length of <span style='text-decoration:overline'>PQ</span> is 6 and the length of <span style='text-decoration:overline'>QR</span> is 24. In triangle <em>STU</em>, the length of <span style='text-decoration:overline'>ST</span> is 8. What is the length of <span style='text-decoration:overline'>TU</span>?`,
      options: [{ id: `A`, text: `8` }, { id: `B`, text: `14` }, { id: `C`, text: `32` }, { id: `D`, text: `48` }],
      answer: `C` },

    { id: `nub-math-m1-10`, domain: `Advanced Math`, skill: `Systems of linear and quadratic equations`, difficulty: `medium`, type: `mcq`,
      prompt: `<svg viewBox="0 0 440 360" role="img" aria-label="figure" style="max-width:340px;width:100%;display:block;margin:6px auto"><g stroke='var(--border)' stroke-width='1'><line x1='28' y1='34' x2='28' y2='338'/><line x1='76' y1='34' x2='76' y2='338'/><line x1='124' y1='34' x2='124' y2='338'/><line x1='172' y1='34' x2='172' y2='338'/><line x1='268' y1='34' x2='268' y2='338'/><line x1='316' y1='34' x2='316' y2='338'/><line x1='364' y1='34' x2='364' y2='338'/><line x1='412' y1='34' x2='412' y2='338'/><line x1='28' y1='338' x2='412' y2='338'/><line x1='28' y1='262' x2='412' y2='262'/><line x1='28' y1='224' x2='412' y2='224'/><line x1='28' y1='186' x2='412' y2='186'/><line x1='28' y1='148' x2='412' y2='148'/><line x1='28' y1='110' x2='412' y2='110'/><line x1='28' y1='72' x2='412' y2='72'/><line x1='28' y1='34' x2='412' y2='34'/></g><line x1='28' y1='300' x2='412' y2='300' stroke='var(--fg)' stroke-width='1.5'/><line x1='220' y1='34' x2='220' y2='338' stroke='var(--fg)' stroke-width='1.5'/><text x='405' y='316' fill='var(--fg)' font-size='12' font-style='italic'>x</text><text x='226' y='44' fill='var(--fg)' font-size='12' font-style='italic'>y</text><text x='124' y='316' text-anchor='middle' fill='var(--fg)' font-size='10'>-4</text><text x='316' y='316' text-anchor='middle' fill='var(--fg)' font-size='10'>4</text><text x='210' y='190' text-anchor='end' fill='var(--fg)' font-size='10'>6</text><text x='210' y='114' text-anchor='end' fill='var(--fg)' font-size='10'>10</text><polyline points='52,39 76,108 100,167 124,215 148,252 172,279 196,295 220,300 244,295 268,279 292,252 316,215 340,167 364,108 388,39' fill='none' stroke='var(--fg)' stroke-width='2.5'/><line x1='184' y1='340' x2='412' y2='87' stroke='var(--fg)' stroke-width='2.5'/></svg><div class="tiny faint" style="text-align:center;margin:2px 0 8px">The graph of a system of a linear and a quadratic equation.</div>The graph of a system of a linear and a quadratic equation is shown. What system is represented by the graph?`,
      options: [{ id: `A`, text: `<em>y</em> = &minus;(7/25)<em>x</em><sup>2</sup>, &nbsp; <em>y</em> = &minus;(7/5)<em>x</em>` }, { id: `B`, text: `<em>y</em> = &minus;(7/25)<em>x</em><sup>2</sup>, &nbsp; <em>y</em> = (7/5)<em>x</em>` }, { id: `C`, text: `<em>y</em> = (7/25)<em>x</em><sup>2</sup>, &nbsp; <em>y</em> = &minus;(7/5)<em>x</em>` }, { id: `D`, text: `<em>y</em> = (7/25)<em>x</em><sup>2</sup>, &nbsp; <em>y</em> = (7/5)<em>x</em>` }],
      answer: `D` },

    { id: `nub-math-m1-11`, domain: `Advanced Math`, skill: `Exponential functions`, difficulty: `medium`, type: `grid`,
      prompt: `The function <em>f</em> is defined by <em>f</em>(<em>x</em>) = 4<sup>(<em>x</em>&minus;2)</sup> + 8. What is the value of <em>f</em>(2)?`,
      answer: [`9`] },

    { id: `nub-math-m1-12`, domain: `Algebra`, skill: `Linear graphs and translations`, difficulty: `medium`, type: `mcq`,
      prompt: `If the graph of 12<em>x</em> + 22<em>y</em> = 132 is shifted down 4 units in the <em>xy</em>-plane, what is the <em>y</em>-intercept of the resulting graph?`,
      options: [{ id: `A`, text: `(0, 2)` }, { id: `B`, text: `(0, 7)` }, { id: `C`, text: `(0, 10)` }, { id: `D`, text: `(0, 18)` }],
      answer: `A` },

    { id: `nub-math-m1-13`, domain: `Advanced Math`, skill: `Exponential functions and translations`, difficulty: `medium`, type: `mcq`,
      prompt: `<table style="border-collapse:collapse;margin:6px auto"><tr><th style="border:1px solid var(--border);padding:3px 12px">x</th><th style="border:1px solid var(--border);padding:3px 12px">j(x)</th></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">1</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">3</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">2</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">9</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">3</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">27</td></tr></table>The table shows three values of <em>x</em> and their corresponding values of <em>j</em>(<em>x</em>) for exponential function <em>j</em>. When the graph of <em>y</em> = <em>j</em>(<em>x</em>) in the <em>xy</em>-plane is shifted up 20 units, the resulting graph is defined by function <em>h</em>. Which table gives three values of <em>x</em> and their corresponding values of <em>h</em>(<em>x</em>)?`,
      options: [{ id: `A`, text: `<table style='border-collapse:collapse'><tr><td style='border:1px solid var(--border);padding:1px 9px'><em>x</em></td><td style='border:1px solid var(--border);padding:1px 9px'><em>h</em>(<em>x</em>)</td></tr><tr><td style='border:1px solid var(--border);padding:1px 9px'>1</td><td style='border:1px solid var(--border);padding:1px 9px'>60</td></tr><tr><td style='border:1px solid var(--border);padding:1px 9px'>2</td><td style='border:1px solid var(--border);padding:1px 9px'>180</td></tr><tr><td style='border:1px solid var(--border);padding:1px 9px'>3</td><td style='border:1px solid var(--border);padding:1px 9px'>540</td></tr></table>` }, { id: `B`, text: `<table style='border-collapse:collapse'><tr><td style='border:1px solid var(--border);padding:1px 9px'><em>x</em></td><td style='border:1px solid var(--border);padding:1px 9px'><em>h</em>(<em>x</em>)</td></tr><tr><td style='border:1px solid var(--border);padding:1px 9px'>1</td><td style='border:1px solid var(--border);padding:1px 9px'>23</td></tr><tr><td style='border:1px solid var(--border);padding:1px 9px'>2</td><td style='border:1px solid var(--border);padding:1px 9px'>29</td></tr><tr><td style='border:1px solid var(--border);padding:1px 9px'>3</td><td style='border:1px solid var(--border);padding:1px 9px'>47</td></tr></table>` }, { id: `C`, text: `<table style='border-collapse:collapse'><tr><td style='border:1px solid var(--border);padding:1px 9px'><em>x</em></td><td style='border:1px solid var(--border);padding:1px 9px'><em>h</em>(<em>x</em>)</td></tr><tr><td style='border:1px solid var(--border);padding:1px 9px'>20</td><td style='border:1px solid var(--border);padding:1px 9px'>3</td></tr><tr><td style='border:1px solid var(--border);padding:1px 9px'>40</td><td style='border:1px solid var(--border);padding:1px 9px'>9</td></tr><tr><td style='border:1px solid var(--border);padding:1px 9px'>60</td><td style='border:1px solid var(--border);padding:1px 9px'>27</td></tr></table>` }, { id: `D`, text: `<table style='border-collapse:collapse'><tr><td style='border:1px solid var(--border);padding:1px 9px'><em>x</em></td><td style='border:1px solid var(--border);padding:1px 9px'><em>h</em>(<em>x</em>)</td></tr><tr><td style='border:1px solid var(--border);padding:1px 9px'>21</td><td style='border:1px solid var(--border);padding:1px 9px'>3</td></tr><tr><td style='border:1px solid var(--border);padding:1px 9px'>22</td><td style='border:1px solid var(--border);padding:1px 9px'>9</td></tr><tr><td style='border:1px solid var(--border);padding:1px 9px'>23</td><td style='border:1px solid var(--border);padding:1px 9px'>27</td></tr></table>` }],
      answer: `B` },

    { id: `nub-math-m1-14`, domain: `Algebra`, skill: `Linear equations in two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `A landscaping company mixes oil with gasoline to power its tools. A chainsaw requires 8 ounces of oil per gallon of gasoline. A lawnmower requires 4 ounces of oil per gallon of gasoline. The company uses a total of 21 ounces of oil in its mixes for the chainsaw and lawnmower. Which of the following equations represents this situation, where <em>x</em> represents the amount of gasoline, in gallons, in the mix for the chainsaw and <em>y</em> represents the amount of gasoline, in gallons, in the mix for the lawnmower?`,
      options: [{ id: `A`, text: `2(<em>x</em> + 2<em>y</em>) = 21` }, { id: `B`, text: `2(2<em>x</em> + <em>y</em>) = 21` }, { id: `C`, text: `4(<em>x</em> + 2<em>y</em>) = 21` }, { id: `D`, text: `4(2<em>x</em> + <em>y</em>) = 21` }],
      answer: `D` },

    { id: `nub-math-m1-15`, domain: `Geometry and Trigonometry`, skill: `Right triangle trigonometry`, difficulty: `medium`, type: `grid`,
      prompt: `<svg viewBox="0 0 360 300" role="img" aria-label="figure" style="max-width:340px;width:100%;display:block;margin:6px auto"><polygon points='40,240 300,240 300,60' fill='none' stroke='var(--fg)' stroke-width='2'/><polyline points='286,240 286,226 300,226' fill='none' stroke='var(--fg)' stroke-width='1.5'/><text x='170' y='262' text-anchor='middle' fill='var(--fg)' font-size='16'>20</text><text x='316' y='155' fill='var(--fg)' font-size='16'>15</text><text x='150' y='138' fill='var(--fg)' font-size='16'>25</text><text x='305' y='50' fill='var(--fg)' font-size='15' font-style='italic'>B</text><text x='20' y='250' fill='var(--fg)' font-size='15' font-style='italic'>C</text><text x='305' y='256' fill='var(--fg)' font-size='15' font-style='italic'>A</text></svg><div class="tiny faint" style="text-align:center;margin:2px 0 8px">Note: Figure not drawn to scale.</div>What is the value of cos <em>B</em> in the right triangle shown?`,
      answer: [`0.6`, `3/5`] },

    { id: `nub-math-m1-16`, domain: `Geometry and Trigonometry`, skill: `Area and similar figures`, difficulty: `medium`, type: `grid`,
      prompt: `Rectangles <em>ABCD</em> and <em>EFGH</em> are similar. The length of each side of rectangle <em>EFGH</em> is 7 times the length of the corresponding side of rectangle <em>ABCD</em>. The area of rectangle <em>ABCD</em> is 68 square units. What is the area of rectangle <em>EFGH</em>, in square units?`,
      answer: [`3332`] },

    { id: `nub-math-m1-17`, domain: `Problem-Solving and Data Analysis`, skill: `Percentages`, difficulty: `easy`, type: `mcq`,
      prompt: `18 is 10% of what number?`,
      options: [{ id: `A`, text: `28` }, { id: `B`, text: `100` }, { id: `C`, text: `162` }, { id: `D`, text: `180` }],
      answer: `D` },

    { id: `nub-math-m1-18`, domain: `Advanced Math`, skill: `Quadratic equations in context`, difficulty: `hard`, type: `grid`,
      prompt: `<em>h</em>(<em>t</em>) = &minus;16<em>t</em><sup>2</sup> + <em>b</em><br>The function <em>h</em> estimates an object&rsquo;s height, in feet, above the ground <em>t</em> seconds after the object is dropped, where <em>b</em> is a constant. The function estimates that the object is 2.56 feet above the ground when it is dropped at <em>t</em> = 0. How many seconds after being dropped does the function estimate the object will hit the ground?`,
      answer: [`0.4`, `2/5`] },

    { id: `nub-math-m1-19`, domain: `Geometry and Trigonometry`, skill: `Radians and degrees`, difficulty: `medium`, type: `mcq`,
      prompt: `The measure of angle <em>S</em> is (8&pi;/13) radians. The measure of angle <em>T</em> is 3 times the measure of angle <em>S</em>. Which expression represents the measure, in <strong>degrees</strong>, of angle <em>T</em>?`,
      options: [{ id: `A`, text: `(8/13)(90)(3)` }, { id: `B`, text: `(8/13)(180)(3)` }, { id: `C`, text: `(8/(13&pi;))(90)(3)` }, { id: `D`, text: `(8&pi;/13)(180)(3)` }],
      answer: `B` },

    { id: `nub-math-m1-20`, domain: `Algebra`, skill: `Systems of linear equations`, difficulty: `hard`, type: `mcq`,
      prompt: `(<em>x</em>&minus;7)/5 + (<em>y</em>+8)/4 = 0<br>3<em>x</em> + 4<em>y</em> = 0<br>The solution to the given system of equations is (<em>x</em>, <em>y</em>). What is the value of <em>x</em> + <em>y</em>?`,
      options: [{ id: `A`, text: `&minus;12` }, { id: `B`, text: `&minus;5` }, { id: `C`, text: `&minus;4` }, { id: `D`, text: `12` }],
      answer: `A` },

    { id: `nub-math-m1-21`, domain: `Problem-Solving and Data Analysis`, skill: `Mean from frequency tables`, difficulty: `medium`, type: `mcq`,
      prompt: `Each of the following frequency tables represents a data set. Which data set has the greatest mean?`,
      options: [{ id: `A`, text: `<table style='border-collapse:collapse'><tr><td style='border:1px solid var(--border);padding:1px 8px'>Value</td><td style='border:1px solid var(--border);padding:1px 8px'>Frequency</td></tr><tr><td style='border:1px solid var(--border);padding:1px 8px'>60</td><td style='border:1px solid var(--border);padding:1px 8px'>2</td></tr><tr><td style='border:1px solid var(--border);padding:1px 8px'>70</td><td style='border:1px solid var(--border);padding:1px 8px'>3</td></tr><tr><td style='border:1px solid var(--border);padding:1px 8px'>80</td><td style='border:1px solid var(--border);padding:1px 8px'>4</td></tr><tr><td style='border:1px solid var(--border);padding:1px 8px'>90</td><td style='border:1px solid var(--border);padding:1px 8px'>5</td></tr></table>` }, { id: `B`, text: `<table style='border-collapse:collapse'><tr><td style='border:1px solid var(--border);padding:1px 8px'>Value</td><td style='border:1px solid var(--border);padding:1px 8px'>Frequency</td></tr><tr><td style='border:1px solid var(--border);padding:1px 8px'>60</td><td style='border:1px solid var(--border);padding:1px 8px'>6</td></tr><tr><td style='border:1px solid var(--border);padding:1px 8px'>70</td><td style='border:1px solid var(--border);padding:1px 8px'>3</td></tr><tr><td style='border:1px solid var(--border);padding:1px 8px'>80</td><td style='border:1px solid var(--border);padding:1px 8px'>3</td></tr><tr><td style='border:1px solid var(--border);padding:1px 8px'>90</td><td style='border:1px solid var(--border);padding:1px 8px'>6</td></tr></table>` }, { id: `C`, text: `<table style='border-collapse:collapse'><tr><td style='border:1px solid var(--border);padding:1px 8px'>Value</td><td style='border:1px solid var(--border);padding:1px 8px'>Frequency</td></tr><tr><td style='border:1px solid var(--border);padding:1px 8px'>60</td><td style='border:1px solid var(--border);padding:1px 8px'>4</td></tr><tr><td style='border:1px solid var(--border);padding:1px 8px'>70</td><td style='border:1px solid var(--border);padding:1px 8px'>4</td></tr><tr><td style='border:1px solid var(--border);padding:1px 8px'>80</td><td style='border:1px solid var(--border);padding:1px 8px'>4</td></tr><tr><td style='border:1px solid var(--border);padding:1px 8px'>90</td><td style='border:1px solid var(--border);padding:1px 8px'>4</td></tr></table>` }, { id: `D`, text: `<table style='border-collapse:collapse'><tr><td style='border:1px solid var(--border);padding:1px 8px'>Value</td><td style='border:1px solid var(--border);padding:1px 8px'>Frequency</td></tr><tr><td style='border:1px solid var(--border);padding:1px 8px'>60</td><td style='border:1px solid var(--border);padding:1px 8px'>5</td></tr><tr><td style='border:1px solid var(--border);padding:1px 8px'>70</td><td style='border:1px solid var(--border);padding:1px 8px'>4</td></tr><tr><td style='border:1px solid var(--border);padding:1px 8px'>80</td><td style='border:1px solid var(--border);padding:1px 8px'>4</td></tr><tr><td style='border:1px solid var(--border);padding:1px 8px'>90</td><td style='border:1px solid var(--border);padding:1px 8px'>5</td></tr></table>` }],
      answer: `A` },

    { id: `nub-math-m1-22`, domain: `Algebra`, skill: `Systems of linear equations in context`, difficulty: `hard`, type: `grid`,
      prompt: `Jackson mows lawns in the summer. When Jackson mows a lawn with a fence, he charges $1.03 per minute. When Jackson mows a lawn without a fence, he charges $0.56 per minute. Jackson spends a total of 15 hours mowing lawns with and without a fence in a week and charges a total of $701.40 for mowing lawns during that week. How many <strong>minutes</strong> does Jackson spend mowing lawns with a fence during that week?`,
      answer: [`420`] },
  ];

  const MATH_M2 = [
    { id: `nub-math-m2-1`, domain: `Algebra`, skill: `Linear functions`, difficulty: `easy`, type: `mcq`,
      prompt: `For the linear function <em>g</em>, the graph of <em>y</em> = <em>g</em>(<em>x</em>) in the <em>xy</em>-plane has a slope of 5 and passes through the point (2, 47). Which equation defines <em>g</em>?`,
      options: [{ id: `A`, text: `<em>g</em>(<em>x</em>) = 37<em>x</em>` }, { id: `B`, text: `<em>g</em>(<em>x</em>) = 37<em>x</em> + 5` }, { id: `C`, text: `<em>g</em>(<em>x</em>) = 5<em>x</em>` }, { id: `D`, text: `<em>g</em>(<em>x</em>) = 5<em>x</em> + 37` }],
      answer: `D` },

    { id: `nub-math-m2-2`, domain: `Algebra`, skill: `Linear functions`, difficulty: `easy`, type: `mcq`,
      prompt: `<table style="border-collapse:collapse;margin:6px auto"><tr><th style="border:1px solid var(--border);padding:3px 12px">h</th><th style="border:1px solid var(--border);padding:3px 12px">f(h)</th></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">1</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">140</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">3</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">250</td></tr></table>The table gives the number of hours, <em>h</em>, of labor and a plumber&rsquo;s total charge <em>f</em>(<em>h</em>), in dollars, for two different jobs. There is a linear relationship between <em>h</em> and <em>f</em>(<em>h</em>). Which equation represents this relationship?`,
      options: [{ id: `A`, text: `<em>f</em>(<em>h</em>) = 85<em>h</em> + 55` }, { id: `B`, text: `<em>f</em>(<em>h</em>) = 55<em>h</em> + 85` }, { id: `C`, text: `<em>f</em>(<em>h</em>) = 110<em>h</em> + 30` }, { id: `D`, text: `<em>f</em>(<em>h</em>) = 30<em>h</em> + 110` }],
      answer: `B` },

    { id: `nub-math-m2-3`, domain: `Problem-Solving and Data Analysis`, skill: `Statistics and distributions`, difficulty: `easy`, type: `mcq`,
      prompt: `<table style="border-collapse:collapse;margin:6px auto"><tr><th style="border:1px solid var(--border);padding:3px 12px">Value</th><th style="border:1px solid var(--border);padding:3px 12px">Frequency</th></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">20</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">7</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">28</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">1</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">36</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">7</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">44</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">3</td></tr></table>The table shows the frequency of values in a data set. What is the minimum value of the data set?`,
      options: [{ id: `A`, text: `1` }, { id: `B`, text: `7` }, { id: `C`, text: `20` }, { id: `D`, text: `44` }],
      answer: `C` },

    { id: `nub-math-m2-4`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `Exactly how many <em>x</em>-intercepts does the graph of <em>f</em>(<em>x</em>) = <em>x</em>(<em>x</em> &minus; 10)<sup>2</sup>(<em>x</em> &minus; 11)<sup>3</sup> have in the <em>xy</em>-plane, where <em>y</em> = <em>f</em>(<em>x</em>)?`,
      options: [{ id: `A`, text: `0` }, { id: `B`, text: `1` }, { id: `C`, text: `2` }, { id: `D`, text: `3` }],
      answer: `D` },

    { id: `nub-math-m2-5`, domain: `Geometry and Trigonometry`, skill: `Circles`, difficulty: `hard`, type: `grid`,
      prompt: `2<em>x</em><sup>2</sup> + 2<em>y</em><sup>2</sup> + <em>tx</em> + <em>ty</em> &minus; 78 = 0<br>The given equation, where <em>t</em> is a positive constant, defines a circle in the <em>xy</em>-plane. The radius of this circle is &radic;41. What is the value of <em>t</em>?`,
      answer: [`4`] },

    { id: `nub-math-m2-6`, domain: `Geometry and Trigonometry`, skill: `Lines, angles, and triangles`, difficulty: `medium`, type: `mcq`,
      prompt: `In triangle <em>RST</em>, the measure of angle <em>R</em> is 29 degrees. Which statement provides sufficient information to prove that triangle <em>RST</em> is isosceles?`,
      options: [{ id: `A`, text: `The measure of angle <em>S</em> is 151 degrees.` }, { id: `B`, text: `The measure of angle <em>S</em> is 61 degrees.` }, { id: `C`, text: `The measure of angle <em>S</em> is 58 degrees.` }, { id: `D`, text: `The measure of angle <em>S</em> is 29 degrees.` }],
      answer: `D` },

    { id: `nub-math-m2-7`, domain: `Advanced Math`, skill: `Equivalent expressions`, difficulty: `easy`, type: `mcq`,
      prompt: `If <em>a</em> = 6<em>k</em> + 5<em>r</em> and <em>b</em> = 9<em>k</em> &minus; 12<em>r</em> + 3, which expression is equivalent to <em>a</em> &minus; <em>b</em>?`,
      options: [{ id: `A`, text: `&minus;3<em>k</em> + 17<em>r</em> &minus; 3` }, { id: `B`, text: `&minus;3<em>k</em> + 17<em>r</em> + 3` }, { id: `C`, text: `&minus;3<em>k</em> &minus; 7<em>r</em> + 3` }, { id: `D`, text: `&minus;3<em>k</em> &minus; 7<em>r</em> &minus; 3` }],
      answer: `A` },

    { id: `nub-math-m2-8`, domain: `Advanced Math`, skill: `Nonlinear equations`, difficulty: `medium`, type: `mcq`,
      prompt: `<em>x</em><sup>2</sup> &minus; 49/16 = 0<br>How many distinct real solutions does the given equation have?`,
      options: [{ id: `A`, text: `Zero` }, { id: `B`, text: `Exactly one` }, { id: `C`, text: `Exactly two` }, { id: `D`, text: `Infinitely many` }],
      answer: `C` },

    { id: `nub-math-m2-9`, domain: `Algebra`, skill: `Linear inequalities in two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `<em>y</em> &gt; &minus;(7/2)<em>x</em> + 17<br>For which of the following tables are all the values of <em>x</em> and their corresponding values of <em>y</em> solutions to the given inequality?`,
      options: [{ id: `A`, text: `<table style='border-collapse:collapse'><tr><td style='border:1px solid var(--border);padding:1px 12px'><em>x</em></td><td style='border:1px solid var(--border);padding:1px 12px'><em>y</em></td></tr><tr><td style='border:1px solid var(--border);padding:1px 12px'>&minus;2</td><td style='border:1px solid var(--border);padding:1px 12px'>26</td></tr><tr><td style='border:1px solid var(--border);padding:1px 12px'>2</td><td style='border:1px solid var(--border);padding:1px 12px'>12</td></tr><tr><td style='border:1px solid var(--border);padding:1px 12px'>4</td><td style='border:1px solid var(--border);padding:1px 12px'>5</td></tr></table>` }, { id: `B`, text: `<table style='border-collapse:collapse'><tr><td style='border:1px solid var(--border);padding:1px 12px'><em>x</em></td><td style='border:1px solid var(--border);padding:1px 12px'><em>y</em></td></tr><tr><td style='border:1px solid var(--border);padding:1px 12px'>&minus;2</td><td style='border:1px solid var(--border);padding:1px 12px'>26</td></tr><tr><td style='border:1px solid var(--border);padding:1px 12px'>2</td><td style='border:1px solid var(--border);padding:1px 12px'>8</td></tr><tr><td style='border:1px solid var(--border);padding:1px 12px'>4</td><td style='border:1px solid var(--border);padding:1px 12px'>5</td></tr></table>` }, { id: `C`, text: `<table style='border-collapse:collapse'><tr><td style='border:1px solid var(--border);padding:1px 12px'><em>x</em></td><td style='border:1px solid var(--border);padding:1px 12px'><em>y</em></td></tr><tr><td style='border:1px solid var(--border);padding:1px 12px'>&minus;2</td><td style='border:1px solid var(--border);padding:1px 12px'>22</td></tr><tr><td style='border:1px solid var(--border);padding:1px 12px'>2</td><td style='border:1px solid var(--border);padding:1px 12px'>8</td></tr><tr><td style='border:1px solid var(--border);padding:1px 12px'>4</td><td style='border:1px solid var(--border);padding:1px 12px'>1</td></tr></table>` }, { id: `D`, text: `<table style='border-collapse:collapse'><tr><td style='border:1px solid var(--border);padding:1px 12px'><em>x</em></td><td style='border:1px solid var(--border);padding:1px 12px'><em>y</em></td></tr><tr><td style='border:1px solid var(--border);padding:1px 12px'>&minus;2</td><td style='border:1px solid var(--border);padding:1px 12px'>24</td></tr><tr><td style='border:1px solid var(--border);padding:1px 12px'>2</td><td style='border:1px solid var(--border);padding:1px 12px'>12</td></tr><tr><td style='border:1px solid var(--border);padding:1px 12px'>4</td><td style='border:1px solid var(--border);padding:1px 12px'>5</td></tr></table>` }],
      answer: `A` },

    { id: `nub-math-m2-10`, domain: `Algebra`, skill: `Linear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `A polygonal chain is a connected series of line segments whose length is defined as the sum of the lengths of the line segments it is made of. A polygonal chain with a length of 33 centimeters (cm) is extended by adding line segments that each have a length of 8 &minus; <em>r</em> cm. Which function <em>f</em> represents the total length, in cm, of the extended polygonal chain after <em>x</em> line segments are added?`,
      options: [{ id: `A`, text: `<em>f</em>(<em>x</em>) = 33(8 &minus; <em>r</em>) + <em>x</em>` }, { id: `B`, text: `<em>f</em>(<em>x</em>) = 8<em>x</em> &minus; <em>rx</em> + 33` }, { id: `C`, text: `<em>f</em>(<em>x</em>) = 8<em>x</em> &minus; <em>r</em> + 33` }, { id: `D`, text: `<em>f</em>(<em>x</em>) = (41 &minus; <em>r</em>)<em>x</em>` }],
      answer: `B` },

    { id: `nub-math-m2-11`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `medium`, type: `grid`,
      prompt: `If (9/6)(<em>x</em> &minus; 5) &minus; 36 = (7/6)(<em>x</em> &minus; 5) + 28, what is the value of <em>x</em> &minus; 5?`,
      answer: [`192`] },

    { id: `nub-math-m2-12`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `easy`, type: `mcq`,
      prompt: `A chemist combines 30 grams of compound A, 45 grams of compound B, and <em>x</em> grams of compound C. The resulting mixture has a mass of 135 grams. What is the value of <em>x</em>?`,
      options: [{ id: `A`, text: `15` }, { id: `B`, text: `30` }, { id: `C`, text: `45` }, { id: `D`, text: `60` }],
      answer: `D` },

    { id: `nub-math-m2-13`, domain: `Geometry and Trigonometry`, skill: `Lines in the coordinate plane`, difficulty: `hard`, type: `mcq`,
      prompt: `<svg viewBox="0 0 420 420" role="img" aria-label="figure" style="max-width:340px;width:100%;display:block;margin:6px auto"><g stroke='var(--border)' stroke-width='0.7'><line x1='10' y1='10' x2='10' y2='410'/><line x1='30' y1='10' x2='30' y2='410'/><line x1='50' y1='10' x2='50' y2='410'/><line x1='70' y1='10' x2='70' y2='410'/><line x1='90' y1='10' x2='90' y2='410'/><line x1='110' y1='10' x2='110' y2='410'/><line x1='130' y1='10' x2='130' y2='410'/><line x1='150' y1='10' x2='150' y2='410'/><line x1='170' y1='10' x2='170' y2='410'/><line x1='190' y1='10' x2='190' y2='410'/><line x1='210' y1='10' x2='210' y2='410'/><line x1='230' y1='10' x2='230' y2='410'/><line x1='250' y1='10' x2='250' y2='410'/><line x1='270' y1='10' x2='270' y2='410'/><line x1='290' y1='10' x2='290' y2='410'/><line x1='310' y1='10' x2='310' y2='410'/><line x1='330' y1='10' x2='330' y2='410'/><line x1='350' y1='10' x2='350' y2='410'/><line x1='370' y1='10' x2='370' y2='410'/><line x1='390' y1='10' x2='390' y2='410'/><line x1='410' y1='10' x2='410' y2='410'/><line x1='10' y1='10' x2='410' y2='10'/><line x1='10' y1='30' x2='410' y2='30'/><line x1='10' y1='50' x2='410' y2='50'/><line x1='10' y1='70' x2='410' y2='70'/><line x1='10' y1='90' x2='410' y2='90'/><line x1='10' y1='110' x2='410' y2='110'/><line x1='10' y1='130' x2='410' y2='130'/><line x1='10' y1='150' x2='410' y2='150'/><line x1='10' y1='170' x2='410' y2='170'/><line x1='10' y1='190' x2='410' y2='190'/><line x1='10' y1='210' x2='410' y2='210'/><line x1='10' y1='230' x2='410' y2='230'/><line x1='10' y1='250' x2='410' y2='250'/><line x1='10' y1='270' x2='410' y2='270'/><line x1='10' y1='290' x2='410' y2='290'/><line x1='10' y1='310' x2='410' y2='310'/><line x1='10' y1='330' x2='410' y2='330'/><line x1='10' y1='350' x2='410' y2='350'/><line x1='10' y1='370' x2='410' y2='370'/><line x1='10' y1='390' x2='410' y2='390'/></g><line x1='10' y1='210' x2='410' y2='210' stroke='var(--fg)' stroke-width='1.6'/><line x1='210' y1='10' x2='210' y2='410' stroke='var(--fg)' stroke-width='1.6'/><text x='399' y='203' fill='var(--fg)' font-size='13' font-style='italic'>x</text><text x='215' y='22' fill='var(--fg)' font-size='13' font-style='italic'>y</text><text x='214' y='226' fill='var(--fg)' font-size='11'>O</text><text x='50' y='230' text-anchor='middle' fill='var(--fg)' font-size='11'>&minus;8</text><text x='130' y='230' text-anchor='middle' fill='var(--fg)' font-size='11'>&minus;4</text><text x='290' y='230' text-anchor='middle' fill='var(--fg)' font-size='11'>4</text><text x='370' y='230' text-anchor='middle' fill='var(--fg)' font-size='11'>8</text><text x='202' y='54' text-anchor='end' fill='var(--fg)' font-size='11'>8</text><text x='202' y='134' text-anchor='end' fill='var(--fg)' font-size='11'>4</text><text x='202' y='294' text-anchor='end' fill='var(--fg)' font-size='11'>&minus;4</text><text x='202' y='374' text-anchor='end' fill='var(--fg)' font-size='11'>&minus;8</text><line x1='146' y1='10' x2='306' y2='410' stroke='var(--fg)' stroke-width='2.5'/><text x='118' y='46' fill='var(--fg)' font-size='14' font-style='italic'>k</text><circle cx='210' cy='170' r='4.5' fill='var(--fg)'/><circle cx='250' cy='270' r='4.5' fill='var(--fg)'/></svg><div class="tiny faint" style="text-align:center;margin:2px 0 8px">Line k in the xy-plane.</div>Line <em>k</em> is shown in the <em>xy</em>-plane. Line <em>j</em> (not shown) is perpendicular to line <em>k</em> and passes through the point (19, 23). What is the <em>y</em>-coordinate of the <em>y</em>-intercept of line <em>j</em>?`,
      options: [{ id: `A`, text: `&minus;39/4` }, { id: `B`, text: `&minus;49/2` }, { id: `C`, text: `141/2` }, { id: `D`, text: `77/5` }],
      answer: `D` },

    { id: `nub-math-m2-14`, domain: `Problem-Solving and Data Analysis`, skill: `Inference from sample statistics and experiments`, difficulty: `medium`, type: `mcq`,
      prompt: `For a study, a group of chipmunks will be selected from a habitat consisting of 220 chipmunks, and a group of prairie dogs will be selected from a habitat consisting of 190 prairie dogs. Some of the chipmunks and prairie dogs will be in a treatment group, and some of the chipmunks and prairie dogs will be in a control group. Which of the following is necessary for this study to attempt to establish a cause-and-effect relationship between two variables?`,
      options: [{ id: `A`, text: `The number of chipmunks in the treatment group is equal to the number of prairie dogs in the treatment group, and the number of chipmunks in the control group is equal to the number of prairie dogs in the control group.` }, { id: `B`, text: `The chipmunks and the prairie dogs are randomly assigned to the treatment and control groups.` }, { id: `C`, text: `The chipmunks and the prairie dogs are randomly selected from their respective habitats.` }, { id: `D`, text: `The average age of the chipmunks in the treatment group is equal to the average age of the prairie dogs in the treatment group, and the average age of the chipmunks in the control group is equal to the average age of the prairie dogs in the control group.` }],
      answer: `B` },

    { id: `nub-math-m2-15`, domain: `Advanced Math`, skill: `Exponential functions`, difficulty: `hard`, type: `mcq`,
      prompt: `A certain investment account offers a special interest rate for the first 4 months the account is open followed by a lower interest rate for the remainder of the time the account is open. Akeyla opened one of these accounts with an original account balance of $700.00 and did not make any other deposits or withdrawals. 4 months after Akeyla opened the account, the balance had increased by 0.6% of the original balance. 6 months after Akeyla opened the account, the balance had increased by an additional 0.1% of the balance at the end of the first 4 months. Every 2 months after the first 6 months, the balance had increased by an additional 0.1% of the balance 2 months before. Which of the following equations could represent the account balance <em>B</em>(<em>x</em>), in dollars, <em>x</em> months after the account was opened, where <em>x</em> &ge; 4?`,
      options: [{ id: `A`, text: `<em>B</em>(<em>x</em>) = 704.20(1.001)<sup>(<em>x</em>&minus;4)/2</sup>` }, { id: `B`, text: `<em>B</em>(<em>x</em>) = 700.00(1.001)<sup>(<em>x</em>&minus;4)/2</sup>` }, { id: `C`, text: `<em>B</em>(<em>x</em>) = 704.20(1.001)<sup>2(<em>x</em>&minus;4)</sup>` }, { id: `D`, text: `<em>B</em>(<em>x</em>) = 700.00(1.001)<sup>2(<em>x</em>&minus;4)</sup>` }],
      answer: `A` },

    { id: `nub-math-m2-16`, domain: `Problem-Solving and Data Analysis`, skill: `Ratios, rates, proportional relationships, and units`, difficulty: `medium`, type: `grid`,
      prompt: `As the size of a firework&rsquo;s shell increases, the height above the ground when the firework bursts increases. For a firework to burst 1,075 feet above the ground, a firework&rsquo;s shell in the shape of a sphere with a volume of 542.68 cubic inches could be used. To the nearest whole number, what is the volume of this firework&rsquo;s shell in cubic centimeters? (1 inch = 2.54 centimeters)`,
      answer: [`8893`] },

    { id: `nub-math-m2-17`, domain: `Advanced Math`, skill: `Nonlinear equations`, difficulty: `hard`, type: `mcq`,
      prompt: `&radic;((<em>x</em> + 15)<sup>2</sup>) = <em>x</em> + 15<br>What is the least value of <em>x</em> that is a solution to the given equation?`,
      options: [{ id: `A`, text: `&minus;16` }, { id: `B`, text: `&minus;15` }, { id: `C`, text: `0` }, { id: `D`, text: `15` }],
      answer: `B` },

    { id: `nub-math-m2-18`, domain: `Advanced Math`, skill: `Exponential functions`, difficulty: `hard`, type: `mcq`,
      prompt: `The function <em>f</em> is defined by <em>f</em>(<em>x</em>) = <em>a</em><sup><em>x</em></sup> &minus; <em>b</em>, where <em>a</em> and <em>b</em> are constants. In the <em>xy</em>-plane, the graph of <em>y</em> = <em>f</em>(<em>x</em>) passes through the points (<em>c</em>, 7) and (2<em>c</em>, 117), where <em>c</em> is a constant. Which of the following could be the value of <em>b</em>?`,
      options: [{ id: `A`, text: `4` }, { id: `B`, text: `17` }, { id: `C`, text: `110` }, { id: `D`, text: `124` }],
      answer: `A` },

    { id: `nub-math-m2-19`, domain: `Algebra`, skill: `Systems of two linear equations`, difficulty: `hard`, type: `grid`,
      prompt: `(4/5)<em>x</em> + (6/5)<em>y</em> = <em>g</em><br>(8/13)<em>x</em> + <em>hy</em> = <em>k</em><br>In the given system of equations, <em>g</em>, <em>h</em>, and <em>k</em> are constants. The system has infinitely many solutions. What is the value of <em>g</em>/<em>k</em>?`,
      answer: [`1.3`, `13/10`] },

    { id: `nub-math-m2-20`, domain: `Advanced Math`, skill: `Equivalent expressions`, difficulty: `hard`, type: `grid`,
      prompt: `34<em>z</em><sup>18</sup> + <em>bz</em><sup>9</sup> + 30<br>In the given expression, <em>b</em> is a positive integer. If <em>qz</em><sup>9</sup> + <em>r</em> is a factor of the expression, where <em>q</em> and <em>r</em> are positive integers, what is the greatest possible value of <em>b</em>?`,
      answer: [`1021`] },

    { id: `nub-math-m2-21`, domain: `Geometry and Trigonometry`, skill: `Area and volume`, difficulty: `medium`, type: `mcq`,
      prompt: `A right rectangular prism has a base area of 16<em>t</em> square centimeters (cm<sup>2</sup>). The length of the base of the rectangular prism is 8/3 cm, and the height of the rectangular prism is 9 cm. Which expression represents the surface area, in cm<sup>2</sup>, of the right rectangular prism?`,
      options: [{ id: `A`, text: `32<em>t</em> + 96` }, { id: `B`, text: `140<em>t</em> + 48` }, { id: `C`, text: `800<em>t</em> + 48` }, { id: `D`, text: `144<em>t</em>` }],
      answer: `B` },

    { id: `nub-math-m2-22`, domain: `Problem-Solving and Data Analysis`, skill: `Percentages`, difficulty: `hard`, type: `grid`,
      prompt: `The mass of object A is 498% of the mass of object B, and the mass of object A is 0.830% of the mass of object C. If the mass of object C is <em>p</em>% of the mass of object B, what is the value of <em>p</em>?`,
      answer: [`60000`] },
  ];

  Apex.bank.register({
    id: "dsat-2024-11-us-b",
    title: "November 2024",
    type: "digital",
    region: "US",
    version: "B",
    year: 2024,
    monthNum: 11,
    tagline: "US · Version B",
    description: "Digital SAT — November 2024 US prediction form, Version B (RW reordered into official SAT test order; math ordered easy to hard).",
    adaptive: false,
    sections: [
      { id: "rw", modules: [
        { id: "nub-rw-m1", stage: 1, name: "Reading and Writing — Module 1", minutes: 32, questions: RW_M1 },
        { id: "nub-rw-m2", stage: 2, variant: "hard", name: "Reading and Writing — Module 2 (Hard)", minutes: 32, questions: RW_M2 },
      ] },
      { id: "math", modules: [
        { id: "nub-math-m1", stage: 1, name: "Math — Module 1", minutes: 35, calculator: true, questions: MATH_M1 },
        { id: "nub-math-m2", stage: 2, variant: "hard", name: "Math — Module 2 (Hard)", minutes: 35, calculator: true, questions: MATH_M2 },
      ] },
    ],
  });
})();
