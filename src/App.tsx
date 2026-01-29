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
import { Property, properties } from './data/properties';

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
