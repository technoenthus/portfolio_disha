/**
 * JourneyOverlay.tsx  –  Scene 1 HTML layer
 */

import { motion } from 'framer-motion';
import NavButtons from './NavButtons';

interface Props { onNext: () => void; onPrev: () => void; }

const JourneyOverlay = ({ onNext, onPrev }: Props) => (
  <motion.div
    className="absolute inset-0 z-20 pointer-events-none flex flex-col"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.6 } }}
    exit={{ opacity: 0, transition: { duration: 0.3 } }}
  >
    {/* Top heading */}
    <div className="flex flex-col items-center pt-20">
      <motion.span
        className="text-purple-400 text-xs font-mono tracking-[0.4em] uppercase mb-3"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Chapter 2
      </motion.span>
      <motion.h2
        className="text-white text-3xl md:text-4xl font-bold text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
      >
        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Journey</span>
      </motion.h2>
      <motion.p
        className="text-gray-400 text-sm mt-2 text-center max-w-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Hover over milestones to explore each chapter
      </motion.p>
    </div>

    {/* Spacer – 3D timeline lives here */}
    <div className="flex-1" />

    {/* Bottom bar */}
    <motion.div
      className="flex items-center justify-center gap-4 pb-8 px-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
    >
      {[
        { yr: '2019', tag: 'School Leadership', color: '#c084fc' },
        { yr: '2024', tag: 'Tech Lead Roles',   color: '#818cf8' },
        { yr: '2025', tag: 'Amazon Intern',      color: '#f59e0b' },
        { yr: '2026', tag: 'Microsoft Intern',   color: '#38bdf8' },
      ].map(({ yr, tag, color }) => (
        <div key={yr} className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full" style={{ background: color, boxShadow: `0 0 6px ${color}` }} />
          <span className="text-white/50 text-[10px] font-mono">{yr} · {tag}</span>
        </div>
      ))}
    </motion.div>

    <NavButtons onPrev={onPrev} onNext={onNext} prevLabel="Intro" nextLabel="Projects" />
  </motion.div>
);

export default JourneyOverlay;
