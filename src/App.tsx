'use client';

import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { PropertyDetail } from './components/PropertyDetail';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Loader } from './components/Loader';
import { CustomCursor } from './components/CustomCursor';
import { properties, Property } from './data/properties';

export default function App() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Longer initial load for dramatic effect
    const timer = setTimeout(() => setLoading(false), 2800);
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
    <div className="min-h-screen bg-raamah-black text-white selection:bg-raamah-gold selection:text-black cursor-none">
      <CustomCursor />
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
