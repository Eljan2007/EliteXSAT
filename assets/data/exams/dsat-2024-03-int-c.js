/* Digital SAT - March 2024 International Form C. Both Module 2s Hard. Independently solved. Q21/Q22 Math-M2 source defects flagged in build log. No explanations. COMPLETE. */
(function () {
  const RW_M1 = [
    { id: `m3ic-rw-m1-1`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The swordfish can swim very fast&mdash;up to 97 kilometers per hour (km/hr)&mdash;but it is significantly slower than the golden eagle, which can fly at speeds up to 320 km/hr. The _____ between these two speeds is not surprising, however, because the features that are most useful for swimming through water tend to be more limiting on top speeds than the features that are best suited for flying through the air.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `competition` }, { id: `B`, text: `equivalence` }, { id: `C`, text: `interaction` }, { id: `D`, text: `disparity` }],
      answer: `D` },

    { id: `m3ic-rw-m1-2`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The early British postal system required the cost of mail delivery to be paid upon receipt, a system which encouraged inventive strategies by the intended recipient to avoid payment. To improve this system, _____ were proposed in 1837, including the use of a postage stamp, a small receipt pasted to the mail indicating that delivery costs had been paid by the sender.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `investigations` }, { id: `B`, text: `expansions` }, { id: `C`, text: `reforms` }, { id: `D`, text: `possessions` }],
      answer: `C` },

    { id: `m3ic-rw-m1-3`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Consumers usually _____ rising prices of nonessential products, such as video games or jewelry, by purchasing fewer of those products. When the prices fall, consumers usually react the opposite way, by purchasing more of those products.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `differ from` }, { id: `B`, text: `think of` }, { id: `C`, text: `respond to` }, { id: `D`, text: `agree with` }],
      answer: `C` },

    { id: `m3ic-rw-m1-4`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Cuttlefish appear to be surprisingly _____ at exercising self-control: in a 2021 study conducted by behavioral ecologist Alexandra Schnell, these cephalopods routinely demonstrated restraint by delaying gratification, waiting for a favorite treat instead of instantly devouring a readily available meal.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `awkward` }, { id: `B`, text: `imaginative` }, { id: `C`, text: `manageable` }, { id: `D`, text: `competent` }],
      answer: `D` },

    { id: `m3ic-rw-m1-5`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Baleen whales eat up to 30 percent of their total body mass in krill (tiny shrimplike creatures) per day. <u>So in one day, a humpback whale weighing 30,000 kg could eat 9,000 kg, while a blue whale weighing 150,000 kg could ingest a whopping 45,000 kg.</u> Over the last century, baleen whale populations have declined, and contrary to some scientists' expectations, so have krill populations. Matthew S. Savoca and colleagues resolve this apparent discrepancy by pointing out that baleen whales cycle iron in the ocean, helping support phytoplankton populations, which, in turn, sustain krill populations.</p>`,
      prompt: `Which choice best describes the function of the underlined sentence in the text as a whole?`,
      options: [{ id: `A`, text: `It presents instances that seem to refute a claim presented earlier in the text.` }, { id: `B`, text: `It provides examples of a phenomenon described earlier in the text.` }, { id: `C`, text: `It introduces a surprising series of events that is explained later in the text.` }, { id: `D`, text: `It describes a long-standing belief about baleen whales that the text goes on to refute.` }],
      answer: `B` },

    { id: `m3ic-rw-m1-6`, domain: `Information and Ideas`, skill: `Cross-Text Connections`, difficulty: `hard`, type: `mcq`,
      passage: `<p><strong>Text 1</strong></p><p>In 2015 Gaziantep, Turkey, was named a City of Gastronomy by UNESCO in recognition of the city's unique food culture. <u>The honor is well known among both residents of the city and tourists who visit.</u> It's obvious that the selection of Gaziantep by UNESCO has brought awareness to local recipes, cooking practices, and chefs and has provided a boost to the city's tourism industry.</p><p><strong>Text 2</strong></p><p>Many residents of Gaziantep hoped that food tourism would increase after the city was chosen as a City of Gastronomy in 2015. However, as researcher Eerang Park and colleagues argue, cities must still create effective marketing strategies to benefit fully from being named a City of Gastronomy. Without an intentional effort to promote the city's food scene, many current and potential visitors to Gaziantep may not even be aware that it's home to uniquely delicious food.</p>`,
      prompt: `Based on the texts, how would the author of Text 2 most likely respond to the underlined claim in Text 1?`,
      options: [{ id: `A`, text: `By suggesting that Gaziantep's status as a City of Gastronomy may not be well known outside of Turkey` }, { id: `B`, text: `By arguing that UNESCO's recognition of Gaziantep was well deserved because of the city's delicious food` }, { id: `C`, text: `By noting that there are other benefits to being named a City of Gastronomy besides increased tourism` }, { id: `D`, text: `By claiming that Gaziantep's chefs were mainly responsible for the city's recognition by UNESCO` }],
      answer: `A` },

    { id: `m3ic-rw-m1-7`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The following text is from Yung Wing's 1909 memoir <em>My Life in China and America.</em></p><p>We landed in New York on the 12th of April, 1847, after a passage of ninety-eight days of unprecedented fair weather. The New York of 1847 was altogether a different city from the New York of 1909. It was a city of only 250,000 or 300,000 inhabitants; now it is a metropolis rivaling London in population, wealth and commerce. The whole of Manhattan Island is turned into a city of skyscrapers, churches and palatial residences.</p>`,
      prompt: `Based on the passage, how does Yung perceive New York to have changed between 1847 and 1909?`,
      options: [{ id: `A`, text: `The city has become more developed and populated.` }, { id: `B`, text: `The architecture of the city has become more practical and less appealing.` }, { id: `C`, text: `The city's residents have become more politically active.` }, { id: `D`, text: `The city's population has become much more diverse than London's.` }],
      answer: `A` },

    { id: `m3ic-rw-m1-8`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Tanya Tagaq is a writer and musician and a member of the Inuit community of Cambridge Bay in northern Canada. Critics and fellow writers have praised her work for combining traditional Inuit stories with popular genres of literature, such as fantasy fiction. But Tagaq is not the only Indigenous writer to blend traditional stories with popular literature. In the 2020 novel <em>The Only Good Indians,</em> Stephen Graham Jones successfully blended the oral storytelling tradition of his tribe, the Blackfeet Nation, with horror fiction.</p>`,
      prompt: `Which choice best states the main idea of the text?`,
      options: [{ id: `A`, text: `Non-Indigenous authors should consider the expectations of Indigenous readers.` }, { id: `B`, text: `Several famous Indigenous writers increased their book sales when they began incorporating traditional stories.` }, { id: `C`, text: `Recent Indigenous fiction writers are mixing traditional stories with popular literary genres.` }, { id: `D`, text: `The success of Tanya Tagaq has influenced non-Indigenous authors who write in popular literary genres.` }],
      answer: `C` },

    { id: `m3ic-rw-m1-9`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `easy`, type: `mcq`,
      passage: `<p><strong>Home Video Games and Computer Games of the 1980s</strong></p><table border='1' style='border-collapse:collapse;text-align:left' cellpadding='5'><tr><th>Title</th><th>System(s)</th><th>Genre</th><th>Developer</th></tr><tr><td><em>The Last Ninja</em></td><td>Commodore 64</td><td>adventure</td><td>System 3</td></tr><tr><td><em>Donkey Kong</em></td><td>multiple systems</td><td>platformer</td><td>Nintendo R&amp;D1</td></tr><tr><td><em>Frogger</em></td><td>multiple systems</td><td>action</td><td>Konami</td></tr><tr><td><em>Super Mario Brothers 2</em></td><td>Nintendo Entertainment System</td><td>platformer</td><td>Nintendo EAD</td></tr></table><p>A student is writing a research paper on the global rise of the home video game industry during the 1980s. The student wants to know the developer of the game <em>Frogger.</em> The student finds that the developer was _____</p>`,
      prompt: `Which choice most effectively uses data from the table to complete the statement?`,
      options: [{ id: `A`, text: `Konami.` }, { id: `B`, text: `Nintendo EAD.` }, { id: `C`, text: `Nintendo R&amp;D1.` }, { id: `D`, text: `System 3.` }],
      answer: `A` },

    { id: `m3ic-rw-m1-10`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Researchers Narelle Haworth and Amy Schramm studied bicycling behavior in Queensland, Australia. Haworth and Schramm asked adult bike riders questions about their level of experience, reasons for riding a bike, and route preferences. The researchers claim that <u>experienced riders who mainly bike to work tend to prefer routes that reduce their travel time.</u></p>`,
      prompt: `Which survey response from a bike rider in Queensland would best support the underlined claim?`,
      options: [{ id: `A`, text: `&ldquo;I have a bike, but I don't ride it very often. When the weather is nice, I sometimes use my bike to go into town to do some shopping.&rdquo;` }, { id: `B`, text: `&ldquo;I usually bike to work, but I'm taking the bus now because my bike has a broken part that needs to be fixed.&rdquo;` }, { id: `C`, text: `&ldquo;I just got a new bike, and I'm looking forward to going on rides with my friends soon.&rdquo;` }, { id: `D`, text: `&ldquo;I bike to my job every day. There's a nice bike path that goes through a park, but I use the bike lane on the main road because it's faster.&rdquo;` }],
      answer: `D` },

    { id: `m3ic-rw-m1-11`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `<p><em>Uncle Vanya: Scenes from Country Life in Four Acts</em> is an 1898 play by Anton Chekhov, originally written in Russian. In the play, Professor Serebrakoff and his wife Helena have come to stay at their country estate, which Vanya manages with the help of Sonia, the professor's daughter from a previous marriage. Chekhov portrays Helena as trying to ease tensions between Vanya and the professor, as is evident when _____</p>`,
      prompt: `Which quotation from a translation of <em>Uncle Vanya</em> most effectively illustrates the claim?`,
      options: [{ id: `A`, text: `Helena says to Vanya, &ldquo;I am absolutely exhausted by [Professor Serebrakoff], and can hardly stand.&rdquo;` }, { id: `B`, text: `Helena says to Vanya, &ldquo;You all abuse my husband and look on me with compassion; you think, &lsquo;Poor woman, she is married to an old man.' How well I understand your compassion!&rdquo;` }, { id: `C`, text: `Helena says to Vanya, &ldquo;You are cultured and intelligent, [Vanya], and you surely understand that the world is not destroyed by villains and conflagrations, but by hate and malice and all this spiteful tattling. It is your duty to make peace [with Professor Serebrakoff], and not to growl at everything.&rdquo;` }, { id: `D`, text: `Helena says to Sonia, &ldquo;When you come to think of it, Sonia, I am really very, very unhappy.&rdquo;` }],
      answer: `C` },

    { id: `m3ic-rw-m1-12`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Research such as the 2015 study of mammals by Jessie Patrice Bunkley and Jesse Rex Barber has shown that noise from human activity, like traffic on a busy highway, has significant effects on animals, and many governments require studies of the potential noise effects on wildlife before approving highway construction projects. A report on one such study proposed many more actions to mitigate the effects on birds in the area than it did to mitigate the effects on mammals in the area. Despite the lack of focus on measures specifically for mammals, conservationists were satisfied that the proposed mitigations were sufficient to protect all the wildlife in the area because _____</p>`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `the effects of noise on birds have been less extensively documented than the effects on mammals have.` }, { id: `B`, text: `the severity of the effects of noise on different species of birds can differ significantly.` }, { id: `C`, text: `the measures intended to protect birds can sometimes have adverse effects on mammals.` }, { id: `D`, text: `the measures aimed at protecting birds will likely also minimize most of the effects on mammals.` }],
      answer: `D` },

    { id: `m3ic-rw-m1-13`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Ships in the British Royal Navy during the Napoleonic Wars (1803&ndash;1815) were ranked based on military strength. The system considered the number of a ship's cannons and decks. &ldquo;First-rate&rdquo; was the highest ranking, and &ldquo;sixth-rate&rdquo; was the lowest ranking, followed by unranked ships. The size of a ship's crew was based on this ranking: first-rate ships had between 850 and 875 crewmen, while lower-ranked ships had fewer. Three of the ships in the British Royal Navy were the <em>Waterloo</em> (80 cannons and two decks), the <em>Temeraire</em> (98 cannons and three decks), and the <em>Caledonia</em> (120 cannons and three decks). Among these, only the <em>Caledonia</em> was a first-rate ship. It can therefore be concluded that _____</p>`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `the <em>Temeraire</em> had between 850 and 875 crewmen, but the <em>Waterloo</em> and the <em>Caledonia</em> each had fewer than 850 crewmen.` }, { id: `B`, text: `the <em>Waterloo</em> had a smaller crew than the <em>Caledonia.</em>` }, { id: `C`, text: `all ships with three decks were ranked as first-rate ships.` }, { id: `D`, text: `the <em>Caledonia</em> needed a crew larger than 875 people in order to operate efficiently.` }],
      answer: `B` },

    { id: `m3ic-rw-m1-14`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>In 2013, veteran actor Keith David voiced the character Frog King in the film <em>The Frog Kingdom.</em> Throughout his career, David has acted in _____ and more. However, he gets the most recognition for his voice acting.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `movies; commercials; Broadway musicals;` }, { id: `B`, text: `movies commercials Broadway musicals` }, { id: `C`, text: `movies, commercials Broadway musicals,` }, { id: `D`, text: `movies, commercials, Broadway musicals,` }],
      answer: `D` },

    { id: `m3ic-rw-m1-15`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>If you had turned on the radio in the fall of 1964, there was a good chance that _____</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `you would have heard &ldquo;Little Marie&rdquo; by Chuck Berry.` }, { id: `B`, text: `would you have heard &ldquo;Little Marie&rdquo; by Chuck Berry.` }, { id: `C`, text: `you would have heard &ldquo;Little Marie&rdquo; by Chuck Berry?` }, { id: `D`, text: `would you have heard &ldquo;Little Marie&rdquo; by Chuck Berry?` }],
      answer: `A` },

    { id: `m3ic-rw-m1-16`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `<p><em>The Song of Roland</em> is an epic poem that _____ a beautiful, heroic story. Originally composed in Old French in the 11th century, the poem has since been translated into many languages, allowing it to reach readers in all corners of the world.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `were telling` }, { id: `B`, text: `have told` }, { id: `C`, text: `tells` }, { id: `D`, text: `tell` }],
      answer: `C` },

    { id: `m3ic-rw-m1-17`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Where _____ Interestingly, it was invented by an author. It first appears in the novel <em>Christine</em> by American author Stephen King.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `the word &ldquo;pie-hole&rdquo; come from.` }, { id: `B`, text: `the word &ldquo;pie-hole&rdquo; did come from?` }, { id: `C`, text: `did the word &ldquo;pie-hole&rdquo; come from?` }, { id: `D`, text: `did the word &ldquo;pie-hole&rdquo; come from.` }],
      answer: `C` },

    { id: `m3ic-rw-m1-18`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `<p>During the 20th century, Montana, New Jersey, and Colorado each selected a dinosaur from a different genus for its state fossil: Montana _____ from the genus <em>Maiasaura;</em> New Jersey, from <em>Hadrosaurus;</em> and Colorado, from <em>Stegosaurus.</em></p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `is choosing` }, { id: `B`, text: `will choose` }, { id: `C`, text: `chooses` }, { id: `D`, text: `chose` }],
      answer: `D` },

    { id: `m3ic-rw-m1-19`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `hard`, type: `mcq`,
      passage: `<p>To illustrate Albert Einstein's special theory of relativity, picture two jugglers: one juggling on a steadily moving parade float, the other juggling while standing still on a sidewalk. The laws of physics are identical for both _____ motion relative to each other. But what, Einstein wondered, about the speed of light?</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `jugglers, regardless of their` }, { id: `B`, text: `jugglers, regardless of there` }, { id: `C`, text: `juggler's, regardless of their` }, { id: `D`, text: `jugglers', regardless of they're` }],
      answer: `A` },

    { id: `m3ic-rw-m1-20`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>When using slippery elm for dyeing cloth, textile artists first soak it in water to release its color. Then, they add the cloth to the dyebath and simmer it for hours, perhaps even days. _____ they will remove the cloth, at which point it will have turned a vibrant red color.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `Nevertheless,` }, { id: `B`, text: `Eventually,` }, { id: `C`, text: `Likewise,` }, { id: `D`, text: `In other words,` }],
      answer: `B` },

    { id: `m3ic-rw-m1-21`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Around the world, the minimum voting age varies. _____ citizens in Peru must be at least 18 years old to vote, whereas in Cuba, they can do so at the age of 16.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `Instead,` }, { id: `B`, text: `For example,` }, { id: `C`, text: `Next,` }, { id: `D`, text: `Eventually,` }],
      answer: `B` },

    { id: `m3ic-rw-m1-22`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Formed in 2009 by former combat sports athlete Genki Sudo, the band World Order captivated fans across Japan with its electropop music catalog. In 2010, the band released the album <em>World Order,</em> which includes the song &ldquo;A Brave New World.&rdquo; _____ in 2012, it released the album <em>2012,</em> which includes the song &ldquo;Aquarius.&rdquo;</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `Therefore,` }, { id: `B`, text: `Indeed,` }, { id: `C`, text: `Granted,` }, { id: `D`, text: `Later,` }],
      answer: `D` },

    { id: `m3ic-rw-m1-23`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The architects of Spain's Modernista movement took inspiration from the natural world when adding finishing touches to their buildings. _____ they favored plant- and animal-inspired design flourishes, like the decorative botanical panels of Castell dels Tres Dragons, a public building by architect Llu&iacute;s Dom&egrave;nech i Montaner.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `Meanwhile,` }, { id: `B`, text: `On the contrary,` }, { id: `C`, text: `Even so,` }, { id: `D`, text: `In particular,` }],
      answer: `D` },

    { id: `m3ic-rw-m1-24`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>At 22 meters high, Limestone Falls in Canada would be well over the head of anyone standing near its base. Virginia Falls in Canada, _____ is a towering colossus of a waterfall, with a dramatic 96-meter drop.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `by comparison,` }, { id: `B`, text: `as a result,` }, { id: `C`, text: `second of all,` }, { id: `D`, text: `in other words,` }],
      answer: `A` },

    { id: `m3ic-rw-m1-25`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Soil polluted with chromium (a heavy metal) is harmful to many plants and animals, but the plant species <em>Cyperus rotundus,</em> or purple nutsedge, not only thrives in such conditions but also helps remediate them. As a metal hyperaccumulator, <em>Cyperus rotundus</em> absorbs a large amount of chromium and stores it safely in its roots and shoots; _____ chromium concentrations in the soil decrease.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `in turn,` }, { id: `B`, text: `in addition,` }, { id: `C`, text: `specifically,` }, { id: `D`, text: `nevertheless,` }],
      answer: `A` },

    { id: `m3ic-rw-m1-26`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>Sister cities are pairs of cities that form social or legal partnerships to promote each other's cultures.</li><li>Previously known as &ldquo;town twinning,&rdquo; the concept of sister cities evolved in Europe after World War II as a way to repair bonds between cities.</li><li>Many cities in New York State maintain such partnerships with cities around the world.</li><li>Binghamton, New York, and Borovichi, Russia, became sister cities in 1990.</li></ul>`,
      prompt: `Which choice most effectively uses information from the given sentences to emphasize the duration of Binghamton and Borovichi's sister city relationship?`,
      options: [{ id: `A`, text: `As sister cities, Binghamton, New York, and Borovichi, Russia, have engaged in cultural exchange and partnership since 1990.` }, { id: `B`, text: `Borovichi, which in 1990 became a sister city&mdash;or &ldquo;twin town&rdquo;&mdash;to Binghamton, New York, is located in Russia.` }, { id: `C`, text: `Despite their distance from each other, the sister cities of Binghamton, New York, and Borovichi, Russia, have enjoyed the same partnership as many other sister cities.` }, { id: `D`, text: `Since the end of World War II, sister cities such as Binghamton, New York, and Borovichi, Russia, have continued to form social partnerships to promote each other's cultures.` }],
      answer: `A` },

    { id: `m3ic-rw-m1-27`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>Cinematographers work with cameras and lighting.</li><li>They help translate film directors' ideas into visual images.</li><li><em>Biutiful</em> (2010) was directed by Alejandro Gonz&aacute;lez I&ntilde;&aacute;rritu.</li><li>Rodrigo Prieto was the film's cinematographer.</li></ul>`,
      prompt: `Which choice most effectively uses information from the given sentences to emphasize Prieto's role in helping to make <em>Biutiful?</em>`,
      options: [{ id: `A`, text: `In filmmaking, directors work with others to translate their ideas into the visual images that we encounter on the screen.` }, { id: `B`, text: `Rodrigo Prieto and Alejandro Gonz&aacute;lez I&ntilde;&aacute;rritu worked together on a 2010 film.` }, { id: `C`, text: `As the cinematographer, Rodrigo Prieto worked with cameras and lighting to translate Alejandro Gonz&aacute;lez I&ntilde;&aacute;rritu's ideas into the visual images found in <em>Biutiful.</em>` }, { id: `D`, text: `One example of Rodrigo Prieto's work is Alejandro Gonz&aacute;lez I&ntilde;&aacute;rritu's film <em>Biutiful</em> (2010).` }],
      answer: `C` },
  ];

  const RW_M2 = [
    { id: `m3ic-rw-m2-1`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The springbok can run very fast&mdash;up to 88 kilometers per hour (km/hr)&mdash;but it is significantly slower than the peregrine falcon, which can fly at speeds up to 389 km/hr. The _____ between these two speeds is not surprising, however, because the features that are most useful for running on land tend to be more limiting on top speeds than the features that are best suited for flying through the air.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `interaction` }, { id: `B`, text: `equivalence` }, { id: `C`, text: `disparity` }, { id: `D`, text: `competition` }],
      answer: `C` },

    { id: `m3ic-rw-m2-2`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The early British postal system required the cost of mail delivery to be paid upon receipt, a system which encouraged inventive strategies by the intended recipient to avoid payment. To improve this system, _____ were proposed in 1837, including the use of a postage stamp, a small receipt pasted to the mail indicating that delivery costs had been paid by the sender.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `investigations` }, { id: `B`, text: `reforms` }, { id: `C`, text: `possessions` }, { id: `D`, text: `expansions` }],
      answer: `B` },

    { id: `m3ic-rw-m2-3`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Consumers usually _____ rising prices of nonessential products, such as video games or jewelry, by purchasing fewer of those products. When the prices fall, consumers usually react the opposite way, by purchasing more of those products.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `agree with` }, { id: `B`, text: `respond to` }, { id: `C`, text: `differ from` }, { id: `D`, text: `think of` }],
      answer: `B` },

    { id: `m3ic-rw-m2-4`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Cuttlefish appear to be surprisingly _____ at exercising self-control: in a 2021 study conducted by behavioral ecologist Alexandra Schnell, these cephalopods routinely demonstrated restraint by delaying gratification, waiting for a favorite treat instead of instantly devouring a readily available meal.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `competent` }, { id: `B`, text: `imaginative` }, { id: `C`, text: `awkward` }, { id: `D`, text: `manageable` }],
      answer: `A` },

    { id: `m3ic-rw-m2-5`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Baleen whales eat up to 30 percent of their total body mass in krill (tiny shrimplike creatures) per day. <u>So in one day, a humpback whale weighing 30,000 kg could eat 9,000 kg, while a northern right whale weighing 80,000 kg could ingest a whopping 24,000 kg.</u> Over the last century, baleen whale populations have declined, and contrary to some scientists' expectations, so have krill populations. Matthew S. Savoca and colleagues resolve this apparent discrepancy by pointing out that baleen whales cycle iron in the ocean, helping support phytoplankton populations, which, in turn, sustain krill populations.</p>`,
      prompt: `Which choice best describes the function of the underlined sentence in the text as a whole?`,
      options: [{ id: `A`, text: `It presents instances that seem to refute a claim presented earlier in the text.` }, { id: `B`, text: `It provides examples of a phenomenon described earlier in the text.` }, { id: `C`, text: `It describes a long-standing belief about baleen whales that the text goes on to refute.` }, { id: `D`, text: `It introduces a surprising series of events that is explained later in the text.` }],
      answer: `B` },

    { id: `m3ic-rw-m2-6`, domain: `Information and Ideas`, skill: `Cross-Text Connections`, difficulty: `hard`, type: `mcq`,
      passage: `<p><strong>Text 1</strong></p><p>In 2019 Overstrand Hermanus, South Africa, was named a City of Gastronomy by UNESCO in recognition of the city's unique food culture. <u>The honor is well known among both residents of the city and tourists who visit.</u> It's obvious that the selection of Overstrand Hermanus by UNESCO has brought awareness to local recipes, cooking practices, and chefs and has provided a boost to the city's tourism industry.</p><p><strong>Text 2</strong></p><p>Many residents of Overstrand Hermanus hoped that food tourism would increase after the city was chosen as a City of Gastronomy in 2019. However, as researcher Eerang Park and colleagues argue, cities must still create effective marketing strategies to benefit fully from being named a City of Gastronomy. Without an intentional effort to promote the city's food scene, many current and potential visitors to Overstrand Hermanus may not even be aware that it's home to uniquely delicious food.</p>`,
      prompt: `Based on the texts, how would the author of Text 2 most likely respond to the underlined claim in Text 1?`,
      options: [{ id: `A`, text: `By claiming that Overstrand Hermanus's chefs were mainly responsible for the city's recognition by UNESCO` }, { id: `B`, text: `By suggesting that Overstrand Hermanus's status as a City of Gastronomy may not be well known outside of South Africa` }, { id: `C`, text: `By noting that there are other benefits to being named a City of Gastronomy besides increased tourism` }, { id: `D`, text: `By arguing that UNESCO's recognition of Overstrand Hermanus was well deserved because of the city's delicious food` }],
      answer: `B` },

    { id: `m3ic-rw-m2-7`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The following text is from Yung Wing's 1909 memoir <em>My Life in China and America.</em></p><p>We landed in New York on the 12th of April, 1847, after a passage of ninety-eight days of unprecedented fair weather. The New York of 1847 was altogether a different city from the New York of 1909. It was a city of only 250,000 or 300,000 inhabitants; now it is a metropolis rivaling London in population, wealth and commerce. The whole of Manhattan Island is turned into a city of skyscrapers, churches and palatial residences.</p>`,
      prompt: `Based on the passage, how does Yung perceive New York to have changed between 1847 and 1909?`,
      options: [{ id: `A`, text: `The layout of the city's streets has become more organized.` }, { id: `B`, text: `The city has become more developed and populated.` }, { id: `C`, text: `The architecture of the city has become simpler in style.` }, { id: `D`, text: `The city's population has become much more diverse than London's.` }],
      answer: `B` },

    { id: `m3ic-rw-m2-8`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Eden Robinson is a novelist and a member of the Haisla Nation in western Canada. Critics and fellow writers have praised her work for combining traditional Haisla stories with popular genres of literature, such as fantasy and mystery fiction. But Robinson is not the only Indigenous writer to blend traditional stories with popular literature. In the 2016 novel <em>The Antelope Woman,</em> Louise Erdrich successfully blended the oral storytelling tradition of her people, the Ojibwe, with fantasy fiction.</p>`,
      prompt: `Which choice best states the main idea of the text?`,
      options: [{ id: `A`, text: `Several famous Indigenous writers increased their book sales when they began incorporating traditional stories.` }, { id: `B`, text: `The success of Eden Robinson has influenced non-Indigenous authors who write in popular literary genres.` }, { id: `C`, text: `Recent Indigenous fiction writers are mixing traditional stories with popular literary genres.` }, { id: `D`, text: `Non-Indigenous authors should consider the expectations of Indigenous readers.` }],
      answer: `C` },

    { id: `m3ic-rw-m2-9`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `easy`, type: `mcq`,
      passage: `<p><strong>Home Video Games and Computer Games of the 1980s</strong></p><table border='1' style='border-collapse:collapse;text-align:left' cellpadding='5'><tr><th>Title</th><th>System(s)</th><th>Genre</th><th>Developer</th></tr><tr><td><em>Frogger</em></td><td>multiple systems</td><td>action</td><td>Konami</td></tr><tr><td><em>Donkey Kong</em></td><td>multiple systems</td><td>platformer</td><td>Nintendo R&amp;D1</td></tr><tr><td><em>R.C. Pro-Am</em></td><td>Nintendo Entertainment System</td><td>racing</td><td>Rare</td></tr><tr><td><em>Where in the World Is Carmen Sandiego?</em></td><td>multiple systems</td><td>education</td><td>Broderbund</td></tr></table><p>A student is writing a research paper on the global rise of the home video game industry during the 1980s. The student wants to know the developer of the game <em>Donkey Kong.</em> The student finds that the developer was _____</p>`,
      prompt: `Which choice most effectively uses data from the table to complete the statement?`,
      options: [{ id: `A`, text: `Rare.` }, { id: `B`, text: `Broderbund.` }, { id: `C`, text: `Nintendo R&amp;D1.` }, { id: `D`, text: `Konami.` }],
      answer: `C` },

    { id: `m3ic-rw-m2-10`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Researchers Narelle Haworth and Amy Schramm studied bicycling behavior in Queensland, Australia. Haworth and Schramm asked adult bike riders questions about their level of experience, reasons for riding a bike, and route preferences. The researchers claim that <u>experienced riders who mainly bike to work tend to prefer routes that reduce their travel time.</u></p>`,
      prompt: `Which survey response from a bike rider in Queensland would best support the underlined claim?`,
      options: [{ id: `A`, text: `&ldquo;I usually bike to work, but I'm taking the bus now because my bike has a broken part that needs to be fixed.&rdquo;` }, { id: `B`, text: `&ldquo;I bike to my job every day. There's a nice bike path that goes through a park, but I use the bike lane on the main road because it's faster.&rdquo;` }, { id: `C`, text: `&ldquo;I have a bike, but I don't ride it very often. When the weather is nice, I sometimes use my bike to go into town to do some shopping.&rdquo;` }, { id: `D`, text: `&ldquo;I just got a new bike, and I'm looking forward to going on rides with my friends soon.&rdquo;` }],
      answer: `B` },

    { id: `m3ic-rw-m2-11`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `medium`, type: `mcq`,
      passage: `<p>In a paper for an art history class, a student claims that Grace Hartigan's 1954 painting <em>Grand Street Brides</em> marks a significant change in Hartigan's artistic development.</p>`,
      prompt: `Which quotation from an art history textbook would most effectively support the student's claim?`,
      options: [{ id: `A`, text: `&ldquo;<em>Grand Street Brides</em> has been analyzed extensively since it was first exhibited, as no two viewers seem to agree about exactly what the painting means.&rdquo;` }, { id: `B`, text: `&ldquo;Of all Hartigan's paintings, none so clearly represents her abilities and ideas as <em>Grand Street Brides.</em>&rdquo;` }, { id: `C`, text: `&ldquo;Although Hartigan was clearly influenced by other artists of her time, she was also an artist ahead of her time, as <em>Grand Street Brides</em> demonstrates.&rdquo;` }, { id: `D`, text: `&ldquo;The paintings that Hartigan produced before <em>Grand Street Brides</em> can be thought of as belonging to her earlier style, to which she never returned.&rdquo;` }],
      answer: `D` },

    { id: `m3ic-rw-m2-12`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `<p><em>Uncle Vanya: Scenes from Country Life in Four Acts</em> is an 1898 play by Anton Chekhov, originally written in Russian. In the play, Professor Serebrakoff and his wife Helena have come to stay at their country estate, which Vanya manages with the help of Sonia, the professor's daughter from a previous marriage. Chekhov portrays Helena as trying to ease tensions between Vanya and the professor, as is evident when _____</p>`,
      prompt: `Which quotation from a translation of <em>Uncle Vanya</em> most effectively illustrates the claim?`,
      options: [{ id: `A`, text: `Helena says to Sonia, &ldquo;September already! How shall we live through the long winter here [at the estate]?&rdquo;` }, { id: `B`, text: `Helena says to herself, &ldquo;Oh to be as free as a bird, to fly away from all your sleepy faces and your talk and forget that you have existed at all.&rdquo;` }, { id: `C`, text: `Helena says to Vanya, &ldquo;You all abuse my husband and look on me with compassion; you think, &lsquo;Poor woman, she is married to an old man.' How well I understand your compassion!&rdquo;` }, { id: `D`, text: `Helena says to Vanya, &ldquo;You are cultured and intelligent, [Vanya], and you surely understand that the world is not destroyed by villains and conflagrations, but by hate and malice and all this spiteful tattling. It is your duty to make peace [with Professor Serebrakoff], and not to growl at everything.&rdquo;` }],
      answer: `D` },

    { id: `m3ic-rw-m2-13`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Research such as the 2014 study of mammals by Graeme Shannon and colleagues has shown that noise from human activity, like traffic on a busy highway, has significant effects on animals, and many governments require studies of the potential noise effects on wildlife before approving highway construction projects. A report on one such study proposed many more actions to mitigate the effects on fish in the area than it did to mitigate the effects on mammals in the area. Despite the lack of focus on measures specifically for mammals, conservationists were satisfied that the proposed mitigations were sufficient to protect all the wildlife in the area because _____</p>`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `the severity of the effects of noise on different species of fish can differ significantly.` }, { id: `B`, text: `the measures aimed at protecting fish will likely also minimize most of the effects on mammals.` }, { id: `C`, text: `the measures intended to protect fish can sometimes have adverse effects on mammals.` }, { id: `D`, text: `the effects of noise on fish have been less extensively documented than the effects on mammals have.` }],
      answer: `B` },

    { id: `m3ic-rw-m2-14`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Ships in the British Royal Navy during the Napoleonic Wars (1803&ndash;1815) were ranked based on military strength. The system considered the number of a ship's cannons and decks. &ldquo;First-rate&rdquo; was the highest ranking, and &ldquo;sixth-rate&rdquo; was the lowest ranking, followed by unranked ships. The size of a ship's crew was based on this ranking: first-rate ships had between 850 and 875 crewmen, while lower-ranked ships had fewer. Three of the ships in the British Royal Navy were the <em>Waterloo</em> (80 cannons and two decks), the <em>Dreadnought</em> (98 cannons and three decks), and the <em>Howe</em> (120 cannons and three decks). Among these, only the <em>Howe</em> was a first-rate ship. It can therefore be concluded that _____</p>`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `the <em>Dreadnought</em> had between 850 and 875 crewmen, but the <em>Waterloo</em> and the <em>Howe</em> each had fewer than 850 crewmen.` }, { id: `B`, text: `the <em>Waterloo</em> had a smaller crew than the <em>Howe.</em>` }, { id: `C`, text: `all ships with three decks were ranked as first-rate ships.` }, { id: `D`, text: `the <em>Howe</em> needed a crew larger than 875 people in order to operate efficiently.` }],
      answer: `B` },

    { id: `m3ic-rw-m2-15`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `<p>In a 2017 study, Nitika Sharma and Rekha Dayal found that for consumers who value environmental conservation, their likelihood of purchasing a product increased when their perception of the product's effectiveness at addressing an environmental issue increased&mdash;in other words, the more environmentally friendly a product is perceived to be by a consumer, the more likely that consumer is to buy it. Subsequently, another research team conducted a study of various demographic groups in South Korea, investigating participants' intention to purchase a new piece of furniture, and found that, on average, college students gave the piece of furniture a higher environmental effectiveness rating than any other demographic group did. Assuming that the results of Sharma and Dayal's study are broadly applicable, this finding suggests that _____</p>`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `college students likely prioritize other factors over a product's environmental sustainability when making purchasing decisions.` }, { id: `B`, text: `the new piece of furniture is less appealing to college students than other similar products on the market are.` }, { id: `C`, text: `college students might be more likely than participants in the other demographic groups to purchase the piece of furniture.` }, { id: `D`, text: `there is not a meaningful difference in the average likelihood of purchasing environmentally friendly products among the demographic groups included in the study.` }],
      answer: `C` },

    { id: `m3ic-rw-m2-16`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>In 1997, veteran actor Keith David voiced the character Apollo the Sun God in the film <em>Hercules.</em> Throughout his career, David has acted in _____ and more. However, he gets the most recognition for his voice acting.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `movies, commercials Broadway musicals,` }, { id: `B`, text: `movies, commercials, Broadway musicals,` }, { id: `C`, text: `movies commercials Broadway musicals` }, { id: `D`, text: `movies; commercials; Broadway musicals;` }],
      answer: `B` },

    { id: `m3ic-rw-m2-17`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>If you had turned on the radio in the spring of 1972, there was a good chance that _____</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `you would have heard &ldquo;Lean on Me&rdquo; by Bill Withers?` }, { id: `B`, text: `would you have heard &ldquo;Lean on Me&rdquo; by Bill Withers?` }, { id: `C`, text: `would you have heard &ldquo;Lean on Me&rdquo; by Bill Withers.` }, { id: `D`, text: `you would have heard &ldquo;Lean on Me&rdquo; by Bill Withers.` }],
      answer: `D` },

    { id: `m3ic-rw-m2-18`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `<p><em>Georgics</em> is an epic poem that _____ a beautiful, heroic story. Originally composed in Latin in the 1st century BCE, the poem has since been translated into many languages, allowing it to reach readers in all corners of the world.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `were telling` }, { id: `B`, text: `tells` }, { id: `C`, text: `tell` }, { id: `D`, text: `have told` }],
      answer: `B` },

    { id: `m3ic-rw-m2-19`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Where _____ Interestingly, it was invented by an author. It first appears in the novel <em>The Sands of Mars</em> by English author Arthur C. Clarke.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `the word &ldquo;beep&rdquo; come from.` }, { id: `B`, text: `did the word &ldquo;beep&rdquo; come from.` }, { id: `C`, text: `the word &ldquo;beep&rdquo; did come from?` }, { id: `D`, text: `did the word &ldquo;beep&rdquo; come from?` }],
      answer: `D` },

    { id: `m3ic-rw-m2-20`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `<p>During the 20th century, Colorado, South Dakota, and New Mexico each selected a dinosaur from a different genus for its state fossil: Colorado _____ from the genus <em>Stegosaurus;</em> South Dakota, from <em>Triceratops;</em> and New Mexico, from <em>Coelophysis.</em></p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `chose` }, { id: `B`, text: `is choosing` }, { id: `C`, text: `chooses` }, { id: `D`, text: `will choose` }],
      answer: `A` },

    { id: `m3ic-rw-m2-21`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `hard`, type: `mcq`,
      passage: `<p>To illustrate Albert Einstein's special theory of relativity, picture two jugglers: one juggling on a steadily moving parade float, the other juggling while standing still on a sidewalk. The laws of physics are identical for both _____ motion relative to each other. But what, Einstein wondered, about the speed of light?</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `jugglers, regardless of there` }, { id: `B`, text: `jugglers, regardless of their` }, { id: `C`, text: `juggler's, regardless of their` }, { id: `D`, text: `jugglers', regardless of they're` }],
      answer: `B` },

    { id: `m3ic-rw-m2-22`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>When using prairie parsley for dyeing cloth, textile artists first soak it in water to release its color. Then, they add the cloth to the dyebath and simmer it for hours, perhaps even days. _____ they will remove the cloth, at which point it will have turned a vibrant red color.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `Eventually,` }, { id: `B`, text: `In other words,` }, { id: `C`, text: `Likewise,` }, { id: `D`, text: `Nevertheless,` }],
      answer: `A` },

    { id: `m3ic-rw-m2-23`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Around the world, the minimum voting age varies. _____ citizens in Pakistan must be at least 18 years old to vote, whereas in the Isle of Man, they can do so at the age of 16.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `Instead,` }, { id: `B`, text: `Eventually,` }, { id: `C`, text: `Next,` }, { id: `D`, text: `For example,` }],
      answer: `D` },

    { id: `m3ic-rw-m2-24`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The architects of Spain's Modernista movement took inspiration from the natural world when adding finishing touches to their buildings. _____ they favored plant- and animal-inspired design flourishes, like the bird-themed mosaics of Casa Lle&oacute; i Morera, a private home by architect Llu&iacute;s Dom&egrave;nech i Montaner.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `Even so,` }, { id: `B`, text: `In particular,` }, { id: `C`, text: `On the contrary,` }, { id: `D`, text: `Meanwhile,` }],
      answer: `B` },

    { id: `m3ic-rw-m2-25`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>At 15 meters high, Louise Falls in Canada would be well over the head of anyone standing near its base. Paulo Afonso Falls in Brazil, _____ is a towering colossus of a waterfall, with a dramatic 59-meter drop.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `as a result,` }, { id: `B`, text: `by comparison,` }, { id: `C`, text: `in other words,` }, { id: `D`, text: `second of all,` }],
      answer: `B` },

    { id: `m3ic-rw-m2-26`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Soil polluted with cadmium (a heavy metal) is harmful to many plants and animals, but the plant species <em>Elodea canadensis,</em> or Canadian waterweed, not only thrives in such conditions but also helps remediate them. As a metal hyperaccumulator, <em>Elodea canadensis</em> absorbs a large amount of cadmium and stores it safely in its roots and shoots; _____ cadmium concentrations in the soil decrease.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `specifically,` }, { id: `B`, text: `nevertheless,` }, { id: `C`, text: `in addition,` }, { id: `D`, text: `in turn,` }],
      answer: `D` },

    { id: `m3ic-rw-m2-27`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>Cinematographers work with cameras and lighting.</li><li>They help translate film directors' ideas into visual images.</li><li><em>Water for Elephants</em> (2011) was directed by Francis Lawrence.</li><li>Rodrigo Prieto was the film's cinematographer.</li></ul>`,
      prompt: `Which choice most effectively uses information from the given sentences to emphasize Prieto's role in helping to make <em>Water for Elephants?</em>`,
      options: [{ id: `A`, text: `In filmmaking, directors work with others to translate their ideas into the visual images that we encounter on the screen.` }, { id: `B`, text: `Rodrigo Prieto and Francis Lawrence worked together on a 2011 film.` }, { id: `C`, text: `One example of Rodrigo Prieto's work is Francis Lawrence's film <em>Water for Elephants</em> (2011).` }, { id: `D`, text: `As the cinematographer, Rodrigo Prieto worked with cameras and lighting to translate Francis Lawrence's ideas into the visual images found in <em>Water for Elephants.</em>` }],
      answer: `D` },
  ];

  const MATH_M1 = [
    { id: `m3ic-math-m1-1`, domain: `Algebra`, skill: `Linear equations in two variables`, difficulty: `easy`, type: `mcq`,
      prompt: `<p>A veterinarian recommends that each day a certain cat should eat 31 calories per pound of the cat's weight, plus an additional 14 calories. Which equation represents this situation, where <em>c</em> is the total number of calories the veterinarian recommends the cat should eat each day if the cat's weight is <em>x</em> pounds?</p>`,
      options: [{ id: `A`, text: `<em>c</em> = 14<em>x</em> + 31` }, { id: `B`, text: `<em>c</em> = 31<em>x</em> + 14` }, { id: `C`, text: `<em>c</em> = 31<em>x</em>` }, { id: `D`, text: `<em>c</em> = 45<em>x</em>` }],
      answer: `B` },

    { id: `m3ic-math-m1-2`, domain: `Geometry and Trigonometry`, skill: `Lines, angles, and triangles`, difficulty: `easy`, type: `mcq`,
      prompt: `<p>Each side of square A has a length of 13 inches. Each side of square A is multiplied by a scale factor of 3 to create square B. What is the length, in inches, of each side of square B?</p>`,
      options: [{ id: `A`, text: `39` }, { id: `B`, text: `16` }, { id: `C`, text: `13` }, { id: `D`, text: `10` }],
      answer: `A` },

    { id: `m3ic-math-m1-3`, domain: `Problem-Solving and Data Analysis`, skill: `Percentages`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>If <em>x</em> &gt; 0 and <em>x</em> is 24% of <em>y</em>, which expression represents <em>y</em> in terms of <em>x</em>?</p>`,
      options: [{ id: `A`, text: `<sup>100</sup>&frasl;<sub>24</sub> <em>x</em>` }, { id: `B`, text: `<sup>10</sup>&frasl;<sub>24</sub> <em>x</em>` }, { id: `C`, text: `<sup>1</sup>&frasl;<sub>24</sub> <em>x</em>` }, { id: `D`, text: `<sup>76</sup>&frasl;<sub>100</sub> <em>x</em>` }],
      answer: `A` },

    { id: `m3ic-math-m1-4`, domain: `Problem-Solving and Data Analysis`, skill: `Ratios, rates, proportional relationships, and units`, difficulty: `easy`, type: `grid`,
      prompt: `<p>A remotely operated vehicle (ROV) is used for underwater ocean research. When the ROV is at a depth of 31 fathoms, what is the ROV's depth in feet? (1 fathom = 6 feet)</p>`,
      answer: [`186`] },

    { id: `m3ic-math-m1-5`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `easy`, type: `mcq`,
      prompt: `<p>The function <em>g</em> is defined by <em>g</em>(<em>x</em>) = &radic;<span style='text-decoration:overline'>8<em>x</em> + 1</span>. What is the value of <em>g</em>(10)?</p>`,
      options: [{ id: `A`, text: `<sup>9</sup>&frasl;<sub>8</sub>` }, { id: `B`, text: `<sup>81</sup>&frasl;<sub>8</sub>` }, { id: `C`, text: `9` }, { id: `D`, text: `81` }],
      answer: `C` },

    { id: `m3ic-math-m1-6`, domain: `Algebra`, skill: `Linear functions`, difficulty: `easy`, type: `mcq`,
      prompt: `<p>The function <em>f</em> is defined by <em>f</em>(<em>x</em>) = <sup>1</sup>&frasl;<sub>2</sub>(<em>x</em> + 10). What is the value of <em>f</em>(8)?</p>`,
      options: [{ id: `A`, text: `36` }, { id: `B`, text: `20` }, { id: `C`, text: `18` }, { id: `D`, text: `9` }],
      answer: `D` },

    { id: `m3ic-math-m1-7`, domain: `Geometry and Trigonometry`, skill: `Right triangles and trigonometry`, difficulty: `medium`, type: `mcq`,
      prompt: `<p><svg viewBox='0 0 340 210' xmlns='http://www.w3.org/2000/svg' style='max-width:320px;height:auto'><polygon points='55,180 295,180 295,45' fill='none' stroke='#111' stroke-width='2'/><path d='M295,180 L295,164 L279,164 L279,180' fill='none' stroke='#111' stroke-width='1.4'/><text x='38' y='187' font-size='15' font-style='italic'>A</text><text x='300' y='190' font-size='15' font-style='italic'>C</text><text x='300' y='44' font-size='15' font-style='italic'>B</text><text x='150' y='104' font-size='15'>43</text><text x='166' y='200' font-size='15'>42</text></svg></p><p style='text-align:center'>Note: Figure not drawn to scale.</p><p>In &triangle;<em>ABC</em>, &ang;<em>C</em> is a right angle, <em>AB</em> = 43, and <em>AC</em> = 42. What is the value of cos <em>A</em> in the triangle shown?</p>`,
      options: [{ id: `A`, text: `<sup>43</sup>&frasl;<sub>42</sub>` }, { id: `B`, text: `<sup>42</sup>&frasl;<sub>43</sub>` }, { id: `C`, text: `<sup>1</sup>&frasl;<sub>43</sub>` }, { id: `D`, text: `<sup>1</sup>&frasl;<sub>42</sub>` }],
      answer: `B` },

    { id: `m3ic-math-m1-8`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>The function <em>f</em>(<em>x</em>) = 240,000(1.22)<sup><em>x</em></sup> gives a company's predicted annual revenue, in dollars, <em>x</em> years after the company started selling clothes online, where 0 &le; <em>x</em> &le; 10. What is the best interpretation of the statement &ldquo;<em>f</em>(5) is approximately equal to 648,650&rdquo; in this context?</p>`,
      options: [{ id: `A`, text: `5 years after the company started selling clothes online, its predicted annual revenue is approximately 648,650 dollars.` }, { id: `B`, text: `5 years after the company started selling clothes online, its predicted annual revenue will have increased by a total of approximately 648,650 dollars.` }, { id: `C`, text: `When the company's predicted annual revenue is approximately 648,650 dollars, it is 5 times the predicted annual revenue for the previous year.` }, { id: `D`, text: `When the company's predicted annual revenue is approximately 648,650 dollars, it is 5% greater than the predicted annual revenue for the previous year.` }],
      answer: `A` },

    { id: `m3ic-math-m1-9`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>How many solutions does the equation 7<em>x</em> + 11 = 4<em>x</em> + 3<em>x</em> + 12 have?</p>`,
      options: [{ id: `A`, text: `Exactly one` }, { id: `B`, text: `Exactly two` }, { id: `C`, text: `Infinitely many` }, { id: `D`, text: `Zero` }],
      answer: `D` },

    { id: `m3ic-math-m1-10`, domain: `Algebra`, skill: `Systems of two linear equations in two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `<div style='text-align:center'><p>6<em>x</em> + 9<em>y</em> = 78</p><p>6<em>x</em> + 27<em>y</em> = 186</p></div><p>The solution to the given system of equations is (<em>x</em>, <em>y</em>). What is the value of 18<em>y</em>?</p>`,
      options: [{ id: `A`, text: `4` }, { id: `B`, text: `6` }, { id: `C`, text: `108` }, { id: `D`, text: `264` }],
      answer: `C` },

    { id: `m3ic-math-m1-11`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `medium`, type: `grid`,
      prompt: `<p>During hibernation, American black bears do not eat or replenish calories. A certain black bear weighed 322 pounds when entering hibernation and lost weight at a rate of 0.7 pound per day. At this rate, how many days after entering hibernation did the black bear weigh 280 pounds?</p>`,
      answer: [`60`] },

    { id: `m3ic-math-m1-12`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<p><svg viewBox='0 0 340 275' xmlns='http://www.w3.org/2000/svg' style='max-width:330px;height:auto'><line x1='40' y1='240' x2='325' y2='240' stroke='#111' stroke-width='1.3'/><line x1='40' y1='240' x2='40' y2='25' stroke='#111' stroke-width='1.3'/><polygon points='325,240 317,236 317,244' fill='#111'/><polygon points='40,25 36,33 44,33' fill='#111'/><g stroke='#ccc' stroke-width='0.8'><line x1='77' y1='240' x2='77' y2='30'/><line x1='115' y1='240' x2='115' y2='30'/><line x1='152' y1='240' x2='152' y2='30'/><line x1='189' y1='240' x2='189' y2='30'/><line x1='227' y1='240' x2='227' y2='30'/><line x1='264' y1='240' x2='264' y2='30'/><line x1='301' y1='240' x2='301' y2='30'/><line x1='40' y1='198' x2='320' y2='198'/><line x1='40' y1='156' x2='320' y2='156'/><line x1='40' y1='114' x2='320' y2='114'/><line x1='40' y1='72' x2='320' y2='72'/></g><polyline points='40,177 77,167 115,152 152,135 189,116 227,97 264,80 301,66' fill='none' stroke='#111' stroke-width='2.2'/><g font-size='11' text-anchor='middle'><text x='77' y='254'>2</text><text x='115' y='254'>4</text><text x='152' y='254'>6</text><text x='189' y='254'>8</text><text x='227' y='254'>10</text><text x='264' y='254'>12</text><text x='301' y='254'>14</text></g><g font-size='11' text-anchor='end'><text x='34' y='202'>2</text><text x='34' y='160'>4</text><text x='34' y='118'>6</text><text x='34' y='76'>8</text><text x='34' y='34'>10</text></g><text x='30' y='20' font-size='12' font-style='italic'>y</text><text x='330' y='244' font-size='12' font-style='italic'>x</text></svg></p><p>The graph models the population, in thousands, of a town <em>x</em> years since 2004, where 0 &le; <em>x</em> &le; 15. Which statement is the best interpretation of the point (1, 3.21)?</p>`,
      options: [{ id: `A`, text: `In 2004, the estimated population of the town was 3,210.` }, { id: `B`, text: `In 2005, the estimated population of the town was 3,210.` }, { id: `C`, text: `In 2018, the estimated population of the town was 3,210.` }, { id: `D`, text: `In 2019, the estimated population of the town was 3,210.` }],
      answer: `B` },

    { id: `m3ic-math-m1-13`, domain: `Geometry and Trigonometry`, skill: `Area and volume`, difficulty: `easy`, type: `mcq`,
      prompt: `<p><svg viewBox='0 0 340 210' xmlns='http://www.w3.org/2000/svg' style='max-width:320px;height:auto'><polygon points='45,175 315,175 190,45' fill='none' stroke='#111' stroke-width='2'/><line x1='190' y1='45' x2='190' y2='175' stroke='#111' stroke-width='1.4' stroke-dasharray='4 3'/><path d='M190,175 L190,161 L176,161 L176,175' fill='none' stroke='#111' stroke-width='1.2'/><text x='30' y='182' font-size='15' font-style='italic'>A</text><text x='320' y='182' font-size='15' font-style='italic'>C</text><text x='185' y='40' font-size='15' font-style='italic'>B</text><text x='198' y='120' font-size='15' font-style='italic'>h</text><text x='156' y='197' font-size='15'>10 cm</text></svg></p><p style='text-align:center'>Note: Figure not drawn to scale.</p><p>The area of triangle <em>ABC</em> is 60 square centimeters. What is the height <em>h</em>, in centimeters, of this triangle?</p>`,
      options: [{ id: `A`, text: `6` }, { id: `B`, text: `10` }, { id: `C`, text: `12` }, { id: `D`, text: `24` }],
      answer: `C` },

    { id: `m3ic-math-m1-14`, domain: `Problem-Solving and Data Analysis`, skill: `Inference from sample statistics and margin of error`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>A machine fills bags with approximately 11 ounces of walnuts. To test the accuracy of the filling process, 330 bags of walnuts were selected at random and weighed. Based on the sample, it is estimated that the average weight of all bags of walnuts filled by the machine in an 8-hour period is 11.17 ounces, with an associated margin of error of 0.2 ounce. Which of the following is the best interpretation of this estimate?</p>`,
      options: [{ id: `A`, text: `Plausible values for the average weight of all bags of walnuts filled by the machine are between 10.97 ounces and 11.37 ounces.` }, { id: `B`, text: `Plausible values for the average weight of all bags of walnuts filled by the machine are less than 10.97 ounces or greater than 11.37 ounces.` }, { id: `C`, text: `The average weight of all bags of walnuts filled by the machine is less than 11.02 ounces.` }, { id: `D`, text: `The average weight of all bags of walnuts filled by the machine is greater than 11.02 ounces.` }],
      answer: `A` },

    { id: `m3ic-math-m1-15`, domain: `Algebra`, skill: `Linear equations in two variables`, difficulty: `hard`, type: `grid`,
      prompt: `<p><svg viewBox='0 0 300 272' xmlns='http://www.w3.org/2000/svg' style='max-width:300px;height:auto'><g stroke='#ccc' stroke-width='0.8'><line x1='93' y1='240' x2='93' y2='30'/><line x1='141' y1='240' x2='141' y2='30'/><line x1='189' y1='240' x2='189' y2='30'/><line x1='237' y1='240' x2='237' y2='30'/><line x1='285' y1='240' x2='285' y2='30'/><line x1='45' y1='198' x2='285' y2='198'/><line x1='45' y1='156' x2='285' y2='156'/><line x1='45' y1='114' x2='285' y2='114'/><line x1='45' y1='72' x2='285' y2='72'/></g><line x1='45' y1='240' x2='292' y2='240' stroke='#111' stroke-width='1.3'/><line x1='45' y1='240' x2='45' y2='25' stroke='#111' stroke-width='1.3'/><polygon points='292,240 284,236 284,244' fill='#111'/><polygon points='45,25 41,33 49,33' fill='#111'/><line x1='45' y1='177' x2='237' y2='249' stroke='#111' stroke-width='2.2'/><circle cx='45' cy='177' r='3.2' fill='#111'/><circle cx='213' cy='240' r='3.2' fill='#111'/><g font-size='11' text-anchor='middle'><text x='93' y='254'>2</text><text x='141' y='254'>4</text><text x='189' y='254'>6</text><text x='237' y='254'>8</text><text x='285' y='254'>10</text></g><g font-size='11' text-anchor='end'><text x='39' y='202'>2</text><text x='39' y='160'>4</text><text x='39' y='118'>6</text><text x='39' y='76'>8</text><text x='39' y='34'>10</text></g><text x='34' y='20' font-size='12' font-style='italic'>y</text><text x='294' y='236' font-size='12' font-style='italic'>x</text></svg></p><p>The graph of the linear equation 6<em>x</em> + <em>By</em> = 42 is shown, where <em>B</em> is a constant. What is the value of <em>B</em>?</p>`,
      answer: [`14`] },

    { id: `m3ic-math-m1-16`, domain: `Problem-Solving and Data Analysis`, skill: `Two-variable data: models and scatterplots`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>The scatterplot shows the relationship between two variables, <em>x</em> and <em>y</em>. A line of best fit is also shown.</p><p><svg viewBox='0 0 320 292' xmlns='http://www.w3.org/2000/svg' style='max-width:320px;height:auto'><g stroke='#ccc' stroke-width='0.8'><line x1='95' y1='250' x2='95' y2='40'/><line x1='145' y1='250' x2='145' y2='40'/><line x1='195' y1='250' x2='195' y2='40'/><line x1='245' y1='250' x2='245' y2='40'/><line x1='295' y1='250' x2='295' y2='40'/><line x1='45' y1='208' x2='295' y2='208'/><line x1='45' y1='166' x2='295' y2='166'/><line x1='45' y1='124' x2='295' y2='124'/><line x1='45' y1='82' x2='295' y2='82'/></g><line x1='45' y1='250' x2='305' y2='250' stroke='#111' stroke-width='1.3'/><line x1='45' y1='250' x2='45' y2='30' stroke='#111' stroke-width='1.3'/><polygon points='305,250 297,246 297,254' fill='#111'/><polygon points='45,30 41,38 49,38' fill='#111'/><line x1='45' y1='216' x2='295' y2='78' stroke='#111' stroke-width='2'/><g fill='#111'><circle cx='70' cy='223' r='3.4'/><circle cx='95' cy='176' r='3.4'/><circle cx='145' cy='149' r='3.4'/><circle cx='195' cy='120' r='3.4'/><circle cx='245' cy='103' r='3.4'/><circle cx='270' cy='107' r='3.4'/></g><g font-size='11' text-anchor='middle'><text x='95' y='264'>2</text><text x='145' y='264'>4</text><text x='195' y='264'>6</text><text x='245' y='264'>8</text><text x='295' y='264'>10</text></g><g font-size='11' text-anchor='end'><text x='39' y='212'>200</text><text x='39' y='170'>400</text><text x='39' y='128'>600</text><text x='39' y='86'>800</text></g><text x='34' y='24' font-size='12' font-style='italic'>y</text><text x='308' y='254' font-size='12' font-style='italic'>x</text></svg></p><p>Which of the following best represents the line of best fit shown?</p>`,
      options: [{ id: `A`, text: `<em>y</em> = 163.26 + 0.02<em>x</em>` }, { id: `B`, text: `<em>y</em> = 163.26 + 0.66<em>x</em>` }, { id: `C`, text: `<em>y</em> = 163.26 + 55.62<em>x</em>` }, { id: `D`, text: `<em>y</em> = 163.26 + 65.62<em>x</em>` }],
      answer: `D` },

    { id: `m3ic-math-m1-17`, domain: `Algebra`, skill: `Linear functions`, difficulty: `medium`, type: `grid`,
      prompt: `<p>In the <em>xy</em>-plane, line &#8467; passes through the point (0, 0) and is parallel to the line represented by the equation <em>y</em> = 6<em>x</em> + 3. If line &#8467; also passes through the point (4, <em>d</em>), what is the value of <em>d</em>?</p>`,
      answer: [`24`] },

    { id: `m3ic-math-m1-18`, domain: `Geometry and Trigonometry`, skill: `Circles`, difficulty: `hard`, type: `grid`,
      prompt: `<p>Circle A in the <em>xy</em>-plane has the equation (<em>x</em> + 9)<sup>2</sup> + (<em>y</em> &minus; 9)<sup>2</sup> = 4. Circle B has the same center as circle A. The radius of circle B is two times the radius of circle A. The equation defining circle B in the <em>xy</em>-plane is (<em>x</em> + 9)<sup>2</sup> + (<em>y</em> &minus; 9)<sup>2</sup> = <em>k</em>, where <em>k</em> is a constant. What is the value of <em>k</em>?</p>`,
      answer: [`16`] },

    { id: `m3ic-math-m1-19`, domain: `Geometry and Trigonometry`, skill: `Area and volume`, difficulty: `medium`, type: `grid`,
      prompt: `<p>A triangular prism has a height of 5 centimeters (cm) and a volume of 115 cm<sup>3</sup>. What is the area, in cm<sup>2</sup>, of the base of the prism? (The volume of a triangular prism is equal to <em>Bh</em>, where <em>B</em> is the area of the base and <em>h</em> is the height of the prism.)</p>`,
      answer: [`23`] },

    { id: `m3ic-math-m1-20`, domain: `Algebra`, skill: `Linear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>A family has money in an account for renting movies online. Each time the family rents a movie, the cost of the rental is withdrawn from the account, and each rental costs the same amount of money. The function <em>f</em>(<em>m</em>) = 32 &minus; 4<em>m</em> gives the amount of money, in dollars, in the account after the family has rented <em>m</em> movies. Which of the following represents the amount of money, in dollars, withdrawn from the account each time the family rents a movie?</p>`,
      options: [{ id: `A`, text: `4<em>m</em>` }, { id: `B`, text: `4` }, { id: `C`, text: `32` }, { id: `D`, text: `32 &minus; 4<em>m</em>` }],
      answer: `B` },

    { id: `m3ic-math-m1-21`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `hard`, type: `mcq`,
      prompt: `<p>The function <em>f</em> is defined by <em>f</em>(<em>x</em>) = 44(0.21)<sup><em>x</em></sup>. For any positive integer <em>n</em>, the value of <em>f</em>(<em>n</em>) is <em>p</em>% less than the value of <em>f</em>(<em>n</em> &minus; 1). What is the value of <em>p</em>?</p>`,
      options: [{ id: `A`, text: `79` }, { id: `B`, text: `56` }, { id: `C`, text: `44` }, { id: `D`, text: `21` }],
      answer: `A` },

    { id: `m3ic-math-m1-22`, domain: `Algebra`, skill: `Systems of two linear equations in two variables`, difficulty: `hard`, type: `mcq`,
      prompt: `<div style='text-align:center'><p>2<em>x</em> = 16<em>y</em> &minus; 20</p></div><p>One of the two equations in a system of linear equations is given. The system has no solution. Which equation could be the second equation in this system?</p>`,
      options: [{ id: `A`, text: `<em>x</em> = 4<em>y</em>` }, { id: `B`, text: `<sup>1</sup>&frasl;<sub>2</sub><em>x</em> = 4<em>y</em>` }, { id: `C`, text: `<em>x</em> = 8<em>y</em> &minus; 10` }, { id: `D`, text: `<sup>1</sup>&frasl;<sub>2</sub><em>x</em> = 8<em>y</em> &minus; 10` }],
      answer: `B` },
  ];

  const MATH_M2 = [
    { id: `m3ic-math-m2-1`, domain: `Problem-Solving and Data Analysis`, skill: `One-variable data: distributions and measures of center and spread`, difficulty: `easy`, type: `mcq`,
      prompt: `<p>The bar graph shows the number of trees planted for 4 separate plots of land on a tree farm.</p><p><svg viewBox='0 0 380 292' xmlns='http://www.w3.org/2000/svg' style='max-width:360px;height:auto'><g stroke='#ccc' stroke-width='0.8'><line x1='55' y1='217' x2='340' y2='217'/><line x1='55' y1='193' x2='340' y2='193'/><line x1='55' y1='170' x2='340' y2='170'/><line x1='55' y1='147' x2='340' y2='147'/><line x1='55' y1='123' x2='340' y2='123'/><line x1='55' y1='100' x2='340' y2='100'/><line x1='55' y1='77' x2='340' y2='77'/><line x1='55' y1='53' x2='340' y2='53'/><line x1='55' y1='30' x2='340' y2='30'/></g><line x1='55' y1='240' x2='340' y2='240' stroke='#111' stroke-width='1.3'/><line x1='55' y1='240' x2='55' y2='25' stroke='#111' stroke-width='1.3'/><rect x='78' y='88' width='46' height='152' fill='#bdbdbd' stroke='#333'/><rect x='143' y='65' width='46' height='175' fill='#bdbdbd' stroke='#333'/><rect x='208' y='53' width='46' height='187' fill='#bdbdbd' stroke='#333'/><rect x='273' y='102' width='46' height='138' fill='#bdbdbd' stroke='#333'/><g font-size='10' text-anchor='end' fill='#111'><text x='50' y='244'>0</text><text x='50' y='220'>10</text><text x='50' y='197'>20</text><text x='50' y='174'>30</text><text x='50' y='150'>40</text><text x='50' y='127'>50</text><text x='50' y='104'>60</text><text x='50' y='80'>70</text><text x='50' y='57'>80</text><text x='50' y='34'>90</text></g><g font-size='10' text-anchor='middle' fill='#111'><text x='101' y='254'>Plot 1</text><text x='166' y='254'>Plot 2</text><text x='231' y='254'>Plot 3</text><text x='296' y='254'>Plot 4</text></g><text x='18' y='140' font-size='11' transform='rotate(-90 18 140)' text-anchor='middle'>Trees planted</text></svg></p><p>What is the maximum number of trees planted on one of these 4 plots of land?</p>`,
      options: [{ id: `A`, text: `80` }, { id: `B`, text: `75` }, { id: `C`, text: `65` }, { id: `D`, text: `59` }],
      answer: `A` },

    { id: `m3ic-math-m2-2`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>At the time of posting a video, a social media channel had 67 subscribers. Each day for five days after the video was posted, the number of subscribers doubled from the number the previous day. Which equation gives the total number of subscribers, <em>n</em>, to the channel <em>d</em> days after the video was posted?</p>`,
      options: [{ id: `A`, text: `<em>n</em> = (67)<sup><em>d</em></sup>` }, { id: `B`, text: `<em>n</em> = 67(2)<sup><em>d</em></sup>` }, { id: `C`, text: `<em>n</em> = 67(<sup>1</sup>&frasl;<sub>2</sub>)<sup><em>d</em></sup>` }, { id: `D`, text: `<em>n</em> = (67)<sup>2</sup> + <em>d</em>` }],
      answer: `B` },

    { id: `m3ic-math-m2-3`, domain: `Algebra`, skill: `Linear inequalities in one or two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>A certain truck can tow a trailer if the combined weight of the trailer and the packages it contains is no more than 5,600 pounds. What is the maximum number of packages this truck can tow in a trailer with a weight of 600 pounds if each package weighs 130 pounds?</p>`,
      options: [{ id: `A`, text: `38` }, { id: `B`, text: `39` }, { id: `C`, text: `43` }, { id: `D`, text: `44` }],
      answer: `A` },

    { id: `m3ic-math-m2-4`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<div style='text-align:center'><p><em>q</em>(<em>x</em>) = 21(3<sup><em>x</em></sup>)</p></div><p>Which table gives three values of <em>x</em> and their corresponding values of <em>q</em>(<em>x</em>) for function <em>q</em>?</p>`,
      options: [{ id: `A`, text: `<table border='1' style='border-collapse:collapse;text-align:center' cellpadding='5'><tr><td><em>x</em></td><td>&minus;1</td><td>0</td><td>1</td></tr><tr><td><em>q</em>(<em>x</em>)</td><td>7</td><td>21</td><td>63</td></tr></table>` }, { id: `B`, text: `<table border='1' style='border-collapse:collapse;text-align:center' cellpadding='5'><tr><td><em>x</em></td><td>&minus;1</td><td>0</td><td>1</td></tr><tr><td><em>q</em>(<em>x</em>)</td><td><sup>1</sup>&frasl;<sub>7</sub></td><td>21</td><td>63</td></tr></table>` }, { id: `C`, text: `<table border='1' style='border-collapse:collapse;text-align:center' cellpadding='5'><tr><td><em>x</em></td><td>&minus;1</td><td>0</td><td>1</td></tr><tr><td><em>q</em>(<em>x</em>)</td><td><sup>1</sup>&frasl;<sub>7</sub></td><td>3</td><td>63</td></tr></table>` }, { id: `D`, text: `<table border='1' style='border-collapse:collapse;text-align:center' cellpadding='5'><tr><td><em>x</em></td><td>&minus;1</td><td>0</td><td>1</td></tr><tr><td><em>q</em>(<em>x</em>)</td><td>&minus;63</td><td>0</td><td>63</td></tr></table>` }],
      answer: `A` },

    { id: `m3ic-math-m2-5`, domain: `Algebra`, skill: `Linear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>For the linear function <em>f</em>, the graph of <em>y</em> = <em>f</em>(<em>x</em>) in the <em>xy</em>-plane has a slope of <sup>2</sup>&frasl;<sub>3</sub> and passes through the point (15, 14). Which equation defines <em>f</em>?</p>`,
      options: [{ id: `A`, text: `<em>f</em>(<em>x</em>) = <sup>2</sup>&frasl;<sub>3</sub><em>x</em> + <sup>14</sup>&frasl;<sub>15</sub>` }, { id: `B`, text: `<em>f</em>(<em>x</em>) = <sup>2</sup>&frasl;<sub>3</sub><em>x</em> + <sup>17</sup>&frasl;<sub>3</sub>` }, { id: `C`, text: `<em>f</em>(<em>x</em>) = <sup>2</sup>&frasl;<sub>3</sub><em>x</em> + 14` }, { id: `D`, text: `<em>f</em>(<em>x</em>) = <sup>2</sup>&frasl;<sub>3</sub><em>x</em> + 4` }],
      answer: `D` },

    { id: `m3ic-math-m2-6`, domain: `Algebra`, skill: `Linear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<div style='text-align:center'><p><em>f</em>(<em>x</em>) = 7<em>x</em> &minus; 5</p></div><p>Function <em>f</em> is defined by the given equation. The function <em>g</em> is defined by <em>g</em>(<em>x</em>) = <em>f</em>(<em>x</em>) &minus; (5<em>x</em> &minus; 2). What is the <em>x</em>-coordinate of the <em>x</em>-intercept of the graph of <em>y</em> = <em>g</em>(<em>x</em>) in the <em>xy</em>-plane?</p>`,
      options: [{ id: `A`, text: `<sup>7</sup>&frasl;<sub>12</sub>` }, { id: `B`, text: `<sup>5</sup>&frasl;<sub>7</sub>` }, { id: `C`, text: `<sup>3</sup>&frasl;<sub>2</sub>` }, { id: `D`, text: `<sup>7</sup>&frasl;<sub>2</sub>` }],
      answer: `C` },

    { id: `m3ic-math-m2-7`, domain: `Advanced Math`, skill: `Equivalent expressions`, difficulty: `medium`, type: `mcq`,
      prompt: `<div style='text-align:center'><p><em>x</em> = 4<em>a</em>(<em>b</em> + 3)</p></div><p>The given equation relates the positive numbers <em>a</em>, <em>b</em>, and <em>x</em>. Which equation correctly expresses <em>a</em> in terms of <em>b</em> and <em>x</em>?</p>`,
      options: [{ id: `A`, text: `<em>a</em> = <sup><em>x</em></sup>&frasl;<sub>4</sub> &minus; (<em>b</em> + 3)` }, { id: `B`, text: `<em>a</em> = <em>x</em> &frasl; [4(<em>b</em> + 3)]` }, { id: `C`, text: `<em>a</em> = 4(<em>b</em> + 3) &frasl; <em>x</em>` }, { id: `D`, text: `<em>a</em> = 4<em>x</em>(<em>b</em> + 3)` }],
      answer: `B` },

    { id: `m3ic-math-m2-8`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>An object is kicked from a platform. The equation <em>h</em> = &minus;4.9<em>t</em><sup>2</sup> + 13<em>t</em> + 15 represents this situation, where <em>h</em> is the height of the object above the ground, in meters, <em>t</em> seconds after it is kicked. Which number represents the height, in meters, from which the object was kicked?</p>`,
      options: [{ id: `A`, text: `0` }, { id: `B`, text: `4.9` }, { id: `C`, text: `13` }, { id: `D`, text: `15` }],
      answer: `D` },

    { id: `m3ic-math-m2-9`, domain: `Algebra`, skill: `Systems of two linear equations in two variables`, difficulty: `hard`, type: `mcq`,
      prompt: `<div style='text-align:center'><p><em>x</em> + 6<em>y</em> = &minus;14</p><p>5<em>x</em> + 30<em>y</em> = 0</p><p>2<em>x</em> + 12<em>y</em> = 39</p></div><p>The given equations are graphed in the <em>xy</em>-plane. How many solutions (<em>x</em>, <em>y</em>) does the system of three equations have?</p>`,
      options: [{ id: `A`, text: `Zero` }, { id: `B`, text: `Exactly one` }, { id: `C`, text: `Exactly two` }, { id: `D`, text: `Infinitely many` }],
      answer: `A` },

    { id: `m3ic-math-m2-10`, domain: `Algebra`, skill: `Linear inequalities in one or two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `<div style='text-align:center'><p><em>y</em> &le; <em>x</em> + 2</p><p><em>y</em> &ge; &minus;5<em>x</em> &minus; 3</p></div><p>Which point (<em>x</em>, <em>y</em>) is a solution to the given system of inequalities in the <em>xy</em>-plane?</p>`,
      options: [{ id: `A`, text: `(0, &minus;6)` }, { id: `B`, text: `(0, 6)` }, { id: `C`, text: `(&minus;6, 0)` }, { id: `D`, text: `(6, 0)` }],
      answer: `D` },

    { id: `m3ic-math-m2-11`, domain: `Geometry and Trigonometry`, skill: `Area and volume`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>The length of the diagonal of a square is <sup>124&radic;<span style='text-decoration:overline'>2</span></sup>&frasl;<sub>2</sub> units. What is the area, in square units, of the square?</p>`,
      options: [{ id: `A`, text: `62` }, { id: `B`, text: `248` }, { id: `C`, text: `3,844` }, { id: `D`, text: `7,688` }],
      answer: `C` },

    { id: `m3ic-math-m2-12`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `medium`, type: `grid`,
      prompt: `<p>If 4 + <sup>3(7 &minus; <em>x</em>)</sup>&frasl;<sub>2</sub> = <sup>5(7 &minus; <em>x</em>)</sup>&frasl;<sub>3</sub>, what is the value of 7 &minus; <em>x</em>?</p>`,
      answer: [`24`] },

    { id: `m3ic-math-m2-13`, domain: `Geometry and Trigonometry`, skill: `Area and volume`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>The floor of a business office has an area of 1,575 square meters. An architect creates a scale model of the floor of the business office, where the length of each side of the model is <sup>1</sup>&frasl;<sub>15</sub> times the length of the corresponding side of the actual floor of the business office. What is the area, in square meters, of the scale model?</p>`,
      options: [{ id: `A`, text: `7` }, { id: `B`, text: `15` }, { id: `C`, text: `105` }, { id: `D`, text: `175` }],
      answer: `A` },

    { id: `m3ic-math-m2-14`, domain: `Advanced Math`, skill: `Nonlinear equations in one variable and systems of equations in two variables`, difficulty: `hard`, type: `mcq`,
      prompt: `<div style='text-align:center'><p><em>y</em> = 2<em>x</em><sup>2</sup> &minus; 16<em>x</em> + 37</p><p><em>y</em> + 4 = 0</p></div><p>How many solutions are there to the given system of equations?</p>`,
      options: [{ id: `A`, text: `There is exactly 1 solution.` }, { id: `B`, text: `There are exactly 2 solutions.` }, { id: `C`, text: `There are exactly 3 solutions.` }, { id: `D`, text: `There are no solutions.` }],
      answer: `D` },

    { id: `m3ic-math-m2-15`, domain: `Advanced Math`, skill: `Equivalent expressions`, difficulty: `hard`, type: `mcq`,
      prompt: `<p>Which expression is equivalent to <sup><em>y</em> + 13</sup>&frasl;<sub><em>x</em> &minus; 10</sub> + <sup><em>y</em>(<em>x</em> &minus; 10)</sup>&frasl;<sub><em>x</em><sup>2</sup><em>y</em> &minus; 10<em>xy</em></sub> ?</p>`,
      options: [{ id: `A`, text: `<sup><em>xy</em> + <em>y</em> + 3</sup>&frasl;<sub><em>x</em><sup>3</sup><em>y</em> &minus; 20<em>x</em><sup>2</sup><em>y</em> + 100<em>xy</em></sub>` }, { id: `B`, text: `<sup><em>xy</em> + 11<em>y</em> + 13</sup>&frasl;<sub><em>x</em><sup>2</sup><em>y</em> &minus; 10<em>xy</em> + <em>x</em> &minus; 10</sub>` }, { id: `C`, text: `<sup><em>xy</em><sup>2</sup> + 14<em>xy</em> &minus; 10<em>y</em></sup>&frasl;<sub><em>x</em><sup>2</sup><em>y</em> &minus; 10<em>xy</em></sub>` }, { id: `D`, text: `<sup><em>xy</em><sup>2</sup> + 14<em>xy</em> &minus; 10<em>y</em></sup>&frasl;<sub><em>x</em><sup>3</sup><em>y</em> &minus; 20<em>x</em><sup>2</sup><em>y</em> + 100<em>xy</em></sub>` }],
      answer: `C` },

    { id: `m3ic-math-m2-16`, domain: `Geometry and Trigonometry`, skill: `Lines, angles, and triangles`, difficulty: `hard`, type: `grid`,
      prompt: `<p>A polygon has exactly 95 sides. If the measure of each of the 95 interior angles of this polygon is (180<em>p</em>)&deg;, what is the value of <em>p</em>?</p>`,
      answer: [`93/95`, `.9789`, `0.9789`] },

    { id: `m3ic-math-m2-17`, domain: `Problem-Solving and Data Analysis`, skill: `Percentages`, difficulty: `hard`, type: `mcq`,
      prompt: `<p>The speeds of particles A, B, and C are <em>a</em> meters per second, <em>b</em> meters per second, and <em>c</em> meters per second, respectively. If the speed of particle A is 6,600% of the speed of particle C and the speed of particle C is 0.004% of the speed of particle B, which expression represents the value of <em>a</em> + <em>b</em> in terms of <em>c</em>?</p>`,
      options: [{ id: `A`, text: `25,066<em>c</em>` }, { id: `B`, text: `6,850<em>c</em>` }, { id: `C`, text: `6,604<em>c</em>` }, { id: `D`, text: `3,160<em>c</em>` }],
      answer: `A` },

    { id: `m3ic-math-m2-18`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `medium`, type: `grid`,
      prompt: `<p>The function <em>g</em> is defined by <em>g</em>(<em>x</em>) = 8<em>x</em>. For what value of <em>x</em> is <em>g</em>(<em>x</em>) = 24?</p>`,
      answer: [`3`] },

    { id: `m3ic-math-m2-19`, domain: `Advanced Math`, skill: `Equivalent expressions`, difficulty: `hard`, type: `mcq`,
      prompt: `<div style='text-align:center'><p>&minus;16(3<em>x</em> &minus; 4)<sup>2</sup> + 4(3<em>x</em> &minus; 2)<sup>2</sup></p></div><p>The given expression can be rewritten as <sup><em>a</em></sup>&frasl;<sub>4</sub><em>x</em><sup>2</sup> + <sup><em>b</em></sup>&frasl;<sub>4</sub><em>x</em> + <sup><em>c</em></sup>&frasl;<sub>4</sub>, where <em>a</em>, <em>b</em>, and <em>c</em> are constants. What is the value of <em>a</em> + <em>b</em> + <em>c</em>?</p>`,
      options: [{ id: `A`, text: `&minus;48` }, { id: `B`, text: `&minus;24` }, { id: `C`, text: `&minus;12` }, { id: `D`, text: `&minus;3` }],
      answer: `A` },

    { id: `m3ic-math-m2-20`, domain: `Advanced Math`, skill: `Nonlinear equations in one variable and systems of equations in two variables`, difficulty: `hard`, type: `grid`,
      prompt: `<div style='text-align:center'><p>&radic;<span style='text-decoration:overline'><em>k</em> &minus; <em>x</em></span> = 28 &minus; <em>x</em></p></div><p>In the given equation, <em>k</em> is a constant. The equation has exactly one real solution. What is the minimum possible value of 4<em>k</em>?</p>`,
      answer: [`111`] },

    { id: `m3ic-math-m2-21`, domain: `Algebra`, skill: `Linear functions`, difficulty: `medium`, type: `grid`,
      prompt: `<p><table border='1' style='border-collapse:collapse;text-align:center' cellpadding='7'><tr><th><em>x</em></th><th><em>g</em>(<em>x</em>)</th></tr><tr><td>&minus;38</td><td>5</td></tr><tr><td>&minus;8</td><td>0</td></tr><tr><td>34</td><td>&minus;7</td></tr></table></p><p>The table shows three values of <em>x</em> and their corresponding values of <em>g</em>(<em>x</em>), where <em>g</em> is a linear function. What is the <em>y</em>-coordinate of the <em>y</em>-intercept of the graph of <em>y</em> = <em>g</em>(<em>x</em>) in the <em>xy</em>-plane?</p>`,
      answer: [`-4/3`, `-1.33`, `-1.333`] },

    { id: `m3ic-math-m2-22`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `hard`, type: `grid`,
      prompt: `<p>The function <em>f</em> is defined by <em>f</em>(<em>x</em>) = <em>ax</em><sup>2</sup> + <em>bx</em> + <em>c</em>, where <em>a</em>, <em>b</em>, and <em>c</em> are constants and 1 &lt; <em>a</em> &lt; 4. The graph of <em>y</em> = <em>f</em>(<em>x</em>) in the <em>xy</em>-plane passes through the points (12, 0) and (&minus;6, 0). If <em>a</em> is an integer, what could be the value of <em>a</em> + <em>b</em>?</p>`,
      answer: [`-10`] },
  ];

  Apex.bank.register({
    id: "dsat-2024-03-int-c",
    title: "March 2024",
    type: "digital",
    region: "International",
    version: "C",
    year: 2024,
    monthNum: 3,
    tagline: "International \u00b7 Version C",
    description: "Digital SAT \u2014 March 2024 International prediction form, Version C (answers solved independently; RW-M2 is a scrambled parallel twin of RW-M1).",
    adaptive: false,
    sections: [
      { id: "rw", modules: [
        { id: "m3ic-rw-m1", stage: 1, name: "Reading and Writing \u2014 Module 1", minutes: 32, questions: RW_M1 },
        { id: "m3ic-rw-m2", stage: 2, variant: "hard", name: "Reading and Writing \u2014 Module 2 (Hard)", minutes: 32, questions: RW_M2 },
      ] },
      { id: "math", modules: [
        { id: "m3ic-math-m1", stage: 1, name: "Math \u2014 Module 1", minutes: 35, calculator: true, questions: MATH_M1 },
        { id: "m3ic-math-m2", stage: 2, variant: "hard", name: "Math \u2014 Module 2 (Hard)", minutes: 35, calculator: true, questions: MATH_M2 },
      ] },
    ],
  });
})();
