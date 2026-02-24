/**
 * ProjectsOverlay.tsx  –  Scene 2 HTML layer
 */

import { motion } from 'framer-motion';
import NavButtons from './NavButtons';

interface Props { onNext: () => void; onPrev: () => void; }

const ProjectsOverlay = ({ onNext, onPrev }: Props) => (
  <motion.div
    className="absolute inset-0 z-20 pointer-events-none flex flex-col"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.6 } }}
    exit={{ opacity: 0, transition: { duration: 0.3 } }}
  >
    <div className="flex flex-col items-center pt-20">
      <motion.span
        className="text-purple-400 text-xs font-mono tracking-[0.4em] uppercase mb-3"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Chapter 3
      </motion.span>
      <motion.h2
        className="text-white text-3xl md:text-4xl font-bold text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
      >
        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">Universe</span> Built
      </motion.h2>
      <motion.p
        className="text-gray-400 text-sm mt-2 text-center max-w-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Click an orb to explore each project
      </motion.p>
    </div>

    <div className="flex-1" />

    {/* Project legend */}
    <motion.div
      className="flex flex-wrap justify-center gap-3 pb-16 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      {[
        { name: 'Cooig',     theme: 'Social Platform', color: '#f472b6' },
        { name: 'YuvaKhel',  theme: 'AI + Sports',     color: '#34d399' },
        { name: 'Everybite', theme: 'AI Food Scanner',  color: '#fb923c' },
        { name: 'Synapse',   theme: 'Neural Network',   color: '#818cf8' },
      ].map(({ name, theme, color }) => (
        <div key={name} className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-full">
          <div className="w-2 h-2 rounded-full" style={{ background: color, boxShadow: `0 0 6px ${color}` }} />
          <span className="text-white/80 text-[11px] font-semibold">{name}</span>
          <span className="text-white/35 text-[10px]">{theme}</span>
        </div>
      ))}
    </motion.div>

    <NavButtons onPrev={onPrev} onNext={onNext} prevLabel="Journey" nextLabel="Achievements" />
  </motion.div>
);

export default ProjectsOverlay;
