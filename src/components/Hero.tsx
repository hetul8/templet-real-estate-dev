'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const scale = useTransform(scrollY, [0, 600], [1, 1.15]);
  const y = useTransform(scrollY, [0, 600], [0, 200]);

  const slides = [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      {/* Background Slides */}
      <motion.div style={{ scale }} className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: currentSlide === index ? 1 : 0,
              scale: currentSlide === index ? 1 : 1.1
            }}
            transition={{
              opacity: { duration: 2, ease: [0.6, 0.05, 0.01, 0.9] },
              scale: { duration: 8, ease: [0.6, 0.05, 0.01, 0.9] }
            }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/90 z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/40 z-10" />
            <img
              src={slide}
              alt=""
              className="w-full h-full object-cover"
              loading="eager"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Vignette Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] z-20 pointer-events-none" />

      {/* Navigation */}
      <MobileNav />

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.6, 0.05, 0.01, 0.9] }}
        className="hidden md:block fixed top-0 left-0 right-0 z-50"
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-md border-b border-white/5" />
        <div className="relative max-w-[1800px] mx-auto px-8 md:px-20 py-6 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="serif text-3xl md:text-4xl text-white tracking-tight"
          >
            PRESTIGE
          </motion.div>

          <div className="flex items-center gap-16">
            {['About', 'Portfolio', 'Services', 'Contact'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
                whileHover={{ y: -2 }}
                className="text-xs tracking-[0.35em] uppercase text-white/60 hover:text-[#d4af37] transition-all duration-500 relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-gradient-to-r from-[#d4af37] to-transparent group-hover:w-full transition-all duration-700" />
              </motion.a>
            ))}
          </div>

          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05, backgroundColor: '#d4af37' }}
            whileTap={{ scale: 0.95 }}
            className="text-xs tracking-[0.35em] uppercase text-white border border-white/20 px-8 py-3.5 hover:border-[#d4af37] hover:text-black transition-all duration-500"
          >
            Inquire
          </motion.a>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <motion.div style={{ opacity, y }} className="relative z-30 h-full flex items-center">
        <div className="max-w-[1800px] mx-auto px-8 md:px-20 w-full pt-20 md:pt-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          >
            {/* Decorative Line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 120, opacity: 1 }}
              transition={{ duration: 1.8, delay: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
              className="h-px bg-gradient-to-r from-[#d4af37] via-[#f0d06c] to-transparent mb-8 md:mb-12"
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-[10px] md:text-xs tracking-[0.4em] md:tracking-[0.6em] uppercase text-[#d4af37] mb-6 md:mb-10 font-light"
            >
              Crafting Legacies Since 2005
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.4, ease: [0.6, 0.05, 0.01, 0.9] }}
              className="serif text-5xl md:text-9xl lg:text-[13rem] text-white mb-6 md:mb-10 leading-[1.1] md:leading-[0.88] tracking-tight"
            >
              Where Dreams
              <br />
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 1.8 }}
                className="text-[#d4af37] inline-block"
              >
                Meet Reality
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
              className="text-lg md:text-2xl text-white/50 max-w-2xl leading-[1.6] md:leading-[1.8] font-light tracking-wide"
            >
              Architectural excellence reimagined. Creating spaces that transcend
              ordinary living and inspire extraordinary lifestyles.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        style={{ opacity }}
        className="absolute bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 z-30"
      >
        <button
          onClick={scrollToContent}
          className="flex flex-col items-center gap-4 group"
          aria-label="Scroll to content"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 group-hover:text-white/60 transition-colors">
            Explore
          </span>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-[#d4af37]" strokeWidth={1.5} />
          </motion.div>
        </button>
      </motion.div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 md:bottom-16 right-6 md:right-12 lg:right-20 z-30 flex flex-col gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="group flex items-center gap-3"
            aria-label={`Go to slide ${index + 1}`}
          >
            <span className="text-[10px] text-white/30 group-hover:text-white/60 transition-colors tracking-wider hidden md:block">
              0{index + 1}
            </span>
            <motion.div
              animate={{
                height: currentSlide === index ? 48 : 24,
                opacity: currentSlide === index ? 1 : 0.3
              }}
              transition={{ duration: 0.5, ease: [0.6, 0.05, 0.01, 0.9] }}
              className="w-px bg-gradient-to-b from-[#d4af37] to-transparent"
            />
          </button>
        ))}
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
    </div>
  );
}

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="md:hidden fixed top-0 left-0 right-0 z-50 pointer-events-none"
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-md border-b border-white/5" />
        <div className="relative px-6 py-5 flex items-center justify-between pointer-events-auto">
          <div className="serif text-2xl text-white tracking-tight">
            PRESTIGE
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Open menu"
          >
            <div className="w-6 h-px bg-white" />
            <div className="w-6 h-px bg-white" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black md:hidden flex flex-col"
          >
            <div className="px-6 py-5 flex items-center justify-between border-b border-white/10">
              <div className="serif text-2xl text-white tracking-tight">
                PRESTIGE
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center"
                aria-label="Close menu"
              >
                <div className="relative w-6 h-6">
                  <div className="absolute top-1/2 left-0 w-full h-px bg-white -rotate-45" />
                  <div className="absolute top-1/2 left-0 w-full h-px bg-white rotate-45" />
                </div>
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-8">
              <div className="flex flex-col gap-8">
                {['About', 'Portfolio', 'Services', 'Contact'].map((item, i) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className="serif text-4xl text-white/80 hover:text-[#d4af37]"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 pt-12 border-t border-white/10"
              >
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full block text-center text-xs tracking-[0.35em] uppercase text-black bg-[#d4af37] px-8 py-4 "
                >
                  Inquire Now
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

