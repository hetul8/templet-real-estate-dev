'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { PropertyDetail } from './components/PropertyDetail';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Loader } from './components/Loader';

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
    images: ['luxury penthouse mumbai Arabian sea', 'ultra luxury apartment interior gold', 'luxury terrace infinity pool mumbai'],
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
    images: ['modern luxury villa architecture white stone', 'luxury villa landscaped garden fountain', 'contemporary villa interior chandelier'],
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
    images: ['luxury apartment golf course view', 'premium apartment interior gold accents', 'luxury balcony sunset golf'],
    virtualTourUrl: 'https://www.youtube.com/embed/zumJJUL_ruM',
    description: 'Perched above championship greens, where luxury meets leisure. An exclusive address that defines prestige. Experience resort-style living with world-class amenities.',
    amenities: ['Golf Course Views', 'Private Clubhouse', 'Infinity Pool', 'Gymnasium & Spa', 'Cigar Lounge', 'Business Center', 'Concierge', 'Valet Service'],
    highlights: ['Triple-Height Lobby', 'Italian Fixtures', 'Golf Cart Access', 'Members-Only Club'],
    completionDate: 'Q2 2026',
    totalUnits: '78 Select Residences'
  }
];

export default function App() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (selectedProperty) {
    return (
      <PropertyDetail
        property={selectedProperty}
        onBack={() => setSelectedProperty(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <About />
      <Projects properties={properties} onSelectProperty={setSelectedProperty} />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
