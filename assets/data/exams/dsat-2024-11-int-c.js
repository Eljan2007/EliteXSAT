/* ==========================================================================
   Digital SAT - November 2024 (International), Version C.
   Rebuilt in EliteXSAT's native UI from teacher-authored SAT-style prediction
   forms (2027 Prediction November International). RW in canonical Digital SAT
   domain order; Math ordered easy -> hard. Answers solved independently; the
   student's marked picks and the compiled answer sheet were treated as guides
   only, and conflicts are noted per-item in the build log (not shown to
   students). Math borrowed (compensation): Module 1 from Version A, Module 2 from Version B.
   No explanations. COMPLETE (98 q). */
(function () {
  const RW_M1 = [
    { id: `nic-rw-m1-1`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `easy`, type: `mcq`,
      passage: `Maryam Hosseini and her team used aerial images of well-mapped areas of Boston to train a computer program to identify sidewalks. When it was tested on images of Washington, DC, it _____ identified sidewalks in the vast majority of cases and even whether sidewalks were cobblestone or granite. Hosseini believes the program will improve on this already-strong performance as it gets used more.`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `rarely` }, { id: `B`, text: `reliably` }, { id: `C`, text: `slowly` }, { id: `D`, text: `clumsily` }],
      answer: `B` },

    { id: `nic-rw-m1-2`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `easy`, type: `mcq`,
      passage: `The Orinoco River delta is a constantly changing landform made up of a network of distributaries, small channels that branch off from the main river. The delta is shaped and reshaped over time as sediments carried by the river _____ where the river meets the Caribbean Sea, eventually forming new portions of land.`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `dissolve` }, { id: `B`, text: `accelerate` }, { id: `C`, text: `thrive` }, { id: `D`, text: `accumulate` }],
      answer: `D` },

    { id: `nic-rw-m1-3`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `Text corpora such as the Bank of English are enormous collections of electronically stored texts that can be used for empirical testing of hypotheses regarding the frequency of typical word usage. For example, a linguist who assumes that the word &ldquo;own&rdquo; appears quite often in written English could _____ that assumption with data from a corpus: &ldquo;own&rdquo; is the eighth most commonly used adjective.`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `validate` }, { id: `B`, text: `refute` }, { id: `C`, text: `transpose` }, { id: `D`, text: `entail` }],
      answer: `A` },

    { id: `nic-rw-m1-4`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `The minor planet 713 Luscinia was named after the animal genus that includes nightingales. But most minor planets are given only an identification number, largely due to there being over 500,000 such bodies known at present. So while the task of finding a unique name for each minor planet was _____ when few had been discovered, so many minor planets have since been discovered that the task has become nearly impossible.`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `ambiguous` }, { id: `B`, text: `feasible` }, { id: `C`, text: `substantial` }, { id: `D`, text: `insurmountable` }],
      answer: `B` },

    { id: `nic-rw-m1-5`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `The following text is adapted from Pam Mu&ntilde;oz Ryan&rsquo;s 2020 novel <em>Mananaland</em>. In the village where Max lives, there is an old fortress called La Reina. Children in the village say that the fortress is haunted.<br><br>For as long as he could remember, Max had begged Papa [his father] to take him to see La Reina and the ruins up close. He&rsquo;d be a hero among his friends if he was the first boy to cross the haunted gates! Just because Papa didn&rsquo;t believe in ghosts didn&rsquo;t mean they weren&rsquo;t there. Maybe this summer Papa would finally take him. He was almost twelve.`,
      prompt: `Which choice best describes the overall purpose of the text?`,
      options: [{ id: `A`, text: `To explain why Max doesn&rsquo;t want to grow up yet` }, { id: `B`, text: `To portray how proud Max&rsquo;s father is of Max` }, { id: `C`, text: `To show how much Max wants to visit La Reina` }, { id: `D`, text: `To criticize Max for disliking summer` }],
      answer: `C` },

    { id: `nic-rw-m1-6`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `hard`, type: `mcq`,
      passage: `Driven to sell as many paintings as possible, Alfred Hair, an influential figure among the landscape artists known as the Florida Highwaymen, pioneered &ldquo;fast painting,&rdquo; a technique (which in part involved slashing in elements with a palette knife) that many Highwaymen, including James Gibson, adopted. <u>To conclude that this approach accounts for the ethereal qualities now synonymous with the Highwaymen aesthetic is tempting but inaccurate</u>, as Hair&rsquo;s methods weren&rsquo;t universally practiced by his affiliates. Harold Newton, for example, painted with greater deliberateness but achieved the same effects.`,
      prompt: `Which choice best describes the function of the underlined portion in the text as a whole?`,
      options: [{ id: `A`, text: `It explains how an artist mentioned earlier in the text developed a distinctive style by adapting a particular approach to painting originated by his colleagues.` }, { id: `B`, text: `It considers and rejects an interpretation of the effect that a painting technique mentioned earlier in the text had on the perception of works by a group of artists.` }, { id: `C`, text: `It establishes a contrast between the approaches of two artists who were central to a movement introduced earlier in the text.` }, { id: `D`, text: `It details evidence that contradicts a widely held understanding of a disagreement within a group of artists.` }],
      answer: `B` },

    { id: `nic-rw-m1-7`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `hard`, type: `mcq`,
      passage: `The following text is adapted from Daniel Defoe&rsquo;s 1704 nonfiction book <em>The Storm</em>.<br><br>The sermon is a sound of words spoken to the ear, and prepared only for present meditation, and extends no farther than the strength of memory can convey it; a book printed is a record; remaining in every man&rsquo;s possession, always ready to renew its acquaintance with his memory, and always ready to be produced as an authority or voucher to any reports he makes out of it, and conveys its contents for ages to come, to the eternity of mortal time, when the author is forgotten in his grave.`,
      prompt: `Which choice best states the main purpose of the text?`,
      options: [{ id: `A`, text: `It recounts why the works of some artists are still discussed by critics after the artists&rsquo; deaths while others are not.` }, { id: `B`, text: `It analyzes the contributions to society of two different groups of scholars.` }, { id: `C`, text: `It demonstrates that one form of communication is more commonly used than another.` }, { id: `D`, text: `It describes differences in the characteristics of two kinds of communication.` }],
      answer: `D` },

    { id: `nic-rw-m1-8`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `In a study by Mika R. Moran, Daniel A. Rodriguez, and colleagues, residents of Bogot&aacute;, Colombia, and Fortaleza, Brazil, were surveyed about parks in their cities. Of the 1,121 respondents from Fortaleza, 35.7% indicated using city parks, and of the 936 respondents from Bogot&aacute;, 71.9% indicated that they use the city&rsquo;s parks. Given that the percentage of Bogot&aacute; respondents who reported living within a 10-minute walk of a park was much lower than that reported by Fortaleza respondents, greater proximity alone can&rsquo;t explain the difference in park use.`,
      prompt: `The text makes which point about the difference between the proportions of Bogot&aacute; residents and Fortaleza residents using parks?`,
      options: [{ id: `A`, text: `It is caused by something other than the parks&rsquo; proximity to city residents.` }, { id: `B`, text: `It was calculated using sources that predate the survey.` }, { id: `C`, text: `It was much larger than the researchers conducting the study expected.` }, { id: `D`, text: `It could be due to inaccuracies in the survey results.` }],
      answer: `A` },

    { id: `nic-rw-m1-9`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `medium`, type: `mcq`,
      passage: `Spanning the 1930s to the 1980s, Mexican architect Luis Barrag&aacute;n&rsquo;s prolific career evolved through distinct phases. After traveling to the United States and Europe in the early 1930s and immersing himself in international architectural discourse, Barrag&aacute;n began incorporating principles derived from functionalism and modernism in his work, as seen in the apartment building for Jos&eacute; Mojica, whose unadorned geometric forms contrast with the historically inspired architecture found in the Harper de Garibi House, one of Barrag&aacute;n&rsquo;s early projects in Guadalajara.`,
      prompt: `Which choice best states the main idea of the text?`,
      options: [{ id: `A`, text: `Barrag&aacute;n&rsquo;s designs for the apartment building for Jos&eacute; Mojica and the Harper de Garibi House are considered paragons of a functionalist and modernist aesthetic.` }, { id: `B`, text: `A notable shift in Barrag&aacute;n&rsquo;s design aesthetic reflects the influence of his time abroad.` }, { id: `C`, text: `Barrag&aacute;n&rsquo;s design of the Harper de Garibi House is considered more experimental than his design for the apartment building for Jos&eacute; Mojica.` }, { id: `D`, text: `Barrag&aacute;n&rsquo;s method of work shows an influence that he later abandoned.` }],
      answer: `B` },

    { id: `nic-rw-m1-10`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `hard`, type: `mcq`,
      passage: `The following text is from Nathaniel Hawthorne&rsquo;s 1830 short story &ldquo;Sir William Phips.&rdquo;<br><br>The knowledge, communicated by the historian and biographer, is analogous to that which we acquire of a country by the map,&mdash;minute, perhaps, and accurate, and available for all necessary purposes, but cold and naked, and wholly destitute of the mimic charm produced by landscape painting. These defects are partly remediable, and even without an absolute violation of literal truth, although by methods rightfully interdicted to professors of biographical exactness.`,
      prompt: `Which choice best states the main idea of the text?`,
      options: [{ id: `A`, text: `Writers of fiction possess storytelling skills that historians do not.` }, { id: `B`, text: `The more famous a person is, the more likely that person is to attract the attention of a historian.` }, { id: `C`, text: `Maps are more practical to own than paintings are.` }, { id: `D`, text: `Historians&rsquo; fidelity to the truth often results in work that is less engaging than it could be.` }],
      answer: `D` },

    { id: `nic-rw-m1-11`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `medium`, type: `mcq`,
      passage: `In 2018, scientists discovered an immense aggregation of <em>Muusoctopus robustus</em> (pearl octopuses) along a hydrothermal vent 3,200 meters beneath the ocean&rsquo;s surface. Water temperatures at this site&mdash;named the Octopus Garden&mdash;climb as high as 11&deg;C, much warmer than the ambient 1.6&deg;C typical at this depth. Based on observations made over three years, scientists concluded that temperatures at the site likely confer reproductive benefits and that the site is used exclusively for reproduction&mdash;6,000 <em>M. robustus</em> adults, hatchlings, and eggs were observed at the garden, but no juveniles were present.`,
      prompt: `Which statement about <em>M. robustus</em> and the Octopus Garden is best supported by the text?`,
      options: [{ id: `A`, text: `The <em>M. robustus</em> population at the Octopus Garden remains stable despite variations in water temperature.` }, { id: `B`, text: `The Octopus Garden provides an ideal feeding ground for <em>M. robustus</em> hatchlings.` }, { id: `C`, text: `<em>M. robustus</em> nests in the Octopus Garden contain on average fewer but larger eggs than nests at similar ocean depths.` }, { id: `D`, text: `<em>M. robustus</em> leave the Octopus Garden upon reaching an intermediary stage of development.` }],
      answer: `D` },

    { id: `nic-rw-m1-12`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `medium`, type: `mcq`,
      passage: `<div style="text-align:center;font-weight:600;font-size:12px;margin:2px 0">Number of CFUs of Bacteria after Treatment</div><table style="border-collapse:collapse;margin:6px auto"><tr><th style="border:1px solid var(--border);padding:3px 12px">Petri dish number</th><th style="border:1px solid var(--border);padding:3px 12px">CFUs after treatment with saline</th><th style="border:1px solid var(--border);padding:3px 12px">CFUs after treatment with venom</th></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">4</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">155</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">143</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">6</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">165</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">153</td></tr></table>Scientists recently tested whether scorpion venom reduces the growth of bacteria. The scientists put bacteria in petri dishes with two chambers. They treated the bacteria in one chamber with a saline solution, which does not affect the bacteria. They treated bacteria in the other chamber with scorpion venom. After 14 hours, they counted how many colony-forming units (CFUs) of bacteria were in each chamber.`,
      prompt: `According to the table, for petri dish number 6, how many CFUs of bacteria were found in the chamber with the venom-treated bacteria?`,
      options: [{ id: `A`, text: `153` }, { id: `B`, text: `877` }, { id: `C`, text: `55` }, { id: `D`, text: `103` }],
      answer: `A` },

    { id: `nic-rw-m1-13`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `medium`, type: `mcq`,
      passage: `<div style="text-align:center;font-weight:600;font-size:12px;margin:2px 0">US Hydroelectric Power Plants, 2019</div><table style="border-collapse:collapse;margin:6px auto"><tr><th style="border:1px solid var(--border);padding:3px 12px">Plant</th><th style="border:1px solid var(--border);padding:3px 12px">State</th><th style="border:1px solid var(--border);padding:3px 12px">Mode</th><th style="border:1px solid var(--border);padding:3px 12px">Generators in plant</th><th style="border:1px solid var(--border);padding:3px 12px">Average power generation (MWh/yr)</th><th style="border:1px solid var(--border);padding:3px 12px">Water source</th></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Spearfish</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">South Dakota</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">run-of-river</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">2</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">2,204</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Spearfish Creek</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Sawmill</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">New Hampshire</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">run-of-river</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">4</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">14,126</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Androscoggin River</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Hiwassee Dam</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">North Carolina</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">peaking</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">2</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">198,220</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Hiwassee River</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Superior Falls</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Michigan</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">run-of-river</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">2</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">10,693</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Montreal River</td></tr></table>In 2021, Rocio Uria-Martinez, Megan M. Johnson, and Rui Shan published a report on hydroelectric power plants operating on bodies of water in the US as recently as 2019, and data from their report are shown in the table.`,
      prompt: `Which choice most effectively uses data from the table to complete the statement?<br><br>Of the plants in the table, the plant with the highest average power generated per year in 2019 was located on the _____`,
      options: [{ id: `A`, text: `Androscoggin River.` }, { id: `B`, text: `Spearfish Creek.` }, { id: `C`, text: `Hiwassee River.` }, { id: `D`, text: `Montreal River.` }],
      answer: `C` },

    { id: `nic-rw-m1-14`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `<em>Poems of Experience</em> is a 1910 collection of poetry by Ella Wheeler Wilcox. In one of her poems, the speaker indicates that several beneficial opportunities have recently become available to women, saying, _____`,
      prompt: `Which quotation from <em>Poems of Experience</em> most effectively illustrates the claim?`,
      options: [{ id: `A`, text: `&ldquo;For worlds to conquer [woman] had not yearned, / &rsquo;Till [man] spoke of her feminine sphere as &lsquo;narrow.&rsquo;&rdquo; (from &ldquo;Woman&rdquo;)` }, { id: `B`, text: `&ldquo;Trade and science and craft and art, / Have opened their doors to the call of woman, / And greater she grows in her greater part, / More tenderly wife, and more sweetly human.&rdquo; (from &ldquo;Woman&rdquo;)` }, { id: `C`, text: `&ldquo;[Woman] grasped the scope of the finer intent / That made her kingdom for her, no other.&rdquo; (from &ldquo;Woman&rdquo;)` }, { id: `D`, text: `&ldquo;Time has cut his beard, and Life is like a boy / Singing in the sunshine&mdash;Ah! But life is joy.&rdquo; (from &ldquo;The Voices of the City&rdquo;)` }],
      answer: `B` },

    { id: `nic-rw-m1-15`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `medium`, type: `mcq`,
      passage: `Archaeologist Christiana K&ouml;hler and her team excavated the Egyptian tomb of Queen Merneith, the wife of a First Dynasty pharaoh. Some scholars claim that she also ruled Egypt on her own and was actually the first female pharaoh. The team found a tablet in Merneith&rsquo;s tomb with writing suggesting that she was in charge of the country&rsquo;s treasury and other central offices. Whether Merneith was a pharaoh or not, this discovery supports the idea that Merneith likely _____`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `lived after rather than before the First Dynasty of Egypt.` }, { id: `B`, text: `created a new form of writing in Egypt.` }, { id: `C`, text: `had an important role in Egypt&rsquo;s government.` }, { id: `D`, text: `traveled beyond Egypt&rsquo;s borders often.` }],
      answer: `C` },

    { id: `nic-rw-m1-16`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `easy`, type: `mcq`,
      passage: `In the periodic table, an element&rsquo;s atomic number indicates how many protons there are in an atom of the element. For example, a zinc atom _____ 30 protons. Professor Raymond Chang explains this concept in more detail in the textbook <em>Chemistry</em>.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `has had` }, { id: `B`, text: `had` }, { id: `C`, text: `is having` }, { id: `D`, text: `has` }],
      answer: `D` },

    { id: `nic-rw-m1-17`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `Inspired by her Pomo heritage, artist Susan Billy typically uses willow&mdash;a strong and flexible _____ craft baskets that are both beautiful and elaborate.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `material. To` }, { id: `B`, text: `material: to` }, { id: `C`, text: `material; to` }, { id: `D`, text: `material&mdash;to` }],
      answer: `D` },

    { id: `nic-rw-m1-18`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `The historian&rsquo;s books about Zachary Taylor _____ what she is best known for, but she is also well regarded for her scholarship on James Monroe.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `are` }, { id: `B`, text: `were` }, { id: `C`, text: `has been` }, { id: `D`, text: `is` }],
      answer: `A` },

    { id: `nic-rw-m1-19`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `The 1970 founding of the Partido Nacional de La Raza Unida and the 1966 <em>Katzenbach v. Morgan</em> court decision are regarded as important events in US civil rights _____ former establishing a Latino rights advocacy group and the latter legally affirming the rights of Latino voters.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `history, as the` }, { id: `B`, text: `history. The` }, { id: `C`, text: `history the` }, { id: `D`, text: `history, the` }],
      answer: `D` },

    { id: `nic-rw-m1-20`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `A government body officially known as the Althing, _____`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `Iceland&rsquo;s parliament is one of the oldest in the world, first meeting in 930 CE.` }, { id: `B`, text: `the world&rsquo;s oldest parliaments include one which first met in 930 CE, Iceland&rsquo;s.` }, { id: `C`, text: `930 CE was the year when Iceland&rsquo;s parliament, one of the oldest parliaments in the world, first met.` }, { id: `D`, text: `the first meeting of one of the oldest parliaments in the world, Iceland&rsquo;s, was in 930 CE.` }],
      answer: `A` },

    { id: `nic-rw-m1-21`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `Disyllabic words _____ as trochees in English metrical verse, such as &ldquo;beverage&rdquo; and &ldquo;postal,&rdquo; consist of one stressed syllable followed by one unstressed syllable.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `can be classified` }, { id: `B`, text: `classified` }, { id: `C`, text: `are classified` }, { id: `D`, text: `have been classified` }],
      answer: `B` },

    { id: `nic-rw-m1-22`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `Soil polluted with cadmium (a heavy metal) is harmful to many plants and animals, but the plant species <em>Typha latifolia</em>, or broadleaf cattail, not only thrives in such conditions but also helps remediate them. As a metal hyperaccumulator, <em>Typha latifolia</em> absorbs a large amount of cadmium and stores it safely in its roots and shoots; _____ cadmium concentrations in the soil decrease.`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `specifically,` }, { id: `B`, text: `in turn,` }, { id: `C`, text: `in addition,` }, { id: `D`, text: `nevertheless,` }],
      answer: `B` },

    { id: `nic-rw-m1-23`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `When printing paper money for the colony of Pennsylvania in the 1730s, Benjamin Franklin&mdash;then a Philadelphia shop owner&mdash;took steps to combat the circulation of counterfeit notes, such as weaving blue threads and muscovite (a reflective mineral) into the paper he used. _____ he stamped the notes with detailed imprints of sage leaves that proved difficult for forgers to replicate.`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `That said,` }, { id: `B`, text: `Specifically,` }, { id: `C`, text: `For example,` }, { id: `D`, text: `Moreover,` }],
      answer: `D` },

    { id: `nic-rw-m1-24`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `While researching a topic, a student has taken the following notes:<ul><li>The Pearl Harbor National Wildlife Refuge (NWR) is a protected natural area in Hawaii.</li><li>It encompasses 61 acres.</li><li>It was established to safeguard the habitat of the Hawaiian stilt, an endangered species.</li><li>The Pearl Harbor NWR is managed by the US Fish &amp; Wildlife Service.</li><li>The US Fish &amp; Wildlife Service limits human activities in the area.</li></ul>`,
      prompt: `The student wants to indicate the size of the Pearl Harbor NWR. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `A protected natural area, the Pearl Harbor NWR encompasses 61 acres of land in Hawaii.` }, { id: `B`, text: `The Pearl Harbor NWR is a protected natural area managed by the US Fish &amp; Wildlife Service, which limits human activities there.` }, { id: `C`, text: `The Pearl Harbor NWR is a natural area in Hawaii, home to the Hawaiian stilt.` }, { id: `D`, text: `Home to the Hawaiian stilt, Hawaii&rsquo;s Pearl Harbor NWR is managed by the US Fish &amp; Wildlife Service.` }],
      answer: `A` },

    { id: `nic-rw-m1-25`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `While researching a topic, a student has taken the following notes:<ul><li>A supercontinent is a single landmass made up of most or all of Earth&rsquo;s continents.</li><li>Over time, continents merge together to form supercontinents, which then break apart.</li><li>This process is believed to take hundreds of millions of years and is known as the supercontinent cycle.</li><li>Vaalbara was a supercontinent that formed about 3.6 billion years ago.</li><li>Euramerica was a supercontinent that formed about 300 million years ago.</li></ul>`,
      prompt: `The student wants to emphasize the order in which the supercontinents were formed. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `Forming and breaking apart over hundreds of millions of years, supercontinents are made up of most or all of Earth&rsquo;s continents.` }, { id: `B`, text: `The supercontinent Euramerica formed long after the supercontinent Vaalbara.` }, { id: `C`, text: `Vaalbara formed about 3.6 billion years ago but eventually broke apart.` }, { id: `D`, text: `Vaalbara and Euramerica were both supercontinents, single landmasses made up of most or all of Earth&rsquo;s continents.` }],
      answer: `B` },

    { id: `nic-rw-m1-26`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `While researching a topic, a student has taken the following notes:<ul><li>The human tongue contains taste receptors for a rich, savory flavor called umami.</li><li>Umami is triggered by the compounds in a variety of foods, including tuna and garlic.</li><li>Participants in a study tasted a sample of North Pacific konbu, a type of brown seaweed.</li><li>They rated its umami intensity as moderate.</li><li>The participants tasted a sample of arame, another type of brown seaweed.</li><li>They rated its umami intensity as high.</li></ul>`,
      prompt: `The student wants to emphasize a difference between the two seaweeds. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `North Pacific konbu is a type of brown seaweed, but so is arame.` }, { id: `B`, text: `While North Pacific konbu and arame contain umami flavor, umami can also be found in tuna and garlic.` }, { id: `C`, text: `Although North Pacific konbu and arame are types of brown seaweed, the latter&rsquo;s umami flavor is more intense.` }, { id: `D`, text: `Some types of brown seaweed, like North Pacific konbu and arame, trigger umami flavor in human taste buds.` }],
      answer: `C` },

    { id: `nic-rw-m1-27`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `While researching a topic, a student has taken the following notes:<ul><li>The A.M. Turing Award is a prestigious award given by the Association for Computing Machinery (ACM).</li><li>The ACM gives the award for &ldquo;major contributions of lasting importance to computing.&rdquo;</li><li>Judea Pearl won the award in 2011 for developing a calculus for probabilistic reasoning.</li></ul>`,
      prompt: `Which choice most effectively uses information from the given sentences to emphasize when Judea Pearl won the A.M. Turing Award?`,
      options: [{ id: `A`, text: `Judea Pearl is one winner of the A.M. Turing Award.` }, { id: `B`, text: `It was in 2011 that Judea Pearl won the A.M. Turing Award.` }, { id: `C`, text: `The prestigious A.M. Turing Award is given for major contributions of lasting importance to computing.` }, { id: `D`, text: `For developing a calculus for probabilistic reasoning, Judea Pearl won the A.M. Turing Award.` }],
      answer: `B` },
  ];

  const RW_M2 = [
    { id: `nic-rw-m2-1`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `easy`, type: `mcq`,
      passage: `Cybersecurity experts often encourage users to create passwords that are fairly complicated and therefore difficult to guess. Nonetheless, research has shown that the more _____ approach to password selection seems to favor convenience over security: for example, the third most commonly used password in 2018 was the easily remembered &ldquo;123456789.&rdquo;`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `creative` }, { id: `B`, text: `useful` }, { id: `C`, text: `complex` }, { id: `D`, text: `popular` }],
      answer: `D` },

    { id: `nic-rw-m2-2`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `Writer Lydia Davis observed that while traditional literary forms, such as the short story, are recognizable as such even as they evolve, there are more _____ forms that might, for example, borrow elements from both fiction and essays to make something new. Considering such a hybrid work, a reader might struggle to place it neatly within an established category, since its features resist easy classification.`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `amorphous` }, { id: `B`, text: `conventional` }, { id: `C`, text: `enduring` }, { id: `D`, text: `deliberate` }],
      answer: `A` },

    { id: `nic-rw-m2-3`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `The fact that publications by Brown University economist Christina Paxson, who studies economics and children, are so frequently cited in other scholars&rsquo; work _____ the usefulness of her research for her peers&mdash;other economists clearly find her studies valuable for their own scholarship.`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `overshadows` }, { id: `B`, text: `underscores` }, { id: `C`, text: `forestalls` }, { id: `D`, text: `belies` }],
      answer: `B` },

    { id: `nic-rw-m2-4`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `The sloping tile roofs and picturesque fa&ccedil;ade of Mission Santa In&eacute;s in Solvang, California, exemplify the Spanish contribution to Californian architecture, an influence that is _____ throughout the state&mdash;architectural tourists visiting the San Gabriel Mission Playhouse in San Gabriel, for example, can easily recognize how its style draws inspiration from the Spanish missions.`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `palpable` }, { id: `B`, text: `understated` }, { id: `C`, text: `corroborated` }, { id: `D`, text: `disputed` }],
      answer: `A` },

    { id: `nic-rw-m2-5`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `hard`, type: `mcq`,
      passage: `The following text is adapted from Matthew Arnold&rsquo;s 1869 nonfiction book <em>Culture and Anarchy</em>.<br><br>The <em>Times</em> [a British newspaper], replying to some foreign strictures on the dress, looks, and behaviour of the English abroad, urges that <u>the English ideal is that every one should be free to do and to look just as he likes</u>. But culture indefatigably tries, not to make what each raw person may like the rule by which he fashions himself; but to draw ever nearer to a sense of what is indeed beautiful, graceful, and becoming, and to get the raw person to like that.`,
      prompt: `Which choice best describes the function of the underlined sentence in the text as a whole?`,
      options: [{ id: `A`, text: `It details an example that supports the author&rsquo;s primary claim.` }, { id: `B`, text: `It asserts that the English are often subject to unfair critiques of their sense of taste.` }, { id: `C`, text: `It indicates that opinions regarding culture shift over time.` }, { id: `D`, text: `It presents an opinion with which the author disagrees.` }],
      answer: `D` },

    { id: `nic-rw-m2-6`, domain: `Craft and Structure`, skill: `Cross-Text Connections`, difficulty: `hard`, type: `mcq`,
      passage: `<strong>Text 1</strong><br>Scholarship today overrepresents experimentally fragmented narrative structures, such as that of Virginia Woolf&rsquo;s <em>To the Lighthouse</em>, beyond the degree to which they actually influenced fiction in Britain and Ireland during the modernist period (roughly 1900&ndash;1945). Meanwhile, Elizabeth von Arnim&rsquo;s <em>The Enchanted April</em>, whose coherent, linear narrative structure recalls the fiction of previous centuries, attracts woefully little attention from scholars of modernism.<br><br><strong>Text 2</strong><br>Distant reading, or computer-assisted quantitative analysis of massive collections of digitized texts, can reveal stylistic elements that have heretofore escaped notice, despite being shared by numerous texts from the modernist period. For too long, scholars have focused on narrative fragmentation versus coherence, inhibiting inquiry into other points of stylistic correspondence among works that would enrich our understanding of the modernist canon.`,
      prompt: `Based on the texts, both the author of Text 1 and the author of Text 2 would most likely agree with which statement about scholarship on works from the modernist period in Britain and Ireland?`,
      options: [{ id: `A`, text: `Without a major shift in focus, the vision that it presents of fiction written in the period will continue to be unnecessarily limited.` }, { id: `B`, text: `Instead of engaging in unproductive debates, it should work to rehabilitate the reputations of neglected modernist works.` }, { id: `C`, text: `Its primary methods for analyzing fiction written in the period are growing obsolete as computer technology advances.` }, { id: `D`, text: `It must widen its focus to include aspects of modernist fiction beyond style, a productive but overrepresented site of inquiry.` }],
      answer: `A` },

    { id: `nic-rw-m2-7`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `A student in a political science course is writing a paper on Aristotle&rsquo;s <em>The Politics</em>, in which Aristotle offers his opinion on political instability and gives advice on how constitutions can be preserved. Aristotle observes that different forms of government can fall in different ways&mdash;for example, oligarchies might grant power to military leaders during wartime who refuse to relinquish that power during peacetime&mdash;but some methods of preserving order apply across all forms of government. The student claims that in particular Aristotle asserts that in a healthy state obedience to law must be as close to absolute as possible and that even minor infractions should not be ignored.`,
      prompt: `Which quotation from a philosopher&rsquo;s analysis of <em>The Politics</em> would best support the student&rsquo;s claim?`,
      options: [{ id: `A`, text: `&ldquo;When contrasting different forms of government, Aristotle holds that &lsquo;oligarchies may last, not from any inherent stability in such forms of government, but because the rulers are on good terms both with the disenfranchised and with the governing classes.&rsquo; That is, oligarchic leaders who wish to hold on to power will introduce members of disenfranchised classes into government in a participatory role.&rdquo;` }, { id: `B`, text: `&ldquo;When constructing his argument regarding the characteristics of a well-functioning government, Aristotle asserts that &lsquo;Transgression creeps in unperceived and at last ruins the state,&rsquo; illustrating this idea with a comparison to frequent small expenditures slowly and almost imperceptibly chipping away at a fortune until it is ultimately depleted.&rdquo;` }, { id: `C`, text: `&ldquo;When Aristotle considers the health of constitutions, he states that &lsquo;Constitutions are preserved when their destroyers are at a distance, and sometimes also because they are near; for the fear of them makes the government keep in hand the constitution.&rsquo;&rdquo;` }, { id: `D`, text: `&ldquo;When Aristotle writes on the necessity of avoiding corruption in government, he proposes that &lsquo;every state should be so administered and so regulated by law that its magistrates cannot possibly make money.&rsquo;&rdquo;` }],
      answer: `B` },

    { id: `nic-rw-m2-8`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `<div style="text-align:center;font-weight:600;font-size:12px;margin:2px 0">Monthly Temperatures and Wing Centroid Sizes of Fruit Fly Specimens</div><table style="border-collapse:collapse;margin:6px auto"><tr><th style="border:1px solid var(--border);padding:3px 12px">Month</th><th style="border:1px solid var(--border);padding:3px 12px">Average high (&deg;F)</th><th style="border:1px solid var(--border);padding:3px 12px">Average low (&deg;F)</th><th style="border:1px solid var(--border);padding:3px 12px">Average male wing centroid size (mm)</th><th style="border:1px solid var(--border);padding:3px 12px">Average female wing centroid size (mm)</th></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">September</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">80</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">54</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">1.98</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">2.27</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">October</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">67</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">44</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">1.98</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">2.29</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">May</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">73</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">50</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">1.98</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">2.27</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">July</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">87</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">61</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">2.02</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">2.31</td></tr></table><em>Drosophila</em> (fruit flies) have generation times of 10&ndash;12 days, so seasonal changes in food availability and other environmental conditions can drive seasonal fluctuations in chromosome rearrangements in species such as <em>D. robusta</em> and <em>D. mediopunctata</em>. <em>Drosophila</em> body size (for which wing centroid size serves as a proxy measure) correlates with reproductive fitness. Banu &#350;ebnem &Ouml;nder and Cansu Fidan Aksoy measured the wing sizes of members of a <em>D. melanogaster</em> population in Ye&#351;il&ouml;z, Turkey, that were collected monthly between May and October over three years. Their research suggests that <em>Drosophila</em> collected in relatively cooler months tend to have lower reproductive fitness, as is illustrated by the finding that _____`,
      prompt: `Which choice most effectively uses data from the table to complete the statement?`,
      options: [{ id: `A`, text: `the average male wing centroid size was 1.98 mm in September but was 2.31 mm in July.` }, { id: `B`, text: `the average male wing centroid size was consistently smaller than the average female wing centroid size in all four months in the table.` }, { id: `C`, text: `the average monthly low temperature was lower in May than in September.` }, { id: `D`, text: `the average female wing centroid size was smaller in September than in July.` }],
      answer: `D` },

    { id: `nic-rw-m2-9`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `Elaine Ostrander led an international collaboration with Greger Larson and other researchers to study the evolutionary history of size differences in modern dogs, including very small breeds such as Pomeranians. The researchers determined that among dogs as a whole, there are many different variations of the gene that regulates the production of IGF-1 (insulin-like growth factor 1), a hormone that promotes growth. After reviewing the study, a student concludes that these variations must account for the observed variance in body size among dog breeds.`,
      prompt: `Which quotation from a scientist not involved in the study would most directly undermine the student&rsquo;s conclusion?`,
      options: [{ id: `A`, text: `&ldquo;The gene that regulates IGF-1 production is one of multiple genes known to affect the size of dogs.&rdquo;` }, { id: `B`, text: `&ldquo;The researchers&rsquo; conclusions regarding the IGF-1 gene may not apply to other species, given that dogs vary in size more than any other group of land mammals does.&rdquo;` }, { id: `C`, text: `&ldquo;Variations of the IGF-1 gene result in substantial body size variance among dog breeds and may influence additional characteristics as well.&rdquo;` }, { id: `D`, text: `&ldquo;In fact, only one-third of the most prevalent dog breeds carry the same variant of the gene regulating IGF-1 production.&rdquo;` }],
      answer: `A` },

    { id: `nic-rw-m2-10`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `Neurobiologists Laura Cuaya, Ra&uacute;l Hern&aacute;ndez-P&eacute;rez, and colleagues investigated the language detection abilities of eighteen dogs raised in similar settings. The researchers monitored the brain activity of Sander (a golden retriever) and other dogs while the animals listened to three recordings: one of <em>The Little Prince</em> being read in Spanish, the second in Hungarian, and a third made up of short, randomly selected fragments of the first two, scrambled so that they didn&rsquo;t resemble human speech. Each dog was familiar with either Spanish or Hungarian, but not both. The team concluded that the amount of previous language exposure a dog has received may influence its ability to distinguish familiar languages from unfamiliar ones.`,
      prompt: `Which finding from the study, if true, would most directly support the team&rsquo;s conclusion?`,
      options: [{ id: `A`, text: `The difference between the pattern of brain activity a dog showed when hearing the language it was accustomed to and the pattern it showed when hearing the language it was not accustomed to was greatest among older dogs.` }, { id: `B`, text: `The similarity between the pattern of brain activity a dog showed in response to the scrambled recording and the pattern it showed in response to the language it was not accustomed to was present among older dogs.` }, { id: `C`, text: `Although the dogs&rsquo; general hearing sensitivity declined with age, dogs of all ages showed more brain activity in response to the language they were accustomed to than to the other language.` }, { id: `D`, text: `Dogs showed a different pattern of brain activity when hearing the language they were accustomed to than when hearing the scrambled recording, and the difference increased with the age of the dog scanned.` }],
      answer: `A` },

    { id: `nic-rw-m2-11`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `In May of 1987, Malaysia liberalized its stock market, meaning that it began allowing foreign individuals and businesses to invest money in Malaysian companies. This was part of a wave of stock market liberalizations from the mid-1980s through the mid-1990s&mdash;Thailand in 1988, Mexico in 1989, and so on. In an analysis of economic data from 1976 to 1993, Ross Levine and Sara Zervos found that liberalization did not lead to enduring increases in investment in companies based in countries that liberalized. Peter Blair Henry, however, found that, on average, investment in companies in liberalized countries increased significantly in the three years following liberalization. Taken together, these results suggest that _____`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `investment growth is likely to be more consistent in countries that liberalize than in countries that do not.` }, { id: `B`, text: `companies typically do not benefit from liberalization until at least three years after liberalization occurs.` }, { id: `C`, text: `economists&rsquo; expectations about the effect of liberalization on investment were largely correct.` }, { id: `D`, text: `liberalization may provide a boost to investment that fades over time.` }],
      answer: `D` },

    { id: `nic-rw-m2-12`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `Data collected by the Mars rover <em>Curiosity</em> at the Gale Crater&rsquo;s Murray Formation are suggestive of hydrological deposition of sediment in the distant past. To characterize the nature of the depositional environment, Frances Rivera-Hern&aacute;ndez et al. analyzed the grain size of Murray Formation sediment, finding that although there are intervals of coarse grains, most of the sediment consists of fine grains that show signs of cracking due to episodic desiccation. Rivera-Hern&aacute;ndez et al. concluded that the coarse grains are sandstone, which tends to be deposited by flowing water, whereas the fine grains are mudstone, which is slowly deposited by settling out of suspension in low-flow water, leading the researchers to posit that _____`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `a lake existed at the Murray Formation for a prolonged period, though the lake occasionally experienced drying and there were periods in which one or more streams were present.` }, { id: `B`, text: `one or more streams existed at the Murray Formation for an extended period until being replaced by a lake that persisted for only a brief period before permanently drying.` }, { id: `C`, text: `a stream-fed lake was present at the Murray Formation for an extended period, and although the streams experienced occasional drying, the lake did not.` }, { id: `D`, text: `although the area of the Murray Formation experienced a prolonged period of dryness that prevented a lake from forming, water flowing from a distant source was present.` }],
      answer: `A` },

    { id: `nic-rw-m2-13`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `Although the language of the Olmec civilization, which flourished in southern Mexico circa 1500 BCE&ndash;400 BCE, hasn&rsquo;t been identified, it likely belonged to the Mixe-Zoquean family, a group of related languages whose present-day representatives are spoken in an area corresponding to ancient Olmec sites. The family can be subdivided into a Zoque branch, which includes Copainal&aacute; Zoque, and a Mixe branch, which includes Coatl&aacute;n Mixe. Many words in the Mayan languages&mdash;languages spoken in the region but otherwise unrelated to the Mixe-Zoquean family&mdash;are Mixe-Zoquean in origin and were likely borrowed during the period when the Olmecs dominated the entire area. Tellingly, all those words derive from the Zoque branch, suggesting that _____`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `Coatl&aacute;n Mixe and the other languages of the Mixe branch likely supplanted the languages of the Zoque branch sometime before 1500 BCE.` }, { id: `B`, text: `the Mixe-Zoquean family had already diverged into the Mixe and Zoque branches by the time the Olmecs became the prevailing power in the region.` }, { id: `C`, text: `the language of the Olmec civilization contributed words not only to Mayan languages but also to other languages in the Mixe-Zoquean family.` }, { id: `D`, text: `the language of the Olmec civilization was likely the founding language of the family that includes Mayan languages.` }],
      answer: `B` },

    { id: `nic-rw-m2-14`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `Each year, the Nobel Prize in Literature is given to an author who has, in the words of its founder Alfred Nobel, &ldquo;produced the most outstanding work in an idealistic _____ in 2011, for instance, judges recognized Tomas Transtr&ouml;mer, whose condensed, translucent images give readers fresh access to reality.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `direction&rdquo;;` }, { id: `B`, text: `direction&rdquo; and` }, { id: `C`, text: `direction.&rdquo;` }, { id: `D`, text: `direction&rdquo;` }],
      answer: `A` },

    { id: `nic-rw-m2-15`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `Mathematician Grigori Perelman, sometimes in conjunction with mathematicians Richard S. Hamilton and Shing-Tung Yau, _____ credited with proving the Poincar&eacute; conjecture. Having built on Hamilton&rsquo;s previous work to solve the proof, Perelman has insisted that Hamilton receive credit. Yau later found and closed gaps in Perelman&rsquo;s proof, persuading some mathematicians that he deserves credit as well.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `are` }, { id: `B`, text: `is` }, { id: `C`, text: `are being` }, { id: `D`, text: `have been` }],
      answer: `B` },

    { id: `nic-rw-m2-16`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `Objects orbiting in the outer solar system between Jupiter and Neptune, such as 49036 Pelion, a 46-kilometer-wide body first detected in 1998, _____ both asteroidal and comet-like characteristics, being closer in size and appearance to asteroids but traveling in an elliptical orbit more closely resembling that of comets.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `is exhibiting` }, { id: `B`, text: `exhibits` }, { id: `C`, text: `has exhibited` }, { id: `D`, text: `exhibit` }],
      answer: `D` },

    { id: `nic-rw-m2-17`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `Prishtina, the capital of Kosovo, has a population of 198,214, which accounts for 10.32 percent of the country&rsquo;s total population. Having proportionally large populations _____ common for national capitals.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `are` }, { id: `B`, text: `were` }, { id: `C`, text: `have been` }, { id: `D`, text: `is` }],
      answer: `D` },

    { id: `nic-rw-m2-18`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `Researchers studying how agricultural fertilizers impact grassland arthropod populations have employed several collection methods. A team led by researcher Mark E. Ritchie collected arthropods with _____ another research team, led by Alison G. Boyer, gathered them with bug vacuums.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `sweep nets, for instance,` }, { id: `B`, text: `sweep nets for instance` }, { id: `C`, text: `sweep nets; for instance,` }, { id: `D`, text: `sweep nets, for instance;` }],
      answer: `D` },

    { id: `nic-rw-m2-19`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `On most of the world&rsquo;s beaches, sand is a predictable cream or beige color. The sand at Kaihalulu Beach in Hawai&lsquo;i is a strikingly different _____ sand gets its shade from deposits of gray- and tan-hued quartz and feldspar, deposits of iron oxide and other organic matter lend the sand at Kaihalulu Beach a colorful red tint.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `shade: though most` }, { id: `B`, text: `shade, though most` }, { id: `C`, text: `shade, though, most` }, { id: `D`, text: `shade. Though most` }],
      answer: `A` },

    { id: `nic-rw-m2-20`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `The parks of Los Angeles, California, seem to be making people happier. In a 2022 study, researchers _____ for a relationship between the physical location in which a social media post was created and the content of that post analyzed geotagged social media posts from Los Angeles. The team found that posts from the city&rsquo;s parks contained more words associated with happiness than other posts did.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `had looked` }, { id: `B`, text: `looking` }, { id: `C`, text: `were looking` }, { id: `D`, text: `looked` }],
      answer: `B` },

    { id: `nic-rw-m2-21`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `Marcel Duchamp intended his 1917 so-called ready-made sculpture <em>Fountain</em> to challenge then-prevailing conceptions about the nature of art. _____ Duchamp&rsquo;s <em>Fountain</em> did just that, raising the question of whether displaying any object in an art gallery could be said to transform the object&mdash;even, as Duchamp&rsquo;s sculpture was, a urinal&mdash;into a legitimate work of art.`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `In addition,` }, { id: `B`, text: `Similarly,` }, { id: `C`, text: `Instead,` }, { id: `D`, text: `Indeed,` }],
      answer: `D` },

    { id: `nic-rw-m2-22`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `While researching a topic, a student has taken the following notes:<ul><li>The Mohs scale of mineral hardness is a ten-point scale that orders minerals by hardness based on their ability to scratch other minerals.</li><li>Minerals with larger numbers are harder than minerals with smaller numbers and can leave visible scratches on them.</li><li>Minerals with smaller numbers are softer than minerals with larger numbers and cannot leave visible scratches on them.</li><li>The mineral apatite has a Mohs scale number of 5.</li><li>The mineral quartz has a Mohs scale number of 7.</li><li>The mineral diamond has a Mohs scale number of 10.</li></ul>`,
      prompt: `The student wants to emphasize how hard quartz is in relation to other minerals. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `Diamond is hard enough to scratch both apatite and quartz.` }, { id: `B`, text: `In the Mohs scale of mineral hardness, diamond (10) is ranked higher than apatite (5).` }, { id: `C`, text: `Diamond, apatite, and quartz can be ordered by hardness based on their ability to scratch other minerals.` }, { id: `D`, text: `Quartz is hard enough to scratch apatite but not hard enough to scratch diamond.` }],
      answer: `D` },

    { id: `nic-rw-m2-23`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `While researching a topic, a student has taken the following notes:<ul><li>The Mohs scale of mineral hardness is a ten-point scale that orders minerals by hardness based on their ability to scratch other minerals.</li><li>Minerals with larger numbers are harder than minerals with smaller numbers and can leave visible scratches on them.</li><li>Minerals with smaller numbers are softer than minerals with larger numbers and cannot leave visible scratches on them.</li><li>The mineral talc has a Mohs scale number of 1.</li><li>The mineral fluorite has a Mohs scale number of 4.</li><li>The mineral quartz has a Mohs scale number of 7.</li></ul>`,
      prompt: `The student wants to emphasize how hard fluorite is in relation to other minerals. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `Quartz is hard enough to scratch both talc and fluorite.` }, { id: `B`, text: `Fluorite is hard enough to scratch talc but not hard enough to scratch quartz.` }, { id: `C`, text: `In the Mohs scale of mineral hardness, quartz (7) is ranked higher than talc (1).` }, { id: `D`, text: `Quartz, talc, and fluorite can be ordered by hardness based on their ability to scratch other minerals.` }],
      answer: `B` },

    { id: `nic-rw-m2-24`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `While researching a topic, a student has taken the following notes:<ul><li>A copyright prevents a book&rsquo;s contents from being reproduced (published) without permission from the copyright holder.</li><li>When a book&rsquo;s copyright expires, the book enters the public domain and can be legally reproduced by anyone.</li><li><em>Cane</em> is a novel by Jean Toomer.</li><li>It entered the public domain in 2019.</li><li><em>Billy Budd, Sailor</em> is a novella by Herman Melville.</li><li>It entered the public domain in 2020.</li></ul>`,
      prompt: `The student wants to emphasize a similarity between <em>Cane</em> and <em>Billy Budd, Sailor</em>. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `<em>Cane</em>, a novel by Jean Toomer, entered the public domain in 2019, unlike Herman Melville&rsquo;s novella <em>Billy Budd, Sailor</em>, which would do so later.` }, { id: `B`, text: `<em>Cane</em>, a novel by Jean Toomer, and <em>Billy Budd, Sailor</em>, a novella by Herman Melville, recently entered the public domain.` }, { id: `C`, text: `The year was 2020, and the copyright to Herman Melville&rsquo;s <em>Billy Budd, Sailor</em> had finally expired.` }, { id: `D`, text: `<em>Cane</em> is a novel, whereas <em>Billy Budd, Sailor</em> is a novella.` }],
      answer: `B` },

    { id: `nic-rw-m2-25`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `While researching a topic, a student has taken the following notes:<ul><li><em>The Love Is Approaching</em> is a 1974 black-and-white linocut print by Namibian artist John Muafangejo.</li><li>It depicts a tranquil, everyday scene (two seated figures reaching for each other).</li><li><em>La Protesta</em> (&ldquo;The Protest&rdquo;) is a 1937 black-and-white linocut print by Mexican artist Leopoldo M&eacute;ndez.</li><li>It features a scene with an explicitly political point of view (a laborer raising his fist in protest).</li><li>Relief printing is a technique in which an image is carved onto a printing block, covered in ink or paint, and stamped onto paper.</li><li>Lino cutting is a type of relief printing that uses linoleum tile as the printing block.</li></ul>`,
      prompt: `The student wants to contrast the subject matter of the two prints. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `The print by M&eacute;ndez is a black-and-white linocut; by contrast, Muafangejo&rsquo;s is a relief print.` }, { id: `B`, text: `The scenes depicted in both works were first carved onto a printing block, then stamped onto paper.` }, { id: `C`, text: `M&eacute;ndez made <em>La Protesta</em> (&ldquo;The Protest&rdquo;) in 1937, while Muafangejo made <em>The Love Is Approaching</em> later, in 1974.` }, { id: `D`, text: `M&eacute;ndez&rsquo;s print expresses an explicitly political point of view, while Muafangejo depicts a tranquil, everyday scene.` }],
      answer: `D` },

    { id: `nic-rw-m2-26`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `While researching a topic, a student has taken the following notes:<ul><li>A sailing trip that goes in a complete circle around the world is called a circumnavigation.</li><li>Most circumnavigations include stops on land.</li><li>Clarisse Cremer is a French sailor.</li><li>Cremer sailed the boat <em>Banque Populaire X</em> on a nonstop, 87-day circumnavigation.</li><li>Asia Pajkowska is a Polish sailor.</li><li>Pajkowska sailed the boat <em>FanFan</em> on a nonstop, 216-day circumnavigation.</li></ul>`,
      prompt: `The student wants to make a generalization about circumnavigations. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `Pajkowska sailed <em>FanFan</em> around the world, while Cremer sailed <em>Banque Populaire X</em>.` }, { id: `B`, text: `A circumnavigation is defined as a sailing trip that goes in a complete circle around the world.` }, { id: `C`, text: `Pajkowska and Cremer have both embarked on sailing journeys around the world, also called circumnavigations.` }, { id: `D`, text: `Most circumnavigations include stops on land, but some circumnavigations are nonstop.` }],
      answer: `D` },

    { id: `nic-rw-m2-27`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `While researching a topic, a student has taken the following notes:<ul><li>Malapportionment is the over- or underrepresentation (relative to population size) of electoral districts in a governing body.</li><li>It is a common feature of representative governments.</li><li>There are 169 seats in Norway&rsquo;s supreme legislature (the Storting).</li><li>Seats are distributed by a formula that awards 1 point per resident and 1.8 points per unit of land.</li><li>Less populated rural districts with large tracts of land receive a disproportionate number of seats compared to smaller but more populated urban districts.</li></ul>`,
      prompt: `The student wants to refute a claim that malapportionment in the Storting favors small urban districts. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `Awarding more points per unit of land than points per resident, the formula for distributing Storting seats overrepresents less populated rural districts with large tracts of land.` }, { id: `B`, text: `Less populated rural districts are disproportionately underrepresented in the Storting, creating an unfair advantage for smaller but more populated urban districts.` }, { id: `C`, text: `It&rsquo;s untrue that malapportionment in the 169-seat Storting favors small urban districts; rather, the formula for distributing seats overrepresents more populated districts.` }, { id: `D`, text: `A common feature of representative governments, malapportionment occurs when electoral districts are over- or underrepresented.` }],
      answer: `A` },
  ];

  const MATH_M1 = [
    { id: `nic-math-m1-1`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `easy`, type: `mcq`,
      prompt: `<svg viewBox="0 0 300 300" role="img" aria-label="figure" style="max-width:300px;width:100%;display:block;margin:6px auto"><line x1='40' y1='20' x2='40' y2='280' stroke='var(--border)' stroke-width='0.5'/><line x1='70' y1='20' x2='70' y2='280' stroke='var(--border)' stroke-width='0.5'/><line x1='100' y1='20' x2='100' y2='280' stroke='var(--border)' stroke-width='0.5'/><line x1='130' y1='20' x2='130' y2='280' stroke='var(--border)' stroke-width='0.5'/><line x1='160' y1='20' x2='160' y2='280' stroke='var(--border)' stroke-width='0.5'/><line x1='190' y1='20' x2='190' y2='280' stroke='var(--border)' stroke-width='0.5'/><line x1='220' y1='20' x2='220' y2='280' stroke='var(--border)' stroke-width='0.5'/><line x1='250' y1='20' x2='250' y2='280' stroke='var(--border)' stroke-width='0.5'/><line x1='280' y1='20' x2='280' y2='280' stroke='var(--border)' stroke-width='0.5'/><line x1='40' y1='80' x2='280' y2='80' stroke='var(--border)' stroke-width='0.5'/><line x1='40' y1='120' x2='280' y2='120' stroke='var(--border)' stroke-width='0.5'/><line x1='40' y1='160' x2='280' y2='160' stroke='var(--border)' stroke-width='0.5'/><line x1='40' y1='200' x2='280' y2='200' stroke='var(--border)' stroke-width='0.5'/><line x1='40' y1='240' x2='280' y2='240' stroke='var(--border)' stroke-width='0.5'/><line x1='40' y1='40' x2='280' y2='40' stroke='var(--fg)' stroke-width='1.2'/><line x1='100' y1='20' x2='100' y2='280' stroke='var(--fg)' stroke-width='1.2'/><polyline points='43,276.6 55,234.8 70,201.6 85,178.2 100,160 115,145 130,132.4 160,112 190,95.6 220,81.8 250,70.2 280,60' fill='none' stroke='var(--fg)' stroke-width='2'/><circle cx='100' cy='160' r='3.6' fill='var(--fg)'/><text x='95' y='83' font-size='9' fill='var(--fg)' text-anchor='end'>&minus;2</text><text x='95' y='123' font-size='9' fill='var(--fg)' text-anchor='end'>&minus;4</text><text x='95' y='163' font-size='9' fill='var(--fg)' text-anchor='end'>&minus;6</text><text x='95' y='203' font-size='9' fill='var(--fg)' text-anchor='end'>&minus;8</text><text x='95' y='243' font-size='9' fill='var(--fg)' text-anchor='end'>&minus;10</text><text x='95' y='283' font-size='9' fill='var(--fg)' text-anchor='end'>&minus;12</text><text x='160' y='53' font-size='9' fill='var(--fg)' text-anchor='middle'>2</text><text x='220' y='53' font-size='9' fill='var(--fg)' text-anchor='middle'>4</text><text x='280' y='53' font-size='9' fill='var(--fg)' text-anchor='middle'>6</text><text x='290' y='38' font-size='11' fill='var(--fg)' font-style='italic'>x</text><text x='104' y='18' font-size='11' fill='var(--fg)' font-style='italic'>y</text></svg>The graph of the function <em>f</em> is shown, where <em>y</em> = <em>f</em>(<em>x</em>). What is the value of <em>f</em>(0)?`,
      options: [{ id: `A`, text: `&minus;6` }, { id: `B`, text: `&minus;4` }, { id: `C`, text: `&minus;3` }, { id: `D`, text: `6` }],
      answer: `A` },

    { id: `nic-math-m1-2`, domain: `Geometry and Trigonometry`, skill: `Lines, angles, and triangles`, difficulty: `easy`, type: `grid`,
      prompt: `<svg viewBox="0 0 300 175" role="img" aria-label="figure" style="max-width:300px;width:100%;display:block;margin:6px auto"><line x1='55' y1='50' x2='245' y2='120' stroke='var(--fg)' stroke-width='1.6'/><line x1='55' y1='120' x2='245' y2='50' stroke='var(--fg)' stroke-width='1.6'/><text x='118' y='90' font-size='13' fill='var(--fg)' font-style='italic'>r&deg;</text><text x='172' y='90' font-size='13' fill='var(--fg)' font-style='italic'>s&deg;</text></svg><div class="tiny faint" style="text-align:center;margin:2px 0 8px">Note: Figure not drawn to scale.</div>In the figure, two lines intersect at a point. If <em>r</em> = 61, what is the value of <em>s</em>?`,
      answer: [`61`] },

    { id: `nic-math-m1-3`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `easy`, type: `mcq`,
      prompt: `The function <em>f</em> is defined by <em>f</em>(<em>x</em>) = 5<em>x</em><sup>2</sup>. What is the value of <em>f</em>(7)?`,
      options: [{ id: `A`, text: `35` }, { id: `B`, text: `45` }, { id: `C`, text: `70` }, { id: `D`, text: `245` }],
      answer: `D` },

    { id: `nic-math-m1-4`, domain: `Algebra`, skill: `Systems of two linear equations`, difficulty: `easy`, type: `mcq`,
      prompt: `<div style='text-align:center;font-weight:600;margin:2px 0'>x + 5y = 5<br>x &minus; 5y = 7</div>The solution to the given system of equations is (<em>x</em>, <em>y</em>). What is the value of <em>x</em>?`,
      options: [{ id: `A`, text: `1.2` }, { id: `B`, text: `5` }, { id: `C`, text: `6` }, { id: `D`, text: `12` }],
      answer: `C` },

    { id: `nic-math-m1-5`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `easy`, type: `mcq`,
      prompt: `Which expression is equivalent to 6<em>x</em>(<em>x</em> + 3)?`,
      options: [{ id: `A`, text: `6<em>x</em><sup>2</sup> + 3` }, { id: `B`, text: `6<em>x</em><sup>2</sup> + 18<em>x</em>` }, { id: `C`, text: `7<em>x</em><sup>2</sup> + 3` }, { id: `D`, text: `7<em>x</em><sup>2</sup> + 9<em>x</em>` }],
      answer: `B` },

    { id: `nic-math-m1-6`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `The function <em>f</em> is defined by <em>f</em>(<em>x</em>) = 3<em>x</em><sup>5</sup>. In the <em>xy</em>-plane, the graph of <em>y</em> = <em>g</em>(<em>x</em>) is the result of shifting the graph of <em>y</em> = <em>f</em>(<em>x</em>) up 9 units. Which equation defines the function <em>g</em>?`,
      options: [{ id: `A`, text: `<em>g</em>(<em>x</em>) = 3<em>x</em><sup>5</sup> + 9` }, { id: `B`, text: `<em>g</em>(<em>x</em>) = 3<em>x</em><sup>5</sup> &minus; 9` }, { id: `C`, text: `<em>g</em>(<em>x</em>) = 3<em>x</em><sup>45</sup>` }, { id: `D`, text: `<em>g</em>(<em>x</em>) = 27<em>x</em><sup>5</sup>` }],
      answer: `A` },

    { id: `nic-math-m1-7`, domain: `Algebra`, skill: `Linear functions`, difficulty: `easy`, type: `mcq`,
      prompt: `For the linear function <em>f</em>, the graph of <em>y</em> = <em>f</em>(<em>x</em>) in the <em>xy</em>-plane has a slope of 69 and <em>f</em>(0) = 3. Which equation defines <em>f</em>?`,
      options: [{ id: `A`, text: `<em>f</em>(<em>x</em>) = 3<em>x</em>` }, { id: `B`, text: `<em>f</em>(<em>x</em>) = 3<em>x</em> + 3` }, { id: `C`, text: `<em>f</em>(<em>x</em>) = 69<em>x</em>` }, { id: `D`, text: `<em>f</em>(<em>x</em>) = 69<em>x</em> + 3` }],
      answer: `D` },

    { id: `nic-math-m1-8`, domain: `Problem-Solving and Data Analysis`, skill: `Percentages`, difficulty: `medium`, type: `mcq`,
      prompt: `5% of <em>w</em> is 741.41. What is the value of <em>w</em>?`,
      options: [{ id: `A`, text: `778.481` }, { id: `B`, text: `3,707.05` }, { id: `C`, text: `14,828.2` }, { id: `D`, text: `70,433.95` }],
      answer: `C` },

    { id: `nic-math-m1-9`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<svg viewBox="0 0 300 270" role="img" aria-label="figure" style="max-width:300px;width:100%;display:block;margin:6px auto"><line x1='70' y1='15' x2='70' y2='255' stroke='var(--border)' stroke-width='0.5'/><line x1='100' y1='15' x2='100' y2='255' stroke='var(--border)' stroke-width='0.5'/><line x1='130' y1='15' x2='130' y2='255' stroke='var(--border)' stroke-width='0.5'/><line x1='190' y1='15' x2='190' y2='255' stroke='var(--border)' stroke-width='0.5'/><line x1='220' y1='15' x2='220' y2='255' stroke='var(--border)' stroke-width='0.5'/><line x1='250' y1='15' x2='250' y2='255' stroke='var(--border)' stroke-width='0.5'/><line x1='40' y1='191' x2='280' y2='191' stroke='var(--border)' stroke-width='0.5'/><line x1='40' y1='159' x2='280' y2='159' stroke='var(--border)' stroke-width='0.5'/><line x1='40' y1='127' x2='280' y2='127' stroke='var(--border)' stroke-width='0.5'/><line x1='40' y1='95' x2='280' y2='95' stroke='var(--border)' stroke-width='0.5'/><line x1='40' y1='63' x2='280' y2='63' stroke='var(--border)' stroke-width='0.5'/><line x1='40' y1='31' x2='280' y2='31' stroke='var(--border)' stroke-width='0.5'/><line x1='40' y1='223' x2='280' y2='223' stroke='var(--fg)' stroke-width='1.2'/><line x1='160' y1='15' x2='160' y2='255' stroke='var(--fg)' stroke-width='1.2'/><polyline points='85,48 100,111 115,160 130,195 145,216 160,223 175,216 190,195 205,160 220,111 235,48' fill='none' stroke='var(--fg)' stroke-width='2'/><line x1='143' y1='255' x2='271' y2='15' stroke='var(--fg)' stroke-width='1.7'/><text x='100' y='236' font-size='9' fill='var(--fg)' text-anchor='middle'>&minus;4</text><text x='220' y='236' font-size='9' fill='var(--fg)' text-anchor='middle'>4</text><text x='155' y='98' font-size='9' fill='var(--fg)' text-anchor='end'>8</text><text x='155' y='34' font-size='9' fill='var(--fg)' text-anchor='end'>12</text><text x='286' y='221' font-size='11' fill='var(--fg)' font-style='italic'>x</text><text x='164' y='20' font-size='11' fill='var(--fg)' font-style='italic'>y</text></svg>The graph of a system of a linear and a quadratic equation is shown. What system is represented by the graph?`,
      options: [{ id: `A`, text: `<em>y</em> = &minus;(7/16)<em>x</em><sup>2</sup>, &nbsp; <em>y</em> = &minus;(7/4)<em>x</em>` }, { id: `B`, text: `<em>y</em> = &minus;(7/16)<em>x</em><sup>2</sup>, &nbsp; <em>y</em> = (7/4)<em>x</em>` }, { id: `C`, text: `<em>y</em> = (7/16)<em>x</em><sup>2</sup>, &nbsp; <em>y</em> = &minus;(7/4)<em>x</em>` }, { id: `D`, text: `<em>y</em> = (7/16)<em>x</em><sup>2</sup>, &nbsp; <em>y</em> = (7/4)<em>x</em>` }],
      answer: `D` },

    { id: `nic-math-m1-10`, domain: `Algebra`, skill: `Linear functions`, difficulty: `medium`, type: `grid`,
      prompt: `<div style='text-align:center;font-weight:600;margin:2px 0'><em>W</em>(<em>x</em>) = 4<em>x</em> + 80</div>The function <em>W</em> gives the total time, in minutes, it takes for a gardener to water <em>x</em> plants and mow the grass. According to the function, how many minutes does it take the gardener to mow the grass?`,
      answer: [`80`] },

    { id: `nic-math-m1-11`, domain: `Algebra`, skill: `Systems of two linear equations`, difficulty: `easy`, type: `mcq`,
      prompt: `<div style='text-align:center;font-weight:600;margin:2px 0'>19 = x + y<br>x &minus; y = 9</div>The solution to the given system of equations is (<em>x</em>, <em>y</em>). What is the value of <em>x</em>?`,
      options: [{ id: `A`, text: `9` }, { id: `B`, text: `10` }, { id: `C`, text: `14` }, { id: `D`, text: `19` }],
      answer: `C` },

    { id: `nic-math-m1-12`, domain: `Geometry and Trigonometry`, skill: `Circles`, difficulty: `medium`, type: `mcq`,
      prompt: `<div style='text-align:center;font-weight:600;margin:2px 0'>x<sup>2</sup> &minus; 16x + y<sup>2</sup> &minus; 10y &minus; 55 = 0</div>In the <em>xy</em>-plane, the graph of the given equation is a circle. If this circle is inscribed in a square, what is the perimeter of the square?`,
      options: [{ id: `A`, text: `24` }, { id: `B`, text: `48` }, { id: `C`, text: `96` }, { id: `D`, text: `220` }],
      answer: `C` },

    { id: `nic-math-m1-13`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `medium`, type: `mcq`,
      prompt: `If 5(3<em>x</em> + 6) = 3(3<em>x</em> + 6) + 78, what is the value of 3<em>x</em> + 6?`,
      options: [{ id: `A`, text: `78` }, { id: `B`, text: `39` }, { id: `C`, text: `33` }, { id: `D`, text: `11` }],
      answer: `B` },

    { id: `nic-math-m1-14`, domain: `Algebra`, skill: `Linear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `If <em>f</em>(<em>x</em>) = <em>x</em> + 5 and <em>g</em>(<em>x</em>) = 5<em>x</em>, what is the value of 7<em>f</em>(4) &minus; <em>g</em>(4)?`,
      options: [{ id: `A`, text: `&minus;11` }, { id: `B`, text: `13` }, { id: `C`, text: `35` }, { id: `D`, text: `43` }],
      answer: `D` },

    { id: `nic-math-m1-15`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `hard`, type: `grid`,
      prompt: `<div style='text-align:center;font-weight:600;margin:2px 0'><em>C</em>(<em>t</em>) = 240(53/52)<sup>(<em>t</em> &minus; 15)</sup> + 7</div>The function <em>C</em> gives the estimated number of cephalopods, a class of marine animal, in a certain area, where <em>t</em> is the number of months since a study began. How many months after the study began was the number of cephalopods in the area estimated to be 247?`,
      answer: [`15`] },

    { id: `nic-math-m1-16`, domain: `Problem-Solving and Data Analysis`, skill: `Ratios, rates, proportional relationships, and units`, difficulty: `medium`, type: `grid`,
      prompt: `An object moves at a speed of 3/17 feet per second. What is this speed in <strong>yards</strong> per second? (3 feet = 1 yard)`,
      answer: [`1/17`] },

    { id: `nic-math-m1-17`, domain: `Algebra`, skill: `Linear functions`, difficulty: `medium`, type: `grid`,
      prompt: `<table style="border-collapse:collapse;margin:6px auto"><tr><th style="border:1px solid var(--border);padding:3px 12px"><em>x</em></th><th style="border:1px solid var(--border);padding:3px 12px"><em>g</em>(<em>x</em>)</th></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">1</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">34</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">2</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">31</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">3</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">28</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">4</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">25</td></tr></table>For the linear function <em>g</em>, the table shows four values of <em>x</em> and their corresponding values of <em>g</em>(<em>x</em>). The function can be written as <em>g</em>(<em>x</em>) = <em>mx</em> + <em>b</em>, where <em>m</em> and <em>b</em> are constants. What is the value of <em>b</em>?`,
      answer: [`37`] },

    { id: `nic-math-m1-18`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `The current value of a house is $174,000, and this value increases by 2.4% each year from the value of the previous year. Which function <em>f</em> gives the value, in dollars, of the house <em>x</em> years from now?`,
      options: [{ id: `A`, text: `<em>f</em>(<em>x</em>) = 174,000(0.024)<sup><em>x</em></sup>` }, { id: `B`, text: `<em>f</em>(<em>x</em>) = 174,000(0.24)<sup><em>x</em></sup>` }, { id: `C`, text: `<em>f</em>(<em>x</em>) = 174,000(1.024)<sup><em>x</em></sup>` }, { id: `D`, text: `<em>f</em>(<em>x</em>) = 174,000(1.24)<sup><em>x</em></sup>` }],
      answer: `C` },

    { id: `nic-math-m1-19`, domain: `Geometry and Trigonometry`, skill: `Right triangles and trigonometry`, difficulty: `medium`, type: `mcq`,
      prompt: `What is the value of sin 18&pi;?`,
      options: [{ id: `A`, text: `0` }, { id: `B`, text: `1/2` }, { id: `C`, text: `&radic;2/2` }, { id: `D`, text: `1` }],
      answer: `A` },

    { id: `nic-math-m1-20`, domain: `Geometry and Trigonometry`, skill: `Right triangles and trigonometry`, difficulty: `hard`, type: `mcq`,
      prompt: `<svg viewBox="0 0 300 220" role="img" aria-label="right triangle" style="max-width:300px;width:100%;display:block;margin:6px auto"><polygon points="46,182 250,182 250,32" fill="none" stroke="currentColor" stroke-width="1.7"/><polyline points="237,182 237,169 250,169" fill="none" stroke="currentColor" stroke-width="1.1"/><text x="32" y="198" font-size="14" font-style="italic" fill="currentColor">S</text><text x="258" y="198" font-size="14" font-style="italic" fill="currentColor">R</text><text x="258" y="26" font-size="14" font-style="italic" fill="currentColor">Q</text><text x="139" y="199" font-size="13" fill="currentColor" text-anchor="middle">17</text></svg><div class="tiny faint" style="text-align:center;margin:2px 0 8px">Figure not drawn to scale.</div>In triangle <em>QRS</em> shown, <em>QR</em> &lt; <em>RS</em>. Which expression represents the length of <em>QS</em>?`,
      options: [{ id: `A`, text: `17 cos <em>Q</em>` }, { id: `B`, text: `17 sin <em>Q</em>` }, { id: `C`, text: `17 / cos <em>Q</em>` }, { id: `D`, text: `17 / sin <em>Q</em>` }],
      answer: `D` },

    { id: `nic-math-m1-21`, domain: `Algebra`, skill: `Systems of two linear equations`, difficulty: `hard`, type: `mcq`,
      prompt: `<div style='text-align:center;font-weight:600;margin:2px 0'>(1/9)<em>x</em> &minus; (3<em>r</em>/7)<em>y</em> = 34</div>One of the equations in a system of two linear equations is given, where <em>r</em> is a nonzero constant. The system has no solution. If the other equation in the system is graphed in the <em>xy</em>-plane, what is the slope of the graph?`,
      options: [{ id: `A`, text: `&minus;27<em>r</em>/7` }, { id: `B`, text: `&minus;27/(7<em>r</em>)` }, { id: `C`, text: `7<em>r</em>/27` }, { id: `D`, text: `7/(27<em>r</em>)` }],
      answer: `D` },

    { id: `nic-math-m1-22`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `medium`, type: `mcq`,
      prompt: `A machine makes 8-inch, 9-inch, and 3-inch parts. During a certain day, the number of 8-inch parts that the machine makes is 4 times the number <em>n</em> of 9-inch parts, and the number of 3-inch parts is 30. During this day, the machine makes 100 parts total. Which equation represents this situation?`,
      options: [{ id: `A`, text: `8(4<em>n</em>) + 9<em>n</em> + 3(30) = 100` }, { id: `B`, text: `8<em>n</em> + 9<em>n</em> + 3<em>n</em> = 100` }, { id: `C`, text: `4<em>n</em> + 30 = 100` }, { id: `D`, text: `5<em>n</em> + 30 = 100` }],
      answer: `D` },
  ];

  const MATH_M2 = [
    { id: `nic-math-m2-1`, domain: `Algebra`, skill: `Linear equations in two variables`, difficulty: `easy`, type: `mcq`,
      prompt: `A line in the <em>xy</em>-plane has a slope of &minus;1/4 and passes through the point (0, 19). Which equation represents this line?`,
      options: [{ id: `A`, text: `<em>y</em> = &minus;(1/4)<em>x</em> &minus; 19` }, { id: `B`, text: `<em>y</em> = &minus;(1/4)<em>x</em> + 19` }, { id: `C`, text: `<em>y</em> = (1/4)<em>x</em> &minus; 19` }, { id: `D`, text: `<em>y</em> = (1/4)<em>x</em> + 19` }],
      answer: `B` },

    { id: `nic-math-m2-2`, domain: `Algebra`, skill: `Linear inequalities in one or two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `Cristina was elected to the city council. Each city council person is required to attend at least 21 of the 27 scheduled council meetings in a year to keep their position. Which inequality represents the number of city council meetings, <em>x</em>, Cristina must attend in a year to keep her position on the city council?`,
      options: [{ id: `A`, text: `<em>x</em> &le; 21` }, { id: `B`, text: `<em>x</em> &ge; 48` }, { id: `C`, text: `21 &le; <em>x</em> &le; 27` }, { id: `D`, text: `27 &le; <em>x</em> &le; 48` }],
      answer: `C` },

    { id: `nic-math-m2-3`, domain: `Algebra`, skill: `Linear functions`, difficulty: `easy`, type: `mcq`,
      prompt: `The function <em>f</em>(<em>x</em>) = &minus;40<em>x</em> + 280 gives the predicted height above the ground <em>f</em>(<em>x</em>), in feet, of a model airplane <em>x</em> minutes after it begins to descend. What is the predicted height above the ground, in feet, of the model airplane 4 minutes after it begins to descend?`,
      options: [{ id: `A`, text: `120` }, { id: `B`, text: `160` }, { id: `C`, text: `240` }, { id: `D`, text: `440` }],
      answer: `A` },

    { id: `nic-math-m2-4`, domain: `Algebra`, skill: `Linear equations in two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `<div style='text-align:center;margin:2px 0'><em>v</em> = &minus;<em>w</em>/(188<em>x</em>)</div>The given equation relates the distinct positive numbers <em>v</em>, <em>w</em>, and <em>x</em>. Which equation correctly expresses <em>w</em> in terms of <em>v</em> and <em>x</em>?`,
      options: [{ id: `A`, text: `<em>w</em> = &minus;188<em>vx</em>` }, { id: `B`, text: `<em>w</em> = &minus;188<em>v</em>/<em>x</em>` }, { id: `C`, text: `<em>w</em> = &minus;<em>x</em>/(188<em>v</em>)` }, { id: `D`, text: `<em>w</em> = <em>v</em> + 188<em>x</em>` }],
      answer: `A` },

    { id: `nic-math-m2-5`, domain: `Advanced Math`, skill: `Equivalent expressions`, difficulty: `medium`, type: `mcq`,
      prompt: `Which expression is equivalent to (<em>x</em> + 8)<sup>2</sup> + 14(<em>x</em> + 8) + 49?`,
      options: [{ id: `A`, text: `(<em>x</em> + 15)<sup>2</sup>` }, { id: `B`, text: `(<em>x</em> + 7)<sup>2</sup>` }, { id: `C`, text: `8(<em>x</em> + 7)<sup>2</sup>` }, { id: `D`, text: `7(<em>x</em> + 8)<sup>2</sup>` }],
      answer: `A` },

    { id: `nic-math-m2-6`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `easy`, type: `mcq`,
      prompt: `If 8(<em>x</em> + 7) = 7(<em>x</em> + 7) + 68, what is the value of <em>x</em> + 7?`,
      options: [{ id: `A`, text: `&minus;7` }, { id: `B`, text: `61` }, { id: `C`, text: `68` }, { id: `D`, text: `75` }],
      answer: `C` },

    { id: `nic-math-m2-7`, domain: `Problem-Solving and Data Analysis`, skill: `Two-variable data: models and scatterplots`, difficulty: `medium`, type: `mcq`,
      prompt: `<svg viewBox="0 0 340 250" role="img" aria-label="figure" style="max-width:340px;width:100%;display:block;margin:6px auto"><line x1='45' y1='158' x2='315' y2='158' stroke='var(--border)' stroke-width='0.6'/><line x1='45' y1='116' x2='315' y2='116' stroke='var(--border)' stroke-width='0.6'/><line x1='45' y1='74' x2='315' y2='74' stroke='var(--border)' stroke-width='0.6'/><line x1='45' y1='32' x2='315' y2='32' stroke='var(--border)' stroke-width='0.6'/><line x1='45' y1='200' x2='320' y2='200' stroke='var(--fg)' stroke-width='1.4'/><line x1='45' y1='200' x2='45' y2='26' stroke='var(--fg)' stroke-width='1.4'/><line x1='45' y1='168.9' x2='315' y2='45.9' stroke='var(--fg)' stroke-width='1.8'/><circle cx='72' cy='172.7' r='3.2' fill='var(--fg)'/><circle cx='99' cy='126.5' r='3.2' fill='var(--fg)'/><circle cx='153' cy='110.8' r='3.2' fill='var(--fg)'/><circle cx='180' cy='118.1' r='3.2' fill='var(--fg)'/><circle cx='207' cy='83.5' r='3.2' fill='var(--fg)'/><circle cx='234' cy='90.8' r='3.2' fill='var(--fg)'/><text x='40' y='161' font-size='9' fill='var(--fg)' text-anchor='end'>200</text><text x='40' y='119' font-size='9' fill='var(--fg)' text-anchor='end'>400</text><text x='40' y='77' font-size='9' fill='var(--fg)' text-anchor='end'>600</text><text x='40' y='35' font-size='9' fill='var(--fg)' text-anchor='end'>800</text><text x='72' y='213' font-size='9' fill='var(--fg)' text-anchor='middle'>1</text><text x='99' y='213' font-size='9' fill='var(--fg)' text-anchor='middle'>2</text><text x='126' y='213' font-size='9' fill='var(--fg)' text-anchor='middle'>3</text><text x='153' y='213' font-size='9' fill='var(--fg)' text-anchor='middle'>4</text><text x='180' y='213' font-size='9' fill='var(--fg)' text-anchor='middle'>5</text><text x='207' y='213' font-size='9' fill='var(--fg)' text-anchor='middle'>6</text><text x='234' y='213' font-size='9' fill='var(--fg)' text-anchor='middle'>7</text><text x='261' y='213' font-size='9' fill='var(--fg)' text-anchor='middle'>8</text><text x='288' y='213' font-size='9' fill='var(--fg)' text-anchor='middle'>9</text><text x='315' y='213' font-size='9' fill='var(--fg)' text-anchor='middle'>10</text><text x='323' y='204' font-size='11' font-style='italic' fill='var(--fg)'>x</text></svg>Which of the following best represents the line of best fit shown?`,
      options: [{ id: `A`, text: `<em>y</em> = 148.13 + 0.02<em>x</em>` }, { id: `B`, text: `<em>y</em> = 148.13 + 0.59<em>x</em>` }, { id: `C`, text: `<em>y</em> = 148.13 + 48.61<em>x</em>` }, { id: `D`, text: `<em>y</em> = 148.13 + 58.61<em>x</em>` }],
      answer: `D` },

    { id: `nic-math-m2-8`, domain: `Geometry and Trigonometry`, skill: `Right triangles and trigonometry`, difficulty: `medium`, type: `mcq`,
      prompt: `In triangle <em>ABC</em>, angle <em>B</em> is a right angle. The length of side <em>AB</em> is 10&radic;39 and the length of side <em>BC</em> is 24&radic;39. What is the length of side <em>AC</em>?`,
      options: [{ id: `A`, text: `14&radic;39` }, { id: `B`, text: `26&radic;39` }, { id: `C`, text: `34&radic;39` }, { id: `D`, text: `&radic;(34 &middot; 39)` }],
      answer: `B` },

    { id: `nic-math-m2-9`, domain: `Algebra`, skill: `Linear inequalities in one or two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `To cut a lawn, Antwan charges a fee of $10.00 for his equipment and $8.50 per hour spent cutting a lawn. Taylor charges a fee of $7.00 for her equipment and $9.50 per hour spent cutting a lawn. If <em>x</em> represents the number of hours spent cutting a lawn, what are all the values of <em>x</em> for which Taylor&rsquo;s total charge is greater than Antwan&rsquo;s total charge?`,
      options: [{ id: `A`, text: `2 &le; <em>x</em> &le; 3` }, { id: `B`, text: `3 &le; <em>x</em> &le; 4` }, { id: `C`, text: `<em>x</em> &lt; 2` }, { id: `D`, text: `<em>x</em> &gt; 3` }],
      answer: `D` },

    { id: `nic-math-m2-10`, domain: `Algebra`, skill: `Linear equations in two variables`, difficulty: `medium`, type: `grid`,
      prompt: `In the <em>xy</em>-plane, line <em>p</em> has a slope of 3/4 and an <em>x</em>-intercept of (16, 0). What is the <em>y</em>-coordinate of the <em>y</em>-intercept of line <em>p</em>?`,
      answer: [`-12`] },

    { id: `nic-math-m2-11`, domain: `Problem-Solving and Data Analysis`, skill: `Ratios, rates, proportional relationships, and units`, difficulty: `medium`, type: `mcq`,
      prompt: `<table style="border-collapse:collapse;margin:6px auto"><tr><th style="border:1px solid var(--border);padding:3px 12px"></th><th style="border:1px solid var(--border);padding:3px 12px">Even integers</th><th style="border:1px solid var(--border);padding:3px 12px">Odd integers</th><th style="border:1px solid var(--border);padding:3px 12px">Total</th></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">List A</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">12</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">44</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">56</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">List B</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">40</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">4</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">44</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Total</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">52</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">48</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">100</td></tr></table>The given table shows the number of even and odd integers contained in list A and list B. No integer is contained in both lists. What fraction of the even integers represented in the table are in list A?`,
      options: [{ id: `A`, text: `12/52` }, { id: `B`, text: `12/56` }, { id: `C`, text: `52/100` }, { id: `D`, text: `52/56` }],
      answer: `A` },

    { id: `nic-math-m2-12`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `In a certain state, the population of pheasants, a type of bird, is estimated each year by counting the number of pheasants observed along certain roads in the state. On average, each year from 2005 to 2015 the number of pheasants counted per mile of road decreased by 3.5% of the number of pheasants per mile of road the previous year. Based on this average, if there were 6.22 pheasants per mile of road in this state in 2005, which of the following best approximates the number of pheasants per mile of road in 2015?`,
      options: [{ id: `A`, text: `0.965(6.22)<sup>10</sup>` }, { id: `B`, text: `1.035(6.22)<sup>10</sup>` }, { id: `C`, text: `6.22(0.035)<sup>10</sup>` }, { id: `D`, text: `6.22(0.965)<sup>10</sup>` }],
      answer: `D` },

    { id: `nic-math-m2-13`, domain: `Algebra`, skill: `Linear functions`, difficulty: `easy`, type: `grid`,
      prompt: `The function <em>g</em> is defined by <em>g</em>(<em>x</em>) = 3<em>x</em>. For what value of <em>x</em> is <em>g</em>(<em>x</em>) = 12?`,
      answer: [`4`] },

    { id: `nic-math-m2-14`, domain: `Advanced Math`, skill: `Nonlinear equations in one variable and systems of equations in two variables`, difficulty: `hard`, type: `mcq`,
      prompt: `<div style='text-align:center;margin:2px 0'>2<em>x</em><sup>2</sup> &minus; 12<em>x</em> &minus; 13 = 0</div>One solution to the given equation can be written as <em>x</em> = <em>h</em> &minus; (1/2)&radic;<em>k</em>, where <em>h</em> and <em>k</em> are integer constants. What is the value of <em>h</em> + <em>k</em>?`,
      options: [{ id: `A`, text: `13` }, { id: `B`, text: `14` }, { id: `C`, text: `31` }, { id: `D`, text: `65` }],
      answer: `D` },

    { id: `nic-math-m2-15`, domain: `Problem-Solving and Data Analysis`, skill: `Distributions and measures of center and spread`, difficulty: `hard`, type: `mcq`,
      prompt: `Data set F consists of 55 integers, where the value of each integer is between 150 and 260. Data set G consists of the same 55 integers in data set F as well as the integer 10. Which of the following must be less for data set G than for data set F?<br>I. The mean<br>II. The median`,
      options: [{ id: `A`, text: `I only` }, { id: `B`, text: `II only` }, { id: `C`, text: `I and II` }, { id: `D`, text: `Neither I nor II` }],
      answer: `A` },

    { id: `nic-math-m2-16`, domain: `Problem-Solving and Data Analysis`, skill: `Percentages`, difficulty: `medium`, type: `mcq`,
      prompt: `A gallery had <em>x</em> artifacts in a collection. When more artifacts were added to the collection, the number of artifacts increased by 149%. What is the resulting number of artifacts in the collection in terms of <em>x</em>?`,
      options: [{ id: `A`, text: `5.10<em>x</em>` }, { id: `B`, text: `0.51<em>x</em>` }, { id: `C`, text: `1.49<em>x</em>` }, { id: `D`, text: `2.49<em>x</em>` }],
      answer: `D` },

    { id: `nic-math-m2-17`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `hard`, type: `grid`,
      prompt: `The function <em>f</em> is defined by <em>f</em>(<em>x</em>) = <em>a</em><sup><em>x</em></sup> + <em>b</em>, where <em>a</em> and <em>b</em> are constants and <em>a</em> &gt; 0. In the <em>xy</em>-plane, the graph of <em>y</em> = <em>f</em>(<em>x</em>) has a <em>y</em>-intercept at (0, &minus;20) and passes through the point (2, 43). What is the value of <em>a</em> &minus; <em>b</em>?`,
      answer: [`29`] },

    { id: `nic-math-m2-18`, domain: `Algebra`, skill: `Linear equations in two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `One gallon of sealant costs $23 and will cover 250 square feet of a surface. A deck has a total surface area of <em>d</em> square feet. Which equation represents the cost <em>c</em>, in dollars, of the sealant needed to cover the deck twice?`,
      options: [{ id: `A`, text: `<em>c</em> = 250<em>d</em>/23` }, { id: `B`, text: `<em>c</em> = 500<em>d</em>/23` }, { id: `C`, text: `<em>c</em> = 23(<em>d</em>/125)` }, { id: `D`, text: `<em>c</em> = 23(<em>d</em>/250)` }],
      answer: `C` },

    { id: `nic-math-m2-19`, domain: `Geometry and Trigonometry`, skill: `Area and volume`, difficulty: `hard`, type: `mcq`,
      prompt: `A right square pyramid has a height of 11 centimeters (cm). A second right square pyramid has a height of 22 centimeters. The area of the bases of each of the two pyramids is 100 cm<sup>2</sup>. Which of the following is closest to the difference in the surface area of the second pyramid and the surface area of the first pyramid, in cm<sup>2</sup>?`,
      options: [{ id: `A`, text: `209` }, { id: `B`, text: `220` }, { id: `C`, text: `367` }, { id: `D`, text: `551` }],
      answer: `A` },

    { id: `nic-math-m2-20`, domain: `Problem-Solving and Data Analysis`, skill: `Ratios, rates, proportional relationships, and units`, difficulty: `hard`, type: `grid`,
      prompt: `An object&rsquo;s speed is increasing at a rate of 5.70 meters per second squared. What is this rate, in miles per minute squared, rounded to the nearest tenth? (Use 1 mile = 1,609 meters.)`,
      answer: [`12.8`, `12.75`, `12.753`] },

    { id: `nic-math-m2-21`, domain: `Geometry and Trigonometry`, skill: `Right triangles and trigonometry`, difficulty: `hard`, type: `grid`,
      prompt: `<svg viewBox="0 0 320 230" role="img" aria-label="figure" style="max-width:320px;width:100%;display:block;margin:6px auto"><polygon points='80,55 80,180 300,180' fill='none' stroke='var(--fg)' stroke-width='1.8'/><polyline points='80,168 92,168 92,180' fill='none' stroke='var(--fg)' stroke-width='1.1'/><text x='72' y='50' font-size='14' font-style='italic' fill='var(--fg)'>A</text><text x='70' y='192' font-size='14' font-style='italic' fill='var(--fg)'>B</text><text x='305' y='192' font-size='14' font-style='italic' fill='var(--fg)'>C</text><text x='205' y='108' font-size='14' fill='var(--fg)'>32</text><text x='160' y='222' font-size='10' fill='var(--fg)' text-anchor='middle' opacity='0.8'>Note: Figure not drawn to scale.</text></svg>For triangle <em>ABC</em>, the length of <em>AB</em> is 11 less than the length of <em>AC</em>. Point <em>D</em> (not shown) lies on <em>AC</em> such that <em>BD</em> (not shown) is perpendicular to <em>AC</em>. What is the value of <em>BC</em>/<em>BD</em>?`,
      answer: [`32/21`, `1.523`, `1.52`] },

    { id: `nic-math-m2-22`, domain: `Advanced Math`, skill: `Nonlinear equations in one variable and systems of equations in two variables`, difficulty: `hard`, type: `grid`,
      prompt: `<div style='text-align:center;margin:2px 0'>1/(<em>cx</em>) = <em>x</em>/148 + 1/<em>c</em></div>In the given equation, <em>c</em> is a constant. If the equation has exactly one solution, what is the value of <em>c</em>?`,
      answer: [`-37`] },
  ];

  Apex.bank.register({
    id: "dsat-2024-11-int-c",
    title: "November 2024",
    type: "digital",
    region: "Int",
    version: "C",
    year: 2024,
    monthNum: 11,
    tagline: "International · Version C",
    description: "Digital SAT — November 2024 International prediction form, Version C (RW reordered into official SAT test order; math ordered easy to hard).",
    adaptive: false,
    sections: [
      { id: "rw", modules: [
        { id: "nic-rw-m1", stage: 1, name: "Reading and Writing — Module 1", minutes: 32, questions: RW_M1 },
        { id: "nic-rw-m2", stage: 2, variant: "hard", name: "Reading and Writing — Module 2 (Hard)", minutes: 32, questions: RW_M2 },
      ] },
      { id: "math", modules: [
        { id: "nic-math-m1", stage: 1, name: "Math — Module 1", minutes: 35, calculator: true, questions: MATH_M1 },
        { id: "nic-math-m2", stage: 2, variant: "hard", name: "Math — Module 2 (Hard)", minutes: 35, calculator: true, questions: MATH_M2 },
      ] },
    ],
  });
})();
