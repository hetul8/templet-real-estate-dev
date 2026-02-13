'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Property } from '../data/properties';
import { ArrowUpRight } from 'lucide-react';

interface ProjectsProps {
  properties: Property[];
  onSelectProperty: (property: Property) => void;
}

export function Projects({ properties, onSelectProperty }: ProjectsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={containerRef} id="properties" className="relative h-[400vh] bg-raamah-black">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 md:left-20 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xs tracking-[0.4em] text-raamah-gold uppercase mb-4"
          >
            Exclusive Portfolio
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="serif text-5xl md:text-7xl text-white"
          >
            Curated Living
          </motion.h2>
        </div>

        <motion.div style={{ x }} className="flex gap-20 px-20 md:px-40">
          {properties.map((property, index) => (
            <ProjectCard
              key={property.id}
              property={property}
              index={index}
              onClick={() => onSelectProperty(property)}
            />
          ))}
          {/* End Card */}
          <div className="min-w-[40vw] h-[70vh] flex items-center justify-center border border-white/10 group cursor-pointer hover:bg-raamah-gold hover:border-raamah-gold transition-colors duration-500">
             <div className="text-center">
                <div className="serif text-4xl text-white group-hover:text-black mb-4">View All</div>
                <div className="text-xs uppercase tracking-widest text-white/50 group-hover:text-black/70">Our Collection</div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ property, index, onClick }: { property: Property, index: number, onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="relative min-w-[85vw] md:min-w-[60vw] h-[70vh] group cursor-none"
    >
      <div className="w-full h-full overflow-hidden relative">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
        <motion.img
          src={property.images[0]}
          alt={property.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20 bg-gradient-to-t from-black/90 to-transparent">
          <div className="flex justify-between items-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <div>
              <div className="text-raamah-gold text-xs tracking-[0.3em] uppercase mb-4">
                0{index + 1} / {property.location}
              </div>
              <h3 className="serif text-4xl md:text-6xl text-white mb-2">
                {property.name}
              </h3>
              <div className="text-white/70 font-light tracking-wide">
                {property.type}
              </div>
            </div>

            <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-raamah-gold group-hover:border-raamah-gold transition-all duration-500">
              <ArrowUpRight className="w-6 h-6 text-white group-hover:text-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
