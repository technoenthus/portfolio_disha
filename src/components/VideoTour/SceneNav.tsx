/**
 * SceneNav.tsx
 * Vertical dot navigation on the right edge + prev/next arrows.
 */

import { motion } from 'framer-motion';

interface SceneNavProps {
  scenes: string[];
  activeScene: number;
  onNavigate: (index: number) => void;
}

const SceneNav = ({ scenes, activeScene, onNavigate }: SceneNavProps) => (
  <div className="absolute right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-3">
    {scenes.map((label, i) => (
      <motion.button
        key={label}
        onClick={() => onNavigate(i)}
        className="relative group flex items-center gap-2"
        whileHover={{ scale: 1.2 }}
      >
        {/* Label tooltip */}
        <motion.span
          className="absolute right-7 text-[10px] font-mono text-white/70 whitespace-nowrap bg-black/60 backdrop-blur-sm px-2 py-1 rounded pointer-events-none"
          initial={{ opacity: 0, x: 8 }}
          whileHover={{ opacity: 1, x: 0 }}
          style={{ opacity: 0 }}
        >
          {label}
        </motion.span>

        {/* Dot */}
        <div className="relative w-2.5 h-2.5">
          <div
            className={`w-full h-full rounded-full transition-all duration-300 ${
              i === activeScene
                ? 'bg-purple-400 shadow-[0_0_8px_rgba(167,139,250,0.8)]'
                : 'bg-white/25 hover:bg-white/50'
            }`}
          />
          {i === activeScene && (
            <motion.div
              className="absolute inset-0 rounded-full border border-purple-400/60"
              animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          )}
        </div>
      </motion.button>
    ))}
  </div>
);

export default SceneNav;
