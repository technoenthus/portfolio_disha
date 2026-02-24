/**
 * NavButtons.tsx  –  Reusable prev / next overlay buttons
 */

import { motion } from 'framer-motion';

interface Props {
  onPrev?: () => void;
  onNext?: () => void;
  prevLabel?: string;
  nextLabel?: string;
}

const NavButtons = ({ onPrev, onNext, prevLabel = 'Back', nextLabel = 'Next' }: Props) => (
  <motion.div
    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 pointer-events-auto"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.7 }}
  >
    {onPrev && (
      <button
        onClick={onPrev}
        className="flex items-center gap-2 text-white/50 hover:text-white text-xs font-mono tracking-wider border border-white/15 hover:border-white/40 px-4 py-2 rounded-full transition-all duration-200 backdrop-blur-sm"
      >
        ← {prevLabel}
      </button>
    )}
    {onNext && (
      <button
        onClick={onNext}
        className="flex items-center gap-2 text-white text-xs font-mono tracking-wider border border-purple-500/50 hover:border-purple-400 bg-purple-600/20 hover:bg-purple-600/35 px-5 py-2 rounded-full transition-all duration-200 backdrop-blur-sm"
      >
        {nextLabel} →
      </button>
    )}
  </motion.div>
);

export default NavButtons;
