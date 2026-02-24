/**
 * PersonalityOverlay.tsx  –  Scene 4 HTML layer
 * Split taglines + the "Sleep Mode" humour toggle.
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavButtons from './NavButtons';

interface Props { onNext: () => void; onPrev: () => void; }

const PersonalityOverlay = ({ onNext, onPrev }: Props) => {
  const [sleepMode, setSleepMode] = useState(false);

  return (
    <>
      {/* Sleep Mode screen dim */}
      <AnimatePresence>
        {sleepMode && (
          <motion.div
            className="absolute inset-0 z-50 bg-black/90 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSleepMode(false)}
          >
            <div className="text-center">
              <div className="text-5xl mb-4">😴</div>
              <p className="text-white/80 text-lg font-light">Sleep Mode Activated</p>
              <p className="text-white/40 text-sm mt-1 font-mono">Click anywhere to wake up</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="absolute inset-0 z-20 pointer-events-none flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.6 } }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <div className="flex flex-col items-center pt-16">
          <motion.span
            className="text-purple-400 text-xs font-mono tracking-[0.4em] uppercase mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Chapter 5
          </motion.span>
          <motion.h2
            className="text-white text-3xl md:text-4xl font-bold text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            Beyond <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">the Code</span>
          </motion.h2>
        </div>

        <div className="flex-1" />

        {/* Quote */}
        <motion.div
          className="flex flex-col items-center px-8 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <p className="text-white/70 text-sm md:text-base text-center max-w-lg italic leading-relaxed">
            "Always in for tech experiments or real-time adventures that push me to think, build, and adapt."
          </p>
          <p className="text-white/40 text-xs font-mono mt-3 text-center max-w-md">
            History rabbit holes · Defence systems · Geopolitics · Competitive coding · Professional sleeping
          </p>
        </motion.div>

        {/* Sleep Mode toggle */}
        <motion.div
          className="flex justify-center mb-16 pointer-events-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <button
            onClick={() => setSleepMode(true)}
            className="flex items-center gap-2 text-white/40 hover:text-white/70 text-xs font-mono border border-white/10 hover:border-white/25 px-4 py-2 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            😴 Activate Sleep Mode
          </button>
        </motion.div>

        <NavButtons onPrev={onPrev} onNext={onNext} prevLabel="Achievements" nextLabel="Connect" />
      </motion.div>
    </>
  );
};

export default PersonalityOverlay;
