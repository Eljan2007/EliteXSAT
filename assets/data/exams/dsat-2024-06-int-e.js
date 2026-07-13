/* Digital SAT - June 2024 International Form E (Set 5). R&W native (RW-M2 Q25 cross-filled from Version A, flagged); Math is the shared B/E pool. Both Module 2s Hard. No explanations. COMPLETE. */
(function () {
  const RW_M1 = [
    { id: `j6ie-rw-m1-1`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `easy`, type: `mcq`,
      passage: `<p>The following text is from Jhumpa Lahiri&rsquo;s 2003 novel <em>The Namesake</em>. Gogol, a child, is at a beach in Massachusetts with his father.</p><p>He watches his father <u>raise</u> a kite within minutes into the wind, so high that Gogol must tip his head back in order to see, a rippling speck against the sky. The wind whips around their ears, turning their faces cold.</p>`,
      prompt: `<p>As used in the text, what does the word &ldquo;raise&rdquo; most nearly mean?</p>`,
      options: [{ id: `A`, text: `Strengthen` }, { id: `B`, text: `Lift` }, { id: `C`, text: `Congratulate` }, { id: `D`, text: `Grow` }],
      answer: `B` },

    { id: `j6ie-rw-m1-2`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Novelist Leon Forrest admired William Faulkner&rsquo;s writing style. Forrest&rsquo;s novel <em>Divine Days</em> contains a long passage in tribute to Faulkner that is a perfect _____ of Faulkner&rsquo;s style: anyone familiar with Faulkner&rsquo;s writing would see the resemblance.</p>`,
      prompt: `<p>Which choice completes the text with the most logical and precise word or phrase?</p>`,
      options: [{ id: `A`, text: `imitation` }, { id: `B`, text: `forgetting` }, { id: `C`, text: `rejection` }, { id: `D`, text: `opinion` }],
      answer: `A` },

    { id: `j6ie-rw-m1-3`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The Ghana Stock Exchange in Accra, Ghana, is a dedicated exchange for investing in companies operating in Ghana, ensuring those companies receive certain regulatory oversight. Knowing this can _____ potential investors&rsquo; worries about bureaucratic minutiae and thereby allow them to instead focus on identifying sound business opportunities.</p>`,
      prompt: `<p>Which choice completes the text with the most logical and precise word or phrase?</p>`,
      options: [{ id: `A`, text: `assuage` }, { id: `B`, text: `convey` }, { id: `C`, text: `amplify` }, { id: `D`, text: `designate` }],
      answer: `A` },

    { id: `j6ie-rw-m1-4`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The tendency to group authors together into distinct literary movements often encourages literary scholars to _____ subtleties in an author&rsquo;s style. Those studying the works of Langston Hughes, for instance, may inadvertently overlook nuances in his work by focusing only on the most obvious ways in which his style corresponds to the Harlem Renaissance.</p>`,
      prompt: `<p>Which choice completes the text with the most logical and precise word or phrase?</p>`,
      options: [{ id: `A`, text: `denounce` }, { id: `B`, text: `discount` }, { id: `C`, text: `magnify` }, { id: `D`, text: `scrutinize` }],
      answer: `B` },

    { id: `j6ie-rw-m1-5`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The following text is adapted from Louise Erdrich&rsquo;s 2020 novel <em>The Night Watchman</em>. Louis Pipestone is collecting signatures for a petition from fellow members of the Turtle Mountain Band of Chippewa on the tribe&rsquo;s reservation in North Dakota.</p><p>Louis Pipestone tended the petition like a garden. He kept it with him at all times. In town, his eyes sharpened when he noticed a tribal member who hadn&rsquo;t yet signed. Wherever they were&mdash;at the gas pump, mercantile [general store], at Henry&rsquo;s [Caf&eacute;], on the road, or outside the clinic and hospital&mdash;Louis cornered them. If they were waiting for a baby to be born, he&rsquo;d have them sign. If they were laughing, if they were arguing. If they were taking a child home from school, they signed.</p>`,
      prompt: `<p>Which choice best states the main purpose of the text?</p>`,
      options: [{ id: `A`, text: `To demonstrate that most tribal members are enthusiastic about signing the petition` }, { id: `B`, text: `To show that attitudes toward the petition within the tribal community change over time` }, { id: `C`, text: `To portray Louis Pipestone&rsquo;s strong commitment to collecting signatures for the petition` }, { id: `D`, text: `To suggest that some tribal members refuse to sign the petition because they dislike Louis Pipestone` }],
      answer: `C` },

    { id: `j6ie-rw-m1-6`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `<p>In Ojibwe, an Indigenous language from the Great Lakes region of what are now the United States and Canada, <em>pangi</em> means &ldquo;a little bit,&rdquo; whereas <em>p&auml;-pangi</em> means &ldquo;rarely.&rdquo; <u>This phenomenon, in which an element of a root word is repeated, sometimes with modification, within another word that is related to the root word, is called reduplication.</u> In this case, the element &ldquo;pa&rdquo; in <em>pangi</em> gets repeated in <em>p&auml;-pangi</em>. There are many examples of this type of reduplication in Ojibwe.</p>`,
      prompt: `<p>Which choice best describes the function of the underlined sentence in the text as a whole?</p>`,
      options: [{ id: `A`, text: `It provides a general definition of the phenomenon discussed in the text.` }, { id: `B`, text: `It explains where the language discussed in the text is from.` }, { id: `C`, text: `It contrasts the language discussed in the text with other languages.` }, { id: `D`, text: `It provides English translations of the Ojibwe words discussed in the text.` }],
      answer: `A` },

    { id: `j6ie-rw-m1-7`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Microplastics are tiny pieces of plastic waste. Areas of the ocean with higher concentrations of microplastic particles also have smaller and fewer waves. A study by Yukun Sun and colleagues found that the concentration of microplastic particles cannot be the only reason for this reduced wave activity because the concentration of particles that would have the observed effect is much higher than that found in these areas of the ocean. However, they found that surfactants, chemicals often used to manufacture plastics, are released into the water from microplastics and have a much stronger wave-reducing effect.</p>`,
      prompt: `<p>According to the text, what did Sun and colleagues discover about surfactants?</p>`,
      options: [{ id: `A`, text: `They can be used to contain microplastics within certain areas of the ocean.` }, { id: `B`, text: `They are helpful for removing microplastics from the ocean.` }, { id: `C`, text: `They have a much stronger effect on wave activity than microplastics alone do.` }, { id: `D`, text: `They are mainly composed of water.` }],
      answer: `C` },

    { id: `j6ie-rw-m1-8`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Artificial leaves are a developing renewable energy technology that mimics the process of photosynthesis in plants. These devices are silicon-based solar cells coated in chemical catalysts that activate reactions that split water molecules into hydrogen and oxygen gas. The technology, while generating lots of interest, is not yet commercially viable as a large-scale energy source. To meet this challenge, scientists from many fields are researching ways to store, transport, and distribute the energy the devices produce while other scientists are working to improve the cost and efficiency of the devices.</p>`,
      prompt: `<p>Which choice best states the main idea of the text?</p>`,
      options: [{ id: `A`, text: `Continued research and development in artificial-leaf technology is needed before the devices can be widely used as an energy source.` }, { id: `B`, text: `Artificial leaves were developed to mimic the natural process of photosynthesis in plants in order to store energy for long-term commercial use.` }, { id: `C`, text: `The recent increase in the commercial use of artificial leaves as an energy source has encouraged many scientists to research ways to improve the technology.` }, { id: `D`, text: `Artificial leaves split water molecules into oxygen and hydrogen gas using catalysts more efficiently than plants do using the process of photosynthesis.` }],
      answer: `A` },

    { id: `j6ie-rw-m1-9`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `medium`, type: `mcq`,
      passage: `<div style='text-align:center;font-weight:600;font-size:12px;margin:2px 0'>Total Areas of Five Tribal Nations around the United States</div><table style='border-collapse:collapse;margin:6px auto;font-size:13px'><tr><th style='border:1px solid var(--border,#d0d0d0);padding:3px 10px'>Tribal nation</th><th style='border:1px solid var(--border,#d0d0d0);padding:3px 10px'>Location</th><th style='border:1px solid var(--border,#d0d0d0);padding:3px 10px'>Area (square miles)</th></tr><tr><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>Jicarilla Apache Nation</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>New Mexico</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>1,374</td></tr><tr><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>Tohono O&rsquo;odham Nation</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>Arizona</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>4,453</td></tr><tr><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>Choctaw Nation</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>Oklahoma</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>10,864</td></tr><tr><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>Hopi Tribe</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>Arizona</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>2,533</td></tr><tr><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>Standing Rock Sioux Tribe</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>North and South Dakota</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>3,662</td></tr></table><p>A citizen of the Standing Rock Sioux Tribe is a student in a geography class. The student wants to compare the total area covered by his tribal nation in North and South Dakota with the total areas covered by certain tribal nations in other states. Looking at the table, he finds that the area of the Standing Rock Sioux Tribe is 3,662 square miles, while the area of the Jicarilla Apache Nation in New Mexico is _____</p>`,
      prompt: `<p>Which choice most effectively uses data from the table to complete the comparison?</p>`,
      options: [{ id: `A`, text: `4,453 square miles.` }, { id: `B`, text: `10,864 square miles.` }, { id: `C`, text: `1,374 square miles.` }, { id: `D`, text: `2,533 square miles.` }],
      answer: `C` },

    { id: `j6ie-rw-m1-10`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `medium`, type: `mcq`,
      passage: `<div style='text-align:center;font-weight:600;font-size:12px;margin:2px 0'>Numbers of the 23 Non-native Tree Species Reported and the Insect and Fungus Threats to Them</div><table style='border-collapse:collapse;margin:6px auto;font-size:13px'><tr><th style='border:1px solid var(--border,#d0d0d0);padding:3px 10px'>Country</th><th style='border:1px solid var(--border,#d0d0d0);padding:3px 10px'>Trees</th><th style='border:1px solid var(--border,#d0d0d0);padding:3px 10px'>Fungi</th><th style='border:1px solid var(--border,#d0d0d0);padding:3px 10px'>Insects</th></tr><tr><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>Poland</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>10</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>25</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>105</td></tr><tr><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>Belgium</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>4</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>13</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>11</td></tr><tr><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>Finland</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>6</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>11</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>28</td></tr></table><p>Elisabeth P&ouml;tzelsberger and colleagues gathered data on 23 non-native tree species grown in Europe. They analyzed reports from Poland, Belgium, and Finland about the number of these species grown in those countries as well as the numbers of insect and fungus that damage those trees. The researchers concluded that Poland reported a greater number of damaging insect species than either of the other countries did.</p>`,
      prompt: `<p>Which choice best describes data from the table that support P&ouml;tzelsberger and colleagues&rsquo; conclusion?</p>`,
      options: [{ id: `A`, text: `Belgium reported 13 damaging fungus species and 11 damaging insect species, while both Poland and Finland reported more insect species than fungus species.` }, { id: `B`, text: `Poland reported 25 damaging fungus species, which is more than either Belgium or Finland reported.` }, { id: `C`, text: `Finland and Belgium reported 6 and 4 damaging insect species, respectively, which is far fewer than Poland reported.` }, { id: `D`, text: `Poland reported 105 damaging insect species, which is more than either Finland or Belgium reported.` }],
      answer: `D` },

    { id: `j6ie-rw-m1-11`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Callie W. Babbitt, Hema Madaka, and colleagues assembled a database of materials used in consumer electronics by studying products in the lab and by gathering data from other similar product studies. The team rated each study on its level of detail (with a higher rating for reported data with more detail) and on its category consistency (with a higher rating for using materials categories more closely aligned with the categories in the team&rsquo;s database). Based on these ratings, a second research team concluded that the data in a study by Maria Leet Socolof and colleagues would need less adjustment to fit the classifications in the database than the data in a study by Martin Streicher-Porte and colleagues did.</p>`,
      prompt: `<p>Which finding, if true, would most directly support the second research team&rsquo;s conclusion?</p>`,
      options: [{ id: `A`, text: `The study by Socolof and colleagues had a higher consistency rating than the study by Streicher-Porte and colleagues did.` }, { id: `B`, text: `The study by Socolof and colleagues had a high consistency rating and a medium detail rating.` }, { id: `C`, text: `The study by Socolof and colleagues had a higher detail rating than the study by Streicher-Porte and colleagues did.` }, { id: `D`, text: `The study by Streicher-Porte and colleagues had a medium consistency rating and a medium detail rating.` }],
      answer: `A` },

    { id: `j6ie-rw-m1-12`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `medium`, type: `mcq`,
      passage: `<div style='text-align:center;font-weight:600;font-size:12px;margin:2px 0'>Ranking of Environmental and Sociocultural Benefits of Urban Agriculture (scale of 1 to 25; 1 = highest)</div><table style='border-collapse:collapse;margin:6px auto;font-size:13px'><tr><th style='border:1px solid var(--border,#d0d0d0);padding:3px 10px'>Social or ecological service</th><th style='border:1px solid var(--border,#d0d0d0);padding:3px 10px'>Project leaders</th><th style='border:1px solid var(--border,#d0d0d0);padding:3px 10px'>Stakeholders</th><th style='border:1px solid var(--border,#d0d0d0);padding:3px 10px'>General public</th></tr><tr><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>preservation of cultural knowledge and heritage</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>8</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>15</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>13</td></tr><tr><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>prevention of soil erosion</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>13</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>11</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>23</td></tr><tr><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>provision of medicinal plants</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>22</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>21</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>5</td></tr><tr><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>increase in global biodiversity</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>5</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>8</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>17</td></tr><tr><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>enhancement of carbon sequestration</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>17</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>22</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>21</td></tr></table><p>Esther Sany&eacute;-Mengual, Kathrin Specht, and their team surveyed three groups of people in Bologna, Italy&mdash;leaders of urban agriculture projects, stakeholders in urban agriculture (e.g., food researchers and urban farming associations), and the general public&mdash;to compare their views about the extent to which urban agriculture contributes to 25 social or ecological services that the team identified. The researchers used these ratings to rank the services for each group, with a ranking of 1 indicating that a group perceives that urban agriculture benefits that service the most. Using only the rankings shown in the table, a city planner in Bologna who is promoting a new urban agriculture project concludes that advertisements aimed at the general public should emphasize the project&rsquo;s benefit to the provision of medicinal plants.</p>`,
      prompt: `<p>Which choice best describes data in the table that support the city planner&rsquo;s conclusion?</p>`,
      options: [{ id: `A`, text: `The prevention of soil erosion was ranked higher for the general public than was the provision of medicinal plants.` }, { id: `B`, text: `The provision of medicinal plants was ranked higher for stakeholders than it was for the general public.` }, { id: `C`, text: `The preservation of cultural knowledge and heritage was ranked lower for the general public than it was for project leaders.` }, { id: `D`, text: `The provision of medicinal plants was ranked higher for the general public than were the other four services.` }],
      answer: `D` },

    { id: `j6ie-rw-m1-13`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Veronica L. Bura, Akito Y. Kawahara, and Jayne E. Yack investigated the evolution and function of sound production in silk moth and hawk moth caterpillars. They found that during harmless simulated attacks on isolated caterpillars, 33% of the tested species produced sound, which ranged from clicks in <em>Manduca pellenia</em> to whistles in <em>Rhodinia fugax</em>. Although some insects use sound to communicate with members of the same species, the researchers claim that the caterpillar sounds recorded in their study are directed primarily at predators.</p>`,
      prompt: `<p>Which finding, if true, would most directly support Bura and colleagues&rsquo; claim?</p>`,
      options: [{ id: `A`, text: `None of the species that emitted sounds did so before the simulated attacks, and nearly all stopped emitting sounds within ten seconds after the attacks.` }, { id: `B`, text: `Caterpillar clicks were emitted in a frequency detectable by birds that prey on caterpillars, but caterpillar whistles were not.` }, { id: `C`, text: `Each caterpillar species tended to produce one sound during simulated attacks, although individuals occasionally made a variety of other sounds during simulated attacks as well.` }, { id: `D`, text: `In most cases, the sound that a caterpillar species produced during simulated attacks was not produced by other caterpillar species during simulated attacks.` }],
      answer: `A` },

    { id: `j6ie-rw-m1-14`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Over 600 languages are spoken in New York City in addition to English&mdash;one can find Aromanian spoken in the neighborhood of Ridgewood, or Hindi in Gramercy Park. Many immigrants from north China, where Mandarin is the primary language, reside in the neighborhood of Flushing (part of New York City&rsquo;s borough of Queens) while those who emigrated from south China, where many people speak Cantonese or Fuzhounese as a first language, tend to reside in Chinatown, in the borough of Manhattan. Among speakers of Chinese languages, those in Flushing tend to speak Mandarin as their primary language while those in Chinatown tend to speak Cantonese or Fuzhounese as their primary language. This is most likely because _____</p>`,
      prompt: `<p>Which choice most logically completes the text?</p>`,
      options: [{ id: `A`, text: `Chinese immigrants who emigrated to New York City many years ago are more likely to speak several Chinese languages than are more recent Chinese immigrants.` }, { id: `B`, text: `taken together, there are more Cantonese and Fuzhounese speakers among Chinese immigrants in New York City than there are Mandarin speakers.` }, { id: `C`, text: `Chinese immigrants regularly change their residences between Queens and Manhattan after they emigrate, rather than staying in one borough.` }, { id: `D`, text: `there are geographic differences in primary language within China that are reflected in the settlement patterns of Chinese immigrants in New York City.` }],
      answer: `D` },

    { id: `j6ie-rw-m1-15`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Henry Clay&rsquo;s image was printed on $50 US banknotes in 1869, making the former US secretary of state one of many nonpresidents _____ on US currency.</p>`,
      prompt: `<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>`,
      options: [{ id: `A`, text: `did appear` }, { id: `B`, text: `had appeared` }, { id: `C`, text: `appears` }, { id: `D`, text: `to appear` }],
      answer: `D` },

    { id: `j6ie-rw-m1-16`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Many experts, like lawyer and cycling advocate Ernesto Hernandez-Lopez, have proposed bike travel as one possible way to alleviate congestion on the busy roadways of Los Angeles County, California. Indeed, local bicycle paths like the El Dorado Park bicycle _____ have become an increasingly popular means of travel for commuter and recreational trips alike.</p>`,
      prompt: `<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>`,
      options: [{ id: `A`, text: `path, which is 4 miles long` }, { id: `B`, text: `path which is 4 miles long&mdash;` }, { id: `C`, text: `path, which is 4 miles long,` }, { id: `D`, text: `path: which is 4 miles long,` }],
      answer: `C` },

    { id: `j6ie-rw-m1-17`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `<p>West Virginia, _____ 4,623 feet in elevation, reaches its highest point at Spruce Knob.</p>`,
      prompt: `<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>`,
      options: [{ id: `A`, text: `spans` }, { id: `B`, text: `spanning` }, { id: `C`, text: `span` }, { id: `D`, text: `spanned` }],
      answer: `B` },

    { id: `j6ie-rw-m1-18`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The Organisation for Economic Co-operation and Development (OECD) tracks comparative price list data for its thirty-eight member countries. According to this data, in July 2021, a &ldquo;basket&rdquo; of goods and services priced at 100 US dollars (USD) in the United States would have cost 106 USD in fellow OECD member _____</p>`,
      prompt: `<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>`,
      options: [{ id: `A`, text: `nation, Sweden.` }, { id: `B`, text: `nation&mdash;Sweden.` }, { id: `C`, text: `nation Sweden.` }, { id: `D`, text: `nation: Sweden.` }],
      answer: `C` },

    { id: `j6ie-rw-m1-19`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While the greater adjutant can be found in places like the Inner Gulf of Thailand and Manchar Lake in Pakistan, more than 80 percent of this endangered stork species is found in Assam, India. There, wildlife biologist Dr. Purnima Devi Barman is on the front lines of conservation efforts _____ through community involvement and scientific study, aim to bring adjutants back from near extinction.</p>`,
      prompt: `<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>`,
      options: [{ id: `A`, text: `that` }, { id: `B`, text: `that;` }, { id: `C`, text: `that,` }, { id: `D`, text: `that:` }],
      answer: `C` },

    { id: `j6ie-rw-m1-20`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `<p>In knot theory (the mathematical study of curved, closed loops), knots are characterized by their crossing numbers&mdash;that is, the number of times the knotted thread crosses over itself. The trefoil knot and the figure-eight knot, each with a crossing number below five, _____ among the simplest possible knots with the fewest number of crossings.</p>`,
      prompt: `<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>`,
      options: [{ id: `A`, text: `are` }, { id: `B`, text: `has been` }, { id: `C`, text: `is` }, { id: `D`, text: `was` }],
      answer: `A` },

    { id: `j6ie-rw-m1-21`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>At 4,900 years old, Prometheus, a Great Basin bristlecone pine (<em>Pinus longaeva</em>) located in the United States, was one of the oldest known trees in the world. With almost five millennia of climate data in its tree rings, a single tree like this, claims _____ Valerie Trouet, can tell the history of the world.</p>`,
      prompt: `<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>`,
      options: [{ id: `A`, text: `dendrochronologist,` }, { id: `B`, text: `dendrochronologist&mdash;` }, { id: `C`, text: `dendrochronologist` }, { id: `D`, text: `dendrochronologist:` }],
      answer: `C` },

    { id: `j6ie-rw-m1-22`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Space scientist Christine Chen is excited about the potential of the new James Webb Space Telescope (JWST). Unlike its predecessor, the Hubble Telescope, the JWST is primarily an infrared telescope. Most light from distant galaxies is infrared; _____ the JWST can provide Chen and her team much more information about these galaxies than the Hubble could.</p>`,
      prompt: `<p>Which choice completes the text with the most logical transition?</p>`,
      options: [{ id: `A`, text: `in contrast,` }, { id: `B`, text: `consequently,` }, { id: `C`, text: `additionally,` }, { id: `D`, text: `actually,` }],
      answer: `B` },

    { id: `j6ie-rw-m1-23`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>During many historic New York City parades, including the 1952 ticker-tape parade for US Olympic champions, the ribbonlike swirls descending on the scene were paper spools from &ldquo;tickers,&rdquo; telegraph machines that were used to transmit stock prices. _____ the tickers had long since been retired by the time of the parade for the New York Mets in 1986. Then, shredded standard paper enriched the celebration.</p>`,
      prompt: `<p>Which choice completes the text with the most logical transition?</p>`,
      options: [{ id: `A`, text: `Of course,` }, { id: `B`, text: `For example,` }, { id: `C`, text: `In addition,` }, { id: `D`, text: `As a result,` }],
      answer: `A` },

    { id: `j6ie-rw-m1-24`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li><em>Birds of Northern South America</em> is an identification guidebook by ornithologists Robin Restall, Clemencia Rodner, and Miguel Lentino.</li><li>It lists the thirty-five hummingbird species found in Suriname.</li><li>The horned sungem is a medium-sized hummingbird found in Suriname.</li><li>It is identifiable by its distinctive multicolored, tufted crown and its short, black, straight bill.</li><li>The ruby-topaz hummingbird is a small hummingbird found in Suriname.</li><li>It is identifiable by its crimson crown and its short, black, curved bill.</li></ul>`,
      prompt: `<p>Which choice most effectively uses information from the given sentences to emphasize a difference between the two birds?</p>`,
      options: [{ id: `A`, text: `One way to distinguish the horned sungem from the ruby-topaz hummingbird is to look at their bills: the horned sungem&rsquo;s is straight, whereas the ruby-topaz hummingbird&rsquo;s is curved.` }, { id: `B`, text: `Identifiable by its short, black, straight bill and its distinctive multicolored, tufted crown, the horned sungem is a medium-sized hummingbird found in Suriname.` }, { id: `C`, text: `The ruby-topaz hummingbird is a small hummingbird identifiable by its crimson crown and its short, black, curved bill.` }, { id: `D`, text: `The horned sungem and the ruby-topaz hummingbird are two of the thirty-five different hummingbird species found in Suriname.` }],
      answer: `A` },

    { id: `j6ie-rw-m1-25`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>The French Republican calendar replaced the Gregorian calendar in France from 1793 to 1805.</li><li>Both calendars are divided into twelve months.</li><li>The timelines for the months don&rsquo;t match.</li><li>The third month of the French Republican calendar, Frimaire, begins during November, the eleventh month of the Gregorian calendar.</li><li>The fourth month of the French Republican calendar, Niv&ocirc;se, begins during December, the twelfth month of the Gregorian calendar.</li></ul>`,
      prompt: `<p>The student wants to emphasize a difference between the French Republican and Gregorian calendars. Which choice most effectively uses relevant information from the notes to accomplish this goal?</p>`,
      options: [{ id: `A`, text: `Used in France from 1793 to 1805, the French Republican calendar includes the months of Frimaire and Niv&ocirc;se (the third and fourth months of the year).` }, { id: `B`, text: `The timelines for the months of the two calendars don&rsquo;t match; for example, the third month of the French Republican calendar begins during the eleventh month of the Gregorian calendar.` }, { id: `C`, text: `The French Republican calendar, which replaced the Gregorian calendar in France from 1793 to 1805, has twelve months, including the months of Frimaire and Niv&ocirc;se.` }, { id: `D`, text: `The eleventh and twelfth months of the Gregorian calendar are November and December, respectively.` }],
      answer: `B` },

    { id: `j6ie-rw-m1-26`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>The Mohs scale of mineral hardness is a ten-point scale that orders minerals by hardness based on their ability to scratch other minerals.</li><li>Minerals with larger numbers are harder than minerals with smaller numbers and can leave visible scratches on them.</li><li>Minerals with smaller numbers are softer than minerals with larger numbers and cannot leave visible scratches on them.</li><li>The mineral fluorite has a Mohs scale number of 4.</li><li>The mineral quartz has a Mohs scale number of 7.</li><li>The mineral corundum has a Mohs scale number of 9.</li></ul>`,
      prompt: `<p>The student wants to compare the hardness of the three minerals. Which choice most effectively uses relevant information from the notes to accomplish this goal?</p>`,
      options: [{ id: `A`, text: `Based on their Mohs scale numbers, corundum (9) is harder than quartz (7), and quartz is harder than fluorite (4).` }, { id: `B`, text: `The Mohs scale of mineral hardness can be used to order quartz, fluorite, and corundum by their ability to scratch other minerals.` }, { id: `C`, text: `A mineral with a Mohs number of 9, like corundum, is harder than one with a Mohs number of 7, like quartz.` }, { id: `D`, text: `Corundum can leave visible scratches on fluorite, which is why corundum has a higher number than fluorite on the Mohs scale of mineral hardness.` }],
      answer: `A` },

    { id: `j6ie-rw-m1-27`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>Yn&eacute;s Mex&iacute;a was a Mexican American botanist.</li><li>Between 1917 and 1938, she collected over 150,000 botanical samples throughout the Americas.</li><li>She collected a sample of <em>Achyrocline vauthieriana</em> in Minas Gerais, Brazil, on May 3, 1930.</li><li>She collected a sample of <em>Antennaria monocephala</em> in Alaska, the United States, on July 1, 1928.</li><li>These specimens are part of the Asteraceae family.</li><li>They can now be viewed online at the C.V. Starr Virtual Herbarium.</li></ul>`,
      prompt: `<p>Which choice most effectively uses information from the given sentences to begin a narration of Mex&iacute;a&rsquo;s collection of <em>Achyrocline vauthieriana</em>?</p>`,
      options: [{ id: `A`, text: `While both specimens collected by Yn&eacute;s Mex&iacute;a are members of the Asteraceae family, <em>Achyrocline vauthieriana</em> was collected in Minas Gerais, Brazil, and <em>Antennaria monocephala</em> was collected in Alaska, the United States.` }, { id: `B`, text: `It was on May 3, 1930, in the state of Minas Gerais, that Yn&eacute;s Mex&iacute;a added a new specimen to her growing collection of botanical samples: <em>Achyrocline vauthieriana</em> of the Asteraceae family.` }, { id: `C`, text: `Thousands of botanical samples collected from across the Americas by Yn&eacute;s Mex&iacute;a can now be found in one place: online at the C.V. Starr Virtual Herbarium.` }, { id: `D`, text: `Yn&eacute;s Mex&iacute;a collected a sample of <em>Achyrocline vauthieriana</em> in May of 1930 and <em>Antennaria monocephala</em> in July of 1928.` }],
      answer: `B` },
  ];

  const RW_M2 = [
    { id: `j6ie-rw-m2-1`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Economist Jingting Fan argues that the effects of international trade may display spatial variation at sub-national levels. For instance, imported goods may reduce expenses for a country&rsquo;s average consumer, but for consumers living far from ports, high intranational transport costs could _____ the price advantages associated with imports.</p>`,
      prompt: `<p>Which choice completes the text with the most logical and precise word or phrase?</p>`,
      options: [{ id: `A`, text: `underestimate` }, { id: `B`, text: `misconstrue` }, { id: `C`, text: `denigrate` }, { id: `D`, text: `nullify` }],
      answer: `D` },

    { id: `j6ie-rw-m2-2`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `hard`, type: `mcq`,
      passage: `<p>As discussed by scholar Anna Mladentseva, many artworks produced in the mid-1990s to the early 2000s exclusively for exhibition on the internet, such as Sinae Kim&rsquo;s <em>Genesis</em> (2001), have become inaccessible because viewing them requires the use of _____ software (most notably Adobe Flash, discontinued in 2021).</p>`,
      prompt: `<p>Which choice completes the text with the most logical and precise word or phrase?</p>`,
      options: [{ id: `A`, text: `extraneous` }, { id: `B`, text: `arcane` }, { id: `C`, text: `defunct` }, { id: `D`, text: `ubiquitous` }],
      answer: `C` },

    { id: `j6ie-rw-m2-3`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Proposals to raise the age at which retirees begin receiving government transfers of funds are generally discussed in terms of the effects on transfer recipients, but Andria Smythe has argued that delaying such transfers could _____ wealth creation among working adults by lengthening the period in which they are providing financial support to their nonworking parents.</p>`,
      prompt: `<p>Which choice completes the text with the most logical and precise word or phrase?</p>`,
      options: [{ id: `A`, text: `disparage` }, { id: `B`, text: `outstrip` }, { id: `C`, text: `compound` }, { id: `D`, text: `stymie` }],
      answer: `D` },

    { id: `j6ie-rw-m2-4`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `hard`, type: `mcq`,
      passage: `<p>In the early 2010s, the price of collectible and rare Lego sets rose dramatically, which had the counterintuitive effect of _____ demand: buyers who hadn&rsquo;t previously wanted to purchase Lego sets thronged the market, believing prices would continue to rise and the sets could be resold later at a profit.</p>`,
      prompt: `<p>Which choice completes the text with the most logical and precise word or phrase?</p>`,
      options: [{ id: `A`, text: `exploiting` }, { id: `B`, text: `engendering` }, { id: `C`, text: `monetizing` }, { id: `D`, text: `appraising` }],
      answer: `B` },

    { id: `j6ie-rw-m2-5`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `hard`, type: `mcq`,
      passage: `<p>In 2011 Stephen D. Simpson and colleagues published a study concluding that ocean acidification has a strong effect on the behavior of <em>Amphiprion percula</em>, a species of fish. However, Simpson and colleagues&rsquo; study relied on a mean sample size of only about 26 fish. In a 2022 review of various scientists&rsquo; conclusions about the impacts of ocean acidification on fish behavior, Jeff C. Clements and colleagues caution that relying on such a relatively small sample size can increase the potential for biased analysis. Such analysis, in turn, can contribute to reports of exaggerated effects.</p>`,
      prompt: `<p>Which choice best describes the overall structure of the text?</p>`,
      options: [{ id: `A`, text: `It states a similarity between two scientific studies, then notes a difference between them.` }, { id: `B`, text: `It describes a characteristic of a fish species, then explains why that characteristic is noteworthy.` }, { id: `C`, text: `It presents the result of a study, then raises a potential concern related to that result.` }, { id: `D`, text: `It summarizes a problem that scientists are investigating, then provides a possible solution to that problem.` }],
      answer: `C` },

    { id: `j6ie-rw-m2-6`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Researchers C&eacute;sar A. Hidalgo, Elisa Casta&ntilde;er, and Andres Sevtsuk created a computer model to predict the mix of gyms, clothing stores, and other businesses found in a given neighborhood. How we define a neighborhood and its boundaries is subjective, so the team used a clustering algorithm to locate dense groupings of amenities that represent human-identified neighborhoods like Boston&rsquo;s Union Square. <u>The predictive model, which incorporates this algorithm, is sure to be invaluable in determining the optimal mix of a city&rsquo;s amenities.</u></p>`,
      prompt: `<p>Which choice best describes the function of the underlined sentence in the text as a whole?</p>`,
      options: [{ id: `A`, text: `It praises an algorithm&rsquo;s accuracy in identifying neighborhood boundaries.` }, { id: `B`, text: `It emphasizes the potential utility of the team&rsquo;s model.` }, { id: `C`, text: `It summarizes trends in recent urban development in Boston.` }, { id: `D`, text: `It suggests a difficulty associated with analyzing neighborhoods that the research team attempted to overcome.` }],
      answer: `B` },

    { id: `j6ie-rw-m2-7`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Elio Sucena and colleagues have explored how convergent evolution&mdash;a phenomenon that occurs when the same trait evolves independently in two reproductively separate lineages&mdash;can result from a genetic mechanism shared by both lineages. Meanwhile, Michael D. Shapiro and colleagues have investigated how convergence occurs through different genetic mechanisms, but the relative prevalence of convergence through shared and different genetic processes is still poorly understood. This motivated biologists Delbert A. Green II and Cassandra G. Extavour to evaluate both types of convergence in a single study for their 2012 paper.</p>`,
      prompt: `<p>Which choice best states the main purpose of the text?</p>`,
      options: [{ id: `A`, text: `To suggest that Green and Extavour&rsquo;s conclusions would be more persuasive if they incorporated findings from the studies by Sucena and colleagues and Shapiro and colleagues` }, { id: `B`, text: `To argue that Green and Extavour&rsquo;s study revealed a previously unrecognized issue that evolutionary biologists need to address` }, { id: `C`, text: `To summarize Green and Extavour&rsquo;s criticism of the study by Sucena and colleagues` }, { id: `D`, text: `To situate Green and Extavour&rsquo;s study in the context of their field` }],
      answer: `D` },

    { id: `j6ie-rw-m2-8`, domain: `Craft and Structure`, skill: `Cross-Text Connections`, difficulty: `hard`, type: `mcq`,
      passage: `<p><strong>Text 1</strong></p><p>Scholarship today overrepresents experimentally fragmented narrative structures, such as that of William Faulkner&rsquo;s <em>As I Lay Dying</em>, beyond the degree to which they actually influenced fiction in the United States during the modernist period (roughly 1900&ndash;1945). Meanwhile, Ellen Glasgow&rsquo;s <em>Barren Ground</em>, whose coherent, linear narrative structure recalls the fiction of previous centuries, attracts woefully little attention from scholars of modernism.</p><p><strong>Text 2</strong></p><p>Distant reading, or computer-assisted quantitative analysis of massive collections of digitized texts, can reveal stylistic elements that have heretofore escaped notice, despite being shared by numerous texts from the modernist period. For too long, scholars have focused on narrative fragmentation versus coherence, inhibiting inquiry into other points of stylistic correspondence among works that would enrich our understanding of the modernist canon.</p>`,
      prompt: `<p>Based on the texts, both the author of Text 1 and the author of Text 2 would most likely agree with which statement about scholarship on the modernist period in the United States?</p>`,
      options: [{ id: `A`, text: `Its primary methods for analyzing fiction written in the period are growing obsolete as computer technology advances.` }, { id: `B`, text: `Instead of engaging in unproductive debates, it should work to rehabilitate the reputations of neglected modernist works.` }, { id: `C`, text: `At present, it only partially captures the stylistic dimensions of the fiction written in the period.` }, { id: `D`, text: `It must widen its focus to include aspects of modernist fiction beyond style, a productive but overrepresented site of inquiry.` }],
      answer: `C` },

    { id: `j6ie-rw-m2-9`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Why do some people with high incomes vote for politicians supporting higher taxes on those with high incomes like themselves? Economists Benjamin Enke et al. propose that values are a luxury good: that is, the higher one&rsquo;s income, the more weight one has the liberty to assign to one&rsquo;s values when voting. Thus, Enke et al. suggest that although the behavior of high-income earners who advocate for higher taxes may seem counterintuitive, such people likely do so because they feel enabled by their economic security to take a stance they think is morally correct.</p>`,
      prompt: `<p>Which choice best states the main idea of the text?</p>`,
      options: [{ id: `A`, text: `A group of economists asserts that people with relatively high incomes are consequently enabled to take certain considerations into account when voting.` }, { id: `B`, text: `A team of economists finds that people who vote for higher taxes on those with high incomes are likely to think their moral values coincide with their material interests.` }, { id: `C`, text: `According to a group of economists, politicians who support higher taxes on those with high incomes must convince a sufficient number of people with such incomes to vote against their material interest if the politicians are to be elected.` }, { id: `D`, text: `According to a team of economists, the higher a voter&rsquo;s income, the more likely that voter&rsquo;s values are to conflict with their material interests.` }],
      answer: `A` },

    { id: `j6ie-rw-m2-10`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `<div style='text-align:center;font-weight:600;font-size:12px;margin:2px 0'>Studies of Cougar Population Density</div><table style='border-collapse:collapse;margin:6px auto;font-size:13px'><tr><th style='border:1px solid var(--border,#d0d0d0);padding:3px 10px'>Study authors</th><th style='border:1px solid var(--border,#d0d0d0);padding:3px 10px'>Study publication year</th><th style='border:1px solid var(--border,#d0d0d0);padding:3px 10px'>Location</th><th style='border:1px solid var(--border,#d0d0d0);padding:3px 10px'>Minimum density (cougars per 100 square kilometers)</th><th style='border:1px solid var(--border,#d0d0d0);padding:3px 10px'>Maximum density (cougars per 100 square kilometers)</th></tr><tr><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>Robin E. Russell et al.</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>2012</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>Montana (United States)</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>3.70</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>6.70</td></tr><tr><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>Sean M. Murphy et al.</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>2019</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>New Mexico (United States)</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>0.84</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>1.65</td></tr><tr><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>Richard A. Beausoleil et al.</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>2016</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>Washington (United States)</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>1.90</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>2.40</td></tr><tr><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>Gregory A. Davidson et al.</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>2014</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>Oregon (United States)</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>2.31</td><td style='border:1px solid var(--border,#d0d0d0);padding:3px 10px;text-align:center'>5.50</td></tr></table><p>Studies of the population density of cougars (<em>Puma concolor</em>) have yielded a range of results, which may in part reflect natural variations in the resources that cougars need to survive. For example, the difference between the maximum population density reported by Sean M. Murphy et al. and that reported by Robin E. Russell et al. may indicate that _____</p>`,
      prompt: `<p>Which choice most effectively uses data from the table to complete the example?</p>`,
      options: [{ id: `A`, text: `the cougar habitat in Washington can support more than 1.90 individuals per 100 square kilometers.` }, { id: `B`, text: `the cougar habitat in New Mexico cannot support as many individuals as can the cougar habitat in Montana.` }, { id: `C`, text: `cougar habitat makes up a greater proportion of the overall land area in Montana than is the case in New Mexico.` }, { id: `D`, text: `there are more cougars overall in both Oregon and Washington than there are in New Mexico.` }],
      answer: `B` },

    { id: `j6ie-rw-m2-11`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `<p><em>There Is Confusion</em> is a 1924 novel by Jessie Redmon Fauset. In the novel, the narrator portrays the character Joanna as someone who admires ambition in other people to the exclusion of all other qualities: _____</p>`,
      prompt: `<p>Which quotation from <em>There Is Confusion</em> most effectively illustrates the claim?</p>`,
      options: [{ id: `A`, text: `&ldquo;Indeed from the very beginning Joanna showed her preference for her father.&rdquo;` }, { id: `B`, text: `&ldquo;Joanna was like her father not only so far as ambition was concerned but also in her willingness to work.&rdquo;` }, { id: `C`, text: `&ldquo;Joanna was mightily interested in people who had a &lsquo;purpose&rsquo; in life. Otherwise not at all.&rdquo;` }, { id: `D`, text: `&ldquo;She had a good sense of logic, a strong power of concentration, and a remarkably retentive and visualizing memory.&rdquo;` }],
      answer: `C` },

    { id: `j6ie-rw-m2-12`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Some pharmaceuticals contain titanium dioxide nanoparticles (TiO<sub>2</sub>-NPs), which can leach into waterways and soils via wastewater. In a 2014 study, Cheng Tan and Wen-Xiong Wang found that TiO<sub>2</sub>-NPs can accumulate in the bodies of water fleas (<em>Daphnia magna</em>). While bioaccumulation of manufactured nanoparticles may be inherently worrisome, it has been hypothesized that TiO<sub>2</sub>-NP bioaccumulation in invertebrates like <em>D. magna</em> could serve a valuable proxy role, obviating the need for manufacturers to conduct costly and intrusive sampling of vertebrate species&mdash;such as Chinook salmon (<em>Oncorhynchus tshawytscha</em>), commonly used in regulatory compliance testing&mdash;for nanoparticle bioaccumulation, as environmental protection laws currently require.</p>`,
      prompt: `<p>Which finding, if true, would most directly support the hypothesis presented in the text?</p>`,
      options: [{ id: `A`, text: `In comparable environments, <em>D. magna</em> and <em>O. tshawytscha</em> display comparable rates of TiO<sub>2</sub>-NP uptake.` }, { id: `B`, text: `Compared with <em>O. tshawytscha</em>, <em>D. magna</em> can tolerate significantly higher TiO<sub>2</sub>-NP concentrations without displaying any negative effects.` }, { id: `C`, text: `It is easier to detect low and harmless concentrations of TiO<sub>2</sub>-NPs in <em>D. magna</em> than it is to detect high and harmful concentrations of TiO<sub>2</sub>-NPs in <em>O. tshawytscha</em>.` }, { id: `D`, text: `TiO<sub>2</sub>-NP concentrations in <em>D. magna</em> tend to vary more from individual to individual than do TiO<sub>2</sub>-NP concentrations in <em>O. tshawytscha</em> when the species are exposed to similar levels of TiO<sub>2</sub>-NPs.` }],
      answer: `A` },

    { id: `j6ie-rw-m2-13`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Neurobiologists Laura Cuaya, Ra&uacute;l Hern&aacute;ndez-P&eacute;rez, and colleagues investigated the language detection abilities of eighteen dogs of various ages. The researchers monitored the brain activity of Maverick (a 117-month-old border collie), Mini (a 126-month-old mixed breed), and other dogs while the animals listened to three recordings: one of <em>The Little Prince</em> being read in Spanish, the second in Hungarian, and a third made up of short, randomly selected fragments of the first two, scrambled so that they didn&rsquo;t resemble human speech. Each of the dogs was familiar with either Spanish or Hungarian, but not both. The team concluded that the younger the dog, the worse it may be at differentiating between familiar and unfamiliar languages.</p>`,
      prompt: `<p>Which finding from the study, if true, would most directly support the team&rsquo;s conclusion?</p>`,
      options: [{ id: `A`, text: `As the age of the dog scanned decreased, so did the amount of brain activity in response to hearing the language the dog was accustomed to or the other language, but not in response to hearing the scrambled recording.` }, { id: `B`, text: `The similarity between the pattern of brain activity a dog showed in response to hearing the scrambled recording and the pattern it showed in response to hearing the language it was not accustomed to was lowest among younger dogs.` }, { id: `C`, text: `Dogs showed a different pattern of brain activity when hearing the language they were accustomed to than when hearing the other language, and the difference in brain activity decreased as the age of the dog scanned decreased.` }, { id: `D`, text: `Although the dogs&rsquo; general hearing sensitivity declined with age, dogs of all ages showed more brain activity in response to hearing the language they were accustomed to than in response to hearing the other language.` }],
      answer: `C` },

    { id: `j6ie-rw-m2-14`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `<p><em>Poems of Experience</em> is a 1910 collection of poetry by Ella Wheeler Wilcox. In one of her poems, the speaker indicates that several beneficial opportunities have recently become available to women, saying, _____</p>`,
      prompt: `<p>Which quotation from <em>Poems of Experience</em> most effectively illustrates the claim?</p>`,
      options: [{ id: `A`, text: `&ldquo;Delicate creature of light and shade, / [Woman] gleamed like an opal, on wide worlds under.&rdquo; (from &ldquo;Woman&rdquo;)` }, { id: `B`, text: `&ldquo;We must use the joys of earth, / All its cares we&rsquo;ll keep; / Night was made for youth and mirth, / Day was made for sleep.&rdquo; (from &ldquo;The Voices of the City&rdquo;)` }, { id: `C`, text: `&ldquo;For worlds to conquer [woman] had not yearned, / Till [man] spoke of her feminine sphere as &lsquo;narrow.&rsquo;&rdquo; (from &ldquo;Woman&rdquo;)` }, { id: `D`, text: `&ldquo;Trade and science and craft and art, / Have opened their doors to the call of woman; / And greater she grows in her greater part, / More tenderly wise, and more sweetly human.&rdquo; (from &ldquo;Woman&rdquo;)` }],
      answer: `D` },

    { id: `j6ie-rw-m2-15`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Quasars&mdash;such as the Markarian 231 quasar, located in Ursa Major&mdash;are extremely luminous galactic nuclei powered by supermassive black holes. Quasars range in age, with approximately 200 of them known to have developed within the first billion years of the formation of the universe. Cosmologists have long wondered how any quasars could have formed so early in the universe&rsquo;s evolution given that conditions are believed to have been ill-suited to their creation, which suggests that _____</p>`,
      prompt: `<p>Which choice most logically completes the text?</p>`,
      options: [{ id: `A`, text: `the Markarian 231 quasar is likely less massive than quasars that formed more than a billion years after the beginnings of the universe.` }, { id: `B`, text: `quasars that formed in the early universe are likely not as luminous as those that formed later.` }, { id: `C`, text: `the Markarian 231 quasar is thought to have formed less than a billion years after the beginnings of the universe.` }, { id: `D`, text: `some aspect of the scientific understanding of quasar formation or the early universe may be incomplete.` }],
      answer: `D` },

    { id: `j6ie-rw-m2-16`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `<p>To combat predation by the big brown bat and other insectivorous bats, many moth species, including <em>Xylophanes tersa</em>, emit ultrasonic pulses that, in some cases, disrupt the echolocation bats rely on for foraging. Some scientists have hypothesized that this capability evolved because it imposes a lower metabolic cost than does the alternative mechanism of producing chemicals that render moths noxious to bats. Pablo Sebasti&aacute;n Padr&oacute;n et al. investigated the acoustic properties of moths&rsquo; ultrasonic responses to audio of bat echolocation and then assessed the palatability of the ultrasound-producing moths. They found that several moth genera that emit ultrasonic pulses capable of disrupting bat echolocation are unpalatable to bats, suggesting that _____</p>`,
      prompt: `<p>Which choice most logically completes the text?</p>`,
      options: [{ id: `A`, text: `further investigations into moths&rsquo; ability to protect themselves by disrupting bat echolocation will likely find that moth genera relying on this mechanism are also generally inedible to bats.` }, { id: `B`, text: `most genera of moths that produce ultrasound capable of disrupting bat echolocation do so primarily for purposes other than evading capture by the big brown bat and other predators.` }, { id: `C`, text: `the hypothesis about the development of this ultrasonic defense likely does not account for all instances of the trait in moths.` }, { id: `D`, text: `although previous findings about <em>Xylophanes tersa</em> are consistent with the hypothesis about the low metabolic cost of producing noxious chemicals, the ability to disrupt bat echolocation and unpalatability are not mutually exclusive traits.` }],
      answer: `C` },

    { id: `j6ie-rw-m2-17`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Researchers Tammy Kernodle and Christina Zanfagna have lent their expertise on Black history and music to an important new _____ Timeline of African American Music, a digital resource that traces the development of individual musical genres (such as swing and bebop) while also revealing the connections between them.</p>`,
      prompt: `<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>`,
      options: [{ id: `A`, text: `initiative the` }, { id: `B`, text: `initiative; the` }, { id: `C`, text: `initiative: the` }, { id: `D`, text: `initiative. The` }],
      answer: `C` },

    { id: `j6ie-rw-m2-18`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `hard`, type: `mcq`,
      passage: `<p>The Austronesian language family includes Samoan, Palauan, and some 1,200 other languages throughout the Pacific, making it one of the largest language families in the world and of keen interest to _____ of UC Santa Cruz.</p>`,
      prompt: `<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>`,
      options: [{ id: `A`, text: `linguist, Sandra Chung` }, { id: `B`, text: `linguist: Sandra Chung` }, { id: `C`, text: `linguist, Sandra Chung,` }, { id: `D`, text: `linguist Sandra Chung` }],
      answer: `D` },

    { id: `j6ie-rw-m2-19`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Located on the Emscher River in Germany, the city of Dortmund was a member of a powerful mercantile alliance that dominated northern European trade between the 13th and 17th _____ Hanseatic League, a loose confederation of cities from eleven modern-day countries that has been described as a precursor to today&rsquo;s European Union.</p>`,
      prompt: `<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>`,
      options: [{ id: `A`, text: `centuries: the` }, { id: `B`, text: `centuries; the` }, { id: `C`, text: `centuries the` }, { id: `D`, text: `centuries. The` }],
      answer: `A` },

    { id: `j6ie-rw-m2-20`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Nicholas Galanin is known for using video and photography to explore questions of authenticity in the identification and presentation of Native art. The acclaimed Tlingit/Aleut artist was awarded a 2013 fellowship by the Eiteljorg Museum, whose extensive collection of artworks by Indigenous peoples of the Americas and other artists of the American West _____ among the best in the world.</p>`,
      prompt: `<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>`,
      options: [{ id: `A`, text: `have been ranked` }, { id: `B`, text: `rank` }, { id: `C`, text: `are ranked` }, { id: `D`, text: `ranks` }],
      answer: `D` },

    { id: `j6ie-rw-m2-21`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Many of the world&rsquo;s most famous animals have lived in the Greater Kruger National Park in South Africa. Between 2010 and 2012, for instance, the _____ prowled the park as part of the dominant Matimba coalition (band of male lions).</p>`,
      prompt: `<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>`,
      options: [{ id: `A`, text: `lions Slitnose and Ginger,` }, { id: `B`, text: `lions Slitnose and Ginger` }, { id: `C`, text: `lions, Slitnose and Ginger,` }, { id: `D`, text: `lions, Slitnose and Ginger` }],
      answer: `B` },

    { id: `j6ie-rw-m2-22`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Star actress Kiki Omeili, who has appeared in 47 Nollywood films, is one of numerous luminaries to be pictured in Nigerian portraitist Ik&eacute; Ud&eacute;&rsquo;s exhibition <em>Nollywood Portraits</em>. _____ referred to Nollywood&mdash;Nigeria&rsquo;s $3 billion film industry&mdash;as &ldquo;Africa&rsquo;s vivid mirror par excellence,&rdquo; honors its legacy with his vivid classical portraits of Omeili and her peers.</p>`,
      prompt: `<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>`,
      options: [{ id: `A`, text: `Ud&eacute; has` }, { id: `B`, text: `Ud&eacute;, having` }, { id: `C`, text: `Ud&eacute;, has` }, { id: `D`, text: `Ud&eacute;` }],
      answer: `B` },

    { id: `j6ie-rw-m2-23`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Newer offshore wind turbines often outperform older models. For example, Denmark&rsquo;s offshore wind farm, built in 1991, had wind turbines that generated about 0.5 megawatts (MW) of electricity each. _____ Denmark&rsquo;s Kriegers Flak offshore wind farm, built in 2021, has turbines that can generate about 8 MW of electricity each.</p>`,
      prompt: `<p>Which choice completes the text with the most logical transition?</p>`,
      options: [{ id: `A`, text: `In contrast,` }, { id: `B`, text: `Granted,` }, { id: `C`, text: `Eventually,` }, { id: `D`, text: `For this reason,` }],
      answer: `A` },

    { id: `j6ie-rw-m2-24`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `hard`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>Horridus is the nickname of a dinosaur fossil specimen from the Late Cretaceous period.</li><li>The Late Cretaceous period ended more than 65 million years ago.</li><li>Horridus is a member of the genus <em>Triceratops</em>.</li><li>Horridus is on display at the Melbourne Museum.</li><li>The Melbourne Museum is in Melbourne, Australia.</li></ul>`,
      prompt: `<p>The student wants to specify Horridus&rsquo;s location. Which choice most effectively uses relevant information from the notes to accomplish this goal?</p>`,
      options: [{ id: `A`, text: `Melbourne, Australia, is home to the Melbourne Museum, which displays a dinosaur fossil specimen from the Late Cretaceous period.` }, { id: `B`, text: `Horridus lived in the Late Cretaceous period, which ended more than 65 million years ago.` }, { id: `C`, text: `Horridus is on display at the Melbourne Museum in Melbourne, Australia.` }, { id: `D`, text: `Horridus is the nickname of a dinosaur fossil specimen belonging to the genus <em>Triceratops</em>.` }],
      answer: `C` },

    { id: `j6ie-rw-m2-25`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>Artist Pablo Picasso of Spain won a Carnegie Prize gold medal in 1930.</li><li>The Carnegie Prize is an international art competition.</li><li>It is administered by the Carnegie Museum of Art in Pittsburgh, Pennsylvania.</li><li>Picasso&rsquo;s winning artwork was a painting entitled <em>Portrait of Mme. Picasso</em>.</li></ul>`,
      prompt: `<p>The student wants to identify the painting for which Picasso won a Carnegie Prize gold medal. Which choice most effectively uses relevant information from the notes to accomplish this goal?</p>`,
      options: [{ id: `A`, text: `Picasso won a Carnegie Prize gold medal for the painting <em>Portrait of Mme. Picasso</em>.` }, { id: `B`, text: `The Carnegie Museum of Art awarded Picasso a gold medal in 1930.` }, { id: `C`, text: `The Carnegie Prize is an international art competition administered by the Carnegie Museum of Art in Pittsburgh, Pennsylvania.` }, { id: `D`, text: `In 1930, an artist from Spain won a Carnegie Prize gold medal for a painting.` }],
      answer: `A` },

    { id: `j6ie-rw-m2-26`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `hard`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>Merle Oberon (1911&ndash;1979) was an actress born in Mumbai (then known as Bombay), India.</li><li>She was of Indian, Maori, and Irish heritage.</li><li>She was the first Indian-born actress to be nominated for an Academy Award.</li><li>Early in her career, she played many nameless, uncredited roles, such as her role in <em>Service for Ladies</em> (1932).</li><li>Later, she played many named, credited roles, such as Margaret Faulson in <em>All Is Possible in Granada</em> (1954).</li></ul>`,
      prompt: `<p>Which choice most effectively uses information from the given sentences to begin a narrative about Merle Oberon&rsquo;s life?</p>`,
      options: [{ id: `A`, text: `Merle Oberon&rsquo;s story begins in Mumbai (then known as Bombay), India, in 1911.` }, { id: `B`, text: `Merle Oberon appeared in many films, including <em>Service for Ladies</em> (1932) and <em>All Is Possible in Granada</em> (1954), and was the first Indian-born actress to be nominated for an Academy Award.` }, { id: `C`, text: `In 1954, Merle Oberon played the role of Margaret Faulson in the film <em>All Is Possible in Granada</em>.` }, { id: `D`, text: `Though she would go on to receive credit in many films, Merle Oberon also played nameless, uncredited roles in many films, such as in the movie <em>Service for Ladies</em> (1932).` }],
      answer: `A` },

    { id: `j6ie-rw-m2-27`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `hard`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>Louis Ballard was a classical composer and citizen of the Quapaw Tribe.</li><li>He sought to synthesize Western classical music with elements of various Native musical traditions.</li><li>Ballard&rsquo;s composition <em>Incident at Wounded Knee</em> incorporates a Pueblo log drum, a traditional Native instrument.</li><li>Ethnomusicologist Tara Browner writes that Ballard&rsquo;s classical music &ldquo;relies on Indigenous instruments, rhythms, forms,...and other musical elements.&rdquo;</li></ul>`,
      prompt: `<p>The student wants to connect the quotation from Browner to a specific composition. Which choice most effectively uses relevant information from the notes to accomplish this goal?</p>`,
      options: [{ id: `A`, text: `Browner notes that Ballard&rsquo;s music &ldquo;relies on Indigenous instruments, rhythms, forms,...and other musical elements,&rdquo; further indicating that it synthesizes Western classical music with elements of various Native music traditions.` }, { id: `B`, text: `Consistent with Browner&rsquo;s observation that Ballard&rsquo;s music &ldquo;relies on Indigenous instruments, rhythms, forms,...and other musical elements,&rdquo; <em>Incident at Wounded Knee</em> incorporates a Pueblo log drum.` }, { id: `C`, text: `Browner&rsquo;s writing discusses Ballard, the classical music composer responsible for <em>Incident at Wounded Knee</em>.` }, { id: `D`, text: `Discussing Ballard&rsquo;s body of works, Browner observes that it relies on elements of various Native musical traditions.` }],
      answer: `B` },
  ];

  const MATH_M1 = [
    { id: `j6ie-math-m1-1`, domain: `Geometry and Trigonometry`, skill: `Lines, angles, and triangles`, difficulty: `medium`, type: `grid`,
      prompt: `<div style='text-align:center'><svg viewBox='0 0 320 250' xmlns='http://www.w3.org/2000/svg' style='max-width:340px;font-family:Georgia,serif'><line x1='60' y1='100' x2='285' y2='100' stroke='#000' stroke-width='1.3'/><line x1='60' y1='180' x2='285' y2='180' stroke='#000' stroke-width='1.3'/><line x1='110' y1='232' x2='245' y2='45' stroke='#000' stroke-width='1.3'/><text x='247' y='42' font-size='14' font-style='italic'>n</text><text x='292' y='104' font-size='14' font-style='italic'>r</text><text x='292' y='184' font-size='14' font-style='italic'>s</text><text x='160' y='92' font-size='13'>138&deg;</text><text x='120' y='172' font-size='13'><tspan font-style='italic'>x</tspan>&deg;</text></svg><p style='font-size:12px'>Note: Figure not drawn to scale.</p><p>In the figure, line <em>n</em> intersects lines <em>r</em> and <em>s</em>. Line <em>r</em> is parallel to line <em>s</em>. What is the value of <em>x</em>?</p></div>`,
      answer: [`138`] },

    { id: `j6ie-math-m1-2`, domain: `Algebra`, skill: `Linear inequalities in one or two variables`, difficulty: `easy`, type: `mcq`,
      prompt: `<p>During a portion of a flight, a small airplane&rsquo;s cruising speed varied between 125 miles per hour and 135 miles per hour. Which inequality best represents this situation, where <em>s</em> is the cruising speed, in miles per hour, during this portion of the flight?</p>`,
      options: [{ id: `A`, text: `<em>s</em> &le; 10` }, { id: `B`, text: `<em>s</em> &le; 125` }, { id: `C`, text: `<em>s</em> &le; 135` }, { id: `D`, text: `125 &le; <em>s</em> &le; 135` }],
      answer: `D` },

    { id: `j6ie-math-m1-3`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `easy`, type: `mcq`,
      prompt: `<p>If 5<em>x</em> = 4, what is the value of 40<em>x</em>?</p>`,
      options: [{ id: `A`, text: `4` }, { id: `B`, text: `12` }, { id: `C`, text: `28` }, { id: `D`, text: `32` }],
      answer: `D` },

    { id: `j6ie-math-m1-4`, domain: `Advanced Math`, skill: `Equivalent expressions`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>Which expression is equivalent to (<em>x</em><sup>3</sup> + 4<em>x</em><sup>2</sup> &minus; 3<em>x</em>) + 5(<em>x</em><sup>2</sup> + 8)?</p>`,
      options: [{ id: `A`, text: `<em>x</em><sup>3</sup> + 9<em>x</em><sup>2</sup> &minus; 3<em>x</em> + 40` }, { id: `B`, text: `<em>x</em><sup>3</sup> + 4<em>x</em><sup>2</sup> &minus; 3<em>x</em> + 40` }, { id: `C`, text: `<em>x</em><sup>3</sup> + 8<em>x</em><sup>2</sup> &minus; 3<em>x</em> + 40` }, { id: `D`, text: `<em>x</em><sup>3</sup> + 5<em>x</em><sup>2</sup> &minus; 3<em>x</em> + 40` }],
      answer: `A` },

    { id: `j6ie-math-m1-5`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `easy`, type: `grid`,
      prompt: `<p>The function <em>f</em> is defined by <em>f</em>(<em>x</em>) = <em>x</em><sup>3</sup> + 14. What is the value of <em>f</em>(2)?</p>`,
      answer: [`22`] },

    { id: `j6ie-math-m1-6`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `easy`, type: `grid`,
      prompt: `<p>The function <em>g</em> is defined by <em>g</em>(<em>x</em>) = <sup><em>x</em></sup>&frasl;<sub>2</sub>. For what value of <em>x</em> does <em>g</em>(<em>x</em>) = 624?</p>`,
      answer: [`1248`] },

    { id: `j6ie-math-m1-7`, domain: `Problem-Solving and Data Analysis`, skill: `Two-variable data: models and scatterplots`, difficulty: `medium`, type: `mcq`,
      prompt: `<div style='text-align:center'><p style='text-align:left'>The scatterplot shows the relationship between two variables, <em>x</em> and <em>y</em>.</p><svg viewBox='0 0 360 345' xmlns='http://www.w3.org/2000/svg' style='max-width:330px;font-family:Georgia,serif'><line x1='75' y1='60' x2='75' y2='310' stroke='#d0d0d0'/><line x1='100' y1='60' x2='100' y2='310' stroke='#d0d0d0'/><line x1='125' y1='60' x2='125' y2='310' stroke='#d0d0d0'/><line x1='150' y1='60' x2='150' y2='310' stroke='#d0d0d0'/><line x1='175' y1='60' x2='175' y2='310' stroke='#d0d0d0'/><line x1='200' y1='60' x2='200' y2='310' stroke='#d0d0d0'/><line x1='225' y1='60' x2='225' y2='310' stroke='#d0d0d0'/><line x1='250' y1='60' x2='250' y2='310' stroke='#d0d0d0'/><line x1='275' y1='60' x2='275' y2='310' stroke='#d0d0d0'/><line x1='300' y1='60' x2='300' y2='310' stroke='#d0d0d0'/><line x1='50' y1='285' x2='300' y2='285' stroke='#d0d0d0'/><line x1='50' y1='260' x2='300' y2='260' stroke='#d0d0d0'/><line x1='50' y1='235' x2='300' y2='235' stroke='#d0d0d0'/><line x1='50' y1='210' x2='300' y2='210' stroke='#d0d0d0'/><line x1='50' y1='185' x2='300' y2='185' stroke='#d0d0d0'/><line x1='50' y1='160' x2='300' y2='160' stroke='#d0d0d0'/><line x1='50' y1='135' x2='300' y2='135' stroke='#d0d0d0'/><line x1='50' y1='110' x2='300' y2='110' stroke='#d0d0d0'/><line x1='50' y1='85' x2='300' y2='85' stroke='#d0d0d0'/><line x1='50' y1='60' x2='300' y2='60' stroke='#d0d0d0'/><line x1='50' y1='315' x2='50' y2='55' stroke='#000' stroke-width='1.4'/><line x1='45' y1='310' x2='308' y2='310' stroke='#000' stroke-width='1.4'/><polygon points='50,50 47,58 53,58' fill='#000'/><polygon points='313,310 305,307 305,313' fill='#000'/><text x='40' y='323' font-size='12' font-style='italic'>O</text><text x='315' y='314' font-size='13' font-style='italic'>x</text><text x='44' y='50' font-size='13' font-style='italic'>y</text><text x='75' y='325' font-size='11' text-anchor='middle'>1</text><text x='100' y='325' font-size='11' text-anchor='middle'>2</text><text x='125' y='325' font-size='11' text-anchor='middle'>3</text><text x='150' y='325' font-size='11' text-anchor='middle'>4</text><text x='175' y='325' font-size='11' text-anchor='middle'>5</text><text x='200' y='325' font-size='11' text-anchor='middle'>6</text><text x='225' y='325' font-size='11' text-anchor='middle'>7</text><text x='250' y='325' font-size='11' text-anchor='middle'>8</text><text x='275' y='325' font-size='11' text-anchor='middle'>9</text><text x='300' y='325' font-size='11' text-anchor='middle'>10</text><text x='42' y='289' font-size='11' text-anchor='end'>1</text><text x='42' y='264' font-size='11' text-anchor='end'>2</text><text x='42' y='239' font-size='11' text-anchor='end'>3</text><text x='42' y='214' font-size='11' text-anchor='end'>4</text><text x='42' y='189' font-size='11' text-anchor='end'>5</text><text x='42' y='164' font-size='11' text-anchor='end'>6</text><text x='42' y='139' font-size='11' text-anchor='end'>7</text><text x='42' y='114' font-size='11' text-anchor='end'>8</text><text x='42' y='89' font-size='11' text-anchor='end'>9</text><text x='42' y='64' font-size='11' text-anchor='end'>10</text><circle cx='75' cy='60' r='3.4'/><circle cx='100' cy='135' r='3.4'/><circle cx='125' cy='135' r='3.4'/><circle cx='150' cy='185' r='3.4'/><circle cx='175' cy='185' r='3.4'/><circle cx='200' cy='185' r='3.4'/><circle cx='225' cy='210' r='3.4'/><circle cx='250' cy='210' r='3.4'/><circle cx='250' cy='260' r='3.4'/><circle cx='225' cy='285' r='3.4'/></svg><p style='text-align:left'>Which of the following equations is the most appropriate linear model for the data shown?</p></div>`,
      options: [{ id: `A`, text: `<em>y</em> = 0.8 + 8.7<em>x</em>` }, { id: `B`, text: `<em>y</em> = 0.8 &minus; 8.7<em>x</em>` }, { id: `C`, text: `<em>y</em> = 8.7 + 0.8<em>x</em>` }, { id: `D`, text: `<em>y</em> = 8.7 &minus; 0.8<em>x</em>` }],
      answer: `D` },

    { id: `j6ie-math-m1-8`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>The function <em>f</em>(<em>x</em>) = <sup>1</sup>&frasl;<sub>9</sub>(<em>x</em> &minus; 4)<sup>2</sup> + 5 gives a toy car&rsquo;s height above the ground <em>f</em>(<em>x</em>), in inches, <em>x</em> seconds after it started moving on an elevated track, where 0 &le; <em>x</em> &le; 10. Which of the following is the best interpretation of the vertex of the graph of <em>y</em> = <em>f</em>(<em>x</em>) in the <em>xy</em>-plane?</p>`,
      options: [{ id: `A`, text: `The toy car&rsquo;s minimum height was 5 inches above the ground.` }, { id: `B`, text: `The toy car&rsquo;s minimum height was 4 inches above the ground.` }, { id: `C`, text: `The toy car&rsquo;s height was 5 inches above the ground when it started moving.` }, { id: `D`, text: `The toy car&rsquo;s height was 4 inches above the ground when it started moving.` }],
      answer: `A` },

    { id: `j6ie-math-m1-9`, domain: `Algebra`, skill: `Linear equations in two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `<p style='text-align:center'>7<em>x</em> &minus; 5<em>y</em> = &minus;70</p><p>For the given equation, which table gives three values of <em>x</em> and their corresponding values of <em>y</em>?</p>`,
      options: [{ id: `A`, text: `<table style='border-collapse:collapse;margin:2px auto' border='1' cellpadding='5'><tr><td><em>x</em></td><td>0</td><td>5</td><td>10</td></tr><tr><td><em>y</em></td><td>14</td><td>21</td><td>28</td></tr></table>` }, { id: `B`, text: `<table style='border-collapse:collapse;margin:2px auto' border='1' cellpadding='5'><tr><td><em>x</em></td><td>0</td><td>5</td><td>10</td></tr><tr><td><em>y</em></td><td>28</td><td>21</td><td>14</td></tr></table>` }, { id: `C`, text: `<table style='border-collapse:collapse;margin:2px auto' border='1' cellpadding='5'><tr><td><em>x</em></td><td>14</td><td>21</td><td>28</td></tr><tr><td><em>y</em></td><td>0</td><td>5</td><td>10</td></tr></table>` }, { id: `D`, text: `<table style='border-collapse:collapse;margin:2px auto' border='1' cellpadding='5'><tr><td><em>x</em></td><td>14</td><td>21</td><td>28</td></tr><tr><td><em>y</em></td><td>10</td><td>5</td><td>0</td></tr></table>` }],
      answer: `A` },

    { id: `j6ie-math-m1-10`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `easy`, type: `grid`,
      prompt: `<p>A chemist combines water and isopropanol to make a mixture with a volume of 45 milliliters (mL). The volume of isopropanol in the mixture is 10 mL. What is the volume of water, in mL, in the mixture? (Assume that the volume of the mixture is the sum of the volumes of water and isopropanol before they were mixed.)</p>`,
      answer: [`35`] },

    { id: `j6ie-math-m1-11`, domain: `Algebra`, skill: `Systems of two linear equations in two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `<div style='text-align:center'><p><em>y</em> = &minus;<sup>1</sup>&frasl;<sub>7</sub><em>x</em></p><p><em>y</em> = <sup>1</sup>&frasl;<sub>11</sub><em>x</em></p></div><p>The solution to the given system of equations is (<em>x</em>, <em>y</em>). What is the value of <em>x</em>?</p>`,
      options: [{ id: `A`, text: `&minus;7` }, { id: `B`, text: `0` }, { id: `C`, text: `4` }, { id: `D`, text: `11` }],
      answer: `B` },

    { id: `j6ie-math-m1-12`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>A company has a customer loyalty program. In January 2018, there were 1,600 customers enrolled in the loyalty program. For the next 24 months after January 2018, the total number of customers enrolled in the loyalty program each month was 5% greater than the total number enrolled the previous month. Which equation gives the total number of customers, <em>c</em>, enrolled in the company&rsquo;s loyalty program <em>m</em> months after January 2018, where <em>m</em> &le; 24?</p>`,
      options: [{ id: `A`, text: `<em>c</em> = 1,600(0.05)<sup><em>m</em></sup>` }, { id: `B`, text: `<em>c</em> = 1,600(1.05)<sup><em>m</em></sup>` }, { id: `C`, text: `<em>c</em> = 1,600(1.5)<sup><em>m</em></sup>` }, { id: `D`, text: `<em>c</em> = 1,600(5)<sup><em>m</em></sup>` }],
      answer: `B` },

    { id: `j6ie-math-m1-13`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `grid`,
      prompt: `<p>The function <em>f</em>(<em>t</em>) = 10,000(2)<sup><em>t</em>&frasl;850</sup> gives the number of bacteria in a population <em>t</em> minutes after an initial observation. How much time, in minutes, does it take for the number of bacteria in the population to double?</p>`,
      answer: [`850`] },

    { id: `j6ie-math-m1-14`, domain: `Algebra`, skill: `Systems of two linear equations in two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `<div style='text-align:center'><p><em>y</em> = <sup>5</sup>&frasl;<sub>7</sub><em>x</em> + 9</p></div><p>One of two equations in a system of linear equations is given. The system has infinitely many solutions. What is the slope of the graph of the second equation?</p>`,
      options: [{ id: `A`, text: `&minus;<sup>7</sup>&frasl;<sub>5</sub>` }, { id: `B`, text: `&minus;<sup>5</sup>&frasl;<sub>7</sub>` }, { id: `C`, text: `<sup>5</sup>&frasl;<sub>7</sub>` }, { id: `D`, text: `<sup>7</sup>&frasl;<sub>5</sub>` }],
      answer: `C` },

    { id: `j6ie-math-m1-15`, domain: `Advanced Math`, skill: `Nonlinear equations in one variable and systems of equations in two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>If 4<em>x</em><sup>2</sup> &minus; 12<em>x</em> &minus; 24 = 0, what is the value of <em>x</em><sup>2</sup> &minus; 3<em>x</em>?</p>`,
      options: [{ id: `A`, text: `0` }, { id: `B`, text: `3` }, { id: `C`, text: `4` }, { id: `D`, text: `6` }],
      answer: `D` },

    { id: `j6ie-math-m1-16`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `hard`, type: `mcq`,
      prompt: `<p>The function <em>f</em> is defined by <em>f</em>(<em>x</em>) = (<em>x</em> &minus; 5)(<em>x</em> &minus; 8)(<em>x</em> + <em>k</em>), where <em>k</em> is a constant. In the <em>xy</em>-plane, the graph of <em>y</em> = <em>f</em>(<em>x</em>) passes through the point (&minus;2, 0). What is the value of <em>f</em>(0)?</p>`,
      options: [{ id: `A`, text: `&minus;140` }, { id: `B`, text: `&minus;2` }, { id: `C`, text: `11` }, { id: `D`, text: `80` }],
      answer: `D` },

    { id: `j6ie-math-m1-17`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `medium`, type: `grid`,
      prompt: `<p>Raheem bought 9 shirts that were each the same price. He used a coupon for $54 off the entire purchase. The cost for the entire purchase after using the coupon was $108. What was the original price, in dollars, for 1 shirt?</p>`,
      answer: [`18`] },

    { id: `j6ie-math-m1-18`, domain: `Problem-Solving and Data Analysis`, skill: `One-variable data: distributions and measures of center and spread`, difficulty: `easy`, type: `grid`,
      prompt: `<div style='text-align:center'><p>12, 12, 18, 24, 29</p></div><p>What is the median of the data set shown?</p>`,
      answer: [`18`] },

    { id: `j6ie-math-m1-19`, domain: `Geometry and Trigonometry`, skill: `Right triangles and trigonometry`, difficulty: `hard`, type: `mcq`,
      prompt: `<p>In right triangle <em>ABC</em>, angles <em>A</em> and <em>B</em> are acute, side <em>AC</em> has a length of 21.2, and tan <em>B</em> = <sup>1</sup>&frasl;<sub>6</sub>. What is the length of side <em>BC</em>, rounded to the nearest tenth?</p>`,
      options: [{ id: `A`, text: `3.5` }, { id: `B`, text: `4.6` }, { id: `C`, text: `127.2` }, { id: `D`, text: `449.4` }],
      answer: `C` },

    { id: `j6ie-math-m1-20`, domain: `Geometry and Trigonometry`, skill: `Area and volume`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>A rectangular banner has an area of 2,500 square inches. A copy of the banner is made in which the length and width of the original banner are each increased by 40%. What is the area of the copy, in square inches?</p>`,
      options: [{ id: `A`, text: `2,540` }, { id: `B`, text: `2,580` }, { id: `C`, text: `3,500` }, { id: `D`, text: `4,900` }],
      answer: `D` },

    { id: `j6ie-math-m1-21`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<div style='text-align:center'><p><em>f</em>(<em>x</em>) = (<em>x</em> &minus; 4)<sup>2</sup> + 11</p></div><p>What is the minimum value of the given function?</p>`,
      options: [{ id: `A`, text: `4` }, { id: `B`, text: `7` }, { id: `C`, text: `11` }, { id: `D`, text: `15` }],
      answer: `C` },

    { id: `j6ie-math-m1-22`, domain: `Geometry and Trigonometry`, skill: `Circles`, difficulty: `hard`, type: `mcq`,
      prompt: `<p>Point <em>F</em> lies on a unit circle in the <em>xy</em>-plane and has coordinates (1, 0). Point <em>G</em> is the center of the circle and has coordinates (0, 0). Point <em>H</em> also lies on the circle and has coordinates (&minus;1, <em>y</em>), where <em>y</em> is a constant. Which of the following could be the positive measure of angle <em>FGH</em>, in radians?</p>`,
      options: [{ id: `A`, text: `<sup>25&pi;</sup>&frasl;<sub>2</sub>` }, { id: `B`, text: `<sup>27&pi;</sup>&frasl;<sub>2</sub>` }, { id: `C`, text: `22&pi;` }, { id: `D`, text: `23&pi;` }],
      answer: `D` },
  ];

  const MATH_M2 = [
    { id: `j6ie-math-m2-1`, domain: `Algebra`, skill: `Linear functions`, difficulty: `easy`, type: `grid`,
      prompt: `<div style='text-align:center'><p><em>f</em>(<em>x</em>) = 8<em>x</em> + <em>b</em></p></div><p>For the linear function <em>f</em>, <em>b</em> is a constant and <em>f</em>(0) = 11. What is the value of <em>b</em>?</p>`,
      answer: [`11`] },

    { id: `j6ie-math-m2-2`, domain: `Problem-Solving and Data Analysis`, skill: `One-variable data: distributions and measures of center and spread`, difficulty: `medium`, type: `mcq`,
      prompt: `<div style='text-align:center'><p>Data set A: 5, 8, 11, 11, 14, 20</p><p>Data set B: 5, 8, 11, 11, 14, 20, 41</p></div><p>Two data sets are shown. Which statement best compares the medians of the data sets?</p>`,
      options: [{ id: `A`, text: `The median of data set A is greater than the median of data set B.` }, { id: `B`, text: `The median of data set A is less than the median of data set B.` }, { id: `C`, text: `The medians of data sets A and B are equal.` }, { id: `D`, text: `There is not enough information to compare the medians.` }],
      answer: `C` },

    { id: `j6ie-math-m2-3`, domain: `Problem-Solving and Data Analysis`, skill: `Inference from sample statistics and margin of error`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>To estimate the proportion of a population that has a certain characteristic, a random sample was selected from the population. Based on the sample, it is estimated that the proportion of the population that has the characteristic is 0.2, with an associated margin of error of 0.08. Based on this estimate and margin of error, which of the following is the most appropriate conclusion about the proportion of the population that has the characteristic?</p>`,
      options: [{ id: `A`, text: `It is plausible that the proportion is between 0.12 and 0.28.` }, { id: `B`, text: `It is plausible that the proportion is less than 0.12.` }, { id: `C`, text: `The proportion is exactly 0.2.` }, { id: `D`, text: `It is plausible that the proportion is greater than 0.28.` }],
      answer: `A` },

    { id: `j6ie-math-m2-4`, domain: `Algebra`, skill: `Linear inequalities in one or two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `<div style='text-align:center'><svg viewBox='0 0 380 380' xmlns='http://www.w3.org/2000/svg' style='max-width:330px;font-family:Georgia,serif'><polygon points='230,30 350,30 350,270' fill='#c9c9c9' fill-opacity='0.55'/><g stroke='#dddddd' stroke-width='1'><line x1='30' y1='350' x2='30' y2='30'/><line x1='30' y1='350' x2='350' y2='350'/><line x1='50' y1='350' x2='50' y2='30'/><line x1='30' y1='330' x2='350' y2='330'/><line x1='70' y1='350' x2='70' y2='30'/><line x1='30' y1='310' x2='350' y2='310'/><line x1='90' y1='350' x2='90' y2='30'/><line x1='30' y1='290' x2='350' y2='290'/><line x1='110' y1='350' x2='110' y2='30'/><line x1='30' y1='270' x2='350' y2='270'/><line x1='130' y1='350' x2='130' y2='30'/><line x1='30' y1='250' x2='350' y2='250'/><line x1='150' y1='350' x2='150' y2='30'/><line x1='30' y1='230' x2='350' y2='230'/><line x1='170' y1='350' x2='170' y2='30'/><line x1='30' y1='210' x2='350' y2='210'/><line x1='190' y1='350' x2='190' y2='30'/><line x1='30' y1='190' x2='350' y2='190'/><line x1='210' y1='350' x2='210' y2='30'/><line x1='30' y1='170' x2='350' y2='170'/><line x1='230' y1='350' x2='230' y2='30'/><line x1='30' y1='150' x2='350' y2='150'/><line x1='250' y1='350' x2='250' y2='30'/><line x1='30' y1='130' x2='350' y2='130'/><line x1='270' y1='350' x2='270' y2='30'/><line x1='30' y1='110' x2='350' y2='110'/><line x1='290' y1='350' x2='290' y2='30'/><line x1='30' y1='90' x2='350' y2='90'/><line x1='310' y1='350' x2='310' y2='30'/><line x1='30' y1='70' x2='350' y2='70'/><line x1='330' y1='350' x2='330' y2='30'/><line x1='30' y1='50' x2='350' y2='50'/><line x1='350' y1='350' x2='350' y2='30'/><line x1='30' y1='30' x2='350' y2='30'/></g><line x1='30' y1='190' x2='350' y2='190' stroke='#000' stroke-width='1.4'/><line x1='190' y1='30' x2='190' y2='350' stroke='#000' stroke-width='1.4'/><g font-size='9' fill='#000'><text x='30' y='202' text-anchor='middle'>&minus;8</text><text x='186' y='353' text-anchor='end'>&minus;8</text><text x='70' y='202' text-anchor='middle'>&minus;6</text><text x='186' y='313' text-anchor='end'>&minus;6</text><text x='110' y='202' text-anchor='middle'>&minus;4</text><text x='186' y='273' text-anchor='end'>&minus;4</text><text x='150' y='202' text-anchor='middle'>&minus;2</text><text x='186' y='233' text-anchor='end'>&minus;2</text><text x='230' y='202' text-anchor='middle'>2</text><text x='186' y='153' text-anchor='end'>2</text><text x='270' y='202' text-anchor='middle'>4</text><text x='186' y='113' text-anchor='end'>4</text><text x='310' y='202' text-anchor='middle'>6</text><text x='186' y='73' text-anchor='end'>6</text><text x='350' y='202' text-anchor='middle'>8</text><text x='186' y='33' text-anchor='end'>8</text><text x='356' y='194' font-style='italic'>x</text><text x='195' y='26' font-style='italic'>y</text><text x='178' y='203'>O</text></g><line x1='230' y1='30' x2='350' y2='270' stroke='#111' stroke-width='2'/></svg></div><p>The shaded region shown represents solutions to an inequality. Which ordered pair (<em>x</em>, <em>y</em>) is a solution to this inequality?</p>`,
      options: [{ id: `A`, text: `(&minus;8, 0)` }, { id: `B`, text: `(0, 8)` }, { id: `C`, text: `(0, &minus;8)` }, { id: `D`, text: `(8, 0)` }],
      answer: `D` },

    { id: `j6ie-math-m2-5`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<div style='text-align:center'><table style='border-collapse:collapse;margin:2px auto' border='1' cellpadding='6'><tr><td><em>x</em></td><td><em>f</em>(<em>x</em>)</td></tr><tr><td>&minus;1</td><td>4</td></tr><tr><td>0</td><td>12</td></tr><tr><td>1</td><td>22</td></tr></table></div><p>For the quadratic function <em>f</em>, the table shows three values of <em>x</em> and their corresponding values of <em>f</em>(<em>x</em>). Which equation defines <em>f</em>?</p>`,
      options: [{ id: `A`, text: `<em>f</em>(<em>x</em>) = 5<em>x</em><sup>2</sup> + 5<em>x</em> + 12` }, { id: `B`, text: `<em>f</em>(<em>x</em>) = 9<em>x</em><sup>2</sup> + <em>x</em> + 12` }, { id: `C`, text: `<em>f</em>(<em>x</em>) = 9<em>x</em><sup>2</sup> &minus; <em>x</em> + 12` }, { id: `D`, text: `<em>f</em>(<em>x</em>) = <em>x</em><sup>2</sup> + 9<em>x</em> + 12` }],
      answer: `D` },

    { id: `j6ie-math-m2-6`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `hard`, type: `mcq`,
      prompt: `<div style='text-align:center'><svg viewBox='0 0 380 370' xmlns='http://www.w3.org/2000/svg' style='max-width:320px;font-family:Georgia,serif'><g stroke='#dddddd' stroke-width='1'><line x1='115' y1='340' x2='115' y2='40'/><line x1='175' y1='340' x2='175' y2='40'/><line x1='235' y1='340' x2='235' y2='40'/><line x1='295' y1='340' x2='295' y2='40'/><line x1='355' y1='340' x2='355' y2='40'/><line x1='55' y1='290' x2='355' y2='290'/><line x1='55' y1='240' x2='355' y2='240'/><line x1='55' y1='190' x2='355' y2='190'/><line x1='55' y1='140' x2='355' y2='140'/><line x1='55' y1='90' x2='355' y2='90'/><line x1='55' y1='40' x2='355' y2='40'/></g><line x1='55' y1='340' x2='355' y2='340' stroke='#000' stroke-width='1.4'/><line x1='55' y1='340' x2='55' y2='40' stroke='#000' stroke-width='1.4'/><polyline points='55.0,215.0 61.0,209.4 67.0,203.6 73.0,197.5 79.0,191.1 85.0,184.4 91.0,177.5 97.0,170.2 103.0,162.6 109.0,154.6 115.0,146.4 121.0,137.7 127.0,128.6 133.0,119.2 139.0,109.3 145.0,99.0 151.0,88.2 157.0,76.9 163.0,65.1 169.0,52.8 175.0,40.0' fill='none' stroke='#111' stroke-width='2'/><g font-size='9' fill='#000'><text x='115' y='353' text-anchor='middle'>1</text><text x='175' y='353' text-anchor='middle'>2</text><text x='235' y='353' text-anchor='middle'>3</text><text x='295' y='353' text-anchor='middle'>4</text><text x='355' y='353' text-anchor='middle'>5</text><text x='50' y='293' text-anchor='end'>2</text><text x='50' y='243' text-anchor='end'>4</text><text x='50' y='193' text-anchor='end'>6</text><text x='50' y='143' text-anchor='end'>8</text><text x='50' y='93' text-anchor='end'>10</text><text x='50' y='43' text-anchor='end'>12</text><text x='361' y='344' font-style='italic'>x</text><text x='51' y='34' font-style='italic'>y</text><text x='42' y='353'>O</text></g></svg></div><p>The graph gives the estimated population <em>y</em>, in thousands, of a town <em>x</em> years since 2007, where 0 &le; <em>x</em> &le; 5. Which of the following best describes the increase in the estimated population from <em>x</em> = 0 to <em>x</em> = 1?</p>`,
      options: [{ id: `A`, text: `The estimated population at <em>x</em> = 1 is 3.5 times the estimated population at <em>x</em> = 0.` }, { id: `B`, text: `The estimated population at <em>x</em> = 1 is 2.5 times the estimated population at <em>x</em> = 0.` }, { id: `C`, text: `The estimated population at <em>x</em> = 1 is 1.5 times the estimated population at <em>x</em> = 0.` }, { id: `D`, text: `The estimated population at <em>x</em> = 1 is 0.5 times the estimated population at <em>x</em> = 0.` }],
      answer: `C` },

    { id: `j6ie-math-m2-7`, domain: `Algebra`, skill: `Linear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<div style='text-align:center'><p><em>T</em>(<em>x</em>) = 62 &minus; 8<em>x</em></p></div><p>The function <em>T</em> estimates the temperature, in degrees Fahrenheit (&deg;F), in a certain city one day in January, where <em>x</em> is the number of hours after 10 a.m. and 1 &le; <em>x</em> &le; 5. According to the function, what was the estimated decrease in temperature each hour, in &deg;F, in this city during this time period?</p>`,
      options: [{ id: `A`, text: `4` }, { id: `B`, text: `8` }, { id: `C`, text: `54` }, { id: `D`, text: `62` }],
      answer: `B` },

    { id: `j6ie-math-m2-8`, domain: `Geometry and Trigonometry`, skill: `Right triangles and trigonometry`, difficulty: `medium`, type: `mcq`,
      prompt: `<div style='text-align:center'><svg viewBox='0 0 300 230' xmlns='http://www.w3.org/2000/svg' style='max-width:280px;font-family:Georgia,serif'><polygon points='60,180 250,180 60,40' fill='none' stroke='#111' stroke-width='2'/><polyline points='60,162 78,162 78,180' fill='none' stroke='#111' stroke-width='1.2'/><text x='44' y='115' font-size='15' font-style='italic'>x</text><text x='150' y='202' font-size='15'>66</text><text x='214' y='172' font-size='12'>30&deg;</text></svg><p style='font-size:12px'>Note: Figure not drawn to scale.</p></div><p>In the triangle shown, what is the value of <em>x</em>?</p>`,
      options: [{ id: `A`, text: `22` }, { id: `B`, text: `22&radic;3` }, { id: `C`, text: `66&radic;3` }, { id: `D`, text: `132` }],
      answer: `B` },

    { id: `j6ie-math-m2-9`, domain: `Problem-Solving and Data Analysis`, skill: `Ratios, rates, proportional relationships, and units`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>There is a proportional relationship between <em>p</em> and <em>t</em>. If <em>p</em> = 2,340 when <em>t</em> = 3,120, then what is the value of <em>p</em> when <em>t</em> = 2,496?</p>`,
      options: [{ id: `A`, text: `1,716` }, { id: `B`, text: `1,872` }, { id: `C`, text: `3,276` }, { id: `D`, text: `3,328` }],
      answer: `B` },

    { id: `j6ie-math-m2-10`, domain: `Geometry and Trigonometry`, skill: `Area and volume`, difficulty: `medium`, type: `grid`,
      prompt: `<p>A cube has a volume of 79,507 cubic units. What is the surface area, in square units, of the cube?</p>`,
      answer: [`11094`] },

    { id: `j6ie-math-m2-11`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `hard`, type: `mcq`,
      prompt: `<div style='text-align:center'><p><sup>8(<em>cx</em> + 3)</sup>&frasl;<sub>5</sub> = 4<em>x</em> &minus; 3</p></div><p>In the given equation, <em>c</em> is a constant. If the equation has no solution, what is the value of <em>c</em>?</p>`,
      options: [{ id: `A`, text: `&minus;<sup>5</sup>&frasl;<sub>2</sub>` }, { id: `B`, text: `&minus;<sup>2</sup>&frasl;<sub>5</sub>` }, { id: `C`, text: `<sup>2</sup>&frasl;<sub>5</sub>` }, { id: `D`, text: `<sup>5</sup>&frasl;<sub>2</sub>` }],
      answer: `D` },

    { id: `j6ie-math-m2-12`, domain: `Algebra`, skill: `Linear functions`, difficulty: `hard`, type: `mcq`,
      prompt: `<p>The function <em>f</em>(<em>x</em>) is defined as 17 more than 3 times a number <em>x</em>. If <em>y</em> = <em>f</em>(<em>x</em>) is graphed in the <em>xy</em>-plane, what is the best interpretation of the <em>x</em>-intercept?</p>`,
      options: [{ id: `A`, text: `When <em>f</em>(<em>x</em>) = 0, the number is &minus;<sup>17</sup>&frasl;<sub>3</sub>.` }, { id: `B`, text: `When the number is 0, <em>f</em>(<em>x</em>) = 17.` }, { id: `C`, text: `For each increase of 1 in the value of the number, <em>f</em>(<em>x</em>) increases by 3.` }, { id: `D`, text: `The value of <em>f</em>(<em>x</em>) increases by 1 for each increase of 3 in the value of the number.` }],
      answer: `A` },

    { id: `j6ie-math-m2-13`, domain: `Advanced Math`, skill: `Equivalent expressions`, difficulty: `hard`, type: `mcq`,
      prompt: `<div style='text-align:center'><p><sup>2</sup>&frasl;<sub><em>c</em></sub> &minus; <sup>7</sup>&frasl;<sub><em>d</em></sub> = 5</p></div><p>The given equation relates the variables <em>c</em> and <em>d</em>, where <em>c</em> and <em>d</em> are greater than 1. Which equation correctly expresses <em>d</em> in terms of <em>c</em>?</p>`,
      options: [{ id: `A`, text: `<em>d</em> = <sup><em>c</em></sup>&frasl;<sub>7(2 &minus; 5<em>c</em>)</sub>` }, { id: `B`, text: `<em>d</em> = <sup>7<em>c</em></sup>&frasl;<sub>(2 &minus; 5<em>c</em>)</sub>` }, { id: `C`, text: `<em>d</em> = <sup>7(2 &minus; 5<em>c</em>)</sup>&frasl;<sub><em>c</em></sub>` }, { id: `D`, text: `<em>d</em> = <sup>(2 &minus; 5<em>c</em>)</sup>&frasl;<sub>7<em>c</em></sub>` }],
      answer: `B` },

    { id: `j6ie-math-m2-14`, domain: `Algebra`, skill: `Systems of two linear equations in two variables`, difficulty: `hard`, type: `grid`,
      prompt: `<p>A proposal for a construction project was included on a city election ballot. A TV news report stated that 8 times as many people voted in favor of the proposal as people who voted against it. An internet article reported that 24,500 more people voted in favor of the proposal than voted against it. Based on these data, how many people voted against the proposal?</p>`,
      answer: [`3500`] },

    { id: `j6ie-math-m2-15`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>The function <em>f</em> is defined by <em>f</em>(<em>x</em>) = 4<em>x</em><sup>2</sup>. What is the value of <em>f</em>(11)?</p>`,
      options: [{ id: `A`, text: `44` }, { id: `B`, text: `52` }, { id: `C`, text: `88` }, { id: `D`, text: `484` }],
      answer: `D` },

    { id: `j6ie-math-m2-16`, domain: `Advanced Math`, skill: `Equivalent expressions`, difficulty: `hard`, type: `grid`,
      prompt: `<div style='text-align:center'><p><sup>5</sup>&radic;<span style='border-top:1px solid #000;padding:0 2px'><em>p</em><sup>2</sup></span> = <em>t</em><sup>3&frasl;4</sup></p></div><p>In the given equation, <em>p</em> &gt; 1 and <em>t</em> &gt; 1. If <em>t</em> = <em>p</em><sup>2<em>n</em>&minus;1</sup>, where <em>n</em> is a constant, what is the value of <em>n</em>?</p>`,
      answer: [`23/30`, `.7666`, `.7667`] },

    { id: `j6ie-math-m2-17`, domain: `Advanced Math`, skill: `Nonlinear equations in one variable and systems of equations in two variables`, difficulty: `hard`, type: `mcq`,
      prompt: `<p>The equation 4|<em>x</em> &minus; 3| = <em>k</em>, where <em>k</em> is a constant, has exactly one solution. Which of the following could be the value of <sup><em>k</em></sup>&frasl;<sub>4</sub>?</p>`,
      options: [{ id: `A`, text: `&minus;3 only` }, { id: `B`, text: `&minus;3 or 3` }, { id: `C`, text: `0 only` }, { id: `D`, text: `3 only` }],
      answer: `C` },

    { id: `j6ie-math-m2-18`, domain: `Advanced Math`, skill: `Nonlinear equations in one variable and systems of equations in two variables`, difficulty: `hard`, type: `grid`,
      prompt: `<div style='text-align:center'><p>&minus;4<em>x</em><sup>2</sup> + <em>bx</em> &minus; 25 = 0</p></div><p>In the given equation, <em>b</em> is a positive integer. The equation has no real solution. What is the largest possible value of <em>b</em>?</p>`,
      answer: [`19`] },

    { id: `j6ie-math-m2-19`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `hard`, type: `mcq`,
      prompt: `<p>The function <em>f</em> is defined by <em>f</em>(<em>x</em>) = <em>a</em>(3.1<sup><em>x</em></sup> + 3.1<sup><em>b</em></sup>), where <em>a</em> and <em>b</em> are integer constants and 0 &lt; <em>a</em> &lt; <em>b</em>. The functions <em>g</em> and <em>h</em> are equivalent to function <em>f</em>, where <em>k</em> and <em>m</em> are constants. Which of the following equations displays the <em>y</em>-coordinate of the <em>y</em>-intercept of the graph of <em>y</em> = <em>f</em>(<em>x</em>) in the <em>xy</em>-plane as a constant or coefficient?</p><div style='text-align:center'><p>I. <em>g</em>(<em>x</em>) = <em>a</em>(3.1<sup><em>x</em></sup> + <em>k</em>)</p><p>II. <em>h</em>(<em>x</em>) = <em>a</em>(3.1)<sup><em>x</em></sup> + <em>m</em></p></div>`,
      options: [{ id: `A`, text: `I only` }, { id: `B`, text: `II only` }, { id: `C`, text: `I and II` }, { id: `D`, text: `Neither I nor II` }],
      answer: `D` },

    { id: `j6ie-math-m2-20`, domain: `Algebra`, skill: `Linear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>The cost of renting a piece of construction equipment for up to 5 days is $230 for the first day and $115 for each additional day. Which of the following equations gives the cost <em>y</em>, in dollars, of renting the equipment for <em>x</em> days, where <em>x</em> is a positive integer and <em>x</em> &le; 5?</p>`,
      options: [{ id: `A`, text: `<em>y</em> = 230<em>x</em> + 115` }, { id: `B`, text: `<em>y</em> = 230<em>x</em> &minus; 115` }, { id: `C`, text: `<em>y</em> = 115<em>x</em> + 230` }, { id: `D`, text: `<em>y</em> = 115<em>x</em> + 115` }],
      answer: `D` },

    { id: `j6ie-math-m2-21`, domain: `Problem-Solving and Data Analysis`, skill: `Percentages`, difficulty: `hard`, type: `grid`,
      prompt: `<p>The mass of object A is 498% of the mass of object B, and the mass of object A is 0.830% of the mass of object C. If the mass of object C is <em>p</em>% of the mass of object B, what is the value of <em>p</em>?</p>`,
      answer: [`60000`] },

    { id: `j6ie-math-m2-22`, domain: `Geometry and Trigonometry`, skill: `Lines, angles, and triangles`, difficulty: `hard`, type: `mcq`,
      prompt: `<p>For triangle <em>PQR</em> and triangle <em>STU</em>, angles <em>P</em> and <em>S</em> each measure 30&deg;, <em>QR</em> = 16 and <em>TU</em> = 12. Which additional piece(s) of information is(are) sufficient to prove that triangle <em>PQR</em> is similar to triangle <em>STU</em>?</p><div style='text-align:center'><p>I. The length of <span style='text-decoration:overline'>PQ</span> is <sup>4</sup>&frasl;<sub>3</sub> the length of <span style='text-decoration:overline'>ST</span>.</p><p>II. The length of <span style='text-decoration:overline'>PR</span> is <sup>4</sup>&frasl;<sub>3</sub> the length of <span style='text-decoration:overline'>SU</span>.</p></div>`,
      options: [{ id: `A`, text: `I is sufficient, but II is not.` }, { id: `B`, text: `II is sufficient, but I is not.` }, { id: `C`, text: `I is sufficient, and II is sufficient.` }, { id: `D`, text: `Neither I nor II is sufficient.` }],
      answer: `D` },
  ];

  Apex.bank.register({
    id: "dsat-2024-06-int-e",
    title: "June 2024",
    type: "digital",
    region: "International",
    version: "E",
    year: 2024,
    monthNum: 6,
    tagline: "International \u00b7 Version E",
    description: "Digital SAT \u2014 June 2024 International prediction form, Version E (Reading & Writing native; Math shared with Version B).",
    adaptive: false,
    sections: [
      { id: "rw", modules: [
        { id: "j6ie-rw-m1", stage: 1, name: "Reading and Writing \u2014 Module 1", minutes: 32, questions: RW_M1 },
        { id: "j6ie-rw-m2", stage: 2, variant: "hard", name: "Reading and Writing \u2014 Module 2 (Hard)", minutes: 32, questions: RW_M2 },
      ] },
      { id: "math", modules: [
        { id: "j6ie-math-m1", stage: 1, name: "Math \u2014 Module 1", minutes: 35, calculator: true, questions: MATH_M1 },
        { id: "j6ie-math-m2", stage: 2, variant: "hard", name: "Math \u2014 Module 2 (Hard)", minutes: 35, calculator: true, questions: MATH_M2 },
      ] },
    ],
  });
})();
