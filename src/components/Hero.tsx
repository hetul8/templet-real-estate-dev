'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent } from 'motion/react';
import { ChevronDown, Menu, X } from 'lucide-react';

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax effects
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.2]);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop',
      title: 'Architectural Poetry',
      subtitle: 'Where Design Meets Destiny'
    },
    {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop',
      title: 'Timeless Elegance',
      subtitle: 'Curated for the Connoisseur'
    },
    {
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop',
      title: 'Infinite Horizons',
      subtitle: 'A View Reserved for Few'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-raamah-black">
      {/* Background Slideshow */}
      <motion.div style={{ scale }} className="absolute inset-0 z-0">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10" />
            <img
              src={slides[currentSlide].image}
              alt="Luxury Architecture"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Navigation */}
      <Navigation />

      {/* Hero Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4"
      >
        <div className="overflow-hidden mb-6">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="text-xs md:text-sm tracking-[0.5em] text-raamah-gold uppercase font-medium"
          >
            Raamah Real Estate Group
          </motion.div>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            key={currentSlide}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="serif text-5xl md:text-8xl lg:text-[9rem] text-white leading-[0.9] tracking-tight mb-8"
          >
            {slides[currentSlide].title.split(' ').map((word, i) => (
              <span key={i} className="inline-block mr-4 md:mr-8">{word}</span>
            ))}
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.p
            key={`sub-${currentSlide}`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: [0.76, 0, 0.24, 1] }}
            className="text-white/70 text-lg md:text-xl font-light tracking-wide max-w-2xl"
          >
            {slides[currentSlide].subtitle}
          </motion.p>
        </div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 px-8 py-4 border border-raamah-gold/50 text-raamah-gold text-xs tracking-[0.3em] uppercase hover:bg-raamah-gold hover:text-black transition-all duration-500"
        >
          Explore Collection
        </motion.button>
      </motion.div>

      {/* Progress/Slide Indicators */}
      <div className="absolute bottom-10 left-10 md:left-20 z-20 flex items-center gap-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className="group relative h-1 w-12 md:w-16 overflow-hidden bg-white/20"
          >
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: currentSlide === idx ? "100%" : "0%" }}
              transition={{ duration: currentSlide === idx ? 7 : 0.5, ease: "linear" }}
              className="absolute top-0 left-0 h-full bg-raamah-gold"
            />
          </button>
        ))}
        <span className="text-white/50 text-xs tracking-widest ml-4">0{currentSlide + 1} / 0{slides.length}</span>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 right-10 md:right-20 z-20 hidden md:flex items-center gap-4"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-white/50">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-raamah-gold" />
        </motion.div>
      </motion.div>
    </div>
  );
}

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  })

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled ? 'bg-raamah-black/80 backdrop-blur-md py-4 border-b border-white/5' : 'py-8'
        }`}
      >
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 border border-raamah-gold flex items-center justify-center rotate-45 group-hover:rotate-90 transition-transform duration-700">
              <div className="w-4 h-4 bg-raamah-gold -rotate-45" />
            </div>
            <span className="serif text-2xl text-white tracking-tight group-hover:text-raamah-gold transition-colors duration-500">
              RAAMAH
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-12">
            {['Properties', 'Services', 'About', 'Journal'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs uppercase tracking-[0.2em] text-white/70 hover:text-raamah-gold transition-colors duration-300"
              >
                {item}
              </a>
            ))}
            <button className="px-6 py-2 bg-raamah-gold text-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-colors duration-500">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-raamah-gold transition-colors"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[60] bg-raamah-black flex flex-col justify-center items-center"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-6 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-10 h-10" />
            </button>

            <div className="flex flex-col gap-8 text-center">
              {['Properties', 'Services', 'About', 'Journal', 'Contact'].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.3 }}
                  className="serif text-5xl text-white hover:text-raamah-gold transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
