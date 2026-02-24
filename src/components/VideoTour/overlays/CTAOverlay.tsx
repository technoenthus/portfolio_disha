/**
 * CTAOverlay.tsx  –  Scene 5 HTML layer
 * Final call-to-action with email + return to portfolio.
 */

import { motion } from 'framer-motion';

interface Props { onClose: () => void; onPrev: () => void; }

const container = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const CTAOverlay = ({ onClose, onPrev }: Props) => (
  <motion.div
    className="absolute inset-0 z-20 flex flex-col items-center justify-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.6 } }}
    exit={{ opacity: 0, transition: { duration: 0.3 } }}
  >
    <motion.div
      className="flex flex-col items-center text-center px-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.span
        variants={item}
        className="text-purple-400 text-xs font-mono tracking-[0.4em] uppercase mb-6"
      >
        Chapter 6 · Final
      </motion.span>

      <motion.h2
        variants={item}
        className="text-white text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
      >
        Ready to
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">
          Collaborate?
        </span>
      </motion.h2>

      <motion.p
        variants={item}
        className="text-gray-300 text-base md:text-lg max-w-md leading-relaxed mb-10"
      >
        Open to internships, innovative projects, and conversations that matter.
        Let's build something remarkable together.
      </motion.p>

      {/* Action buttons */}
      <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-10">
        <a
          href="mailto:malhotradisha2710@gmail.com"
          className="flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-full text-sm tracking-wide shadow-lg shadow-purple-900/50 hover:shadow-purple-700/60 hover:scale-105 transition-all duration-300"
        >
          ✉ malhotradisha2710@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/disha-malhotra-b72162285/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-8 py-3.5 border border-blue-500/50 text-blue-300 hover:text-white hover:border-blue-400 hover:bg-blue-500/10 font-semibold rounded-full text-sm tracking-wide transition-all duration-300"
        >
          LinkedIn →
        </a>
      </motion.div>

      {/* Return + back */}
      <motion.div variants={item} className="flex items-center gap-4">
        <button
          onClick={onPrev}
          className="text-white/35 hover:text-white/60 text-xs font-mono tracking-wider border border-white/10 hover:border-white/25 px-4 py-2 rounded-full transition-all duration-200"
        >
          ← Beyond Code
        </button>
        <button
          onClick={onClose}
          className="text-white/50 hover:text-white text-xs font-mono tracking-wider border border-white/20 hover:border-white/50 px-6 py-2 rounded-full transition-all duration-200 backdrop-blur-sm"
        >
          ↩ Return to Portfolio
        </button>
      </motion.div>
    </motion.div>
  </motion.div>
);

export default CTAOverlay;
