import React, { Component } from 'react';
import Article from './Article.jsx';

class Content extends Component {
  render() {
  	var filter = this.props.filter;

  	var filters = {
      first: ['first'],
  		frontpage: ['featured'],
  		home: ['blog'],
  		all: ['blog', 'developing', 'research'],
  		archive: ['archive']
  	}

  	var articles = [];

  articles.push({
    timetoread: 'few seconds read',
    title: 'Website update',
    topic: 'blog',
    date: '2018/01/27',
    paragraphs: function(){
      var array = []
      if(this && this.content){
        array = this.content.split('\n');
      }
      return array;
    },
    topics: ['featured', 'update', 'blog', 'first'],
    content:`
    Working on some updates to include all my content into easily accessible one place.
    Some things on my list: 
    • Tom recommends movies.
    • Tom best video day stories archive (definitely not soon).
    • Toms recipes.
    • Potentially less 'Tom' in the titles.
    `
  })
  	
	articles.push({
		timetoread: '11 minute read',
		title: 'Early to bed and early to rise, makes a man healthy, wealthy, and wise',
		topic: 'research',
		content: `
		So with these Benjamin Franklin words I begin my post about sleep. I don’t really gave too much meaning to sleep in my life, it used to get in the way of getting things done. Initial low-key sleep research that I've done in 2010-ish was aimed to find out what is the least amount of time that I can spend sleeping and still get some benefit out of that {superscript}(not dying because of sleep deprivation - also a benefit){/superscript}. Then I was set to find the best time to wake up so I would be fresh and ready to go, rather than feeling like I never want to leave the bed ever again.

{italic}(There is sort of a TL;DR section in the end and every point is bolded out for the lazy minds){/italic}

For this post I’ve wanted to get some facts backed by research as well as confirm or deny some of the ideas that are floating around sleep.
There were several things to look into, like is 90 minutes really the true sleep cycle? When should I wake up? Is there anything I can eat to get better sleep? Does exposing myself to bright light in the morning / evening really help?...

{italic}So let’s just start going trough it.{/italic}

{subheader}When should I wake up?{/subheader}
For this I’ve looked into several sleeping cycle diagrams ({weblink}https://www.google.lt/search?q=hypnograms&safe=active&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiRqMKrh4TUAhUFKpoKHV2SBiwQ_AUICigB&biw=1667&bih=970;hypnograms{/weblink}). Haven’t found a rich database of accurate hypnograms for ‘healthy young individual hypnograms’ so have some salt ready.
It is apparent that we want to get as much REM sleep as possible, while at the same time it is best to wake up right after the REM sleep phase, during stage 1 sleep (N1{reference}https://www.ninds.nih.gov/Disorders/Patient-Caregiver-Education/Understanding-Sleep;2{/reference}), here are two reasons:
•	Our mind is between being awake and asleep during it, and there should be no “lag” to get the brain active again and start your day.
•	It would take additional 70-90 minutes until the next REM cycle, so any snoozing is only useful if you woke up in the ‘wrong’ sleep stage to transition to waking up, sleeping extra 15 minutes in most cases will not make you feel any more rested.
After checking out the hypnograms (the few that I found) 6h15m - 6h30m and 7h 35ish minutes from sleep should be ideal for waking up, as for 3 hours the sources are a bit too conflicting to draw any conclusions, I would suggest experimenting if you ever find yourself in a situation when you have below 4h 30 minutes available. {reference}https://en.wikipedia.org/wiki/Hypnogram;16.1{/reference}{reference}http://oxfordmedicine.com/view/10.1093/med/9780199674558.001.0001/med-9780199674558-chapter-1;16.2{/reference}{reference}http://hypnagogia.squarespace.com/blog/tag/hypnogram;16.3{/reference}{reference}http://healyourselfathome.com/HOW/NEWSTARTS/7_REST/stages_of_sleep.aspx;16.4{/reference}

{semibold}Sleep cycles last approximately 90-120 minutes. Sleeping patterns can be built around that to maximize the efficiency of time spent sleeping.{/semibold}

{subheader}Is there something I can eat to improve sleep?{/subheader}
I looked for any research, studies or experiments to support evidence of magnesium link with better sleep quality, but haven’t found anything too serious. There are mentions of magnesium helping to produce melatonin, but I have not found anything sounding even remotely legit to link here. The closest thing to support its impact on sleep was a study on how magnesium improves insomnia condition in elderly people, which is still something. {reference}https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3703169/;11{/reference}

Some articles with (some) medical background suggest that Magnesium does improve sleep afterall (but I don't trust them too much). {reference}http://www.webmd.com/sleep-disorders/features/natural-solutions#2;C.1{/reference}{reference}https://blog.bulletproof.com/sleep-hacking-part-3-falling-asleep-fast-with-biochemistry/;C.2 {/reference}
Dr. Hyman suggests that magnesium is the relaxation element, relaxing muscles and the nervous system. {reference}http://drhyman.com/blog/2010/05/20/magnesium-the-most-powerful-relaxation-mineral-available/;D{/reference} {reference}http://drhyman.com/blog/2010/05/20/how-to-sleep-better-lose-weight-and-live-longer/;E{/reference}
Some foods containing magnesium: Hazelnuts, sesame seeds, almonds, avocado, beans, garlic, walnuts.

{subheader}So then, what do the sleeping drugs do? (and how they do it?){/subheader}

Some of the drugs that I’ve read on: {weblink}https://en.wikipedia.org/wiki/Zaleplon;Zaleplon{/weblink}, {weblink}https://en.wikipedia.org/wiki/Eszopiclone;Eszopliclone{/weblink}, {weblink}https://en.wikipedia.org/wiki/Zolpidem;Zolpidem{/weblink}, {weblink}https://en.wikipedia.org/wiki/Ramelteon;Ramelteon{/weblink}

One of the most popular mechanism behind drugs which are meant to treat insomnia {superscript}(HELP FALL ASLEEP){/superscript} is to interact with {weblink}https://en.wikipedia.org/wiki/Gamma-Aminobutyric_acid;GABA{/weblink}. Drugs which interact with GABA{subscript}A{/subscript} receptors bind to them and trigger/activate them (act as full {weblink}https://en.wikipedia.org/wiki/Agonist;agonists{/weblink}).

GABA is the chief inhibitory central nervous system neurotransmitter. It regulates the neurons excitement levels (yea, I know sounds exciting lel). It {weblink}https://en.wikipedia.org/wiki/Hyperpolarization_(biology);hyperbolizes{/weblink} the neuron (makes it more difficult to reach its action potential treshold)
{bold}TL;DR;It makes it more difficult for the neuron to be ‘fired’ or activated.{/bold}
 {image}http://i.imgur.com/a6FIuxT.png;[It raises the blue bar, so there would be more failed initiations]{/image}

Some sleep drugs are refered to as being from {weblink}https://en.wikipedia.org/wiki/Benzodiazepine;benzodiazepine{/weblink} group. Benzodiazepine is a drug class, which enhances the GABA trasmitter efficiency at GABAa receptor. By doing so makes it more difficult to activate neurons and acts as a sedative.

{semibold}Benzodiazepines and GABA{subscript}A{/subscript} agonist drug negative effects:{/semibold}
- Surpression of REM sleep. (Which is the one that makes you feel rested.) {reference}https://www.ncbi.nlm.nih.gov/pubmed/15649737;35{/reference}
- ‘Hangover’ effect {reference}https://en.wikipedia.org/wiki/Benzodiazepine;34{/reference} {reference}http://www.icadtsinternational.com/files/documents/2013_071.pdf;41{/reference}
- Links to amnesia (as they disrupt forming new memories, prevent neurons from activating) {reference}https://en.wikipedia.org/wiki/Benzodiazepine;34{/reference}
- Impairment of cognitive skills (linked with increased amount of driving accidents) {reference}http://www.icadtsinternational.com/files/documents/2013_071.pdf;41{/reference}{reference}https://en.wikipedia.org/wiki/Benzodiazepine;34{/reference}
- Addiction and in turn negative withdrawal effects. {reference}https://en.wikipedia.org/wiki/Zolpidem;40{/reference} {reference}https://en.wikipedia.org/wiki/Benzodiazepine;34{/reference}
{semibold}Most effects are short term, but it is stated, that withdrawal of benzodiazepine drugs in the long terms results in beneficial outcome for most of the long term users.{/semibold}

{subheader}Melatonin{/subheader}
There are drugs which do not interact with GABA{subscript}A{/subscript} receptors, but do interact with receptors responsible for melatonin. Which is naturally being made when our {weblink}https://www.nigms.nih.gov/education/pages/Factsheet_CircadianRhythms.aspx;circadian rythm{/weblink} is set to ‘night mode’. Melatonin is responsible for our wakefulness level. {reference}http://onlinelibrary.wiley.com/doi/10.1046/j.1365-2869.1998.00106.x/epdf;42{/reference}

{semibold}Good news is that you can find melatonin in certain natural food sources!{/semibold}

{semibold}Here is a {weblink}https://docs.google.com/spreadsheets/d/1SSNkuuvRz64MjEamQ49J_zwXZfDekRiUPpo78KVNdqo/edit#gid=0;chart{/weblink} just so it would be easier to see how fucking awesome sour cherries are for sleeping.{/semibold}
{image}http://i.imgur.com/QUMm5RV.png;Ye, dem sour cherries the sleepiest think you can eat{/image}
{reference}http://www.immunehealthscience.com/foods-with-melatonin.html;[the chart data] 37{/reference} {reference}https://eunatural.com/five-important-melatonin-rich-foods/;36{/reference} {reference}http://www.onegreenplanet.org/natural-health/foods-that-help-produce-melatonin-oats-bananas-and-more/;38{/reference}

{subheader}Caffeine{/subheader}
I was like yeah, this one gonna be pretty easy, just don’t drink coffee. But there are studies which suggest that caffeine only increases sleep onset latency rather than affecting too much on the actual sleep quality. The only negative effects on sleep were reported when a caffeine-sensitive individual had taken in a huge dose of caffeine. {reference}https://www.ncbi.nlm.nih.gov/pubmed/12204388;23{/reference}{reference}http://www.sciencedirect.com/science/article/pii/S1087079207000937;17{/reference}

{semibold}Drinking coffee before sleep technically will make it difficult to fall asleep, but it should not impact your sleep quality. Especially for regular caffeine users. But they have got some addiction / withdrawal to look forward to.{/semibold}

{subheader}Lightning{/subheader}
The circadian rythm decides when we are sleepy and when we are active. It can be affected by bright light exposed to the individuals eyes. This includes bright screens, and studies suggest that cutting out blue light prior to sleep does help orient the circadian rythm as eyes do send signals to the brain part which is responsible for the production of melatonin ({weblink}https://www.britannica.com/science/pineal-gland;pineal gland{/weblink}). If blue light is exposed to the eyesight pineal is informed that it is “day time” and melatonin production is stopped. Melatonin is responsible for making you want to sleep (regulates awakeness levels).{reference}http://onlinelibrary.wiley.com/doi/10.1046/j.1365-2869.1998.00106.x/epdf;42{/reference} {reference}https://www.ncbi.nlm.nih.gov/pubmed/14582857;22{/reference}

{semibold}Bright, blue lights before sleep disrupts your sleep quality. For the perfect sleep it would be suggested to stay in a dimly light area, cutting out blue light.{/semibold}

{subheader}Sleep debt{/subheader}
This is a very simple concept. You need X amount of hours of sleep per night, if you get only X-1h of sleep every day for a week you will have a sleep debt {reference}https://link.springer.com/article/10.1046/j.1446-9235.2003.00006.x;26{/reference}. It is a measurable thing. Not precise to the minute or an hour or any time amount at all, it’s more like a binary yes/no you either have it or not kind of a thing. 
{subheader}How do I find out my sleep credit score?{/subheader}
One way is to take a MSLT ({weblink}http://www.sleepeducation.org/disease-detection/multiple-sleep-latency-test/overview-and-facts;Multiple Sleep Latency Test{/weblink}), but I’m pretty sure you don’t have a set of brainwave activity monitoring equipment just laying around so I’ll be talking about the less accurate, but more accessible way.
Before we start, a possible sign that sleep debt is present is if a person feels sleepy during the day at any point even during boring activity. {reference}https://www.ninds.nih.gov/Disorders/Patient-Caregiver-Education/Understanding-Sleep;2{/reference}

You might have heard of this technique used for {weblink}https://www.psychologytoday.com/blog/dream-factory/201502/how-dream-salvador-dali;another pupose by Salvador Dali{/weblink}. He used the very same ‘sleep onset latensy test DYI’ to wake himself up and capture vivid beautiful images created by the first moments of sleep. But for those who don’t know let’s go on to our budget brainwave acitivity measuring devices:
•	Stopwatch
•	Plate
•	Spoon
•	Chair/Bed
•	Hand 

Recommended times to do this are 10:00; 12:30 and 15:00.
You place a plate on the floor and you hold a spoon over it in such a way that once you fall asleep you let go of the spoon and it hits the plate, waking you up.
So get the things in place, start the timer and get to sleeping yo. (even if for just a split second, still exciting, no?)

{bold}Now about the results.{/bold}
If you fall asleep in {bold}0 to 5 minutes{/bold}, that kinda sounds pretty cool, but actually it indicates a severe sleep deprivation.
Next level is {bold}5 to 10 minutes{/bold} indicating a medium debt.
{bold}10 - 15 minutes{/bold} is like a small sleep loan.
While {bold}15 to 20 minutes{/bold} is the perfect sleep credit score. There you go.
Ideally the test would be done several  times over a few days. {reference}https://en.wikipedia.org/wiki/Sleep_onset_latency;39{/reference}

{subheader}TL;DR;{/subheader}

{bold}Tips (no explanations, just the tips):{/bold}
•	Expose self to bright light in the morning {reference}https://www.ncbi.nlm.nih.gov/pubmed/14582857;22{/reference}
•	Cut all light in the evening {reference}https://www.ninds.nih.gov/Disorders/Patient-Caregiver-Education/Understanding-Sleep;2{/reference}{reference}https://www.ncbi.nlm.nih.gov/pubmed/14582857;22{/reference}
•	Keep the sleep schedule static (constant sleep time, constant wake up time) {reference}https://sleepfoundation.org/sleep-topics/what-circadian-rhythm;20{/reference}{reference}http://www.clevelandclinicmeded.com/medicalpubs/diseasemanagement/neurology/sleep-disorders/#top;21{/reference}
•	Exersize at least 20min a day {reference}http://www.clevelandclinicmeded.com/medicalpubs/diseasemanagement/neurology/sleep-disorders/#top;21{/reference}
•	18-25yo recommended sleep duration 7-9h, not recommended less than 6, or over 11 (pretty much same up to 64yo) {reference}http://www.sleephealthjournal.org/article/S2352-7218%2815%2900015-7/fulltext;8{/reference}{reference}https://academic.oup.com/sleep/article-abstract/40/1/zsw029/2972132/Sleep-and-Cognitive-Performance-From-Teens-To-Old;13{/reference}
•	If you can’t fall asleep for 20 minutes, don’t stay in bed, take a break {reference}http://www.clevelandclinicmeded.com/medicalpubs/diseasemanagement/neurology/sleep-disorders/#top;21{/reference}
•	If using drugs, be aware of the side effects, potential pitfalls {reference}https://en.wikipedia.org/wiki/Benzodiazepine;34{/reference}
•	Eating sour cherries, walnuts, corn, rice, asparagus, tomatoes helps to increase melatonin,which helps the sleep quality and efficiency.{reference}http://www.immunehealthscience.com/foods-with-melatonin.html;37{/reference}

{bold}Information:{/bold}
•	Missing sleep makes you accumulate ‘sleep debt’, which you need to pay back by increasing your sleep time daily, or taking naps (can’t catch up all at once) {reference}https://www.ninds.nih.gov/Disorders/Patient-Caregiver-Education/Understanding-Sleep;2{/reference}{reference}http://www.byrdie.co.uk/how-much-sleep-do-you-need;3{/reference}{reference}https://sleepfoundation.org/sleep-topics/what-circadian-rhythm;20{/reference}
•	Waking up from deep sleep makes you feel distressed, disoriented {reference}https://www.ninds.nih.gov/Disorders/Patient-Caregiver-Education/Understanding-Sleep;2{/reference}
•	REM sleep is the one that makes you feel rested, improves learning, cognitive functions {reference}https://www.psychologytoday.com/blog/dream-catcher/201508/recent-research-rem-sleep-functions;14{/reference}
•	Sleep cycles on average take 90 minutes (90-120) {reference}https://www.ncbi.nlm.nih.gov/books/NBK19956/;15{/reference}{reference}http://healyourselfathome.com/HOW/NEWSTARTS/7_REST/stages_of_sleep.aspx;B{/reference}
•	Naturally time to fall asleep should take between 10 and 20 minutes {reference}https://www.ncbi.nlm.nih.gov/books/NBK19956/;15{/reference}
•	Efficient naps should take up to 30 minutes {reference}http://www.byrdie.co.uk/how-much-sleep-do-you-need;3{/reference}{reference}https://blog.bufferapp.com/how-much-sleep-do-we-really-need-to-work-productively;9{/reference}
•	Shifting from bigger meals to snacks associated with shorter sleep {reference}https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4642416/;6{/reference}
•	Shorter sleep duration associated with weight gain, more food intake {reference}https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3703747/;7.1{/reference} {reference}https://academic.oup.com/sleep/article-abstract/40/2/zsw057/2662318/Short-Sleep-Duration-Is-Associated-With-Eating;7.2{/reference}{reference}https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4589504/;7.3{/reference}
•	Having inconsistent sleeping habits affects alertness, eating habits {reference}https://academic.oup.com/sleep/article-abstract/40/2/zsw039/2666485/Eating-Decisions-Based-on-Alertness-Levels-After-a;12{/reference}
•	Caffeine restores performance in sleep-deprived individuals (wow, a shocker, I know) {reference}http://www.sciencedirect.com/science/article/pii/S1087079207000937;17{/reference}{reference}https://link.springer.com/article/10.1007/s00213-002-1217-9;25{/reference}
•	Circadian rythm impacts sleep {reference}https://www.ninds.nih.gov/Disorders/Patient-Caregiver-Education/Understanding-Sleep;2{/reference}
•	Coffee at night not as bad as you think, it only delays falling asleep.

{bold}Bad things when missing sleep (under 6 hours) or when in sleep debt:{/bold}
•	More negative thinking (also sleeping later) {reference}https://link.springer.com/article/10.1007%2Fs10608-014-9651-7#page-2;1.1{/reference}{reference}https://www.ncbi.nlm.nih.gov/pubmed/24162148;1.2{/reference}
•	Impaired ability to get new information {reference}http://news.harvard.edu/gazette/story/2007/02/study-shows-importance-of-sleep-for-optimal-memory-functioning/;10{/reference}
•	Decreased reaction time {reference}https://www.ninds.nih.gov/Disorders/Patient-Caregiver-Education/Understanding-Sleep;2{/reference}
•	Impulsiveness (linked to bad diet and life choices)

{bold}Sources:{/bold}
1.1. {weblink}https://link.springer.com/article/10.1007%2Fs10608-014-9651-7#page-2;Lack of sleep associated with depression, negative thoughts{/weblink}
1.2 {weblink}https://www.ncbi.nlm.nih.gov/pubmed/24162148;Lack of sleep associated with depression, negative thoughts{/weblink}
2. {weblink}https://www.ninds.nih.gov/Disorders/Patient-Caregiver-Education/Understanding-Sleep;Sleep debt, waking up from deep sleep is bad, circadian rythm{/weblink}
3. {weblink}http://www.byrdie.co.uk/how-much-sleep-do-you-need;Wendy M. Troxel [Ph.D. in clinical/health psychology]{/weblink}
4. {weblink}https://health.ucsd.edu/news/2009/Pages/6-8-rem-sleep.aspx;Rem sleep enhances creativity{/weblink}
5. {weblink}https://en.wikipedia.org/wiki/Siesta;Napping associated with 37% decrease in coronary mortality{/weblink}
6. {weblink}https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4642416/;Snacking, associated with shorter sleep{/weblink}
7.1 {weblink}https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3703747/;Shorter sleeping asociated with bad eating habits{/weblink}
7.2 {weblink}https://academic.oup.com/sleep/article-abstract/40/2/zsw057/2662318/Short-Sleep-Duration-Is-Associated-With-Eating;Shorter sleeping asociated with bad eating habits{/weblink}
7.3 {weblink}https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4589504/;Shorter sleeping asociated with bad eating habits{/weblink}
8. {weblink}http://www.sleephealthjournal.org/article/S2352-7218%2815%2900015-7/fulltext;Recommended sleeping times{/weblink}
9. {weblink}https://blog.bufferapp.com/how-much-sleep-do-we-really-need-to-work-productively;Up to 30 minute naps{/weblink}
10. {weblink}http://news.harvard.edu/gazette/story/2007/02/study-shows-importance-of-sleep-for-optimal-memory-functioning/;Impaired ability to get new information{/weblink}
11. {weblink}https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3703169/;Magnesium helps to counter insomnia in elderly{/weblink}
12. {weblink}https://academic.oup.com/sleep/article-abstract/40/2/zsw039/2666485/Eating-Decisions-Based-on-Alertness-Levels-After-a;Not having constant sleep, affects alertness, eating habits (in a bad way){/weblink}
13. {weblink}https://academic.oup.com/sleep/article-abstract/40/1/zsw029/2972132/Sleep-and-Cognitive-Performance-From-Teens-To-Old;Study results show that 7 hours of sleep gives best performance{/weblink}
14. {weblink}https://www.psychologytoday.com/blog/dream-catcher/201508/recent-research-rem-sleep-functions;REM improves learning, cognitive functions{/weblink}
15. {weblink}https://www.ncbi.nlm.nih.gov/books/NBK19956/;Sleep cycles{/weblink}
16.1 {weblink}https://en.wikipedia.org/wiki/Hypnogram;Hypnograms{/weblink}
16.2 {weblink}http://oxfordmedicine.com/view/10.1093/med/9780199674558.001.0001/med-9780199674558-chapter-1;Hypnograms{/weblink}
16.3 {weblink}http://hypnagogia.squarespace.com/blog/tag/hypnogram;Hypnograms{/weblink}
16.4 {weblink}http://healyourselfathome.com/HOW/NEWSTARTS/7_REST/stages_of_sleep.aspx;Hypnograms{/weblink}
16.5 {weblink}http://i.imgur.com/cl8VPVS.gifv;A cat fighting a dog{/weblink}
17. {weblink}http://www.sciencedirect.com/science/article/pii/S1087079207000937;Caffeine sleep latency, no effect on REM (coffee taken 30min before sleep, in 3cups/day individuals){/weblink}
18. {weblink}http://samples.jbpub.com/9781284030273/Chapter1_Secure.pdf;Sleep debt, hypnograms, lots of information{/weblink}
19. {weblink}https://link.springer.com/article/10.1007/s00213-002-1217-9;Coffee can be good{/weblink}
20. {weblink}https://sleepfoundation.org/sleep-topics/what-circadian-rhythm;Cicardian rythm{/weblink}
21. {weblink}http://www.clevelandclinicmeded.com/medicalpubs/diseasemanagement/neurology/sleep-disorders/#top;Sleep hygiene, debt other info, rich article, alcohol{/weblink}
22. {weblink}https://www.ncbi.nlm.nih.gov/pubmed/14582857;Light and Cicardian rythm{/weblink}
23. {weblink}https://www.ncbi.nlm.nih.gov/pubmed/12204388;Caffeine sleep latency{/weblink}
24. {weblink}http://www.sciencedirect.com/science/article/pii/S0031938417301324;Lights effect on circadian rythm{/weblink}
25. {weblink}https://link.springer.com/article/10.1007/s00213-002-1217-9;Navy seals sleep 72h deprivation, caffeine effect{/weblink}
26. {weblink}https://link.springer.com/article/10.1046/j.1446-9235.2003.00006.x;Sleep debt{/weblink}
27. {weblink}http://www.sciencedirect.com.ezproxy.ktu.edu/science/article/pii/S1087079204000607;Melatonin effects on sleep{/weblink}
28. {weblink}http://www.webmd.com/sleep-disorders/features/to-sleep-perchance-to-sleep-soundly#3;Sleeping drugs{/weblink}
29. {weblink}https://en.wikipedia.org/wiki/GABAA_receptor;GABAA receptors{/weblink}
30. {weblink}http://www.everydayhealth.com/gaba/guide/;GABA neurotransmitter{/weblink}
31. {weblink}http://www.webmd.com/vitamins-supplements/ingredientmono-464-gaba%20gamma-aminobutyric%20acid.aspx?activeingredientid=464;GABA supplement{/weblink}
32. {weblink}https://en.wikipedia.org/wiki/Hyperpolarization_(biology);Hyperbolisation{/weblink}
33. {weblink}https://en.wikipedia.org/wiki/Gamma-Aminobutyric_acid;GABA central nevous system neurotransmitters{/weblink}
34. {weblink}https://en.wikipedia.org/wiki/Benzodiazepine;Benziodiazepine{/weblink}
35. {weblink}https://www.ncbi.nlm.nih.gov/pubmed/15649737;Benziodiazepine on REM{/weblink}
36. {weblink}https://eunatural.com/five-important-melatonin-rich-foods/;Melatonin food sources{/weblink}
37. {weblink}http://www.immunehealthscience.com/foods-with-melatonin.html;Melatonin in food{/weblink}
38. {weblink}http://www.onegreenplanet.org/natural-health/foods-that-help-produce-melatonin-oats-bananas-and-more/;Melatonin in food{/weblink}
39. {weblink}https://en.wikipedia.org/wiki/Sleep_onset_latency;Sleep latency test{/weblink}
40. {weblink}https://en.wikipedia.org/wiki/Zolpidem;Zolpidem side effects{/weblink}
41. {weblink}http://www.icadtsinternational.com/files/documents/2013_071.pdf;Benzodiazepine hangover effects{/weblink}
42. {weblink}http://onlinelibrary.wiley.com/doi/10.1046/j.1365-2869.1998.00106.x/epdf;Melatonin effect on sleep{/weblink}


{bold}Other sources:{/bold}
A. {weblink}https://blog.bufferapp.com/how-much-sleep-do-we-really-need-to-work-productively;Women need more sleep than men (20min){/weblink}

B.	{weblink}http://healyourselfathome.com/HOW/NEWSTARTS/7_REST/stages_of_sleep.aspx;Sleeping cycles{/weblink}
C.1	{weblink}http://www.webmd.com/sleep-disorders/features/natural-solutions#2;Magnesium benefits{/weblink}
C.2 {weblink}https://blog.bulletproof.com/sleep-hacking-part-3-falling-asleep-fast-with-biochemistry/;Magnesium benefits{/weblink}
D. {weblink}http://drhyman.com/blog/2010/05/20/magnesium-the-most-powerful-relaxation-mineral-available/;Mark Hyman (doctor) on Magnesium benefits{/weblink}
E. {weblink}http://drhyman.com/blog/2010/05/20/how-to-sleep-better-lose-weight-and-live-longer/;Mark Hyman (doctor) on Magnesium benefits{/weblink}

(In case I have just found the articles to support my pre-build beliefs, present me with facts to counter any idea I am writing about here and I will gladly correct the mistakes made.)
		`,
		date: '2017/05/22',
		paragraphs: function(){
			var array = []
			if(this && this.content){
				array = this.content.split('\n');
			}
			return array;
		},
		topics: ['featured', 'physiology', 'research', 'knowledge', 'productivity']
	});

  	articles.push({
  		timetoread: '7 minute read',
		title: 'More than just a to-do list',
		topic: 'productivity',
		content: `
Today I will share something I found useful over the last year or two. This is a method of destroying the chaos in your mind. Especially if there are many things going on at once. Studies, work, friends, hobbies, sport, long-term goals upcoming events and basically everything you need or want to do.
{italic}Okay Tom, let’s do this. I’m listening.{/italic}
{subheader}1. Preparation{/subheader}
First, get comfy, because it might take a while. Pick your favorite platform to take notes. Something you check at least once per week and it’s not your empty wallet {superscript}(haha I’m assuming you are poor){/superscript}.
So, some forms that can fit the purpose depending on your style:

- {weblink}https://docs.google.com/spreadsheets/u/0/;Google Spreadsheet{/weblink}
- Notebook {superscript}(physical or virtual){/superscript}
- {weblink}https://docs.google.com/document/u/0/;Google Document{/weblink}
- {weblink}https://keep.google.com/u/0/;Google Keep{/weblink}
- Word Document
- Excel Document
- {weblink}https://evernote.com/;Evernote Service{/weblink}
- A simple text document
- Virtual desktop sticky notes [if you’re into these things]
- Simple piece of paper
- Real life sticky notes {superscript}[applied to your household objects, like mirror, fridge, whiteboard, cat or a roommate (not recommended)]{/superscript}

Get a pen, pencil, mechanical keyboard or hire a text transcriber service. And let's get going.
For the exemplary pictures (also my personal recommendation for lists in general) I will be using google spreadsheets. Just in case you chose the paper version, be aware that it would be recommended to start on a draft (throwaway) sheet, go trough the entire process and only once the final version of the list is complete move it onto your main notebook if you have something like that in mind.

{subheader}2. Data collection{/subheader}
That’s the chaotic fun part, start writing things down. What should you write down? Everything. Here are the categories to think about if you need some help with starting:
{bold}Tasks you need to finish.{/bold}
- Get the thing you have lent for someone back
- Finish cleaning up the house
- Pay the taxes
- Answering email requests
- Catch up on university projects
{bold}Something you want to do, but can’t find the time to actually do.{/bold}
- Reading a book
- Watching that TV show (you know, the one, with the thing, the special one)
- Spending time with your family
- Going to a concert
- Fixing some broken thing (a thing in a: car, kitchen, garage, your life)
{bold}Something you want to achieve.{/bold}
- Become fit
- Learn a language
- Eat healthy
- Try out a hobby
- Write a song
- Watch a documentary
- Catch up on your hobby
- Start meditation
{bold}Tasks you think you could be doing instead of filling this list.{/bold}
- The things listed above

{image}http://i.imgur.com/Oz2uPOR.png;Here is my (semi-made up, but close enough to a legit) example;wow amaze{/image}

Now that you have this massive intimidating list. And think that you will never finish even a half of it, take a deep breath, a warm sip of tea/coffee and relax. First of all. It’s out of your head. You no longer need to try to remember what you should be doing, you can look it up. But now what’s the thing that you should be actually doing? Let’s go on and help ourselves to refine this list.
{subheader}3. Structure{/subheader}
You can notice that some tasks are something to work on almost forever (learn a language, read books) and some are just one time things (rearrange the furniture, fix broken thing in the car). What we are going to do is split them into three categories: 
{bold}One time tasks{/bold}
- These are (usually) short, clear tasks. These you can just straight up go and do. It’s that simple. 
{bold}Long-term tasks{/bold}
- These are tasks which have an ending but would take longer than one day or more than one task to accomplish.
{bold}Long-term goals{/bold}
- These are the new habits, the goals in life, something that never ends, and you want it to be a part of your life. These include being healthy, reading more, exercising, etc.
{image}http://i.imgur.com/nILQoAM.png;After restructuring the list it should look something like this;omg wow{/image}

Now that these things are separate, we will be adding extra columns.
So first one is {bold}{italic}WHY{/italic}{/bold}. This generally applies just for the long-term goals, which will be changing your life. Why do you want to incorporate them into your life? Writing down WHY will do one of the following things:
- It will motivate you to take action {bold}{italic},and this is the most important thing,{/italic}{/bold} even more important than making this list, if you can take action at any point in time, you should do that. The list is just a tool to help you pick which action to make, or sequence them to accomplish more using less time. Also, planning helps if you have the problem of being overwhelmed with tasks, trying to pick one to start, but end up doing nothing of value instead.
- Or you might realize you don’t really know why you want something. This might mean that you’re either afraid to admit the reason, or the thing, goal or task is not as important as you have originally thought.

So it is important that you are honest with yourself. If you can’t trust even yourself, there is a bigger problem here than lists, my friend. So be honest, maybe you want to be healthy so you would be attractive so you wouldn’t be alone, {italic}but why wouldn’t you want to be alone?{/italic} Because no one wants to be alone? So it’s solely based on the fact that other people think you shouldn't? Or is it because you are not satisfied being alone? Why are you not complete being alone? This is an entirely different topic, but that’s just an example of being truly honest with yourself. And there is nobody to judge you on your list. Maybe you want to learn german, so you could start a movement against a specific race of people? Nobody can judge that, and if it motivates you to become the next great leader, may it be so.
{image}http://i.imgur.com/NKEwGfZ.png;a generalized example of reasoning for some things;much reason{/image}

Our next column is the tasks column. Now you probably have some tasks, which require multiple steps or can be done in countless different ways. We have to make them real. At the moment they are just ideas, but once we squash some tasks out of it. We can take those specific tasks, do them. Literally make ideas, dreams and concepts become tangible things that you can take action to achieve.
{image}http://i.imgur.com/DQOpoZE.png;here is how it looks after this step;be specific!{/image}

During this process. I guarantee that some tasks have been modified, some have been completely renamed, merged or split into several. And this is good this is what we want. A bunch of tasks that we can just take on, rather than wonder about which one is the most complicated. Now we will take all the specific tasks and the column with broken down tasks and merge them into one list of doable things.
It should be looking like the first list once again. But this time all the tasks are specific.
 
{bold}4. Prioritizing{/bold}
This, my friends, can be done in many ways. You can use colors, letters, quadrants or just sequence them out by importance. My suggested approach starts from putting a letter aside each task, A, B, C. In order of importance.
Now that we have that, put all the A’s in the top, followed by B’s and C’s.
{image}http://i.imgur.com/oYKPqhy.png;Hey, I know this is getting ridiculous, but bear with me. It’s going to end up amazing, trust me.;It’s true.{/image}

This list still might have some tasks that you can’t actually complete these are usually the ones from life goals section and must be done periodically (daily, weekly, monthly) let’s separate them into periodic tasks.
And some ‘tasks’ might be something that you have to do, but you can’t do it on demand because it’s not Netflix and it requires an opportunity. It might be standing up for yourself, asking someone you like out or holding your ground in the face of fear or something like that. These we will split into a category called {bold}{italic}my personal core.{/italic}{/bold} This list is special and it should ideally be written down on a piece of paper and it should be read every day it’s kind of like installing an application but in this case an idea, a habit. An inception if you will. If you have it in you, when the time comes you would know what you have to do to stay true to yourself.
{image}http://i.imgur.com/OCzFtCu.png;this is how our example list looks like after the split;just one more step{/image}

{bold}5. Shaping the plan{/bold}
{bold}Dailies{/bold}
After filtering, splitting, merging  and doing it all over again. We should have some specific daily tasks on our hands now. If there are a lot of new tasks for you, take them up one at a week, or one at a month, habit forming is a different topic, all I can say for now, even if it is obvious: trying to form several new habits instantly is not the best strategy. It might burn you out, link negative feelings with them.
Let’s say you miss a day, and then think that the point is lost because the streak is lost. Now the next section might sound the most cliché thing in the entire self-development topic, but don’t give up.
Nothing is set in stone and things happen, you can’t be a robot, you can try, but something at some point might stop you and whenever you encounter a ‘failure’ or a missed daily you are presented with a rare opportunity. A rare opportunity to see how you will act in the face of hardship, in the face of negativity - losing your streak. You have the chance to prove that you won’t give up and one missed day will not have decades of impact. Take this opportunity and go on, hustling and proving that you are the blacksmith of your future.
{bold}To do list{/bold}
{image}http://i.imgur.com/pHTLpAL.png;this is the result, all you need to do to complete everything{/image}
This list now prioritized will help you to pick the next thing to do. I like to colorize it into three categories, cause apparently, I might have a fetish for categorizing things.
 - {bold}The top 5{/bold}{superscript}[Green]{/superscript} The things you chose to complete during the next week or days depending on their urgency, importance and time demand.
 - {bold}The next three things{/bold}{superscript}[Gray]{/superscript} The things to have in mind after the top 5 things are done. It's meant to make your subconscious keep them in mind.
 - {bold}The free agents{/bold}{superscript}[Gray]{/superscript} These are the tasks you need to do, but it’s not urgent. If you have a window of time, you can skim trough them and place it into your week or day once you see an opportunity. It's like playing Tetris, instead of different shaped blocks you have different duration tasks and you try to make your day complete.
- {bold}Something in the way / Out of your influence{/bold} Some tasks require prior tasks to be done or something out of our influence to change in order for them to be ‘unlocked’. So I suggest separating those aside, it helps to keep track of their availability.
{weblink}https://docs.google.com/spreadsheets/d/1Mvn6zQHnFuf04BW0ZkL8ux_iGxbHrXX-Z9QcXvGnq20/edit?usp=sharing;Actual example list with all the steps from before{/weblink}
{italic}The things which are the most important and have the biggest impact on the outcome of your life are the little day to day things you do and the choices you make every day.{/italic}
		`,
		date: '2017/03/31',
		paragraphs: function(){
			var array = []
			if(this && this.content){
				array = this.content.split('\n');
			}
			return array;
		},
		topics: ['featured', 'blog', 'productivity', 'lists', 'exercise']
	});

	articles.push({
		title: "Mobile users: welcome! (also what's next)",
		topic: 'developing',
		content: `
		Yes, I'm still working on the technical stuff.\n
	 But worry not! The only thing I need to do before I can consider this kinda good to go is to do something to filter posts by categories! I mean nobody really wants to read all of this development shit.{superscript}(or any other sort of information in a text form, which does not come pre-packaged in a form of a meme){/superscript}\nBUT, I'm here with a different purpose. It is to share cool things I find. And I do look for cool stuff all the time.\n
	 First thing to actually read here should come out by the end of this month. I've got hopes. A boy can dream, right. Lel, well the only obstacle is myself now so I kinda have to do it.\n
	 Actually it's really hard to say what my plans are, because that would create assumptions in the brain that someone has read it and has some sort of expectations, now when there are expectations there is pressure and pressure either helps to go on and do it, or does the opposite and I'd just keep procrastrinating or coding technical stuff forever.\n
	 {subheader}What's the solution?{/subheader}
	 I don't know. I won't tell you everything. But I will have something interesting for me, researched at least a bit. Posted here by the end of the month. Or I will have to sell this domain. :D\n
	 {gif}http://i.imgur.com/OVmuHTA.gifv;just be yourself and follow your dreams{/gif}
		`,
		date: '2017/03/13',
		paragraphs: function(){
			var array = []
			if(this && this.content){
				array = this.content.split('\n');
			}
			return array;
		},
		topics: ['developing', 'blog']
	});

	articles.push({
		title: 'Rich text and dank memes',
		topic: 'developing',
		content: `
		So now I can do any custom styling for this text area. And even gifs! And that's all I really need to be honest. Gifs.\n
		{gif}http://i.imgur.com/AeY7KSb.mp4;coding is easy, the real challenge is to make it look good{/gif}
		{subheader}Now what?{/subheader}
		Well I still need to do some development updates on the platform. I need categories, database or something similar to a database. I need one page with featured posts, another with all posts for hypothetical readers which would like to read literally everything {superscript}(page for myself){/superscript}. Oh I need to do that loading posts forever thing as well, because a few posts later the scroll bar will be intimidating AF. I mean attention span has its limits. Also I need a way to display emotions. Like Kappa for instance.\n
		After these development things have settled down I've got plans. With real content and stuff. Like actually useful and/or interesting. But only if you like interesting stuff tho.
		`,
		date: '2017/02/26',
		paragraphs: function(){
			var array = []
			if(this && this.content){
				array = this.content.split('\n');
			}
			return array;
		},
		topics: ['developing']
	});

	articles.push({
		title: 'post from raspberry pi',
		topic: 'blog',
		content: `So, if this works. If I, and you are seeing this. Then the server is set up 24/7 and I'm happy. If you are not seing this. Then I am most likely slightly annoyed, but still. Mostly happy, cause I'm me. Thanks for reading by the way. Still working on the rich text for now (way too much effort dedicated for that, but hey. as long the motivaton is there, right?)`,
		date: '2017/02/22',
		paragraphs: function(){
			var array = []
			if(this && this.content){
				array = this.content.split('\n');
			}
			return array;
		},
		topics: ['developing', 'blog']
	});

	articles.push({
		title: 'work in progress, k. just bear with me for a whil.',
		topic: 'blog',
		content: `After writing something more than a couple of sentenses. I realised this is not the most readable font in the world. Not even getting close really. Like it wouln't even get picked for readable font special olympics. That's how bad this reading experience is at the moment.`,
		date: '2017/02/22',
		paragraphs: function(){
			var array = []
			if(this && this.content){
				array = this.content.split('\n');
			}
			return array;
		},
		topics: ['developing', 'blog']
	});

	articles.push({
		title: 'recursive madness',
		topic: 'developing',
		content: `So I want to display an image, right? The way (i think) React works, I'm thinking I can make and invoke a component something like <Image url="" caption="/> and then chose how to diplay it by tinkering the code from within component/css.\n
		Now the problem is that the <Image/> would reside within an article post surrounded by text and stuff from both sides. And once I pass something like 'Hello, this is an <Image/> can you see it?' the displayed result will just escape the HTML and show it as NOT a component.\n
		I've been looking for ways to get this done, but didn't really have any success and my Image component is now useless :(, but  I've had another brilliant (but really, mad) idea. So here it is:\n
			What if I break down every text bit into an array of objects and split it down to every rich text (or any other made up) tag that needs special treatment and get those all in one place and then when displaying I do some round trip iteration trough all the objects and just apply the effects if needed by classes or whatever.\n
			Well yea so thinking for a while I realised that the tags can be nested and stuff can be underlined, overlined, striked, bolded and all at different places. And I'm kind of reinventing the wheel here. But to be honest I'm doing that with this entire website so seems like I'm on the right track, lol.\n
			For the concept proof I made up an input value and then tried to render by mind what should be the output:\n
		Input:{subscript}This had to be modified, because the tags started actually working eventualy, and I've got no escape mechanism.{/subscript}\n

		[['This is {strike}paragraph one {b}bold {underline}danke{/underline} memes text{/b} some other{/strike} text {b}bold text{/b}'],..]\n
		Output (dashes means expanded object from above):\n
		'this is ',\n
		{type:'strike',value:['paragraph one ', {object}, 'some other'},\n
		----{type:'bold',value:['b ', {object}, 'memes text']}\n
		--------{type:'underline',value:['danke']}\n
		' text ',
		{type:'b', value:'bold text'}\n\n
		So up to this point I have made the code that kind of works, but I messed up with the tag sequencing check. And if the tags are used in the same sequence that I check them in it should work, but if you use STRIKE first and then BOLD, the bold will get detected and tear up the strike and it will never be seen so I need to fix that, but here's my retarded tag parsing code:\n
		https://pastebin.com/Dr7cTaya\n
		It's one thing to put everything in objects like that, but then it will be another clusterfuck to get them out of the objects and arrays. I should also test if that would even work with the React way of things. Either way trying to solve such a problem is quite interesting so far. Time spent / value gained is not the best, but hey.`,
		date: '2017/02/21',
		paragraphs: function(){
			var array = []
			if(this && this.content){
				array = this.content.split('\n');
			}
			return array;
		},
		topics: ['developing']
	});


	articles.push({
		title: 'this is doing things',
		topic: 'developing',
		content: `New lines are the shit, right? \nWell I like them so they are here to stay. I mean the way I implemented them sounds just wrong. But hey, works for now. I would show you whats wrong, but I need a way to display images as well. Yea fuck the mobile for now, since I can add new articles easily, I might as well make them more beautiful.\nTODO: images, styles (bold and stuff), mobile vision, categories, draft`,
		date: '2017/02/19',
		paragraphs: function(){
			var array = []
			if(this && this.content){
				array = this.content.split('\n');
			}
			return array;
		},
		topics: ['developing']
	});

	articles.push({
		title: 'react hello world',
		topic: 'developing',
		content: `Hello. I don't know yet how to add new line or anything. Don't know how to style this thing, but it's here. And it works, at least while my computer is on, and I have a command line window open at a specific location and have typed in the command to start the server. Next things on my to do list: how to make new lines (paragraphs) <br> </br> \\n, how to store many articles and display them dynamically, and displaying images. I think. EDIT: I have some updates (obviously I can style this now, but I don't have dynamic article things, so can't post 2nd article. Also need some mobile scaling.`,
		date: '2017/02/18',
		paragraphs: function(){
			var array = []
			if(this && this.content){
				array = this.content.split('\n');
			}
			return array;
		},
		topics: ['developing']
	});

	//var contentValues = [];

	// articles = articles.reverse();

	// eslint-disable-next-line
	const content = articles.map(function(article, key) {
		for(var i = 0; i < filters[filter].length; i ++){
			if(article.topics.includes(filters[filter][i])){
				return <Article key={key} article={article}/>
			}
		}
	});

    return (
      	<div>
      		{content}
      	</div>
    );
  }
}
export default Content