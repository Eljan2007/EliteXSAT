/* ==========================================================================
   Digital SAT - August 2024 (US), Version A.
   Rebuilt in EliteXSAT's native UI from teacher-authored SAT-style prediction
   forms (2027 Aug USA). RW in canonical Digital SAT domain order; Math ordered
   easy -> hard. Solved independently; shared items validated vs the official
   北美A key. Math fully native.
   Both Module 2s are the Hard variant. No explanations. COMPLETE (98 q). */
(function () {
  const RW_M1 = [
    { id: `a8ua-rw-m1-1`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `easy`, type: `mcq`,
      passage: `Critical response to Malika Adeyemi&rsquo;s novel <em>The Salt Road</em> has been remarkably warm. A great many booksellers, teachers, and reviewers have ______ the book, which went on to earn the Carnegie Medal for Fiction.`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `attacked` }, { id: `B`, text: `overlooked` }, { id: `C`, text: `recommended` }, { id: `D`, text: `misunderstood` }],
      answer: `C` },

    { id: `a8ua-rw-m1-2`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `The following text is adapted from Mary Seacole&rsquo;s 1857 autobiography <em>Wonderful Adventures of Mrs. Seacole in Many Lands</em>.<br><br>That journey across the Isthmus [of Panama], insignificant in distance as it was, was by no means an easy one. It seemed as if nature had determined to throw every <u>conceivable</u> obstacle in the way of those who should seek to join the two great oceans of the world.`,
      prompt: `As used in the text, what does the word &ldquo;conceivable&rdquo; most nearly mean?`,
      options: [{ id: `A`, text: `Possible` }, { id: `B`, text: `Regular` }, { id: `C`, text: `Visible` }, { id: `D`, text: `Basic` }],
      answer: `A` },

    { id: `a8ua-rw-m1-3`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `easy`, type: `mcq`,
      passage: `<p>Off the western coast of North America, kelp forests rise through the water column. Such underwater groves matter greatly to fish and to many other sea creatures. Because currents there run strong and choppy, small animals struggle to find sheltered spots away from predators. By slowing those currents, the towering kelp produces a more ______ setting&mdash;calmer water in which creatures can take refuge.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `surprising` }, { id: `B`, text: `tranquil` }, { id: `C`, text: `imaginative` }, { id: `D`, text: `dangerous` }],
      answer: `B` },

    { id: `a8ua-rw-m1-4`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Clocking in at 200 seconds, the gamma-ray burst catalogued as GRB 230307A was ______ for a flash produced when two neutron stars merge. Such neutron-star mergers usually generate bursts that run shorter than 2 seconds.</p>`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `an incident` }, { id: `B`, text: `a reprieve` }, { id: `C`, text: `a coincidence` }, { id: `D`, text: `an oddity` }],
      answer: `D` },

    { id: `a8ua-rw-m1-5`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `<p>Pteropods are tiny swimming snails whose shells, made of thin, fragile calcium carbonate, are widely believed to be highly susceptible to ocean acidification, since calcium carbonate dissolves readily at lower pH. Yet Ingrid Sundqvist and her colleagues have now shown that an intact periostracum&mdash;the protective outer coating on a pteropod&rsquo;s shell&mdash;blocks that dissolution. More striking still, the team found that even after the periostracum is pierced, a pteropod can limit the harm by regrowing its inner shell wall.</p>`,
      prompt: `Which choice best describes the main purpose of the text?`,
      options: [{ id: `A`, text: `To urge that more research be done on the biological processes that help pteropods survive.` }, { id: `B`, text: `To describe several ways in which ocean acidification has changed how pteropods behave over time.` }, { id: `C`, text: `To lay out a conclusion from a study of how calcium carbonate protects a pteropod&rsquo;s periostracum.` }, { id: `D`, text: `To report findings suggesting that worries about how ocean acidification harms pteropod shells may be misplaced.` }],
      answer: `D` },

    { id: `a8ua-rw-m1-6`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `hard`, type: `mcq`,
      passage: `Copenhagen sees much foot traffic, yet merely copying one trait tied to that city&rsquo;s walkability&mdash;say, its dense street grid&mdash;may not be enough to get residents of other cities walking more. As the urban researcher Dario Fenn contends, we do not yet grasp well enough how people decide whether to walk: certain studies stress personal taste, others the sense of safety, and so forth, but the choice to walk unfolds in tangled settings where many needs and conditions shape what a person does.`,
      prompt: `Which choice best states the main purpose of the text?`,
      options: [{ id: `A`, text: `To describe the way a single dense street grid shapes the overall walkability of one particular city.` }, { id: `B`, text: `To advance a specific claim about the way people&rsquo;s decisions about walking might be improved over time.` }, { id: `C`, text: `To convey how hard it is to find a dependable way to increase walking in a given city.` }, { id: `D`, text: `To explain why comparing the levels of foot traffic seen across several different cities proves difficult.` }],
      answer: `C` },

    { id: `a8ua-rw-m1-7`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `hard`, type: `mcq`,
      passage: `Researchers Diego Marchetti, Lena Hoffmann, and Tom&aacute;s Rivera built a computer model to forecast which gyms, salons, and other businesses turn up in a given neighborhood. Because deciding what counts as a neighborhood and where its edges lie is subjective, the team applied a clustering algorithm to find dense clusters of amenities matching neighborhoods people recognize, like Boston&rsquo;s Central Square. Incorporating that algorithm, the predictive model is bound to prove invaluable for pinning down a city&rsquo;s ideal mix of amenities.`,
      prompt: `Which choice best describes the overall structure of the text?`,
      options: [{ id: `A`, text: `It lays out how an algorithm can forecast which businesses will thrive, gives an example of the algorithm in use, and floats possible uses in other fields.` }, { id: `B`, text: `It presents one research team&rsquo;s study of city neighborhoods, lays out a piece of the study&rsquo;s method, and points to a possible application of the work.` }, { id: `C`, text: `It recaps recent urban-development trends, names a problem facing urban planners, and proposes a computational tool to solve it.` }, { id: `D`, text: `It explains why urban planners care about where certain businesses sit, details a study addressing that, and names one key finding.` }],
      answer: `B` },

    { id: `a8ua-rw-m1-8`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `medium`, type: `mcq`,
      passage: `The following text is from a short story by Ramin Fadel. Kian, a teenager visiting relatives abroad for the summer, stands with his friend Reza at the entrance to the ruins of an ancient, long-abandoned city.<br><br>&ldquo;The great gateway,&rdquo; Reza said, waving a hand toward the carved stone beasts and the pillars around them. &ldquo;That is what they call it.&rdquo; It hardly worked as a gateway any longer&mdash;a traveler could walk around it as easily as pass through it. Still, the sight of the place took firm hold of Kian.<br><br>Past the great stone beasts, more columns rose from the bare earth like the trunks of a long-petrified forest, forty feet tall, impossibly thin and yet somehow still standing. Broken slabs of pale stone marked the ground where a magnificent hall must once have stood.`,
      prompt: `Which choice best states the main idea of the text?`,
      options: [{ id: `A`, text: `Kian has laid eyes on the columns before.` }, { id: `B`, text: `Kian is surprised at how much Reza knows about the ruins.` }, { id: `C`, text: `Kian is eager to know who raised the ancient city.` }, { id: `D`, text: `Kian is struck by the whole sight of the ruins.` }],
      answer: `D` },

    { id: `a8ua-rw-m1-9`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `hard`, type: `mcq`,
      passage: `The following text is from William Shakespeare&rsquo;s play <em>The Tempest</em>, first performed in 1611. Miranda has lived on an island with her father, Prospero, since she was three years old. Prospero has stated that Miranda likely does not remember anything other than her life on the island.<br><br>MIRANDA: &rsquo;Tis far off,<br>And rather like a dream than an assurance<br>That my remembrance warrants. Had I not<br>Four or five women once that tended me?<br><br>PROSPERO: Thou hadst, and more, Miranda. But how is it<br>That this lives in thy mind? What seest thou else<br>In the dark backward and abysm of time?<br>If thou remember&rsquo;st ought ere thou camest here,<br>How thou camest here thou mayst.`,
      prompt: `In the text, which point does Prospero most directly make about Miranda and her memories?`,
      options: [{ id: `A`, text: `Miranda&rsquo;s picture of the scene is hazy because she is recalling something she once daydreamed as a child rather than something that truly happened.` }, { id: `B`, text: `Miranda&rsquo;s uncertainty about one memory of a place besides the island is clouding her judgment and making her unwilling to probe her memory of the voyage there.` }, { id: `C`, text: `Miranda&rsquo;s memories of her earliest years carry a wistfulness that reveals her unhappiness with her present situation.` }, { id: `D`, text: `Because Miranda can call up what she went through before reaching the island, she may likewise be able to call up how she came to the island.` }],
      answer: `D` },

    { id: `a8ua-rw-m1-10`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `medium`, type: `mcq`,
      passage: `<div style='text-align:center;font-weight:600;font-size:12px;margin:2px 0'>Four Key Industries in the Manitoba Economy (2019)</div><table style='border-collapse:collapse;margin:6px auto'><tr><th style='border:1px solid var(--border);padding:3px 12px'>Industry</th><th style='border:1px solid var(--border);padding:3px 12px'>Approximate total contribution by industry</th><th style='border:1px solid var(--border);padding:3px 12px'>Number of people employed by industry</th><th style='border:1px solid var(--border);padding:3px 12px'>Average contribution per employee by industry</th></tr><tr><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>Food services</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>$4,980,200,000</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>146,210</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>$34,061</td></tr><tr><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>Indigenous economic activity</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>$6,905,700,000</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>49,320</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>$140,018</td></tr><tr><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>Manufacturing</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>$6,410,800,000</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>74,560</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>$85,982</td></tr><tr><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>Wholesale distribution</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>$9,884,500,000</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>55,180</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>$179,132</td></tr></table>The M&eacute;tis Nation and other Indigenous communities across Manitoba run a wide range of enterprises that together bring in billions of dollars each year. Hydroelectric power generation ranks among the province&rsquo;s leading industries as well. Researching several key industries in Manitoba for a course in economics, a student works out that the average sum added to the province&rsquo;s economy in 2019 by each person employed in wholesale distribution came to ______`,
      prompt: `Which choice most effectively uses data from the table to complete the statement?`,
      options: [{ id: `A`, text: `$140,018.` }, { id: `B`, text: `$179,132.` }, { id: `C`, text: `$146,210.` }, { id: `D`, text: `$74,560.` }],
      answer: `B` },

    { id: `a8ua-rw-m1-11`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `medium`, type: `mcq`,
      passage: `<em>Memoirs of Elleanor Eldridge</em>, a historical account published in 1838, a work of Elleanor Eldridge and Frances Harriet Whipple Green, argues that a person need not be famous at all to deserve a memoir, its two authors writing, _____`,
      prompt: `Which quotation from <em>Memoirs of Elleanor Eldridge</em> most effectively illustrates the claim?`,
      options: [{ id: `A`, text: `&ldquo;Then let no one turn with too much [fussiness] from the simple story of the humble Elleanor, though it may contain few, or none, of the thrilling charms of poetry and passion.&rdquo;` }, { id: `B`, text: `&ldquo;There is often a kind of [deceptive] light, playing around such [famous] names, calculated to dazzle and mislead, by their false lustre, until the eye can no longer receive the pure light of Truth, or the mind appreciate real excellence, or intrinsic worth.&rdquo;` }, { id: `C`, text: `&ldquo;It should not be considered essential to the interest and value of biography, that its subject be of exalted rank, or illustrious name.&rdquo;` }, { id: `D`, text: `&ldquo;How careful ought we to be to speak nothing but the truth, even in regard to the most trifling circumstances; and not only so, but to be well assured that what we suppose to be true, is <em>truth</em>, before we receive it as such.&rdquo;` }],
      answer: `C` },

    { id: `a8ua-rw-m1-12`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `<div style='text-align:center;font-weight:600;font-size:12px;margin:2px 0'>Annual Hours of Highway Delay per Commuter</div><table style='border-collapse:collapse;margin:6px auto'><tr><th style='border:1px solid var(--border);padding:3px 12px'>Year</th><th style='border:1px solid var(--border);padding:3px 12px'>Toronto, Ontario</th><th style='border:1px solid var(--border);padding:3px 12px'>Kingston, Ontario</th><th style='border:1px solid var(--border);padding:3px 12px'>Moncton, New Brunswick</th></tr><tr><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>1990</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>43</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>17</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>8</td></tr><tr><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>1992</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>45</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>18</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>11</td></tr><tr><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>1994</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>49</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>20</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>15</td></tr><tr><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>1996</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>54</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>22</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>16</td></tr><tr><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>1998</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>58</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>26</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>20</td></tr><tr><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>2000</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>62</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>29</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>23</td></tr></table>In a university seminar on urban affairs, a student contends that the rise in highway congestion during the 1990s showed up both in a very large metro area such as Toronto, Ontario, and in smaller places such as Kingston, Ontario, and Moncton, New Brunswick; though those smaller places may have suffered less congestion than the large metro area, their congestion still grew worse over time.`,
      prompt: `Which choice best describes data from the table that support the student&rsquo;s claim?`,
      options: [{ id: `A`, text: `For one of the three areas shown, delay dipped below 20 hours per commuter in at least one year from 1990 to 2000.` }, { id: `B`, text: `In 1992, delay in the Toronto area came to fewer than 30 hours per commuter for the year.` }, { id: `C`, text: `Although the yearly count of delay hours per commuter stayed consistently lower in the Kingston area than in the Toronto area in each year from 1990 through 2000, the number of delay hours nonetheless rose in both of these areas over the course of that period.` }, { id: `D`, text: `Even though delay per commuter ran higher in the Kingston area than in the Toronto area throughout 1990 to 2000, the two were nearly equal in 1996.` }],
      answer: `C` },

    { id: `a8ua-rw-m1-13`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `Earlier work indicates that pollination by honeybees accounts for as much as 10 percent of the total almond harvest. Researchers now hope to learn just how reliant blueberry production is on honeybees. In the first stage of their study, they covered some blueberry bushes so that insects could not pollinate them, and those covered bushes yielded 40 to 90 percent less fruit than bushes left to be pollinated as usual. The researchers stress, though, that this opening stage on its own could not reveal how much of that gap owes specifically to the loss of honeybees.`,
      prompt: `Which finding, if true, would most directly support the researchers&rsquo; claim?`,
      options: [{ id: `A`, text: `Other insects such as mason bees also pollinate almond trees, and some studies let them pollinate normally while keeping honeybees out.` }, { id: `B`, text: `Other insects such as bumblebees also pollinate blueberry bushes, and the covering used in the first stage kept them out too.` }, { id: `C`, text: `Honeybees are used more often to pollinate blueberry bushes than almond trees.` }, { id: `D`, text: `The covering used in the first stage did not change how much sunlight the blueberry bushes got.` }],
      answer: `B` },

    { id: `a8ua-rw-m1-14`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `medium`, type: `mcq`,
      passage: `The British professional soccer club Arsenal, whose home kit is mainly red, took over half of its home games in the years from 1947 to 2003&mdash;a higher share than the home games won across the very same span by Watford, a club whose own home kit is not red. A study by Martin J. Attrill and colleagues holds that the color red can make people react with fear and with hesitation&mdash;which the researchers themselves believe helps to account for Arsenal&rsquo;s strong record. When Nadav Goldschmied and colleagues reanalyzed that study&rsquo;s published data, though, they turned up no evidence that red-clad teams win more often than others, which suggests that Watford&rsquo;s home-match win rate _____`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `would probably have stayed about the same had its players worn red kits instead.` }, { id: `B`, text: `may have prompted other teams to switch their uniform colors.` }, { id: `C`, text: `was directly tied to how satisfied its players were with their kit color.` }, { id: `D`, text: `was likely shaped by what the color red meant to its players.` }],
      answer: `A` },

    { id: `a8ua-rw-m1-15`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `In 2000, Nevada ______ official fossil: the <em>Shonisaurus popularis</em>, a marine reptile of the Triassic period.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `lawmakers designated the states` }, { id: `B`, text: `lawmakers designated the state&rsquo;s` }, { id: `C`, text: `lawmaker&rsquo;s designated the state&rsquo;s` }, { id: `D`, text: `lawmaker&rsquo;s designated the states` }],
      answer: `B` },

    { id: `a8ua-rw-m1-16`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `Often anthologized beside the ______ tied to the Black Arts movement&mdash;writers like Jayne Cortez and Gwendolyn Brooks among them&mdash;bell hooks&rsquo;s poem &lsquo;Appalachian Elegy&rsquo; is prized for the quiet resolve of its final lines, in which a vow of mutual care takes plain and lasting shape.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `work&rsquo;s of other writer&rsquo;s` }, { id: `B`, text: `works of other writers` }, { id: `C`, text: `work&rsquo;s of other writers` }, { id: `D`, text: `works of other writer&rsquo;s` }],
      answer: `B` },

    { id: `a8ua-rw-m1-17`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `Within a compound, the part responsible for its color is ______ the chromophore. Hemoglobin, which lends human blood its red hue, is one well-known chromophore.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `called&mdash;` }, { id: `B`, text: `called;` }, { id: `C`, text: `called,` }, { id: `D`, text: `called` }],
      answer: `D` },

    { id: `a8ua-rw-m1-18`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `hard`, type: `mcq`,
      passage: `The AMD K5 microprocessor, which appeared in 1996, held a single CPU, or core, for carrying out instructions. Since then the typical processing power of chips has grown so dramatically&mdash;cores now come by the dozen, the hundred, or even ______ the once-groundbreaking dual-core design that succeeded the single-core chip turns up in everyday objects like toasters and toothbrushes.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `thousands, that` }, { id: `B`, text: `thousands that&mdash;` }, { id: `C`, text: `thousands&mdash;that` }, { id: `D`, text: `thousands. That` }],
      answer: `C` },

    { id: `a8ua-rw-m1-19`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `hard`, type: `mcq`,
      passage: `In the Silurian hypothesis, the astrophysicist Adam Frank, working with climatologist Gavin Schmidt, proposes that the geological record might hold evidence of advanced prehuman societies. That sensational framing hides their practical _____ Frank and Schmidt hold no such civilization existed; what they call a &ldquo;hypothesis&rdquo; is really a thought experiment about the marks our civilization will leave.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `aim, however,` }, { id: `B`, text: `aim, however;` }, { id: `C`, text: `aim. However,` }, { id: `D`, text: `aim: however,` }],
      answer: `B` },

    { id: `a8ua-rw-m1-20`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `<p>When an industry&mdash;water and electricity being two familiar cases&mdash;comes with steep infrastructural start-up costs and other hurdles that deter competition, ______ of only one or two providers in a single municipality. Industries like these are called natural monopolies.</p>`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `it often consists` }, { id: `B`, text: `they often consist` }, { id: `C`, text: `these often consist` }, { id: `D`, text: `this often consists` }],
      answer: `A` },

    { id: `a8ua-rw-m1-21`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `hard`, type: `mcq`,
      passage: `Counted among the mid-twentieth-century group called the New York School, the French abstract _____ was noted for vigorous brushwork and for seizing the frenzy and disorder of modern life.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `painter Louise Bourgeois` }, { id: `B`, text: `painter Louise Bourgeois,` }, { id: `C`, text: `painter, Louise Bourgeois` }, { id: `D`, text: `painter, Louise Bourgeois,` }],
      answer: `A` },

    { id: `a8ua-rw-m1-22`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `Scientists managed, back in 1817, to isolate a fairly pure sample of cadmium&mdash;the very year they first discovered the element. _____ the isolation process took a good deal longer for niobium, which was obtained in pure form only 63 years after its own discovery.`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `For instance,` }, { id: `B`, text: `Thus,` }, { id: `C`, text: `Similarly,` }, { id: `D`, text: `By contrast,` }],
      answer: `D` },

    { id: `a8ua-rw-m1-23`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `To order the Colville River system&rsquo;s branches by Hack&rsquo;s method, one starts from the lowest point of the riverway, the Colville River itself. _____ under Strahler&rsquo;s method one starts at the system&rsquo;s top, at the Okokmilaga River and the other tributaries fed from where the riverway rises, in Alaska&rsquo;s De Long Mountains.`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `Indeed,` }, { id: `B`, text: `Specifically,` }, { id: `C`, text: `In other words,` }, { id: `D`, text: `Alternatively,` }],
      answer: `D` },

    { id: `a8ua-rw-m1-24`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `While researching a topic, a student has taken the following notes:<ul><li>One historic gateway of note is Buland Darwaza.</li><li>It stands in the Indian city of Agra.</li><li>It is one of many Mughal Empire structures still standing.</li><li>The Mughal Empire was a realm of South Asia.</li><li>It endured from the early 1500s into the mid-1800s.</li></ul>`,
      prompt: `The student wants to specify the location of Buland Darwaza. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `Buland Darwaza, a historic gateway, is a Mughal Empire structure.` }, { id: `B`, text: `Buland Darwaza was raised by the Mughals, a South Asian dynasty that began in the early 1500s.` }, { id: `C`, text: `Buland Darwaza, raised by the Mughal Empire, dates to a dynasty whose rule ran from the early 1500s to the mid-1800s.` }, { id: `D`, text: `Buland Darwaza stands in the city of Agra, within the country of India.` }],
      answer: `D` },

    { id: `a8ua-rw-m1-25`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `While researching a topic, a student has taken the following notes:<ul><li>In his lifetime Antonio Stradivari (1644&ndash;1737) made about 1,000 violins.</li><li>His Stradivarius violins are prized by musicians for their famed sound quality.</li><li>Of the roughly 500 that survive today, many carry the name of an earlier owner.</li><li>The ex-Berglund Stradivarius honors Paavo Berglund, a violinist from Finland.</li></ul>`,
      prompt: `Which choice most effectively uses information from the given sentences to explain how the ex-Berglund Stradivarius got its name?`,
      options: [{ id: `A`, text: `The ex-Berglund Stradivarius takes its name from a former owner, Paavo Berglund.` }, { id: `B`, text: `Of the roughly 1,000 violins that Antonio Stradivari crafted, only about 500 are still around today.` }, { id: `C`, text: `Stradivarius violins such as the ex-Berglund, all designed by Antonio Stradivari, are prized for their quality.` }, { id: `D`, text: `Paavo Berglund was a violinist from Finland.` }],
      answer: `A` },

    { id: `a8ua-rw-m1-26`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `While researching a topic, a student has taken the following notes:<br><ul><li>Dorotea Lang was a painter who, over a long career, produced several hundred canvases.</li><li>Her painting <em>Northwind</em>, which she finished in 1979, was later sold at auction in the year 2009.</li><li><em>Northwind</em> combines acrylic, ink, and collage paper on canvas, and its total area comes to 5,400 square inches.</li><li>Her painting <em>Undertow</em>, which she finished in 1981, was later sold at auction in the year 2006.</li><li><em>Undertow</em> combines acrylic and ink on canvas, and its total area comes to 6,300 square inches.</li></ul>`,
      prompt: `Which choice most effectively uses information from the given sentences to emphasize how the two works are similar?`,
      options: [{ id: `A`, text: `Painted by Dorotea Lang in 1979 and 1981, respectively, <em>Northwind</em> and <em>Undertow</em> both rely on acrylic as their shared medium.` }, { id: `B`, text: `The artist Dorotea Lang finished <em>Northwind</em> in 1979, with <em>Undertow</em> following in 1981.` }, { id: `C`, text: `Dorotea Lang&rsquo;s <em>Northwind</em> combines acrylic, ink, and collage paper, whereas <em>Undertow</em> combines only acrylic and ink.` }, { id: `D`, text: `Of Dorotea Lang&rsquo;s two works <em>Undertow</em> and <em>Northwind</em>, it is <em>Undertow</em> that is larger.` }],
      answer: `A` },

    { id: `a8ua-rw-m1-27`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `While researching a topic, a student has taken the following notes:<br><ul><li>An onomatopoeia is a word made to echo the very sound it names.</li><li>Two languages will often spell and say their word for one sound in very unlike ways.</li><li>Part of what drives this is how differently the languages are put together.</li><li>&ldquo;Gari gari&rdquo; is the Japanese onomatopoeia for a crunching sound.</li><li>&ldquo;Krok krok&rdquo; is the Czech onomatopoeia for a crunching sound.</li></ul>`,
      prompt: `The student wants to contrast two words that represent the same sound. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `The Japanese &ldquo;gari gari&rdquo; and the Czech &ldquo;krok krok&rdquo; are both onomatopoeias for a crunching sound.` }, { id: `B`, text: `Both stand for a crunching sound, yet the onomatopoeias &ldquo;gari gari&rdquo; (Japanese) and &ldquo;krok krok&rdquo; (Czech) look and sound quite unlike each other.` }, { id: `C`, text: `An onomatopoeia, a word that echoes the sound it names, can look and sound very different across languages.` }, { id: `D`, text: `The Japanese &ldquo;gari gari,&rdquo; standing for a crunching sound, is an onomatopoeia.` }],
      answer: `B` },
    ];

  const RW_M2 = [
    { id: `a8ua-rw-m2-1`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `easy`, type: `mcq`,
      passage: `Many tablets and other compact gadgets rely on batteries that users cannot readily remove and swap out for new ones. The sustainability scholar Priya Nandakumar cautions that once such built-in batteries fail, the whole device is typically discarded, turning into hazardous ______.`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `advice` }, { id: `B`, text: `waste` }, { id: `C`, text: `rewards` }, { id: `D`, text: `positions` }],
      answer: `B` },

    { id: `a8ua-rw-m2-2`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `The following text is adapted from Kenneth Grahame&rsquo;s 1908 novel <em>The Wind in the Willows</em>. The Mole has been found by a friend after getting lost in the woods. It is beginning to snow.<br><br>The Mole saw the wood that had been so dreadful to him in quite a changed aspect. Holes, hollows, pools, pitfalls, and other menaces to the wayfarer were vanishing fast, and a gleaming carpet was springing up everywhere, that looked too <u>delicate</u> to be trodden upon by rough feet.`,
      prompt: `As used in the text, what does the word &ldquo;delicate&rdquo; most nearly mean?`,
      options: [{ id: `A`, text: `Generous` }, { id: `B`, text: `Fragile` }, { id: `C`, text: `Accurate` }, { id: `D`, text: `Empty` }],
      answer: `B` },

    { id: `a8ua-rw-m2-3`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `Wang Zhenyi, remembered as an early scholar who explained the workings of lunar eclipses, and Rukhsana Devi, the first to describe a rare orchid genus, are assured of lasting places in our shared memory. No matter what anyone may accomplish in the years ahead, no one can ever ______ what these women earned as the first to achieve such things.`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `undermine` }, { id: `B`, text: `imply` }, { id: `C`, text: `extend` }, { id: `D`, text: `promote` }],
      answer: `A` },

    { id: `a8ua-rw-m2-4`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `However audiences first reacted to Kira Vasquez&rsquo;s 1971 documentary <em>Long Road Home</em> and to Theo Adeyemi&rsquo;s 1991 comedy <em>Block Party Nights</em> when the two films first opened in theaters, both are now regarded quite ______. In 2019, for instance, reviewers writing for the <em>Guardian</em> hailed the former as &lsquo;stirring&rsquo; and the latter as &lsquo;joyous.&rsquo;`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `favorably` }, { id: `B`, text: `skeptically` }, { id: `C`, text: `neutrally` }, { id: `D`, text: `strangely` }],
      answer: `A` },

    { id: `a8ua-rw-m2-5`, domain: `Craft and Structure`, skill: `Words in Context`, difficulty: `medium`, type: `mcq`,
      passage: `To test their theories about the climate of the Miocene epoch, paleoclimatologists must rely on ______ evidence. Only tangible objects&mdash;such as the fossilized leaves catalogued as specimen KNM-77, unearthed in Kenya in 1981&mdash;can reveal whether a given theory about the Miocene holds up.`,
      prompt: `Which choice completes the text with the most logical and precise word or phrase?`,
      options: [{ id: `A`, text: `physical` }, { id: `B`, text: `convenient` }, { id: `C`, text: `creative` }, { id: `D`, text: `inconclusive` }],
      answer: `A` },

    { id: `a8ua-rw-m2-6`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `medium`, type: `mcq`,
      passage: `Amara Diallo&rsquo;s acclaimed play <em>The Harmattan Road</em> premiered in 1974 with the pioneering Sahel Theatre Collective (STC). STC&rsquo;s cofounder Ousmane B&acirc;, <u>himself a performer, a director, and a writer of plays,</u> had met the producer Lila Sarr while the two appeared in a 1961 touring staging of Wole Soyinka&rsquo;s play <em>The Lion and the Jewel</em>. Together they imagined a company that would develop and spotlight the work of African theatre artists. Since STC opened in 1968, its workshops and productions have offered African playwrights, Diallo among them, a stage for their gripping stories.`,
      prompt: `Which choice best describes the function of the underlined portion in the text as a whole?`,
      options: [{ id: `A`, text: `It points to the significance of an organization named in the text.` }, { id: `B`, text: `It weighs the accomplishments of two figures introduced later on.` }, { id: `C`, text: `It disputes a claim put forward earlier in the passage.` }, { id: `D`, text: `It supplies further detail about an individual the text discusses.` }],
      answer: `D` },

    { id: `a8ua-rw-m2-7`, domain: `Craft and Structure`, skill: `Text Structure and Purpose`, difficulty: `hard`, type: `mcq`,
      passage: `Rachel Okonkwo and colleagues found that bright moonlight suppresses the activity of the Indian desert jird (<em>Meriones hurrianae</em>), a result they read through costs and benefits: brighter moonlight may not boost the jird&rsquo;s foraging enough to make up for the raised risk of being spotted by owls or foxes. While many other night-active mammals answer changes in moonlight much as the jird does, the northern lesser galago (<em>Galago senegalensis</em>) shows the reverse, since its <u>strong dependence on sight while foraging</u> yields a different balance of gain and danger.`,
      prompt: `Which choice best describes the function of the reference to &ldquo;heavy reliance on visual foraging&rdquo; in the text as a whole?`,
      options: [{ id: `A`, text: `It emphasizes a trait of northern lesser galagos that lets them respond to shifts in moonlight faster than Indian desert jirds and many other night-active mammals do.` }, { id: `B`, text: `It names a trait of northern lesser galagos that accounts for their failure to cut back activity under bright moonlight as Indian desert jirds and many other night-active mammals do.` }, { id: `C`, text: `It describes a behavior of northern lesser galagos that does not match how a costs-and-benefits view would expect them to react to bright moonlight.` }, { id: `D`, text: `It offers a trait of northern lesser galagos as evidence that Indian desert jirds are not the only night-active mammals whose activity bright moonlight suppresses.` }],
      answer: `B` },

    { id: `a8ua-rw-m2-8`, domain: `Craft and Structure`, skill: `Cross-Text Connections`, difficulty: `hard`, type: `mcq`,
      passage: `<strong>Text 1</strong><br>Isaac Asimov, who wrote <em>The Caves of Steel</em> and <em>The Stars, Like Dust</em>, enjoys high regard despite an unremarkable prose style. His sentences are serviceable; <u>his characters are flat</u> and trade in concepts rather than feelings. That the books delight us anyway testifies to his enormous inventiveness&mdash;even a reader who comes only for the ideas will find no shortage to turn over.<br><br><strong>Text 2</strong><br>Asimov is faulted for his style, but blaming a writer for not doing what he never set out to do is a mistake. Though most of <em>Foundation</em>, say, consists of people talking over science and politics&mdash;and we learn little of the characters&rsquo; inner lives&mdash;Asimov meant to capture the enormous span of human history across centuries, and part of his point is that on such a scale the individual scarcely matters. His thin characterization is thus essential to what the book aims to say.`,
      prompt: `Based on the texts, how would the author of Text 2 most likely respond to the description of Asimov&rsquo;s characters in the underlined portion of Text 1?`,
      options: [{ id: `A`, text: `Asimov&rsquo;s characters would have been richer had he understood history more deeply.` }, { id: `B`, text: `The flatness of Asimov&rsquo;s characters shows up in <em>The Caves of Steel</em> and <em>The Stars, Like Dust</em>, though not in <em>Foundation</em>.` }, { id: `C`, text: `The flatness of Asimov&rsquo;s characters need not be counted as a defect in his work.` }, { id: `D`, text: `Asimov&rsquo;s characters would have seemed more believable had his writing taken up fewer ideas.` }],
      answer: `C` },

    { id: `a8ua-rw-m2-9`, domain: `Information and Ideas`, skill: `Central Ideas and Details`, difficulty: `medium`, type: `mcq`,
      passage: `Many creatures put objects to use as tools to reach their aims more easily, whether to groom themselves, to gather food, or to fend off danger. People once held that only primates were capable of this. Yet sea otters and other animals have upended that belief. Sea otters, for one, cleverly rest a shellfish on a fixed anvil stone and strike it open, and woodpecker finches prove just as resourceful, working cactus spines into crevices to lever out insects.`,
      prompt: `Which choice best states the main idea of the text?`,
      options: [{ id: `A`, text: `Animals find it hard to put objects to use as tools.` }, { id: `B`, text: `Sea otters, unlike primates, are remarkably skilled with a range of tools.` }, { id: `C`, text: `Despite what was long believed, primates are not the only animals that use tools.` }, { id: `D`, text: `A number of myths about tool use are only now being questioned by researchers.` }],
      answer: `C` },

    { id: `a8ua-rw-m2-10`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `medium`, type: `mcq`,
      passage: `<div style='text-align:center;font-weight:600;font-size:12px;margin:2px 0'>Notable Home Computer and Console Games of the 1980s</div><table style='border-collapse:collapse;margin:6px auto'><tr><th style='border:1px solid var(--border);padding:3px 12px'>Title</th><th style='border:1px solid var(--border);padding:3px 12px'>Approximate number of units sold worldwide</th><th style='border:1px solid var(--border);padding:3px 12px'>Release year</th><th style='border:1px solid var(--border);padding:3px 12px'>Genre</th><th style='border:1px solid var(--border);padding:3px 12px'>Developer</th></tr><tr><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>Sky Runner</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>3,940,000</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>1985</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>racing</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>Aurora Works</td></tr><tr><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>Shadow Keep II</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>5,210,000</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>1988</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>action-adventure</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>Meridian Soft</td></tr><tr><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>Cavern Quest</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>4,270,000</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>1986</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>action-adventure</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>Lumen Studios</td></tr><tr><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>Leap Frog Rally</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>4,050,000</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>1983</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>action</td><td style='border:1px solid var(--border);padding:3px 12px;text-align:center'>Kestrel Games</td></tr></table>For a paper on how home gaming spread around the world during the 1980s, a student needs the release year of <em>Cavern Quest</em>, a game developed by Lumen Studios. The student finds that it first appeared in ______`,
      prompt: `Which choice most effectively uses data from the table to complete the statement?`,
      options: [{ id: `A`, text: `1983.` }, { id: `B`, text: `1986.` }, { id: `C`, text: `1985.` }, { id: `D`, text: `1988.` }],
      answer: `B` },

    { id: `a8ua-rw-m2-11`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `<p>A film-studies student is researching the early-twentieth-century film serial, a form in which the episodes of one long story were shown one week at a time in movie theaters. <em>Riders of the Frost Line</em> is a 1933 serial whose 12 episodes held their audiences with the suspense and drama typical of the northern-adventure genre of that era. The student argues, though, that audiences of the day ultimately preferred resolution and closure to ongoing tension.</p>`,
      prompt: `Which finding, if true, would most directly support the student&rsquo;s claim?`,
      options: [{ id: `A`, text: `The 12th episode of <em>Riders of the Frost Line</em> was the most expensive in the series to produce.` }, { id: `B`, text: `The 12th episode of <em>Riders of the Frost Line</em> drew more viewers than any earlier episode had.` }, { id: `C`, text: `Modern critics generally rate the first episode the best installment of <em>Riders of the Frost Line</em>.` }, { id: `D`, text: `Audiences of the day placed <em>Riders of the Frost Line</em> outside the northern-adventure genre altogether.` }],
      answer: `B` },

    { id: `a8ua-rw-m2-12`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `medium`, type: `mcq`,
      passage: `<em>Treasure Island</em>, published in 1883, is a novel by Robert Louis Stevenson. In it the narrator recalls the seaside inn his father kept, where a strange old sailor lodged. The boy&rsquo;s terror of the man is clear in his own words: ______`,
      prompt: `Which quotation from <em>Treasure Island</em> most effectively illustrates the claim?`,
      options: [{ id: `A`, text: `&ldquo;How [the sailor] haunted my dreams, I need scarcely tell you. On stormy nights, when the wind shook the four corners of the house and the surf roared along the cove and up the cliffs, I would see him in a thousand forms, and with a thousand diabolical expressions.&rdquo;` }, { id: `B`, text: `&ldquo;I remember [the sailor] as if it were yesterday, as he came plodding to the inn door, his sea-chest following behind him in a hand-barrow.&rdquo;` }, { id: `C`, text: `&ldquo;[The sailor] was a very silent man by custom. All day he hung round the cove or upon the cliffs with a brass telescope.&rdquo;` }, { id: `D`, text: `&ldquo;All the time he lived with us [the sailor] made no change whatever in his dress but to buy some stockings from a hawker. One of the [corners] of his hat having fallen down, he let it hang from that day forth, though it was a great annoyance when it blew.&rdquo;` }],
      answer: `A`, pdOptions: true },

    { id: `a8ua-rw-m2-13`, domain: `Information and Ideas`, skill: `Command of Evidence`, difficulty: `hard`, type: `mcq`,
      passage: `Students in a biology class set out to learn why individual zebrafish (<em>Danio rerio</em>) differ from one another in how prone they are to fin degeneration as they grow older. They compared wild-type fish against knockout fish&mdash;fish that have had particular genes switched off&mdash;raising both groups in similar naturalistic tanks and checking them at regular intervals for signs of fin damage. Because the knockouts with the gene <em>Fnd2</em> switched off tended to show fin degeneration more often than the wild-type fish did, the students concluded that how often wild zebrafish suffer fin degeneration comes down entirely to variation in how strongly <em>Fnd2</em> is expressed.`,
      prompt: `Which finding, if true, would most directly weaken the students&rsquo; conclusion?`,
      options: [{ id: `A`, text: `Some wild-type fish closely matched the knockouts in how often fin degeneration occurred yet varied widely in how strongly they expressed <em>Fnd2</em>.` }, { id: `B`, text: `How strongly <em>Fnd2</em> is expressed seems to have no bearing on how any other genes in zebrafish work.` }, { id: `C`, text: `A sample of zebrafish taken from natural waters shows that individuals can differ in how strongly they express <em>Fnd2</em>.` }, { id: `D`, text: `The fish with <em>Fnd2</em> switched off were identical to the wild-type fish except in how often fin degeneration occurred.` }],
      answer: `A` },

    { id: `a8ua-rw-m2-14`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `medium`, type: `mcq`,
      passage: `The saiga antelope, a small and ancient grazer, roams the dry grassy steppes of Central Asia in large migrating herds. Some saigas carry an unusually enlarged, downward-drooping nose that is richly threaded with blood vessels, yet a great many individuals never develop this feature, and its exact purpose remains uncertain. One team of researchers proposed in 2016 that the swollen nose may serve to warm and to filter the frigid, dust-laden air the animals draw in during the harsh winter months. The zoologist Marta Kowalczyk is unconvinced, however. To her mind, if the saiga&rsquo;s nose truly served so vital a purpose, then it is most likely that ______`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `some saigas would seek out a new habitat.` }, { id: `B`, text: `more saigas would have the enlarged nose.` }, { id: `C`, text: `fewer other mammals would also have large noses.` }, { id: `D`, text: `saigas would grow bolder over time.` }],
      answer: `B` },

    { id: `a8ua-rw-m2-15`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `More than 300 languages are spoken across the city of Melbourne alongside English&mdash;a visitor might well hear Hazaragi in the suburb of Dandenong, say, or Amharic over in the streets of Footscray. Most of the city&rsquo;s Vietnamese speakers make their homes in Richmond and in Springvale, two neighbourhoods off in the city&rsquo;s southeast. Newcomers arriving from northern Vietnam, where one regional dialect prevails, have tended to gather in Richmond, whereas those arriving from the south, where a different dialect is widely spoken, have tended to settle instead in Springvale, some distance off. One can thus reasonably conclude that ______`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `languages change faster in areas of great linguistic variety than in areas of little.` }, { id: `B`, text: `the links a country shows between its languages and the regions that speak them can reappear in a new country its people move to.` }, { id: `C`, text: `languages carried by immigrants can sound and read quite differently from the versions spoken back home.` }, { id: `D`, text: `there is a positive relationship between a country&rsquo;s land area and how many languages its people speak.` }],
      answer: `B` },

    { id: `a8ua-rw-m2-16`, domain: `Information and Ideas`, skill: `Inferences`, difficulty: `hard`, type: `mcq`,
      passage: `Because F. Scott Fitzgerald&rsquo;s 1920 novel <em>This Side of Paradise</em> borrows so much from the writer&rsquo;s own life and experience&mdash;its hero, Amory Blaine, mirrors the young Fitzgerald at many turns&mdash;the book is routinely and confidently labeled an autobiographical novel. The label has its uses, but it also carries a real cost for how the work is received: it can lead readers to assume that Fitzgerald did little more than dress up true events from his life, an assumption that, in an art form that prizes invention and originality, tends to imply that ______`,
      prompt: `Which choice most logically completes the text?`,
      options: [{ id: `A`, text: `<em>This Side of Paradise</em> is a lesser feat of imagination than it truly is.` }, { id: `B`, text: `Fitzgerald ought not to have said that <em>This Side of Paradise</em> drew on real events.` }, { id: `C`, text: `critics are divided over whether <em>This Side of Paradise</em> is more original than books without autobiographical content.` }, { id: `D`, text: `the real-life models for the novel&rsquo;s other characters are difficult to identify.` }],
      answer: `A` },

    { id: `a8ua-rw-m2-17`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `Vincent van Gogh&rsquo;s drawing <em>Behind the Hedge</em>, finished in 1886, draws far less notice than his ______ scholars still regard it as an important work.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `paintings, but` }, { id: `B`, text: `paintings,` }, { id: `C`, text: `paintings` }, { id: `D`, text: `paintings but` }],
      answer: `A` },

    { id: `a8ua-rw-m2-18`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `On the other hand, Heydar Aliyev International Airport, which ______ located in Baku, Azerbaijan, recorded an overall rise in departing passengers across the same period, climbing from 3,912,455 total passengers to 4,884,207.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `is` }, { id: `B`, text: `are` }, { id: `C`, text: `were` }, { id: `D`, text: `have been` }],
      answer: `A` },

    { id: `a8ua-rw-m2-19`, domain: `Standard English Conventions`, skill: `Boundaries`, difficulty: `medium`, type: `mcq`,
      passage: `As Anglo and African American settlers moved westward in the 1800s to take up cattle ranching, they picked up the craft from Spanish-speaking Mexican <em>vaqueros</em> (cowboys). That is why so many ranching words trace back to ______ the English word &lsquo;lasso&rsquo; (a rope) descends from the Spanish <em>lazo</em>, and &lsquo;cinch&rsquo; (a strap) from <em>cincho</em>.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `Spanish. The` }, { id: `B`, text: `Spanish (the` }, { id: `C`, text: `Spanish the` }, { id: `D`, text: `Spanish? The` }],
      answer: `A` },

    { id: `a8ua-rw-m2-20`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `That numerous even-toed ungulates&mdash;among them the Visayan warty pig (<em>Sus cebifrons</em>) and the mountain anoa (<em>Bubalus quarlesi</em>)&mdash;now meet the population thresholds for endangered status underscores the need for measures that can spare ______ the fate of the already extinct.`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `the animal` }, { id: `B`, text: `these animals` }, { id: `C`, text: `this animal&rsquo;s` }, { id: `D`, text: `these animals&rsquo;` }],
      answer: `B` },

    { id: `a8ua-rw-m2-21`, domain: `Standard English Conventions`, skill: `Form, Structure, and Sense`, difficulty: `medium`, type: `mcq`,
      passage: `At sea level water boils near 212&deg;F, but in Leadville, Colorado (which sits 10,151 feet up), it boils at only about 192&deg;F. The food writer J. Kenji L&oacute;pez-Alt, someone who digs into the science behind cooking, ______ that the lower boiling points found in high-altitude kitchens &ldquo;can wreak all sorts of havoc on recipes.&rdquo;`,
      prompt: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [{ id: `A`, text: `explains` }, { id: `B`, text: `are explaining` }, { id: `C`, text: `explain` }, { id: `D`, text: `have explained` }],
      answer: `A` },

    { id: `a8ua-rw-m2-22`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `Unlike dimples, a number of inherited visible traits, or phenotypes, can shift over time for a variety of reasons. ______ a person&rsquo;s eye color can change with age.`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `For example,` }, { id: `B`, text: `Finally,` }, { id: `C`, text: `Conversely,` }, { id: `D`, text: `In any case,` }],
      answer: `A` },

    { id: `a8ua-rw-m2-23`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `New York, which already designates an official flower, an official tree, and an official bird, likewise names an official soil: Honeoye. That Honeoye earns the title owes largely to how plentiful it is in fields and farmland all across the state. ______ the soil does real and steady work in New York&rsquo;s farming economy, helping to raise a range of crops as varied as corn and soybeans.`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `At that time,` }, { id: `B`, text: `Alternatively,` }, { id: `C`, text: `Conversely,` }, { id: `D`, text: `Moreover,` }],
      answer: `D` },

    { id: `a8ua-rw-m2-24`, domain: `Expression of Ideas`, skill: `Transitions`, difficulty: `medium`, type: `mcq`,
      passage: `About once an hour, a column of boiling water bursts more than 100 feet into the air from the Old Faithful geyser in Yellowstone before dropping back down&mdash;conditions that seem hostile to life. ______ the microbiologist Eric Boyd calls the geyser &ldquo;almost like a cradle for biodiversity,&rdquo; a home to many bacteria that flourish in its sulfurous water.`,
      prompt: `Which choice completes the text with the most logical transition?`,
      options: [{ id: `A`, text: `Thus,` }, { id: `B`, text: `Still,` }, { id: `C`, text: `Specifically,` }, { id: `D`, text: `In other words,` }],
      answer: `B` },

    { id: `a8ua-rw-m2-25`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `hard`, type: `mcq`,
      passage: `While researching a topic, a student has taken the following notes:<br><ul><li>A large body slamming into Earth at tremendous speed can blast out an impact crater.</li><li>Comets and meteorites are among the bodies that do this.</li><li>One such crater, called Lonar, lies in India.</li><li>Scientists estimate that it took shape less than 50,000 years ago.</li><li>Across its rim, Lonar measures roughly 1.8 km wide.</li></ul>`,
      prompt: `Which choice most effectively uses information from the given sentences to emphasize the size of the crater?`,
      options: [{ id: `A`, text: `Long ago, the crater now called Lonar was formed when a large body struck the Earth.` }, { id: `B`, text: `Impact craters, such as India&rsquo;s Lonar, form when a massive body hits the Earth, leaving depressions in the ground.` }, { id: `C`, text: `Researchers have looked into the origin of Lonar, an ancient impact crater about 1.8 km across located in India.` }, { id: `D`, text: `When a large body struck what is now India less than 50,000 years ago, it gouged out Lonar, a huge crater roughly 1.8 km wide.` }],
      answer: `D` },

    { id: `a8ua-rw-m2-26`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `While researching a topic, a student has taken the following notes:<br><ul><li>The short story &ldquo;Marisol&rsquo;s Kite&rdquo; comes from the author Renata Cruz.</li><li>Cruz first published it in her 1979 collection <em>City of Salt</em>.</li><li>The story unfolds in the first person.</li><li>Its setting is the city of San Juan.</li></ul>`,
      prompt: `The student wants to indicate where the short story takes place. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `&ldquo;Marisol&rsquo;s Kite&rdquo; takes place in San Juan.` }, { id: `B`, text: `&ldquo;Marisol&rsquo;s Kite&rdquo; was written by Renata Cruz.` }, { id: `C`, text: `&ldquo;Marisol&rsquo;s Kite&rdquo; appeared in <em>City of Salt</em>.` }, { id: `D`, text: `&ldquo;Marisol&rsquo;s Kite&rdquo; is told from a first-person point of view.` }],
      answer: `A` },

    { id: `a8ua-rw-m2-27`, domain: `Expression of Ideas`, skill: `Rhetorical Synthesis`, difficulty: `medium`, type: `mcq`,
      passage: `While researching a topic, a student has taken the following notes:<br><ul><li>A Nile monitor is a species of lizard.</li><li>It can be found across much of sub-Saharan Africa.</li><li>The Nile monitor mainly eats fish, eggs, and small animals.</li><li>Its average length comes to about 5 feet.</li></ul>`,
      prompt: `The student wants to specify the average length of the green iguana. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [{ id: `A`, text: `The Nile monitor is a lizard that mainly eats fish, eggs, and small animals.` }, { id: `B`, text: `One species of lizard found in Africa mainly eats fish and eggs.` }, { id: `C`, text: `The Nile monitor can be found across much of sub-Saharan Africa.` }, { id: `D`, text: `The Nile monitor has an average length of 5 feet.` }],
      answer: `D` },
    ];

  const MATH_M1 = [
    { id: `a8ua-math-m1-1`, domain: `Math`, skill: `Advanced Math`, difficulty: `easy`, type: `mcq`,
      prompt: `&radic;(2<em>x</em> + 19) = 5<br><br>What is the solution to the equation shown?`,
      options: [{ id: `A`, text: `22` }, { id: `B`, text: `12` }, { id: `C`, text: `3` }, { id: `D`, text: `&minus;7` }],
      answer: `C` },

    { id: `a8ua-math-m1-2`, domain: `Math`, skill: `Advanced Math`, difficulty: `easy`, type: `mcq`,
      prompt: `The function <em>f</em> is defined by <em>f</em>(<em>x</em>) = 5<em>x</em><sup>2</sup>. What is the value of <em>f</em>(6)?`,
      options: [{ id: `A`, text: `30` }, { id: `B`, text: `40` }, { id: `C`, text: `60` }, { id: `D`, text: `180` }],
      answer: `D` },

    { id: `a8ua-math-m1-3`, domain: `Math`, skill: `Problem-Solving and Data Analysis`, difficulty: `medium`, type: `mcq`,
      prompt: `<svg viewBox="0 0 330 278" role="img" aria-label="figure" style="max-width:330px;width:100%;display:block;margin:6px auto"><line x1='85.8' y1='224.0' x2='85.8' y2='18.0' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='117.5' y1='224.0' x2='117.5' y2='18.0' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='149.2' y1='224.0' x2='149.2' y2='18.0' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='181.0' y1='224.0' x2='181.0' y2='18.0' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='212.8' y1='224.0' x2='212.8' y2='18.0' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='244.5' y1='224.0' x2='244.5' y2='18.0' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='276.2' y1='224.0' x2='276.2' y2='18.0' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='308.0' y1='224.0' x2='308.0' y2='18.0' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='54.0' y1='198.2' x2='308.0' y2='198.2' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='54.0' y1='172.5' x2='308.0' y2='172.5' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='54.0' y1='146.8' x2='308.0' y2='146.8' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='54.0' y1='121.0' x2='308.0' y2='121.0' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='54.0' y1='95.2' x2='308.0' y2='95.2' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='54.0' y1='69.5' x2='308.0' y2='69.5' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='54.0' y1='43.8' x2='308.0' y2='43.8' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='54.0' y1='18.0' x2='308.0' y2='18.0' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='54.0' y1='224.0' x2='54.0' y2='18.0' stroke='currentColor' stroke-width='1.6'/><line x1='54.0' y1='224.0' x2='308.0' y2='224.0' stroke='currentColor' stroke-width='1.6'/><text x='85.8' y='238.0' font-size='9' text-anchor='middle' fill='currentColor' fill-opacity='0.85'>1</text><text x='117.5' y='238.0' font-size='9' text-anchor='middle' fill='currentColor' fill-opacity='0.85'>2</text><text x='149.2' y='238.0' font-size='9' text-anchor='middle' fill='currentColor' fill-opacity='0.85'>3</text><text x='181.0' y='238.0' font-size='9' text-anchor='middle' fill='currentColor' fill-opacity='0.85'>4</text><text x='212.8' y='238.0' font-size='9' text-anchor='middle' fill='currentColor' fill-opacity='0.85'>5</text><text x='244.5' y='238.0' font-size='9' text-anchor='middle' fill='currentColor' fill-opacity='0.85'>6</text><text x='276.2' y='238.0' font-size='9' text-anchor='middle' fill='currentColor' fill-opacity='0.85'>7</text><text x='308.0' y='238.0' font-size='9' text-anchor='middle' fill='currentColor' fill-opacity='0.85'>8</text><text x='49.0' y='201.2' font-size='9' text-anchor='end' fill='currentColor' fill-opacity='0.85'>10</text><text x='49.0' y='175.5' font-size='9' text-anchor='end' fill='currentColor' fill-opacity='0.85'>20</text><text x='49.0' y='149.8' font-size='9' text-anchor='end' fill='currentColor' fill-opacity='0.85'>30</text><text x='49.0' y='124.0' font-size='9' text-anchor='end' fill='currentColor' fill-opacity='0.85'>40</text><text x='49.0' y='98.2' font-size='9' text-anchor='end' fill='currentColor' fill-opacity='0.85'>50</text><text x='49.0' y='72.5' font-size='9' text-anchor='end' fill='currentColor' fill-opacity='0.85'>60</text><text x='49.0' y='46.8' font-size='9' text-anchor='end' fill='currentColor' fill-opacity='0.85'>70</text><text x='49.0' y='21.0' font-size='9' text-anchor='end' fill='currentColor' fill-opacity='0.85'>80</text><text x='313.0' y='228.0' font-size='11' font-style='italic' fill='currentColor'>x</text><text x='47.0' y='13.0' font-size='11' font-style='italic' fill='currentColor'>y</text><text transform='translate(15,121.0) rotate(-90)' font-size='10' text-anchor='middle' fill='currentColor'>Temperature (&deg;F)</text><text x='181.0' y='272.0' font-size='10' text-anchor='middle' fill='currentColor'>Time (days since June 1)</text><circle cx='85.8' cy='43.8' r='3.6' fill='currentColor'/><circle cx='117.5' cy='69.5' r='3.6' fill='currentColor'/><circle cx='149.2' cy='28.3' r='3.6' fill='currentColor'/><circle cx='181.0' cy='69.5' r='3.6' fill='currentColor'/><circle cx='212.8' cy='48.9' r='3.6' fill='currentColor'/><circle cx='244.5' cy='64.3' r='3.6' fill='currentColor'/><circle cx='276.2' cy='54.1' r='3.6' fill='currentColor'/></svg>The scatterplot shows the temperature <em>y</em>, in &deg;F, recorded by a meteorologist at various times <em>x</em>, in days since June 1.<br><br>During which of the following time periods did the greatest increase in recorded temperature take place?`,
      options: [{ id: `A`, text: `From <em>x</em> = 6 to <em>x</em> = 7` }, { id: `B`, text: `From <em>x</em> = 5 to <em>x</em> = 6` }, { id: `C`, text: `From <em>x</em> = 2 to <em>x</em> = 3` }, { id: `D`, text: `From <em>x</em> = 1 to <em>x</em> = 2` }],
      answer: `C` },

    { id: `a8ua-math-m1-4`, domain: `Math`, skill: `Geometry and Trigonometry`, difficulty: `medium`, type: `grid`,
      prompt: `A right rectangular prism has a length of 26 centimeters (cm), a width of 16 cm, and a height of 14 cm. What is the surface area, in cm<sup>2</sup>, of the right rectangular prism?`,
      answer: [`2008`] },

    { id: `a8ua-math-m1-5`, domain: `Math`, skill: `Algebra`, difficulty: `easy`, type: `mcq`,
      prompt: `How many solutions does the equation 6<em>x</em> + 4 = 6<em>x</em> + 8 have?`,
      options: [{ id: `A`, text: `Infinitely many` }, { id: `B`, text: `Exactly two` }, { id: `C`, text: `Exactly one` }, { id: `D`, text: `Zero` }],
      answer: `D` },

    { id: `a8ua-math-m1-6`, domain: `Math`, skill: `Algebra`, difficulty: `medium`, type: `mcq`,
      prompt: `A newspaper stand sells magazines for $5 each and newspapers for $2 each. The stand needs to sell <em>m</em> magazines and <em>n</em> newspapers for a combined total value of at least $150 each day to cover operational costs. Which inequality represents this situation?`,
      options: [{ id: `A`, text: `5<em>m</em> + 2<em>n</em> &le; 150` }, { id: `B`, text: `5<em>m</em> + 2<em>n</em> &ge; 150` }, { id: `C`, text: `7<em>mn</em> &le; 150` }, { id: `D`, text: `7<em>mn</em> &ge; 150` }],
      answer: `B` },

    { id: `a8ua-math-m1-7`, domain: `Math`, skill: `Advanced Math`, difficulty: `medium`, type: `mcq`,
      prompt: `An object is kicked from a platform. The equation <em>h</em> = &minus;4.9<em>t</em><sup>2</sup> + 5<em>t</em> + 9 represents this situation, where <em>h</em> is the height of the object above the ground, in meters, <em>t</em> seconds after it is kicked. Which number represents the height, in meters, from which the object was kicked?`,
      options: [{ id: `A`, text: `0` }, { id: `B`, text: `4.9` }, { id: `C`, text: `5` }, { id: `D`, text: `9` }],
      answer: `D` },

    { id: `a8ua-math-m1-8`, domain: `Math`, skill: `Advanced Math`, difficulty: `medium`, type: `grid`,
      prompt: `The <em>y</em>-intercept of the graph of <em>y</em> = 81.65<sup><em>x</em></sup> in the <em>xy</em>-plane is (0, <em>y</em>). What is the value of <em>y</em>?`,
      answer: [`1`] },

    { id: `a8ua-math-m1-9`, domain: `Math`, skill: `Problem-Solving and Data Analysis`, difficulty: `easy`, type: `mcq`,
      prompt: `If 380% of <em>n</em> is 38, what is the value of <em>n</em>?`,
      options: [{ id: `A`, text: `14,440` }, { id: `B`, text: `1,444` }, { id: `C`, text: `1,000` }, { id: `D`, text: `10` }],
      answer: `D` },

    { id: `a8ua-math-m1-10`, domain: `Math`, skill: `Algebra`, difficulty: `medium`, type: `grid`,
      prompt: `The function <em>f</em>(<em>x</em>) = 180(<em>x</em> &minus; 2) gives the sum of the interior angles, in degrees, for a polygon with <em>x</em> sides. What is the sum of the interior angles, in degrees, for a polygon with 14 sides?`,
      answer: [`2160`] },

    { id: `a8ua-math-m1-11`, domain: `Math`, skill: `Problem-Solving and Data Analysis`, difficulty: `medium`, type: `mcq`,
      prompt: `A batch of smoothies consists of 4 cups of milk and 2 bananas and has 1,228 milligrams (mg) of calcium. There is 304 mg of calcium in 1 cup of milk. How much calcium, in mg, is in 1 banana?`,
      options: [{ id: `A`, text: `6` }, { id: `B`, text: `12` }, { id: `C`, text: `462` }, { id: `D`, text: `1,216` }],
      answer: `A` },

    { id: `a8ua-math-m1-12`, domain: `Math`, skill: `Advanced Math`, difficulty: `medium`, type: `mcq`,
      prompt: `The number of bacteria in a liquid medium doubles every day. There are 72,000 bacteria in the liquid medium at the start of an observation. Which of the following represents the number of bacteria, <em>y</em>, in the liquid medium <em>t</em> days after the start of the observation?`,
      options: [{ id: `A`, text: `<em>y</em> = <sup>1</sup>&frasl;<sub>2</sub>(72,000)<sup><em>t</em></sup>` }, { id: `B`, text: `<em>y</em> = 2(72,000)<sup><em>t</em></sup>` }, { id: `C`, text: `<em>y</em> = 72,000(<sup>1</sup>&frasl;<sub>2</sub>)<sup><em>t</em></sup>` }, { id: `D`, text: `<em>y</em> = 72,000(2)<sup><em>t</em></sup>` }],
      answer: `D` },

    { id: `a8ua-math-m1-13`, domain: `Math`, skill: `Problem-Solving and Data Analysis`, difficulty: `medium`, type: `mcq`,
      prompt: `<table style="border-collapse:collapse;margin:6px auto"><tr><th style="border:1px solid var(--border);padding:3px 12px">Values</th><th style="border:1px solid var(--border);padding:3px 12px">Data set A frequency</th><th style="border:1px solid var(--border);padding:3px 12px">Data set B frequency</th><th style="border:1px solid var(--border);padding:3px 12px">Data set C frequency</th><th style="border:1px solid var(--border);padding:3px 12px">Data set D frequency</th></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">40</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">0</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">0</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">8</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">8</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">43</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">2</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">3</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">3</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">4</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">46</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">4</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">3</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">3</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">2</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">49</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">8</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">8</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">0</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">0</td></tr></table>The table shows the frequencies of the data values for four data sets. Which data set has the greatest mean?`,
      options: [{ id: `A`, text: `Data set A` }, { id: `B`, text: `Data set B` }, { id: `C`, text: `Data set C` }, { id: `D`, text: `Data set D` }],
      answer: `A` },

    { id: `a8ua-math-m1-14`, domain: `Math`, skill: `Algebra`, difficulty: `medium`, type: `mcq`,
      prompt: `<em>p</em>(<em>x</em>) = 146 &minus; 5<em>x</em><br><br>The function <em>p</em> shown gives the number of blank sheets of paper, <em>p</em>(<em>x</em>), remaining in a printer <em>x</em> days after the printer had been loaded with paper. Which statement is the best interpretation of <em>p</em>(8) = 106?`,
      options: [{ id: `A`, text: `The number of blank sheets of paper remaining in the printer decreased by a total of 8 sheets after 106 days.` }, { id: `B`, text: `There were 8 blank sheets of paper remaining in the printer 106 days after the printer had been loaded with paper.` }, { id: `C`, text: `There were 106 blank sheets of paper remaining in the printer 8 days after the printer had been loaded with paper.` }, { id: `D`, text: `The number of blank sheets of paper remaining in the printer decreased by a total of 106 sheets after 8 days.` }],
      answer: `C` },

    { id: `a8ua-math-m1-15`, domain: `Math`, skill: `Problem-Solving and Data Analysis`, difficulty: `medium`, type: `grid`,
      prompt: `<table style="border-collapse:collapse;margin:6px auto"><tr><th style="border:1px solid var(--border);padding:3px 12px"></th><th style="border:1px solid var(--border);padding:3px 12px">Flames</th><th style="border:1px solid var(--border);padding:3px 12px">Panthers</th><th style="border:1px solid var(--border);padding:3px 12px">Total</th></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Small</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">6</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">9</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">15</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Medium</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">24</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">33</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">57</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Large</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">18</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">24</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">42</td></tr><tr><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">Total</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">48</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">66</td><td style="border:1px solid var(--border);padding:3px 12px;text-align:center">114</td></tr></table>A bin contains a mixture of T-shirts for two sports teams. The table shows the number of T-shirts in the bin, classified by size and sports team.<br><br>One T-shirt from the bin will be selected at random. What is the probability of selecting a T-shirt that is medium, given that the T-shirt is a Flames T-shirt? (Express your answer as a decimal or fraction, not as a percent.)`,
      answer: [`1/2`, `0.5`, `.5`] },

    { id: `a8ua-math-m1-16`, domain: `Math`, skill: `Advanced Math`, difficulty: `medium`, type: `mcq`,
      prompt: `<em>y</em> = <em>x</em><sup>2</sup> &minus; 18<em>x</em> + 51<br><br>The given equation relates the variables <em>x</em> and <em>y</em>. For what value of <em>x</em> does the value of <em>y</em> reach its minimum?`,
      options: [{ id: `A`, text: `&minus;18` }, { id: `B`, text: `9` }, { id: `C`, text: `18` }, { id: `D`, text: `51` }],
      answer: `B` },

    { id: `a8ua-math-m1-17`, domain: `Math`, skill: `Geometry and Trigonometry`, difficulty: `medium`, type: `mcq`,
      prompt: `The difference between the measure of angle <em>A</em> and the measure of angle <em>B</em> is &minus;<sup>3</sup>&frasl;<sub>4</sub>&pi; radians. Which expression shows the difference between the measure of angle <em>A</em> and the measure of angle <em>B</em>, in degrees?`,
      options: [{ id: `A`, text: `&minus;<sup>3</sup>&frasl;<sub>4</sub> &middot; <sup>180&deg;</sup>&frasl;<sub>&pi;</sub>` }, { id: `B`, text: `&minus;<sup>3</sup>&frasl;<sub>4</sub>&pi; &middot; <sup>&pi;</sup>&frasl;<sub>180&deg;</sub>` }, { id: `C`, text: `&minus;<sup>3</sup>&frasl;<sub>4</sub>&pi; &middot; <sup>180&deg;</sup>&frasl;<sub>&pi;</sub>` }, { id: `D`, text: `&minus;<sup>3</sup>&frasl;<sub>4</sub>&pi; &middot; <sup>360&deg;</sup>&frasl;<sub>&pi;</sub>` }],
      answer: `C` },

    { id: `a8ua-math-m1-18`, domain: `Math`, skill: `Algebra`, difficulty: `medium`, type: `grid`,
      prompt: `In March, an account manager completed 15 more than 3 times the number of sales the account manager completed in April. In March and April, the account manager completed 327 sales. How many sales did the account manager complete in April?`,
      answer: [`78`] },

    { id: `a8ua-math-m1-19`, domain: `Math`, skill: `Geometry and Trigonometry`, difficulty: `hard`, type: `grid`,
      prompt: `Triangle <em>QRS</em> is similar to triangle <em>FGH</em> such that <em>Q</em>, <em>R</em>, and <em>S</em> correspond to <em>F</em>, <em>G</em>, and <em>H</em>, respectively. Each side of triangle <em>FGH</em> has <sup>1</sup>&frasl;<sub>4</sub> the length of its corresponding side in triangle <em>QRS</em>. In triangle <em>FGH</em>, the measure of angle <em>F</em> is 35&deg;, the measure of angle <em>G</em> is 8&deg;, and <em>FG</em> = <em>a</em>. In triangle <em>QRS</em>, the measure of angle <em>Q</em> is <em>b</em>&deg; and <em>QR</em> = 20. What is the value of <em>a</em> + <em>b</em>?`,
      answer: [`40`] },

    { id: `a8ua-math-m1-20`, domain: `Math`, skill: `Geometry and Trigonometry`, difficulty: `medium`, type: `mcq`,
      prompt: `Rectangles <em>ABCD</em> and <em>EFGH</em> are similar. The length of each side of <em>EFGH</em> is 10 times the length of the corresponding side of <em>ABCD</em>. The area of <em>ABCD</em> is 100 square units. What is the area, in square units, of <em>EFGH</em>?`,
      options: [{ id: `A`, text: `10` }, { id: `B`, text: `100` }, { id: `C`, text: `1,000` }, { id: `D`, text: `10,000` }],
      answer: `D` },

    { id: `a8ua-math-m1-21`, domain: `Math`, skill: `Algebra`, difficulty: `hard`, type: `mcq`,
      prompt: `For the linear function <em>p</em>, <em>p</em>(<em>c</em>) = &minus;6, where <em>c</em> is a constant, <em>p</em>(3) = 26, and the slope of the graph of <em>y</em> = <em>p</em>(<em>x</em>) in the <em>xy</em>-plane is 8. For the linear function <em>t</em>, <em>t</em>(<em>c</em>) = &minus;7 and <em>t</em>(4) = 38. What is the slope of the graph of <em>y</em> = <em>t</em>(<em>x</em>) in the <em>xy</em>-plane?`,
      options: [{ id: `A`, text: `&minus;1` }, { id: `B`, text: `2` }, { id: `C`, text: `8` }, { id: `D`, text: `9` }],
      answer: `D` },

    { id: `a8ua-math-m1-22`, domain: `Math`, skill: `Advanced Math`, difficulty: `hard`, type: `grid`,
      prompt: `The area of a triangle is equal to <em>x</em><sup>2</sup> square centimeters. The length of the base of the triangle is 2<em>x</em> + 12.5 centimeters, and the height of the triangle is <em>x</em> &minus; 5 centimeters. What is the value of <em>x</em>?`,
      answer: [`25`] },
  ];

  const MATH_M2 = [
    { id: `a8ua-math-m2-1`, domain: `Math`, skill: `Advanced Math`, difficulty: `easy`, type: `mcq`,
      prompt: `Which expression is a factor of 2<em>x</em><sup>2</sup> + 30<em>x</em> + 8?`,
      options: [{ id: `A`, text: `2` }, { id: `B`, text: `4<em>x</em>` }, { id: `C`, text: `30<em>x</em>` }, { id: `D`, text: `2<em>x</em><sup>2</sup>` }],
      answer: `A` },

    { id: `a8ua-math-m2-2`, domain: `Math`, skill: `Algebra`, difficulty: `medium`, type: `mcq`,
      prompt: `In the <em>xy</em>-plane, line <em>&#8467;</em> has a slope of 4 and an <em>x</em>-intercept of (<sup>4</sup>&frasl;<sub>3</sub>, 0). What is the <em>y</em>-intercept of line <em>&#8467;</em>?`,
      options: [{ id: `A`, text: `(<sup>4</sup>&frasl;<sub>3</sub>, 0)` }, { id: `B`, text: `(&minus;<sup>16</sup>&frasl;<sub>3</sub>, 0)` }, { id: `C`, text: `(0, <sup>4</sup>&frasl;<sub>3</sub>)` }, { id: `D`, text: `(0, &minus;<sup>16</sup>&frasl;<sub>3</sub>)` }],
      answer: `D` },

    { id: `a8ua-math-m2-3`, domain: `Math`, skill: `Algebra`, difficulty: `easy`, type: `mcq`,
      prompt: `Line <em>k</em> is defined by <em>y</em> = 4<em>x</em> + 1. Line <em>j</em> is parallel to line <em>k</em> in the <em>xy</em>-plane and passes through the point (0, 5). Which equation defines line <em>j</em>?`,
      options: [{ id: `A`, text: `<em>y</em> = &minus;5<em>x</em> + 1` }, { id: `B`, text: `<em>y</em> = 5<em>x</em> + 1` }, { id: `C`, text: `<em>y</em> = &minus;4<em>x</em> + 5` }, { id: `D`, text: `<em>y</em> = 4<em>x</em> + 5` }],
      answer: `D` },

    { id: `a8ua-math-m2-4`, domain: `Math`, skill: `Algebra`, difficulty: `easy`, type: `mcq`,
      prompt: `For <em>x</em> &gt; 0, the function <em>f</em> is defined as follows:<br><br><em>f</em>(<em>x</em>) equals 300% of <em>x</em><br><br>Which of the following could describe this function?`,
      options: [{ id: `A`, text: `Decreasing exponential` }, { id: `B`, text: `Decreasing linear` }, { id: `C`, text: `Increasing exponential` }, { id: `D`, text: `Increasing linear` }],
      answer: `D` },

    { id: `a8ua-math-m2-5`, domain: `Math`, skill: `Advanced Math`, difficulty: `medium`, type: `mcq`,
      prompt: `Which expression is equivalent to (6<em>t</em><sup>4</sup> &minus; 3<em>t</em><sup>2</sup> + 3<em>t</em> &minus; 6) &minus; (2<em>t</em><sup>4</sup> &minus; 4<em>t</em><sup>3</sup> + 6<em>t</em><sup>2</sup> &minus; 6)?`,
      options: [{ id: `A`, text: `4<em>t</em><sup>4</sup> + 4<em>t</em><sup>3</sup> &minus; 9<em>t</em><sup>2</sup> + 3<em>t</em> &minus; 12` }, { id: `B`, text: `4<em>t</em><sup>4</sup> + 4<em>t</em><sup>3</sup> &minus; 9<em>t</em><sup>2</sup> + 3<em>t</em>` }, { id: `C`, text: `4<em>t</em><sup>4</sup> + <em>t</em><sup>3</sup> + 9<em>t</em> &minus; 12` }, { id: `D`, text: `4<em>t</em><sup>4</sup> + <em>t</em><sup>3</sup> + 3<em>t</em>` }],
      answer: `B` },

    { id: `a8ua-math-m2-6`, domain: `Math`, skill: `Advanced Math`, difficulty: `medium`, type: `mcq`,
      prompt: `<svg viewBox="0 0 320 250" role="img" aria-label="figure" style="max-width:320px;width:100%;display:block;margin:6px auto"><line x1='28.0' y1='222.0' x2='28.0' y2='28.0' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='45.6' y1='222.0' x2='45.6' y2='28.0' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='63.2' y1='222.0' x2='63.2' y2='28.0' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='80.8' y1='222.0' x2='80.8' y2='28.0' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='98.4' y1='222.0' x2='98.4' y2='28.0' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='116.0' y1='222.0' x2='116.0' y2='28.0' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='133.6' y1='222.0' x2='133.6' y2='28.0' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='151.2' y1='222.0' x2='151.2' y2='28.0' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='168.8' y1='222.0' x2='168.8' y2='28.0' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='186.4' y1='222.0' x2='186.4' y2='28.0' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='204.0' y1='222.0' x2='204.0' y2='28.0' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='221.6' y1='222.0' x2='221.6' y2='28.0' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='239.2' y1='222.0' x2='239.2' y2='28.0' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='256.8' y1='222.0' x2='256.8' y2='28.0' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='274.4' y1='222.0' x2='274.4' y2='28.0' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='292.0' y1='222.0' x2='292.0' y2='28.0' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='28.0' y1='222.0' x2='292.0' y2='222.0' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='28.0' y1='202.6' x2='292.0' y2='202.6' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='28.0' y1='183.2' x2='292.0' y2='183.2' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='28.0' y1='163.8' x2='292.0' y2='163.8' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='28.0' y1='144.4' x2='292.0' y2='144.4' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='28.0' y1='125.0' x2='292.0' y2='125.0' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='28.0' y1='105.6' x2='292.0' y2='105.6' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='28.0' y1='86.2' x2='292.0' y2='86.2' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='28.0' y1='66.8' x2='292.0' y2='66.8' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='28.0' y1='47.4' x2='292.0' y2='47.4' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='28.0' y1='28.0' x2='292.0' y2='28.0' stroke='currentColor' stroke-opacity='0.13' stroke-width='1'/><line x1='28.0' y1='222.0' x2='28.0' y2='28.0' stroke='currentColor' stroke-width='1.5'/><line x1='28.0' y1='222.0' x2='292.0' y2='222.0' stroke='currentColor' stroke-width='1.5'/><text x='295.0' y='218.0' font-size='11' font-style='italic' fill='currentColor'>x</text><text x='63.2' y='234.0' font-size='8.5' text-anchor='middle' fill='currentColor' fill-opacity='0.85'>2</text><text x='98.4' y='234.0' font-size='8.5' text-anchor='middle' fill='currentColor' fill-opacity='0.85'>4</text><text x='133.6' y='234.0' font-size='8.5' text-anchor='middle' fill='currentColor' fill-opacity='0.85'>6</text><text x='168.8' y='234.0' font-size='8.5' text-anchor='middle' fill='currentColor' fill-opacity='0.85'>8</text><text x='204.0' y='234.0' font-size='8.5' text-anchor='middle' fill='currentColor' fill-opacity='0.85'>10</text><text x='239.2' y='234.0' font-size='8.5' text-anchor='middle' fill='currentColor' fill-opacity='0.85'>12</text><text x='274.4' y='234.0' font-size='8.5' text-anchor='middle' fill='currentColor' fill-opacity='0.85'>14</text><text x='24.0' y='186.2' font-size='8.5' text-anchor='end' fill='currentColor' fill-opacity='0.85'>2</text><text x='24.0' y='147.4' font-size='8.5' text-anchor='end' fill='currentColor' fill-opacity='0.85'>4</text><text x='24.0' y='108.6' font-size='8.5' text-anchor='end' fill='currentColor' fill-opacity='0.85'>6</text><text x='24.0' y='69.8' font-size='8.5' text-anchor='end' fill='currentColor' fill-opacity='0.85'>8</text><text x='24.0' y='31.0' font-size='8.5' text-anchor='end' fill='currentColor' fill-opacity='0.85'>10</text><path d='M 28.0 144.4 L 45.6 139.6 L 63.2 134.5 L 80.8 129.1 L 98.4 123.3 L 116.0 117.2 L 133.6 110.7 L 151.2 103.8 L 168.8 96.4 L 186.4 88.7 L 204.0 80.4 L 221.6 71.6 L 239.2 62.3 L 256.8 52.4 L 274.4 41.9 L 292.0 30.7' stroke='currentColor' stroke-width='2.3' stroke-linejoin='round' fill='none'/></svg>The graph models the population, in thousands, of a town <em>x</em> years since 2003, where 0 &le; <em>x</em> &le; 15. Which statement is the best interpretation of the point (1, 4.24)?`,
      options: [{ id: `A`, text: `In 2003, the estimated population of the town was 4,240.` }, { id: `B`, text: `In 2004, the estimated population of the town was 4,240.` }, { id: `C`, text: `In 2017, the estimated population of the town was 4,240.` }, { id: `D`, text: `In 2018, the estimated population of the town was 4,240.` }],
      answer: `B` },

    { id: `a8ua-math-m2-7`, domain: `Math`, skill: `Geometry and Trigonometry`, difficulty: `medium`, type: `grid`,
      prompt: `A right circular cylinder has a radius of 12 centimeters and a volume of 2,448&pi; cubic centimeters. What is the height, in centimeters, of the cylinder?`,
      answer: [`17`] },

    { id: `a8ua-math-m2-8`, domain: `Math`, skill: `Algebra`, difficulty: `medium`, type: `mcq`,
      prompt: `If <em>a</em> = 3<em>k</em> + 4<em>r</em> and <em>b</em> = 9<em>k</em> &minus; 12<em>r</em> + 6, which expression is equivalent to <em>a</em> &minus; <em>b</em>?`,
      options: [{ id: `A`, text: `&minus;6<em>k</em> + 16<em>r</em> &minus; 6` }, { id: `B`, text: `&minus;6<em>k</em> + 16<em>r</em> + 6` }, { id: `C`, text: `&minus;6<em>k</em> &minus; 8<em>r</em> + 6` }, { id: `D`, text: `&minus;6<em>k</em> &minus; 8<em>r</em> &minus; 6` }],
      answer: `A` },

    { id: `a8ua-math-m2-9`, domain: `Math`, skill: `Algebra`, difficulty: `medium`, type: `grid`,
      prompt: `<em>x</em> = 2 + 8<em>y</em><br><em>x</em> = 4 &minus; 8<em>y</em><br><br>The solution to the given system of equations is (<em>x</em>, <em>y</em>). What is the value of 2<em>x</em>?`,
      answer: [`6`] },

    { id: `a8ua-math-m2-10`, domain: `Math`, skill: `Advanced Math`, difficulty: `medium`, type: `mcq`,
      prompt: `3<em>x</em><sup>2</sup> + <em>x</em> &minus; 5 = 0<br><br>What is the greatest solution to the given equation?`,
      options: [{ id: `A`, text: `&minus;<sup>1</sup>&frasl;<sub>6</sub> &minus; <sup>&radic;61</sup>&frasl;<sub>6</sub>` }, { id: `B`, text: `&minus;<sup>1</sup>&frasl;<sub>6</sub> + <sup>&radic;61</sup>&frasl;<sub>6</sub>` }, { id: `C`, text: `&minus;<sup>1</sup>&frasl;<sub>3</sub> &minus; <sup>&radic;61</sup>&frasl;<sub>3</sub>` }, { id: `D`, text: `&minus;<sup>1</sup>&frasl;<sub>3</sub> + <sup>&radic;61</sup>&frasl;<sub>3</sub>` }],
      answer: `B` },

    { id: `a8ua-math-m2-11`, domain: `Math`, skill: `Algebra`, difficulty: `hard`, type: `grid`,
      prompt: `For a particular car, the linear function <em>f</em> gives the predicted power, in brake horsepower (bhp), for engine speeds between 1,000 revolutions per minute (rpm) and 6,000 rpm. According to this function, the car&rsquo;s predicted power is 228 bhp at an engine speed of 1,896 rpm and 600 bhp at an engine speed of 4,500 rpm. The equation <em>f</em>(<em>x</em>) = <sup>1</sup>&frasl;<sub>7</sub>(<em>x</em> &minus; <em>a</em>) + 228 defines <em>f</em>, where <em>x</em> is the engine speed, in rpm, and <em>a</em> is a constant. What is the value of <em>a</em>?`,
      answer: [`1896`] },

    { id: `a8ua-math-m2-12`, domain: `Math`, skill: `Advanced Math`, difficulty: `medium`, type: `mcq`,
      prompt: `According to a model, the estimated volume of a certain Douglas fir tree increases by 15.5% for every increase of 100 centimeters in the tree&rsquo;s height. The equation <em>y</em> = <em>ab</em><sup><em>x</em>&frasl;100</sup> represents this model, where <em>y</em> represents the estimated volume, in cubic centimeters, of this Douglas fir tree, <em>x</em> represents the tree&rsquo;s height, in centimeters, and <em>a</em> and <em>b</em> are constants. In this equation, what is the value of <em>b</em>?`,
      options: [{ id: `A`, text: `0.155` }, { id: `B`, text: `1` }, { id: `C`, text: `1.155` }, { id: `D`, text: `15.5` }],
      answer: `C` },

    { id: `a8ua-math-m2-13`, domain: `Math`, skill: `Algebra`, difficulty: `medium`, type: `mcq`,
      prompt: `<em>y</em> = <sup>2</sup>&frasl;<sub>5</sub><em>x</em> + 7<br><br>One of the two equations in a system of linear equations is given. The system has infinitely many solutions. If the second equation in the system is <em>y</em> = <em>mx</em> + <em>b</em>, where <em>m</em> and <em>b</em> are constants, what is the value of <em>b</em>?`,
      options: [{ id: `A`, text: `&minus;7` }, { id: `B`, text: `&minus;<sup>1</sup>&frasl;<sub>7</sub>` }, { id: `C`, text: `<sup>1</sup>&frasl;<sub>7</sub>` }, { id: `D`, text: `7` }],
      answer: `D` },

    { id: `a8ua-math-m2-14`, domain: `Math`, skill: `Geometry and Trigonometry`, difficulty: `hard`, type: `mcq`,
      prompt: `<svg viewBox="0 0 300 262" role="img" aria-label="figure" style="max-width:300px;width:100%;display:block;margin:6px auto"><line x1='35' y1='110' x2='262' y2='110' stroke='currentColor' stroke-width='1.6'/><line x1='35' y1='195' x2='262' y2='195' stroke='currentColor' stroke-width='1.6'/><line x1='151' y1='29' x2='87' y2='253' stroke='currentColor' stroke-width='1.5'/><line x1='119' y1='32' x2='187' y2='257' stroke='currentColor' stroke-width='1.5'/><line x1='210' y1='35' x2='250' y2='255' stroke='currentColor' stroke-width='1.5'/><text x='153' y='25' font-size='12' font-style='italic' fill='currentColor'>t</text><text x='110' y='28' font-size='12' font-style='italic' fill='currentColor'>u</text><text x='206' y='30' font-size='12' font-style='italic' fill='currentColor'>w</text><text x='266' y='114' font-size='12' font-style='italic' fill='currentColor'>r</text><text x='266' y='199' font-size='12' font-style='italic' fill='currentColor'>s</text><text x='128' y='74' font-size='11' fill='currentColor'>j&deg;</text><text x='150' y='104' font-size='11' fill='currentColor'>g&deg;</text><text x='232' y='104' font-size='11' fill='currentColor'>d&deg;</text><text x='97' y='152' font-size='11' fill='currentColor'>h&deg;</text><text x='150' y='216' font-size='11' fill='currentColor'>p&deg;</text><text x='70' y='250' font-size='9' fill='currentColor'>Note: Figure not drawn to scale.</text></svg>In the figure, parallel lines <em>r</em> and <em>s</em> are intersected by lines <em>t</em>, <em>u</em>, and <em>w</em>. If <em>d</em> = 42, <em>g</em> = 143, and <em>h</em> &gt; <em>d</em>, which statement about <em>j</em> and <em>p</em> must be true?`,
      options: [{ id: `A`, text: `<em>j</em> = <em>p</em>` }, { id: `B`, text: `<em>j</em> + <em>p</em> = 90` }, { id: `C`, text: `<em>j</em> &gt; <em>p</em>` }, { id: `D`, text: `<em>j</em> &lt; <em>p</em>` }],
      answer: `D` },

    { id: `a8ua-math-m2-15`, domain: `Math`, skill: `Algebra`, difficulty: `hard`, type: `mcq`,
      prompt: `<em>y</em> &lt; &minus;6<em>x</em> &minus; 22<br><em>y</em> &gt; &minus;4<em>x</em> &minus; 7<br><br>For which of the following tables are all the values of <em>x</em> and their corresponding values of <em>y</em> solutions to the given system of inequalities?`,
      options: [{ id: `A`, text: `<table border='1' cellpadding='5' style='border-collapse:collapse;text-align:center;display:inline-block'><tr><td>&nbsp;<em>x</em>&nbsp;</td><td>&nbsp;<em>y</em>&nbsp;</td></tr><tr><td>&minus;9</td><td>27</td></tr><tr><td>&minus;10</td><td>51</td></tr><tr><td>&minus;12</td><td>&minus;4</td></tr></table>` }, { id: `B`, text: `<table border='1' cellpadding='5' style='border-collapse:collapse;text-align:center;display:inline-block'><tr><td>&nbsp;<em>x</em>&nbsp;</td><td>&nbsp;<em>y</em>&nbsp;</td></tr><tr><td>&minus;9</td><td>32</td></tr><tr><td>&minus;10</td><td>36</td></tr><tr><td>&minus;12</td><td>&minus;4</td></tr></table>` }, { id: `C`, text: `<table border='1' cellpadding='5' style='border-collapse:collapse;text-align:center;display:inline-block'><tr><td>&nbsp;<em>x</em>&nbsp;</td><td>&nbsp;<em>y</em>&nbsp;</td></tr><tr><td>&minus;9</td><td>28</td></tr><tr><td>&minus;10</td><td>36</td></tr><tr><td>&minus;12</td><td>48</td></tr></table>` }, { id: `D`, text: `<table border='1' cellpadding='5' style='border-collapse:collapse;text-align:center;display:inline-block'><tr><td>&nbsp;<em>x</em>&nbsp;</td><td>&nbsp;<em>y</em>&nbsp;</td></tr><tr><td>&minus;9</td><td>30</td></tr><tr><td>&minus;10</td><td>37</td></tr><tr><td>&minus;12</td><td>48</td></tr></table>` }],
      answer: `D` },

    { id: `a8ua-math-m2-16`, domain: `Math`, skill: `Geometry and Trigonometry`, difficulty: `hard`, type: `mcq`,
      prompt: `If the perimeter of an equilateral triangle with a height of 46 units is <em>a</em>&radic;3 units, what is the value of <em>a</em>?`,
      options: [{ id: `A`, text: `46` }, { id: `B`, text: `92` }, { id: `C`, text: `<sup>2,116</sup>&frasl;<sub>3</sub>` }, { id: `D`, text: `<sup>4,232</sup>&frasl;<sub>3</sub>` }],
      answer: `B` },

    { id: `a8ua-math-m2-17`, domain: `Math`, skill: `Algebra`, difficulty: `medium`, type: `mcq`,
      prompt: `If <sup><em>x</em> &minus; 5</sup>&frasl;<sub>4</sub> = <sup><em>x</em> &minus; 5</sup>&frasl;<sub>11</sub>, the value of <em>x</em> &minus; 5 is between which of the following pairs of values?`,
      options: [{ id: `A`, text: `&minus;11 and &minus;7` }, { id: `B`, text: `&minus;6 and &minus;3` }, { id: `C`, text: `&minus;3 and 3` }, { id: `D`, text: `4 and 6` }],
      answer: `C` },

    { id: `a8ua-math-m2-18`, domain: `Math`, skill: `Advanced Math`, difficulty: `hard`, type: `grid`,
      prompt: `33<em>x</em><sup>2</sup> + (33<em>s</em> + <em>r</em>)<em>x</em> + <em>rs</em> = 0<br><br>In the given equation, <em>r</em> and <em>s</em> are positive constants. The product of the solutions to the given equation is <em>krs</em>, where <em>k</em> is a constant. What is the value of <em>k</em>?`,
      answer: [`1/33`, `0.0303`, `.0303`] },

    { id: `a8ua-math-m2-19`, domain: `Math`, skill: `Problem-Solving and Data Analysis`, difficulty: `hard`, type: `mcq`,
      prompt: `A square map has a side length of 35 inches, and 1 inch on the map represents an actual distance of 17 miles. A smaller version of the same map is printed as a square with the side length 55% shorter than the side length of the previous map. On the smaller map, which of the following is closest to the actual distance, in miles, represented by 1 inch?`,
      options: [{ id: `A`, text: `7.65` }, { id: `B`, text: `10.97` }, { id: `C`, text: `19.25` }, { id: `D`, text: `37.78` }],
      answer: `D` },

    { id: `a8ua-math-m2-20`, domain: `Math`, skill: `Advanced Math`, difficulty: `hard`, type: `grid`,
      prompt: `The function <em>p</em> is defined by <em>p</em>(<em>x</em>) = <em>a</em>((<em>x</em> + 6)<sup>2</sup> &minus; <em>b</em>)((<em>x</em> + 6)<sup>2</sup> &minus; <em>c</em>), where <em>a</em>, <em>b</em>, and <em>c</em> are constants. In the <em>xy</em>-plane, the graph of <em>y</em> = <em>p</em>(<em>x</em>) passes through the points (&minus;7, 24) and (0, 899). What is the value of <em>p</em>(&minus;12) + <em>p</em>(&minus;5)?`,
      answer: [`923`] },

    { id: `a8ua-math-m2-21`, domain: `Math`, skill: `Algebra`, difficulty: `medium`, type: `mcq`,
      prompt: `A scientist makes batches of bricks using different sand-to-cement ratios to test how the sand-to-cement ratio affects the strength of the brick. For one batch of bricks, the scientist uses 4,880 cubic centimeters (cm<sup>3</sup>) of sand and cement, where the ratio of the volume of sand to the volume of cement is 7 to 3. If <em>s</em> represents the volume, in cm<sup>3</sup>, of sand and <em>c</em> represents the volume, in cm<sup>3</sup>, of cement that the scientist uses for this batch of bricks, which system of equations represents this situation?`,
      options: [{ id: `A`, text: `<em>s</em> = <em>c</em><br>7<em>s</em> + 3<em>c</em> = 4,880` }, { id: `B`, text: `<em>s</em> = <em>c</em><br>3<em>s</em> + 7<em>c</em> = 4,880` }, { id: `C`, text: `7<em>s</em> = 3<em>c</em><br><em>s</em> + <em>c</em> = 4,880` }, { id: `D`, text: `3<em>s</em> = 7<em>c</em><br><em>s</em> + <em>c</em> = 4,880` }],
      answer: `D` },

    { id: `a8ua-math-m2-22`, domain: `Math`, skill: `Advanced Math`, difficulty: `hard`, type: `mcq`,
      prompt: `The functions <em>f</em> and <em>g</em> are defined by the given equations, where <em>x</em> &ge; 0. Which of the following equations displays, as a constant or coefficient, the maximum value of the function it defines, where <em>x</em> &ge; 0?<br><br>I. <em>f</em>(<em>x</em>) = 16(1.24)<sup><em>x</em></sup> + 43<br>II. <em>g</em>(<em>x</em>) = 8(0.72)<sup><em>x</em></sup>`,
      options: [{ id: `A`, text: `I only` }, { id: `B`, text: `II only` }, { id: `C`, text: `I and II` }, { id: `D`, text: `Neither I nor II` }],
      answer: `B` },
  ];

  Apex.bank.register({
    id: "dsat-2024-08-us-a",
    title: "August 2024",
    type: "digital",
    region: "US",
    version: "A",
    year: 2024,
    monthNum: 8,
    tagline: "US · Version A",
    description: "Digital SAT — August 2024 US prediction form, Version A (RW reordered into official SAT test order; math ordered easy to hard).",
    adaptive: false,
    sections: [
      { id: "rw", modules: [
        { id: "a8ua-rw-m1", stage: 1, name: "Reading and Writing — Module 1", minutes: 32, questions: RW_M1 },
        { id: "a8ua-rw-m2", stage: 2, variant: "hard", name: "Reading and Writing — Module 2 (Hard)", minutes: 32, questions: RW_M2 },
      ] },
      { id: "math", modules: [
        { id: "a8ua-math-m1", stage: 1, name: "Math — Module 1", minutes: 35, calculator: true, questions: MATH_M1 },
        { id: "a8ua-math-m2", stage: 2, variant: "hard", name: "Math — Module 2 (Hard)", minutes: 35, calculator: true, questions: MATH_M2 },
      ] },
    ],
  });
})();
