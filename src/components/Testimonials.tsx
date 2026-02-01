'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Unparalleled craftsmanship. Every corner of our penthouse speaks of luxury and sophistication. This is what true premium living feels like.",
      author: "Vikram Malhotra",
      role: "CEO, Tech Innovations",
      project: "Celestial Towers"
    },
    {
      text: "From design consultation to final handover, the experience was seamless. Our villa is an architectural masterpiece that exceeds all expectations.",
      author: "Priya Deshmukh",
      role: "Entrepreneur",
      project: "Royal Enclave"
    },
    {
      text: "Not just a home, but a statement. The quality, location, and amenities are world-class. Best investment decision we've made.",
      author: "Rajesh Khanna",
      role: "Investment Banker",
      project: "Grand Meridian"
    }
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative z-20 py-32 md:py-48 bg-black overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#d4af37] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-8 relative">
        <div className="flex flex-col items-center text-center">

          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 md:mb-32"
          >
             <div className="text-xs tracking-[0.5em] uppercase text-[#d4af37] mb-6">Client Stories</div>
             <div className="w-px h-16 bg-gradient-to-b from-[#d4af37] to-transparent mx-auto opacity-50"></div>
          </motion.div>

          {/* Testimonial Slider */}
          <div className="relative max-w-5xl min-h-[400px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center"
              >
                <Quote className="w-12 h-12 text-[#d4af37] opacity-40 mb-12" />

                <h3 className="serif text-3xl md:text-5xl lg:text-6xl text-white leading-snug mb-16 font-light max-w-4xl mx-auto">
                  "{testimonials[currentIndex].text}"
                </h3>

                <div className="space-y-3">
                  <div className="text-2xl text-[#d4af37] serif">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-sm text-stone-500 font-light tracking-[0.2em] uppercase">
                    {testimonials[currentIndex].role} — {testimonials[currentIndex].project}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-16 mt-20">
            <button
              onClick={prev}
              className="group p-5 rounded-full border border-stone-800 hover:border-[#d4af37] transition-colors bg-black/50 backdrop-blur-sm"
            >
              <ArrowLeft className="w-5 h-5 text-stone-500 group-hover:text-[#d4af37] transition-colors" />
            </button>

            <div className="flex gap-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-[2px] transition-all duration-700 ${
                    i === currentIndex ? 'w-16 bg-[#d4af37]' : 'w-6 bg-stone-800 hover:bg-stone-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="group p-5 rounded-full border border-stone-800 hover:border-[#d4af37] transition-colors bg-black/50 backdrop-blur-sm"
            >
              <ArrowRight className="w-5 h-5 text-stone-500 group-hover:text-[#d4af37] transition-colors" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
