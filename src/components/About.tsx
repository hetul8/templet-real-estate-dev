import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section id="about" ref={ref} className="relative py-24 md:py-56 px-6 md:px-20 bg-black overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(212, 175, 55, 0.05) 25%, rgba(212, 175, 55, 0.05) 26%, transparent 27%, transparent 74%, rgba(212, 175, 55, 0.05) 75%, rgba(212, 175, 55, 0.05) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(212, 175, 55, 0.05) 25%, rgba(212, 175, 55, 0.05) 26%, transparent 27%, transparent 74%, rgba(212, 175, 55, 0.05) 75%, rgba(212, 175, 55, 0.05) 76%, transparent 77%, transparent)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="max-w-[1800px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 md:gap-32 items-center">
          {/* Left Content */}
          <motion.div style={{ opacity }} className="lg:col-span-6">
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 80, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, delay: 0.2, ease: [0.6, 0.05, 0.01, 0.9] }}
              className="h-px bg-gradient-to-r from-[#d4af37] via-[#f0d06c] to-transparent mb-12"
            />

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[10px] tracking-[0.6em] uppercase text-[#d4af37] mb-12 font-light"
            >
              Our Philosophy
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="serif text-6xl md:text-8xl lg:text-9xl text-white mb-16 leading-[0.95] tracking-tight"
            >
              Building More
              <br />
              Than
              <span className="block text-[#d4af37] mt-2">Structures</span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-8 mb-16"
            >
              <p className="text-lg md:text-xl text-stone-400 leading-[1.9] font-light">
                For nearly two decades, we have stood at the intersection of artistry and 
                architecture. Each project is a canvas where vision meets precision, where 
                luxury is not just a promise but a guarantee.
              </p>
              
              <p className="text-lg md:text-xl text-stone-400 leading-[1.9] font-light">
                We don't merely construct buildings; we craft legacies. Our commitment to 
                excellence has earned us the trust of India's most discerning clientele.
              </p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-12">
              {[
                { value: '18+', label: 'Years Excellence' },
                { value: '₹5000Cr+', label: 'Projects Value' },
                { value: '5000+', label: 'Elite Clients' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.6 + i * 0.15 }}
                  className="relative group"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#d4af37]/50 via-[#d4af37]/20 to-transparent" />
                  <div className="pl-6">
                    <div className="serif text-5xl md:text-6xl text-[#d4af37] mb-3 group-hover:scale-110 transition-transform duration-500">
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-stone-500 tracking-[0.3em] uppercase leading-relaxed">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            style={{ y, scale }}
            className="lg:col-span-6 relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: [0.6, 0.05, 0.01, 0.9] }}
              className="relative group"
            >
              {/* Main Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80"
                  alt="Luxury Architecture"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Frames */}
              <div className="absolute -inset-6 border border-[#d4af37]/10 -z-10 group-hover:border-[#d4af37]/20 transition-colors duration-700" />
              <div className="absolute -inset-12 border border-[#d4af37]/5 -z-20" />
              
              {/* Floating Award Badge */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 1 }}
                whileHover={{ scale: 1.05, x: -8 }}
                className="absolute -left-6 md:-left-12 bottom-24 bg-black border border-[#d4af37] p-10 backdrop-blur-sm"
              >
                <div className="text-[10px] tracking-[0.4em] uppercase text-[#d4af37] mb-3 font-light">
                  Award Winning
                </div>
                <div className="serif text-5xl text-white leading-none">
                  Excellence
                </div>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2, duration: 1 }}
                  className="h-px bg-gradient-to-r from-[#d4af37] to-transparent mt-4"
                />
              </motion.div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-[#d4af37]/30" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-[#d4af37]/30" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
