/**
 * LoadingScreen.tsx
 * Cinematic loading overlay with progress animation.
 */

import { motion } from 'framer-motion';

const LoadingScreen = () => (
  <motion.div
    className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0, scale: 1.05 }}
    transition={{ duration: 0.8, ease: 'easeInOut' }}
  >
    {/* Glowing orb */}
    <div className="relative mb-10">
      <motion.div
        className="w-20 h-20 rounded-full border-2 border-purple-500/60"
        animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute inset-3 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600"
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
      />
      <motion.div
        className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl"
        animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>

    {/* Name */}
    <motion.h1
      className="text-white text-2xl font-bold tracking-[0.3em] mb-3"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      DISHA MALHOTRA
    </motion.h1>

    {/* Subtitle */}
    <motion.p
      className="text-purple-400 text-xs tracking-[0.5em] uppercase mb-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.6 }}
    >
      Loading Experience
    </motion.p>

    {/* Progress bar */}
    <div className="w-48 h-px bg-white/10 relative overflow-hidden rounded-full">
      <motion.div
        className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 to-indigo-400"
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{ duration: 1.8, ease: 'easeInOut' }}
      />
    </div>
  </motion.div>
);

export default LoadingScreen;
