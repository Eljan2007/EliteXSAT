/* Digital SAT - March 2024 International Form D. R&W native; Math borrowed from Form A (R&W-only source form). Both Module 2s Hard. No explanations. COMPLETE. */
(function () {
  const RW_M1 = [
    { id: `m3id-rw-m1-1`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `easy`, type: `mcq`,
      passage: `<p>The following text is from Rudolfo Anaya's 1972 novel <em>Bless Me, Ultima</em>. The young narrator is eating breakfast with his two sisters in their home in rural New Mexico.</p><p>I sat across the table from Deborah and Teresa and ate my atole and the hot tortilla with butter. I said very little. I usually spoke very little to my two sisters. They were older than I and they were very close. They usually spent the entire day in the attic, playing dolls and giggling. I did not <u>concern myself with</u> those things.</p>`,
      prompt: `As used in the text, what does the phrase “concern myself with” most nearly mean?`,
      options: [{ id: `A`, text: `Trade` }, { id: `B`, text: `Create` }, { id: `C`, text: `Get angry about` }, { id: `D`, text: `Care about` }],
      answer: `D` },

    { id: `m3id-rw-m1-2`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The percentage of US forest land that a 2023 federal report identified as being either mature or old growth exceeds other recent estimates. Given how little _____ there is among scientists regarding the scope of these categories, this discrepancy shouldn't be surprising: forest researchers regularly dispute one another's classifications.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `consensus` }, { id: `B`, text: `vigilance` }, { id: `C`, text: `interest` }, { id: `D`, text: `deliberation` }],
      answer: `A` },

    { id: `m3id-rw-m1-3`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Some robots such as KHR-1 (developed in 2004) and Sophia (developed in 2015) feature humanoid characteristics like bipedal locomotion so that people will find it easier to interact with them. While these features can help to _____ feelings of comfort in people, a robot that looks too human can fall into the “uncanny valley,” meaning that its appearance unintentionally unsettles those who encounter it.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `counterbalance` }, { id: `B`, text: `repudiate` }, { id: `C`, text: `constrict` }, { id: `D`, text: `engender` }],
      answer: `D` },

    { id: `m3id-rw-m1-4`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Karam Kang has demonstrated that lobbying does little to alter the probability that a particular energy policy under consideration by the United States Congress will be enacted, but lobbying is not as _____ as this finding seems to suggest. As Kang herself notes, lobbying can shape which policy proposals members of Congress bring forward for consideration in the first place.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `ineffectual` }, { id: `B`, text: `cynical` }, { id: `C`, text: `counterproductive` }, { id: `D`, text: `biased` }],
      answer: `A` },

    { id: `m3id-rw-m1-5`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>People sometimes dismiss a claim if it comes from a source they regard as self-interested, but from a strictly logical perspective, the source of a claim is _____: it has no direct bearing on whether the claim is true.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `implicit` }, { id: `B`, text: `indisputable` }, { id: `C`, text: `irrelevant` }, { id: `D`, text: `indistinct` }],
      answer: `C` },

    { id: `m3id-rw-m1-6`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `<p>When people think of dinosaurs with feathers, they typically think of winged dinosaurs, such as the four-winged <em>Microraptor</em>. <u>However, many dinosaurs that didn't have wings also had feathers on their bodies.</u> For instance, research indicates that the wingless, peacock-sized <em>Caudipteryx</em> likely had feathers.</p>`,
      prompt: `Which choice best describes the function of the underlined sentence in the text as a whole?`,
      options: [{ id: `A`, text: `It defines a term related to the type of dinosaur feathers mentioned earlier in the text.` }, { id: `B`, text: `It indicates that the dinosaurs mentioned earlier in the text weren't the only ones that had feathers.` }, { id: `C`, text: `It reveals that the dinosaurs mentioned earlier in the text used their feathers for an important purpose.` }, { id: `D`, text: `It gives an example of a dinosaur with the characteristics mentioned earlier in the text.` }],
      answer: `B` },

    { id: `m3id-rw-m1-7`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The following text is from Annie Dillard's 1987 autobiographical novel <em>An American Childhood</em>. The narrator is a young girl living in Pittsburgh.</p><p>I walked. My mother had given me the freedom of the streets as soon as I could say our telephone number. I walked and memorized the neighborhood. I made a mental map and located myself upon it. At night in bed I rehearsed the small world's scheme and set challenges: <u>Find the store using backyards only. Imagine a route from the school to my friend's house.</u></p>`,
      prompt: `Which choice best describes the function of the underlined portion in the text as a whole?`,
      options: [{ id: `A`, text: `It describes the narrator trying to memorize her telephone number.` }, { id: `B`, text: `It gives directions to the narrator's favorite local store.` }, { id: `C`, text: `It portrays the narrator's relationship with her mother.` }, { id: `D`, text: `It provides examples of what the narrator thinks about at night.` }],
      answer: `D` },

    { id: `m3id-rw-m1-8`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Joseph A. Walker's award-winning play <em>The River Niger</em> was produced in 1972 by the groundbreaking Negro Ensemble Company (NEC). NEC cofounder Robert Hooks, an actor, producer, and activist, had met actor and playwright Douglas Turner Ward while they were performing in a 1960 touring production of Lorraine Hansberry's play <em>A Raisin in the Sun</em>. Together, they envisioned a theater company that would nurture and showcase the work of Black theater professionals. Since NEC's founding in 1967, its workshops and performances have given Black playwrights, including Walker, a forum for their compelling stories.</p>`,
      prompt: `Which choice best states the main purpose of the text?`,
      options: [{ id: `A`, text: `To describe how Hooks and Ward's creative partnership changed over time` }, { id: `B`, text: `To show how the play <em>A Raisin in the Sun</em> influenced Hooks and Ward` }, { id: `C`, text: `To bring attention to a work by Joseph A. Walker` }, { id: `D`, text: `To discuss the origin and importance of the NEC` }],
      answer: `D` },

    { id: `m3id-rw-m1-9`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The food industry has long used thermal technologies to preserve food in large batches. Recent advancements in ohmic heating were made through research in Brazil on the preservation of acerola pulp. Ohmic heating is generally considered to be an improvement over more conventional thermal preservation methods: whereas conventional methods transfer energy from the surface of a food to its interior, ohmic heating passes electric current through food products to generate heat within the food itself, thus reducing industrial cooking times.</p>`,
      prompt: `Based on the text, what is one disadvantage of some conventional thermal preservation methods?`,
      options: [{ id: `A`, text: `Their cooking times are longer than those of other methods.` }, { id: `B`, text: `They are especially vulnerable to technological breakdowns.` }, { id: `C`, text: `They are only effective in heating foods that are lightweight and small in size.` }, { id: `D`, text: `They require more energy than other methods do.` }],
      answer: `A` },

    { id: `m3id-rw-m1-10`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `medium`, type: `mcq`,
      passage: `<p>“Tomato” is an example of a loanword—that is, a word that originated in one language and was later adopted by another. The word came to English indirectly from <em>tomate</em>, the Spanish word for the widely cultivated plant. Spanish had borrowed it from Nahuatl, an Indigenous language of Central Mexico, in which the word's original form is <em>tomatl</em>. “Barbecue” is also Indigenous in origin and entered English through Spanish. But in this case, the original source was Taíno, a language of the Caribbean islands, in which the word for the cooking technique is <em>barbakoa</em>.</p>`,
      prompt: `The author makes which point about the Spanish language?`,
      options: [{ id: `A`, text: `It adopted Nahuatl and Taíno words in approximately equal numbers.` }, { id: `B`, text: `Its contribution to English vocabulary roughly equals the collective contribution by Indigenous languages.` }, { id: `C`, text: `It has served as a medium through which Indigenous languages have influenced English.` }, { id: `D`, text: `It has borrowed words from Indigenous languages and contributed words to them.` }],
      answer: `C` },

    { id: `m3id-rw-m1-11`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `easy`, type: `mcq`,
      passage: `<div style="text-align:center;font-weight:600;font-size:12px;margin:2px 0">Total Areas of Five Tribal Nations around the United States</div><table style="border-collapse:collapse;margin:6px auto"><tr><th style="border:1px solid var(--border);padding:3px 12px">Tribal nation</th><th style="border:1px solid var(--border);padding:3px 12px">Location</th><th style="border:1px solid var(--border);padding:3px 12px">Area (square miles)</th></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Blackfeet Nation</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Montana</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">2,285</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Mandan, Hidatsa, and Arikara Nation</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">North Dakota</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">1,583</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Northern Cheyenne Tribe</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Montana</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">707</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Cherokee Nation</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Oklahoma</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">6,963</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Muscogee Nation</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Oklahoma</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">4,867</td></tr></table><p>In terms of total area, the Navajo Nation is the largest tribal nation in the United States. It covers 24,425 square miles in Arizona, Colorado, and New Mexico. Most tribal nations in the US are much smaller. For example, the total area of the Muscogee Nation in Oklahoma is 4,867 square miles. And in Montana, the total area of the Blackfeet Nation is _____</p>`,
      prompt: `Which choice most effectively uses data from the table to complete the statement?`,
      options: [{ id: `A`, text: `2,285 square miles.` }, { id: `B`, text: `707 square miles.` }, { id: `C`, text: `1,583 square miles.` }, { id: `D`, text: `6,693 square miles.` }],
      answer: `A` },

    { id: `m3id-rw-m1-12`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `easy`, type: `mcq`,
      passage: `<div style="text-align:center;font-weight:600;font-size:12px;margin:2px 0">Millions of Metric Tons of Copper Mined in 1995 and 2020</div><table style="border-collapse:collapse;margin:6px auto"><tr><th style="border:1px solid var(--border);padding:3px 12px">Country</th><th style="border:1px solid var(--border);padding:3px 12px">1995</th><th style="border:1px solid var(--border);padding:3px 12px">2020</th></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">United States</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">1.85</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">1.20</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Mexico</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">0.33</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">0.73</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Poland</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">0.38</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">0.39</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">China</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">0.37</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">1.72</td></tr></table><p>While doing research for a paper about copper mining, a student finds a table with information about four different countries. The student notes that the country that mined 0.73 million metric tons of copper in 2020 had mined _____</p>`,
      prompt: `Which choice most effectively uses data from the table to complete the statement?`,
      options: [{ id: `A`, text: `0.33 million metric tons of copper in 1995.` }, { id: `B`, text: `1.20 million metric tons of copper in 1995.` }, { id: `C`, text: `0.37 million metric tons of copper in 1995.` }, { id: `D`, text: `0.38 million metric tons of copper in 1995.` }],
      answer: `A` },

    { id: `m3id-rw-m1-13`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `medium`, type: `mcq`,
      passage: `<p>“A Pair of Silk Stockings” is an 1897 short story written by Kate Chopin. In the story, Chopin suggests that the protagonist, Mrs. Sommers, experiences a shift in her sense of self as a result of putting on certain articles of clothing.</p>`,
      prompt: `Which quotation from “A Pair of Silk Stockings” most effectively illustrates the claim?`,
      options: [{ id: `A`, text: `“She did not wish to act hastily, to do anything she might afterward regret.”` }, { id: `B`, text: `“She held back her skirts and turned her feet one way and her head another way as she glanced down at the polished, pointed-tipped boots.”` }, { id: `C`, text: `“Mrs. Sommers was one who knew the value of bargains; who could stand for hours making her way inch by inch toward the desired object that was selling below cost.”` }, { id: `D`, text: `“Her stockings and boots and well fitting gloves had worked marvels in her bearing—had given her a feeling of assurance, a sense of belonging to the well-dressed multitude.”` }],
      answer: `D` },

    { id: `m3id-rw-m1-14`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `medium`, type: `mcq`,
      passage: `<div style="text-align:center;font-weight:600;font-size:12px;margin:2px 0">Average Hours Worked per Person per Year in 1950 and 2017</div><table style="border-collapse:collapse;margin:6px auto"><tr><th style="border:1px solid var(--border);padding:3px 12px">Country</th><th style="border:1px solid var(--border);padding:3px 12px">1950</th><th style="border:1px solid var(--border);padding:3px 12px">2017</th><th style="border:1px solid var(--border);padding:3px 12px">Change in hours</th><th style="border:1px solid var(--border);padding:3px 12px">Percent change in hours</th></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Mexico</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">2,432</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">2,255</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">−177</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">−7%</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Austria</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">2,086</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">1,613</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">−473</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">−23%</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Brazil</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">2,042</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">1,709</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">−333</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">−16%</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Belgium</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">2,106</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">1,544</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">−562</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">−27%</td></tr></table><p style='text-align:center;font-size:12px;opacity:0.75'>Calculations may be inexact due to rounding.</p><p>A student in an economics course is examining the decline since 1950 in average hours worked per person per year in various nations due to both increased productivity and the adoption of policies that limit working hours. The first task in this investigation is to determine how the decline in Brazil compares to that in other countries. The student finds that _____</p>`,
      prompt: `Which choice most effectively uses data from the table to complete the student's conclusion?`,
      options: [{ id: `A`, text: `the decline in number of hours worked was greater in Brazil than it was in Belgium, Austria, or Mexico.` }, { id: `B`, text: `though the percent decrease in hours worked in Brazil was less than that in Belgium and Austria, it was greater than that in Mexico.` }, { id: `C`, text: `though the percent decrease in hours worked in Brazil was greater than that in Belgium and Mexico, it was less than that in Austria.` }, { id: `D`, text: `while the number of hours worked rose in Brazil between 1950 and 2017, it declined in Belgium, Austria, and Mexico.` }],
      answer: `B` },

    { id: `m3id-rw-m1-15`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `<p>The <em>Mammillaria</em> cactus <em>M. phitauiana</em> occurs naturally only in the state of Baja California Sur in Mexico, and the smallness of its range makes it especially vulnerable to extinction. The traditional single-species approach to conservation emphasizes the need to focus on individual species most at risk, like <em>M. phitauiana</em>, but recently, conservationists have argued that an ecosystem-based approach that incorporates the many interactions between the climate, terrain, and various species of a given geographical area may lead to better outcomes for all the species in a given location. If this view is correct, the single-species approach to the conservation of <em>M. phitauiana</em> could thus _____</p>`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `fail to consider the ways in which the survival of <em>M. phitauiana</em> may be influenced by changes in the populations of other species that inhabit Baja California Sur.` }, { id: `B`, text: `allow conservationists to better consider how climatic changes affecting Baja California Sur may reduce the number of species competing with <em>M. phitauiana</em>.` }, { id: `C`, text: `erroneously shift the focus of conservation efforts away from <em>M. phitauiana</em> itself.` }, { id: `D`, text: `lead to a better understanding of how the distribution of <em>Mammillaria</em> species throughout Mexico has affected their survival.` }],
      answer: `A` },

    { id: `m3id-rw-m1-16`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `easy`, type: `mcq`,
      passage: `<p>It is widely known that New York City's Museum of Modern Art (MoMA) _____ a vast collection of oil paintings, including Franz Marc's <em>The World Cow</em> and Katherine S. Dreier's <em>Abstract Portrait of Marcel Duchamp</em>.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `housing` }, { id: `B`, text: `houses` }, { id: `C`, text: `to have housed` }, { id: `D`, text: `to house` }],
      answer: `B` },

    { id: `m3id-rw-m1-17`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>An accomplished birder might be able to spot thousands of different species over the course of a career, from <em>Milvus migrans</em> to <em>Gallinula chloropus</em>, but no birder has ever achieved the ultimate _____ an in-person glimpse of all 10,000-plus species of birds.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `goal: catching` }, { id: `B`, text: `goal; catching` }, { id: `C`, text: `goal. Catching` }, { id: `D`, text: `goal catching` }],
      answer: `A` },

    { id: `m3id-rw-m1-18`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `<p>In 1987, chemist Ahmed Zewail devised a novel technique in optical spectroscopy that allowed him to study ultrafast chemical reactions occurring within molecules. Years later, he _____ for this groundbreaking research with the Robert A. Welch Award and the Priestley Medal from the American Chemical Society and hence would become known as the father of femtochemistry.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `had been honored` }, { id: `B`, text: `is honored` }, { id: `C`, text: `will be honored` }, { id: `D`, text: `would be honored` }],
      answer: `D` },

    { id: `m3id-rw-m1-19`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Today, the Michelin Guide is widely known as the arbiter of fine dining, with its coveted 3-star rating being awarded to top restaurants like Jade Dragon in _____ when brothers André and Édouard Michelin created the guide in 1900, it was little more than a marketing gimmick—a way to increase profits for their tire company by encouraging their customers to drive across France, visiting the guide's recommended hotels and restaurants along the way.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `Macau,` }, { id: `B`, text: `Macau; however,` }, { id: `C`, text: `Macau, however,` }, { id: `D`, text: `Macau` }],
      answer: `B` },

    { id: `m3id-rw-m1-20`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>When attempting to determine a fault's seismic history, geophysicists like Dr. Estella Atekwana at the University of Delaware rely in part on data about the fault's physical dimensions and geological _____ the Juniper Mountain fault in Malheur County, Oregon, the US Geological Survey compiles such data in several ways: by exchanging information with state geological surveys, by linking maps of the fault with sources that offer detailed descriptions of it, and by maintaining a database of quantitative data such as the fault's length (17 km).</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `features and for` }, { id: `B`, text: `features. For` }, { id: `C`, text: `features for` }, { id: `D`, text: `features, for` }],
      answer: `B` },

    { id: `m3id-rw-m1-21`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `hard`, type: `mcq`,
      passage: `<p>For Italy, a member of the North Atlantic Treaty Organization (NATO) since 1949, NATO's principle of collective defense confers both benefits and _____ organization's many members, nations as disparate as the US and Lithuania, are all bound to defend Italy, the reverse is also true.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `obligations; the` }, { id: `B`, text: `obligations. The` }, { id: `C`, text: `obligations, while the` }, { id: `D`, text: `obligations: while the` }],
      answer: `D` },

    { id: `m3id-rw-m1-22`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>If you could travel in a spaceship to Elara, one of Jupiter's many moons, you'd find a moon with a prograde orbit. This means that Elara orbits Jupiter in the same direction that Jupiter rotates on its axis. _____ at Harpalyke, another Jovian moon, you'd find an example of a retrograde orbit, with the moon revolving around Jupiter in the opposite direction.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `Specifically,` }, { id: `B`, text: `In other words,` }, { id: `C`, text: `For example,` }, { id: `D`, text: `Elsewhere,` }],
      answer: `D` },

    { id: `m3id-rw-m1-23`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>Scientists have long sought to determine the origin of glass in Chile's Atacama Desert.</li><li>A 2017 study concluded that ancient grass fires had melted the area's sandy soil into glass.</li><li>In 2021, a different study revealed that the mineral signatures of glass samples were consistent with the mineral signatures of comet samples collected by NASA.</li><li>That study concluded that the glass had formed as a result of a cometary explosion close to the desert's surface.</li></ul>`,
      prompt: `The student wants to describe how scientific understanding about the glass's origin has evolved. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `Studies in 2017 and 2021 offered different explanations for the origin of the glass.` }, { id: `B`, text: `A 2017 study concluded that ancient grass fires had caused the glass's formation, but new research suggests that the glass formed as a result of a cometary explosion close to the desert's surface.` }, { id: `C`, text: `Mineral signatures of glass samples are consistent with those of comet samples collected by NASA, according to new research.` }, { id: `D`, text: `Scientists have long sought to determine the origin of the glass, with one study concluding that it formed when ancient grass fires melted the area's sandy soil.` }],
      answer: `B` },

    { id: `m3id-rw-m1-24`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>Maya Lin is a US artist known for her memorials and large-scale installation artworks.</li><li>She became famous in 1982 when she completed the Vietnam Veterans Memorial, which consists of two 246-foot granite walls.</li><li>She completed <em>Groundswell</em> in 1993.</li><li>It is an installation composed of glass that fills an entire gallery room.</li><li>She completed <em>Water Line</em> in 2006.</li><li>It is an installation composed of aluminum tubing that fills an entire gallery room.</li></ul>`,
      prompt: `Which choice most effectively uses information from the given sentences to emphasize a difference between <em>Groundswell</em> and <em>Water Line</em>?`,
      options: [{ id: `A`, text: `Maya Lin's <em>Groundswell</em> is composed of glass; <em>Water Line</em>, by contrast, is composed of aluminum tubing.` }, { id: `B`, text: `After completing the Vietnam Veterans Memorial, Maya Lin completed <em>Groundswell</em>, another large-scale work.` }, { id: `C`, text: `The sprawling size of Maya Lin's Vietnam Veterans Memorial is echoed in <em>Groundswell</em>, a work made of glass that fills an entire gallery room.` }, { id: `D`, text: `Maya Lin is known for her memorials and installation art, such as <em>Groundswell</em> and <em>Water Line</em>.` }],
      answer: `A` },

    { id: `m3id-rw-m1-25`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>The El Carmen-Verde Mountains are a mountain range located in northwestern Mexico.</li><li>The range is one of the dozens of “sky islands” in the southwestern US and northwestern Mexico.</li><li>A sky island is an isolated mountain range whose environment differs drastically from that of the surrounding lowlands.</li><li>The US Forest Service (USFS) said, “The mountains are ‘islands’ surrounded by deserts that are ‘seas.’”</li><li>The USFS said, “Each Sky Island is a unique ecosystem.”</li></ul>`,
      prompt: `The student wants to explain what a sky island is. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `The El Carmen-Verde Mountains are an isolated mountain range located in northwestern Mexico whose environment differs drastically from that of the surrounding lowlands.` }, { id: `B`, text: `The USFS considers the El Carmen-Verde Mountains to be a “unique ecosystem.”` }, { id: `C`, text: `The El Carmen-Verde Mountains, which are considered to be a sky island, are located in northwestern Mexico.` }, { id: `D`, text: `A sky island is an isolated mountain range, such as the El Carmen-Verde Mountains in northwestern Mexico, whose environment differs drastically from that of the surrounding lowlands.` }],
      answer: `D` },

    { id: `m3id-rw-m1-26`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>The Paralympic Games are a series of international sporting events involving athletes with an impairment.</li><li>A gold medal indicates that an athlete finished in first place.</li><li>Frank Höfle competed as a Paralympic cross-country skier from 1988 to 2006.</li><li>He won seventeen medals, ten of which were gold.</li><li>Daniel Dias competed as a Paralympic swimmer from 2008 to 2020.</li><li>He won thirty-eight medals, twenty-five of which were gold.</li></ul>`,
      prompt: `Which choice most effectively uses information from the given sentences to emphasize the number of gold medals won by Daniel Dias?`,
      options: [{ id: `A`, text: `In his career as a Paralympic swimmer, Daniel Dias won thirty-eight total medals—twenty-five of them were gold.` }, { id: `B`, text: `An accomplished Paralympian with thirty-eight total medals, Daniel Dias competed as a swimmer from 2008 to 2020.` }, { id: `C`, text: `At the Paralympic Games, a gold medal indicates a first-place finish, and some accomplished athletes like Frank Höfle have won many.` }, { id: `D`, text: `Both multiple gold medalists, Frank Höfle and Daniel Dias debuted at the Paralympic Games in 1988 and 2008, respectively.` }],
      answer: `A` },

    { id: `m3id-rw-m1-27`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>The human tongue contains taste receptors for a rich, savory flavor called umami.</li><li>Umami is triggered by the compounds in a variety of foods, including salmon and caramelized onions.</li><li>Participants in a study tasted a sample of sugar kelp, a type of brown seaweed.</li><li>They rated its umami intensity as moderate.</li><li>The participants tasted a sample of hidaka-konbu, another type of brown seaweed.</li><li>They rated its umami intensity as high.</li></ul>`,
      prompt: `The student wants to make a generalization about brown seaweed. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `In a research study, participants tasted samples of sugar kelp and hidaka-konbu, two types of brown seaweed.` }, { id: `B`, text: `Some types of brown seaweed trigger umami flavor in human taste buds.` }, { id: `C`, text: `Participants in a study rated the umami intensity of various seaweeds.` }, { id: `D`, text: `Sugar kelp is a type of brown seaweed, as is hidaka-konbu.` }],
      answer: `B` },
  ];

  const RW_M2 = [
    { id: `m3id-rw-m2-1`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `easy`, type: `mcq`,
      passage: `<p>A number of recording artists combine Indigenous music with other musical styles. Wolastoq musician Jeremy Dutcher masterfully incorporated traditional Wolastoq songs into experimental pop on his album <em>Wolastoqiyik Lintuwakonawa</em>. Similarly, Atikamekw singer-songwriter Laura Niquay _____ powwow music with folk-rock on her album <em>Waska Matisiwin</em>.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `blended` }, { id: `B`, text: `replaced` }, { id: `C`, text: `confused` }, { id: `D`, text: `compared` }],
      answer: `A` },

    { id: `m3id-rw-m2-2`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Whether the reign of a French monarch such as Louis VI or Louis Philippe I was considered historically significant or, conversely, relatively _____, its trajectory was shaped by questions of legitimacy and therefore cannot be understood without a corollary understanding of the factors that allowed the monarch to assert a claim to the throne successfully.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `momentous` }, { id: `B`, text: `genuine` }, { id: `C`, text: `benevolent` }, { id: `D`, text: `inconsequential` }],
      answer: `D` },

    { id: `m3id-rw-m2-3`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Barring major archaeological discoveries, we are unlikely to ever have _____ account of ancient Egypt under the female pharaoh Hatshepsut, as much of the evidence of her reign was deliberately destroyed by her successors.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `an exhaustive` }, { id: `B`, text: `a questionable` }, { id: `C`, text: `a superficial` }, { id: `D`, text: `an imaginative` }],
      answer: `A` },

    { id: `m3id-rw-m2-4`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `hard`, type: `mcq`,
      passage: `<p>The Lascaux Cave paintings—detailed paintings of animals found in what is now France and dating from around 17,000 years ago—are sometimes said to be emotionally powerful despite their age, but in fact the paintings are _____ precisely because of their age. It is the link of shared humanity with the artists across so many centuries that gives the Lascaux Cave paintings such resonance.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `affecting` }, { id: `B`, text: `pristine` }, { id: `C`, text: `ingenious` }, { id: `D`, text: `meticulous` }],
      answer: `A` },

    { id: `m3id-rw-m2-5`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Rome has high pedestrian traffic, but simply replicating a feature of Rome associated with walkability—e.g., its high number of street crossings—may be insufficient to induce increased walking in other cities. As urbanist Mariela Alfonzo argues, our understanding of individuals' decision-making about whether to walk is insufficiently robust: <u>some studies emphasize the role of demographic characteristics, others the role of sidewalk width, and so on</u>, but walking decisions are made in complex contexts in which multiple conditions and needs inform individuals' choices.</p>`,
      prompt: `Which choice best describes the function of the underlined portion in the text as a whole?`,
      options: [{ id: `A`, text: `It illustrates a scholarly disagreement described earlier in the sentence.` }, { id: `B`, text: `It acknowledges a potential objection to the argument presented earlier in the sentence.` }, { id: `C`, text: `It summarizes the findings of studies whose methods are discussed earlier in the sentence.` }, { id: `D`, text: `It elaborates on a claim presented earlier in the sentence.` }],
      answer: `D` },

    { id: `m3id-rw-m2-6`, domain: `Craft and Structure`, skill: `Cross-Text Connections`, difficulty: `hard`, type: `mcq`,
      passage: `<p><strong>Text 1</strong></p><p>Scholarship today overrepresents formal experimentation, such as H.D.'s use of minimalistic, image-based structures, well beyond the degree to which it actually influenced US poetry during the modernist period (roughly 1900–1945). Meanwhile, the work of Dorothy Parker, who relied on conventional poetic forms associated with previous literary periods, attracts woefully little attention from scholars of modernism.</p><p><strong>Text 2</strong></p><p>Distant reading, or computer-assisted quantitative analysis of massive collections of digitized texts, can reveal stylistic elements that have heretofore escaped notice, despite being shared by numerous texts from the modernist period. For too long, scholars have focused on experimental versus conventional poetic forms, inhibiting inquiry into other points of stylistic correspondence among poems that would enrich our understanding of the modernist canon.</p>`,
      prompt: `Based on the texts, how would the author of Text 2 most likely regard the emphasis that Text 1 places on poetic form during the modernist period?`,
      options: [{ id: `A`, text: `As overestimating the impact that poetic form, whether experimental or conventional, has on the reading experience` }, { id: `B`, text: `As being founded on a misconception about modernist poetry that has been called into question by distant reading` }, { id: `C`, text: `As having the effect of forestalling consideration of the full stylistic dimensions of poetry written in the period` }, { id: `D`, text: `As complementing the study of other stylistic features that distinguish the modernist period` }],
      answer: `C` },

    { id: `m3id-rw-m2-7`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `medium`, type: `mcq`,
      passage: `<p>In her 1998 book <em>Blues Legacies and Black Feminism</em>, Angela Y. Davis bases her analysis in part on recordings of songs sung in the 1920s by Gertrude “Ma” Rainey and Bessie Smith. Davis focuses on how Rainey and Smith improvised the lyrics—replacing the original lines with mischievous jokes and wordplay. Davis's work was particularly labor intensive because in order to transcribe, or write down, the lyrics as Rainey and Smith sang them, Davis had to listen repeatedly to the vinyl recordings, which weren't very clear.</p>`,
      prompt: `What does the text most strongly suggest about the songs sung by Rainey and Smith?`,
      options: [{ id: `A`, text: `There were more recordings made of Rainey's songs than there were of Smith's.` }, { id: `B`, text: `The songs have grown in popularity since Rainey and Smith first sang them.` }, { id: `C`, text: `There were few, if any, reliable transcriptions of Smith's and Rainey's improvised lyrics when Davis began her research.` }, { id: `D`, text: `According to Davis, the songs sung by Rainey were more musically innovative than those sung by Smith typically were.` }],
      answer: `C` },

    { id: `m3id-rw-m2-8`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The following text is from Nathaniel Hawthorne's 1830 short story “Sir William Phips.”</p><p>Few of the personages of past times (except such as have gained renown in fireside legends as well as in written history) are anything but mere names to their successors. They seldom stand up in our imaginations like men. The knowledge, communicated by the historian and biographer, is analogous to that which we acquire of a country by the map,—minute, perhaps, and accurate, and available for all necessary purposes, but cold and naked, and wholly destitute of the mimic charm produced by landscape painting.</p>`,
      prompt: `Which choice best states the main idea of the text?`,
      options: [{ id: `A`, text: `Historians and biographers should write about little-known people as well as famous people.` }, { id: `B`, text: `Paintings may be more beautiful than maps, but maps are more useful than paintings.` }, { id: `C`, text: `The lives of historical figures are usually documented as a collection of facts, rather than as a representation of their personalities.` }, { id: `D`, text: `Historians should record fictional stories told about famous figures as well as stories that are strictly truthful.` }],
      answer: `C` },

    { id: `m3id-rw-m2-9`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Rafael Núñez and colleagues studied how members of the Yupno, an Indigenous group in Papua New Guinea, conceptualize time. The researchers recorded Yupno speakers explaining certain temporal words and phrases, such as <em>kalip bishap</em>, a past-oriented expression that translates to “past times,” and coded each speaker's manual gestures. Previous research has found a tendency in many cultures to make temporal distinctions using spatial concepts and gestures, particularly along egocentric axes (i.e., relative to the orientation of the speaker): for instance, Hebrew speakers often refer to the right/left axis to describe events in time. In an anthropology paper, a student claims that the tendency toward ego-based conceptualizations of time is universal.</p>`,
      prompt: `Which finding, if true, would most directly weaken the student's claim?`,
      options: [{ id: `A`, text: `Although Yupno speakers and Hebrew speakers both use gestures to indicate orientation in time, Yupno speakers tend to use fewer gestures overall when speaking than Hebrew speakers do.` }, { id: `B`, text: `Some Yupno grammatical structures used when talking about time are also used in Hebrew.` }, { id: `C`, text: `A Yupno speaker points in opposite directions when indicating a past event versus a future event.` }, { id: `D`, text: `When Yupno speakers who are outdoors use gestures to refer to the past, they point downhill from their current location regardless of which way they are facing.` }],
      answer: `D` },

    { id: `m3id-rw-m2-10`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `<div style="text-align:center;font-weight:600;font-size:12px;margin:2px 0">Highest-Grossing Films in a Language Other than English at US Box Office</div><table style="border-collapse:collapse;margin:6px auto"><tr><th style="border:1px solid var(--border);padding:3px 12px">Title</th><th style="border:1px solid var(--border);padding:3px 12px">Lifetime gross earnings</th><th style="border:1px solid var(--border);padding:3px 12px">Opening weekend box office gross earnings</th><th style="border:1px solid var(--border);padding:3px 12px">US release date</th><th style="border:1px solid var(--border);padding:3px 12px">Director</th><th style="border:1px solid var(--border);padding:3px 12px">Oscar nominated?</th></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">All About My Mother</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">$8,272,296</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">$50,362</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">November 5, 1999</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Pedro Almodóvar</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Yes</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Amélie</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">$33,225,499</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">$136,470</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">November 2, 2001</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Jean-Pierre Jeunet</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Yes</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Dhoom 3</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">$8,031,955</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">$3,423,508</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">December 20, 2013</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Vijay Krishna Acharya</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">No</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Kung Fu Hustle</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">$17,108,591</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">$269,225</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">April 8, 2005</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Stephen Chow</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">No</td></tr></table><p>Many films in a language other than English grow to be financially successful over the course of their time in movie theaters in the United States, but some become immediate successes in their opening weekends. A journalist claims that a film's reception can greatly influence its long-term success. Indications that the film is of high quality, such as an Oscar nomination, can dramatically boost public interest in the film and thus its overall earnings, even with a relatively modest opening weekend performance: for example, _____</p>`,
      prompt: `Which choice most effectively uses data from the table to complete the example?`,
      options: [{ id: `A`, text: `Dhoom 3 earned more money in its opening weekend than Amélie earned, but Amélie had higher lifetime earnings.` }, { id: `B`, text: `All About My Mother was recognized by the Oscars, but Kung Fu Hustle, which was not recognized, had higher lifetime earnings.` }, { id: `C`, text: `the opening weekend earnings for Kung Fu Hustle were $269,225 and $3,423,508 for Dhoom 3.` }, { id: `D`, text: `both Amélie and All About My Mother were recognized by the Oscars, but Amélie had higher lifetime earnings.` }],
      answer: `A` },

    { id: `m3id-rw-m2-11`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Neurobiologists Laura Cuaya, Raúl Hernández-Pérez, and colleagues investigated the language detection abilities of eighteen dogs. The researchers monitored the brain activity of Barack (a golden retriever), Mini (a mixed breed), and other dogs while the animals listened to three recordings: one of <em>The Little Prince</em> being read in Spanish, the second in Hungarian, and a third made up of short, randomly selected fragments of the first two, scrambled so that they didn't resemble human speech. Each dog was familiar with either Spanish or Hungarian, but not both. The team concluded that differences in dogs' anatomical features may affect their ability to distinguish speech from nonspeech.</p>`,
      prompt: `Which finding from the study, if true, would most directly support the team's conclusion?`,
      options: [{ id: `A`, text: `Compared with longer-headed dogs, shorter-headed dogs showed a greater difference in brain activity when hearing the language they were accustomed to than when hearing the other language.` }, { id: `B`, text: `The pattern of brain activity that long-headed dogs showed when hearing the scrambled recording was different from the pattern of brain activity that short-headed dogs showed when hearing the language they were accustomed to.` }, { id: `C`, text: `Compared with longer-headed dogs, shorter-headed dogs showed less difference in brain activity when hearing either Spanish or Hungarian than when hearing the scrambled recording.` }, { id: `D`, text: `Long-headed dogs accustomed to hearing Spanish tended to show more brain activity when hearing Hungarian than when hearing Spanish.` }],
      answer: `C` },

    { id: `m3id-rw-m2-12`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Permafrost in Alaska has been degrading, potentially enabling increased carbon dioxide (CO₂) absorption through greater productivity of bristle-pointed iris (<em>Iris setosa</em>) plants and other vegetation, but also potentially enabling increased CO₂ output through greater heterotrophic respiration (CO₂ generated by the activity of soil microorganisms). Hydrologist Yonghong Yi and her colleagues modeled seasonal changes in net CO₂ in Alaska in a landscape grid of 1 square kilometer (km²) cells and again in a grid of 10 km² cells, which are finer resolutions than most models of net CO₂ have achieved. The researchers concluded that variations in the landscape affect net CO₂ in ways that most models are too coarse to capture.</p>`,
      prompt: `Which finding from the researchers' study, if true, would most directly support the researchers' conclusion?`,
      options: [{ id: `A`, text: `Lower average heterotrophic respiration rates were found for autumn months when modeled using a grid of 1 km² cells than when modeled using a grid of 10 km² cells.` }, { id: `B`, text: `When seasonal fluxes in average CO₂ absorption and heterotrophic respiration were modeled using a grid of 1 km² cells, much more data were generated than when modeled using a grid of 10 km² cells, though the two models reported identical net CO₂.` }, { id: `C`, text: `Higher average heterotrophic respiration rates were found for summer months than for winter months when modeled using either a grid of 1 km² cells or a grid of 10 km² cells.` }, { id: `D`, text: `No correlations between seasonal variations in average heterotrophic respiration and CO₂ absorption by <em>I. setosa</em> and other plant species were found when modeled using either grid.` }],
      answer: `A` },

    { id: `m3id-rw-m2-13`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Indigenous songs can be repositories of ecological information, from Karen (hta) Hin Lad Nai songs about bees to O'odham songs about desert plants. Kwakwaka'wakw song keeper Kwaxsistalla Wathl'thla aided research by ethnobiologist Dana Lepofsky et al. by contributing songs that reference creating terraced intertidal gardens to foster the healthy development of clams, a staple in the Kwakwaka'wakw people's diet. Such structures date as far back as 3,500 years ago. Intriguingly, analysis of local paleoecological marine bivalve records has revealed significant increases in clam size and productivity as clam garden practices became more prevalent and harvesting pressure increased—a finding that bolsters the notion that _____</p>`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `the Kwakwaka'wakw people initially adapted their clam garden practices from similar methods observed among other Indigenous peoples in neighboring areas.` }, { id: `B`, text: `the Kwakwaka'wakw people encouraged the health of clam gardens and reduced pressure on them by periodically increasing their reliance on other sources of sustenance.` }, { id: `C`, text: `contemporary Kwakwaka'wakw people have only minimally deviated from the clam-gardening practices described in the people's songs.` }, { id: `D`, text: `the practical approach described in the Kwakwaka'wakw songs effectively maintained clams as a sustainable food source.` }],
      answer: `D` },

    { id: `m3id-rw-m2-14`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Saeed M.Z.A. Tarabieh conducted a study of consumer attitudes toward Jordanian food and beverage companies and found that for consumers who value environmental conservation, their likelihood of purchasing a product decreased when their perception of the product's risk of causing environmental harm increased. Subsequently, other researchers conducted a study of various demographic groups in Greece, investigating participants' intentions to purchase a new piece of furniture, and found that, on average, suburban residents had the highest perception among all the demographic groups in the study of the environmental risks of the piece of furniture. Assuming that the results of Tarabieh's study are broadly applicable, this finding suggests that _____</p>`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `the new piece of furniture is more appealing to suburban residents than other similar products on the market are.` }, { id: `B`, text: `suburban residents might be less likely than participants in the other demographic groups to purchase the piece of furniture.` }, { id: `C`, text: `there is not a meaningful difference in the average likelihood of purchasing environmentally friendly products among the demographic groups included in the study.` }, { id: `D`, text: `suburban residents likely prioritize other factors over a product's environmental sustainability when making purchasing decisions.` }],
      answer: `B` },

    { id: `m3id-rw-m2-15`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Quasars—such as CTA 102, located in the Pegasus constellation—are extremely luminous galactic nuclei powered by supermassive black holes, some of which are known to have developed within the first billion years of the formation of the universe. Based on simulations they conducted, astrophysicists Daniel Whalen, Muhammad Latif, and colleagues concluded that these early quasars developed partly as a result of rare convergences of gases in space without the need for ultraviolet backgrounds or other extreme and implausible environmental conditions that models of the early universe have included to account for the presence of these quasars. If this conclusion is correct, it suggests that _____</p>`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `it may be possible to develop models of the early universe that rest on more credible assumptions than previous models have.` }, { id: `B`, text: `future models of the early universe may not need to include conditions that explain early quasars since those quasars may not have actually existed at the time.` }, { id: `C`, text: `previous models of the early universe may have underemphasized the importance of ultraviolet backgrounds to quasar formation.` }, { id: `D`, text: `factors that previous models of the early universe assumed were necessary for the formation of quasars may have actually been consequences of the formation of quasars.` }],
      answer: `A` },

    { id: `m3id-rw-m2-16`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The present-day city of Engels, Russia, was for years the capital of the Volga German Autonomous Soviet Socialist Republic, one of many nominally autonomous republics within the Soviet Union. Like _____ peer autonomous Soviet socialist republics, the Volga German Republic was established along ethnolinguistic lines: most of the republic's residents spoke German.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `it's` }, { id: `B`, text: `their` }, { id: `C`, text: `its` }, { id: `D`, text: `they're` }],
      answer: `C` },

    { id: `m3id-rw-m2-17`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Tonga's constitution, enacted in 1875, contains just one of the six constitutional features that enhance judicial independence, as identified by legal scholars James Melton and Tom Ginsburg. After 1985, such de jure judicial independence became more prevalent, as exemplified in Swaziland's constitution, enacted in 2005 and _____ five of these features.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `had contained` }, { id: `B`, text: `containing` }, { id: `C`, text: `contained` }, { id: `D`, text: `contains` }],
      answer: `B` },

    { id: `m3id-rw-m2-18`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The Limón technique, developed by Mexican-born dancer and choreographer José Limón, is known for its emphasis on breath control and its interplay of weight and _____ dancers may explore, for example, the moment of mid-air suspension at the top of a jump.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `weightlessness,` }, { id: `B`, text: `weightlessness;` }, { id: `C`, text: `weightlessness which` }, { id: `D`, text: `weightlessness` }],
      answer: `B` },

    { id: `m3id-rw-m2-19`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Chondrites are stony meteorites that are undifferentiated—that is, their contents have not melted and separated into distinct layers. They are hardly _____ many chondrites experience aqueous alteration as a result of exposure to fluids, as well as fracturing, veining, and localized melting due to collisions with other objects.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `pristine, though` }, { id: `B`, text: `pristine, though,` }, { id: `C`, text: `pristine; though` }, { id: `D`, text: `pristine, though;` }],
      answer: `D` },

    { id: `m3id-rw-m2-20`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Named for the year in which it was detected by Japanese astronomers, SN 2018zd was a supernova (the explosion of a massive _____ in the constellation Camelopardalis, 70 million light-years from Earth, the transient yet powerful blast propelled particles and debris into space at extremely high speeds.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `star). Occurring` }, { id: `B`, text: `star), occurring` }, { id: `C`, text: `star) and occurring` }, { id: `D`, text: `star) occurring` }],
      answer: `A` },

    { id: `m3id-rw-m2-21`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Not all plants benefit equally or from the same kind of _____ sweet gum and cucumber, for example, benefit from endomycorrhizal associations; many tree species, such as oak and pine, benefit from ectomycorrhizal associations; and plants in the Ericaceae family, such as lingonberry, don't benefit from mycorrhizae at all.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `mycorrhizae` }, { id: `B`, text: `mycorrhizae:` }, { id: `C`, text: `mycorrhizae,` }, { id: `D`, text: `mycorrhizae;` }],
      answer: `B` },

    { id: `m3id-rw-m2-22`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Those who looked up at the right time on July 9, 1926, would have witnessed an annular solar eclipse, during which the Moon blocks most of the Sun and causes it to look like a ring of light. _____ stargazers on December 24, 1927, would have seen a partial solar eclipse, during which the Moon only blocks a portion of the Sun and causes it to look like a crescent.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `Indeed,` }, { id: `B`, text: `Simultaneously,` }, { id: `C`, text: `On the other hand,` }, { id: `D`, text: `As a result,` }],
      answer: `C` },

    { id: `m3id-rw-m2-23`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>With many elements, like selenium, scientists were able to isolate a relatively pure sample of the substance shortly after discovering its existence—but this wasn't the case with all elements. _____ the isolation process took years. The element radon, for instance, was discovered in 1899 but not isolated until 1908.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `However,` }, { id: `B`, text: `Moreover,` }, { id: `C`, text: `Sometimes,` }, { id: `D`, text: `Thus,` }],
      answer: `C` },

    { id: `m3id-rw-m2-24`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>In Tino Villanueva's 2016 poem “Field of Moving Colors Layered,” the poet contemplates a painting that has inspired him: Alberto Valdés's 1965 work <em>Untitled</em>. The painting, which features overlapping geometric shapes, fuels the poem's exploration of temporality and identity. _____ in responding to Valdés's artwork, Villanueva's poem reflects on the relationship between poetry and other art forms.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `What's more,` }, { id: `B`, text: `In other words,` }, { id: `C`, text: `Conversely,` }, { id: `D`, text: `For instance,` }],
      answer: `A` },

    { id: `m3id-rw-m2-25`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>Grimanesa Amorós is a Peruvian American artist.</li><li>She is well known for her large-scale LED light sculptures.</li><li><em>Hedera</em> debuted in 2018 in the Prospect Park Bandshell in Brooklyn, New York.</li><li>It is made of entangled red and white LED tubes.</li><li>It occupies 100,000 cubic feet of space.</li></ul>`,
      prompt: `Which choice most effectively uses information from the given sentences to emphasize when and where <em>Hedera</em> debuted?`,
      options: [{ id: `A`, text: `Grimanesa Amorós is a Peruvian American artist who often works with LED light in her large-scale sculptures, such as <em>Hedera</em> (2018).` }, { id: `B`, text: `As is common of Grimanesa Amorós's sculptures, the entangled red and white LED tubes of <em>Hedera</em> cut an imposing 100,000-cubic-foot figure when the piece debuted.` }, { id: `C`, text: `Artist Grimanesa Amorós often works with light in her sculptures, which tend to be large in scale.` }, { id: `D`, text: `In 2018, Grimanesa Amorós debuted <em>Hedera</em> in Brooklyn, New York.` }],
      answer: `D` },

    { id: `m3id-rw-m2-26`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>Thailand's annual Songkran Water Festival is held each April.</li><li>It marks Songkran, the traditional Thai New Year.</li><li>People splash and spray each other for fun at the festival's community-wide water fights.</li><li>In Bangkok, thousands gather along Silom Road for the city's largest water fight.</li><li>In Chiang Mai, thousands gather at a historical monument called the Tha Phae Gate for the city's largest water fight.</li></ul>`,
      prompt: `The student wants to emphasize a similarity in how people in Bangkok and Chiang Mai celebrate Songkran. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `In both Bangkok and Chiang Mai, thousands gather to celebrate Songkran with water fights.` }, { id: `B`, text: `People in both Bangkok and Chiang Mai celebrate Songkran, but they don't do so in exactly the same way.` }, { id: `C`, text: `Each April, people in Thailand celebrate Songkran, the traditional Thai New Year.` }, { id: `D`, text: `The largest water fight in Bangkok takes place along a city street, whereas the largest water fight in Chiang Mai takes place at a historical monument.` }],
      answer: `A` },

    { id: `m3id-rw-m2-27`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>In a 2005 study, Janecek and Leps tested the effect of plant litter on seedling emergence in a grassland setting.</li><li>Plant litter includes dead leaves and other plant material.</li><li>The test site was a flooded grassland in the Czech Republic.</li><li>It was in a temperate midlatitude climate.</li><li>The researchers found that in these environmental conditions the presence of plant litter had a negative effect on seedling emergence.</li></ul>`,
      prompt: `Which choice most effectively uses information from the given sentences to specify the test site's climate?`,
      options: [{ id: `A`, text: `Janecek and Leps's study was conducted in a temperate midlatitude climate.` }, { id: `B`, text: `In a 2005 study, Janecek and Leps found that the presence of plant litter had a negative effect on seedling emergence.` }, { id: `C`, text: `A test was conducted in the Czech Republic to study the effect of plant litter on seedling emergence in a given climate.` }, { id: `D`, text: `Janecek and Leps tested the effect of dead leaves and other plant material on seedling emergence in the Czech Republic.` }],
      answer: `A` },
  ];

  const MATH_M1 = [
    { id: `m3id-math-m1-1`, domain: `Algebra`, skill: `Linear equations in two variables`, difficulty: `easy`, type: `mcq`,
      prompt: `<p>Line <em>q</em> in the <em>xy</em>-plane has a slope of <sup>1</sup>&frasl;<sub>7</sub> and passes through the point (0, 60). Which equation defines line <em>q</em>?</p>`,
      options: [{ id: `A`, text: `y = <sup>1</sup>&frasl;<sub>7</sub>x − 60` }, { id: `B`, text: `y = <sup>1</sup>&frasl;<sub>7</sub>x − 53` }, { id: `C`, text: `y = <sup>1</sup>&frasl;<sub>7</sub>x + 53` }, { id: `D`, text: `y = <sup>1</sup>&frasl;<sub>7</sub>x + 60` }],
      answer: `D` },

    { id: `m3id-math-m1-2`, domain: `Algebra`, skill: `Linear functions`, difficulty: `easy`, type: `mcq`,
      prompt: `<p>The function <em>g</em> is defined by g(x) = −7x + 80. What is the value of g(x) when x = −2?</p>`,
      options: [{ id: `A`, text: `<sup>78</sup>&frasl;<sub>7</sub>` }, { id: `B`, text: `66` }, { id: `C`, text: `71` }, { id: `D`, text: `94` }],
      answer: `D` },

    { id: `m3id-math-m1-3`, domain: `Problem-Solving and Data Analysis`, skill: `Probability`, difficulty: `easy`, type: `mcq`,
      prompt: `<p>Each face of a fair 12-sided die is labeled with a number from 1 through 12, with a different number appearing on each face. If the die is rolled one time, what is the probability of rolling a 2?</p>`,
      options: [{ id: `A`, text: `<sup>1</sup>&frasl;<sub>12</sub>` }, { id: `B`, text: `<sup>2</sup>&frasl;<sub>12</sub>` }, { id: `C`, text: `<sup>10</sup>&frasl;<sub>12</sub>` }, { id: `D`, text: `<sup>11</sup>&frasl;<sub>12</sub>` }],
      answer: `A` },

    { id: `m3id-math-m1-4`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `medium`, type: `grid`,
      prompt: `<p style='text-align:center'>6x + 28 = 6x + k</p><p>In the given equation, <em>k</em> is a constant. The equation has infinitely many solutions. What is the value of <em>k</em>?</p>`,
      answer: [`28`] },

    { id: `m3id-math-m1-5`, domain: `Problem-Solving and Data Analysis`, skill: `Percentages`, difficulty: `easy`, type: `mcq`,
      prompt: `<p>Jasmin grows bean pods in her garden. This year, she harvested 490 bean pods and saved 10% of them to plant next year. How many of the harvested bean pods did Jasmin save to plant next year?</p>`,
      options: [{ id: `A`, text: `39` }, { id: `B`, text: `49` }, { id: `C`, text: `57` }, { id: `D`, text: `59` }],
      answer: `B` },

    { id: `m3id-math-m1-6`, domain: `Problem-Solving and Data Analysis`, skill: `Ratios, rates, and units`, difficulty: `medium`, type: `grid`,
      prompt: `<p>A triathlon is a multisport race consisting of three different consecutive events. A triathlon participant plans to complete the cycling event with an average speed of 19,008 yards per hour. What is this average speed, in miles per hour? (1 mile = 1,760 yards)</p>`,
      answer: [`10.8`] },

    { id: `m3id-math-m1-7`, domain: `Algebra`, skill: `Systems of two linear equations`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>Dan bought some apples and oranges. The apples cost $0.79 per pound, and the oranges cost $0.99 per pound. If Dan spent $24.93 in total and bought twice as many pounds of oranges as pounds of apples, how many pounds of oranges did Dan buy?</p>`,
      options: [{ id: `A`, text: `9` }, { id: `B`, text: `9.5` }, { id: `C`, text: `18` }, { id: `D`, text: `22.16` }],
      answer: `C` },

    { id: `m3id-math-m1-8`, domain: `Geometry and Trigonometry`, skill: `Area and volume`, difficulty: `easy`, type: `mcq`,
      prompt: `<p>Triangle R has an area of 80 square centimeters (cm<sup>2</sup>). Square S has side lengths of 4 cm. What is the total area of triangle R and square S, in cm<sup>2</sup>?</p>`,
      options: [{ id: `A`, text: `42` }, { id: `B`, text: `44` }, { id: `C`, text: `84` }, { id: `D`, text: `96` }],
      answer: `D` },

    { id: `m3id-math-m1-9`, domain: `Algebra`, skill: `Systems of two linear equations`, difficulty: `medium`, type: `mcq`,
      prompt: `<p style='text-align:center'>y = 3x + 4<br>y = 2x + 9</p><p>The solution to the given system of equations is (x, y). What is the value of x?</p>`,
      options: [{ id: `A`, text: `4` }, { id: `B`, text: `5` }, { id: `C`, text: `9` }, { id: `D`, text: `13` }],
      answer: `B` },

    { id: `m3id-math-m1-10`, domain: `Problem-Solving and Data Analysis`, skill: `Scatterplots and linear models`, difficulty: `medium`, type: `mcq`,
      prompt: `<svg viewBox="0 0 300 250" role="img" aria-label="scatterplot" style="max-width:340px;width:100%;display:block;margin:6px auto"><clipPath id="cp22975"><rect x="26.0" y="26.0" width="248.0" height="198.0"/></clipPath><line x1="26.0" y1="224.0" x2="26.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="61.4" y1="224.0" x2="61.4" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="96.9" y1="224.0" x2="96.9" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="132.3" y1="224.0" x2="132.3" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="167.7" y1="224.0" x2="167.7" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="203.1" y1="224.0" x2="203.1" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="238.6" y1="224.0" x2="238.6" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="274.0" y1="224.0" x2="274.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="224.0" x2="274.0" y2="224.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="195.7" x2="274.0" y2="195.7" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="167.4" x2="274.0" y2="167.4" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="139.1" x2="274.0" y2="139.1" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="110.9" x2="274.0" y2="110.9" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="82.6" x2="274.0" y2="82.6" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="54.3" x2="274.0" y2="54.3" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="26.0" x2="274.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="224.0" x2="274.0" y2="224.0" stroke="currentColor" stroke-width="1.4"/><line x1="26.0" y1="224.0" x2="26.0" y2="26.0" stroke="currentColor" stroke-width="1.4"/><text x="26.0" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">0</text><text x="70.3" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">2.5</text><text x="114.6" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">5</text><text x="158.9" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">7.5</text><text x="203.1" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">10</text><text x="247.4" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">12.5</text><text x="22.0" y="191.6" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">2.5</text><text x="22.0" y="156.3" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">5</text><text x="22.0" y="120.9" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">7.5</text><text x="22.0" y="85.6" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">10</text><text x="22.0" y="50.2" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">12.5</text><g clip-path="url(#cp22975)"><circle cx="43.7" cy="200.0" r="3.1" fill="currentColor"/><circle cx="61.4" cy="185.8" r="3.1" fill="currentColor"/><circle cx="96.9" cy="160.4" r="3.1" fill="currentColor"/><circle cx="114.6" cy="188.6" r="3.1" fill="currentColor"/><circle cx="167.7" cy="115.1" r="3.1" fill="currentColor"/><circle cx="167.7" cy="89.6" r="3.1" fill="currentColor"/><circle cx="203.1" cy="96.7" r="3.1" fill="currentColor"/><circle cx="203.1" cy="89.6" r="3.1" fill="currentColor"/><circle cx="238.6" cy="54.3" r="3.1" fill="currentColor"/><circle cx="256.3" cy="58.5" r="3.1" fill="currentColor"/></g><text x="26.0" y="14" font-size="11" font-style="italic" fill="currentColor" text-anchor="middle">y</text><text x="282.0" y="242" font-size="11" font-style="italic" fill="currentColor">x</text></svg><p>The scatterplot shows the relationship between two variables, <em>x</em> and <em>y</em>. Which of the following equations is the most appropriate linear model for the data shown?</p>`,
      options: [{ id: `A`, text: `y = −2x` }, { id: `B`, text: `y = −x` }, { id: `C`, text: `y = x` }, { id: `D`, text: `y = 2x` }],
      answer: `C` },

    { id: `m3id-math-m1-11`, domain: `Advanced Math`, skill: `Interpreting nonlinear expressions`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>A rectangle has a length that is 24 times its width. The function y = (24w)(w) represents this situation, where <em>y</em> is the area, in square feet, of the rectangle and y &gt; 0. Which of the following is the best interpretation of 24w in this context?</p>`,
      options: [{ id: `A`, text: `The length of the rectangle, in feet` }, { id: `B`, text: `The area of the rectangle, in square feet` }, { id: `C`, text: `The difference between the length and the width of the rectangle, in feet` }, { id: `D`, text: `The width of the rectangle, in feet` }],
      answer: `A` },

    { id: `m3id-math-m1-12`, domain: `Advanced Math`, skill: `Exponential functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<p style='text-align:center'>f(x) = 1,300(0.5)<sup>x/14</sup></p><p>The function <em>f</em> models the intensity of a beam, f(x), in number of photons in the beam, <em>x</em> millimeters below the surface of a certain material. According to the model, what is the number of photons in the beam when it is at the surface of the material?</p>`,
      options: [{ id: `A`, text: `2` }, { id: `B`, text: `13` }, { id: `C`, text: `14` }, { id: `D`, text: `1,300` }],
      answer: `D` },

    { id: `m3id-math-m1-13`, domain: `Algebra`, skill: `Linear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>The gas mileage of a certain car is 22 miles per gallon when driven on the highway. If the car begins with 8 gallons of gas in the tank, which function predicts the amount of gas remaining in the tank, f(d), after the car is driven <em>d</em> miles on the highway?</p>`,
      options: [{ id: `A`, text: `f(d) = <sup>d</sup>&frasl;<sub>22</sub> − 8` }, { id: `B`, text: `f(d) = d − 8` }, { id: `C`, text: `f(d) = 8 − <sup>d</sup>&frasl;<sub>22</sub>` }, { id: `D`, text: `f(d) = 8 − d` }],
      answer: `C` },

    { id: `m3id-math-m1-14`, domain: `Geometry and Trigonometry`, skill: `Lines, angles, and triangles`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>In triangle <em>DEF</em>, the measure of angle <em>D</em> is 46° and the measure of angle <em>E</em> is 104°. In triangle <em>RST</em>, the measure of angle <em>R</em> is 46° and the measure of angle <em>S</em> is 104°. Which of the following additional pieces of information is needed to determine whether triangle <em>DEF</em> is similar to triangle <em>RST</em>?</p>`,
      options: [{ id: `A`, text: `The measure of angle <em>F</em>` }, { id: `B`, text: `The measure of angle <em>T</em>` }, { id: `C`, text: `The measure of angle <em>F</em> and the measure of angle <em>T</em>` }, { id: `D`, text: `No additional information is needed.` }],
      answer: `D` },

    { id: `m3id-math-m1-15`, domain: `Algebra`, skill: `Linear equations in two variables`, difficulty: `medium`, type: `grid`,
      prompt: `<p>What is the slope of the graph of y = <sup>1</sup>&frasl;<sub>5</sub>(19x + 19) + 7x in the <em>xy</em>-plane?</p>`,
      answer: [`10.8`, `54/5`] },

    { id: `m3id-math-m1-16`, domain: `Algebra`, skill: `Systems of two linear equations`, difficulty: `medium`, type: `mcq`,
      prompt: `<p style='text-align:center'>y = −4x − 2</p><p>One of the two equations in a system of linear equations is given. The system has no solution. Which of the following could be the second equation in this system?</p>`,
      options: [{ id: `A`, text: `y = <sup>1</sup>&frasl;<sub>4</sub>x − 2` }, { id: `B`, text: `y = −4x − 8` }, { id: `C`, text: `y = 4x + 8` }, { id: `D`, text: `y = −<sup>1</sup>&frasl;<sub>4</sub>x + 2` }],
      answer: `B` },

    { id: `m3id-math-m1-17`, domain: `Algebra`, skill: `Linear functions`, difficulty: `hard`, type: `grid`,
      prompt: `<p>A linear model estimates the population of a city from 1992 to 2016. The model estimates the population was 61 thousand in 1992, 217 thousand in 2012, and <em>x</em> thousand in 2016. To the nearest whole number, what is the value of <em>x</em>?</p>`,
      answer: [`248`] },

    { id: `m3id-math-m1-18`, domain: `Advanced Math`, skill: `Nonlinear equations and systems`, difficulty: `hard`, type: `grid`,
      prompt: `<p style='text-align:center'>y = −1.5x<br>y = x<sup>2</sup> + 4x + a</p><p>In the given system of equations, <em>a</em> is a positive integer constant. The system has no real solutions. What is the least possible value of <em>a</em>?</p>`,
      answer: [`8`] },

    { id: `m3id-math-m1-19`, domain: `Geometry and Trigonometry`, skill: `Right triangles and trigonometry`, difficulty: `hard`, type: `grid`,
      prompt: `<p><svg viewBox='0 0 420 300' width='330' xmlns='http://www.w3.org/2000/svg'><polygon points='50,240 350,240 350,70' fill='none' stroke='currentColor' stroke-width='2'/><polyline points='330,240 330,220 350,220' fill='none' stroke='currentColor' stroke-width='1.5'/><text x='166' y='138' font-size='20' fill='currentColor'>67</text><text x='30' y='250' font-size='18' font-style='italic' fill='currentColor'>T</text><text x='356' y='256' font-size='18' font-style='italic' fill='currentColor'>S</text><text x='356' y='66' font-size='18' font-style='italic' fill='currentColor'>R</text></svg></p><p style='font-size:12px;opacity:0.75'>Note: Figure not drawn to scale.</p><p>In the triangle shown, RS = √133. What is the value of sin R?</p>`,
      answer: [`66/67`, `.9850`, `.9851`, `0.9850`, `0.9851`] },

    { id: `m3id-math-m1-20`, domain: `Advanced Math`, skill: `Quadratic equations`, difficulty: `hard`, type: `mcq`,
      prompt: `<p style='text-align:center'>(x + 13)<sup>2</sup> + 26(x + 13) + 169 = 0</p><p>How many distinct real solutions does the given equation have?</p>`,
      options: [{ id: `A`, text: `Exactly one` }, { id: `B`, text: `Exactly two` }, { id: `C`, text: `Infinitely many` }, { id: `D`, text: `Zero` }],
      answer: `A` },

    { id: `m3id-math-m1-21`, domain: `Geometry and Trigonometry`, skill: `Circles`, difficulty: `hard`, type: `mcq`,
      prompt: `<p style='text-align:center'>(x + 3)<sup>2</sup> + (y − 19)<sup>2</sup> = 144</p><p>The graph of the given equation is a circle in the <em>xy</em>-plane. The point (a, b) lies on the circle. Which of the following is a possible value for <em>a</em>?</p>`,
      options: [{ id: `A`, text: `−16` }, { id: `B`, text: `−13` }, { id: `C`, text: `12` }, { id: `D`, text: `19` }],
      answer: `B` },

    { id: `m3id-math-m1-22`, domain: `Advanced Math`, skill: `Exponential functions`, difficulty: `hard`, type: `mcq`,
      prompt: `<p style='text-align:center'>f(x) = 8(7)<sup>x</sup></p><p>The function <em>f</em> is defined by the given equation. If g(x) = f(x + 2), which of the following equations defines the function <em>g</em>?</p>`,
      options: [{ id: `A`, text: `g(x) = 16(7)<sup>x</sup>` }, { id: `B`, text: `g(x) = 392(7)<sup>x</sup>` }, { id: `C`, text: `g(x) = 16(14)<sup>x</sup>` }, { id: `D`, text: `g(x) = 64(49)<sup>x</sup>` }],
      answer: `B` },
  ];

  const MATH_M2 = [
    { id: `m3id-math-m2-1`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<p><svg viewBox='0 0 308 302' width='320' xmlns='http://www.w3.org/2000/svg'><g stroke='#dadada' stroke-width='1'><line x1='26.0' y1='10.0' x2='26.0' y2='282.0'/><line x1='43.0' y1='10.0' x2='43.0' y2='282.0'/><line x1='60.0' y1='10.0' x2='60.0' y2='282.0'/><line x1='77.0' y1='10.0' x2='77.0' y2='282.0'/><line x1='94.0' y1='10.0' x2='94.0' y2='282.0'/><line x1='111.0' y1='10.0' x2='111.0' y2='282.0'/><line x1='128.0' y1='10.0' x2='128.0' y2='282.0'/><line x1='145.0' y1='10.0' x2='145.0' y2='282.0'/><line x1='162.0' y1='10.0' x2='162.0' y2='282.0'/><line x1='179.0' y1='10.0' x2='179.0' y2='282.0'/><line x1='196.0' y1='10.0' x2='196.0' y2='282.0'/><line x1='213.0' y1='10.0' x2='213.0' y2='282.0'/><line x1='230.0' y1='10.0' x2='230.0' y2='282.0'/><line x1='247.0' y1='10.0' x2='247.0' y2='282.0'/><line x1='264.0' y1='10.0' x2='264.0' y2='282.0'/><line x1='281.0' y1='10.0' x2='281.0' y2='282.0'/><line x1='298.0' y1='10.0' x2='298.0' y2='282.0'/><line x1='26.0' y1='282.0' x2='298.0' y2='282.0'/><line x1='26.0' y1='265.0' x2='298.0' y2='265.0'/><line x1='26.0' y1='248.0' x2='298.0' y2='248.0'/><line x1='26.0' y1='231.0' x2='298.0' y2='231.0'/><line x1='26.0' y1='214.0' x2='298.0' y2='214.0'/><line x1='26.0' y1='197.0' x2='298.0' y2='197.0'/><line x1='26.0' y1='180.0' x2='298.0' y2='180.0'/><line x1='26.0' y1='163.0' x2='298.0' y2='163.0'/><line x1='26.0' y1='146.0' x2='298.0' y2='146.0'/><line x1='26.0' y1='129.0' x2='298.0' y2='129.0'/><line x1='26.0' y1='112.0' x2='298.0' y2='112.0'/><line x1='26.0' y1='95.0' x2='298.0' y2='95.0'/><line x1='26.0' y1='78.0' x2='298.0' y2='78.0'/><line x1='26.0' y1='61.0' x2='298.0' y2='61.0'/><line x1='26.0' y1='44.0' x2='298.0' y2='44.0'/><line x1='26.0' y1='27.0' x2='298.0' y2='27.0'/><line x1='26.0' y1='10.0' x2='298.0' y2='10.0'/></g><line x1='26.0' y1='146.0' x2='298.0' y2='146.0' stroke='#333' stroke-width='1.7'/><line x1='162.0' y1='10.0' x2='162.0' y2='282.0' stroke='#333' stroke-width='1.7'/><polyline points='26.0,118.8 34.5,118.3 43.0,117.6 51.5,116.9 60.0,116.2 68.5,115.4 77.0,114.4 85.5,113.4 94.0,112.0 102.5,110.5 111.0,108.6 119.5,106.4 128.0,103.5 136.5,99.9 145.0,95.0 153.5,88.2 162.0,78.0 170.5,61.0 179.0,27.0' fill='none' stroke='#111' stroke-width='2.4'/><polyline points='207.1,285.9 215.6,217.7 224.1,190.9 232.6,176.4 241.1,167.4 249.6,161.3 258.1,156.9 266.6,153.6 275.1,150.9 283.6,148.9 292.1,147.0' fill='none' stroke='#111' stroke-width='2.4'/><text x='26.0' y='159.0' font-size='11' text-anchor='middle' fill='#333'>-8</text><text x='94.0' y='159.0' font-size='11' text-anchor='middle' fill='#333'>-4</text><text x='230.0' y='159.0' font-size='11' text-anchor='middle' fill='#333'>4</text><text x='298.0' y='159.0' font-size='11' text-anchor='middle' fill='#333'>8</text><text x='156.0' y='14.0' font-size='11' text-anchor='end' fill='#333'>8</text><text x='156.0' y='82.0' font-size='11' text-anchor='end' fill='#333'>4</text><text x='156.0' y='218.0' font-size='11' text-anchor='end' fill='#333'>-4</text><text x='156.0' y='286.0' font-size='11' text-anchor='end' fill='#333'>-8</text><text x='296.0' y='141.0' font-size='12' font-style='italic' fill='#333'>x</text><text x='169.0' y='19.0' font-size='12' font-style='italic' fill='#333'>y</text></svg></p><p>The graph of y = f(x) is shown in the <em>xy</em>-plane. What is the value of f(0)?</p>`,
      options: [{ id: `A`, text: `−4` }, { id: `B`, text: `0` }, { id: `C`, text: `<sup>3</sup>&frasl;<sub>10</sub>` }, { id: `D`, text: `4` }],
      answer: `D` },

    { id: `m3id-math-m2-2`, domain: `Advanced Math`, skill: `Equivalent expressions`, difficulty: `easy`, type: `mcq`,
      prompt: `<p>Which expression is equivalent to (7nr<sup>2</sup> + 2nr) + (5n<sup>2</sup>r + 4nr)?</p>`,
      options: [{ id: `A`, text: `12n<sup>2</sup>r<sup>2</sup> + 6nr` }, { id: `B`, text: `12n<sup>3</sup>r<sup>3</sup> + 6n<sup>2</sup>r<sup>2</sup>` }, { id: `C`, text: `35n<sup>3</sup>r<sup>3</sup> + 8n<sup>2</sup>r<sup>2</sup>` }, { id: `D`, text: `7nr<sup>2</sup> + 5n<sup>2</sup>r + 6nr` }],
      answer: `D` },

    { id: `m3id-math-m2-3`, domain: `Algebra`, skill: `Linear equations in two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `<p style='text-align:center'>v = −<sup>w</sup>&frasl;<sub>123x</sub></p><p>The given equation relates the distinct positive numbers <em>v</em>, <em>w</em>, and <em>x</em>. Which equation correctly expresses <em>w</em> in terms of <em>v</em> and <em>x</em>?</p>`,
      options: [{ id: `A`, text: `w = −123vx` }, { id: `B`, text: `w = −<sup>123v</sup>&frasl;<sub>x</sub>` }, { id: `C`, text: `w = −<sup>x</sup>&frasl;<sub>123v</sub>` }, { id: `D`, text: `w = v + 123x` }],
      answer: `A` },

    { id: `m3id-math-m2-4`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `medium`, type: `mcq`,
      prompt: `<p style='text-align:center'>−3x + 6rx = 54</p><p>In the given equation, <em>r</em> is a constant. The equation has no solution. What is the value of <em>r</em>?</p>`,
      options: [{ id: `A`, text: `<sup>1</sup>&frasl;<sub>9</sub>` }, { id: `B`, text: `<sup>1</sup>&frasl;<sub>2</sub>` }, { id: `C`, text: `2` }, { id: `D`, text: `9` }],
      answer: `B` },

    { id: `m3id-math-m2-5`, domain: `Problem-Solving and Data Analysis`, skill: `Percentages`, difficulty: `hard`, type: `grid`,
      prompt: `<p>A real estate company offers a series of three webinars. 3,750 people attended the first webinar. 54% of the people who attended the first webinar attended the second webinar, and 36% of the people who attended the first and second webinars attended the third webinar. How many people attended all three webinars?</p>`,
      answer: [`729`] },

    { id: `m3id-math-m2-6`, domain: `Algebra`, skill: `Linear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<p><svg viewBox='0 0 300 294' width='320' xmlns='http://www.w3.org/2000/svg'><g stroke='#dadada' stroke-width='1'><line x1='26.0' y1='10.0' x2='26.0' y2='274.0'/><line x1='48.0' y1='10.0' x2='48.0' y2='274.0'/><line x1='70.0' y1='10.0' x2='70.0' y2='274.0'/><line x1='92.0' y1='10.0' x2='92.0' y2='274.0'/><line x1='114.0' y1='10.0' x2='114.0' y2='274.0'/><line x1='136.0' y1='10.0' x2='136.0' y2='274.0'/><line x1='158.0' y1='10.0' x2='158.0' y2='274.0'/><line x1='180.0' y1='10.0' x2='180.0' y2='274.0'/><line x1='202.0' y1='10.0' x2='202.0' y2='274.0'/><line x1='224.0' y1='10.0' x2='224.0' y2='274.0'/><line x1='246.0' y1='10.0' x2='246.0' y2='274.0'/><line x1='268.0' y1='10.0' x2='268.0' y2='274.0'/><line x1='290.0' y1='10.0' x2='290.0' y2='274.0'/><line x1='26.0' y1='274.0' x2='290.0' y2='274.0'/><line x1='26.0' y1='252.0' x2='290.0' y2='252.0'/><line x1='26.0' y1='230.0' x2='290.0' y2='230.0'/><line x1='26.0' y1='208.0' x2='290.0' y2='208.0'/><line x1='26.0' y1='186.0' x2='290.0' y2='186.0'/><line x1='26.0' y1='164.0' x2='290.0' y2='164.0'/><line x1='26.0' y1='142.0' x2='290.0' y2='142.0'/><line x1='26.0' y1='120.0' x2='290.0' y2='120.0'/><line x1='26.0' y1='98.0' x2='290.0' y2='98.0'/><line x1='26.0' y1='76.0' x2='290.0' y2='76.0'/><line x1='26.0' y1='54.0' x2='290.0' y2='54.0'/><line x1='26.0' y1='32.0' x2='290.0' y2='32.0'/><line x1='26.0' y1='10.0' x2='290.0' y2='10.0'/></g><line x1='26.0' y1='142.0' x2='290.0' y2='142.0' stroke='#333' stroke-width='1.7'/><line x1='158.0' y1='10.0' x2='158.0' y2='274.0' stroke='#333' stroke-width='1.7'/><polyline points='106.7,273.8 115.5,247.4 124.3,221.0 133.1,194.6 141.9,168.2 150.7,141.8 159.5,115.4 168.3,89.0 177.1,62.6 185.9,36.2 194.7,9.8' fill='none' stroke='#111' stroke-width='2.4'/><text x='26.0' y='155.0' font-size='11' text-anchor='middle' fill='#333'>-6</text><text x='114.0' y='155.0' font-size='11' text-anchor='middle' fill='#333'>-2</text><text x='202.0' y='155.0' font-size='11' text-anchor='middle' fill='#333'>2</text><text x='290.0' y='155.0' font-size='11' text-anchor='middle' fill='#333'>6</text><text x='152.0' y='14.0' font-size='11' text-anchor='end' fill='#333'>6</text><text x='152.0' y='102.0' font-size='11' text-anchor='end' fill='#333'>2</text><text x='152.0' y='190.0' font-size='11' text-anchor='end' fill='#333'>-2</text><text x='152.0' y='278.0' font-size='11' text-anchor='end' fill='#333'>-6</text><text x='288.0' y='137.0' font-size='12' font-style='italic' fill='#333'>x</text><text x='165.0' y='19.0' font-size='12' font-style='italic' fill='#333'>y</text></svg></p><p>The graph of y = f(x) is shown. What is the y-intercept of the graph of y = f(x) + 11?</p>`,
      options: [{ id: `A`, text: `(0, −10)` }, { id: `B`, text: `(0, 12)` }, { id: `C`, text: `(1, 11)` }, { id: `D`, text: `(−11, 1)` }],
      answer: `B` },

    { id: `m3id-math-m2-7`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `hard`, type: `mcq`,
      prompt: `<p>The function <em>f</em> is defined by f(x) = |x − 6x|. What value of <em>a</em> satisfies f(2) − f(a) = −30?</p>`,
      options: [{ id: `A`, text: `−32` }, { id: `B`, text: `6` }, { id: `C`, text: `8` }, { id: `D`, text: `150` }],
      answer: `C` },

    { id: `m3id-math-m2-8`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `medium`, type: `grid`,
      prompt: `<p style='text-align:center'>−7(13 − 5x) + 3 = −8(13 − 5x) + 25</p><p>If the given equation is true, what is the value of 13 − 5x?</p>`,
      answer: [`22`] },

    { id: `m3id-math-m2-9`, domain: `Algebra`, skill: `Linear inequalities in one or two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>The minimum value of <em>x</em> is 4 less than 8 times another number <em>n</em>. Which inequality shows the possible values of <em>x</em>?</p>`,
      options: [{ id: `A`, text: `x ≤ 8n − 4` }, { id: `B`, text: `x ≥ 8n − 4` }, { id: `C`, text: `x ≤ 4 − 8n` }, { id: `D`, text: `x ≥ 4 − 8n` }],
      answer: `B` },

    { id: `m3id-math-m2-10`, domain: `Algebra`, skill: `Linear inequalities in one or two variables`, difficulty: `hard`, type: `mcq`,
      prompt: `<p><svg viewBox='0 0 308 234' width='320' xmlns='http://www.w3.org/2000/svg'><rect x='26.0' y='10.0' width='272.0' height='119.0' fill='#c9c9c9' opacity='0.55'/><g stroke='#dadada' stroke-width='1'><line x1='26.0' y1='10.0' x2='26.0' y2='214.0'/><line x1='43.0' y1='10.0' x2='43.0' y2='214.0'/><line x1='60.0' y1='10.0' x2='60.0' y2='214.0'/><line x1='77.0' y1='10.0' x2='77.0' y2='214.0'/><line x1='94.0' y1='10.0' x2='94.0' y2='214.0'/><line x1='111.0' y1='10.0' x2='111.0' y2='214.0'/><line x1='128.0' y1='10.0' x2='128.0' y2='214.0'/><line x1='145.0' y1='10.0' x2='145.0' y2='214.0'/><line x1='162.0' y1='10.0' x2='162.0' y2='214.0'/><line x1='179.0' y1='10.0' x2='179.0' y2='214.0'/><line x1='196.0' y1='10.0' x2='196.0' y2='214.0'/><line x1='213.0' y1='10.0' x2='213.0' y2='214.0'/><line x1='230.0' y1='10.0' x2='230.0' y2='214.0'/><line x1='247.0' y1='10.0' x2='247.0' y2='214.0'/><line x1='264.0' y1='10.0' x2='264.0' y2='214.0'/><line x1='281.0' y1='10.0' x2='281.0' y2='214.0'/><line x1='298.0' y1='10.0' x2='298.0' y2='214.0'/><line x1='26.0' y1='214.0' x2='298.0' y2='214.0'/><line x1='26.0' y1='197.0' x2='298.0' y2='197.0'/><line x1='26.0' y1='180.0' x2='298.0' y2='180.0'/><line x1='26.0' y1='163.0' x2='298.0' y2='163.0'/><line x1='26.0' y1='146.0' x2='298.0' y2='146.0'/><line x1='26.0' y1='129.0' x2='298.0' y2='129.0'/><line x1='26.0' y1='112.0' x2='298.0' y2='112.0'/><line x1='26.0' y1='95.0' x2='298.0' y2='95.0'/><line x1='26.0' y1='78.0' x2='298.0' y2='78.0'/><line x1='26.0' y1='61.0' x2='298.0' y2='61.0'/><line x1='26.0' y1='44.0' x2='298.0' y2='44.0'/><line x1='26.0' y1='27.0' x2='298.0' y2='27.0'/><line x1='26.0' y1='10.0' x2='298.0' y2='10.0'/></g><line x1='26.0' y1='44.0' x2='298.0' y2='44.0' stroke='#333' stroke-width='1.7'/><line x1='162.0' y1='10.0' x2='162.0' y2='214.0' stroke='#333' stroke-width='1.7'/><line x1='26.0' y1='129.0' x2='298.0' y2='129.0' stroke='#111' stroke-width='2' stroke-dasharray='7 4'/><text x='26.0' y='57.0' font-size='11' text-anchor='middle' fill='#333'>-8</text><text x='94.0' y='57.0' font-size='11' text-anchor='middle' fill='#333'>-4</text><text x='230.0' y='57.0' font-size='11' text-anchor='middle' fill='#333'>4</text><text x='298.0' y='57.0' font-size='11' text-anchor='middle' fill='#333'>8</text><text x='156.0' y='14.0' font-size='11' text-anchor='end' fill='#333'>2</text><text x='156.0' y='82.0' font-size='11' text-anchor='end' fill='#333'>-2</text><text x='156.0' y='133.0' font-size='11' text-anchor='end' fill='#333'>-5</text><text x='156.0' y='184.0' font-size='11' text-anchor='end' fill='#333'>-8</text><text x='296.0' y='39.0' font-size='12' font-style='italic' fill='#333'>x</text><text x='169.0' y='19.0' font-size='12' font-style='italic' fill='#333'>y</text></svg></p><p>The shaded region shown represents the solutions to the inequality −19y &lt; c, where <em>c</em> is a constant. What is the value of <em>c</em>?</p>`,
      options: [{ id: `A`, text: `95` }, { id: `B`, text: `5` }, { id: `C`, text: `−5` }, { id: `D`, text: `−95` }],
      answer: `A` },

    { id: `m3id-math-m2-11`, domain: `Algebra`, skill: `Systems of two linear equations in two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>At a constant temperature, a scuba diver combines two different concentrations of nitrox mix (oxygen-nitrogen gas mixture) to fill a tank to a total pressure of 90 atmospheres (atm), of which 37% is contributed by oxygen. Nitrox mix A contributes <em>x</em> atm of pressure to the tank, of which 22% is contributed by oxygen. Nitrox mix B contributes <em>y</em> atm of pressure to the tank, of which 49% is contributed by oxygen. Which system of equations represents this situation?</p>`,
      options: [{ id: `A`, text: `x + y = 90; 0.22x + 0.49y = 0.37(90)` }, { id: `B`, text: `x + y = 90; 0.49x + 0.22y = 0.37(90)` }, { id: `C`, text: `x + y = 0.37(90); 0.22x + 0.49y = 90` }, { id: `D`, text: `x + y = 0.37(90); 0.49x + 0.22y = 90` }],
      answer: `A` },

    { id: `m3id-math-m2-12`, domain: `Advanced Math`, skill: `Exponential functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<p><svg viewBox='0 0 316 310' width='320' xmlns='http://www.w3.org/2000/svg'><g stroke='#dadada' stroke-width='1'><line x1='26.0' y1='10.0' x2='26.0' y2='290.0'/><line x1='40.0' y1='10.0' x2='40.0' y2='290.0'/><line x1='54.0' y1='10.0' x2='54.0' y2='290.0'/><line x1='68.0' y1='10.0' x2='68.0' y2='290.0'/><line x1='82.0' y1='10.0' x2='82.0' y2='290.0'/><line x1='96.0' y1='10.0' x2='96.0' y2='290.0'/><line x1='110.0' y1='10.0' x2='110.0' y2='290.0'/><line x1='124.0' y1='10.0' x2='124.0' y2='290.0'/><line x1='138.0' y1='10.0' x2='138.0' y2='290.0'/><line x1='152.0' y1='10.0' x2='152.0' y2='290.0'/><line x1='166.0' y1='10.0' x2='166.0' y2='290.0'/><line x1='180.0' y1='10.0' x2='180.0' y2='290.0'/><line x1='194.0' y1='10.0' x2='194.0' y2='290.0'/><line x1='208.0' y1='10.0' x2='208.0' y2='290.0'/><line x1='222.0' y1='10.0' x2='222.0' y2='290.0'/><line x1='236.0' y1='10.0' x2='236.0' y2='290.0'/><line x1='250.0' y1='10.0' x2='250.0' y2='290.0'/><line x1='264.0' y1='10.0' x2='264.0' y2='290.0'/><line x1='278.0' y1='10.0' x2='278.0' y2='290.0'/><line x1='292.0' y1='10.0' x2='292.0' y2='290.0'/><line x1='306.0' y1='10.0' x2='306.0' y2='290.0'/><line x1='26.0' y1='290.0' x2='306.0' y2='290.0'/><line x1='26.0' y1='276.0' x2='306.0' y2='276.0'/><line x1='26.0' y1='262.0' x2='306.0' y2='262.0'/><line x1='26.0' y1='248.0' x2='306.0' y2='248.0'/><line x1='26.0' y1='234.0' x2='306.0' y2='234.0'/><line x1='26.0' y1='220.0' x2='306.0' y2='220.0'/><line x1='26.0' y1='206.0' x2='306.0' y2='206.0'/><line x1='26.0' y1='192.0' x2='306.0' y2='192.0'/><line x1='26.0' y1='178.0' x2='306.0' y2='178.0'/><line x1='26.0' y1='164.0' x2='306.0' y2='164.0'/><line x1='26.0' y1='150.0' x2='306.0' y2='150.0'/><line x1='26.0' y1='136.0' x2='306.0' y2='136.0'/><line x1='26.0' y1='122.0' x2='306.0' y2='122.0'/><line x1='26.0' y1='108.0' x2='306.0' y2='108.0'/><line x1='26.0' y1='94.0' x2='306.0' y2='94.0'/><line x1='26.0' y1='80.0' x2='306.0' y2='80.0'/><line x1='26.0' y1='66.0' x2='306.0' y2='66.0'/><line x1='26.0' y1='52.0' x2='306.0' y2='52.0'/><line x1='26.0' y1='38.0' x2='306.0' y2='38.0'/><line x1='26.0' y1='24.0' x2='306.0' y2='24.0'/><line x1='26.0' y1='10.0' x2='306.0' y2='10.0'/></g><line x1='26.0' y1='150.0' x2='306.0' y2='150.0' stroke='#333' stroke-width='1.7'/><line x1='166.0' y1='10.0' x2='166.0' y2='290.0' stroke='#333' stroke-width='1.7'/><polyline points='26.0,262.0 33.0,262.0 40.0,262.0 47.0,262.0 54.0,262.0 61.0,261.9 68.0,261.9 75.0,261.9 82.0,261.7 89.0,261.7 96.0,261.6 103.0,261.4 110.0,261.2 117.0,260.7 124.0,260.3 131.0,259.5 138.0,258.5 145.0,257.1 152.0,255.0 159.0,252.1 166.0,248.0 173.0,242.3 180.0,234.0 187.0,222.4 194.0,206.0 201.0,182.8 208.0,150.0 215.0,103.7 222.0,38.0' fill='none' stroke='#111' stroke-width='2.4'/><text x='26.0' y='163.0' font-size='11' text-anchor='middle' fill='#333'>-10</text><text x='96.0' y='163.0' font-size='11' text-anchor='middle' fill='#333'>-5</text><text x='236.0' y='163.0' font-size='11' text-anchor='middle' fill='#333'>5</text><text x='306.0' y='163.0' font-size='11' text-anchor='middle' fill='#333'>10</text><text x='160.0' y='14.0' font-size='11' text-anchor='end' fill='#333'>10</text><text x='160.0' y='84.0' font-size='11' text-anchor='end' fill='#333'>5</text><text x='160.0' y='224.0' font-size='11' text-anchor='end' fill='#333'>-5</text><text x='160.0' y='266.0' font-size='11' text-anchor='end' fill='#333'>-8</text><text x='304.0' y='145.0' font-size='12' font-style='italic' fill='#333'>x</text><text x='173.0' y='19.0' font-size='12' font-style='italic' fill='#333'>y</text></svg></p><p>The graph of the equation y = 2<sup>x</sup> + k is shown, where <em>k</em> is a constant. What is the value of <em>k</em>?</p>`,
      options: [{ id: `A`, text: `−8` }, { id: `B`, text: `−7` }, { id: `C`, text: `7` }, { id: `D`, text: `8` }],
      answer: `A` },

    { id: `m3id-math-m2-13`, domain: `Problem-Solving and Data Analysis`, skill: `Ratios, rates, and units`, difficulty: `hard`, type: `mcq`,
      prompt: `<p>A certain town has an area of 3.51 square miles. What is the area, in <u>square yards</u>, of this town? (1 mile = 1,760 yards)</p>`,
      options: [{ id: `A`, text: `501` }, { id: `B`, text: `6,178` }, { id: `C`, text: `882,507` }, { id: `D`, text: `10,872,576` }],
      answer: `D` },

    { id: `m3id-math-m2-14`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>The function <em>f</em> gives the product of a number, <em>x</em>, and a number that is 7 more than <em>x</em>. Which equation defines <em>f</em>?</p>`,
      options: [{ id: `A`, text: `f(x) = x<sup>2</sup> + x + 7` }, { id: `B`, text: `f(x) = x<sup>2</sup> + 7` }, { id: `C`, text: `f(x) = x<sup>2</sup> + 7x` }, { id: `D`, text: `f(x) = x<sup>2</sup> + 7x + 7` }],
      answer: `C` },

    { id: `m3id-math-m2-15`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>The function f(x) = <sup>1</sup>&frasl;<sub>8</sub>(x − 6)<sup>2</sup> + 4 gives a toy car's height above the ground f(x), in inches, <em>x</em> seconds after it started moving on an elevated track, where 0 ≤ x ≤ 10. Which of the following is the best interpretation of the vertex of the graph of y = f(x) in the <em>xy</em>-plane?</p>`,
      options: [{ id: `A`, text: `The toy car's minimum height was 4 inches above the ground.` }, { id: `B`, text: `The toy car's minimum height was 6 inches above the ground.` }, { id: `C`, text: `The toy car's height was 4 inches above the ground when it started moving.` }, { id: `D`, text: `The toy car's height was 6 inches above the ground when it started moving.` }],
      answer: `A` },

    { id: `m3id-math-m2-16`, domain: `Advanced Math`, skill: `Nonlinear equations`, difficulty: `hard`, type: `grid`,
      prompt: `<p>One of the factors of 5x<sup>3</sup> + 105x<sup>2</sup> + 540x is x + b, where <em>b</em> is a positive constant. What is the smallest possible value of <em>b</em>?</p>`,
      answer: [`9`] },

    { id: `m3id-math-m2-17`, domain: `Algebra`, skill: `Linear functions`, difficulty: `hard`, type: `mcq`,
      prompt: `<p>Kenny engages in up to 3 types of exercise each week for a total of 6 hours while training for a triathlon. Kenny swims for the same number of <u>minutes</u> each week. The equation y = 360 − x − 170 represents the situation where Kenny bikes for <em>x</em> minutes during a week and runs for any remaining training time <em>y</em>, in minutes. If this equation is graphed in the <em>xy</em>-plane, which statement is the best interpretation of the <em>x</em>-intercept of the graph?</p>`,
      options: [{ id: `A`, text: `During a week when Kenny doesn't run, he bikes for 190 minutes.` }, { id: `B`, text: `During a week when Kenny doesn't bike, he runs for 190 minutes.` }, { id: `C`, text: `Each week, Kenny bikes and runs for a total of 190 minutes.` }, { id: `D`, text: `During a week when Kenny swims for 190 minutes, he bikes for 170 minutes.` }],
      answer: `A` },

    { id: `m3id-math-m2-18`, domain: `Geometry and Trigonometry`, skill: `Lines, angles, and triangles`, difficulty: `hard`, type: `mcq`,
      prompt: `<p>Two lines intersect at exactly one point, forming two acute angles and two obtuse angles. The measure of one of these angles is (9x − 110)°. Which of the following could NOT be the sum of the measures of any two of these angles?</p>`,
      options: [{ id: `A`, text: `(−18x + 220)°` }, { id: `B`, text: `(−18x + 580)°` }, { id: `C`, text: `(18x − 220)°` }, { id: `D`, text: `180°` }],
      answer: `A` },

    { id: `m3id-math-m2-19`, domain: `Advanced Math`, skill: `Nonlinear equations and systems`, difficulty: `hard`, type: `grid`,
      prompt: `<p style='text-align:center'><sup>5</sup>&frasl;<sub>8</sub>(5x + 8)(x + &radic;<span style='border-top:1px solid'>5k + 8</span>)(x − &radic;<span style='border-top:1px solid'>5k + 8</span>) = 0</p><p>In the given equation, <em>k</em> is a positive constant. The product of the solutions to the equation is 64. What is the value of <em>k</em>?</p>`,
      answer: [`6.4`, `32/5`] },

    { id: `m3id-math-m2-20`, domain: `Problem-Solving and Data Analysis`, skill: `Distributions and measures of center and spread`, difficulty: `hard`, type: `mcq`,
      prompt: `<p>Each of the following frequency tables represents a data set. Which of these frequency tables represents the data set with the smallest standard deviation?</p>`,
      options: [{ id: `A`, text: `<table style='border-collapse:collapse;margin:2px 0' border='1' cellpadding='3'><tr><th>Value</th><th>Frequency</th></tr><tr><td style='text-align:center'>4</td><td style='text-align:center'>0</td></tr><tr><td style='text-align:center'>5</td><td style='text-align:center'>10</td></tr><tr><td style='text-align:center'>6</td><td style='text-align:center'>40</td></tr><tr><td style='text-align:center'>7</td><td style='text-align:center'>10</td></tr><tr><td style='text-align:center'>8</td><td style='text-align:center'>0</td></tr></table>` }, { id: `B`, text: `<table style='border-collapse:collapse;margin:2px 0' border='1' cellpadding='3'><tr><th>Value</th><th>Frequency</th></tr><tr><td style='text-align:center'>4</td><td style='text-align:center'>8</td></tr><tr><td style='text-align:center'>5</td><td style='text-align:center'>14</td></tr><tr><td style='text-align:center'>6</td><td style='text-align:center'>16</td></tr><tr><td style='text-align:center'>7</td><td style='text-align:center'>14</td></tr><tr><td style='text-align:center'>8</td><td style='text-align:center'>8</td></tr></table>` }, { id: `C`, text: `<table style='border-collapse:collapse;margin:2px 0' border='1' cellpadding='3'><tr><th>Value</th><th>Frequency</th></tr><tr><td style='text-align:center'>4</td><td style='text-align:center'>12</td></tr><tr><td style='text-align:center'>5</td><td style='text-align:center'>12</td></tr><tr><td style='text-align:center'>6</td><td style='text-align:center'>12</td></tr><tr><td style='text-align:center'>7</td><td style='text-align:center'>12</td></tr><tr><td style='text-align:center'>8</td><td style='text-align:center'>12</td></tr></table>` }, { id: `D`, text: `<table style='border-collapse:collapse;margin:2px 0' border='1' cellpadding='3'><tr><th>Value</th><th>Frequency</th></tr><tr><td style='text-align:center'>4</td><td style='text-align:center'>15</td></tr><tr><td style='text-align:center'>5</td><td style='text-align:center'>11</td></tr><tr><td style='text-align:center'>6</td><td style='text-align:center'>8</td></tr><tr><td style='text-align:center'>7</td><td style='text-align:center'>11</td></tr><tr><td style='text-align:center'>8</td><td style='text-align:center'>15</td></tr></table>` }],
      answer: `A` },

    { id: `m3id-math-m2-21`, domain: `Geometry and Trigonometry`, skill: `Area and volume`, difficulty: `hard`, type: `grid`,
      prompt: `<p style='text-align:center'><table style='border-collapse:collapse;margin:0 auto' border='1' cellpadding='5'><tr><td></td><th>Volume (cubic units)</th></tr><tr><td>Right circular cylinder A</td><td style='text-align:center'>72π</td></tr><tr><td>Right circular cylinder B</td><td style='text-align:center'>4,608π</td></tr></table></p><p>The table shows the volume of two similar solids, right circular cylinder A and right circular cylinder B. The radius of right circular cylinder A is 3 units. The surface area of right circular cylinder A is <em>k</em>π square units, and the surface area of right circular cylinder B is <em>n</em>π square units, where <em>k</em> and <em>n</em> are constants. What is the value of n − k? (The surface area of a right circular cylinder with radius <em>r</em> and height <em>h</em> is 2π<em>r</em><sup>2</sup> + 2π<em>rh</em>.)</p>`,
      answer: [`990`] },

    { id: `m3id-math-m2-22`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `hard`, type: `grid`,
      prompt: `<p>Function <em>f</em> is a quadratic function. The graph of y = f(x) in the <em>xy</em>-plane has a vertex at (−5, −8), contains the point (−6, −10), and has a y-intercept at (0, a). The graph of y = 6 · f(x) has a y-intercept at (0, b). What is the positive difference between <em>a</em> and <em>b</em>?</p>`,
      answer: [`290`] },
  ];

  Apex.bank.register({
    id: "dsat-2024-03-int-d",
    title: "March 2024",
    type: "digital",
    region: "International",
    version: "D",
    year: 2024,
    monthNum: 3,
    tagline: "International \u00b7 Version D",
    description: "Digital SAT \u2014 March 2024 International prediction form, Version D (Reading & Writing native; Math shared with Form A).",
    adaptive: false,
    sections: [
      { id: "rw", modules: [
        { id: "m3id-rw-m1", stage: 1, name: "Reading and Writing \u2014 Module 1", minutes: 32, questions: RW_M1 },
        { id: "m3id-rw-m2", stage: 2, variant: "hard", name: "Reading and Writing \u2014 Module 2 (Hard)", minutes: 32, questions: RW_M2 },
      ] },
      { id: "math", modules: [
        { id: "m3id-math-m1", stage: 1, name: "Math \u2014 Module 1", minutes: 35, calculator: true, questions: MATH_M1 },
        { id: "m3id-math-m2", stage: 2, variant: "hard", name: "Math \u2014 Module 2 (Hard)", minutes: 35, calculator: true, questions: MATH_M2 },
      ] },
    ],
  });
})();
