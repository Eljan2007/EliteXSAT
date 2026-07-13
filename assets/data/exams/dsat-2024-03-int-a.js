/* Digital SAT - March 2024 International Form A. Rebuilt in EliteXSAT native UI. Both Module 2s Hard. Independently solved (student keys unreliable). No explanations. COMPLETE. */
(function () {
  const RW_M1 = [
    { id: `m3ia-rw-m1-1`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `easy`, type: `mcq`,
      passage: `<p>The following text is adapted from Willa Cather's 1912 novel <em>Alexander's Bridge.</em></p><p>For the next few days Alexander was very busy. He took a desk in the office of a [Scottish] engineering firm on Henrietta Street, and was at work almost <u>constantly.</u> He avoided the clubs and usually dined alone at his hotel.</p>`,
      prompt: `As used in the text, what does the word “constantly” most nearly mean?`,
      options: [{ id: `A`, text: `Hastily` }, { id: `B`, text: `Carefully` }, { id: `C`, text: `Nonstop` }, { id: `D`, text: `Enough` }],
      answer: `C` },

    { id: `m3ia-rw-m1-2`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Radiocarbon dating can help scientists determine whether the extinction of the giant short-faced bear around 8000 BCE _____ the arrival of humans in the same region of the Americas. If instead the giant short-faced bear died out before humans could have altered its habitat, that suggests that its extinction was the result of some other factor, such as change in sea levels as a result of glaciers retreating.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `compensated for` }, { id: `B`, text: `coincided with` }, { id: `C`, text: `developed into` }, { id: `D`, text: `clashed with` }],
      answer: `B` },

    { id: `m3ia-rw-m1-3`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Economists often assert that countries looking to increase their reliance on solar energy should expand their capacity for storage; having an ample reserve of stored energy can mitigate the effects of _____ solar energy collection caused by unpredictable shifts in cloud cover and haze.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `calibrations with` }, { id: `B`, text: `developments of` }, { id: `C`, text: `fluctuations in` }, { id: `D`, text: `incentives for` }],
      answer: `C` },

    { id: `m3ia-rw-m1-4`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Few religious buildings can be said to _____ the astonishing size of Sultan Salahuddin Abdul Aziz Mosque in Malaysia, which, with the capacity to accommodate approximately 24,000 people at once, is one of the largest mosques in the world.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `conceal` }, { id: `B`, text: `symbolize` }, { id: `C`, text: `minimize` }, { id: `D`, text: `match` }],
      answer: `D` },

    { id: `m3ia-rw-m1-5`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `hard`, type: `mcq`,
      passage: `<p>In the United States, historians of the American Revolution once had a tendency to approach their subject with _____: they had so much admiration for the people who carried out the revolution that they were far from objective in their scholarship.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `curiosity` }, { id: `B`, text: `candor` }, { id: `C`, text: `reverence` }, { id: `D`, text: `prudence` }],
      answer: `C` },

    { id: `m3ia-rw-m1-6`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The following text is from the 1895 poem “Marshlands” by Emily Pauline Johnson, a Kanien'kehá:ka (Mohawk) writer also known as Tekahionwake.</p><p>Among the wild rice in the still lagoon,<br>In monotone the lizard shrills his tune.<br>The wild goose, homing, seeks a sheltering,<br>Where rushes grow, and oozing lichens cling.<br>Late cranes with heavy wing, and lazy flight,<br>Sail up the silence with the nearing night.<br>And like a spirit, swathed in some soft veil,<br>Steals twilight and its shadows o'er the swale.<br>Hushed lie the sedges, and the vapours creep,<br>Thick, grey and humid, while the marshes sleep.</p>`,
      prompt: `Which choice best describes the overall structure of the text?`,
      options: [{ id: `A`, text: `It identifies a location, then refers to a person living there.` }, { id: `B`, text: `It sketches a setting by presenting a series of images of nature.` }, { id: `C`, text: `It makes an extended comparison of nature to human emotions.` }, { id: `D`, text: `It names animal species found in a place, then names plant species there.` }],
      answer: `B` },

    { id: `m3ia-rw-m1-7`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `<p>President Richard Nixon is most famous for his participation in the 1970s Watergate political scandal, a convoluted tale of criminality and eroded ethics involving a constellation of associates such as Chief of Staff H.R. “Bob” Haldeman and Nixon's personal friend Charles “Bebe” Rebozo. But Nixon's legacy is complex: he has been praised for his role in opening relations between the United States and China, and he once made an attempt at reforming United States health care policy that is arguably a precursor to the Affordable Care Act, which became law during the Barack Obama administration.</p>`,
      prompt: `Which choice best states the main purpose of the text?`,
      options: [{ id: `A`, text: `It catalogs the most notable achievements of a historical figure.` }, { id: `B`, text: `It argues that the seeming prominence of a historical figure is largely due to the actions of others.` }, { id: `C`, text: `It assesses a historical figure's significance by considering both his achievements and failings.` }, { id: `D`, text: `It explains how a historical figure's reputation has improved significantly with the passage of time.` }],
      answer: `C` },

    { id: `m3ia-rw-m1-8`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Thermal technologies have been used in the food industry for over 100 years, providing a way of preserving food in large batches. Recent advancements in ohmic heating were made through research in Chile on the preservation of strawberries. Ohmic heating is generally considered to be an improvement over more conventional thermal preservation methods: whereas conventional methods transfer energy from the surface of a food to its interior, ohmic heating passes electric current through food products to generate heat within the food itself.</p>`,
      prompt: `Which choice best states the main purpose of the text?`,
      options: [{ id: `A`, text: `It provides an overview of the research into ohmic heating both globally and in a specific country.` }, { id: `B`, text: `It introduces ohmic heating as a food preservation technology and identifies one of its advantages.` }, { id: `C`, text: `It explains why conventional heating methods are popular in commercial applications and proposes a shift away from these methods.` }, { id: `D`, text: `It suggests that there are possible flaws in ohmic heating technologies that have not yet been well researched.` }],
      answer: `B` },

    { id: `m3ia-rw-m1-9`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The following text is from Julia Alvarez's 2000 novel <em>In the Name of Salomé.</em> Salomé, a poet, is hosting guests in the front parlor of her family home, and Ramona is her sister. A salon is a social gathering for the exploration of intellectual ideas.</p><p>It was evening when the two men got up to leave. Tía Ana had already come into the room several times to see if these guests had departed yet. The front parlor had always been her special province, as she used it for her little school. Now, every evening, it turned into Salomé's salon, as Ramona called it, and it was never in order for its transformation back to a classroom the following morning.</p>`,
      prompt: `Based on the text, what most likely motivates Tía Ana's behavior during Salomé's salon?`,
      options: [{ id: `A`, text: `She considers the guests to be uninteresting and is trying to convince them to leave.` }, { id: `B`, text: `She is anxious for the gathering to disperse so that she can ready the space for her own needs.` }, { id: `C`, text: `She is impatient to share her plans to start a new school with the guests and hopes they will support her.` }, { id: `D`, text: `She is frustrated because she needs assistance elsewhere in the house, but Salomé is unavailable while entertaining the guests.` }],
      answer: `B` },

    { id: `m3ia-rw-m1-10`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Mexican textile artist Victoria Villasana weaves stories of triumph, using her unique method of applying colorful yarn to photographs of people. In some works, Villasana focuses on celebrating cultural icons who are people of color, as she does in her depiction of musician and composer Prince. However, in other works, Villasana honors ordinary people, as she does in her captivating portrayal of a young girl sitting on a sidewalk. Villasana sees both of these approaches as ways of depicting the power and interconnectedness of all people.</p>`,
      prompt: `Which choice best states the main idea of the text?`,
      options: [{ id: `A`, text: `Villasana's portrayal of a young girl sitting on a sidewalk focuses more on human connection than it does on human resilience.` }, { id: `B`, text: `Villasana began her artistic career by painting portraits of famous people and then transitioned to depicting everyday people instead.` }, { id: `C`, text: `Villasana's works focus on recognizing both famous and everyday examples of human strength and connection.` }, { id: `D`, text: `Villasana's depiction of Prince receives more attention from scholars than her depiction of a young girl sitting on a sidewalk does.` }],
      answer: `C` },

    { id: `m3ia-rw-m1-11`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `easy`, type: `mcq`,
      passage: `<div style="text-align:center;font-weight:600;font-size:12px;margin:2px 0">Total Areas of Five Pueblo Nations in New Mexico</div><table style="border-collapse:collapse;margin:6px auto"><tr><th style="border:1px solid var(--border);padding:3px 12px">Tribal nation</th><th style="border:1px solid var(--border);padding:3px 12px">Area (square miles)</th></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Pueblo of Tesuque</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">26.9</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Pueblo of Santa Ana</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">101.1</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Pueblo de San Ildefonso</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">47.3</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Pueblo of Acoma</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">595.7</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Santa Clara Pueblo</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">77.1</td></tr></table><p>There are nineteen Pueblo tribal nations in New Mexico. A student in a geography class is a citizen of the Pueblo of Santa Ana in the north-central part of the state. The student wants to compare the total area covered by the Pueblo of Santa Ana with the total areas of various other Pueblo nations in the state. Looking at the table, the student finds that the total area of the Pueblo of Santa Ana is 101.1 square miles, while the total area of the Pueblo of Tesuque is _____</p>`,
      prompt: `Which choice most effectively uses data from the table to complete the comparison?`,
      options: [{ id: `A`, text: `77.1 square miles.` }, { id: `B`, text: `595.7 square miles.` }, { id: `C`, text: `26.9 square miles.` }, { id: `D`, text: `47.3 square miles.` }],
      answer: `C` },

    { id: `m3ia-rw-m1-12`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `medium`, type: `mcq`,
      passage: `<div style="text-align:center;font-weight:600;font-size:12px;margin:2px 0">Days per Winter That Lakes Have Surface Ice</div><table style="border-collapse:collapse;margin:6px auto"><tr><th style="border:1px solid var(--border);padding:3px 12px">Winter</th><th style="border:1px solid var(--border);padding:3px 12px">Näckten</th><th style="border:1px solid var(--border);padding:3px 12px">Lake Kegonsa</th><th style="border:1px solid var(--border);padding:3px 12px">Spirit Lake</th></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">1980–81</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">175</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">93</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">100</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">1985–86</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">168</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">116</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">134</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">1990–91</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">143</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">103</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">122</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">1995–96</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">175</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">113</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">133</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">2000–01</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">132</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">124</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">148</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">2005–06</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">135</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">100</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">126</td></tr></table><p>It is common for freshwater lakes near or above a latitude of 45° north of the equator, like Lake Mjøsa in Norway, to accumulate surface ice in winter. The amount and duration of ice depends on many factors, including local weather conditions as well as the lake's depth, volume, and surface area, but a climate researcher claims that some lakes in these latitudes have seen a decline in the duration of ice between the early 1980s and the mid-2000s.</p>`,
      prompt: `Which choice best describes data from the table that support the researcher's claim?`,
      options: [{ id: `A`, text: `Näckten had approximately 175 days of ice in the winter of 1980–81 and approximately 135 days of ice in the winter of 2005–06.` }, { id: `B`, text: `None of the three lakes had fewer days of ice in the winter of 1980–81 than they did in the winter of 2005–06.` }, { id: `C`, text: `Spirit Lake had approximately 100 days of ice in the winter of 1980–81 and approximately 125 days of ice in the winter of 2005–06.` }, { id: `D`, text: `The highest number of days of ice a lake in the table had in the winter of 2005–06 was approximately 135.` }],
      answer: `A` },

    { id: `m3ia-rw-m1-13`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `medium`, type: `mcq`,
      passage: `<div style="text-align:center;font-weight:600;font-size:12px;margin:2px 0">Highest-Grossing Films in a Language Other than English at US Box Office</div><table style="border-collapse:collapse;margin:6px auto"><tr><th style="border:1px solid var(--border);padding:3px 12px">Title</th><th style="border:1px solid var(--border);padding:3px 12px">Lifetime gross earnings</th><th style="border:1px solid var(--border);padding:3px 12px">Opening weekend box office gross earnings</th><th style="border:1px solid var(--border);padding:3px 12px">US release date</th><th style="border:1px solid var(--border);padding:3px 12px">Director</th><th style="border:1px solid var(--border);padding:3px 12px">Oscar nominated?</th></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">The Lives of Others</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">$11,286,112</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">$223,000</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">February 9, 2007</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Florian Henckel von Donnersmarck</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Yes</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Baahubali 2: The Conclusion</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">$20,186,659</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">$10,430,497</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">April 28, 2017</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">S.S. Rajamouli</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">No</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Pan's Labyrinth</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">$37,634,615</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">$568,641</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">December 29, 2006</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Guillermo del Toro</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Yes</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Huevos: Little Rooster's Egg-cellent Adventure</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">$9,080,818</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">$3,424,702</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">September 4, 2015</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Gabriel Riva Palacio Alatriste and Rodolfo Riva Palacio Alatriste</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">No</td></tr></table><p>Many films in a language other than English grow to be financially successful over the course of their time in movie theaters in the United States, but some become immediate successes in their opening weekends. A journalist claims that a film's reception can greatly influence its long-term success. Indications that the film is of high quality, such as an Oscar nomination, can dramatically boost public interest in the film and thus its overall earnings, even with a relatively modest opening weekend performance.</p>`,
      prompt: `Which choice best describes data from the table that support the journalist's claim?`,
      options: [{ id: `A`, text: `The Lives of Others was recognized by the Oscars, but Baahubali 2: The Conclusion, which was not recognized by the Oscars, had higher lifetime earnings.` }, { id: `B`, text: `Although the opening weekend earnings were $10,430,497 for Baahubali 2: The Conclusion and $3,424,702 for Huevos: Little Rooster's Egg-cellent Adventure, neither film was recognized by the Oscars.` }, { id: `C`, text: `Pan's Labyrinth, which was recognized by the Oscars, earned less money in its opening weekend but had higher lifetime earnings than Huevos: Little Rooster's Egg-cellent Adventure, which was not recognized by the Oscars.` }, { id: `D`, text: `Although Pan's Labyrinth and The Lives of Others were both recognized by the Oscars, Pan's Labyrinth had higher lifetime and opening weekend earnings.` }],
      answer: `C` },

    { id: `m3ia-rw-m1-14`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Rue du Petit-Champlain in Québec City, Canada, is a pedestrianized street—it is closed to car traffic except in special circumstances. Students in Québec City surveyed residents about a proposal to increase the amount of car traffic allowed on Rue du Petit-Champlain. The survey results suggest that residents are generally against the proposal, and the students claim that much of the survey respondents' opposition stems from concerns that allowing more car traffic would diminish the distinctive character of the street.</p>`,
      prompt: `Which quotation from a survey respondent would best illustrate the students' claim?`,
      options: [{ id: `A`, text: `“I think Québec City needs more streets like Rue du Petit-Champlain, not more streets full of loud cars spewing exhaust fumes into the air.”` }, { id: `B`, text: `“Rue du Petit-Champlain is one of the most unusual streets in Québec City. I would hate to see it become just like any other street.”` }, { id: `C`, text: `“A lot of the businesses on Rue du Petit-Champlain depend on foot traffic. If fewer people walk on the street because there are more cars, those businesses might struggle.”` }, { id: `D`, text: `“People behind this idea hardly consulted any of us who work or live around Rue du Petit-Champlain. This proposal doesn't reflect our opinions.”` }],
      answer: `B` },

    { id: `m3ia-rw-m1-15`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Arthurian legends (tales related to the character of King Arthur) derive from many sources, such as <em>Preiddeu Annwfn</em>, composed around 900, and <em>Erec and Enide</em> from around 1170. One of the most significant sources, Geoffrey of Monmouth's <em>History of the Kings of Britain</em>, was written in the 1130s; some material from it was later adapted by the Norman poet Wace into the <em>Roman de Brut</em> in 1155. But while the <em>Roman de Brut</em> includes references to the famous Round Table at which Arthur's knights assembled, nothing written before 1155 does, which suggests that _____</p>`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `Roman de Brut is more historically accurate than History, because Erec and Enide had not been written when Geoffrey of Monmouth was writing his work.` }, { id: `B`, text: `Geoffrey of Monmouth was unaware of stories of the Round Table when composing his History, though historians know that works containing such stories were available to him.` }, { id: `C`, text: `Geoffrey of Monmouth's accounts of Arthurian legends in his History are more similar overall in content to the accounts in Erec and Enide than they are to the accounts in Roman de Brut.` }, { id: `D`, text: `any Arthurian legend that mentions the Round Table likely has a lineage that connects it to Roman de Brut.` }],
      answer: `D` },

    { id: `m3ia-rw-m1-16`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `easy`, type: `mcq`,
      passage: `<p>Azulejos, mosaics made of glazed ceramic tiles, can be found throughout Portugal. These mosaics beautify places such as _____ stations, and public squares.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `libraries train` }, { id: `B`, text: `libraries, train` }, { id: `C`, text: `libraries—train` }, { id: `D`, text: `libraries: train` }],
      answer: `B` },

    { id: `m3ia-rw-m1-17`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>On February 1, 2018, Florida-based researchers Martha A. Scholl, Maoya Bassiouni, and Angel J. Torres-Sánchez _____ climate data from several sites in Puerto Rico's Luquillo Mountains. At 12:00 a.m., the air temperature was 15.6°C at site CC1, the site with the highest elevation, and it had shifted to 16.2°C by 6:00 p.m.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `compiled;` }, { id: `B`, text: `compiled:` }, { id: `C`, text: `compiled` }, { id: `D`, text: `compiled,` }],
      answer: `C` },

    { id: `m3ia-rw-m1-18`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Writer Silvia Moreno-Garcia's love of short fiction began when she read a collection of Edgar Allan Poe stories as a child, and she would develop into a prolific short story writer herself, publishing pieces like “Return” (2008) and “Water” (2007). Yet she's become, with the breakout success of her 2020 novel <em>Mexican</em> _____ best known as a novelist.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `<em>Gothic</em>—` }, { id: `B`, text: `<em>Gothic</em>` }, { id: `C`, text: `<em>Gothic</em>,` }, { id: `D`, text: `<em>Gothic</em>;` }],
      answer: `C` },

    { id: `m3ia-rw-m1-19`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Featuring works by the photographers Dora Maar and Rogi André, the 2021 exhibition <em>The New Woman Behind the Camera</em> set out to provide a wide-ranging overview of photography by women in the 1920s through the _____ given the collection's breadth of more than 120 photos, its efforts were largely successful.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `1950s` }, { id: `B`, text: `1950s and` }, { id: `C`, text: `1950s, and` }, { id: `D`, text: `1950s,` }],
      answer: `C` },

    { id: `m3ia-rw-m1-20`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Margaret Wendell Huntington and Nessa Cohen were among the 300 artists who exhibited at the 1913 Armory Show, a groundbreaking New York City art exhibition that introduced modernism to American audiences. Though now canonical, many works featured in the show—particularly one abstract cubist painting by Marcel Duchamp—_____ considered shocking at the time.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `were` }, { id: `B`, text: `was` }, { id: `C`, text: `is` }, { id: `D`, text: `has been` }],
      answer: `A` },

    { id: `m3ia-rw-m1-21`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Along the hallowed walls of New York City's Museum of Modern Art hangs 36.5-by-28.5-inch oil _____ which was created in 1944 by American artist Enrico Donati.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `painting, <em>St. Elmo's Fire</em>,` }, { id: `B`, text: `painting <em>St. Elmo's Fire</em>,` }, { id: `C`, text: `painting <em>St. Elmo's Fire</em>` }, { id: `D`, text: `painting, <em>St. Elmo's Fire</em>` }],
      answer: `A` },

    { id: `m3ia-rw-m1-22`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `easy`, type: `mcq`,
      passage: `<p>Humans inherit specific physical traits (like having type O or type AB blood) from their parents. _____ cats inherit specific physical traits (like having short or long fur) from their parents.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `In other words,` }, { id: `B`, text: `As a result,` }, { id: `C`, text: `In conclusion,` }, { id: `D`, text: `Similarly,` }],
      answer: `D` },

    { id: `m3ia-rw-m1-23`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Author Ursula K. Le Guin's <em>Rocannon's World</em> is a science fiction story set in an era of intergalactic travel, whereas her <em>The Tombs of Atuan</em> is a work of fantasy set in a land of heroes and dragons. _____ both fans of science fiction and fans of fantasy are among her many readers.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `At that time,` }, { id: `B`, text: `Alternatively,` }, { id: `C`, text: `Accordingly,` }, { id: `D`, text: `Nevertheless,` }],
      answer: `C` },

    { id: `m3ia-rw-m1-24`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>Spinach is a vegetable that contains ascorbic acid, an essential nutrient for humans.</li><li>There is 30 milligrams (mg) of ascorbic acid in every 100 grams (g) of spinach.</li><li>Cauliflower is a vegetable that contains ascorbic acid.</li><li>There is 48 mg of ascorbic acid in every 100 g of cauliflower.</li><li>Humans cannot make ascorbic acid in their bodies, so they must get it from foods, including fruits and vegetables.</li><li>Ascorbic acid is also known as vitamin C.</li></ul>`,
      prompt: `The student wants to emphasize a similarity between spinach and cauliflower. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `Humans cannot make vitamin C in their bodies, so they must get this essential nutrient from vegetables, such as spinach.` }, { id: `B`, text: `Just like fruits, vegetables are a food that humans can eat to get ascorbic acid, also known as vitamin C.` }, { id: `C`, text: `Cauliflower is a vegetable that contains ascorbic acid; in fact, there is 48 mg of it in every 100 g of cauliflower.` }, { id: `D`, text: `One thing that spinach and cauliflower have in common is that they both contain vitamin C.` }],
      answer: `D` },

    { id: `m3ia-rw-m1-25`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>In 2022, University of Miami researchers discovered brine pools in the Gulf of Aqaba.</li><li>A brine pool is an underwater lake that sits on the ocean floor.</li><li>The water in brine pools is three to eight times saltier than the surrounding ocean.</li><li>The extreme saltiness of this water makes it toxic to most sea life.</li><li>Some forms of bacteria are able to survive in brine pools.</li></ul>`,
      prompt: `The student wants to explain why brine pools are toxic to most sea life. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `The brine pools in the Gulf of Aqaba are toxic to most sea life and were discovered by researchers in 2022.` }, { id: `B`, text: `The water in brine pools is toxic to most sea life because it is three to eight times saltier than the surrounding ocean.` }, { id: `C`, text: `Though brine pools are toxic to most sea life, some bacteria can survive there.` }, { id: `D`, text: `Brine pools are salty underwater lakes that sit on the ocean floor.` }],
      answer: `B` },

    { id: `m3ia-rw-m1-26`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li><em>Dysphania pusilla</em> is a plant species.</li><li>It was believed to be extinct until a living specimen was identified in New Zealand in 2015.</li><li><em>Pseudorca crassidens</em> is a mammal species.</li><li>It was believed to be extinct until a living specimen was identified in Denmark in 1861.</li><li>They are considered Lazarus species.</li><li>“Lazarus species” is a term for living species of organisms that were once believed to be extinct.</li></ul>`,
      prompt: `The student wants to specify where <em>Dysphania pusilla</em> was identified. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `In 1861, a living specimen of <em>Pseudorca crassidens</em> was found in Denmark.` }, { id: `B`, text: `Previously believed to be extinct, a living specimen of <em>Dysphania pusilla</em> was identified in New Zealand.` }, { id: `C`, text: `A living specimen of <em>Dysphania pusilla</em>, once believed to be extinct, was identified in 2015.` }, { id: `D`, text: `Examples of Lazarus species can be found in <em>Dysphania pusilla</em> as well as <em>Pseudorca crassidens</em>.` }],
      answer: `B` },

    { id: `m3ia-rw-m1-27`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>Marine biology is primarily the study of sea life.</li><li>Mary Jane Rathbun was an American marine biologist born in 1860.</li><li>She is known for her research on freshwater crabs.</li><li>Ornithology is primarily the study of birds.</li><li>Emilie Snethlage was a German-Brazilian ornithologist born in 1868.</li><li>She is known for her research on Brazilian birds.</li></ul>`,
      prompt: `Which choice most effectively uses information from the given sentences to emphasize a similarity between Rathbun and Snethlage?`,
      options: [{ id: `A`, text: `The marine biologist Mary Jane Rathbun was born in 1860, but ornithologist Emilie Snethlage was born later, in 1868.` }, { id: `B`, text: `Marine biology and ornithology are just two examples of the myriad fields in which scientists can specialize.` }, { id: `C`, text: `Mary Jane Rathbun conducted research on freshwater crabs; Emilie Snethlage, by contrast, is known for her research on Brazilian birds.` }, { id: `D`, text: `Like marine biologist Mary Jane Rathbun, ornithologist Emilie Snethlage dedicated her scientific career to the study of living organisms.` }],
      answer: `D` },
  ];

  const RW_M2 = [
    { id: `m3ia-rw-m2-1`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>A number of recording artists combine Indigenous music with other musical styles. Choctaw singer-songwriter Samantha Crain masterfully incorporated elements of Choctaw hymns into folk-pop on her single “When We Remain.” Similarly, Wayuu singer-songwriter Lido Pimienta _____ Afro-Indigenous music from Colombia with Latin pop on her album <em>Miss Colombia.</em></p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `confused` }, { id: `B`, text: `compared` }, { id: `C`, text: `blended` }, { id: `D`, text: `replaced` }],
      answer: `C` },

    { id: `m3ia-rw-m2-2`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Whether the reign of a French monarch such as Charles VIII or Henry I was considered historically significant or, conversely, relatively _____, its trajectory was shaped by questions of legitimacy and therefore cannot be understood without a corollary understanding of the factors that allowed the monarch to assert a claim to the throne successfully.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `momentous` }, { id: `B`, text: `inconsequential` }, { id: `C`, text: `benevolent` }, { id: `D`, text: `genuine` }],
      answer: `B` },

    { id: `m3ia-rw-m2-3`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Barring major archaeological discoveries, we are unlikely to ever have _____ account of ancient Egypt under the female pharaoh Hatshepsut, as much of the evidence of her reign was deliberately destroyed by her successors.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `an exhaustive` }, { id: `B`, text: `a superficial` }, { id: `C`, text: `an imaginative` }, { id: `D`, text: `a questionable` }],
      answer: `A` },

    { id: `m3ia-rw-m2-4`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `hard`, type: `mcq`,
      passage: `<p>The Roc-aux-Sorciers frieze—a group of relief carvings of animals found in what is now France and dating from around 14,000 years ago—is sometimes said to be emotionally powerful despite its age, but in fact the frieze is _____ precisely because of its age. It is the link of shared humanity with the artist across so many centuries that gives the Roc-aux-Sorciers frieze such resonance.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `ingenious` }, { id: `B`, text: `pristine` }, { id: `C`, text: `meticulous` }, { id: `D`, text: `affecting` }],
      answer: `D` },

    { id: `m3ia-rw-m2-5`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Amsterdam has high pedestrian traffic, but simply replicating a feature of Amsterdam associated with walkability—e.g., its high number of relatively short blocks—may be insufficient to induce increased walking in other cities. As urbanist Mariela Alfonzo argues, our understanding of individuals' decision-making about whether to walk is insufficiently robust: <u>some studies emphasize the role of climate conditions, others the role of recreational amenities, and so on</u>, but walking decisions are made in complex contexts in which multiple conditions and needs inform individuals' choices.</p>`,
      prompt: `Which choice best describes the function of the underlined portion in the text as a whole?`,
      options: [{ id: `A`, text: `It illustrates a scholarly disagreement described earlier in the sentence.` }, { id: `B`, text: `It summarizes the findings of studies whose methods are discussed earlier in the sentence.` }, { id: `C`, text: `It acknowledges a potential objection to the argument presented earlier in the sentence.` }, { id: `D`, text: `It elaborates on a claim presented earlier in the sentence.` }],
      answer: `D` },

    { id: `m3ia-rw-m2-6`, domain: `Craft and Structure`, skill: `Cross-Text Connections`, difficulty: `hard`, type: `mcq`,
      passage: `<p><strong>Text 1</strong></p><p>Scholarship today overrepresents formal experimentation, such as William Carlos Williams's use of minimalistic, image-based structures, well beyond the degree to which it actually influenced US poetry during the modernist period (roughly 1900–1945). Meanwhile, the work of Countee Cullen, who relied on conventional poetic forms associated with previous literary periods, attracts woefully little attention from scholars of modernism.</p><p><strong>Text 2</strong></p><p>Distant reading, or computer-assisted quantitative analysis of massive collections of digitized texts, can reveal stylistic elements that have heretofore escaped notice, despite being shared by numerous texts from the modernist period. For too long, scholars have focused on experimental versus conventional poetic forms, inhibiting inquiry into other points of stylistic correspondence among poems that would enrich our understanding of the modernist canon.</p>`,
      prompt: `Based on the texts, how would the author of Text 2 most likely regard the emphasis that Text 1 places on poetic form during the modernist period?`,
      options: [{ id: `A`, text: `As having the effect of forestalling consideration of the full stylistic dimensions of poetry written in the period` }, { id: `B`, text: `As overestimating the impact that poetic form, whether experimental or conventional, has on the reading experience` }, { id: `C`, text: `As being founded on a misconception about modernist poetry that has been called into question by distant reading` }, { id: `D`, text: `As complementing the study of other stylistic features that distinguish the modernist period` }],
      answer: `A` },

    { id: `m3ia-rw-m2-7`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `medium`, type: `mcq`,
      passage: `<p>In her 1998 book <em>Blues Legacies and Black Feminism</em>, Angela Y. Davis bases her analysis in part on recordings of songs sung in the 1920s by Gertrude “Ma” Rainey and Bessie Smith. Davis focuses on how Rainey and Smith improvised the lyrics—replacing the original lines with mischievous jokes and wordplay. Davis's work was particularly labor intensive because in order to transcribe, or write down, the lyrics as Rainey and Smith sang them, Davis had to listen repeatedly to the vinyl recordings, which weren't very clear.</p>`,
      prompt: `What does the text most strongly suggest about the songs sung by Rainey and Smith?`,
      options: [{ id: `A`, text: `The songs have grown in popularity since Rainey and Smith first sang them.` }, { id: `B`, text: `According to Davis, the songs sung by Rainey were more musically innovative than those sung by Smith typically were.` }, { id: `C`, text: `There were more recordings made of Rainey's songs than there were of Smith's.` }, { id: `D`, text: `There were few, if any, reliable transcriptions of Smith's and Rainey's improvised lyrics when Davis began her research.` }],
      answer: `D` },

    { id: `m3ia-rw-m2-8`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Rafael Núñez and colleagues studied how members of the Yupno, an Indigenous group in Papua New Guinea, conceptualize time. The researchers recorded Yupno speakers explaining certain temporal words and phrases, such as <em>abjuk</em>, a present-oriented expression that translates to “now,” and coded each speaker's manual gestures. Previous research has found a tendency in many cultures to make temporal distinctions using spatial concepts and gestures, particularly along egocentric axes (i.e., relative to the orientation of the speaker): for instance, English speakers often refer to the front/back axis to describe events in time. In an anthropology paper, a student claims that the tendency toward ego-based conceptualizations of time is universal.</p>`,
      prompt: `Which finding, if true, would most directly weaken the student's claim?`,
      options: [{ id: `A`, text: `Some Yupno grammatical structures used when talking about time are also used in English.` }, { id: `B`, text: `When Yupno speakers who are outdoors use gestures to refer to the past, they point downhill from their current location regardless of which way they are facing.` }, { id: `C`, text: `A Yupno speaker points in opposite directions when indicating a past event versus a future event.` }, { id: `D`, text: `Although Yupno speakers and English speakers both use gestures to indicate orientation in time, Yupno speakers tend to use fewer gestures overall when speaking than English speakers do.` }],
      answer: `B` },

    { id: `m3ia-rw-m2-9`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Neurobiologists Laura Cuaya, Raúl Hernández-Pérez, and colleagues investigated the language detection abilities of eighteen dogs. The researchers monitored the brain activity of Bran (a border collie), Alma (a mixed breed), and other dogs while the animals listened to three recordings: one of <em>The Little Prince</em> being read in Spanish, the second in Hungarian, and a third made up of short, randomly selected fragments of the first two, scrambled so that they didn't resemble human speech. Each dog was familiar with either Spanish or Hungarian, but not both. The team concluded that differences in dogs' anatomical features may affect their ability to distinguish speech from nonspeech.</p>`,
      prompt: `Which finding from the study, if true, would most directly support the team's conclusion?`,
      options: [{ id: `A`, text: `The pattern of brain activity that long-headed dogs showed when hearing the scrambled recording was different from the pattern of brain activity that short-headed dogs showed when hearing the language they were accustomed to.` }, { id: `B`, text: `Long-headed dogs accustomed to hearing Spanish tended to show more brain activity when hearing Spanish than long-headed dogs accustomed to hearing Hungarian showed when hearing Hungarian.` }, { id: `C`, text: `Compared with longer-headed dogs, shorter-headed dogs showed less difference in brain activity when hearing either Spanish or Hungarian than when hearing the scrambled recording.` }, { id: `D`, text: `Compared with longer-headed dogs, shorter-headed dogs showed a greater difference in brain activity when hearing the language they were accustomed to than when hearing the other language.` }],
      answer: `C` },

    { id: `m3ia-rw-m2-10`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `<p>The onsets of growing seasons in Alaska have been shifting earlier, potentially enabling increased carbon dioxide (CO<sub>2</sub>) absorption through greater productivity of mooseberry (<em>Viburnum edule</em>) plants and other vegetation, but also potentially enabling increased CO<sub>2</sub> output through greater heterotrophic respiration (CO<sub>2</sub> generated by the activity of soil microorganisms). Hydrologist Yonghong Yi and her colleagues modeled seasonal changes in net CO<sub>2</sub> in Alaska in a landscape grid of 1 square kilometer (km<sup>2</sup>) cells and again in a grid of 10 km<sup>2</sup> cells, which are finer resolutions than most models of net CO<sub>2</sub> have achieved. The researchers concluded that variations in the landscape affect net CO<sub>2</sub> in ways that most models are too coarse to capture.</p>`,
      prompt: `Which finding from the researchers' study, if true, would most directly support the researchers' conclusion?`,
      options: [{ id: `A`, text: `Higher average heterotrophic respiration rates were found for summer months than for winter months when modeled using either a grid of 1 km<sup>2</sup> cells or a grid of 10 km<sup>2</sup> cells.` }, { id: `B`, text: `No correlations between seasonal variations in average heterotrophic respiration and CO<sub>2</sub> absorption by <em>V. edule</em> and other plant species were found when modeled using either a grid of 1 km<sup>2</sup> cells or a grid of 10 km<sup>2</sup> cells.` }, { id: `C`, text: `Lower average heterotrophic respiration rates were found for autumn months when modeled using a grid of 1 km<sup>2</sup> cells than when modeled using a grid of 10 km<sup>2</sup> cells.` }, { id: `D`, text: `When seasonal fluxes in average CO<sub>2</sub> absorption and heterotrophic respiration were modeled using a grid of 1 km<sup>2</sup> cells, much more data were generated than when seasonal fluxes were modeled using a grid of 10 km<sup>2</sup> cells, though the two models reported identical net CO<sub>2</sub>.` }],
      answer: `C` },

    { id: `m3ia-rw-m2-11`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Indigenous songs can be repositories of ecological information, from Yi songs about the natural environment to Tlingit songs about wildlife encounters. Kwakwaka'wakw song keeper Kwaxsistalla Wathl'thla aided research by ethnobiologist Dana Lepofsky et al. by contributing songs that reference creating terraced intertidal gardens to foster the healthy development of clams, a staple in the Kwakwaka'wakw people's diet. Such structures date as far back as 3,500 years ago. Intriguingly, analysis of local paleoecological marine bivalve records has revealed significant increases in clam size and productivity as clam garden practices became more prevalent and harvesting pressure increased—a finding that bolsters the notion that _____</p>`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `the Kwakwaka'wakw people encouraged the health of clam gardens and reduced pressure on them by periodically increasing their reliance on other sources of sustenance.` }, { id: `B`, text: `the practical approach described in the Kwakwaka'wakw songs effectively maintained clams as a sustainable food source.` }, { id: `C`, text: `the Kwakwaka'wakw people initially adapted their clam garden practices from similar methods observed among other Indigenous peoples in neighboring areas.` }, { id: `D`, text: `contemporary Kwakwaka'wakw people have only minimally deviated from the clam-gardening practices described in the people's songs.` }],
      answer: `B` },

    { id: `m3ia-rw-m2-12`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Saeed M.Z.A. Tarabieh conducted a study of consumer attitudes toward Jordanian food and beverage companies and found that for consumers who value environmental conservation, their likelihood of purchasing a product decreased when their perception of the product's risk of causing environmental harm increased. Subsequently, other researchers conducted a study of various demographic groups in China, investigating participants' intentions to purchase a new television, and found that, on average, rural residents had the highest perception among all the demographic groups in the study of the environmental risks of the TV. Assuming that the results of Tarabieh's study are broadly applicable, this finding suggests that _____</p>`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `the new TV is more appealing to rural residents than other similar products on the market are.` }, { id: `B`, text: `rural residents likely prioritize other factors over a product's environmental sustainability when making purchasing decisions.` }, { id: `C`, text: `there is not a meaningful difference in the average likelihood of purchasing environmentally friendly products among the demographic groups included in the study.` }, { id: `D`, text: `rural residents might be less likely than participants in the other demographic groups to purchase the TV.` }],
      answer: `D` },

    { id: `m3ia-rw-m2-13`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Quasars—such as APM 08279+5255, located in the Lynx constellation—are extremely luminous galactic nuclei powered by supermassive black holes, some of which are known to have developed within the first billion years of the formation of the universe. Based on simulations they conducted, astrophysicists Daniel Whalen, Muhammad Latif, and colleagues concluded that these early quasars developed partly as a result of rare convergences of gases in space without the need for ultraviolet backgrounds or other extreme and implausible environmental conditions that models of the early universe have included to account for the presence of these quasars. If this conclusion is correct, it suggests that _____</p>`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `future models of the early universe may not need to include conditions that explain early quasars since those quasars may not have actually existed at the time.` }, { id: `B`, text: `it may be possible to develop models of the early universe that rest on more credible assumptions than previous models have.` }, { id: `C`, text: `factors that previous models of the early universe assumed were necessary for the formation of quasars may have actually been consequences of the formation of quasars.` }, { id: `D`, text: `previous models of the early universe may have underemphasized the importance of ultraviolet backgrounds to quasar formation.` }],
      answer: `B` },

    { id: `m3ia-rw-m2-14`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The present-day city of Nakhchivan, Azerbaijan, was for years the capital of the Nakhchivan Autonomous Soviet Socialist Republic, one of many nominally autonomous republics within the Soviet Union. Like _____ peer autonomous Soviet socialist republics, the Nakhchivan Republic was established along ethnolinguistic lines: most of the republic's residents spoke Azerbaijani.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `their` }, { id: `B`, text: `they're` }, { id: `C`, text: `its` }, { id: `D`, text: `it's` }],
      answer: `C` },

    { id: `m3ia-rw-m2-15`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Jordan's constitution, enacted in 1952, contains just one of the six constitutional features that enhance judicial independence, as identified by legal scholars James Melton and Tom Ginsburg. After 1985, such de jure judicial independence became more prevalent, as exemplified in Croatia's constitution, enacted in 1991 and _____ four of these features.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `contained` }, { id: `B`, text: `containing` }, { id: `C`, text: `had contained` }, { id: `D`, text: `contains` }],
      answer: `B` },

    { id: `m3ia-rw-m2-16`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The Limón technique, developed by Mexican-born dancer and choreographer José Limón, is known for its emphasis on breath control and its interplay of weight and _____ dancers may explore, for example, the moment of mid-air suspension at the top of a jump.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `weightlessness,` }, { id: `B`, text: `weightlessness;` }, { id: `C`, text: `weightlessness` }, { id: `D`, text: `weightlessness which` }],
      answer: `B` },

    { id: `m3ia-rw-m2-17`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Chondrites are stony meteorites that are undifferentiated—that is, their contents have not melted and separated into distinct layers. They are hardly _____ many chondrites experience aqueous alteration as a result of exposure to fluids, as well as fracturing, veining, and localized melting due to collisions with other objects.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `pristine, though;` }, { id: `B`, text: `pristine; though` }, { id: `C`, text: `pristine, though` }, { id: `D`, text: `pristine, though,` }],
      answer: `A` },

    { id: `m3ia-rw-m2-18`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Named for the year in which it was detected by American astronomers, SN 2020fqv was a supernova (the explosion of a massive _____ in the constellation Virgo, 60 million light-years from Earth, the transient yet powerful blast propelled particles and debris into space at extremely high speeds.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `star) and occurring` }, { id: `B`, text: `star). Occurring` }, { id: `C`, text: `star) occurring` }, { id: `D`, text: `star), occurring` }],
      answer: `B` },

    { id: `m3ia-rw-m2-19`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Over the years, dozens of architectural and archaeological sites important to Hawaiian history and culture, such as the Haena Archeological Complex and the Bank of Hawaii-Haiku Branch, have been added to the Hawai'i Register of Historic Places, and each year, a review board of experts that includes sociologist Alton Okinaka and architect Katie Stephens gathers to _____ which sites to add next to the growing registry.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `select:` }, { id: `B`, text: `select;` }, { id: `C`, text: `select,` }, { id: `D`, text: `select` }],
      answer: `D` },

    { id: `m3ia-rw-m2-20`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Not all plants benefit equally or from the same kind of _____ cucumber and marigold, for example, benefit from endomycorrhizal associations; many tree species, such as pine and oak, benefit from ectomycorrhizal associations; and plants in the Brassica family, such as rutabaga, don't benefit from mycorrhizae at all.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `mycorrhizae;` }, { id: `B`, text: `mycorrhizae,` }, { id: `C`, text: `mycorrhizae` }, { id: `D`, text: `mycorrhizae:` }],
      answer: `D` },

    { id: `m3ia-rw-m2-21`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Those who looked up at the right time on September 9, 1904, would have witnessed a total solar eclipse, during which the Moon completely blocks the Sun. _____ stargazers on December 25, 1935, would have seen an annular solar eclipse, during which the Moon blocks most of the Sun and causes it to look like a ring of light.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `As a result,` }, { id: `B`, text: `On the other hand,` }, { id: `C`, text: `Simultaneously,` }, { id: `D`, text: `Indeed,` }],
      answer: `B` },

    { id: `m3ia-rw-m2-22`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>With many elements, like neon, scientists were able to isolate a relatively pure sample of the substance shortly after discovering its existence—but this wasn't the case with all elements. _____ the isolation process took years. The element erbium, for instance, was discovered in 1843 but not isolated until 1934.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `However,` }, { id: `B`, text: `Thus,` }, { id: `C`, text: `Sometimes,` }, { id: `D`, text: `Moreover,` }],
      answer: `C` },

    { id: `m3ia-rw-m2-23`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>In Tino Villanueva's 2016 poem “Field of Moving Colors Layered,” the poet contemplates a painting that has inspired him: Alberto Valdés's 1965 work <em>Untitled.</em> The painting, which features overlapping geometric shapes, fuels the poem's exploration of temporality and identity. _____ in responding to Valdés's artwork, Villanueva's poem reflects on the relationship between poetry and other art forms.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `What's more,` }, { id: `B`, text: `In other words,` }, { id: `C`, text: `Conversely,` }, { id: `D`, text: `For instance,` }],
      answer: `A` },

    { id: `m3ia-rw-m2-24`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>Grimanesa Amoros is a Peruvian American artist.</li><li>She is well known for her large-scale LED light sculptures.</li><li><em>Substancial (Phase 4)</em> debuted in 2007 at the Hudson River Community Health Center in Peekskill, New York.</li><li>It is made of iridescent multicolored LED domes.</li><li>It occupies 2,816 cubic feet of space.</li></ul>`,
      prompt: `Which choice most effectively uses information from the given sentences to emphasize when and where <em>Substancial (Phase 4)</em> debuted?`,
      options: [{ id: `A`, text: `Grimanesa Amoros is a Peruvian American artist who often works with LED light in her large-scale sculptures, such as <em>Substancial (Phase 4)</em> (2007).` }, { id: `B`, text: `Artist Grimanesa Amoros often works with light in her sculptures, which tend to be large in scale.` }, { id: `C`, text: `As is common of Grimanesa Amoros's sculptures, the iridescent multicolored LED domes of <em>Substancial (Phase 4)</em> cut an imposing 2,816-cubic-foot figure when the piece debuted.` }, { id: `D`, text: `In 2007, Grimanesa Amoros debuted <em>Substancial (Phase 4)</em> in Peekskill, New York.` }],
      answer: `D` },

    { id: `m3ia-rw-m2-25`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>Ynés Mexía was a Mexican American botanist.</li><li>Between 1917 and 1938, she collected over 150,000 botanical samples throughout the Americas.</li><li>She collected a sample of <em>Achyrocline vauthieriana</em> in Minas Gerais, Brazil, on May 3, 1930.</li><li>She collected a sample of <em>Vernonia liatroides</em> in Jalisco, Mexico, on February 14, 1927.</li><li>These specimens are members of the Asteraceae family.</li><li>They can now be viewed online at the C.V. Starr Virtual Herbarium.</li></ul>`,
      prompt: `Which choice most effectively uses information from the given sentences to emphasize when she collected both of the samples?`,
      options: [{ id: `A`, text: `Thousands of botanical samples collected by Ynés Mexía can now be found in one place: online at the C.V. Starr Virtual Herbarium.` }, { id: `B`, text: `On May 3 in 1930, Ynés Mexía added a new specimen to her growing collection of botanical samples: <em>Achyrocline vauthieriana</em> of the Asteraceae family.` }, { id: `C`, text: `While both specimens collected by Ynés Mexía are members of the same family, <em>Achyrocline vauthieriana</em> was found in Minas Gerais and <em>Vernonia liatroides</em> was found in Jalisco.` }, { id: `D`, text: `Ynés Mexía collected a sample of <em>Achyrocline vauthieriana</em> in May of 1930, after collecting <em>Vernonia liatroides</em> in February of 1927.` }],
      answer: `D` },

    { id: `m3ia-rw-m2-26`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>Thailand's annual Songkran Water Festival is held each April.</li><li>It marks Songkran, the traditional Thai New Year.</li><li>People splash and spray each other for fun at the festival's community-wide water fights.</li><li>In Bangkok, thousands gather along Silom Road for the city's largest water fight.</li><li>In Chiang Mai, thousands gather at a historical monument called the Tha Phae Gate for the city's largest water fight.</li></ul>`,
      prompt: `The student wants to emphasize a similarity in how people in Bangkok and Chiang Mai celebrate Songkran. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `People in both Bangkok and Chiang Mai celebrate Songkran, but they don't do so in exactly the same way.` }, { id: `B`, text: `Each April, people in Thailand celebrate Songkran, the traditional Thai New Year.` }, { id: `C`, text: `The largest water fight in Bangkok takes place along a city street, whereas the largest water fight in Chiang Mai takes place at a historical monument.` }, { id: `D`, text: `In both Bangkok and Chiang Mai, thousands gather to celebrate Songkran with water fights.` }],
      answer: `D` },

    { id: `m3ia-rw-m2-27`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>In a 2012 study, Dybzinski and Tilman tested the effect of plant litter on seedling emergence in a grassland setting.</li><li>Plant litter includes dead leaves and other plant material.</li><li>The test site was a flooded grassland in the United States.</li><li>It was in a temperate midlatitude climate.</li><li>The researchers found that in these environmental conditions the presence of plant litter had a negative effect on seedling emergence.</li></ul>`,
      prompt: `Which choice most effectively uses information from the given sentences to specify the test site's climate?`,
      options: [{ id: `A`, text: `Dybzinski and Tilman tested the effect of dead leaves and other plant material on seedling emergence in the United States.` }, { id: `B`, text: `In a 2012 study, Dybzinski and Tilman found that the presence of plant litter had a negative effect on seedling emergence.` }, { id: `C`, text: `Dybzinski and Tilman's study was conducted in a temperate midlatitude climate.` }, { id: `D`, text: `A test was conducted in the United States to study the effect of plant litter on seedling emergence in a given climate.` }],
      answer: `C` },
  ];

  const MATH_M1 = [
    { id: `m3ia-math-m1-1`, domain: `Algebra`, skill: `Linear equations in two variables`, difficulty: `easy`, type: `mcq`,
      prompt: `<p>Line <em>q</em> in the <em>xy</em>-plane has a slope of <sup>1</sup>&frasl;<sub>7</sub> and passes through the point (0, 60). Which equation defines line <em>q</em>?</p>`,
      options: [{ id: `A`, text: `y = <sup>1</sup>&frasl;<sub>7</sub>x − 60` }, { id: `B`, text: `y = <sup>1</sup>&frasl;<sub>7</sub>x − 53` }, { id: `C`, text: `y = <sup>1</sup>&frasl;<sub>7</sub>x + 53` }, { id: `D`, text: `y = <sup>1</sup>&frasl;<sub>7</sub>x + 60` }],
      answer: `D` },

    { id: `m3ia-math-m1-2`, domain: `Algebra`, skill: `Linear functions`, difficulty: `easy`, type: `mcq`,
      prompt: `<p>The function <em>g</em> is defined by g(x) = −7x + 80. What is the value of g(x) when x = −2?</p>`,
      options: [{ id: `A`, text: `<sup>78</sup>&frasl;<sub>7</sub>` }, { id: `B`, text: `66` }, { id: `C`, text: `71` }, { id: `D`, text: `94` }],
      answer: `D` },

    { id: `m3ia-math-m1-3`, domain: `Problem-Solving and Data Analysis`, skill: `Probability`, difficulty: `easy`, type: `mcq`,
      prompt: `<p>Each face of a fair 12-sided die is labeled with a number from 1 through 12, with a different number appearing on each face. If the die is rolled one time, what is the probability of rolling a 2?</p>`,
      options: [{ id: `A`, text: `<sup>1</sup>&frasl;<sub>12</sub>` }, { id: `B`, text: `<sup>2</sup>&frasl;<sub>12</sub>` }, { id: `C`, text: `<sup>10</sup>&frasl;<sub>12</sub>` }, { id: `D`, text: `<sup>11</sup>&frasl;<sub>12</sub>` }],
      answer: `A` },

    { id: `m3ia-math-m1-4`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `medium`, type: `grid`,
      prompt: `<p style='text-align:center'>6x + 28 = 6x + k</p><p>In the given equation, <em>k</em> is a constant. The equation has infinitely many solutions. What is the value of <em>k</em>?</p>`,
      answer: [`28`] },

    { id: `m3ia-math-m1-5`, domain: `Problem-Solving and Data Analysis`, skill: `Percentages`, difficulty: `easy`, type: `mcq`,
      prompt: `<p>Jasmin grows bean pods in her garden. This year, she harvested 490 bean pods and saved 10% of them to plant next year. How many of the harvested bean pods did Jasmin save to plant next year?</p>`,
      options: [{ id: `A`, text: `39` }, { id: `B`, text: `49` }, { id: `C`, text: `57` }, { id: `D`, text: `59` }],
      answer: `B` },

    { id: `m3ia-math-m1-6`, domain: `Problem-Solving and Data Analysis`, skill: `Ratios, rates, and units`, difficulty: `medium`, type: `grid`,
      prompt: `<p>A triathlon is a multisport race consisting of three different consecutive events. A triathlon participant plans to complete the cycling event with an average speed of 19,008 yards per hour. What is this average speed, in miles per hour? (1 mile = 1,760 yards)</p>`,
      answer: [`10.8`] },

    { id: `m3ia-math-m1-7`, domain: `Algebra`, skill: `Systems of two linear equations`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>Dan bought some apples and oranges. The apples cost $0.79 per pound, and the oranges cost $0.99 per pound. If Dan spent $24.93 in total and bought twice as many pounds of oranges as pounds of apples, how many pounds of oranges did Dan buy?</p>`,
      options: [{ id: `A`, text: `9` }, { id: `B`, text: `9.5` }, { id: `C`, text: `18` }, { id: `D`, text: `22.16` }],
      answer: `C` },

    { id: `m3ia-math-m1-8`, domain: `Geometry and Trigonometry`, skill: `Area and volume`, difficulty: `easy`, type: `mcq`,
      prompt: `<p>Triangle R has an area of 80 square centimeters (cm<sup>2</sup>). Square S has side lengths of 4 cm. What is the total area of triangle R and square S, in cm<sup>2</sup>?</p>`,
      options: [{ id: `A`, text: `42` }, { id: `B`, text: `44` }, { id: `C`, text: `84` }, { id: `D`, text: `96` }],
      answer: `D` },

    { id: `m3ia-math-m1-9`, domain: `Algebra`, skill: `Systems of two linear equations`, difficulty: `medium`, type: `mcq`,
      prompt: `<p style='text-align:center'>y = 3x + 4<br>y = 2x + 9</p><p>The solution to the given system of equations is (x, y). What is the value of x?</p>`,
      options: [{ id: `A`, text: `4` }, { id: `B`, text: `5` }, { id: `C`, text: `9` }, { id: `D`, text: `13` }],
      answer: `B` },

    { id: `m3ia-math-m1-10`, domain: `Problem-Solving and Data Analysis`, skill: `Scatterplots and linear models`, difficulty: `medium`, type: `mcq`,
      prompt: `<svg viewBox="0 0 300 250" role="img" aria-label="scatterplot" style="max-width:340px;width:100%;display:block;margin:6px auto"><clipPath id="cp22975"><rect x="26.0" y="26.0" width="248.0" height="198.0"/></clipPath><line x1="26.0" y1="224.0" x2="26.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="61.4" y1="224.0" x2="61.4" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="96.9" y1="224.0" x2="96.9" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="132.3" y1="224.0" x2="132.3" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="167.7" y1="224.0" x2="167.7" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="203.1" y1="224.0" x2="203.1" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="238.6" y1="224.0" x2="238.6" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="274.0" y1="224.0" x2="274.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="224.0" x2="274.0" y2="224.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="195.7" x2="274.0" y2="195.7" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="167.4" x2="274.0" y2="167.4" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="139.1" x2="274.0" y2="139.1" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="110.9" x2="274.0" y2="110.9" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="82.6" x2="274.0" y2="82.6" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="54.3" x2="274.0" y2="54.3" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="26.0" x2="274.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="224.0" x2="274.0" y2="224.0" stroke="currentColor" stroke-width="1.4"/><line x1="26.0" y1="224.0" x2="26.0" y2="26.0" stroke="currentColor" stroke-width="1.4"/><text x="26.0" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">0</text><text x="70.3" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">2.5</text><text x="114.6" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">5</text><text x="158.9" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">7.5</text><text x="203.1" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">10</text><text x="247.4" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">12.5</text><text x="22.0" y="191.6" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">2.5</text><text x="22.0" y="156.3" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">5</text><text x="22.0" y="120.9" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">7.5</text><text x="22.0" y="85.6" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">10</text><text x="22.0" y="50.2" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">12.5</text><g clip-path="url(#cp22975)"><circle cx="43.7" cy="200.0" r="3.1" fill="currentColor"/><circle cx="61.4" cy="185.8" r="3.1" fill="currentColor"/><circle cx="96.9" cy="160.4" r="3.1" fill="currentColor"/><circle cx="114.6" cy="188.6" r="3.1" fill="currentColor"/><circle cx="167.7" cy="115.1" r="3.1" fill="currentColor"/><circle cx="167.7" cy="89.6" r="3.1" fill="currentColor"/><circle cx="203.1" cy="96.7" r="3.1" fill="currentColor"/><circle cx="203.1" cy="89.6" r="3.1" fill="currentColor"/><circle cx="238.6" cy="54.3" r="3.1" fill="currentColor"/><circle cx="256.3" cy="58.5" r="3.1" fill="currentColor"/></g><text x="26.0" y="14" font-size="11" font-style="italic" fill="currentColor" text-anchor="middle">y</text><text x="282.0" y="242" font-size="11" font-style="italic" fill="currentColor">x</text></svg><p>The scatterplot shows the relationship between two variables, <em>x</em> and <em>y</em>. Which of the following equations is the most appropriate linear model for the data shown?</p>`,
      options: [{ id: `A`, text: `y = −2x` }, { id: `B`, text: `y = −x` }, { id: `C`, text: `y = x` }, { id: `D`, text: `y = 2x` }],
      answer: `C` },

    { id: `m3ia-math-m1-11`, domain: `Advanced Math`, skill: `Interpreting nonlinear expressions`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>A rectangle has a length that is 24 times its width. The function y = (24w)(w) represents this situation, where <em>y</em> is the area, in square feet, of the rectangle and y &gt; 0. Which of the following is the best interpretation of 24w in this context?</p>`,
      options: [{ id: `A`, text: `The length of the rectangle, in feet` }, { id: `B`, text: `The area of the rectangle, in square feet` }, { id: `C`, text: `The difference between the length and the width of the rectangle, in feet` }, { id: `D`, text: `The width of the rectangle, in feet` }],
      answer: `A` },

    { id: `m3ia-math-m1-12`, domain: `Advanced Math`, skill: `Exponential functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<p style='text-align:center'>f(x) = 1,300(0.5)<sup>x/14</sup></p><p>The function <em>f</em> models the intensity of a beam, f(x), in number of photons in the beam, <em>x</em> millimeters below the surface of a certain material. According to the model, what is the number of photons in the beam when it is at the surface of the material?</p>`,
      options: [{ id: `A`, text: `2` }, { id: `B`, text: `13` }, { id: `C`, text: `14` }, { id: `D`, text: `1,300` }],
      answer: `D` },

    { id: `m3ia-math-m1-13`, domain: `Algebra`, skill: `Linear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>The gas mileage of a certain car is 22 miles per gallon when driven on the highway. If the car begins with 8 gallons of gas in the tank, which function predicts the amount of gas remaining in the tank, f(d), after the car is driven <em>d</em> miles on the highway?</p>`,
      options: [{ id: `A`, text: `f(d) = <sup>d</sup>&frasl;<sub>22</sub> − 8` }, { id: `B`, text: `f(d) = d − 8` }, { id: `C`, text: `f(d) = 8 − <sup>d</sup>&frasl;<sub>22</sub>` }, { id: `D`, text: `f(d) = 8 − d` }],
      answer: `C` },

    { id: `m3ia-math-m1-14`, domain: `Geometry and Trigonometry`, skill: `Lines, angles, and triangles`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>In triangle <em>DEF</em>, the measure of angle <em>D</em> is 46° and the measure of angle <em>E</em> is 104°. In triangle <em>RST</em>, the measure of angle <em>R</em> is 46° and the measure of angle <em>S</em> is 104°. Which of the following additional pieces of information is needed to determine whether triangle <em>DEF</em> is similar to triangle <em>RST</em>?</p>`,
      options: [{ id: `A`, text: `The measure of angle <em>F</em>` }, { id: `B`, text: `The measure of angle <em>T</em>` }, { id: `C`, text: `The measure of angle <em>F</em> and the measure of angle <em>T</em>` }, { id: `D`, text: `No additional information is needed.` }],
      answer: `D` },

    { id: `m3ia-math-m1-15`, domain: `Algebra`, skill: `Linear equations in two variables`, difficulty: `medium`, type: `grid`,
      prompt: `<p>What is the slope of the graph of y = <sup>1</sup>&frasl;<sub>5</sub>(19x + 19) + 7x in the <em>xy</em>-plane?</p>`,
      answer: [`10.8`, `54/5`] },

    { id: `m3ia-math-m1-16`, domain: `Algebra`, skill: `Systems of two linear equations`, difficulty: `medium`, type: `mcq`,
      prompt: `<p style='text-align:center'>y = −4x − 2</p><p>One of the two equations in a system of linear equations is given. The system has no solution. Which of the following could be the second equation in this system?</p>`,
      options: [{ id: `A`, text: `y = <sup>1</sup>&frasl;<sub>4</sub>x − 2` }, { id: `B`, text: `y = −4x − 8` }, { id: `C`, text: `y = 4x + 8` }, { id: `D`, text: `y = −<sup>1</sup>&frasl;<sub>4</sub>x + 2` }],
      answer: `B` },

    { id: `m3ia-math-m1-17`, domain: `Algebra`, skill: `Linear functions`, difficulty: `hard`, type: `grid`,
      prompt: `<p>A linear model estimates the population of a city from 1992 to 2016. The model estimates the population was 61 thousand in 1992, 217 thousand in 2012, and <em>x</em> thousand in 2016. To the nearest whole number, what is the value of <em>x</em>?</p>`,
      answer: [`248`] },

    { id: `m3ia-math-m1-18`, domain: `Advanced Math`, skill: `Nonlinear equations and systems`, difficulty: `hard`, type: `grid`,
      prompt: `<p style='text-align:center'>y = −1.5x<br>y = x<sup>2</sup> + 4x + a</p><p>In the given system of equations, <em>a</em> is a positive integer constant. The system has no real solutions. What is the least possible value of <em>a</em>?</p>`,
      answer: [`8`] },

    { id: `m3ia-math-m1-19`, domain: `Geometry and Trigonometry`, skill: `Right triangles and trigonometry`, difficulty: `hard`, type: `grid`,
      prompt: `<p><svg viewBox='0 0 420 300' width='330' xmlns='http://www.w3.org/2000/svg'><polygon points='50,240 350,240 350,70' fill='none' stroke='currentColor' stroke-width='2'/><polyline points='330,240 330,220 350,220' fill='none' stroke='currentColor' stroke-width='1.5'/><text x='166' y='138' font-size='20' fill='currentColor'>67</text><text x='30' y='250' font-size='18' font-style='italic' fill='currentColor'>T</text><text x='356' y='256' font-size='18' font-style='italic' fill='currentColor'>S</text><text x='356' y='66' font-size='18' font-style='italic' fill='currentColor'>R</text></svg></p><p style='font-size:12px;opacity:0.75'>Note: Figure not drawn to scale.</p><p>In the triangle shown, RS = √133. What is the value of sin R?</p>`,
      answer: [`66/67`, `.9850`, `.9851`, `0.9850`, `0.9851`] },

    { id: `m3ia-math-m1-20`, domain: `Advanced Math`, skill: `Quadratic equations`, difficulty: `hard`, type: `mcq`,
      prompt: `<p style='text-align:center'>(x + 13)<sup>2</sup> + 26(x + 13) + 169 = 0</p><p>How many distinct real solutions does the given equation have?</p>`,
      options: [{ id: `A`, text: `Exactly one` }, { id: `B`, text: `Exactly two` }, { id: `C`, text: `Infinitely many` }, { id: `D`, text: `Zero` }],
      answer: `A` },

    { id: `m3ia-math-m1-21`, domain: `Geometry and Trigonometry`, skill: `Circles`, difficulty: `hard`, type: `mcq`,
      prompt: `<p style='text-align:center'>(x + 3)<sup>2</sup> + (y − 19)<sup>2</sup> = 144</p><p>The graph of the given equation is a circle in the <em>xy</em>-plane. The point (a, b) lies on the circle. Which of the following is a possible value for <em>a</em>?</p>`,
      options: [{ id: `A`, text: `−16` }, { id: `B`, text: `−13` }, { id: `C`, text: `12` }, { id: `D`, text: `19` }],
      answer: `B` },

    { id: `m3ia-math-m1-22`, domain: `Advanced Math`, skill: `Exponential functions`, difficulty: `hard`, type: `mcq`,
      prompt: `<p style='text-align:center'>f(x) = 8(7)<sup>x</sup></p><p>The function <em>f</em> is defined by the given equation. If g(x) = f(x + 2), which of the following equations defines the function <em>g</em>?</p>`,
      options: [{ id: `A`, text: `g(x) = 16(7)<sup>x</sup>` }, { id: `B`, text: `g(x) = 392(7)<sup>x</sup>` }, { id: `C`, text: `g(x) = 16(14)<sup>x</sup>` }, { id: `D`, text: `g(x) = 64(49)<sup>x</sup>` }],
      answer: `B` },
  ];

  const MATH_M2 = [
    { id: `m3ia-math-m2-1`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<p><svg viewBox='0 0 308 302' width='320' xmlns='http://www.w3.org/2000/svg'><g stroke='#dadada' stroke-width='1'><line x1='26.0' y1='10.0' x2='26.0' y2='282.0'/><line x1='43.0' y1='10.0' x2='43.0' y2='282.0'/><line x1='60.0' y1='10.0' x2='60.0' y2='282.0'/><line x1='77.0' y1='10.0' x2='77.0' y2='282.0'/><line x1='94.0' y1='10.0' x2='94.0' y2='282.0'/><line x1='111.0' y1='10.0' x2='111.0' y2='282.0'/><line x1='128.0' y1='10.0' x2='128.0' y2='282.0'/><line x1='145.0' y1='10.0' x2='145.0' y2='282.0'/><line x1='162.0' y1='10.0' x2='162.0' y2='282.0'/><line x1='179.0' y1='10.0' x2='179.0' y2='282.0'/><line x1='196.0' y1='10.0' x2='196.0' y2='282.0'/><line x1='213.0' y1='10.0' x2='213.0' y2='282.0'/><line x1='230.0' y1='10.0' x2='230.0' y2='282.0'/><line x1='247.0' y1='10.0' x2='247.0' y2='282.0'/><line x1='264.0' y1='10.0' x2='264.0' y2='282.0'/><line x1='281.0' y1='10.0' x2='281.0' y2='282.0'/><line x1='298.0' y1='10.0' x2='298.0' y2='282.0'/><line x1='26.0' y1='282.0' x2='298.0' y2='282.0'/><line x1='26.0' y1='265.0' x2='298.0' y2='265.0'/><line x1='26.0' y1='248.0' x2='298.0' y2='248.0'/><line x1='26.0' y1='231.0' x2='298.0' y2='231.0'/><line x1='26.0' y1='214.0' x2='298.0' y2='214.0'/><line x1='26.0' y1='197.0' x2='298.0' y2='197.0'/><line x1='26.0' y1='180.0' x2='298.0' y2='180.0'/><line x1='26.0' y1='163.0' x2='298.0' y2='163.0'/><line x1='26.0' y1='146.0' x2='298.0' y2='146.0'/><line x1='26.0' y1='129.0' x2='298.0' y2='129.0'/><line x1='26.0' y1='112.0' x2='298.0' y2='112.0'/><line x1='26.0' y1='95.0' x2='298.0' y2='95.0'/><line x1='26.0' y1='78.0' x2='298.0' y2='78.0'/><line x1='26.0' y1='61.0' x2='298.0' y2='61.0'/><line x1='26.0' y1='44.0' x2='298.0' y2='44.0'/><line x1='26.0' y1='27.0' x2='298.0' y2='27.0'/><line x1='26.0' y1='10.0' x2='298.0' y2='10.0'/></g><line x1='26.0' y1='146.0' x2='298.0' y2='146.0' stroke='#333' stroke-width='1.7'/><line x1='162.0' y1='10.0' x2='162.0' y2='282.0' stroke='#333' stroke-width='1.7'/><polyline points='26.0,118.8 34.5,118.3 43.0,117.6 51.5,116.9 60.0,116.2 68.5,115.4 77.0,114.4 85.5,113.4 94.0,112.0 102.5,110.5 111.0,108.6 119.5,106.4 128.0,103.5 136.5,99.9 145.0,95.0 153.5,88.2 162.0,78.0 170.5,61.0 179.0,27.0' fill='none' stroke='#111' stroke-width='2.4'/><polyline points='207.1,285.9 215.6,217.7 224.1,190.9 232.6,176.4 241.1,167.4 249.6,161.3 258.1,156.9 266.6,153.6 275.1,150.9 283.6,148.9 292.1,147.0' fill='none' stroke='#111' stroke-width='2.4'/><text x='26.0' y='159.0' font-size='11' text-anchor='middle' fill='#333'>-8</text><text x='94.0' y='159.0' font-size='11' text-anchor='middle' fill='#333'>-4</text><text x='230.0' y='159.0' font-size='11' text-anchor='middle' fill='#333'>4</text><text x='298.0' y='159.0' font-size='11' text-anchor='middle' fill='#333'>8</text><text x='156.0' y='14.0' font-size='11' text-anchor='end' fill='#333'>8</text><text x='156.0' y='82.0' font-size='11' text-anchor='end' fill='#333'>4</text><text x='156.0' y='218.0' font-size='11' text-anchor='end' fill='#333'>-4</text><text x='156.0' y='286.0' font-size='11' text-anchor='end' fill='#333'>-8</text><text x='296.0' y='141.0' font-size='12' font-style='italic' fill='#333'>x</text><text x='169.0' y='19.0' font-size='12' font-style='italic' fill='#333'>y</text></svg></p><p>The graph of y = f(x) is shown in the <em>xy</em>-plane. What is the value of f(0)?</p>`,
      options: [{ id: `A`, text: `−4` }, { id: `B`, text: `0` }, { id: `C`, text: `<sup>3</sup>&frasl;<sub>10</sub>` }, { id: `D`, text: `4` }],
      answer: `D` },

    { id: `m3ia-math-m2-2`, domain: `Advanced Math`, skill: `Equivalent expressions`, difficulty: `easy`, type: `mcq`,
      prompt: `<p>Which expression is equivalent to (7nr<sup>2</sup> + 2nr) + (5n<sup>2</sup>r + 4nr)?</p>`,
      options: [{ id: `A`, text: `12n<sup>2</sup>r<sup>2</sup> + 6nr` }, { id: `B`, text: `12n<sup>3</sup>r<sup>3</sup> + 6n<sup>2</sup>r<sup>2</sup>` }, { id: `C`, text: `35n<sup>3</sup>r<sup>3</sup> + 8n<sup>2</sup>r<sup>2</sup>` }, { id: `D`, text: `7nr<sup>2</sup> + 5n<sup>2</sup>r + 6nr` }],
      answer: `D` },

    { id: `m3ia-math-m2-3`, domain: `Algebra`, skill: `Linear equations in two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `<p style='text-align:center'>v = −<sup>w</sup>&frasl;<sub>123x</sub></p><p>The given equation relates the distinct positive numbers <em>v</em>, <em>w</em>, and <em>x</em>. Which equation correctly expresses <em>w</em> in terms of <em>v</em> and <em>x</em>?</p>`,
      options: [{ id: `A`, text: `w = −123vx` }, { id: `B`, text: `w = −<sup>123v</sup>&frasl;<sub>x</sub>` }, { id: `C`, text: `w = −<sup>x</sup>&frasl;<sub>123v</sub>` }, { id: `D`, text: `w = v + 123x` }],
      answer: `A` },

    { id: `m3ia-math-m2-4`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `medium`, type: `mcq`,
      prompt: `<p style='text-align:center'>−3x + 6rx = 54</p><p>In the given equation, <em>r</em> is a constant. The equation has no solution. What is the value of <em>r</em>?</p>`,
      options: [{ id: `A`, text: `<sup>1</sup>&frasl;<sub>9</sub>` }, { id: `B`, text: `<sup>1</sup>&frasl;<sub>2</sub>` }, { id: `C`, text: `2` }, { id: `D`, text: `9` }],
      answer: `B` },

    { id: `m3ia-math-m2-5`, domain: `Problem-Solving and Data Analysis`, skill: `Percentages`, difficulty: `hard`, type: `grid`,
      prompt: `<p>A real estate company offers a series of three webinars. 3,750 people attended the first webinar. 54% of the people who attended the first webinar attended the second webinar, and 36% of the people who attended the first and second webinars attended the third webinar. How many people attended all three webinars?</p>`,
      answer: [`729`] },

    { id: `m3ia-math-m2-6`, domain: `Algebra`, skill: `Linear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<p><svg viewBox='0 0 300 294' width='320' xmlns='http://www.w3.org/2000/svg'><g stroke='#dadada' stroke-width='1'><line x1='26.0' y1='10.0' x2='26.0' y2='274.0'/><line x1='48.0' y1='10.0' x2='48.0' y2='274.0'/><line x1='70.0' y1='10.0' x2='70.0' y2='274.0'/><line x1='92.0' y1='10.0' x2='92.0' y2='274.0'/><line x1='114.0' y1='10.0' x2='114.0' y2='274.0'/><line x1='136.0' y1='10.0' x2='136.0' y2='274.0'/><line x1='158.0' y1='10.0' x2='158.0' y2='274.0'/><line x1='180.0' y1='10.0' x2='180.0' y2='274.0'/><line x1='202.0' y1='10.0' x2='202.0' y2='274.0'/><line x1='224.0' y1='10.0' x2='224.0' y2='274.0'/><line x1='246.0' y1='10.0' x2='246.0' y2='274.0'/><line x1='268.0' y1='10.0' x2='268.0' y2='274.0'/><line x1='290.0' y1='10.0' x2='290.0' y2='274.0'/><line x1='26.0' y1='274.0' x2='290.0' y2='274.0'/><line x1='26.0' y1='252.0' x2='290.0' y2='252.0'/><line x1='26.0' y1='230.0' x2='290.0' y2='230.0'/><line x1='26.0' y1='208.0' x2='290.0' y2='208.0'/><line x1='26.0' y1='186.0' x2='290.0' y2='186.0'/><line x1='26.0' y1='164.0' x2='290.0' y2='164.0'/><line x1='26.0' y1='142.0' x2='290.0' y2='142.0'/><line x1='26.0' y1='120.0' x2='290.0' y2='120.0'/><line x1='26.0' y1='98.0' x2='290.0' y2='98.0'/><line x1='26.0' y1='76.0' x2='290.0' y2='76.0'/><line x1='26.0' y1='54.0' x2='290.0' y2='54.0'/><line x1='26.0' y1='32.0' x2='290.0' y2='32.0'/><line x1='26.0' y1='10.0' x2='290.0' y2='10.0'/></g><line x1='26.0' y1='142.0' x2='290.0' y2='142.0' stroke='#333' stroke-width='1.7'/><line x1='158.0' y1='10.0' x2='158.0' y2='274.0' stroke='#333' stroke-width='1.7'/><polyline points='106.7,273.8 115.5,247.4 124.3,221.0 133.1,194.6 141.9,168.2 150.7,141.8 159.5,115.4 168.3,89.0 177.1,62.6 185.9,36.2 194.7,9.8' fill='none' stroke='#111' stroke-width='2.4'/><text x='26.0' y='155.0' font-size='11' text-anchor='middle' fill='#333'>-6</text><text x='114.0' y='155.0' font-size='11' text-anchor='middle' fill='#333'>-2</text><text x='202.0' y='155.0' font-size='11' text-anchor='middle' fill='#333'>2</text><text x='290.0' y='155.0' font-size='11' text-anchor='middle' fill='#333'>6</text><text x='152.0' y='14.0' font-size='11' text-anchor='end' fill='#333'>6</text><text x='152.0' y='102.0' font-size='11' text-anchor='end' fill='#333'>2</text><text x='152.0' y='190.0' font-size='11' text-anchor='end' fill='#333'>-2</text><text x='152.0' y='278.0' font-size='11' text-anchor='end' fill='#333'>-6</text><text x='288.0' y='137.0' font-size='12' font-style='italic' fill='#333'>x</text><text x='165.0' y='19.0' font-size='12' font-style='italic' fill='#333'>y</text></svg></p><p>The graph of y = f(x) is shown. What is the y-intercept of the graph of y = f(x) + 11?</p>`,
      options: [{ id: `A`, text: `(0, −10)` }, { id: `B`, text: `(0, 12)` }, { id: `C`, text: `(1, 11)` }, { id: `D`, text: `(−11, 1)` }],
      answer: `B` },

    { id: `m3ia-math-m2-7`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `hard`, type: `mcq`,
      prompt: `<p>The function <em>f</em> is defined by f(x) = |x − 6x|. What value of <em>a</em> satisfies f(2) − f(a) = −30?</p>`,
      options: [{ id: `A`, text: `−32` }, { id: `B`, text: `6` }, { id: `C`, text: `8` }, { id: `D`, text: `150` }],
      answer: `C` },

    { id: `m3ia-math-m2-8`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `medium`, type: `grid`,
      prompt: `<p style='text-align:center'>−7(13 − 5x) + 3 = −8(13 − 5x) + 25</p><p>If the given equation is true, what is the value of 13 − 5x?</p>`,
      answer: [`22`] },

    { id: `m3ia-math-m2-9`, domain: `Algebra`, skill: `Linear inequalities in one or two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>The minimum value of <em>x</em> is 4 less than 8 times another number <em>n</em>. Which inequality shows the possible values of <em>x</em>?</p>`,
      options: [{ id: `A`, text: `x ≤ 8n − 4` }, { id: `B`, text: `x ≥ 8n − 4` }, { id: `C`, text: `x ≤ 4 − 8n` }, { id: `D`, text: `x ≥ 4 − 8n` }],
      answer: `B` },

    { id: `m3ia-math-m2-10`, domain: `Algebra`, skill: `Linear inequalities in one or two variables`, difficulty: `hard`, type: `mcq`,
      prompt: `<p><svg viewBox='0 0 308 234' width='320' xmlns='http://www.w3.org/2000/svg'><rect x='26.0' y='10.0' width='272.0' height='119.0' fill='#c9c9c9' opacity='0.55'/><g stroke='#dadada' stroke-width='1'><line x1='26.0' y1='10.0' x2='26.0' y2='214.0'/><line x1='43.0' y1='10.0' x2='43.0' y2='214.0'/><line x1='60.0' y1='10.0' x2='60.0' y2='214.0'/><line x1='77.0' y1='10.0' x2='77.0' y2='214.0'/><line x1='94.0' y1='10.0' x2='94.0' y2='214.0'/><line x1='111.0' y1='10.0' x2='111.0' y2='214.0'/><line x1='128.0' y1='10.0' x2='128.0' y2='214.0'/><line x1='145.0' y1='10.0' x2='145.0' y2='214.0'/><line x1='162.0' y1='10.0' x2='162.0' y2='214.0'/><line x1='179.0' y1='10.0' x2='179.0' y2='214.0'/><line x1='196.0' y1='10.0' x2='196.0' y2='214.0'/><line x1='213.0' y1='10.0' x2='213.0' y2='214.0'/><line x1='230.0' y1='10.0' x2='230.0' y2='214.0'/><line x1='247.0' y1='10.0' x2='247.0' y2='214.0'/><line x1='264.0' y1='10.0' x2='264.0' y2='214.0'/><line x1='281.0' y1='10.0' x2='281.0' y2='214.0'/><line x1='298.0' y1='10.0' x2='298.0' y2='214.0'/><line x1='26.0' y1='214.0' x2='298.0' y2='214.0'/><line x1='26.0' y1='197.0' x2='298.0' y2='197.0'/><line x1='26.0' y1='180.0' x2='298.0' y2='180.0'/><line x1='26.0' y1='163.0' x2='298.0' y2='163.0'/><line x1='26.0' y1='146.0' x2='298.0' y2='146.0'/><line x1='26.0' y1='129.0' x2='298.0' y2='129.0'/><line x1='26.0' y1='112.0' x2='298.0' y2='112.0'/><line x1='26.0' y1='95.0' x2='298.0' y2='95.0'/><line x1='26.0' y1='78.0' x2='298.0' y2='78.0'/><line x1='26.0' y1='61.0' x2='298.0' y2='61.0'/><line x1='26.0' y1='44.0' x2='298.0' y2='44.0'/><line x1='26.0' y1='27.0' x2='298.0' y2='27.0'/><line x1='26.0' y1='10.0' x2='298.0' y2='10.0'/></g><line x1='26.0' y1='44.0' x2='298.0' y2='44.0' stroke='#333' stroke-width='1.7'/><line x1='162.0' y1='10.0' x2='162.0' y2='214.0' stroke='#333' stroke-width='1.7'/><line x1='26.0' y1='129.0' x2='298.0' y2='129.0' stroke='#111' stroke-width='2' stroke-dasharray='7 4'/><text x='26.0' y='57.0' font-size='11' text-anchor='middle' fill='#333'>-8</text><text x='94.0' y='57.0' font-size='11' text-anchor='middle' fill='#333'>-4</text><text x='230.0' y='57.0' font-size='11' text-anchor='middle' fill='#333'>4</text><text x='298.0' y='57.0' font-size='11' text-anchor='middle' fill='#333'>8</text><text x='156.0' y='14.0' font-size='11' text-anchor='end' fill='#333'>2</text><text x='156.0' y='82.0' font-size='11' text-anchor='end' fill='#333'>-2</text><text x='156.0' y='133.0' font-size='11' text-anchor='end' fill='#333'>-5</text><text x='156.0' y='184.0' font-size='11' text-anchor='end' fill='#333'>-8</text><text x='296.0' y='39.0' font-size='12' font-style='italic' fill='#333'>x</text><text x='169.0' y='19.0' font-size='12' font-style='italic' fill='#333'>y</text></svg></p><p>The shaded region shown represents the solutions to the inequality −19y &lt; c, where <em>c</em> is a constant. What is the value of <em>c</em>?</p>`,
      options: [{ id: `A`, text: `95` }, { id: `B`, text: `5` }, { id: `C`, text: `−5` }, { id: `D`, text: `−95` }],
      answer: `A` },

    { id: `m3ia-math-m2-11`, domain: `Algebra`, skill: `Systems of two linear equations in two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>At a constant temperature, a scuba diver combines two different concentrations of nitrox mix (oxygen-nitrogen gas mixture) to fill a tank to a total pressure of 90 atmospheres (atm), of which 37% is contributed by oxygen. Nitrox mix A contributes <em>x</em> atm of pressure to the tank, of which 22% is contributed by oxygen. Nitrox mix B contributes <em>y</em> atm of pressure to the tank, of which 49% is contributed by oxygen. Which system of equations represents this situation?</p>`,
      options: [{ id: `A`, text: `x + y = 90; 0.22x + 0.49y = 0.37(90)` }, { id: `B`, text: `x + y = 90; 0.49x + 0.22y = 0.37(90)` }, { id: `C`, text: `x + y = 0.37(90); 0.22x + 0.49y = 90` }, { id: `D`, text: `x + y = 0.37(90); 0.49x + 0.22y = 90` }],
      answer: `A` },

    { id: `m3ia-math-m2-12`, domain: `Advanced Math`, skill: `Exponential functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<p><svg viewBox='0 0 316 310' width='320' xmlns='http://www.w3.org/2000/svg'><g stroke='#dadada' stroke-width='1'><line x1='26.0' y1='10.0' x2='26.0' y2='290.0'/><line x1='40.0' y1='10.0' x2='40.0' y2='290.0'/><line x1='54.0' y1='10.0' x2='54.0' y2='290.0'/><line x1='68.0' y1='10.0' x2='68.0' y2='290.0'/><line x1='82.0' y1='10.0' x2='82.0' y2='290.0'/><line x1='96.0' y1='10.0' x2='96.0' y2='290.0'/><line x1='110.0' y1='10.0' x2='110.0' y2='290.0'/><line x1='124.0' y1='10.0' x2='124.0' y2='290.0'/><line x1='138.0' y1='10.0' x2='138.0' y2='290.0'/><line x1='152.0' y1='10.0' x2='152.0' y2='290.0'/><line x1='166.0' y1='10.0' x2='166.0' y2='290.0'/><line x1='180.0' y1='10.0' x2='180.0' y2='290.0'/><line x1='194.0' y1='10.0' x2='194.0' y2='290.0'/><line x1='208.0' y1='10.0' x2='208.0' y2='290.0'/><line x1='222.0' y1='10.0' x2='222.0' y2='290.0'/><line x1='236.0' y1='10.0' x2='236.0' y2='290.0'/><line x1='250.0' y1='10.0' x2='250.0' y2='290.0'/><line x1='264.0' y1='10.0' x2='264.0' y2='290.0'/><line x1='278.0' y1='10.0' x2='278.0' y2='290.0'/><line x1='292.0' y1='10.0' x2='292.0' y2='290.0'/><line x1='306.0' y1='10.0' x2='306.0' y2='290.0'/><line x1='26.0' y1='290.0' x2='306.0' y2='290.0'/><line x1='26.0' y1='276.0' x2='306.0' y2='276.0'/><line x1='26.0' y1='262.0' x2='306.0' y2='262.0'/><line x1='26.0' y1='248.0' x2='306.0' y2='248.0'/><line x1='26.0' y1='234.0' x2='306.0' y2='234.0'/><line x1='26.0' y1='220.0' x2='306.0' y2='220.0'/><line x1='26.0' y1='206.0' x2='306.0' y2='206.0'/><line x1='26.0' y1='192.0' x2='306.0' y2='192.0'/><line x1='26.0' y1='178.0' x2='306.0' y2='178.0'/><line x1='26.0' y1='164.0' x2='306.0' y2='164.0'/><line x1='26.0' y1='150.0' x2='306.0' y2='150.0'/><line x1='26.0' y1='136.0' x2='306.0' y2='136.0'/><line x1='26.0' y1='122.0' x2='306.0' y2='122.0'/><line x1='26.0' y1='108.0' x2='306.0' y2='108.0'/><line x1='26.0' y1='94.0' x2='306.0' y2='94.0'/><line x1='26.0' y1='80.0' x2='306.0' y2='80.0'/><line x1='26.0' y1='66.0' x2='306.0' y2='66.0'/><line x1='26.0' y1='52.0' x2='306.0' y2='52.0'/><line x1='26.0' y1='38.0' x2='306.0' y2='38.0'/><line x1='26.0' y1='24.0' x2='306.0' y2='24.0'/><line x1='26.0' y1='10.0' x2='306.0' y2='10.0'/></g><line x1='26.0' y1='150.0' x2='306.0' y2='150.0' stroke='#333' stroke-width='1.7'/><line x1='166.0' y1='10.0' x2='166.0' y2='290.0' stroke='#333' stroke-width='1.7'/><polyline points='26.0,262.0 33.0,262.0 40.0,262.0 47.0,262.0 54.0,262.0 61.0,261.9 68.0,261.9 75.0,261.9 82.0,261.7 89.0,261.7 96.0,261.6 103.0,261.4 110.0,261.2 117.0,260.7 124.0,260.3 131.0,259.5 138.0,258.5 145.0,257.1 152.0,255.0 159.0,252.1 166.0,248.0 173.0,242.3 180.0,234.0 187.0,222.4 194.0,206.0 201.0,182.8 208.0,150.0 215.0,103.7 222.0,38.0' fill='none' stroke='#111' stroke-width='2.4'/><text x='26.0' y='163.0' font-size='11' text-anchor='middle' fill='#333'>-10</text><text x='96.0' y='163.0' font-size='11' text-anchor='middle' fill='#333'>-5</text><text x='236.0' y='163.0' font-size='11' text-anchor='middle' fill='#333'>5</text><text x='306.0' y='163.0' font-size='11' text-anchor='middle' fill='#333'>10</text><text x='160.0' y='14.0' font-size='11' text-anchor='end' fill='#333'>10</text><text x='160.0' y='84.0' font-size='11' text-anchor='end' fill='#333'>5</text><text x='160.0' y='224.0' font-size='11' text-anchor='end' fill='#333'>-5</text><text x='160.0' y='266.0' font-size='11' text-anchor='end' fill='#333'>-8</text><text x='304.0' y='145.0' font-size='12' font-style='italic' fill='#333'>x</text><text x='173.0' y='19.0' font-size='12' font-style='italic' fill='#333'>y</text></svg></p><p>The graph of the equation y = 2<sup>x</sup> + k is shown, where <em>k</em> is a constant. What is the value of <em>k</em>?</p>`,
      options: [{ id: `A`, text: `−8` }, { id: `B`, text: `−7` }, { id: `C`, text: `7` }, { id: `D`, text: `8` }],
      answer: `A` },

    { id: `m3ia-math-m2-13`, domain: `Problem-Solving and Data Analysis`, skill: `Ratios, rates, and units`, difficulty: `hard`, type: `mcq`,
      prompt: `<p>A certain town has an area of 3.51 square miles. What is the area, in <u>square yards</u>, of this town? (1 mile = 1,760 yards)</p>`,
      options: [{ id: `A`, text: `501` }, { id: `B`, text: `6,178` }, { id: `C`, text: `882,507` }, { id: `D`, text: `10,872,576` }],
      answer: `D` },

    { id: `m3ia-math-m2-14`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>The function <em>f</em> gives the product of a number, <em>x</em>, and a number that is 7 more than <em>x</em>. Which equation defines <em>f</em>?</p>`,
      options: [{ id: `A`, text: `f(x) = x<sup>2</sup> + x + 7` }, { id: `B`, text: `f(x) = x<sup>2</sup> + 7` }, { id: `C`, text: `f(x) = x<sup>2</sup> + 7x` }, { id: `D`, text: `f(x) = x<sup>2</sup> + 7x + 7` }],
      answer: `C` },

    { id: `m3ia-math-m2-15`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<p>The function f(x) = <sup>1</sup>&frasl;<sub>8</sub>(x − 6)<sup>2</sup> + 4 gives a toy car's height above the ground f(x), in inches, <em>x</em> seconds after it started moving on an elevated track, where 0 ≤ x ≤ 10. Which of the following is the best interpretation of the vertex of the graph of y = f(x) in the <em>xy</em>-plane?</p>`,
      options: [{ id: `A`, text: `The toy car's minimum height was 4 inches above the ground.` }, { id: `B`, text: `The toy car's minimum height was 6 inches above the ground.` }, { id: `C`, text: `The toy car's height was 4 inches above the ground when it started moving.` }, { id: `D`, text: `The toy car's height was 6 inches above the ground when it started moving.` }],
      answer: `A` },

    { id: `m3ia-math-m2-16`, domain: `Advanced Math`, skill: `Nonlinear equations`, difficulty: `hard`, type: `grid`,
      prompt: `<p>One of the factors of 5x<sup>3</sup> + 105x<sup>2</sup> + 540x is x + b, where <em>b</em> is a positive constant. What is the smallest possible value of <em>b</em>?</p>`,
      answer: [`9`] },

    { id: `m3ia-math-m2-17`, domain: `Algebra`, skill: `Linear functions`, difficulty: `hard`, type: `mcq`,
      prompt: `<p>Kenny engages in up to 3 types of exercise each week for a total of 6 hours while training for a triathlon. Kenny swims for the same number of <u>minutes</u> each week. The equation y = 360 − x − 170 represents the situation where Kenny bikes for <em>x</em> minutes during a week and runs for any remaining training time <em>y</em>, in minutes. If this equation is graphed in the <em>xy</em>-plane, which statement is the best interpretation of the <em>x</em>-intercept of the graph?</p>`,
      options: [{ id: `A`, text: `During a week when Kenny doesn't run, he bikes for 190 minutes.` }, { id: `B`, text: `During a week when Kenny doesn't bike, he runs for 190 minutes.` }, { id: `C`, text: `Each week, Kenny bikes and runs for a total of 190 minutes.` }, { id: `D`, text: `During a week when Kenny swims for 190 minutes, he bikes for 170 minutes.` }],
      answer: `A` },

    { id: `m3ia-math-m2-18`, domain: `Geometry and Trigonometry`, skill: `Lines, angles, and triangles`, difficulty: `hard`, type: `mcq`,
      prompt: `<p>Two lines intersect at exactly one point, forming two acute angles and two obtuse angles. The measure of one of these angles is (9x − 110)°. Which of the following could NOT be the sum of the measures of any two of these angles?</p>`,
      options: [{ id: `A`, text: `(−18x + 220)°` }, { id: `B`, text: `(−18x + 580)°` }, { id: `C`, text: `(18x − 220)°` }, { id: `D`, text: `180°` }],
      answer: `A` },

    { id: `m3ia-math-m2-19`, domain: `Advanced Math`, skill: `Nonlinear equations and systems`, difficulty: `hard`, type: `grid`,
      prompt: `<p style='text-align:center'><sup>5</sup>&frasl;<sub>8</sub>(5x + 8)(x + &radic;<span style='border-top:1px solid'>5k + 8</span>)(x − &radic;<span style='border-top:1px solid'>5k + 8</span>) = 0</p><p>In the given equation, <em>k</em> is a positive constant. The product of the solutions to the equation is 64. What is the value of <em>k</em>?</p>`,
      answer: [`6.4`, `32/5`] },

    { id: `m3ia-math-m2-20`, domain: `Problem-Solving and Data Analysis`, skill: `Distributions and measures of center and spread`, difficulty: `hard`, type: `mcq`,
      prompt: `<p>Each of the following frequency tables represents a data set. Which of these frequency tables represents the data set with the smallest standard deviation?</p>`,
      options: [{ id: `A`, text: `<table style='border-collapse:collapse;margin:2px 0' border='1' cellpadding='3'><tr><th>Value</th><th>Frequency</th></tr><tr><td style='text-align:center'>4</td><td style='text-align:center'>0</td></tr><tr><td style='text-align:center'>5</td><td style='text-align:center'>10</td></tr><tr><td style='text-align:center'>6</td><td style='text-align:center'>40</td></tr><tr><td style='text-align:center'>7</td><td style='text-align:center'>10</td></tr><tr><td style='text-align:center'>8</td><td style='text-align:center'>0</td></tr></table>` }, { id: `B`, text: `<table style='border-collapse:collapse;margin:2px 0' border='1' cellpadding='3'><tr><th>Value</th><th>Frequency</th></tr><tr><td style='text-align:center'>4</td><td style='text-align:center'>8</td></tr><tr><td style='text-align:center'>5</td><td style='text-align:center'>14</td></tr><tr><td style='text-align:center'>6</td><td style='text-align:center'>16</td></tr><tr><td style='text-align:center'>7</td><td style='text-align:center'>14</td></tr><tr><td style='text-align:center'>8</td><td style='text-align:center'>8</td></tr></table>` }, { id: `C`, text: `<table style='border-collapse:collapse;margin:2px 0' border='1' cellpadding='3'><tr><th>Value</th><th>Frequency</th></tr><tr><td style='text-align:center'>4</td><td style='text-align:center'>12</td></tr><tr><td style='text-align:center'>5</td><td style='text-align:center'>12</td></tr><tr><td style='text-align:center'>6</td><td style='text-align:center'>12</td></tr><tr><td style='text-align:center'>7</td><td style='text-align:center'>12</td></tr><tr><td style='text-align:center'>8</td><td style='text-align:center'>12</td></tr></table>` }, { id: `D`, text: `<table style='border-collapse:collapse;margin:2px 0' border='1' cellpadding='3'><tr><th>Value</th><th>Frequency</th></tr><tr><td style='text-align:center'>4</td><td style='text-align:center'>15</td></tr><tr><td style='text-align:center'>5</td><td style='text-align:center'>11</td></tr><tr><td style='text-align:center'>6</td><td style='text-align:center'>8</td></tr><tr><td style='text-align:center'>7</td><td style='text-align:center'>11</td></tr><tr><td style='text-align:center'>8</td><td style='text-align:center'>15</td></tr></table>` }],
      answer: `A` },

    { id: `m3ia-math-m2-21`, domain: `Geometry and Trigonometry`, skill: `Area and volume`, difficulty: `hard`, type: `grid`,
      prompt: `<p style='text-align:center'><table style='border-collapse:collapse;margin:0 auto' border='1' cellpadding='5'><tr><td></td><th>Volume (cubic units)</th></tr><tr><td>Right circular cylinder A</td><td style='text-align:center'>72π</td></tr><tr><td>Right circular cylinder B</td><td style='text-align:center'>4,608π</td></tr></table></p><p>The table shows the volume of two similar solids, right circular cylinder A and right circular cylinder B. The radius of right circular cylinder A is 3 units. The surface area of right circular cylinder A is <em>k</em>π square units, and the surface area of right circular cylinder B is <em>n</em>π square units, where <em>k</em> and <em>n</em> are constants. What is the value of n − k? (The surface area of a right circular cylinder with radius <em>r</em> and height <em>h</em> is 2π<em>r</em><sup>2</sup> + 2π<em>rh</em>.)</p>`,
      answer: [`990`] },

    { id: `m3ia-math-m2-22`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `hard`, type: `grid`,
      prompt: `<p>Function <em>f</em> is a quadratic function. The graph of y = f(x) in the <em>xy</em>-plane has a vertex at (−5, −8), contains the point (−6, −10), and has a y-intercept at (0, a). The graph of y = 6 · f(x) has a y-intercept at (0, b). What is the positive difference between <em>a</em> and <em>b</em>?</p>`,
      answer: [`290`] },
  ];

  Apex.bank.register({
    id: "dsat-2024-03-int-a",
    title: "March 2024",
    type: "digital",
    region: "International",
    version: "A",
    year: 2024,
    monthNum: 3,
    tagline: "International \u00b7 Version A",
    description: "Digital SAT \u2014 March 2024 International prediction form, Version A (RW in canonical SAT order, Math easy to hard; answers solved independently).",
    adaptive: false,
    sections: [
      { id: "rw", modules: [
        { id: "m3ia-rw-m1", stage: 1, name: "Reading and Writing \u2014 Module 1", minutes: 32, questions: RW_M1 },
        { id: "m3ia-rw-m2", stage: 2, variant: "hard", name: "Reading and Writing \u2014 Module 2 (Hard)", minutes: 32, questions: RW_M2 },
      ] },
      { id: "math", modules: [
        { id: "m3ia-math-m1", stage: 1, name: "Math \u2014 Module 1", minutes: 35, calculator: true, questions: MATH_M1 },
        { id: "m3ia-math-m2", stage: 2, variant: "hard", name: "Math \u2014 Module 2 (Hard)", minutes: 35, calculator: true, questions: MATH_M2 },
      ] },
    ],
  });
})();
