export interface Property {
  id: string;
  name: string;
  location: string;
  price: string;
  priceInCrores: number;
  type: string;
  status: string;
  bedrooms: string;
  bathrooms: string;
  area: string;
  images: string[];
  virtualTourUrl: string;
  description: string;
  amenities: string[];
  highlights: string[];
  completionDate: string;
  totalUnits: string;
}

export const properties: Property[] = [
  {
    id: '1',
    name: 'The Celestia',
    location: 'Malabar Hill, Mumbai',
    price: '₹24.5 Cr',
    priceInCrores: 24.5,
    type: 'Sky Penthouse',
    status: 'Ready to Move',
    bedrooms: '5 BHK',
    bathrooms: '6',
    area: '6,200 sq.ft',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1920&auto=format&fit=crop', // Luxury exterior
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1920&auto=format&fit=crop', // Modern living room
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop'  // Infinity pool
    ],
    virtualTourUrl: 'https://www.youtube.com/embed/zumJJUL_ruM',
    description: 'A sovereign sanctuary in the sky. The Celestia defines the pinnacle of Mumbai living, offering 360-degree views of the Arabian Sea and the Queen\'s Necklace. Designed by world-renowned architects, this residence is not just a home, but a statement of power and prestige.',
    amenities: ['Private Infinity Pool', 'Climate Controlled Wine Cellar', '24/7 White Glove Concierge', 'Private Elevator Lobby', 'Spa & Wellness Floor', 'Dolby Atmos Home Cinema', 'Smart Home Ecosystem', 'Rolls Royce Chauffeur Service'],
    highlights: ['Panoramic Sea Views', 'Italian Statuario Marble', 'Double-Height Living Rooms', 'Private Sky Lounge'],
    completionDate: 'Immediate Possession',
    totalUnits: 'One Unit Per Floor'
  },
  {
    id: '2',
    name: 'Elysian Grove',
    location: 'Whitefield, Bangalore',
    price: '₹12.8 Cr',
    priceInCrores: 12.8,
    type: 'Bespoke Villas',
    status: 'Under Construction',
    bedrooms: '5 BHK',
    bathrooms: '7',
    area: '8,500 sq.ft',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1920&auto=format&fit=crop', // Villa exterior
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1920&auto=format&fit=crop', // Minimalist interior
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1920&auto=format&fit=crop'  // Garden
    ],
    virtualTourUrl: 'https://www.youtube.com/embed/zumJJUL_ruM',
    description: 'Where nature embraces luxury. Elysian Grove offers a retreat from the urban chaos without leaving the city. These sustainable, ultra-luxury villas are crafted with earth, stone, and glass, creating a seamless boundary between the indoors and the curated landscapes outside.',
    amenities: ['Private Heated Pool', 'Zen Gardens', 'Home Automation', 'Club House', 'Ayurvedic Spa', 'Tennis & Squash Courts', 'Butler Pantry', 'Biometric Security'],
    highlights: ['Award-Winning Sustainable Design', 'IGBC Platinum Rated', 'Double Height Courtyards', 'Terrace Gardens'],
    completionDate: 'Q3 2025',
    totalUnits: '18 Bespoke Villas'
  },
  {
    id: '3',
    name: 'The Aristo',
    location: 'Golf Course Road, Gurgaon',
    price: '₹15.5 Cr',
    priceInCrores: 15.5,
    type: 'Golf Residences',
    status: 'New Launch',
    bedrooms: '4 BHK',
    bathrooms: '5',
    area: '5,000 sq.ft',
    images: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1920&auto=format&fit=crop', // Hotel/Luxury lobby
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1920&auto=format&fit=crop', // Dining area
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=1920&auto=format&fit=crop'  // Bedroom
    ],
    virtualTourUrl: 'https://www.youtube.com/embed/zumJJUL_ruM',
    description: 'The address of arrival. Overlooking the lush greens of the DLF Golf Course, The Aristo brings the charm of classic European luxury to Gurgaon. Expansive decks, high ceilings, and an exclusive community of industry leaders make this the most coveted address in the NCR.',
    amenities: ['Golf Course Views', 'Cigar & Cognac Lounge', 'Rooftop Infinity Pool', 'World-Class Gymnasium', 'Business Center', 'Private Concierge', 'Valet Service', 'Pet Spa'],
    highlights: ['Triple-Height Lobby', 'Gold-leaf Accents', 'Direct Golf Cart Access', 'Members-Only Club'],
    completionDate: 'Q1 2026',
    totalUnits: '50 Select Residences'
  }
];
