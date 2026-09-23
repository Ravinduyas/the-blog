import { BlogPost } from '../types';

/**
 * Traveller-facing editorial covering Sri Lanka's south coast — Down South.
 * Body copy supports inline [label](url) links, which is where partner
 * businesses pick up their backlinks in-context.
 *
 * Every article carries a photograph: `heroImage` for the article banner (and,
 * on the text-style tiles, the card backdrop), or `tileConfig.mockupImage` for
 * the two card styles that frame a picture themselves. All photographs are
 * hosted on Unsplash and licensed for free use.
 */
export const BLOG_POSTS: BlogPost[] = [
  // 1
  {
    id: 'blue-whales-off-mirissa',
    title: 'Blue Whales off Mirissa: What a Dawn Boat Trip Is Really Like',
    category: 'Wildlife & Safari',
    date: 'August 14, 2026',
    readTime: '6 min read',
    author: 'Macka',
    excerpt: 'Hour by hour out of Mirissa harbour — the 6am start, the seasickness nobody warns you about, and whether you actually see a blue whale.',
    visualType: 'destination-split',
    tileConfig: {
      bgColor: '#e3dcd1',
      textColor: '#222222',
      topLabel: 'wildlife encounter',
      headlineText: 'Blue Whales off Mirissa',
      partnerName: 'Mirissa Blue Whale Tours',
      mockupImage: 'https://images.unsplash.com/photo-1772738358893-b9884e7b5712?auto=format&fit=crop&w=800&q=80',
    },
    content: {
      introduction: [
        'Mirissa sits closer to deep water than almost anywhere else in Sri Lanka. A few kilometres past Dondra Head the continental shelf drops away, and the blue whales that move between the Arabian Sea and the Bay of Bengal pass along that edge, close enough that a fishing town of a few thousand people has become one of the most reliable places on earth to see the largest animal that has ever lived.',
        'It also means a lot of boats leave that harbour at dawn, and they are not all run the same way. We went out with [Mirissa Blue Whale Tours](https://mirissabluewhale.lk) to describe the morning honestly — the parts that are wonderful, the parts that are uncomfortable, and the parts the brochures leave out entirely.'
      ],
      steps: [
        {
          title: '05:45 — The Alarm',
          description: 'Boats leave between 06:30 and 07:00, and the harbour is a ten-minute tuk-tuk from anywhere in Mirissa, so you are up before the sun. Eat something small and plain. Take your seasickness tablet now, not on the boat — they need an hour to work, and by the time you feel ill it is too late for them to help.',
          tip: 'If you are staying in Weligama or Ahangama, book a tuk-tuk the night before. Drivers are thin on the ground at 05:45 and the PickMe app is unreliable at that hour.'
        },
        {
          title: '06:15 — The Harbour Before Light',
          description: 'Mirissa Fisheries Harbour smells of diesel, fish and strong tea. Twenty or thirty boats are boarding at once, from two-deck tourist vessels holding sixty people down to converted fishing boats carrying a dozen. It looks chaotic, and it is, but the fleet leaving together matters later: once anyone finds whales the sighting is shared by radio, so a big fleet is, oddly, in your favour.\n\nYou will be given a life jacket and shown a seat. Go for the upper deck if there is one and sit towards the middle of the boat, where the movement is smallest. The front looks exciting and is where people are sick.'
        },
        {
          title: '07:00 — Leaving the Headland',
          description: 'For the first half hour the water is sheltered and the coast slides past: Coconut Tree Hill, the lighthouse at Dondra, the stilt-fishing platforms. Then the boat clears the headland and meets the open Indian Ocean swell, and everyone understands why the tablet mattered. It is not usually rough, but it is a long, slow roll that a lot of people have never felt before.\n\nThis is the stretch where the crew hands round breakfast — a sandwich, a banana, tea from a flask. Eat it if you can. An empty stomach is worse than a full one.'
        },
        {
          title: '07:30 — An Hour of Nothing, Then Spinner Dolphins',
          description: 'The middle of the trip is open water and patience. The boat heads out towards the shipping lane where the shelf drops, and the crew and the marine guide scan the horizon for a blow. Most mornings the first thing you see is not a whale at all but spinner dolphins, sometimes a pod of a few hundred, leaping clear of the water and riding the bow wave for a while before losing interest. It is worth the trip on its own.\n\nA good guide uses this hour. Ours explained how blue whales feed, why they come to this coast, and how to read a blow at distance — a tall, straight column for a blue, a short angled puff for a sperm whale.'
        },
        {
          title: '08:30 — The Blow',
          description: 'A blue whale exhale is visible from a long way off — a column of mist nine or ten metres high that hangs in the air for a moment. The boat slows and turns towards it, and then you wait, because a blue whale surfaces for a few breaths and then dives for ten or fifteen minutes.\n\nWhat surprises people is how little of the animal you actually see. There is the blow, then a long, slow, mottled grey-blue back that seems to go on for an impossible time, then a small dorsal fin, then — if you are lucky, and on perhaps half of sightings — a raised tail fluke as it dives. That is it. It is quieter and stranger than you expect. Nobody cheers. Most people just go silent.'
        },
        {
          title: 'The Rules, and Why They Matter',
          description: 'Sri Lanka’s whale-watching guidelines ask boats to stay at least a hundred metres from a whale, approach from the side and behind rather than head-on, and never position a boat in the animal’s path. Not every operator follows this. On a busy morning you will see boats racing each other to a sighting and cutting across a whale’s line, and the animal responds by diving early and staying down longer, which is worse for everyone.\n\nThe operator we recommend keeps its distance, waits for the whale to come up on its own terms, and does not chase. The sightings are just as good — better, usually, because a whale that is not being harassed tends to hang around.'
        },
        {
          title: '10:30 — The Ride Home',
          description: 'Once the boat has spent time with a whale, or once the morning is clearly not going to produce one, it turns for the harbour. The swell is behind you now and the ride is gentler. Most trips are back between 10:30 and 11:30, though a distant sighting can stretch it past noon. Plan nothing for the afternoon. You will be sunburnt, salt-crusted and quietly tired, and a hammock is the correct response.'
        },
        {
          title: 'Details Worth Copying Down',
          description: 'The things you will want on your phone the night before:',
          codeSnippet: `Departure: Mirissa Fisheries Harbour, Mirissa 81740
Boarding: 06:15 for a 06:30 departure
Season: November to April (best December to April)
Also seen: sperm whales, Bryde's whales, spinner dolphins, occasional orcas
Bring: seasickness tablet (take it 1 hr before), hat, sunscreen, dry layer, water
Wear: something you do not mind getting wet; leave the camera drybag open
Duration: 3-5 hours, sometimes longer if the whales are far out
Price: roughly USD 40-60 per person, breakfast usually included
Rebook: ask before paying whether a no-sighting trip earns a free second go`
        }
      ],
      keyTakeaways: [
        'Take a seasickness tablet an hour before boarding even if you never get seasick — the swell past the headland is real.',
        'Choose an operator that keeps its distance rather than one that races other boats to a sighting.',
        'Sightings are never guaranteed. Ask about the rebook policy before you pay.',
        'Blue whales are here November to April. From June to September the whales are off Trincomalee on the east coast instead.'
      ],
      conclusion: 'A whale trip out of Mirissa is one of the few genuinely bucket-list mornings on this coast, and it is also three hours on a rolling boat that starts before dawn. Go in with the tablet taken, the expectations calibrated and an operator that respects the animals, and it will be the morning you talk about for years.'
    }
  },

  // 2
  {
    id: 'best-things-to-do-down-south-sri-lanka',
    title: 'Down South Sri Lanka: 15 Best Things to Do on the South Coast',
    category: 'Destination Guides',
    date: 'August 10, 2026',
    readTime: '8 min read',
    author: 'Macka',
    excerpt: 'Galle Fort to Tangalle: the beaches, safaris, food and slow afternoons worth your time — and the famous stops you can safely skip.',
    visualType: 'quote-minimal',
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1579989197111-928f586796a3?auto=format&fit=crop&w=1400&q=80',
    tileConfig: {
      bgColor: '#c3c8cf',
      textColor: '#272d34',
      headlineText: 'down south sri lanka: 15 best things to do on the south coast',
      buttonText: 'READ THE GUIDE',
    },
    content: {
      introduction: [
        'Down South is the stretch of coast from Galle to roughly Tangalle — about ninety minutes of driving that somehow holds Dutch ramparts, blue whales, leopards, surf breaks for every level, and some of the best food in the country.',
        'This guide is ordered the way we would actually spend time here, west to east, with honest notes on which famous stops repay the effort and which are simply famous. Fifteen is a lot; nobody needs all of them. Pick the six or seven that sound like you and leave the rest for a second trip.'
      ],
      steps: [
        {
          title: '1. Walk the Galle Fort Ramparts at Golden Hour',
          description: 'The single best free hour Down South. The Dutch built the fort walls in the 1660s on top of a Portuguese original, and they still enclose a living town of narrow streets, mosques, churches, cafés and a working courthouse. Start near the lighthouse around five in the afternoon and walk anticlockwise along the top of the wall as the light goes — cricket on the green below, kids jumping off the Flag Rock bastion into the sea, the whole town out for a stroll. Finish at the clocktower as the lights come on.'
        },
        {
          title: '2. Go Out for Blue Whales from Mirissa',
          description: 'Between November and April this is the one splurge we recommend without hesitation. The continental shelf runs close to shore here and blue whales pass along its edge, so a three-hour boat from Mirissa harbour has a genuinely good chance of putting you beside the largest animal that has ever lived. We wrote a full hour-by-hour account of a dawn trip with [Mirissa Blue Whale Tours](https://mirissabluewhale.lk), including the seasickness advice everyone ignores.'
        },
        {
          title: '3. Learn to Surf at Weligama, Then Graduate to Hiriketiya',
          description: 'Weligama Bay is a wide, sand-bottomed, forgiving beach break made for first lessons, with surf schools lined up along the sand and boards for a few dollars a day. Two lessons will get most people standing. Once you can, Hiriketiya’s mellow left, forty minutes east, is the friendliest next step on the coast.'
        },
        {
          title: '4. Take a Dawn Jeep into Yala',
          description: 'Leopard density in Yala National Park is among the highest anywhere. Go at 05:30 when the gate opens, accept that you may not see one, and enjoy the elephants, water buffalo, crocodiles, spotted deer and peacocks that you certainly will. Yala is busy — the queue of jeeps at the gate is a genuine shock the first time — but the first hour of light inside is still extraordinary.'
        },
        {
          title: '5. Eat Rice and Curry Properly, at Least Once',
          description: 'Not a curry — a dozen small dishes around a mound of rice, each doing something different: a dhal, a coconut sambol, a jackfruit curry, something sour with fish, something sweet with pumpkin. It is a lunchtime thing, eaten in busy local places rather than hotels. A guided walk with [Galle Fort Food Walks](https://gallefortfoodwalks.lk) on your first evening teaches you what to point at for the rest of the trip.'
        },
        {
          title: '6. Swim at Dalawella, Not Unawatuna',
          description: 'Unawatuna is fine and very busy. Ten minutes west along the coast, Dalawella (also signposted as Wijaya Beach) has a reef-sheltered lagoon that stays swimmable when the rest of the coast is churning, green turtles that graze in the shallows most afternoons, and the famous palm-tree rope swing. Arrive before ten if you want the swing without a queue.'
        },
        {
          title: '7. Skip: the Turtle “Hatcheries” on the Main Road',
          description: 'Many are tanks of stressed hatchlings kept for photographs, released days late when their energy reserves are gone. If you want turtles, go to Rekawa, east of Tangalle, after dark with the community conservation project and watch a female come ashore to nest instead. Nesting happens year-round with a peak from April to July; you may wait two hours on a dark beach, and it is worth every minute.'
        },
        {
          title: '8. See the Stilt Fishermen — With Your Eyes Open',
          description: 'The wooden poles in the shallows between Koggala and Ahangama are one of the most photographed sights in the country. Be honest with yourself about what you are seeing: very little real fishing happens from them now, and the men on the poles at midday are there for the photographers who pay them. That is a fair trade if you know it. Go at dawn, pay a few hundred rupees without arguing, or simply watch from the road and keep your camera away.'
        },
        {
          title: '9. Visit a Tea Estate Without Going to the Hills',
          description: 'Handunugoda, twenty minutes inland from Ahangama, is a working low-country estate that grows the rare “virgin white tea” picked by hand with scissors and never touched by skin. The tour is free, the tasting is generous, and the walk through cinnamon and rubber to the old planter’s bungalow is a proper afternoon. It is a good answer to the question of whether you need to leave the coast for tea.'
        },
        {
          title: '10. Climb Coconut Tree Hill and Parrot Rock at Mirissa',
          description: 'Coconut Tree Hill is a headland of palms above a small bay at the eastern end of Mirissa, and yes, it looks exactly like the photograph. Go at seven in the morning when it is empty. Parrot Rock, the small island at the western end of the main beach, is reachable on foot at low tide and has the best view of the whole bay from its top.'
        },
        {
          title: '11. Watch the Hummanaya Blowhole — In the Right Season',
          description: 'At Kudawella, between Dikwella and Tangalle, seawater is forced up through a crack in the cliff and fires twenty metres into the air. It only really performs on a big swell, which means the southwest monsoon months from June to September. In the calm season it is a wet rock. Check before you drive.'
        },
        {
          title: '12. Stand Under the Wewurukannala Buddha',
          description: 'The largest seated Buddha statue in Sri Lanka, fifty metres high, sits in a temple just inland from Dikwella. The statue itself is impressive; the “tunnel of hell” beneath it — a garish, hand-painted gallery of the punishments awaiting sinners — is something you will not forget. Shoulders and knees covered, shoes off, small donation.'
        },
        {
          title: '13. Reach the Southern Tip at Dondra Head',
          description: 'The lighthouse at Dondra, just east of Matara, marks the southernmost point of the island. The tower is closed to visitors, but the point itself, with nothing between you and Antarctica, is a good place to be at the end of a day. The Dondra temple complex nearby is one of the oldest sites on the coast.'
        },
        {
          title: '14. Take the Afternoon Drive at Udawalawe',
          description: 'If you have one safari in you and what you actually want is to watch large animals behave normally, skip the Yala queue and head ninety minutes north to Udawalawe. The park is open grassland around a reservoir and elephants are almost guaranteed, in herds, in the open, at distance. We wrote a full guide to the afternoon drive with [Yala Leopard Safaris](https://yalaleopardsafaris.lk), who run both parks.'
        },
        {
          title: '15. Spend a Day in the Rainforest at Sinharaja',
          description: 'Two hours inland from Galle, Sinharaja is the last large tract of primary lowland rainforest in Sri Lanka and a UNESCO site. A guided walk from the Deniyaya or Kudawa side turns up endemic birds, giant squirrels, leeches (wear the socks they give you) and a silence you will not find on the coast. Even one day away from the sand recalibrates the whole trip.'
        },
        {
          title: 'A Five-Day Shape That Works',
          description: 'If you want the whole thing in one copyable block:',
          codeSnippet: `Day 1  Arrive Galle, ramparts at sunset, food walk in the Fort
Day 2  Dalawella swim + Handunugoda tea estate, sunset at Ahangama
Day 3  06:30 Mirissa whale boat, afternoon doing nothing
Day 4  Surf lesson Weligama or Hiriketiya, Coconut Tree Hill sunset
Day 5  05:30 Yala or 15:00 Udawalawe jeep, night in Tissamaharama

Base: Galle or Ahangama for days 1-4, move east for the parks
Season: December to April (southwest monsoon May to September)`
        }
      ],
      keyTakeaways: [
        'Five days is the minimum that does not feel rushed; a fortnight Down South is no hardship at all.',
        'Base yourself in two places, not five — the coast road is slow and the driving eats your days.',
        'December to April is the dry season here. May to September belongs to the east coast instead.',
        'The famous stops that disappoint are the ones built for photographs. The ones that deliver are the ones that were there first.'
      ],
      conclusion: 'You will not do all fifteen, and you should not try. The south coast rewards people who pick a base, walk to breakfast, and let one good thing happen each day. Everything on this list will still be here next time.'
    }
  },

  // 3
  {
    id: 'where-to-surf-down-south',
    title: 'Where to Surf Down South: Weligama to Hiriketiya, Beginner to Barrel',
    category: 'Surf & Beaches',
    date: 'August 05, 2026',
    readTime: '6 min read',
    author: 'Macka',
    excerpt: 'An honest break-by-break guide to the south coast — which sand is forgiving, which reef is not, and where to go on your third day.',
    visualType: 'quote-minimal',
    heroImage: 'https://images.unsplash.com/photo-1752498227860-2932be334fe9?auto=format&fit=crop&w=1400&q=80',
    tileConfig: {
      bgColor: '#e2b3a3',
      textColor: '#3a2018',
      headlineText: 'where to surf down south: weligama to hiriketiya, beginner to barrel',
      buttonText: 'READ THE GUIDE',
    },
    content: {
      introduction: [
        'The south coast is one of the gentlest places in the world to learn to surf, and it also has a handful of shallow reef breaks that will happily hold you under. Knowing which is which is the entire trick, and it is not always obvious from the beach.',
        'Here are the breaks in order of how forgiving they are, running from your very first lesson to the day you stop needing one. All of them are within an hour of each other along the coast road, so you can move up the list as the week goes on.'
      ],
      steps: [
        {
          title: 'Weligama Bay — Your First Ever Wave',
          description: 'A wide, two-kilometre sand-bottom bay with waves that crumble rather than break. It is busy, the line-up is mostly other beginners on soft-tops, and the surf schools are lined up along the sand — which is exactly what you want on day one. Waves are small and slow, the water is warm, and there is nothing underneath you but sand.\n\nThe bay works at almost every tide and picks up swell even when the reefs are flat. The trade-off is wind: by ten in the morning it is usually onshore and messy, so early is everything.',
          tip: 'The eastern end of the bay, near the island, is slightly cleaner and less crowded than the stretch directly in front of the main road.'
        },
        {
          title: 'Hiriketiya — The Friendly Left',
          description: 'A small horseshoe bay near Dikwella, forty minutes east of Weligama, that has become the most talked-about surf spot on the coast. There are two waves: a mellow left that peels off the rocks at the western end and runs a long way across the bay, and a punchier beach break in the middle that gets steep at higher tide. The left is where beginners graduate to; the middle is for people who know what they are doing.\n\nThe bay is small and it gets crowded by mid-morning. We stay at [Hiriketiya Surf House](https://hiriketiyasurfhouse.lk), two minutes from the sand, when we want dawn sessions without a drive.'
        },
        {
          title: 'Kabalana (The Rock) — The Step Up',
          description: 'Between Ahangama and Weligama, Kabalana has a long beach break that handles size better than Weligama and, at its eastern end, an A-frame reef peak called The Rock that is the best intermediate wave on the coast. Rights and lefts, punchy but not vicious, over reef that is deep enough to forgive most mistakes. It is a reasonable next step once you can turn and pick a line.'
        },
        {
          title: 'Ahangama — Marshmallows and the Inside Reefs',
          description: 'Ahangama has become the base of choice for people who surf every day, and the reason is choice. Marshmallows, in front of the main village, is a soft reef break so gentle that it is used for children’s lessons. Sticks and Insight, a little further along, are longer reef lefts and rights for confident intermediates. Everything here is within a bike ride.'
        },
        {
          title: 'Mirissa — The Point and the Beach',
          description: 'Most people know Mirissa for whales, but the eastern end of the main bay has a right-hand point break that is a real wave on the right swell, and the beach break in the middle is a decent option for improvers when Weligama is blown out. Watch for the rocks at the point and the swimmers in the middle.'
        },
        {
          title: 'Midigama — Where It Gets Serious',
          description: 'Between Ahangama and Weligama, Midigama is the reef-break capital of the coast. Lazy Left is a long, slow, forgiving left over reef that intermediates love. Lazy Right, opposite, is a shorter, steeper right. Ram’s Right, a few hundred metres east, is a hollow, fast, shallow right over sharp coral that barrels on its day and is not a place to learn anything. Plantations and Coconuts, further along, sit somewhere in between.\n\nGo with reef booties, go on a small day first, and do not paddle out at Ram’s in your first week. Coral cuts here get infected fast in the heat.'
        },
        {
          title: 'Madiha and Polhena — The Matara Reefs',
          description: 'East of Weligama, just before Matara, Madiha has a long, mellow reef left that is quieter than anything further west and suits confident intermediates. Polhena, next door, is better known for its sheltered swimming reef but has a small wave for beginners on the right day.'
        },
        {
          title: 'Talalla and Dikwella — Beach Breaks with Room',
          description: 'If Hiriketiya is heaving, Talalla’s long crescent bay to the west has a beach break with space, and Dikwella’s main beach has a similar setup. Neither is a world-class wave; both are good places to put in hours without fighting for a peak.'
        },
        {
          title: 'The Break-by-Break Cheat Sheet',
          description: 'Copy this to your phone and match it to your level:',
          codeSnippet: `BEGINNER (never stood up / first week)
  Weligama Bay      sand, slow, surf schools, go before 09:00
  Marshmallows      soft reef, Ahangama, tiny waves, kids welcome
  Talalla / Dikwella  beach breaks with space

IMPROVER (standing, learning to turn)
  Hiriketiya left   long mellow left, crowded by 09:00
  Mirissa beach     middle of the bay, watch for swimmers
  Kabalana beach    handles more size than Weligama

INTERMEDIATE (confident on green waves)
  Kabalana The Rock   A-frame reef peak, best wave for this level
  Lazy Left           Midigama, long forgiving reef left
  Madiha              quiet reef left near Matara
  Sticks / Insight    Ahangama reef lefts and rights

ADVANCED
  Ram's Right       Midigama, shallow, hollow, barrels
  Hiriketiya middle   steep beach break at higher tide
  Mirissa point       right-hander, needs solid swell

Season: November to April. Dawn patrol for clean conditions.
Reef: booties, small day first, never at low tide on a big swell.`
        }
      ],
      keyTakeaways: [
        'Surf season Down South runs roughly November to April, cleanest in the early morning before the wind gets up.',
        'Rent a board locally rather than flying one in — every bay has boards for a few dollars a day, and airlines here charge a lot for a board bag.',
        'Reef breaks demand booties and humility. Coral cuts here get infected fast in the heat; clean them with fresh water and iodine the same day.',
        'Line-up etiquette is the same as everywhere: closest to the peak has priority, do not drop in, and apologise when you get it wrong.'
      ],
      conclusion: 'The beauty of this stretch is that a beginner and an expert can stay in the same guesthouse and both have the best week of their year. Start at Weligama, let the coast pull you east, and know the name of the reef before you paddle out over it.'
    }
  },

  // 4
  {
    id: 'how-to-pick-the-right-south-coast-beach',
    title: 'How to Pick the Right South Coast Beach (Swimming, Surfing or Sunsets)',
    category: 'Surf & Beaches',
    date: 'July 28, 2026',
    readTime: '5 min read',
    author: 'Macka',
    excerpt: 'Not every beautiful beach Down South is safe to swim at. Here is how to read a bay before you get in.',
    visualType: 'graphic-bold',
    heroImage: 'https://images.unsplash.com/photo-1696345592134-d5bd0886292a?auto=format&fit=crop&w=1400&q=80',
    tileConfig: {
      bgColor: '#343a40',
      textColor: '#f8f9fa',
      topLabel: 'beach tip',
      headlineText: 'how to pick the right south coast beach (swimming, surfing or sunsets)',
    },
    content: {
      introduction: [
        'The south coast has beaches that look identical in photographs and behave completely differently in the water. Some are lagoons you could nap in. Others have rip currents that have killed strong swimmers, and there is usually no flag, no lifeguard and no sign to tell you which is which.',
        'Here is how to tell them apart before you are standing on the sand in your swimsuit, followed by an honest list of which beach to use for what.'
      ],
      steps: [
        {
          title: '1. Look for a Reef, Not a View',
          description: 'The safest swimming Down South is where a reef sits offshore and flattens everything behind it — Dalawella, Polhena, Jungle Beach and the sheltered western corner of Hiriketiya. The water inside is calm, clear and shallow, and the waves break harmlessly on the reef a hundred metres out.\n\nIf waves are breaking directly on the sand, treat it as a surf beach whatever the guidebook says. The bigger and cleaner the waves look, the more water is moving, and all of that water has to get back out to sea somehow.'
        },
        {
          title: '2. Learn to Spot a Rip',
          description: 'A rip current is the channel where that water leaves. From the beach it looks like a strip of flatter, darker, slightly discoloured water running out through the line of breaking waves, often with foam or debris drifting seaward along it. Flat does not mean calm here — it usually means outbound.\n\nIf you get caught in one, do not swim against it. Float, raise an arm, and swim parallel to the beach until you are out of the channel, then let the waves bring you in. Rips are narrow; they pull you out, not under.'
        },
        {
          title: '3. Match the Beach to the Hour',
          description: 'Mornings are glassy and calm almost everywhere on this coast. By late morning the onshore wind picks up, the sea gets choppy and the sun becomes genuinely dangerous. Swim early, hide from eleven until three, and come back out for the last two hours of light.\n\nSunsets belong to the west-facing spots — the Fort ramparts at Galle, Coconut Tree Hill above Mirissa, anywhere along the Ahangama stretch, and Silent Beach at Tangalle. East-facing bays like Hiriketiya lose the sun behind the headland early.'
        },
        {
          title: '4. Check the Season',
          description: 'From May to September the southwest monsoon turns the whole coast rough. The reef-sheltered lagoons still work, but open beaches that are gentle in January become dangerous, and this is when most drownings happen. If you are here in the monsoon months, stick to the reef beaches and ask locally every single day.'
        },
        {
          title: '5. Ask Someone Who Went In First',
          description: 'A handful of the busiest tourist beaches post a lifeguard in high season; most Down South beaches have nobody. The surf school on the sand, the guy renting sunbeds and the woman running the beach café all know exactly where today’s current is running, and they will tell you for free if you ask. An empty beach on a hot afternoon is a question, not a discovery.'
        },
        {
          title: '6. The Small Hazards Nobody Mentions',
          description: 'Sea urchins live on every reef; step carefully or wear reef shoes. Stonefish are rare but real on rocky bottoms. Bluebottle jellyfish drift in on some onshore winds — if the sand is dotted with small blue bubbles, stay out. Stray dogs sleep on most beaches and are almost always harmless. The sun is the thing that actually gets people: a rash vest in the water beats sunscreen alone.'
        },
        {
          title: 'The Beaches, Sorted by What They Are For',
          description: 'West to east, with the honest verdict:',
          codeSnippet: `SWIMMING (reef-sheltered, calm in season)
  Jungle Beach, Rumassala   small cove, snorkelling, walk in from the pagoda
  Dalawella / Wijaya        lagoon, turtles, rope swing, best all-round
  Polhena, Matara           reef lagoon, turtles, very local, very calm
  Hiriketiya (west corner)  sheltered pocket beside the surf
  Goyambokka, Tangalle      small cove, calm mornings, watch the shorebreak
  Silent Beach, Tangalle    quiet, long, swim close in only

SURFING (waves on the sand or reef — not for swimming)
  Weligama Bay, Kabalana, Midigama, Mirissa point, Talalla

BOTH, DEPENDING ON THE DAY
  Unawatuna    crowded, reef at the west end, busy in the middle
  Mirissa      swim near Parrot Rock, waves at the east end, rips mid-bay
  Talalla      calm mornings in season, surf when it is up

SUNSETS
  Galle Fort ramparts, Ahangama stretch, Coconut Tree Hill,
  Silent Beach, Tangalle

DO NOT SWIM
  Rekawa (turtle nesting, strong currents), open beaches May-September,
  anywhere the water is flat between two lines of breaking waves`
        }
      ],
      keyTakeaways: [
        'Reef-sheltered bays for swimming; open beach breaks for surfing. The two rarely overlap.',
        'Swim in the morning if you can — the sea is calmer and the sun is survivable.',
        'If the beach is empty on a hot afternoon, ask why before assuming you found a secret.',
        'Caught in a rip: float, wave, swim sideways. Never straight back to shore against it.'
      ],
      conclusion: 'None of this is meant to put you off the water. The south coast is one of the loveliest places anywhere to swim, and a reef lagoon at eight in the morning is as safe as a pool. It just asks you to look at the sea for thirty seconds before you run into it.'
    }
  },

  // 5
  {
    id: 'five-days-galle-to-tangalle',
    title: 'How to Spend 5 Perfect Days Between Galle and Tangalle',
    category: 'Destination Guides',
    date: 'July 22, 2026',
    readTime: '6 min read',
    author: 'Macka',
    excerpt: 'A realistic five-day route along the south coast with only two moves, two early starts, and long unhurried afternoons.',
    visualType: 'quote-minimal',
    heroImage: 'https://images.unsplash.com/photo-1649856092355-eee498b1d0f2?auto=format&fit=crop&w=1400&q=80',
    tileConfig: {
      bgColor: '#f0eae3',
      textColor: '#2d2926',
      headlineText: 'how to spend: 5 perfect days between galle and tangalle',
    },
    content: {
      introduction: [
        'The mistake almost every first Down South itinerary makes is treating ninety minutes on the map as ninety minutes of driving. The coast road is one lane each way, full of buses and tuk-tuks and dogs, and slower than it looks. Every time you change hotel you lose half a day to packing, checking out, driving and checking in again.',
        'This route moves twice in five days. Everything else is walkable, swimmable or a short tuk-tuk away, and every day has a slow afternoon built into it, because the heat will make you want one whether you plan for it or not.'
      ],
      steps: [
        {
          title: 'Day 1 — Arrive Galle, Walk the Walls, Eat',
          description: 'Take the expressway from the airport — two hours, worth every rupee of the toll — and aim to be inside Galle Fort by early afternoon. Stay inside the walls if you can afford one night there; a converted Dutch merchant house with a courtyard is the right way to arrive in this country.\n\nDo nothing ambitious. Wander Church Street and Pedlar Street, look into the Dutch Reformed Church and the old hospital arcade, and be on the ramparts by five for the walk anticlockwise to the lighthouse as the light goes. Then join [Galle Fort Food Walks](https://gallefortfoodwalks.lk) for their evening walk. Doing this first rather than last changes every meal for the rest of the trip.'
        },
        {
          title: 'Day 2 — Dalawella, the Tea Estate, Sunset at Ahangama',
          description: 'Tuk-tuk ten minutes east to Dalawella before nine, while the lagoon is glassy and the rope swing has no queue. Swim over the reef, watch for turtles grazing in the shallows, and have breakfast at one of the beach cafés with your feet in the sand.\n\nAfter lunch, when the beach is too hot to use, head twenty minutes inland to Handunugoda tea estate for the free tour and tasting. Come back down to the coast at Ahangama for sunset — the stretch of beach in front of the village faces west and the light is extraordinary — and eat there. Back to Galle to sleep.',
          tip: 'If it is a Poya (full moon) day, alcohol is not sold anywhere. Check the calendar before you plan a big evening.'
        },
        {
          title: 'Day 3 — Move to Mirissa, Whale Boat at Dawn',
          description: 'This is the first move, and it is a short one: forty-five minutes east to Mirissa or Weligama. If it is whale season (November to April), check out early and go straight to the harbour for the 06:30 boat with [Mirissa Blue Whale Tours](https://mirissabluewhale.lk), leaving your bags with your new guesthouse on the way. Take the seasickness tablet an hour before.\n\nYou will be back by eleven, tired and salt-crusted and perfectly happy. Write off the afternoon. Sleep, eat, and walk out to Coconut Tree Hill at the eastern end of the beach for the last hour of light. If it is not whale season, swap the boat for a morning surf lesson at Weligama and do the same afternoon.'
        },
        {
          title: 'Day 4 — Hiriketiya, and Nothing Else',
          description: 'Forty minutes further east is Hiriketiya, and the bay is small enough to do nothing in for a whole day. Surf the mellow left in the morning — or take your second lesson if you started yesterday — then eat, sleep, swim in the sheltered western corner, and watch the light go from the headland.\n\nYou can stay here tonight or push on to Tangalle. We usually stay: [Hiriketiya Surf House](https://hiriketiyasurfhouse.lk) is two minutes from the sand and the morning session is worth the extra night. If Hiriketiya is heaving, Talalla, one bay west, is a long quiet crescent with space.'
        },
        {
          title: 'Day 5 — A Safari, Then Tangalle',
          description: 'Second move, and the earliest start of the trip. A 05:30 dawn drive into Yala with [Yala Leopard Safaris](https://yalaleopardsafaris.lk) means leaving Hiriketiya around four, which is brutal but worth it once. If that sounds like too much, the afternoon drive at Udawalawe is the gentler option — leave Hiriketiya after breakfast, be in the park by three, and watch the elephants come down to the reservoir as the heat drops.\n\nEither way, spend the last night in Tangalle or Tissamaharama. Tangalle’s beaches are long and empty compared to everything west of it, and Rekawa, twenty minutes east, has the turtle nesting watch after dark if you have the energy for one more late night.'
        },
        {
          title: 'The Morning After — Getting Out',
          description: 'Colombo airport is four hours from Tangalle, three and a half from Galle, and the expressway is the only sensible route. Do not book a morning flight home from the south coast. An afternoon or evening departure lets you have breakfast on the beach, leave at ten and arrive with time to spare.'
        },
        {
          title: 'The Route in Copyable Form',
          description: 'Paste this into your notes before you go:',
          codeSnippet: `Night 1    Galle Fort (inside the walls if possible)
Night 2    Galle Fort
Night 3    Mirissa or Weligama
Night 4    Hiriketiya (Dikwella)
Night 5    Tangalle, or Tissamaharama if doing Yala

Colombo airport to Galle: 2 hrs on the E01 expressway
Galle to Mirissa: 45 min coast road
Mirissa to Hiriketiya: 40 min coast road
Hiriketiya to Yala gate: 1.5 hrs, leave at 04:00 for the 05:30 opening
Hiriketiya to Udawalawe: 1.5 hrs via Embilipitiya
Tangalle to Colombo airport: 4 hrs, do not book a morning flight

Book ahead: whale boat, safari jeep, Fort hotel in Jan-Feb
Walk in: everything else`
        }
      ],
      keyTakeaways: [
        'Two bases in five days. Every additional move costs you half a day.',
        'The E01 expressway from Colombo is fast and worth the toll; the old coast road is not.',
        'Leave one afternoon with nothing in it. The heat will make you grateful.',
        'Whale boat and safari are the two early starts. Put a slow day between them.'
      ],
      conclusion: 'Five days is enough to feel the shape of this coast — the history at one end, the wildlife at the other, and the long lazy beaches in between. If you have more time, stretch the middle: an extra night at Ahangama, an extra night at Hiriketiya, and you will start to understand why so many people never quite leave.'
    }
  },

  // 6
  {
    id: 'tracking-leopards-in-yala',
    title: 'Tracking Leopards in Yala: An Honest Account of a Dawn Safari',
    category: 'Wildlife & Safari',
    date: 'July 15, 2026',
    readTime: '6 min read',
    author: 'Macka',
    excerpt: 'What six hours in a jeep is actually like — the queue at the gate, the waiting, and the ten seconds that justify all of it.',
    visualType: 'destination-split',
    tileConfig: {
      bgColor: '#c58a67',
      textColor: '#ffffff',
      topLabel: 'wildlife encounter',
      headlineText: 'Leopards in Yala',
      partnerName: 'Yala Leopard Safaris',
      mockupImage: 'https://images.unsplash.com/photo-1661768508643-e260f6f8e06c?auto=format&fit=crop&w=800&q=80',
    },
    content: {
      introduction: [
        'Yala National Park has one of the densest leopard populations on earth — in Block 1, the most visited section, there is roughly one leopard for every square kilometre. In peak season it also has a queue of jeeps at the gate that can genuinely shock you. Both of those facts are true at once, and any honest account of a morning here has to hold them together.',
        'We went out for a dawn drive with [Yala Leopard Safaris](https://yalaleopardsafaris.lk) to describe what the morning is really like, from the four o’clock alarm to the ethics of the scrum that forms around a sighting.'
      ],
      steps: [
        {
          title: '04:15 — Tissamaharama in the Dark',
          description: 'Most people stay in Tissamaharama, the lakeside town half an hour from the park, and the jeep collects you from your guesthouse in the dark with a flask of tea and a packed breakfast. The road out is quiet for about ten minutes. Then you start to see the other jeeps, all heading the same way.'
        },
        {
          title: '05:00 — The Gate at Palatupana',
          description: 'You join a line of open-topped jeeps waiting for the park to open, sometimes forty or fifty of them on a January morning. Your driver goes to the ticket office to pay the entry fees while you sit and listen to the peacocks start up. It is not romantic. Get through it, because the first hour inside is the best light of the day and the animals are still moving.\n\nThe fee is charged per person plus a jeep charge and a service fee, and foreigners pay a good deal more than locals. Ask your operator to itemise it; a quote that will not separate park fees from jeep hire is a quote to walk away from.'
        },
        {
          title: '05:45 — Inside, and the Fleet Disperses',
          description: 'Block 1 is a mosaic of scrub jungle, open plains, rocky outcrops and dozens of small waterholes, with the sea along its southern edge. Once through the gate the jeeps fan out along different tracks, and for a while you are on your own with the landscape: mist on the plains, a herd of spotted deer, a crocodile like a log at the edge of a tank.\n\nThe first hour turns up almost everything except the cat. Elephants, usually singly here. Water buffalo in the mud. Wild boar, grey langurs, a mongoose crossing the track, jackals if you are lucky. And birds in absurd numbers — painted storks, bee-eaters, hornbills, junglefowl, a white-bellied sea eagle over the coast.'
        },
        {
          title: 'The Waiting Is the Method',
          description: 'Good trackers do not drive fast. They stop the jeep near a waterhole or a rocky outcrop where a leopard likes to lie up, turn off the engine, and listen. Spotted deer give a sharp alarm bark when they see a cat; langurs have a different call. A tracker who knows the block reads those calls like a map and moves quietly towards them.\n\nBad trackers drive fast between radio reports, arrive at every sighting fifth, and spend the morning looking at other jeeps. You can tell within twenty minutes which kind you have. The one we went with switched the engine off eleven times in the first hour.'
        },
        {
          title: '07:40 — The Ten Seconds',
          description: 'It came from the alarm calls. A langur troop went off in a strip of scrub beside a rock, the driver rolled the jeep forward without starting the engine, and a leopard walked out of the grass twenty metres ahead of us, crossed the track without looking at us, and disappeared into the bushes on the other side. Ten seconds. Maybe twelve.\n\nThat is what a leopard sighting in Yala usually is. Occasionally one lies on a rock in the sun for an hour and half the park gathers to watch it. More often it is a glimpse: the impossible fluidity of the walk, the rosettes, the long tail, and then nothing. Nobody in our jeep said a word for a full minute afterwards.'
        },
        {
          title: 'The Scrum, and How to Not Be Part of It',
          description: 'When a leopard is seen in the open, the radio goes, and within minutes there can be twenty jeeps jockeying for position on a single track, engines running, people standing on seats. It is unpleasant to be in and worse for the animal, which usually leaves.\n\nYou cannot control the other jeeps but you can choose an operator that does not chase radio calls, does not block tracks, and moves on once a sighting gets crowded. It costs you nothing in sightings — the quiet approach found our leopard — and it is the only way this park stays worth visiting.'
        },
        {
          title: 'Blocks, Gates and the Closure',
          description: 'Block 1, from the Palatupana gate, has the most leopards and the most jeeps. Block 5, entered from the Galge gate on the Buttala road, has fewer of both and a wilder feel, and is worth asking about if crowds bother you more than odds. Yala Block 1 usually closes for around six weeks from early September into October, during the driest weeks, though the dates move each year — check before you plan around it. The neighbouring Bundala park, a wetland famous for birds, stays open.'
        },
        {
          title: 'What to Bring, and What It Costs',
          description: 'The practical list:',
          codeSnippet: `Pick-up: 04:15-04:30 from Tissamaharama, 03:45 from Kataragama
Gate opens: 05:30 (Palatupana, Block 1)
Half day: 05:30-10:30. Full day adds a hot, quiet middle
Jeep: 4-6 people is comfortable, 9 is not
Fees (foreign adult): roughly USD 25-35 park entry + jeep hire
                      + vehicle charge, quoted as a bundle ~USD 60-90 pp
Bring: binoculars, long sleeves, hat, water, camera with zoom
Wear: dull colours. Leave the white t-shirt at the guesthouse
Sightings: leopard on roughly half of dawn drives in season
Closure: Block 1 typically early Sept to mid Oct, check dates`
        }
      ],
      keyTakeaways: [
        'Book a half-day dawn drive rather than a full day; the middle of the day is hot and quiet.',
        'Ask how many people share the jeep. Six is comfortable, nine is not.',
        'Yala Block 1 usually closes for around six weeks from early September — check before you plan around it.',
        'Treat the leopard as a bonus. The elephants, crocodiles and birds are the morning; the cat is the story you tell afterwards.'
      ],
      conclusion: 'Yala is not a quiet wilderness and it does not pretend to be. It is a dense, crowded, extraordinary park where the odds of seeing a leopard in the wild are better than almost anywhere, and a good tracker can find you one without joining the scrum. Go once, go early, and go with someone who switches the engine off.'
    }
  },

  // 7
  {
    id: 'partner-spotlight-mirissa-blue-whale-tours',
    title: 'NEW PARTNER! - Mirissa Blue Whale Tours',
    category: 'Partner Spotlights',
    date: 'July 08, 2026',
    readTime: '3 min read',
    author: 'Macka',
    excerpt: 'The Mirissa boat we send readers to — a marine guide aboard, guideline distances kept, and a rebook if the sea gives you nothing.',
    visualType: 'laptop-mockup',
    tileConfig: {
      bgColor: '#8c5855',
      textColor: '#ffffff',
      badgeText: 'NEW!',
      badgeColor: '#1c1c1c',
      headlineText: 'Mirissa Whales',
      scriptSubtitle: 'Mirissa, Sri Lanka',
      mockupImage: 'https://images.unsplash.com/photo-1743933731242-2d60b6c61c31?auto=format&fit=crop&w=800&q=80',
    },
    content: {
      introduction: [
        'We are glad to introduce [Mirissa Blue Whale Tours](https://mirissabluewhale.lk) as a featured partner. They run dawn whale and dolphin trips out of Mirissa Fisheries Harbour from November to April, and they are who we point readers towards when they ask which of the thirty boats in the harbour to take.',
        'What sets them apart is restraint. There are operators here who will chase a pod across the shipping lane for a photograph and cut across a whale’s path to get their boat closest. This is not one of them, and the difference shows in how the animals behave around the boat — a whale that is not being harassed surfaces more often and stays around longer.'
      ],
      steps: [
        {
          title: 'How They Run the Morning',
          description: 'A single-deck boat licensed for thirty passengers, run at twenty so nobody is fighting for a rail. Departure at 06:30 sharp, which means boarding from 06:15. A marine guide on board — not just a crew member with a microphone — who explains what you are seeing, how to read a blow, and why the boat is holding back when it holds back. Sri Lanka’s whale-watching guidelines followed as written: a hundred metres from the animal, approach from behind and to the side, engine to idle when a whale is close, and never more than a handful of boats around one sighting.'
        },
        {
          title: 'What a Morning With Them Includes',
          description: '• 06:30 departure from Mirissa Fisheries Harbour, back by 10:30-11:30\n• A marine guide on board who explains what you are looking at\n• Breakfast, water and seasickness tablets provided (take the tablet at 05:30)\n• Life jackets for everyone, shade on deck, a dry box for phones\n• A free second trip if you see no whales or dolphins at all\n• Hotel pick-up from Mirissa and Weligama on request'
        },
        {
          title: 'Who We Recommend It For',
          description: 'Families, first-timers and anyone who would rather keep a respectful distance than get the closest possible photograph. The smaller boat is steadier than the big double-deckers and the guide makes the hour of open water before the first sighting genuinely interesting rather than a wait. Read our full hour-by-hour account of the dawn trip for the practical details of what the morning feels like.'
        },
        {
          title: 'Booking and Prices',
          description: 'Book directly on their site. They price lower on their own page than through the resellers on the beach road, because there is no commission built in, and direct bookings are the ones that get the hotel pick-up. Expect to pay somewhere between USD 40 and 60 per adult depending on the month, with children under twelve at roughly half. Peak-season mornings in January and February fill a week or more ahead.'
        },
        {
          title: 'Quick Reference',
          description: 'For your notes:',
          codeSnippet: `Operator: Mirissa Blue Whale Tours, Mirissa Fisheries Harbour
Season: November to April (best December to April)
Departure: 06:30, boarding 06:15
Duration: 3-5 hours
Boat: single deck, 20 passengers, marine guide aboard
Includes: breakfast, water, seasickness tablets, life jackets
No sighting: free rebook on another morning
Book: direct at mirissabluewhale.lk`
        }
      ],
      keyTakeaways: [
        'Season runs November to April, with December to April the most reliable.',
        'Book directly on their site — peak-season mornings in January and February fill well ahead.',
        'Take the seasickness tablet they give you at 05:30, before you leave the guesthouse, not on the boat.'
      ],
      conclusion: 'We only feature operators we would send our own families to, and this is the boat we take ourselves. If you have one morning in Mirissa in season, spend it with them.'
    }
  },

  // 8
  {
    id: 'how-to-eat-down-south',
    title: 'How to Eat Down South: Rice and Curry, Hoppers and Kottu',
    category: 'Food & Culture',
    date: 'June 30, 2026',
    readTime: '7 min read',
    author: 'Macka',
    excerpt: 'What to order, when to order it, and how to eat brilliantly on the south coast without ever opening a tourist menu.',
    visualType: 'quote-minimal',
    heroImage: 'https://images.unsplash.com/photo-1613526949297-1aba25022d0c?auto=format&fit=crop&w=1400&q=80',
    tileConfig: {
      bgColor: '#d8ccd7',
      textColor: '#362a35',
      headlineText: 'how to eat down south: rice and curry, hoppers and kottu',
    },
    content: {
      introduction: [
        'The gap between eating adequately Down South and eating extraordinarily is not money. A plate of rice and curry at a roadside place costs a fraction of a mediocre pizza on the beach, and it is one of the great meals of Asia. The gap is knowing what time of day each thing is meant to be eaten, what the words on the board mean, and which door to walk through.',
        'This is everything we wish someone had explained before a first trip to the south coast, from the anatomy of a proper rice and curry to the sound that tells you kottu is nearby.'
      ],
      steps: [
        {
          title: '1. Rice and Curry Is a Lunch, and It Is Plural',
          description: 'A proper rice and curry is a mound of rice ringed by six to twelve small dishes, and the point is the variety. There will be a parippu (dhal, soft and coconutty), a pol sambol (grated coconut with chilli, lime and onion, the thing you will miss most when you leave), a mallung (shredded greens with coconut), and then a rotation of vegetable curries — beetroot, pumpkin, jackfruit, aubergine moju, green beans, ash plantain — plus one fish or chicken curry if you want it and a papadam on top.\n\nIt appears around noon in local places and is gone by two. Eaten with the right hand, mixing a little of each dish into the rice as you go, though nobody minds a spoon. The best ones are in busy, unglamorous places with a queue of office workers and tuk-tuk drivers. The worst are the “Sri Lankan buffet” at a beach hotel at eight in the evening.'
        },
        {
          title: '2. Hoppers Are Breakfast or Dinner, Never Lunch',
          description: 'Appa, or hoppers, are bowl-shaped pancakes made from a fermented rice-flour and coconut-milk batter, swirled in a small wok so the edges go lace-thin and crisp while the centre stays soft. Ask for an egg hopper — bittara appa — and an egg is cracked into the middle. Eat them with lunu miris (a fierce onion and chilli relish) or seeni sambol (sweet caramelised onion). Three or four is a meal.\n\nString hoppers, idiyappam, are the tangled nests of steamed rice-flour noodles that belong to breakfast, eaten with dhal and a thin coconut gravy called kiri hodi. Both appear from a griddle by the road from about six in the evening and again at dawn, and both are best eaten standing up within thirty seconds of being made.'
        },
        {
          title: '3. Kottu Is a Sound Before It Is a Meal',
          description: 'You will hear it down the street before you find it: two metal blades clattering rhythmically on a hot griddle. Kottu roti is godamba roti — a stretchy, layered flatbread — chopped into strips with vegetables, egg, and chicken, beef or cheese if you want it, then doused in curry gravy. It is late-night food, greasy in the best way, and it is excellent. Order it after nine, in a place with a crowd, and ask for it “less spicy” if you are unsure; the standard version is hot.'
        },
        {
          title: '4. Short Eats Are the All-Day Answer',
          description: 'Every town has a bakery counter with a glass case of short eats: fish cutlets (spiced fish and potato in breadcrumbs), vegetable rotis (triangles of flatbread folded around curried potato), egg rolls, patties, buns stuffed with seeni sambol or fish. They cost almost nothing, they are fried fresh through the day, and three of them with a cup of tea is the perfect thing at four in the afternoon when the beach is too hot and dinner is hours away.'
        },
        {
          title: '5. The Breakfast Table',
          description: 'A Sri Lankan breakfast in a guesthouse is usually one of three things: hoppers or string hoppers with dhal and sambol; pol roti (a thick, dense coconut flatbread) with lunu miris; or kiri bath, rice cooked in coconut milk and cut into diamonds, eaten on special occasions and the first of the month. Pittu — steamed cylinders of rice flour and coconut — turns up too. Say yes to all of them at least once and let the fruit plate be the side dish, not the meal.'
        },
        {
          title: '6. Seafood: Where the Coast Delivers, and Where It Does Not',
          description: 'This is a fishing coast, and the fish is superb when you eat it where it lands. Ambul thiyal — tuna cooked dry and sour with goraka fruit and black pepper — is the great southern dish, and a crab curry in a local place is a proper occasion. What to be careful of is the beach barbecue at Mirissa and Unawatuna: a row of restaurants displaying the day’s catch on ice, priced per weight, often at several times what the fish cost at the market that morning. It is a nice evening; it is not good value. For real fish, eat rice and curry near the harbour at Mirissa, Weligama or Dondra at lunchtime.'
        },
        {
          title: '7. Sweet Things, and the Drinks',
          description: 'Curd and treacle — thick buffalo-milk yoghurt in a clay pot with kithul palm syrup — is sold from roadside stalls between Weligama and Tangalle and is the single best thing to eat on a hot afternoon. Wattalappam, a Malay-origin steamed custard of jaggery, coconut milk and cardamom, is the celebration pudding. A king coconut (thambili, the orange one) from a stall, drunk through a straw straight from the shell, costs a couple of hundred rupees and is better than anything in a bottle.\n\nCeylon tea is served strong, milky and sweet unless you say otherwise; ask for “plain tea” for black. Lion is the beer. Arrack, distilled from coconut flower sap, is the spirit, and a good aged one with ginger beer is a proper sundowner. Faluda, the rose-syrup and vermicelli milkshake, is the thing to order when you are too hot to think.'
        },
        {
          title: '8. Where to Eat: Reading the Signs',
          description: 'A “hotel” on a sign in Sri Lanka means an eatery, not a place to sleep — the local rice-and-curry place is the “Sinhala hotel” or just the kade (shop). Look for a rice and curry counter with dishes in steel trays and a crowd at one o’clock. Bakeries are for short eats and tea. The beach-road restaurants with laminated menus, pizza and “Sri Lankan curry (mild)” are fine for a change but not where the food is.\n\nCash, always. The best kitchens Down South still do not take cards, and a five-thousand rupee note will not get change at a kade.'
        },
        {
          title: '9. Take a Guided Walk on Your First Evening',
          description: 'Doing this first rather than last changes every meal afterwards. Three hours with [Galle Fort Food Walks](https://gallefortfoodwalks.lk) teaches you what to point at, how spicy “not spicy” actually is, how to eat with your hand without making a mess, and which of the seven stops to return to alone later in the week. We send almost everyone.'
        },
        {
          title: 'The Menu Decoder',
          description: 'Save this for the roadside board:',
          codeSnippet: `WHEN                WHAT                          ASK FOR
Breakfast           string hoppers, pol roti,     idiyappam, kiri hodi,
                    kiri bath, pittu              lunu miris
Lunch (12-2)        rice and curry                "rice and curry, fish/veg"
Afternoon           short eats + tea              cutlet, roti, egg roll
Evening (6 on)      hoppers, egg hoppers          bittara appa
Late (9 on)         kottu roti                    chicken/veg/cheese kottu
Anytime             king coconut, curd & treacle  thambili, kiri pani

FLAVOUR WORDS
  pol = coconut     parippu = dhal    mallung = shredded greens
  sambol = relish   moju = pickle     ambul = sour    seeni = sweet
  "not spicy" = still spicy. Ask twice if it matters.`
        }
      ],
      keyTakeaways: [
        'Eat rice and curry at lunch from a busy local place, not at dinner from a hotel.',
        'A king coconut from a roadside stall is the best two hundred rupees you will spend all day.',
        'Carry cash. The best kitchens Down South still do not take cards.',
        'Beach-front seafood by weight is an evening out, not a bargain. Real fish is at lunchtime near the harbour.'
      ],
      conclusion: 'The food on this coast is one of the best reasons to be here, and almost none of it is on the tourist menus. Eat when locals eat, eat where the queue is, and let the roadside board teach you the words. By the end of the week you will be ordering egg hoppers by name and wondering how you ever ate anything else.'
    }
  },

  // 9
  {
    id: '6-things-nobody-tells-you-about-sri-lanka',
    title: '6 Things Nobody Tells You About Your First Trip to Sri Lanka',
    category: 'Food & Culture',
    date: 'June 20, 2026',
    readTime: '6 min read',
    author: 'Macka',
    excerpt: 'Temple etiquette, poya days, the tuk-tuk conversation, and the small courtesies that change how a whole trip feels.',
    visualType: 'clean-editorial',
    heroImage: 'https://images.unsplash.com/photo-1642236603782-db0c97c0d7a7?auto=format&fit=crop&w=1400&q=80',
    tileConfig: {
      bgColor: '#7da39c',
      textColor: '#ffffff',
      headlineText: '6 things nobody tells you about your first trip to sri lanka',
    },
    content: {
      introduction: [
        'Sri Lanka is one of the easier countries in Asia to travel in — English is widely spoken, distances are short, people are extraordinarily kind to strangers — and one of the easiest to be quietly rude in without noticing. Almost every difficult first-trip story we hear comes down to a handful of small misunderstandings that nobody warned the traveller about.',
        'These are the six that matter most on the south coast, in roughly the order you will meet them.'
      ],
      steps: [
        {
          title: '1. Poya Days Are Full Moons, and Things Close',
          description: 'Every full moon is a Buddhist public holiday called Poya, and there are twelve or thirteen of them a year. On a Poya day alcohol is not sold anywhere — not in shops, not in bars, and officially not in hotel restaurants, though some will quietly serve you from a teapot. Many local businesses shut, some restaurants close, and beaches fill with Sri Lankan families on a day out.\n\nIt is a lovely day to be at a temple, where people come in white to make offerings, and a bad day to plan a big night out. Check the dates before you book anything that matters; they are on any Sri Lankan calendar and easy to search for.'
        },
        {
          title: '2. Cover Up at Temples, and Never Turn Your Back on a Buddha',
          description: 'At any temple: shoulders and knees covered for everyone, shoes and hats off at the entrance, and speak quietly. Carry a sarong or a light scarf in your bag so you are never caught out — most temples will lend one, but it is easier to have your own.\n\nThe rule that catches people out is about Buddha images. Never pose for a photograph with your back to a Buddha statue, never point your feet at one when sitting, and never touch or climb on one. It reads as a genuine insult here, not a quaint tradition, and visitors have been fined and deported for it. The same goes for Buddha tattoos: if you have one, keep it covered in public. It is illegal to display one.'
        },
        {
          title: '3. Agree the Tuk-Tuk Fare Before You Get In',
          description: 'Or, better, use the PickMe app, which meters the ride, shows the price up front and removes the negotiation entirely. It works across Galle, Unawatuna, Weligama, Mirissa and most of the coast, and drivers are used to it.\n\nOff-app, ask the fare before you sit down, not at the destination. A short hop within a town should be a few hundred rupees; a ride between towns, a thousand or two. If a driver quotes something absurd, smile, say no thank you and wait for the next one — there is always a next one. And if the first thing a driver does after you get in is suggest a “better” hotel, a “special” shop or a “free” tour, say no; those are commission stops.'
        },
        {
          title: '4. Cash Still Runs the Coast',
          description: 'Cards work at hotels, bigger restaurants and supermarkets. Almost nothing else takes them — not the rice and curry place, not the tuk-tuk, not the king coconut stall, not the surf school. Take cash out at a bank ATM in a town (Galle, Weligama, Matara and Tangalle all have several), and ask for it in small notes, because nobody has change for a five-thousand rupee note.\n\nThe other thing to do on arrival is buy a local SIM at the airport — Dialog or Mobitel, a few thousand rupees for a month of more data than you will use — so that PickMe, maps and messaging work from the first day.'
        },
        {
          title: '5. The Head Wobble Means Yes, and “No Problem” Means Maybe',
          description: 'The side-to-side head movement that looks like “no” to most Europeans is a “yes, fine, of course” here. Once you know it, you will see it everywhere and start doing it yourself by the end of the week.\n\nMore subtly, Sri Lankan politeness runs on softness. A direct no is rare; “no problem” or “can do” can mean yes, probably, or not really. If something genuinely matters — a pick-up time, a price, a dietary restriction — confirm it twice, and once in writing. Nobody is trying to mislead you; the culture just prefers not to disappoint you to your face.'
        },
        {
          title: '6. Get Off the Coast for at Least One Day',
          description: 'The beach is why you came, and it is wonderful, but the south coast is also a narrow strip of tourism with a whole country behind it. Ninety minutes inland from Galle there is primary rainforest at Sinharaja and tea country above Deniyaya. Half an hour from Ahangama there is a working tea estate. An hour from Tangalle there are rock temples at Mulkirigala with almost nobody on the steps. Even one day away from the sand recalibrates the whole trip, and you come back to the beach seeing it properly.'
        },
        {
          title: 'The Small Courtesies',
          description: 'A short list that goes a long way:',
          codeSnippet: `Learn two words: "ayubowan" (hello) and "istuti" (thank you)
Eat and hand things over with your right hand
Take shoes off at the door of any home you are invited into
Dress modestly away from the beach - swimwear stays on the sand
Ask before photographing people, and always before monks
Tip 10% where no service charge is added; round up tuk-tuks
Do not touch anyone's head, including children's
Public displays of affection are quietly frowned upon`
        }
      ],
      keyTakeaways: [
        'Learn two words of Sinhala. “Istuti” (thank you) gets a disproportionate smile.',
        'Carry small notes — nobody has change for a five thousand rupee note.',
        'The head wobble that looks like “no” is usually “yes, fine, of course”.',
        'Check the Poya calendar before planning any evening that involves a drink.'
      ],
      conclusion: 'None of this is difficult. Sri Lankans are forgiving of visitors who get things wrong, and endlessly warm to visitors who try to get them right. Cover up at the temple, agree the fare, learn the thank-you, and the country opens up in a way that no beach can.'
    }
  },

  // 10
  {
    id: 'getting-around-down-south',
    title: 'How to Get Around Down South: Coastal Trains, Tuk-Tuks and Scooters',
    category: 'Destination Guides',
    date: 'June 12, 2026',
    readTime: '7 min read',
    author: 'Macka',
    excerpt: 'The coast train, the app that fixes tuk-tuk prices, and an honest answer on whether you should rent a scooter.',
    visualType: 'quote-minimal',
    heroImage: 'https://images.unsplash.com/photo-1546785569-7f1461b3b6f8?auto=format&fit=crop&w=1400&q=80',
    tileConfig: {
      bgColor: '#b8bdc8',
      textColor: '#242a35',
      headlineText: 'how to get around down south: coastal trains, tuk-tuks and scooters',
    },
    content: {
      introduction: [
        'Renting a car Down South is almost always the wrong call. The coast road is slow, parking is scarce, and driving here has its own grammar — the overtaking bus, the tuk-tuk pulling out without looking, the dog asleep on the centre line — that takes weeks to learn. Fortunately you do not need one. Between the train, the buses, the tuk-tuk apps and your own feet, the whole coast is easy to move along.',
        'Here is every way of getting around, from the airport to the beach and between the towns, with honest notes on cost and on the one option that needs a proper warning.'
      ],
      steps: [
        {
          title: 'Getting In: The Airport to the Coast',
          description: 'Colombo’s Bandaranaike airport is north of the city, and the south coast is reached by the E03 airport expressway, the outer circular road, and then the E01 Southern Expressway down to Galle, Matara and beyond. It is two hours to Galle and about three to Tangalle, and it is the only sensible route — the old coast road through Colombo is twice as long and no cheaper.\n\nA pre-booked private transfer or an airport taxi from the official counter costs roughly USD 40-55 to Galle and USD 55-75 to the Mirissa-Tangalle stretch, and is worth it after a long flight. The cheap option is the expressway bus: an airport bus to the Makumbura (Kottawa) expressway terminal, then an air-conditioned expressway bus to Galle or Matara for a couple of dollars. It takes about the same time and is entirely doable with luggage.'
        },
        {
          title: 'The Coastal Train Is the Journey, Not Just Transport',
          description: 'The coast line runs from Colombo Fort down through Kalutara, Bentota, Hikkaduwa and Galle to Matara, and since 2019 on to Beliatta beyond Tangalle. For most of the way the track runs beside the water, sometimes close enough to get spray through the open door, and the stretch south of Hikkaduwa is one of the great short train rides anywhere.\n\nThere are three classes. Second class with a reserved seat is the sweet spot for the Colombo-Galle run: a proper seat, a window, and a couple of hours of coastline. Third class is fine for the short hops between Galle, Weligama, Mirissa and Matara, costs almost nothing, and is more fun. First class air-conditioned carriages exist on a couple of express services but seal you off from the very thing you came for.',
          codeSnippet: `Colombo Fort to Galle: 2.5-3 hrs by coast train (express), longer stopping
Galle to Weligama: 30-40 min    Galle to Matara: about 1 hr
Matara to Beliatta (for Tangalle): about 30 min, a few trains a day
Reserved 2nd class: book a few days ahead in season, online or at the station
3rd class unreserved: turn up, buy at the window, stand if it is full
Fares: a few hundred rupees for any journey on the coast, by class`
        },
        {
          title: 'Buses: Absurdly Cheap and Everywhere',
          description: 'The red government buses and the private minibuses run the coast road constantly. The Galle-Matara route (bus 350) passes through Unawatuna, Koggala, Ahangama, Midigama, Weligama and Mirissa every few minutes through the day, and the Matara-Tangalle route continues east through Dikwella. You rarely wait more than ten minutes, and a ride between neighbouring towns costs less than a cup of coffee.\n\nThey are crowded, they drive fast, and they stop anywhere if you wave. Get on, tell the conductor where you are going, pay when he comes round, and get off when he shouts. With a backpack it is fine; with a suitcase it is possible but not enjoyable.'
        },
        {
          title: 'Tuk-Tuks: Use the App',
          description: 'Tuk-tuks are the workhorse of the coast and the right answer for anything under half an hour. PickMe — the local ride-hailing app — works across Galle, Unawatuna, Weligama, Mirissa and most of the coast, meters the ride, shows the fare before you book and removes the price conversation completely. Uber works in Galle and patchily elsewhere. Download both before you fly and set them up with a local SIM at the airport.\n\nOff-app, agree the number before you sit down, not at the destination. The metered rate is roughly a hundred rupees a kilometre with a minimum fare, so a ten-minute hop should be a few hundred rupees and a ride between towns a thousand or two. Drivers at hotel gates and beach entrances quote tourist prices; walk fifty metres to the road and the number drops.'
        },
        {
          title: 'Hiring a Tuk-Tuk or Driver for the Day',
          description: 'For a day trip inland — a tea estate, the rock temples, Sinharaja — hiring a tuk-tuk with its driver for the day is cheap and pleasant, usually somewhere around USD 25-40 depending on distance. For the safari parks, the expressway to the airport, or moving between bases with luggage, a car and driver costs roughly USD 60-90 a day including fuel and is the most comfortable way to cover distance. Your guesthouse will always know someone; agree the price and the route the night before.'
        },
        {
          title: 'Scooters: Legal Requirements Are Real',
          description: 'Every guesthouse rents scooters for a few thousand rupees a day, and along the flat coast road between Ahangama and Weligama they are a genuinely lovely way to get to the surf. But the paperwork matters. To ride legally you need a valid licence from home, an International Driving Permit, and — this is the part everyone skips — a Sri Lankan recognition permit, which the Automobile Association of Ceylon issues in Colombo and some agencies can arrange on the coast for a fee. Without all three you are uninsured.\n\nThat is not a technicality. Your travel insurance will refuse a claim for any accident on a scooter without a valid licence, and the coast road has buses on it. If you have never ridden before, do not learn here. If you have, get the permit, wear the helmet, stay off the road after dark, and ride the back lanes rather than the A2.'
        },
        {
          title: 'Bicycles and Feet',
          description: 'Galle Fort is entirely walkable and better on foot than any other way. Ahangama, Weligama and Hiriketiya are bike-sized: most guesthouses have a couple of bicycles, and the lanes behind the coast road through paddy and coconut are flat, quiet and cool in the early morning. Between towns, the coast road has no shoulder and is not for cycling.'
        },
        {
          title: 'Which to Use When',
          description: 'A rough guide:',
          codeSnippet: `Airport to coast        expressway taxi (USD 40-75) or expressway bus
Colombo to Galle        the coast train, 2nd class reserved
Between coast towns     bus for cheap, tuk-tuk (PickMe) for easy
Within a town           walk, bicycle, or tuk-tuk under 500 LKR
Day trip inland         tuk-tuk for the day, or car and driver
Safari parks            car and driver, or the operator's own pick-up
Moving base + luggage   car and driver
Surf run to the beach   scooter, with the permit, or a bicycle`
        }
      ],
      keyTakeaways: [
        'Take the train at least once — the Colombo to Galle stretch is worth planning around.',
        'Buses Down South are absurdly cheap and go everywhere; you rarely wait more than ten minutes.',
        'Sort the scooter permit properly or do not ride at all. Your insurance depends on it.',
        'Install PickMe before you land and you will never have the tuk-tuk price conversation.'
      ],
      conclusion: 'The south coast is small, the towns are close together, and every one of them is on the same road, the same railway and the same bus route. Leave the hire car at the airport, take the train down the coast, and let a tuk-tuk do the rest.'
    }
  },

  // 11
  {
    id: 'what-things-cost-down-south',
    title: 'What Things Actually Cost Down South (and How to Avoid the Tourist Price)',
    category: 'Getting Around',
    date: 'June 03, 2026',
    readTime: '6 min read',
    author: 'Macka',
    excerpt: 'Real rupee prices for tuk-tuks, rice and curry, surf lessons and safari jeeps — plus the four checks that spot an inflated quote.',
    visualType: 'quote-minimal',
    heroImage: 'https://images.unsplash.com/photo-1776283925399-4fa4e2b3564d?auto=format&fit=crop&w=1400&q=80',
    tileConfig: {
      bgColor: '#e7b599',
      textColor: '#3b2416',
      headlineText: 'what things actually cost down south (and how to avoid the tourist price)',
    },
    content: {
      introduction: [
        'There are two price lists Down South. One is official and unavoidable: foreigners pay more than locals at national parks, museums and some temples, and that is simply the rule. The other is informal and entirely negotiable: the tuk-tuk quote at the hotel gate, the “special price” for the surfboard, the fish priced by weight on the beach. The gap between them is not really about money — it is about knowing roughly what a thing should cost before you ask.',
        'Here are honest ranges as of the 2026 season, and the four checks we run before agreeing to anything. Prices are in Sri Lankan rupees (LKR) unless noted; the rupee moves, so treat these as ranges rather than quotes.'
      ],
      steps: [
        {
          title: 'Food and Drink',
          description: 'This is where the coast is astonishingly cheap if you eat where locals eat, and merely reasonable if you do not:',
          codeSnippet: `King coconut from a stall            150 - 300 LKR
Cup of tea at a kade                 50 - 150 LKR
Short eats (cutlet, roti), each      80 - 200 LKR
Rice and curry, local place          600 - 1,200 LKR
Egg hoppers, three, roadside         400 - 700 LKR
Kottu, roadside                      700 - 1,500 LKR
Curd and treacle, roadside pot       500 - 900 LKR
Western breakfast, beach cafe        1,500 - 2,800 LKR
Main course, beach-road restaurant   1,800 - 4,000 LKR
Seafood by weight, beach BBQ         4,000 LKR and up per person
Lion beer, local bar / hotel         600 / 1,200 LKR
Bottled water, 1.5 litre, shop       150 - 250 LKR`
        },
        {
          title: 'Getting Around',
          description: 'Transport is cheap by any standard. The tuk-tuk is where tourists most often overpay, and the fix is an app:',
          codeSnippet: `Bus, Galle to Mirissa                100 - 200 LKR
Coast train, Galle to Mirissa        80 - 300 LKR by class
Tuk-tuk, short hop in town           300 - 600 LKR (use PickMe)
Tuk-tuk, Galle to Unawatuna          700 - 1,200 LKR (use PickMe)
Tuk-tuk, Weligama to Hiriketiya      2,500 - 4,000 LKR
Tuk-tuk hire, whole day              USD 25 - 40
Car and driver, whole day, fuel in   USD 60 - 90
Airport to Galle, expressway taxi    USD 40 - 55
Scooter rental, per day              2,500 - 4,000 LKR (+ permit)
Bicycle rental, per day              500 - 1,000 LKR`
        },
        {
          title: 'Sleeping',
          description: 'Accommodation is the widest range on the coast, and the sweet spot is the family-run guesthouse:',
          codeSnippet: `Hostel dorm bed                      USD 8 - 15
Guesthouse double, fan, breakfast    USD 25 - 45
Guesthouse double, a/c, breakfast    USD 40 - 70
Surf camp, per person, half board    USD 50 - 90
Boutique villa or Fort hotel         USD 120 - 300+
Peak season (Dec-Feb) adds 20-40% to all of the above`
        },
        {
          title: 'Activities and Entry Fees',
          description: 'This is where the official two-tier pricing lives. Park fees are set by the government and change most years:',
          codeSnippet: `Galle Fort                           free to walk
Galle Fort museums / lighthouse      small entry, a few hundred LKR
Temples                              free or small donation (500 - 1,000)
Group surf lesson, 2 hrs             5,000 - 8,000 LKR
Private surf lesson, 1.5 hrs         8,000 - 12,000 LKR
Softboard rental, per day            1,000 - 1,500 LKR
Whale boat, Mirissa                  USD 40 - 60 per person
Yala jeep + park fees, half day      USD 60 - 90 per person (shared jeep)
Udawalawe jeep + fees, half day      USD 50 - 80 per person (shared jeep)
Rekawa turtle watch                  around 2,000 LKR per person
Handunugoda tea estate tour          free, tasting included
Sinharaja guided walk + entry        USD 15 - 30 per person
Local SIM, 30 days, generous data    1,500 - 3,500 LKR
Massage, beach-road spa, 1 hr        3,500 - 7,000 LKR`
        },
        {
          title: 'Check 1: Ask Two People, Not One',
          description: 'Prices Down South are soft. The second quote is almost always lower than the first, and the third tells you where the real number sits. This is not haggling for its own sake — it is a two-minute conversation with a second tuk-tuk driver or a second surf school, and it is the single most effective thing you can do.'
        },
        {
          title: 'Check 2: Try Booking Direct',
          description: 'Small operators usually price lower on their own site or WhatsApp than through a reseller, a hotel desk or a beach-road agent, because there is no platform commission built in. [Mirissa Blue Whale Tours](https://mirissabluewhale.lk) and [Hiriketiya Surf House](https://hiriketiyasurfhouse.lk) are both cheaper booked direct, and direct bookings are the ones that get the hotel pick-up thrown in.'
        },
        {
          title: 'Check 3: Separate the Park Fees From the Jeep',
          description: 'A Yala or Udawalawe quote should break down into three parts: the jeep hire, the government park entry per person, and the vehicle and service charges. The park fees are fixed and printed at the gate; the jeep is the negotiable part. If an operator will not itemise it, that is your answer. [Yala Leopard Safaris](https://yalaleopardsafaris.lk) publish theirs.'
        },
        {
          title: 'Check 4: Watch for Urgency',
          description: '“Last one”, “only today”, “the price goes up tomorrow”, “my friend can do it now” — if a quote arrives with urgency attached, that is information about the seller, not the price. The whale boats run every morning for five months. The surf lesson is available tomorrow. Nothing on this coast needs deciding in the next thirty seconds, and the honest operators never pretend otherwise.'
        },
        {
          title: 'Paying: Rupees, Small Notes, and Cards',
          description: 'Pay in rupees. Dollar pricing is almost always worse than the exchange rate, and euros are worse still. Bank ATMs in Galle, Weligama, Matara and Tangalle dispense rupees on foreign cards for a fee of a few hundred rupees; take out a decent amount at once and ask for small notes if you can, because a five-thousand note gets no change at a stall. Cards work at hotels, supermarkets and bigger restaurants and almost nowhere else.\n\nTipping: ten percent where no service charge is added, round up tuk-tuks, a few hundred rupees for a driver who has done a good day, and a thousand or two per person for a good safari tracker.'
        }
      ],
      keyTakeaways: [
        'Carry small notes and pay in rupees; dollar pricing is almost always worse.',
        'Booking direct with small Down South operators is usually the cheapest option available.',
        'If a quote arrives with urgency attached, that is information about the seller.',
        'The official foreigner price at parks is not negotiable. Everything outside the gate is.'
      ],
      conclusion: 'A comfortable week on this coast — guesthouse, local food, a whale boat and a safari — costs less than a weekend in most European cities, and knowing the numbers above is what keeps it that way. Ask twice, book direct, and let the hurried quotes go past.'
    }
  },

  // 12
  {
    id: 'partner-spotlight-hiriketiya-surf-house',
    title: 'NEW PARTNER! - Hiriketiya Surf House',
    category: 'Partner Spotlights',
    date: 'May 25, 2026',
    readTime: '4 min read',
    author: 'Macka',
    excerpt: 'Eight rooms two minutes from Hiri bay, boards to borrow all day, and dawn lessons on the friendliest left on the coast.',
    visualType: 'laptop-mockup',
    tileConfig: {
      bgColor: '#b5684d',
      textColor: '#ffffff',
      badgeText: 'NEW!',
      badgeColor: '#1c1c1c',
      headlineText: 'Hiriketiya Surf',
      scriptSubtitle: 'Dikwella, Sri Lanka',
      mockupImage: 'https://images.unsplash.com/photo-1752498227728-4454a5238ff3?auto=format&fit=crop&w=800&q=80',
    },
    content: {
      introduction: [
        'Say hello to [Hiriketiya Surf House](https://hiriketiyasurfhouse.lk), eight rooms a two-minute walk from Hiri bay, on the lane that runs down to the sand from the Dikwella road. They are who we recommend for a first surf trip Down South, and the reason is simple: you can be in the water at 06:15 without organising anything, and back on the deck for breakfast by eight.',
        'Hiriketiya has changed fast in the last few years and there are now dozens of places to stay around the bay. What we like about this one is that it has stayed small, kept its instructors local, and built the whole place around the morning session rather than the evening scene.'
      ],
      steps: [
        {
          title: 'What Staying There Includes',
          description: '• Eight rooms only — four doubles, two twins and two family rooms — with fans, mosquito nets and hot water, and air-conditioning in four of them\n• Boards to borrow for the length of your stay: softboards for beginners, a rack of mid-lengths and shortboards for everyone else\n• Dawn lessons on the mellow left with local instructors, two guests to a coach\n• Breakfast on the deck — hoppers, fruit, eggs, proper coffee — included in the rate\n• A kitchen that will feed you after dark, and a fridge you can help yourself to\n• Bicycles for the lanes behind the bay, and a tuk-tuk on call for Talalla and Dikwella'
        },
        {
          title: 'How the Surf Programme Works',
          description: 'Complete beginners do a first lesson in the sheltered western corner of the bay, where the whitewater is knee-deep and forgiving, and move onto the left once they can pop up. Improvers get coached in the line-up itself, one instructor to two guests, with video on the second and third days so you can see what your feet are doing. Anyone who can already surf just takes a board and goes; the instructors will tell you where the bay is working that morning and when the tide will kill it.\n\nLessons are booked the night before at dinner. Nothing is compulsory, and plenty of guests spend half the week not surfing at all.'
        },
        {
          title: 'Who We Recommend It For',
          description: 'First-timers who want to learn without a week-long camp commitment; couples where one person surfs and the other does not; and anyone who has done two lessons at Weligama and wants a smaller, prettier bay to keep going in. It is not a party house — the bar closes at ten so the dawn patrol can sleep — and it is not a resort. It is a well-run surf guesthouse two minutes from one of the best learner waves on the coast.'
        },
        {
          title: 'Booking and Prices',
          description: 'Book directly on their site; the direct rate includes breakfast and board use, which the booking platforms strip out. Expect roughly USD 45-70 a night for a double depending on season and room, with lessons added per session. Stays of five nights or more get a lesson package rate. January and February book out a month or more ahead; the shoulder months of November and April are quieter and just as good in the water.'
        },
        {
          title: 'Quick Reference',
          description: 'For your notes:',
          codeSnippet: `Where: Hiriketiya bay, Dikwella, 2 min walk to the sand
Rooms: 8 (doubles, twins, two family rooms), 4 with a/c
Includes: breakfast, boards for your stay, bicycles
Lessons: dawn, 2 guests per instructor, video from day 2
Season: November to April; bay is usable most of the year
Best for: 5+ night stays, first-timers and improvers
Book: direct at hiriketiyasurfhouse.lk`
        }
      ],
      keyTakeaways: [
        'Best for stays of a week or more — Hiri rewards settling in rather than passing through.',
        'Book ahead for January and February; the bay is no longer a secret.',
        'Direct bookings include breakfast and boards. The platform rate does not.'
      ],
      conclusion: 'If you are going to learn to surf on this coast, learn it somewhere you can walk to the wave in your bare feet before the sun is up. This is that place.'
    }
  },

  // 13
  {
    id: 'elephants-at-udawalawe',
    title: 'Elephants at Udawalawe: The Down South Safari That Isn’t Yala',
    category: 'Wildlife & Safari',
    date: 'May 16, 2026',
    readTime: '5 min read',
    author: 'Macka',
    excerpt: 'Fewer jeeps, more elephants, and a near-certainty of sightings — why we often send first-timers here instead of Yala.',
    visualType: 'destination-split',
    tileConfig: {
      bgColor: '#ded5cb',
      textColor: '#292522',
      topLabel: 'wildlife encounter',
      headlineText: 'Elephants at Udawalawe',
      partnerName: 'Yala Leopard Safaris',
      mockupImage: 'https://images.unsplash.com/photo-1719807633728-7ff13f7f2b61?auto=format&fit=crop&w=800&q=80',
    },
    content: {
      introduction: [
        'Everyone Down South books Yala for the leopards, then spends the morning in a queue of jeeps. Ninety minutes north of the coast, Udawalawe National Park has a fraction of the traffic and a resident population of several hundred elephants that you are almost guaranteed to see — in herds, in the open, doing what elephants do when nobody is bothering them.',
        'If you have one safari in you, and what you actually want is to watch large animals behave normally rather than to tick off a cat, this is the better drive. We go with [Yala Leopard Safaris](https://yalaleopardsafaris.lk), who run both parks and are honest about which one suits which visitor.'
      ],
      steps: [
        {
          title: 'Why the Sightings Are So Reliable',
          description: 'Udawalawe was created in the 1970s around a big irrigation reservoir, and the park is mostly open grassland, scrub and dead trees standing in the water — nothing like Yala’s dense jungle. There is nowhere for a herd to hide, and the elephants do not try. You see them at distance across the plains, then close beside the track, then at the water’s edge as the day cools: mothers with calves, teenage males sparring, an old tusker on his own.\n\nThe park also has water buffalo, sambar and spotted deer, crocodiles in the reservoir margins, jackals, and one of the best raptor lists in the country — white-bellied sea eagles, grey-headed fish eagles, changeable hawk-eagles, and bee-eaters and painted storks in every direction. Leopards live here too, but sightings are rare enough not to plan around.'
        },
        {
          title: 'Go in the Afternoon, Not the Morning',
          description: 'Unusually for Sri Lankan parks, the late afternoon drive here is the better one. The herds spend the heat of the day in whatever shade they can find and come down to the reservoir as the temperature drops, so from about four o’clock the water’s edge fills up. The light between five and six, low across the grassland with the hills behind, is extraordinary. Morning drives are fine, and quieter still, but the afternoon is the one to book.'
        },
        {
          title: 'The Elephant Transit Home — With a Caveat',
          description: 'Just outside the park gate is the Elephant Transit Home, where orphaned calves are raised and then released back into the park as a group. Feeding times — 09:00, 12:00, 15:00 and 18:00 — are open to the public from a viewing platform for a small fee, and watching a dozen calves jostle for milk bottles is charming.\n\nThe caveat is what it is not: it is a rehabilitation nursery, not a sanctuary tour, and there is no touching, bathing or riding. That is exactly why it is worth supporting over the elephant “orphanages” and riding camps elsewhere in the country. Go if the timing works with your drive; do not expect more than twenty minutes.'
        },
        {
          title: 'Getting There From the Coast',
          description: 'Udawalawe is inland from the coast, roughly ninety minutes to two hours by car from Tangalle or Hiriketiya via Embilipitiya, and about two and a half from Mirissa. The practical way to do it is a car and driver for the day from your guesthouse, with the jeep operator meeting you at the park gate, or an operator who does the whole thing door to door. There are a few guesthouses around the park entrance if you want to sleep nearby and combine it with Yala the next morning; the two parks are about ninety minutes apart.'
        },
        {
          title: 'Udawalawe or Yala?',
          description: 'Choose Udawalawe if elephants matter more to you than the chance of a leopard, if you have children, if crowds spoil things for you, or if you only want one early start on the trip. Choose Yala if the leopard is the point and you can tolerate the gate queue. Do both if you have three days at the eastern end of the coast: Udawalawe in the afternoon, sleep at Tissamaharama, Yala at dawn.'
        },
        {
          title: 'The Practical Details',
          description: 'For your notes:',
          codeSnippet: `Park: Udawalawe National Park, main gate on the Udawalawe-Thanamalwila road
From the coast: 1.5-2 hrs from Tangalle/Hiriketiya, 2.5 hrs from Mirissa
Best drive: afternoon, 14:30-18:00; mornings 06:00-09:30 are quieter
Fees (foreign adult): roughly USD 20-30 park entry + jeep, quoted
                      together at about USD 50-80 pp in a shared jeep
Jeep: 4-6 people. Ask for a tracker, not just a driver
Transit Home feeds: 09:00, 12:00, 15:00, 18:00 - small entry fee
Bring: binoculars, hat, water, long sleeves for the dust
Sightings: elephants on virtually every drive, often 50-100 in a day`
        }
      ],
      keyTakeaways: [
        'Choose Udawalawe over Yala if elephants matter more to you than the chance of a leopard.',
        'Skip the neighbouring elephant “transit home” unless you have researched it — it is a nursery, not a sanctuary tour.',
        'Book the afternoon drive. The herds come to the water as the heat drops, and the light is the best of the day.',
        'Ask for a shared jeep of six or fewer. A full nine-seater on a dusty track is nobody’s idea of a wildlife experience.'
      ],
      conclusion: 'Yala gets the headlines and deserves them. Udawalawe gets the elephants, the space and the light, and on most afternoons it gets you a herd at the water with no other jeep in sight. For a first safari, that is the one we would choose.'
    }
  },

  // 14
  {
    id: 'want-to-learn-to-surf-down-south',
    title: 'Want to Learn to Surf Down South, But Not Sure Where to Start? Read This!',
    category: 'Surf & Beaches',
    date: 'May 08, 2026',
    readTime: '5 min read',
    author: 'Macka',
    excerpt: 'A practical first-week plan for complete beginners — how many lessons you actually need, and what to stop paying for.',
    visualType: 'graphic-bold',
    heroImage: 'https://images.unsplash.com/photo-1661884711767-e3818515a6a5?auto=format&fit=crop&w=1400&q=80',
    tileConfig: {
      bgColor: '#343a40',
      textColor: '#ffffff',
      topLabel: 'surf tip',
      headlineText: 'want to learn to surf down south, but not sure where to start? read this!',
    },
    content: {
      introduction: [
        'The south coast of Sri Lanka is the cheapest and gentlest place most people will ever get to learn to surf. The water is warm all year, the beginner waves are small and slow, the sand is soft, the boards cost a few dollars a day, and the instructors have taught thousands of people exactly like you. You do not need a two-week camp, a wetsuit, or any equipment at all.',
        'Here is the plan we give friends who arrive having never stood on a board, including the honest bit about when to stop paying for lessons and simply practise.'
      ],
      steps: [
        {
          title: '1. Start at Weligama, Not Somewhere Prettier',
          description: 'Hiriketiya is lovelier and Mirissa is livelier, but Weligama Bay is where you learn. It is a two-kilometre sand-bottom beach with slow, crumbling waves, a line of surf schools along the sand, and nothing under your feet but sand. Your first two mornings should be here, whatever else the week holds.'
        },
        {
          title: '2. Choose a School by Its Ratio, Not Its Sign',
          description: 'There are dozens of schools on the bay and most are fine. The things that matter: no more than four students to one instructor, softboards in good condition, a rash vest included, and a lesson that starts on the sand with the pop-up rather than straight in the water. Ask whether the instructor goes in the water with you and pushes you into waves — for the first two lessons, that is the whole job. A group lesson runs 5,000-8,000 rupees for two hours; a private one 8,000-12,000. The private lesson is worth it once, on the first day.'
        },
        {
          title: '3. Two Lessons, Then Stop Booking Lessons',
          description: 'Take two group lessons at Weligama on consecutive mornings. Lesson one is the pop-up, the whitewater and standing up for two seconds. Lesson two is doing that ten times in a row and starting to steer. After that, most people learn faster by renting a softboard for a few dollars a day and practising the same thing badly for a week than by paying for a third, fourth and fifth lesson.\n\nCome back for one more lesson on day five or six, once you can stand up reliably, and ask the instructor to take you out past the whitewater to catch your first green wave. That lesson is worth more than the three you skipped.'
        },
        {
          title: '4. Surf at Dawn, Do Nothing at Midday',
          description: 'The wind gets up by mid-morning and turns the bay to chop, and the sun is genuinely dangerous by eleven. Everyone here surfs from first light until about nine, sleeps or eats through the middle of the day, and goes back out at four. Build your day around that rhythm from the start and you will get twice as much water time with half the sunburn.'
        },
        {
          title: '5. Wear a Rash Vest, Not Just Sunscreen',
          description: 'You will spend two hours lying face-down on a board with your shoulders and back to the sun. Sunscreen washes off in twenty minutes. A long-sleeved rash vest — every school has them, every shop sells them — is the single most important piece of kit you will use all week. Zinc on the face, a hat for the walk back, and drink more water than seems reasonable.'
        },
        {
          title: '6. Learn the Three Rules Before You Paddle Out',
          description: 'Even in the beginner zone there is etiquette, and knowing it keeps everyone safe. The surfer closest to the breaking part of the wave has priority; do not paddle for a wave someone is already riding. Hold onto your board — a loose softboard in the whitewater hits people. And when paddling out, go around the break, not through the line of people riding in. Instructors teach this on day one; keep doing it on day seven.'
        },
        {
          title: '7. On Day Five, Move to Hiriketiya',
          description: 'Once you can stand up and turn a little, Weligama’s crowd of other beginners becomes a limitation. Hiriketiya, forty minutes east, has a mellow left that runs a long way and a sheltered corner for practising, and it is the natural graduation. Stay somewhere you can walk to the water — [Hiriketiya Surf House](https://hiriketiyasurfhouse.lk) is two minutes from the sand and their instructors coach in the line-up rather than the whitewater — and spend the second half of the week there.'
        },
        {
          title: 'The First Week, Day by Day',
          description: 'A template that works:',
          codeSnippet: `Day 1  Weligama. Private or small-group lesson, 07:00. Pop-up, whitewater.
       Buy a rash vest. Sleep at midday. Watch the bay at 16:00.
Day 2  Weligama. Second lesson, 07:00. Ten stand-ups in a row.
       Rent a softboard for the rest of the week (1,000-1,500 LKR/day).
Day 3  Weligama. Solo practice 06:30-09:00. Same thing, badly, on repeat.
Day 4  Weligama. Solo practice. Start angling along the wave.
       Afternoon: move to Hiriketiya.
Day 5  Hiriketiya. Practice in the sheltered corner, 06:30.
Day 6  Hiriketiya. One coached session in the line-up: first green wave.
Day 7  Hiriketiya. Dawn session on the left. You are surfing.

Kit: rash vest, zinc, hat, water, reef-safe sunscreen, nothing else
Cost for the week: roughly 25,000-40,000 LKR in lessons and board hire`
        }
      ],
      keyTakeaways: [
        'Rash vest, not sunscreen alone. You will burn through your shoulders in an hour.',
        'A week in one bay beats a week touring breaks you cannot yet surf.',
        'Two lessons, a week of practice, then one more lesson for the first green wave. That is the honest path.',
        'Dawn and late afternoon only. The midday bay is windy, crowded and dangerous to skin.'
      ],
      conclusion: 'Learning to surf is mostly falling off a board in warm water while the sun comes up over a palm-lined bay, and there are worse ways to spend a week. Start at Weligama, be honest about when the lessons have done their job, and let Hiriketiya finish the work.'
    }
  },

  // 15
  {
    id: 'how-to-plan-a-trip-down-south',
    title: 'How to Plan a Trip Down South: When to Come, How Long, and Where to Base Yourself',
    category: 'Destination Guides',
    date: 'April 29, 2026',
    readTime: '7 min read',
    author: 'Macka',
    excerpt: 'Seasons, monsoons, visas and realistic timings for the south coast — including why May to September changes the answer entirely.',
    visualType: 'quote-minimal',
    heroImage: 'https://images.unsplash.com/photo-1580910527739-556eb89f9d65?auto=format&fit=crop&w=1400&q=80',
    tileConfig: {
      bgColor: '#f2dacd',
      textColor: '#3a261c',
      headlineText: 'how to plan a trip down south: when to come, how long, where to stay',
    },
    content: {
      introduction: [
        'Sri Lanka has two monsoons that hit opposite coasts at opposite times of year, which is why so much advice about the country contradicts itself. Someone who went in July and someone who went in January visited two different islands. For Down South, only one of those monsoons matters, and once you understand it the rest of the planning falls into place.',
        'Here is how to time a south coast trip, how long to give it, where to base yourself, what to sort before you fly, and an honest answer on what to do if your dates fall in the wrong half of the year.'
      ],
      steps: [
        {
          title: 'The Season Is December to April',
          description: 'The southwest monsoon is over by November, the seas calm down, and from December the south coast is dry, sunny and settled: flat mornings, clean surf at dawn, blue whales offshore, and the parks at their best. January and February are the peak — the busiest and most expensive weeks, when the Fort hotels and the good guesthouses book out well ahead. March and April are hotter and quieter, with the sea at its calmest, and are our favourite months here.\n\nExpect daytime temperatures around 30-32°C year-round, high humidity, and short, heavy showers even in the dry months. It is never cold.'
        },
        {
          title: 'May to September Belongs to the East',
          description: 'From late April the southwest monsoon arrives on this coast: rougher seas, heavy afternoon and overnight rain, grey days, and beaches that become dangerous to swim at. It is still green and lovely and far cheaper, the whales have moved on, and the surf is mostly blown out, though the reefs at Midigama and Hiriketiya still work on some days.\n\nIf your dates are fixed in these months, the honest advice is to go east: Arugam Bay, Trincomalee and Passikudah have their dry season from May to September, with whales off Trincomalee in June and July. Come to the south coast for a couple of days at the Galle end, where the Fort is good in any weather, and spend the rest of the trip on the other side of the island.'
        },
        {
          title: 'October and November: The Wildcard',
          description: 'The inter-monsoon months are unpredictable — often fine, sometimes very wet, with thunderstorms in the afternoons. November is a good gamble: the crowds have not arrived, prices are shoulder-season, the whales are starting to appear, and most days are dry by mid-month. October is more of a coin toss.'
        },
        {
          title: 'How Long You Need',
          description: 'Five days is a real trip: Galle, a beach base, the whale boat and one safari, without rushing. Ten days lets you add Hiriketiya, a day inland at Sinharaja or a tea estate, and a slow day or two that nobody plans and everybody needs. Two weeks and you can stop planning altogether — settle in one bay, surf every morning, and take the odd day trip when you feel like it.\n\nWhatever the length, count the travel days honestly. The airport is two hours from Galle and four from Tangalle, and a morning flight home from the south coast means leaving at four.'
        },
        {
          title: 'Where to Base Yourself',
          description: 'The coast is small enough that you can see all of it from two bases, and the mistake is choosing five. Galle for history, food and the Fort, with the beaches at Unawatuna and Dalawella minutes away. Ahangama, Weligama or Mirissa for surf, whales and the middle of everything. Hiriketiya for doing very little in a very pretty bay. Tangalle for long empty beaches and the parks within reach. Pick two, stay three to five nights in each, and resist the third.',
          codeSnippet: `GALLE / UNAWATUNA    history, food, Fort hotels, easy first base
                     nearest beaches: Dalawella, Jungle Beach, Unawatuna
AHANGAMA             surf every day, cafes, quieter than Weligama
WELIGAMA / MIRISSA   first surf lessons, whale boat, busiest nightlife
HIRIKETIYA           small bay, learner left, slow days
TANGALLE             empty beaches, Rekawa turtles, gateway to the parks
TISSAMAHARAMA        one night only, for the Yala dawn drive`
        },
        {
          title: 'Sort Before You Fly',
          description: 'Almost every nationality needs an Electronic Travel Authorisation, applied for online through the official government site before departure, valid for thirty days and extendable in Colombo. It is straightforward but not instant; do it a week ahead and print the approval. Check the current fee and rules for your passport, because they have changed several times in recent years.\n\nBeyond the visa: travel insurance that covers scooters if you plan to ride one (and check the licence conditions), a photo of your passport on your phone, a card that works abroad, and enough cash in a hard currency to change on arrival. The airport has ATMs, SIM counters and money changers all in the arrivals hall.'
        },
        {
          title: 'On Arrival',
          description: 'Buy a local SIM at the airport counter — Dialog or Mobitel, a few thousand rupees for a month of generous data — and install PickMe for tuk-tuks before you leave the building. Take rupees from the ATM in small notes. Then either take a pre-booked transfer or the expressway bus south, and you will be on the coast in two hours.'
        },
        {
          title: 'Book Ahead, or Walk In?',
          description: 'In January and February: book the Fort hotel, the whale boat and the safari jeep ahead, and the guesthouse for the first couple of nights. Everything else — surf lessons, tuk-tuks, restaurants, the next guesthouse — is walk-in on this coast, and booking it from home usually costs more than turning up. Outside peak season, book the first night and improvise. Direct with [Mirissa Blue Whale Tours](https://mirissabluewhale.lk), [Yala Leopard Safaris](https://yalaleopardsafaris.lk) and [Hiriketiya Surf House](https://hiriketiyasurfhouse.lk) is always cheaper than through a platform.'
        },
        {
          title: 'What to Pack',
          description: 'Less than you think. Light, quick-drying clothes, a sarong for temples and beaches, a rash vest, reef shoes if you plan to snorkel, a hat, high-factor sunscreen (expensive here), any prescription medicine, a basic stomach kit, a small dry bag for the whale boat, and a light rain layer. Leave the heavy walking boots and the jeans at home. Everything you forget can be bought in Galle.'
        },
        {
          title: 'Three Itineraries by Length',
          description: 'Pick the one that matches your dates:',
          codeSnippet: `5 DAYS   Galle (2) - Mirissa (1) - Hiriketiya (1) - Tangalle/Tissa (1)
         Ramparts, food walk, Dalawella, whale boat, surf, one safari

10 DAYS  Galle (3) - Ahangama (3) - Hiriketiya (3) - Tissa (1)
         Add: tea estate, Sinharaja day trip, Rekawa turtles, Udawalawe
         and Yala both, a whole day of nothing

14 DAYS  Galle (3) - one surf bay (7) - Tangalle (3) - Tissa (1)
         Settle in. Surf daily. Day-trip when you feel like it.

Season: December to April. Nov and late April are good gambles.
May to September: go east instead, and visit Galle for two days.`
        }
      ],
      keyTakeaways: [
        'Sort your ETA visa online before you fly; it is straightforward but not instant.',
        'December to April for the south coast. Outside that, the east coast is the better trip.',
        'Book whale trips and Yala jeeps ahead in January and February; walk in for everything else.',
        'Two bases, three to five nights each. The coast road makes every extra move expensive in time.'
      ],
      conclusion: 'Get the season right and the rest of a south coast trip almost plans itself: two bases, a few early starts, and a lot of slow afternoons. Get the season wrong and no amount of planning will fix the sea. Check the monsoon first, then book the flights.'
    }
  },

  // 16
  {
    id: 'eating-well-down-south',
    title: 'Our Best Tips for Eating Well Down South (Spice, Allergies and Street Food)',
    category: 'Food & Culture',
    date: 'April 19, 2026',
    readTime: '6 min read',
    author: 'Macka',
    excerpt: 'How to handle real chilli heat, communicate an allergy clearly, and eat street food for a fortnight without a bad night.',
    visualType: 'quote-minimal',
    heroImage: 'https://images.unsplash.com/photo-1687688207113-34bea1617467?auto=format&fit=crop&w=1400&q=80',
    tileConfig: {
      bgColor: '#c8b8b8',
      textColor: '#2e2626',
      headlineText: 'our best tips for: eating well down south',
    },
    content: {
      introduction: [
        'Sri Lankan food is hotter than most visitors expect, and “not spicy” is a relative term everywhere on this coast. Coconut is in almost everything, dried fish hides in dishes that look vegetarian, and a roadside griddle at nine at night is both the best meal of the trip and the one your stomach is most nervous about.',
        'All of that is manageable with a little preparation and a couple of phrases. These are the habits that consistently produce good meals here, whatever your constraints — and a fortnight of street food without a bad night is entirely realistic if you follow them.'
      ],
      steps: [
        {
          title: '1. Ask for It Mild, Twice, and Mean It',
          description: 'Asking once often gets you a polite nod and a normal curry, because the kitchen assumes tourists always say that. Asking clearly and specifically — “no chilli, please, very mild, for a child” — gets you a genuinely mild one. In Sinhala, “sera nethuwa” (without spice) or “sera adui” (less spicy) does the job. Say it when you order and again when the food arrives, and nobody is offended.\n\nThe things that will still surprise you are the sambols: pol sambol (coconut and chilli) and lunu miris (onion and chilli) sit on the side of every plate and are meant to be added a pinch at a time. Taste before you mix.'
        },
        {
          title: '2. When It Is Too Hot, Reach for Curd, Not Water',
          description: 'Water spreads chilli oil around; dairy and starch absorb it. Curd and treacle — thick buffalo yoghurt with palm syrup — is the local answer to a mouth on fire and is sold everywhere on the coast. Plain rice, a piece of pol roti, a spoon of dhal, or a king coconut all help. A cold Lion beer, sadly, does not, though it is nice to try.'
        },
        {
          title: '3. Carry Your Allergy in Sinhala on Your Phone',
          description: 'A saved image explaining your allergy in Sinhala and English — clearly, in large text, with the words for the ingredient and “I will become very ill” — is worth more than any app, because you can hand it to the person who is actually cooking. Show it at the door before you sit down rather than mid-meal, and show it again if a different person brings the food.\n\nThe ingredients that hide: Maldive fish (dried tuna flakes) turns up in a lot of vegetarian-looking sambols and in some vegetable curries; cashew is in curries, not just snacks; peanut oil is uncommon but coconut oil is universal; and shrimp paste appears in some Malay-influenced dishes. Ask specifically, with the card, about each.'
        },
        {
          title: '4. Vegetarian, Vegan and Gluten-Free Are All Easy — With One Question',
          description: 'This is one of the easiest cuisines in the world for plant-based eating: most of a rice and curry is vegetables, dhal and coconut, and a “vegetable rice and curry” is a full meal anywhere. The one question to ask every time is whether the sambol or the vegetable curry contains Maldive fish, because it often does and nobody thinks of it as fish.\n\nHoppers, string hoppers and pittu are all rice-flour and naturally gluten-free. Roti and kottu are wheat. Vegan is straightforward once you rule out the ghee sometimes used in kiri bath and the egg in egg hoppers; coconut milk does the rest.'
        },
        {
          title: '5. Eat Where the Turnover Is High',
          description: 'A busy stall cooking to order is far safer than a quiet buffet sitting warm under a lamp. The rules that actually work: eat at places with a queue, eat food that is cooked in front of you or comes straight from a hot pot, favour lunchtime for rice and curry (cooked that morning) and evening for hoppers and kottu (cooked to order), and be wary of the beach-hotel “Sri Lankan buffet” at nine at night.\n\nSalad and cut fruit are fine in busy places with running water and worth skipping in quiet ones. Ice in a proper café or bar is made from filtered water and is fine; ice from a roadside cooler is a gamble.'
        },
        {
          title: '6. Water, and the Stomach Kit',
          description: 'Do not drink the tap water, and brush your teeth with bottled or filtered. Most guesthouses now have a filter jug or a refill station; bring a bottle and use it, which saves a small mountain of plastic over a fortnight. Bottled water is cheap and everywhere.\n\nPack a small kit: oral rehydration sachets, an anti-diarrhoeal for travel days only, and a course of the antibiotic your doctor recommends for travellers’ diarrhoea, to be used only if things are serious. If you do get ill, pharmacies in every town are excellent and the pharmacist will speak English. Most stomach trouble here passes in a day with fluids and rest.'
        },
        {
          title: '7. Ask About Mild and Vegetarian Routes When You Book',
          description: 'Any cooking class, food walk or guesthouse kitchen will happily run a mild, vegetarian, vegan or allergy-aware version of what they do — if you tell them beforehand. Operators like [Galle Fort Food Walks](https://gallefortfoodwalks.lk) run mild and vegetarian routes on request and will adjust every stop for a nut or seafood allergy. Ask when booking, not on arrival, so the kitchens along the way have been warned.'
        },
        {
          title: 'The Phrases and the Card',
          description: 'Save this to your phone and screenshot the allergy lines you need:',
          codeSnippet: `Sinhala phrases (approximate pronunciation)
  sera nethuwa          without chilli / not spicy
  sera adui             less spicy
  mama masa kanne na    I do not eat meat
  mama malu kanne na    I do not eat fish
  umbalakada nethuwa    without Maldive fish
  kaju nethuwa          without cashew
  biththara nethuwa     without egg
  kiri nethuwa          without milk / dairy
  wathura               water
  istuti                thank you

Allergy card (have a local write the Sinhala under each line):
  I have a serious allergy to ______.
  If I eat even a small amount I will become very ill.
  Please tell me if this food contains ______ in any form.`
        }
      ],
      keyTakeaways: [
        'Curd and treacle is the local answer to a mouth that is too hot. It works.',
        'Ask about mild and vegetarian routes when booking, not on arrival.',
        'Maldive fish hides in sambols and vegetable curries. Ask about it by name.',
        'Busy stall, cooked to order, eaten hot. That rule covers almost every case.'
      ],
      conclusion: 'None of this should put you off the roadside griddle, which is where the best eating on this coast happens. Ask for mild twice, carry the card, follow the queue, and you will eat brilliantly for a fortnight without a bad night.'
    }
  },

  // 17
  {
    id: 'partner-spotlight-galle-fort-food-walks',
    title: 'NEW PARTNER! - Galle Fort Food Walks',
    category: 'Partner Spotlights',
    date: 'April 10, 2026',
    readTime: '4 min read',
    author: 'Macka',
    excerpt: 'Seven kitchens, eight guests, and a guide from Galle who orders for you — the first-evening walk we recommend to almost everyone.',
    visualType: 'laptop-mockup',
    tileConfig: {
      bgColor: '#f2ece5',
      textColor: '#292522',
      badgeText: 'NEW!',
      badgeColor: '#1c1c1c',
      headlineText: 'Galle Food Walks',
      scriptSubtitle: 'Galle, Sri Lanka',
      mockupImage: 'https://images.unsplash.com/photo-1744330763023-f9ea3fd4fe2b?auto=format&fit=crop&w=800&q=80',
    },
    content: {
      introduction: [
        '[Galle Fort Food Walks](https://gallefortfoodwalks.lk) run three-hour evening walks through the Fort and the market town beyond the ramparts, for groups of no more than eight, led by guides who grew up in Galle. Take it on your first evening and it changes every meal for the rest of your trip: you learn what to point at, how hot “not spicy” really is, how to eat with your hand, and which of the seven stops to come back to alone.',
        'We recommend it to almost everyone who writes to us, and we have never had anyone say it was not worth the evening.'
      ],
      steps: [
        {
          title: 'How the Evening Runs',
          description: 'You meet at the clocktower at five, as the heat goes out of the day, and walk out through the Main Gate into the town where Galle actually eats — the bakery counters, the spice market, the rice and curry places with steel trays and a lunchtime crowd that is just clearing. Then back inside the walls as the lights come on, through the lanes to a family kitchen for hoppers and a final stop on the ramparts for curd and treacle as the sun goes down. Seven tastings, none of them small, over about three hours and three kilometres of easy walking.'
        },
        {
          title: 'What the Evening Covers',
          description: '• Three hours, seven tasting stops, small groups of eight\n• Short eats from a Fort bakery, and what each one is\n• The spice market beyond the walls: cinnamon, curry leaves, goraka, Maldive fish\n• A proper rice and curry, dish by dish, eaten by hand\n• Egg hoppers from a family griddle, with lunu miris and seeni sambol\n• Kottu roti, the sound and the meal\n• Curd and treacle on the ramparts at sunset\n• Mild and vegetarian routes on request; allergy-aware with notice'
        },
        {
          title: 'Why It Works So Well on Night One',
          description: 'The guide orders for you, explains everything, and answers the questions you did not know you had — why the dhal is different at lunch and dinner, which sambol goes with which hopper, what the word on the board means. By the end of the walk you have a vocabulary, a set of places you know are good, and the confidence to walk into a kade on your own the next day. That is a different trip from the one where you eat pizza on the beach road every night.'
        },
        {
          title: 'Who We Recommend It For',
          description: 'Everyone on their first visit, families with children old enough to walk three kilometres, anyone with a dietary restriction who wants to see how it is handled here, and returning visitors who never quite got past the tourist menus. It is not a fine-dining event and it is not a bar crawl; it is a walk through a town at the hour it comes alive, with a lot of very good food.'
        },
        {
          title: 'Booking and Prices',
          description: 'Book directly on their site, where they list availability by date. The walk runs most evenings in season and a few evenings a week through the monsoon months, and it goes ahead in light rain — the Fort is lovely wet. Expect somewhere around USD 35-45 per person with all the food included; children under twelve are roughly half. Groups fill a few days ahead in January and February.'
        },
        {
          title: 'Quick Reference',
          description: 'For your notes:',
          codeSnippet: `Operator: Galle Fort Food Walks, Galle Fort
Meet: the clocktower, 17:00
Duration: 3 hours, 7 stops, about 3 km of walking
Group: maximum 8 guests
Includes: all food and a king coconut; drinks beyond that are extra
Routes: standard, mild, vegetarian; allergy-aware with 24 hrs notice
Runs: most evenings Nov-Apr, a few per week May-Oct
Book: direct at gallefortfoodwalks.lk`
        }
      ],
      keyTakeaways: [
        'Do it on night one, not night five.',
        'Come hungry and skip lunch — seven stops is more food than it sounds.',
        'Tell them about any allergy or a mild route when you book, so the kitchens know.'
      ],
      conclusion: 'Three hours on your first evening, and every meal after it is better. There are not many things on this coast we would say that about.'
    }
  },

  // 18
  {
    id: 'guided-safari-or-independent',
    title: 'Should You Book a Guided Safari or Go Independent? (pros, cons & alternatives)',
    category: 'Destination Guides',
    date: 'March 31, 2026',
    readTime: '6 min read',
    author: 'Macka',
    excerpt: 'Where a local guide genuinely changes the outcome Down South, where it does not, and the hybrid most travellers should choose.',
    visualType: 'clean-editorial',
    heroImage: 'https://images.unsplash.com/photo-1566650576880-6740b03eaad1?auto=format&fit=crop&w=1400&q=80',
    tileConfig: {
      bgColor: '#7ba29b',
      textColor: '#ffffff',
      headlineText: 'should you book a guided safari or go independent? (pros, cons & alternatives)',
    },
    content: {
      introduction: [
        'The guided-versus-independent question is usually framed as a personality test — are you an organised-tour person or a backpack person? — which is not very useful. Down South it is really a question about specific activities, because the answer flips depending on what you are doing that day. A local guide transforms a morning in Yala and adds nothing to a morning in Galle Fort.',
        'Here is an honest breakdown of where a guide earns their fee on this coast, where they do not, what each option costs, and the hybrid that suits most travellers who write to us.'
      ],
      steps: [
        {
          title: 'Where Guided Genuinely Wins',
          description: 'National parks, whale boats, rainforest and food. You cannot enter Yala or Udawalawe without a licensed jeep and driver anyway, so the real question there is tracker or no tracker — and a tracker who grew up beside the park, reads the alarm calls and knows where a leopard lies up at seven in the morning sees things you would drive straight past. [Yala Leopard Safaris](https://yalaleopardsafaris.lk) is the outfit we use for both parks.\n\nThe same logic holds on the water, where a marine guide turns an hour of open sea into an education, and at Sinharaja, where the forest is legally guided-only and the endemic birds are invisible without someone who knows the calls. And it holds for food: three hours with a guide on the first evening changes every meal that follows.'
        },
        {
          title: 'Where Independent Wins',
          description: 'The coast itself. Galle Fort, the beaches, the coastal train, the surf, the bakeries and the rice and curry places — this stretch is walkable, well-signposted, English is spoken everywhere, and the pleasure is in aimlessness. A guide walking you around the Fort tells you things a plaque could; a guide taking you to a beach is a tuk-tuk driver with a commentary.\n\nThe temples, the tea estate at Handunugoda, the rock temple at Mulkirigala and the blowhole are all easy to reach and easy to understand on your own. Spend your guide budget elsewhere.'
        },
        {
          title: 'The Honest Pros and Cons',
          description: 'Side by side:',
          codeSnippet: `FULLY GUIDED (driver-guide, fixed itinerary, everything booked)
  + zero logistics, a driver who knows the roads, no price conversations
  + good for short trips, families, first time in Asia
  - USD 80-150 per day before hotels, often with commission stops
  - the itinerary is the driver's, and the coast rewards changing your mind
  - you meet fewer people and eat where the driver eats

FULLY INDEPENDENT (train, tuk-tuk, walk-in guesthouses)
  + a fraction of the cost, total freedom, better food, more encounters
  + the south coast is one of the easiest places in Asia to do this
  - you will spend some time on logistics and a little on being overcharged
  - the parks, whales and rainforest are worse or impossible without help

THE HYBRID (independent coast + two or three guided days)
  + freedom and low cost where it does not matter
  + expertise exactly where it changes the outcome
  - requires booking two or three things yourself, direct`
        },
        {
          title: 'The Hybrid Most People Should Choose',
          description: 'Travel the coast independently — train down from Colombo, guesthouses booked a night or two ahead, tuk-tuks by app — and buy two or three guided days for the things that need local access: one safari, one whale boat, one food walk. You keep the freedom and the low cost across ninety percent of the trip and pay for expertise only where it changes what you see. Book those three direct with the operators, and the whole thing costs less than a single week of a driver-guide package.'
        },
        {
          title: 'The Alternatives in Between',
          description: 'There is a middle ground that gets overlooked. A car and driver for a single day — roughly USD 60-90 including fuel — solves the day when you move base with luggage or want to reach Sinharaja, without committing to a driver for the whole trip. Half-day local guides can be hired through most guesthouses for a temple visit or a village walk at a few thousand rupees. And community tourism projects like the turtle watch at Rekawa are guided by definition and worth every rupee. None of these lock you into anything.'
        },
        {
          title: 'How to Judge Any Guided Offer',
          description: 'Ask one question: what does this guide give me access to that I could not reach alone? For a park, the answer is the tracker’s eyes and the jeep. For a whale boat, the boat and the marine guide. For the food walk, the kitchens and the vocabulary. For the Fort, a beach or a temple, the honest answer is usually nothing — and that is the moment to say no thank you and walk.'
        },
        {
          title: 'A Fortnight, Shaped This Way',
          description: 'What the hybrid looks like on the calendar:',
          codeSnippet: `Independent   Colombo to Galle by train, 3 nights in the Fort
Guided        Evening 1: food walk with Galle Fort Food Walks
Independent   Dalawella, tea estate, bus to Ahangama, surf, 4 nights
Guided        Dawn whale boat with Mirissa Blue Whale Tours
Independent   Hiriketiya, 4 nights, lessons booked on the sand
Car + driver  One day: move to Tissamaharama with luggage
Guided        Yala dawn drive with Yala Leopard Safaris
Independent   Tangalle, 2 nights, Rekawa turtle watch one evening
Car + driver  Expressway to the airport

Guided days: 3 of 14. Cost of guiding: under USD 250 per person.`
        }
      ],
      keyTakeaways: [
        'Ask what the guide gives you access to that you could not reach alone. If the answer is nothing, go independent.',
        'Two or three guided days inside an independent fortnight is the best-value structure Down South.',
        'Book the guided days direct with the operator, not through a driver or a hotel desk.',
        'A car and driver for one day solves the luggage problem without a two-week commitment.'
      ],
      conclusion: 'You do not have to choose a personality. Walk the coast on your own terms, and hand three mornings to people who know a park, a sea and a kitchen better than you ever could. That is the trip most people are actually looking for.'
    }
  },
];
