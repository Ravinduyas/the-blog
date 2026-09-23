export type CategoryType =
  | 'All Categories'
  | 'Destination Guides'
  | 'Surf & Beaches'
  | 'Wildlife & Safari'
  | 'Partner Spotlights'
  | 'Food & Culture'
  | 'Getting Around';

export type CardVisualType =
  | 'destination-split'
  | 'quote-minimal'
  | 'laptop-mockup'
  | 'graphic-bold'
  | 'clean-editorial';

export interface BlogPost {
  id: string;
  title: string;
  displayTitle?: string;
  category: CategoryType;
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  visualType: CardVisualType;

  // Flags the flagship article rendered as the full-width hero above the grid.
  featured?: boolean;
  // The article's photograph: the hero treatment, the banner at the top of the
  // article, and the backdrop on the three typographic tile styles.
  heroImage?: string;

  // Card visual custom styling
  tileConfig: {
    bgColor: string;
    textColor: string;
    badgeText?: string;
    badgeColor?: string;
    topLabel?: string;
    headlineText: string;
    headlineHighlight?: string;
    buttonText?: string;
    scriptSubtitle?: string;
    mockupImage?: string;
    mockupType?: 'laptop' | 'browser' | 'split-vertical';
    partnerName?: string;
  };

  // Full article content.
  // Body text supports inline markdown-style links — [label](https://partner-site.com) —
  // which is how partner businesses earn their backlink from within an article.
  content: {
    introduction: string[];
    steps?: {
      title: string;
      description: string;
      codeSnippet?: string;
      tip?: string;
    }[];
    keyTakeaways?: string[];
    conclusion?: string;
  };
}

export interface PartnerListing {
  id: string;
  name: string;
  subtitle: string;
  location: string;
  website: string;
  price: number;
  priceUnit: string;
  bestFor: string;
  description: string;
  imageUrl: string;
  accentColor: string;
  badge?: string;
  features: string[];
}

export interface InstagramPost {
  id: string;
  type: 'quote' | 'image' | 'pattern' | 'graphic';
  imageUrl?: string;
  caption: string;
  quote?: string;
  authorHandle: string;
  likes: number;
  bgColor?: string;
  textColor?: string;
}
