/* Digital SAT - March 2024 International Form B. Both Module 2s Hard. Independently solved. No explanations. COMPLETE. */
(function () {
  const RW_M1 = [
    { id: `m3ib-rw-m1-1`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `easy`, type: `mcq`,
      passage: `<p>The following text is from Darcie Little Badger's 2021 novel <em>A Snake Falls to Earth.</em> Nina is looking at old family photographs.</p><p>Nina couldn't stop looking at the sepia-toned photograph in an oak frame. Propped on the window ledge, it _____ a portrait of Great-Great-Grandmother Rosita as a young woman.</p>`,
      prompt: `As used in the text, what does the word “featured” most nearly mean?`,
      options: [{ id: `A`, text: `Approved` }, { id: `B`, text: `Displayed` }, { id: `C`, text: `Ignored` }, { id: `D`, text: `Questioned` }],
      answer: `B` },

    { id: `m3ib-rw-m1-2`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `easy`, type: `mcq`,
      passage: `<p>The following text is from Mark Twain's 1876 novel <em>The Adventures of Tom Sawyer.</em> Tom, a child, has been told by his aunt to paint their house's fence.</p><p>Tom appeared on the sidewalk with a bucket of whitewash and a long-handled brush. He _____ the fence, and all gladness left him and a deep melancholy settled down upon his spirit. Thirty yards of board fence nine feet high.</p>`,
      prompt: `As used in the text, what does the word “surveyed” most nearly mean?`,
      options: [{ id: `A`, text: `Praised` }, { id: `B`, text: `Organized` }, { id: `C`, text: `Examined` }, { id: `D`, text: `Converted` }],
      answer: `C` },

    { id: `m3ib-rw-m1-3`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Politicians routinely claim that journalists are _____, but while it's true that some journalists allow their own views to creep into their reporting more than others do, most journalists make a good-faith effort to be neutral in their reporting.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `sensitive` }, { id: `B`, text: `biased` }, { id: `C`, text: `misinformed` }, { id: `D`, text: `irrelevant` }],
      answer: `B` },

    { id: `m3ib-rw-m1-4`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The Nile River delta system is located in Northern Egypt, where the river drains into the Mediterranean Sea, and is shaped by _____ factors: for example, the geography of the coastline influences sedimentary deposition, which over time alters coastal geography.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `comprehensive` }, { id: `B`, text: `interdependent` }, { id: `C`, text: `tenuous` }, { id: `D`, text: `unyielding` }],
      answer: `B` },

    { id: `m3ib-rw-m1-5`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Few religious buildings can be said to _____ the astonishing size of Djamaa el Djazaïr in Algeria, which, with the capacity to accommodate approximately 120,000 people at once, is one of the largest mosques in the world.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `conceal` }, { id: `B`, text: `symbolize` }, { id: `C`, text: `minimize` }, { id: `D`, text: `match` }],
      answer: `D` },

    { id: `m3ib-rw-m1-6`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The following text is adapted from Jason Reynolds's 2016 novel <em>Ghost.</em> The narrator, who is in middle school, is at a bus stop.</p><p>I just go there [to the bus stop] to look at the people working out. See, the gym across the street has this big window—like the whole wall is a window—and they have those machines that make you feel like you walking up steps and so everybody just be facing the bus stop, looking all crazy like they're about to pass out. And trust me, there ain't nothing funnier than that. So I check that out for a little while like it's some kind of movie: <em>The About to Pass Out Show,</em> starring stair-stepper person one through ten.</p>`,
      prompt: `Which choice best states the main purpose of the text?`,
      options: [{ id: `A`, text: `To explain a problem that the narrator has overcome` }, { id: `B`, text: `To give a reason why the narrator is excited to start middle school` }, { id: `C`, text: `To discuss a movie that the narrator saw in a theater` }, { id: `D`, text: `To describe an activity that the narrator finds amusing` }],
      answer: `D` },

    { id: `m3ib-rw-m1-7`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `<p>In 1827, Rev. John Wilk and other free Black men in New York City founded <em>Freedom's Journal,</em> America's first Black-owned-and-operated newspaper. Wilk's accomplishment is just one example of the rich history of Black journalism in the United States. <u>That history is preserved by the National Association of Black Journalists, which was founded in Washington, DC, in 1975 to support Black media professionals and honor people like Wilk.</u></p>`,
      prompt: `Which choice best describes the function of the underlined sentence?`,
      options: [{ id: `A`, text: `It highlights several important members of the National Association of Black Journalists.` }, { id: `B`, text: `It emphasizes the challenges that the National Association of Black Journalists has overcome.` }, { id: `C`, text: `It lists the achievements of the National Association of Black Journalists.` }, { id: `D`, text: `It summarizes the purpose of founding the National Association of Black Journalists.` }],
      answer: `D` },

    { id: `m3ib-rw-m1-8`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Sheep and barn owls see in three dimensions (3D) by combining two images in their brains, one from each eye. This produces a sense of depth, helping the animals judge how close or far away an object is. Researchers have investigated 3D vision in praying mantises as well. In one study, Vivek Nityananda and his team fitted mantises' faces with two different color filters, one covering each eye, much like the filters in 3D glasses once worn at movies. By observing the mantises' reaction to projected images, the team confirmed that mantises do indeed have 3D vision, but it's unlike that of other animals.</p>`,
      prompt: `Which choice best describes the overall structure of the text?`,
      options: [{ id: `A`, text: `The text explains the general differences between the vision of sheep and barn owls, then introduces a study of praying mantises' vision.` }, { id: `B`, text: `The text discusses 3D vision in sheep and barn owls, then introduces a study about this kind of vision in praying mantises.` }, { id: `C`, text: `The text describes how sheep and barn owls see, then presents a study about praying mantises that challenges the accuracy of that description.` }, { id: `D`, text: `The text reviews the similarities in how sheep and barn owls see, then provides details of a study about praying mantises to confirm these similarities.` }],
      answer: `B` },

    { id: `m3ib-rw-m1-9`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `medium`, type: `mcq`,
      passage: `<p>“Coyote” is one example of an English word that has an Indigenous origin. The word came to English indirectly from <em>coyote,</em> the Spanish word for the wild canine species. Spanish had borrowed it from Nahuatl, an Indigenous language of Central Mexico, in which the word's original form is <em>coyotl.</em> “Iguana” also has an Indigenous origin and entered English through Spanish. But in this case, the original source was Taino, a language of the Caribbean islands, in which the word for the group of related lizard species is <em>iwana.</em></p>`,
      prompt: `According to the text, what is one difference between the English words “coyote” and “iguana”?`,
      options: [{ id: `A`, text: `“Coyote” is known for being Indigenous in origin, while “iguana” is mistakenly regarded as Spanish in origin.` }, { id: `B`, text: `“Coyote” changed in meaning significantly when English borrowed the word from Spanish, whereas “iguana” retained its original meaning.` }, { id: `C`, text: `“Coyote” can be traced to the Nahuatl language, while “iguana” can be traced to the Taino language.` }, { id: `D`, text: `“Coyote” entered English recently, but “iguana” entered English many centuries ago.` }],
      answer: `C` },

    { id: `m3ib-rw-m1-10`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `medium`, type: `mcq`,
      passage: `<p>In present-day Chiapas, Mexico, archaeologist Robert Rosenswig, remote-sensing specialist Ricardo Lopez-Torrijos, and colleagues have located 41 smaller settlements surrounding the ancient Mesoamerican city of Izapa. The researchers have concluded that these settlements were culturally linked to Izapa because each of the settlements is the same age and configured in the same manner as Izapa, with a pyramid to the north and a plaza to the south. Their shared structural orientation suggests that residents of the settlements likely performed some of the same cultural ceremonies as residents in Izapa did.</p>`,
      prompt: `Which choice best states the main idea of the text?`,
      options: [{ id: `A`, text: `Although archaeologists have learned much about Izapa over years of research, they have only recently found the smaller settlements that surrounded it.` }, { id: `B`, text: `Cultural ceremonies in Izapa seem to have played a more important role for its residents than those in smaller, surrounding settlements did.` }, { id: `C`, text: `Researchers have inferred that Izapa was related to the smaller settlements that surrounded it based in part on the similarity of their construction.` }, { id: `D`, text: `Researchers have determined that the arrangement of Izapa's structures was based on those of other nearby settlements.` }],
      answer: `C` },

    { id: `m3ib-rw-m1-11`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `medium`, type: `mcq`,
      passage: `<p style='text-align:center;font-weight:bold'>Highest-Grossing Films in a Language Other than English at US Box Office</p><table style='border-collapse:collapse;font-size:12px;margin:0 auto' border='1' cellpadding='4'><tr><th>Title</th><th>Lifetime gross earnings</th><th>Opening weekend box office gross earnings</th><th>US release date</th><th>Director</th><th>Oscar nominated?</th></tr><tr><td><em>Crouching Tiger, Hidden Dragon</em></td><td>$128,078,872</td><td>$663,205</td><td>December 8, 2000</td><td>Ang Lee</td><td>Yes</td></tr><tr><td><em>Eat Drink Man Woman</em></td><td>$7,294,403</td><td>$155,512</td><td>August 3, 1994</td><td>Ang Lee</td><td>Yes</td></tr><tr><td><em>Iron Monkey</em></td><td>$14,694,904</td><td>$6,014,653</td><td>October 12, 2001</td><td>Yuen Woo-ping</td><td>No</td></tr><tr><td><em>The Girl Who Played with Fire</em></td><td>$7,638,241</td><td>$904,998</td><td>July 9, 2010</td><td>Daniel Alfredson</td><td>No</td></tr></table><p>Many films in a language other than English grow to be financially successful over the course of their time in movie theaters in the United States, but some become immediate successes in their opening weekends. Such success is driven by many factors like advertising, genre popularity, and the fame of the actors and directors. A student claims that opening weekend earnings can reliably predict whether a film will be nominated for an Oscar: films that draw large audiences at the beginning of their release are the most likely contenders to earn these coveted award nominations.</p>`,
      prompt: `Which choice best describes data from the table that weaken the student's claim?`,
      options: [{ id: `A`, text: `<em>Iron Monkey</em> had higher lifetime earnings than <em>Eat Drink Man Woman</em> did, even though <em>Eat Drink Man Woman</em> was recognized by the Oscars.` }, { id: `B`, text: `Although both <em>Crouching Tiger, Hidden Dragon</em> and <em>Eat Drink Man Woman</em> were recognized by the Oscars, <em>Crouching Tiger, Hidden Dragon</em> had higher lifetime earnings.` }, { id: `C`, text: `<em>The Girl Who Played with Fire</em> was not recognized by the Oscars but had much higher opening weekend earnings than <em>Crouching Tiger, Hidden Dragon,</em> which was recognized by the Oscars.` }, { id: `D`, text: `Although both <em>Iron Monkey</em> and <em>The Girl Who Played with Fire</em> were directed by well-known figures, neither film was recognized by the Oscars.` }],
      answer: `C` },

    { id: `m3ib-rw-m1-12`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `medium`, type: `mcq`,
      passage: `<p style='text-align:center;font-weight:bold'>Numbers of the 23 Non-native Tree Species Reported and the Insect and Fungus Threats to Them</p><table style='border-collapse:collapse;font-size:13px;margin:0 auto' border='1' cellpadding='4'><tr><th>Country</th><th>Trees</th><th>Fungi</th><th>Insects</th></tr><tr><td>Lithuania</td><td>8</td><td>12</td><td>7</td></tr><tr><td>Poland</td><td>10</td><td>25</td><td>105</td></tr><tr><td>Austria</td><td>13</td><td>51</td><td>50</td></tr></table><p>Elisabeth Pötzelsberger and colleagues gathered data on 23 non-native tree species grown in Europe. They analyzed reports from Austria, Poland, and Lithuania about the number of these species grown in those countries as well as the numbers of insect and fungus species that damage those trees. The researchers concluded that in only one of these countries are there more insect species than fungus species that pose risks to these trees.</p>`,
      prompt: `Which choice best describes data from the table that support Pötzelsberger and colleagues' conclusion?`,
      options: [{ id: `A`, text: `Austria reported 51 damaging fungus species, which is a greater number of them than either Poland or Lithuania reported.` }, { id: `B`, text: `Poland reported 25 damaging fungus species and 105 damaging insect species, while both Austria and Lithuania reported a greater number of damaging fungus species than insect species.` }, { id: `C`, text: `Austria reported 51 damaging fungus species, whereas Lithuania reported 7 damaging insect species.` }, { id: `D`, text: `Austria and Lithuania both reported fewer damaging insect species than damaging fungus species, whereas Poland reported 105 fungus species and only 10 insect species.` }],
      answer: `B` },

    { id: `m3ib-rw-m1-13`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `<p>In countries with right-hand traffic, drivers who want to make a left turn at a traffic intersection with stoplights have to wait for either a gap in oncoming traffic or a designated left-turn signal to turn green. At busy intersections, this often causes a backup of vehicles waiting to turn left or being prevented from proceeding by left-turning vehicles in front of them. Transportation researcher Vikash V. Gayah claims that in urban areas eliminating the option to turn left at busy intersections—both with and without dedicated left-turn signals—would improve traffic flow and, as a result, reduce overall travel times even if such a restriction would require drivers to sometimes travel a slightly longer distance.</p>`,
      prompt: `Which finding, if true, would most directly support the researcher's claim?`,
      options: [{ id: `A`, text: `In a town that installed left-turn signals at all busy intersections, seven out of ten survey respondents agreed with the statement “the streets in my community are easier to navigate by motor vehicle than before.”` }, { id: `B`, text: `After a city eliminated left turns at busy intersections, a package-delivery company reports that its drivers have been able to reach more addresses in the city daily, on average, and therefore deliver more packages there annually.` }, { id: `C`, text: `Statistics reveal that school buses in a city that eliminated left turns at most intersections took on average two minutes longer to complete their routes after the restriction took effect than they did before.` }, { id: `D`, text: `A traffic study of intersections in a large city shows that on average drivers wait longer to make a left turn at intersections without left-turn signals than at intersections with such signals.` }],
      answer: `B` },

    { id: `m3ib-rw-m1-14`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `medium`, type: `mcq`,
      passage: `<p style='text-align:center;font-weight:bold'>Days per Winter That Lakes Have Surface Ice</p><table style='border-collapse:collapse;font-size:12px;margin:0 auto' border='1' cellpadding='4'><tr><th>Lake</th><th>Latitude (degrees)</th><th>1980–81</th><th>1985–86</th><th>1990–91</th><th>1995–96</th><th>2000–01</th><th>2005–06</th></tr><tr><td>Spirit Lake</td><td>43.46</td><td>102</td><td>135</td><td>121</td><td>134</td><td>147</td><td>126</td></tr><tr><td>Lake Kegonsa</td><td>42.97</td><td>94</td><td>116</td><td>104</td><td>113</td><td>124</td><td>101</td></tr><tr><td>Näckten</td><td>62.913</td><td>177</td><td>168</td><td>144</td><td>174</td><td>133</td><td>134</td></tr></table><p>It is common for freshwater lakes near or above a latitude of 45° north of the equator, like Lake Stechlin in Germany, to accumulate surface ice in winter. A study from 1980 to 2006 showed that, in general, the number of days per winter that such lakes have measurable amounts of surface ice is declining. However, a researcher claimed that some lakes have instead seen an increase in the duration of ice.</p>`,
      prompt: `Which choice best describes data in the table that support the researcher's claim?`,
      options: [{ id: `A`, text: `Näckten had more days of ice in the winter of 1980–81 than it did in the winter of 2005–06.` }, { id: `B`, text: `Spirit Lake had fewer days of ice in the winter of 1980–81 than it did in the winter of 2005–06.` }, { id: `C`, text: `Näckten is at a higher latitude than Lake Kegonsa and typically had fewer days of ice per winter than Lake Kegonsa did.` }, { id: `D`, text: `Näckten is at a higher latitude than Lake Kegonsa and typically had more days of ice per winter than Lake Kegonsa did.` }],
      answer: `B` },

    { id: `m3ib-rw-m1-15`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The state of Maryland has designated the flathead catfish as an invasive species that could outcompete some of the state's native species. Many other states draw similar distinctions between invasive and native species. But researchers Alejandro Camacho and Jason McLachlan have pointed out that Earth's climate is changing in ways that challenge such designations. Climate changes may cause animals to leave their current ranges and establish new ones. Climate changes may also create good habitats in areas where a species couldn't live previously. These observations suggest that _____</p>`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `it's useful at present for Maryland to distinguish between invasive and native species in some instances but not in the case of the flathead catfish.` }, { id: `B`, text: `Maryland should coordinate with other states to protect their native species from invasive species.` }, { id: `C`, text: `Maryland was previously home to some flathead catfish but they were outcompeted by invading species.` }, { id: `D`, text: `states such as Maryland may need to reevaluate their classifications of species.` }],
      answer: `D` },

    { id: `m3ib-rw-m1-16`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `<p>To coders like Black Girls Code founder Kimberly Bryant, the computer programming languages C# and S-Lang have a clear difference: the former is an object-oriented language while the latter is not. Because both languages require highly technical knowledge to understand, though, laypeople _____ to distinguish between them.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `struggled` }, { id: `B`, text: `had struggled` }, { id: `C`, text: `struggle` }, { id: `D`, text: `were struggling` }],
      answer: `C` },

    { id: `m3ib-rw-m1-17`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `<p>On Humphreys Peak, which _____ an elevation of 12,637 feet, one can find the highest point in Arizona.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `reaches` }, { id: `B`, text: `reach` }, { id: `C`, text: `reaching` }, { id: `D`, text: `to reach` }],
      answer: `A` },

    { id: `m3ib-rw-m1-18`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `hard`, type: `mcq`,
      passage: `<p>A recipient of the King Faisal International Prize and the Othmer Gold Medal, _____ known as femtochemistry when he devised an optical spectroscopy technique that allowed researchers to study ultrafast chemical reactions occurring within molecules.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `the limits of measurability were expanded by chemist Ahmed Zewail who introduced a new scientific discipline` }, { id: `B`, text: `chemist Ahmed Zewail expanded the limits of measurability and introduced a new scientific discipline` }, { id: `C`, text: `the introduction of a new scientific discipline by chemist Ahmed Zewail led to the expansion of the limits of measurability` }, { id: `D`, text: `the result of chemist Ahmed Zewail's expansion of the limits of measurability was the introduction of a new scientific discipline` }],
      answer: `B` },

    { id: `m3ib-rw-m1-19`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>“Coalition” is the term for a group of male lions, and across the Greater Kruger National Park in South Africa, many coalitions vie for territory. Between 2010 and 2018, the lions of the Majingilane _____ including Dark Mane, Golden Mane, and Scar-Nose—thrived within a part of the park called the Londolozi Game Reserve.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `coalition` }, { id: `B`, text: `coalition.` }, { id: `C`, text: `coalition:` }, { id: `D`, text: `coalition—` }],
      answer: `D` },

    { id: `m3ib-rw-m1-20`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Several advantages—the ability to react strongly with chip components, to avoid interference from other waves, and to be confined within tiny circuits—_____ acoustic waves as a promising alternative to electrical waves for transmitting data on computer chips; as a result, researchers are invested in developing more acoustic wave–based chips.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `having positioned` }, { id: `B`, text: `positioning` }, { id: `C`, text: `by positioning` }, { id: `D`, text: `have positioned` }],
      answer: `D` },

    { id: `m3ib-rw-m1-21`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Like much scientific research, a noted 2021 study of moon jellyfish published in <em>Proceedings of the Royal Society B</em> reflects the combined efforts and expertise of multiple _____ Brad Gemmell is listed first, Kevin Du Clos, Kelly Sutherland, and other coauthors also made important contributions to the study.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `researchers: while` }, { id: `B`, text: `researchers;` }, { id: `C`, text: `researchers, while` }, { id: `D`, text: `researchers.` }],
      answer: `A` },

    { id: `m3ib-rw-m1-22`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Broadcasting from the Spirit Lake Tribe's lands in North Dakota, the Native-run radio station KABU 90.7 FM serves its local Dakota-speaking community in several ways. _____ it broadcasts local news and music and also hosts programming in the Dakota language.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `As a result,` }, { id: `B`, text: `By contrast,` }, { id: `C`, text: `In the end,` }, { id: `D`, text: `For instance,` }],
      answer: `D` },

    { id: `m3ib-rw-m1-23`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>Spike is the nickname of a dinosaur fossil specimen from the Late Cretaceous period.</li><li>The Late Cretaceous period ended more than 65 million years ago.</li><li>Spike is a member of the genus <em>Pentaceratops.</em></li><li>Spike is housed at the New Mexico Museum of Natural History.</li><li>The New Mexico Museum of Natural History is in Albuquerque, New Mexico.</li></ul>`,
      prompt: `The student wants to identify the institution in which Spike is housed. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `Spike is housed at the New Mexico Museum of Natural History in Albuquerque, New Mexico.` }, { id: `B`, text: `Spike is the nickname of a dinosaur fossil specimen belonging to the genus <em>Pentaceratops.</em>` }, { id: `C`, text: `Albuquerque, New Mexico, is home to a <em>Pentaceratops</em> fossil specimen nicknamed Spike.` }, { id: `D`, text: `The <em>Pentaceratops</em> fossil specimen Spike lived more than 65 million years ago, in the Late Cretaceous period.` }],
      answer: `A` },

    { id: `m3ib-rw-m1-24`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>A supercontinent is a single landmass made up of most or all of Earth's continents.</li><li>Over time, continents merge together to form supercontinents, which then break apart.</li><li>This process is believed to take hundreds of millions of years and is known as the supercontinent cycle.</li><li>Rodinia and Euramerica were supercontinents.</li><li>Rodinia formed about 1.1 billion years ago.</li><li>Euramerica formed about 300 million years ago.</li></ul>`,
      prompt: `The student wants to correct a misunderstanding that Euramerica formed before Rodinia. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `Rodinia and Euramerica were both supercontinents, single landmasses made up of most or all of the Earth's continents.` }, { id: `B`, text: `Rodinia formed about 1.1 billion years ago, long before Euramerica's formation about 300 million years ago.` }, { id: `C`, text: `Forming and breaking apart over hundreds of millions of years, supercontinents are made up of most or all of Earth's continents.` }, { id: `D`, text: `Euramerica and Rodinia formed at different times in Earth's history.` }],
      answer: `B` },

    { id: `m3ib-rw-m1-25`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>A merchant ship is any ship hired to carry cargo or passengers.</li><li>A ship's carrying capacity is also known as its deadweight tonnage (DWT).</li><li>In 2021, there were a total of 1,769 merchant ships registered in Malaysia.</li><li>The combined DWT of these ships was 10.2 million tons.</li></ul>`,
      prompt: `The student wants to identify the combined carrying capacity of Malaysia's merchant ships in 2021. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `The carrying capacity of a merchant ship is also known as its deadweight tonnage.` }, { id: `B`, text: `In 2021, Malaysia had 1,769 merchant ships hired to carry cargo or passengers.` }, { id: `C`, text: `The combined carrying capacity of Malaysia's merchant ships was 10.2 million tons in 2021.` }, { id: `D`, text: `There were a total of 1,769 merchant ships (ships hired to carry cargo or passengers) registered in Malaysia in 2021.` }],
      answer: `C` },

    { id: `m3ib-rw-m1-26`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>The United States has designated more than 500 areas National Wildlife Refuges (NWRs).</li><li>Some NWRs were established specifically to protect endangered species.</li><li>The Mason Neck NWR is a 2,276-acre area in Virginia, on the Atlantic coast.</li><li>It was established to protect the endangered bald eagle.</li><li>The Bitter Creek NWR is a 14,054-acre area in California, on the Pacific coast.</li><li>It was established to protect the endangered California condor.</li></ul>`,
      prompt: `The student wants to contrast the two NWRs. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `While the Mason Neck NWR is in Virginia, on the Atlantic coast, the Bitter Creek NWR is in California, on the Pacific coast.` }, { id: `B`, text: `Some NWRs were established specifically to protect endangered species such as the California condor.` }, { id: `C`, text: `Both the Mason Neck NWR and the Bitter Creek NWR were established to protect endangered species.` }, { id: `D`, text: `The US has designated more than 500 areas NWRs, including the Mason Neck NWR in Virginia.` }],
      answer: `A` },

    { id: `m3ib-rw-m1-27`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>The French Republican calendar was developed during the French Revolution.</li><li>It had twelve months divided into three weeks of ten days each, followed by five supplemental days.</li><li>Each day was named after a plant, animal, agricultural tool, or mineral as a way of honoring an aspect of rural life.</li><li>Messidor is the tenth month of the French Republican calendar.</li><li>The fifth day of Messidor is named Mulet, which means “mule.”</li></ul>`,
      prompt: `The student wants to explain why a day in the French Republican calendar's month of Messidor was named Mulet. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `When the French Republican calendar was developed during the French Revolution, the fifth of Messidor was named Mulet.` }, { id: `B`, text: `The month of Messidor was divided into three weeks of ten days each, and one of those days was named Mulet.` }, { id: `C`, text: `Developed during the French Revolution, the French Republican calendar has twelve months, including Messidor.` }, { id: `D`, text: `Each day of the French Republican calendar year honors an aspect of rural life, which is why the fifth of Messidor is named after an animal, the mule.` }],
      answer: `D` },
  ];

  const RW_M2 = [
    { id: `m3ib-rw-m2-1`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Although Alfred E. Green's 1950 film <em>The Jackie Robinson Story</em> and Ossie Davis's 1970 film <em>Cotton Comes to Harlem</em> may have had some _____ at the time of their initial release, their place in critics' estimations is now more secure. In 2018, for example, critics for the <em>New York Times</em> described the former as “irresistible” and the latter as “especially pointed.”</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `imitators` }, { id: `B`, text: `collaborators` }, { id: `C`, text: `precursors` }, { id: `D`, text: `detractors` }],
      answer: `D` },

    { id: `m3ib-rw-m2-2`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Political scientists have found that although voters claim to prefer candidates who have nuanced perspectives on issues and who show a willingness to compromise, when asked to compare speeches expressing such views with speeches expressing _____ views, voters tend to regard the unyielding rhetoric of the latter more favorably.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `dogmatic` }, { id: `B`, text: `vacillating` }, { id: `C`, text: `banal` }, { id: `D`, text: `disingenuous` }],
      answer: `A` },

    { id: `m3ib-rw-m2-3`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>According to a board-gaming website, the game The Resistance: Avalon has an average website-user rating of 7.6 out of 10. Although average ratings can be misleading when only a few users have rated the game, The Resistance: Avalon has been rated by over 22,000 users, which is an _____ number to feel confident that the average rating is reliable.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `excessive` }, { id: `B`, text: `adequate` }, { id: `C`, text: `accurate` }, { id: `D`, text: `insufficient` }],
      answer: `B` },

    { id: `m3ib-rw-m2-4`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>A number of recording artists _____ distinctions between Indigenous music and other musical styles. For example, Wolastoq musician Jeremy Dutcher incorporated traditional Wolastoq songs into experimental pop on his album <em>Wolastoqiyik Lintuwakonawa,</em> and Wayuu singer-songwriter Lido Pimienta combined Afro-Indigenous music from Colombia with Latin pop on her album <em>Miss Colombia.</em></p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `replace` }, { id: `B`, text: `observe` }, { id: `C`, text: `reject` }, { id: `D`, text: `disguise` }],
      answer: `C` },

    { id: `m3ib-rw-m2-5`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Today composer Scott Joplin is mainly celebrated for his catchy ragtime pieces “Maple Leaf Rag” and “The Entertainer.” However, by overlooking his less famous works, listeners will miss the full range of Joplin's creativity. For instance, his waltz “Pleasant Moments” and his opera <em>Treemonisha</em> skillfully blend ragtime and classical music. These masterpieces deserve as much fame as Joplin's biggest hits.</p>`,
      prompt: `Which choice best states the main purpose of the text?`,
      options: [{ id: `A`, text: `To explain how Joplin learned to compose and perform ragtime music` }, { id: `B`, text: `To describe the similarities and differences between ragtime music and opera` }, { id: `C`, text: `To encourage music lovers to listen to music by many different composers` }, { id: `D`, text: `To argue that more attention should be given to Joplin's lesser-known works` }],
      answer: `D` },

    { id: `m3ib-rw-m2-6`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `hard`, type: `mcq`,
      passage: `<p><em>The Ionian Mission,</em> first published in 1981, is a novel in Patrick O'Brian's Aubrey/Maturin series, which includes twenty completed books. Some critics have found fault with the abrupt endings of <em>The Ionian Mission</em> and other books in the series, saying that they do not finish conclusively but arbitrarily stop. But other critics argue that the books should not be thought of as discrete texts with traditional beginnings and endings but as a single incredibly long work, similar to other multivolume stories, such as Marcel Proust's <em>In Search of Lost Time.</em></p>`,
      prompt: `Which choice best states the main purpose of the text?`,
      options: [{ id: `A`, text: `To present a reason the unusual structure that O'Brian uses for <em>The Ionian Mission</em> makes it one of his most complex books` }, { id: `B`, text: `To describe a characteristic of the Aubrey/Maturin novels and offer two differing viewpoints on this characteristic` }, { id: `C`, text: `To explain why many critics find the Aubrey/Maturin novels to be remarkably entertaining despite flaws in the novels' structures` }, { id: `D`, text: `To argue that the Aubrey/Maturin series should have the literary renown of <em>In Search of Lost Time</em>` }],
      answer: `B` },

    { id: `m3ib-rw-m2-7`, domain: `Information and Ideas`, skill: `Cross-Text Connections`, difficulty: `hard`, type: `mcq`,
      passage: `<p><strong>Text 1</strong></p><p><u>Isaac Asimov, author of <em>Nemesis</em> and <em>The Stars, Like Dust,</em> is highly regarded despite his mediocre writing style. His prose is workmanlike; his characters are flat and discuss ideas rather than emotions.</u> That his work is enjoyable despite this is a testament to his prodigious imagination—even if people read his books only for the ideas, they will have plenty to consider.</p><p><strong>Text 2</strong></p><p>Asimov is critiqued for his style, but it is wrong to fault a writer for failing to do what he never intended to do. For example, although most of his novel <em>Foundation</em> consists of people discussing science and politics and we find out little about his characters' lives, Asimov wanted to convey the vast sweep of human history over centuries, and one of his points is that at such a timescale, individuals don't matter. Thus his lack of characterization is central to Asimov's thematic aims.</p>`,
      prompt: `Based on the texts, how would the author of Text 2 most likely respond to the evaluation of Asimov's writing style in the underlined claim in Text 1?`,
      options: [{ id: `A`, text: `By arguing that Asimov's writing style should be judged against the styles of historians rather than those of fiction writers` }, { id: `B`, text: `By asserting that Asimov's minimal characterization is likely a conscious choice that helps him convey an important idea` }, { id: `C`, text: `By pointing out that the flatness of Asimov's characters is a feature of <em>Nemesis</em> and <em>The Stars, Like Dust</em> but not of <em>Foundation</em>` }, { id: `D`, text: `By agreeing that Asimov's prose is flawed but disagreeing about the quality of his characters` }],
      answer: `B` },

    { id: `m3ib-rw-m2-8`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Shanlin Liu and colleagues relied on historical DNA (hDNA)—genomic data incidentally preserved in specimens housed in natural history collections—to investigate the evolutionary history of the rhinoceros family (Rhinocerotidae). Although this approach offers unique benefits, such as the ability to ascertain the biogeographical origins of organisms, it remains a relatively underutilized resource because hDNA is often to some extent degraded, a situation not easily remediable under current methodological paradigms and with extant DNA extraction and analysis technologies.</p>`,
      prompt: `Information in the text best supports which statement about hDNA?`,
      options: [{ id: `A`, text: `It may be underused because of its controversial status among scientists.` }, { id: `B`, text: `It tends to be much more degraded than other types of DNA of comparable age.` }, { id: `C`, text: `It may yield insights that other types of genomic data cannot.` }, { id: `D`, text: `It has thus far proved valuable mainly to researchers studying mammals.` }],
      answer: `C` },

    { id: `m3ib-rw-m2-9`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Meredith E. Protas and colleagues have explored how convergent evolution—a phenomenon that occurs when the same trait evolves independently in two reproductively separate lineages—can result from a genetic mechanism shared by both lineages. Meanwhile, Cynthia C. Steiner and colleagues have investigated how convergence occurs through different genetic mechanisms, but the relative prevalence of convergence through shared and different genetic processes is still poorly understood. This motivated biologists Delbert A. Green II and Cassandra G. Extavour to evaluate both types of convergence in a single study for their 2012 paper.</p>`,
      prompt: `Which choice best states the main idea of the text?`,
      options: [{ id: `A`, text: `Before Green and Extavour's study, convergent evolution was assumed to require a shared genetic mechanism between two lineages that share the trait.` }, { id: `B`, text: `Both the study by Protas and colleagues and that by Green and Extavour compare convergence through shared genetic mechanisms to convergence through different genetic mechanisms.` }, { id: `C`, text: `Green and Extavour's study addresses convergent evolution more comprehensively than the studies by Protas and colleagues and Steiner and colleagues do.` }, { id: `D`, text: `Green and Extavour's study was conducted using data from the studies by Protas and colleagues and Steiner and colleagues.` }],
      answer: `C` },

    { id: `m3ib-rw-m2-10`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `<p style='text-align:center;font-weight:bold'>Women Judges and Magistrates on High Courts, 2009–2013</p><table style='border-collapse:collapse;font-size:12px;margin:0 auto' border='1' cellpadding='4'><tr><th>Country</th><th>2009</th><th>2010</th><th>2011</th><th>2012</th><th>2013</th></tr><tr><td>Armenia</td><td>3</td><td>4</td><td>4</td><td>4</td><td>4</td></tr><tr><td>Belgium</td><td>6</td><td>7</td><td>7</td><td>6</td><td>6</td></tr><tr><td>Honduras</td><td>8</td><td>3</td><td>3</td><td>3</td><td>3</td></tr></table><p>A report from an international organization that monitors the numbers of women serving as judges or magistrates on various nations' highest courts, such as the Supreme Court of Justice and the Constitutional Court in Belgium and the Supreme Court in Honduras, indicates that, other than the countries that had more women on these courts in 2013 than in 2009, for some the number in 2013 was less than that in 2009, and for others it was the same in both years. For instance, the number of women judges and magistrates on high courts in _____</p>`,
      prompt: `Which choice most effectively uses data from the table to complete the example?`,
      options: [{ id: `A`, text: `Belgium was the same in 2013 as in 2009, but it had more women on its high courts than either Armenia or Honduras did in 2013.` }, { id: `B`, text: `Honduras was lower in 2013 than in 2009, whereas the number in Belgium was the same in 2013 as in 2009.` }, { id: `C`, text: `Armenia was greater in 2013 than in 2009, whereas the number in Honduras was lower in 2013 than in 2009.` }, { id: `D`, text: `Armenia was greater in 2013 than in 2009, whereas the number in Belgium was the same in 2013 as in 2009.` }],
      answer: `B` },

    { id: `m3ib-rw-m2-11`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Over time, marine mollusks called nautilids continually add segments to their shells, and the chemical composition of each segment is influenced by the available materials in the surrounding water when the segment forms. Paleontologist Amane Tajika and colleagues analyzed the septa (the walls between shell chambers) of one male (samples labeled “M”) and one female (samples labeled “F”) nautilid, finding that sample F07 had the same concentration of oxygen-18 as did water approximately 135 meters deep and that the oxygen-18 concentration in sample M28 matched that of water at approximately 365 meters deep. Tajika et al. concluded that sample F07 formed at a higher point in the water column than did M28.</p>`,
      prompt: `Which finding, if true, would most directly support the researchers' conclusion?`,
      options: [{ id: `A`, text: `In nautilids, sex predicts septa growth rate more strongly than does oxygen-18 concentration in the surrounding water.` }, { id: `B`, text: `Among nautilids, there is no effect of sex on the uptake of oxygen-18 from water or its deposition in septa.` }, { id: `C`, text: `Male nautilids tend to show higher concentrations of oxygen-18 than do female nautilids inhabiting the same point in the water column.` }, { id: `D`, text: `Regardless of sex, nautilids spend most of their lives at depths of 50 meters or greater, where oxygen-18 concentrations typically differ from those higher in the water column.` }],
      answer: `B` },

    { id: `m3ib-rw-m2-12`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Callie W. Babbitt, Hema Madaka, and colleagues assembled a database of materials used in consumer electronics by studying products in the lab and by gathering data from similar product studies. The team gave each of these studies a rating for level of traceability (with a higher rating for clearer descriptions of procedures) and for category consistency (with a higher rating for using materials categories more closely aligned with the categories in the team's database). Based on these ratings, a second research team concluded that the methodology was better explained in a study by Lee Ching-Hwa and Hsi Chi-Shiung than it was in a study by Jef R. Peeters and colleagues.</p>`,
      prompt: `Which finding, if true, would most directly challenge the second research team's conclusion?`,
      options: [{ id: `A`, text: `The study by Lee and Hsi had a lower consistency rating than the study by Peeters and colleagues did.` }, { id: `B`, text: `The study by Lee and Hsi had a lower traceability rating than the study by Peeters and colleagues did.` }, { id: `C`, text: `The study by Peeters and colleagues had a medium consistency rating and a low traceability rating.` }, { id: `D`, text: `The study by Lee and Hsi had a high consistency rating and a medium traceability rating.` }],
      answer: `B` },

    { id: `m3ib-rw-m2-13`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Soil thawing in Alaska has been accelerating in response to climate warming, potentially enabling increased carbon dioxide (CO<sub>2</sub>) absorption through greater productivity of Port Clarence Indian paintbrush (<em>Castilleja caudata</em>) plants and other vegetation, but also potentially enabling increased CO<sub>2</sub> output through greater heterotrophic respiration (CO<sub>2</sub> generated by the activity of soil microorganisms). Hydrologist Yonghong Yi and her colleagues developed a model incorporating numerous inputs—years of soil moisture and snow cover data among them—to evaluate the effects of warming on the CO<sub>2</sub> balance in Alaska, concluding that net CO<sub>2</sub> is likely to increase if warming hastens spring snow melt.</p>`,
      prompt: `Which finding, if true, would most directly support the researchers' conclusion?`,
      options: [{ id: `A`, text: `Early snow melt slows the growth of plant species such as <em>C. caudata</em> by reducing soil insulation, and it suppresses heterotrophic respiration.` }, { id: `B`, text: `Early snow melt amplifies the effect of soil moisture on the growth of plant species such as <em>C. caudata</em> and on the rate of heterotrophic respiration.` }, { id: `C`, text: `Early snow melt reduces the amount of soil moisture available for the growth of plant species such as <em>C. caudata,</em> and it raises the rate of heterotrophic respiration.` }, { id: `D`, text: `Early snow melt extends the period in which plant species such as <em>C. caudata</em> can absorb CO<sub>2</sub> but has no effect on the rate of heterotrophic respiration.` }],
      answer: `C` },

    { id: `m3ib-rw-m2-14`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `<p>The Canadian Longitudinal Study on Aging (CLSA-ÉLCV) is a longitudinal study surveying approximately 1,000 individuals in Canada to glean extended trends in aging. To carry out the necessary sampling of the population over many years, CLSA-ÉLCV needs extensive financial support, but this method provides valuable insights into causal relationships. However, when questions of causation are irrelevant, as with a fitness study seeking only to reveal the percentage of regular exercisers in a city who do weight training, longitudinal methods are unnecessary, and so _____</p>`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `the success of the fitness study likely requires significantly less financial outlay than that needed for CLSA-ÉLCV.` }, { id: `B`, text: `the expense of CLSA-ÉLCV is likely greater than the cost of longitudinal studies of fitness.` }, { id: `C`, text: `longitudinal methods are suitable for studies of aging but ought to be avoided for those of fitness.` }, { id: `D`, text: `conclusions drawn from CLSA-ÉLCV are likely to be more authoritative than those from the fitness study.` }],
      answer: `A` },

    { id: `m3ib-rw-m2-15`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `<p>The many editions of James Joyce's 1922 novel <em>Ulysses</em> are not textually identical, and scholars debate which versions reflect Joyce's authorial intent. One no longer widely read edition is the 1984 “critical and synoptic edition” edited by Hans Walter Gabler, which followed French and German editorial theories rather than editorial traditions of the United States and United Kingdom and which was later found to have introduced errors due to Gabler's choice to consult facsimile manuscripts rather than using only originals. However, few Joyce scholars worldwide had expertise in such textual issues, and most of those who did worked on the edition with Gabler. So, it is unsurprising that initial scholarly reviews of the 1984 edition were mostly _____</p>`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `positive, since <em>Ulysses</em> is a novel in English and the 1984 edition would therefore be more widely reviewed in United States and United Kingdom publications than in French and German publications.` }, { id: `B`, text: `negative, since any scholar with expertise in editorial theories of the United States and United Kingdom as well as French and German editorial theories most likely worked with Gabler on the 1984 edition and would therefore not review it.` }, { id: `C`, text: `negative, since those Joyce scholars with the necessary expertise to write a review of the 1984 edition would be aware that facsimile manuscripts cannot be produced with a high enough fidelity to the original to ensure that relying on them will not introduce editorial errors.` }, { id: `D`, text: `positive, since scholars who reviewed the 1984 edition were unaffiliated with its production and were mostly either Joyce specialists who were largely unfamiliar with editorial theories and practices or specialists in such theories and practices who were insufficiently familiar with Joyce.` }],
      answer: `D` },

    { id: `m3ib-rw-m2-16`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>In Puerto Rico, it's not unusual for a city or town to be known by a nickname that corresponds to one of its notable features, like landscape, climate, famous residents, or chief exports. For example, the Puerto Rican municipality of Adjuntas has also been called “the Switzerland of Puerto Rico,” a nickname that alludes to what the area is well _____ its chillier temperatures.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `known for:` }, { id: `B`, text: `known for;` }, { id: `C`, text: `known for` }, { id: `D`, text: `known: for` }],
      answer: `A` },

    { id: `m3ib-rw-m2-17`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `hard`, type: `mcq`,
      passage: `<p>A region of the Soviet Union encompassing the present-day city of Sukhumi, Georgia, the Abkhazian-speaking Abkhaz Autonomous Soviet Socialist Republic was in fact only nominally autonomous. President Mikhail Gorbachev's reforms, by helping the Abkhaz Republic and other Soviet republics established along ethnolinguistic lines assert their prerogatives, _____ to the Soviet Union's breakup.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `contributing` }, { id: `B`, text: `having contributed` }, { id: `C`, text: `contributed` }, { id: `D`, text: `which contributed` }],
      answer: `C` },

    { id: `m3ib-rw-m2-18`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Minerals can be classified by how much light passes through them. For example, all (or almost all) light passes through kainite, which is classified as _____ only some light to pass through, hauyne is instead classified as translucent.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `transparent and allowing` }, { id: `B`, text: `transparent. Allowing` }, { id: `C`, text: `transparent, allowing` }, { id: `D`, text: `transparent allowing` }],
      answer: `B` },

    { id: `m3ib-rw-m2-19`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The artist Edvard Munch's painting <em>The Scream,</em> symbolically _____ to portray the existential anxiety that can occur when facing the unknown, is a highly regarded example of allegory.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `functioning` }, { id: `B`, text: `was functioning` }, { id: `C`, text: `functions` }, { id: `D`, text: `has functioned` }],
      answer: `A` },

    { id: `m3ib-rw-m2-20`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `hard`, type: `mcq`,
      passage: `<p>The relationship between genomes and epigenomes reveals how cells with identical DNA develop different _____ whereas the genome in each cell contains a complete DNA sequence, the epigenome consists of chemical compounds that determine which traits in the sequence will be expressed.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `functions:` }, { id: `B`, text: `functions,` }, { id: `C`, text: `functions and,` }, { id: `D`, text: `functions` }],
      answer: `A` },

    { id: `m3ib-rw-m2-21`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `hard`, type: `mcq`,
      passage: `<p>That the geographic center of North America lay in the state of North Dakota was conceded by all _____ establishing its precise coordinates proved more divisive.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `involved` }, { id: `B`, text: `involved;` }, { id: `C`, text: `involved:` }, { id: `D`, text: `involved,` }],
      answer: `B` },

    { id: `m3ib-rw-m2-22`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Monument 4 is the name given to a 19.8-ton stone statue of a human head that was created during the ancient Olmec civilization. It was discovered in Tabasco, Mexico, at the La Venta archaeological site. _____ at the Tres Zapotes site in the state of Veracruz, another colossal head statue called Monument Q was discovered.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `Elsewhere,` }, { id: `B`, text: `As a result,` }, { id: `C`, text: `Specifically,` }, { id: `D`, text: `For example,` }],
      answer: `A` },

    { id: `m3ib-rw-m2-23`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>In the West African country of the Gambia, the percentage of the population living in cities increased from 59.2% to 62.6% between 2015 and 2020; this upward trend in urbanization was seen throughout that part of the continent. _____ from 2015 to 2020, the overall percentage of the West African population living in cities rose from 44.5% to 47.7%.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `Later,` }, { id: `B`, text: `In reality,` }, { id: `C`, text: `Nevertheless,` }, { id: `D`, text: `Indeed,` }],
      answer: `D` },

    { id: `m3ib-rw-m2-24`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Ugandan American professor Peter Nazareth believed that Elvis Presley's music is best understood not as a homogeneous collection but as an anthology (because Elvis showcased the contributions of a wide range of gospel, blues, and rock artists). _____ Nazareth entitled his college course on Elvis and his music, which focused on Elvis's many musical influences, “Elvis as Anthology.”</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `In addition,` }, { id: `B`, text: `To that end,` }, { id: `C`, text: `In sum,` }, { id: `D`, text: `That is,` }],
      answer: `B` },

    { id: `m3ib-rw-m2-25`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>A copyright prevents a book's contents from being reproduced (published) without permission from the copyright holder.</li><li>When a book's copyright expires, the book enters the public domain.</li><li>Public domain books can be legally reproduced by anyone.</li><li><em>New Hampshire</em> is a poetry collection by Robert Frost.</li><li>It was published in 1923 and entered the public domain on January 1, 2019 (ninety-six years later).</li></ul>`,
      prompt: `Which choice most effectively uses information from the given sentences to explain why <em>New Hampshire</em> entered the public domain?`,
      options: [{ id: `A`, text: `<em>New Hampshire,</em> a poetry collection by Robert Frost, is freely available to the public.` }, { id: `B`, text: `The copyright to <em>New Hampshire</em> expired in 2019, causing the poetry collection to enter the public domain.` }, { id: `C`, text: `Before <em>New Hampshire</em> entered the public domain, only its copyright holder could give permission for others to reproduce its contents.` }, { id: `D`, text: `Once <em>New Hampshire</em> entered the public domain, anyone could publish its contents.` }],
      answer: `B` },

    { id: `m3ib-rw-m2-26`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>Ixmiquilpan is a municipality in the state of Hidalgo, Mexico.</li><li>Municipalities are governmental regions responsible for providing many public services to their residents.</li><li>One service they provide is water treatment.</li><li>Ixmiquilpan's population was 98,654 in 2020.</li><li>Hidalgo is divided into 84 municipalities.</li></ul>`,
      prompt: `The student wants to provide a specific example of what municipalities provide. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `Ixmiquilpan is one of 84 municipalities in Hidalgo, Mexico.` }, { id: `B`, text: `In 2020, the municipality of Ixmiquilpan had a population of 98,654.` }, { id: `C`, text: `Water treatment is just one of the many public services that municipalities provide.` }, { id: `D`, text: `The municipality Ixmiquilpan in Hidalgo is responsible for providing many public services.` }],
      answer: `C` },

    { id: `m3ib-rw-m2-27`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>The Mohs scale of mineral hardness is a ten-point scale that orders minerals by hardness based on their ability to scratch other minerals.</li><li>Minerals with larger numbers are harder than minerals with smaller numbers and can leave visible scratches on them.</li><li>Minerals with smaller numbers are softer than minerals with larger numbers and cannot leave visible scratches on them.</li><li>The mineral calcite has a Mohs scale number of 3.</li><li>The mineral orthoclase has a Mohs scale number of 6.</li><li>The mineral topaz has a Mohs scale number of 8.</li></ul>`,
      prompt: `The student wants to compare the hardness of calcite and topaz. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `A mineral with a Mohs number of 6, like orthoclase, is harder than one with a Mohs number of 3, like calcite.` }, { id: `B`, text: `Topaz can leave visible scratches on calcite, which means that topaz is harder than calcite.` }, { id: `C`, text: `Topaz can leave visible scratches on orthoclase, which is why topaz has a higher number than orthoclase on the Mohs scale of mineral hardness.` }, { id: `D`, text: `The Mohs scale of mineral hardness can be used to order orthoclase, calcite, and topaz by their ability to scratch other minerals.` }],
      answer: `B` },
  ];

  const MATH_M1 = [
    { id: `m3ib-math-m1-1`, domain: `Problem-Solving and Data Analysis`, skill: `Two-variable data: models and scatterplots`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>The scatterplot shows the relationship between two variables, <em>x</em> and <em>y</em>. A line of best fit is also shown.</p><svg viewBox='0 0 340 300' xmlns='http://www.w3.org/2000/svg' style='max-width:340px;background:#fff'><g stroke='#d0d0d0' stroke-width='1'><line x1='70.75' y1='12' x2='70.75' y2='274'/><line x1='107.5' y1='12' x2='107.5' y2='274'/><line x1='144.25' y1='12' x2='144.25' y2='274'/><line x1='181' y1='12' x2='181' y2='274'/><line x1='217.75' y1='12' x2='217.75' y2='274'/><line x1='254.5' y1='12' x2='254.5' y2='274'/><line x1='291.25' y1='12' x2='291.25' y2='274'/><line x1='328' y1='12' x2='328' y2='274'/><line x1='34' y1='241.25' x2='328' y2='241.25'/><line x1='34' y1='208.5' x2='328' y2='208.5'/><line x1='34' y1='175.75' x2='328' y2='175.75'/><line x1='34' y1='143' x2='328' y2='143'/><line x1='34' y1='110.25' x2='328' y2='110.25'/><line x1='34' y1='77.5' x2='328' y2='77.5'/><line x1='34' y1='44.75' x2='328' y2='44.75'/><line x1='34' y1='12' x2='328' y2='12'/></g><g stroke='#333' stroke-width='1.5'><line x1='34' y1='12' x2='34' y2='274'/><line x1='34' y1='274' x2='328' y2='274'/></g><line x1='34' y1='231.4' x2='293.1' y2='12' stroke='#c0392b' stroke-width='2'/><g fill='#1a1a1a'><circle cx='70.75' cy='208.5' r='3.4'/><circle cx='107.5' cy='175.75' r='3.4'/><circle cx='144.25' cy='175.75' r='3.4'/><circle cx='144.25' cy='143' r='3.4'/><circle cx='181' cy='159.375' r='3.4'/><circle cx='181' cy='110.25' r='3.4'/><circle cx='199.375' cy='93.875' r='3.4'/><circle cx='217.75' cy='110.25' r='3.4'/><circle cx='254.5' cy='44.75' r='3.4'/><circle cx='291.25' cy='28.375' r='3.4'/></g><g fill='#333' font-size='11' font-family='sans-serif' text-anchor='middle'><text x='70.75' y='287'>1</text><text x='144.25' y='287'>3</text><text x='217.75' y='287'>5</text><text x='291.25' y='287'>7</text></g><g fill='#333' font-size='11' font-family='sans-serif' text-anchor='end'><text x='30' y='245'>2</text><text x='30' y='179.5'>6</text><text x='30' y='113.75'>10</text><text x='30' y='48'>14</text></g><text x='20' y='16' fill='#333' font-size='11' font-family='sans-serif'>y</text><text x='332' y='272' fill='#333' font-size='11' font-family='sans-serif'>x</text></svg><p>Which of the following equations best represents the line of best fit shown?</p>`,
      options: [{ id: `A`, text: `<em>y</em> = 2.6 + 1.9<em>x</em>` }, { id: `B`, text: `<em>y</em> = 2.6 &minus; 1.9<em>x</em>` }, { id: `C`, text: `<em>y</em> = &minus;2.6 + 1.9<em>x</em>` }, { id: `D`, text: `<em>y</em> = &minus;2.6 &minus; 1.9<em>x</em>` }],
      answer: `A` },

    { id: `m3ib-math-m1-2`, domain: `Algebra`, skill: `Systems of two linear equations in two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `<p style='text-align:center'>2<em>x</em> &minus; 3<em>y</em> = 4<br><em>x</em> = 8</p><p>What is the solution (<em>x</em>, <em>y</em>) to the given system of equations?</p>`,
      options: [{ id: `A`, text: `(8, 4)` }, { id: `B`, text: `(8, &minus;9)` }, { id: `C`, text: `(8, &minus;4)` }, { id: `D`, text: `(8, 9)` }],
      answer: `A` },

    { id: `m3ib-math-m1-3`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `easy`, type: `mcq`,
      prompt: `<p>What value of <em>x</em> is the solution to the equation 8<em>x</em> + 56 = 36<em>x</em>?</p>`,
      options: [{ id: `A`, text: `&minus;2` }, { id: `B`, text: `<sup>2</sup>&frasl;<sub>11</sub>` }, { id: `C`, text: `<sup>1</sup>&frasl;<sub>2</sub>` }, { id: `D`, text: `2` }],
      answer: `D` },

    { id: `m3ib-math-m1-4`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>If 4(<em>x</em> + 3) = 3(<em>x</em> + 3) + 56, what is the value of <em>x</em> + 3?</p>`,
      options: [{ id: `A`, text: `&minus;3` }, { id: `B`, text: `53` }, { id: `C`, text: `56` }, { id: `D`, text: `59` }],
      answer: `C` },

    { id: `m3ib-math-m1-5`, domain: `Algebra`, skill: `Linear functions`, difficulty: `medium`, type: `grid`,
      prompt: `<p>The function <em>f</em> is defined by <em>f</em>(<em>x</em>) = <sup>7</sup>&frasl;<sub>10</sub><em>x</em> + 63. What is the value of <em>f</em>(20)?</p>`,
      answer: [`77`] },

    { id: `m3ib-math-m1-6`, domain: `Advanced Math`, skill: `Function notation`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>The function <em>f</em> is defined by <em>f</em>(<em>x</em>) = 2 + &radic;<span style='text-decoration:overline'><em>x</em></span>. What is the value of <em>f</em>(100)?</p>`,
      options: [{ id: `A`, text: `0` }, { id: `B`, text: `12` }, { id: `C`, text: `27` }, { id: `D`, text: `52` }],
      answer: `B` },

    { id: `m3ib-math-m1-7`, domain: `Geometry and Trigonometry`, skill: `Lines, angles, and triangles`, difficulty: `medium`, type: `grid`,
      prompt: `<p>Triangles <em>ABC</em> and <em>DEF</em> are congruent, where <em>A</em> corresponds to <em>D</em>, and <em>B</em> and <em>E</em> are right angles. The measure of angle <em>A</em> is 17&deg;. What is the measure, in degrees, of angle <em>F</em>?</p>`,
      answer: [`73`] },

    { id: `m3ib-math-m1-8`, domain: `Problem-Solving and Data Analysis`, skill: `Probability and conditional probability`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>At a convention center, there are a total of 250 visitors. Each visitor is located in either room A, room B, or room C. If one of these visitors is selected at random, the probability of selecting a visitor who is located in room A is 0.44, and the probability of selecting a visitor who is located in room B is 0.32. How many visitors are located in room C?</p>`,
      options: [{ id: `A`, text: `24` }, { id: `B`, text: `30` }, { id: `C`, text: `35` }, { id: `D`, text: `60` }],
      answer: `D` },

    { id: `m3ib-math-m1-9`, domain: `Algebra`, skill: `Linear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<p style='text-align:center'><em>g</em>(<em>m</em>) = &minus;0.05<em>m</em> + 12.4</p><p>The given function <em>g</em> models the number of gallons of gasoline that remains from a full gas tank in a car after driving <em>m</em> miles. According to the model, about how many gallons of gasoline are used to drive each mile?</p>`,
      options: [{ id: `A`, text: `0.05` }, { id: `B`, text: `12.4` }, { id: `C`, text: `20` }, { id: `D`, text: `248.0` }],
      answer: `A` },

    { id: `m3ib-math-m1-10`, domain: `Geometry and Trigonometry`, skill: `Circles`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>What is the center of the circle in the <em>xy</em>-plane defined by the equation (<em>x</em> &minus; 4)<sup>2</sup> + (<em>y</em> + 3)<sup>2</sup> = 16?</p>`,
      options: [{ id: `A`, text: `(&minus;4, 3)` }, { id: `B`, text: `(&minus;4, &minus;3)` }, { id: `C`, text: `(4, &minus;3)` }, { id: `D`, text: `(4, 3)` }],
      answer: `C` },

    { id: `m3ib-math-m1-11`, domain: `Advanced Math`, skill: `Exponential functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<p style='text-align:center'><em>f</em>(<em>x</em>) = 3,000(0.75)<sup><em>x</em></sup></p><p>A conservation scientist implemented a program to reduce a certain invasive insect population in an area. The given function estimates this insect species' population <em>x</em> years after 2008, where <em>x</em> &le; 8. Which of the following is the best interpretation of 3,000 in this context?</p>`,
      options: [{ id: `A`, text: `The estimated percent decrease in the insect population for this species and area every 8 years after 2008` }, { id: `B`, text: `The estimated percent decrease in the insect population for this species and area each year after 2008` }, { id: `C`, text: `The estimated insect population for this species and area 8 years after 2008` }, { id: `D`, text: `The estimated initial insect population for this species and area in 2008` }],
      answer: `D` },

    { id: `m3ib-math-m1-12`, domain: `Algebra`, skill: `Linear equations in two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>Line <em>r</em> is defined by the equation 4<em>x</em> &minus; 9<em>y</em> = 5. Line <em>s</em> is parallel to line <em>r</em> in the <em>xy</em>-plane. What is the slope of line <em>s</em>?</p>`,
      options: [{ id: `A`, text: `&minus;9` }, { id: `B`, text: `&minus;4` }, { id: `C`, text: `<sup>4</sup>&frasl;<sub>9</sub>` }, { id: `D`, text: `<sup>9</sup>&frasl;<sub>4</sub>` }],
      answer: `C` },

    { id: `m3ib-math-m1-13`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>The cost to rent a bus from Company X is $950 for the first 3 hours and an additional $50 per hour for each hour after the first 3 hours. If the total cost to rent the bus from Company X for <em>t</em> hours, where <em>t</em> &gt; 3, is $1,100, which equation represents this situation?</p>`,
      options: [{ id: `A`, text: `950(<em>t</em> &minus; 3) + 50<em>t</em> = 1,100` }, { id: `B`, text: `950(3<em>t</em>) + 50<em>t</em> = 1,100` }, { id: `C`, text: `950 + 50(<em>t</em> &minus; 3) = 1,100` }, { id: `D`, text: `950 + 50(3<em>t</em>) = 1,100` }],
      answer: `C` },

    { id: `m3ib-math-m1-14`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<p style='text-align:center'><em>y</em> = &minus;<sup>1</sup>&frasl;<sub>4</sub><em>x</em><sup>2</sup> + <em>x</em> + 29</p><p>The given equation models a company's active projects over 6 months, where <em>y</em> is the estimated number of active projects <em>x</em> months after the end of April 2013, where 0 &le; <em>x</em> &le; 6. Which statement is the best interpretation of the <em>y</em>-intercept of the graph of this equation in the <em>xy</em>-plane?</p>`,
      options: [{ id: `A`, text: `At the end of April 2013, the estimated number of active projects was 0.` }, { id: `B`, text: `At the end of April 2013, the estimated number of active projects was 29.` }, { id: `C`, text: `At the end of May 2013, the estimated number of active projects was 0.` }, { id: `D`, text: `At the end of May 2013, the estimated number of active projects was 29.` }],
      answer: `B` },

    { id: `m3ib-math-m1-15`, domain: `Algebra`, skill: `Linear equations in two variables`, difficulty: `medium`, type: `grid`,
      prompt: `<p style='text-align:center'>22.5<em>x</em> + 26.75<em>y</em> = 242</p><p>Odalys ordered mulch and river rock, which cost a total of $242, for her home. The given equation represents the relationship between the number of cubic yards of mulch, <em>x</em>, and the number of tons of river rock, <em>y</em>, Odalys ordered. How much more, in dollars, did a ton of river rock cost Odalys than a cubic yard of mulch?</p>`,
      answer: [`4.25`] },

    { id: `m3ib-math-m1-16`, domain: `Geometry and Trigonometry`, skill: `Area and volume`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>A hemisphere is half of a sphere. If a hemisphere has a radius of 86 inches, which of the following is closest to the volume, in cubic inches, of this hemisphere?</p>`,
      options: [{ id: `A`, text: `15,500` }, { id: `B`, text: `62,000` }, { id: `C`, text: `999,100` }, { id: `D`, text: `1,332,200` }],
      answer: `D` },

    { id: `m3ib-math-m1-17`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>An object is kicked from a platform. The equation <em>h</em> = &minus;4.9<em>t</em><sup>2</sup> + 5<em>t</em> + 12 represents this situation, where <em>h</em> is the height of the object above the ground, in meters, <em>t</em> seconds after it is kicked. Which number represents the height, in meters, from which the object was kicked?</p>`,
      options: [{ id: `A`, text: `0` }, { id: `B`, text: `4.9` }, { id: `C`, text: `5` }, { id: `D`, text: `12` }],
      answer: `D` },

    { id: `m3ib-math-m1-18`, domain: `Geometry and Trigonometry`, skill: `Right triangles and trigonometry`, difficulty: `hard`, type: `mcq`,
      prompt: `<p>In &triangle;<em>ABC</em>, &ang;<em>B</em> is a right angle and the length of <span style='text-decoration:overline'><em>BC</em></span> is 260 millimeters. If cos <em>A</em> = <sup>3</sup>&frasl;<sub>5</sub>, what is the length, in millimeters, of <span style='text-decoration:overline'><em>AB</em></span>?</p>`,
      options: [{ id: `A`, text: `325` }, { id: `B`, text: `260` }, { id: `C`, text: `195` }, { id: `D`, text: `65` }],
      answer: `C` },

    { id: `m3ib-math-m1-19`, domain: `Advanced Math`, skill: `Exponential functions`, difficulty: `hard`, type: `mcq`,
      prompt: `<p>In a certain state, the population of pheasants, a type of bird, is estimated each year by counting the number of pheasants observed along certain roads in the state. On average, each year from 2005 to 2015 the number of pheasants counted per mile of road decreased by 3.5% of the number of pheasants per mile of road the previous year. Based on this average, if there were 6.29 pheasants per mile of road in this state in 2005, which of the following best approximates the number of pheasants per mile of road in 2015?</p>`,
      options: [{ id: `A`, text: `0.965(6.29)<sup>10</sup>` }, { id: `B`, text: `1.035(6.29)<sup>10</sup>` }, { id: `C`, text: `6.29(0.035)<sup>10</sup>` }, { id: `D`, text: `6.29(0.965)<sup>10</sup>` }],
      answer: `D` },

    { id: `m3ib-math-m1-20`, domain: `Problem-Solving and Data Analysis`, skill: `Ratios, rates, proportional relationships, and units`, difficulty: `medium`, type: `grid`,
      prompt: `<p>To study fluctuations in leaf water potential, samples of wood were taken from 24 trees and cut in the shape of a cube. The length of the edge of one of these cubes is 2.00 centimeters. If this cube has a mass of 4.48 grams, what is the density of this cube, in grams per cubic centimeter?</p>`,
      answer: [`0.56`] },

    { id: `m3ib-math-m1-21`, domain: `Algebra`, skill: `Linear functions`, difficulty: `hard`, type: `grid`,
      prompt: `<table border='1' style='border-collapse:collapse;text-align:center' cellpadding='7'><tr><th><em>x</em></th><th><em>y</em></th></tr><tr><td>&minus;13</td><td>&minus;28</td></tr><tr><td>6</td><td>48</td></tr></table><p>The table shows two values of <em>x</em> and their corresponding values of <em>y</em>. The graph of the linear equation representing this relationship passes through the point (<sup>1</sup>&frasl;<sub>3</sub>, <em>a</em>). What is the value of <em>a</em>?</p>`,
      answer: [`76/3`, `25.33`] },

    { id: `m3ib-math-m1-22`, domain: `Algebra`, skill: `Systems of two linear equations in two variables`, difficulty: `hard`, type: `mcq`,
      prompt: `<p>Which system of linear equations has no solution?</p>`,
      options: [{ id: `A`, text: `&minus;7<em>x</em> + 8<em>y</em> = &minus;3<br>7<em>x</em> &minus; 8<em>y</em> = 3` }, { id: `B`, text: `7<em>x</em> &minus; 8<em>y</em> = 3<br>8<em>x</em> + 9<em>y</em> = 4` }, { id: `C`, text: `7<em>x</em> &minus; 8<em>y</em> = 3<br>&minus;21<em>x</em> + 24<em>y</em> = &minus;9` }, { id: `D`, text: `&minus;7<em>x</em> + 8<em>y</em> = 3<br>14<em>x</em> &minus; 16<em>y</em> = 6` }],
      answer: `D` },
  ];

  const MATH_M2 = [
    { id: `m3ib-math-m2-1`, domain: `Advanced Math`, skill: `Equivalent expressions`, difficulty: `easy`, type: `mcq`,
      prompt: `<p>Which expression is equivalent to (9<em>x</em><sup>2</sup> + 9) &minus; (2<em>x</em><sup>2</sup>)?</p>`,
      options: [{ id: `A`, text: `16` }, { id: `B`, text: `11<em>x</em><sup>2</sup> + 9` }, { id: `C`, text: `7<em>x</em><sup>2</sup> &minus; 9` }, { id: `D`, text: `7<em>x</em><sup>2</sup> + 9` }],
      answer: `D` },

    { id: `m3ib-math-m2-2`, domain: `Advanced Math`, skill: `Nonlinear equations and systems of equations`, difficulty: `medium`, type: `mcq`,
      prompt: `<p><svg viewBox='0 0 340 340' xmlns='http://www.w3.org/2000/svg' style='max-width:340px;background:#fff'><g stroke='#d3d3d3' stroke-width='1'><line x1='30.0' y1='10' x2='30.0' y2='316'/><line x1='67.2' y1='10' x2='67.2' y2='316'/><line x1='104.5' y1='10' x2='104.5' y2='316'/><line x1='141.8' y1='10' x2='141.8' y2='316'/><line x1='179.0' y1='10' x2='179.0' y2='316'/><line x1='216.2' y1='10' x2='216.2' y2='316'/><line x1='253.5' y1='10' x2='253.5' y2='316'/><line x1='290.8' y1='10' x2='290.8' y2='316'/><line x1='328.0' y1='10' x2='328.0' y2='316'/><line x1='30' y1='316.0' x2='328' y2='316.0'/><line x1='30' y1='272.3' x2='328' y2='272.3'/><line x1='30' y1='228.6' x2='328' y2='228.6'/><line x1='30' y1='184.9' x2='328' y2='184.9'/><line x1='30' y1='141.1' x2='328' y2='141.1'/><line x1='30' y1='97.4' x2='328' y2='97.4'/><line x1='30' y1='53.7' x2='328' y2='53.7'/><line x1='30' y1='10.0' x2='328' y2='10.0'/></g><g stroke='#333' stroke-width='1.5'><line x1='179.0' y1='10' x2='179.0' y2='316'/><line x1='30' y1='141.1' x2='328' y2='141.1'/></g><polyline points='50.1,10.6 59.1,45.7 68.0,78.2 76.9,108.2 85.9,135.7 94.8,160.6 103.8,183.1 112.7,203.0 121.6,220.4 130.6,235.3 139.5,247.7 148.5,257.6 157.4,264.9 166.3,269.8 175.3,272.1 184.2,271.9 193.2,269.1 202.1,263.9 211.0,256.1 220.0,245.8 228.9,233.0 237.9,217.7 246.8,199.9 255.7,179.5 264.7,156.7 273.6,131.3 282.6,103.4 291.5,72.9 300.4,40.0' fill='none' stroke='#111' stroke-width='2'/><line x1='79.7' y1='316.0' x2='253.5' y2='10.0' stroke='#111' stroke-width='2'/><g fill='#333' font-size='10' font-family='sans-serif' text-anchor='middle'><text x='30.0' y='153.1'>-4</text><text x='104.5' y='153.1'>-2</text><text x='253.5' y='153.1'>2</text><text x='328.0' y='153.1'>4</text></g><g fill='#333' font-size='10' font-family='sans-serif' text-anchor='end'><text x='175.0' y='319.0'>-8</text><text x='175.0' y='275.3'>-6</text><text x='175.0' y='231.6'>-4</text><text x='175.0' y='187.9'>-2</text><text x='175.0' y='100.4'>2</text><text x='175.0' y='56.7'>4</text><text x='175.0' y='13.0'>6</text></g><text x='185.0' y='19' fill='#333' font-size='11' font-family='sans-serif'>y</text><text x='326' y='137.1' fill='#333' font-size='11' font-family='sans-serif'>x</text></svg></p><p>The graph of a system of a linear and a quadratic equation is shown. Which system of equations is represented by the graph?</p>`,
      options: [{ id: `A`, text: `<em>y</em> = &minus;3<em>x</em><br><em>y</em> = <em>x</em><sup>2</sup> + 6` }, { id: `B`, text: `<em>y</em> = &minus;3<em>x</em><br><em>y</em> = <em>x</em><sup>2</sup> &minus; 6` }, { id: `C`, text: `<em>y</em> = 3<em>x</em><br><em>y</em> = <em>x</em><sup>2</sup> + 6` }, { id: `D`, text: `<em>y</em> = 3<em>x</em><br><em>y</em> = <em>x</em><sup>2</sup> &minus; 6` }],
      answer: `D` },

    { id: `m3ib-math-m2-3`, domain: `Geometry and Trigonometry`, skill: `Lines, angles, and triangles`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>In triangle <em>ABC</em>, the measure of angle <em>A</em> is 31&deg;, the measure of angle <em>B</em> is 90&deg;, and the measure of angle <em>C</em> is (<sup><em>k</em></sup>&frasl;<sub>2</sub>)&deg;. What is the value of <em>k</em>?</p>`,
      options: [{ id: `A`, text: `45` }, { id: `B`, text: `59` }, { id: `C`, text: `62` }, { id: `D`, text: `118` }],
      answer: `D` },

    { id: `m3ib-math-m2-4`, domain: `Algebra`, skill: `Linear equations in two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `<table border='1' style='border-collapse:collapse;text-align:center' cellpadding='6'><tr><th>Number of cars</th><th>Maximum number of passengers and crew</th></tr><tr><td>3</td><td>111</td></tr><tr><td>6</td><td>216</td></tr><tr><td>10</td><td>356</td></tr></table><p>The table shows the linear relationship between the number of cars, <em>c</em>, on a commuter train and the maximum number of passengers and crew, <em>p</em>, that the train can carry. Which equation represents the linear relationship between <em>c</em> and <em>p</em>?</p>`,
      options: [{ id: `A`, text: `35<em>c</em> &minus; <em>p</em> = &minus;6` }, { id: `B`, text: `35<em>c</em> &minus; <em>p</em> = 6` }, { id: `C`, text: `35<em>p</em> &minus; <em>c</em> = &minus;6` }, { id: `D`, text: `35<em>p</em> &minus; <em>c</em> = 6` }],
      answer: `A` },

    { id: `m3ib-math-m2-5`, domain: `Advanced Math`, skill: `Linear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<p style='text-align:center'><em>g</em>(<em>x</em>) = 5(16<em>x</em> &minus; 17)</p><p>What is the <em>y</em>-coordinate of the <em>y</em>-intercept of the graph of <em>y</em> = <em>g</em>(<em>x</em>) &minus; 5 in the <em>xy</em>-plane?</p>`,
      options: [{ id: `A`, text: `&minus;90` }, { id: `B`, text: `&minus;85` }, { id: `C`, text: `&minus;22` }, { id: `D`, text: `&minus;17` }],
      answer: `A` },

    { id: `m3ib-math-m2-6`, domain: `Advanced Math`, skill: `Exponential functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>At the start of an experiment, the pressure inside a container was 18 pounds per square inch (psi). The pressure inside the container doubled every 29 minutes after the start of the experiment. Which equation represents this situation, where <em>y</em> is the pressure, in psi, inside the container <em>x</em> minutes after the start of the experiment?</p>`,
      options: [{ id: `A`, text: `<em>y</em> = 18(2)<sup><em>x</em>&frasl;29</sup>` }, { id: `B`, text: `<em>y</em> = 18(29)<sup>2<em>x</em></sup>` }, { id: `C`, text: `<em>y</em> = 18(<em>x</em> + 29)<sup>2</sup>` }, { id: `D`, text: `<em>y</em> = 18<em>x</em><sup>2</sup> + 29` }],
      answer: `A` },

    { id: `m3ib-math-m2-7`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `medium`, type: `grid`,
      prompt: `<p style='text-align:center'>|<em>x</em> &minus; 8| + 72 = 88</p><p>What is the sum of the solutions to the given equation?</p>`,
      answer: [`16`] },

    { id: `m3ib-math-m2-8`, domain: `Advanced Math`, skill: `Exponential functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>What is the <em>y</em>-intercept of <em>y</em> = &minus;(8)<sup><em>x</em></sup> &minus; 38 in the <em>xy</em>-plane?</p>`,
      options: [{ id: `A`, text: `(0, &minus;39)` }, { id: `B`, text: `(0, &minus;37)` }, { id: `C`, text: `(0, &minus;38)` }, { id: `D`, text: `(0, &minus;46)` }],
      answer: `A` },

    { id: `m3ib-math-m2-9`, domain: `Advanced Math`, skill: `Nonlinear equations in one variable`, difficulty: `hard`, type: `grid`,
      prompt: `<p style='text-align:center'><em>x</em><sup>2</sup> + 9<em>x</em> + 6 = 0</p><p>One solution to the given equation can be written as <em>x</em> = <sup>&minus;9 + &radic;<span style='text-decoration:overline'><em>k</em></span></sup>&frasl;<sub>2</sub>, where <em>k</em> is a constant. What is the value of <em>k</em>?</p>`,
      answer: [`57`] },

    { id: `m3ib-math-m2-10`, domain: `Problem-Solving and Data Analysis`, skill: `Distributions and measures of center and spread`, difficulty: `hard`, type: `mcq`,
      prompt: `<p><svg viewBox='0 0 430 200' xmlns='http://www.w3.org/2000/svg' style='max-width:430px;background:#fff'><line x1='20' y1='150' x2='416' y2='150' stroke='#333' stroke-width='1.5'/><g stroke='#333' stroke-width='1'><line x1='48.3' y1='146' x2='48.3' y2='154'/><line x1='76.6' y1='146' x2='76.6' y2='154'/><line x1='104.9' y1='146' x2='104.9' y2='154'/><line x1='133.1' y1='146' x2='133.1' y2='154'/><line x1='161.4' y1='146' x2='161.4' y2='154'/><line x1='189.7' y1='146' x2='189.7' y2='154'/><line x1='218.0' y1='146' x2='218.0' y2='154'/><line x1='246.3' y1='146' x2='246.3' y2='154'/><line x1='274.6' y1='146' x2='274.6' y2='154'/><line x1='302.9' y1='146' x2='302.9' y2='154'/><line x1='331.1' y1='146' x2='331.1' y2='154'/><line x1='359.4' y1='146' x2='359.4' y2='154'/><line x1='387.7' y1='146' x2='387.7' y2='154'/></g><g fill='#111'><circle cx='48.3' cy='140.0' r='4.2'/><circle cx='48.3' cy='129.0' r='4.2'/><circle cx='133.1' cy='140.0' r='4.2'/><circle cx='133.1' cy='129.0' r='4.2'/><circle cx='133.1' cy='118.0' r='4.2'/><circle cx='161.4' cy='140.0' r='4.2'/><circle cx='161.4' cy='129.0' r='4.2'/><circle cx='218.0' cy='140.0' r='4.2'/><circle cx='246.3' cy='140.0' r='4.2'/><circle cx='274.6' cy='140.0' r='4.2'/><circle cx='331.1' cy='140.0' r='4.2'/><circle cx='331.1' cy='129.0' r='4.2'/><circle cx='387.7' cy='140.0' r='4.2'/></g><g fill='#333' font-size='12' font-family='sans-serif' text-anchor='middle'><text x='48.3' y='170.0'>720</text><text x='104.9' y='170.0'>722</text><text x='161.4' y='170.0'>724</text><text x='218.0' y='170.0'>726</text><text x='274.6' y='170.0'>728</text><text x='331.1' y='170.0'>730</text><text x='387.7' y='170.0'>732</text><text x='215' y='188' font-size='13'>Orbital period (days)</text></g></svg></p><p>A data set of the orbital periods, rounded to the nearest whole number of Earth days, for 13 of Jupiter's moons is represented in the dot plot. An additional moon with an orbital period of 621 days is added to the original data set to create a new data set of 14 orbital periods. Which statement best compares the mean and median of the new data set to the mean and median of the original data set?</p>`,
      options: [{ id: `A`, text: `The mean of the new data set is equal to the mean of the original data set, and the median of the new data set is equal to the median of the original data set.` }, { id: `B`, text: `The mean of the new data set is equal to the mean of the original data set, and the median of the new data set is less than the median of the original data set.` }, { id: `C`, text: `The mean of the new data set is less than the mean of the original data set, and the median of the new data set is less than the median of the original data set.` }, { id: `D`, text: `The mean of the new data set is less than the mean of the original data set, and the median of the new data set is equal to the median of the original data set.` }],
      answer: `D` },

    { id: `m3ib-math-m2-11`, domain: `Algebra`, skill: `Linear functions`, difficulty: `easy`, type: `grid`,
      prompt: `<p>The function <em>g</em> is defined by <em>g</em>(<em>x</em>) = 9<em>x</em>. For what value of <em>x</em> is <em>g</em>(<em>x</em>) = 63?</p>`,
      answer: [`7`] },

    { id: `m3ib-math-m2-12`, domain: `Algebra`, skill: `Linear inequalities in one or two variables`, difficulty: `hard`, type: `mcq`,
      prompt: `<p>In a set of four consecutive odd integers, where the integers are ordered from least to greatest, the first integer is represented by <em>x</em>. The product of 14 and the fourth odd integer is at most 23 less than the sum of the first and third odd integers. Which inequality represents this situation?</p>`,
      options: [{ id: `A`, text: `14(<em>x</em> + 4) &ge; 23 &minus; (<em>x</em> + (<em>x</em> + 3))` }, { id: `B`, text: `14(<em>x</em> + 4) &le; <em>x</em> + (<em>x</em> + 3) &minus; 23` }, { id: `C`, text: `14(<em>x</em> + 6) &ge; 23 &minus; (<em>x</em> + (<em>x</em> + 4))` }, { id: `D`, text: `14(<em>x</em> + 6) &le; <em>x</em> + (<em>x</em> + 4) &minus; 23` }],
      answer: `D` },

    { id: `m3ib-math-m2-13`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>If 10 + <sup>6(7 &minus; <em>x</em>)</sup>&frasl;<sub>5</sub> = <sup>4(7 &minus; <em>x</em>)</sup>&frasl;<sub>3</sub>, which equation must also be true?</p>`,
      options: [{ id: `A`, text: `7 &minus; <em>x</em> = 148` }, { id: `B`, text: `7 &minus; <em>x</em> = &minus;75` }, { id: `C`, text: `<em>x</em> &minus; 7 = 148` }, { id: `D`, text: `<em>x</em> &minus; 7 = &minus;75` }],
      answer: `D` },

    { id: `m3ib-math-m2-14`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `hard`, type: `mcq`,
      prompt: `<p>The function <em>f</em> is a quadratic function. In the <em>xy</em>-plane, the graph of <em>y</em> = <em>f</em>(<em>x</em>) has a vertex at (1, 6) and passes through the points (2, 34) and (&minus;1, 118). What is the value of <em>f</em>(&minus;2) &minus; <em>f</em>(0)?</p>`,
      options: [{ id: `A`, text: `90` }, { id: `B`, text: `146` }, { id: `C`, text: `224` }, { id: `D`, text: `258` }],
      answer: `C` },

    { id: `m3ib-math-m2-15`, domain: `Algebra`, skill: `Systems of two linear equations in two variables`, difficulty: `hard`, type: `grid`,
      prompt: `<p><svg viewBox='0 0 360 330' xmlns='http://www.w3.org/2000/svg' style='max-width:360px;background:#fff'><g stroke='#d3d3d3' stroke-width='1'><line x1='16.0' y1='12' x2='16.0' y2='308'/><line x1='34.7' y1='12' x2='34.7' y2='308'/><line x1='53.4' y1='12' x2='53.4' y2='308'/><line x1='72.1' y1='12' x2='72.1' y2='308'/><line x1='90.8' y1='12' x2='90.8' y2='308'/><line x1='109.5' y1='12' x2='109.5' y2='308'/><line x1='128.2' y1='12' x2='128.2' y2='308'/><line x1='146.9' y1='12' x2='146.9' y2='308'/><line x1='165.6' y1='12' x2='165.6' y2='308'/><line x1='184.4' y1='12' x2='184.4' y2='308'/><line x1='203.1' y1='12' x2='203.1' y2='308'/><line x1='221.8' y1='12' x2='221.8' y2='308'/><line x1='240.5' y1='12' x2='240.5' y2='308'/><line x1='259.2' y1='12' x2='259.2' y2='308'/><line x1='277.9' y1='12' x2='277.9' y2='308'/><line x1='296.6' y1='12' x2='296.6' y2='308'/><line x1='315.3' y1='12' x2='315.3' y2='308'/><line x1='334.0' y1='12' x2='334.0' y2='308'/><line x1='16' y1='308.0' x2='334' y2='308.0'/><line x1='16' y1='268.5' x2='334' y2='268.5'/><line x1='16' y1='229.1' x2='334' y2='229.1'/><line x1='16' y1='189.6' x2='334' y2='189.6'/><line x1='16' y1='150.1' x2='334' y2='150.1'/><line x1='16' y1='110.7' x2='334' y2='110.7'/><line x1='16' y1='71.2' x2='334' y2='71.2'/><line x1='16' y1='31.7' x2='334' y2='31.7'/></g><g stroke='#333' stroke-width='1.5'><line x1='296.6' y1='12' x2='296.6' y2='308'/><line x1='16' y1='308.0' x2='334' y2='308.0'/></g><line x1='34.7' y1='-11.0' x2='313.9' y2='308.0' stroke='#111' stroke-width='2'/><g fill='#111'><circle cx='72.1' cy='31.7' r='4'/><circle cx='296.6' cy='288.3' r='4'/></g><g fill='#333' font-size='10' font-family='sans-serif' text-anchor='middle'><text x='34.7' y='320.0'>-14</text><text x='72.1' y='320.0'>-12</text><text x='109.5' y='320.0'>-10</text><text x='146.9' y='320.0'>-8</text><text x='184.4' y='320.0'>-6</text><text x='221.8' y='320.0'>-4</text><text x='259.2' y='320.0'>-2</text></g><g fill='#333' font-size='10' font-family='sans-serif' text-anchor='start'><text x='300.6' y='271.5'>2</text><text x='300.6' y='232.1'>4</text><text x='300.6' y='192.6'>6</text><text x='300.6' y='153.1'>8</text><text x='300.6' y='113.7'>10</text><text x='300.6' y='74.2'>12</text><text x='300.6' y='34.7'>14</text></g><text x='301.6' y='21' fill='#333' font-size='11' font-family='sans-serif'>y</text><text x='332' y='304.0' fill='#333' font-size='11' font-family='sans-serif'>x</text><text x='287.6' y='305.0' fill='#333' font-size='10' font-family='sans-serif'>O</text></svg></p><p>The graph of line <em>g</em> is shown in the <em>xy</em>-plane. Line <em>k</em> is defined by 195<em>x</em> + <em>py</em> = <em>w</em>, where <em>p</em> and <em>w</em> are constants. If line <em>k</em> is graphed in this <em>xy</em>-plane, resulting in the graph of a system of two linear equations, the system of two linear equations will have infinitely many solutions. What is the value of <em>p</em> + <em>w</em>?</p>`,
      answer: [`360`] },

    { id: `m3ib-math-m2-16`, domain: `Geometry and Trigonometry`, skill: `Area and volume`, difficulty: `medium`, type: `grid`,
      prompt: `<p>Triangles <em>ABC</em> and <em>DEF</em> are similar. Each side length of triangle <em>ABC</em> is 3 times the corresponding side length of triangle <em>DEF</em>. The area of triangle <em>ABC</em> is 170 square inches. What is the area, in square inches, of triangle <em>DEF</em>?</p>`,
      answer: [`170/9`, `18.88`, `18.89`] },

    { id: `m3ib-math-m2-17`, domain: `Problem-Solving and Data Analysis`, skill: `Percentages`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>After 60% of the original number of objects in a group were removed from the group, 300 objects remained in the group. How many objects were removed from the group?</p>`,
      options: [{ id: `A`, text: `180` }, { id: `B`, text: `450` }, { id: `C`, text: `500` }, { id: `D`, text: `750` }],
      answer: `B` },

    { id: `m3ib-math-m2-18`, domain: `Problem-Solving and Data Analysis`, skill: `Distributions and measures of center and spread`, difficulty: `easy`, type: `grid`,
      prompt: `<p style='text-align:center'>12, 12, 18, 24, 29</p><p>What is the median of the data set shown?</p>`,
      answer: [`18`] },

    { id: `m3ib-math-m2-19`, domain: `Advanced Math`, skill: `Nonlinear equations and systems of equations`, difficulty: `hard`, type: `mcq`,
      prompt: `<p style='text-align:center'><em>y</em> = <em>x</em> &minus; <em>c</em><br><em>y</em> = &minus;2(<em>x</em> &minus; 12)<sup>2</sup></p><p>In the given system of equations, <em>c</em> is a constant. The system has two distinct real solutions. Which of the following could be the value of <em>c</em>?</p>`,
      options: [{ id: `A`, text: `7` }, { id: `B`, text: `11` }, { id: `C`, text: `<sup>95</sup>&frasl;<sub>8</sub>` }, { id: `D`, text: `17` }],
      answer: `D` },

    { id: `m3ib-math-m2-20`, domain: `Geometry and Trigonometry`, skill: `Right triangles and trigonometry`, difficulty: `hard`, type: `mcq`,
      prompt: `<p>The perimeter of an isosceles right triangle is 26 + 26&radic;2 inches. What is the length, in inches, of the hypotenuse of this triangle?</p>`,
      options: [{ id: `A`, text: `13` }, { id: `B`, text: `13&radic;2` }, { id: `C`, text: `26` }, { id: `D`, text: `26&radic;2` }],
      answer: `C` },

    { id: `m3ib-math-m2-21`, domain: `Advanced Math`, skill: `Exponents and radicals`, difficulty: `hard`, type: `grid`,
      prompt: `<p>If <em>n</em> and <em>k</em> are numbers greater than 1 and <sup>2</sup>&radic;<span style='text-decoration:overline'><em>n</em><sup>5</sup></span> is equivalent to <sup>5</sup>&radic;<span style='text-decoration:overline'><em>k</em><sup>4</sup></span>, for what value of <em>a</em> is <em>n</em><sup>4<em>a</em>+1</sup> equal to <em>k</em>?</p>`,
      answer: [`17/32`, `.5312`, `0.531`, `.5313`] },

    { id: `m3ib-math-m2-22`, domain: `Problem-Solving and Data Analysis`, skill: `Ratios, rates, proportional relationships, and units`, difficulty: `hard`, type: `mcq`,
      prompt: `<p>An object's speed is increasing at a rate of 10.7 meters per second squared. What is this rate, in miles per minute squared, rounded to the nearest tenth? (Use 1 mile = 1,609 meters.)</p>`,
      options: [{ id: `A`, text: `0.4` }, { id: `B`, text: `23.9` }, { id: `C`, text: `150.4` }, { id: `D`, text: `286.9` }],
      answer: `B` },
  ];

  Apex.bank.register({
    id: "dsat-2024-03-int-b",
    title: "March 2024",
    type: "digital",
    region: "International",
    version: "B",
    year: 2024,
    monthNum: 3,
    tagline: "International \u00b7 Version B",
    description: "Digital SAT \u2014 March 2024 International prediction form, Version B (answers solved independently; parallel-twin RW-M2).",
    adaptive: false,
    sections: [
      { id: "rw", modules: [
        { id: "m3ib-rw-m1", stage: 1, name: "Reading and Writing \u2014 Module 1", minutes: 32, questions: RW_M1 },
        { id: "m3ib-rw-m2", stage: 2, variant: "hard", name: "Reading and Writing \u2014 Module 2 (Hard)", minutes: 32, questions: RW_M2 },
      ] },
      { id: "math", modules: [
        { id: "m3ib-math-m1", stage: 1, name: "Math \u2014 Module 1", minutes: 35, calculator: true, questions: MATH_M1 },
        { id: "m3ib-math-m2", stage: 2, variant: "hard", name: "Math \u2014 Module 2 (Hard)", minutes: 35, calculator: true, questions: MATH_M2 },
      ] },
    ],
  });
})();
