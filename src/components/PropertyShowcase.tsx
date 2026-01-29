'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Circle } from 'lucide-react';
import { Property } from '../data/properties';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PropertyShowcaseProps {
  properties: Property[];
  onSelectProperty: (property: Property) => void;
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] as any }
};

export function PropertyShowcase({ properties, onSelectProperty }: PropertyShowcaseProps) {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <motion.nav
        {...fadeIn}
        className="fixed top-0 left-0 right-0 z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200"
      >
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-6 flex items-center justify-between">
          <div className="serif text-2xl tracking-tight text-stone-900">
            Property Commander
          </div>
          <button className="text-sm tracking-[0.2em] uppercase text-stone-600 hover:text-stone-900 transition-colors">
            Contact
          </button>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9], delay: 0.2 }}
          >
            <div className="text-xs tracking-[0.3em] uppercase text-stone-500 mb-8">
              Curated Luxury Real Estate
            </div>
            <h1 className="serif text-6xl md:text-8xl lg:text-9xl text-stone-900 mb-8 leading-[0.95] max-w-5xl">
              Architectural
              <br />
              Excellence
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 max-w-2xl leading-relaxed mb-12">
              Discover residences that transcend expectation. Each property is a
              carefully curated expression of design, location, and lifestyle.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-3 text-stone-900 group cursor-pointer"
            >
              <span className="text-sm tracking-[0.2em] uppercase">Explore Properties</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Properties */}
      <section className="py-20 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {properties.map((property, index) => (
              <PropertyCard
                key={property.id}
                property={property}
                onSelect={onSelectProperty}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 px-8 md:px-16 bg-stone-100">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-16"
          >
            {[
              {
                title: 'Virtual Experience',
                description: 'Immersive 3D tours and spatial documentation of every residence, accessible from anywhere in the world.'
              },
              {
                title: 'Market Intelligence',
                description: 'Comprehensive data analysis of location value, appreciation trends, and neighbourhood evolution.'
              },
              {
                title: 'Digital Presentation',
                description: 'Curated property documentation delivered instantly through your preferred communication channel.'
              }
            ].map((service, index) => (
              <div key={index}>
                <div className="w-px h-16 bg-stone-300 mb-8" />
                <h3 className="serif text-3xl text-stone-900 mb-4">{service.title}</h3>
                <p className="text-stone-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-32 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { value: '₹500+ Cr', label: 'Transaction Value' },
              { value: '1,000+', label: 'Satisfied Clients' },
              { value: '50+', label: 'Premium Properties' },
              { value: '15+', label: 'Prime Locations' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="serif text-4xl md:text-5xl text-stone-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-stone-500 tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

interface PropertyCardProps {
  property: Property;
  onSelect: (property: Property) => void;
  index: number;
}

function PropertyCard({ property, onSelect, index }: PropertyCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.6, 0.05, 0.01, 0.9] }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => onSelect(property)}
      className="cursor-pointer group"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-stone-200">
        <motion.div
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="w-full h-full"
        >
          <ImageWithFallback
            src={property.images[0]}
            alt={property.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
        />

        {/* Type badge */}
        <div className="absolute top-6 right-6">
          <div className="text-xs tracking-[0.2em] uppercase text-white bg-black/30 backdrop-blur-sm px-4 py-2">
            {property.type}
          </div>
        </div>

        {/* Price on hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          className="absolute bottom-6 left-6 right-6"
        >
          <div className="text-sm text-white/80 mb-1 tracking-wider">From</div>
          <div className="serif text-4xl text-white">{property.price}</div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="serif text-3xl text-stone-900 group-hover:text-stone-600 transition-colors">
          {property.name}
        </h3>
        <div className="text-stone-500 tracking-wide">{property.location}</div>
        <div className="flex items-center gap-6 text-sm text-stone-400">
          <span>{property.bedrooms} Bed</span>
          <Circle className="w-1 h-1 fill-current" />
          <span>{property.bathrooms} Bath</span>
          <Circle className="w-1 h-1 fill-current" />
          <span>{property.area}</span>
        </div>

        <motion.div
          animate={{ x: isHovered ? 4 : 0 }}
          className="flex items-center gap-2 text-stone-900 pt-4"
        >
          <span className="text-xs tracking-[0.2em] uppercase">View Details</span>
          <ArrowRight className="w-3 h-3" />
        </motion.div>
      </div>
    </motion.div>
  );
}
