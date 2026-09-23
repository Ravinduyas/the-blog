import { PartnerListing, InstagramPost } from '../types';

/**
 * Down South partner businesses featured across the blog.
 * Every listing links out to the partner's own website — these outbound links,
 * together with the in-article links, are the backlinks each client receives.
 */
export const PARTNER_LISTINGS: PartnerListing[] = [
  {
    id: 'mirissa-blue-whale-tours',
    name: 'Mirissa Blue Whale Tours',
    subtitle: 'Whale & Dolphin Boat Trips',
    location: 'MIRISSA, SRI LANKA',
    website: 'https://mirissabluewhale.lk',
    price: 45,
    priceUnit: 'per person',
    bestFor: 'Families, first-timers and anyone hoping for blue whales',
    description: 'Dawn departures from Mirissa harbour with a marine guide on board, run to whale-watching guidelines rather than chasing pods.',
    imageUrl: 'https://images.unsplash.com/photo-1693307379048-890167f73704?auto=format&fit=crop&w=800&q=80',
    accentColor: '#c59e9b',
    badge: 'READER FAVOURITE',
    features: ['06:30 Dawn Departure', 'Marine Guide Aboard', 'Breakfast & Water Included', 'Sighting Rebook Promise']
  },
  {
    id: 'hiriketiya-surf-house',
    name: 'Hiriketiya Surf House',
    subtitle: 'Surf Stay & Beginner Lessons',
    location: 'DIKWELLA, SRI LANKA',
    website: 'https://hiriketiyasurfhouse.lk',
    price: 65,
    priceUnit: 'per night',
    bestFor: 'Beginner surfers and slow travellers staying a week or more',
    description: 'Eight rooms two minutes from Hiriketiya bay, with dawn lessons on the mellow left and boards to borrow all day.',
    imageUrl: 'https://images.unsplash.com/photo-1690896066314-7f0eee7b8ddb?auto=format&fit=crop&w=800&q=80',
    accentColor: '#8c5855',
    badge: 'NEW PARTNER',
    features: ['8 Rooms Only', '2 Min to Hiri Bay', 'Boards & Lessons Included', 'Breakfast on the Deck']
  },
  {
    id: 'galle-fort-food-walks',
    name: 'Galle Fort Food Walks',
    subtitle: 'Evening Food & Spice Walks',
    location: 'GALLE, SRI LANKA',
    website: 'https://gallefortfoodwalks.lk',
    price: 35,
    priceUnit: 'per person',
    bestFor: 'Curious eaters and anyone unsure how to order rice and curry',
    description: 'Three hours through the Fort and the market beyond the ramparts, stopping at seven kitchens most visitors walk straight past.',
    imageUrl: 'https://images.unsplash.com/photo-1742281095650-dd3c50c08772?auto=format&fit=crop&w=800&q=80',
    accentColor: '#b5684d',
    badge: 'BOOKS OUT FAST',
    features: ['7 Tasting Stops', 'Small Groups of 8', 'Mild Route on Request', 'Local Guides from Galle']
  },
  {
    id: 'yala-leopard-safaris',
    name: 'Yala Leopard Safaris',
    subtitle: 'Jeep Safaris — Yala & Udawalawe',
    location: 'TISSAMAHARAMA, SRI LANKA',
    website: 'https://yalaleopardsafaris.lk',
    price: 70,
    priceUnit: 'per person',
    bestFor: 'Wildlife watchers who would rather wait quietly than race between sightings',
    description: 'Locally owned jeeps with trackers who grew up beside the park, running half-day and full-day drives in Yala and Udawalawe.',
    imageUrl: 'https://images.unsplash.com/photo-1566650576880-6740b03eaad1?auto=format&fit=crop&w=800&q=80',
    accentColor: '#d6cbbe',
    badge: 'LOCALLY OWNED',
    features: ['Resident Trackers', 'Half & Full-Day Drives', 'Park Fees Included', 'Max 6 per Jeep']
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'insta-1',
    type: 'quote',
    caption: 'Saving this one for your next Down South plan ✨ #srilanka #southcoast #slowtravel',
    quote: 'Two beaches done slowly beat six beaches done from a van window.',
    authorHandle: '@downsouthlanka',
    likes: 342,
    bgColor: '#e3ece8',
    textColor: '#29433b'
  },
  {
    id: 'insta-2',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1693307379048-890167f73704?auto=format&fit=crop&w=500&q=80',
    caption: 'Mirissa harbour at 06:15, before the boats go out. Full whale-watching guide is on the blog 🐋',
    authorHandle: '@downsouthlanka',
    likes: 519
  },
  {
    id: 'insta-3',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1742281095650-dd3c50c08772?auto=format&fit=crop&w=500&q=80',
    caption: 'Rice and curry on a banana leaf in Galle. Count the little dishes — that is the whole point 🍛',
    authorHandle: '@downsouthlanka',
    likes: 428
  },
  {
    id: 'insta-4',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1613693692851-204a395d0ec7?auto=format&fit=crop&w=500&q=80',
    caption: 'Golden hour at Hiriketiya. The left is patient enough for your first week on a board 🏄',
    authorHandle: '@downsouthlanka',
    likes: 612
  },
  {
    id: 'insta-5',
    type: 'graphic',
    caption: 'What a tuk-tuk, a king coconut and a Yala jeep should actually cost you 💡',
    authorHandle: '@downsouthlanka',
    likes: 830,
    quote: 'down south prices, honestly',
    bgColor: '#33373b',
    textColor: '#f1f1f1'
  },
  {
    id: 'insta-6',
    type: 'pattern',
    caption: 'New South Coast guides every week. Tell us where you are headed 🌴',
    authorHandle: '@downsouthlanka',
    likes: 489,
    bgColor: '#f1e6df',
    textColor: '#9b7161'
  }
];
