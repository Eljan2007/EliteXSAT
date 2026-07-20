/* ==========================================================================
   Digital SAT — October 2024 (US), Version C.
   Rebuilt in EliteXSAT's native UI from teacher-authored SAT-style prediction
   forms (2027 Prediction October USA). RW sorted into canonical Digital SAT
   domain order; Math ordered easy -> hard. Answers verified independently and
   against the pasted answer key; cross-filled / conflicted items are noted in
   the build log (not shown to students). No explanations. COMPLETE. */
(function () {
  const RW_M1 = [
    { id: `ouc-rw-m1-1`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `easy`, type: `mcq`,
      passage: `<p>Folk and traditional art comes in a truly great many forms, some as ______ one another as woodcarving and ballad singing happen to be. Founded to celebrate outstanding achievement in these many varied arts, the National Heritage Fellowship counts among its recipients the Puerto Rican cuatro maker Diomedes Matos.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `confused with` }, { id: `B`, text: `humble about` }, { id: `C`, text: `useful to` }, { id: `D`, text: `different from` }],
      answer: `D` },

    { id: `ouc-rw-m1-2`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The following text is adapted from John Matheus's 1926 short story “Mr. Bradford Teaches Sunday School.” Mr. Bradford is driving through the countryside in Florida.</p><p>The moss in the towering water oaks had become enlivened with a verdant sheen of silver and hung like festoons of carnival or like funeral decorations for the mourning of the dead. The pine green was resplendent. The bald cypresses spread themselves along the water courses while the willows wept as they always did. Mr. Bradford was conscious of this gorgeous <u>display</u> of nature.</p>`,
      prompt: `As used in the text, what does the word “display” most nearly mean?`,
      options: [{ id: `A`, text: `Exhibition` }, { id: `B`, text: `Concealment` }, { id: `C`, text: `Similarity` }, { id: `D`, text: `Pretentiousness` }],
      answer: `A` },

    { id: `ouc-rw-m1-3`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `easy`, type: `mcq`,
      passage: `<p>Boasting a superb collection of public art, Chicago offers works ranging from towering sculptures, such as Joan Mir&oacute;&rsquo;s <em>Mir&oacute;&rsquo;s Chicago</em> at Brunswick Plaza, to bold street murals, such as Justus Roe&rsquo;s <em>South Shore</em> along South Exchange Avenue. Such ______ public art, on view all across the city, is sure to please any art lover who visits.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `breadth of` }, { id: `B`, text: `controversy over` }, { id: `C`, text: `confusion about` }, { id: `D`, text: `apathy toward` }],
      answer: `A` },

    { id: `ouc-rw-m1-4`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Like other river deltas, the Paran&aacute; River delta is ______: a forever-shifting web of channels and slivers of land that grow and shrink in size and in shape as the river lays down fresh sediment where at last it flows out into the Atlantic Ocean.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `dynamic` }, { id: `B`, text: `immutable` }, { id: `C`, text: `sustainable` }, { id: `D`, text: `unrivaled` }],
      answer: `A` },

    { id: `ouc-rw-m1-5`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The <em>San Pedro</em> is one of some three million known historical shipwrecks scattered across the world&rsquo;s oceans, and how they affect sea life and underwater ecosystems draws keen interest from researchers. Leila Hamdan and her colleagues set out to learn how wooden wrecks shape the microbial communities of the seafloor. Studying two wooden wrecks in the Gulf of Mexico, they set pieces of pine and oak from zero to 200 meters out from each wreck and gathered samples of three microbe types&mdash;bacteria, archaea, and fungi. Across all three of these communities, they found the greatest diversity and richness on the pine and oak that had been set roughly 125 meters from the wrecks.</p>`,
      prompt: `Which choice best describes the overall structure of the text?`,
      options: [{ id: `A`, text: `It introduces a much-discussed study of microbes near shipwrecks, sums up its results, and then gives a research team&rsquo;s reaction to it.` }, { id: `B`, text: `It notes a broad scientific interest in the ecological effects of shipwrecks, describes one study tied to that interest, and then reports one of the study&rsquo;s findings.` }, { id: `C`, text: `It states how many shipwrecks are known, describes the historical importance of one of them, and then remarks on the microbes found at that wreck.` }, { id: `D`, text: `It names a famous shipwreck, describes the wood the ship was built from, and then explains the effect of that wood on underwater microbial communities.` }],
      answer: `B` },

    { id: `ouc-rw-m1-6`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The Federalist Papers, a set of 85 essays that Alexander Hamilton, John Jay, and James Madison wrote, appeared under a pen name in the <em>Independent Journal</em> and in various other newspapers around New York over 1787&ndash;88, urging the people of New York to vote for the proposed United States Constitution. Who wrote most of the essays is settled, though a handful stay disputed: one essay, No. 15&mdash;titled &ldquo;The Insufficiency of the Present Confederation to Preserve the Union&rdquo;&mdash;is beyond doubt Hamilton&rsquo;s, while No. 52, &ldquo;The House of Representatives,&rdquo; might be either his or Madison&rsquo;s, a point scholars still debate.</p>`,
      prompt: `Which choice best describes the overall structure of the text?`,
      options: [{ id: `A`, text: `The text brings up a collection of essays, then flags something about them that is not fully settled.` }, { id: `B`, text: `The text sums up an argument the essays make and then suggests that their authors did not all agree with it.` }, { id: `C`, text: `The text lists who wrote the essays, then observes that one person penned some and two penned others.` }, { id: `D`, text: `The text explains why the essays are notable and then details how they came to be published.` }],
      answer: `A` },

    { id: `ouc-rw-m1-7`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Community science, in which professional scientists team up with amateur enthusiasts on a question, is frequently a productive and engaging way to carry out research. It can open a window onto a scientist&rsquo;s day-to-day work, kindle a young person&rsquo;s interest in science, and enlarge the pool of data a team can gather. The approach proved central to a study by the biologist Abbigail Merrill and colleagues on how the weather bears on a butterfly&rsquo;s choice of flower, drawing on reports from hundreds of students and residents across northwestern Arkansas.</p>`,
      prompt: `Which choice best describes the overall structure of the text?`,
      options: [{ id: `A`, text: `It traces the rise of a kind of scientific collaboration, shows its use in one field, and then proposes future collaborative projects.` }, { id: `B`, text: `It introduces the subject of a scientific study, notes the study&rsquo;s importance, and then reports the study&rsquo;s results.` }, { id: `C`, text: `It names a specific research approach, gives a few of its benefits, and then points to a study that used it.` }, { id: `D`, text: `It argues for a new way of doing scientific research, remarks on the public&rsquo;s view of it, and then shows how it was applied in a study.` }],
      answer: `C` },

    { id: `ouc-rw-m1-8`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The following text is adapted from Jerome K. Jerome's 1889 novel <i>Three Men in a Boat (To Say Nothing of the Dog)</i>. The narrator is traveling by boat with Harris and another friend.</p><p>[Harris] told us anecdotes of how he had gone across the [English] Channel when it was so rough that the passengers had to be tied into their [beds], and he and the captain were the only two living souls on board who were not ill. Sometimes it was he and the second mate who were not ill; but it was generally he and one other man. If not he and another man, then it was he by himself.</p>`,
      prompt: `Which choice best states the main idea of the text?`,
      options: [{ id: `A`, text: `On an earlier voyage, Harris kept the other passengers company more than he did the captain.` }, { id: `B`, text: `Harris finds it hard to recall his first Channel crossing whenever his friends bring it up.` }, { id: `C`, text: `When Harris talks of an earlier trip, he keeps changing details but always boasts of his good health.` }, { id: `D`, text: `Harris is afraid that rough, dangerous waters lie ahead for him and his friends on their coming boat trip.` }],
      answer: `C` },

    { id: `ouc-rw-m1-9`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `medium`, type: `mcq`,
      passage: `<p>&ldquo;Coyote&rdquo; is a loanword&mdash;a word that starts out in one tongue and is later taken up by another. It reached English along an indirect path from <em>coyote</em>, the Spanish name for the wild canine. Spanish had in turn taken the term from Nahuatl, a language Indigenous to central Mexico, in which its early form is <em>coyotl</em>. &ldquo;Condor,&rdquo; too, is Indigenous in origin and made its way into English by way of Spanish, but here the ultimate source is Quechua, a South American language, whose word for the great vulture is <em>kuntur</em>.</p>`,
      prompt: `The author makes which point about the Spanish language?`,
      options: [{ id: `A`, text: `It has acted as a channel through which Indigenous languages have shaped English.` }, { id: `B`, text: `Its share of English vocabulary is roughly equal to the combined share from Indigenous languages.` }, { id: `C`, text: `It has taken words from Indigenous languages and also given words to them.` }, { id: `D`, text: `It borrowed words from Nahuatl and Quechua in about equal numbers.` }],
      answer: `A` },

    { id: `ouc-rw-m1-10`, domain: `Information and Ideas`, skill: `Command of Evidence (Quantitative)`, difficulty: `medium`, type: `mcq`,
      passage: `<div style='text-align:center;font-weight:600;font-size:12px;margin:2px 0'>Average Agricultural-Export Growth Rate, Five Years Before vs. After a US Free Trade Agreement</div><table style='border-collapse:collapse;margin:6px auto'><tr><th style='border:1px solid var(--border);padding:3px 12px'>Country (FTA)</th><th style='border:1px solid var(--border);padding:3px 12px'>Pre-FTA growth rate (%)</th><th style='border:1px solid var(--border);padding:3px 12px'>Post-FTA growth rate (%)</th></tr><tr><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>Belize (BFTA)</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>10</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>14</td></tr><tr><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>Oman (OMFTA)</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>4</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>36</td></tr><tr><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>Senegal (SNFTA)</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>33</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>9</td></tr></table><p>To gauge whether joining a free trade agreement (FTA)&mdash;a deal among nations to lower tariffs, duties, and other trade barriers&mdash;shifts a country&rsquo;s total agricultural exports, the economist Kayode Ajewole and colleagues worked out how fast several countries&rsquo; agricultural exports grew, on average, across the five years leading up to each pact with the United States and the five years following it. The table gives results for three of the countries in the study. Looking at the table, a student claims that entering an FTA speeds up the growth of a nation&rsquo;s total farm exports.</p>`,
      prompt: `Which choice best describes data from the table that weaken the student&rsquo;s claim?`,
      options: [{ id: `A`, text: `Over the five years after Belize joined BFTA, its agricultural exports grew at about 14 percent, higher than the rate in the five years before it joined.` }, { id: `B`, text: `Every country shown had positive agricultural-export growth in the five years after joining its FTA, though the rates varied.` }, { id: `C`, text: `Although Oman&rsquo;s agricultural exports grew slowly before OMFTA, that trend reversed in the five years after Oman joined.` }, { id: `D`, text: `Although Senegal&rsquo;s agricultural exports did grow in the five years after it joined SNFTA, that growth rate fell short of the pace seen in the five years before.` }],
      answer: `D` },

    { id: `ouc-rw-m1-11`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>One survey put the April 2022 cancellation rate for fashion and apparel subscription services at 7.6 percent of subscribers. Curbing this sort of subscriber turnover is a real challenge for subscription sellers: a customer&rsquo;s early enthusiasm for a subscription tends to ______ quickly, so sellers must come up with other incentives to shore up retention.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `subside` }, { id: `B`, text: `rejuvenate` }, { id: `C`, text: `converge` }, { id: `D`, text: `resolve` }],
      answer: `A` },

    { id: `ouc-rw-m1-12`, domain: `Information and Ideas`, skill: `Command of Evidence (Quantitative)`, difficulty: `medium`, type: `mcq`,
      passage: `<div style='text-align:center;font-weight:600;font-size:12px;margin:2px 0'>Leaf-Pair Orientation Across Three Grapevine Species</div><table style='border-collapse:collapse;margin:6px auto'><tr><th style='border:1px solid var(--border);padding:3px 12px'>Species</th><th style='border:1px solid var(--border);padding:3px 12px'>Leaf pairs, opposite-side orientation</th><th style='border:1px solid var(--border);padding:3px 12px'>Leaf pairs, same-side orientation</th></tr><tr><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>frost grape</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>110</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>48</td></tr><tr><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>July grape</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>200</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>102</td></tr><tr><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>graybark grape</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>265</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>92</td></tr></table><p>Auxins are a class of plant hormones that shape growth, leaf orientation among them (the tendency of a leaf to grow bigger on one flank of its long central axis than on the other). The University of California, Berkeley biologist Ciera Martinez and colleagues observed that in some plants whose leaves grow in pairs, auxins usually gather on opposite sides of the two leaves (say, the left of one and the right of the other). They reasoned that paired leaves should therefore lean toward opposite-side orientation, and they put the idea to the test on paired leaves from several grapevine species.</p>`,
      prompt: `Which choice best describes data from the table that support Martinez and colleagues&rsquo; hypothesis?`,
      options: [{ id: `A`, text: `In the July grape, the count of opposite-side leaf pairs is fairly high, though lower than in the graybark grape.` }, { id: `B`, text: `Though the July grape has a fairly high number of same-side pairs, that number is much lower in the frost grape and the graybark grape.` }, { id: `C`, text: `Even though the exact ratio differs by species, the graybark, frost, and July grapes all have more leaf pairs with opposite-side than with same-side orientation.` }, { id: `D`, text: `In the graybark, frost, and July grapes, every leaf pair shows opposite-side orientation.` }],
      answer: `C` },

    { id: `ouc-rw-m1-13`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Researchers have found that, among people whose hearing is clinically typical, a sound taken as meaningful registers as quieter than an equally loud sound taken as mere noise (that is, a sound the listener finds meaningless). A recent study by Antonia Olivia Dolan and colleagues let participants listen to&mdash;and set the volume of&mdash;recordings of music in popular genres such as acoustic folk and orchestral, along with a number of recordings of various nature sounds. The team noted that participants may well have heard the nature sounds as mere noise, which suggests that a participant who took in the nature sounds and Jose Gonzalez&rsquo;s &ldquo;Heartbeats&rdquo; each at 61.5 decibels likely would have ______</p>`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `turned the nature sounds up to a volume above 61.5 decibels.` }, { id: `B`, text: `decided that the nature sounds and &ldquo;Heartbeats&rdquo; alike fell short of 61.5 decibels.` }, { id: `C`, text: `found the nature sounds louder to the ear than &ldquo;Heartbeats,&rdquo; though in fact they were not.` }, { id: `D`, text: `taken the nature sounds and &ldquo;Heartbeats&rdquo; as equally meaningful, yet heard the music as the quieter of them.` }],
      answer: `C` },

    { id: `ouc-rw-m1-14`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Evan MacLean and colleagues weighed behavioral and genetic data from more than 14,000 dogs across over 100 breeds and found that differences in how breeds behave can be traced to genetic differences between them, pointing to a genetic basis for such behavioral differences. This held true for separation problems and for energy alike, but it was strongest of all for trainability, which shows, for one, in how readily a dog will fetch. In a separate study, researchers found that on the matter of trainability the English mastiff behaves quite differently from the Yorkshire terrier. Taken together, these two sets of findings imply that ______</p>`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `over time, the two breeds are likely to grow more genetically alike.` }, { id: `B`, text: `in the genetic roots of trainability, English mastiffs and Yorkshire terriers are unlike each other.` }, { id: `C`, text: `an individual mastiff may show more trainability than an individual terrier does.` }, { id: `D`, text: `these two breeds lean toward trainability more than most other breeds of dog.` }],
      answer: `B` },

    { id: `ouc-rw-m1-15`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `medium`, type: `mcq`,
      passage: `<p>A large-bodied moth called the jade hawkmoth wards off Brandt&rsquo;s myotis and other insect-hunting bats, which hunt by echolocation, by giving off ultrasonic clicks that may, say, warn of the moth&rsquo;s bad taste. To look into moths&rsquo; defensive ultrasound&mdash;which researchers had believed belonged only to tiger moths, hawkmoths, and a single geometer species&mdash;Jesse R. Barber and colleagues recorded how moths from as many as 252 different genera, covering most of the families of large-bodied moths, answered recorded playback of the echolocation calls of bats. In all, 52 of these genera&mdash;several of them geometers&mdash;gave off defensive ultrasonic clicks of their own. The result suggests that ______</p>`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `unlike the 52 click-producing genera, most moth genera have probably not evolved defenses aimed squarely at bats.` }, { id: `B`, text: `certain genera of large-bodied moths may put ultrasonic signaling to ends other than escaping predators like Brandt&rsquo;s myotis.` }, { id: `C`, text: `producing ultrasound is only one of many effective tactics moths use to dodge bat attacks.` }, { id: `D`, text: `anti-bat ultrasound may be a far more common defense among large-bodied moths than researchers had realized.` }],
      answer: `D` },

    { id: `ouc-rw-m1-16`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `easy`, type: `mcq`,
      passage: `<p>Almost squarely on the equator sit three towns: ______ Ayem, and Jamame. Each, though, lies in a different country&mdash;Kenya, Gabon, and Somalia, in that order.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `Maseno` }, { id: `B`, text: `Maseno:` }, { id: `C`, text: `Maseno;` }, { id: `D`, text: `Maseno,` }],
      answer: `D` },

    { id: `ouc-rw-m1-17`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `easy`, type: `mcq`,
      passage: `<p>An element&rsquo;s atomic number, as given in the periodic table, is the count of protons in one of its atoms. A helium atom, for instance, ______ 2 protons. Professor Raymond Chang lays out this idea more fully in his textbook <em>Chemistry</em>.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `has had` }, { id: `B`, text: `has` }, { id: `C`, text: `is having` }, { id: `D`, text: `had` }],
      answer: `B` },

    { id: `ouc-rw-m1-18`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `<p><em>Beans</em>, a feature-length drama from the Mohawk filmmaker Tracey Deer, stands among many films by Indigenous women ______ shown at film festivals over the past few years.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `to have been` }, { id: `B`, text: `were being` }, { id: `C`, text: `had been` }, { id: `D`, text: `are being` }],
      answer: `A` },

    { id: `ouc-rw-m1-19`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Martha A. Scholl, Maoya Bassiouni, and Angel J. Torres-S&aacute;nchez&mdash;a research team in Florida&mdash;gathered climate readings across Puerto Rico&rsquo;s Luquillo Mountains on February 1, 2018. By 8:30 that morning the air read 16&deg;C at CC1, whichever of the sites had the highest ______ by 11:00 that night it had climbed to 16.8&deg;C.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `elevation and` }, { id: `B`, text: `elevation` }, { id: `C`, text: `elevation,` }, { id: `D`, text: `elevation, and` }],
      answer: `D` },

    { id: `ouc-rw-m1-20`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Among the most celebrated allegorical paintings ever made are Joachim Beuckelaer&rsquo;s <em>The Four Elements: Air</em> and Antoine Watteau&rsquo;s <em>Ceres (Summer)</em>, completed in 1570 and ______ allegorical work of this kind enjoyed special popularity between the 15th century and the late 18th.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `1712 respectively,` }, { id: `B`, text: `1712, respectively;` }, { id: `C`, text: `1712, respectively,` }, { id: `D`, text: `1712; respectively,` }],
      answer: `B` },

    { id: `ouc-rw-m1-21`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `easy`, type: `mcq`,
      passage: `<p>Woven from a gabardine-and-wool blend, the fabric of Elvis Presley&rsquo;s Peacock jumpsuit was supple enough for the singer to pull off his trademark dance moves. ______ the extra heft of the suit&rsquo;s embroidered feathers, colored blue and green, probably curbed Elvis&rsquo;s mobility to some degree.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `However,` }, { id: `B`, text: `Firstly,` }, { id: `C`, text: `In other words,` }, { id: `D`, text: `For this reason,` }],
      answer: `A` },

    { id: `ouc-rw-m1-22`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The Eiffel Tower in Paris, France, drew criticism&mdash;even protest&mdash;when it was finished in 1889, faulted for the oddity of its unusual spire-like outline. ______ the design turns up everywhere&mdash;in Eiffel Tower replicas, such as Rio de Janeiro&rsquo;s, and in buildings such as the Copenhagen Zoo Tower over in Copenhagen, Denmark.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `On the contrary,` }, { id: `B`, text: `In conclusion,` }, { id: `C`, text: `Furthermore,` }, { id: `D`, text: `Nowadays,` }],
      answer: `D` },

    { id: `ouc-rw-m1-23`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Scientists studying asteroid deflection have concentrated on secondary bodies&mdash;a moonlet catalogued S/2006 (311066), say, which circles the near-Earth asteroid 2004 DC. Back in 2022, NASA deliberately flew a probe into just such a body, successfully nudging its orbit. Researchers have yet to show, ______ that primary bodies like 2004 DC would respond in the same way.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `though,` }, { id: `B`, text: `for example,` }, { id: `C`, text: `likewise,` }, { id: `D`, text: `moreover,` }],
      answer: `A` },

    { id: `ouc-rw-m1-24`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `easy`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>A rail trail known as the Simon Kenton Trail runs through the state of Ohio.</li><li>Another rail trail, this one called the Papermill Trail, runs through the state of Maine.</li><li>Rail trails, broadly speaking, are old railroad corridors remade into public paths.</li></ul>`,
      prompt: `The student wants to emphasize a similarity between the Simon Kenton Trail and the Papermill Trail. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `One such public path, remade from an old railroad corridor, lies in Maine.` }, { id: `B`, text: `Both trails, the Simon Kenton and the Papermill, count as rail trails.` }, { id: `C`, text: `One trail sits in Ohio (the Simon Kenton), the other in Maine (the Papermill).` }, { id: `D`, text: `The Simon Kenton Trail, an old railroad corridor, runs through Ohio.` }],
      answer: `B` },

    { id: `ouc-rw-m1-25`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>New Zealand&rsquo;s Wairakei geothermal power plant runs on a flash steam system to make electricity.</li><li>Flash steam technology works only where a reservoir runs hotter than 180&deg;C.</li><li>The worldwide use of flash steam systems is limited, since many reservoirs are not hot enough.</li><li>Germany&rsquo;s Traunreut geothermal power plant runs on a binary cycle system instead.</li><li>Binary cycle technology can draw energy from cooler reservoirs (under 180&deg;C).</li><li>Binary cycle systems cost more to maintain than flash steam ones do.</li></ul>`,
      prompt: `The student wants to compare the disadvantages of the geothermal systems used at the Wairakei and Traunreut plants. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `Unlike the plant at Traunreut, the Wairakei plant relies on flash steam, which needs a scarcer resource: reservoirs hotter than 180&deg;C.` }, { id: `B`, text: `Set beside the Wairakei plant&rsquo;s system, the Traunreut one carries a clear drawback&mdash;its cost.` }, { id: `C`, text: `The Traunreut plant&rsquo;s system gets past the temperature limits of the Wairakei plant&rsquo;s but costs more to maintain.` }, { id: `D`, text: `The Wairakei system demands reservoirs hotter than 180&deg;C; the Traunreut system can work with cooler ones.` }],
      answer: `C` },

    { id: `ouc-rw-m1-26`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>In Oahu, Hawaii, the great majority of plant and bird species are non-native.</li><li>A 2019 study asked what part non-native birds play in spreading plant seeds there.</li><li>The researchers logged which plant seeds turned up in the droppings of the non-native birds.</li><li>Among the fifteen native species logged was the flowering shrub <em>Touchardia latifolia</em>.</li><li>Among the twenty-nine non-native species was the herbaceous vine <em>Hedychium gardnerianum</em>.</li><li>The team concluded that non-native birds do much to spread the seeds of both native plants and non-native ones.</li></ul>`,
      prompt: `The student wants to contrast the two plants. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `In Oahu, the droppings of non-native birds held seeds of both <em>Touchardia latifolia</em> and <em>Hedychium gardnerianum</em>.` }, { id: `B`, text: `Both <em>Touchardia latifolia</em> and <em>Hedychium gardnerianum</em> grow in Oahu, Hawaii.` }, { id: `C`, text: `<em>Touchardia latifolia</em>, a shrub, is native to the island of Oahu, while the vine <em>Hedychium gardnerianum</em> is not.` }, { id: `D`, text: `Most of Oahu&rsquo;s plant species, <em>Hedychium gardnerianum</em> among them, are non-native.` }],
      answer: `C` },

    { id: `ouc-rw-m1-27`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>After dark, ships and other kinds of watercraft rely on the vital beams a lighthouse casts in order to find their way safely.</li><li>Before automation arrived, each and every lighthouse was run by its own lighthouse keeper.</li><li>Barbara Mabrity kept Key West Light in Florida from 1832 until 1862.</li><li>Flora McNeil kept Bridgeport Breakwater Light in Connecticut from 1904 until 1920.</li></ul>`,
      prompt: `The student wants to emphasize a difference between the two lighthouse keepers. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `Barbara Mabrity and Flora McNeil alike played vital parts in keeping watercraft safe in centuries past.` }, { id: `B`, text: `Between 1832 and 1862, the nighttime waters off Florida were easier to cross thanks to Barbara Mabrity.` }, { id: `C`, text: `Barbara Mabrity&rsquo;s years as a keeper fell in an earlier century than Flora McNeil&rsquo;s did.` }, { id: `D`, text: `At Bridgeport Breakwater Light, it was Flora McNeil who helped watercraft find their way after dark.` }],
      answer: `C` },
    ];

  const RW_M2 = [
    { id: `ouc-rw-m2-1`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `easy`, type: `mcq`,
      passage: `<p>Web developers often urge users to choose passwords that are fairly involved and so hard to guess. Even so, studies show that the more ______ way of picking a password tends to prize ease over safety: the seventh most-used password in 2012, for instance, was the easily recalled &ldquo;letmein.&rdquo;</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `popular` }, { id: `B`, text: `creative` }, { id: `C`, text: `useful` }, { id: `D`, text: `complex` }],
      answer: `A` },

    { id: `ouc-rw-m2-2`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The remains of the individual labeled LD 350-1, unearthed in 2013 in Ethiopia, can help paleoanthropologists not only ______ how hominids evolved over time but also shed light on the Pliocene epoch as a whole, revealing telling details about the world in which LD 350-1 lived.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `yield` }, { id: `B`, text: `exploit` }, { id: `C`, text: `discern` }, { id: `D`, text: `prioritize` }],
      answer: `C` },

    { id: `ouc-rw-m2-3`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `hard`, type: `mcq`,
      passage: `<p>An examination by two economic historians of the public finances of the Republic of Venice at the height of its power turned up a striking ______: although the state leaned heavily on borrowed money and suspended its payments to creditors on more than one occasion, it nonetheless kept a sounder long-run balance than did many realms later held up as models of fiscal thrift.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `harbinger` }, { id: `B`, text: `exemplar` }, { id: `C`, text: `sanction` }, { id: `D`, text: `incongruity` }],
      answer: `D` },

    { id: `ouc-rw-m2-4`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The springbok can run remarkably fast&mdash;its top speed reaches about 88 km/hr&mdash;yet it is far slower than the peregrine falcon, a bird that reaches nearly 389 km/hr in flight. That gap is largely ______ of the way the traits that make flight possible place fewer limits on top speed than the traits suited to running over land do.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `a consequence` }, { id: `B`, text: `a repudiation` }, { id: `C`, text: `an objective` }, { id: `D`, text: `an explanation` }],
      answer: `A` },

    { id: `ouc-rw-m2-5`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Some scholars argue that although protecting individual freedoms is vital to a democracy, a shared grasp of the past is equally central to how citizens understand the workings of the state; a functioning public, they say, cannot leave historical questions to specialists alone. In brief, knowledge of history is hardly ______ and ought not be the preserve of historians by themselves.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `superfluous` }, { id: `B`, text: `equitable` }, { id: `C`, text: `commonplace` }, { id: `D`, text: `unattainable` }],
      answer: `A` },

    { id: `ouc-rw-m2-6`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Oil shocks&mdash;the 16% climb in oil prices between April and September of 1973 is one&mdash;can hit individual consumers hard, yet Gbadebo Oladosu and colleagues have found that, at the scale of whole national economies, the impact tends to be fairly ______. Recent oil shocks, for one, moved China&rsquo;s gross domestic product only a shade above zero.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `subdued` }, { id: `B`, text: `variable` }, { id: `C`, text: `beneficial` }, { id: `D`, text: `persistent` }],
      answer: `A` },

    { id: `ouc-rw-m2-7`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Copenhagen draws heavy foot traffic, yet copying one feature of Copenhagen&rsquo;s walkability&mdash;say, its human-scaled architecture&mdash;may not be enough to spur more walking in other cities. As the urbanist Mariela Alfonzo argues, our grasp of how people decide whether to walk is shaky: some studies stress the part played by <u>population density</u>, others the part played by <u>average commuting distance</u>, and so it goes, though the choice to walk is made in tangled settings where many needs and conditions shape the choice.</p>`,
      prompt: `Which choice best describes the function of the references to “population density” and “average commuting distance” in the text as a whole?`,
      options: [{ id: `A`, text: `They point to factors the text says Alfonzo considers overstressed in studies of walking decisions but that it treats as relevant to most people.` }, { id: `B`, text: `They give examples of factors researchers think people weigh in most settings but that the text claims matter only for walking decisions made in Copenhagen.` }, { id: `C`, text: `They offer examples of factors that studies call important to how people decide to walk but that the text says most people seldom think about.` }, { id: `D`, text: `They stand for factors picked out as strong drivers of the choice to walk, which the text nonetheless treats as merely a few among the many conditions that shape how people decide whether to walk.` }],
      answer: `D` },

    { id: `ouc-rw-m2-8`, domain: `Information and Ideas`, skill: `Cross-Text Connections`, difficulty: `hard`, type: `mcq`,
      passage: `<p><b>Text 1</b></p><p>Across parts of Finland, the pine marten is a leading predator of the bank vole. The researcher Aino Virtanen and her colleagues found that once the predation pressure on bank voles was briefly eased, the vole numbers climbed sharply upward. The result neatly illustrates a basic rule of ecology: that predators hold prey numbers in check.</p><p><b>Text 2</b></p><p>Diego Salas and Marina Rueda found that keeping pumas out of a site in Patagonia where they usually hunt guanacos had no meaningful effect at all on how many guanacos there were. Plenty of other predator-removal studies do report a rise in prey numbers, but those studies tend to look at small, fast-breeding prey&mdash;birds, voles, rabbits&mdash;rather than large, slow-breeding prey like guanacos, which may explain why their results differ from those of Salas and Rueda.</p>`,
      prompt: `Based on the texts, the author of Text 2 would most likely agree with which statement about Byrom and colleagues' findings (Text 1)?`,
      options: [{ id: `A`, text: `They may be partly explained by pine martens being smaller and faster-breeding than pumas.` }, { id: `B`, text: `They may have differed had the ratio of a pine marten&rsquo;s body size to a bank vole&rsquo;s been greater.` }, { id: `C`, text: `They may reflect a response not usually seen in prey species other than bank voles.` }, { id: `D`, text: `They may be partly due to physical traits of bank voles that guanacos do not share.` }],
      answer: `D` },

    { id: `ouc-rw-m2-9`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `hard`, type: `mcq`,
      passage: `<p>The following text is from Virginia Woolf's 1919 novel <i>Night and Day</i>. The narrator describes a gathering of artists and intellectuals.</p><p>One person after another rose, and, as with an ill-balanced axe, attempted to hew out his conception of art a little more clearly, and sat down with the feeling that, for some reason which he could not grasp, his strokes had gone awry. As they sat down they turned almost invariably to the person sitting next them, and rectified and continued what they had just said in public.</p>`,
      prompt: `The text makes which point about the people at the gathering?`,
      options: [{ id: `A`, text: `Each looks down on the others present but works hard to win their admiration.` }, { id: `B`, text: `Each falls short of laying out a fully coherent view of art yet cannot grasp the reason why.` }, { id: `C`, text: `Each gets tangled in a dispute about art that none of them knows how to settle.` }, { id: `D`, text: `Each likes holding forth on abstract matters in public but has no taste for discussing them in private.` }],
      answer: `B` },

    { id: `ouc-rw-m2-10`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Ke Bi and colleagues drew on historical DNA (hDNA)&mdash;genetic data incidentally preserved in specimens kept in natural history collections&mdash;to trace how the alpine chipmunk (<em>Tamias alpinus</em>) evolved over time. The method has rare advantages, such as the chance to set historical genetic data beside present-day data, yet it stays relatively little used, since archived specimens are at times stored in ways that degrade DNA quality&mdash;a problem not easily fixed with current techniques and available extraction and analysis tools.</p>`,
      prompt: `What does the text most strongly suggest about specimens from natural history collections?`,
      options: [{ id: `A`, text: `They may hold valuable genetic data, yet usable hDNA cannot be pulled from every one of them.` }, { id: `B`, text: `They serve chiefly as a source of genetic data for researchers looking at organisms that have changed a great deal over evolutionary time.` }, { id: `C`, text: `Because they are so often in poor condition, they tend to yield genetic data that take a long time to extract and interpret.` }, { id: `D`, text: `Though used in a study that led to an important discovery, they are on the whole of limited value as sources of genetic data.` }],
      answer: `A` },

    { id: `ouc-rw-m2-11`, domain: `Information and Ideas`, skill: `Command of Evidence (Textual)`, difficulty: `hard`, type: `mcq`,
      passage: `<p>The crowned lapwing (<em>Vanellus coronatus</em>) is one of many species in the bird order Charadriiformes well known for using feigned-injury displays to fool predators. A broad literature review by Tomas Halloran and colleagues found that the trait has independently arisen across a surprisingly wide span of 13 different bird orders, among them the Caprimulgiformes and the Strigiformes. Looking into what might drive its spread, the researchers concluded that, whatever the order, how common the trait is depends on environmental differences tied to the absolute latitude of nesting sites.</p>`,
      prompt: `Which finding, if true, would most strongly support the researchers' conclusion?`,
      options: [{ id: `A`, text: `The use of feigned-injury displays runs common among Charadriiformes species whatever their nesting latitude, yet in other orders it occurs only where nesting sites lie at 0&ndash;30 degrees absolute latitude.` }, { id: `B`, text: `Among the orders examined, feigned-injury displays turn up in roughly 34% of the species that nest at 0&ndash;30 degrees absolute latitude and in roughly 60% of those that nest at 50&ndash;80 degrees.` }, { id: `C`, text: `Feigned-injury displays appear in Charadriiformes species across the whole range of nesting latitudes within that order, yet in other orders they appear only where nesting sites lie 10&ndash;20 degrees higher in latitude than is typical for those species.` }, { id: `D`, text: `Among the orders examined, about 54% of species nest at 50&ndash;80 degrees absolute latitude, yet most species known to use feigned-injury displays nest between 0 and 30 degrees.` }],
      answer: `B` },

    { id: `ouc-rw-m2-12`, domain: `Information and Ideas`, skill: `Command of Evidence (Textual)`, difficulty: `hard`, type: `mcq`,
      passage: `<p>When Microsoft, long known as a maker of software, launched the Xbox console in 2001, it drew on the brand recognition it had built in one field to enter another where it had not competed&mdash;an example of brand extension. To find out whether perceived similarity between categories predicts how likely shoppers are to buy brand extensions, Alicia Grasby and colleagues identified 30 extended-brand pairs (say, one brand&rsquo;s mobile phone and its headphones) within a year of purchases by some 60,000 households; for every pair they had shoppers rate how similar the two categories were and worked out the change in the chance that a brand bought in one category would also be bought in the other.</p>`,
      prompt: `Which finding, if true, would provide evidence that the possibility Grasby et al. investigated does occur?`,
      options: [{ id: `A`, text: `Shoppers&rsquo; ratings varied widely from pair to pair, while the probability shifts the researchers computed were much alike across pairs.` }, { id: `B`, text: `Shoppers bought more products in categories where extended-brand pairs occur than in categories where they do not.` }, { id: `C`, text: `Shoppers&rsquo; ratings and the probability shifts the researchers computed moved together in a strong, positive relationship.` }, { id: `D`, text: `Both shoppers&rsquo; ratings and the probability shifts the researchers computed were swayed by how well known each brand was.` }],
      answer: `C` },

    { id: `ouc-rw-m2-13`, domain: `Information and Ideas`, skill: `Command of Evidence (Quantitative)`, difficulty: `hard`, type: `mcq`,
      passage: `<div style='text-align:center;font-weight:600;font-size:12px;margin:2px 0'>Model vs. Participant Enjoyment Ratings: Correlation by Painting Style</div><table style='border-collapse:collapse;margin:6px auto'><tr><th style='border:1px solid var(--border);padding:3px 12px'>Participant</th><th style='border:1px solid var(--border);padding:3px 12px'>Impressionist</th><th style='border:1px solid var(--border);padding:3px 12px'>Color field</th></tr><tr><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>P4</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>0.27</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>0.17</td></tr><tr><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>P7</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>0.29</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>0.26</td></tr><tr><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>P3</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>0.42</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>0.11</td></tr></table><p>The neuroscientist Kiyohito Iigaya and colleagues built a computer model meant to gauge how much a person would enjoy a given artwork, rating it somewhere between 1 (meaning not at all) and 4 (meaning very much). They then had participants apply that same scale to a number of painting sets in various styles, then measured the correlation between the model&rsquo;s predicted ratings and the participants&rsquo; reported ones. Suppose P3 rated the impressionist and the color-field paintings equally; the table&rsquo;s data then imply a prediction from the model&mdash;namely, that ______</p>`,
      prompt: `Which choice most effectively uses data from the table to complete the statement?`,
      options: [{ id: `A`, text: `for P3, the ratings given to impressionist and to color-field works would come out unequal.` }, { id: `B`, text: `for P3, the ratings given to impressionist and to color-field works would come out equal.` }, { id: `C`, text: `P3 would take less pleasure in the impressionist works than in the color-field works.` }, { id: `D`, text: `P3 would take more pleasure in the impressionist works than in the color-field works.` }],
      answer: `A` },

    { id: `ouc-rw-m2-14`, domain: `Information and Ideas`, skill: `Command of Evidence (Textual)`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Scholars point to <em>Men of Maize</em>, the 1949 novel by the Guatemalan writer Miguel &Aacute;ngel Asturias, as a founding work of magical realism&mdash;the Latin American mode of fiction in which antirealistic devices, often taken from the folklore of Indigenous and colonial societies of the Americas, appear within the otherwise realistic frame typical of the modern novel. The style has left a deep mark on writers the world over, the Turkish author Orhan Pamuk among them, <u>whose 2001 book <em>My Name Is Red</em> echoes classic magical realist works by setting literary realism beside folklore&mdash;in this case, the folklore of Turkey.</u></p>`,
      prompt: `Which quotation from a literary scholar would most directly support the claim in the underlined portion of the text?`,
      options: [{ id: `A`, text: `&ldquo;As in many Latin American magical realist works, <em>My Name Is Red</em> owes a debt to antirealistic elements of Turkey&rsquo;s folk tradition.&rdquo;` }, { id: `B`, text: `&ldquo;While Turkish folklore plainly shapes the style and the occasionally antirealistic plot found in <em>My Name Is Red</em>, this book also bears the clear stamp of Latin America&rsquo;s magical realist tradition.&rdquo;` }, { id: `C`, text: `&ldquo;Though <em>My Name Is Red</em> moves between realistic and antirealistic modes, touches suggesting the sway of Turkish folklore appear all through the book.&rdquo;` }, { id: `D`, text: `&ldquo;Within <em>My Name Is Red</em>, the orderly realistic narrative is again and again, and to great effect, broken open by imagery and events drawn from Turkish folklore.&rdquo;` }],
      answer: `D` },

    { id: `ouc-rw-m2-15`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `<p>As Yi songs of the natural world and Tlingit songs of wildlife encounters show, ecological knowledge can be carried along in Indigenous songs, and at times it survives in no other form at all. A Kwakwaka&rsquo;wakw song keeper in Canada worked closely with the ethnobiologist Dana Lepofsky and colleagues, sharing songs that tell of the terraced tidal clam beds the people once built to help a dietary staple thrive. Drawing also on the archaeological evidence, Lepofsky and colleagues found that the spread of the very practice the songs describe matched a clear rise in clam size and numbers even as harvesting pressure grew&mdash;a result showing that ______</p>`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `showing the practical uses of what a people knows about their environment is the defining trait of certain Indigenous peoples&rsquo; music.` }, { id: `B`, text: `the Kwakwaka&rsquo;wakw would probably not have set the making of clam beds to song had the effort not yielded much larger clams.` }, { id: `C`, text: `the clams gathered from tidal terraces by the Kwakwaka&rsquo;wakw in the past were probably a different species from those found there today.` }, { id: `D`, text: `effective ways of cultivating a food source are among the ecological knowledge kept alive in Indigenous songs.` }],
      answer: `D` },

    { id: `ouc-rw-m2-16`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Rashad Guliyev is a novelist from Ganja, Azerbaijan, who has drawn wide international praise in recent years. Writers working in other genres&mdash;poetry or the stage, say&mdash;are less apt to be recognized beyond their own countries&rsquo; borders, though many are still well ______ Leyla Aliyeva, for one, is a much-celebrated slam poet, also Azerbaijani.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `known,` }, { id: `B`, text: `known:` }, { id: `C`, text: `known and` }, { id: `D`, text: `known` }],
      answer: `B` },

    { id: `ouc-rw-m2-17`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Malaysia&rsquo;s entry into Interpol&mdash;the International Criminal Police ______ in 1961 gave the Royal Malaysian Police access to the shared resources of police forces the world over.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `Organization—` }, { id: `B`, text: `Organization:` }, { id: `C`, text: `Organization,` }, { id: `D`, text: `Organization` }],
      answer: `A` },

    { id: `ouc-rw-m2-18`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Bird eggs vary in length from one species to another, and an ecological ______ compared egg lengths across many species and found eggs of <em>Calidris alpina</em> to run longer than those of <em>Oriolus xanthonotus</em>.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `study that` }, { id: `B`, text: `study` }, { id: `C`, text: `study, which` }, { id: `D`, text: `study, that` }],
      answer: `A` },

    { id: `ouc-rw-m2-19`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Many writings by Sallust, a Roman historian of the 1st century BCE&mdash;among them his account of the Roman Republic, the <em>Histories</em>&mdash;have not survived. A reader ______ to take in one of Sallust&rsquo;s surviving works, not one known merely through later writers&rsquo; references, might instead track down his <em>Bellum catalinae</em>, which chronicles an attempted coup.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `hoped` }, { id: `B`, text: `hoping` }, { id: `C`, text: `have hoped` }, { id: `D`, text: `hope` }],
      answer: `B` },

    { id: `ouc-rw-m2-20`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The Suzuki method is a way of teaching music ______ to pass music on as naturally as children learn to speak, stresses steeping students in a musical community. Beginners in Suzuki violin lessons open with easy classical pieces, such as Johann Sebastian Bach&rsquo;s &ldquo;Minuet No. 2.&rdquo;</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `that, is aiming` }, { id: `B`, text: `that, aiming` }, { id: `C`, text: `that aims` }, { id: `D`, text: `that has aimed` }],
      answer: `B` },

    { id: `ouc-rw-m2-21`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The Organisation for Economic Co-operation and Development (OECD) compiles comparative price-level figures across its thirty-eight member states. By those figures, as of July 2021 a &ldquo;basket&rdquo; holding goods and services worth 100 US dollars (USD) within the United States would have run to roughly 113 USD or so in fellow OECD member ______</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `nation Australia.` }, { id: `B`, text: `nation: Australia.` }, { id: `C`, text: `nation—Australia.` }, { id: `D`, text: `nation, Australia.` }],
      answer: `A` },

    { id: `ouc-rw-m2-22`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>In 2015, the geographer Peter Rogerson pinpointed North Dakota&rsquo;s geographic center at a spot about 2.7 miles southwest of the town of McClusky. His figure was more precise than the US Geological Survey&rsquo;s own estimate from 1920. ______ that earlier estimate had relied on far cruder tools&mdash;just cardboard and string.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `Likewise,` }, { id: `B`, text: `To that end,` }, { id: `C`, text: `Of course,` }, { id: `D`, text: `Ultimately,` }],
      answer: `C` },

    { id: `ouc-rw-m2-23`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>At New York&rsquo;s 1924 ticker-tape parade honoring US Olympic champions, the ribbons raining down were spools of paper from &ldquo;tickers,&rdquo; the telegraph machines once used to relay stock quotes. Of course, real ticker tape had long been out of use by the time of the 2019 parade celebrating the US women&rsquo;s national soccer team. ______ ordinary shredded paper lent the celebration its snowstorm.</p>`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `With this in mind,` }, { id: `B`, text: `In addition,` }, { id: `C`, text: `Then,` }, { id: `D`, text: `In other words,` }],
      answer: `C` },

    { id: `ouc-rw-m2-24`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>The Peruvian American artist Grimanesa Amoros is celebrated for her sculptures built from LED light.</li><li><em>Uros House</em>, one of her sculptures, is built from smooth, multicolored LED domes and takes up about 250 cubic feet.</li><li><em>The Mirror Connection</em>, another, is built from tangled blue and white LED tubes and takes up about 252,000 cubic feet.</li></ul>`,
      prompt: `The student wants to emphasize a similarity between <i>Uros House</i> and <i>The Mirror Connection</i>. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `The artist behind <em>Uros House</em>, a work of smooth, multicolored LED domes, is Grimanesa Amoros.` }, { id: `B`, text: `At 252,000 cubic feet, Grimanesa Amoros&rsquo;s <em>The Mirror Connection</em> is a far larger work than the 250-cubic-foot <em>Uros House</em>.` }, { id: `C`, text: `Both <em>Uros House</em> and <em>The Mirror Connection</em> are LED light sculptures that Grimanesa Amoros made.` }, { id: `D`, text: `In <em>Uros House</em> the LED domes are smooth, while in <em>The Mirror Connection</em> the LED tubes are all tangled&mdash;a sharp contrast.` }],
      answer: `C` },

    { id: `ouc-rw-m2-25`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>As a rule, an object warms up when it is twisted.</li><li>Twisting an object this way is called torsion.</li><li>In a 2019 study, Zunfeng Liu and Ray Baughman measured the torsional heating of several fibers.</li><li>Twisting a 0.2-millimeter-thick strand of three-ply spandex rubber fiber raised its average surface temperature by 14.6&deg;C.</li><li>Twisting a 0.7-millimeter-thick strand of four-ply nickel-titanium (NiTi) wire raised its average surface temperature by 30.4&deg;C.</li></ul>`,
      prompt: `The student wants to contrast the two samples. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `Twisting the fibers in the 2019 study drove up the surface temperature of each sample.` }, { id: `B`, text: `Twisting an object generally makes its temperature climb, a process called torsional heating.` }, { id: `C`, text: `In 2019, researchers looked at torsional heating in several fibers, among them a four-ply NiTi wire and a three-ply spandex rubber.` }, { id: `D`, text: `Of the two strands in the 2019 study, the four-ply NiTi wire proved the thicker, outmeasuring the three-ply spandex rubber.` }],
      answer: `D` },

    { id: `ouc-rw-m2-26`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>The actress Merle Oberon (1911&ndash;1979) was born in the Indian city of Mumbai, at that time called Bombay.</li><li>Her heritage was Indian, Maori, and Irish.</li><li>She became the first India-born actress ever nominated for an Academy Award.</li><li>In her early roles she often went uncredited, as in the film <em>Alf&rsquo;s Button</em> (1930).</li><li>Later came leading, credited parts, such as her Marjorie Ismay in the 1943 film <em>Forever and a Day</em>.</li></ul>`,
      prompt: `The student wants to emphasize the order in which the two films were released. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `<em>Alf&rsquo;s Button</em> (1930) belongs to the early part of Merle Oberon&rsquo;s career, while <em>Forever and a Day</em> (1943) would not appear until years afterward.` }, { id: `B`, text: `Early on, Merle Oberon went uncredited in some films, such as <em>Alf&rsquo;s Button</em>, in which she played a small, uncredited part.` }, { id: `C`, text: `Merle Oberon won fame for parts in films like <em>Alf&rsquo;s Button</em> and, later, <em>Forever and a Day</em>.` }, { id: `D`, text: `In <em>Alf&rsquo;s Button</em> (1930), Merle Oberon went uncredited; by the time of <em>Forever and a Day</em> in 1943, though, she had the credited role of Marjorie Ismay.` }],
      answer: `A` },

    { id: `ouc-rw-m2-27`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>The stream length of a river measures the full distance along the winding line that the river itself traces out.</li><li>The valley length of a river measures the distance along one straight line running from the river&rsquo;s start to its end.</li><li>A river&rsquo;s curviness, or its sinuosity, is a figure found by dividing its stream length by its valley length.</li><li>Rivers of low sinuosity have a stream length 1 to 1.5 times their valley length; rivers of high sinuosity, 1.5 times or more.</li><li>In the United States, the Willapa River is highly sinuous.</li><li>In Australia, the Neales River shows low sinuosity.</li></ul>`,
      prompt: `The student wants to compare the curviness of the two rivers. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `The Willapa River in the United States proves more sinuous than the Neales River in Australia, its channel straying further from a straight valley line.` }, { id: `B`, text: `For the Willapa as for the Neales, curviness is worked out by comparing stream length with valley length.` }, { id: `C`, text: `The Neales River of Australia, with its low sinuosity, is straighter than the highly sinuous Willapa River of the United States.` }, { id: `D`, text: `By setting each river&rsquo;s stream length against its valley length, one can work out the curviness, or sinuosity, of the Willapa and the Neales.` }],
      answer: `A` },
    ];

  const MATH_M1 = [
    { id: `ouc-math-m1-1`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `easy`, type: `mcq`,
      prompt: `<div>The equation d = 33w + 100 gives the total amount of money d, in dollars, that James plans to save w weeks after he starts to save. What is the total amount of money, in dollars, he plans to save in 10 weeks?</div>`,
      options: [{ id: `A`, text: `380` }, { id: `B`, text: `430` }, { id: `C`, text: `480` }, { id: `D`, text: `530` }],
      answer: `B` },

    { id: `ouc-math-m1-2`, domain: `Algebra`, skill: `Linear functions`, difficulty: `easy`, type: `mcq`,
      prompt: `<div>For the linear function f, the graph of y = f(x) in the xy-plane has a slope of −2 and passes through the point (0, −19). Which equation defines f?</div>`,
      options: [{ id: `A`, text: `f(x) = −19x` }, { id: `B`, text: `f(x) = −2x` }, { id: `C`, text: `f(x) = −2x − 19` }, { id: `D`, text: `f(x) = 2x + 19` }],
      answer: `C` },

    { id: `ouc-math-m1-3`, domain: `Advanced Math`, skill: `Equivalent expressions`, difficulty: `easy`, type: `mcq`,
      prompt: `<div>Which expression is equivalent to 63x<sup>2</sup>?</div>`,
      options: [{ id: `A`, text: `63(1 + x²)` }, { id: `B`, text: `(7x)(9x)` }, { id: `C`, text: `(7x²)(9x²)` }, { id: `D`, text: `(63x²)(x)` }],
      answer: `B` },

    { id: `ouc-math-m1-4`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `easy`, type: `grid`,
      prompt: `<div>Sophia bought confetti and balloons for $56. Each package of confetti cost $3, and each balloon cost $1. If Sophia bought 10 packages of confetti, how many balloons did she buy?</div>`,
      answer: [`26`] },

    { id: `ouc-math-m1-5`, domain: `Geometry and Trigonometry`, skill: `Lines, angles, and triangles`, difficulty: `easy`, type: `mcq`,
      prompt: `<div>In △FGH, the measures of ∠F and ∠G are each 39°. What is the measure of ∠H?</div>`,
      options: [{ id: `A`, text: `78°` }, { id: `B`, text: `102°` }, { id: `C`, text: `129°` }, { id: `D`, text: `141°` }],
      answer: `B` },

    { id: `ouc-math-m1-6`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `easy`, type: `mcq`,
      prompt: `<div>If (1/6)x + 5 = 8, what is the value of 6x?</div>`,
      options: [{ id: `A`, text: `108` }, { id: `B`, text: `258` }, { id: `C`, text: `318` }, { id: `D`, text: `468` }],
      answer: `A` },

    { id: `ouc-math-m1-7`, domain: `Algebra`, skill: `Linear equations in two variables`, difficulty: `easy`, type: `grid`,
      prompt: `<div>Line p is defined by y = 6x − 8. Line s is parallel to line p in the xy-plane. What is the slope of line s?</div>`,
      answer: [`6`] },

    { id: `ouc-math-m1-8`, domain: `Problem-Solving and Data Analysis`, skill: `Scatterplots`, difficulty: `medium`, type: `mcq`,
      prompt: `<svg viewBox="0 0 300 250" role="img" aria-label="scatterplot" style="max-width:340px;width:100%;display:block;margin:6px auto"><clipPath id="cp97625"><rect x="26.0" y="26.0" width="248.0" height="198.0"/></clipPath><line x1="26.0" y1="224.0" x2="26.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="50.8" y1="224.0" x2="50.8" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="75.6" y1="224.0" x2="75.6" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="100.4" y1="224.0" x2="100.4" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="125.2" y1="224.0" x2="125.2" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="150.0" y1="224.0" x2="150.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="174.8" y1="224.0" x2="174.8" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="199.6" y1="224.0" x2="199.6" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="224.4" y1="224.0" x2="224.4" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="249.2" y1="224.0" x2="249.2" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="274.0" y1="224.0" x2="274.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="224.0" x2="274.0" y2="224.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="204.2" x2="274.0" y2="204.2" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="184.4" x2="274.0" y2="184.4" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="164.6" x2="274.0" y2="164.6" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="144.8" x2="274.0" y2="144.8" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="125.0" x2="274.0" y2="125.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="105.2" x2="274.0" y2="105.2" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="85.4" x2="274.0" y2="85.4" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="65.6" x2="274.0" y2="65.6" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="45.8" x2="274.0" y2="45.8" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="26.0" x2="274.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="224.0" x2="274.0" y2="224.0" stroke="currentColor" stroke-width="1.4"/><line x1="26.0" y1="224.0" x2="26.0" y2="26.0" stroke="currentColor" stroke-width="1.4"/><text x="26.0" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">0</text><text x="75.6" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">2</text><text x="125.2" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">4</text><text x="174.8" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">6</text><text x="224.4" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">8</text><text x="274.0" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">10</text><text x="22.0" y="187.4" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">2</text><text x="22.0" y="147.8" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">4</text><text x="22.0" y="108.2" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">6</text><text x="22.0" y="68.6" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">8</text><text x="22.0" y="29.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">10</text><g clip-path="url(#cp97625)"><line x1="26.0" y1="75.5" x2="274.0" y2="204.2" stroke="currentColor" stroke-width="1.8"/><circle cx="50.8" cy="105.2" r="3.1" fill="currentColor"/><circle cx="50.8" cy="65.6" r="3.1" fill="currentColor"/><circle cx="75.6" cy="85.4" r="3.1" fill="currentColor"/><circle cx="100.4" cy="125.0" r="3.1" fill="currentColor"/><circle cx="125.2" cy="144.8" r="3.1" fill="currentColor"/><circle cx="150.0" cy="144.8" r="3.1" fill="currentColor"/><circle cx="150.0" cy="164.6" r="3.1" fill="currentColor"/><circle cx="199.6" cy="184.4" r="3.1" fill="currentColor"/><circle cx="224.4" cy="204.2" r="3.1" fill="currentColor"/><circle cx="249.2" cy="204.2" r="3.1" fill="currentColor"/></g><text x="26.0" y="14" font-size="11" font-style="italic" fill="currentColor" text-anchor="middle">y</text><text x="282.0" y="242" font-size="11" font-style="italic" fill="currentColor">x</text></svg><div>In the given scatterplot, a line of best fit for the data is shown. Which of the following is closest to the slope of this line of best fit?</div>`,
      options: [{ id: `A`, text: `−7` }, { id: `B`, text: `−0.7` }, { id: `C`, text: `0.7` }, { id: `D`, text: `7` }],
      answer: `B` },

    { id: `ouc-math-m1-9`, domain: `Problem-Solving and Data Analysis`, skill: `Distributions and measures of center and spread`, difficulty: `medium`, type: `mcq`,
      prompt: `<table style="border-collapse:collapse;margin:6px auto"><tr><th style="border:1px solid var(--border);padding:3px 12px">Height</th><th style="border:1px solid var(--border);padding:3px 12px">Frequency</th></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">0 to 100</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">8</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">101 to 200</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">6</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">201 to 300</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">5</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">301 to 400</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">4</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">401 to 500</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">2</td></tr></table><div>The table shows the distribution of height, in centimeters, of 25 objects. Which of the following could be the median height of these objects?</div>`,
      options: [{ id: `A`, text: `355` }, { id: `B`, text: `255` }, { id: `C`, text: `155` }, { id: `D`, text: `55` }],
      answer: `C` },

    { id: `ouc-math-m1-10`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `grid`,
      prompt: `<div style='text-align:center;margin-bottom:6px'>f(x) = −16x<sup>2</sup> + 99</div><div>The function f gives the estimated height, in feet, of an acorn x seconds after the acorn fell from a tree. Based on the function, what is the estimated height, in feet, of the acorn before it fell from the tree?</div>`,
      answer: [`99`] },

    { id: `ouc-math-m1-11`, domain: `Algebra`, skill: `Linear equations in two variables`, difficulty: `medium`, type: `grid`,
      prompt: `<div>The y-intercept of the graph of 5x + 2y = −18 in the xy-plane is (0, y). What is the value of y?</div>`,
      answer: [`-9`] },

    { id: `ouc-math-m1-12`, domain: `Geometry and Trigonometry`, skill: `Area and volume`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>The length of one side of square M is 9 times the length of one side of square N. The area of square N is 25 square centimeters. What is the area, in square centimeters, of square M?</div>`,
      options: [{ id: `A`, text: `2,025` }, { id: `B`, text: `810` }, { id: `C`, text: `405` }, { id: `D`, text: `225` }],
      answer: `A` },

    { id: `ouc-math-m1-13`, domain: `Advanced Math`, skill: `Nonlinear equations in one variable`, difficulty: `medium`, type: `grid`,
      prompt: `<div style='text-align:center;margin-bottom:6px'>x(x − 15) = 34</div><div>What is the positive solution to the given equation?</div>`,
      answer: [`17`] },

    { id: `ouc-math-m1-14`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>If j/k = 62 and 96j / (12xk) = 62, what is the value of x?</div>`,
      options: [{ id: `A`, text: `1/8` }, { id: `B`, text: `6/31` }, { id: `C`, text: `8` }, { id: `D`, text: `96` }],
      answer: `C` },

    { id: `ouc-math-m1-15`, domain: `Problem-Solving and Data Analysis`, skill: `Inference from sample statistics and margin of error`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>A researcher is designing a study to investigate the average number of hours students at a high school spend reading per day. The researcher will report an estimated average number of hours students at the high school spend reading per day with an associated margin of error. The researcher is considering using a random sample of either 105 or 210 students from the high school. Which of the following would be the most likely effect of using the larger random sample compared to the smaller random sample?</div>`,
      options: [{ id: `A`, text: `The reported margin of error would be lower.` }, { id: `B`, text: `The reported margin of error would be higher.` }, { id: `C`, text: `The reported average number of hours would be lower.` }, { id: `D`, text: `The reported average number of hours would be higher.` }],
      answer: `A` },

    { id: `ouc-math-m1-16`, domain: `Advanced Math`, skill: `Equivalent expressions`, difficulty: `medium`, type: `mcq`,
      prompt: `<div style='text-align:center;margin-bottom:6px'>g(x) = (2/7)x + 8/5<br>h(x) = 5x − 7</div><div>The functions g and h are defined by the equations shown. Which expression is equivalent to g(x) · h(x)?</div>`,
      options: [{ id: `A`, text: `10x²/7 − 56/5` }, { id: `B`, text: `10x²/7 + 13x/6 − 56/5` }, { id: `C`, text: `10x²/7 − 6x − 56/5` }, { id: `D`, text: `10x²/7 + 6x − 56/5` }],
      answer: `D` },

    { id: `ouc-math-m1-17`, domain: `Geometry and Trigonometry`, skill: `Area and volume`, difficulty: `hard`, type: `mcq`,
      prompt: `<div>The height of a right circular cylinder is 6 inches longer than its radius, and the surface area of the cylinder is 1,080π square inches. What is the cylinder's radius, in inches?</div>`,
      options: [{ id: `A`, text: `15` }, { id: `B`, text: `18` }, { id: `C`, text: `21` }, { id: `D`, text: `24` }],
      answer: `A` },

    { id: `ouc-math-m1-18`, domain: `Geometry and Trigonometry`, skill: `Right triangles and trigonometry`, difficulty: `hard`, type: `grid`,
      prompt: `<div>In triangle JKL, cos(K) = 36/60 and angle J is a right angle. What is the value of cos(L)?</div>`,
      answer: [`4/5`, `0.8`, `.8`] },

    { id: `ouc-math-m1-19`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `hard`, type: `mcq`,
      prompt: `<svg viewBox="0 0 300 250" role="img" aria-label="exponential graph" style="max-width:340px;width:100%;display:block;margin:6px auto"><clipPath id="cp94318"><rect x="26.0" y="26.0" width="248.0" height="198.0"/></clipPath><line x1="26.0" y1="224.0" x2="26.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="50.8" y1="224.0" x2="50.8" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="75.6" y1="224.0" x2="75.6" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="100.4" y1="224.0" x2="100.4" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="125.2" y1="224.0" x2="125.2" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="150.0" y1="224.0" x2="150.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="174.8" y1="224.0" x2="174.8" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="199.6" y1="224.0" x2="199.6" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="224.4" y1="224.0" x2="224.4" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="249.2" y1="224.0" x2="249.2" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="274.0" y1="224.0" x2="274.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="224.0" x2="274.0" y2="224.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="195.7" x2="274.0" y2="195.7" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="167.4" x2="274.0" y2="167.4" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="139.1" x2="274.0" y2="139.1" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="110.9" x2="274.0" y2="110.9" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="82.6" x2="274.0" y2="82.6" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="54.3" x2="274.0" y2="54.3" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="26.0" x2="274.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="82.6" x2="274.0" y2="82.6" stroke="currentColor" stroke-width="1.4"/><line x1="150.0" y1="224.0" x2="150.0" y2="26.0" stroke="currentColor" stroke-width="1.4"/><text x="26.0" y="93.6" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">-10</text><text x="88.0" y="93.6" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">-5</text><text x="150.0" y="93.6" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">0</text><text x="212.0" y="93.6" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">5</text><text x="274.0" y="93.6" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">10</text><text x="146.0" y="227.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">-10</text><text x="146.0" y="191.6" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">-7.5</text><text x="146.0" y="156.3" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">-5</text><text x="146.0" y="120.9" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">-2.5</text><text x="146.0" y="50.2" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">2.5</text><g clip-path="url(#cp94318)"><line x1="26.0" y1="96.7" x2="274.0" y2="96.7" stroke="currentColor" stroke-width="0.8" stroke-dasharray="4 3" opacity="0.45"/><polyline points="26.0,96.7 27.9,96.7 29.7,96.7 31.6,96.7 33.4,96.7 35.3,96.7 37.2,96.7 39.0,96.7 40.9,96.7 42.7,96.7 44.6,96.7 46.5,96.7 48.3,96.7 50.2,96.7 52.0,96.7 53.9,96.7 55.8,96.7 57.6,96.7 59.5,96.7 61.3,96.7 63.2,96.7 65.1,96.7 66.9,96.7 68.8,96.7 70.6,96.7 72.5,96.7 74.4,96.7 76.2,96.7 78.1,96.7 79.9,96.7 81.8,96.7 83.7,96.7 85.5,96.7 87.4,96.8 89.2,96.8 91.1,96.8 93.0,96.8 94.8,96.8 96.7,96.8 98.5,96.8 100.4,96.9 102.3,96.9 104.1,97.0 106.0,97.0 107.8,97.1 109.7,97.2 111.6,97.3 113.4,97.4 115.3,97.6 117.1,97.8 119.0,98.0 120.9,98.3 122.7,98.7 124.6,99.2 126.4,99.8 128.3,100.5 130.2,101.3 132.0,102.4 133.9,103.7 135.7,105.3 137.6,107.3 139.5,109.8 141.3,112.8 143.2,116.5 145.0,121.1 146.9,126.7 148.8,133.7 150.6,142.2 152.5,152.7 154.3,165.6 156.2,181.6 158.1,201.2 159.9,225.3" fill="none" stroke="currentColor" stroke-width="2"/></g></svg><div>The graph of y = f(x) is shown, where f(x) = ab<sup>x</sup> + c, and a, b, and c are constants. For how many values of x does f(x) = 0?</div>`,
      options: [{ id: `A`, text: `Three` }, { id: `B`, text: `Two` }, { id: `C`, text: `One` }, { id: `D`, text: `Zero` }],
      answer: `D` },

    { id: `ouc-math-m1-20`, domain: `Advanced Math`, skill: `Exponential functions`, difficulty: `hard`, type: `mcq`,
      prompt: `<div>In a certain state, the population of pheasants, a type of bird, is estimated each year by counting the number of pheasants observed along certain roads in the state. On average, each year from 2005 to 2015 the number of pheasants counted per mile of road decreased by 3.5% of the number of pheasants per mile of road the previous year. Based on this average, if there were 6.32 pheasants per mile of road in this state in 2005, which of the following best approximates the number of pheasants per mile of road in 2015?</div>`,
      options: [{ id: `A`, text: `0.965(6.32)<sup>10</sup>` }, { id: `B`, text: `1.035(6.32)<sup>10</sup>` }, { id: `C`, text: `6.32(0.035)<sup>10</sup>` }, { id: `D`, text: `6.32(0.965)<sup>10</sup>` }],
      answer: `D` },

    { id: `ouc-math-m1-21`, domain: `Advanced Math`, skill: `Exponential functions`, difficulty: `hard`, type: `mcq`,
      prompt: `<svg viewBox="0 0 300 250" role="img" aria-label="exponential graph" style="max-width:340px;width:100%;display:block;margin:6px auto"><clipPath id="cp28967"><rect x="26.0" y="26.0" width="248.0" height="198.0"/></clipPath><line x1="26.0" y1="224.0" x2="26.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="50.8" y1="224.0" x2="50.8" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="75.6" y1="224.0" x2="75.6" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="100.4" y1="224.0" x2="100.4" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="125.2" y1="224.0" x2="125.2" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="150.0" y1="224.0" x2="150.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="174.8" y1="224.0" x2="174.8" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="199.6" y1="224.0" x2="199.6" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="224.4" y1="224.0" x2="224.4" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="249.2" y1="224.0" x2="249.2" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="274.0" y1="224.0" x2="274.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="224.0" x2="274.0" y2="224.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="204.2" x2="274.0" y2="204.2" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="184.4" x2="274.0" y2="184.4" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="164.6" x2="274.0" y2="164.6" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="144.8" x2="274.0" y2="144.8" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="125.0" x2="274.0" y2="125.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="105.2" x2="274.0" y2="105.2" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="85.4" x2="274.0" y2="85.4" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="65.6" x2="274.0" y2="65.6" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="45.8" x2="274.0" y2="45.8" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="26.0" x2="274.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="125.0" x2="274.0" y2="125.0" stroke="currentColor" stroke-width="1.4"/><line x1="150.0" y1="224.0" x2="150.0" y2="26.0" stroke="currentColor" stroke-width="1.4"/><text x="26.0" y="136.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">-10</text><text x="88.0" y="136.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">-5</text><text x="150.0" y="136.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">0</text><text x="212.0" y="136.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">5</text><text x="274.0" y="136.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">10</text><text x="146.0" y="227.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">-10</text><text x="146.0" y="177.5" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">-5</text><text x="146.0" y="78.5" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">5</text><text x="146.0" y="29.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">10</text><g clip-path="url(#cp28967)"><line x1="26.0" y1="204.2" x2="274.0" y2="204.2" stroke="currentColor" stroke-width="0.8" stroke-dasharray="4 3" opacity="0.45"/><polyline points="26.0,204.2 27.9,204.2 29.7,204.2 31.6,204.2 33.4,204.2 35.3,204.2 37.2,204.2 39.0,204.2 40.9,204.2 42.7,204.2 44.6,204.2 46.5,204.2 48.3,204.2 50.2,204.2 52.0,204.2 53.9,204.2 55.8,204.2 57.6,204.2 59.5,204.2 61.3,204.2 63.2,204.2 65.1,204.2 66.9,204.2 68.8,204.2 70.6,204.2 72.5,204.2 74.4,204.2 76.2,204.2 78.1,204.2 79.9,204.2 81.8,204.2 83.7,204.2 85.5,204.2 87.4,204.2 89.2,204.2 91.1,204.2 93.0,204.2 94.8,204.2 96.7,204.2 98.5,204.2 100.4,204.2 102.3,204.2 104.1,204.1 106.0,204.1 107.8,204.1 109.7,204.1 111.6,204.1 113.4,204.0 115.3,204.0 117.1,203.9 119.0,203.9 120.9,203.8 122.7,203.7 124.6,203.6 126.4,203.5 128.3,203.3 130.2,203.1 132.0,202.9 133.9,202.6 135.7,202.2 137.6,201.7 139.5,201.2 141.3,200.4 143.2,199.6 145.0,198.5 146.9,197.2 148.8,195.6 150.6,193.6 152.5,191.1 154.3,188.1 156.2,184.4 158.1,179.8 159.9,174.2 161.8,167.3 163.6,158.7 165.5,148.2 167.4,135.3 169.2,119.3 171.1,99.7 172.9,75.5 174.8,45.8 176.7,16.1" fill="none" stroke="currentColor" stroke-width="2"/></g></svg><div>The graph of the equation y = 5<sup>x</sup> + k is shown, where k is a constant. What is the value of k?</div>`,
      options: [{ id: `A`, text: `−8` }, { id: `B`, text: `−7` }, { id: `C`, text: `7` }, { id: `D`, text: `8` }],
      answer: `A` },

    { id: `ouc-math-m1-22`, domain: `Algebra`, skill: `Systems of two linear equations in two variables`, difficulty: `hard`, type: `mcq`,
      prompt: `<div style='text-align:center;margin-bottom:6px'>2x = 20y − 8</div><div>One of the two equations in a system of linear equations is given. The system has no solution. Which equation could be the second equation in this system?</div>`,
      options: [{ id: `A`, text: `x = 5y` }, { id: `B`, text: `(1/2)x = 5y` }, { id: `C`, text: `x = 10y − 4` }, { id: `D`, text: `(1/2)x = 10y − 4` }],
      answer: `B` },
  ];

  const MATH_M2 = [
    { id: `ouc-math-m2-1`, domain: `Geometry and Trigonometry`, skill: `Right triangles and trigonometry`, difficulty: `easy`, type: `mcq`,
      prompt: `<svg viewBox="0 0 300 220" role="img" aria-label="right triangle" style="max-width:300px;width:100%;display:block;margin:6px auto"><polygon points="46,32 46,182 250,182" fill="none" stroke="currentColor" stroke-width="1.7"/><polyline points="46,169 59,169 59,182" fill="none" stroke="currentColor" stroke-width="1.1"/><text x="32" y="26" font-size="14" font-style="italic" fill="currentColor">A</text><text x="32" y="198" font-size="14" font-style="italic" fill="currentColor">C</text><text x="258" y="198" font-size="14" font-style="italic" fill="currentColor">B</text><text x="31" y="105" font-size="13" fill="currentColor" text-anchor="middle">37</text><text x="157" y="199" font-size="13" fill="currentColor" text-anchor="middle">37</text><text x="161" y="102" font-size="13" fill="currentColor" text-anchor="middle">x</text></svg><div class="tiny faint" style="text-align:center;margin:2px 0 8px">Figure not drawn to scale.</div><div>In the right triangle shown, what is the value of x?</div>`,
      options: [{ id: `A`, text: `√2` }, { id: `B`, text: `√37` }, { id: `C`, text: `√74` }, { id: `D`, text: `37√2` }],
      answer: `D` },

    { id: `ouc-math-m2-2`, domain: `Advanced Math`, skill: `Nonlinear equations in one variable`, difficulty: `easy`, type: `mcq`,
      prompt: `<div style='text-align:center;margin-bottom:6px'>x<sup>2</sup> − 100 = 0</div><div>How many distinct real solutions does the given equation have?</div>`,
      options: [{ id: `A`, text: `Zero` }, { id: `B`, text: `Exactly one` }, { id: `C`, text: `Exactly two` }, { id: `D`, text: `Infinitely many` }],
      answer: `C` },

    { id: `ouc-math-m2-3`, domain: `Algebra`, skill: `Linear inequalities in one or two variables`, difficulty: `easy`, type: `mcq`,
      prompt: `<div>A plant nursery classifies a perennial flower species as tall if its typical height when fully grown is more than 100 centimeters. Each of the following inequalities represents the possible heights h, in centimeters, for a specific perennial flower species when fully grown. Which inequality represents the possible heights h, in centimeters, for a tall perennial flower species?</div>`,
      options: [{ id: `A`, text: `107 < h < 158` }, { id: `B`, text: `76 < h < 100` }, { id: `C`, text: `41 < h < 95` }, { id: `D`, text: `16 < h < 91` }],
      answer: `A` },

    { id: `ouc-math-m2-4`, domain: `Algebra`, skill: `Systems of two linear equations in two variables`, difficulty: `easy`, type: `mcq`,
      prompt: `<div style='text-align:center;margin-bottom:6px'>3y = 8x + 18<br>−3y = 7x − 26</div><div>The solution to the given system of equations is (x, y). What is the value of 30x?</div>`,
      options: [{ id: `A`, text: `−16` }, { id: `B`, text: `−8` }, { id: `C`, text: `8` }, { id: `D`, text: `16` }],
      answer: `D` },

    { id: `ouc-math-m2-5`, domain: `Advanced Math`, skill: `Nonlinear equations in one variable`, difficulty: `medium`, type: `mcq`,
      prompt: `<div style='text-align:center;margin-bottom:6px'>x / [(x − 1)(x + 1)] = 81 / (56x)</div><div>Which value is a solution to the given equation?</div>`,
      options: [{ id: `A`, text: `1/5` }, { id: `B`, text: `9/25` }, { id: `C`, text: `1` }, { id: `D`, text: `9/5` }],
      answer: `D` },

    { id: `ouc-math-m2-6`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<div style='text-align:center;margin-bottom:6px'>f(x) = 18x<sup>2</sup> − 45x + 13</div><div>The given equation defines the function f. For what value of x does f(x) reach its minimum?</div>`,
      options: [{ id: `A`, text: `1.25` }, { id: `B`, text: `2.25` }, { id: `C`, text: `13` }, { id: `D`, text: `45` }],
      answer: `A` },

    { id: `ouc-math-m2-7`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>Which of the following equations has exactly one solution?</div>`,
      options: [{ id: `A`, text: `1/44 + x = x` }, { id: `B`, text: `1/44 + x = −x − 1/44` }, { id: `C`, text: `1/44 − x = 1/44 − x` }, { id: `D`, text: `1/44 − x = −x` }],
      answer: `B` },

    { id: `ouc-math-m2-8`, domain: `Algebra`, skill: `Systems of two linear equations in two variables`, difficulty: `medium`, type: `grid`,
      prompt: `<div style='text-align:center;margin-bottom:6px'>0.10x + 0.20y = 0.19(x + y)</div><div>The equation gives a volume x, in gallons, of a 10% saltwater solution that could be mixed with a volume y, in gallons, of a 20% saltwater solution to produce a 19% saltwater solution. According to this equation, what volume, in gallons, of the 10% saltwater solution could be mixed with 50.0 gallons of the 20% saltwater solution to produce a 19% saltwater solution?</div>`,
      answer: [`5.56`, `5.555`, `5.5556`, `50/9`] },

    { id: `ouc-math-m2-9`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `grid`,
      prompt: `<div style='text-align:center;margin-bottom:6px'>f(x) = −(x − 6)<sup>2</sup> + 4</div><div>The function f is defined by the given equation. For what value of x does f(x) reach its maximum?</div>`,
      answer: [`6`] },

    { id: `ouc-math-m2-10`, domain: `Algebra`, skill: `Linear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<svg viewBox="0 0 300 250" role="img" aria-label="line graph" style="max-width:340px;width:100%;display:block;margin:6px auto"><clipPath id="cp47644"><rect x="26.0" y="26.0" width="248.0" height="198.0"/></clipPath><line x1="26.0" y1="224.0" x2="26.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="57.0" y1="224.0" x2="57.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="88.0" y1="224.0" x2="88.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="119.0" y1="224.0" x2="119.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="150.0" y1="224.0" x2="150.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="181.0" y1="224.0" x2="181.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="212.0" y1="224.0" x2="212.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="243.0" y1="224.0" x2="243.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="274.0" y1="224.0" x2="274.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="224.0" x2="274.0" y2="224.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="191.0" x2="274.0" y2="191.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="158.0" x2="274.0" y2="158.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="125.0" x2="274.0" y2="125.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="92.0" x2="274.0" y2="92.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="59.0" x2="274.0" y2="59.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="26.0" x2="274.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="125.0" x2="274.0" y2="125.0" stroke="currentColor" stroke-width="1.4"/><line x1="150.0" y1="224.0" x2="150.0" y2="26.0" stroke="currentColor" stroke-width="1.4"/><text x="57.0" y="136.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">-3</text><text x="88.0" y="136.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">-2</text><text x="119.0" y="136.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">-1</text><text x="181.0" y="136.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">1</text><text x="212.0" y="136.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">2</text><text x="243.0" y="136.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">3</text><text x="146.0" y="227.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">-6</text><text x="146.0" y="194.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">-4</text><text x="146.0" y="161.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">-2</text><text x="146.0" y="95.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">2</text><text x="146.0" y="62.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">4</text><text x="146.0" y="29.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">6</text><g clip-path="url(#cp47644)"><line x1="26.0" y1="-106.0" x2="274.0" y2="422.0" stroke="currentColor" stroke-width="1.9"/><circle cx="119.0" cy="92.0" r="2.6" fill="currentColor"/><circle cx="150.0" cy="158.0" r="2.6" fill="currentColor"/></g></svg><div>The graph of y = f(x) − 11 is shown. Which equation defines the linear function f?</div>`,
      options: [{ id: `A`, text: `f(x) = −15x − 11` }, { id: `B`, text: `f(x) = −4x + 9` }, { id: `C`, text: `f(x) = −15x + 9` }, { id: `D`, text: `f(x) = −4x − 11` }],
      answer: `B` },

    { id: `ouc-math-m2-11`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>The variables x and y have a quadratic relationship. When x = 0, y = 45. When x = 6, y = 81. When x = 15, y = 0. Which equation represents this relationship?</div>`,
      options: [{ id: `A`, text: `y = x² − 18x + 45` }, { id: `B`, text: `y = −x² + 12x + 45` }, { id: `C`, text: `y = x² + 45` }, { id: `D`, text: `y = −3x² + 48x − 45` }],
      answer: `B` },

    { id: `ouc-math-m2-12`, domain: `Problem-Solving and Data Analysis`, skill: `Ratios, rates, proportional relationships, and units`, difficulty: `medium`, type: `grid`,
      prompt: `<div>To study fluctuations in leaf water potential, samples of wood were taken from 26 trees and cut in the shape of a cube. The length of the edge of one of these cubes is 2.00 centimeters. If this cube has a mass of 5.12 grams, what is the density of this cube, in grams per cubic centimeter?</div>`,
      answer: [`0.64`, `.64`] },

    { id: `ouc-math-m2-13`, domain: `Problem-Solving and Data Analysis`, skill: `Distributions and measures of center and spread`, difficulty: `hard`, type: `mcq`,
      prompt: `<table style="border-collapse:collapse;margin:6px auto"><tr><th style="border:1px solid var(--border);padding:3px 12px">Weight (pounds)</th><th style="border:1px solid var(--border);padding:3px 12px">Frequency</th></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">13</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">12</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">14</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">10</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">15</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">3</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">16</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">5</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">17</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">7</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">18</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">12</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">19</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">13</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">20</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">9</td></tr></table><div>The frequency table summarizes a data set of the weights, rounded to the nearest pound, of 71 Ardeotis kori birds. A weight of 32 pounds is added to the original data set, creating a new data set of the weights, rounded to the nearest pound, of 72 Ardeotis kori birds. Which statement best compares the mean and median of the new data set to the mean and median of the original data set?</div>`,
      options: [{ id: `A`, text: `The mean of the new data set is greater than the mean of the original data set, and the median of the new data set is greater than the median of the original data set.` }, { id: `B`, text: `The mean of the new data set is greater than the mean of the original data set, and the medians of the two data sets are equal.` }, { id: `C`, text: `The mean of the new data set is less than the mean of the original data set, and the median of the new data set is less than the median of the original data set.` }, { id: `D`, text: `The means of the two data sets are equal, and the medians of the two data sets are equal.` }],
      answer: `B` },

    { id: `ouc-math-m2-14`, domain: `Advanced Math`, skill: `Nonlinear equations in one variable`, difficulty: `hard`, type: `grid`,
      prompt: `<div style='text-align:center;margin-bottom:6px'>x(9x − 2a) + b(9x − 2a) − (x + b) = 0</div><div>In the given equation, a and b are positive constants. A solution to the equation is x = 42. What is the value of a?</div>`,
      answer: [`377/2`, `188.5`] },

    { id: `ouc-math-m2-15`, domain: `Algebra`, skill: `Linear inequalities in one or two variables`, difficulty: `hard`, type: `mcq`,
      prompt: `<svg viewBox="0 0 300 250" role="img" aria-label="line graph" style="max-width:340px;width:100%;display:block;margin:6px auto"><clipPath id="cp53820"><rect x="26.0" y="26.0" width="248.0" height="198.0"/></clipPath><line x1="26.0" y1="224.0" x2="26.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="67.3" y1="224.0" x2="67.3" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="108.7" y1="224.0" x2="108.7" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="150.0" y1="224.0" x2="150.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="191.3" y1="224.0" x2="191.3" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="232.7" y1="224.0" x2="232.7" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="274.0" y1="224.0" x2="274.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="224.0" x2="274.0" y2="224.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="199.2" x2="274.0" y2="199.2" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="174.5" x2="274.0" y2="174.5" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="149.8" x2="274.0" y2="149.8" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="125.0" x2="274.0" y2="125.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="100.2" x2="274.0" y2="100.2" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="75.5" x2="274.0" y2="75.5" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="50.8" x2="274.0" y2="50.8" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="26.0" x2="274.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="50.8" x2="274.0" y2="50.8" stroke="currentColor" stroke-width="1.4"/><line x1="232.7" y1="224.0" x2="232.7" y2="26.0" stroke="currentColor" stroke-width="1.4"/><text x="26.0" y="61.8" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">-10</text><text x="67.3" y="61.8" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">-8</text><text x="108.7" y="61.8" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">-6</text><text x="150.0" y="61.8" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">-4</text><text x="191.3" y="61.8" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">-2</text><text x="228.7" y="227.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">-14</text><text x="228.7" y="202.2" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">-12</text><text x="228.7" y="177.5" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">-10</text><text x="228.7" y="152.8" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">-8</text><text x="228.7" y="128.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">-6</text><text x="228.7" y="103.2" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">-4</text><text x="228.7" y="78.5" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">-2</text><g clip-path="url(#cp53820)"><polygon points="26.0,169.2 274.0,190.4 274.0,26.0 26.0,26.0" fill="currentColor" opacity="0.13"/><line x1="26.0" y1="169.2" x2="274.0" y2="190.4" stroke="currentColor" stroke-width="1.9"/><circle cx="232.7" cy="186.9" r="2.6" fill="currentColor"/><circle cx="88.0" cy="174.5" r="2.6" fill="currentColor"/></g></svg><div>The shaded region shown represents the solutions to rx + ty ≥ −77, where r and t are constants. What is the value of r + t?</div>`,
      options: [{ id: `A`, text: `8` }, { id: `B`, text: `6` }, { id: `C`, text: `−6` }, { id: `D`, text: `−7` }],
      answer: `A` },

    { id: `ouc-math-m2-16`, domain: `Advanced Math`, skill: `Nonlinear equations in one variable`, difficulty: `hard`, type: `grid`,
      prompt: `<div style='text-align:center;margin-bottom:6px'>3w<sup>2</sup> + 11w − c = 0</div><div>In the given equation, c is a constant. A solution to the equation is (−11 + √433)/6. What is the value of c?</div>`,
      answer: [`26`] },

    { id: `ouc-math-m2-17`, domain: `Problem-Solving and Data Analysis`, skill: `Percentages`, difficulty: `hard`, type: `grid`,
      prompt: `<div>The composition of an animal is defined as the muscles, bones, and fat of the animal. A scientist studied the composition of one young swamp buffalo and determined the buffalo had 139.2 kilograms of muscle, which made up approximately 67.7% of its composition. Of the remaining composition of this buffalo, approximately 51.4% was bone, and the remainder was fat. Based on these approximations, to the nearest tenth, how many kilograms of this buffalo's composition was bone?</div>`,
      answer: [`34.1`] },

    { id: `ouc-math-m2-18`, domain: `Geometry and Trigonometry`, skill: `Lines, angles, and triangles`, difficulty: `hard`, type: `grid`,
      prompt: `<div>A line intersects two parallel lines, forming four acute angles and four obtuse angles. The measure of one of the acute angles is (7x − 610)°. The sum of the measures of one of the acute angles and three of the obtuse angles is (−14x + w)°. What is the value of w?</div>`,
      answer: [`1760`] },

    { id: `ouc-math-m2-19`, domain: `Advanced Math`, skill: `Equivalent expressions`, difficulty: `hard`, type: `mcq`,
      prompt: `<div style='text-align:center;margin-bottom:6px'>49/p = 49/q − 49/r − 49/s</div><div>The given equation relates the positive variables p, q, r, and s. Which of the following is equivalent to q?</div>`,
      options: [{ id: `A`, text: `p + r + s` }, { id: `B`, text: `49(p + r + s)` }, { id: `C`, text: `prs / (pr + ps + rs)` }, { id: `D`, text: `prs / (49p + 49r + 49s)` }],
      answer: `C` },

    { id: `ouc-math-m2-20`, domain: `Geometry and Trigonometry`, skill: `Right triangles and trigonometry`, difficulty: `hard`, type: `mcq`,
      prompt: `<div>The perimeter of an isosceles right triangle is 52 + 52√2 inches. What is the length, in inches, of the hypotenuse of this triangle?</div>`,
      options: [{ id: `A`, text: `26` }, { id: `B`, text: `26√2` }, { id: `C`, text: `52` }, { id: `D`, text: `52√2` }],
      answer: `C` },

    { id: `ouc-math-m2-21`, domain: `Algebra`, skill: `Linear functions`, difficulty: `hard`, type: `mcq`,
      prompt: `<div>For groups of 25 or more people, a museum charges $22 per person for the first 25 people and $14 for each additional person. Which function f gives the total charge, in dollars, for a tour group with n people, where n ≥ 25?</div>`,
      options: [{ id: `A`, text: `f(n) = 14n + 200` }, { id: `B`, text: `f(n) = 14n + 22` }, { id: `C`, text: `f(n) = 14n + 550` }, { id: `D`, text: `f(n) = 36n − 350` }],
      answer: `A` },

    { id: `ouc-math-m2-22`, domain: `Geometry and Trigonometry`, skill: `Area and volume`, difficulty: `hard`, type: `mcq`,
      prompt: `<div>A right rectangular prism has a base area of 28p square centimeters (cm²). The length of the base of the rectangular prism is 12 cm, and the height of the rectangular prism is 4 cm. Which expression represents the surface area, in cm², of the right rectangular prism?</div>`,
      options: [{ id: `A`, text: `512p/3` }, { id: `B`, text: `224p/3 + 96` }, { id: `C`, text: `56p + 192` }, { id: `D`, text: `560p + 96` }],
      answer: `B` },
  ];

  Apex.bank.register({
    id: "dsat-2024-10-us-c",
    title: "October 2024",
    type: "digital",
    region: "US",
    version: "C",
    year: 2024,
    monthNum: 10,
    tagline: "US · Version C",
    description: "Digital SAT — October 2024 US prediction form, Version C (RW reordered into official SAT test order; math ordered easy to hard).",
    adaptive: false,
    sections: [
      { id: "rw", modules: [
        { id: "ouc-rw-m1", stage: 1, name: "Reading and Writing — Module 1", minutes: 32, questions: RW_M1 },
        { id: "ouc-rw-m2", stage: 2, variant: "hard", name: "Reading and Writing — Module 2 (Hard)", minutes: 32, questions: RW_M2 },
      ] },
      { id: "math", modules: [
        { id: "ouc-math-m1", stage: 1, name: "Math — Module 1", minutes: 35, calculator: true, questions: MATH_M1 },
        { id: "ouc-math-m2", stage: 2, variant: "hard", name: "Math — Module 2 (Hard)", minutes: 35, calculator: true, questions: MATH_M2 },
      ] },
    ],
  });
})();
