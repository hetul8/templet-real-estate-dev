'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Property } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectsProps {
  properties: Property[];
  onSelectProperty: (property: Property) => void;
}

export function Projects({ properties, onSelectProperty }: ProjectsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="portfolio" className="relative py-20 md:py-48 px-8 md:px-16 bg-zinc-950">
      <div className="max-w-[1800px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-px bg-[#d4af37] mb-8"
          />

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <div className="text-xs tracking-[0.5em] uppercase text-[#d4af37] mb-6 md:mb-8">
                Signature Portfolio
              </div>
              <h2 className="serif text-4xl md:text-8xl text-white leading-[1.1]">
                Masterpieces
                <span className="block text-[#d4af37]">in Making</span>
              </h2>
            </div>
            <p className="text-lg md:text-xl text-stone-400 max-w-xl font-light leading-relaxed">
              Each project tells a story of ambition, innovation, and uncompromising quality.
              Explore our collection of extraordinary spaces.
            </p>
          </div>
        </motion.div>

        {/* Projects */}
        <div className="space-y-24 md:space-y-32">
          {properties.map((property, index) => (
            <ProjectCard
              key={property.id}
              property={property}
              index={index}
              onSelect={onSelectProperty}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  property: Property;
  index: number;
  onSelect: (property: Property) => void;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

function ProjectCard({ property, index, onSelect, isHovered, onHover, onLeave }: ProjectCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay: index * 0.2 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={() => onSelect(property)}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center cursor-pointer group ${isEven ? '' : 'lg:grid-flow-dense'
        }`}
    >
      {/* Image */}
      <div className={`lg:col-span-7 relative ${isEven ? '' : 'lg:col-start-6'}`}>
        <div className="relative aspect-[16/11] overflow-hidden bg-zinc-900">
          <motion.div
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="w-full h-full"
          >
            <ImageWithFallback
              src={`https://source.unsplash.com/1600x1100/?${encodeURIComponent(property.images[0])}`}
              alt={property.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Overlay */}
          <motion.div
            animate={{ opacity: isHovered ? 0.8 : 0.4 }}
            className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
          />

          {/* Status Badge */}
          <div className="absolute top-8 right-8">
            <div className="bg-[#d4af37] text-black px-6 py-2 text-xs tracking-[0.2em] uppercase">
              {property.status}
            </div>
          </div>

          {/* Gold Frame */}
          <motion.div
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.95
            }}
            className="absolute -inset-4 border border-[#d4af37]/50 pointer-events-none"
          />
        </div>
      </div>

      {/* Content */}
      <div className={`lg:col-span-5 ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
        <motion.div
          animate={{ x: isHovered ? (isEven ? 20 : -20) : 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Number */}
          <div className="serif text-6xl md:text-8xl text-[#d4af37]/10 mb-4 md:mb-6">
            {String(index + 1).padStart(2, '0')}
          </div>

          {/* Type */}
          <div className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-stone-500 mb-4 md:mb-6">
            {property.type}
          </div>

          {/* Name */}
          <h3 className="serif text-4xl md:text-6xl text-white mb-6 leading-[1.1] group-hover:text-[#d4af37] transition-colors">
            {property.name}
          </h3>

          {/* Location */}
          <div className="flex items-center gap-3 text-stone-400 mb-8">
            <MapPin className="w-4 h-4 text-[#d4af37]" />
            <span className="text-sm tracking-wider">{property.location}</span>
          </div>

          {/* Description */}
          <p className="text-stone-400 leading-relaxed mb-8 font-light">
            {property.description}
          </p>

          {/* Details */}
          <div className="grid grid-cols-2 gap-6 mb-10 pb-10 border-b border-stone-800">
            <div>
              <div className="text-xs text-stone-500 mb-2 tracking-wider">Configuration</div>
              <div className="text-white">{property.bedrooms}</div>
            </div>
            <div>
              <div className="text-xs text-stone-500 mb-2 tracking-wider">Area</div>
              <div className="text-white">{property.area}</div>
            </div>
            <div>
              <div className="text-xs text-stone-500 mb-2 tracking-wider">Investment</div>
              <div className="serif text-2xl text-[#d4af37]">{property.price}</div>
            </div>
            <div>
              <div className="text-xs text-stone-500 mb-2 tracking-wider">Possession</div>
              <div className="text-white">{property.completionDate}</div>
            </div>
          </div>

          {/* CTA */}
          <motion.div
            animate={{ x: isHovered ? 10 : 0 }}
            className="flex items-center gap-3 text-[#d4af37] group"
          >
            <span className="text-xs tracking-[0.3em] uppercase">Explore Project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
