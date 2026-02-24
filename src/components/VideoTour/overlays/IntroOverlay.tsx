/**
 * IntroOverlay.tsx  –  Scene 0 HTML layer
 */

import { motion } from 'framer-motion';

interface Props { onNext: () => void; }

const container = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const IntroOverlay = ({ onNext }: Props) => (
  <motion.div
    className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20"
    variants={container}
    initial="hidden"
    animate="show"
    exit={{ opacity: 0, y: -20, transition: { duration: 0.4 } }}
  >
    {/* Tag */}
    <motion.span
      variants={item}
      className="text-purple-400 text-xs font-mono tracking-[0.4em] uppercase mb-6 border border-purple-500/30 px-4 py-1.5 rounded-full backdrop-blur-sm"
    >
      Portfolio · 2026
    </motion.span>

    {/* Spacer – the 3D name text sits here */}
    <div className="h-20" />

    {/* Tagline */}
    <motion.p
      variants={item}
      className="text-gray-300 text-xl md:text-2xl font-light tracking-wide text-center px-4 mb-2"
    >
      Engineering Between Code &
    </motion.p>
    <motion.p
      variants={item}
      className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 text-xl md:text-2xl font-semibold text-center px-4 mb-10"
    >
      Curiosity
    </motion.p>

    {/* Role pills */}
    <motion.div variants={item} className="flex flex-wrap justify-center gap-2 mb-12 px-4">
      {['CSE (AI) · IGDTUW', 'Amazon SDE Intern ✓', 'Microsoft SWE Intern →', 'DSA Cohort Lead'].map(tag => (
        <span
          key={tag}
          className="text-[11px] font-mono text-white/60 border border-white/15 px-3 py-1 rounded-full backdrop-blur-sm"
        >
          {tag}
        </span>
      ))}
    </motion.div>

    {/* CTA */}
    <motion.button
      variants={item}
      className="pointer-events-auto px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-full text-sm tracking-wide shadow-lg shadow-purple-900/40 hover:shadow-purple-700/50 transition-shadow duration-300"
      onClick={onNext}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      Begin the Journey →
    </motion.button>
  </motion.div>
);

export default IntroOverlay;
