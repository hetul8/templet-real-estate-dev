import { motion } from 'motion/react';

export function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 bg-raamah-black z-[10000] flex items-center justify-center overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(212, 175, 55, 0.1) 25%, rgba(212, 175, 55, 0.1) 26%, transparent 27%, transparent 74%, rgba(212, 175, 55, 0.1) 75%, rgba(212, 175, 55, 0.1) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(212, 175, 55, 0.1) 25%, rgba(212, 175, 55, 0.1) 26%, transparent 27%, transparent 74%, rgba(212, 175, 55, 0.1) 75%, rgba(212, 175, 55, 0.1) 76%, transparent 77%, transparent)
            `,
            backgroundSize: '120px 120px'
          }}
        />
      </div>

      <div className="text-center relative z-10">
        {/* Logo Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.6, 0.05, 0.01, 0.9]
          }}
          className="relative"
        >
          {/* Main Logo Text */}
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
              className="serif text-8xl md:text-[10rem] text-raamah-gold tracking-tighter leading-none"
            >
              RAAMAH
            </motion.div>
          </div>
          
          <div className="overflow-hidden mt-4">
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="text-xs md:text-sm tracking-[0.8em] text-white/40 uppercase font-light"
            >
              Beyond Luxury
            </motion.div>
          </div>
        </motion.div>

        {/* Loading Progress Line */}
        <motion.div
          className="mt-16 h-px bg-white/10 w-64 mx-auto relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-raamah-gold"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
