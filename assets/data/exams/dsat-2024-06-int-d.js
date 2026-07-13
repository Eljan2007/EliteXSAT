/* Digital SAT - June 2024 International Form D (Set 4). R&W native; COMPENSATION: Math-M1 from Version A, Math-M2 from Version C (two different versions). Both Module 2s Hard. No explanations. COMPLETE. */
(function () {
  const RW_M1 = [
    { id: `j6id-rw-m1-1`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `easy`, type: `mcq`,
      passage: `<p>The following text is from Jhumpa Lahiri&rsquo;s 2003 novel <em>The Namesake</em>. Gogol, a child, is at a beach in Massachusetts with his father.</p><p>He watches his father <u>raise</u> a kite within minutes into the wind, so high that Gogol must tip his head back in order to see, a rippling speck against the sky. The wind whips around their ears, turning their faces cold.</p>`,
      prompt: `<p>As used in the text, what does the word &ldquo;raise&rdquo; most nearly mean?</p>`,
      options: [{ id: `A`, text: `Create` }, { id: `B`, text: `Congratulate` }, { id: `C`, text: `Strengthen` }, { id: `D`, text: `Lift` }],
      answer: `D` },

    { id: `j6id-rw-m1-2`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Novelist Leon Forrest admired William Faulkner&rsquo;s writing style. Forrest&rsquo;s novel <em>Divine Days</em> contains a long passage in tribute to Faulkner that is a perfect _____ of Faulkner&rsquo;s style: anyone familiar with Faulkner&rsquo;s writing would see the resemblance.</p>`,
      prompt: `<p>Which choice completes the text with the most logical and precise word or phrase?</p>`,
      options: [{ id: `A`, text: `forgetting` }, { id: `B`, text: `rejection` }, { id: `C`, text: `imitation` }, { id: `D`, text: `opinion` }],
      answer: `C` },

    { id: `j6id-rw-m1-3`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The Stock Exchange of Thailand in Bangkok, Thailand, is a dedicated exchange for investing in companies operating in Thailand, ensuring those companies receive certain regulatory oversight. Knowing this can _____ potential investors&rsquo; worries about bureaucratic minutiae and thereby allow them to instead focus on identifying sound business opportunities.</p>`,
      prompt: `<p>Which choice completes the text with the most logical and precise word or phrase?</p>`,
      options: [{ id: `A`, text: `designate` }, { id: `B`, text: `amplify` }, { id: `C`, text: `assuage` }, { id: `D`, text: `convey` }],
      answer: `C` },

    { id: `j6id-rw-m1-4`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The tendency to group authors together into distinct literary movements often encourages literary scholars to _____ subtleties in an author&rsquo;s style. Those studying the works of Amos Bronson Alcott, for instance, may inadvertently overlook nuances in his work by focusing only on the most obvious ways in which his style corresponds to transcendentalism.</p>`,
      prompt: `<p>Which choice completes the text with the most logical and precise word or phrase?</p>`,
      options: [{ id: `A`, text: `magnify` }, { id: `B`, text: `scrutinize` }, { id: `C`, text: `discount` }, { id: `D`, text: `denounce` }],
      answer: `C` },

    { id: `j6id-rw-m1-5`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Though it does not guarantee a book&rsquo;s commercial success, _____ can play a big role in that success&mdash;a well-executed marketing campaign helped to make Richard Bachman&rsquo;s novel <em>The Regulators</em> the fifth-best-selling novel of 1996.</p>`,
      prompt: `<p>Which choice completes the text with the most logical and precise word or phrase?</p>`,
      options: [{ id: `A`, text: `originality` }, { id: `B`, text: `publicity` }, { id: `C`, text: `complexity` }, { id: `D`, text: `practicality` }],
      answer: `B` },

    { id: `j6id-rw-m1-6`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The following text is adapted from Louise Erdrich&rsquo;s 2020 novel <em>The Night Watchman</em>. Louis Pipestone is collecting signatures for a petition from fellow members of the Turtle Mountain Band of Chippewa on the tribe&rsquo;s reservation in North Dakota.</p><p>Louis Pipestone tended the petition like a garden. He kept it with him at all times. In town, his eyes sharpened when he noticed a tribal member who hadn&rsquo;t yet signed. Wherever they were&mdash;at the gas pump, mercantile [general store], at Henry&rsquo;s [Caf&eacute;], on the road, or outside the clinic and hospital&mdash;Louis cornered them. If they were waiting for a baby to be born, he&rsquo;d have them sign. If they were laughing, if they were arguing. If they were taking a child home from school, they signed.</p>`,
      prompt: `<p>Which choice best states the main purpose of the text?</p>`,
      options: [{ id: `A`, text: `To show that attitudes toward the petition within the tribal community change over time` }, { id: `B`, text: `To demonstrate that most tribal members are enthusiastic about signing the petition` }, { id: `C`, text: `To portray Louis Pipestone&rsquo;s strong commitment to collecting signatures for the petition` }, { id: `D`, text: `To suggest that some tribal members refuse to sign the petition because they dislike Louis Pipestone` }],
      answer: `C` },

    { id: `j6id-rw-m1-7`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `<p>In Nuxalk, an Indigenous language from the Pacific Northwest region of what are now the United States and Canada, <em>wats&rsquo;</em> means &ldquo;a dog,&rdquo; whereas <em>wawats&rsquo;ii</em> means &ldquo;a small or cute dog.&rdquo; <u>This phenomenon, in which an element of a root word is repeated, sometimes with modification, within another word that is related to the root word, is called reduplication.</u> In this case, the element &ldquo;wa&rdquo; in <em>wats&rsquo;</em> gets repeated in <em>wawats&rsquo;ii</em>. There are many examples of this type of reduplication in Nuxalk.</p>`,
      prompt: `<p>Which choice best describes the function of the underlined sentence in the text as a whole?</p>`,
      options: [{ id: `A`, text: `It explains where the language discussed in the text is from.` }, { id: `B`, text: `It provides English translations of the Nuxalk words discussed in the text.` }, { id: `C`, text: `It contrasts the language discussed in the text with other languages.` }, { id: `D`, text: `It provides a general definition of the phenomenon discussed in the text.` }],
      answer: `D` },

    { id: `j6id-rw-m1-8`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Microplastics are tiny pieces of plastic waste. Areas of the ocean with higher concentrations of microplastic particles also have smaller and fewer waves. A study by Yukun Sun and colleagues found that the concentration of microplastic particles cannot be the only reason for this reduced wave activity because the concentration of particles that would have the observed effect is much higher than that found in these areas of the ocean. However, they found that surfactants, chemicals often used to manufacture plastics, are released into the water from microplastics and have a much stronger wave-reducing effect.</p>`,
      prompt: `<p>According to the text, what did Sun and colleagues discover about surfactants?</p>`,
      options: [{ id: `A`, text: `They can be used to contain microplastics within certain areas of the ocean.` }, { id: `B`, text: `They are mainly composed of water.` }, { id: `C`, text: `They have a much stronger effect on wave activity than microplastics alone do.` }, { id: `D`, text: `They are helpful for removing microplastics from the ocean.` }],
      answer: `C` },

    { id: `j6id-rw-m1-9`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Artificial leaves are a developing renewable energy technology that mimics the process of photosynthesis in plants. These devices are silicon-based solar cells coated in chemical catalysts that activate reactions that split water molecules into hydrogen and oxygen gas. The technology, while generating lots of interest, is not yet commercially viable as a large-scale energy source. To meet this challenge, scientists from many fields are researching ways to store, transport, and distribute the energy the devices produce while other scientists are working to improve the cost and efficiency of the devices.</p>`,
      prompt: `<p>Which choice best states the main idea of the text?</p>`,
      options: [{ id: `A`, text: `Continued research and development in artificial-leaf technology is needed before the devices can be widely used as an energy source.` }, { id: `B`, text: `The recent increase in the commercial use of artificial leaves as an energy source has encouraged many scientists to research ways to improve the technology.` }, { id: `C`, text: `Artificial leaves were developed to mimic the natural process of photosynthesis in plants in order to store energy for long-term commercial use.` }, { id: `D`, text: `Artificial leaves split water molecules into oxygen and hydrogen gas using catalysts more efficiently than plants using the process of photosynthesis.` }],
      answer: `A` },

    { id: `j6id-rw-m1-10`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `easy`, type: `mcq`,
      passage: `<div style='text-align:center'><p><strong>Total Areas of Five Tribal Nations around the United States</strong></p><table style='border-collapse:collapse;margin:4px auto;font-size:0.9em' border='1' cellpadding='5'><tr><td>Tribal nation</td><td>Location</td><td>Area (square miles)</td></tr><tr><td>Tohono O&rsquo;odham Nation</td><td>Arizona</td><td>4,453</td></tr><tr><td>Standing Rock Sioux Tribe</td><td>North and South Dakota</td><td>3,662</td></tr><tr><td>Hopi Tribe</td><td>Arizona</td><td>2,533</td></tr><tr><td>Yakama Nation</td><td>Washington</td><td>2,188</td></tr><tr><td>Choctaw Nation</td><td>Oklahoma</td><td>10,864</td></tr></table></div><p>A citizen of the Standing Rock Sioux Tribe is a student in a geography class. The student wants to compare the total area covered by his tribal nation in North and South Dakota with the total areas covered by certain tribal nations in other states. Looking at the table, he finds that the area of the Standing Rock Sioux Tribe is 3,662 square miles, while the area of the Yakama Nation in Washington is _____</p>`,
      prompt: `<p>Which choice most effectively uses data from the table to complete the comparison?</p>`,
      options: [{ id: `A`, text: `10,864 square miles.` }, { id: `B`, text: `2,533 square miles.` }, { id: `C`, text: `4,453 square miles.` }, { id: `D`, text: `2,188 square miles.` }],
      answer: `D` },

    { id: `j6id-rw-m1-11`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `medium`, type: `mcq`,
      passage: `<div style='text-align:center'><p><strong>Numbers of the 23 Non-native Tree Species Reported and the Insect and Fungus Threats to Them</strong></p><table style='border-collapse:collapse;margin:4px auto;font-size:0.9em' border='1' cellpadding='5'><tr><td>Country</td><td>Trees</td><td>Fungi</td><td>Insects</td></tr><tr><td>Italy</td><td>14</td><td>57</td><td>42</td></tr><tr><td>Poland</td><td>10</td><td>25</td><td>105</td></tr><tr><td>Finland</td><td>6</td><td>11</td><td>28</td></tr></table></div><p>Elisabeth P&ouml;tzelsberger and colleagues gathered data on 23 non-native tree species grown in Europe. They analyzed reports from Poland, Italy, and Finland about the number of these species grown in those countries as well as the numbers of insect and fungus species that damage those trees. The researchers concluded that Poland reported a greater number of damaging insect species than either of the other countries did.</p>`,
      prompt: `<p>Which choice best describes data from the table that support P&ouml;tzelsberger and colleagues&rsquo; conclusion?</p>`,
      options: [{ id: `A`, text: `Italy reported 57 damaging fungus species and 42 damaging insect species, while both Poland and Finland reported more insect species than fungus species.` }, { id: `B`, text: `Poland reported 105 damaging insect species, which is more than either Italy or Finland reported.` }, { id: `C`, text: `Italy reported 57 damaging fungus species, which is more than either Poland or Finland reported.` }, { id: `D`, text: `Italy and Finland reported 14 and 6 damaging insect species, respectively, which is far fewer than Poland reported.` }],
      answer: `B` },

    { id: `j6id-rw-m1-12`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `<div style='text-align:center'><p><strong>Ranking of Environmental and Sociocultural Benefits of Urban Agriculture (scale of 1 to 25; 1 = highest)</strong></p><table style='border-collapse:collapse;margin:4px auto;font-size:0.85em' border='1' cellpadding='5'><tr><td>Social or ecological service</td><td>Project leaders</td><td>Stakeholders</td><td>General public</td></tr><tr><td>provision of medicinal plants</td><td>22</td><td>21</td><td>5</td></tr><tr><td>enhancement of pollination</td><td>1</td><td>7</td><td>12</td></tr><tr><td>enhancement of carbon sequestration</td><td>17</td><td>22</td><td>21</td></tr><tr><td>preservation of cultural knowledge and heritage</td><td>8</td><td>15</td><td>13</td></tr><tr><td>prevention of soil erosion</td><td>13</td><td>11</td><td>23</td></tr></table></div><p>Esther Sany&eacute;-Mengual, Kathrin Specht, and their team surveyed three groups of people in Bologna, Italy&mdash;leaders of urban agriculture projects, stakeholders in urban agriculture (e.g., food researchers and urban farming associations), and the general public&mdash;to compare their views about the extent to which urban agriculture contributes to 25 social or ecological services that the team identified. The researchers used these ratings to rank the services for each group, with a ranking of 1 indicating that a group perceives that urban agriculture benefits that service the most. Using only the rankings shown in the table, a city planner in Bologna who is promoting a new urban agriculture project concludes that advertisements aimed at the general public should emphasize the project&rsquo;s benefit to the provision of medicinal plants.</p>`,
      prompt: `<p>Which choice best describes data in the table that support the city planner&rsquo;s conclusion?</p>`,
      options: [{ id: `A`, text: `The prevention of soil erosion was ranked higher for the general public than was the provision of medicinal plants.` }, { id: `B`, text: `The provision of medicinal plants was ranked higher for the general public than were the other four services.` }, { id: `C`, text: `The provision of medicinal plants was ranked higher for stakeholders than it was for the general public.` }, { id: `D`, text: `The enhancement of pollination was ranked lower for the general public than it was for project leaders.` }],
      answer: `B` },

    { id: `j6id-rw-m1-13`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Veronica L. Bura, Akito Y. Kawahara, and Jayne E. Yack investigated the evolution and function of sound production in silk moth and hawk moth caterpillars. They found that during harmless simulated attacks on isolated caterpillars, 33% of the tested species produced sound, which ranged from clicks in <em>Manduca pellenia</em> to vocalizations in <em>Sphecodina abbottii</em>. Although some insects use sound to communicate with members of the same species, the researchers claim that the caterpillar sounds recorded in their study are directed primarily at predators.</p>`,
      prompt: `<p>Which finding, if true, would most directly support Bura and colleagues&rsquo; claim?</p>`,
      options: [{ id: `A`, text: `None of the species that emitted sounds did so before the simulated attacks, and nearly all stopped emitting sounds within ten seconds after the attacks.` }, { id: `B`, text: `In most cases, the sound that a caterpillar species produced during simulated attacks was not produced by other caterpillar species during simulated attacks.` }, { id: `C`, text: `Caterpillar clicks were emitted in a frequency detectable by birds that prey on caterpillars, but caterpillar vocalizations were not.` }, { id: `D`, text: `Each caterpillar species tended to produce one sound during simulated attacks, although individuals occasionally made a variety of other sounds during simulated attacks as well.` }],
      answer: `A` },

    { id: `j6id-rw-m1-14`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Over 600 languages are spoken in New York City in addition to English&mdash;one can find Aromanian spoken in the neighborhood of Ridgewood, or Hindi in Gramercy Park. Many immigrants from north China, where Mandarin is the primary language, reside in the neighborhood of Flushing (part of New York City&rsquo;s borough of Queens) while those who emigrated from south China, where many people speak Cantonese or Fuzhounese as a first language, tend to reside in Chinatown, in the borough of Manhattan. Among speakers of Chinese languages, those in Flushing tend to speak Mandarin as their primary language while those in Chinatown tend to speak Cantonese or Fuzhounese as their primary language. This is most likely because _____</p>`,
      prompt: `<p>Which choice most logically completes the text?</p>`,
      options: [{ id: `A`, text: `Chinese immigrants who emigrated to New York City many years ago are more likely to speak several Chinese languages than are more recent Chinese immigrants.` }, { id: `B`, text: `there are geographic differences in primary language within China that are reflected in the settlement patterns of Chinese immigrants in New York City.` }, { id: `C`, text: `Chinese immigrants regularly change their residences between Queens and Manhattan after they emigrate, rather than staying in one borough.` }, { id: `D`, text: `taken together, there are more Cantonese and Fuzhounese speakers among Chinese immigrants in New York City than there are Mandarin speakers.` }],
      answer: `B` },

    { id: `j6id-rw-m1-15`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `easy`, type: `mcq`,
      passage: `<p>Robert Morris&rsquo;s image was printed on $1,000 US banknotes in 1862, making the former US superintendent of finance one of many nonpresidents _____ on US currency.</p>`,
      prompt: `<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>`,
      options: [{ id: `A`, text: `to appear` }, { id: `B`, text: `appears` }, { id: `C`, text: `did appear` }, { id: `D`, text: `had appeared` }],
      answer: `A` },

    { id: `j6id-rw-m1-16`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Many experts, like lawyer and cycling advocate Ernesto Hernandez-Lopez, have proposed bike travel as one possible way to alleviate congestion on the busy roadways of Los Angeles County, California. Indeed, local bicycle paths like the San Francisquito _____ have become an increasingly popular means of travel for commuter and recreational trips alike.</p>`,
      prompt: `<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>`,
      options: [{ id: `A`, text: `Trail which is 4.36 miles long&mdash;` }, { id: `B`, text: `Trail: which is 4.36 miles long,` }, { id: `C`, text: `Trail, which is 4.36 miles long` }, { id: `D`, text: `Trail, which is 4.36 miles long,` }],
      answer: `D` },

    { id: `j6id-rw-m1-17`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Wisconsin, _____ 1,372 feet in elevation, reaches its highest point at Timms Hill.</p>`,
      prompt: `<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>`,
      options: [{ id: `A`, text: `spans` }, { id: `B`, text: `spanning` }, { id: `C`, text: `span` }, { id: `D`, text: `spanned` }],
      answer: `B` },

    { id: `j6id-rw-m1-18`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Over the years, dozens of architectural and archaeological sites important to Hawaiian history and culture, such as the Wailua Complex of Heiaus and Menehune Fishpond, have been added to the Hawai&lsquo;i Register of Historic Places, and each year, a review board of experts that includes sociologist Alton Okinaka and architect Katie Stephens gathers to _____ which sites to add next to the growing registry.</p>`,
      prompt: `<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>`,
      options: [{ id: `A`, text: `select;` }, { id: `B`, text: `select:` }, { id: `C`, text: `select,` }, { id: `D`, text: `select` }],
      answer: `D` },

    { id: `j6id-rw-m1-19`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While the greater adjutant can be found in places like the Koshi Tappu Wildlife Reserve in Nepal and Chhnuk Tru in Cambodia, more than 80 percent of this endangered stork species is found in Assam, India. There, wildlife biologist Dr. Purnima Devi Barman is on the front lines of conservation efforts _____ through community involvement and scientific study, aim to bring adjutants back from near extinction.</p>`,
      prompt: `<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>`,
      options: [{ id: `A`, text: `that&mdash;` }, { id: `B`, text: `that;` }, { id: `C`, text: `that:` }, { id: `D`, text: `that,` }],
      answer: `D` },

    { id: `j6id-rw-m1-20`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `<p>In knot theory (the mathematical study of curved, closed loops), knots are characterized by their crossing numbers&mdash;that is, the number of times the knotted thread crosses over itself. The trefoil knot and the figure-eight knot, each with a crossing number below five, _____ among the simplest possible knots with the fewest number of crossings.</p>`,
      prompt: `<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>`,
      options: [{ id: `A`, text: `was` }, { id: `B`, text: `is` }, { id: `C`, text: `has been` }, { id: `D`, text: `are` }],
      answer: `D` },

    { id: `j6id-rw-m1-21`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>At 4,000 years old, the Ancient Yew, a common yew (<em>Taxus baccata</em>) located in the United Kingdom, is one of the oldest known trees in the world. With four millennia of climate data in its tree rings, a single tree like this, claims _____ Valerie Trouet, can tell the history of the world.</p>`,
      prompt: `<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>`,
      options: [{ id: `A`, text: `dendrochronologist:` }, { id: `B`, text: `dendrochronologist,` }, { id: `C`, text: `dendrochronologist&mdash;` }, { id: `D`, text: `dendrochronologist` }],
      answer: `D` },

    { id: `j6id-rw-m1-22`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Space scientist Luminata Ilinca Ignat is excited about the potential of the new James Webb Space Telescope (JWST). Unlike its predecessor, the Hubble Telescope, the JWST is primarily an infrared telescope. Most light from distant galaxies is infrared; _____ the JWST can provide Ilinca Ignat and her team much more information about these galaxies than the Hubble could.</p>`,
      prompt: `<p>Which choice completes the text with the most logical transition?</p>`,
      options: [{ id: `A`, text: `consequently,` }, { id: `B`, text: `in contrast,` }, { id: `C`, text: `additionally,` }, { id: `D`, text: `actually,` }],
      answer: `A` },

    { id: `j6id-rw-m1-23`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>During many historic New York City parades, including the 1912 ticker-tape parade for US Olympic champions, the ribbonlike swirls descending on the scene were paper spools from &ldquo;tickers,&rdquo; telegraph machines that were used to transmit stock prices. _____ the tickers had long since been retired by the time of the parade for the New York Giants in 2008. Then, shredded standard paper enriched the celebration.</p>`,
      prompt: `<p>Which choice completes the text with the most logical transition?</p>`,
      options: [{ id: `A`, text: `For example,` }, { id: `B`, text: `In addition,` }, { id: `C`, text: `Of course,` }, { id: `D`, text: `As a result,` }],
      answer: `D` },

    { id: `j6id-rw-m1-24`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li><em>Birds of Northern South America</em> is an identification guidebook by ornithologists Robin Restall, Clemencia Rodner, and Miguel Lentino.</li><li>It lists the thirty-five hummingbird species found in Suriname.</li><li>The great-billed hermit is a large hummingbird found in Suriname.</li><li>It is identifiable by its bronzy back and its very long, black, curved bill.</li><li>The amethyst woodstar is a small hummingbird found in Suriname.</li><li>It is identifiable by its green back and its short, black, straight bill.</li></ul>`,
      prompt: `<p>Which choice most effectively uses information from the given sentences to emphasize a difference between the two birds?</p>`,
      options: [{ id: `A`, text: `Identifiable by its very long, black, curved bill and its bronzy back, the great-billed hermit is a large hummingbird found in Suriname.` }, { id: `B`, text: `One way to distinguish the great-billed hermit from the amethyst woodstar is to look at their bills: the great-billed hermit&rsquo;s is curved, whereas the amethyst woodstar&rsquo;s is straight.` }, { id: `C`, text: `The great-billed hermit and the amethyst woodstar are two of the thirty-five different hummingbird species found in Suriname.` }, { id: `D`, text: `The amethyst woodstar is a small hummingbird identifiable by its green back and its short, black, straight bill.` }],
      answer: `B` },

    { id: `j6id-rw-m1-25`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>The French Republican calendar replaced the Gregorian calendar in France from 1793 to 1805.</li><li>Both calendars are divided into twelve months.</li><li>The timelines for the months don&rsquo;t match.</li><li>The sixth month of the French Republican calendar, Vent&ocirc;se, begins during February, the second month of the Gregorian calendar.</li><li>The eighth month of the French Republican calendar, Flor&eacute;al, begins during April, the fourth month of the Gregorian calendar.</li></ul>`,
      prompt: `<p>The student wants to emphasize a difference between the French Republican and Gregorian calendars. Which choice most effectively uses relevant information from the notes to accomplish this goal?</p>`,
      options: [{ id: `A`, text: `Used in France from 1793 to 1805, the French Republican calendar includes the months of Vent&ocirc;se and Flor&eacute;al (the sixth and eighth months of the year).` }, { id: `B`, text: `The second and fourth months of the Gregorian calendar are February and April, respectively.` }, { id: `C`, text: `The timelines for the months of the two calendars don&rsquo;t match; for example, the sixth month of the French Republican calendar begins during the second month of the Gregorian calendar.` }, { id: `D`, text: `The French Republican calendar, which replaced the Gregorian calendar in France from 1793 to 1805, has twelve months, including the months of Vent&ocirc;se and Flor&eacute;al.` }],
      answer: `C` },

    { id: `j6id-rw-m1-26`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>The Mohs scale of mineral hardness is a ten-point scale that orders minerals by hardness based on their ability to scratch other minerals.</li><li>Minerals with larger numbers are harder than minerals with smaller numbers and can leave visible scratches on them.</li><li>Minerals with smaller numbers are softer than minerals with larger numbers and cannot leave visible scratches on them.</li><li>The mineral fluorite has a Mohs scale number of 4.</li><li>The mineral quartz has a Mohs scale number of 7.</li><li>The mineral diamond has a Mohs scale number of 10.</li></ul>`,
      prompt: `<p>The student wants to compare the hardness of the three minerals. Which choice most effectively uses relevant information from the notes to accomplish this goal?</p>`,
      options: [{ id: `A`, text: `Based on their Mohs scale numbers, diamond (10) is harder than quartz (7), and quartz is harder than fluorite (4).` }, { id: `B`, text: `A mineral with a Mohs number of 10, like diamond, is harder than one with a Mohs number of 7, like quartz.` }, { id: `C`, text: `The Mohs scale of mineral hardness can be used to order quartz, fluorite, and diamond by their ability to scratch other minerals.` }, { id: `D`, text: `Diamond can leave visible scratches on fluorite, which is why diamond has a higher number than fluorite on the Mohs scale of mineral hardness.` }],
      answer: `A` },

    { id: `j6id-rw-m1-27`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `hard`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>Yn&eacute;s Mex&iacute;a was a Mexican American botanist.</li><li>Between 1917 and 1938, she collected over 150,000 botanical samples throughout the Americas.</li><li>She collected a sample of <em>Wulffia maculata</em> in Minas Gerais, Brazil, on January 25, 1930.</li><li>She collected a sample of <em>Senecio chapalensis</em> in Jalisco, Mexico, on January 17, 1927.</li><li>These specimens are part of the Asteraceae family.</li><li>They can now be viewed online at the C.V. Starr Virtual Herbarium.</li></ul>`,
      prompt: `<p>Which choice most effectively uses information from the given sentences to begin a narration of Mex&iacute;a&rsquo;s collection of <em>Wulffia maculata</em>?</p>`,
      options: [{ id: `A`, text: `It was on January 25, 1930, in the state of Minas Gerais, that Yn&eacute;s Mex&iacute;a added a new specimen to her growing collection of botanical samples: <em>Wulffia maculata</em> of the Asteraceae family.` }, { id: `B`, text: `Yn&eacute;s Mex&iacute;a collected a sample of <em>Wulffia maculata</em> in January of 1930 and <em>Senecio chapalensis</em> in January of 1927.` }, { id: `C`, text: `While both specimens collected by Yn&eacute;s Mex&iacute;a are members of the Asteraceae family, <em>Wulffia maculata</em> was collected in Minas Gerais, Brazil, and <em>Senecio chapalensis</em> was collected in Jalisco, Mexico.` }, { id: `D`, text: `Thousands of botanical samples collected from across the Americas by Yn&eacute;s Mex&iacute;a can now be found in one place: online at the C.V. Starr Virtual Herbarium.` }],
      answer: `A` },
  ];

  const RW_M2 = [
    { id: `j6id-rw-m2-1`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `hard`, type: `mcq`,
      passage: `<p>The following text is from Charles W. Chesnutt&rsquo;s 1905 novel <em>The Colonel&rsquo;s Dream</em>. Mr. French and Mr. Kirby work together.</p><p>Mr. French, the senior partner, who sat opposite Kirby, was an older man&mdash;a safe guess would have <u>placed</u> him somewhere in the debatable ground between forty and fifty; of a good height, as could be seen even from the seated figure, the upper part of which was held erect with the unconscious ease which one associates with military training.</p>`,
      prompt: `<p>As used in the text, what does the word &ldquo;placed&rdquo; most nearly mean?</p>`,
      options: [{ id: `A`, text: `Changed` }, { id: `B`, text: `Arranged` }, { id: `C`, text: `Enlisted` }, { id: `D`, text: `Estimated` }],
      answer: `D` },

    { id: `j6id-rw-m2-2`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `hard`, type: `mcq`,
      passage: `<p>The results of randomized clinical trials testing the efficacy of common medical interventions sometimes fail to _____ conclusions that practitioners reach based on their real-world observations of patients. While there are several possible reasons for this, one is that practitioners may overlook confounding variables that account for the results they attribute to the interventions in question.</p>`,
      prompt: `<p>Which choice completes the text with the most logical and precise word or phrase?</p>`,
      options: [{ id: `A`, text: `implement` }, { id: `B`, text: `circumvent` }, { id: `C`, text: `corroborate` }, { id: `D`, text: `disseminate` }],
      answer: `C` },

    { id: `j6id-rw-m2-3`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Sarah Marquis, who walked 16,000 kilometers across Asia, Siberia, and Australia, undoubtedly accomplished much, but her place in our historical memory is perhaps more _____ than that of a noteworthy &ldquo;first&rdquo; such as An&eacute;sia Pinheiro Machado, who was the first female pilot in Brazil to carry passengers and the first to make stunt flights, a deed for which she will always be remembered.</p>`,
      prompt: `<p>Which choice completes the text with the most logical and precise word or phrase?</p>`,
      options: [{ id: `A`, text: `enduring` }, { id: `B`, text: `conspicuous` }, { id: `C`, text: `uncertain` }, { id: `D`, text: `deserving` }],
      answer: `C` },

    { id: `j6id-rw-m2-4`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `hard`, type: `mcq`,
      passage: `<p>In the early 1990s, the price of mass-produced comic books rose dramatically, which had the counterintuitive effect of _____ demand: buyers who hadn&rsquo;t previously wanted to purchase comics suddenly thronged the market, believing prices would continue to rise and the comics could be resold later at a profit.</p>`,
      prompt: `<p>Which choice completes the text with the most logical and precise word or phrase?</p>`,
      options: [{ id: `A`, text: `monetizing` }, { id: `B`, text: `precipitating` }, { id: `C`, text: `stabilizing` }, { id: `D`, text: `exploiting` }],
      answer: `B` },

    { id: `j6id-rw-m2-5`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `hard`, type: `mcq`,
      passage: `<p>In 2015 Floriana Lai and colleagues published a study concluding that ocean acidification has a strong effect on the behavior of <em>Gasterosteus aculeatus</em>, a species of fish. However, Lai and colleagues&rsquo; study relied on a mean sample size of only 12 fish. In a 2022 review of various scientists&rsquo; conclusions about the impacts of ocean acidification on fish behavior, Jeff C. Clements and colleagues caution that relying on such a relatively small sample size can increase the potential for biased analysis. Such analysis, in turn, can contribute to reports of exaggerated effects.</p>`,
      prompt: `<p>Which choice best states the main purpose of the text?</p>`,
      options: [{ id: `A`, text: `To note a potential concern about the findings of a scientific study` }, { id: `B`, text: `To explain how the behavior of a fish species has changed over time` }, { id: `C`, text: `To discuss an aspect of ocean acidification that is frequently overlooked` }, { id: `D`, text: `To present a debate between two research teams about a cause of ocean acidification` }],
      answer: `A` },

    { id: `j6id-rw-m2-6`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Historians have argued that a crucial component of the Civil Rights Movement&rsquo;s success in the 1960s was the Southern Christian Leadership Conference&rsquo;s Citizen Education Program (CEP), which invited promising activists from across the South to its one-week training sessions in Dorchester, Georgia. Led by experienced organizers such as Dorothy Cotton and Septima Clark, CEP attendees&mdash;<u>more than 7,000 in all</u>&mdash;participated in workshops on topics ranging from public speaking to legal doctrine before returning home and using their newly acquired knowledge to spearhead local civil rights initiatives.</p>`,
      prompt: `<p>Which choice best describes the function of the underlined portion in the text as a whole?</p>`,
      options: [{ id: `A`, text: `It suggests that CEP attendees held a diverse array of opinions about the Southern Christian Leadership Conference&rsquo;s political philosophy.` }, { id: `B`, text: `It illustrates the CEP organizers&rsquo; efforts to educate participants on a wide variety of topics.` }, { id: `C`, text: `It establishes that criticism of the CEP was limited to a few individuals in the Southern Christian Leadership Conference.` }, { id: `D`, text: `It underscores the extent of the CEP&rsquo;s impact on the Civil Rights Movement of the 1960s.` }],
      answer: `D` },

    { id: `j6id-rw-m2-7`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Asteroid 6478 Gault has experienced intermittent mass loss since at least 2013, but in contrast to some other asteroids with repeated mass-loss episodes, 6478 Gault has not lost mass at its perihelion (the closest point of its orbit to the Sun), and thus the loss is not attributable to solar energy&ndash;driven ice vaporization. And as Jane X. Luu et al. point out, the singular nature of impact ejection makes it untenable as an account of multiple loss episodes of similar duration over several years. Instead, Luu et al. are likely correct that 6478 Gault is shedding mass due to rotational instability.</p>`,
      prompt: `<p>Which choice best describes the overall structure of the text?</p>`,
      options: [{ id: `A`, text: `It introduces a natural phenomenon, refutes two potential explanations for that phenomenon, and then presents a third explanation for that phenomenon that the author regards as plausible.` }, { id: `B`, text: `It describes an astronomical finding, discusses competing theories about that finding that the author regards as flawed, and then describes new evidence that supports an alternative theory.` }, { id: `C`, text: `It discusses a physical process, evaluates possible causes of that process, and then states that a persuasive account of the process has yet to be put forward.` }, { id: `D`, text: `It presents a scientific observation, describes a contrast between that observation and other observations, and then explains why those other observations should not be considered credible.` }],
      answer: `A` },

    { id: `j6id-rw-m2-8`, domain: `Craft and Structure`, skill: `Cross-Text Connections`, difficulty: `hard`, type: `mcq`,
      passage: `<p><strong>Text 1</strong></p><p>In northern and western Nebraska, many buildings and other structures rest on soil that is expansive, meaning that it swells or shrinks as its moisture level changes. Civil engineer Jay X. Wang has noted that the effects of expansive soil appear slowly in the form of gradually growing cracks in foundations, walls, and pavements. Because these effects are incremental and can generally be repaired (though at some cost), structures in northern and western Nebraska are typically not built to resist them.</p><p><strong>Text 2</strong></p><p>In a 2021 study, Rubayet Bin Mostafiz and colleagues calculated that in the state of Louisiana alone, the annual cost of damage caused by expansive soils reaches nearly $90 million. But they note that this damage can be mitigated: building structures on pile supports can significantly reduce the effects of soil swelling and shrinking.</p>`,
      prompt: `<p>Based on the texts, how would Rubayet Bin Mostafiz and colleagues (Text 2) most likely respond to the information presented in Text 1?</p>`,
      options: [{ id: `A`, text: `They would recommend that engineers in northern and western Nebraska measure the moisture level in the soil beneath proposed structures before beginning construction.` }, { id: `B`, text: `They would argue that engineers in northern and western Nebraska have misjudged the effectiveness of the techniques they use to reduce the effects of expansive soil.` }, { id: `C`, text: `They would encourage engineers in northern and western Nebraska to use pile supports when building new structures.` }, { id: `D`, text: `They would suggest that engineers in northern and western Nebraska consider the cost of replacing the pile supports on which existing structures rest.` }],
      answer: `C` },

    { id: `j6id-rw-m2-9`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Thomas Piketty and other historians of capitalism rarely discuss domestic capitalism in Africa before the period of European colonization, implicitly presenting capitalism as external to and imposed on Africa. Crislayne Alfagali and other Africanist scholars have shown, however, that in parts of Africa, export-oriented manufacturing, the existence of salaried labor, and other features of capitalism predated colonization. One reason for this discrepancy is that historians of capitalism tend to focus on longitudinal economic data drawn from archival records, which do not exist for much of precolonial Africa.</p>`,
      prompt: `<p>Which statement about Alfagali and other Africanist scholars is best supported by information in the text?</p>`,
      options: [{ id: `A`, text: `They likely view capitalism as having been more beneficial for Africa than historians of capitalism do.` }, { id: `B`, text: `They likely have a different view about which activities should be considered capitalist in nature than historians of capitalism do.` }, { id: `C`, text: `They likely make use of different types of evidence than historians of capitalism typically rely on.` }, { id: `D`, text: `They likely differ from historians of capitalism in the methods they use to derive longitudinal economic data from archival records.` }],
      answer: `C` },

    { id: `j6id-rw-m2-10`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Geneticist Elaine Ostrander led an international collaboration in which Jocelyn Plassais and other researchers investigated the evolutionary history of size variation in modern dogs. The researchers identified multiple versions of the gene regulating the production of IGF-1 (insulin-like growth factor 1) in dogs and found that dogs of the same breed consistently share the same version of the gene. In a discussion of the study, a student hypothesizes that small breeds of dogs (for example, toy poodles) must share a version that represses IGF-1 production that would otherwise confer larger body size.</p>`,
      prompt: `<p>Which finding, if true, would most directly weaken the student&rsquo;s claim?</p>`,
      options: [{ id: `A`, text: `The majority of the most prevalent dog breeds have limited activity in the gene that regulates IGF-1 production.` }, { id: `B`, text: `The gene that regulates IGF-1 production is not the only gene that influences body size in dogs but is the only such gene that shows within-breed version consistency.` }, { id: `C`, text: `The degree of size variation among dogs is greater than that of any other land-based mammal.` }, { id: `D`, text: `Some breeds with small body sizes and low IGF-1 concentrations have a different version of the gene regulating IGF-1 production than do toy poodles.` }],
      answer: `D` },

    { id: `j6id-rw-m2-11`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Scholars cite <em>Pedro P&aacute;ramo</em>, the 1955 novel by Mexican author Juan Rulfo, as a foundational text of magical realism, the Latin American style of fiction in which antirealistic plot devices&mdash;often borrowed from the folkloric traditions of Indigenous and colonial societies in the Americas&mdash;are deployed in an otherwise realistic mode of representation typical of the modern novel. This style has exerted a decisive influence on authors around the world, including Jos&eacute; Saramago, <u>whose 1982 novel <em>Baltasar and Blimunda</em> resembles classic magical realist novels in its juxtaposition of literary realism with folklore&mdash;namely, that of Portugal.</u></p>`,
      prompt: `<p>Which quotation from a literary scholar would most directly support the claim in the underlined portion of the text?</p>`,
      options: [{ id: `A`, text: `&ldquo;While <em>Baltasar and Blimunda</em> alternates between realistic and antirealistic modes of representation, details suggesting the influence of Portuguese folklore nevertheless occur throughout the novel.&rdquo;` }, { id: `B`, text: `&ldquo;Although Portuguese folklore clearly informs the style and occasionally antirealistic plot of <em>Baltasar and Blimunda</em>, the novel also shows the inarguable influence of the magical realist tradition of Latin America.&rdquo;` }, { id: `C`, text: `&ldquo;The logic of the realistic plot of <em>Baltasar and Blimunda</em> is repeatedly and productively disrupted by the presence of imagery and situations drawn from Portuguese folklore.&rdquo;` }, { id: `D`, text: `&ldquo;Like many works in the Latin American magical realist tradition, <em>Baltasar and Blimunda</em> is indebted to antirealistic elements in the folkloric tradition of Portugal.&rdquo;` }],
      answer: `C` },

    { id: `j6id-rw-m2-12`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Indigenous songs are an important resource for ecological information. Songs of the Warlpiri people in Yuendumu, Australia, convey information about wild edible seeds, and the songs of the Karen (<em>hta</em>) Hin Lad Nai people in Thailand offer detailed information about bees. There have been efforts made to preserve Indigenous languages over the years&mdash;e.g., the United Nations&rsquo; International Decade of Indigenous Languages (2022&ndash;2032). However, such attempts have typically focused on spoken language despite the fact that some expressions in these languages appear only in songs. Therefore, if those involved in such efforts want to ensure that a comprehensive range of information is secured, they must _____</p>`,
      prompt: `<p>Which choice most logically completes the text?</p>`,
      options: [{ id: `A`, text: `analyze musical similarities in the songs of the Warlpiri and Karen (<em>hta</em>) Hin Lad Nai people.` }, { id: `B`, text: `acknowledge that Indigenous songs are largely but not entirely composed using phrases taken from spoken language.` }, { id: `C`, text: `incorporate the preservation of songs into their broader efforts to protect Indigenous languages.` }, { id: `D`, text: `recognize that Indigenous languages likely have more unique expressions that represent ecological knowledge than represent other types of information.` }],
      answer: `C` },

    { id: `j6id-rw-m2-13`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `<p>In a 2012 study that took place in Brazil, Enelton Fagnani, Jos&eacute; Roberto Guimar&atilde;, and Pedro S&eacute;rgio Fadini found a negative association between levels of dissolved organic carbon and mercury in bodies of fresh water. It may seem reasonable to be skeptical of this finding, since most other studies, such as research conducted in 1995 in the United States by Charles T. Driscoll and colleagues, have found that dissolved organic carbon and mercury levels rise together. Like the latter study, however, most studies of the topic have been conducted in North America, and many of those study sites have similar characteristics to one another, suggesting that _____</p>`,
      prompt: `<p>Which choice most logically completes the text?</p>`,
      options: [{ id: `A`, text: `few of the studies conducted in North America have been able to measure dissolved organic carbon and mercury levels with the same level of precision as in Fagnani, Guimar&atilde;, and Fadini&rsquo;s study.` }, { id: `B`, text: `Fagnani, Guimar&atilde;, and Fadini&rsquo;s finding may differ from the findings of other studies due to a difference in environmental circumstances that affects the relationship between dissolved organic carbon and mercury in fresh water.` }, { id: `C`, text: `Fagnani, Guimar&atilde;, and Fadini&rsquo;s study may have inadvertently measured a different characteristic of bodies of fresh water than their levels of dissolved organic carbon and mercury.` }, { id: `D`, text: `the mercury levels reported in Fagnani, Guimar&atilde;, and Fadini&rsquo;s study were much higher than those reported in the study by Driscoll and colleagues even though the dissolved organic carbon levels reported in the two studies were approximately the same.` }],
      answer: `B` },

    { id: `j6id-rw-m2-14`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `<p>As complex life cycle parasites, <em>Anisakis</em> sp. and <em>Cucullanellus kanabus</em> require multiple host species throughout their development. Extrapolating from parasite counts on spotted ratfish and seven other fish species collected from Puget Sound from 1880 to 2019, Chelsea Wood et al. found that the abundance of three-host parasites, such as <em>Anisakis</em> sp., negatively correlated with rising average annual sea temperatures; the abundance of two-host parasites, such as <em>C. kanabus</em>, was largely stable. Noting that fish and other marine vertebrates are especially vulnerable to climate change, Wood et al. observed that all three-host parasites in the study depend on at least two vertebrate species, while all two-host parasites depend on only one, suggesting that _____</p>`,
      prompt: `<p>Which choice most logically completes the text?</p>`,
      options: [{ id: `A`, text: `although <em>Anisakis</em> sp. and <em>C. kanabus</em> both require spotted ratfish as a host, <em>C. kanabus</em> was more adversely affected by warming-driven changes in the spotted ratfish population than <em>Anisakis</em> sp. was.` }, { id: `B`, text: `warming-induced population changes among Puget Sound vertebrates may have suppressed some parasite populations, but there were no changes among the eight studied host species that affected two-host parasite abundance.` }, { id: `C`, text: `population size and density of the eight fish species examined in the study were likely largely unaffected by rising sea temperatures.` }, { id: `D`, text: `a parasite&rsquo;s sensitivity to warming temperatures is positively correlated with the number of unique vertebrate species it depends on throughout its life cycle.` }],
      answer: `D` },

    { id: `j6id-rw-m2-15`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Entomologists Yash Sondhi and Samuel Fabian have tried to explain why moths fly erratically around light sources at night. Knowing that flying insects keep their backs pointed toward sunlight during the day, _____</p>`,
      prompt: `<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>`,
      options: [{ id: `A`, text: `the researchers&rsquo; theory is that moths mistake nighttime lights for the Sun, continually trying to reorient their bodies while flying near such lights.` }, { id: `B`, text: `the researchers theorize that moths, mistaking nighttime lights for the Sun, continually try to reorient their bodies while flying near such lights.` }, { id: `C`, text: `moths mistake nighttime lights for the Sun and continually try to reorient their bodies while flying near such lights, the researchers theorize.` }, { id: `D`, text: `moths continually try to reorient their bodies while flying near nighttime lights, the researchers theorize, mistaking such lights for the Sun.` }],
      answer: `B` },

    { id: `j6id-rw-m2-16`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `hard`, type: `mcq`,
      passage: `<p>In Finland, the Hankasalmi observatory site monitors activity in the upper atmosphere of the northern _____ in Antarctica, another observatory site, Zhongshan Station, monitors the sky of the southern hemisphere. Together, they are part of the Super Dual Auroral Radar Network&mdash;or SuperDARN, as space physicists like Kathryn McWilliams call it.</p>`,
      prompt: `<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>`,
      options: [{ id: `A`, text: `hemisphere and` }, { id: `B`, text: `hemisphere` }, { id: `C`, text: `hemisphere,` }, { id: `D`, text: `hemisphere;` }],
      answer: `D` },

    { id: `j6id-rw-m2-17`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `hard`, type: `mcq`,
      passage: `<p><em>Butterfly</em> is a 1988 painting by the Japanese artist Ay-O. Like many of Ay-O&rsquo;s paintings, <em>Butterfly</em>, which portrays a swimmer performing the butterfly stroke, attempts to make use of the entire visual light _____ sporting rainbow-striped goggles, the rainbow-hued swimmer splashes through a wavy rainbow of water.</p>`,
      prompt: `<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>`,
      options: [{ id: `A`, text: `spectrum, while` }, { id: `B`, text: `spectrum:` }, { id: `C`, text: `spectrum` }, { id: `D`, text: `spectrum while` }],
      answer: `B` },

    { id: `j6id-rw-m2-18`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `hard`, type: `mcq`,
      passage: `<p>The 20th century saw the founding of many Latino advocacy _____ to protect and advance the rights of Latino Americans, both the American GI Forum (1948) and the Mexican American Legal Defense and Education Fund (1968) contributed to the history of US civil rights.</p>`,
      prompt: `<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>`,
      options: [{ id: `A`, text: `groups. Established` }, { id: `B`, text: `groups and established` }, { id: `C`, text: `groups established` }, { id: `D`, text: `groups, established` }],
      answer: `A` },

    { id: `j6id-rw-m2-19`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Latvia, Greece, and the other member nations of the North Atlantic Treaty Organization, or NATO, share a commitment to the principle of collective defense, each NATO member _____ to defend the others if necessary.</p>`,
      prompt: `<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>`,
      options: [{ id: `A`, text: `has pledged` }, { id: `B`, text: `pledging` }, { id: `C`, text: `pledges` }, { id: `D`, text: `is pledging` }],
      answer: `B` },

    { id: `j6id-rw-m2-20`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `hard`, type: `mcq`,
      passage: `<p>The Organisation for Economic Co-operation and Development (OECD) tracks comparative price list data for its thirty-eight member countries. For instance, in July 2021, a hypothetical basket of goods priced at 100 US dollars (USD) in the United States would have cost 55 USD and 137 USD in fellow OECD _____ and Switzerland, respectively.</p>`,
      prompt: `<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>`,
      options: [{ id: `A`, text: `nations: Costa Rica` }, { id: `B`, text: `nations Costa Rica` }, { id: `C`, text: `nations, Costa Rica` }, { id: `D`, text: `nations; Costa Rica` }],
      answer: `B` },

    { id: `j6id-rw-m2-21`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `hard`, type: `mcq`,
      passage: `<p>With many elements, like bromine, scientists were able to isolate a relatively pure sample of the substance shortly after discovering its existence. _____ this wasn&rsquo;t the case with all elements. The process of isolating europium, for example, took several years&mdash;five, to be precise.</p>`,
      prompt: `<p>Which choice completes the text with the most logical transition?</p>`,
      options: [{ id: `A`, text: `For this reason,` }, { id: `B`, text: `Granted,` }, { id: `C`, text: `Likewise,` }, { id: `D`, text: `In other words,` }],
      answer: `B` },

    { id: `j6id-rw-m2-22`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Modernista architects championed nature in their designs. _____ the wavy exterior wall and botanical window dressings of Torre Cort&eacute;s, a Modernista private home designed by Salvador Valeri i Pupurull, couldn&rsquo;t exactly grow in a forest. Still, one sees natural influences in Valeri i Pupurull&rsquo;s penchant for curves (rather than right angles) and plant- and animal-inspired flourishes.</p>`,
      prompt: `<p>Which choice completes the text with the most logical transition?</p>`,
      options: [{ id: `A`, text: `Granted,` }, { id: `B`, text: `Similarly,` }, { id: `C`, text: `Furthermore,` }, { id: `D`, text: `Thus,` }],
      answer: `A` },

    { id: `j6id-rw-m2-23`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `hard`, type: `mcq`,
      passage: `<p>In a 1993 study by Vales and Peek, the researchers determined the ratio of three different plant subtypes within the diet of elk: graminoids, forbs, and browse. _____ the researchers determined the relative quantities of the plants the animal consumed.</p>`,
      prompt: `<p>Which choice completes the text with the most logical transition?</p>`,
      options: [{ id: `A`, text: `That is,` }, { id: `B`, text: `In addition,` }, { id: `C`, text: `By contrast,` }, { id: `D`, text: `Next,` }],
      answer: `A` },

    { id: `j6id-rw-m2-24`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `hard`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>Impact craters occur when a large object collides with Earth at high speeds.</li><li>Examples of such objects include comets and meteorites.</li><li>Zeleny Gai is an impact crater in Ukraine.</li><li>Researchers have determined that it was formed around 80 million years ago.</li><li>The crater has a diameter of approximately 3.5 km.</li></ul>`,
      prompt: `<p>Which choice most effectively uses information from the given sentences to emphasize the size of the crater?</p>`,
      options: [{ id: `A`, text: `When a large object struck what is now Ukraine around 80 million years ago, it created Zeleny Gai, a massive crater measuring 3.5 km in diameter.` }, { id: `B`, text: `Long ago, a crater now known as Zeleny Gai was created when a large object collided with Earth.` }, { id: `C`, text: `Researchers have investigated the formation of Zeleny Gai, an ancient impact crater measuring 3.5 km in diameter located in Ukraine.` }, { id: `D`, text: `Impact craters, like Zeleny Gai in Ukraine, are formed when a massive object collides with Earth, creating depressions in the land.` }],
      answer: `A` },

    { id: `j6id-rw-m2-25`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `hard`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>Artist Jean Arp of Germany won a Carnegie Prize gold medal in 1964.</li><li>The Carnegie Prize is an international art competition.</li><li>It is administered by the Carnegie Museum of Art in Pittsburgh, Pennsylvania.</li><li>Arp&rsquo;s winning artwork was a sculpture entitled <em>Sculpture Classique</em>.</li></ul>`,
      prompt: `<p>The student wants to identify the sculpture for which Arp won a Carnegie Prize gold medal. Which choice most effectively uses relevant information from the notes to accomplish this goal?</p>`,
      options: [{ id: `A`, text: `In 1964, an artist from Germany won a Carnegie Prize gold medal for a sculpture.` }, { id: `B`, text: `The Carnegie Museum of Art awarded Arp a gold medal in 1964.` }, { id: `C`, text: `Arp won a Carnegie Prize gold medal for the sculpture <em>Sculpture Classique</em>.` }, { id: `D`, text: `The Carnegie Prize is an international art competition administered by the Carnegie Museum of Art in Pittsburgh, Pennsylvania.` }],
      answer: `C` },

    { id: `j6id-rw-m2-26`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `hard`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>Onomatopoeias are words that imitate the sounds they represent.</li><li>Onomatopoeias used to represent the same sound often vary from language to language.</li><li>This variation is due in part to differences in how languages are structured.</li><li>&ldquo;Dugeun dugeun&rdquo; is a Korean onomatopoeia that represents the sound of a heartbeat.</li><li>&ldquo;Tuk-tuk&rdquo; is a Russian onomatopoeia that represents the sound of a heartbeat.</li><li>The term &ldquo;onomatopoeia&rdquo; combines the Greek words for &ldquo;name&rdquo; (<em>onoma</em>) and &ldquo;to make&rdquo; (<em>poiein</em>).</li></ul>`,
      prompt: `<p>The student wants to provide a specific example of onomatopoeia. Which choice most effectively uses relevant information from the notes to accomplish this goal?</p>`,
      options: [{ id: `A`, text: `The term &ldquo;onomatopoeia,&rdquo; which refers to words that imitate the sound they represent, combines the Greek words for &ldquo;name&rdquo; and &ldquo;to make.&rdquo;` }, { id: `B`, text: `The Russian word &ldquo;tuk-tuk&rdquo; both imitates and represents the sound of a heartbeat.` }, { id: `C`, text: `Differences in how languages are structured can cause variations in the words used in different languages to represent the same sound.` }, { id: `D`, text: `The languages of Korean and Russian use different words to represent the sound of a heartbeat.` }],
      answer: `B` },

    { id: `j6id-rw-m2-27`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `hard`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>Vexillology is the study of flags.</li><li>The flags of many countries include symbols like animals, plants, or landforms.</li><li>These symbols often represent an aspect of the region&rsquo;s history, culture, or landscape.</li><li>The flag of Kazakhstan includes an eagle.</li><li>The flag of Slovenia includes Triglav mountain.</li></ul>`,
      prompt: `<p>The student wants to make and support a generalization about symbols on flags. Which choice most effectively uses information from the given sentences to accomplish this goal?</p>`,
      options: [{ id: `A`, text: `Many countries feature symbols on their flags, and the study of these designs is known as vexillology.` }, { id: `B`, text: `Kazakhstan&rsquo;s flag includes an eagle, a symbol that is important to that country&rsquo;s national identity.` }, { id: `C`, text: `Vexillology is the study of flags; accordingly, vexillologists are interested in flags from around the world.` }, { id: `D`, text: `The flags of some countries include symbols of animals; Kazakhstan&rsquo;s, for example, includes an eagle.` }],
      answer: `D` },
  ];

  const MATH_M1 = [
    { id: `j6id-math-m1-1`, domain: `Geometry and Trigonometry`, skill: `Lines, angles, and triangles`, difficulty: `medium`, type: `grid`,
      prompt: `<div style='text-align:center'><svg viewBox='0 0 320 250' xmlns='http://www.w3.org/2000/svg' style='max-width:340px;font-family:Georgia,serif'><line x1='60' y1='100' x2='285' y2='100' stroke='#000' stroke-width='1.3'/><line x1='60' y1='180' x2='285' y2='180' stroke='#000' stroke-width='1.3'/><line x1='110' y1='232' x2='245' y2='45' stroke='#000' stroke-width='1.3'/><text x='247' y='42' font-size='14' font-style='italic'>n</text><text x='292' y='104' font-size='14' font-style='italic'>r</text><text x='292' y='184' font-size='14' font-style='italic'>s</text><text x='163' y='92' font-size='13'>164&deg;</text><text x='120' y='172' font-size='13'><tspan font-style='italic'>x</tspan>&deg;</text></svg><p style='font-size:12px'>Note: Figure not drawn to scale.</p><p>In the figure, line <em>n</em> intersects lines <em>r</em> and <em>s</em>. Line <em>r</em> is parallel to line <em>s</em>. What is the value of <em>x</em>?</p></div>`,
      answer: [`164`] },

    { id: `j6id-math-m1-2`, domain: `Algebra`, skill: `Linear inequalities in one or two variables`, difficulty: `easy`, type: `mcq`,
      prompt: `<p>During a portion of a flight, a small airplane&rsquo;s cruising speed varied between 180 miles per hour and 190 miles per hour. Which inequality best represents this situation, where <em>s</em> is the cruising speed, in miles per hour, during this portion of the flight?</p>`,
      options: [{ id: `A`, text: `<em>s</em> &le; 10` }, { id: `B`, text: `<em>s</em> &le; 180` }, { id: `C`, text: `<em>s</em> &le; 190` }, { id: `D`, text: `180 &le; <em>s</em> &le; 190` }],
      answer: `D` },

    { id: `j6id-math-m1-3`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `easy`, type: `mcq`,
      prompt: `<p>If 4<em>x</em> = 6, what is the value of 12<em>x</em>?</p>`,
      options: [{ id: `A`, text: `3` }, { id: `B`, text: `9` }, { id: `C`, text: `18` }, { id: `D`, text: `27` }],
      answer: `C` },

    { id: `j6id-math-m1-4`, domain: `Geometry and Trigonometry`, skill: `Circles`, difficulty: `hard`, type: `mcq`,
      prompt: `<div style='text-align:center'><p><em>x</em><sup>2</sup> &minus; 6<em>x</em> + <em>y</em><sup>2</sup> &minus; 12<em>y</em> &minus; 36 = 0</p></div><p>In the <em>xy</em>-plane, the graph of the given equation is a circle. If this circle is inscribed in a square, what is the perimeter of the square?</p>`,
      options: [{ id: `A`, text: `18` }, { id: `B`, text: `36` }, { id: `C`, text: `72` }, { id: `D`, text: `144` }],
      answer: `C` },

    { id: `j6id-math-m1-5`, domain: `Advanced Math`, skill: `Equivalent expressions`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>Which expression is equivalent to (<em>x</em><sup>3</sup> + 6<em>x</em><sup>2</sup> &minus; 8<em>x</em>) + 8(<em>x</em><sup>2</sup> + 4)?</p>`,
      options: [{ id: `A`, text: `<em>x</em><sup>3</sup> + 4<em>x</em><sup>2</sup> &minus; 8<em>x</em> + 32` }, { id: `B`, text: `<em>x</em><sup>3</sup> + 14<em>x</em><sup>2</sup> &minus; 8<em>x</em> + 32` }, { id: `C`, text: `<em>x</em><sup>3</sup> + 8<em>x</em><sup>2</sup> &minus; 8<em>x</em> + 32` }, { id: `D`, text: `<em>x</em><sup>3</sup> + 6<em>x</em><sup>2</sup> &minus; 8<em>x</em> + 32` }],
      answer: `B` },

    { id: `j6id-math-m1-6`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `easy`, type: `grid`,
      prompt: `<p>The function <em>f</em> is defined by <em>f</em>(<em>x</em>) = <em>x</em><sup>3</sup> + 17. What is the value of <em>f</em>(2)?</p>`,
      answer: [`25`] },

    { id: `j6id-math-m1-7`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `easy`, type: `grid`,
      prompt: `<p>The function <em>g</em> is defined by <em>g</em>(<em>x</em>) = <sup><em>x</em></sup>&frasl;<sub>2</sub>. For what value of <em>x</em> does <em>g</em>(<em>x</em>) = 244?</p>`,
      answer: [`488`] },

    { id: `j6id-math-m1-8`, domain: `Problem-Solving and Data Analysis`, skill: `Two-variable data: models and scatterplots`, difficulty: `medium`, type: `mcq`,
      prompt: `<div style='text-align:center'><svg viewBox='0 0 330 270' xmlns='http://www.w3.org/2000/svg' style='max-width:340px;font-family:Georgia,serif'><line x1='60' y1='40' x2='60' y2='240' stroke='#000'/><line x1='60' y1='240' x2='310' y2='240' stroke='#000'/><g stroke='#ddd'><line x1='84' y1='40' x2='84' y2='240'/><line x1='108' y1='40' x2='108' y2='240'/><line x1='132' y1='40' x2='132' y2='240'/><line x1='156' y1='40' x2='156' y2='240'/><line x1='180' y1='40' x2='180' y2='240'/><line x1='204' y1='40' x2='204' y2='240'/><line x1='228' y1='40' x2='228' y2='240'/><line x1='252' y1='40' x2='252' y2='240'/><line x1='276' y1='40' x2='276' y2='240'/><line x1='300' y1='40' x2='300' y2='240'/><line x1='60' y1='60' x2='310' y2='60'/><line x1='60' y1='80' x2='310' y2='80'/><line x1='60' y1='100' x2='310' y2='100'/><line x1='60' y1='120' x2='310' y2='120'/><line x1='60' y1='140' x2='310' y2='140'/><line x1='60' y1='160' x2='310' y2='160'/><line x1='60' y1='180' x2='310' y2='180'/><line x1='60' y1='200' x2='310' y2='200'/><line x1='60' y1='220' x2='310' y2='220'/></g><g font-size='9' text-anchor='end'><text x='55' y='63'>10</text><text x='55' y='83'>9</text><text x='55' y='103'>8</text><text x='55' y='123'>7</text><text x='55' y='143'>6</text><text x='55' y='163'>5</text><text x='55' y='183'>4</text><text x='55' y='203'>3</text><text x='55' y='223'>2</text><text x='55' y='243'>1</text></g><g font-size='9' text-anchor='middle'><text x='84' y='253'>1</text><text x='108' y='253'>2</text><text x='132' y='253'>3</text><text x='156' y='253'>4</text><text x='180' y='253'>5</text><text x='204' y='253'>6</text><text x='228' y='253'>7</text><text x='252' y='253'>8</text><text x='276' y='253'>9</text><text x='300' y='253'>10</text><text x='53' y='36' font-style='italic'>y</text><text x='315' y='244' font-style='italic'>x</text></g><g fill='#000'><circle cx='72' cy='80' r='3'/><circle cx='84' cy='80' r='3'/><circle cx='108' cy='140' r='3'/><circle cx='132' cy='160' r='3'/><circle cx='156' cy='180' r='3'/><circle cx='180' cy='160' r='3'/><circle cx='204' cy='180' r='3'/><circle cx='228' cy='200' r='3'/><circle cx='252' cy='220' r='3'/><circle cx='276' cy='240' r='3'/></g></svg><p>The scatterplot shows the relationship between two variables, <em>x</em> and <em>y</em>.</p></div><p>Which of the following equations is the most appropriate linear model for the data shown?</p>`,
      options: [{ id: `A`, text: `<em>y</em> = 0.8 + 8.7<em>x</em>` }, { id: `B`, text: `<em>y</em> = 0.8 &minus; 8.7<em>x</em>` }, { id: `C`, text: `<em>y</em> = 8.7 + 0.8<em>x</em>` }, { id: `D`, text: `<em>y</em> = 8.7 &minus; 0.8<em>x</em>` }],
      answer: `D` },

    { id: `j6id-math-m1-9`, domain: `Algebra`, skill: `Linear equations in two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `<div style='text-align:center'><p>5<em>x</em> &minus; 4<em>y</em> = &minus;20</p></div><p>For the given equation, which table gives three values of <em>x</em> and their corresponding values of <em>y</em>?</p>`,
      options: [{ id: `A`, text: `<em>x</em>: 0, 4, 8 &nbsp;&rarr;&nbsp; <em>y</em>: 5, 10, 15` }, { id: `B`, text: `<em>x</em>: 0, 4, 8 &nbsp;&rarr;&nbsp; <em>y</em>: 15, 10, 5` }, { id: `C`, text: `<em>x</em>: 5, 10, 15 &nbsp;&rarr;&nbsp; <em>y</em>: 0, 4, 8` }, { id: `D`, text: `<em>x</em>: 5, 10, 15 &nbsp;&rarr;&nbsp; <em>y</em>: 8, 4, 0` }],
      answer: `A` },

    { id: `j6id-math-m1-10`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `easy`, type: `grid`,
      prompt: `<p>A chemist combines water and isopropanol to make a mixture with a volume of 52 milliliters (mL). The volume of isopropanol in the mixture is 10 mL. What is the volume of water, in mL, in the mixture? (Assume that the volume of the mixture is the sum of the volumes of water and isopropanol before they were mixed.)</p>`,
      answer: [`42`] },

    { id: `j6id-math-m1-11`, domain: `Algebra`, skill: `Systems of two linear equations in two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `<div style='text-align:center'><p><em>y</em> = &minus;<sup>1</sup>&frasl;<sub>3</sub><em>x</em></p><p><em>y</em> = <sup>1</sup>&frasl;<sub>5</sub><em>x</em></p></div><p>The solution to the given system of equations is (<em>x</em>, <em>y</em>). What is the value of <em>x</em>?</p>`,
      options: [{ id: `A`, text: `&minus;3` }, { id: `B`, text: `0` }, { id: `C`, text: `2` }, { id: `D`, text: `5` }],
      answer: `B` },

    { id: `j6id-math-m1-12`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>A company has a customer loyalty program. In January 2018, there were 900 customers enrolled in the loyalty program. For the next 24 months after January 2018, the total number of customers enrolled in the loyalty program each month was 2% greater than the total number enrolled the previous month. Which equation gives the total number of customers, <em>c</em>, enrolled in the company&rsquo;s loyalty program <em>m</em> months after January 2018, where <em>m</em> &le; 24?</p>`,
      options: [{ id: `A`, text: `<em>c</em> = 900(0.02)<sup><em>m</em></sup>` }, { id: `B`, text: `<em>c</em> = 900(1.02)<sup><em>m</em></sup>` }, { id: `C`, text: `<em>c</em> = 900(1.2)<sup><em>m</em></sup>` }, { id: `D`, text: `<em>c</em> = 900(2)<sup><em>m</em></sup>` }],
      answer: `B` },

    { id: `j6id-math-m1-13`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `grid`,
      prompt: `<p>The function <em>f</em>(<em>t</em>) = 10,000(2)<sup><em>t</em>&frasl;330</sup> gives the number of bacteria in a population <em>t</em> minutes after an initial observation. How much time, in minutes, does it take for the number of bacteria in the population to double?</p>`,
      answer: [`330`] },

    { id: `j6id-math-m1-14`, domain: `Algebra`, skill: `Systems of two linear equations in two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `<div style='text-align:center'><p><em>y</em> = <sup>3</sup>&frasl;<sub>8</sub><em>x</em> + 7</p></div><p>One of two equations in a system of linear equations is given. The system has infinitely many solutions. What is the slope of the graph of the second equation?</p>`,
      options: [{ id: `A`, text: `&minus;<sup>8</sup>&frasl;<sub>3</sub>` }, { id: `B`, text: `&minus;<sup>3</sup>&frasl;<sub>8</sub>` }, { id: `C`, text: `<sup>3</sup>&frasl;<sub>8</sub>` }, { id: `D`, text: `<sup>8</sup>&frasl;<sub>3</sub>` }],
      answer: `C` },

    { id: `j6id-math-m1-15`, domain: `Advanced Math`, skill: `Nonlinear equations in one variable and systems of equations in two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>If 4<em>x</em><sup>2</sup> &minus; 24<em>x</em> &minus; 36 = 0, what is the value of <em>x</em><sup>2</sup> &minus; 6<em>x</em>?</p>`,
      options: [{ id: `A`, text: `9` }, { id: `B`, text: `6` }, { id: `C`, text: `4` }, { id: `D`, text: `0` }],
      answer: `A` },

    { id: `j6id-math-m1-16`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `hard`, type: `mcq`,
      prompt: `<p>The function <em>f</em> is defined by <em>f</em>(<em>x</em>) = (<em>x</em> &minus; 5)(<em>x</em> &minus; 8)(<em>x</em> + <em>k</em>), where <em>k</em> is a constant. In the <em>xy</em>-plane, the graph of <em>y</em> = <em>f</em>(<em>x</em>) passes through the point (&minus;2, 0). What is the value of <em>f</em>(0)?</p>`,
      options: [{ id: `A`, text: `&minus;140` }, { id: `B`, text: `&minus;2` }, { id: `C`, text: `11` }, { id: `D`, text: `80` }],
      answer: `D` },

    { id: `j6id-math-m1-17`, domain: `Geometry and Trigonometry`, skill: `Lines, angles, and triangles`, difficulty: `hard`, type: `mcq`,
      prompt: `<div style='text-align:center'><svg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg' style='max-width:320px;font-family:Georgia,serif'><g stroke='#e2e2e2'><line x1='42' y1='42' x2='42' y2='258'/><line x1='60' y1='42' x2='60' y2='258'/><line x1='78' y1='42' x2='78' y2='258'/><line x1='96' y1='42' x2='96' y2='258'/><line x1='114' y1='42' x2='114' y2='258'/><line x1='132' y1='42' x2='132' y2='258'/><line x1='168' y1='42' x2='168' y2='258'/><line x1='186' y1='42' x2='186' y2='258'/><line x1='204' y1='42' x2='204' y2='258'/><line x1='222' y1='42' x2='222' y2='258'/><line x1='240' y1='42' x2='240' y2='258'/><line x1='258' y1='42' x2='258' y2='258'/><line x1='42' y1='42' x2='258' y2='42'/><line x1='42' y1='60' x2='258' y2='60'/><line x1='42' y1='78' x2='258' y2='78'/><line x1='42' y1='96' x2='258' y2='96'/><line x1='42' y1='114' x2='258' y2='114'/><line x1='42' y1='132' x2='258' y2='132'/><line x1='42' y1='168' x2='258' y2='168'/><line x1='42' y1='186' x2='258' y2='186'/><line x1='42' y1='204' x2='258' y2='204'/><line x1='42' y1='222' x2='258' y2='222'/><line x1='42' y1='240' x2='258' y2='240'/></g><line x1='42' y1='150' x2='258' y2='150' stroke='#000'/><line x1='150' y1='42' x2='150' y2='258' stroke='#000'/><g font-size='9' fill='#000'><text x='150' y='38' text-anchor='middle' font-style='italic'>y</text><text x='262' y='153' font-style='italic'>x</text><text x='112' y='163'>&minus;2</text><text x='76' y='163'>&minus;4</text><text x='40' y='163'>&minus;6</text><text x='186' y='163'>2</text><text x='222' y='163'>4</text><text x='258' y='163'>6</text><text x='154' y='117'>2</text><text x='154' y='81'>4</text><text x='154' y='189'>&minus;2</text><text x='154' y='225'>&minus;4</text></g><line x1='114' y1='42' x2='258' y2='258' stroke='#000' stroke-width='1.6'/><text x='120' y='52' font-size='13' font-style='italic'>k</text></svg></div><p>Line <em>k</em> is shown in the <em>xy</em>-plane. Line <em>j</em> (not shown) is perpendicular to line <em>k</em> and passes through the point (&minus;12, &minus;19). Which equation defines line <em>j</em>?</p>`,
      options: [{ id: `A`, text: `<em>y</em> = <sup>2</sup>&frasl;<sub>3</sub><em>x</em> &minus; 11` }, { id: `B`, text: `<em>y</em> = <sup>2</sup>&frasl;<sub>3</sub><em>x</em> &minus; 27` }, { id: `C`, text: `<em>y</em> = <sup>3</sup>&frasl;<sub>2</sub><em>x</em> &minus; 11` }, { id: `D`, text: `<em>y</em> = <sup>3</sup>&frasl;<sub>2</sub><em>x</em> &minus; 27` }],
      answer: `A` },

    { id: `j6id-math-m1-18`, domain: `Problem-Solving and Data Analysis`, skill: `One-variable data: distributions and measures of center and spread`, difficulty: `easy`, type: `grid`,
      prompt: `<div style='text-align:center'><p>12, 12, 18, 24, 29</p></div><p>What is the median of the data set shown?</p>`,
      answer: [`18`] },

    { id: `j6id-math-m1-19`, domain: `Geometry and Trigonometry`, skill: `Right triangles and trigonometry`, difficulty: `hard`, type: `mcq`,
      prompt: `<p>In right triangle <em>ABC</em>, angles <em>A</em> and <em>B</em> are acute, side <em>AC</em> has a length of 21.7, and tan <em>B</em> = <sup>1</sup>&frasl;<sub>8</sub>. What is the length of side <em>BC</em>, rounded to the nearest tenth?</p>`,
      options: [{ id: `A`, text: `470.9` }, { id: `B`, text: `173.6` }, { id: `C`, text: `4.7` }, { id: `D`, text: `2.7` }],
      answer: `B` },

    { id: `j6id-math-m1-20`, domain: `Geometry and Trigonometry`, skill: `Area and volume`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>A rectangular banner has an area of 2,500 square inches. A copy of the banner is made in which the length and width of the original banner are each increased by 40%. What is the area of the copy, in square inches?</p>`,
      options: [{ id: `A`, text: `2,540` }, { id: `B`, text: `2,580` }, { id: `C`, text: `3,500` }, { id: `D`, text: `4,900` }],
      answer: `D` },

    { id: `j6id-math-m1-21`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<div style='text-align:center'><p><em>f</em>(<em>x</em>) = (<em>x</em> &minus; 2)<sup>2</sup> + 9</p></div><p>What is the minimum value of the given function?</p>`,
      options: [{ id: `A`, text: `2` }, { id: `B`, text: `7` }, { id: `C`, text: `9` }, { id: `D`, text: `11` }],
      answer: `C` },

    { id: `j6id-math-m1-22`, domain: `Geometry and Trigonometry`, skill: `Circles`, difficulty: `hard`, type: `mcq`,
      prompt: `<p>Point <em>F</em> lies on a unit circle in the <em>xy</em>-plane and has coordinates (1, 0). Point <em>G</em> is the center of the circle and has coordinates (0, 0). Point <em>H</em> also lies on the circle and has coordinates (&minus;1, <em>y</em>), where <em>y</em> is a constant. Which of the following could be the positive measure of angle <em>FGH</em>, in radians?</p>`,
      options: [{ id: `A`, text: `<sup>27&pi;</sup>&frasl;<sub>2</sub>` }, { id: `B`, text: `<sup>29&pi;</sup>&frasl;<sub>2</sub>` }, { id: `C`, text: `24&pi;` }, { id: `D`, text: `25&pi;` }],
      answer: `D` },
  ];

  const MATH_M2 = [
    { id: `j6id-math-m2-1`, domain: `Problem-Solving and Data Analysis`, skill: `Ratios, rates, proportional relationships, and units`, difficulty: `easy`, type: `mcq`,
      prompt: `<p>An object&rsquo;s average acceleration, in meters per second squared, is the change in the object&rsquo;s speed, in meters per second, divided by the time during which the change occurred, in seconds. A certain object&rsquo;s speed changes by 22 meters per second in 8 seconds. What is this object&rsquo;s average acceleration, in meters per second squared, during this time period?</p>`,
      options: [{ id: `A`, text: `0.36` }, { id: `B`, text: `2.75` }, { id: `C`, text: `14` }, { id: `D`, text: `30` }],
      answer: `B` },

    { id: `j6id-math-m2-2`, domain: `Advanced Math`, skill: `Nonlinear equations in one variable and systems of equations in two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `<p><em>x</em> + 47 = <em>y</em><br>(<em>x</em> + 47)<sup>2</sup> = <em>y</em></p><p>A solution to the given system of equations is (<em>x</em>, <em>y</em>). What is a possible value of <em>x</em>?</p>`,
      options: [{ id: `A`, text: `47` }, { id: `B`, text: `1` }, { id: `C`, text: `0` }, { id: `D`, text: `&minus;46` }],
      answer: `D` },

    { id: `j6id-math-m2-3`, domain: `Algebra`, skill: `Linear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<p><em>f</em>(<em>x</em>) = 50<em>x</em> + 8</p><p>The given function <em>f</em> estimates the distance a train has traveled, in kilometers, from a station in a certain city <em>x</em> hours after crossing the city border. What is the best interpretation of 8 in this context?</p>`,
      options: [{ id: `A`, text: `Between the station and the city border, the train traveled an estimated total distance of 8 kilometers.` }, { id: `B`, text: `Between the station and the city border, the train traveled at an estimated speed of 8 kilometers per hour.` }, { id: `C`, text: `After crossing the city border, the train traveled at an estimated speed of 8 kilometers per hour.` }, { id: `D`, text: `After crossing the city border, the train traveled an estimated total distance of 8 kilometers.` }],
      answer: `A` },

    { id: `j6id-math-m2-4`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `medium`, type: `mcq`,
      prompt: `<p><sup>1</sup>&frasl;<sub>6</sub>(<em>x</em> + 2) &minus; <sup>1</sup>&frasl;<sub>5</sub>(<em>x</em> + 2) = &minus;5</p><p>What value of <em>x</em> is the solution to the given equation?</p>`,
      options: [{ id: `A`, text: `&minus;7` }, { id: `B`, text: `&minus;2` }, { id: `C`, text: `148` }, { id: `D`, text: `270` }],
      answer: `C` },

    { id: `j6id-math-m2-5`, domain: `Algebra`, skill: `Linear functions`, difficulty: `medium`, type: `grid`,
      prompt: `<p>The function <em>g</em> is defined by <em>g</em>(<em>x</em>) = <sup>3</sup>&frasl;<sub>4</sub><em>x</em> &minus; 18. What is the <em>x</em>-coordinate of the <em>x</em>-intercept of the graph of <em>y</em> = <em>g</em>(<em>x</em>) in the <em>xy</em>-plane?</p>`,
      answer: [`24`] },

    { id: `j6id-math-m2-6`, domain: `Geometry and Trigonometry`, skill: `Lines, angles, and triangles`, difficulty: `medium`, type: `mcq`,
      prompt: `<div style='text-align:center'><svg viewBox='0 0 470 210' xmlns='http://www.w3.org/2000/svg' style='max-width:420px;font-family:Georgia,serif'><line x1='70' y1='60' x2='360' y2='60' stroke='#000' stroke-width='1.4'/><line x1='360' y1='60' x2='405' y2='175' stroke='#000' stroke-width='1.4'/><line x1='160' y1='60' x2='405' y2='175' stroke='#000' stroke-width='1.4'/><text x='62' y='52' font-size='15' font-style='italic'>S</text><text x='154' y='52' font-size='15' font-style='italic'>R</text><text x='356' y='52' font-size='15' font-style='italic'>Q</text><text x='410' y='183' font-size='15' font-style='italic'>P</text></svg><p style='font-size:12px'>Note: Figure not drawn to scale.</p><p>In triangle <em>PQR</em>, <span style='text-decoration:overline'>QR</span> is extended to point <em>S</em>. The measure of &ang;<em>PQR</em> is 142&deg;, and the measure of &ang;<em>PRS</em> is 166&deg;. What is the measure of &ang;<em>QPR</em>?</p></div>`,
      options: [{ id: `A`, text: `14&deg;` }, { id: `B`, text: `19&deg;` }, { id: `C`, text: `24&deg;` }, { id: `D`, text: `38&deg;` }],
      answer: `C` },

    { id: `j6id-math-m2-7`, domain: `Algebra`, skill: `Linear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<div style='text-align:center'><p style='text-align:left'>Two students are playing a game. In the first round, Player 1 answers 33 questions. If an answer is correct, Player 1 earns 1 point. If an answer is incorrect, Player 2 will earn 1 point instead. The graph shows <em>y</em> = <em>f</em>(<em>x</em>), where <em>y</em> is the number of points Player 2 will earn when <em>x</em> is the number of points Player 1 earns.</p><svg viewBox='0 0 340 300' xmlns='http://www.w3.org/2000/svg' style='max-width:320px;font-family:Georgia,serif'><line x1='45.0' y1='55' x2='45.0' y2='250' stroke='#ddd' stroke-width='0.7'/><line x1='45' y1='250.0' x2='320' y2='250.0' stroke='#ddd' stroke-width='0.7'/><line x1='100.0' y1='55' x2='100.0' y2='250' stroke='#ddd' stroke-width='0.7'/><line x1='45' y1='211.0' x2='320' y2='211.0' stroke='#ddd' stroke-width='0.7'/><text x='40' y='214.0' text-anchor='end' font-size='9'>10</text><text x='100.0' y='264' text-anchor='middle' font-size='9'>10</text><line x1='155.0' y1='55' x2='155.0' y2='250' stroke='#ddd' stroke-width='0.7'/><line x1='45' y1='172.0' x2='320' y2='172.0' stroke='#ddd' stroke-width='0.7'/><text x='40' y='175.0' text-anchor='end' font-size='9'>20</text><text x='155.0' y='264' text-anchor='middle' font-size='9'>20</text><line x1='210.0' y1='55' x2='210.0' y2='250' stroke='#ddd' stroke-width='0.7'/><line x1='45' y1='133.0' x2='320' y2='133.0' stroke='#ddd' stroke-width='0.7'/><text x='40' y='136.0' text-anchor='end' font-size='9'>30</text><text x='210.0' y='264' text-anchor='middle' font-size='9'>30</text><line x1='265.0' y1='55' x2='265.0' y2='250' stroke='#ddd' stroke-width='0.7'/><line x1='45' y1='94.0' x2='320' y2='94.0' stroke='#ddd' stroke-width='0.7'/><text x='40' y='97.0' text-anchor='end' font-size='9'>40</text><text x='265.0' y='264' text-anchor='middle' font-size='9'>40</text><line x1='320.0' y1='55' x2='320.0' y2='250' stroke='#ddd' stroke-width='0.7'/><line x1='45' y1='55.0' x2='320' y2='55.0' stroke='#ddd' stroke-width='0.7'/><text x='40' y='58.0' text-anchor='end' font-size='9'>50</text><text x='320.0' y='264' text-anchor='middle' font-size='9'>50</text><line x1='45' y1='55' x2='45' y2='250' stroke='#000' stroke-width='1.2'/><line x1='45' y1='250' x2='322' y2='250' stroke='#000' stroke-width='1.2'/><text x='36' y='50' font-size='11' font-style='italic'>y</text><text x='330' y='253' font-size='11' font-style='italic'>x</text><text x='40' y='262' text-anchor='end' font-size='9' font-style='italic'>O</text><line x1='45.0' y1='121.3' x2='226.5' y2='250.0' stroke='#000' stroke-width='1.8'/><circle cx='226.5' cy='250.0' r='3' fill='#000'/></svg><p style='text-align:left'>Which of the following is the best interpretation of the point (33, 0) in this context?</p></div>`,
      options: [{ id: `A`, text: `When Player 1 earns 33 points, Player 2 will earn 33 points.` }, { id: `B`, text: `When Player 1 earns 33 points, Player 2 will earn 0 points.` }, { id: `C`, text: `When Player 1 earns 0 points, Player 2 will earn 33 points.` }, { id: `D`, text: `When Player 1 earns 0 points, Player 2 will earn 0 points.` }],
      answer: `B` },

    { id: `j6id-math-m2-8`, domain: `Advanced Math`, skill: `Equivalent expressions`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>Which expression is a factor of 7<em>x</em><sup>2</sup> &minus; 9<em>x</em> + 14<em>x</em> &minus; 18?</p>`,
      options: [{ id: `A`, text: `<em>x</em> &minus; 2` }, { id: `B`, text: `<em>x</em> + 9` }, { id: `C`, text: `7<em>x</em> &minus; 9` }, { id: `D`, text: `7<em>x</em> + 2` }],
      answer: `C` },

    { id: `j6id-math-m2-9`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `grid`,
      prompt: `<div style='text-align:center'><p style='text-align:left'>The graph shows the momentum <em>y</em>, in newton-seconds, of an object <em>x</em> seconds after the object started moving, for 0 &le; <em>x</em> &le; 8.</p><svg viewBox='0 0 340 300' xmlns='http://www.w3.org/2000/svg' style='max-width:320px;font-family:Georgia,serif'><line x1='50.0' y1='55' x2='50.0' y2='250' stroke='#ddd' stroke-width='0.7'/><line x1='80.0' y1='55' x2='80.0' y2='250' stroke='#ddd' stroke-width='0.7'/><text x='80.0' y='264' text-anchor='middle' font-size='9'>1</text><line x1='110.0' y1='55' x2='110.0' y2='250' stroke='#ddd' stroke-width='0.7'/><text x='110.0' y='264' text-anchor='middle' font-size='9'>2</text><line x1='140.0' y1='55' x2='140.0' y2='250' stroke='#ddd' stroke-width='0.7'/><text x='140.0' y='264' text-anchor='middle' font-size='9'>3</text><line x1='170.0' y1='55' x2='170.0' y2='250' stroke='#ddd' stroke-width='0.7'/><text x='170.0' y='264' text-anchor='middle' font-size='9'>4</text><line x1='200.0' y1='55' x2='200.0' y2='250' stroke='#ddd' stroke-width='0.7'/><text x='200.0' y='264' text-anchor='middle' font-size='9'>5</text><line x1='230.0' y1='55' x2='230.0' y2='250' stroke='#ddd' stroke-width='0.7'/><text x='230.0' y='264' text-anchor='middle' font-size='9'>6</text><line x1='260.0' y1='55' x2='260.0' y2='250' stroke='#ddd' stroke-width='0.7'/><text x='260.0' y='264' text-anchor='middle' font-size='9'>7</text><line x1='290.0' y1='55' x2='290.0' y2='250' stroke='#ddd' stroke-width='0.7'/><text x='290.0' y='264' text-anchor='middle' font-size='9'>8</text><line x1='320.0' y1='55' x2='320.0' y2='250' stroke='#ddd' stroke-width='0.7'/><text x='320.0' y='264' text-anchor='middle' font-size='9'>9</text><line x1='50' y1='250.0' x2='320' y2='250.0' stroke='#ddd' stroke-width='0.7'/><line x1='50' y1='232.3' x2='320' y2='232.3' stroke='#ddd' stroke-width='0.7'/><text x='45' y='235.3' text-anchor='end' font-size='8.5'>1</text><line x1='50' y1='214.5' x2='320' y2='214.5' stroke='#ddd' stroke-width='0.7'/><text x='45' y='217.5' text-anchor='end' font-size='8.5'>2</text><line x1='50' y1='196.8' x2='320' y2='196.8' stroke='#ddd' stroke-width='0.7'/><text x='45' y='199.8' text-anchor='end' font-size='8.5'>3</text><line x1='50' y1='179.1' x2='320' y2='179.1' stroke='#ddd' stroke-width='0.7'/><text x='45' y='182.1' text-anchor='end' font-size='8.5'>4</text><line x1='50' y1='161.4' x2='320' y2='161.4' stroke='#ddd' stroke-width='0.7'/><text x='45' y='164.4' text-anchor='end' font-size='8.5'>5</text><line x1='50' y1='143.6' x2='320' y2='143.6' stroke='#ddd' stroke-width='0.7'/><text x='45' y='146.6' text-anchor='end' font-size='8.5'>6</text><line x1='50' y1='125.9' x2='320' y2='125.9' stroke='#ddd' stroke-width='0.7'/><text x='45' y='128.9' text-anchor='end' font-size='8.5'>7</text><line x1='50' y1='108.2' x2='320' y2='108.2' stroke='#ddd' stroke-width='0.7'/><text x='45' y='111.2' text-anchor='end' font-size='8.5'>8</text><line x1='50' y1='90.5' x2='320' y2='90.5' stroke='#ddd' stroke-width='0.7'/><text x='45' y='93.5' text-anchor='end' font-size='8.5'>9</text><line x1='50' y1='72.7' x2='320' y2='72.7' stroke='#ddd' stroke-width='0.7'/><text x='45' y='75.7' text-anchor='end' font-size='8.5'>10</text><line x1='50' y1='55.0' x2='320' y2='55.0' stroke='#ddd' stroke-width='0.7'/><text x='45' y='58.0' text-anchor='end' font-size='8.5'>11</text><line x1='50' y1='55' x2='50' y2='250' stroke='#000' stroke-width='1.2'/><line x1='50' y1='250' x2='322' y2='250' stroke='#000' stroke-width='1.2'/><text x='42' y='50' font-size='11' font-style='italic'>y</text><text x='330' y='253' font-size='11' font-style='italic'>x</text><text x='45' y='262' text-anchor='end' font-size='9' font-style='italic'>O</text><polyline points='50.0,232.3 80.0,225.2 110.0,214.5 140.0,202.1 170.0,179.1 200.0,143.6 230.0,108.2 260.0,85.1 272.0,79.8 290.0,90.5' fill='none' stroke='#000' stroke-width='1.8'/><circle cx='50.0' cy='232.3' r='3' fill='#000'/><circle cx='110.0' cy='214.5' r='3' fill='#000'/><circle cx='170.0' cy='179.1' r='3' fill='#000'/><circle cx='230.0' cy='108.2' r='3' fill='#000'/><circle cx='290.0' cy='90.5' r='3' fill='#000'/><text x='18' y='155' text-anchor='middle' font-size='9' transform='rotate(-90 18 155)'>Momentum (newton-seconds)</text><text x='185' y='282' text-anchor='middle' font-size='10'>Time (seconds)</text></svg><p style='text-align:left'>What is the average rate of change, in newton-seconds per second, in the momentum of the object from <em>x</em> = 2 to <em>x</em> = 6?</p></div>`,
      answer: [`3/2`, `1.5`] },

    { id: `j6id-math-m2-10`, domain: `Advanced Math`, skill: `Nonlinear equations in one variable and systems of equations in two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>(<em>x</em> + 81)<sup>2</sup> = &minus;256</p><p>How many distinct real solutions does the given equation have?</p>`,
      options: [{ id: `A`, text: `Exactly one` }, { id: `B`, text: `Exactly two` }, { id: `C`, text: `Infinitely many` }, { id: `D`, text: `Zero` }],
      answer: `D` },

    { id: `j6id-math-m2-11`, domain: `Advanced Math`, skill: `Nonlinear equations in one variable and systems of equations in two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>|<em>x</em> &minus; 6| = 13</p><p>What is the sum of the solutions to the given equation?</p>`,
      options: [{ id: `A`, text: `0` }, { id: `B`, text: `12` }, { id: `C`, text: `19` }, { id: `D`, text: `26` }],
      answer: `B` },

    { id: `j6id-math-m2-12`, domain: `Problem-Solving and Data Analysis`, skill: `Inference from sample statistics and margin of error`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>The manager of a gym selected a sample of 139 members at random to estimate the percentage of the gym&rsquo;s members that would continue to pay for a membership if the price increased. From the survey, the manager estimates that 82% of the gym&rsquo;s members would continue to pay for a membership if the price increased, with an associated margin of error of 6.39%. If the survey is repeated with a random sample of 278 members and the results are calculated in the same way, which of the following will be the most likely effect of using the larger random sample compared to the smaller random sample?</p>`,
      options: [{ id: `A`, text: `The margin of error will be lower.` }, { id: `B`, text: `The margin of error will be higher.` }, { id: `C`, text: `The estimate of the percentage of the gym&rsquo;s members that would continue to pay for a membership if the price increased will be lower.` }, { id: `D`, text: `The estimate of the percentage of the gym&rsquo;s members that would continue to pay for a membership if the price increased will be higher.` }],
      answer: `A` },

    { id: `j6id-math-m2-13`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `medium`, type: `grid`,
      prompt: `<p>Raheem bought 9 shirts that were each the same price. He used a coupon for $54 off the entire purchase. The cost for the entire purchase after using the coupon was $108. What was the original price, in dollars, for 1 shirt?</p>`,
      answer: [`18`] },

    { id: `j6id-math-m2-14`, domain: `Problem-Solving and Data Analysis`, skill: `One-variable data: distributions and measures of center and spread`, difficulty: `hard`, type: `mcq`,
      prompt: `<div style='text-align:center'><p style='text-align:left'>The maximum temperature on April 1, in degrees Fahrenheit (&deg;F), was recorded each year at a certain weather station for 11 years. The histogram summarizes the recorded data set.</p><svg viewBox='0 0 380 300' xmlns='http://www.w3.org/2000/svg' style='max-width:340px;font-family:Georgia,serif'><line x1='55' y1='250.0' x2='345' y2='250.0' stroke='#bbb' stroke-width='0.7'/><text x='50' y='253.0' text-anchor='end' font-size='9'>0</text><line x1='55' y1='202.5' x2='345' y2='202.5' stroke='#bbb' stroke-width='0.7'/><text x='50' y='205.5' text-anchor='end' font-size='9'>1</text><line x1='55' y1='155.0' x2='345' y2='155.0' stroke='#bbb' stroke-width='0.7'/><text x='50' y='158.0' text-anchor='end' font-size='9'>2</text><line x1='55' y1='107.5' x2='345' y2='107.5' stroke='#bbb' stroke-width='0.7'/><text x='50' y='110.5' text-anchor='end' font-size='9'>3</text><line x1='55' y1='60.0' x2='345' y2='60.0' stroke='#bbb' stroke-width='0.7'/><text x='50' y='63.0' text-anchor='end' font-size='9'>4</text><rect x='55.0' y='202.5' width='35.6' height='47.5' fill='#c8c8c8' stroke='#000' stroke-width='1'/><rect x='90.6' y='155.0' width='35.6' height='95.0' fill='#c8c8c8' stroke='#000' stroke-width='1'/><rect x='126.2' y='107.5' width='35.6' height='142.5' fill='#c8c8c8' stroke='#000' stroke-width='1'/><rect x='161.9' y='107.5' width='35.6' height='142.5' fill='#c8c8c8' stroke='#000' stroke-width='1'/><rect x='197.5' y='202.5' width='35.6' height='47.5' fill='#c8c8c8' stroke='#000' stroke-width='1'/><rect x='304.4' y='202.5' width='35.6' height='47.5' fill='#c8c8c8' stroke='#000' stroke-width='1'/><text x='55.0' y='264' text-anchor='middle' font-size='9'>40</text><text x='90.6' y='264' text-anchor='middle' font-size='9'>45</text><text x='126.2' y='264' text-anchor='middle' font-size='9'>50</text><text x='161.9' y='264' text-anchor='middle' font-size='9'>55</text><text x='197.5' y='264' text-anchor='middle' font-size='9'>60</text><text x='233.1' y='264' text-anchor='middle' font-size='9'>65</text><text x='268.8' y='264' text-anchor='middle' font-size='9'>70</text><text x='304.4' y='264' text-anchor='middle' font-size='9'>75</text><text x='340.0' y='264' text-anchor='middle' font-size='9'>80</text><line x1='55' y1='55' x2='55' y2='250' stroke='#000' stroke-width='1.2'/><line x1='55' y1='250' x2='345' y2='250' stroke='#000' stroke-width='1.2'/><text x='16' y='155' text-anchor='middle' font-size='9.5' transform='rotate(-90 16 155)'>Number of years</text><text x='200' y='282' text-anchor='middle' font-size='10'>Maximum temperature on April 1 (&deg;F)</text></svg><p style='text-align:left'>The temperature of 78.2&deg;F is removed from this data set to create a new data set of 10 temperatures. Which of the following statements must be true?<br>I. The mean of the new data set is less than the mean of the original data set.<br>II. The median of the new data set is less than the median of the original data set.</p></div>`,
      options: [{ id: `A`, text: `I only` }, { id: `B`, text: `II only` }, { id: `C`, text: `I and II` }, { id: `D`, text: `Neither I nor II` }],
      answer: `C` },

    { id: `j6id-math-m2-15`, domain: `Problem-Solving and Data Analysis`, skill: `Percentages`, difficulty: `hard`, type: `grid`,
      prompt: `<p>For the positive quantities <em>h</em>, <em>j</em>, and <em>k</em>, 94% of <em>h</em> is equivalent to 47% of <em>j</em>, and <em>j</em> is equivalent to 30% of <em>k</em>. What percentage of <em>k</em> is <em>h</em>? (Disregard the % sign when entering your answer. For example, if your answer is 39%, enter 39.)</p>`,
      answer: [`15`] },

    { id: `j6id-math-m2-16`, domain: `Advanced Math`, skill: `Equivalent expressions`, difficulty: `hard`, type: `mcq`,
      prompt: `<p>For the exponential function <em>f</em>, the value of <em>f</em>(1) is <em>k</em>, where <em>k</em> is a constant. Which of the following equivalent forms of the function <em>f</em> shows the value of <em>k</em> as the coefficient or the base?</p>`,
      options: [{ id: `A`, text: `<em>f</em>(<em>x</em>) = 50(1.4)<sup><em>x</em>+1</sup>` }, { id: `B`, text: `<em>f</em>(<em>x</em>) = 70(1.4)<sup><em>x</em></sup>` }, { id: `C`, text: `<em>f</em>(<em>x</em>) = 98(1.4)<sup><em>x</em>&minus;1</sup>` }, { id: `D`, text: `<em>f</em>(<em>x</em>) = 137.2(1.4)<sup><em>x</em>&minus;2</sup>` }],
      answer: `C` },

    { id: `j6id-math-m2-17`, domain: `Geometry and Trigonometry`, skill: `Lines, angles, and triangles`, difficulty: `hard`, type: `grid`,
      prompt: `<p>In triangle <em>PQR</em>, the measure of angle <em>P</em> is (3<em>x</em> + 5)&deg;, the measure of angle <em>Q</em> is (2<em>x</em> + 9)&deg;, and the measure of angle <em>R</em> is (4<em>y</em> + 5)&deg;. If side <em>QR</em> is extended through point <em>R</em> to point <em>S</em>, and the measure of angle <em>PRS</em> is (<em>x</em> + <em>y</em>)&deg;, what is the value of <em>x</em> + <em>y</em>?</p>`,
      answer: [`39`] },

    { id: `j6id-math-m2-18`, domain: `Geometry and Trigonometry`, skill: `Lines, angles, and triangles`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>The triangle inequality theorem states that the sum of any two sides of a triangle must be greater than the length of the third side. If a triangle has side lengths of 8 and 13, which inequality represents the possible lengths, <em>x</em>, of the third side of the triangle?</p>`,
      options: [{ id: `A`, text: `<em>x</em> &lt; 21` }, { id: `B`, text: `<em>x</em> &gt; 21` }, { id: `C`, text: `5 &lt; <em>x</em> &lt; 21` }, { id: `D`, text: `<em>x</em> &lt; 5 or <em>x</em> &gt; 21` }],
      answer: `C` },

    { id: `j6id-math-m2-19`, domain: `Geometry and Trigonometry`, skill: `Area and volume`, difficulty: `hard`, type: `mcq`,
      prompt: `<p>A right circular cone has a volume of 2,700&pi; cubic centimeters and the area of its base is 225&pi; square centimeters. What is the slant height, in centimeters, of this cone?</p>`,
      options: [{ id: `A`, text: `12` }, { id: `B`, text: `15` }, { id: `C`, text: `36` }, { id: `D`, text: `39` }],
      answer: `D` },

    { id: `j6id-math-m2-20`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `hard`, type: `grid`,
      prompt: `<p>A quadratic function models the height, in feet, of an object above the ground in terms of the time, in seconds, after the object was launched. According to the model, the object was launched from a height of 0 feet and reached its maximum height of 1,600 feet 10 seconds after it was launched. Based on the model, what was the height, in feet, of the object 15 seconds after it was launched?</p>`,
      answer: [`1200`] },

    { id: `j6id-math-m2-21`, domain: `Algebra`, skill: `Linear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>The cost of renting a power washer is $92 for the first day and $46 for each additional day. Which of the following functions gives the cost <em>C</em>(<em>d</em>), in dollars, of renting the power washer for <em>d</em> days, where <em>d</em> is a positive integer?</p>`,
      options: [{ id: `A`, text: `<em>C</em>(<em>d</em>) = 46<em>d</em> + 46` }, { id: `B`, text: `<em>C</em>(<em>d</em>) = 46<em>d</em> + 92` }, { id: `C`, text: `<em>C</em>(<em>d</em>) = 92<em>d</em> &minus; 46` }, { id: `D`, text: `<em>C</em>(<em>d</em>) = 92<em>d</em> + 138` }],
      answer: `A` },

    { id: `j6id-math-m2-22`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `hard`, type: `mcq`,
      prompt: `<p>The function <em>f</em> is defined by <em>f</em>(<em>x</em>) = <em>ax</em><sup>2</sup> + <em>bx</em> + <em>c</em>, where <em>a</em>, <em>b</em>, and <em>c</em> are constants. The graph of <em>y</em> = <em>f</em>(<em>x</em>) in the <em>xy</em>-plane passes through the points (9, 0) and (&minus;2, 0). If <em>a</em> is an integer greater than 1, which of the following could be the value of <em>a</em> + <em>b</em>?</p>`,
      options: [{ id: `A`, text: `8` }, { id: `B`, text: `7` }, { id: `C`, text: `&minus;6` }, { id: `D`, text: `&minus;12` }],
      answer: `D` },
  ];

  Apex.bank.register({
    id: "dsat-2024-06-int-d",
    title: "June 2024",
    type: "digital",
    region: "International",
    version: "D",
    year: 2024,
    monthNum: 6,
    tagline: "International \u00b7 Version D",
    description: "Digital SAT \u2014 June 2024 International prediction form, Version D (Reading & Writing native; Math-M1 from Version A and Math-M2 from Version C).",
    adaptive: false,
    sections: [
      { id: "rw", modules: [
        { id: "j6id-rw-m1", stage: 1, name: "Reading and Writing \u2014 Module 1", minutes: 32, questions: RW_M1 },
        { id: "j6id-rw-m2", stage: 2, variant: "hard", name: "Reading and Writing \u2014 Module 2 (Hard)", minutes: 32, questions: RW_M2 },
      ] },
      { id: "math", modules: [
        { id: "j6id-math-m1", stage: 1, name: "Math \u2014 Module 1", minutes: 35, calculator: true, questions: MATH_M1 },
        { id: "j6id-math-m2", stage: 2, variant: "hard", name: "Math \u2014 Module 2 (Hard)", minutes: 35, calculator: true, questions: MATH_M2 },
      ] },
    ],
  });
})();
