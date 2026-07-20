/* ==========================================================================
   Digital SAT — October 2024 (US), Version B.
   Rebuilt in EliteXSAT's native UI from teacher-authored SAT-style prediction
   forms (2027 Prediction October USA). RW sorted into canonical Digital SAT
   domain order; Math ordered easy -> hard. Answers verified independently and
   against the pasted answer key; cross-filled / conflicted items are noted in
   the build log (not shown to students). No explanations. COMPLETE. */
(function () {
  const RW_M1 = [
    { id: `oub-rw-m1-1`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `easy`, type: `mcq`,
      passage: `<p>The following text is adapted from John Matheus's 1925 short story “Fog.” A train has stopped at a station, where heavy fog has set in.</p><p>The little conductor stood on tiptoe in an effort to keep one hand on the signal rope, craning his neck in a vain and dissatisfied endeavor to pierce the miasma of the fog. The motorman chafed in his box, thinking of the drudging lot of the laboring man. He <u>registered</u> discontent.</p>`,
      prompt: `<div>As used in the text, what does the word “registered” most nearly mean?</div>`,
      options: [{ id: `A`, text: `Bypassed` }, { id: `B`, text: `Enrolled` }, { id: `C`, text: `Valued` }, { id: `D`, text: `Displayed` }],
      answer: `D` },

    { id: `oub-rw-m1-2`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `easy`, type: `mcq`,
      passage: `<p>By belonging to the collective Diverse Lenses, the photographer Aroha Ngata (Maori) can ______ her images to a far wider audience than she could reach on her own. Picture editors anywhere can browse the group&rsquo;s roster of Indigenous members online to find photographs that record and honor the lives of Indigenous communities.</p>`,
      prompt: `<div>Which choice completes the text with the most logical and precise word or phrase?</div>`,
      options: [{ id: `A`, text: `empty` }, { id: `B`, text: `promote` }, { id: `C`, text: `alter` }, { id: `D`, text: `discover` }],
      answer: `B` },

    { id: `oub-rw-m1-3`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Growing out of the storytelling traditions of the Maori people of Aotearoa New Zealand, Maori literature has a deep and enduring history that authors like Witi Ihimaera carried to worldwide notice and acclaim. Now, by publishing a string of celebrated works, the writer Hana Rewiri has ______ her own place in that literary tradition.</p>`,
      prompt: `<div>Which choice completes the text with the most logical and precise word or phrase?</div>`,
      options: [{ id: `A`, text: `contemplated` }, { id: `B`, text: `subverted` }, { id: `C`, text: `solidified` }, { id: `D`, text: `extricated` }],
      answer: `C` },

    { id: `oub-rw-m1-4`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>In a 2020 feature on films chronicling immigrant life in America, reviewers writing for the <em>Los Angeles Times</em> hailed Lucia Moreno&rsquo;s 1979 drama <em>Crossing Over</em> as &ldquo;luminous&rdquo; and Devon Park&rsquo;s 1993 comedy <em>Corner Store</em> as &ldquo;irresistible.&rdquo; Admirers of both of these films hope that such ______ will help draw fresh new audiences to these works.</p>`,
      prompt: `<div>Which choice completes the text with the most logical and precise word or phrase?</div>`,
      options: [{ id: `A`, text: `impartiality` }, { id: `B`, text: `ambivalence` }, { id: `C`, text: `foresight` }, { id: `D`, text: `acclaim` }],
      answer: `D` },

    { id: `oub-rw-m1-5`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Researchers Priya Menon, Tomas Halvorsen, and Wei Lu built a computer model to forecast the blend of shops and points of interest likely to appear in any given city block. Drawing on listings from a popular mapping service, the team pinpointed cafes, barbershops, and other businesses and charted where they sit. The approach has drawbacks&mdash;<u>listings from the service tend to cover only businesses that serve walk-in customers</u>&mdash;but the data set still offers a highly dependable basis for studying how neighborhood amenities cluster together.</p>`,
      prompt: `<div>Which choice best describes the function of the underlined portion in the text as a whole?</div>`,
      options: [{ id: `A`, text: `It points to how vague and subjective the edges of a neighborhood can be.` }, { id: `B`, text: `It introduces the model a research team built to gauge the mix of amenities in city neighborhoods.` }, { id: `C`, text: `It stresses how useful the team&rsquo;s model could turn out to be.` }, { id: `D`, text: `It names a particular shortcoming of the data set used to study city amenities.` }],
      answer: `D` },

    { id: `oub-rw-m1-6`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Known for albums such as <em>Ellington at Newport</em> and <em>Blues in Orbit</em>, the bandleader Duke Ellington teamed up with the composer Billy Strayhorn more than once. Their 1960 reworking of Tchaikovsky&rsquo;s ballet <em>The Nutcracker</em> bears little resemblance to the 1892 original. Ellington and Strayhorn felt no need to please listeners expecting a note-for-note copy of the ballet. <u>They cut whole sections, such as the &ldquo;Waltz of the Flowers,&rdquo; and at times only gestured toward Tchaikovsky&rsquo;s themes.</u> Yet their willingness to recast the ballet produced one of the most beloved records in Ellington&rsquo;s catalog.</p>`,
      prompt: `<div>Which choice best describes the function of the underlined sentence in the text as a whole?</div>`,
      options: [{ id: `A`, text: `It offers examples that bear out an assertion the text made earlier.` }, { id: `B`, text: `It shows how two musicians gained by disregarding certain conventions.` }, { id: `C`, text: `It suggests a reason one artwork is generally judged more successful than another.` }, { id: `D`, text: `It works against an assertion put forward later in the text.` }],
      answer: `A` },

    { id: `oub-rw-m1-7`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Scholarly attention to literary juvenilia&mdash;writing produced in childhood or adolescence&mdash;usually centers on unpublished pieces by authors who grew famous later, such as the miniature sagas Charlotte Bront&euml; composed as a girl, since these works shed light on how their authors developed as artists. But some scholars contend that recovering juvenilia by less celebrated figures matters just as much for a full picture of literary history: the diaries Marjory Fleming kept as a child, widely read after her death, deserve the same close scrutiny.</p>`,
      prompt: `<div>Which choice best states the main purpose of the text?</div>`,
      options: [{ id: `A`, text: `To describe the trouble famous writers faced in trying to publish the work of their childhood.` }, { id: `B`, text: `To argue that Fleming&rsquo;s diaries hold more literary merit than Bront&euml;&rsquo;s juvenilia do.` }, { id: `C`, text: `To weigh the achievements of young writers against those of their grown contemporaries.` }, { id: `D`, text: `To lay out why literary scholars regard juvenilia as valuable resources.` }],
      answer: `D` },

    { id: `oub-rw-m1-8`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Superlubricity&mdash;a condition of nearly zero friction between surfaces&mdash;holds promise for many industries; it could make aircraft engines run more efficiently. To create a coating that reaches superlubricity, a team led by Ana Reis ground carbon nanotubes into flakes of graphene to coat the two surfaces that would slide past each other. Friction between graphene flakes is usually very low, and when the team added a drop of oil, that friction all but vanished. Such a coating could sharply cut the energy lost to friction.</p>`,
      prompt: `<div>According to the text, what happened when the researchers added oil to the surfaces covered in graphene fragments?</div>`,
      options: [{ id: `A`, text: `Every flake of graphene ended up on only one of the two surfaces.` }, { id: `B`, text: `The already low friction between the surfaces dropped even further.` }, { id: `C`, text: `Carbon nanotubes on the surfaces split into still smaller bits.` }, { id: `D`, text: `Friction between the surfaces showed no clear change at first.` }],
      answer: `B` },

    { id: `oub-rw-m1-9`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Bert Phillips&rsquo;s <em>Moonrise over Taos</em>, a desert scene showing a lone adobe dwelling beneath a wide, glowing sky, is characteristic of works by the Taos Society of Artists, a loose group of landscape painters most active in the early twentieth century. Notable for anticipating and heightening images of the American Southwest that later took firm hold in the public mind, the Society&rsquo;s paintings are easy to recognize by the familiar iconography&mdash;sunbaked mesas, adobe villages&mdash;that Phillips and his colleagues returned to again and again.</p>`,
      prompt: `<div>Which choice best states the main idea of the text?</div>`,
      options: [{ id: `A`, text: `Although similar in subject to many Society paintings, <em>Moonrise over Taos</em> today enjoys greater esteem than the Society&rsquo;s other works do.` }, { id: `B`, text: `Familiar images that recur across many works by Phillips and other Taos Society members came to be widely linked with the Southwest partly because of the Society&rsquo;s influence.` }, { id: `C`, text: `Although the Taos Society&rsquo;s paintings were once prized for their views of the Southwest&rsquo;s landscapes, their popularity faded after the 1920s.` }, { id: `D`, text: `The sunbaked mesas and adobe villages typical of Phillips&rsquo;s works, otherwise indistinguishable from other Society paintings, help set his paintings apart from those of his colleagues.` }],
      answer: `B` },

    { id: `oub-rw-m1-10`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `hard`, type: `mcq`,
      passage: `<p>The following text is from George Eliot's 1857 short story “The Sad Fortunes of the Rev. Amos Barton.” In the text, the narrator addresses the reader directly and alludes to a discussion among Rev. Amos Barton's neighbors.</p><p>It was happy for the Rev. Amos Barton that he did not, like us, overhear the conversation recorded in the last chapter. Indeed, what mortal is there of us, who would find his satisfaction enhanced by an opportunity of comparing the picture he presents to himself of his own doings, with the picture they make on the mental retina of his neighbours? We are poor plants buoyed up by the air-vessels of our own conceit: alas for us, if we get a few pinches that empty us of that windy self-subsistence! The very capacity for good would go out of us.</p>`,
      prompt: `<div>Which choice best states the main idea of the text?</div>`,
      options: [{ id: `A`, text: `Though people know honesty matters, they generally shy away from telling others about their faults.` }, { id: `B`, text: `Though people want to seem kind, even small rebuffs will often stop them from acting that way.` }, { id: `C`, text: `People dwell more than they ought to on whether their acquaintances hold them in high esteem.` }, { id: `D`, text: `People are better off staying unaware of the gap between how they see themselves and how others see them.` }],
      answer: `D` },

    { id: `oub-rw-m1-11`, domain: `Information and Ideas`, skill: `Command of Evidence (Quantitative)`, difficulty: `medium`, type: `mcq`,
      passage: `<div style='text-align:center;font-weight:600;font-size:12px;margin:2px 0'>Companion and Focal Plant Species by Region</div><table style='border-collapse:collapse;margin:6px auto'><tr><th style='border:1px solid var(--border);padding:3px 12px'>Companion species</th><th style='border:1px solid var(--border);padding:3px 12px'>Focal species</th><th style='border:1px solid var(--border);padding:3px 12px'>Region</th></tr><tr><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>ribbon grass</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>mountain bluebell</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>Canada</td></tr><tr><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>sweet clover</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>prairie coneflower</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>United States</td></tr><tr><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>gorse</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>sea campion</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>Ireland</td></tr></table><p>In a study of how plants interact, the researchers Sofia Marchetti and Aiko Tanaka collected data on flowering plants growing side by side in a range of regions. In each case they marked one plant as a &ldquo;focal species&rdquo; and a neighbor as a &ldquo;companion species.&rdquo; One companion species is ribbon grass, which grows beside the mountain bluebell in ______</p>`,
      prompt: `<div>Which choice most effectively uses data from the table to complete the example?</div>`,
      options: [{ id: `A`, text: `the United States.` }, { id: `B`, text: `Japan.` }, { id: `C`, text: `Ireland.` }, { id: `D`, text: `Canada.` }],
      answer: `D` },

    { id: `oub-rw-m1-12`, domain: `Information and Ideas`, skill: `Command of Evidence (Quantitative)`, difficulty: `medium`, type: `mcq`,
      passage: `<div style='text-align:center;font-weight:600;font-size:12px;margin:2px 0'>Monthly Temperature and Fruit Fly Wing Data</div><table style='border-collapse:collapse;margin:6px auto'><tr><th style='border:1px solid var(--border);padding:3px 12px'>Month</th><th style='border:1px solid var(--border);padding:3px 12px'>Average high (&deg;F)</th><th style='border:1px solid var(--border);padding:3px 12px'>Average low (&deg;F)</th><th style='border:1px solid var(--border);padding:3px 12px'>Average male wing centroid size (mm)</th><th style='border:1px solid var(--border);padding:3px 12px'>Average female wing centroid size (mm)</th></tr><tr><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>November</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>64</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>41</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>1.97</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>2.28</td></tr><tr><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>August</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>89</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>64</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>2.03</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>2.32</td></tr><tr><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>July</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>85</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>60</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>2.02</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>2.31</td></tr><tr><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>April</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>70</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>47</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>1.99</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>2.27</td></tr></table><p><em>Drosophila</em> (fruit flies) reproduce in as little as 10&ndash;12 days, so seasonal shifts in humidity and other conditions can drive seasonal changes in chromosome rearrangements in species like <em>D. persimilis</em> and <em>D. mediopunctata</em>. Because body size in <em>Drosophila</em> (with wing centroid size standing in as a proxy) tracks with life span, larger flies tend to live longer. Researchers Lucia Ferraro and Idil Demir measured wing sizes for a <em>D. melanogaster</em> population living in Ordu, Turkey, sampling monthly from April to November across three years. Their data suggest that <em>Drosophila</em> caught in the warmer months should tend to live longer, as shown by the finding that ______</p>`,
      prompt: `<div>Which choice most effectively uses data from the table to complete the assertion?</div>`,
      options: [{ id: `A`, text: `the mean monthly low temperature ran higher in August than in July.` }, { id: `B`, text: `the mean male wing-centroid measurement came out larger in August than in November.` }, { id: `C`, text: `the mean female wing-centroid measurement was 2.02 mm in August but 2.31 mm in July.` }, { id: `D`, text: `across every one of the four months listed, the mean female wing-centroid measurement topped the mean male one.` }],
      answer: `B` },

    { id: `oub-rw-m1-13`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `medium`, type: `mcq`,
      passage: `<p>A new trail was recently cut through a stretch of Oregon forest that is home to the song sparrow. Some sparrows built their nests near the open trail, others farther back among the trees. American crows, which prey on sparrow eggs, can locate nests beside the open trail far more easily than nests hidden deep in the forest. Given this, researchers in Oregon working to forecast the trail&rsquo;s effect on the sparrows have proposed that ______</p>`,
      prompt: `<div>Which choice most logically completes the text?</div>`,
      options: [{ id: `A`, text: `sparrow eggs will account for roughly the same portion of American crows&rsquo; diet as before the trail existed.` }, { id: `B`, text: `the number of sparrows nesting near the trail will slowly climb as the birds grow used to the crows.` }, { id: `C`, text: `sparrows nesting near the trail will lose eggs to crows at a higher rate than sparrows nesting far from it.` }, { id: `D`, text: `sparrows nesting far from the trail will produce fewer eggs in each nest than those nesting near it.` }],
      answer: `C` },

    { id: `oub-rw-m1-14`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Biologists Hana Suzuki and Marcus Bell carefully reviewed a body of studies of animals such as zebra finches and degus, creatures that have been observed both under laboratory conditions and out in the wild, in order to check whether the findings differed between the two settings. They found, for one example, that among degus the wild individuals were most active during the daytime hours while the captive ones were not. Suzuki and Bell therefore concluded that the laboratory environment was in all likelihood ______</p>`,
      prompt: `<div>Which choice most logically completes the text?</div>`,
      options: [{ id: `A`, text: `better than wild settings as a place to study degus&rsquo; patterns of rest and activity.` }, { id: `B`, text: `affecting the results for both degus and zebra finches.` }, { id: `C`, text: `better suited to studying zebra finches than to studying degus.` }, { id: `D`, text: `interfering with degus&rsquo; patterns of rest and activity.` }],
      answer: `D` },

    { id: `oub-rw-m1-15`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Every kind of stainless steel contains iron, carbon, and rust-resisting chromium in differing amounts. Ferritic stainless steel, a common choice for induction cookers, holds a greater share of chromium&mdash;at least 10.5 percent&mdash;than austenitic stainless steel does, and it carries more iron besides. Austenitic stainless steel, by contrast, takes a face-centered cubic crystal structure that nickel and nitrogen together keep stable. It comes in two families: a 200 series, frequently chosen for washing machines, and a 300 series, richer in nickel than the 200 and often put to use in storage containers and furnaces. It follows, then, that stainless steel used to make ______</p>`,
      prompt: `<div>Which choice most logically completes the text?</div>`,
      options: [{ id: `A`, text: `steel destined for furnaces and steel destined for washing machines will both contain less than 10.5% chromium.` }, { id: `B`, text: `steel made for washing machines will hold a greater share of nickel than steel made for furnaces will.` }, { id: `C`, text: `steel made for induction cookers takes a face-centered cubic form, whereas steel for storage containers does not.` }, { id: `D`, text: `steel made for storage containers and steel made for induction cookers will hold similar amounts of nitrogen.` }],
      answer: `A` },

    { id: `oub-rw-m1-16`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `<p>A surfactant is a kind of substance that lowers the surface tension between two materials, letting them mix or spread more readily. In the food industry, surfactants such as lecithin ______ to bind oil and water into smooth, stable products, like dressings and sauces.</p>`,
      prompt: `<div>Which choice completes the text so that it conforms to the conventions of Standard English?</div>`,
      options: [{ id: `A`, text: `employed` }, { id: `B`, text: `being employed` }, { id: `C`, text: `are employed` }, { id: `D`, text: `that they employ` }],
      answer: `C` },

    { id: `oub-rw-m1-17`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The Akhundov National Library in Baku holds many historical newspapers, yet one need not travel to Baku to read them. Since these uncommon items have all been digitized, anyone in the wider world can consult ______ wherever they happen to live.</p>`,
      prompt: `<div>Which choice completes the text so that it conforms to the conventions of Standard English?</div>`,
      options: [{ id: `A`, text: `it` }, { id: `B`, text: `them` }, { id: `C`, text: `this` }, { id: `D`, text: `that` }],
      answer: `B` },

    { id: `oub-rw-m1-18`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The constitution of Brazil, adopted in 1988, sets out many rights across more than 64,000 words of text. According to the constitutional scholar George Tsebelis, who studies how a constitution&rsquo;s length affects civil rights, ______ among the longest national constitutions in the world.</p>`,
      prompt: `<div>Which choice completes the text so that it conforms to the conventions of Standard English?</div>`,
      options: [{ id: `A`, text: `its` }, { id: `B`, text: `it's` }, { id: `C`, text: `they're` }, { id: `D`, text: `their` }],
      answer: `B` },

    { id: `oub-rw-m1-19`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Showcasing works by the printmakers Elizaveta Kruglikova and Norma Bassett Hall, the 2019 exhibition <em>Impressions of an Age</em> aimed to offer a sweeping survey of color printmaking by women from the 1910s through the ______ given the show&rsquo;s span of more than 140 prints, its aims were largely met.</p>`,
      prompt: `<div>Which choice completes the text so that it conforms to the conventions of Standard English?</div>`,
      options: [{ id: `A`, text: `1950s,` }, { id: `B`, text: `1950s` }, { id: `C`, text: `1950s and` }, { id: `D`, text: `1950s, and` }],
      answer: `D` },

    { id: `oub-rw-m1-20`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The Niger&ndash;Congo language family takes in well over 1,400 languages&mdash;among them the widely spoken ______ Yoruba and Igbo, with roughly 45 million and 30 million speakers, respectively&mdash;and makes up a sizable share of the world&rsquo;s tongues, drawing the keen attention of linguists like Kay Williamson.</p>`,
      prompt: `<div>Which choice completes the text so that it conforms to the conventions of Standard English?</div>`,
      options: [{ id: `A`, text: `languages` }, { id: `B`, text: `languages:` }, { id: `C`, text: `languages—` }, { id: `D`, text: `languages,` }],
      answer: `A` },

    { id: `oub-rw-m1-21`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Dolores Herrera, a historian who focuses on the history of voting rights in the US, carried out exhaustive research while writing a book on the landmark <em>Shelby County v. Holder</em> case. ______ when the book appeared, others in her field treated it as a dependable source on the subject.</p>`,
      prompt: `<div>Which choice completes the text with the most logical transition?</div>`,
      options: [{ id: `A`, text: `Likewise,` }, { id: `B`, text: `Consequently,` }, { id: `C`, text: `Next,` }, { id: `D`, text: `Nevertheless,` }],
      answer: `B` },

    { id: `oub-rw-m1-22`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Many English adjectives spring from the same source as the nouns they accompany, like the adjective &ldquo;verbal&rdquo; and the noun &ldquo;verb,&rdquo; both descended from the Latin &ldquo;verbum.&rdquo; ______ some adjectives share no such origin with their nouns. The adjective &ldquo;canine,&rdquo; for one, traces back to the Latin &ldquo;canis,&rdquo; whereas its partner noun, &ldquo;dog,&rdquo; comes from the Old English &ldquo;docga.&rdquo;</p>`,
      prompt: `<div>Which choice completes the text with the most logical transition?</div>`,
      options: [{ id: `A`, text: `Subsequently,` }, { id: `B`, text: `For this reason,` }, { id: `C`, text: `Nevertheless,` }, { id: `D`, text: `Specifically,` }],
      answer: `C` },

    { id: `oub-rw-m1-23`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>In the decades since the end of the Second World War, the various independence movements of the Caribbean region have met with a wide range of different outcomes. Many of the region&rsquo;s islands, and clusters of islands, have gone on to become fully sovereign nations. ______ Puerto Rico, a commonwealth of more than three million residents, remains a part of the US, while Martinique, an island in the Lesser Antilles, continues as an overseas region of France.</p>`,
      prompt: `<div>Which choice completes the text with the most logical transition?</div>`,
      options: [{ id: `A`, text: `For example,` }, { id: `B`, text: `Therefore,` }, { id: `C`, text: `In fact,` }, { id: `D`, text: `On the other hand,` }],
      answer: `D` },

    { id: `oub-rw-m1-24`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>When most or nearly all of Earth&rsquo;s continents join into one landmass, the result is a supercontinent.</li><li>Continents drift together into supercontinents and later split apart.</li><li>This cycle is thought to unfold over many hundreds of millions of years, a pattern known as the supercontinent cycle.</li><li>Kenorland was a supercontinent that came together around 2.7 billion years ago.</li><li>Pangaea was a supercontinent that came together around 335 million years ago.</li></ul>`,
      prompt: `<div>The student wants to emphasize a difference between the two supercontinents. Which choice most effectively uses relevant information from the notes to accomplish this goal?</div>`,
      options: [{ id: `A`, text: `Pangaea came together about 335 million years ago, but Kenorland formed far earlier&mdash;around 2.7 billion years ago.` }, { id: `B`, text: `Assembling and later splitting apart across immense stretches of time, supercontinents hold most or nearly all of Earth&rsquo;s continents.` }, { id: `C`, text: `Both Kenorland and Pangaea counted as supercontinents&mdash;single landmasses embracing most or nearly all of Earth&rsquo;s continents.` }, { id: `D`, text: `Kenorland took shape about 2.7 billion years ago and later broke apart.` }],
      answer: `A` },

    { id: `oub-rw-m1-25`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `easy`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>Tarija is a municipality in the department of Tarija, Bolivia.</li><li>Municipalities are units of government that supply many public services to residents.</li><li>One such service is waste collection.</li><li>Tarija&rsquo;s population was about 205,000 in 2012.</li><li>The department of Tarija contains eleven municipalities.</li></ul>`,
      prompt: `<div>The student wants to provide an example of a public service that Ixmiquilpan is responsible for. Which choice most effectively uses relevant information from the notes to accomplish this goal?</div>`,
      options: [{ id: `A`, text: `As a municipality, Tarija is responsible for providing waste collection to its residents.` }, { id: `B`, text: `Tarija is one of eleven municipalities in its department supplying public services to their communities.` }, { id: `C`, text: `Tarija&mdash;a unit of government in the department of Tarija, Bolivia&mdash;provides public services to its residents.` }, { id: `D`, text: `In 2012, the municipality of Tarija had a population of about 205,000.` }],
      answer: `A` },

    { id: `oub-rw-m1-26`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>Cliff Palace is a former Ancestral Puebloan dwelling in southwestern Colorado, occupied from about 1190 to 1300 CE.</li><li>It held large multistory structures built mainly of sandstone and adobe mortar.</li><li>The Ancestral Puebloan people (about 1200 BCE&ndash;1600 CE) were forerunners of today&rsquo;s Pueblo nations.</li><li>Those nations include Acoma Pueblo and Taos Pueblo.</li><li>Buildings at Acoma Pueblo and Taos Pueblo often blend traditional materials, such as adobe and stone, with more modern ones.</li></ul>`,
      prompt: `<div>The student wants to connect Square Tower House to modern-day Pueblo buildings. Which choice most effectively uses relevant information from the notes to accomplish this goal?</div>`,
      options: [{ id: `A`, text: `Modern Pueblo buildings, like those at Acoma Pueblo and Taos Pueblo, use materials that would not have appeared at Cliff Palace.` }, { id: `B`, text: `The Ancestral Puebloan dwelling of Cliff Palace was built from stone and adobe, the very materials that still go into the buildings of Acoma Pueblo and Taos Pueblo.` }, { id: `C`, text: `The large buildings of Cliff Palace in southwestern Colorado combine both traditional and modern-day features in their design.` }, { id: `D`, text: `Cliff Palace, in southwestern Colorado, was occupied from about 1190 to 1300 CE, but its buildings are not lived in today.` }],
      answer: `B` },

    { id: `oub-rw-m1-27`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>The term element abundance refers to a relative measure of how much of a chemical element occurs in a given setting.</li><li>That relative abundance may be stated as a mass fraction, a mole fraction, or a volume fraction.</li><li>A mass fraction is an element&rsquo;s mass divided by the combined mass of every element in a setting.</li><li>The mass fraction of iron (Fe) on Earth is 32,000 parts per million (ppm), or 3.2%.</li><li>The mass fraction of titanium (Ti) on Earth is 660 ppm, or 0.066%.</li></ul>`,
      prompt: `<div>The student wants to specify an element's relative abundance on Earth. Which choice most effectively uses relevant information from the notes to accomplish this goal?</div>`,
      options: [{ id: `A`, text: `Any of three measures&mdash;a mass fraction, a mole fraction, or a volume fraction&mdash;can capture how abundant an element is in a setting.` }, { id: `B`, text: `As a mass fraction, titanium&rsquo;s relative abundance on Earth comes to 660 ppm, or 0.066%.` }, { id: `C`, text: `There are three different ways to state how abundant the element titanium is on Earth.` }, { id: `D`, text: `Titanium has a greater mass fraction on Earth than iron does.` }],
      answer: `B` },
    ];

  const RW_M2 = [
    { id: `oub-rw-m2-1`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `easy`, type: `mcq`,
      passage: `<p>Security specialists often urge people to choose passwords that are long and hard to predict. Even so, studies show that the more ______ method of choosing a password tends to prize ease over safety: the fourth most-used password in 2020, for instance, was the simple string &ldquo;12345678.&rdquo;</p>`,
      prompt: `<div>Which choice completes the text with the most logical and precise word or phrase?</div>`,
      options: [{ id: `A`, text: `creative` }, { id: `B`, text: `popular` }, { id: `C`, text: `complex` }, { id: `D`, text: `useful` }],
      answer: `B` },

    { id: `oub-rw-m2-2`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The fossil remains of the specimen labeled LB1, unearthed on the island of Flores in 2003, can help paleoanthropologists not only ______ stages in the evolution of hominins but also shed light on the late Pleistocene as a whole, revealing telling details about the world in which LB1 lived.</p>`,
      prompt: `<div>Which choice completes the text with the most logical and precise word or phrase?</div>`,
      options: [{ id: `A`, text: `yield` }, { id: `B`, text: `exploit` }, { id: `C`, text: `prioritize` }, { id: `D`, text: `discern` }],
      answer: `D` },

    { id: `oub-rw-m2-3`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The pronghorn can sprint remarkably fast&mdash;reaching up to 88 kilometers per hour (km/hr)&mdash;yet it is still far slower than the white-throated needletail, a swift bird able to fly at speeds near 170 km/hr. That gap is largely ______ of the way flight&rsquo;s enabling features cap top speed less than the features suited to running across the open ground do.</p>`,
      prompt: `<div>Which choice completes the text with the most logical and precise word or phrase?</div>`,
      options: [{ id: `A`, text: `a consequence` }, { id: `B`, text: `an objective` }, { id: `C`, text: `a repudiation` }, { id: `D`, text: `an explanation` }],
      answer: `A` },

    { id: `oub-rw-m2-4`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Some scholars argue that although protecting individual freedoms is vital to a democracy, a shared grasp of the past is equally central to how citizens understand the workings of the state; a functioning public, they say, cannot leave historical questions to specialists alone. In brief, knowledge of history is hardly ______ and ought not be the preserve of historians by themselves.</p>`,
      prompt: `<div>Which choice completes the text with the most logical and precise word or phrase?</div>`,
      options: [{ id: `A`, text: `unattainable` }, { id: `B`, text: `superfluous` }, { id: `C`, text: `commonplace` }, { id: `D`, text: `equitable` }],
      answer: `B` },

    { id: `oub-rw-m2-5`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `hard`, type: `mcq`,
      passage: `<p>An examination by two economic historians of the public finances of the Republic of Venice at the height of its power turned up a striking ______: although the state leaned heavily on borrowed money and suspended its payments to creditors on more than one occasion, it nonetheless kept a sounder long-run balance than did many realms later held up as models of fiscal thrift.</p>`,
      prompt: `<div>Which choice completes the text with the most logical and precise word or phrase?</div>`,
      options: [{ id: `A`, text: `harbinger` }, { id: `B`, text: `exemplar` }, { id: `C`, text: `sanction` }, { id: `D`, text: `incongruity` }],
      answer: `D` },

    { id: `oub-rw-m2-6`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Zurich draws heavy foot traffic, yet simply reproducing one feature tied to Zurich&rsquo;s walkability&mdash;say, its many street crossings&mdash;may not be enough to spur more walking elsewhere. As the urbanist Mariela Alfonzo argues, our grasp of how individuals decide whether to walk is not yet firm: some studies stress the part played by <u>demographic characteristics</u>, others the part played by <u>neighborhood type</u>; and so it goes, though the decision to walk is made in tangled settings where many needs and conditions shape a person&rsquo;s choice.</p>`,
      prompt: `<div>Which choice best describes the function of the references to “demographic characteristics” and “neighborhood type” in the text as a whole?</div>`,
      options: [{ id: `A`, text: `They give examples of factors researchers think people weigh in most settings but that the text claims matter only for walking decisions made in Zurich.` }, { id: `B`, text: `They offer examples of factors that studies call important to how people decide to walk but that the text says most people seldom think about.` }, { id: `C`, text: `They stand for factors picked out as strong drivers of the choice to walk, which the text nonetheless treats as merely a few among the many conditions that shape how people decide whether to walk.` }, { id: `D`, text: `They point to factors the text says Alfonzo considers overstressed in studies of walking decisions but that it treats as relevant to most people.` }],
      answer: `C` },

    { id: `oub-rw-m2-7`, domain: `Information and Ideas`, skill: `Cross-Text Connections`, difficulty: `hard`, type: `mcq`,
      passage: `<p><b>Text 1</b></p><p>Across parts of Britain, the red fox is a leading predator of the field vole. The researcher Helen Ashworth and colleagues found that when predation pressure on field voles was briefly eased, vole numbers rose sharply. The result illustrates a basic rule of ecology: predators keep prey numbers in check.</p><p><b>Text 2</b></p><p>Diego Salas and Marina Rueda found that keeping pumas out of a site in Patagonia where they usually hunt guanacos had no meaningful effect on how many guanacos there were. Plenty of other predator-removal studies report a rise in prey numbers, but those studies tend to look at small, fast-breeding prey&mdash;birds, voles, rabbits&mdash;rather than large, slow-breeding prey like guanacos, which may explain why their results differ from those of Salas and Rueda.</p>`,
      prompt: `<div>Based on the texts, the author of Text 2 would most likely agree with which statement about Risbey and colleagues' findings (Text 1)?</div>`,
      options: [{ id: `A`, text: `They may be partly due to physical traits of field voles that guanacos do not share.` }, { id: `B`, text: `They may have differed if the ratio of a red fox&rsquo;s body size to a field vole&rsquo;s had been greater.` }, { id: `C`, text: `They may be partly explained by red foxes being smaller and faster-breeding than pumas.` }, { id: `D`, text: `They may reflect a response not usually seen in prey species other than field voles.` }],
      answer: `A` },

    { id: `oub-rw-m2-8`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `hard`, type: `mcq`,
      passage: `<p>The following text is from Virginia Woolf's 1919 novel <i>Night and Day</i>. The narrator describes a gathering of artists and intellectuals.</p><p>One person after another rose, and, as with an ill-balanced axe, attempted to hew out his conception of art a little more clearly, and sat down with the feeling that, for some reason which he could not grasp, his strokes had gone awry. As they sat down they turned almost invariably to the person sitting next them, and rectified and continued what they had just said in public.</p>`,
      prompt: `<div>The text makes which point about the people at the gathering?</div>`,
      options: [{ id: `A`, text: `Each likes holding forth on abstract matters in public but has no taste for discussing them in private.` }, { id: `B`, text: `Each falls short of laying out a fully coherent view of art yet cannot grasp the reason why.` }, { id: `C`, text: `Each looks down on the others present but works hard to win their admiration.` }, { id: `D`, text: `Each gets caught up in a single question about art that none of them can answer.` }],
      answer: `B` },

    { id: `oub-rw-m2-9`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Elena Vasquez and colleagues drew on historical DNA (hDNA)&mdash;genetic data incidentally preserved in specimens kept in natural history collections&mdash;to trace the evolutionary path of the takahe (<em>Porphyrio hochstetteri</em>), a flightless bird. The method has rare advantages, such as sampling genetic material from species now extinct, yet it stays relatively little used, since archived specimens are at times stored in ways that degrade DNA quality&mdash;a problem not easily fixed with current techniques and available extraction and analysis tools.</p>`,
      prompt: `<div>What does the text most strongly suggest about specimens from natural history collections?</div>`,
      options: [{ id: `A`, text: `Though they figured in a study that led to an important discovery, they are on the whole of limited value as sources of genetic data.` }, { id: `B`, text: `Because they are so often in poor condition, they tend to yield genetic data that take a long time to extract and interpret.` }, { id: `C`, text: `They serve chiefly as a source of genetic data for researchers looking at organisms that have changed a great deal over evolutionary time.` }, { id: `D`, text: `Though they may hold valuable genetic data, usable hDNA cannot be recovered from every one of them.` }],
      answer: `D` },

    { id: `oub-rw-m2-10`, domain: `Information and Ideas`, skill: `Command of Evidence (Textual)`, difficulty: `hard`, type: `mcq`,
      passage: `<p>The use of feigned-injury displays to fool predators is well recorded in the killdeer (<em>Charadrius vociferus</em>) and other members of the bird order Charadriiformes. A broad literature review carried out by Tomas Halloran and colleagues found that the trait has independently arisen across a surprisingly wide span of 13 different bird orders, among them the Anseriformes and the Passeriformes. Looking into what might drive its spread, the researchers concluded that, whatever the order, how common the trait is depends on environmental differences tied to the absolute latitude of nesting sites.</p>`,
      prompt: `<div>Which finding, if true, would most strongly support the researchers' conclusion?</div>`,
      options: [{ id: `A`, text: `Among the orders examined, about 54% of species nest at 50&ndash;80 degrees absolute latitude, yet most species known to use feigned-injury displays nest between 0 and 30 degrees.` }, { id: `B`, text: `Feigned-injury displays appear in Charadriiformes species across the whole range of nesting latitudes within that order, yet in other orders they appear only where nesting sites lie 10&ndash;20 degrees higher in latitude than is typical for those species.` }, { id: `C`, text: `The use of feigned-injury displays runs common among Charadriiformes species whatever their nesting latitude, yet in other orders it occurs only where nesting sites lie at 0&ndash;30 degrees absolute latitude.` }, { id: `D`, text: `Among the orders examined, feigned-injury displays turn up in roughly 34% of the species that nest at 0&ndash;30 degrees absolute latitude and in roughly 60% of those that nest at 50&ndash;80 degrees.` }],
      answer: `D` },

    { id: `oub-rw-m2-11`, domain: `Information and Ideas`, skill: `Command of Evidence (Textual)`, difficulty: `hard`, type: `mcq`,
      passage: `<p>When Yamaha, long known for its motorcycles, began selling pianos, it drew on the brand recognition it had built in one field to enter another where it had not competed&mdash;an example of brand extension. To find out whether perceived similarity between categories predicts how likely shoppers are to buy brand extensions, Ravi Nathan and colleagues identified 30 extended-brand pairs (say, the same brand of shampoo and toothpaste) within a year of purchases by roughly 60,000 households, and for every pair they had shoppers rate how similar the two categories were and worked out the change in the chance that a brand bought in one category would also be bought in the other.</p>`,
      prompt: `<div>Which finding, if true, would provide evidence that the possibility Grasby et al. investigated does occur?</div>`,
      options: [{ id: `A`, text: `Both shoppers&rsquo; ratings and the probability shifts the researchers computed were swayed by how well known each brand was.` }, { id: `B`, text: `Shoppers&rsquo; ratings and the probability shifts the researchers computed moved together in a strong, positive relationship.` }, { id: `C`, text: `Shoppers&rsquo; ratings varied widely from pair to pair, while the probability shifts the researchers computed were much alike across pairs.` }, { id: `D`, text: `Shoppers bought more products in categories where extended-brand pairs occur than in categories where they do not.` }],
      answer: `B` },

    { id: `oub-rw-m2-12`, domain: `Information and Ideas`, skill: `Command of Evidence (Quantitative)`, difficulty: `hard`, type: `mcq`,
      passage: `<div style='text-align:center;font-weight:600;font-size:12px;margin:2px 0'>Model vs. Participant Enjoyment Ratings: Correlation by Painting Style</div><table style='border-collapse:collapse;margin:6px auto'><tr><th style='border:1px solid var(--border);padding:3px 12px'>Participant</th><th style='border:1px solid var(--border);padding:3px 12px'>Impressionist</th><th style='border:1px solid var(--border);padding:3px 12px'>Color field</th></tr><tr><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>P1</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>0.58</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>0.14</td></tr><tr><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>P3</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>0.42</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>0.11</td></tr><tr><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>P6</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>0.38</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>0.11</td></tr></table><p>The neuroscientist Kiyohito Iigaya and colleagues built a computer model meant to gauge how much a person would enjoy a given artwork, rating it somewhere between 1 (meaning not at all) and 4 (meaning very much). They then had participants apply that same scale to a number of painting sets in various styles, then measured the correlation between the model&rsquo;s predicted ratings and the participants&rsquo; reported ones. Suppose P1 rated the impressionist and the color-field paintings equally; the table&rsquo;s data then imply a prediction from the model&mdash;namely, that ______</p>`,
      prompt: `<div>Which choice most effectively uses data from the graph to complete the statement?</div>`,
      options: [{ id: `A`, text: `P1 would take less pleasure in the impressionist works than in the color-field works.` }, { id: `B`, text: `P1 would take more pleasure in the impressionist works than in the color-field works.` }, { id: `C`, text: `For P1, the ratings given to impressionist and to color-field works would come out unequal.` }, { id: `D`, text: `For P1, the ratings given to impressionist and to color-field works would come out equal.` }],
      answer: `C` },

    { id: `oub-rw-m2-13`, domain: `Information and Ideas`, skill: `Command of Evidence (Textual)`, difficulty: `hard`, type: `mcq`,
      passage: `<p>Scholars point to <em>One Hundred Years of Solitude</em>, the 1967 novel by the Colombian writer Gabriel Garc&iacute;a M&aacute;rquez, as a founding work of magical realism&mdash;the Latin American mode of fiction in which antirealistic devices, often taken from the folklore of Indigenous and colonial societies of the Americas, appear within the otherwise realistic frame typical of the modern novel. The style has left a deep mark on writers the world over, the Polish author Olga Tokarczuk among them, <u>whose 1996 book <em>Primeval and Other Times</em> echoes classic magical realist works by setting literary realism beside folklore&mdash;in this case, the folklore of Poland.</u></p>`,
      prompt: `<div>Which quotation from a literary scholar would most directly support the claim in the underlined portion of the text?</div>`,
      options: [{ id: `A`, text: `&ldquo;As in many Latin American magical realist works, <em>Primeval and Other Times</em> owes a debt to antirealistic elements of Poland&rsquo;s folk tradition.&rdquo;` }, { id: `B`, text: `&ldquo;Within <em>Primeval and Other Times</em>, the orderly realistic narrative is again and again, and to great effect, broken open by imagery and events drawn from Polish folklore.&rdquo;` }, { id: `C`, text: `&ldquo;Though <em>Primeval and Other Times</em> moves between realistic and antirealistic modes, touches suggesting the sway of Polish folklore appear all through the book.&rdquo;` }, { id: `D`, text: `&ldquo;While Polish folklore plainly shapes the style and the occasionally antirealistic plot found in <em>Primeval and Other Times</em>, this book also bears the clear stamp of Latin America&rsquo;s magical realist tradition.&rdquo;` }],
      answer: `B` },

    { id: `oub-rw-m2-14`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `<p>The Vema Fracture Zone (VFZ) is a stretch of deep seafloor and undersea ridges in the central Atlantic where mining has been proposed, though its biodiversity is barely charted and remains little understood. Nearly all of the invertebrate species turned up in a recent VFZ survey were entirely new to science, and to date the sampling has clustered heavily toward the zone&rsquo;s western edge. A few species, such as <em>Nuculana profunda</em>, were identified both by their form and by DNA analysis, while <em>Spiophanes abyssalis</em> and others, for which molecular sampling was not feasible, were identified from physical form alone. Because molecular analysis does not depend on telling apart subtle physical differences, it is ______</p>`,
      prompt: `<div>Which choice most logically completes the text?</div>`,
      options: [{ id: `A`, text: `more likely to correctly separate look-alike but distinct invertebrate species than the method used to identify <em>Spiophanes abyssalis</em>.` }, { id: `B`, text: `more often used to identify species with physical features like those of <em>Nuculana profunda</em> than form-based analysis is.` }, { id: `C`, text: `better suited to telling <em>Spiophanes abyssalis</em> from look-alike species than to telling <em>Nuculana profunda</em> from look-alike species.` }, { id: `D`, text: `able to give more physical detail about a species than the method used for <em>Spiophanes abyssalis</em>.` }],
      answer: `A` },

    { id: `oub-rw-m2-15`, domain: `Information and Ideas`, skill: `Command of Evidence (Textual)`, difficulty: `hard`, type: `mcq`,
      passage: `<p>As shown by Sami joik songs about reindeer pastures and by Yolngu songs about coastal tides, ecological knowledge can be carried along in Indigenous songs, and at times it survives in no other form at all. A song keeper for a coastal First Nation worked closely with the ethnobiologist Dana Lepofsky and colleagues, sharing songs that describe the terraced tidal clam beds the community once built to help a dietary staple thrive. Drawing also on archaeological evidence, Lepofsky and colleagues found that the spread of the practice named in the songs matched a rise in clam size and numbers even as harvesting grew&mdash;a result showing that ______</p>`,
      prompt: `<div>Which choice most logically completes the text?</div>`,
      options: [{ id: `A`, text: `the clams gathered from tidal terraces by the community in the past were probably a different species from those found there today.` }, { id: `B`, text: `the community likely would not have described building clam beds in song had the effort not produced much larger clams.` }, { id: `C`, text: `showing the practical uses of what a people knows about their environment is the defining trait of certain Indigenous peoples&rsquo; music.` }, { id: `D`, text: `effective ways of cultivating a food source are among the ecological knowledge kept alive in Indigenous songs.` }],
      answer: `D` },

    { id: `oub-rw-m2-16`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Tendai Muronzi is a novelist from Mutare, Zimbabwe, who has won wide international praise in recent years. Writers working in other genres, such as poetry or the stage, tend to draw less notice beyond their home countries, though many are still well ______ Kofi Mensah, for instance, is a renowned spoken-word poet from Ghana.</p>`,
      prompt: `<div>Which choice completes the text so that it conforms to the conventions of Standard English?</div>`,
      options: [{ id: `A`, text: `known` }, { id: `B`, text: `known,` }, { id: `C`, text: `known:` }, { id: `D`, text: `known and` }],
      answer: `C` },

    { id: `oub-rw-m2-17`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>After Nepal became a member of Interpol&mdash;the International Criminal Police ______ in 1967, the Nepal Police gained access to the shared resources of police forces the world over.</p>`,
      prompt: `<div>Which choice completes the text so that it conforms to the conventions of Standard English?</div>`,
      options: [{ id: `A`, text: `Organization,` }, { id: `B`, text: `Organization—` }, { id: `C`, text: `Organization` }, { id: `D`, text: `Organization:` }],
      answer: `B` },

    { id: `oub-rw-m2-18`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The mass of bird eggs differs greatly from one species to the next, and an ecological ______ weighed the eggs laid by a range of bird species found that <em>Cygnus olor</em> eggs are heavier, on average, than <em>Fulica atra</em> eggs.</p>`,
      prompt: `<div>Which choice completes the text so that it conforms to the conventions of Standard English?</div>`,
      options: [{ id: `A`, text: `study, that` }, { id: `B`, text: `study, which` }, { id: `C`, text: `study` }, { id: `D`, text: `study that` }],
      answer: `B` },

    { id: `oub-rw-m2-19`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Many writings by the Roman scholar Varro (1st century BCE), among them his treatise on the Latin language in its complete form, have not survived. Antiquarians ______ to read one of Varro&rsquo;s surviving works&mdash;not one known merely through the quotations of later writers, that is&mdash;might instead seek out a copy of his <em>De re rustica</em>, a handbook on farming.</p>`,
      prompt: `<div>Which choice completes the text so that it conforms to the conventions of Standard English?</div>`,
      options: [{ id: `A`, text: `hope` }, { id: `B`, text: `hoped` }, { id: `C`, text: `hoping` }, { id: `D`, text: `have hoped` }],
      answer: `C` },

    { id: `oub-rw-m2-20`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The Orff approach is a way of teaching music ______ to engage children through rhythm, movement, and play as naturally as they take to speech, keeps young students improvising and performing in groups from the very start. In Orff classrooms, beginners often explore simple tunes on xylophones and hand drums.</p>`,
      prompt: `<div>Which choice completes the text so that it conforms to the conventions of Standard English?</div>`,
      options: [{ id: `A`, text: `that, is aiming` }, { id: `B`, text: `that, aiming` }, { id: `C`, text: `that aims` }, { id: `D`, text: `that has aimed` }],
      answer: `B` },

    { id: `oub-rw-m2-21`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `<p>The Organisation for Economic Co-operation and Development (OECD) compiles comparative price-level figures across its thirty-eight member states. By those figures, as of July 2021 a &ldquo;basket&rdquo; holding goods and services worth 100 US dollars (USD) within the United States would have run to roughly 80 USD or so in fellow OECD member ______</p>`,
      prompt: `<div>Which choice completes the text so that it conforms to the conventions of Standard English?</div>`,
      options: [{ id: `A`, text: `nation Spain.` }, { id: `B`, text: `nation, Spain.` }, { id: `C`, text: `nation—Spain.` }, { id: `D`, text: `nation: Spain.` }],
      answer: `A` },

    { id: `oub-rw-m2-22`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>In 2018, the geographer Peter Rogerson determined that the geographic center of Iowa lay a few miles from the town of Grand Junction. His figure was more precise than the US Geological Survey&rsquo;s own estimate from 1920. ______ that earlier estimate had relied on far cruder tools&mdash;just cardboard and string.</p>`,
      prompt: `<div>Which choice completes the text with the most logical transition?</div>`,
      options: [{ id: `A`, text: `Ultimately,` }, { id: `B`, text: `Of course,` }, { id: `C`, text: `Likewise,` }, { id: `D`, text: `To that end,` }],
      answer: `B` },

    { id: `oub-rw-m2-23`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `<p>At the 1953 ticker-tape parade honoring a returning polar expedition, the ribbons raining down were spools of paper from &ldquo;tickers,&rdquo; the telegraph machines once used to relay stock quotes. Of course, real ticker tape had long been out of use by the time of the 1998 parade for the New York Yankees. ______ ordinary shredded paper lent the celebration its snowstorm.</p>`,
      prompt: `<div>Which choice completes the text with the most logical transition?</div>`,
      options: [{ id: `A`, text: `In addition,` }, { id: `B`, text: `In other words,` }, { id: `C`, text: `With this in mind,` }, { id: `D`, text: `Then,` }],
      answer: `D` },

    { id: `oub-rw-m2-24`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>Nadia Okonjo is a Nigerian American artist widely celebrated for her large neon light sculptures.</li><li>Her sculpture <em>Harmattan</em> is made of smooth, glowing amber neon rings.</li><li>It fills some 300 cubic feet.</li><li>Her sculpture <em>Tidewater</em>, by contrast, is made of tangled blue and green neon coils.</li><li>It fills some 96,400 cubic feet.</li></ul>`,
      prompt: `<div>The student wants to emphasize a similarity between <i>Uros House</i> and <i>Golden Waters</i>. Which choice most effectively uses relevant information from the notes to accomplish this goal?</div>`,
      options: [{ id: `A`, text: `<em>Harmattan</em> is a neon light sculpture made by Nadia Okonjo, and so is <em>Tidewater</em>.` }, { id: `B`, text: `The smooth neon rings of Nadia Okonjo&rsquo;s <em>Harmattan</em> look nothing like the tangled coils of <em>Tidewater</em>.` }, { id: `C`, text: `Nadia Okonjo is the artist behind <em>Harmattan</em>&mdash;a sculpture made of smooth amber neon rings.` }, { id: `D`, text: `At 96,400 cubic feet, Nadia Okonjo&rsquo;s <em>Tidewater</em> is a far larger work than the 300-cubic-foot <em>Harmattan</em>.` }],
      answer: `A` },

    { id: `oub-rw-m2-25`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>As a rule, an object warms up when it is twisted.</li><li>Twisting an object in this way is known as torsion.</li><li>A 2020 study led by Mei Lin and colleagues measured the torsional heating of several fibers.</li><li>Twisting a 0.6-millimeter-thick strand of single-ply copper wire raised its average surface temperature by 19.8&deg;C.</li><li>Twisting a 1.9-millimeter-thick strand of silk fiber raised its average surface temperature by 13.6&deg;C.</li></ul>`,
      prompt: `<div>The student wants to contrast the two samples. Which choice most effectively uses relevant information from the notes to accomplish this goal?</div>`,
      options: [{ id: `A`, text: `Of the two strands tested in the 2020 study, the silk one was thicker than the single-ply copper wire.` }, { id: `B`, text: `Twisting the fibers in the 2020 study drove up the surface temperature of each sample.` }, { id: `C`, text: `Twisting an object generally makes its temperature climb, a process called torsional heating.` }, { id: `D`, text: `In 2020, researchers studied torsional heating across several fibers, among them silk and single-ply copper wire.` }],
      answer: `A` },

    { id: `oub-rw-m2-26`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>Anna May Wong (1905&ndash;1961) was a film actress born in Los Angeles, California.</li><li>She is widely considered the first Chinese American movie star in Hollywood history.</li><li>Over her long career she appeared in dozens of films.</li><li>Early on she took many small, uncredited parts, such as one in <em>The Red Lantern</em> (1919).</li><li>Later she went on to play leading, credited roles, such as Hui Fei in <em>Shanghai Express</em> (1932).</li></ul>`,
      prompt: `<div>The student wants to emphasize the order in which the two films were released. Which choice most effectively uses relevant information from the notes to accomplish this goal?</div>`,
      options: [{ id: `A`, text: `<em>The Red Lantern</em> (1919) came out early in Anna May Wong&rsquo;s career, whereas <em>Shanghai Express</em> (1932) followed years later.` }, { id: `B`, text: `Anna May Wong was known for roles in films like <em>The Red Lantern</em> (1919) and <em>Shanghai Express</em> (1932).` }, { id: `C`, text: `Early on, Anna May Wong went uncredited in some films, such as <em>The Red Lantern</em>, in which she played a small, uncredited part.` }, { id: `D`, text: `In <em>The Red Lantern</em> (1919), Anna May Wong played a small, uncredited part; in <em>Shanghai Express</em> (1932), though, she played the credited role of Hui Fei.` }],
      answer: `A` },

    { id: `oub-rw-m2-27`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `<p>While researching a topic, a student has taken the following notes:</p><ul><li>The stream length of a river is the distance measured along the winding path the river actually takes.</li><li>The valley length of a river is the distance along a single straight line running from where the river begins to where it ends.</li><li>Its curviness, known as sinuosity, is found by dividing its stream length by its valley length.</li><li>Rivers of low sinuosity have a stream length 1 to 1.5 times their valley length; rivers of high sinuosity, 1.5 times or more.</li><li>The Amazon River in South America has high sinuosity.</li><li>In Australia, the Todd River shows low sinuosity.</li></ul>`,
      prompt: `<div>The student wants to compare the curviness of the two rivers. Which choice most effectively uses relevant information from the notes to accomplish this goal?</div>`,
      options: [{ id: `A`, text: `The Todd River of Australia, with its high sinuosity, is curvier than South America&rsquo;s low-sinuosity Amazon River.` }, { id: `B`, text: `In both the Amazon and the Todd rivers, curviness is found by comparing stream length with valley length.` }, { id: `C`, text: `Setting the stream lengths of the Amazon and Todd rivers against their valley lengths lets one work out their curviness, or sinuosity.` }, { id: `D`, text: `The Amazon River in South America proves more sinuous than the Todd River in Australia, its stream straying further from a straight valley line.` }],
      answer: `D` },
    ];

  const MATH_M1 = [
    { id: `oub-math-m1-1`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `easy`, type: `mcq`,
      prompt: `<div style='text-align:center;margin-bottom:6px'>13x + 50 = 180</div><div>Which equation has the same solution as the given equation?</div>`,
      options: [{ id: `A`, text: `13x = 50` }, { id: `B`, text: `13x = 80` }, { id: `C`, text: `13x = 130` }, { id: `D`, text: `13x = 180` }],
      answer: `C` },

    { id: `oub-math-m1-2`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<svg viewBox="0 0 300 250" role="img" aria-label="exponential graph" style="max-width:340px;width:100%;display:block;margin:6px auto"><clipPath id="cp69784"><rect x="26.0" y="26.0" width="248.0" height="198.0"/></clipPath><line x1="26.0" y1="224.0" x2="26.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="50.8" y1="224.0" x2="50.8" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="75.6" y1="224.0" x2="75.6" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="100.4" y1="224.0" x2="100.4" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="125.2" y1="224.0" x2="125.2" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="150.0" y1="224.0" x2="150.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="174.8" y1="224.0" x2="174.8" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="199.6" y1="224.0" x2="199.6" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="224.4" y1="224.0" x2="224.4" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="249.2" y1="224.0" x2="249.2" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="274.0" y1="224.0" x2="274.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="224.0" x2="274.0" y2="224.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="195.7" x2="274.0" y2="195.7" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="167.4" x2="274.0" y2="167.4" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="139.1" x2="274.0" y2="139.1" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="110.9" x2="274.0" y2="110.9" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="82.6" x2="274.0" y2="82.6" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="54.3" x2="274.0" y2="54.3" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="26.0" x2="274.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="224.0" x2="274.0" y2="224.0" stroke="currentColor" stroke-width="1.4"/><line x1="150.0" y1="224.0" x2="150.0" y2="26.0" stroke="currentColor" stroke-width="1.4"/><text x="26.0" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">-10</text><text x="88.0" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">-5</text><text x="150.0" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">0</text><text x="212.0" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">5</text><text x="274.0" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">10</text><text x="146.0" y="191.6" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">2.5</text><text x="146.0" y="156.3" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">5</text><text x="146.0" y="120.9" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">7.5</text><text x="146.0" y="85.6" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">10</text><text x="146.0" y="50.2" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">12.5</text><g clip-path="url(#cp69784)"><line x1="26.0" y1="139.1" x2="274.0" y2="139.1" stroke="currentColor" stroke-width="0.8" stroke-dasharray="4 3" opacity="0.45"/><polyline points="26.0,139.1 27.9,139.1 29.7,139.1 31.6,139.1 33.4,139.1 35.3,139.1 37.2,139.1 39.0,139.1 40.9,139.1 42.7,139.1 44.6,139.1 46.5,139.1 48.3,139.1 50.2,139.1 52.0,139.1 53.9,139.1 55.8,139.1 57.6,139.1 59.5,139.1 61.3,139.1 63.2,139.1 65.1,139.1 66.9,139.1 68.8,139.1 70.6,139.1 72.5,139.1 74.4,139.1 76.2,139.1 78.1,139.1 79.9,139.1 81.8,139.1 83.7,139.1 85.5,139.1 87.4,139.1 89.2,139.1 91.1,139.1 93.0,139.1 94.8,139.1 96.7,139.0 98.5,139.0 100.4,139.0 102.3,138.9 104.1,138.9 106.0,138.8 107.8,138.8 109.7,138.7 111.6,138.6 113.4,138.4 115.3,138.3 117.1,138.1 119.0,137.8 120.9,137.5 122.7,137.1 124.6,136.7 126.4,136.1 128.3,135.4 130.2,134.5 132.0,133.5 133.9,132.1 135.7,130.5 137.6,128.5 139.5,126.1 141.3,123.1 143.2,119.3 145.0,114.8 146.9,109.1 148.8,102.2 150.6,93.7 152.5,83.2 154.3,70.2 156.2,54.3 158.1,34.7 159.9,11.9" fill="none" stroke="currentColor" stroke-width="2"/></g></svg><div>What is the y-intercept of the graph shown?</div>`,
      options: [{ id: `A`, text: `(−9, 0)` }, { id: `B`, text: `(−6, 0)` }, { id: `C`, text: `(0, 6)` }, { id: `D`, text: `(0, 9)` }],
      answer: `D` },

    { id: `oub-math-m1-3`, domain: `Problem-Solving and Data Analysis`, skill: `Ratios, rates, proportional relationships, and units`, difficulty: `easy`, type: `mcq`,
      prompt: `<div>For a particular tree species, it is recommended to plant a maximum of 102 trees per acre. Based on this recommendation, what is the maximum number of trees of this species that can be planted on 3 acres?</div>`,
      options: [{ id: `A`, text: `408` }, { id: `B`, text: `306` }, { id: `C`, text: `105` }, { id: `D`, text: `99` }],
      answer: `B` },

    { id: `oub-math-m1-4`, domain: `Advanced Math`, skill: `Equivalent expressions`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>Which expression is equivalent to 11(x<sup>2</sup> − 100y<sup>2</sup>)?</div>`,
      options: [{ id: `A`, text: `11(x − 2y)(x − 50y)` }, { id: `B`, text: `11(x − 2y)(x + 50y)` }, { id: `C`, text: `11(x − 10y)(x − 10y)` }, { id: `D`, text: `11(x − 10y)(x + 10y)` }],
      answer: `D` },

    { id: `oub-math-m1-5`, domain: `Advanced Math`, skill: `Equivalent expressions`, difficulty: `easy`, type: `mcq`,
      prompt: `<div>Which expression is equivalent to (9c + 8) − (4c<sup>3</sup> − 6)?</div>`,
      options: [{ id: `A`, text: `4c³ + 9c + 2` }, { id: `B`, text: `4c³ + 9c + 14` }, { id: `C`, text: `−4c³ + 9c + 2` }, { id: `D`, text: `−4c³ + 9c + 14` }],
      answer: `D` },

    { id: `oub-math-m1-6`, domain: `Geometry and Trigonometry`, skill: `Lines, angles, and triangles`, difficulty: `easy`, type: `mcq`,
      prompt: `<div>In △<i>JKL</i>, the measures of both ∠<i>J</i> and ∠<i>K</i> are equal and the measure of ∠<i>L</i> is 134°. What is the measure of ∠<i>J</i>?</div>`,
      options: [{ id: `A`, text: `23°` }, { id: `B`, text: `46°` }, { id: `C`, text: `67°` }, { id: `D`, text: `90°` }],
      answer: `A` },

    { id: `oub-math-m1-7`, domain: `Algebra`, skill: `Linear functions`, difficulty: `medium`, type: `grid`,
      prompt: `<div>A student council group is selling car stickers for a fundraiser. They use the function p(x) = 5x − 240 to determine their profit p(x), in dollars, for selling x car stickers. In order to earn a profit of $700, how many car stickers must they sell?</div>`,
      answer: [`188`] },

    { id: `oub-math-m1-8`, domain: `Algebra`, skill: `Linear equations in two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>A line in the xy-plane has a slope of 7 and passes through the point (0, −5). Which equation represents this line?</div>`,
      options: [{ id: `A`, text: `y = −5x + 7` }, { id: `B`, text: `y = −5x − 7` }, { id: `C`, text: `y = 7x + 5` }, { id: `D`, text: `y = 7x − 5` }],
      answer: `D` },

    { id: `oub-math-m1-9`, domain: `Algebra`, skill: `Linear equations in two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>Line <i>r</i> is defined by the equation 4x − 3y = 8. Line <i>s</i> is parallel to line <i>r</i> in the xy-plane. What is the slope of line <i>s</i>?</div>`,
      options: [{ id: `A`, text: `−4` }, { id: `B`, text: `−3` }, { id: `C`, text: `3/4` }, { id: `D`, text: `4/3` }],
      answer: `D` },

    { id: `oub-math-m1-10`, domain: `Algebra`, skill: `Linear equations in two variables`, difficulty: `medium`, type: `grid`,
      prompt: `<table style="border-collapse:collapse;margin:6px auto"><tr><th style="border:1px solid var(--border);padding:3px 12px">x</th><th style="border:1px solid var(--border);padding:3px 12px">y</th></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">0</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">12</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">1</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">19</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">2</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">26</td></tr></table><div>The table shows three values of x and their corresponding values of y. There is a linear relationship between x and y. What is the y-coordinate of the y-intercept of the line in the xy-plane that represents this relationship?</div>`,
      answer: [`12`] },

    { id: `oub-math-m1-11`, domain: `Algebra`, skill: `Linear equations in two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>At how many points do the graphs of the equations y = x + 24 and y = 7x intersect in the xy-plane?</div>`,
      options: [{ id: `A`, text: `0` }, { id: `B`, text: `1` }, { id: `C`, text: `2` }, { id: `D`, text: `7` }],
      answer: `B` },

    { id: `oub-math-m1-12`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>The cost to rent a bus from Company X is $850 for the first 2 hours and an additional $30 per hour for each hour after the first 2 hours. If the total cost to rent the bus from Company X for t hours, where t &gt; 2, is $1,030, which equation represents this situation?</div>`,
      options: [{ id: `A`, text: `850(t − 2) + 30t = 1,030` }, { id: `B`, text: `850(2t) + 30t = 1,030` }, { id: `C`, text: `850 + 30(t − 2) = 1,030` }, { id: `D`, text: `850 + 30(2t) = 1,030` }],
      answer: `C` },

    { id: `oub-math-m1-13`, domain: `Problem-Solving and Data Analysis`, skill: `Inference from sample statistics and margin of error`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>A machine fills bags with approximately 29 ounces of walnuts. To test the accuracy of the filling process, 169 bags of walnuts were selected at random and weighed. Based on the sample, it is estimated that the average weight of all bags of walnuts filled by the machine in an 8-hour period is 28.88 ounces, with an associated margin of error of 0.13 ounce. Which of the following is the best interpretation of this estimate?</div>`,
      options: [{ id: `A`, text: `Plausible values for the average weight of all bags of walnuts filled by the machine are between 28.75 ounces and 29.01 ounces.` }, { id: `B`, text: `Plausible values for the average weight of all bags of walnuts filled by the machine are less than 28.75 ounces or greater than 29.01 ounces.` }, { id: `C`, text: `The average weight of all bags of walnuts filled by the machine is less than 28.99 ounces.` }, { id: `D`, text: `The average weight of all bags of walnuts filled by the machine is greater than 28.99 ounces.` }],
      answer: `A` },

    { id: `oub-math-m1-14`, domain: `Geometry and Trigonometry`, skill: `Area and volume`, difficulty: `medium`, type: `mcq`,
      prompt: `<div style="border:1px solid var(--border);border-radius:8px;padding:8px 12px;margin:6px auto;max-width:520px;font-style:italic;opacity:0.9">A rectangle with a semicircle on top. Top corners of the rectangle are W (left) and X (right); bottom corners are Z (left) and Y (right). The semicircle sits on segment WX as its diameter (bulging upward). Note: figure not drawn to scale.</div><div>The figure shown consists of a rectangle and a semicircle, where the length of <span style='white-space:nowrap'>WX</span> is 20 units and the length of <span style='white-space:nowrap'>WZ</span> is 5 units. The diameter of the semicircle is <span style='white-space:nowrap'>WX</span>. Which of the following expressions represents the area, in square units, of the figure?</div>`,
      options: [{ id: `A`, text: `20 + 5 + 10π` }, { id: `B`, text: `20 × 5 + 10π` }, { id: `C`, text: `20 × 5 + 50π` }, { id: `D`, text: `20 × 5 + 100π` }],
      answer: `C` },

    { id: `oub-math-m1-15`, domain: `Advanced Math`, skill: `Equivalent expressions`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>The kinetic energy <i>K</i>, in joules, of an object is given by the formula K = ½mv<sup>2</sup>, where <i>m</i> is the mass of the object, in kilograms, and <i>v</i> is the velocity of the object, in meters per second. If the kinetic energy of a certain object can be found by using the formula K = 32v<sup>2</sup>, what is the mass of the object, in kilograms?</div>`,
      options: [{ id: `A`, text: `1,024` }, { id: `B`, text: `64` }, { id: `C`, text: `32` }, { id: `D`, text: `16` }],
      answer: `B` },

    { id: `oub-math-m1-16`, domain: `Advanced Math`, skill: `Exponential functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>The function f(x) = 242(1.040)<sup>x</sup> models the value, in dollars, of a certain bank account from 1953 through 1968, where <i>x</i> is the number of years after the end of 1953. Which of the following is the best interpretation of “f(5) is approximately equal to 294” in this context?</div>`,
      options: [{ id: `A`, text: `The value of the bank account is estimated to be approximately 5 dollars greater at the end of 1958 than at the end of 1953.` }, { id: `B`, text: `The value of the bank account is estimated to be approximately 294 dollars at the end of 1958.` }, { id: `C`, text: `The value, in dollars, of the bank account is estimated to be approximately 5 times greater at the end of 1958 than at the end of 1953.` }, { id: `D`, text: `The value of the bank account is estimated to increase by approximately 294 dollars every 5 years between the end of 1953 and the end of 1968.` }],
      answer: `B` },

    { id: `oub-math-m1-17`, domain: `Advanced Math`, skill: `Nonlinear equations in one variable`, difficulty: `hard`, type: `grid`,
      prompt: `<div style='text-align:center;margin-bottom:6px'>(2x − 7)<sup>2</sup> − 8(2x − 7) + 15 = 0</div><div>What is a solution to the given equation?</div>`,
      answer: [`5`, `6`] },

    { id: `oub-math-m1-18`, domain: `Algebra`, skill: `Linear functions`, difficulty: `medium`, type: `grid`,
      prompt: `<div style='text-align:center;margin-bottom:6px'>f(x) = −10x + b</div><div>For the linear function <i>f</i>, <i>b</i> is a constant and f(2/5) = −53. What is the value of <i>b</i>?</div>`,
      answer: [`-49`] },

    { id: `oub-math-m1-19`, domain: `Problem-Solving and Data Analysis`, skill: `Scatterplots`, difficulty: `medium`, type: `mcq`,
      prompt: `<svg viewBox="0 0 300 250" role="img" aria-label="scatterplot" style="max-width:340px;width:100%;display:block;margin:6px auto"><clipPath id="cp22874"><rect x="26.0" y="26.0" width="248.0" height="198.0"/></clipPath><line x1="26.0" y1="224.0" x2="26.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="50.8" y1="224.0" x2="50.8" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="75.6" y1="224.0" x2="75.6" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="100.4" y1="224.0" x2="100.4" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="125.2" y1="224.0" x2="125.2" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="150.0" y1="224.0" x2="150.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="174.8" y1="224.0" x2="174.8" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="199.6" y1="224.0" x2="199.6" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="224.4" y1="224.0" x2="224.4" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="249.2" y1="224.0" x2="249.2" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="274.0" y1="224.0" x2="274.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="224.0" x2="274.0" y2="224.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="204.2" x2="274.0" y2="204.2" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="184.4" x2="274.0" y2="184.4" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="164.6" x2="274.0" y2="164.6" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="144.8" x2="274.0" y2="144.8" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="125.0" x2="274.0" y2="125.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="105.2" x2="274.0" y2="105.2" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="85.4" x2="274.0" y2="85.4" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="65.6" x2="274.0" y2="65.6" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="45.8" x2="274.0" y2="45.8" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="26.0" x2="274.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="224.0" x2="274.0" y2="224.0" stroke="currentColor" stroke-width="1.4"/><line x1="26.0" y1="224.0" x2="26.0" y2="26.0" stroke="currentColor" stroke-width="1.4"/><text x="26.0" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">0</text><text x="75.6" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">1000</text><text x="125.2" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">2000</text><text x="174.8" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">3000</text><text x="224.4" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">4000</text><text x="274.0" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">5000</text><text x="22.0" y="187.4" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">1000</text><text x="22.0" y="147.8" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">2000</text><text x="22.0" y="108.2" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">3000</text><text x="22.0" y="68.6" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">4000</text><text x="22.0" y="29.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">5000</text><g clip-path="url(#cp22874)"><circle cx="75.6" cy="188.4" r="3.1" fill="currentColor"/><circle cx="90.5" cy="178.5" r="3.1" fill="currentColor"/><circle cx="110.3" cy="160.6" r="3.1" fill="currentColor"/><circle cx="125.2" cy="144.8" r="3.1" fill="currentColor"/><circle cx="150.0" cy="109.2" r="3.1" fill="currentColor"/><circle cx="174.8" cy="101.2" r="3.1" fill="currentColor"/><circle cx="204.6" cy="77.5" r="3.1" fill="currentColor"/><circle cx="234.3" cy="65.6" r="3.1" fill="currentColor"/></g><text x="26.0" y="14" font-size="11" font-style="italic" fill="currentColor" text-anchor="middle">y</text><text x="282.0" y="242" font-size="11" font-style="italic" fill="currentColor">x</text></svg><div>The scatterplot shows the relationship between two variables, <i>x</i> and <i>y</i>. Which of the following equations is the most appropriate model for the data shown?</div>`,
      options: [{ id: `A`, text: `y = −582 + 1.2x` }, { id: `B`, text: `y = 582 − 1.2x` }, { id: `C`, text: `y = −582(1.2)^x` }, { id: `D`, text: `y = 582(1.2)^x` }],
      answer: `A` },

    { id: `oub-math-m1-20`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `hard`, type: `grid`,
      prompt: `<div>The function <i>f</i> is defined by f(x) = (x − 8)(x − 5)(x − 3). In the xy-plane, the graph of y = g(x) is the result of translating the graph of y = f(x) up 3 units. What is the value of g(0)?</div>`,
      answer: [`-117`] },

    { id: `oub-math-m1-21`, domain: `Geometry and Trigonometry`, skill: `Circles`, difficulty: `hard`, type: `mcq`,
      prompt: `<div style='text-align:center;margin-bottom:6px'>(x + 3)<sup>2</sup> + (y − 18)<sup>2</sup> = 169</div><div>The graph of the given equation is a circle in the xy-plane. The point (<i>a</i>, <i>b</i>) lies on the circle. Which of the following is a possible value for <i>a</i>?</div>`,
      options: [{ id: `A`, text: `−17` }, { id: `B`, text: `−12` }, { id: `C`, text: `13` }, { id: `D`, text: `18` }],
      answer: `B` },

    { id: `oub-math-m1-22`, domain: `Geometry and Trigonometry`, skill: `Right triangles and trigonometry`, difficulty: `hard`, type: `grid`,
      prompt: `<svg viewBox="0 0 300 220" role="img" aria-label="right triangle" style="max-width:300px;width:100%;display:block;margin:6px auto"><polygon points="46,32 46,182 250,182" fill="none" stroke="currentColor" stroke-width="1.7"/><polyline points="46,169 59,169 59,182" fill="none" stroke="currentColor" stroke-width="1.1"/><text x="32" y="26" font-size="14" font-style="italic" fill="currentColor">A</text><text x="32" y="198" font-size="14" font-style="italic" fill="currentColor">C</text><text x="258" y="198" font-size="14" font-style="italic" fill="currentColor">B</text><text x="31" y="105" font-size="13" fill="currentColor" text-anchor="middle">12</text><text x="161" y="102" font-size="13" fill="currentColor" text-anchor="middle">24</text></svg><div class="tiny faint" style="text-align:center;margin:2px 0 8px">Right triangle ABC, right angle at C (bottom-left). A at top-left, B at bottom-right. Vertical leg AC = 12 (left side). Hypotenuse AB = 24 (the slanted top-right side). Note: figure not drawn to scale.</div><div>Right triangle <i>ABC</i> is shown. What is the value of sin <i>A</i>?</div>`,
      answer: [`0.866`, `.866`, `.8660`, `0.8660`] },
  ];

  const MATH_M2 = [
    { id: `oub-math-m2-1`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `easy`, type: `mcq`,
      prompt: `<div>The function <i>f</i> is defined by f(x) = 10x<sup>2</sup> − 38x − 150. What is the value of f(0)?</div>`,
      options: [{ id: `A`, text: `−150` }, { id: `B`, text: `−38` }, { id: `C`, text: `0` }, { id: `D`, text: `10` }],
      answer: `A` },

    { id: `oub-math-m2-2`, domain: `Algebra`, skill: `Linear inequalities in one or two variables`, difficulty: `easy`, type: `mcq`,
      prompt: `<div>A shopper goes to a pet store to buy dog food and treats. The shopper has $20. Each can of food costs $1.87, and each bag of treats costs $2.37. Which inequality represents the relationship between the number of cans of food, <i>c</i>, and the number of bags of treats, <i>t</i>, the shopper can buy?</div>`,
      options: [{ id: `A`, text: `1.87c + 2.37t ≤ 20` }, { id: `B`, text: `1.87c + 2.37t ≥ 20` }, { id: `C`, text: `2.37c + 1.87t ≤ 20` }, { id: `D`, text: `2.37c + 1.87t ≥ 20` }],
      answer: `A` },

    { id: `oub-math-m2-3`, domain: `Advanced Math`, skill: `Nonlinear equations in one variable`, difficulty: `hard`, type: `grid`,
      prompt: `<div style='text-align:center;margin-bottom:6px'>0 = (x − k)(7x + t) − (x − k)</div><div>In the given equation, <i>k</i> and <i>t</i> are positive constants. A solution to the equation is −22/7. What is the value of <i>t</i>?</div>`,
      answer: [`23`] },

    { id: `oub-math-m2-4`, domain: `Geometry and Trigonometry`, skill: `Lines, angles, and triangles`, difficulty: `medium`, type: `mcq`,
      prompt: `<svg viewBox="0 0 420 300" role="img" aria-label="figure" style="max-width:340px;width:100%;display:block;margin:6px auto"><line x1='60' y1='150' x2='340' y2='150' stroke='#111' stroke-width='1.5'/><text x='350' y='155' font-style='italic' font-size='15'>q</text><line x1='60' y1='235' x2='340' y2='235' stroke='#111' stroke-width='1.5'/><text x='350' y='240' font-style='italic' font-size='15'>r</text><line x1='120' y1='285' x2='300' y2='60' stroke='#111' stroke-width='1.5'/><text x='300' y='52' font-style='italic' font-size='15'>s</text><text x='232' y='140' font-size='13'>61°</text><text x='150' y='225' font-size='13'>y°</text></svg><div class="tiny faint" style="text-align:center;margin:2px 0 8px">Note: Figure not drawn to scale.</div><div>In the figure, line <i>q</i> is parallel to line <i>r</i>, and both lines are intersected by line <i>s</i>. If y = 2x + 9, what is the value of <i>x</i>?</div>`,
      options: [{ id: `A`, text: `26` }, { id: `B`, text: `35` }, { id: `C`, text: `55` }, { id: `D`, text: `65` }],
      answer: `C` },

    { id: `oub-math-m2-5`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `easy`, type: `mcq`,
      prompt: `<div>If f(x) = x + 2 and g(x) = 2x, what is the value of 6f(3) − g(3)?</div>`,
      options: [{ id: `A`, text: `−1` }, { id: `B`, text: `12` }, { id: `C`, text: `14` }, { id: `D`, text: `24` }],
      answer: `D` },

    { id: `oub-math-m2-6`, domain: `Algebra`, skill: `Systems of two linear equations in two variables`, difficulty: `medium`, type: `mcq`,
      prompt: `<div style='text-align:center;margin-bottom:6px'>y = 5x + 7<br>y = −4x − 11</div><div>The solution to the given system of equations is (<i>x</i>, <i>y</i>). What is the value of <i>y</i>?</div>`,
      options: [{ id: `A`, text: `−18` }, { id: `B`, text: `−4` }, { id: `C`, text: `−3` }, { id: `D`, text: `−2` }],
      answer: `C` },

    { id: `oub-math-m2-7`, domain: `Geometry and Trigonometry`, skill: `Area and volume`, difficulty: `medium`, type: `grid`,
      prompt: `<div>To study fluctuations in leaf water potential, samples of wood were taken from 27 trees and cut in the shape of a cube. The length of the edge of one of these cubes is 3.000 centimeters. This cube has a density of 0.170 grams per cubic centimeter. What is the mass of this cube, in grams?</div>`,
      answer: [`4.59`] },

    { id: `oub-math-m2-8`, domain: `Algebra`, skill: `Linear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>A plumbing company charges its customers $112 for the first hour of a plumbing service call and $40 for each additional hour, plus the cost of plumbing parts. Which equation represents the total cost <i>y</i>, in dollars, for an <i>x</i>-hour plumbing service call where the cost of parts was $<i>z</i> and x ≥ 1?</div>`,
      options: [{ id: `A`, text: `y = 40x + z` }, { id: `B`, text: `y = 40x + z + 72` }, { id: `C`, text: `y = 112x + z` }, { id: `D`, text: `y = 112x + 40z + 72` }],
      answer: `B` },

    { id: `oub-math-m2-9`, domain: `Geometry and Trigonometry`, skill: `Circles`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>Circle A has equation (x − 7)<sup>2</sup> + (y + 3)<sup>2</sup> = 1. In the xy-plane, circle B is obtained by translating circle A to the right 4 units. Which equation represents circle B?</div>`,
      options: [{ id: `A`, text: `(x − 7)² + (y + 7)² = 1` }, { id: `B`, text: `(x − 3)² + (y + 3)² = 1` }, { id: `C`, text: `(x − 11)² + (y + 3)² = 1` }, { id: `D`, text: `(x − 7)² + (y − 1)² = 1` }],
      answer: `C` },

    { id: `oub-math-m2-10`, domain: `Problem-Solving and Data Analysis`, skill: `Distributions and measures of center and spread`, difficulty: `hard`, type: `mcq`,
      prompt: `<table style="border-collapse:collapse;margin:6px auto"><tr><th style="border:1px solid var(--border);padding:3px 12px">Age (years)</th><th style="border:1px solid var(--border);padding:3px 12px">Number of stamps</th></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">75</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">18</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">80</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">12</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">85</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">6</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">90</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">5</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">95</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">10</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Total</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">51</td></tr></table><div>The table shows the distribution of the ages, in years, of the 51 stamps in Ari's original stamp collection. Ari will add a 135-year-old stamp to her original collection, creating a new collection of 52 stamps. Which statement correctly compares the mean and median ages of Ari's original and new collections?</div>`,
      options: [{ id: `A`, text: `The mean age for the new collection is greater than the mean age for the original collection, and the median age for the new collection is greater than the median age for the original collection.` }, { id: `B`, text: `The mean age for the new collection is greater than the mean age for the original collection, but the median age is the same for the original and new collections.` }, { id: `C`, text: `The mean age for the new collection is less than the mean age for the original collection, and the median age for the new collection is less than the median age for the original collection.` }, { id: `D`, text: `The median age for the new collection is greater than the median age for the original collection, but the mean age is the same for the original and new collections.` }],
      answer: `B` },

    { id: `oub-math-m2-11`, domain: `Problem-Solving and Data Analysis`, skill: `Linear equations in two variables`, difficulty: `hard`, type: `mcq`,
      prompt: `<svg viewBox="0 0 300 250" role="img" aria-label="line graph" style="max-width:340px;width:100%;display:block;margin:6px auto"><clipPath id="cp86677"><rect x="26.0" y="26.0" width="248.0" height="198.0"/></clipPath><line x1="26.0" y1="224.0" x2="26.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="57.0" y1="224.0" x2="57.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="88.0" y1="224.0" x2="88.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="119.0" y1="224.0" x2="119.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="150.0" y1="224.0" x2="150.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="181.0" y1="224.0" x2="181.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="212.0" y1="224.0" x2="212.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="243.0" y1="224.0" x2="243.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="274.0" y1="224.0" x2="274.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="224.0" x2="274.0" y2="224.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="195.7" x2="274.0" y2="195.7" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="167.4" x2="274.0" y2="167.4" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="139.1" x2="274.0" y2="139.1" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="110.9" x2="274.0" y2="110.9" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="82.6" x2="274.0" y2="82.6" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="54.3" x2="274.0" y2="54.3" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="26.0" x2="274.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="224.0" x2="274.0" y2="224.0" stroke="currentColor" stroke-width="1.4"/><line x1="26.0" y1="224.0" x2="26.0" y2="26.0" stroke="currentColor" stroke-width="1.4"/><text x="57.0" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">20</text><text x="88.0" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">40</text><text x="119.0" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">60</text><text x="150.0" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">80</text><text x="181.0" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">100</text><text x="212.0" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">120</text><text x="243.0" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">140</text><text x="274.0" y="235.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">160</text><text x="22.0" y="198.7" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">20</text><text x="22.0" y="170.4" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">40</text><text x="22.0" y="142.1" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">60</text><text x="22.0" y="113.9" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">80</text><text x="22.0" y="85.6" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">100</text><text x="22.0" y="57.3" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">120</text><text x="22.0" y="29.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">140</text><g clip-path="url(#cp86677)"><line x1="26.0" y1="26.0" x2="274.0" y2="224.0" stroke="currentColor" stroke-width="1.9"/><circle cx="26.0" cy="26.0" r="2.6" fill="currentColor"/><circle cx="274.0" cy="224.0" r="2.6" fill="currentColor"/></g></svg><div>A certain open star cluster contains M-type stars and K-type stars. The estimated total mass of M-type and K-type stars in this open star cluster is 129,492 quettagrams. The graph shown models the possible combinations of the number of M-type stars, <i>x</i>, and K-type stars, <i>y</i>, that could be in this open star cluster if all the M-type stars have the same estimated mass and all the K-type stars have the same estimated mass. Based on the graph, which of the following is closest to the estimated mass, in quettagrams, of each M-type star in this cluster?</div>`,
      options: [{ id: `A`, text: `830` }, { id: `B`, text: `959` }, { id: `C`, text: `55,622` }, { id: `D`, text: `73,870` }],
      answer: `A` },

    { id: `oub-math-m2-12`, domain: `Problem-Solving and Data Analysis`, skill: `Percentages`, difficulty: `medium`, type: `grid`,
      prompt: `<div>The positive number <i>a</i> is 3,700% of the number <i>c</i>, and <i>c</i> is 20% of the number <i>b</i>. If a − b = wc, where <i>w</i> is a constant, what is the value of <i>w</i>?</div>`,
      answer: [`32`] },

    { id: `oub-math-m2-13`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>An object is launched into the air from ground level. According to a quadratic model, 2.1 seconds after the object is launched, it reaches its maximum height of 70.56 feet above ground level. Which equation represents this model, where f(t) is the object's height, in feet, above ground level <i>t</i> seconds after it was launched?</div>`,
      options: [{ id: `A`, text: `f(t) = −16(t − 2.1)² + 70.56` }, { id: `B`, text: `f(t) = 16(t + 2.1)² + 70.56` }, { id: `C`, text: `f(t) = −16(t + 2.1)² + 70.56` }, { id: `D`, text: `f(t) = 16(t − 2.1)² + 70.56` }],
      answer: `A` },

    { id: `oub-math-m2-14`, domain: `Algebra`, skill: `Linear equations in one variable`, difficulty: `medium`, type: `mcq`,
      prompt: `<div>Which equation has no solution?</div>`,
      options: [{ id: `A`, text: `3(x − 1) = −3(−x + 1)` }, { id: `B`, text: `3(x − 1) = −3(−x − 1)` }, { id: `C`, text: `3(x − 1) = 4(x − 1)` }, { id: `D`, text: `3(x − 1) = 4(−x + 1)` }],
      answer: `B` },

    { id: `oub-math-m2-15`, domain: `Geometry and Trigonometry`, skill: `Area and volume`, difficulty: `hard`, type: `mcq`,
      prompt: `<div>The volume of a right rectangular prism with a square base is 539 cubic centimeters. If the area of each of the four lateral faces is 77 square centimeters, what is the height, in centimeters, of the prism?</div>`,
      options: [{ id: `A`, text: `77` }, { id: `B`, text: `49` }, { id: `C`, text: `11` }, { id: `D`, text: `7` }],
      answer: `C` },

    { id: `oub-math-m2-16`, domain: `Problem-Solving and Data Analysis`, skill: `Distributions and measures of center and spread`, difficulty: `medium`, type: `grid`,
      prompt: `<table style="border-collapse:collapse;margin:6px auto"><tr><th style="border:1px solid var(--border);padding:3px 12px">Number of birds</th><th style="border:1px solid var(--border);padding:3px 12px">Number of days</th></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">14</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">3</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">15</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">3</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">16</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">4</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">17</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">1</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">18</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">3</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">19</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">9</td></tr></table><div>A science class studied the feeding behavior of the birds that visited a bird feeder each school day for a period of time. The table summarizes the number of birds the class observed visiting the bird feeder each school day during this period of time. What is the median number of birds the class observed visiting the bird feeder each school day during this period of time?</div>`,
      answer: [`18`] },

    { id: `oub-math-m2-17`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `hard`, type: `mcq`,
      prompt: `<svg viewBox="0 0 300 250" role="img" aria-label="curve" style="max-width:340px;width:100%;display:block;margin:6px auto"><clipPath id="cp4453"><rect x="26.0" y="26.0" width="248.0" height="198.0"/></clipPath><line x1="26.0" y1="224.0" x2="26.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="67.3" y1="224.0" x2="67.3" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="108.7" y1="224.0" x2="108.7" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="150.0" y1="224.0" x2="150.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="191.3" y1="224.0" x2="191.3" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="232.7" y1="224.0" x2="232.7" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="274.0" y1="224.0" x2="274.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="224.0" x2="274.0" y2="224.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="195.7" x2="274.0" y2="195.7" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="167.4" x2="274.0" y2="167.4" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="139.1" x2="274.0" y2="139.1" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="110.9" x2="274.0" y2="110.9" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="82.6" x2="274.0" y2="82.6" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="54.3" x2="274.0" y2="54.3" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="26.0" x2="274.0" y2="26.0" stroke="currentColor" stroke-width="0.6" opacity="0.18"/><line x1="26.0" y1="167.4" x2="274.0" y2="167.4" stroke="currentColor" stroke-width="1.4"/><line x1="67.3" y1="224.0" x2="67.3" y2="26.0" stroke="currentColor" stroke-width="1.4"/><text x="108.7" y="178.4" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">1</text><text x="150.0" y="178.4" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">2</text><text x="191.3" y="178.4" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">3</text><text x="232.7" y="178.4" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">4</text><text x="274.0" y="178.4" font-size="9" fill="currentColor" opacity="0.8" text-anchor="middle">5</text><text x="63.3" y="142.1" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">2</text><text x="63.3" y="113.9" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">4</text><text x="63.3" y="85.6" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">6</text><text x="63.3" y="57.3" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">8</text><text x="63.3" y="29.0" font-size="9" fill="currentColor" opacity="0.8" text-anchor="end">10</text><g clip-path="url(#cp4453)"><polyline points="26.0,103.8 46.7,106.6 67.3,110.9 88.0,116.5 108.7,125.0 129.3,136.3 150.0,153.3 163.2,167.4 178.9,188.6 191.3,209.9 199.6,224.0" fill="none" stroke="currentColor" stroke-width="2"/></g></svg><div>The graph of y = f(x) + 2 is shown. Which equation defines function <i>f</i>?</div>`,
      options: [{ id: `A`, text: `f(x) = −2ˣ + 1` }, { id: `B`, text: `f(x) = −2ˣ + 3` }, { id: `C`, text: `f(x) = −2ˣ + 4` }, { id: `D`, text: `f(x) = −2ˣ + 5` }],
      answer: `B` },

    { id: `oub-math-m2-18`, domain: `Advanced Math`, skill: `Nonlinear functions`, difficulty: `hard`, type: `mcq`,
      prompt: `<div style='text-align:center;margin-bottom:6px'>f(x) = 5x<sup>2</sup> + 60x + 181</div><div>The function <i>g</i> is defined by g(x) = f(x + 8). What is the minimum value of g(x)?</div>`,
      options: [{ id: `A`, text: `−14` }, { id: `B`, text: `−6` }, { id: `C`, text: `1` }, { id: `D`, text: `9` }],
      answer: `C` },

    { id: `oub-math-m2-19`, domain: `Algebra`, skill: `Linear inequalities in one or two variables`, difficulty: `hard`, type: `grid`,
      prompt: `<div>In a set of four consecutive odd integers, where the integers are ordered from least to greatest, the first integer is represented by <i>x</i>. The product of 28 and the third odd integer in the set is at most the value of 50 less than the sum of the first and fourth odd integers in the set. What is the greatest possible value of <i>x</i>?</div>`,
      answer: [`-7`] },

    { id: `oub-math-m2-20`, domain: `Advanced Math`, skill: `Nonlinear equations in one variable`, difficulty: `hard`, type: `grid`,
      prompt: `<div style='text-align:center;margin-bottom:6px'>−2x<sup>2</sup> + bx − 32 = 0</div><div>In the given equation, <i>b</i> is a positive integer. The equation has no real solution. What is the largest possible value of <i>b</i>?</div>`,
      answer: [`15`] },

    { id: `oub-math-m2-21`, domain: `Advanced Math`, skill: `Exponential functions`, difficulty: `hard`, type: `mcq`,
      prompt: `<div>The functions <i>f</i> and <i>g</i> are defined by the equations shown, where <i>a</i> and <i>b</i> are integer constants, a &lt; b and b &lt; 0. If y = f(x) and y = g(x) are graphed in the xy-plane, which of the following equations displays, as a constant or coefficient, the y-coordinate of the y-intercept of the corresponding function?</div><div style='margin-top:6px'>I. f(x) = a(3.3)<sup>x + b</sup><br>II. g(x) = a(3.3)<sup>x</sup> + b</div>`,
      options: [{ id: `A`, text: `I only` }, { id: `B`, text: `II only` }, { id: `C`, text: `I and II` }, { id: `D`, text: `Neither I nor II` }],
      answer: `D` },

    { id: `oub-math-m2-22`, domain: `Advanced Math`, skill: `Nonlinear equations in one variable`, difficulty: `hard`, type: `grid`,
      prompt: `<div style='text-align:center;margin-bottom:6px'>1/(cx) = x/76 + 1/c</div><div>In the given equation, <i>c</i> is a constant. If the equation has exactly one solution, what is the value of <i>c</i>?</div>`,
      answer: [`-19`] },
  ];

  Apex.bank.register({
    id: "dsat-2024-10-us-b",
    title: "October 2024",
    type: "digital",
    region: "US",
    version: "B",
    year: 2024,
    monthNum: 10,
    tagline: "US · Version B",
    description: "Digital SAT — October 2024 US prediction form, Version B (RW reordered into official SAT test order; math ordered easy to hard).",
    adaptive: false,
    sections: [
      { id: "rw", modules: [
        { id: "oub-rw-m1", stage: 1, name: "Reading and Writing — Module 1", minutes: 32, questions: RW_M1 },
        { id: "oub-rw-m2", stage: 2, variant: "hard", name: "Reading and Writing — Module 2 (Hard)", minutes: 32, questions: RW_M2 },
      ] },
      { id: "math", modules: [
        { id: "oub-math-m1", stage: 1, name: "Math — Module 1", minutes: 35, calculator: true, questions: MATH_M1 },
        { id: "oub-math-m2", stage: 2, variant: "hard", name: "Math — Module 2 (Hard)", minutes: 35, calculator: true, questions: MATH_M2 },
      ] },
    ],
  });
})();
