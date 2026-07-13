/* ==========================================================================
   Digital SAT — December 2024 (US), Version C.
   Rebuilt in EliteXSAT's native UI from teacher-authored SAT-style prediction
   forms (2027 Prediction December USA). RW sorted into canonical Digital SAT
   domain order; Math ordered easy -> hard. Answers solved independently; the
   student's marked picks were treated as guides only. Cross-filled / conflicted
   items are noted in the build log (not shown to students). No explanations.
   COMPLETE (98 q). */
(function () {
  const RW_M1 = [
    { id: `duc-rw-m1-1`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `easy`, type: `mcq`,
      passage: `The following text is adapted from Yone Noguchi&rsquo;s 1914 memoir <em>The Story of Yone Noguchi</em>. Noguchi is returning home after eleven years abroad.<br><br>I reached Tsushima, my native town, at evening.<br><br>I frightened my old father at the station, who was actually trying to <u>find</u> me among some other people. There is no wonder that he could not recognise me; I must have changed a great deal.`,
      prompt: `As used in the text, what does the word &ldquo;find&rdquo; most nearly mean?`,
      options: [{ id: `A`, text: `Reveal` }, { id: `B`, text: `Persuade` }, { id: `C`, text: `Judge` }, { id: `D`, text: `Locate` }],
      answer: `D` },

    { id: `duc-rw-m1-2`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `Lessons from previous declines in biodiversity can help shape policy recommendations aimed at preserving species at risk. The factors that contributed to the extinction of the shrub-ox around 9500 BCE may also be _____ endangered species today.`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `concealed from` }, { id: `B`, text: `applicable to` }, { id: `C`, text: `integrated with` }, { id: `D`, text: `dependent on` }],
      answer: `B` },

    { id: `duc-rw-m1-3`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `In a 2018 article celebrating films depicting the Black experience, critics for the <em>New York Times</em> _____ Ossie Davis&rsquo;s 1970 film <em>Cotton Comes to Harlem</em> and Cheryl Dunye&rsquo;s 1996 film <em>The Watermelon Woman</em>, praising the former as &ldquo;especially pointed&rdquo; and the latter as &ldquo;heartbreaking and inspiring.&rdquo;`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `inspired` }, { id: `B`, text: `satirized` }, { id: `C`, text: `overlooked` }, { id: `D`, text: `commended` }],
      answer: `D` },

    { id: `duc-rw-m1-4`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `In 1879, in an effort to determine the longevity of certain seeds left in soil, botanist William Beal buried 20 glass bottles filled with sand and seeds from a variety of plants, including <em>Verbascum</em>, <em>Lepidium virginicum</em>, and <em>Stellaria media</em>. Since then, some of the bottles have been retrieved in the periodic checks of seed viability researchers are conducting. After 60 years had elapsed, most of the seeds in those bottles stopped germinating, but <em>Verbascum</em> seeds have remained viable, including those from a bottle dug up in 2021 by Margaret Fleming, Lars Brudvig, and colleagues.`,
      prompt: `Which choice best states the main purpose of the text?`,
      options: [{ id: `A`, text: `To discuss an ongoing experiment` }, { id: `B`, text: `To explain how to get rid of certain plants` }, { id: `C`, text: `To compare two experiments addressing the same questions` }, { id: `D`, text: `To describe difficulties associated with preserving seeds` }],
      answer: `A` },

    { id: `duc-rw-m1-5`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `Mexican textile artist Victoria Villasana weaves stories of triumph, using her unique method of applying colorful yarn to photographs of people. In some works, Villasana focuses on celebrating cultural icons who are people of color, as she does in her depiction of musician and composer Prince. However, in other works, Villasana honors ordinary people, as she does in her captivating portrayal of a young girl sitting on a sidewalk. Villasana sees both of these approaches as ways of depicting the power and interconnectedness of all people.`,
      prompt: `Which choice best describes the overall structure of the text?`,
      options: [{ id: `A`, text: `It introduces Villasana&rsquo;s cultural background, describes how this background influences her art, and then outlines some of her ideas for future projects.` }, { id: `B`, text: `It compares Villasana to other contemporary artists, indicates how two of her works are similar, and then emphasizes Villasana&rsquo;s enthusiasm for artistic collaboration.` }, { id: `C`, text: `It explains how yarn has historically been used in art, details how Villasana uses yarn in her artworks, and then comments on the popularity of her work.` }, { id: `D`, text: `It provides details about Villasana&rsquo;s artworks, discusses specific examples of her work, and relates them to one of her artistic goals.` }],
      answer: `D` },

    { id: `duc-rw-m1-6`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `The following text is from Sara Teasdale&rsquo;s 1922 poem &ldquo;Two Songs for Solitude.&rdquo;<br><br>My heart has grown rich with the passing of years,<br>&nbsp;&nbsp;&nbsp;I have less need now than when I was young<br><u>To share myself with every comer,</u><br>&nbsp;&nbsp;&nbsp;<u>Or shape my thoughts into words with my tongue.</u>`,
      prompt: `Which choice best describes the function of the underlined portion in the text as a whole?`,
      options: [{ id: `A`, text: `It explains the speaker&rsquo;s views about proper conduct toward new acquaintances.` }, { id: `B`, text: `It provides examples of behaviors the speaker is less inclined toward than she once was.` }, { id: `C`, text: `It presents an episode from the speaker&rsquo;s youth that she remembers fondly.` }, { id: `D`, text: `It emphasizes the social habits the speaker has developed over her lifetime.` }],
      answer: `B` },

    { id: `duc-rw-m1-7`, domain: `Craft and Structure`, skill: `Cross-Text Connections`, difficulty: `medium`, type: `mcq`,
      passage: `<strong>Text 1</strong><br>In 2015 Rasht, Iran, was named a City of Gastronomy by UNESCO in recognition of the city&rsquo;s unique food culture. The honor is well known among residents of the city as well as tourists who visit. It&rsquo;s obvious that the selection of Rasht by UNESCO has brought awareness to local recipes, cooking practices, and chefs and has provided a boost to the city&rsquo;s tourism industry.<br><br><strong>Text 2</strong><br>Many people in Rasht&rsquo;s restaurant industry hoped that food tourism would increase after the city was chosen as a City of Gastronomy in 2015. However, as researcher Eerang Park and colleagues argue, cities must still create effective marketing strategies to benefit fully from being named a City of Gastronomy. Without an intentional effort to promote the city&rsquo;s food scene, many current and potential visitors to Rasht may not even be aware that it&rsquo;s home to uniquely delicious food.`,
      prompt: `Based on the texts, both authors would most likely agree with which statement?`,
      options: [{ id: `A`, text: `The benefits of Rasht having been named a City of Gastronomy extend well beyond increased tourism.` }, { id: `B`, text: `Increased tourism isn&rsquo;t guaranteed after a city has been named a City of Gastronomy.` }, { id: `C`, text: `A city&rsquo;s food scene can benefit from the city being named a City of Gastronomy.` }, { id: `D`, text: `A significant number of visitors to Rasht may not know that it was named a City of Gastronomy.` }],
      answer: `C` },

    { id: `duc-rw-m1-8`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `medium`, type: `mcq`,
      passage: `Like many other bird species that live only on the Hawaiian archipelago, the &lsquo;akeke&lsquo;e has adapted to life in a well-defined habitat, resulting in highly specialized physical and behavioral characteristics that aid the species in survival. However, because the &lsquo;akeke&lsquo;e is highly specialized, it is especially vulnerable to environmental changes that can disrupt the delicately balanced ecosystem in which it lives.`,
      prompt: `Which choice best states the main idea of the text?`,
      options: [{ id: `A`, text: `Hawaiian birds display a unique range of physical and behavioral characteristics and as a result can only live in habitats unique to the Hawaiian archipelago.` }, { id: `B`, text: `The &lsquo;akeke&lsquo;e is an example of a species unique to the Hawaiian archipelago that is highly specialized and therefore particularly susceptible to habitat disturbances.` }, { id: `C`, text: `The &lsquo;akeke&lsquo;e is a species of bird that is related to many other Hawaiian birds but does not share a habitat with any of them.` }, { id: `D`, text: `The &lsquo;akeke&lsquo;e is an example of a highly specialized bird species found only on the Hawaiian archipelago and is related to several other highly specialized bird species found there.` }],
      answer: `B` },

    { id: `duc-rw-m1-9`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `medium`, type: `mcq`,
      passage: `In 2004, Andrew Rogers created <em>Ancient Language</em>. In this work, Rogers created an 80-meter-long geoglyph out of rocks in the Atacama Desert. Rogers&rsquo;s work is part of the land art movement, in which artists reject the confinement and commercialization of art galleries. These artists usually install large-scale pieces outdoors, often in surprising locations.`,
      prompt: `Based on the text, what can be inferred about <em>Ancient Language</em>?`,
      options: [{ id: `A`, text: `Its location may be considered surprising.` }, { id: `B`, text: `It marked a shift in the popularity of the land art movement.` }, { id: `C`, text: `It may have had more commercial success in a different outdoor location.` }, { id: `D`, text: `It was created early in Rogers&rsquo;s career.` }],
      answer: `A` },

    { id: `duc-rw-m1-10`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `medium`, type: `mcq`,
      passage: `<div style="text-align:center;font-weight:600;font-size:12px;margin:2px 0">Home Video Game Systems of the 1970s and 1980s</div><table style="border-collapse:collapse;margin:6px auto"><tr><th style="border:1px solid var(--border);padding:3px 12px">System</th><th style="border:1px solid var(--border);padding:3px 12px">Manufacturer</th><th style="border:1px solid var(--border);padding:3px 12px">Approximate number of units sold worldwide</th></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">ColecoVision</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Coleco</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">2,000,000</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Game &amp; Watch</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Nintendo</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">18,600,000</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Intellivision</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Mattel</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">3,000,000</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Apple II</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Apple Inc.</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">4,487,000</td></tr></table>A student is researching the ColecoVision and other important gaming systems that were part of the global rise of the home video game industry during the 1970s and 1980s. The student is surprised to find that the ColecoVision sold relatively few units worldwide, with only about _____`,
      prompt: `Which choice most effectively uses data from the table to complete the statement?`,
      options: [{ id: `A`, text: `3,000,000 units sold compared to the approximately 4,487,000 units sold of the Game &amp; Watch.` }, { id: `B`, text: `2,000,000 units sold compared to the approximately 18,600,000 units sold of the Game &amp; Watch.` }, { id: `C`, text: `2,000,000 units sold compared to the approximately 18,600,000 units sold of the Intellivision.` }, { id: `D`, text: `3,000,000 units sold compared to the approximately 4,487,000 units sold of the Apple II.` }],
      answer: `B` },

    { id: `duc-rw-m1-11`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `A student is studying how woma pythons, eastern brown snakes, and rough-scaled death adders react to sound. The student knew that many snakes display movement of more than 20 cm in response to sound traveling through the ground, but assumed that <u>snakes do not detect sound traveling through the air</u> until reading a study by Christina Zdenek, Timothy Staples, and their team.`,
      prompt: `Which finding from Christina Zdenek, Timothy Staples, and their team&rsquo;s study, if true, would most directly challenge the underlined assumption?`,
      options: [{ id: `A`, text: `Neither eastern brown snakes nor rough-scaled death adders display movement of more than 20 cm in response to airborne sound.` }, { id: `B`, text: `Woma pythons have better overall hearing than do rough-scaled death adders.` }, { id: `C`, text: `Both woma pythons and eastern brown snakes react only to sounds traveling through the ground.` }, { id: `D`, text: `Woma pythons, eastern brown snakes, and rough-scaled death adders display movement of more than 20 cm in response to both ground and airborne sound waves.` }],
      answer: `D` },

    { id: `duc-rw-m1-12`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `medium`, type: `mcq`,
      passage: `&ldquo;A Pair of Silk Stockings&rdquo; is an 1897 short story written by Kate Chopin. In the story, Mrs. Sommers becomes engrossed in the decision of how she should spend a recently obtained sum of money: _____`,
      prompt: `Which quotation from &ldquo;A Pair of Silk Stockings&rdquo; most effectively illustrates the claim?`,
      options: [{ id: `A`, text: `&ldquo;The question of investment was one that occupied her greatly. For a day or two she walked about apparently in a dreamy state, but really absorbed in speculation and calculation.&rdquo;` }, { id: `B`, text: `&ldquo;She had learned to clutch a piece of goods and hold it and stick to it with persistence and determination till her turn came to be served, no matter when it came.&rdquo;` }, { id: `C`, text: `&ldquo;A young girl who stood behind the counter asked her if she wished to examine their line of silk hosiery. She smiled, just as if she had been asked to inspect a tiara of diamonds with the ultimate view of purchasing it.&rdquo;` }, { id: `D`, text: `&ldquo;It seemed to her a very large amount of money, and the way in which it stuffed and bulged her worn old <em>porte-monnaie</em> [small purse] gave her a feeling of importance such as she had not enjoyed for years.&rdquo;` }],
      answer: `A` },

    { id: `duc-rw-m1-13`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `<div style="text-align:center;font-weight:600;font-size:12px;margin:2px 0">Average Annual Growth Rate of Agricultural Exports (percent)</div><table style="border-collapse:collapse;margin:6px auto"><tr><th style="border:1px solid var(--border);padding:3px 12px">Country</th><th style="border:1px solid var(--border);padding:3px 12px">Exports to the US: 5 years before FTA</th><th style="border:1px solid var(--border);padding:3px 12px">Exports to the US: 5 years after FTA</th><th style="border:1px solid var(--border);padding:3px 12px">Total exports: 5 years before FTA</th><th style="border:1px solid var(--border);padding:3px 12px">Total exports: 5 years after FTA</th></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Australia</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">8.8</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">&minus;2.3</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">6.8</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">7.1</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Guatemala</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">13.5</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">16.7</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">13.8</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">20.1</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Jordan</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">&minus;5.3</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">42.1</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">&minus;5.5</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">36.7</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Morocco</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">12.7</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">42.8</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">19.6</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">4.9</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Panama</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">&minus;6.8</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">7.3</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">10.0</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">11.0</td></tr></table>A 2022 US Department of Agriculture report by Kayode Ajewole et al. calculated average annual growth rates of agricultural exports from countries over the five years before and the five years following the creation of a free trade agreement (FTA) with the US. The table shows data for five countries in the study. (Post-FTA calculations included some anticipatory effects preceding the agreements&rsquo; official start.) Ajewole et al. note that an increase in the rate of exports to the US in the post-FTA period does not necessarily indicate that a country produced more goods for export as a result of the FTA. Rather, FTAs sometimes incentivize countries to redirect existing trade from nonmember countries to FTA partners, as is most likely the case with _____`,
      prompt: `Which choice most effectively uses data from the table to complete the statement?`,
      options: [{ id: `A`, text: `Jordan, because the post-FTA period coincided with increasing rates of both its agricultural exports to the US and its total agricultural exports to countries not participating in the FTA.` }, { id: `B`, text: `Australia, because its rate of agricultural exports to the US and its rate of total agricultural exports both decreased in the post-FTA period relative to the pre-FTA period.` }, { id: `C`, text: `Morocco, because its rate of agricultural exports to the US increased in the post-FTA period relative to the pre-FTA period, while its rate of total agricultural exports decreased during the same period.` }, { id: `D`, text: `Panama, because the post-FTA period saw a decrease in its rate of agricultural exports to the US but not in its rate of total agricultural exports.` }],
      answer: `C` },

    { id: `duc-rw-m1-14`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `Studies conducted in individual Western societies have demonstrated associations between personality traits and five musical factors (mellowness, unpretentiousness, sophistication, intensity, and contemporariness) underlying individual preferences for styles of Western music. To investigate these associations across cultures, David M. Greenberg et al. collected music-preference assessments for Western genres and self-reported personality traits from participants in fifty-three countries across six continents. The study confirmed that the five-factor framework accurately captured participants&rsquo; tastes in Western music, and, moreover, the study found similar correlations between patterns of these factors and of personality traits, suggesting that _____`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `the five-factor framework can likely be used to predict preferences for non-Western music styles based on personality traits even if the characteristics of those styles substantially differ from characteristics of Western music styles.` }, { id: `B`, text: `the strength of the relationship between personality traits and musical preferences varies less across cultures than researchers had previously assumed.` }, { id: `C`, text: `people with a relatively high degree of familiarity with Western music styles are likely to express stronger preferences for those styles than people with a relatively low degree of familiarity with those styles are.` }, { id: `D`, text: `across cultural contexts, people who share similar profiles of personality traits tend to prefer listening to similar types of Western music.` }],
      answer: `D` },

    { id: `duc-rw-m1-15`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `The oceanic whitetip shark and the Pacific halibut are ectothermic (cold-blooded) fish, whereas the shortfin mako shark and the yellowfin tuna are regional endotherms&mdash;they retain metabolic heat resulting in body temperatures above the ambient water temperature. Modeling the effect of falling ambient temperatures on ectotherms indicated to researchers Haley R. Dolton and colleagues that ectotherms&rsquo; body temperatures inexorably decrease toward the ambient temperature. Data from wild basking sharks show that even though their body temperature consistently remains 1.0 to 1.5&deg;C above ambient, it also declines as the ambient temperature falls. This suggests that the body temperatures of the _____`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `yellowfin tuna and the shortfin mako shark are likely to be more variable than the body temperature of the basking shark.` }, { id: `B`, text: `Pacific halibut and the basking shark are at least partly determined by the ambient water temperature.` }, { id: `C`, text: `basking shark and the shortfin mako shark remain fixed even as ambient water temperature changes, while the body temperature of the Pacific halibut changes with variations in the ambient water temperature.` }, { id: `D`, text: `basking shark and the yellowfin tuna remain fixed even if the ambient water temperature changes, while the body temperature of the oceanic whitetip shark varies even if the ambient temperature is stable.` }],
      answer: `B` },

    { id: `duc-rw-m1-16`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `Nanoengineers have developed synthesized cerium oxide nanoparticles that are used to improve treatments for certain conditions related to oxidative stress. As nanotechnology evolves, medical technology _____ to evolve as well.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `had likely been continuing` }, { id: `B`, text: `will likely continue` }, { id: `C`, text: `would likely have continued` }, { id: `D`, text: `had likely continued` }],
      answer: `B` },

    { id: `duc-rw-m1-17`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `Mr. T, Rasta, and Makhulu were special animals to big cat enthusiasts. Between 2006 and _____ lions prowled the Greater Kruger National Park game reserve in South Africa, forming part of a dominant coalition&mdash;the term for a group of male lions&mdash;known as the Mapogo.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `2012 when these` }, { id: `B`, text: `2012. These` }, { id: `C`, text: `2012, because these` }, { id: `D`, text: `2012, these` }],
      answer: `D` },

    { id: `duc-rw-m1-18`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `Navajo artist Sally Black&rsquo;s mastery of traditional weaving techniques is apparent in her expertly crafted baskets, which typically are woven from sumac (a textured and flexible material) and _____ bold colors.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `feature` }, { id: `B`, text: `had featured` }, { id: `C`, text: `were featuring` }, { id: `D`, text: `featured` }],
      answer: `A` },

    { id: `duc-rw-m1-19`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `A 2014 study led by _____ studied the impact of fertilizers containing nitrogen on grassland arthropod populations. Another study, led by Malie Lessard-Therrien in 2018, looked at fertilizers containing nitrogen and two other macronutrients: phosphorus and potassium.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `researcher, Mark A. Lee,` }, { id: `B`, text: `researcher Mark A. Lee,` }, { id: `C`, text: `researcher Mark A. Lee` }, { id: `D`, text: `researcher, Mark A. Lee` }],
      answer: `C` },

    { id: `duc-rw-m1-20`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `easy`, type: `mcq`,
      passage: `Most conifers (plants that grow cones, such as pines, firs, and spruces) are evergreen, meaning that they keep live foliage year-round. The tamarack tree (<em>Larix laricina</em>), however, is a deciduous conifer, meaning that it regularly _____ all its needles.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `shed` }, { id: `B`, text: `have shed` }, { id: `C`, text: `sheds` }, { id: `D`, text: `shedding` }],
      answer: `C` },

    { id: `duc-rw-m1-21`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `hard`, type: `mcq`,
      passage: `Among the many ancient Egyptian units of measurement, the units <em>sa</em> and <em>shesep</em> were used to measure area and _____ neither unit is commonly used today.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `length; respectively,` }, { id: `B`, text: `length respectively` }, { id: `C`, text: `length, respectively;` }, { id: `D`, text: `length, respectively,` }],
      answer: `C` },

    { id: `duc-rw-m1-22`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `Textile artist Amber Joy Greenidge-Sabral wanted to avoid using harsh synthetic dyes that could be damaging to the environment. _____ she began experimenting with more environmentally friendly natural dye methods, using organic materials like Texas paintbrush and madder root for their natural brown and red colors.`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `With this in mind,` }, { id: `B`, text: `To sum up,` }, { id: `C`, text: `Nevertheless,` }, { id: `D`, text: `In actuality,` }],
      answer: `A` },

    { id: `duc-rw-m1-23`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `While researching a topic, a student has taken the following notes:<br><ul><li>In a 2021 study, researchers showed participants an unaltered image of a popular character or logo alongside two slightly altered versions.</li><li>Fred Flintstone is a cartoon man in a spotted tunic.</li><li>In the first alteration, the tunic had a striped pattern.</li><li>In the second alteration, the tunic had no pattern.</li><li>Participants were asked to identify the correct version.</li><li>86.9% of participants selected the unaltered image, and 13.1% selected an altered version.</li></ul>`,
      prompt: `The student wants to emphasize how many participants selected an altered version of Fred Flintstone. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `When participants were asked to identify the correct version of Fred Flintstone, 86.9% selected the unaltered image.` }, { id: `B`, text: `A 2021 study showed participants an unaltered image of Fred Flintstone, who is a cartoon man in a spotted tunic, alongside two altered versions.` }, { id: `C`, text: `Participants were asked to identify the correct version of Fred Flintstone, who is a cartoon man in a spotted tunic.` }, { id: `D`, text: `When shown three versions of Fred Flintstone and asked to select the correct one, 13.1% of participants chose an altered version.` }],
      answer: `D` },

    { id: `duc-rw-m1-24`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `While researching a topic, a student has taken the following notes:<br><ul><li>The human tongue contains taste receptors for a rich, savory flavor called umami.</li><li>Umami is triggered by the compounds in a variety of foods, including tuna and garlic.</li><li>Participants in a study tasted a sample of North Pacific konbu, a type of brown seaweed.</li><li>They rated its umami intensity as moderate.</li><li>The participants tasted a sample of arame, another type of brown seaweed.</li><li>They rated its umami intensity as high.</li></ul>`,
      prompt: `The student wants to emphasize a difference between the two seaweeds. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `Although North Pacific konbu and arame are types of brown seaweed, the latter&rsquo;s umami flavor is more intense.` }, { id: `B`, text: `Some types of brown seaweed, like North Pacific konbu and arame, trigger umami flavor in human taste buds.` }, { id: `C`, text: `While North Pacific konbu and arame contain umami flavor, umami can also be found in tuna and garlic.` }, { id: `D`, text: `North Pacific konbu is a type of brown seaweed, but so is arame.` }],
      answer: `A` },

    { id: `duc-rw-m1-25`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `While researching a topic, a student has taken the following notes:<br><ul><li><em>Hadramphus tuberculatus</em> is an insect species.</li><li>It was believed to be extinct until a living specimen was identified in New Zealand in 2004.</li><li><em>Catagonus wagneri</em> is a mammal species.</li><li>It was believed to be extinct until a living specimen was identified in Argentina in 1974.</li><li>They are considered Lazarus species.</li><li>&ldquo;Lazarus species&rdquo; is a term for living species of organisms that were once believed to be extinct.</li></ul>`,
      prompt: `The student wants to specify where <em>Hadramphus tuberculatus</em> was identified. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `In 1974, a living specimen of <em>Catagonus wagneri</em> was found in Argentina.` }, { id: `B`, text: `A living specimen of <em>Hadramphus tuberculatus</em>, once believed to be extinct, was identified in 2004.` }, { id: `C`, text: `Previously believed to be extinct, a living specimen of <em>Hadramphus tuberculatus</em> was identified in New Zealand.` }, { id: `D`, text: `Examples of Lazarus species can be found in <em>Hadramphus tuberculatus</em> as well as <em>Catagonus wagneri</em>.` }],
      answer: `C` },

    { id: `duc-rw-m1-26`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `While researching a topic, a student has taken the following notes:<br><ul><li>Herpetology is primarily the study of amphibians and reptiles.</li><li>Mary Cynthia Dickerson was an American herpetologist born in 1866.</li><li>She is known for her research on frogs.</li><li>Biochemistry is primarily the study of the chemical makeup and activity of organisms.</li><li>Muriel Wheldale Onslow was a British biochemist born in 1880.</li><li>She is known for her research on the basis of petal color in dragon flowers.</li></ul>`,
      prompt: `Which choice most effectively uses information from the given sentences to emphasize a similarity between Dickerson and Onslow?`,
      options: [{ id: `A`, text: `Mary Cynthia Dickerson conducted research on frogs; Muriel Wheldale Onslow, by contrast, is known for her research on the basis of petal color in dragon flowers.` }, { id: `B`, text: `Herpetology and biochemistry are just two examples of the myriad fields in which scientists can specialize.` }, { id: `C`, text: `Like herpetologist Mary Cynthia Dickerson, biochemist Muriel Wheldale Onslow dedicated her scientific career to the study of living organisms.` }, { id: `D`, text: `The herpetologist Mary Cynthia Dickerson was born in 1866, but biochemist Muriel Wheldale Onslow was born later, in 1880.` }],
      answer: `C` },

    { id: `duc-rw-m1-27`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `While researching a topic, a student has taken the following notes:<br><ul><li>Generally, an object will heat up when twisted.</li><li>The twisting of an object is known as torsion.</li><li>A 2019 study led by researchers Zunfeng Liu and Ray Baughman tested the torsional heating of various fibers.</li><li>When dimethicone fiber was twisted, its average surface temperature increased by 1.8&deg;C.</li><li>When natural rubber fiber was twisted, its average surface temperature increased by 15.3&deg;C.</li></ul>`,
      prompt: `Which choice most effectively uses information from the given sentences to explain the concept of torsional heating?`,
      options: [{ id: `A`, text: `Researchers determined that when both fibers were twisted, the surface temperature of natural rubber increased more than that of dimethicone.` }, { id: `B`, text: `Torsional heating is the process by which an object increases in temperature when it is twisted.` }, { id: `C`, text: `An object&rsquo;s average surface temperature will generally change due to torsion.` }, { id: `D`, text: `In 2019, researchers studied the effect of torsional heating on various fibers, like dimethicone and natural rubber.` }],
      answer: `B` },
  ];

  const RW_M2 = [
    { id: `duc-rw-m2-1`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `Nancy Bird-Walton, who was an aviation pioneer, undoubtedly accomplished much, but to gain a lasting place in our historical memory, there is little that can _____ being the first to do something. For example, people will always remember that Krystyna Chojnowska-Liskiewicz was the first woman to sail solo around the world.`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `fluctuate with` }, { id: `B`, text: `constrain within` }, { id: `C`, text: `prevail over` }, { id: `D`, text: `overreach by` }],
      answer: `C` },

    { id: `duc-rw-m2-2`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `Despite stated claims of global relevance, much major research on income inequality performed in the 2010s suffered from a myopic focus on a few countries in North America and Western Europe, partly due to limited data availability. Researchers would later _____ this shortcoming after gaining new access to banking records located in nations in Africa, such as Tunisia, and Eastern Europe, such as Poland.`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `sanction` }, { id: `B`, text: `postulate` }, { id: `C`, text: `ameliorate` }, { id: `D`, text: `rationalize` }],
      answer: `C` },

    { id: `duc-rw-m2-3`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `hard`, type: `mcq`,
      passage: `In the 2010s, the price of vintage Barbie dolls rose dramatically, which had the counterintuitive effect of _____ demand: buyers who hadn&rsquo;t previously wanted to purchase old dolls thronged the market, believing prices would continue to rise and the dolls could be resold later at a profit.`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `satisfying` }, { id: `B`, text: `exploiting` }, { id: `C`, text: `capitalizing` }, { id: `D`, text: `eliciting` }],
      answer: `D` },

    { id: `duc-rw-m2-4`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `hard`, type: `mcq`,
      passage: `Philosopher Ingrid Robeyns argues for the principle of limitarianism&mdash;that there should be a limit on the wealth a person possesses. Critics of limitarianism respond that it is _____ since it would require worldwide cooperation between governments in economic policy, a goal that is likely unachievable.`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `perfunctory` }, { id: `B`, text: `utopian` }, { id: `C`, text: `punitive` }, { id: `D`, text: `viable` }],
      answer: `B` },

    { id: `duc-rw-m2-5`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `hard`, type: `mcq`,
      passage: `The fact that publications by George Washington University economist Graciela Laura Kaminsky, who studies international finance, are so frequently cited in other scholars&rsquo; work _____ the usefulness of her research&mdash;other economists clearly find her studies valuable for their own scholarship.`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `belies` }, { id: `B`, text: `forestalls` }, { id: `C`, text: `underscores` }, { id: `D`, text: `overshadows` }],
      answer: `C` },

    { id: `duc-rw-m2-6`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `hard`, type: `mcq`,
      passage: `Shedding light on the thermal biology of fungi, research by Radam&eacute;s Cordero et al. indicates that certain mushrooms (including <em>Amanita muscaria</em> and species from the genus <em>Thelephora</em>) can achieve a hypothermic state through evaporative cooling. Effects of this thermoregulation were not limited to the fungi&rsquo;s fruiting bodies and root-like hyphae: <u>temperature reductions were observed in the air immediately surrounding the mushrooms.</u> Though slight, the reductions inspired an air-cooling device; using approximately 400 grams of mushrooms, the team&rsquo;s prototype lowered the air temperature in a controlled environment by 10&deg;C in forty minutes.`,
      prompt: `Which choice best describes the function of the underlined portion in the text as a whole?`,
      options: [{ id: `A`, text: `It provides empirical evidence to bolster the claim made earlier in the text that certain fungal species maintain a hypothermic state.` }, { id: `B`, text: `It identifies an unexpected observation that motivated the study of evaporative cooling in fungi that is discussed earlier in the text.` }, { id: `C`, text: `It establishes a finding central to the text&rsquo;s discussion of a practical application resulting from the team&rsquo;s study of fungal thermal biology.` }, { id: `D`, text: `It presents a tangential finding about thermoregulation in certain fungal species that the experiment described later in the text was designed to explain.` }],
      answer: `C` },

    { id: `duc-rw-m2-7`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `hard`, type: `mcq`,
      passage: `In Algeria, use of solid fuel (e.g., coal, wood) as a share of total household fuel use fell by approximately three-fourths between 2000 and 2019; such shifts are often explained by appeal to the energy ladder, a model holding that fuel choice is mediated mainly by household income (specifically, high-technology fuels displace solid fuels as incomes rise). Rasmus Heltberg&rsquo;s study of fuel use in Ghana shows this model to be reductive, however: household fuel use was heterogeneous, flexible, and influenced by several factors, including the stability of the local electrical grid.`,
      prompt: `Which choice best describes the function of the information about Algeria in the text as a whole?`,
      options: [{ id: `A`, text: `It describes a trend that the text goes on to suggest has a similar cause as a seemingly unrelated trend observed in Ghana.` }, { id: `B`, text: `It illustrates the kind of phenomenon that the text goes on to suggest is frequently but inadequately accounted for by the energy ladder.` }, { id: `C`, text: `It provides an example of a type of change that the text goes on to suggest is poorly suited for evaluating whether the energy ladder is a viable model.` }, { id: `D`, text: `It introduces a finding that the text goes on to suggest can be explained in two different ways that are equally compelling.` }],
      answer: `B` },

    { id: `duc-rw-m2-8`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `medium`, type: `mcq`,
      passage: `In a study by Mika R. Moran, Daniel A. Rodriguez, and colleagues, residents of Mexico City, Mexico, and Fortaleza, Brazil, were surveyed about parks in their cities. Of the 562 respondents from Mexico City, 77.6% indicated that they use the city&rsquo;s parks, and of the 938 respondents from Fortaleza, 35.7% indicated using city parks. Given that the percentage of Mexico City respondents who reported living within a 10-minute walk of a park was much lower than that reported by Fortaleza respondents, greater proximity alone can&rsquo;t explain the difference in park use.`,
      prompt: `The text makes which point about the difference between the proportions of Mexico City residents and Fortaleza residents using parks?`,
      options: [{ id: `A`, text: `It could be due to inaccuracies in the survey results.` }, { id: `B`, text: `It was much larger than the researchers conducting the study expected.` }, { id: `C`, text: `It is caused by something other than the parks&rsquo; proximity to city residents.` }, { id: `D`, text: `It was calculated using sources that predate the survey.` }],
      answer: `C` },

    { id: `duc-rw-m2-9`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `The bird species <em>Microbates collaris</em> (the collared gnatwren) shares some territory in French Guiana with <em>Thamnomanes caesius</em> (the cinereous antshrike), which emits a loud alarm call when it detects predators. Biologist Ari Mart&iacute;nez and colleagues recorded <em>T. caesius</em> alarm calls and played them in the vicinity of wild <em>M. collaris</em>. Finding that the birds often froze in place or scattered into vegetation upon hearing the calls, they concluded that <em>M. collaris</em> associates <em>T. caesius</em> alarm calls with danger.`,
      prompt: `Which finding, if true, would most directly support Mart&iacute;nez and colleagues&rsquo; conclusion?`,
      options: [{ id: `A`, text: `In some instances, <em>M. collaris</em> froze in place or scattered into vegetation when Mart&iacute;nez and colleagues approached but before they began playing sounds.` }, { id: `B`, text: `Other bird species than <em>M. collaris</em> also showed a tendency to freeze in place or scatter into vegetation when Mart&iacute;nez and colleagues played <em>T. caesius</em> alarm calls.` }, { id: `C`, text: `Mart&iacute;nez and colleagues played alarm calls from different <em>T. caesius</em> individuals and observed no significant variation in the responses of <em>M. collaris</em>.` }, { id: `D`, text: `When Mart&iacute;nez and colleagues played control sounds of random noise in the vicinity of <em>M. collaris</em>, the birds displayed no reaction.` }],
      answer: `D` },

    { id: `duc-rw-m2-10`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `hard`, type: `mcq`,
      passage: `Long thought to be sessile (immobile), adult <em>Chelonibia testudinaria</em>, barnacles that adhere to sea turtle shells, have been observed to shift slightly in position over time&mdash;a phenomenon that has been attributed to the barnacles&rsquo; passive displacement by water currents. _____ a research team found that adult <em>C. testudinaria</em> moved toward the heads of their sea turtle hosts and thus against the prevailing water flow, behavior consistent with self-initiated locomotion.`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `Confirming this hypothesis,` }, { id: `B`, text: `Undermining this explanation,` }, { id: `C`, text: `Drawing a similar conclusion,` }, { id: `D`, text: `Contrary to this phenomenon,` }],
      answer: `B` },

    { id: `duc-rw-m2-11`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `<div style="text-align:center;font-weight:600;font-size:12px;margin:2px 0">Correlation between Model-Predicted and Participant-Reported Enjoyment Ratings, by Painting Style</div><svg viewBox="0 0 340 250" role="img" aria-label="bar chart" style="max-width:360px;width:100%;display:block;margin:6px auto"><line x1="40.0" y1="204.0" x2="310.0" y2="204.0" stroke="currentColor" stroke-width="1.3"/><line x1="40.0" y1="204.0" x2="310.0" y2="204.0" stroke="currentColor" stroke-width="0.5" opacity="0.16"/><text x="36.0" y="207.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">0</text><line x1="40.0" y1="169.2" x2="310.0" y2="169.2" stroke="currentColor" stroke-width="0.5" opacity="0.16"/><text x="36.0" y="172.2" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">0.1</text><line x1="40.0" y1="134.4" x2="310.0" y2="134.4" stroke="currentColor" stroke-width="0.5" opacity="0.16"/><text x="36.0" y="137.4" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">0.2</text><line x1="40.0" y1="99.6" x2="310.0" y2="99.6" stroke="currentColor" stroke-width="0.5" opacity="0.16"/><text x="36.0" y="102.6" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">0.3</text><line x1="40.0" y1="64.8" x2="310.0" y2="64.8" stroke="currentColor" stroke-width="0.5" opacity="0.16"/><text x="36.0" y="67.8" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">0.4</text><line x1="40.0" y1="30.0" x2="310.0" y2="30.0" stroke="currentColor" stroke-width="0.5" opacity="0.16"/><text x="36.0" y="33.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">0.5</text><rect x="53.5" y="124.0" width="33.1" height="80.0" fill="#4C8BF5" opacity="0.9"/><rect x="89.5" y="54.4" width="33.1" height="149.6" fill="#E8833A" opacity="0.9"/><rect x="125.5" y="103.1" width="33.1" height="100.9" fill="#3FA45B" opacity="0.9"/><text x="107.5" y="220.0" font-size="9.5" fill="currentColor" text-anchor="middle">Abstract</text><rect x="188.5" y="71.8" width="33.1" height="132.2" fill="#4C8BF5" opacity="0.9"/><rect x="224.5" y="110.0" width="33.1" height="94.0" fill="#E8833A" opacity="0.9"/><rect x="260.5" y="110.0" width="33.1" height="94.0" fill="#3FA45B" opacity="0.9"/><text x="242.5" y="220.0" font-size="9.5" fill="currentColor" text-anchor="middle">Cubist</text><rect x="40.0" y="228.0" width="9" height="9" fill="#4C8BF5"/><text x="52.0" y="236.0" font-size="9" fill="currentColor">P1</text><rect x="63.8" y="228.0" width="9" height="9" fill="#E8833A"/><text x="75.8" y="236.0" font-size="9" fill="currentColor">P6</text><rect x="87.6" y="228.0" width="9" height="9" fill="#3FA45B"/><text x="99.6" y="236.0" font-size="9" fill="currentColor">P7</text></svg>Neuroscientist Kiyohito Iigaya and colleagues developed a computational model to predict how much a person will enjoy a particular work of art on a scale from 1 (not at all) to 4 (very much). They then recruited participants to use the same scale to rate several sets of paintings in various styles and calculated the correlation between the ratings predicted by the model and those reported by the participants. Assuming participant P6 gave equal ratings to the abstract and cubist paintings, the data in the graph indicate the model predicted that _____`,
      prompt: `Which choice most effectively uses data from the graph to complete the example?`,
      options: [{ id: `A`, text: `P6 would derive more aesthetic pleasure from abstract paintings than from cubist paintings.` }, { id: `B`, text: `P6&rsquo;s rating for abstract and cubist paintings would equal one another.` }, { id: `C`, text: `P6&rsquo;s ratings for abstract and cubist paintings would differ from one another.` }, { id: `D`, text: `P6 would derive less aesthetic pleasure from abstract paintings than from cubist paintings.` }],
      answer: `C` },

    { id: `duc-rw-m2-12`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `medium`, type: `mcq`,
      passage: `Many studies have found a positive association between levels of dissolved organic carbon and mercury in bodies of fresh water in North America. But Enelton Fagnani, Jos&eacute; Roberto Guimar&atilde;, and Pedro S&eacute;rgio Fadini did not find this correlation in a study conducted in Brazil, leading some scientists to hypothesize that the association is particular to North America. However, several other studies conducted outside North America, such as one by Heidi Pyhtil&auml; and colleagues in Finland, showed similar results to the North American studies, while few have produced results similar to those of Fagnani, Guimar&atilde;, and Fadini&rsquo;s study, suggesting that _____`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `the hypothesis that the positive association is particular to North America is correct.` }, { id: `B`, text: `there were circumstances unique to Pyhtil&auml; and colleagues&rsquo; study that impeded accurate measurements of mercury levels.` }, { id: `C`, text: `dissolved organic carbon and mercury levels do typically rise and fall together in fresh water.` }, { id: `D`, text: `levels of dissolved organic carbon and mercury in bodies of fresh water are both much higher in Brazil than elsewhere.` }],
      answer: `C` },

    { id: `duc-rw-m2-13`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `Chelsea Wood et al. tracked temperature-driven changes in the abundance of <em>Gonocerca</em> sp. (a complex life cycle parasite, or CLP, that requires three host species throughout its life cycle), <em>Gyrodactylus</em> sp. (a directly transmitted parasite, which requires only one host species), and 83 other parasite taxa found on eight fish species. CLPs are transmitted when an infected host is ingested by an individual of another species, typically shielding CLPs from the external environment, whereas directly transmitted parasites are exposed to external conditions during transmission. However, Wood et al. found that three-host CLP abundance decreased as sea temperatures rose, whereas directly transmitted parasite abundance was largely stable, suggesting that _____`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `CLPs primarily transmitted by ingestion were less dependent on host species adversely affected by warming temperatures than were CLPs that use other transmission strategies.` }, { id: `B`, text: `any advantages that the transmission strategy used by three-host CLPs may have conferred did not completely offset the negative effects of other temperature-driven factors on CLP abundance.` }, { id: `C`, text: `directly transmitted parasites identified in the study were more likely to use transmission strategies that shield them from warming temperatures than were three-host CLPs.` }, { id: `D`, text: `as the number of host species involved in a parasite&rsquo;s transmission increases, the parasite is better protected against rising temperatures.` }],
      answer: `B` },

    { id: `duc-rw-m2-14`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `Prolonged exposure to anthropogenic noise (sounds from human sources like traffic or mining) can affect animals, as Irene K. Voellmy and colleagues found in a 2014 study of three-spined sticklebacks. Researchers conducted a meta-analysis of studies of how such noise affects animals and found that, for every study, relevant traits or behaviors of the animals were observably different between the exposed group and the otherwise similar but unexposed group. Although, on average, studies of fish showed larger differences than studies of birds did, for every class of animals examined, there were individual studies showing differences well above the average for fish. Therefore, the results of the meta-analysis suggest that _____`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `the difference found in the study conducted by Irene K. Voellmy and colleagues was likely larger than the average difference for studies of three-spined sticklebacks included in the meta-analysis.` }, { id: `B`, text: `the studies in the meta-analysis that examined fish were more likely than those that examined birds to specify whether the observed effects were detrimental.` }, { id: `C`, text: `some studies of birds found larger effects of exposure to anthropogenic noise than some studies of fish did.` }, { id: `D`, text: `the differences that studies attribute to exposure to anthropogenic noise are likely to be more pronounced for birds than they are for fish.` }],
      answer: `C` },

    { id: `duc-rw-m2-15`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `easy`, type: `mcq`,
      passage: `Although the epic poem <em>The Divine Comedy</em> dates back to the 14th century, _____ compelling narrative still captivates readers today.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `their` }, { id: `B`, text: `they&rsquo;re` }, { id: `C`, text: `it&rsquo;s` }, { id: `D`, text: `its` }],
      answer: `D` },

    { id: `duc-rw-m2-16`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `hard`, type: `mcq`,
      passage: `Most sand is beige because of deposits of gray- and tan-hued minerals, such as quartz and feldspar. The sand at Tangsi Beach in Indonesia is a more unusual _____ deposits of crushed coral and other organic matter lend the sand a unique pink hue.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `shade, though;` }, { id: `B`, text: `shade, though,` }, { id: `C`, text: `shade, though` }, { id: `D`, text: `shade; though` }],
      answer: `A` },

    { id: `duc-rw-m2-17`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `hard`, type: `mcq`,
      passage: `The poem &ldquo;The Rites for Cousin Vit,&rdquo; which was published in 1949, contains three signature elements of Gwendolyn Brooks&rsquo;s poetic _____ compressed lines infused with bursts of vivid imagery; syncopated rhythms, largely inspired by the blues tradition; and a keen attention to everyday life in Brooks&rsquo;s South Side Chicago neighborhood.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `style, terse,` }, { id: `B`, text: `style. Terse,` }, { id: `C`, text: `style; terse,` }, { id: `D`, text: `style: terse,` }],
      answer: `D` },

    { id: `duc-rw-m2-18`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `Neoclassical economic models assume that people consistently make rational economic decisions, but Katy Milkman of the University of Pennsylvania makes no such assumption; behavioral economists such as Milkman, whose research focuses on health policy, _____ that economic decision-making can in fact be highly irrational.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `contend` }, { id: `B`, text: `has contended` }, { id: `C`, text: `contends` }, { id: `D`, text: `is contending` }],
      answer: `A` },

    { id: `duc-rw-m2-19`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `While the greater adjutant (<em>Leptoptilos dubius</em>) can be found in places like the Central Tanintharyi Coast in Myanmar and the Chhep Wildlife Sanctuary in Cambodia, more than 80 percent of this endangered stork species is found in Assam, India. There, wildlife _____ is on the front lines of conservation efforts to bring adjutants back from near extinction.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `biologist, Dr. Purnima Devi Barman,` }, { id: `B`, text: `biologist: Dr. Purnima Devi Barman` }, { id: `C`, text: `biologist Dr. Purnima Devi Barman` }, { id: `D`, text: `biologist, Dr. Purnima Devi Barman` }],
      answer: `C` },

    { id: `duc-rw-m2-20`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `The Roman historian Sallust&rsquo;s <em>Bellum catalinae</em>, a chronicle of a coup attempt, is an extant work: it can still be read. By contrast, lost works like Sallust&rsquo;s history of the Roman Republic, <em>Histories</em>&mdash;no copy of which exists&mdash;_____ known to antiquarians only through references in extant works.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `have become` }, { id: `B`, text: `becomes` }, { id: `C`, text: `has become` }, { id: `D`, text: `is becoming` }],
      answer: `A` },

    { id: `duc-rw-m2-21`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `Beatriz Romero is a space scientist who works on the James Webb Space Telescope, or JWST. Thanks in part to Romero&rsquo;s contributions, the telescope is now positioned near the Sun-Earth L<sub>2</sub> Lagrange point, almost one million miles beyond Earth&rsquo;s orbit. _____ the JWST&rsquo;s predecessor, the Hubble Telescope, is only about 340 miles above Earth&rsquo;s surface.`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `By contrast,` }, { id: `B`, text: `Therefore,` }, { id: `C`, text: `Secondly,` }, { id: `D`, text: `Similarly,` }],
      answer: `A` },

    { id: `duc-rw-m2-22`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `Edge modeling and kitbashing, methods used by digital artists to create three-dimensional elements for video games, typically require software to process geometric shapes numbering in the thousands. _____ these approaches are more economical than surface model methods, which require more powerful and expensive processors to manage polygons numbering in the millions.`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `Instead,` }, { id: `B`, text: `For example,` }, { id: `C`, text: `Specifically,` }, { id: `D`, text: `As such,` }],
      answer: `D` },

    { id: `duc-rw-m2-23`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `Beginning in her days at Vassar College in 1905, lawyer and activist Inez Milholland was an advocate for various social causes: worker&rsquo;s rights, racial justice, prison reform, and more. _____ her advocacy work would catapult her to national prominence, most notably when, astride a white horse and garbed in a flowing cape, she led the 1913 Women&rsquo;s Suffrage Procession in Washington, DC, thereby becoming the face of the US suffrage movement.`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `As such,` }, { id: `B`, text: `Ultimately,` }, { id: `C`, text: `For example,` }, { id: `D`, text: `Similarly,` }],
      answer: `B` },

    { id: `duc-rw-m2-24`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `The total solar eclipse of June 16, 345 CE, was the ninth-longest total eclipse before the Dark Ages&mdash;7 minutes, 17 seconds long. Another memorable solar eclipse occurred on October 2, 480 BCE, but unlike the 345 CE eclipse, the 480 BCE eclipse was annular. _____ the Moon didn&rsquo;t cover the Sun completely, instead creating an annulus, or &ldquo;ring of fire.&rdquo;`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `That is,` }, { id: `B`, text: `Nonetheless,` }, { id: `C`, text: `Meanwhile,` }, { id: `D`, text: `For example,` }],
      answer: `A` },

    { id: `duc-rw-m2-25`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `While researching a topic, a student has taken the following notes:<br><ul><li>The Mason Neck National Wildlife Refuge (NWR) is a protected natural area in Virginia.</li><li>It encompasses 2,276 acres.</li><li>It was established to safeguard the habitat of the bald eagle, an endangered species.</li><li>The Mason Neck NWR is managed by the US Fish &amp; Wildlife Service.</li><li>The US Fish &amp; Wildlife Service limits human activities in the area.</li></ul>`,
      prompt: `The student wants to indicate the size of the Mason Neck NWR. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `The Mason Neck NWR is a protected natural area managed by the US Fish &amp; Wildlife Service, which limits human activities there.` }, { id: `B`, text: `A protected natural area, the Mason Neck NWR encompasses 2,276 acres of land in Virginia.` }, { id: `C`, text: `The Mason Neck NWR is a natural area in Virginia, home to the bald eagle.` }, { id: `D`, text: `Home to the bald eagle, Virginia&rsquo;s Mason Neck NWR is managed by the US Fish &amp; Wildlife Service.` }],
      answer: `B` },

    { id: `duc-rw-m2-26`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `While researching a topic, a student has taken the following notes:<br><ul><li>Spruce Tree House is an Ancestral Puebloan dwelling site located in southwestern Colorado.</li><li>It was built under a rock overhang and inhabited from approximately 1200&ndash;1280 CE.</li><li>The overhanging rock ledges offered protection from heavy rain and snow.</li><li>Ansel Hall is an Ancestral Puebloan dwelling site located in southwestern Colorado.</li><li>It was built on relatively flat terrain and inhabited from approximately 1050&ndash;1160 CE.</li><li>This level surface allowed for the construction of large terraced buildings.</li></ul>`,
      prompt: `The student wants to explain an advantage of the Spruce Tree House dwelling site. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `Since it was built under a rock overhang, Spruce Tree House was naturally protected from heavy rain and snow.` }, { id: `B`, text: `The location of Spruce Tree House, an Ancestral Puebloan dwelling site in southwestern Colorado, provided an advantage to its inhabitants.` }, { id: `C`, text: `Located in southwestern Colorado, Spruce Tree House is an Ancestral Puebloan dwelling site that was inhabited from approximately 1200&ndash;1280 CE.` }, { id: `D`, text: `The relatively flat terrain on which Spruce Tree House was built allowed for the construction of large terraced buildings.` }],
      answer: `A` },

    { id: `duc-rw-m2-27`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `While researching a topic, a student has taken the following notes:<br><ul><li>Kepler&rsquo;s first law of planetary motion states that the orbit of a planet around the Sun is an ellipse.</li><li>The law also states that, in an elliptical orbit, the object being orbited is one of the ellipse&rsquo;s foci.</li><li>Kepler&rsquo;s laws of planetary motion also apply to natural satellites (e.g., moons).</li><li>Tethys is a moon of Saturn that orbits the planet in 1.89 Earth days on average.</li><li>Tethys&rsquo;s orbit is elliptical.</li></ul>`,
      prompt: `The student wants to provide an explanation and example of Kepler&rsquo;s first law of planetary motion. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `Saturn&rsquo;s moon Tethys completes an orbit in 1.89 Earth days on average, a clear example of Kepler&rsquo;s first law of planetary motion, which describes the elliptical orbit of planets.` }, { id: `B`, text: `Tethys&rsquo;s orbit of Saturn is elliptical, demonstrating Kepler&rsquo;s first law of planetary motion, which describes the elliptical orbits of planets but applies to moons as well.` }, { id: `C`, text: `Kepler&rsquo;s first law of planetary motion, which describes the orbits of Saturn and other planets in the solar system, states that the object being orbited is one of the ellipse&rsquo;s foci.` }, { id: `D`, text: `Kepler&rsquo;s first law of planetary motion states that the orbit of a planet around the Sun is an ellipse; for example, planetary orbits are elliptical rather than perfectly circular.` }],
      answer: `B` },
  ];

  const MATH_M1 = [
    { id: `duc-math-m1-1`, domain: `Problem-Solving and Data Analysis`, skill: `Percentages`, difficulty: `easy`, type: `mcq`,
      prompt: `Julia purchased 800 feet of fencing. She used 60% of this fencing to surround a vegetable garden. How many feet of fencing did Julia use to surround the vegetable garden?`,
      options: [{ id: `A`, text: `12` }, { id: `B`, text: `30` }, { id: `C`, text: `480` }, { id: `D`, text: `740` }],
      answer: `C` },

    { id: `duc-math-m1-2`, domain: `Advanced Math`, skill: `Equivalent expressions`, difficulty: `easy`, type: `mcq`,
      prompt: `Which expression is equivalent to 13(x<sup>2</sup> - 7)?`,
      options: [{ id: `A`, text: `13x<sup>2</sup> - 91` }, { id: `B`, text: `13x<sup>2</sup> - 20` }, { id: `C`, text: `13x<sup>2</sup> - 7` }, { id: `D`, text: `13x<sup>2</sup> + 6` }],
      answer: `A` },

    { id: `duc-math-m1-3`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `easy`, type: `mcq`,
      prompt: `If 6<em>x</em> + 36 = 18, what is the value of <em>x</em> + 6?`,
      options: [{ id: `A`, text: `3` }, { id: `B`, text: `6` }, { id: `C`, text: `36` }, { id: `D`, text: `42` }],
      answer: `A` },

    { id: `duc-math-m1-4`, domain: `Algebra`, skill: `Linear inequalities in one or two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `An adult elephant drinks by pulling water up into its trunk and then emptying the water into its mouth. If an adult elephant pulls between 4 and 9 liters of water up into its trunk at a time, which of the following could be the number of times the elephant pulls water up into its trunk to drink 140 liters of water?`,
      options: [{ id: `A`, text: `14` }, { id: `B`, text: `15` }, { id: `C`, text: `34` }, { id: `D`, text: `37` }],
      answer: `C` },

    { id: `duc-math-m1-5`, domain: `Algebra`, skill: `Linear inequalities in one or two variables`, difficulty: `easy`, type: `mcq`,
      prompt: `For a certain classification, the positive mass <em>m</em>, in grams, of an object must be less than 620 grams. Which inequality represents this situation?`,
      options: [{ id: `A`, text: `<em>m</em> &gt; 620` }, { id: `B`, text: `<em>m</em> &lt; 0` }, { id: `C`, text: `&minus;620 &lt; <em>m</em> &lt; 0` }, { id: `D`, text: `0 &lt; <em>m</em> &lt; 620` }],
      answer: `D` },

    { id: `duc-math-m1-6`, domain: `Geometry and Trigonometry`, skill: `Lines, angles, and triangles`, difficulty: `easy`, type: `mcq`,
      prompt: `The perimeter of an obtuse triangle is 32 meters. The lengths of two sides of this triangle are 8 meters and 9 meters. What is the length, in meters, of the third side of this triangle?`,
      options: [{ id: `A`, text: `24` }, { id: `B`, text: `23` }, { id: `C`, text: `17` }, { id: `D`, text: `15` }],
      answer: `D` },

    { id: `duc-math-m1-7`, domain: `Problem-Solving and Data Analysis`, skill: `One-variable data: distributions and measures of center and spread`, difficulty: `easy`, type: `mcq`,
      prompt: `<table style="border-collapse:collapse;margin:6px auto"><tr><th style="border:1px solid var(--border);padding:3px 12px">Task</th><th style="border:1px solid var(--border);padding:3px 12px">Time (minutes)</th></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">A</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">10</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">B</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">6</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">C</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">12</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">D</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">11</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">E</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">11</td></tr></table>The table shows the amount of time it took a participant in a study to complete each of 5 tasks. What was the mean time, in minutes, for this participant to complete a task?`,
      options: [{ id: `A`, text: `6` }, { id: `B`, text: `10` }, { id: `C`, text: `11` }, { id: `D`, text: `12` }],
      answer: `B` },

    { id: `duc-math-m1-8`, domain: `Problem-Solving and Data Analysis`, skill: `Inference from sample statistics and margin of error`, difficulty: `medium`, type: `mcq`,
      prompt: `A group of 80 employees selected at random from all the employees at a company were surveyed about the number of books they read last year. From the data collected, it was estimated that the mean number of books employees at the company read last year is 7, with an associated margin of error of 1.6. Which of the following is the most appropriate conclusion?`,
      options: [{ id: `A`, text: `It is plausible that the actual mean number of books employees at the company read last year is less than 5.4.` }, { id: `B`, text: `It is plausible that the actual mean number of books employees at the company read last year is between 5.4 and 8.6.` }, { id: `C`, text: `It is plausible that every employee at the company read between 7 and 11.8 books last year.` }, { id: `D`, text: `It is plausible that the actual mean number of books employees at the company read last year is greater than 8.6.` }],
      answer: `B` },

    { id: `duc-math-m1-9`, domain: `Advanced Math`, skill: `Equivalent expressions`, difficulty: `medium`, type: `mcq`,
      prompt: `Which expression is equivalent to (6<em>x</em><sup>3</sup> &minus; 6<em>x</em> + 4) &minus; (7<em>x</em><sup>6</sup> + 7<em>x</em> &minus; 2)?`,
      options: [{ id: `A`, text: `&minus;7<em>x</em><sup>6</sup> + 6<em>x</em><sup>3</sup> + <em>x</em> + 2` }, { id: `B`, text: `&minus;<em>x</em><sup>9</sup> &minus; 13<em>x</em> &minus; 6` }, { id: `C`, text: `&minus;7<em>x</em><sup>6</sup> + 6<em>x</em><sup>3</sup> &minus; 13<em>x</em> + 6` }, { id: `D`, text: `&minus;<em>x</em><sup>9</sup> &minus; <em>x</em> + 2` }],
      answer: `C` },

    { id: `duc-math-m1-10`, domain: `Algebra`, skill: `Linear functions`, difficulty: `easy`, type: `grid`,
      prompt: `The function <em>f</em>(<em>x</em>) = 180(<em>x</em> &minus; 2) gives the sum of the interior angles, in degrees, for a polygon with <em>x</em> sides. What is the sum of the interior angles, in degrees, for a polygon with 25 sides?`,
      answer: [`4140`] },

    { id: `duc-math-m1-11`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<table style="border-collapse:collapse;margin:6px auto"><tr><th style="border:1px solid var(--border);padding:3px 12px">x</th><th style="border:1px solid var(--border);padding:3px 12px">h(x)</th></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">0</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">22</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">1</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">23</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">2</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">25</td></tr></table>For the function <em>h</em>, the table gives three values of <em>x</em> and their corresponding values of <em>h</em>(<em>x</em>). Which equation could define <em>h</em>?`,
      options: [{ id: `A`, text: `<em>h</em>(<em>x</em>) = 2<sup><em>x</em></sup>` }, { id: `B`, text: `<em>h</em>(<em>x</em>) = 2<sup><em>x</em></sup> + 2` }, { id: `C`, text: `<em>h</em>(<em>x</em>) = 2<sup><em>x</em></sup> + 20` }, { id: `D`, text: `<em>h</em>(<em>x</em>) = 2<sup><em>x</em></sup> + 21` }],
      answer: `D` },

    { id: `duc-math-m1-12`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `grid`,
      prompt: `<em>f</em>(<em>x</em>) = 5(<em>x</em> &minus; 1)(<em>x</em> &minus; 6)(<em>x</em> &minus; 10)<br><br>If the given function <em>f</em> is graphed in the <em>xy</em>-plane, where <em>y</em> = <em>f</em>(<em>x</em>), what is the <em>x</em>-coordinate of an <em>x</em>-intercept of the graph?`,
      answer: [`1`, `6`, `10`] },

    { id: `duc-math-m1-13`, domain: `Algebra`, skill: `Systems of two linear equations in two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `<em>x</em> + 2<em>y</em> = 19<br>5<em>x</em> + <em>y</em> = 2<br><br>The solution to the given system of equations is (<em>x</em>, <em>y</em>). What is the value of 6<em>x</em> + 3<em>y</em>?`,
      options: [{ id: `A`, text: `6` }, { id: `B`, text: `17` }, { id: `C`, text: `21` }, { id: `D`, text: `38` }],
      answer: `C` },

    { id: `duc-math-m1-14`, domain: `Geometry and Trigonometry`, skill: `Lines, angles, and triangles`, difficulty: `medium`, type: `mcq`,
      prompt: `In triangle <em>DEF</em>, the measure of angle <em>D</em> is 43&deg; and the measure of angle <em>E</em> is 112&deg;. In triangle <em>RST</em>, the measure of angle <em>R</em> is 43&deg; and the measure of angle <em>S</em> is 112&deg;. Which of the following additional pieces of information is needed to determine whether triangle <em>DEF</em> is similar to triangle <em>RST</em>?`,
      options: [{ id: `A`, text: `The measure of angle <em>F</em>` }, { id: `B`, text: `The measure of angle <em>T</em>` }, { id: `C`, text: `The measure of angle <em>F</em> and the measure of angle <em>T</em>` }, { id: `D`, text: `No additional information is needed.` }],
      answer: `D` },

    { id: `duc-math-m1-15`, domain: `Advanced Math`, skill: `Systems of equations`, difficulty: `medium`, type: `mcq`,
      prompt: `<em>x</em><sup>2</sup> + <em>y</em> = 111<br>&minus;3<em>x</em> + <em>y</em> = 3<br><br>The solutions to the given system of equations are of the form (<em>x</em>, <em>y</em>). What is a possible value of <em>x</em>?`,
      options: [{ id: `A`, text: `&minus;12` }, { id: `B`, text: `&minus;9` }, { id: `C`, text: `&minus;3` }, { id: `D`, text: `111` }],
      answer: `A` },

    { id: `duc-math-m1-16`, domain: `Geometry and Trigonometry`, skill: `Circles`, difficulty: `medium`, type: `grid`,
      prompt: `In the <em>xy</em>-plane, the graph of the equation (<em>x</em> - 6)<sup>2</sup> + (<em>y</em> - 2)<sup>2</sup> = 36 is a circle. The point (12, <em>c</em>), where <em>c</em> is a constant, lies on this circle. What is the value of <em>c</em>?`,
      answer: [`2`] },

    { id: `duc-math-m1-17`, domain: `Advanced Math`, skill: `Nonlinear equations in one variable`, difficulty: `medium`, type: `mcq`,
      prompt: `(<em>x</em> &minus; 3)(<em>x</em> &minus; 8) / (<em>x</em> &minus; 2) = 0<br><br>What is the sum of the solutions to the given equation?`,
      options: [{ id: `A`, text: `2` }, { id: `B`, text: `8` }, { id: `C`, text: `11` }, { id: `D`, text: `13` }],
      answer: `C` },

    { id: `duc-math-m1-18`, domain: `Algebra`, skill: `Linear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<table style="border-collapse:collapse;margin:6px auto"><tr><th style="border:1px solid var(--border);padding:3px 12px">Area (square feet)</th><th style="border:1px solid var(--border);padding:3px 12px">Water (gallons)</th></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">560</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">1,008</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">840</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">1,512</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">1,120</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">2,016</td></tr></table>The roofs on the buildings of a public garden are designed to allow water to drain into the garden. The table shows the relationship between the area <em>x</em>, in square feet, of a roof and the amount of water <em>f</em>(<em>x</em>), in gallons, drained from the roof into the garden over a certain period of time. Which equation could define <em>f</em>?`,
      options: [{ id: `A`, text: `<em>f</em>(<em>x</em>) = 0.6<em>x</em>` }, { id: `B`, text: `<em>f</em>(<em>x</em>) = 1.8<em>x</em>` }, { id: `C`, text: `<em>f</em>(<em>x</em>) = 504.0<em>x</em>` }, { id: `D`, text: `<em>f</em>(<em>x</em>) = 1,008.0<em>x</em>` }],
      answer: `B` },

    { id: `duc-math-m1-19`, domain: `Geometry and Trigonometry`, skill: `Circles`, difficulty: `medium`, type: `mcq`,
      prompt: `A circle has center <em>O</em>, and points <em>A</em> and <em>B</em> lie on the circle. The measure of arc <em>AB</em> is 36&deg;, and the length of this arc is 3 inches. What is the circumference, in inches, of the circle?`,
      options: [{ id: `A`, text: `3` }, { id: `B`, text: `6` }, { id: `C`, text: `9` }, { id: `D`, text: `30` }],
      answer: `D` },

    { id: `duc-math-m1-20`, domain: `Problem-Solving and Data Analysis`, skill: `Percentages`, difficulty: `hard`, type: `mcq`,
      prompt: `While the mass of an object is the same everywhere, the weight of an object is not the same on different planets. An object has a weight of 220.00 pounds on Earth and a weight of 234.52 pounds on Saturn. The object&rsquo;s weight on Jupiter is 252.8% of its weight on Earth. If the object&rsquo;s weight on Saturn is <em>x</em>% of its weight on Jupiter, which of the following is closest to the value of <em>x</em>?`,
      options: [{ id: `A`, text: `42.17` }, { id: `B`, text: `69.76` }, { id: `C`, text: `269.48` }, { id: `D`, text: `556.16` }],
      answer: `A` },

    { id: `duc-math-m1-21`, domain: `Algebra`, skill: `Systems of two linear equations in two variables`, difficulty: `hard`, type: `grid`,
      prompt: `&minus;<em>x</em> &minus; <em>wy</em> = &minus;411<br>2<em>x</em> &minus; <em>wy</em> = 81<br><br>In the given system of equations, <em>w</em> is a constant. In the <em>xy</em>-plane, the graphs of these equations intersect at the point (<em>q</em>, 19), where <em>q</em> is a constant. What is the value of <em>w</em>?`,
      answer: [`13`] },

    { id: `duc-math-m1-22`, domain: `Algebra`, skill: `Systems of two linear equations in two variables`, difficulty: `hard`, type: `mcq`,
      prompt: `<div style='text-align:center;margin-bottom:6px'>5<em>x</em> + 8<em>y</em> = 9<br>15<em>x</em> + 24<em>y</em> = 27</div>For each real number <em>r</em>, which of the following points lies on the graph of each equation in the <em>xy</em>-plane for the given system?`,
      options: [{ id: `A`, text: `(<em>r</em>, -5<em>r</em>/8 + 9/8)` }, { id: `B`, text: `(-5<em>r</em>/8 + 9/8, <em>r</em>)` }, { id: `C`, text: `(-5<em>r</em>/8 + 9, 5<em>r</em>/8 + 27)` }, { id: `D`, text: `(<em>r</em>/3 + 9, -<em>r</em>/3 + 27)` }],
      answer: `A` },
  ];

  const MATH_M2 = [
    { id: `duc-math-m2-1`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `easy`, type: `mcq`,
      prompt: `The function <em>g</em> is defined by <em>g</em>(<em>x</em>) = -18 - 9<em>x</em>. For what value of <em>x</em> does <em>g</em>(<em>x</em>) = -216?`,
      options: [{ id: `A`, text: `-26` }, { id: `B`, text: `22` }, { id: `C`, text: `26` }, { id: `D`, text: `1,926` }],
      answer: `B` },

    { id: `duc-math-m2-2`, domain: `Advanced Math`, skill: `Exponential functions`, difficulty: `medium`, type: `mcq`,
      prompt: `The population of a certain city doubled every 25 years from 1660 to 1760. The population of this city was 208,000 in 1760. What was the population of this city in 1660?`,
      options: [{ id: `A`, text: `13,000` }, { id: `B`, text: `26,000` }, { id: `C`, text: `104,000` }, { id: `D`, text: `416,000` }],
      answer: `A` },

    { id: `duc-math-m2-3`, domain: `Algebra`, skill: `Linear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `Each day Daniela takes a 30-minute morning walk. The equation <em>s</em> = 70<em>m</em> + 285 models the total number of steps, <em>s</em>, Daniela has taken one morning <em>m</em> minutes after the start of her walk, where 0 &le; <em>m</em> &le; 30. Which is the best interpretation of 285 in this context?`,
      options: [{ id: `A`, text: `The estimated total number of steps Daniela will take during her walk` }, { id: `B`, text: `The estimated total number of steps Daniela will have taken after her walk` }, { id: `C`, text: `The estimated number of steps Daniela takes each minute during her walk` }, { id: `D`, text: `The estimated number of steps Daniela had taken that morning before starting her walk` }],
      answer: `D` },

    { id: `duc-math-m2-4`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<em>y</em> = 0.25<em>x</em><sup>2</sup> &minus; 7.5<em>x</em> + 95.25<br><br>The equation gives the estimated stock price <em>y</em>, in dollars, for a certain company <em>x</em> days after the company went public, where 0 &le; <em>x</em> &le; 20. Which statement is the best interpretation of (<em>x</em>, <em>y</em>) = (1, 88) in this context?`,
      options: [{ id: `A`, text: `1 day after the company went public, the company&rsquo;s estimated stock price is $88.` }, { id: `B`, text: `88 days after the company went public, the company&rsquo;s estimated stock price is $1.` }, { id: `C`, text: `The company&rsquo;s estimated stock price increased $88 every day after the company went public.` }, { id: `D`, text: `The company&rsquo;s estimated stock price increased $1 every 88 days after the company went public.` }],
      answer: `A` },

    { id: `duc-math-m2-5`, domain: `Algebra`, skill: `Linear equations in two variables`, difficulty: `easy`, type: `mcq`,
      prompt: `Hassan put up wire fencing along each edge of a rectangular garden with a length of <em>x</em> feet and a width of <em>y</em> feet. Hassan put up a total length of 44 feet of wire fencing. Which equation represents this situation?`,
      options: [{ id: `A`, text: `2x + 2y = 44` }, { id: `B`, text: `x + y = 44` }, { id: `C`, text: `2xy = 44` }, { id: `D`, text: `xy = 44` }],
      answer: `A` },

    { id: `duc-math-m2-6`, domain: `Algebra`, skill: `Systems of two linear equations in two variables`, difficulty: `hard`, type: `grid`,
      prompt: `117<em>x</em> + 78<em>y</em> = 65<br><br>One of the equations in a system of two linear equations is given. The system has infinitely many solutions. If the second equation in the system is written as <em>Ax</em> + <em>By</em> = <em>C</em>, where <em>A</em>, <em>B</em>, and <em>C</em> are constants, what is the value of (<em>A</em> + <em>C</em>)/<em>B</em>?`,
      answer: [`7/3`, `2.33`, `2.333`] },

    { id: `duc-math-m2-7`, domain: `Problem-Solving and Data Analysis`, skill: `Ratios, rates, proportional relationships, and units`, difficulty: `medium`, type: `grid`,
      prompt: `<svg viewBox="0 0 330 260" role="img" aria-label="figure" style="max-width:330px;width:100%;display:block;margin:6px auto"><line x1='66' y1='20' x2='66' y2='220' stroke='var(--border)' stroke-width='1'/><line x1='92' y1='20' x2='92' y2='220' stroke='var(--border)' stroke-width='1'/><line x1='118' y1='20' x2='118' y2='220' stroke='var(--border)' stroke-width='1'/><line x1='144' y1='20' x2='144' y2='220' stroke='var(--border)' stroke-width='1'/><line x1='170' y1='20' x2='170' y2='220' stroke='var(--border)' stroke-width='1'/><line x1='196' y1='20' x2='196' y2='220' stroke='var(--border)' stroke-width='1'/><line x1='222' y1='20' x2='222' y2='220' stroke='var(--border)' stroke-width='1'/><line x1='248' y1='20' x2='248' y2='220' stroke='var(--border)' stroke-width='1'/><line x1='274' y1='20' x2='274' y2='220' stroke='var(--border)' stroke-width='1'/><line x1='300' y1='20' x2='300' y2='220' stroke='var(--border)' stroke-width='1'/><line x1='40' y1='200' x2='300' y2='200' stroke='var(--border)' stroke-width='1'/><line x1='40' y1='180' x2='300' y2='180' stroke='var(--border)' stroke-width='1'/><line x1='40' y1='160' x2='300' y2='160' stroke='var(--border)' stroke-width='1'/><line x1='40' y1='140' x2='300' y2='140' stroke='var(--border)' stroke-width='1'/><line x1='40' y1='120' x2='300' y2='120' stroke='var(--border)' stroke-width='1'/><line x1='40' y1='100' x2='300' y2='100' stroke='var(--border)' stroke-width='1'/><line x1='40' y1='80' x2='300' y2='80' stroke='var(--border)' stroke-width='1'/><line x1='40' y1='60' x2='300' y2='60' stroke='var(--border)' stroke-width='1'/><line x1='40' y1='40' x2='300' y2='40' stroke='var(--border)' stroke-width='1'/><line x1='40' y1='220' x2='306' y2='220' stroke='var(--fg)' stroke-width='1.5'/><line x1='40' y1='220' x2='40' y2='16' stroke='var(--fg)' stroke-width='1.5'/><polyline points='40,220 118,160 170,160 300,134' fill='none' stroke='var(--fg)' stroke-width='2.5'/><text x='66' y='234' font-size='9' fill='var(--fg)' text-anchor='middle'>1</text><text x='92' y='234' font-size='9' fill='var(--fg)' text-anchor='middle'>2</text><text x='118' y='234' font-size='9' fill='var(--fg)' text-anchor='middle'>3</text><text x='144' y='234' font-size='9' fill='var(--fg)' text-anchor='middle'>4</text><text x='170' y='234' font-size='9' fill='var(--fg)' text-anchor='middle'>5</text><text x='196' y='234' font-size='9' fill='var(--fg)' text-anchor='middle'>6</text><text x='222' y='234' font-size='9' fill='var(--fg)' text-anchor='middle'>7</text><text x='248' y='234' font-size='9' fill='var(--fg)' text-anchor='middle'>8</text><text x='274' y='234' font-size='9' fill='var(--fg)' text-anchor='middle'>9</text><text x='300' y='234' font-size='9' fill='var(--fg)' text-anchor='middle'>10</text><text x='33' y='223' font-size='9' fill='var(--fg)' text-anchor='end'>0</text><text x='33' y='163' font-size='9' fill='var(--fg)' text-anchor='end'>3</text><text x='33' y='123' font-size='9' fill='var(--fg)' text-anchor='end'>5</text><text x='33' y='83' font-size='9' fill='var(--fg)' text-anchor='end'>7</text><text x='33' y='43' font-size='9' fill='var(--fg)' text-anchor='end'>9</text><text x='170' y='252' font-size='10' fill='var(--fg)' text-anchor='middle'>Time (hours)</text><text x='14' y='120' font-size='10' fill='var(--fg)' text-anchor='middle' transform='rotate(-90 14 120)'>Total rainfall (cm)</text></svg><div class="tiny faint" style="text-align:center;margin:2px 0 8px">Total rainfall (centimeters) versus time (hours) over a 10-hour period.</div>The graph shows the total amount of rainfall <em>y</em>, in centimeters, from the start of a 10-hour period, where <em>x</em> is the number of hours after the start of the period. What was the average rate of change of the total amount of rainfall over time, in centimeters per hour, from <em>x</em> = 0 to <em>x</em> = 5?`,
      answer: [`0.6`, `.6`] },

    { id: `duc-math-m2-8`, domain: `Algebra`, skill: `Linear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `A linear function <em>f</em> gives a company&rsquo;s profit, in dollars, for selling <em>x</em> items. The company&rsquo;s profit is $190 when it sells 4 items, and its profit is $670 when it sells 10 items. Which equation defines <em>f</em>?`,
      options: [{ id: `A`, text: `f(x) = 180x - 670` }, { id: `B`, text: `f(x) = 67x` }, { id: `C`, text: `f(x) = 80x - 10x` }, { id: `D`, text: `f(x) = 80x - 130` }],
      answer: `D` },

    { id: `duc-math-m2-9`, domain: `Algebra`, skill: `Linear equations in two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `A total of 3 squares each have side length <em>r</em>. A total of 6 equilateral triangles each have side length <em>t</em>. None of these squares and triangles shares a side. The sum of the perimeters of all these squares and triangles is 270. Which equation represents this situation?`,
      options: [{ id: `A`, text: `9<em>r</em> + 24<em>t</em> = 270` }, { id: `B`, text: `3<em>r</em> + 6<em>t</em> = 270` }, { id: `C`, text: `12<em>r</em> + 18<em>t</em> = 270` }, { id: `D`, text: `6<em>r</em> + 3<em>t</em> = 270` }],
      answer: `C` },

    { id: `duc-math-m2-10`, domain: `Advanced Math`, skill: `Exponential functions`, difficulty: `hard`, type: `mcq`,
      prompt: `On January 1, there were 233 views of a video posted on a social media site. Every 2 days after January 1, the number of views of the video had increased by 60% of the number of views 2 days earlier. The function <em>f</em> gives the predicted number of views <em>x</em> days after January 1. Which equation defines <em>f</em>?`,
      options: [{ id: `A`, text: `<em>f</em>(<em>x</em>) = 233(0.60)<sup><em>x</em>/2</sup>` }, { id: `B`, text: `<em>f</em>(<em>x</em>) = 233(0.60)<sup>2<em>x</em></sup>` }, { id: `C`, text: `<em>f</em>(<em>x</em>) = 233(1.60)<sup><em>x</em>/2</sup>` }, { id: `D`, text: `<em>f</em>(<em>x</em>) = 233(1.60)<sup>2<em>x</em></sup>` }],
      answer: `C` },

    { id: `duc-math-m2-11`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `medium`, type: `mcq`,
      prompt: `36(<em>x</em> &minus; 1) = 4(&minus;9 + 9<em>x</em>)<br><br>How many solutions does the given equation have?`,
      options: [{ id: `A`, text: `Zero` }, { id: `B`, text: `Exactly one` }, { id: `C`, text: `Exactly two` }, { id: `D`, text: `Infinitely many` }],
      answer: `D` },

    { id: `duc-math-m2-12`, domain: `Advanced Math`, skill: `Equivalent expressions`, difficulty: `medium`, type: `mcq`,
      prompt: `10<em>yz</em> &minus; 9<em>xz</em> = 10<em>xy</em> &minus; <em>z</em><br><br>The given equation relates the real numbers <em>x</em>, <em>y</em>, and <em>z</em>, where <em>x</em> &lt; 0 and <em>y</em> &gt; 0. Which equation correctly expresses <em>z</em> in terms of <em>x</em> and <em>y</em>?`,
      options: [{ id: `A`, text: `<em>z</em> = 10<em>xy</em> / (10<em>y</em> &minus; 9<em>x</em> + 1)` }, { id: `B`, text: `<em>z</em> = 10<em>xy</em> / (10<em>y</em> &minus; 9<em>x</em>)` }, { id: `C`, text: `<em>z</em> = &minus;29<em>xy</em>` }, { id: `D`, text: `<em>z</em> = 9<em>x</em>` }],
      answer: `A` },

    { id: `duc-math-m2-13`, domain: `Problem-Solving and Data Analysis`, skill: `Two-variable data: models and scatterplots`, difficulty: `medium`, type: `grid`,
      prompt: `<svg viewBox="0 0 300 250" role="img" aria-label="scatterplot" style="max-width:340px;width:100%;display:block;margin:6px auto"><clipPath id="cp95198"><rect x="26.0" y="26.0" width="248.0" height="198.0"/></clipPath><line x1="26.0" y1="224.0" x2="26.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="67.3" y1="224.0" x2="67.3" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="108.7" y1="224.0" x2="108.7" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="150.0" y1="224.0" x2="150.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="191.3" y1="224.0" x2="191.3" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="232.7" y1="224.0" x2="232.7" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="274.0" y1="224.0" x2="274.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="224.0" x2="274.0" y2="224.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="195.7" x2="274.0" y2="195.7" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="167.4" x2="274.0" y2="167.4" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="139.1" x2="274.0" y2="139.1" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="110.9" x2="274.0" y2="110.9" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="82.6" x2="274.0" y2="82.6" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="54.3" x2="274.0" y2="54.3" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="26.0" x2="274.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="224.0" x2="274.0" y2="224.0" stroke="currentColor" stroke-width="1.4"/><line x1="26.0" y1="224.0" x2="26.0" y2="26.0" stroke="currentColor" stroke-width="1.4"/><text x="26.0" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">0</text><text x="67.3" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">1</text><text x="108.7" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">2</text><text x="150.0" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">3</text><text x="191.3" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">4</text><text x="232.7" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">5</text><text x="274.0" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">6</text><text x="22.0" y="191.6" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">25</text><text x="22.0" y="156.3" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">50</text><text x="22.0" y="120.9" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">75</text><text x="22.0" y="85.6" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">100</text><text x="22.0" y="50.2" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">125</text><g clip-path="url(#cp95198)"><line x1="26.0" y1="120.8" x2="274.0" y2="47.2" stroke="currentColor" stroke-width="1.8"/><circle cx="67.3" cy="113.7" r="3.1" fill="currentColor"/><circle cx="108.7" cy="85.4" r="3.1" fill="currentColor"/><circle cx="191.3" cy="78.3" r="3.1" fill="currentColor"/><circle cx="232.7" cy="48.6" r="3.1" fill="currentColor"/><circle cx="274.0" cy="47.2" r="3.1" fill="currentColor"/></g><text x="26.0" y="14" font-size="11" font-style="italic" fill="currentColor" text-anchor="middle">Body length (cm)</text><text x="282.0" y="242" font-size="11" font-style="italic" fill="currentColor">Age (years)</text></svg>The scatterplot shows 5 measurements of the body length, in centimeters (cm), of a New Zealand fur seal from an age of 1 year to 6 years old. A line of best fit is also shown. For a New Zealand fur seal at an age of 3 years old, what is the body length predicted by the line of best fit, to the nearest 10 cm?`,
      answer: [`100`] },

    { id: `duc-math-m2-14`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `The function <em>f</em> gives the product of a number, <em>x</em>, and a number that is 62 more than <em>x</em>. Which equation defines <em>f</em>?`,
      options: [{ id: `A`, text: `<em>f</em>(<em>x</em>) = <em>x</em><sup>2</sup> + <em>x</em> + 62` }, { id: `B`, text: `<em>f</em>(<em>x</em>) = <em>x</em><sup>2</sup> + 62` }, { id: `C`, text: `<em>f</em>(<em>x</em>) = <em>x</em><sup>2</sup> + 62<em>x</em>` }, { id: `D`, text: `<em>f</em>(<em>x</em>) = <em>x</em><sup>2</sup> + 62<em>x</em> + 62` }],
      answer: `C` },

    { id: `duc-math-m2-15`, domain: `Advanced Math`, skill: `Nonlinear equations in one variable and systems of equations in two variables`, difficulty: `hard`, type: `mcq`,
      prompt: `88<em>x</em><sup>2</sup> + <em>bx</em> + <em>c</em> = 0<br><br>In the given equation, <em>b</em> and <em>c</em> are positive constants. The equation has more than one real solution. Which of the following describes the relationship between <em>b</em> and <em>c</em>?`,
      options: [{ id: `A`, text: `<em>b</em> = &radic;(352<em>c</em>)` }, { id: `B`, text: `<em>b</em> &gt; &radic;(352<em>c</em>)` }, { id: `C`, text: `<em>b</em><sup>2</sup> = &radic;(352<em>c</em>)` }, { id: `D`, text: `<em>b</em> &lt; &radic;(352<em>c</em>)` }],
      answer: `B` },

    { id: `duc-math-m2-16`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `hard`, type: `grid`,
      prompt: `<em>ax</em><sup>2</sup> + 130<em>x</em> + <em>c</em><br><br>In the given expression, <em>a</em> and <em>c</em> are positive constants. If <em>px</em> + <em>q</em> is a factor of the expression, where <em>p</em> and <em>q</em> are positive constants, what is the greatest possible value of <em>ac</em>?`,
      answer: [`4225`] },

    { id: `duc-math-m2-17`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `hard`, type: `mcq`,
      prompt: `The equation <em>N</em>(<em>m</em>) = 65(<em>Q</em>)<sup><em>m</em>/6</sup> gives the predicted population <em>N</em>(<em>m</em>), in thousands, of a certain bacteria colony <em>m</em> minutes after the initial measurement, where <em>Q</em> is a constant greater than 1. The predicted population increases by <em>p</em>% every 180 seconds. What is the value of <em>p</em> in terms of <em>Q</em>?`,
      options: [{ id: `A`, text: `100(<em>Q</em><sup>1/2</sup> + 1)` }, { id: `B`, text: `100(<em>Q</em><sup>30</sup> + 1)` }, { id: `C`, text: `100(<em>Q</em><sup>1/2</sup> &minus; 1)` }, { id: `D`, text: `100(<em>Q</em><sup>30</sup> &minus; 1)` }],
      answer: `C` },

    { id: `duc-math-m2-18`, domain: `Geometry and Trigonometry`, skill: `Circles`, difficulty: `hard`, type: `mcq`,
      prompt: `In the <em>xy</em>-plane, a circle has center <em>C</em> with coordinates (<em>h</em>, <em>k</em>). Points <em>A</em> and <em>B</em> lie on the circle. Point <em>A</em> has coordinates (<em>h</em> + 1, <em>k</em> + &radic;230), and &ang;<em>ACB</em> is a right angle. What is the length of <em>AB</em>?`,
      options: [{ id: `A`, text: `231&radic;3` }, { id: `B`, text: `231&radic;2` }, { id: `C`, text: `2&radic;230` }, { id: `D`, text: `&radic;462` }],
      answer: `D` },

    { id: `duc-math-m2-19`, domain: `Geometry and Trigonometry`, skill: `Lines, angles, and triangles`, difficulty: `medium`, type: `mcq`,
      prompt: `<svg viewBox="0 0 420 220" role="img" aria-label="figure" style="max-width:340px;width:100%;display:block;margin:6px auto"><line x1='55' y1='55' x2='55' y2='175' stroke='var(--fg)' stroke-width='2'/><line x1='55' y1='175' x2='210' y2='175' stroke='var(--fg)' stroke-width='2'/><line x1='55' y1='55' x2='210' y2='175' stroke='var(--fg)' stroke-width='2'/><line x1='210' y1='175' x2='365' y2='175' stroke='var(--fg)' stroke-width='2'/><line x1='210' y1='175' x2='365' y2='75' stroke='var(--fg)' stroke-width='2'/><line x1='365' y1='75' x2='365' y2='175' stroke='var(--fg)' stroke-width='2'/><path d='M55 163 L67 163 L67 175' fill='none' stroke='var(--fg)' stroke-width='1.3'/><path d='M365 163 L353 163 L353 175' fill='none' stroke='var(--fg)' stroke-width='1.3'/><text x='47' y='52' font-size='13' fill='var(--fg)' text-anchor='end' font-style='italic'>Q</text><text x='47' y='190' font-size='13' fill='var(--fg)' text-anchor='end' font-style='italic'>P</text><text x='205' y='165' font-size='13' fill='var(--fg)' text-anchor='end' font-style='italic'>R</text><text x='374' y='73' font-size='13' fill='var(--fg)' font-style='italic'>S</text><text x='374' y='190' font-size='13' fill='var(--fg)' font-style='italic'>T</text><text x='170' y='170' font-size='11' fill='var(--fg)'>x&deg;</text><text x='224' y='170' font-size='11' fill='var(--fg)'>x&deg;</text></svg><div class="tiny faint" style="text-align:center;margin:2px 0 8px">Note: Figure not drawn to scale.</div>&#9651;<em>QPR</em> is similar to &#9651;<em>STR</em>. The lengths represented by <em>ST</em>, <em>QP</em>, <em>PR</em>, and <em>QR</em> in the figure are 6, 16, 30, and 34, respectively. What is the length of <em>SR</em>?`,
      options: [{ id: `A`, text: `204/16` }, { id: `B`, text: `204/30` }, { id: `C`, text: `96/30` }, { id: `D`, text: `96/34` }],
      answer: `A` },

    { id: `duc-math-m2-20`, domain: `Problem-Solving and Data Analysis`, skill: `Ratios, rates, proportional relationships, and units`, difficulty: `hard`, type: `grid`,
      prompt: `An object&rsquo;s speed is increasing at a rate of 6.10 meters per second squared. What is this rate, in miles per minute squared, rounded to the nearest tenth? (Use 1 mile = 1,609 meters.)`,
      answer: [`13.6`] },

    { id: `duc-math-m2-21`, domain: `Geometry and Trigonometry`, skill: `Right triangles and trigonometry`, difficulty: `hard`, type: `grid`,
      prompt: `<svg viewBox="0 0 320 250" role="img" aria-label="figure" style="max-width:320px;width:100%;display:block;margin:6px auto"><polygon points='70,40 70,205 250,205' fill='none' stroke='currentColor' stroke-width='1.6'/><rect x='70' y='191' width='14' height='14' fill='none' stroke='currentColor' stroke-width='0.9'/><text x='58' y='34' font-size='14' font-style='italic'>A</text><text x='52' y='210' font-size='14' font-style='italic'>B</text><text x='256' y='210' font-size='14' font-style='italic'>C</text><text x='168' y='112' font-size='14'>28</text></svg><div class="tiny faint" style="text-align:center;margin:2px 0 8px">Note: Figure not drawn to scale.</div>For triangle <em>ABC</em>, the length of <em>AB</em> is 11 less than the length of <em>AC</em>. Point <em>D</em> (not shown) lies on <em>AC</em> such that <em>BD</em> (not shown) is perpendicular to <em>AC</em>. What is the value of <em>BC</em>/<em>BD</em>?`,
      answer: [`28/17`, `1.647`, `1.64`] },

    { id: `duc-math-m2-22`, domain: `Advanced Math`, skill: `Nonlinear equations in one variable and systems of equations in two variables`, difficulty: `hard`, type: `grid`,
      prompt: `7<em>x</em><sup>2</sup> &minus; 9<em>x</em> + <em>c</em> = 5<br><br>In the given equation, <em>c</em> is a constant. A solution to the equation is (9 &minus; &radic;725)/14. What is the value of <em>c</em>?`,
      answer: [`-18`] },
  ];

  Apex.bank.register({
    id: "dsat-2024-12-us-c",
    title: "December 2024",
    type: "digital",
    region: "US",
    version: "C",
    year: 2024,
    monthNum: 12,
    tagline: "US · Version C",
    description: "Digital SAT — December 2024 US prediction form, Version C (RW reordered into official SAT test order; math ordered easy to hard).",
    adaptive: false,
    sections: [
      { id: "rw", modules: [
        { id: "duc-rw-m1", stage: 1, name: "Reading and Writing — Module 1", minutes: 32, questions: RW_M1 },
        { id: "duc-rw-m2", stage: 2, variant: "hard", name: "Reading and Writing — Module 2 (Hard)", minutes: 32, questions: RW_M2 },
      ] },
      { id: "math", modules: [
        { id: "duc-math-m1", stage: 1, name: "Math — Module 1", minutes: 35, calculator: true, questions: MATH_M1 },
        { id: "duc-math-m2", stage: 2, variant: "hard", name: "Math — Module 2 (Hard)", minutes: 35, calculator: true, questions: MATH_M2 },
      ] },
    ],
  });
})();
