import { motion } from 'motion/react';

export function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 bg-black z-[10000] flex items-center justify-center"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(212, 175, 55, 0.05) 25%, rgba(212, 175, 55, 0.05) 26%, transparent 27%, transparent 74%, rgba(212, 175, 55, 0.05) 75%, rgba(212, 175, 55, 0.05) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(212, 175, 55, 0.05) 25%, rgba(212, 175, 55, 0.05) 26%, transparent 27%, transparent 74%, rgba(212, 175, 55, 0.05) 75%, rgba(212, 175, 55, 0.05) 76%, transparent 77%, transparent)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="text-center relative z-10">
        {/* Logo Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.6, 0.05, 0.01, 0.9]
          }}
          className="mb-20"
        >
          {/* Decorative Line Top */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mb-12 mx-auto"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="serif text-7xl md:text-9xl text-[#d4af37] mb-6 tracking-tight"
          >
            PRESTIGE
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-[10px] tracking-[0.6em] text-stone-500 uppercase font-light"
          >
            Crafting Excellence
          </motion.div>

          {/* Decorative Line Bottom */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mt-12 mx-auto"
          />
        </motion.div>

        {/* Loading Animation */}
        <motion.div
          className="flex gap-3 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="w-px h-16 bg-gradient-to-b from-[#d4af37] via-[#f0d06c] to-transparent"
              animate={{
                scaleY: [1, 1.8, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.15,
                ease: [0.6, 0.05, 0.01, 0.9]
              }}
            />
          ))}
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[10px] tracking-[0.5em] text-stone-600 uppercase mt-12"
        >
          Loading Experience
        </motion.div>
      </div>
    </motion.div>
  );
}
