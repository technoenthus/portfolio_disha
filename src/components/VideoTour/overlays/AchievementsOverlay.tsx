/**
 * AchievementsOverlay.tsx  –  Scene 3 HTML layer
 * Animated stat counters + heading.
 */

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import NavButtons from './NavButtons';

interface Props { onNext: () => void; onPrev: () => void; }

const stats = [
  { value: 0.23,  suffix: '%',  label: 'Myntra HackerRamp',     decimals: 2 },
  { value: 9.48,  suffix: '',   label: 'CGPA',                   decimals: 2 },
  { value: 1,     suffix: '',   label: 'International Publication', decimals: 0 },
  { value: 75,    suffix: '+',  label: 'Top Nationwide Rank',    decimals: 0 },
];

const StatCounter = ({ value, suffix, label, decimals }: typeof stats[0]) => {
  const numRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const obj = { val: 0 };
    gsap.to(obj, {
      val: value,
      duration: 2.2,
      ease: 'power2.out',
      delay: 0.5,
      onUpdate: () => {
        if (numRef.current)
          numRef.current.textContent = obj.val.toFixed(decimals) + suffix;
      },
    });
  }, [value, suffix, decimals]);

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <div className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
        <span ref={numRef}>0</span>
      </div>
      <div className="text-white/50 text-[10px] font-mono text-center mt-1 max-w-[90px] leading-snug">{label}</div>
    </motion.div>
  );
};

const AchievementsOverlay = ({ onNext, onPrev }: Props) => (
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
        Chapter 4
      </motion.span>
      <motion.h2
        className="text-white text-3xl md:text-4xl font-bold text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
      >
        Milky Way of <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">Achievements</span>
      </motion.h2>
      <motion.p
        className="text-gray-400 text-sm mt-2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Hover over stars to reveal each achievement
      </motion.p>

      {/* Stat counters */}
      <motion.div
        className="grid grid-cols-4 gap-8 mt-8 px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        {stats.map(s => <StatCounter key={s.label} {...s} />)}
      </motion.div>
    </div>

    <div className="flex-1" />
    <NavButtons onPrev={onPrev} onNext={onNext} prevLabel="Projects" nextLabel="Beyond Code" />
  </motion.div>
);

export default AchievementsOverlay;
