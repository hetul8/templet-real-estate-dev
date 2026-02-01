'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ArrowLeft, ArrowRight, Play, X, Check, MapPin } from 'lucide-react';
import { Property } from '../data/properties';
import { NeighborhoodData } from './NeighborhoodData';
import { BrochureRequest } from './BrochureRequest';

interface PropertyDetailProps {
  property: Property;
  onBack: () => void;
}

export function PropertyDetail({ property, onBack }: PropertyDetailProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'location' | 'brochure'>('overview');
  const [showVirtualTour, setShowVirtualTour] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: scrollRef });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.3]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-raamah-black text-white"
      ref={scrollRef}
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference text-white py-8 px-8 md:px-20 flex justify-between items-center pointer-events-none">
        <button
          onClick={onBack}
          className="pointer-events-auto flex items-center gap-4 group"
        >
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
            <ArrowLeft className="w-5 h-5" />
          </div>
          <span className="text-xs uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-4 group-hover:translate-x-0">
            Back
          </span>
        </button>

        <div className="serif text-2xl font-bold tracking-tighter">RAAMAH</div>

        <button className="pointer-events-auto px-8 py-3 border border-white/20 text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500">
          Inquire
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
         <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="absolute inset-0">
            <img
              src={property.images[0]}
              alt={property.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-raamah-black via-transparent to-transparent" />
         </motion.div>

         <div className="absolute bottom-0 left-0 p-8 md:p-20 w-full max-w-[1920px] mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                 <div className="px-4 py-1 border border-raamah-gold text-raamah-gold text-[10px] uppercase tracking-[0.2em]">
                    {property.status}
                 </div>
                 <div className="text-xs uppercase tracking-[0.2em] text-white/70">
                    {property.location}
                 </div>
              </div>
              <h1 className="serif text-6xl md:text-9xl text-white mb-6 leading-none">
                {property.name}
              </h1>
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-white/60 font-light">
                 <div>
                    <span className="block text-xs uppercase tracking-widest mb-1 text-raamah-gold">Price</span>
                    <span className="text-2xl text-white">{property.price}</span>
                 </div>
                 <div>
                    <span className="block text-xs uppercase tracking-widest mb-1 text-raamah-gold">Type</span>
                    <span className="text-2xl text-white">{property.type}</span>
                 </div>
                 <div>
                    <span className="block text-xs uppercase tracking-widest mb-1 text-raamah-gold">Area</span>
                    <span className="text-2xl text-white">{property.area}</span>
                 </div>
              </div>
            </motion.div>
         </div>
      </section>

      {/* Tabs Sticky Header */}
      <div className="sticky top-0 z-40 bg-raamah-black/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-[1920px] mx-auto px-8 md:px-20 flex gap-12 overflow-x-auto py-6">
            {['overview', 'location', 'brochure'].map((tab) => (
               <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`text-xs uppercase tracking-[0.2em] transition-colors ${activeTab === tab ? 'text-raamah-gold' : 'text-white/40 hover:text-white'}`}
               >
                  {tab}
               </button>
            ))}
        </div>
      </div>

      <div className="max-w-[1920px] mx-auto px-8 md:px-20 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
           {/* Left Content */}
           <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                 {activeTab === 'overview' && (
                    <motion.div
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       exit={{ opacity: 0 }}
                       className="space-y-24"
                    >
                       <div>
                          <h2 className="serif text-4xl text-white mb-8">The Experience</h2>
                          <p className="text-xl text-white/60 font-light leading-relaxed">
                             {property.description}
                          </p>
                       </div>

                       {/* Gallery Grid */}
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[80vh]">
                          <div className="row-span-2 relative overflow-hidden group">
                             <img src={property.images[1]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Detail 1" />
                          </div>
                          <div className="relative overflow-hidden group">
                             <img src={property.images[2] || property.images[0]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Detail 2" />
                          </div>
                          <div className="bg-raamah-gold/10 flex items-center justify-center border border-raamah-gold/20 group cursor-pointer hover:bg-raamah-gold/20 transition-colors">
                             <div className="text-center" onClick={() => setShowVirtualTour(true)}>
                                <Play className="w-12 h-12 text-raamah-gold mx-auto mb-4" />
                                <span className="text-xs uppercase tracking-widest text-raamah-gold">Play Virtual Tour</span>
                             </div>
                          </div>
                       </div>

                       <div>
                          <h2 className="serif text-4xl text-white mb-8">Features & Amenities</h2>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4">
                             {property.amenities.map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-white/60">
                                   <div className="w-1.5 h-1.5 bg-raamah-gold rotate-45" />
                                   <span className="font-light tracking-wide">{item}</span>
                                </div>
                             ))}
                          </div>
                       </div>
                    </motion.div>
                 )}

                 {activeTab === 'location' && (
                    <motion.div
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       exit={{ opacity: 0 }}
                    >
                       <NeighborhoodData location={property.location} />
                    </motion.div>
                 )}

                 {activeTab === 'brochure' && (
                    <motion.div
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       exit={{ opacity: 0 }}
                    >
                       <BrochureRequest property={property} />
                    </motion.div>
                 )}
              </AnimatePresence>
           </div>

           {/* Sticky Sidebar */}
           <div className="hidden lg:block lg:col-span-4 relative">
              <div className="sticky top-40 bg-white/5 p-12 border border-white/10 backdrop-blur-sm">
                 <div className="serif text-3xl text-white mb-2">Interest Piqued?</div>
                 <p className="text-white/50 font-light mb-8">Register your interest for a private viewing of {property.name}.</p>

                 <button className="w-full py-4 bg-raamah-gold text-black text-xs uppercase tracking-[0.2em] mb-4 hover:bg-white transition-colors">
                    Request Call Back
                 </button>
                 <button className="w-full py-4 border border-white/20 text-white text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors">
                    Download Brochure
                 </button>

                 <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between text-white/40 text-xs tracking-widest">
                    <span>ID: {property.id}</span>
                    <span>{property.status}</span>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Virtual Tour Modal */}
      <AnimatePresence>
         {showVirtualTour && (
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-8"
            >
               <button
                  onClick={() => setShowVirtualTour(false)}
                  className="absolute top-8 right-8 text-white hover:text-raamah-gold"
               >
                  <X className="w-12 h-12" />
               </button>
               <div className="w-full max-w-7xl aspect-video bg-black border border-white/10">
                  <iframe
                     src={property.virtualTourUrl}
                     className="w-full h-full"
                     allowFullScreen
                  />
               </div>
            </motion.div>
         )}
      </AnimatePresence>
    </motion.div>
  );
}
