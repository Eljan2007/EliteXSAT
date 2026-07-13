/* Digital SAT - May 2024 International Form B. Math-M1 borrowed from Form A. Both Module 2s Hard. No explanations. COMPLETE. */
(function () {
  const RW_M1 = [
    { id: `m5ib-rw-m1-1`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Manul cats are small, shy felines. They live mostly alone in out-of-the-way parts of Asia, such as on Mount Everest. These cats have been difficult to research because their habitats are so _____ large populations of humans.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `drawn to` }, { id: `B`, text: `full of` }, { id: `C`, text: `distant from` }, { id: `D`, text: `responsible for` }],
      answer: `C` },

    { id: `m5ib-rw-m1-2`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Some paleontologists thought that a sudden shift toward an arid climate on the Australian continent may have brought about the rapid extinction of several species of large kangaroos around 200,000 years ago. However, new evidence that the change in conditions occurred well before those species went extinct is forcing paleontologists to _____ that hypothesis.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `revise` }, { id: `B`, text: `interpret` }, { id: `C`, text: `recollect` }, { id: `D`, text: `introduce` }],
      answer: `A` },

    { id: `m5ib-rw-m1-3`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The following text is from Mark Twain’s 1876 novel <em>The Adventures of Tom Sawyer</em>. Tom, a child, has been told by his aunt to paint their house’s fence.</p><p>Tom appeared on the sidewalk with a bucket of whitewash and a long-handled brush. He <u>surveyed</u> the fence, and all gladness left him and a deep melancholy settled down upon his spirit. Thirty yards of board fence nine feet high.</p>`,
      prompt: `As used in the text, what does the word “surveyed” most nearly mean?`,
      options: [{ id: `A`, text: `Had questions about` }, { id: `B`, text: `Was intrigued by` }, { id: `C`, text: `Looked at` }, { id: `D`, text: `Ordered` }],
      answer: `C` },

    { id: `m5ib-rw-m1-4`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The invention in 1958 of the integrated circuit (or microchip) radically altered the semiconductor industry. In fact, some historians argue that it fundamentally _____ the industry by enabling it to take advantage of mass production methods for the first time.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `obstructed` }, { id: `B`, text: `transformed` }, { id: `C`, text: `bypassed` }, { id: `D`, text: `overwhelmed` }],
      answer: `B` },

    { id: `m5ib-rw-m1-5`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Text corpora such as the Corpus of Contemporary American English are enormous collections of electronically stored texts that can be used for empirical testing of hypotheses regarding how _____ a word is in spoken and written English. For instance, one might have a guess about the incidence of the word “day,” but only an analysis of a corpus can prove that “day” is the fifth most commonly used noun.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `assertive` }, { id: `B`, text: `credible` }, { id: `C`, text: `pervasive` }, { id: `D`, text: `profound` }],
      answer: `C` },

    { id: `m5ib-rw-m1-6`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Why do ocelots purr but jaguars roar? Researchers hypothesize that this difference between the two feline species may be partly due to a U-shaped bone in their throats. <u>This bone is called the hyoid.</u> Ocelots, which are much smaller than jaguars, have a rigid hyoid that rumbles when the cat’s larynx vibrates, resulting in a purr. By contrast, jaguars have a somewhat flexible hyoid, and the bone is attached to the skull with a stretchy ligament that ocelots lack. These traits allow jaguars and most other species of big cats to roar. The same traits may also prevent most big cats from purring.</p>`,
      prompt: `Which choice best describes the function of the underlined sentence in the text as a whole?`,
      options: [{ id: `A`, text: `The sentence explains the unique nature of the researchers’ hypothesis.` }, { id: `B`, text: `The sentence identifies the location of a bone in felines.` }, { id: `C`, text: `The sentence introduces a term that is used in the discussion that follows.` }, { id: `D`, text: `The sentence summarizes the debate presented in the text.` }],
      answer: `C` },

    { id: `m5ib-rw-m1-7`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `<p>In 2020, rap artist and professor A.D. Carson published the first peer-reviewed rap album about his experiences with Black masculinity called “i used to love to dream.” Typically in peer review, experts evaluate scholarly articles prior to publication. For Carson’s album, dubbed a “mixtap/e/ssay,” peer review involved both scholars and rap artists. In combining elements of a mixtape album with scholarly essays that connect Carson’s lyrics to historical and contemporary contexts for listeners both inside and outside academia, Carson’s album helped redefine how scholarship is created and shared.</p>`,
      prompt: `Which choice best states the main purpose of the text?`,
      options: [{ id: `A`, text: `To compare the relative public impact of scholarly articles and albums` }, { id: `B`, text: `To describe how each step of the peer review process unfolds` }, { id: `C`, text: `To capture one scholar’s opinion of a new rap album` }, { id: `D`, text: `To explain why a certain rap album is particularly innovative` }],
      answer: `D` },

    { id: `m5ib-rw-m1-8`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The following text is adapted from Lady Gregory’s 1904 play <em>Spreading the News</em>. Jack Smith and Bartley Fallon have encountered each other at the local fair.</p><p>JACK: It isn’t to the fair I came myself, but up to the Five Acre Meadow I’m going, where I have a contract for the hay. We’ll get a share of it into tramps [drying stacks] to-day.</p><p>BARTLEY: You will not get it into tramps to-day. The rain will be down on it by evening, and on myself too. It’s seldom I ever started on a journey but the rain would come down on me before I’d find any place of shelter.</p><p>JACK: If it didn’t itself, Bartley, it is my belief you would carry a leaky pail on your head in place of a hat, that way you’d not be without some cause of complaining.</p>`,
      prompt: `Based on the text, what does Jack most likely believe about Bartley?`,
      options: [{ id: `A`, text: `Bartley will be able to help Jack with cutting the hay.` }, { id: `B`, text: `Bartley is concerned that Jack hasn’t prepared for the weather.` }, { id: `C`, text: `Bartley is a poor judge of the weather.` }, { id: `D`, text: `Bartley will find fault with any situation.` }],
      answer: `D` },

    { id: `m5ib-rw-m1-9`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Horizontal gene transfer involves the exchange of genetic material between organisms not in a parent-offspring relationship. It is common among prokaryotes (single-celled organisms such as the bacteria <em>Brevibacillus borstelensis</em> and <em>Massilia timonae</em>). The process can have the effect of increasing bacterial resistance to antibiotics; as such, an understanding of how to prevent horizontal gene transfer might result in the mitigation of dangerous pathogens (organisms that cause disease).</p>`,
      prompt: `Which choice best states the main idea of the text?`,
      options: [{ id: `A`, text: `A common perception of horizontal gene transfer is inaccurate.` }, { id: `B`, text: `Horizontal gene transfer is more common than was initially thought.` }, { id: `C`, text: `The results of new research into horizontal gene transfer cast doubt on earlier findings.` }, { id: `D`, text: `The study of horizontal gene transfer may yield findings with useful applications.` }],
      answer: `D` },

    { id: `m5ib-rw-m1-10`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `medium`, type: `mcq`,
      passage: `<div style="text-align:center;font-weight:600;font-size:12px;margin:2px 0">Examples of Hoards found in Ireland and Northern Ireland</div><table style="border-collapse:collapse;margin:6px auto"><tr><th style="border:1px solid var(--border);padding:3px 12px">Hoard name</th><th style="border:1px solid var(--border);padding:3px 12px">Date of contents</th><th style="border:1px solid var(--border);padding:3px 12px">Year of discovery</th><th style="border:1px solid var(--border);padding:3px 12px">Description</th></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Carrick-on-Suir Hoard</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">17th century CE</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">2013</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">gold coins</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Coggalbeg Hoard</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">24th–19th century BCE</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">1945</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">gold pieces</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Broighter Hoard</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">1st century BCE</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">1896</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">gold pieces</td></tr></table><p>For centuries, people in Ireland and Northern Ireland have been finding deposits of valuable objects, called hoards, that earlier people buried. These discoveries have persisted into the 2000s; for example, _____</p>`,
      prompt: `Which choice most effectively uses data from the table to complete the statement?`,
      options: [{ id: `A`, text: `the Broighter Hoard, Coggalbeg Hoard, and Carrick-on-Suir Hoard have all been found since 1896.` }, { id: `B`, text: `the Carrick-on-Suir Hoard was found in 2013.` }, { id: `C`, text: `the Carrick-on-Suir Hoard was found after the Broighter Hoard.` }, { id: `D`, text: `the Broighter Hoard and Coggalbeg Hoard were both found after 2000.` }],
      answer: `B` },

    { id: `m5ib-rw-m1-11`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `medium`, type: `mcq`,
      passage: `<p><em>The Age of Innocence</em> is a 1920 novel by Edith Wharton set in the 1870s in the northeastern United States. In the novel, Newland Archer and May Welland have just been married. They are spending a summer with May’s relatives in Newport, Rhode Island. May is puzzled by Newland’s lack of enthusiasm for Newport: _____</p>`,
      prompt: `Which quotation from <em>The Age of Innocence</em> best illustrates the claim?`,
      options: [{ id: `A`, text: `“The Newport Archery Club always held its August meeting at the Beauforts’.”` }, { id: `B`, text: `“[May] represented peace, stability, comradeship, and the steadying sense of an unescapable duty.”` }, { id: `C`, text: `“May herself could not understand [Newland’s] obscure reluctance to fall in with so reasonable and pleasant a way of spending the summer.”` }, { id: `D`, text: `“[Newland] had the feeling of unexplained excitement with which, on half-holidays at school, he used to start off into the unknown.”` }],
      answer: `C` },

    { id: `m5ib-rw-m1-12`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `<div style="text-align:center;font-weight:600;font-size:12px;margin:2px 0">Characteristics of Several Large Stars</div><table style="border-collapse:collapse;margin:6px auto"><tr><th style="border:1px solid var(--border);padding:3px 12px">Name of star</th><th style="border:1px solid var(--border);padding:3px 12px">Mass (solar masses)</th><th style="border:1px solid var(--border);padding:3px 12px">Distance (light-years)</th><th style="border:1px solid var(--border);padding:3px 12px">Minimum aperture to detect from Earth (millimeters)</th></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Sk -69° 249 A</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">119</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">160,000</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">60</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">VFTS 482</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">145</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">164,000</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">102</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">HSH95-46</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">160</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">163,000</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">203</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">R136a4</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">167</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">157,000</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">152</td></tr></table><p>A telescope allows us to see very faint objects mostly due to the large size of the opening that light passes through, known as the aperture. Like the pupil in the human eye, the larger the diameter of a telescope’s aperture, the fainter the objects we can detect with it. An amateur astronomer claims that she likely could see most, but not all, of the stars in the table while using a telescope with a 160-millimeter (mm) aperture.</p>`,
      prompt: `Which choice best describes data from the table that support the amateur astronomer’s claim?`,
      options: [{ id: `A`, text: `Only Sk -69° 249 A can be seen from Earth using a telescope with a 60 mm aperture.` }, { id: `B`, text: `Only Sk -69° 249 A has a mass below 145 solar masses.` }, { id: `C`, text: `Only HSH95-46 requires a telescope with a minimum aperture greater than 160 mm to be visible from Earth.` }, { id: `D`, text: `Only VFTS 482 is further than 163,000 light-years from Earth.` }],
      answer: `C` },

    { id: `m5ib-rw-m1-13`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `medium`, type: `mcq`,
      passage: `<svg viewBox="0 0 340 280" role="img" aria-label="figure" style="max-width:340px;width:100%;display:block;margin:6px auto"><line x1='45' y1='210' x2='305' y2='210' stroke='currentColor' stroke-width='1.3'/><line x1='45' y1='210' x2='45' y2='22' stroke='currentColor' stroke-width='1.3'/><line x1='45' y1='148.3' x2='305' y2='148.3' stroke='currentColor' stroke-width='0.5' opacity='0.15'/><line x1='45' y1='86.7' x2='305' y2='86.7' stroke='currentColor' stroke-width='0.5' opacity='0.15'/><line x1='45' y1='25' x2='305' y2='25' stroke='currentColor' stroke-width='0.5' opacity='0.15'/><text x='40' y='214' font-size='10' fill='currentColor' text-anchor='end'>0</text><text x='40' y='152' font-size='10' fill='currentColor' text-anchor='end'>2</text><text x='40' y='90' font-size='10' fill='currentColor' text-anchor='end'>4</text><text x='40' y='29' font-size='10' fill='currentColor' text-anchor='end'>6</text><text x='45' y='224' font-size='10' fill='currentColor' text-anchor='middle'>1980</text><text x='132' y='224' font-size='10' fill='currentColor' text-anchor='middle'>1990</text><text x='219' y='224' font-size='10' fill='currentColor' text-anchor='middle'>2000</text><text x='305' y='224' font-size='10' fill='currentColor' text-anchor='middle'>2010</text><text x='175' y='240' font-size='11' fill='currentColor' text-anchor='middle'>Year</text><text x='14' y='118' font-size='11' fill='currentColor' text-anchor='middle' transform='rotate(-90 14 118)'>Number</text><polyline points='45,179 132,117 219,117 305,117' fill='none' stroke='currentColor' stroke-width='1.9'/><polyline points='45,148 132,56 219,148 305,117' fill='none' stroke='currentColor' stroke-width='1.6' stroke-dasharray='6 3'/><polyline points='45,210 132,210 219,148 305,117' fill='none' stroke='currentColor' stroke-width='1.6' stroke-dasharray='2 3'/><line x1='52' y1='262' x2='70' y2='262' stroke='currentColor' stroke-width='1.9'/><text x='73' y='265' font-size='9' fill='currentColor'>Philippines</text><line x1='145' y1='262' x2='163' y2='262' stroke='currentColor' stroke-width='1.6' stroke-dasharray='6 3'/><text x='166' y='265' font-size='9' fill='currentColor'>Mexico</text><line x1='225' y1='262' x2='243' y2='262' stroke='currentColor' stroke-width='1.6' stroke-dasharray='2 3'/><text x='246' y='265' font-size='9' fill='currentColor'>Peru</text></svg><div class="tiny faint" style="text-align:center;margin:2px 0 8px">Women Judges and Magistrates on the High Courts, 1980–2010</div><p>A report from an international organization that monitors the numbers of women serving as judges or magistrates on various nations’ highest courts, such as the Supreme Court of Justice in Mexico and the Supreme Court in the Philippines, found that the overall trend is toward more women serving on the high courts in 2010 than in 1980. For example, none of the countries in the graph had more than 2 women in these positions in 1980, but _____</p>`,
      prompt: `Which choice most effectively uses data from the graph to complete the example?`,
      options: [{ id: `A`, text: `in 2010, Peru had 3 women on its high courts, the Philippines had 3, and Mexico had 3.` }, { id: `B`, text: `the increase in the number of women on the high courts from 1980 to 2010 in Peru was greater than that in either the Philippines or Mexico.` }, { id: `C`, text: `neither Peru nor the Philippines saw a reduction in the women on their high courts in any of the years shown on the graph, but Mexico did after 1990.` }, { id: `D`, text: `Mexico had 2 women on its high courts in 1980 and 3 in 2010.` }],
      answer: `A` },

    { id: `m5ib-rw-m1-14`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `<p>The great blue heron and the small dark heron are long-legged birds that live in wetlands, like the Everglades in Florida. Laura D’Acunto and colleagues wanted to know how these birds choose an area in which to live. They looked at features of the birds’ habitats, such as the geographic location of the area and how deep the water is during the birds’ breeding season. They found that great blue herons prefer areas with deep water during breeding season, but that was not true for small dark herons. The researchers concluded that water management strategies that increase the depth of water in potential wetland bird habitats during breeding season are therefore less likely to _____</p>`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `attract small dark herons to the area than they are to attract great blue herons to the area.` }, { id: `B`, text: `extend the average lifespan of great blue herons already in the area than they are to attract a greater number of those birds to the area.` }, { id: `C`, text: `attract birds that don’t typically live in wetlands to the area than they are to attract great blue herons or small dark herons to the area.` }, { id: `D`, text: `decrease the area’s appeal to both great blue herons and small dark herons than they are to increase the appeal to both.` }],
      answer: `A` },

    { id: `m5ib-rw-m1-15`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `<p><em>Light of Truth</em> is a bronze and marble sculpture by artist Richard Hunt. It honors civil rights icon Ida B. Wells. The sculpture _____ in a tree-lined plaza in Chicago, just a few blocks from where Wells lived.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `were standing` }, { id: `B`, text: `have been standing` }, { id: `C`, text: `stands` }, { id: `D`, text: `are standing` }],
      answer: `C` },

    { id: `m5ib-rw-m1-16`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Within Earth’s biomes, there are four main types of desert: arid, semiarid, coastal, and cold. The roughly _____ is classified as an arid desert.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `2,330,000 km<sup>2</sup>, Arabian Desert,` }, { id: `B`, text: `2,330,000 km<sup>2</sup>, Arabian Desert` }, { id: `C`, text: `2,330,000 km<sup>2</sup> Arabian Desert,` }, { id: `D`, text: `2,330,000 km<sup>2</sup> Arabian Desert` }],
      answer: `D` },

    { id: `m5ib-rw-m1-17`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Named for the number of hoofed toes they possess, even-toed ungulates, such as the domestic goat (<em>Capra aegagrus hircus</em>), _____ to a vast and diverse order of animals.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `belongs` }, { id: `B`, text: `has belonged` }, { id: `C`, text: `is belonging` }, { id: `D`, text: `belong` }],
      answer: `D` },

    { id: `m5ib-rw-m1-18`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Included in <em>We Wanted a Revolution!</em>, a 2018 group exhibition at the Albright-Knox Art Gallery in Buffalo, New York, was the work of multimedia artist Lorna Simpson. The impact of Simpson’s work is _____ the horizons of conceptual photographic art, challenging conventional notions of race, gender, history, and memory, and shedding light on the experience of African American women in contemporary society.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `threefold; expanding` }, { id: `B`, text: `threefold expanding` }, { id: `C`, text: `threefold. Expanding` }, { id: `D`, text: `threefold: expanding` }],
      answer: `D` },

    { id: `m5ib-rw-m1-19`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Researchers Tammy Kernodle and Paul Austerlitz have lent their expertise on Black history and music to an important new project: Carnegie Hall’s Timeline of African American Music, a digital resource that, _____ text and music clips, traces the history of specific musical genres (such as funk and swing).</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `integrates` }, { id: `B`, text: `is integrating` }, { id: `C`, text: `integrating` }, { id: `D`, text: `has integrated` }],
      answer: `C` },

    { id: `m5ib-rw-m1-20`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Today, the Michelin Guide is widely known as the arbiter of fine dining, but when it was created in 1900, it was little more than a marketing gimmick; brothers Andre and Edouard Michelin sought to increase profits for their tire company by encouraging their customers to drive across France, visiting the guide’s recommended hotels and restaurants along the way. Nevertheless, the guide soon grew in scope and _____ its modest French eateries were replaced with some of the most esteemed restaurants from around the world, including Quintessence in Tokyo and Gaon in Seoul.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `influence,` }, { id: `B`, text: `influence and` }, { id: `C`, text: `influence, and` }, { id: `D`, text: `influence` }],
      answer: `C` },

    { id: `m5ib-rw-m1-21`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>In their 2022 study of Indo-Pacific bottlenose dolphins (<em>Tursiops aduncus</em>), _____ found that the dolphins’ tendency to rub their heads against corals with antimicrobial properties may confer health benefits.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `German biologist, Gertrud Morlock, and colleagues,` }, { id: `B`, text: `German biologist Gertrud Morlock, and colleagues` }, { id: `C`, text: `German biologist, Gertrud Morlock, and colleagues` }, { id: `D`, text: `German biologist Gertrud Morlock and colleagues` }],
      answer: `D` },

    { id: `m5ib-rw-m1-22`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Just as the state of Texas has a designated state flower, tree, and bird, it also has a state soil: Houston Black soil. Houston Black is a fitting choice for state soil, in large part because it can be found in abundance across the state. _____ it plays an important role in Texas’s agricultural industry and is used to grow a variety of crops, like cotton and sorghum.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `Additionally,` }, { id: `B`, text: `At that time,` }, { id: `C`, text: `By contrast,` }, { id: `D`, text: `Alternatively,` }],
      answer: `A` },

    { id: `m5ib-rw-m1-23`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Generally, sleek vehicles are more aerodynamic than bulkier ones. The streamlined nose of the T-45 Goshawk jet, _____ helps it glide through wind with relative ease, while a boxy pickup truck encounters more wind resistance, making it less aerodynamic.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `meanwhile,` }, { id: `B`, text: `however,` }, { id: `C`, text: `for instance,` }, { id: `D`, text: `additionally,` }],
      answer: `C` },

    { id: `m5ib-rw-m1-24`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Legislators in Antigua are elected via a first-past-the-post electoral system. In this winner-take-all voting system, the seat is awarded to the candidate who receives not a majority but a plurality (i.e., greatest number) of votes. _____ if several popular candidates are vying for the same seat, it is possible for a candidate to win an election despite receiving less than 50% of the votes.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `Moreover,` }, { id: `B`, text: `Similarly,` }, { id: `C`, text: `Accordingly,` }, { id: `D`, text: `However,` }],
      answer: `C` },

    { id: `m5ib-rw-m1-25`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>Asparagus is a vegetable that contains ascorbic acid, an essential nutrient for humans.</li><li>Every 100 grams (g) of asparagus contains 6 milligrams (mg) of ascorbic acid.</li><li>Many animals can make ascorbic acid in their bodies, but humans cannot.</li><li>Humans must get ascorbic acid from foods, including fruits and vegetables.</li><li>Ascorbic acid is also known as vitamin C.</li></ul>`,
      prompt: `The student wants to provide an example of a vegetable that contains vitamin C. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `Humans cannot make ascorbic acid in their bodies, but they can get it from foods, such as vegetables, for example.` }, { id: `B`, text: `Many animals can make ascorbic acid, which is also known as vitamin C, in their bodies, but humans cannot.` }, { id: `C`, text: `Vitamin C, also known as ascorbic acid, can be found in asparagus as well as other vegetables.` }, { id: `D`, text: `Since humans cannot make vitamin C in their bodies, they must get it from food.` }],
      answer: `C` },

    { id: `m5ib-rw-m1-26`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>Hina Hanta is an online archive curated by the Choctaw Nation of Oklahoma.</li><li>Hina Hanta means “bright path” in Choctaw.</li><li>It features images of cultural artifacts relevant to the history of the Choctaw people.</li><li>It includes a shawl (<em>anchi</em> in Choctaw) made from cloth.</li><li>It includes a fanner basket (<em>ufko</em>) made from cane.</li></ul>`,
      prompt: `The student wants to specify the shawl’s name in Choctaw. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `The cloth shawl, which is included in the Hina Hanta online archive, is called an <em>anchi</em> in Choctaw.` }, { id: `B`, text: `Hina Hanta, which means “bright path” in Choctaw, includes a shawl in its archive.` }, { id: `C`, text: `The Hina Hanta archive features cultural artifacts, such as a shawl and a fanner basket, that are relevant to the history of the Choctaw people.` }, { id: `D`, text: `The name of the online archive Hina Hanta means “bright path” in Choctaw.` }],
      answer: `A` },

    { id: `m5ib-rw-m1-27`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>Since 1931, the <em>New York Times</em> (NYT) Best Sellers list has been a measure of the most successful books in the US.</li><li>Kwame Alexander and Diana Ross are Black authors who have reached the NYT Best Sellers list.</li><li><em>The Crossover</em> is a children’s book by Kwame Alexander.</li><li>It reached the NYT Best Sellers list on August 27, 2017.</li><li><em>Secrets of a Sparrow</em> is a memoir by Diana Ross.</li><li>It reached the NYT Best Sellers list on November 21, 1993.</li></ul>`,
      prompt: `Which choice most effectively uses information from the given sentences to emphasize the different years in which the books reached the NYT Best Sellers list?`,
      options: [{ id: `A`, text: `Kwame Alexander and Diana Ross are both NYT best-selling authors.` }, { id: `B`, text: `<em>The Crossover</em> and <em>Secrets of a Sparrow</em> are both books by Black authors that have reached the NYT Best Sellers list.` }, { id: `C`, text: `Kwame Alexander’s <em>The Crossover</em> and Diana Ross’s <em>Secrets of a Sparrow</em> are both NYT best sellers, but the former is a children’s book, whereas the latter is a memoir.` }, { id: `D`, text: `The memoir <em>Secrets of a Sparrow</em> became an NYT best seller in 1993; <em>The Crossover</em>, a children’s book, joined this list as well, but in 2017.` }],
      answer: `D` },
  ];

  const RW_M2 = [
    { id: `m5ib-rw-m2-1`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Excavating a pachycephalosaur fossil is a _____ process, since it can take weeks or even months of hard, physically tiring work to clear away the dirt and rock covering the specimen.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `cheap` }, { id: `B`, text: `rapid` }, { id: `C`, text: `common` }, { id: `D`, text: `difficult` }],
      answer: `D` },

    { id: `m5ib-rw-m2-2`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>British painter Peter Edwards has a _____ painting portraits of notable figures from a variety of different fields. These characteristic works include his esteemed portraits of writer Maud Sulter and soccer player Bobby Charlton.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `complaint about` }, { id: `B`, text: `question about` }, { id: `C`, text: `requirement for` }, { id: `D`, text: `reputation for` }],
      answer: `D` },

    { id: `m5ib-rw-m2-3`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Though it does not guarantee a book’s commercial success, _____ can play a big role in that success—a well-executed marketing campaign helped to make Richard Bachman’s novel <em>The Regulators</em> the fifth-best-selling novel of 1996.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `originality` }, { id: `B`, text: `publicity` }, { id: `C`, text: `complexity` }, { id: `D`, text: `practicality` }],
      answer: `B` },

    { id: `m5ib-rw-m2-4`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>A unique dialect, or regional variety, of Spanish is spoken in Puerto Rico. It contains many words borrowed from the language of the Taínos, the Indigenous people of Puerto Rico. African languages also made important contributions to the Puerto Rican dialect. For example, the way certain vowel sounds are pronounced in it can be _____ to how they are pronounced in Yoruba, a West African language.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `traced` }, { id: `B`, text: `announced` }, { id: `C`, text: `offered` }, { id: `D`, text: `surrendered` }],
      answer: `A` },

    { id: `m5ib-rw-m2-5`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Though most hoaxes perpetrated as jokes by mischievous users of Wikipedia, an online encyclopedia that almost anyone can freely edit, have quickly been detected and removed, a few fictitious entries, such as those for the town of Stone Ridge, Maryland, and the 18th-century forestry magnate Guillermo Garcia, persisted on the site for many years before they were finally recognized as _____ and deleted.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `analyses` }, { id: `B`, text: `fabrications` }, { id: `C`, text: `enhancements` }, { id: `D`, text: `revelations` }],
      answer: `B` },

    { id: `m5ib-rw-m2-6`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Humans aren’t the only ones who use tools. Other animals also find tools helpful. <u>Octopuses use two halves of a seashell to provide protection or a place to hide.</u> And despite sometimes being thought of as simple, many birds make clever use of tools as well. Striated herons have been observed using breadcrumbs and other lures to attract fish to the water’s surface, making it easier for the herons to catch them.</p>`,
      prompt: `Which choice best describes the function of the underlined sentence?`,
      options: [{ id: `A`, text: `It explains that humans use tools for many different tasks.` }, { id: `B`, text: `It argues that octopuses use tools more often than other animals do.` }, { id: `C`, text: `It provides one example of tool use in a nonhuman animal.` }, { id: `D`, text: `It emphasizes that octopuses are smarter than birds.` }],
      answer: `C` },

    { id: `m5ib-rw-m2-7`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `<p>President Richard Nixon is most famous for his participation in the 1970s Watergate political scandal, a convoluted tale of criminality and eroded ethics involving a constellation of associates such as Attorney General Richard Kleindienst and Republican Party official Robert Mardian. <u>But Nixon’s legacy is complex: he has been praised for his role in opening relations between the United States and China, and he once made an attempt at reforming United States health care policy that is arguably a precursor to the Affordable Care Act, which became law during the Barack Obama administration.</u></p>`,
      prompt: `Which choice best describes the function of the underlined sentence in the text as a whole?`,
      options: [{ id: `A`, text: `It compares the achievements of two historical figures.` }, { id: `B`, text: `It offers information suggesting that a particular perception of a historical figure is an oversimplification.` }, { id: `C`, text: `It provides evidence supporting a claim about a historical figure and that figure’s associates.` }, { id: `D`, text: `It explains why a historical figure’s accomplishments are often disregarded by historians.` }],
      answer: `B` },

    { id: `m5ib-rw-m2-8`, domain: `Craft and Structure`, skill: `Cross-Text Connections`, difficulty: `hard`, type: `mcq`,
      passage: `<p><strong>Text 1</strong></p><p>Attempts to automate classification of music into genres have not been very successful. It is also unclear whether categorizing music by genre is useful, since genre categories are ambiguous, subjective, and simplistic. As Jin Ha Lee and Anh Thu Nguyen argue in their study of the South Korean band BTS, relationships between pieces of music may be best understood with concepts other than genre.</p><p><strong>Text 2</strong></p><p>Forró is a genre of music originally from Brazil that shares some harmonic and rhythmic similarities with the bolero genre. Automated genre classification systems typically struggle to draw distinctions in situations like this, but Yandre Costa and colleagues solved that problem by converting sound to images and having computers compare features of those images. Their approach could improve genre classification, which could have many benefits for users.</p>`,
      prompt: `Based on the texts, how would the author of Text 1 most likely respond to the claim about the potential benefits of Costa and colleagues’ research in Text 2?`,
      options: [{ id: `A`, text: `By suggesting that future research may provide substantial advancements in the field of automated genre classification` }, { id: `B`, text: `By asserting that genre classifications may not be the most helpful way to think about music` }, { id: `C`, text: `By arguing that some genres are more easily recognized by classification systems than others` }, { id: `D`, text: `By emphasizing that humans do not necessarily enjoy every recording in a genre they claim to prefer` }],
      answer: `B` },

    { id: `m5ib-rw-m2-9`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Archaeologists have discovered a runestone in Norway that may contain the earliest example of written words in Scandinavia. Carbon dating at the discovery site revealed that the stone was likely carved between 1 and 250 CE. Runologist Kristel Zilmer believes the stone will be helpful in learning more about the use of runic alphabets in early Iron Age Scandinavia.</p>`,
      prompt: `Which choice best states the main topic of the text?`,
      options: [{ id: `A`, text: `A new method for dating rock samples` }, { id: `B`, text: `A runestone found in Norway` }, { id: `C`, text: `The research interests of Kristel Zilmer` }, { id: `D`, text: `Battles of the Iron Age` }],
      answer: `B` },

    { id: `m5ib-rw-m2-10`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `medium`, type: `mcq`,
      passage: `<div style="text-align:center;font-weight:600;font-size:12px;margin:2px 0">Members of the Girl Scouts of America, by Age Category, 1992–1995 (in thousands)</div><table style="border-collapse:collapse;margin:6px auto"><tr><th style="border:1px solid var(--border);padding:3px 12px">Category</th><th style="border:1px solid var(--border);padding:3px 12px">1992</th><th style="border:1px solid var(--border);padding:3px 12px">1993</th><th style="border:1px solid var(--border);padding:3px 12px">1994</th><th style="border:1px solid var(--border);padding:3px 12px">1995</th></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Juniors (8–11 years)</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">870</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">791</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">756</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">727</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Ambassadors (older than 17)</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">863</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">826</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">802</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">784</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Cadettes (11–14 years)</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">188</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">168</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">174</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">172</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Seniors (14–17 years)</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">50</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">43</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">45</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">52</td></tr></table><p>The Girl Scouts of America is a youth organization that had just over 1 million members in 2021. A student is writing an essay on the history of the organization and wishes to determine the number of members from 14 to 17 years old who were in the Girl Scouts in 1995. According to the table, the number (in thousands) is _____</p>`,
      prompt: `Which choice most effectively uses data from the table to complete the statement?`,
      options: [{ id: `A`, text: `185.` }, { id: `B`, text: `727.` }, { id: `C`, text: `45.` }, { id: `D`, text: `52.` }],
      answer: `D` },

    { id: `m5ib-rw-m2-11`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `medium`, type: `mcq`,
      passage: `<p><em>Life Among the Paiutes</em> is an 1882 autobiographical narrative by Sarah Winnemucca Hopkins. In the work, Winnemucca creates suspense by emphasizing her physical response to an event, writing _____</p>`,
      prompt: `Which quotation from <em>Life Among the Paiutes</em> most effectively illustrates the claim?`,
      options: [{ id: `A`, text: `“Oh, how my heart jumped when I heard a noise close by. It was a horse running towards us. We had to lie down close to the ground. It came close to us and stopped. Oh, how my heart beat! I thought whoever it was would hear my heart beat.”` }, { id: `B`, text: `“Oh, how happy everybody was! One could hear laughter everywhere, and songs were sung by happy women and children.”` }, { id: `C`, text: `“Late in that fall, there came news that my grandfather was on his way home. Then my father took a great many of his men and went to meet his father, and there came back a runner, saying, that all our people must come together.”` }, { id: `D`, text: `“That same fall, after my grandfather came home, he told my father to take charge of his people and hold the tribe, as he was going back to California with as many of his people as he could get to go with him.”` }],
      answer: `A` },

    { id: `m5ib-rw-m2-12`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `<p>A student is writing an essay on the subject of cultured meat, which is grown in a laboratory and is intended to help reduce the number of livestock harvested for food. The student wishes to make the case that people have mixed feelings about cultured meat that may be a barrier to its worldwide adoption.</p>`,
      prompt: `Which quotation from a publication by a researcher would most effectively support the student’s claim?`,
      options: [{ id: `A`, text: `“Many consumers who were surveyed believed that cultured meat would be good for the environment if widely available, but few of those same consumers were willing to try eating cultured meat themselves.”` }, { id: `B`, text: `“Consumers tend to believe that using less packaging when selling meat products in stores would have a significant effect on the environment.”` }, { id: `C`, text: `“Advocates of lab-grown meat claim that it’s safer than conventional meat because the means of its production can be tightly controlled.”` }, { id: `D`, text: `“The flavor of meat from livestock differs across species (from pig to chicken to cow), and is also influenced by farming conditions and the breeds and genders of animals.”` }],
      answer: `A` },

    { id: `m5ib-rw-m2-13`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Evan MacLean and colleagues evaluated behavioral and genetic data from over 14,000 dogs, representing more than 100 breeds, and found that certain similarities in behavior between breeds correspond to genetic similarities between those breeds, suggesting a genetic basis for breed differences in behavior. This was the case for both dog rivalry and energy but was especially pronounced for chasing, which can be seen when a dog pursues small animals like birds or squirrels. A different study found that the French bulldog and the bullmastiff breeds exhibit similar chasing behavior, suggesting that _____</p>`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `their similarities with respect to that behavior could result from a shared aspect of their genetics.` }, { id: `B`, text: `individual French bulldogs likely display higher levels of chasing than individual bullmastiffs.` }, { id: `C`, text: `French bulldogs and bullmastiffs show a greater tendency toward chasing than most other dog breeds do.` }, { id: `D`, text: `the two breeds will likely become less genetically similar over time.` }],
      answer: `A` },

    { id: `m5ib-rw-m2-14`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Buried collections of Bronze Age metal items (called hoards) have been found all over Britain. For hoards discovered since the 1960s, such as the 1965 discovery of the Walderslade hoard, advancements like inexpensive metal detectors, ground-penetrating radar, and aerial surveys have made it much easier for searchers to locate hoards before putting the first shovel in the ground. Hoards found before the 1960s, however, such as the discovery of the Auchnacree hoard around 1921, were not aided by such technologies and thus were much more likely to _____</p>`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `include gold jewelry.` }, { id: `B`, text: `result from artifacts being unearthed accidentally.` }, { id: `C`, text: `include rare items from the 10th century BCE.` }, { id: `D`, text: `occur before the ground was disturbed.` }],
      answer: `B` },

    { id: `m5ib-rw-m2-15`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `<p>The state of Wisconsin has classified the walnut twig beetle as an invasive species that could harm some of the state’s native species. But researchers Alejandro Camacho and Jason McLachlan have pointed out that “invasive” and “native” are labels that describe temporary circumstances. Changes in Earth’s climate may force animals from their current ranges. Climate changes may also create good habitats in areas where a species couldn’t live previously. In the case of Wisconsin, these observations suggest that _____</p>`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `the state was previously home to some walnut twig beetles but they were outcompeted by invading species.` }, { id: `B`, text: `it’s useful at present for the state to distinguish between invasive and native species in some instances but not in the case of the walnut twig beetle.` }, { id: `C`, text: `even if Earth’s climate doesn’t change in the way scientists predict, the walnut twig beetle will likely establish itself in the state.` }, { id: `D`, text: `the state’s designation of the walnut twig beetle as invasive may be appropriate now but not in the future.` }],
      answer: `D` },

    { id: `m5ib-rw-m2-16`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `<p>In May of 1986, the Philippines liberalized its stock market, meaning that it began allowing foreign individuals and businesses to invest money in Filipino companies. This was part of a wave of stock market liberalizations around the world—Malaysia in 1987, Morocco in 1988, and so on. The standard view among economists at the time was that liberalization would make it easier for companies to raise money from investors. Economist Peter Blair Henry examined the economies of 11 countries that were part of the liberalization wave and found that, on average, companies based in those countries received significant increases in investment in the three years following liberalization, suggesting that _____</p>`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `companies in Malaysia experienced a greater increase in investment following liberalization than did companies in the Philippines.` }, { id: `B`, text: `economists who held the standard view of liberalization failed to anticipate some serious negative effects of liberalization.` }, { id: `C`, text: `companies did not benefit from liberalization until at least three years after liberalization occurred.` }, { id: `D`, text: `empirical evidence was consistent with the scholarly consensus about the consequences of liberalization.` }],
      answer: `D` },

    { id: `m5ib-rw-m2-17`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Bounce and Tubarao are the unofficial names of two small yet notable rocks found on Mars by the <em>Opportunity</em> rover. After touching down on January 25, 2004, the rover spent over fourteen years _____ data while on the red planet.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `is collecting` }, { id: `B`, text: `collecting` }, { id: `C`, text: `were collecting` }, { id: `D`, text: `collected` }],
      answer: `B` },

    { id: `m5ib-rw-m2-18`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Pomo artist Susan Billy creates elaborate baskets. She typically _____ them from willow and sedge.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `weaving` }, { id: `B`, text: `weaves` }, { id: `C`, text: `to weave` }, { id: `D`, text: `to be weaving` }],
      answer: `B` },

    { id: `m5ib-rw-m2-19`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The algaita is a double reed wind instrument from West Africa. The reed of a wind instrument is the mouthpiece _____ A double reed contains two pieces of cane that vibrate and produce sound as air passes between them.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `where is sound made.` }, { id: `B`, text: `where sound is made?` }, { id: `C`, text: `where sound is made.` }, { id: `D`, text: `where is sound made?` }],
      answer: `C` },

    { id: `m5ib-rw-m2-20`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>From 2009 to 2019, travelers flew out of major urban airports with increasing _____ Washington Dulles International Airport in Washington, DC, saw a 6.9 percent increase in airline passengers, from 11,122,438 total passengers in 2009 to 11,892,778 in 2019.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `frequency, for example,` }, { id: `B`, text: `frequency, for example;` }, { id: `C`, text: `frequency, for example.` }, { id: `D`, text: `frequency. For example,` }],
      answer: `D` },

    { id: `m5ib-rw-m2-21`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>In a 2023 study, researchers documented a fascinating behavior in the aquatic plant <em>Elodea densa</em>. When exposed to low levels of light, the plant’s _____ the cellular organs that generate energy from light—reshuffled to form a tightly packed, glass-like surface ideal for collecting more light.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `chloroplasts,` }, { id: `B`, text: `chloroplasts—` }, { id: `C`, text: `chloroplasts` }, { id: `D`, text: `chloroplasts;` }],
      answer: `B` },

    { id: `m5ib-rw-m2-22`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Textile artist Amber Joy Greenidge-Sabral wanted to avoid using harsh synthetic dyes that could be damaging to the environment. _____ she began experimenting with more environmentally friendly natural dye methods, using organic materials like prairie parsley and weld herb for their natural red and yellow colors.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `With this in mind,` }, { id: `B`, text: `To sum up,` }, { id: `C`, text: `Nevertheless,` }, { id: `D`, text: `In actuality,` }],
      answer: `A` },

    { id: `m5ib-rw-m2-23`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Within a given ecosystem, energy tends to transfer across what ecologists, such as Michelle Evans-White, call trophic levels. _____ primary producers, like plants, at the first trophic level provide energy (i.e., food) for herbivores, like deer, at the second level; those at the second level provide energy for carnivores and omnivores, like coyotes, at the third; and so on, up the food chain.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `By contrast,` }, { id: `B`, text: `Likewise,` }, { id: `C`, text: `However,` }, { id: `D`, text: `For example,` }],
      answer: `D` },

    { id: `m5ib-rw-m2-24`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Residents of Brasília, Brazil, rely on its rapid transit system, the Brasília Metro, for millions of trips each year. _____ city officials strive to maintain the system’s 25 stations to ensure each of these journeys is as smooth as possible.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `For example,` }, { id: `B`, text: `Accordingly,` }, { id: `C`, text: `However,` }, { id: `D`, text: `Alternatively,` }],
      answer: `B` },

    { id: `m5ib-rw-m2-25`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>The Great Salt Lake is one of the world’s saltiest bodies of water.</li><li>The lake is located in Utah.</li><li>The northern portion of the lake has a higher concentration of salt than the southern portion.</li><li>Crustaceans called <em>Artemia franciscana</em> live in the southern portion.</li><li>Bacteria called <em>Nodularia</em> live in the southern portion.</li></ul>`,
      prompt: `The student wants to emphasize a similarity between <em>Artemia franciscana</em> and <em>Nodularia</em>. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `Crustaceans called <em>Artemia franciscana</em> and bacteria called <em>Nodularia</em> both live in the southern portion of the Great Salt Lake.` }, { id: `B`, text: `Bacteria called <em>Nodularia</em> live in the Great Salt Lake, which is located in Utah.` }, { id: `C`, text: `The Great Salt Lake in Utah is one of the saltiest bodies of water in the world.` }, { id: `D`, text: `<em>Artemia franciscana</em>, a type of crustacean, lives in the Great Salt Lake.` }],
      answer: `A` },

    { id: `m5ib-rw-m2-26`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>The international Slow Food movement was founded in 1989 with the signing of the “Slow Food Manifesto.”</li><li>The movement promotes universal access to healthy, high-quality food.</li><li>It calls for sustainable food production practices that protect local environments, ecosystems, and biodiversity.</li><li>It advocates for fair treatment of and compensation for food production workers.</li><li>The Slow Food USA organization was founded in 2000.</li></ul>`,
      prompt: `The student wants to introduce the Slow Food movement to a new audience. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `The international Slow Food movement, founded in 1989, promotes universal access to healthy, high-quality food that is produced sustainably by workers who are treated and compensated fairly.` }, { id: `B`, text: `The Slow Food movement advocates for food production workers.` }, { id: `C`, text: `The signing of the “Slow Food Manifesto” in 1989 marked the founding of the international Slow Food movement, while the Slow Food USA organization was founded in 2000.` }, { id: `D`, text: `Goals of the movement include universal access to healthy, high-quality food and sustainable food practices.` }],
      answer: `A` },

    { id: `m5ib-rw-m2-27`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>The poem “7 haiku (for St. Augustine)” is by African American writer Sonia Sanchez.</li><li>It was published in her 2010 poetry book entitled <em>Morning Haiku</em>.</li><li>The poem is written as a sequence of seven haiku.</li><li>According to the book’s publisher, Penguin Random House (PRH), the book “celebrates the gifts of life and mourns the deaths of revered African American figures.”</li><li>According to Sanchez, she chose to write in the form of haiku because it helps “maintain memory and dignity.”</li></ul>`,
      prompt: `The student wants to describe the format of “7 haiku (for St. Augustine).” Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `Sanchez chose the form used in the poem “7 haiku (for St. Augustine)” because it helps “maintain memory and dignity.”` }, { id: `B`, text: `The poem “7 haiku (for St. Augustine)” was published in the 2010 book <em>Morning Haiku</em>, which “celebrates the gifts of life and mourns the deaths of revered African American figures.”` }, { id: `C`, text: `The poems in <em>Morning Haiku</em> (2010) are each written as a sequence of haiku.` }, { id: `D`, text: `The poem “7 haiku (for St. Augustine)” is written as a sequence of seven haiku.` }],
      answer: `D` },
  ];

  const MATH_M1 = [
    { id: `m5ib-math-m1-1`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `easy`, type: `grid`,
      prompt: `<div style='text-align:center;margin-bottom:6px'>13x = 42 − x</div><div>What value of <em>x</em> is the solution to the given equation?</div>`,
      answer: [`3`] },

    { id: `m5ib-math-m1-2`, domain: `Algebra`, skill: `Linear inequalities in one or two variables`, difficulty: `easy`, type: `mcq`,
      prompt: `<div>An arborist measured and recorded the heights of red maple trees in a certain area. Of the red maple tree heights recorded in this area, the minimum was 42 feet and the maximum was 57 feet. Which inequality is true for all possible values of <em>t</em>, where <em>t</em> represents the recorded height, in feet, of a red maple tree in this area?</div>`,
      options: [{ id: `A`, text: `t ≤ 42` }, { id: `B`, text: `t ≥ 57` }, { id: `C`, text: `t ≥ 99` }, { id: `D`, text: `42 ≤ t ≤ 57` }],
      answer: `D` },

    { id: `m5ib-math-m1-3`, domain: `Algebra`, skill: `Linear functions`, difficulty: `easy`, type: `mcq`,
      prompt: `<div>Javier deposits $45 in a savings account at the end of each week. At the beginning of the 1st week of a year there was $700 in that savings account. How much money, in dollars, will be in the account at the end of the 6th week of the year?</div>`,
      options: [{ id: `A`, text: `430` }, { id: `B`, text: `745` }, { id: `C`, text: `751` }, { id: `D`, text: `970` }],
      answer: `D` },

    { id: `m5ib-math-m1-4`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `easy`, type: `grid`,
      prompt: `<div>The <em>y</em>-intercept of the graph of y = 2x<sup>2</sup> + 27 is (0, y). What is the value of <em>y</em>?</div>`,
      answer: [`27`] },

    { id: `m5ib-math-m1-5`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<svg viewBox="0 0 300 250" role="img" aria-label="curve" style="max-width:340px;width:100%;display:block;margin:6px auto"><clipPath id="cp41000"><rect x="26.0" y="26.0" width="248.0" height="198.0"/></clipPath><line x1="26.0" y1="224.0" x2="26.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="50.8" y1="224.0" x2="50.8" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="75.6" y1="224.0" x2="75.6" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="100.4" y1="224.0" x2="100.4" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="125.2" y1="224.0" x2="125.2" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="150.0" y1="224.0" x2="150.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="174.8" y1="224.0" x2="174.8" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="199.6" y1="224.0" x2="199.6" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="224.4" y1="224.0" x2="224.4" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="249.2" y1="224.0" x2="249.2" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="274.0" y1="224.0" x2="274.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="224.0" x2="274.0" y2="224.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="195.7" x2="274.0" y2="195.7" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="167.4" x2="274.0" y2="167.4" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="139.1" x2="274.0" y2="139.1" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="110.9" x2="274.0" y2="110.9" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="82.6" x2="274.0" y2="82.6" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="54.3" x2="274.0" y2="54.3" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="26.0" x2="274.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="224.0" x2="274.0" y2="224.0" stroke="currentColor" stroke-width="1.4"/><line x1="26.0" y1="224.0" x2="26.0" y2="26.0" stroke="currentColor" stroke-width="1.4"/><text x="75.6" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">1</text><text x="125.2" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">2</text><text x="174.8" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">3</text><text x="224.4" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">4</text><text x="274.0" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">5</text><text x="22.0" y="198.7" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">2</text><text x="22.0" y="170.4" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">4</text><text x="22.0" y="142.1" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">6</text><text x="22.0" y="113.9" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">8</text><text x="22.0" y="85.6" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">10</text><text x="22.0" y="57.3" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">12</text><text x="22.0" y="29.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">14</text><g clip-path="url(#cp41000)"><polyline points="26.0,181.6 50.8,177.3 75.6,173.1 100.4,168.1 125.2,163.2 150.0,157.5 174.8,150.5 199.6,143.4 224.4,134.9 249.2,126.4 274.0,117.9" fill="none" stroke="currentColor" stroke-width="2"/></g></svg><div>In 2000, a census was taken to determine the population of a certain town. The graph gives the estimated population <em>y</em>, in thousands, of this town <em>x</em> years after the 2000 census was taken, where 0 ≤ x ≤ 5. Based on the graph, which of the following is the closest to the estimated population 2 years after the 2000 census was taken?</div>`,
      options: [{ id: `A`, text: `7,400` }, { id: `B`, text: `6,200` }, { id: `C`, text: `4,300` }, { id: `D`, text: `3,000` }],
      answer: `C` },

    { id: `m5ib-math-m1-6`, domain: `Algebra`, skill: `Linear functions`, difficulty: `easy`, type: `mcq`,
      prompt: `<div style='text-align:center;margin-bottom:6px'>f(x) = 5x + b</div><div>For the linear function <em>f</em>, <em>b</em> is a constant and f(7) = 35. What is the value of <em>b</em>?</div>`,
      options: [{ id: `A`, text: `0` }, { id: `B`, text: `1` }, { id: `C`, text: `5` }, { id: `D`, text: `7` }],
      answer: `A` },

    { id: `m5ib-math-m1-7`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `easy`, type: `mcq`,
      prompt: `<div>The function <em>h</em> is defined by h(x) = 5|x|. What is the value of h(−3)?</div>`,
      options: [{ id: `A`, text: `−15` }, { id: `B`, text: `2` }, { id: `C`, text: `8` }, { id: `D`, text: `15` }],
      answer: `D` },

    { id: `m5ib-math-m1-8`, domain: `Problem-Solving and Data Analysis`, skill: `One-variable data: distributions and measures of center and spread`, difficulty: `medium`, type: `mcq`,
      prompt: `<table style="border-collapse:collapse;margin:6px auto"><tr><th style="border:1px solid var(--border);padding:3px 12px">Value</th><th style="border:1px solid var(--border);padding:3px 12px">Frequency</th></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">13</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">8</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">20</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">1</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">27</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">8</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">34</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">6</td></tr></table><div>The table shows the frequency of values in a data set. What is the minimum value of the data set?</div>`,
      options: [{ id: `A`, text: `1` }, { id: `B`, text: `8` }, { id: `C`, text: `13` }, { id: `D`, text: `20` }],
      answer: `C` },

    { id: `m5ib-math-m1-9`, domain: `Problem-Solving and Data Analysis`, skill: `One-variable data: distributions and measures of center and spread`, difficulty: `easy`, type: `grid`,
      prompt: `<div>The list gives the mass, in grams, of 5 ruffed lemurs.</div><div style='text-align:center;margin:6px 0'>3,910; 3,910; 3,130; 3,950; 3,150</div><div>What is the mean mass, in grams, of these 5 ruffed lemurs?</div>`,
      answer: [`3610`] },

    { id: `m5ib-math-m1-10`, domain: `Advanced Math`, skill: `Nonlinear equations in one variable and systems of equations in two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `<div style='text-align:center;margin-bottom:2px'>y = 5(x − 3)</div><div style='text-align:center;margin-bottom:6px'>y = (x − 3)<sup>2</sup></div><div>Which ordered pair (x, y) is a solution to the given system of equations?</div>`,
      options: [{ id: `A`, text: `(8, −5)` }, { id: `B`, text: `(8, 25)` }, { id: `C`, text: `(3, 8)` }, { id: `D`, text: `(2, −5)` }],
      answer: `B` },

    { id: `m5ib-math-m1-11`, domain: `Algebra`, skill: `Linear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>Scientists collected fallen acorns that each housed a colony of the ant species <em>P. ohioensis</em> and analyzed each colony’s structure. For any of these colonies, if the colony has <em>x</em> worker ants, the equation y = 0.67x + 2.6, where 20 ≤ x ≤ 110, gives the predicted number of larvae, <em>y</em>, in the colony. If one of these colonies has 46 worker ants, which of the following is closest to the predicted number of larvae in the colony?</div>`,
      options: [{ id: `A`, text: `33` }, { id: `B`, text: `49` }, { id: `C`, text: `65` }, { id: `D`, text: `150` }],
      answer: `A` },

    { id: `m5ib-math-m1-12`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>Liam has $150 in an account. Each year he expects to have 2.8% more money in the account than he had the previous year. Which of the following models best describes how Liam expects the money in his account to change over time?</div>`,
      options: [{ id: `A`, text: `Decreasing exponential` }, { id: `B`, text: `Decreasing linear` }, { id: `C`, text: `Increasing exponential` }, { id: `D`, text: `Increasing linear` }],
      answer: `C` },

    { id: `m5ib-math-m1-13`, domain: `Algebra`, skill: `Systems of two linear equations in two variables`, difficulty: `medium`, type: `grid`,
      prompt: `<div style='text-align:center;margin-bottom:2px'>9x + 5y = 19</div><div style='text-align:center;margin-bottom:6px'>−9x − 3y = 7</div><div>The solution to the given system of equations is (x, y). What is the value of 2y?</div>`,
      answer: [`26`] },

    { id: `m5ib-math-m1-14`, domain: `Algebra`, skill: `Linear equations in two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>Line <em>k</em> is defined by y = 6x + <sup>1</sup>⁄<sub>9</sub>. Line <em>j</em> is perpendicular to line <em>k</em> in the <em>xy</em>-plane. What is the slope of line <em>j</em>?</div>`,
      options: [{ id: `A`, text: `−9` }, { id: `B`, text: `−<sup>1</sup>⁄<sub>6</sub>` }, { id: `C`, text: `<sup>1</sup>⁄<sub>9</sub>` }, { id: `D`, text: `6` }],
      answer: `B` },

    { id: `m5ib-math-m1-15`, domain: `Advanced Math`, skill: `Nonlinear equations in one variable and systems of equations in two variables`, difficulty: `medium`, type: `grid`,
      prompt: `<div>The product of a positive number <em>x</em> and the number that is 7 less than <em>x</em> is equal to 228. What is the value of <em>x</em>?</div>`,
      answer: [`19`] },

    { id: `m5ib-math-m1-16`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `medium`, type: `grid`,
      prompt: `<div>Raheem bought 9 shirts that were each the same price. He used a coupon for $54 off the entire purchase. The cost for the entire purchase after using the coupon was $108. What was the original price, in dollars, for 1 shirt?</div>`,
      answer: [`18`] },

    { id: `m5ib-math-m1-17`, domain: `Advanced Math`, skill: `Nonlinear equations in one variable and systems of equations in two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `<div style='text-align:center;margin-bottom:6px'>7|x − 7| = 42</div><div>What is the sum of the solutions to the given equation?</div>`,
      options: [{ id: `A`, text: `−6` }, { id: `B`, text: `0` }, { id: `C`, text: `14` }, { id: `D`, text: `49` }],
      answer: `C` },

    { id: `m5ib-math-m1-18`, domain: `Geometry and Trigonometry`, skill: `Lines, angles, and triangles`, difficulty: `hard`, type: `grid`,
      prompt: `<svg viewBox="0 0 280 185" role="img" aria-label="figure" style="max-width:280px;width:100%;display:block;margin:6px auto"><line x1='30' y1='160' x2='255' y2='160' stroke='currentColor' stroke-width='1.5'/><line x1='30' y1='160' x2='250' y2='35' stroke='currentColor' stroke-width='1.5'/><line x1='250' y1='35' x2='150' y2='160' stroke='currentColor' stroke-width='1.5'/><line x1='255' y1='160' x2='129' y2='104' stroke='currentColor' stroke-width='1.5'/><text x='14' y='166' font-size='13' font-style='italic' fill='currentColor'>U</text><text x='146' y='177' font-size='13' font-style='italic' fill='currentColor'>V</text><text x='259' y='167' font-size='13' font-style='italic' fill='currentColor'>R</text><text x='256' y='33' font-size='13' font-style='italic' fill='currentColor'>S</text><text x='108' y='100' font-size='13' font-style='italic' fill='currentColor'>T</text><text x='126' y='123' font-size='12' fill='currentColor'>x°</text></svg><div class="tiny faint" style="text-align:center;margin:2px 0 8px">Figure not drawn to scale.</div><div>In the figure, RT = TU, the measure of angle VST is 23°, and the measure of angle RVS is 34°. What is the value of <em>x</em>?</div>`,
      answer: [`158`] },

    { id: `m5ib-math-m1-19`, domain: `Geometry and Trigonometry`, skill: `Area and volume`, difficulty: `hard`, type: `mcq`,
      prompt: `<div>A cube has an edge length of 82 inches. A solid sphere with a radius of 41 inches is inside the cube, such that the sphere touches the center of each face of the cube. To the nearest cubic inch, what is the volume of the space in the cube <u>not</u> taken up by the sphere?</div>`,
      options: [{ id: `A`, text: `262,672` }, { id: `B`, text: `288,532` }, { id: `C`, text: `334,846` }, { id: `D`, text: `546,087` }],
      answer: `A` },

    { id: `m5ib-math-m1-20`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `hard`, type: `mcq`,
      prompt: `<div>The function <em>h</em> is defined by h(x) = a<sup>x</sup> + b, where <em>a</em> and <em>b</em> are positive constants. The graph of y = h(x) in the <em>xy</em>-plane passes through the points (0, 8) and (2, 32). What is the value of <em>ab</em>?</div>`,
      options: [{ id: `A`, text: `32` }, { id: `B`, text: `35` }, { id: `C`, text: `40` }, { id: `D`, text: `64` }],
      answer: `B` },

    { id: `m5ib-math-m1-21`, domain: `Advanced Math`, skill: `Equivalent expressions`, difficulty: `hard`, type: `mcq`,
      prompt: `<div style='text-align:center;margin-bottom:6px'>f(x) = k(1.84)<sup>x</sup></div><div>The function <em>f</em> is defined by the given equation, where <em>k</em> is a constant. The value of f(x) increases by <em>p</em>% for every increase of <em>x</em> by 1. For which of the following functions, where <em>k</em> is a constant, does the value of g(x) increase by <em>p</em>% for every increase of <em>x</em> by 4?</div>`,
      options: [{ id: `A`, text: `g(x) = k(1.84<sup>x</sup>)<sup>1/4</sup>` }, { id: `B`, text: `g(x) = k(1.84<sup>x</sup>)<sup>4</sup>` }, { id: `C`, text: `g(x) = k(1.84)<sup>x−4</sup>` }, { id: `D`, text: `g(x) = k(1.84)<sup>x+4</sup>` }],
      answer: `A` },

    { id: `m5ib-math-m1-22`, domain: `Advanced Math`, skill: `Nonlinear equations in one variable and systems of equations in two variables`, difficulty: `hard`, type: `mcq`,
      prompt: `<div style='text-align:center;margin-bottom:6px'>f(x) = √(5x + 6)</div><div>The function <em>f</em> is defined by the given equation. If f(a) = −5a, where <em>a</em> is a constant, what is the value of <em>a</em>?</div>`,
      options: [{ id: `A`, text: `<sup>3</sup>⁄<sub>5</sub>` }, { id: `B`, text: `<sup>2</sup>⁄<sub>5</sub>` }, { id: `C`, text: `−<sup>2</sup>⁄<sub>5</sub>` }, { id: `D`, text: `−<sup>3</sup>⁄<sub>5</sub>` }],
      answer: `C` },
  ];

  const MATH_M2 = [
    { id: `m5ib-math-m2-1`, domain: `Problem-Solving and Data Analysis`, skill: `Probability and conditional probability`, difficulty: `easy`, type: `mcq`,
      prompt: `<div>A choir of 48 singers has 12 members who sing bass. If one singer from the choir is selected at random, what is the probability of selecting a singer who sings bass?</div>`,
      options: [{ id: `A`, text: `<sup>1</sup>⁄<sub>48</sub>` }, { id: `B`, text: `<sup>12</sup>⁄<sub>48</sub>` }, { id: `C`, text: `<sup>36</sup>⁄<sub>48</sub>` }, { id: `D`, text: `<sup>48</sup>⁄<sub>48</sub>` }],
      answer: `B` },

    { id: `m5ib-math-m2-2`, domain: `Problem-Solving and Data Analysis`, skill: `One-variable data: distributions and measures of center and spread`, difficulty: `easy`, type: `grid`,
      prompt: `<svg viewBox="0 0 365 120" role="img" aria-label="figure" style="max-width:340px;width:100%;display:block;margin:6px auto"><line x1='64.2' y1='40' x2='330.0' y2='40' stroke='currentColor' stroke-width='1.4'/><line x1='64.2' y1='31' x2='64.2' y2='49' stroke='currentColor' stroke-width='1.4'/><line x1='330.0' y1='31' x2='330.0' y2='49' stroke='currentColor' stroke-width='1.4'/><rect x='136.7' y='28' width='120.8' height='24' fill='none' stroke='currentColor' stroke-width='1.4'/><line x1='185.0' y1='28' x2='185.0' y2='52' stroke='currentColor' stroke-width='1.4'/><line x1='40.0' y1='78' x2='330.0' y2='78' stroke='currentColor' stroke-width='1'/><line x1='40.0' y1='72' x2='40.0' y2='84' stroke='currentColor' stroke-width='0.8'/><line x1='64.2' y1='75' x2='64.2' y2='81' stroke='currentColor' stroke-width='0.8'/><line x1='88.3' y1='72' x2='88.3' y2='84' stroke='currentColor' stroke-width='0.8'/><line x1='112.5' y1='75' x2='112.5' y2='81' stroke='currentColor' stroke-width='0.8'/><line x1='136.7' y1='72' x2='136.7' y2='84' stroke='currentColor' stroke-width='0.8'/><line x1='160.8' y1='75' x2='160.8' y2='81' stroke='currentColor' stroke-width='0.8'/><line x1='185.0' y1='72' x2='185.0' y2='84' stroke='currentColor' stroke-width='0.8'/><line x1='209.2' y1='75' x2='209.2' y2='81' stroke='currentColor' stroke-width='0.8'/><line x1='233.3' y1='72' x2='233.3' y2='84' stroke='currentColor' stroke-width='0.8'/><line x1='257.5' y1='75' x2='257.5' y2='81' stroke='currentColor' stroke-width='0.8'/><line x1='281.7' y1='72' x2='281.7' y2='84' stroke='currentColor' stroke-width='0.8'/><line x1='305.8' y1='75' x2='305.8' y2='81' stroke='currentColor' stroke-width='0.8'/><line x1='330.0' y1='72' x2='330.0' y2='84' stroke='currentColor' stroke-width='0.8'/><text x='40.0' y='96' font-size='10' fill='currentColor' text-anchor='middle'>80</text><text x='88.3' y='96' font-size='10' fill='currentColor' text-anchor='middle'>90</text><text x='136.7' y='96' font-size='10' fill='currentColor' text-anchor='middle'>100</text><text x='185.0' y='96' font-size='10' fill='currentColor' text-anchor='middle'>110</text><text x='233.3' y='96' font-size='10' fill='currentColor' text-anchor='middle'>120</text><text x='281.7' y='96' font-size='10' fill='currentColor' text-anchor='middle'>130</text><text x='330.0' y='96' font-size='10' fill='currentColor' text-anchor='middle'>140</text><text x='185' y='112' font-size='11' fill='currentColor' text-anchor='middle'>Number of units sold per day</text></svg><div>A store owner recorded the number of units of a certain product that were sold per day for 28 days. What is the minimum number of units of this product sold per day for these 28 days?</div>`,
      answer: [`85`] },

    { id: `m5ib-math-m2-3`, domain: `Algebra`, skill: `Linear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<div style='text-align:center;margin-bottom:6px'>T(x) = 61 − 8x</div><div>The function <em>T</em> estimates the temperature, in degrees Fahrenheit (°F), in a certain city one day in January, where <em>x</em> is the number of hours after 10 a.m. and 1 ≤ x ≤ 7. Which statement is the best interpretation of T(5) = 21 in this context?</div>`,
      options: [{ id: `A`, text: `5 hours after 10 a.m., the function estimates that the temperature is 21°F.` }, { id: `B`, text: `5 hours before 10 a.m., the function estimates that the temperature decreased 21°F.` }, { id: `C`, text: `5 hours after 10 a.m., the function estimates that the temperature decreased 21°F.` }, { id: `D`, text: `5 hours before 10 a.m., the function estimates that the temperature is 21°F.` }],
      answer: `A` },

    { id: `m5ib-math-m2-4`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>The graph of the function <em>f</em> in the <em>xy</em>-plane, where y = f(x), has <em>x</em>-intercepts of (−5, 0), (3, 0), and (6, 0). Which of the following must be true?</div>`,
      options: [{ id: `A`, text: `f(0) = −5` }, { id: `B`, text: `f(0) = 3` }, { id: `C`, text: `f(5) = 0` }, { id: `D`, text: `f(6) = 0` }],
      answer: `D` },

    { id: `m5ib-math-m2-5`, domain: `Algebra`, skill: `Linear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>If f(x) = x + 2 and g(x) = 2x, what is the value of 3f(−5) − g(−5)?</div>`,
      options: [{ id: `A`, text: `−19` }, { id: `B`, text: `−3` }, { id: `C`, text: `1` }, { id: `D`, text: `7` }],
      answer: `C` },

    { id: `m5ib-math-m2-6`, domain: `Algebra`, skill: `Linear equations in two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>A botanist wants to plant certain types of oak trees and pine trees in a 600-foot-long row. Each of these oak trees requires 40 feet of space to grow, and each of these pine trees requires 30 feet of space to grow. The equation 40x + 30y = 600 models the possible number of oak trees, <em>x</em>, and pine trees, <em>y</em>, that the botanist can plant. Which graph represents this relationship? <span class='tiny faint'>(For each graph, the horizontal axis is the number of oak trees and the vertical axis is the number of pine trees.)</span></div>`,
      options: [{ id: `A`, text: `<svg viewBox='0 0 150 140' style='width:150px;height:140px;display:block;margin:2px auto'><line x1='40.0' y1='110.0' x2='40.0' y2='14.0' stroke='currentColor' stroke-width='0.4' opacity='0.25'/><line x1='26.0' y1='98.0' x2='138.0' y2='98.0' stroke='currentColor' stroke-width='0.4' opacity='0.25'/><line x1='54.0' y1='110.0' x2='54.0' y2='14.0' stroke='currentColor' stroke-width='0.4' opacity='0.25'/><line x1='26.0' y1='86.0' x2='138.0' y2='86.0' stroke='currentColor' stroke-width='0.4' opacity='0.25'/><line x1='68.0' y1='110.0' x2='68.0' y2='14.0' stroke='currentColor' stroke-width='0.4' opacity='0.25'/><line x1='26.0' y1='74.0' x2='138.0' y2='74.0' stroke='currentColor' stroke-width='0.4' opacity='0.25'/><line x1='82.0' y1='110.0' x2='82.0' y2='14.0' stroke='currentColor' stroke-width='0.4' opacity='0.25'/><line x1='26.0' y1='62.0' x2='138.0' y2='62.0' stroke='currentColor' stroke-width='0.4' opacity='0.25'/><line x1='96.0' y1='110.0' x2='96.0' y2='14.0' stroke='currentColor' stroke-width='0.4' opacity='0.25'/><line x1='26.0' y1='50.0' x2='138.0' y2='50.0' stroke='currentColor' stroke-width='0.4' opacity='0.25'/><line x1='110.0' y1='110.0' x2='110.0' y2='14.0' stroke='currentColor' stroke-width='0.4' opacity='0.25'/><line x1='26.0' y1='38.0' x2='138.0' y2='38.0' stroke='currentColor' stroke-width='0.4' opacity='0.25'/><line x1='124.0' y1='110.0' x2='124.0' y2='14.0' stroke='currentColor' stroke-width='0.4' opacity='0.25'/><line x1='26.0' y1='26.0' x2='138.0' y2='26.0' stroke='currentColor' stroke-width='0.4' opacity='0.25'/><line x1='26.0' y1='110.0' x2='138.0' y2='110.0' stroke='currentColor' stroke-width='1.2'/><line x1='26.0' y1='110.0' x2='26.0' y2='14.0' stroke='currentColor' stroke-width='1.2'/><text x='54.0' y='120.0' font-size='8' fill='currentColor' text-anchor='middle'>10</text><text x='82.0' y='120.0' font-size='8' fill='currentColor' text-anchor='middle'>20</text><text x='110.0' y='120.0' font-size='8' fill='currentColor' text-anchor='middle'>30</text><text x='138.0' y='120.0' font-size='8' fill='currentColor' text-anchor='middle'>40</text><text x='23.0' y='89.0' font-size='8' fill='currentColor' text-anchor='end'>10</text><text x='23.0' y='65.0' font-size='8' fill='currentColor' text-anchor='end'>20</text><text x='23.0' y='41.0' font-size='8' fill='currentColor' text-anchor='end'>30</text><text x='23.0' y='17.0' font-size='8' fill='currentColor' text-anchor='end'>40</text><polyline points='26.0,74.0 82.0,110.0' fill='none' stroke='currentColor' stroke-width='1.8'/></svg>` }, { id: `B`, text: `<svg viewBox='0 0 150 140' style='width:150px;height:140px;display:block;margin:2px auto'><line x1='40.0' y1='110.0' x2='40.0' y2='14.0' stroke='currentColor' stroke-width='0.4' opacity='0.25'/><line x1='26.0' y1='98.0' x2='138.0' y2='98.0' stroke='currentColor' stroke-width='0.4' opacity='0.25'/><line x1='54.0' y1='110.0' x2='54.0' y2='14.0' stroke='currentColor' stroke-width='0.4' opacity='0.25'/><line x1='26.0' y1='86.0' x2='138.0' y2='86.0' stroke='currentColor' stroke-width='0.4' opacity='0.25'/><line x1='68.0' y1='110.0' x2='68.0' y2='14.0' stroke='currentColor' stroke-width='0.4' opacity='0.25'/><line x1='26.0' y1='74.0' x2='138.0' y2='74.0' stroke='currentColor' stroke-width='0.4' opacity='0.25'/><line x1='82.0' y1='110.0' x2='82.0' y2='14.0' stroke='currentColor' stroke-width='0.4' opacity='0.25'/><line x1='26.0' y1='62.0' x2='138.0' y2='62.0' stroke='currentColor' stroke-width='0.4' opacity='0.25'/><line x1='96.0' y1='110.0' x2='96.0' y2='14.0' stroke='currentColor' stroke-width='0.4' opacity='0.25'/><line x1='26.0' y1='50.0' x2='138.0' y2='50.0' stroke='currentColor' stroke-width='0.4' opacity='0.25'/><line x1='110.0' y1='110.0' x2='110.0' y2='14.0' stroke='currentColor' stroke-width='0.4' opacity='0.25'/><line x1='26.0' y1='38.0' x2='138.0' y2='38.0' stroke='currentColor' stroke-width='0.4' opacity='0.25'/><line x1='124.0' y1='110.0' x2='124.0' y2='14.0' stroke='currentColor' stroke-width='0.4' opacity='0.25'/><line x1='26.0' y1='26.0' x2='138.0' y2='26.0' stroke='currentColor' stroke-width='0.4' opacity='0.25'/><line x1='26.0' y1='110.0' x2='138.0' y2='110.0' stroke='currentColor' stroke-width='1.2'/><line x1='26.0' y1='110.0' x2='26.0' y2='14.0' stroke='currentColor' stroke-width='1.2'/><text x='54.0' y='120.0' font-size='8' fill='currentColor' text-anchor='middle'>10</text><text x='82.0' y='120.0' font-size='8' fill='currentColor' text-anchor='middle'>20</text><text x='110.0' y='120.0' font-size='8' fill='currentColor' text-anchor='middle'>30</text><text x='138.0' y='120.0' font-size='8' fill='currentColor' text-anchor='middle'>40</text><text x='23.0' y='89.0' font-size='8' fill='currentColor' text-anchor='end'>10</text><text x='23.0' y='65.0' font-size='8' fill='currentColor' text-anchor='end'>20</text><text x='23.0' y='41.0' font-size='8' fill='currentColor' text-anchor='end'>30</text><text x='23.0' y='17.0' font-size='8' fill='currentColor' text-anchor='end'>40</text><polyline points='26.0,62.0 68.0,110.0' fill='none' stroke='currentColor' stroke-width='1.8'/></svg>` }, { id: `C`, text: `<svg viewBox='0 0 150 140' style='width:150px;height:140px;display:block;margin:2px auto'><line x1='54.0' y1='110.0' x2='54.0' y2='14.0' stroke='currentColor' stroke-width='0.4' opacity='0.25'/><line x1='26.0' y1='86.0' x2='138.0' y2='86.0' stroke='currentColor' stroke-width='0.4' opacity='0.25'/><line x1='82.0' y1='110.0' x2='82.0' y2='14.0' stroke='currentColor' stroke-width='0.4' opacity='0.25'/><line x1='26.0' y1='62.0' x2='138.0' y2='62.0' stroke='currentColor' stroke-width='0.4' opacity='0.25'/><line x1='110.0' y1='110.0' x2='110.0' y2='14.0' stroke='currentColor' stroke-width='0.4' opacity='0.25'/><line x1='26.0' y1='38.0' x2='138.0' y2='38.0' stroke='currentColor' stroke-width='0.4' opacity='0.25'/><line x1='26.0' y1='110.0' x2='138.0' y2='110.0' stroke='currentColor' stroke-width='1.2'/><line x1='26.0' y1='110.0' x2='26.0' y2='14.0' stroke='currentColor' stroke-width='1.2'/><text x='54.0' y='120.0' font-size='8' fill='currentColor' text-anchor='middle'>5</text><text x='82.0' y='120.0' font-size='8' fill='currentColor' text-anchor='middle'>10</text><text x='110.0' y='120.0' font-size='8' fill='currentColor' text-anchor='middle'>15</text><text x='138.0' y='120.0' font-size='8' fill='currentColor' text-anchor='middle'>20</text><text x='23.0' y='89.0' font-size='8' fill='currentColor' text-anchor='end'>5</text><text x='23.0' y='65.0' font-size='8' fill='currentColor' text-anchor='end'>10</text><text x='23.0' y='41.0' font-size='8' fill='currentColor' text-anchor='end'>15</text><text x='23.0' y='17.0' font-size='8' fill='currentColor' text-anchor='end'>20</text><polyline points='26.0,38.0 110.0,110.0' fill='none' stroke='currentColor' stroke-width='1.8'/></svg>` }, { id: `D`, text: `<svg viewBox='0 0 150 140' style='width:150px;height:140px;display:block;margin:2px auto'><line x1='54.0' y1='110.0' x2='54.0' y2='14.0' stroke='currentColor' stroke-width='0.4' opacity='0.25'/><line x1='26.0' y1='86.0' x2='138.0' y2='86.0' stroke='currentColor' stroke-width='0.4' opacity='0.25'/><line x1='82.0' y1='110.0' x2='82.0' y2='14.0' stroke='currentColor' stroke-width='0.4' opacity='0.25'/><line x1='26.0' y1='62.0' x2='138.0' y2='62.0' stroke='currentColor' stroke-width='0.4' opacity='0.25'/><line x1='110.0' y1='110.0' x2='110.0' y2='14.0' stroke='currentColor' stroke-width='0.4' opacity='0.25'/><line x1='26.0' y1='38.0' x2='138.0' y2='38.0' stroke='currentColor' stroke-width='0.4' opacity='0.25'/><line x1='26.0' y1='110.0' x2='138.0' y2='110.0' stroke='currentColor' stroke-width='1.2'/><line x1='26.0' y1='110.0' x2='26.0' y2='14.0' stroke='currentColor' stroke-width='1.2'/><text x='54.0' y='120.0' font-size='8' fill='currentColor' text-anchor='middle'>5</text><text x='82.0' y='120.0' font-size='8' fill='currentColor' text-anchor='middle'>10</text><text x='110.0' y='120.0' font-size='8' fill='currentColor' text-anchor='middle'>15</text><text x='138.0' y='120.0' font-size='8' fill='currentColor' text-anchor='middle'>20</text><text x='23.0' y='89.0' font-size='8' fill='currentColor' text-anchor='end'>5</text><text x='23.0' y='65.0' font-size='8' fill='currentColor' text-anchor='end'>10</text><text x='23.0' y='41.0' font-size='8' fill='currentColor' text-anchor='end'>15</text><text x='23.0' y='17.0' font-size='8' fill='currentColor' text-anchor='end'>20</text><polyline points='26.0,110.0 110.0,14.0' fill='none' stroke='currentColor' stroke-width='1.8'/></svg>` }],
      answer: `B` },

    { id: `m5ib-math-m2-7`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>The number of bacteria in a liquid medium doubles every day. There are 72,000 bacteria in the liquid medium at the start of an observation. Which of the following represents the number of bacteria, <em>y</em>, in the liquid medium <em>t</em> days after the start of the observation?</div>`,
      options: [{ id: `A`, text: `y = <sup>1</sup>⁄<sub>2</sub>(72,000)<sup>t</sup>` }, { id: `B`, text: `y = 2(72,000)<sup>t</sup>` }, { id: `C`, text: `y = 72,000(<sup>1</sup>⁄<sub>2</sub>)<sup>t</sup>` }, { id: `D`, text: `y = 72,000(2)<sup>t</sup>` }],
      answer: `D` },

    { id: `m5ib-math-m2-8`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `hard`, type: `mcq`,
      prompt: `<div>For a certain isotope, at the end of every 29-year period, the mass of a sample of the isotope has decayed to half its mass at the beginning of the 29-year period. The function s(t) = 216(0.5)<sup>t⁄29</sup> gives the approximate mass of this isotope, in grams, that remains <em>t</em> years after a 216-gram sample starts to decay. Which statement is the best interpretation of s(3 · 29) = 27 in this context?</div>`,
      options: [{ id: `A`, text: `The mass of the sample is approximately 27 grams 3 years after the sample starts to decay.` }, { id: `B`, text: `The mass of the sample is approximately 27 grams 3 29-year periods after the sample starts to decay.` }, { id: `C`, text: `The mass of the sample is approximately 3 grams 27 29-year periods after the sample starts to decay.` }, { id: `D`, text: `The mass of the sample is approximately 3 grams 27 years after the sample starts to decay.` }],
      answer: `B` },

    { id: `m5ib-math-m2-9`, domain: `Geometry and Trigonometry`, skill: `Lines, angles, and triangles`, difficulty: `medium`, type: `grid`,
      prompt: `<svg viewBox="0 0 300 270" role="img" aria-label="figure" style="max-width:300px;width:100%;display:block;margin:6px auto"><line x1='120' y1='34' x2='120' y2='252' stroke='currentColor' stroke-width='1.5'/><line x1='190' y1='34' x2='190' y2='252' stroke='currentColor' stroke-width='1.5'/><line x1='68' y1='252' x2='272' y2='58' stroke='currentColor' stroke-width='1.5'/><text x='112' y='28' font-size='13' font-style='italic' fill='currentColor'>r</text><text x='182' y='28' font-size='13' font-style='italic' fill='currentColor'>s</text><text x='268' y='52' font-size='13' font-style='italic' fill='currentColor'>t</text><text x='128' y='224' font-size='12' fill='currentColor'>x°</text><text x='166' y='128' font-size='12' fill='currentColor'>y°</text></svg><div class="tiny faint" style="text-align:center;margin:2px 0 8px">Note: Figure not drawn to scale.</div><div>In the figure shown, line <em>r</em> is parallel to line <em>s</em>, and both lines are intersected by line <em>t</em>. If x = 2w + 24, y = 5w + 29, and 7w = a, where <em>a</em> is a constant, what is the value of <em>a</em>?</div>`,
      answer: [`127`] },

    { id: `m5ib-math-m2-10`, domain: `Advanced Math`, skill: `Equivalent expressions`, difficulty: `medium`, type: `grid`,
      prompt: `<div style='text-align:center;margin-bottom:2px'>f(x) = x + 4</div><div style='text-align:center;margin-bottom:6px'>g(x) = 3x<sup>2</sup> − rx + 48</div><div>The functions <em>f</em> and <em>g</em> are given. In function <em>g</em>, <em>r</em> is a constant. If f(x) · g(x) = 3x<sup>3</sup> + 192, what is the value of <em>r</em>?</div>`,
      answer: [`12`] },

    { id: `m5ib-math-m2-11`, domain: `Advanced Math`, skill: `Nonlinear equations in one variable and systems of equations in two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>Which quadratic equation has exactly one distinct real solution?</div>`,
      options: [{ id: `A`, text: `x<sup>2</sup> − 22 = 0` }, { id: `B`, text: `x<sup>2</sup> − 11x = 0` }, { id: `C`, text: `x<sup>2</sup> − 11x + 121 = 0` }, { id: `D`, text: `x<sup>2</sup> − 22x + 121 = 0` }],
      answer: `D` },

    { id: `m5ib-math-m2-12`, domain: `Problem-Solving and Data Analysis`, skill: `Percentages`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>The positive number <em>a</em> is 2,800% of the number <em>c</em>, and <em>c</em> is 20% of the number <em>b</em>. What is the value of a − b in terms of <em>c</em>?</div>`,
      options: [{ id: `A`, text: `23c` }, { id: `B`, text: `140c` }, { id: `C`, text: `560c` }, { id: `D`, text: `2,240c` }],
      answer: `A` },

    { id: `m5ib-math-m2-13`, domain: `Geometry and Trigonometry`, skill: `Circles`, difficulty: `hard`, type: `mcq`,
      prompt: `<div>A circle is inscribed in a square such that the circumference of the circle touches the midpoint of each side of the square. The length of the diagonal of the square is 176 units. What is the area, in square units, of the circle?</div>`,
      options: [{ id: `A`, text: `3,872π` }, { id: `B`, text: `7,744π` }, { id: `C`, text: `15,488π` }, { id: `D`, text: `30,976π` }],
      answer: `A` },

    { id: `m5ib-math-m2-14`, domain: `Algebra`, skill: `Linear equations in two variables`, difficulty: `hard`, type: `grid`,
      prompt: `<div>Lines <em>h</em> and <em>k</em> are graphed in the <em>xy</em>-plane. The graph of line <em>h</em> has a slope of <sup>5</sup>⁄<sub>3</sub> and an <em>x</em>-intercept at (17, 0). Line <em>k</em> is the result of translating the graph of line <em>h</em> down 4 units. What is the <em>y</em>-coordinate of the <em>y</em>-intercept of the graph of line <em>k</em>?</div>`,
      answer: [`-97/3`, `-32.33`, `-32.333`, `-32.3333`] },

    { id: `m5ib-math-m2-15`, domain: `Problem-Solving and Data Analysis`, skill: `Ratios, rates, proportional relationships, and units`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>For each of two rectangles, the ratio of the rectangle’s length to its width is 10 to 5. The width of rectangle X is 16.5 times the width of rectangle Y. How does the length of rectangle X compare to the length of rectangle Y?</div>`,
      options: [{ id: `A`, text: `The length of rectangle X is 0.5 times the length of rectangle Y.` }, { id: `B`, text: `The length of rectangle X is 2 times the length of rectangle Y.` }, { id: `C`, text: `The length of rectangle X is 16.5 times the length of rectangle Y.` }, { id: `D`, text: `The length of rectangle X is 33 times the length of rectangle Y.` }],
      answer: `C` },

    { id: `m5ib-math-m2-16`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `easy`, type: `mcq`,
      prompt: `<div style='text-align:center;margin-bottom:6px'>k + 21 = 63</div><div>What is the solution to the given equation?</div>`,
      options: [{ id: `A`, text: `3` }, { id: `B`, text: `42` }, { id: `C`, text: `84` }, { id: `D`, text: `1,323` }],
      answer: `B` },

    { id: `m5ib-math-m2-17`, domain: `Geometry and Trigonometry`, skill: `Right triangles and trigonometry`, difficulty: `hard`, type: `mcq`,
      prompt: `<div>Point <em>N</em> lies on a unit circle in the <em>xy</em>-plane and has coordinates (1, 0). Point <em>O</em> is the center of the circle and has coordinates (0, 0). Point <em>M</em> also lies on the unit circle, and the measure of angle <em>NOM</em> is <sup>272π</sup>⁄<sub>3</sub> radians. If the coordinates of point <em>M</em> are (a, b), where <em>a</em> and <em>b</em> are constants, what is the value of <em>a</em>?</div>`,
      options: [{ id: `A`, text: `<sup>1</sup>⁄<sub>2</sub>` }, { id: `B`, text: `<sup>√3</sup>⁄<sub>2</sub>` }, { id: `C`, text: `−<sup>1</sup>⁄<sub>2</sub>` }, { id: `D`, text: `−<sup>√3</sup>⁄<sub>2</sub>` }],
      answer: `C` },

    { id: `m5ib-math-m2-18`, domain: `Geometry and Trigonometry`, skill: `Area and volume`, difficulty: `hard`, type: `mcq`,
      prompt: `<div>Rectangle <em>ABCD</em> is similar to rectangle <em>EFGH</em>. The area of rectangle <em>ABCD</em> is 648 square inches, and the area of rectangle <em>EFGH</em> is 72 square inches. The length of the longest side of rectangle <em>ABCD</em> is 36 inches. What is the length, in inches, of the longest side of rectangle <em>EFGH</em>?</div>`,
      options: [{ id: `A`, text: `4` }, { id: `B`, text: `9` }, { id: `C`, text: `12` }, { id: `D`, text: `36` }],
      answer: `C` },

    { id: `m5ib-math-m2-19`, domain: `Algebra`, skill: `Systems of two linear equations in two variables`, difficulty: `hard`, type: `mcq`,
      prompt: `<div style='text-align:center;margin-bottom:2px'>2x + 5y = 3</div><div style='text-align:center;margin-bottom:6px'>8x + 20y = 12</div><div>For each real number <em>r</em>, which of the following points lies on the graph of each equation in the <em>xy</em>-plane for the given system?</div>`,
      options: [{ id: `A`, text: `(r, −<sup>5r</sup>⁄<sub>2</sub> + <sup>3</sup>⁄<sub>2</sub>)` }, { id: `B`, text: `(r, <sup>2r</sup>⁄<sub>5</sub> + <sup>3</sup>⁄<sub>5</sub>)` }, { id: `C`, text: `(<sup>r</sup>⁄<sub>4</sub> + 3, −<sup>r</sup>⁄<sub>4</sub> + 12)` }, { id: `D`, text: `(−<sup>5r</sup>⁄<sub>2</sub> + <sup>3</sup>⁄<sub>2</sub>, r)` }],
      answer: `D` },

    { id: `m5ib-math-m2-20`, domain: `Advanced Math`, skill: `Equivalent expressions`, difficulty: `hard`, type: `grid`,
      prompt: `<div style='text-align:center;margin-bottom:6px'>34z<sup>14</sup> + bz<sup>7</sup> + 70</div><div>In the given expression, <em>b</em> is a positive integer. If qz<sup>7</sup> + r is a factor of the expression, where <em>q</em> and <em>r</em> are positive integers, what is the greatest possible value of <em>b</em>?</div>`,
      answer: [`2381`] },

    { id: `m5ib-math-m2-21`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>If <sup>x−4</sup>⁄<sub>5</sub> = <sup>x−4</sup>⁄<sub>7</sub>, the value of x − 4 is between which of the following pairs of values?</div>`,
      options: [{ id: `A`, text: `−7 and −5` }, { id: `B`, text: `−3 and 3` }, { id: `C`, text: `3.5 and 4.5` }, { id: `D`, text: `4.75 and 7.25` }],
      answer: `B` },

    { id: `m5ib-math-m2-22`, domain: `Algebra`, skill: `Linear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>A computer repair specialist charges $160 for the first two hours of repair plus an hourly fee for each additional hour. The total cost for 4 hours of repair is $240. Which function <em>f</em> gives the total cost, in dollars, for <em>x</em> hours of repair, where x ≥ 2?</div>`,
      options: [{ id: `A`, text: `f(x) = 40x + 80` }, { id: `B`, text: `f(x) = 40x + 160` }, { id: `C`, text: `f(x) = 60x` }, { id: `D`, text: `f(x) = 60x + 160` }],
      answer: `A` },
  ];

  Apex.bank.register({
    id: "dsat-2024-05-int-b",
    title: "May 2024",
    type: "digital",
    region: "International",
    version: "B",
    year: 2024,
    monthNum: 5,
    tagline: "International \u00b7 Version B",
    description: "Digital SAT \u2014 May 2024 International prediction form, Version B (validated vs a student key; Math-M1 shared with Form A).",
    adaptive: false,
    sections: [
      { id: "rw", modules: [
        { id: "m5ib-rw-m1", stage: 1, name: "Reading and Writing \u2014 Module 1", minutes: 32, questions: RW_M1 },
        { id: "m5ib-rw-m2", stage: 2, variant: "hard", name: "Reading and Writing \u2014 Module 2 (Hard)", minutes: 32, questions: RW_M2 },
      ] },
      { id: "math", modules: [
        { id: "m5ib-math-m1", stage: 1, name: "Math \u2014 Module 1", minutes: 35, calculator: true, questions: MATH_M1 },
        { id: "m5ib-math-m2", stage: 2, variant: "hard", name: "Math \u2014 Module 2 (Hard)", minutes: 35, calculator: true, questions: MATH_M2 },
      ] },
    ],
  });
})();
