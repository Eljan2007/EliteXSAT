/* ==========================================================================
   Digital SAT - December 2024 (International), Version D.
   Rebuilt in EliteXSAT's native UI from teacher-authored SAT-style prediction
   forms (2027 Prediction December International). RW in canonical Digital SAT
   domain order; Math ordered easy -> hard. Answers solved independently; the
   compiled answer sheet (a student sheet) and the student's marked picks were
   treated as guides only, and conflicts are noted per-item in the build log
   (not shown to students). Math borrowed (compensation): Module 1 from Version C, Module 2 from Version A.
   No explanations. COMPLETE (98 q). */
(function () {
  const RW_M1 = [
    { id: `did-rw-m1-1`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `easy`, type: `mcq`,
      passage: `The following text is adapted from Yone Noguchi&rsquo;s 1914 memoir <em>The Story of Yone Noguchi</em>. Noguchi is returning home after eleven years abroad.<br><br>I reached Tsushima, my native town, at evening. I frightened my old father at the station, who was actually trying to find me among some other people. There is no wonder that he could not recognise me; I must have changed a great deal.`,
      prompt: `As used in the text, what does the word &ldquo;find&rdquo; most nearly mean?`,
      options: [{ id: `A`, text: `Discredit` }, { id: `B`, text: `Reveal` }, { id: `C`, text: `Affect` }, { id: `D`, text: `Locate` }],
      answer: `D` },

    { id: `did-rw-m1-2`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `easy`, type: `mcq`,
      passage: `The _____ Stacey Lee&rsquo;s book <em>Outrun the Moon</em> has been very positive. Many reviewers have praised the book, and it won the Asian/Pacific American Award for Literature.`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `confusion about` }, { id: `B`, text: `inspiration for` }, { id: `C`, text: `reception of` }, { id: `D`, text: `neglect of` }],
      answer: `C` },

    { id: `did-rw-m1-3`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `A speaker at a recent children&rsquo;s book publishing conference noted that, while many illustrators do excellent work, in her mind, no one has ever _____ Kathleen Atkins Wilson&rsquo;s work as the illustrator of <em>The Origin of Life on Earth: An African Creation Myth</em>: there is no better example of the form, according to the speaker.`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `convened` }, { id: `B`, text: `eclipsed` }, { id: `C`, text: `augmented` }, { id: `D`, text: `cited` }],
      answer: `B` },

    { id: `did-rw-m1-4`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<em>The Song of the Lark</em>, painted in the realist style by Jules Breton, depicts a barefoot peasant woman pausing in the fields at sunset and emphasizes accuracy in its portrayal of the experiences of ordinary working people. This style largely _____ the conventions of the romantic style evident in many paintings by Charles Gleyre, which instead accentuated their subjects&rsquo; positive traits by, for example, placing them in staged settings with expensive looking decorations and presenting them with smooth, unblemished skin.`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `rejected` }, { id: `B`, text: `imitated` }, { id: `C`, text: `extended` }, { id: `D`, text: `epitomized` }],
      answer: `A` },

    { id: `did-rw-m1-5`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `In the early days of television in the 1940s, many people thought that US television programs would rely on the financial support of ad agencies and commercial sponsors, much like radio did. But advertisers hesitated to jump into a new space, <u>particularly at a time when the manufacturing of new television sets was stalled due to the US&rsquo;s involvement in World War II</u>. Broadcasters, like the National Broadcasting Company (NBC), needed to persuade advertisers to support their programming despite not knowing whether there would be a robust television audience to begin with.`,
      prompt: `Which choice best describes the function of the underlined phrase in the text as a whole?`,
      options: [{ id: `A`, text: `It explains why a type of television programming was popular at the time.` }, { id: `B`, text: `It compares the beginnings of radio programming with the beginnings of television programming in the United States.` }, { id: `C`, text: `It describes how broadcasters attempted to convince advertisers to support television.` }, { id: `D`, text: `It identifies a specific reason behind some advertisers&rsquo; hesitance to support television.` }],
      answer: `D` },

    { id: `did-rw-m1-6`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `The following text is from Armando Palacio Vald&eacute;s&rsquo;s short story &ldquo;The Love of Clotilde,&rdquo; originally published in Spanish in 1884. In the story, Don Jer&oacute;nimo is a financial supporter of artists in the theater.<br><br>Any youth from the provinces who arrived in Madrid with a drama in his pocket could take <u>no surer road</u> to seeing it produced than that which led to the home of Don Jer&oacute;nimo. One and all, he received them with open arms, the good and the bad alike. There is no denying that, since he was rather brusque in his ways, he never spared the young authors who asked his advice and read him their productions, but criticized vigorously, even to the verge of insult.`,
      prompt: `Which choice best describes the function of the underlined portion in the text as a whole?`,
      options: [{ id: `A`, text: `It suggests that Don Jer&oacute;nimo does not enjoy financially supporting playwrights.` }, { id: `B`, text: `It creates a contrast between the reputation of a young playwright and that of Don Jer&oacute;nimo.` }, { id: `C`, text: `It emphasizes the degree to which Don Jer&oacute;nimo&rsquo;s support is consequential for inexperienced playwrights.` }, { id: `D`, text: `It explains Don Jer&oacute;nimo&rsquo;s view of the quality of theatrical works of the time.` }],
      answer: `C` },

    { id: `did-rw-m1-7`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `<em>Dubautia latifolia</em> is a species in a family of plants <u>known collectively as the silversword alliance</u>, all of which grow only on the Hawaiian Islands. Members of this alliance exhibit an extraordinary range of phenotypes, with some species maturing into vines and others into shrubs and trees. All species in the alliance descended from a single ancestral tarweed plant that arrived on the islands around 5 million years ago. The tarweed&rsquo;s descendants diversified into distinct species as they adapted to live in the wide variety of habitats found on the Hawaiian Islands.`,
      prompt: `Which choice best describes the function of the underlined phrase in the text as a whole?`,
      options: [{ id: `A`, text: `It supplies the name used to refer to a group of related plant species.` }, { id: `B`, text: `It lists species from a family of plants found only on the Hawaiian Islands.` }, { id: `C`, text: `It explains why <em>Dubautia latifolia</em> is unique among members of the silversword alliance.` }, { id: `D`, text: `It provides the common name for the <em>Dubautia latifolia</em> plant.` }],
      answer: `A` },

    { id: `did-rw-m1-8`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `medium`, type: `mcq`,
      passage: `Mexican textile artist Victoria Villasana weaves stories of triumph, using her unique method of applying colorful yarn to photographs of people. In some works, Villasana focuses on celebrating cultural icons who are people of color, as she does in her depiction of musician and composer Nina Simone. However, in other works, Villasana honors ordinary people, as she does in her captivating portrayal of a woman making tortillas. Villasana sees both of these approaches as ways of depicting the power and interconnectedness of all people.`,
      prompt: `Which choice best states the main idea of the text?`,
      options: [{ id: `A`, text: `Villasana&rsquo;s works focus on recognizing both famous and everyday examples of human strength and connection.` }, { id: `B`, text: `Villasana began her artistic career by painting portraits of famous people and then transitioned to depicting everyday people instead.` }, { id: `C`, text: `Villasana&rsquo;s depiction of Nina Simone receives more attention from scholars than her depiction of a woman making tortillas does.` }, { id: `D`, text: `Villasana&rsquo;s portrayal of a woman making tortillas focuses more on human connection than it does on human resilience.` }],
      answer: `A` },

    { id: `did-rw-m1-9`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `medium`, type: `mcq`,
      passage: `Community science involves professional scientists collaborating with members of the public to study a topic. This approach to research can promote community engagement by providing youth with learning experiences outside of the classroom. It&rsquo;s also very effective because it greatly increases the amount of data that can be collected, such as when biologist Grace Herzel and colleagues studied butterfly wing patterns and their relation to behavior and used findings reported by hundreds of students and community members in northwestern Arkansas.`,
      prompt: `Which choice best states the main idea of the text?`,
      options: [{ id: `A`, text: `A community science approach allows researchers to collect significantly more data even though it&rsquo;s unlikely to have much of an effect on learning outside the classroom.` }, { id: `B`, text: `Grace Herzel and colleagues used a community science approach in their butterfly research and were surprised at the effect this had on learning outside the classroom.` }, { id: `C`, text: `A community science approach can increase learning outside the classroom and generate large amounts of data, benefiting both communities and researchers.` }, { id: `D`, text: `A community science approach can benefit communities by increasing learning outside the classroom, but it&rsquo;s less likely to help researchers obtain accurate data.` }],
      answer: `C` },

    { id: `did-rw-m1-10`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `medium`, type: `mcq`,
      passage: `<div style="text-align:center;font-weight:600;font-size:12px;margin:2px 0">Names and Movements of Snakes during Trials</div><table style="border-collapse:collapse;margin:6px auto"><tr><th style="border:1px solid var(--border);padding:3px 12px">Name of snake</th><th style="border:1px solid var(--border);padding:3px 12px">Species name</th><th style="border:1px solid var(--border);padding:3px 12px">Common name</th><th style="border:1px solid var(--border);padding:3px 12px">Direction of movement</th></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Glory</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center"><em>Acanthophis antarcticus</em></td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">common death adder</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">away from sound</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Dorsal Girl</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center"><em>Aspidites ramsayi</em></td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">woma python</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">toward sound</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Squishy</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center"><em>Oxyuranus scutellatus</em></td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">coastal taipan</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">away from sound</td></tr></table>Biologists Christina Zdenek, Damian Candusso, and their team exposed various snakes to airborne sound and recorded whether they moved toward or away from the sound. The table shows the results for three of the snakes observed in the study. Based on the table, a student concludes that Glory and Squishy behaved similarly in the sound trials.`,
      prompt: `Which choice best describes data from the table that support the student&rsquo;s conclusion?`,
      options: [{ id: `A`, text: `Dorsal Girl and Glory both moved toward the sound.` }, { id: `B`, text: `Squishy moved toward the sound, while Dorsal Girl moved away from it.` }, { id: `C`, text: `Squishy moved toward the sound, while Glory moved away from it.` }, { id: `D`, text: `Glory and Squishy both moved away from the sound.` }],
      answer: `D` },

    { id: `did-rw-m1-11`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `Among the most visited art museums in the world, the Museo del Prado in Madrid had approximately 3.5 million visitors in 2019. The Museo del Prado also offers virtual tours that art lovers can view online for free. Although there were initial concerns that people who viewed the virtual tours would then consider an in-person visit unnecessary, museum administrators claim that their surveys of in-person visitors show that those concerns were unjustified.`,
      prompt: `Which statement, if true, would most directly support the administrators&rsquo; claim?`,
      options: [{ id: `A`, text: `Most surveyed visitors to the Museo del Prado indicated that they were unaware of the virtual tours before their first in-person visit.` }, { id: `B`, text: `Most surveyed visitors to the Museo del Prado indicated that they lived somewhere other than Madrid.` }, { id: `C`, text: `Many surveyed visitors to the Museo del Prado indicated that the virtual tours convinced them to plan an in-person visit.` }, { id: `D`, text: `Many surveyed visitors to the Museo del Prado indicated that they would likely view the virtual tours in order to reminisce about their in-person visit.` }],
      answer: `C` },

    { id: `did-rw-m1-12`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `medium`, type: `mcq`,
      passage: `<em>The Age of Innocence</em> is a 1920 novel by Edith Wharton set in New York City in the 1870s. In the novel, Newland Archer attends an opera; in the audience is May Welland, with whom he is romantically involved. Newland visualizes the details of a future with May: ______`,
      prompt: `Which quotation from <em>The Age of Innocence</em> best illustrates the claim?`,
      options: [{ id: `A`, text: `&ldquo;[May] dropped her eyes to the immense bouquet of lilies-of-the-valley on her knee, and Newland Archer saw her white-gloved finger-tips touch the flowers softly.&rdquo;` }, { id: `B`, text: `&ldquo;Newland Archer, leaning against the wall at the back of the club box [where his seat was], turned his eyes from the stage and scanned the opposite side of the house.&rdquo;` }, { id: `C`, text: `&ldquo;Though there was already talk...of a new Opera House which should compete in costliness and splendour with those of the great European capitals, the world of fashion was still content to reassemble every winter in the shabby red and gold boxes of the sociable old Academy [of Music].&rdquo;` }, { id: `D`, text: `&ldquo;Already [Newland&rsquo;s] imagination, leaping ahead of the engagement ring, the betrothal kiss and the [wedding] march from Lohengrin, pictured [May] at his side.&rdquo;` }],
      answer: `D` },

    { id: `did-rw-m1-13`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `medium`, type: `mcq`,
      passage: `<em>The Clouds</em> is a 423 BCE play by Aristophanes, originally written in ancient Greek. At the time, professional intellectuals called sophists taught customers rhetorical techniques to use in public speaking, along with providing instruction in other subjects. In the play, Aristophanes satirizes sophists as teaching people to speak dishonestly, as seen when the character ______`,
      prompt: `Which choice most effectively uses a quotation from a translation of <em>The Clouds</em> to illustrate the claim?`,
      options: [{ id: `A`, text: `Strepsiades encourages his son to learn to be a sophist, saying, &ldquo;If you have any concern for your father&rsquo;s patrimony, become one of them.&rdquo;` }, { id: `B`, text: `Pheidippides says, after taking lessons from a sophist, &ldquo;How pleasant it is to be acquainted with new and clever things, and to be able to despise the established laws!&rdquo;` }, { id: `C`, text: `Strepsiades, taking lessons from a sophist, says he wants to become &ldquo;a fabricator of falsehoods, inventive of words, a practiced knave in lawsuits,... a fox, a sharper, a slippery knave, a dissembler, a slippery fellow, an impostor.&rdquo;` }, { id: `D`, text: `Socrates, a sophist, says to a potential customer, &ldquo;I wish to briefly learn from you if you are possessed of a good memory.&rdquo;` }],
      answer: `C` },

    { id: `did-rw-m1-14`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `medium`, type: `mcq`,
      passage: `The musical <em>Hadestown</em> was produced off-Broadway in New York in 2016. A revised version of the musical premiered on Broadway in 2019, in a larger production. In a review of the Broadway production, theater critic Jesse Green enthusiastically praised the musical&rsquo;s storytelling. However, Green also explained that he had seen the earlier version of <em>Hadestown</em> in 2016 and had found the storytelling to be very confusing. This suggests that in Green&rsquo;s view, _____`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `<em>Hadestown</em> improved greatly between 2016 and its premiere on Broadway.` }, { id: `B`, text: `<em>Hadestown</em> should have had a larger production in 2019 than it actually did.` }, { id: `C`, text: `the 2019 version of <em>Hadestown</em> was less enjoyable than the 2016 version.` }, { id: `D`, text: `the 2016 version of <em>Hadestown</em> had fewer storytelling problems than the 2019 version did.` }],
      answer: `A` },

    { id: `did-rw-m1-15`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `Biochemists I. Sam Saguy and Eli J. Pinthus studied the mass and heat transfer processes that occur when foods, such as the Indian snacks dahibara aludam and paneer pakora, are fried in oil. During frying, water in the crust evaporates, leaving voids that oil can fill, thereby increasing the food&rsquo;s fat content. As the process continues, water from the food&rsquo;s center moves to the crust as long as the crust remains permeable. Therefore, the less moisture a food loses during frying, _____`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `the crispier the crust will be when frying is completed.` }, { id: `B`, text: `the less the fat content is increased through frying.` }, { id: `C`, text: `the slower the crust will lose its permeability.` }, { id: `D`, text: `the higher the temperature must be to fry the food.` }],
      answer: `B` },

    { id: `did-rw-m1-16`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `Water boils at around 212&deg;F at sea level, but in Butte, Montana (elevation: 5,538 feet above sea level), it boils at around 202&deg;F. Food writer J. Kenji L&oacute;pez-Alt, who explores the science behind cooking, _____ that lower boiling points at higher elevations &ldquo;can wreak all sorts of havoc on recipes.&rdquo;`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `are explaining` }, { id: `B`, text: `explains` }, { id: `C`, text: `explain` }, { id: `D`, text: `have explained` }],
      answer: `B` },

    { id: `did-rw-m1-17`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `Many Farms Chapter is one of the 110 chapters of the Navajo Nation (<em>Naabeeh&oacute; Bin&aacute;h&aacute;sdzo</em>). The chapter, known as <em>D&aacute;&rsquo;&aacute;k&rsquo;eh Hal&aacute;ni</em> in the Navajo language (<em>Din&eacute; bizaad</em>), was the subject of a profile ______ in the <em>Navajo Times</em> on August 22, 2013.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `appearing` }, { id: `B`, text: `has appeared` }, { id: `C`, text: `appeared` }, { id: `D`, text: `appears` }],
      answer: `A` },

    { id: `did-rw-m1-18`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `With the short drama <em>Kaashkitamaashoo</em>, Cree director Chantelle Marie Anderson joined the growing number of Indigenous women adding their voices to North American _____ film, a selection of the Native Women in Film Festival, is about a woman exploring her M&eacute;tis identity.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `cinema her` }, { id: `B`, text: `cinema and her` }, { id: `C`, text: `cinema. Her` }, { id: `D`, text: `cinema, her` }],
      answer: `C` },

    { id: `did-rw-m1-19`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `Working with equipment designed for a billionths of a meter scale, _____`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `synthesized selenium nanoparticles used to target harmful cells in the body without damaging other cells have been created by nanoengineers.` }, { id: `B`, text: `nanoengineers have synthesized selenium nanoparticles that are used to target harmful cells in the body without damaging other cells.` }, { id: `C`, text: `nanoengineers&rsquo; synthesized selenium nanoparticles are used to target harmful cells in the body without damaging other cells.` }, { id: `D`, text: `selenium nanoparticles that have been synthesized by nanoengineers are used to target harmful cells in the body without damaging other cells.` }],
      answer: `B` },

    { id: `did-rw-m1-20`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `hard`, type: `mcq`,
      passage: `Just as the Cavendish balance in physics is named not after its first inventor but after the natural philosopher who further developed the device, so too does the Chernoff bound in probability theory take its name from a _____ who was not the first to identify the mathematical bound.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `polymath&mdash;in this case, Herman Chernoff&mdash;` }, { id: `B`, text: `polymath: in this case, Herman Chernoff,` }, { id: `C`, text: `polymath&mdash;in this case, Herman Chernoff,` }, { id: `D`, text: `polymath in this case, Herman Chernoff,` }],
      answer: `A` },

    { id: `did-rw-m1-21`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `hard`, type: `mcq`,
      passage: `Jetties&mdash;long, narrow structures that extend from a landmass into the water&mdash;are often constructed to protect coastlines from erosion. Jetties can sometimes have the opposite ______ obstructing the natural flow of sand along the shore can lead to increased erosion in some areas.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `effect, though,` }, { id: `B`, text: `effect, though;` }, { id: `C`, text: `effect, though` }, { id: `D`, text: `effect; though` }],
      answer: `B` },

    { id: `did-rw-m1-22`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `easy`, type: `mcq`,
      passage: `Guard cells are specialized cells that are part of a plant&rsquo;s pores. These cells help regulate the amount of carbon dioxide a plant takes in. _____ they help regulate a plant&rsquo;s water loss.`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `Previously,` }, { id: `B`, text: `Additionally,` }, { id: `C`, text: `In conclusion,` }, { id: `D`, text: `Instead,` }],
      answer: `B` },

    { id: `did-rw-m1-23`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `Helike, one of the eighty known moons of Jupiter, is designated as Jupiter XLV (&ldquo;XLV&rdquo; means &ldquo;45&rdquo;). Roman numerals typically indicate the order in which the moons were named rather than the order of their proximity to Jupiter. It is incorrect to assume, _____ that Helike is the forty-fifth moon from Jupiter in terms of proximity.`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `however,` }, { id: `B`, text: `finally,` }, { id: `C`, text: `then,` }, { id: `D`, text: `moreover,` }],
      answer: `C` },

    { id: `did-rw-m1-24`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `While researching a topic, a student has taken the following notes:<ul><li>The Los Ajos-La Madera Mountains are a mountain range located in northwestern Mexico.</li><li>The range is one of the dozens of &ldquo;sky islands&rdquo; in the southwestern US and northwestern Mexico.</li><li>A sky island is an isolated mountain range whose environment differs drastically from that of the surrounding lowlands.</li><li>The US Forest Service (USFS) said, &ldquo;The mountains are &lsquo;islands&rsquo; surrounded by deserts that are &lsquo;seas.&rsquo;&rdquo;</li><li>The USFS said, &ldquo;Each Sky Island is a unique ecosystem.&rdquo;</li></ul>`,
      prompt: `The student wants to provide an example of a sky island. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `In the southwestern US and northwestern Mexico, there are dozens of sky islands: isolated mountain ranges whose environments differ drastically from that of the surrounding lowlands.` }, { id: `B`, text: `The USFS considers each of the sky islands, whose environments differ drastically from that of the surrounding lowlands, to be a &ldquo;unique ecosystem.&rdquo;` }, { id: `C`, text: `There are dozens of sky islands in the southwestern US and northwestern Mexico, such as the Los Ajos-La Madera Mountains.` }, { id: `D`, text: `Sky islands are isolated mountain ranges whose environments differ drastically from that of the surrounding lowlands; as the USFS puts it, &ldquo;the mountains are &lsquo;islands&rsquo; surrounded by deserts that are &lsquo;seas.&rsquo;&rdquo;` }],
      answer: `C` },

    { id: `did-rw-m1-25`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `While researching a topic, a student has taken the following notes:<br><ul><li>Dinosaur fossil specimens can be found at science museums all over the world.</li><li>A dinosaur fossil specimen nicknamed Stan is housed at the Black Hills Institute in Hill City, South Dakota.</li><li>Stan, a <em>Tyrannosaurus</em>, lived in the Late Cretaceous period.</li><li>A dinosaur fossil specimen nicknamed Horridus is housed at the Melbourne Museum in Melbourne, Australia.</li><li>Horridus, a <em>Triceratops</em>, lived in the Late Cretaceous period.</li></ul>`,
      prompt: `The student wants to emphasize a similarity between the two dinosaur fossil specimens. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `Both the <em>Tyrannosaurus</em> fossil specimen Stan and the <em>Triceratops</em> fossil specimen Horridus lived in the Late Cretaceous period.` }, { id: `B`, text: `While the <em>Tyrannosaurus</em> fossil specimen Stan is in Hill City, South Dakota, the <em>Triceratops</em> fossil specimen Horridus is in Melbourne, Australia.` }, { id: `C`, text: `Dinosaur fossil specimens can be found at science museums all over the world, including in Hill City, South Dakota, and Melbourne, Australia.` }, { id: `D`, text: `The Black Hills Institute is home to Stan, a <em>Tyrannosaurus</em> fossil specimen from the Late Cretaceous period.` }],
      answer: `A` },

    { id: `did-rw-m1-26`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `While researching a topic, a student has taken the following notes:<ul><li>Grimanesa Amoros is a Peruvian American artist well known for her LED light sculptures.</li><li>Her sculpture <em>Uros House</em> is made of smooth multicolored LED domes.</li><li>It occupies 250 cubic feet of space.</li><li>Her sculpture <em>Golden Connection</em> is made of entangled blue and white LED tubes.</li><li>It occupies 100,000 cubic feet of space.</li></ul>`,
      prompt: `The student wants to emphasize a similarity between <em>Uros House</em> and <em>Golden Connection</em>. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `<em>Uros House</em> is an LED light sculpture made by Grimanesa Amoros, as is <em>Golden Connection</em>.` }, { id: `B`, text: `The smooth LED domes of Grimanesa Amoros&rsquo;s <em>Uros House</em> stand in contrast to the tangled LED tubes of <em>Golden Connection</em>.` }, { id: `C`, text: `Grimanesa Amoros is the artist behind <em>Uros House</em>&mdash;a sculpture made of smooth multicolored LED domes.` }, { id: `D`, text: `At 100,000 cubic feet in size, Grimanesa Amoros&rsquo;s <em>Golden Connection</em> cuts a larger figure than the 250-cubic-foot <em>Uros House</em>.` }],
      answer: `A` },

    { id: `did-rw-m1-27`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `While researching a topic, a student has taken the following notes:<ul><li>Researchers in a 2021 study wanted to determine the rate at which 17 languages conveyed both information and syllables.</li><li>They calculated the bits of information conveyed per second (the IR, or information rate).</li><li>The IR was found to be approximately consistent across the 17 languages (an average of 39 bits per second).</li><li>They calculated the number of syllables spoken per second (the SR, or syllable rate).</li><li>Spanish had the second-fastest SR (7.7 syllables per second).</li><li>Vietnamese had the sixteenth-fastest SR (5.3 syllables per second).</li></ul>`,
      prompt: `The student wants to present an overview of the study&rsquo;s findings. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `Researchers found that information was conveyed more quickly in Spanish, at 7.7 syllables per second, than in Vietnamese, at 5.3 syllables per second.` }, { id: `B`, text: `The 2021 study determined the information rate (IR) of 17 languages in bits of information conveyed per second.` }, { id: `C`, text: `Though some of the languages differed in number of syllables spoken per second, all 17 conveyed information at roughly the same rate.` }, { id: `D`, text: `Vietnamese had the sixteenth-fastest syllable rate, lower than that of Spanish, which had the second-fastest; however, Spanish had the lower information rate of the two.` }],
      answer: `C` },
  ];

  const RW_M2 = [
    { id: `did-rw-m2-1`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `easy`, type: `mcq`,
      passage: `Possessing an outstanding collection of public art, Chicago has everything from monumental sculptures like Pablo Picasso&rsquo;s <em>Chicago Picasso</em> at sites like Daley Plaza to innovative street art like Justus Roe&rsquo;s mural <em>Standing Wave</em> located on South State Street. The _____ public art on display in the city can thus satisfy any art lover.`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `controversy over` }, { id: `B`, text: `breadth of` }, { id: `C`, text: `apathy toward` }, { id: `D`, text: `confusion about` }],
      answer: `B` },

    { id: `did-rw-m2-2`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `In a 2018 article about films depicting the experiences of Black Americans, critics for the <em>New York Times</em> praise Carl Franklin&rsquo;s 1995 film <em>Devil in a Blue Dress</em> as &ldquo;picture-perfect&rdquo; and Cheryl Dunye&rsquo;s 1996 film <em>The Watermelon Woman</em> as &ldquo;heartbreaking and inspiring.&rdquo; Fans of the two films hope that such _____ will attract new audiences to these works.`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `acclaim` }, { id: `B`, text: `ambivalence` }, { id: `C`, text: `foresight` }, { id: `D`, text: `impartiality` }],
      answer: `A` },

    { id: `did-rw-m2-3`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `The fossil remains of the individual known as Misliya-1, discovered in Israel in 2002, can help paleoanthropologists not only _____ steps in the evolution of hominids but also illuminate the Pleistocene epoch generally, revealing important details about the time in which Misliya-1 lived.`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `yield` }, { id: `B`, text: `discern` }, { id: `C`, text: `prioritize` }, { id: `D`, text: `exploit` }],
      answer: `B` },

    { id: `did-rw-m2-4`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `Spanning the 1920s to the 1980s, Mexican architect Luis Barrag&aacute;n&rsquo;s prolific career evolved through distinct phases. As epitomized by the house in Calle Pedro Loza in Guadalajara, many of Barrag&aacute;n&rsquo;s first projects integrated traditional Mexican building techniques into Mediterranean designs. Extensive travels abroad later sparked an engagement with modernist and functionalist aesthetics&mdash;styles whose emphasis on utility and whose repudiation of traditional architecture&rsquo;s more ornamental elements are readily apparent in Barrag&aacute;n&rsquo;s Pizarro Su&aacute;rez House.`,
      prompt: `Which choice best describes the overall structure of the text?`,
      options: [{ id: `A`, text: `It presents a general claim about a particular architect&rsquo;s career, describes a design approach that typified the early stages of that career, and then explains a later shift in that career.` }, { id: `B`, text: `It names a famous architect, outlines the primary aesthetic model evident in his work, and then offers examples illustrating his commitment to that model.` }, { id: `C`, text: `It provides famous examples of an architect&rsquo;s projects, describes the original inspiration for those projects, and then suggests that lesser-known projects by that architect arose from other sources of inspiration.` }, { id: `D`, text: `It summarizes the career of a particular architect, states how that architect&rsquo;s heritage influenced his career choice, and then emphasizes the impact of that architect&rsquo;s career.` }],
      answer: `A` },

    { id: `did-rw-m2-5`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `hard`, type: `mcq`,
      passage: `<u>Individual elephants and Arctic herbivores such as caribou tend to have fixed geographic ranges throughout their lifetimes</u>, which had prompted some researchers to speculate that the Arctic woolly mammoth, an extinct elephantid, might have exhibited similar behavior. Mammoth tusks grew in sequential layers, incorporating ingested minerals and organics, and so each ivory stratum reflects the ratio of strontium isotopes (<sup>87</sup>Sr/<sup>86</sup>Sr) in the local environment; thus, the sequence of strata shows where the animal roamed during life. Recent analysis of the strontium ratios in the strata of one Arctic woolly mammoth tusk in relation to the geographic distribution of strontium ratios in the environment shows the animal&rsquo;s range begin to expand as it reached sexual maturity, only to contract again in its final 1.5 years.`,
      prompt: `Which choice best describes the function of the underlined statement in the text as a whole?`,
      options: [{ id: `A`, text: `It discusses a characteristic shared by certain animals in order to explain why researchers raised a possibility that turned out not to be supported by data described later in the text.` }, { id: `B`, text: `It illustrates a pattern of behavior among certain animals in order to present a theory about exceptions to that pattern that is weakened by a finding described later in the text.` }, { id: `C`, text: `It describes a similarity in the behavior of certain animals in order to show why a method described later in the text did not reveal whether another animal also showed that behavior.` }, { id: `D`, text: `It introduces a trait shared by certain animals in order to contextualize a hypothesis about the origin of that trait that is advanced later in the text.` }],
      answer: `A` },

    { id: `did-rw-m2-6`, domain: `Information and Ideas`, skill: `Cross-Text Connections`, difficulty: `hard`, type: `mcq`,
      passage: `<strong>Text 1</strong><br>In separate studies, Joanna Weremijewicz and colleagues and Xinhua He and colleagues examined whether plants transfer nutrients to one another using a common mycorrhizal network (CMN)&mdash;a lattice of fungal strands in the soil. Weremijewicz and colleagues excluded all pathways other than the CMN by using barriers to keep the plants&rsquo; root systems separate while allowing mycorrhizal strands through&mdash;a crucial step He and colleagues&rsquo; study did not take.<br><br><strong>Text 2</strong><br>Weremijewicz and colleagues took the necessary precaution of separating the plants&rsquo; root systems (thereby excluding root-to-root transmission). However, any barrier used must allow the thread-like hyphae of a CMN to pass through, and this permeability would also allow liquids through. Thus, the researchers&rsquo; experimental design cannot ensure that any nutrient transfer observed can be attributed to a CMN and not to some other pathway.`,
      prompt: `Based on the texts, the author of Text 1 and the author of Text 2 would most likely agree with which statement?`,
      options: [{ id: `A`, text: `Excluding root-to-root transfer of nutrients between plants is sufficient to ensure that any observed nutrient transfer must involve a CMN.` }, { id: `B`, text: `A barrier that is impervious to both roots and fungal strands is necessary to evaluate nutrient transfer via a CMN.` }, { id: `C`, text: `He and colleagues&rsquo; study did not find convincing evidence of nutrient transfer between individual plants.` }, { id: `D`, text: `The barriers used in Weremijewicz and colleagues&rsquo; study effectively excluded root-to-root transmission of nutrients.` }],
      answer: `D` },

    { id: `did-rw-m2-7`, domain: `Information and Ideas`, skill: `Cross-Text Connections`, difficulty: `hard`, type: `mcq`,
      passage: `<strong>Text 1</strong><br>For thousands of years, O&rsquo;odham farmers in the Sonoran desert of the southwestern US and northern Mexico have cultivated organ pipe fruit and beans, sometimes planting these species together so that the organ pipe cacti provide shade for tepary beans. Doing so helps protect tepary beans from the harshest heat and light and thereby helps prevent soil moisture from evaporating.<br><br><strong>Text 2</strong><br>Tepary beans are well adapted to growing in the desert but grow best when shaded. Inspired by O&rsquo;odham farmers, who often strategically plant tepary beans in the shade of sun-hardy species like organ pipe cacti for protection from the sun and heat, Gary Nabhan and colleagues planted tepary beans in the shade of solar panels in the Sonoran desert and found that the plants grew well, suggesting to Nabhan and colleagues that the panels provide a benefit similar to that provided by organ pipe cacti.`,
      prompt: `Based on the texts, the author of Text 1 and the author of Text 2 would most likely agree on which point?`,
      options: [{ id: `A`, text: `Compared with Nabhan&rsquo;s approach, the O&rsquo;odham approach has the advantage of producing beans.` }, { id: `B`, text: `Nabhan&rsquo;s team&rsquo;s method could be refined to more actively prevent soil moisture from evaporating.` }, { id: `C`, text: `Organ pipe cacti can provide shade that protects tepary beans from high-intensity heat and light.` }, { id: `D`, text: `Organ pipe cacti grow best when planted in shaded areas, while tepary beans do not require shade to thrive.` }],
      answer: `C` },

    { id: `did-rw-m2-8`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `hard`, type: `mcq`,
      passage: `Optimal foraging theory (OFT) holds that animals&rsquo; foraging behaviors reflect cost-benefit trade-offs that vary by species and with dynamic ecological circumstances. One such circumstance is lunar intensity, which Nathan Upham and John Hafner found to be negatively associated with foraging by desert kangaroo rats but Ian C. Colquhoun found to be positively associated with foraging by black lemurs. This discrepancy is explicable in terms of OFT: the lemurs&rsquo; greater reliance on vision means that higher lunar intensity benefits them more than it benefits the kangaroo rats.`,
      prompt: `Which choice best describes the finding made by Colquhoun, as presented in the text?`,
      options: [{ id: `A`, text: `As lunar intensity increases, black lemurs increase their foraging activity.` }, { id: `B`, text: `Increased lunar intensity is more beneficial for black lemurs than it is for desert kangaroo rats.` }, { id: `C`, text: `As lunar intensity increases, desert kangaroo rats reduce their foraging activity.` }, { id: `D`, text: `During periods of high lunar intensity, black lemurs increase their reliance on vision.` }],
      answer: `A` },

    { id: `did-rw-m2-9`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `The bird species <em>Cercomacra cinerascens</em> (the gray antbird) shares some territory in French Guiana with <em>Thamnomanes caesius</em> (the cinereous antshrike), which emits a loud alarm call when it detects predators. Biologist Ari Martinez and colleagues recorded <em>T. caesius</em> alarm calls and played them in the vicinity of wild <em>C. cinerascens</em>. Finding that the birds often froze in place or scattered into vegetation upon hearing the calls, they concluded that <em>C. cinerascens</em> associates <em>T. caesius</em> alarm calls with danger.`,
      prompt: `Which finding, if true, would most directly support Martinez and colleagues&rsquo; conclusion?`,
      options: [{ id: `A`, text: `Martinez and colleagues played alarm calls from different <em>T. caesius</em> individuals and observed no significant variation in the responses of <em>C. cinerascens</em>.` }, { id: `B`, text: `When Martinez and colleagues played control sounds of random noise in the vicinity of <em>C. cinerascens</em>, the birds displayed no reaction.` }, { id: `C`, text: `In some instances, <em>C. cinerascens</em> froze in place or scattered into vegetation when Martinez and colleagues approached but before they began playing sounds.` }, { id: `D`, text: `Other bird species than <em>C. cinerascens</em> also showed a tendency to freeze in place or scatter into vegetation when Martinez and colleagues played <em>T. caesius</em> alarm calls.` }],
      answer: `B` },

    { id: `did-rw-m2-10`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `Growing seasons in Alaska have been extending further into the year in response to climate warming, potentially enabling increased carbon dioxide (CO<sub>2</sub>) absorption through greater productivity of marsh cinquefoil (<em>Comarum palustre</em>) plants and other vegetation, but also potentially enabling increased CO<sub>2</sub> output through greater heterotrophic respiration (CO<sub>2</sub> generated by the activity of soil microorganisms). Hydrologist Yonghong Yi and her colleagues developed a model incorporating numerous inputs&mdash;years of solar radiation and snow cover data among them&mdash;to evaluate the effects of warming on the CO<sub>2</sub> balance in Alaska, concluding that net CO<sub>2</sub> is likely to increase if warming hastens spring snow melt.`,
      prompt: `Which finding, if true, would most directly support the researchers&rsquo; conclusion?`,
      options: [{ id: `A`, text: `Early snow melt extends the period in which plant species such as <em>C. palustre</em> can absorb CO<sub>2</sub> but has no effect on the rate of heterotrophic respiration.` }, { id: `B`, text: `Early snow melt slows the growth of plant species such as <em>C. palustre</em> by reducing soil insulation, and it suppresses heterotrophic respiration.` }, { id: `C`, text: `Early snow melt reduces the amount of soil moisture available for the growth of plant species such as <em>C. palustre</em>, and it raises the rate of heterotrophic respiration.` }, { id: `D`, text: `Early snow melt amplifies the effect of solar radiation on the growth of plant species such as <em>C. palustre</em> and on the rate of heterotrophic respiration.` }],
      answer: `C` },

    { id: `did-rw-m2-11`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `medium`, type: `mcq`,
      passage: `<div style="text-align:center;font-weight:600;font-size:12px;margin:2px 0">Days per Winter That Lakes Have Surface Ice</div><svg viewBox="0 0 340 250" role="img" aria-label="bar chart" style="max-width:360px;width:100%;display:block;margin:6px auto"><line x1="40.0" y1="204.0" x2="310.0" y2="204.0" stroke="currentColor" stroke-width="1.3"/><line x1="40.0" y1="204.0" x2="310.0" y2="204.0" stroke="currentColor" stroke-width="0.5" opacity="0.16"/><text x="36.0" y="207.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">0</text><line x1="40.0" y1="160.5" x2="310.0" y2="160.5" stroke="currentColor" stroke-width="0.5" opacity="0.16"/><text x="36.0" y="163.5" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">50</text><line x1="40.0" y1="117.0" x2="310.0" y2="117.0" stroke="currentColor" stroke-width="0.5" opacity="0.16"/><text x="36.0" y="120.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">100</text><line x1="40.0" y1="73.5" x2="310.0" y2="73.5" stroke="currentColor" stroke-width="0.5" opacity="0.16"/><text x="36.0" y="76.5" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">150</text><line x1="40.0" y1="30.0" x2="310.0" y2="30.0" stroke="currentColor" stroke-width="0.5" opacity="0.16"/><text x="36.0" y="33.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">200</text><rect x="53.5" y="120.5" width="33.1" height="83.5" fill="#4C8BF5" opacity="0.9"/><rect x="89.5" y="36.1" width="33.1" height="167.9" fill="#E8833A" opacity="0.9"/><rect x="125.5" y="125.7" width="33.1" height="78.3" fill="#3FA45B" opacity="0.9"/><text x="107.5" y="220.0" font-size="9.5" fill="currentColor" text-anchor="middle">1980&ndash;81</text><rect x="188.5" y="110.0" width="33.1" height="94.0" fill="#4C8BF5" opacity="0.9"/><rect x="224.5" y="69.2" width="33.1" height="134.8" fill="#E8833A" opacity="0.9"/><rect x="260.5" y="117.0" width="33.1" height="87.0" fill="#3FA45B" opacity="0.9"/><text x="242.5" y="220.0" font-size="9.5" fill="currentColor" text-anchor="middle">2005&ndash;06</text><rect x="40.0" y="228.0" width="9" height="9" fill="#4C8BF5"/><text x="52.0" y="236.0" font-size="9" fill="currentColor">Lake Baikal</text><rect x="112.4" y="228.0" width="9" height="9" fill="#E8833A"/><text x="124.4" y="236.0" font-size="9" fill="currentColor">Ouluj&auml;rvi</text><rect x="201.0" y="228.0" width="9" height="9" fill="#3FA45B"/><text x="213.0" y="236.0" font-size="9" fill="currentColor">Lake Kegonsa</text></svg>It is common for freshwater lakes near or above a latitude of 45&deg; north of the equator, like Lake Stechlin in Germany, to accumulate surface ice in winter. A study from 1980 to 2006 showed that, in general, the number of days per winter that such lakes have measurable amounts of surface ice is declining. However, a researcher claimed that some lakes have instead seen an increase in the duration of ice, citing as an example _____`,
      prompt: `Which choice most effectively uses data from the graph to complete the researcher&rsquo;s example?`,
      options: [{ id: `A`, text: `both Lake Baikal and Ouluj&auml;rvi, which had more than 100 days of ice in the winter of 2005&ndash;06.` }, { id: `B`, text: `both Lake Baikal and Ouluj&auml;rvi, which had fewer than 195 days of ice in the winter of 1980&ndash;81.` }, { id: `C`, text: `Lake Baikal, which had more days of ice in the winter of 2005&ndash;06 than it did in the winter of 1980&ndash;81.` }, { id: `D`, text: `both Lake Kegonsa and Ouluj&auml;rvi, which had more days of ice in the winter of 2005&ndash;06 than they did in the winter of 1980&ndash;81.` }],
      answer: `C` },

    { id: `did-rw-m2-12`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `Some food packaging contains silver nanoparticles (Ag-NPs), which can leach into waterways and soils via wastewater. In a 2015 study, Tina Ramskov and colleagues found that Ag-NPs can accumulate in the bodies of marine annelid worms (<em>Capitella teleta</em>). While bioaccumulation of manufactured nanoparticles may be inherently worrisome, it has been hypothesized that Ag-NP bioaccumulation in invertebrates like <em>C. teleta</em> could serve a valuable proxy role, obviating the need for manufacturers to conduct costly and intrusive sampling of vertebrate species&mdash;such as Atlantic salmon (<em>Salmo salar</em>), commonly used in regulatory compliance testing&mdash;for nanoparticle bioaccumulation, as environmental protection laws currently require.`,
      prompt: `Which finding, if true, would most directly support the hypothesis presented in the text?`,
      options: [{ id: `A`, text: `When <em>C. teleta</em> and <em>S. salar</em> are exposed to similar levels of Ag-NPs, individuals of the two species tend to accumulate similar amounts of Ag-NPs, adjusted for body size.` }, { id: `B`, text: `Ag-NP concentrations in <em>C. teleta</em> correlate strongly with Ag-NP levels in the environment, whereas Ag-NP concentrations in <em>S. salar</em> are fairly stable regardless of environment.` }, { id: `C`, text: `Compared with <em>S. salar</em>, <em>C. teleta</em> can tolerate significantly higher Ag-NP concentrations without displaying any negative effects.` }, { id: `D`, text: `It is easier to detect low and harmless concentrations of Ag-NPs in <em>C. teleta</em> than it is to detect high and harmful concentrations of Ag-NPs in <em>S. salar</em>.` }],
      answer: `A` },

    { id: `did-rw-m2-13`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `<div style="text-align:center;font-weight:600;font-size:12px;margin:2px 0">Correlation between Model-Predicted and Participant-Reported Enjoyment Ratings, by Painting Style</div><svg viewBox="0 0 340 250" role="img" aria-label="bar chart" style="max-width:360px;width:100%;display:block;margin:6px auto"><line x1="40.0" y1="204.0" x2="310.0" y2="204.0" stroke="currentColor" stroke-width="1.3"/><line x1="40.0" y1="204.0" x2="310.0" y2="204.0" stroke="currentColor" stroke-width="0.5" opacity="0.16"/><text x="36.0" y="207.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">0</text><line x1="40.0" y1="160.5" x2="310.0" y2="160.5" stroke="currentColor" stroke-width="0.5" opacity="0.16"/><text x="36.0" y="163.5" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">0.1</text><line x1="40.0" y1="117.0" x2="310.0" y2="117.0" stroke="currentColor" stroke-width="0.5" opacity="0.16"/><text x="36.0" y="120.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">0.2</text><line x1="40.0" y1="73.5" x2="310.0" y2="73.5" stroke="currentColor" stroke-width="0.5" opacity="0.16"/><text x="36.0" y="76.5" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">0.3</text><line x1="40.0" y1="30.0" x2="310.0" y2="30.0" stroke="currentColor" stroke-width="0.5" opacity="0.16"/><text x="36.0" y="33.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">0.4</text><rect x="53.5" y="77.9" width="33.1" height="126.1" fill="#4C8BF5" opacity="0.9"/><rect x="89.5" y="38.7" width="33.1" height="165.3" fill="#E8833A" opacity="0.9"/><rect x="125.5" y="164.8" width="33.1" height="39.2" fill="#3FA45B" opacity="0.9"/><text x="107.5" y="220.0" font-size="9.5" fill="currentColor" text-anchor="middle">Impressionist</text><rect x="188.5" y="90.9" width="33.1" height="113.1" fill="#4C8BF5" opacity="0.9"/><rect x="224.5" y="156.2" width="33.1" height="47.8" fill="#E8833A" opacity="0.9"/><rect x="260.5" y="138.8" width="33.1" height="65.2" fill="#3FA45B" opacity="0.9"/><text x="242.5" y="220.0" font-size="9.5" fill="currentColor" text-anchor="middle">Color field</text><rect x="40.0" y="228.0" width="9" height="9" fill="#4C8BF5"/><text x="52.0" y="236.0" font-size="9" fill="currentColor">P7</text><rect x="63.8" y="228.0" width="9" height="9" fill="#E8833A"/><text x="75.8" y="236.0" font-size="9" fill="currentColor">P6</text><rect x="87.6" y="228.0" width="9" height="9" fill="#3FA45B"/><text x="99.6" y="236.0" font-size="9" fill="currentColor">P2</text></svg>Neuroscientist Kiyohito Iigaya and colleagues developed a computational model to predict how much a person will enjoy a particular work of art on a scale from 1 (not at all) to 4 (very much). They then recruited participants to use the same scale to rate several sets of paintings in various styles and calculated the correlation between the ratings predicted by the model and those reported by the participants. Assuming participant P6 gave equal ratings to the impressionist and color-field paintings, the data in the graph suggest that the model predicted that _____`,
      prompt: `Which choice most effectively uses data from the graph to complete the statement?`,
      options: [{ id: `A`, text: `P6&rsquo;s ratings for impressionist and color-field paintings would equal one another.` }, { id: `B`, text: `P6 would derive less aesthetic pleasure from impressionist paintings than from color-field paintings.` }, { id: `C`, text: `P6 would derive more aesthetic pleasure from impressionist paintings than from color-field paintings.` }, { id: `D`, text: `P6&rsquo;s ratings for impressionist and color-field paintings would differ from one another.` }],
      answer: `D` },

    { id: `did-rw-m2-14`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `Arthurian legends (tales related to the character of King Arthur) derive from many often contradictory sources, such as <em>Y Gododdin</em>, composed between the 7th and 11th centuries, and the <em>Mabinogion</em> from the 12th and 13th centuries. Sir Thomas Malory&rsquo;s 15th-century text <em>Le Morte d&rsquo;Arthur</em> was an attempt to compile these stories into a coherent narrative. Many of Malory&rsquo;s sources derive from Geoffrey of Monmouth&rsquo;s <em>History of the Kings of Britain</em>, written in the 1130s. While neither <em>History</em> nor any works that predate it mention Arthur&rsquo;s famous Round Table at which his knights assembled, <em>Le Morte d&rsquo;Arthur</em> does, suggesting that _____`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `<em>Le Morte d&rsquo;Arthur</em> is more historically accurate than <em>History</em>, because the <em>Mabinogion</em> had not been written when Geoffrey of Monmouth was writing his work.` }, { id: `B`, text: `when a version of an Arthurian legend contradicted the version in <em>History</em>, Malory preferred to include Geoffrey of Monmouth&rsquo;s version in <em>Le Morte d&rsquo;Arthur</em>.` }, { id: `C`, text: `Malory encountered the Round Table in a source that Geoffrey of Monmouth was not familiar with when writing his <em>History</em>.` }, { id: `D`, text: `Geoffrey of Monmouth&rsquo;s accounts of Arthurian legends in <em>History</em> are more similar overall in content to the accounts in the <em>Mabinogion</em> than they are to the accounts in <em>Le Morte d&rsquo;Arthur</em>.` }],
      answer: `C` },

    { id: `did-rw-m2-15`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `Prolonged exposure to anthropogenic noise (sounds from human sources like traffic or mining) can affect animals, as Erin P. Walsh and colleagues found in a 2017 study of hermit crabs. Researchers conducted a meta-analysis of studies of how such noise affects animals and found that, for every study, relevant traits or behaviors of the animals were observably different between the exposed group and the otherwise similar but unexposed group. Although, on average, studies of arthropods showed larger differences than studies of birds did, for every class of animals examined, there were individual studies showing differences well above the average for arthropods. Therefore, the results of the meta-analysis suggest that _____`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `the studies in the meta-analysis that examined arthropods were more likely than those that examined birds to specify whether the observed effects were detrimental.` }, { id: `B`, text: `the difference found in the study conducted by Erin P. Walsh and colleagues was likely larger than the average difference for studies of hermit crabs included in the meta-analysis.` }, { id: `C`, text: `some studies of birds found larger effects of exposure to anthropogenic noise than some studies of arthropods did.` }, { id: `D`, text: `the differences that studies attribute to exposure to anthropogenic noise are likely to be more pronounced for birds than they are for arthropods.` }],
      answer: `C` },

    { id: `did-rw-m2-16`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `The term &ldquo;retroflex&rdquo; derives from Latin and means &ldquo;bent back,&rdquo; an apt descriptor for the branch of consonants&mdash;retroflex consonants&mdash;pronounced with the tongue curling up and back in the mouth. In many languages, including English, these consonants are _____ in some dialects of Mandarin, however, four such consonants (&ldquo;ch,&rdquo; &ldquo;sh,&rdquo; &ldquo;zh,&rdquo; and &ldquo;r&rdquo;) are relatively common.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `rare and` }, { id: `B`, text: `rare;` }, { id: `C`, text: `rare` }, { id: `D`, text: `rare,` }],
      answer: `B` },

    { id: `did-rw-m2-17`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `Along with carbon dioxide concentration and temperature, light intensity affects the chemical reaction rate of _____ as light intensity increases, so does the rate at which the reactants (water and carbon dioxide) are converted into their products (glucose and oxygen).`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `photosynthesis:` }, { id: `B`, text: `photosynthesis,` }, { id: `C`, text: `photosynthesis` }, { id: `D`, text: `photosynthesis and` }],
      answer: `A` },

    { id: `did-rw-m2-18`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `hard`, type: `mcq`,
      passage: `The fungus <em>Tricholoma matsutake</em>, commonly referred to as matsutake, is known to establish ectomycorrhizal bonds with certain pine tree species; in many cases, such symbiotic relationships, wherein fungal hyphae make contact with the pine&rsquo;s root system, _____ extensive networks, which can be used to transport nutrients between trees.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `having formed` }, { id: `B`, text: `form` }, { id: `C`, text: `to form` }, { id: `D`, text: `forming` }],
      answer: `B` },

    { id: `did-rw-m2-19`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `Though he would go on to work with many respected bands, including John McLaughlin and the Free Spirits on their album <em>Tokyo Live</em>, American _____ may be best known for his time with Sugar Hill Records, where he helped craft the sound of early hip-hop music.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `drummer Dennis Chambers,` }, { id: `B`, text: `drummer, Dennis Chambers` }, { id: `C`, text: `drummer Dennis Chambers` }, { id: `D`, text: `drummer, Dennis Chambers,` }],
      answer: `C` },

    { id: `did-rw-m2-20`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `hard`, type: `mcq`,
      passage: `On most of the world&rsquo;s beaches, sand is a predictable cream or beige color. The sand at Talofofo Beach in Guam is an ______ sand gets its shade from deposits of gray- and tan-hued quartz and feldspar; deposits of crushed olivine crystal and other organic matter lend the sand at Talofofo Beach a colorful green tint.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `exception, though most` }, { id: `B`, text: `exception: though most` }, { id: `C`, text: `exception, though, most` }, { id: `D`, text: `exception, though. Most` }],
      answer: `D` },

    { id: `did-rw-m2-21`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `hard`, type: `mcq`,
      passage: `The Organisation for Economic Co-operation and Development (OECD) tracks comparative price list data for its thirty-eight member countries. According to this data, in July 2021, a &ldquo;basket&rdquo; of goods and services priced at 100 US dollars (USD) in the United States would have cost 59 USD in fellow OECD member _____`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `nation, Lithuania.` }, { id: `B`, text: `nation: Lithuania.` }, { id: `C`, text: `nation&mdash;Lithuania.` }, { id: `D`, text: `nation Lithuania.` }],
      answer: `D` },

    { id: `did-rw-m2-22`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `In his painting <em>At the Cycle-Race Track</em>, Jean Metzinger aims to depict a bike race in four-dimensional space. Of course, Metzinger&rsquo;s painting doesn&rsquo;t technically represent a fourth dimension; humans can only see in three dimensions. _____ by depicting the race through multiple, simultaneous perspectives, Metzinger offers a fascinating glimpse at what this other universe might look like.`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `For example,` }, { id: `B`, text: `That said,` }, { id: `C`, text: `Moreover,` }, { id: `D`, text: `In other words,` }],
      answer: `B` },

    { id: `did-rw-m2-23`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `In 2015, geologist Peter Rogerson recalculated the geographic center of Illinois, which had previously been determined in 1920 by the US Geological Survey (USGS). The USGS, Rogerson contended, had omitted important considerations, not least the curvature of the earth. _____ the state&rsquo;s USGS-determined center&mdash;a point 1.5 miles southeast of the municipality of Rochester&mdash;was inaccurate.`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `However,` }, { id: `B`, text: `That being said,` }, { id: `C`, text: `Hence,` }, { id: `D`, text: `Next,` }],
      answer: `C` },

    { id: `did-rw-m2-24`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `On June 20, 1932, aviator Amelia Earhart received a ticker-tape parade in New York City in recognition of her transatlantic flight. Of the 206 ticker-tape parades held between 1886 and 2022, a number were for achievements in aviation. _____ Earhart&rsquo;s parade was just one of 16 honoring pilots.`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `In addition,` }, { id: `B`, text: `Indeed,` }, { id: `C`, text: `Nevertheless,` }, { id: `D`, text: `Therefore,` }],
      answer: `B` },

    { id: `did-rw-m2-25`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `While researching a topic, a student has taken the following notes:<ul><li>The Bauhaus was an influential German art and design school founded in 1919 by Walter Gropius.</li><li>Gropius was the school&rsquo;s director from 1919 to 1928.</li><li>Hannes Meyer was its director from 1928 to 1930.</li><li>Ludwig Mies van der Rohe was its director from 1930 to 1933.</li><li>Benita Koch-Otte was a textile artist who began attending the Bauhaus in 1920.</li><li>Grete Stern was a photographer who began attending the Bauhaus in 1930.</li></ul>`,
      prompt: `The student wants to emphasize the order in which the two students attended the Bauhaus. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `Founded in 1919, the Bauhaus was a German art and design school whose past students include Benita Koch-Otte and Grete Stern.` }, { id: `B`, text: `Walter Gropius founded the Bauhaus in 1919 and acted as its director until 1928, at which point Hannes Meyer succeeded him in the role.` }, { id: `C`, text: `Benita Koch-Otte and Grete Stern were both Bauhaus students, but Koch-Otte, who began attending in 1920, preceded Stern.` }, { id: `D`, text: `The Bauhaus was founded in 1919, and Grete Stern began attending in 1930.` }],
      answer: `C` },

    { id: `did-rw-m2-26`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `While researching a topic, a student has taken the following notes:<ul><li>Generally, an object will heat up when twisted.</li><li>The twisting of an object is known as torsion.</li><li>A 2019 study led by Zunfeng Liu and Ray Baughman tested the torsional heating of various fibers.</li><li>When a 0.7-millimeter-thick sample of single-ply nickel-titanium (NiTi) wire was twisted, its average surface temperature increased by 21.3&deg;C.</li><li>When a 2.2-millimeter-thick sample of natural rubber fiber was twisted, its average surface temperature increased by 15.3&deg;C.</li></ul>`,
      prompt: `The student wants to contrast the two samples. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `The natural rubber sample used in the 2019 study was thicker than the single-ply NiTi wire sample.` }, { id: `B`, text: `In 2019, researchers studied the effect of torsional heating on various fibers, including samples of natural rubber and single-ply NiTi wire.` }, { id: `C`, text: `When the fibers were twisted as part of the 2019 study, the surface temperature of both samples increased.` }, { id: `D`, text: `Twisting an object will generally cause its temperature to increase, a process known as torsional heating.` }],
      answer: `A` },

    { id: `did-rw-m2-27`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `While researching a topic, a student has taken the following notes:<ul><li>Element abundance is a relative measure of the amount of a chemical element in a given environment.</li><li>Abundance can be expressed as a mass fraction.</li><li>A mass fraction is the ratio of the total mass of an element to the combined mass of all elements in a given environment.</li><li>The mass fraction of oxygen (O) on Earth is 297,000 parts per million (ppm).</li><li>The mass fraction of vanadium (V) on Earth is 105 ppm.</li></ul>`,
      prompt: `The student wants to specify the total mass of Earth&rsquo;s oxygen relative to that of all elements. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `Oxygen&rsquo;s abundance on Earth is greater than vanadium&rsquo;s, as reflected by oxygen&rsquo;s higher mass fraction.` }, { id: `B`, text: `Oxygen&rsquo;s abundance can be expressed by a mass fraction, a measure of the element&rsquo;s mass relative to that of all elements on Earth.` }, { id: `C`, text: `The mass fraction of oxygen on Earth is 297,000 ppm.` }, { id: `D`, text: `Oxygen&rsquo;s mass relative to the combined mass of all elements on Earth is 105 ppm.` }],
      answer: `C` },
  ];

  const MATH_M1 = [
    { id: `did-math-m1-1`, domain: `Geometry and Trigonometry`, skill: `Lines, angles, and triangles`, difficulty: `easy`, type: `mcq`,
      prompt: `<svg viewBox="0 0 300 210" role="img" aria-label="figure" style="max-width:300px;width:100%;display:block;margin:6px auto"><line x1='55' y1='45' x2='245' y2='165' stroke='var(--fg)' stroke-width='2'/><line x1='55' y1='165' x2='245' y2='45' stroke='var(--fg)' stroke-width='2'/><text x='150' y='84' font-size='16' font-style='italic' text-anchor='middle' fill='var(--fg)'>w&#176;</text><text x='150' y='140' font-size='16' font-style='italic' text-anchor='middle' fill='var(--fg)'>z&#176;</text></svg><div class="tiny faint" style="text-align:center;margin:2px 0 8px">Note: Figure not drawn to scale.</div>In the figure, two lines intersect at a point. If <em>w</em> = 128, what is the value of <em>z</em>?`,
      options: [{ id: `A`, text: `28` }, { id: `B`, text: `52` }, { id: `C`, text: `64` }, { id: `D`, text: `128` }],
      answer: `D` },

    { id: `did-math-m1-2`, domain: `Algebra`, skill: `Linear inequalities in one or two variables`, difficulty: `easy`, type: `mcq`,
      prompt: `Sabrina has a goal to save at least $240. Sabrina has already saved $180. If <em>x</em> represents the additional amount of money, in dollars, Sabrina needs to save to meet her goal, which inequality represents this situation?`,
      options: [{ id: `A`, text: `<em>x</em>&frasl;180 &ge; 240` }, { id: `B`, text: `180<em>x</em> &ge; 240` }, { id: `C`, text: `180 + <em>x</em> &ge; 240` }, { id: `D`, text: `180 &minus; <em>x</em> &ge; 240` }],
      answer: `C` },

    { id: `did-math-m1-3`, domain: `Algebra`, skill: `Linear functions`, difficulty: `easy`, type: `grid`,
      prompt: `The function <em>f</em> is defined by <em>f</em>(<em>x</em>) = 12<em>x</em> + 18. What is the <em>y</em>-coordinate of the <em>y</em>-intercept of the graph of <em>y</em> = <em>f</em>(<em>x</em>) in the <em>xy</em>-plane?`,
      answer: [`18`] },

    { id: `did-math-m1-4`, domain: `Problem-Solving and Data Analysis`, skill: `Ratios, rates, proportions`, difficulty: `easy`, type: `mcq`,
      prompt: `A certain pigeon species can fly at an average speed of 16 meters per second when in continuous flight. At this rate, how many meters would this pigeon species fly in 4 seconds?`,
      options: [{ id: `A`, text: `64` }, { id: `B`, text: `20` }, { id: `C`, text: `16` }, { id: `D`, text: `12` }],
      answer: `A` },

    { id: `did-math-m1-5`, domain: `Problem-Solving and Data Analysis`, skill: `Scatterplots`, difficulty: `medium`, type: `mcq`,
      prompt: `<svg viewBox="0 0 300 250" role="img" aria-label="scatterplot" style="max-width:340px;width:100%;display:block;margin:6px auto"><clipPath id="cp65743"><rect x="26.0" y="26.0" width="248.0" height="198.0"/></clipPath><line x1="26.0" y1="224.0" x2="26.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="67.3" y1="224.0" x2="67.3" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="108.7" y1="224.0" x2="108.7" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="150.0" y1="224.0" x2="150.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="191.3" y1="224.0" x2="191.3" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="232.7" y1="224.0" x2="232.7" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="274.0" y1="224.0" x2="274.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="224.0" x2="274.0" y2="224.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="191.0" x2="274.0" y2="191.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="158.0" x2="274.0" y2="158.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="125.0" x2="274.0" y2="125.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="92.0" x2="274.0" y2="92.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="59.0" x2="274.0" y2="59.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="26.0" x2="274.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="224.0" x2="274.0" y2="224.0" stroke="currentColor" stroke-width="1.4"/><line x1="26.0" y1="224.0" x2="26.0" y2="26.0" stroke="currentColor" stroke-width="1.4"/><text x="26.0" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">0</text><text x="67.3" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">1</text><text x="108.7" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">2</text><text x="150.0" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">3</text><text x="191.3" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">4</text><text x="232.7" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">5</text><text x="274.0" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">6</text><text x="22.0" y="194.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">1</text><text x="22.0" y="161.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">2</text><text x="22.0" y="128.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">3</text><text x="22.0" y="95.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">4</text><text x="22.0" y="62.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">5</text><text x="22.0" y="29.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">6</text><g clip-path="url(#cp65743)"><line x1="26.0" y1="224.0" x2="274.0" y2="4.0" stroke="currentColor" stroke-width="1.8"/><circle cx="59.1" cy="204.2" r="3.1" fill="currentColor"/><circle cx="67.3" cy="174.5" r="3.1" fill="currentColor"/><circle cx="108.7" cy="191.0" r="3.1" fill="currentColor"/><circle cx="150.0" cy="128.3" r="3.1" fill="currentColor"/><circle cx="162.4" cy="125.0" r="3.1" fill="currentColor"/><circle cx="191.3" cy="92.0" r="3.1" fill="currentColor"/><circle cx="199.6" cy="65.6" r="3.1" fill="currentColor"/><circle cx="232.7" cy="52.4" r="3.1" fill="currentColor"/></g><text x="26.0" y="14" font-size="11" font-style="italic" fill="currentColor" text-anchor="middle">y</text><text x="282.0" y="242" font-size="11" font-style="italic" fill="currentColor">x</text></svg>In the given scatterplot, a line of best fit for the data is shown. Which of the following equations best represents this line of best fit?`,
      options: [{ id: `A`, text: `<em>y</em> = 1.1<em>x</em>` }, { id: `B`, text: `<em>y</em> = &minus;1.1<em>x</em>` }, { id: `C`, text: `<em>y</em> = 5.2` }, { id: `D`, text: `<em>y</em> = &minus;5.2` }],
      answer: `A` },

    { id: `did-math-m1-6`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `The function <em>d</em> is defined by <em>d</em>(<em>x</em>) = 200 &minus; 6<sup><em>x</em></sup>. What is the value of <em>d</em>(0)?`,
      options: [{ id: `A`, text: `140` }, { id: `B`, text: `194` }, { id: `C`, text: `199` }, { id: `D`, text: `200` }],
      answer: `C` },

    { id: `did-math-m1-7`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `The relationship between the variables <em>x</em> and <em>y</em> is defined by an exponential equation. When <em>x</em> = 0, the value of <em>y</em> is 90, and for every increase in the value of <em>x</em> by 1, the corresponding value of <em>y</em> increases by 20% of its previous value. Which equation represents this relationship?`,
      options: [{ id: `A`, text: `<em>y</em> = 90(1.20)<sup><em>x</em></sup>` }, { id: `B`, text: `<em>y</em> = 90(1.02)<sup><em>x</em></sup>` }, { id: `C`, text: `<em>y</em> = 20(1.90)<sup><em>x</em></sup>` }, { id: `D`, text: `<em>y</em> = 20(1.09)<sup><em>x</em></sup>` }],
      answer: `A` },

    { id: `did-math-m1-8`, domain: `Algebra`, skill: `Linear equations in two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `Line <em>k</em> is defined by <em>y</em> = 7<em>x</em> + 2. Line <em>j</em> is parallel to line <em>k</em> in the <em>xy</em>-plane and passes through the point (0, 3). Which equation defines line <em>j</em>?`,
      options: [{ id: `A`, text: `<em>y</em> = 7<em>x</em> + 3` }, { id: `B`, text: `<em>y</em> = &minus;3<em>x</em> + 3` }, { id: `C`, text: `<em>y</em> = &minus;7<em>x</em> + 3` }, { id: `D`, text: `<em>y</em> = 3<em>x</em> + 3` }],
      answer: `A` },

    { id: `did-math-m1-9`, domain: `Algebra`, skill: `Systems of two linear equations`, difficulty: `medium`, type: `grid`,
      prompt: `If <em>x</em> + 4<em>y</em> = 41 and 7<em>x</em> &minus; 20<em>y</em> = &minus;97, what is the value of <em>y</em>?`,
      answer: [`8`] },

    { id: `did-math-m1-10`, domain: `Algebra`, skill: `Linear functions`, difficulty: `easy`, type: `grid`,
      prompt: `For the linear function <em>f</em>, the graph of <em>y</em> = <em>f</em>(<em>x</em>) in the <em>xy</em>-plane has a slope of 28 and passes through the point (0, 0). The function <em>f</em> is defined by <em>f</em>(<em>x</em>) = <em>ax</em>, where <em>a</em> is a constant. What is the value of <em>a</em>?`,
      answer: [`28`] },

    { id: `did-math-m1-11`, domain: `Problem-Solving and Data Analysis`, skill: `Interpreting graphs`, difficulty: `medium`, type: `mcq`,
      prompt: `<svg viewBox="0 0 320 262" role="img" aria-label="figure" style="max-width:320px;width:100%;display:block;margin:6px auto"><g stroke='var(--border)' stroke-width='1'><line x1='42' y1='202' x2='282' y2='202'/><line x1='42' y1='172' x2='282' y2='172'/><line x1='42' y1='142' x2='282' y2='142'/><line x1='42' y1='112' x2='282' y2='112'/><line x1='42' y1='82' x2='282' y2='82'/><line x1='42' y1='52' x2='282' y2='52'/><line x1='82' y1='40' x2='82' y2='232'/><line x1='122' y1='40' x2='122' y2='232'/><line x1='162' y1='40' x2='162' y2='232'/><line x1='202' y1='40' x2='202' y2='232'/><line x1='242' y1='40' x2='242' y2='232'/><line x1='282' y1='40' x2='282' y2='232'/></g><line x1='42' y1='232' x2='294' y2='232' stroke='var(--fg)' stroke-width='1.5'/><line x1='42' y1='36' x2='42' y2='232' stroke='var(--fg)' stroke-width='1.5'/><g font-size='10' fill='var(--fg)' text-anchor='end'><text x='36' y='206'>2</text><text x='36' y='176'>4</text><text x='36' y='146'>6</text><text x='36' y='116'>8</text><text x='36' y='86'>10</text><text x='36' y='56'>12</text></g><g font-size='10' fill='var(--fg)' text-anchor='middle'><text x='42' y='246'>O</text><text x='82' y='246'>1</text><text x='122' y='246'>2</text><text x='162' y='246'>3</text><text x='202' y='246'>4</text><text x='242' y='246'>5</text><text x='282' y='246'>6</text></g><text x='30' y='36' font-size='11' font-style='italic' fill='var(--fg)'>y</text><text x='300' y='236' font-size='11' font-style='italic' fill='var(--fg)'>x</text><path d='M 42,112 C 110,70 168,52 202,52 C 236,52 264,58 282,66' fill='none' stroke='var(--fg)' stroke-width='2'/></svg>The graph models the number of active projects a company was working on <em>x</em> months after the end of November 2011, where 0 &le; <em>x</em> &le; 6. According to the model, what is the predicted number of active projects the company was working on at the end of November 2011?`,
      options: [{ id: `A`, text: `0` }, { id: `B`, text: `8` }, { id: `C`, text: `11` }, { id: `D`, text: `12` }],
      answer: `B` },

    { id: `did-math-m1-12`, domain: `Problem-Solving and Data Analysis`, skill: `Statistics (spread)`, difficulty: `easy`, type: `grid`,
      prompt: `The list gives the number of individuals in each of 6 groups of ring-tailed lemurs.<br><br><div style='text-align:center'>17, 4, 20, 17, 18, 6</div><br>What is the range of the numbers of individuals for the 6 groups of ring-tailed lemurs?`,
      answer: [`16`] },

    { id: `did-math-m1-13`, domain: `Algebra`, skill: `Linear functions`, difficulty: `easy`, type: `mcq`,
      prompt: `<div style='text-align:center'><em>d</em> = 15<em>t</em></div><br>The given equation relates the distance <em>d</em>, in inches, of an object from its starting position to the time <em>t</em>, in seconds, since the object started moving. What is the rate of change of the object&rsquo;s distance from its starting position over time?`,
      options: [{ id: `A`, text: `15<em>t</em> inches per second` }, { id: `B`, text: `15 inches per second` }, { id: `C`, text: `1&frasl;15 inches per second` }, { id: `D`, text: `1&frasl;(15<em>t</em>) inches per second` }],
      answer: `B` },

    { id: `did-math-m1-14`, domain: `Algebra`, skill: `Linear functions`, difficulty: `medium`, type: `grid`,
      prompt: `What is the slope of the graph of <em>y</em> = &frac12;(15<em>x</em> + 12) + 3<em>x</em> in the <em>xy</em>-plane?`,
      answer: [`10.5`, `21/2`] },

    { id: `did-math-m1-15`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `hard`, type: `grid`,
      prompt: `<table style="border-collapse:collapse;margin:6px auto"><tr><th style="border:1px solid var(--border);padding:3px 12px"><em>x</em></th><th style="border:1px solid var(--border);padding:3px 12px"><em>f</em>(<em>x</em>)</th></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">&minus;37</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">4</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">&minus;9</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">0</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">33</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">6</td></tr></table>The table shows three values of <em>x</em> and their corresponding values of <em>f</em>(<em>x</em>), where <em>f</em>(<em>x</em>) = (<em>kx</em> + 45)&frasl;(<em>x</em> + 2) and <em>k</em> is a constant. What is the value of <em>k</em>?`,
      answer: [`5`] },

    { id: `did-math-m1-16`, domain: `Algebra`, skill: `Linear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `The function <em>f</em> is defined by <em>f</em>(<em>x</em>) = (<em>x</em> + 11)&frasl;3, and <em>f</em>(<em>a</em>) = 16, where <em>a</em> is a constant. What is the value of <em>a</em>?`,
      options: [{ id: `A`, text: `9` }, { id: `B`, text: `16` }, { id: `C`, text: `37` }, { id: `D`, text: `59` }],
      answer: `C` },

    { id: `did-math-m1-17`, domain: `Problem-Solving and Data Analysis`, skill: `Percentages`, difficulty: `easy`, type: `mcq`,
      prompt: `Jasmin grows bean pods in her garden. This year, she harvested 330 bean pods and saved 10% of them to plant next year. How many of the harvested bean pods did Jasmin save to plant next year?`,
      options: [{ id: `A`, text: `23` }, { id: `B`, text: `33` }, { id: `C`, text: `41` }, { id: `D`, text: `43` }],
      answer: `B` },

    { id: `did-math-m1-18`, domain: `Geometry and Trigonometry`, skill: `Circles and volume`, difficulty: `medium`, type: `mcq`,
      prompt: `A sphere has a radius of 8&frasl;3 feet. What is the volume, in cubic feet, of the sphere?`,
      options: [{ id: `A`, text: `3&pi;&frasl;8` }, { id: `B`, text: `32&pi;&frasl;9` }, { id: `C`, text: `17&pi;&frasl;3` }, { id: `D`, text: `2,048&pi;&frasl;81` }],
      answer: `D` },

    { id: `did-math-m1-19`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `medium`, type: `mcq`,
      prompt: `A company that manufactures staplers calculates its monthly profit, in dollars, by subtracting its fixed monthly costs, in dollars, from its monthly sales revenue, in dollars. The equation 11,000 = 2.00<em>x</em> &minus; 6,500 represents this situation for a month where <em>x</em> staplers are manufactured and sold. Which statement is the best interpretation of 2.00<em>x</em> in this context?`,
      options: [{ id: `A`, text: `The monthly sales revenue, in dollars, from selling <em>x</em> staplers` }, { id: `B`, text: `The monthly sales revenue, in dollars, from each stapler sold` }, { id: `C`, text: `The monthly cost, in dollars, of manufacturing each stapler` }, { id: `D`, text: `The monthly cost, in dollars, of manufacturing <em>x</em> staplers` }],
      answer: `A` },

    { id: `did-math-m1-20`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `medium`, type: `mcq`,
      prompt: `If (<em>x</em> &minus; 16)&frasl;27 = (<em>x</em> &minus; 16)&frasl;9, what is the value of <em>x</em> + 16?`,
      options: [{ id: `A`, text: `0` }, { id: `B`, text: `3` }, { id: `C`, text: `16` }, { id: `D`, text: `32` }],
      answer: `D` },

    { id: `did-math-m1-21`, domain: `Advanced Math`, skill: `Nonlinear equations`, difficulty: `medium`, type: `mcq`,
      prompt: `<div style='text-align:center'>8|7 &minus; <em>x</em>| + 1 = 81</div><br>What is the sum of the solutions to the given equation?`,
      options: [{ id: `A`, text: `&minus;14` }, { id: `B`, text: `&minus;3` }, { id: `C`, text: `10` }, { id: `D`, text: `14` }],
      answer: `D` },

    { id: `did-math-m1-22`, domain: `Algebra`, skill: `Systems of two linear equations`, difficulty: `hard`, type: `mcq`,
      prompt: `<svg viewBox="0 0 300 278" role="img" aria-label="figure" style="max-width:300px;width:100%;display:block;margin:6px auto"><g stroke='var(--border)' stroke-width='1'><line x1='40' y1='54' x2='270' y2='54'/><line x1='40' y1='114' x2='270' y2='114'/><line x1='40' y1='144' x2='270' y2='144'/><line x1='40' y1='174' x2='270' y2='174'/><line x1='40' y1='204' x2='270' y2='204'/><line x1='40' y1='234' x2='270' y2='234'/><line x1='40' y1='264' x2='270' y2='264'/><line x1='86' y1='24' x2='86' y2='264'/><line x1='132' y1='24' x2='132' y2='264'/><line x1='224' y1='24' x2='224' y2='264'/><line x1='270' y1='24' x2='270' y2='264'/></g><line x1='40' y1='84' x2='274' y2='84' stroke='var(--fg)' stroke-width='1.5'/><line x1='178' y1='24' x2='178' y2='268' stroke='var(--fg)' stroke-width='1.5'/><line x1='40' y1='24' x2='224' y2='264' stroke='var(--fg)' stroke-width='2'/><circle cx='178' cy='204' r='3.5' fill='var(--fg)'/><g font-size='10' fill='var(--fg)' text-anchor='end'><text x='172' y='148'>&minus;4</text><text x='172' y='178'>&minus;6</text><text x='172' y='208'>&minus;8</text><text x='172' y='238'>&minus;10</text><text x='172' y='268'>&minus;12</text></g><text x='166' y='20' font-size='11' font-style='italic' fill='var(--fg)'>y</text><text x='282' y='88' font-size='11' font-style='italic' fill='var(--fg)'>x</text></svg>The graph of line <em>h</em> is shown in the <em>xy</em>-plane. Line <em>k</em> (not shown) is defined by <em>sx</em> + 40<em>y</em> = <em>t</em>, where <em>s</em> and <em>t</em> are constants. If line <em>k</em> is graphed in this <em>xy</em>-plane, the result is a graph of two linear equations. This system of two linear equations has no solution. Which of the following is NOT a possible value of <em>t</em>?`,
      options: [{ id: `A`, text: `200` }, { id: `B`, text: `64` }, { id: `C`, text: `&minus;8` }, { id: `D`, text: `&minus;320` }],
      answer: `D` },
  ];

  const MATH_M2 = [
    { id: `did-math-m2-1`, domain: `Geometry and Trigonometry`, skill: `Lines, angles, and triangles`, difficulty: `easy`, type: `mcq`,
      prompt: `<svg viewBox="0 0 300 210" role="img" aria-label="figure" style="max-width:300px;width:100%;display:block;margin:6px auto"><polygon points='60,40 60,180 250,180' fill='none' stroke='currentColor' stroke-width='1.7'/><polyline points='60,166 74,166 74,180' fill='none' stroke='currentColor' stroke-width='1.1'/><text x='68' y='62' font-size='13' fill='currentColor'>24&deg;</text><text x='214' y='170' font-size='13' fill='currentColor'>a&deg;</text></svg><div class="tiny faint" style="text-align:center;margin:2px 0 8px">Note: Figure not drawn to scale.</div>In the triangle shown, what is the value of <em>a</em>?`,
      options: [{ id: `A`, text: `24` }, { id: `B`, text: `66` }, { id: `C`, text: `90` }, { id: `D`, text: `114` }],
      answer: `B` },

    { id: `did-math-m2-2`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `easy`, type: `mcq`,
      prompt: `The graph of the polynomial function <em>f</em> in the <em>xy</em>-plane, where <em>y</em> = <em>f</em>(<em>x</em>), passes through the point (5, 3). What is the value of <em>f</em>(5)?`,
      options: [{ id: `A`, text: `3` }, { id: `B`, text: `5` }, { id: `C`, text: `8` }, { id: `D`, text: `15` }],
      answer: `A` },

    { id: `did-math-m2-3`, domain: `Geometry and Trigonometry`, skill: `Circles`, difficulty: `easy`, type: `grid`,
      prompt: `A circle has a circumference of 42&pi; centimeters. What is the diameter, in centimeters, of the circle?`,
      answer: [`42`] },

    { id: `did-math-m2-4`, domain: `Advanced Math`, skill: `Equivalent expressions`, difficulty: `medium`, type: `mcq`,
      prompt: `<div style='text-align:center;margin:6px 0'>49 = <sup>2<em>K</em></sup>&frasl;<sub><em>v</em><sup>2</sup></sub></div>For an object with a mass of 49 kilograms, the given equation relates the kinetic energy <em>K</em>, in joules, of the object to the object&rsquo;s speed <em>v</em>, in meters per second, where <em>K</em> and <em>v</em> are positive. Which equation correctly expresses this object&rsquo;s speed, in meters per second, in terms of the object&rsquo;s kinetic energy, in joules?`,
      options: [{ id: `A`, text: `<em>v</em> = &radic;(<sup>2<em>K</em></sup>&frasl;<sub>49</sub>)` }, { id: `B`, text: `<em>v</em> = &radic;(<sup>49</sup>&frasl;<sub>2<em>K</em></sub>)` }, { id: `C`, text: `<em>v</em> = <sup>49<sup>2</sup></sup>&frasl;<sub>2<em>K</em></sub>` }, { id: `D`, text: `<em>v</em> = <sup>2<em>K</em></sup>&frasl;<sub>49<sup>2</sup></sub>` }],
      answer: `A` },

    { id: `did-math-m2-5`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `easy`, type: `mcq`,
      prompt: `The function <em>f</em> is defined by <em>f</em>(<em>x</em>) = 4<em>x</em><sup>2</sup>. What is the value of <em>f</em>(11)?`,
      options: [{ id: `A`, text: `44` }, { id: `B`, text: `52` }, { id: `C`, text: `88` }, { id: `D`, text: `484` }],
      answer: `D` },

    { id: `did-math-m2-6`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<div style='text-align:center;margin:6px 0'><em>g</em>(<em>x</em>) = <sup>1</sup>&frasl;<sub>9</sub>(5)<sup><em>x</em></sup></div>If the given function <em>g</em> is graphed in the <em>xy</em>-plane, where <em>y</em> = <em>g</em>(<em>x</em>), what is the <em>y</em>-intercept of the graph?`,
      options: [{ id: `A`, text: `(0, 0)` }, { id: `B`, text: `(0, <sup>1</sup>&frasl;<sub>9</sub>)` }, { id: `C`, text: `(0, <sup>5</sup>&frasl;<sub>9</sub>)` }, { id: `D`, text: `(0, 5)` }],
      answer: `B` },

    { id: `did-math-m2-7`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `The function <em>f</em> is defined by <em>f</em>(<em>x</em>) = (&minus;7)(4)<sup><em>x</em></sup> + 31. What is the <em>y</em>-intercept of the graph of <em>y</em> = <em>f</em>(<em>x</em>) in the <em>xy</em>-plane?`,
      options: [{ id: `A`, text: `(0, 24)` }, { id: `B`, text: `(0, 4)` }, { id: `C`, text: `(0, 31)` }, { id: `D`, text: `(0, &minus;7)` }],
      answer: `A` },

    { id: `did-math-m2-8`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `grid`,
      prompt: `The population of a certain city doubled every 75 years from 1652 to 1952. The population of this city was 160,000 in 1952. What was the population of this city in 1652?`,
      answer: [`10000`] },

    { id: `did-math-m2-9`, domain: `Geometry and Trigonometry`, skill: `Right triangles and trigonometry`, difficulty: `medium`, type: `mcq`,
      prompt: `<svg viewBox="0 0 300 220" role="img" aria-label="right triangle" style="max-width:300px;width:100%;display:block;margin:6px auto"><polygon points="250,32 250,182 46,182" fill="none" stroke="currentColor" stroke-width="1.7"/><polyline points="250,169 237,169 237,182" fill="none" stroke="currentColor" stroke-width="1.1"/><text x="258" y="26" font-size="14" font-style="italic" fill="currentColor">J</text><text x="258" y="198" font-size="14" font-style="italic" fill="currentColor">K</text><text x="32" y="198" font-size="14" font-style="italic" fill="currentColor">L</text><text x="135" y="102" font-size="13" fill="currentColor" text-anchor="middle">90</text></svg><div class="tiny faint" style="text-align:center;margin:2px 0 8px">Note: Figure not drawn to scale.</div>In right triangle <em>JKL</em>, the tangent of &ang;<em>L</em> is <sup>3</sup>&frasl;<sub>4</sub>. What is the length of <span style='text-decoration:overline'>JK</span>?`,
      options: [{ id: `A`, text: `<sup>35</sup>&frasl;<sub>16</sub>` }, { id: `B`, text: `<sup>15</sup>&frasl;<sub>4</sub>` }, { id: `C`, text: `54` }, { id: `D`, text: `72` }],
      answer: `C` },

    { id: `did-math-m2-10`, domain: `Geometry and Trigonometry`, skill: `Circles`, difficulty: `medium`, type: `mcq`,
      prompt: `In the <em>xy</em>-plane, an equation of circle <em>A</em> is (<em>x</em> &minus; 2)<sup>2</sup> + (<em>y</em> &minus; 3)<sup>2</sup> = 9. Circle <em>B</em> has the same center as circle <em>A</em> but has a radius that is twice the radius of circle <em>A</em>. Which equation represents circle <em>B</em>?`,
      options: [{ id: `A`, text: `(<em>x</em> &minus; 2)<sup>2</sup> + (<em>y</em> &minus; 3)<sup>2</sup> = 18` }, { id: `B`, text: `(<em>x</em> &minus; 2)<sup>2</sup> + (<em>y</em> &minus; 3)<sup>2</sup> = 36` }, { id: `C`, text: `(<em>x</em> &minus; 2)<sup>2</sup> + (<em>y</em> &minus; 3)<sup>2</sup> = 54` }, { id: `D`, text: `(<em>x</em> &minus; 2)<sup>2</sup> + (<em>y</em> &minus; 3)<sup>2</sup> = 81` }],
      answer: `B` },

    { id: `did-math-m2-11`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `medium`, type: `mcq`,
      prompt: `<div style='text-align:center;margin:6px 0'><em>a</em>(7<em>x</em> &minus; 14) + 5<em>a</em> = 7(<em>ax</em> &minus; 2<em>a</em>) &minus; 35</div>In the given equation, <em>a</em> is a constant. The equation has infinitely many solutions. What are all possible values of <em>a</em>?`,
      options: [{ id: `A`, text: `0 only` }, { id: `B`, text: `&minus;7 only` }, { id: `C`, text: `Any real number` }, { id: `D`, text: `No real number` }],
      answer: `B` },

    { id: `did-math-m2-12`, domain: `Problem-Solving and Data Analysis`, skill: `Percentages`, difficulty: `easy`, type: `mcq`,
      prompt: `If <em>x</em> &gt; 0 and <em>x</em> is 33% of <em>y</em>, which expression represents <em>y</em> in terms of <em>x</em>?`,
      options: [{ id: `A`, text: `<sup>100</sup>&frasl;<sub>33</sub><em>x</em>` }, { id: `B`, text: `<sup>10</sup>&frasl;<sub>33</sub><em>x</em>` }, { id: `C`, text: `<sup>1</sup>&frasl;<sub>33</sub><em>x</em>` }, { id: `D`, text: `<sup>67</sup>&frasl;<sub>100</sub><em>x</em>` }],
      answer: `A` },

    { id: `did-math-m2-13`, domain: `Advanced Math`, skill: `Equivalent expressions`, difficulty: `medium`, type: `grid`,
      prompt: `<div style='text-align:center;margin:6px 0'><sup>5</sup>&radic;(<em>x</em><sup><em>m</em></sup>)</div>In the given expression, <em>m</em> is a constant and <em>x</em> &gt; 1. The expression can be rewritten as <sup>7</sup>&radic;<em>x</em>. What is the value of <em>m</em>?`,
      answer: [`5/7`] },

    { id: `did-math-m2-14`, domain: `Algebra`, skill: `Linear equations in two variables`, difficulty: `easy`, type: `mcq`,
      prompt: `A book-of-the-month club charges $13 for the first book purchased during the month and an additional $11 for each book after the first. Which equation describes this situation, where <em>y</em> is the total cost, in dollars, for books purchased during a month, <em>x</em> is the number of books purchased during the month, and <em>x</em> &gt; 0?`,
      options: [{ id: `A`, text: `<em>y</em> = <em>x</em> + 13` }, { id: `B`, text: `<em>y</em> = 11<em>x</em> + 13` }, { id: `C`, text: `<em>y</em> = 11(<em>x</em> &minus; 1) + 13` }, { id: `D`, text: `<em>y</em> = (<em>x</em> &minus; 1) + 13` }],
      answer: `C` },

    { id: `did-math-m2-15`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `hard`, type: `mcq`,
      prompt: `<div style='text-align:center;margin:6px 0'><em>z</em>(<em>w</em>) = (0.829)<sup>2<em>w</em></sup></div>The function <em>z</em> is defined by the equation shown. The value of <em>z</em>(<em>w</em>) decreases by <em>p</em>% for each increase by 1 in the value of <em>w</em>. Which of the following is closest to the value of <em>p</em>?`,
      options: [{ id: `A`, text: `0.171` }, { id: `B`, text: `0.829` }, { id: `C`, text: `17.1` }, { id: `D`, text: `31.3` }],
      answer: `D` },

    { id: `did-math-m2-16`, domain: `Algebra`, skill: `Linear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<svg viewBox="0 0 300 250" role="img" aria-label="line graph" style="max-width:340px;width:100%;display:block;margin:6px auto"><clipPath id="cp69984"><rect x="26.0" y="26.0" width="248.0" height="198.0"/></clipPath><line x1="26.0" y1="224.0" x2="26.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="50.8" y1="224.0" x2="50.8" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="75.6" y1="224.0" x2="75.6" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="100.4" y1="224.0" x2="100.4" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="125.2" y1="224.0" x2="125.2" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="150.0" y1="224.0" x2="150.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="174.8" y1="224.0" x2="174.8" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="199.6" y1="224.0" x2="199.6" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="224.4" y1="224.0" x2="224.4" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="249.2" y1="224.0" x2="249.2" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="274.0" y1="224.0" x2="274.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="224.0" x2="274.0" y2="224.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="195.7" x2="274.0" y2="195.7" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="167.4" x2="274.0" y2="167.4" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="139.1" x2="274.0" y2="139.1" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="110.9" x2="274.0" y2="110.9" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="82.6" x2="274.0" y2="82.6" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="54.3" x2="274.0" y2="54.3" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="26.0" x2="274.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="167.4" x2="274.0" y2="167.4" stroke="currentColor" stroke-width="1.4"/><line x1="150.0" y1="224.0" x2="150.0" y2="26.0" stroke="currentColor" stroke-width="1.4"/><text x="50.8" y="178.4" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">-4</text><text x="100.4" y="178.4" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">-2</text><text x="199.6" y="178.4" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">2</text><text x="249.2" y="178.4" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">4</text><text x="146.0" y="142.1" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">2</text><text x="146.0" y="113.9" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">4</text><text x="146.0" y="85.6" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">6</text><text x="146.0" y="57.3" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">8</text><text x="146.0" y="29.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">10</text><g clip-path="url(#cp69984)"><line x1="26.0" y1="-73.0" x2="274.0" y2="351.3" stroke="currentColor" stroke-width="1.9"/><circle cx="100.4" cy="54.3" r="2.6" fill="currentColor"/><circle cx="174.8" cy="181.6" r="2.6" fill="currentColor"/></g></svg>The graph of the linear function <em>y</em> = <em>f</em>(<em>x</em>) + 11 is shown. If <em>c</em> and <em>d</em> are positive constants, which equation could define <em>f</em>?`,
      options: [{ id: `A`, text: `<em>f</em>(<em>x</em>) = &minus;<em>d</em> &minus; <em>cx</em>` }, { id: `B`, text: `<em>f</em>(<em>x</em>) = <em>d</em> + <em>cx</em>` }, { id: `C`, text: `<em>f</em>(<em>x</em>) = <em>d</em> &minus; <em>cx</em>` }, { id: `D`, text: `<em>f</em>(<em>x</em>) = &minus;<em>d</em> + <em>cx</em>` }],
      answer: `A` },

    { id: `did-math-m2-17`, domain: `Advanced Math`, skill: `Nonlinear equations in one variable and systems of equations in two variables`, difficulty: `hard`, type: `grid`,
      prompt: `<div style='text-align:center;margin:6px 0'>21<em>x</em><sup>2</sup> + (21<em>s</em> + <em>r</em>)<em>x</em> + <em>rs</em> = 0</div>In the given equation, <em>r</em> and <em>s</em> are positive constants. The product of the solutions to the given equation is <em>krs</em>, where <em>k</em> is a constant. What is the value of <em>k</em>?`,
      answer: [`1/21`] },

    { id: `did-math-m2-18`, domain: `Problem-Solving and Data Analysis`, skill: `Percentages`, difficulty: `hard`, type: `mcq`,
      prompt: `The speeds of particles A, B, and C are <em>a</em> meters per second, <em>b</em> meters per second, and <em>c</em> meters per second, respectively. If the speed of particle A is 6,000% of the speed of particle C and the speed of particle C is 0.008% of the speed of particle B, which expression represents the value of <em>a</em> + <em>b</em> in terms of <em>c</em>?`,
      options: [{ id: `A`, text: `12,560<em>c</em>` }, { id: `B`, text: `6,125<em>c</em>` }, { id: `C`, text: `6,008<em>c</em>` }, { id: `D`, text: `1,850<em>c</em>` }],
      answer: `A` },

    { id: `did-math-m2-19`, domain: `Advanced Math`, skill: `Equivalent expressions`, difficulty: `hard`, type: `mcq`,
      prompt: `<div style='text-align:center;margin:6px 0'>&minus;16(5<em>x</em> &minus; 3)<sup>2</sup> + 4(5<em>x</em> &minus; 2)<sup>2</sup></div>The given expression can be rewritten as <sup><em>a</em></sup>&frasl;<sub>4</sub><em>x</em><sup>2</sup> + <sup><em>b</em></sup>&frasl;<sub>4</sub><em>x</em> + <sup><em>c</em></sup>&frasl;<sub>4</sub>, where <em>a</em>, <em>b</em>, and <em>c</em> are constants. What is the value of <em>a</em> + <em>b</em> + <em>c</em>?`,
      options: [{ id: `A`, text: `&minus;112` }, { id: `B`, text: `&minus;56` }, { id: `C`, text: `&minus;28` }, { id: `D`, text: `&minus;7` }],
      answer: `A` },

    { id: `did-math-m2-20`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `hard`, type: `mcq`,
      prompt: `<div style='text-align:center;margin:6px 0'><em>f</em>(<em>x</em>) = 66(<em>b</em>)<sup><em>x</em></sup></div>In the given function, <em>b</em> is a positive constant. For every increase in the value of <em>x</em> by 1, the value of <em>f</em>(<em>x</em>) increases by <em>c</em>%, where 0 &lt; <em>c</em> &lt; 100. Which expression gives the value of <em>c</em> in terms of <em>b</em>?`,
      options: [{ id: `A`, text: `1 + <sup><em>b</em></sup>&frasl;<sub>100</sub>` }, { id: `B`, text: `<em>b</em> + 100` }, { id: `C`, text: `100(<em>b</em> + 1)` }, { id: `D`, text: `100(<em>b</em> &minus; 1)` }],
      answer: `D` },

    { id: `did-math-m2-21`, domain: `Problem-Solving and Data Analysis`, skill: `Ratios, rates, proportional relationships, and units`, difficulty: `medium`, type: `mcq`,
      prompt: `On average, a certain tree grows 87 centimeters every <em>m</em> months. At this rate, which expression represents the number of centimeters, on average, the tree grows every <em>k</em> years?`,
      options: [{ id: `A`, text: `<sup>29<em>m</em></sup>&frasl;<sub>4<em>k</em></sub>` }, { id: `B`, text: `<sup>29<em>k</em></sup>&frasl;<sub>4<em>m</em></sub>` }, { id: `C`, text: `<sup>1,044<em>m</em></sup>&frasl;<sub><em>k</em></sub>` }, { id: `D`, text: `<sup>1,044<em>k</em></sup>&frasl;<sub><em>m</em></sub>` }],
      answer: `D` },

    { id: `did-math-m2-22`, domain: `Geometry and Trigonometry`, skill: `Circles`, difficulty: `hard`, type: `grid`,
      prompt: `<svg viewBox="0 0 300 250" role="img" aria-label="figure" style="max-width:300px;width:100%;display:block;margin:6px auto"><circle cx='150' cy='115' r='92' fill='none' stroke='currentColor' stroke-width='1.5'/><line x1='62' y1='140' x2='242' y2='115' stroke='currentColor' stroke-width='1.4'/><line x1='92' y1='48' x2='150' y2='207' stroke='currentColor' stroke-width='1.4'/><polyline points='131,130 136,140 126,143' fill='none' stroke='currentColor' stroke-width='1'/><circle cx='62' cy='140' r='2.4' fill='currentColor'/><circle cx='92' cy='48' r='2.4' fill='currentColor'/><circle cx='242' cy='115' r='2.4' fill='currentColor'/><circle cx='150' cy='207' r='2.4' fill='currentColor'/><circle cx='122' cy='132' r='2.4' fill='currentColor'/><text x='44' y='144' font-size='13' font-style='italic' fill='currentColor'>A</text><text x='82' y='42' font-size='13' font-style='italic' fill='currentColor'>B</text><text x='248' y='118' font-size='13' font-style='italic' fill='currentColor'>C</text><text x='144' y='226' font-size='13' font-style='italic' fill='currentColor'>E</text><text x='104' y='138' font-size='13' font-style='italic' fill='currentColor'>D</text></svg><div class="tiny faint" style="text-align:center;margin:2px 0 8px">Note: Figure not drawn to scale.</div>In the figure shown, points <em>A</em>, <em>B</em>, <em>C</em>, and <em>E</em> lie on the circle, and <em>AB</em> &lt; <em>BC</em>. Segment <em>AC</em> is perpendicular to segment <em>BE</em> at point <em>D</em>, and <em>BD</em> = &radic;346. The diameter of the circle is 175. If <sup><em>CD</em></sup>&frasl;<sub><em>AD</em></sub> = <em>r</em>, what is the value of <em>r</em>?`,
      answer: [`86.5`] },
  ];

  Apex.bank.register({
    id: "dsat-2024-12-int-d",
    title: "December 2024",
    type: "digital",
    region: "Int",
    version: "D",
    year: 2024,
    monthNum: 12,
    tagline: "International · Version D",
    description: "Digital SAT — December 2024 International prediction form, Version D (RW reordered into official SAT test order; math ordered easy to hard).",
    adaptive: false,
    sections: [
      { id: "rw", modules: [
        { id: "did-rw-m1", stage: 1, name: "Reading and Writing — Module 1", minutes: 32, questions: RW_M1 },
        { id: "did-rw-m2", stage: 2, variant: "hard", name: "Reading and Writing — Module 2 (Hard)", minutes: 32, questions: RW_M2 },
      ] },
      { id: "math", modules: [
        { id: "did-math-m1", stage: 1, name: "Math — Module 1", minutes: 35, calculator: true, questions: MATH_M1 },
        { id: "did-math-m2", stage: 2, variant: "hard", name: "Math — Module 2 (Hard)", minutes: 35, calculator: true, questions: MATH_M2 },
      ] },
    ],
  });
})();
