import { PartnerListing } from '../types';

/**
 * Down South partner businesses featured across the blog.
 * Every listing links out to the partner's own website — these outbound links,
 * together with the in-article links, are the backlinks each client receives.
 */
export const PARTNER_LISTINGS: PartnerListing[] = [
  {
    id: 'the-surfer-weligama',
    name: 'The Surfer',
    subtitle: 'Surf Camps & ISA-Certified Lessons',
    location: 'WELIGAMA, SRI LANKA',
    website: 'https://www.thesurferweligama.com/en',
    price: 290,
    currency: '€',
    priceUnit: 'per week, stay + surf',
    bestFor: 'First-timers through to advanced surfers who want a social camp on Weligama Bay',
    description: 'Locally owned Weligama surf camp with three camps, ISA-certified coaches at a maximum of four students each, video analysis, yoga and daily breakfast. Six-time Tripadvisor Travellers’ Choice winner.',
    imageUrl: 'https://images.unsplash.com/photo-1607429289259-456053385f53?auto=format&fit=crop&w=800&q=80',
    accentColor: '#c59e9b',
    badge: 'READER FAVOURITE',
    features: ['Max 4 Students per Coach', 'Video Analysis', 'Boards & Rash Guards', 'Season Oct to Apr']
  },
  {
    id: 'soul-surfer-camp',
    name: 'Soul Surfer Camp',
    subtitle: 'Boutique Surf & Yoga Camp',
    location: 'WELIGAMA, SRI LANKA',
    website: 'https://soulsurfercamp.com/',
    price: 390,
    currency: '€',
    priceUnit: 'per week, stay + surf',
    bestFor: 'Surfers who want a smaller camp with daily yoga and a pool to come back to',
    description: 'The Surfer’s boutique camp in Paranakade, twenty seconds from Weligama beach: rooftop infinity pool, sea-view restaurant, sunrise and sunset yoga, and surf packages from six to eleven lessons a week.',
    imageUrl: 'https://images.unsplash.com/photo-1569970287880-b421ed294ab7?auto=format&fit=crop&w=800&q=80',
    accentColor: '#8c5855',
    badge: 'NEW PARTNER',
    features: ['20 Seconds to the Beach', 'Rooftop Infinity Pool', 'Surf & Yoga Packages', 'Dorms & Ensuite Rooms']
  },
  {
    id: 'mellow-bay-living',
    name: 'Mellow Bay Living',
    subtitle: 'Beach Coworking & Coliving',
    location: 'PELENA, WELIGAMA, SRI LANKA',
    website: 'https://mellowbayliving.com/',
    price: 239,
    currency: '€',
    priceUnit: 'per week, surf stay',
    bestFor: 'Remote workers who want fibre Wi-Fi, a real desk and the sea in the same place',
    description: 'A beachfront coworking space, hostel and coliving house on its own stretch of sand in Pelena, a short walk from Weligama Bay. Air-conditioned cowork room with desks and monitors, day, week and month passes.',
    imageUrl: 'https://images.unsplash.com/photo-1771670050629-122322b3081a?auto=format&fit=crop&w=800&q=80',
    accentColor: '#b5684d',
    badge: 'FOR REMOTE WORKERS',
    features: ['Fibre Wi-Fi & Monitors', 'Day, Week & Month Passes', 'Private Beach', 'Sea-View Rooms & Dorms']
  },
  {
    id: 'hello-rent-sri-lanka',
    name: 'Hello Rent',
    subtitle: 'Scooter, Tuk-Tuk & Car Rental',
    location: 'WELIGAMA, SRI LANKA',
    website: 'https://hellorentsrilanka.com/',
    price: 5,
    currency: '€',
    priceUnit: 'per day, scooters',
    bestFor: 'Anyone who wants to explore the south coast on their own wheels, legally',
    description: 'Automatic scooters, manual bikes, tuk-tuks and air-conditioned cars from a shop on the main road through Weligama. Helmet with every bike, delivery to your hotel or the airport, and the Sri Lankan driving permit arranged for you.',
    imageUrl: 'https://images.unsplash.com/photo-1744298350844-e628a07e8175?auto=format&fit=crop&w=800&q=80',
    accentColor: '#d6cbbe',
    badge: 'LOCALLY OWNED',
    features: ['Helmet Included', 'Hotel & Airport Delivery', 'Driving Permit Arranged', 'Scooters, Tuk-Tuks & Cars']
  },
  {
    id: 'surfers-boat-party-mirissa',
    name: 'Surfers Boat Party',
    subtitle: 'Saturday Sunset Boat Party',
    location: 'MIRISSA, SRI LANKA',
    website: 'https://boatpartymirissa.com/',
    price: 20,
    currency: '€',
    priceUnit: 'per ticket',
    bestFor: 'Travellers who want one big social evening on the water',
    description: 'A five-hour yacht party out of Mirissa harbour every Saturday: DJs, swim stops, unlimited refreshments and sunset past Coconut Tree Hill, Secret Beach and Parrot Rock. Running since 2018.',
    imageUrl: 'https://images.unsplash.com/photo-1602867612779-3aaf54b425c2?auto=format&fit=crop&w=800&q=80',
    accentColor: '#9aa7b3',
    badge: 'SATURDAYS',
    features: ['Every Saturday 15:00-20:00', 'DJ & Swim Stops', 'Unlimited Refreshments', 'Sunset Past Parrot Rock']
  }
];
