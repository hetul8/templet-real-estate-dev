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
    name: 'Celestial Towers',
    location: 'Malabar Hill, Mumbai',
    price: '₹18.5 Cr',
    priceInCrores: 18.5,
    type: 'Ultra-Luxury Residences',
    status: 'Under Construction',
    bedrooms: '4, 5 BHK',
    bathrooms: '5, 6',
    area: '3,800 - 5,200 sq.ft',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80'
    ],
    virtualTourUrl: 'https://www.youtube.com/embed/zumJJUL_ruM',
    description: 'An architectural masterpiece soaring above the city skyline. Where clouds meet luxury and every sunset becomes a private performance. Limited collection of sky residences designed for the discerning few.',
    amenities: ['Infinity Sky Pool', 'Private Wine Cellar', 'Concierge Service', 'Helipad Access', 'Spa & Wellness', 'Private Cinema', 'Smart Home Integration', 'Valet Parking'],
    highlights: ['Panoramic Sea Views', 'Italian Marble Throughout', 'Double-Height Living', 'Private Sky Lounge'],
    completionDate: 'Q4 2025',
    totalUnits: 'Only 36 Exclusive Units'
  },
  {
    id: '2',
    name: 'Royal Enclave',
    location: 'Whitefield, Bangalore',
    price: '₹8.2 Cr',
    priceInCrores: 8.2,
    type: 'Luxury Villas',
    status: 'Ready to Move',
    bedrooms: '5, 6 BHK',
    bathrooms: '6, 7',
    area: '6,000 - 8,500 sq.ft',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80'
    ],
    virtualTourUrl: 'https://www.youtube.com/embed/zumJJUL_ruM',
    description: 'A gated sanctuary of architectural splendor. Each villa is a testament to refined living, where contemporary design harmonizes with nature. Your private estate awaits.',
    amenities: ['Private Pool', 'Landscaped Gardens', 'Home Automation', 'Club House', 'Spa', 'Tennis Court', 'Staff Quarters', 'Premium Security'],
    highlights: ['Award-Winning Architecture', 'LEED Platinum Certified', 'Smart Villa Technology', 'Bespoke Interiors'],
    completionDate: 'Immediate Possession',
    totalUnits: '24 Limited Edition Villas'
  },
  {
    id: '3',
    name: 'Grand Meridian',
    location: 'Golf Course Road, Gurgaon',
    price: '₹12.5 Cr',
    priceInCrores: 12.5,
    type: 'Premium Residences',
    status: 'New Launch',
    bedrooms: '4, 5 BHK',
    bathrooms: '5, 6',
    area: '4,200 - 6,000 sq.ft',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80'
    ],
    virtualTourUrl: 'https://www.youtube.com/embed/zumJJUL_ruM',
    description: 'Perched above championship greens, where luxury meets leisure. An exclusive address that defines prestige. Experience resort-style living with world-class amenities.',
    amenities: ['Golf Course Views', 'Private Clubhouse', 'Infinity Pool', 'Gymnasium & Spa', 'Cigar Lounge', 'Business Center', 'Concierge', 'Valet Service'],
    highlights: ['Triple-Height Lobby', 'Italian Fixtures', 'Golf Cart Access', 'Members-Only Club'],
    completionDate: 'Q2 2026',
    totalUnits: '78 Select Residences'
  }
];
