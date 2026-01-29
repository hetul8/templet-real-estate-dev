'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Circle, Play, X, Check } from 'lucide-react';
import { Property } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { NeighborhoodData } from './NeighborhoodData';
import { BrochureRequest } from './BrochureRequest';

interface PropertyDetailProps {
  property: Property;
  onBack: () => void;
}

export function PropertyDetail({ property, onBack }: PropertyDetailProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'location' | 'brochure'>('overview');
  const [showVirtualTour, setShowVirtualTour] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen bg-black">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[1800px] mx-auto px-8 md:px-20 py-6 flex items-center justify-between">
          <motion.button
            onClick={onBack}
            whileHover={{ x: -4 }}
            className="flex items-center gap-3 text-stone-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" strokeWidth={1.5} />
            <span className="text-[10px] tracking-[0.35em] uppercase">Back</span>
          </motion.button>

          <div className="serif text-3xl text-white tracking-tight">
            PRESTIGE
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, backgroundColor: '#d4af37' }}
            className="text-[10px] tracking-[0.35em] uppercase text-white border border-white/20 px-6 py-3 hover:border-[#d4af37] hover:text-black transition-all duration-500"
          >
            Inquire
          </motion.a>
        </div>
      </nav>

      {/* Hero Image Section */}
      <section className="pt-20 md:pt-24 pb-0">
        <AnimatePresence mode="wait">
          {!showVirtualTour ? (
            <motion.div
              key="gallery"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-[65vh] md:h-[85vh] overflow-hidden bg-black">
                <motion.div
                  key={selectedImage}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, ease: [0.6, 0.05, 0.01, 0.9] }}
                  className="w-full h-full"
                >
                  <ImageWithFallback
                    src={`https://source.unsplash.com/2400x1600/?${encodeURIComponent(property.images[selectedImage])}`}
                    alt={property.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

                {/* Virtual Tour Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowVirtualTour(true)}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-24 md:h-24 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center group hover:bg-[#d4af37] hover:border-[#d4af37] transition-all duration-500"
                >
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1 group-hover:text-black transition-colors" strokeWidth={1.5} />
                </motion.button>

                {/* Image Navigation Dots */}
                <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 flex gap-4">
                  {property.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`transition-all ${selectedImage === index
                        ? 'w-12 h-1 bg-[#d4af37]'
                        : 'w-1 h-1 bg-white/30 hover:bg-white/50'
                        }`}
                    />
                  ))}
                </div>

                {/* Image Counter */}
                <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 text-white/60 text-xs md:text-sm tracking-wider">
                  {String(selectedImage + 1).padStart(2, '0')} / {String(property.images.length).padStart(2, '0')}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="tour"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative h-[65vh] md:h-[85vh] bg-black"
            >
              <iframe
                className="w-full h-full"
                src={property.virtualTourUrl}
                title="Virtual Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                onClick={() => setShowVirtualTour(false)}
                className="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 md:w-14 md:h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:border-white transition-all group"
              >
                <X className="w-4 h-4 md:w-6 md:h-6 text-white group-hover:text-black transition-colors" strokeWidth={1.5} />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Property Info Header */}
      <section className="px-6 md:px-20 py-16 md:py-24 border-b border-white/5">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Status Badge */}
                <div className="inline-block mb-6 md:mb-8">
                  <div className="bg-[#d4af37] text-black px-6 py-2 text-[10px] tracking-[0.35em] uppercase">
                    {property.status}
                  </div>
                </div>

                <div className="text-[10px] tracking-[0.5em] uppercase text-stone-500 mb-6 md:mb-8 font-light">
                  {property.type}
                </div>

                <h1 className="serif text-4xl md:text-8xl text-white mb-6 md:mb-10 leading-[1.1] md:leading-[0.95] tracking-tight">
                  {property.name}
                </h1>

                <div className="text-lg md:text-xl text-stone-400 mb-8 md:mb-12 tracking-wide">{property.location}</div>

                <div className="flex flex-wrap items-center gap-6 md:gap-10 text-stone-400">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] tracking-widest uppercase text-stone-500">Configuration</span>
                    <Circle className="w-1 h-1 fill-current" />
                    <span className="text-sm md:text-base">{property.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] tracking-widest uppercase text-stone-500">Area</span>
                    <Circle className="w-1 h-1 fill-current" />
                    <span className="text-sm md:text-base">{property.area}</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5 flex lg:items-end justify-start lg:justify-end">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-left lg:text-right"
              >
                <div className="text-xs text-stone-500 mb-4 tracking-[0.3em] uppercase">Investment from</div>
                <div className="serif text-5xl md:text-8xl text-[#d4af37] mb-6">{property.price}</div>
                <div className="text-sm text-stone-500 tracking-wider">{property.totalUnits}</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className="sticky top-[73px] z-40 bg-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[1800px] mx-auto px-6 md:px-20">
          <div className="flex gap-8 md:gap-16 overflow-x-auto no-scrollbar">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'location', label: 'Location' },
              { id: 'brochure', label: 'Enquire' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className="relative py-6 md:py-8 text-[10px] tracking-[0.4em] uppercase transition-colors whitespace-nowrap flex-shrink-0"
              >
                <span className={activeTab === tab.id ? 'text-white' : 'text-stone-500'}>
                  {tab.label}
                </span>
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#d4af37] via-[#f0d06c] to-[#d4af37]"
                    transition={{ type: "spring", stiffness: 400, damping: 40 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="px-6 md:px-20 py-16 md:py-32">
        <div className="max-w-[1800px] mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-20"
              >
                <div className="lg:col-span-8 space-y-16 md:space-y-20">
                  {/* Description */}
                  <div>
                    <h2 className="serif text-3xl md:text-5xl text-white mb-8 md:mb-10 tracking-tight">Description</h2>
                    <p className="text-lg md:text-xl text-stone-400 leading-[1.8] md:leading-[1.9] font-light">
                      {property.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h3 className="serif text-2xl md:text-4xl text-white mb-8 md:mb-10 tracking-tight">Signature Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      {property.highlights.map((highlight, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-5 group"
                        >
                          <div className="w-10 h-10 bg-gradient-to-br from-[#d4af37] to-[#f0d06c] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <Check className="w-5 h-5 text-black" strokeWidth={2} />
                          </div>
                          <span className="text-base md:text-lg text-stone-300 pt-2">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Amenities */}
                  <div>
                    <h3 className="serif text-2xl md:text-4xl text-white mb-8 md:mb-10 tracking-tight">World-Class Amenities</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {property.amenities.map((amenity, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-center gap-4 text-stone-400 hover:text-white transition-colors group"
                        >
                          <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full group-hover:scale-150 transition-transform" />
                          <span className="font-light">{amenity}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="sticky top-56 bg-zinc-950 border border-white/10 p-12"
                  >
                    <h3 className="serif text-3xl text-white mb-6">Schedule Viewing</h3>
                    <p className="text-stone-400 mb-10 leading-relaxed font-light">
                      Experience this masterpiece in person. Our team arranges private viewings at your convenience.
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-[#d4af37] to-[#f0d06c] text-black py-5 mb-4 text-[10px] tracking-[0.35em] uppercase font-medium"
                    >
                      Book Private Tour
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full border border-white/20 text-white py-5 hover:bg-white hover:text-black transition-all duration-500 text-[10px] tracking-[0.35em] uppercase"
                    >
                      Contact Advisor
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {activeTab === 'location' && (
              <motion.div
                key="location"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <NeighborhoodData location={property.location} />
              </motion.div>
            )}

            {activeTab === 'brochure' && (
              <motion.div
                key="brochure"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <BrochureRequest property={property} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
