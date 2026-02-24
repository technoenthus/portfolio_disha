/**
 * VideoTour.tsx
 * Full-screen cinematic 3D portfolio experience.
 * Auto-advances through all scenes. Manual controls available as override.
 */

import { useState, useEffect, useRef, Suspense, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, Preload } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';

import LoadingScreen from './LoadingScreen';
import SceneNav from './SceneNav';
import CameraController from './CameraController';

import IntroScene from './scenes/IntroScene';
import JourneyScene from './scenes/JourneyScene';
import ProjectsScene from './scenes/ProjectsScene';
import AchievementsScene from './scenes/AchievementsScene';
import PersonalityScene from './scenes/PersonalityScene';
import CTAScene from './scenes/CTAScene';

import IntroOverlay from './overlays/IntroOverlay';
import JourneyOverlay from './overlays/JourneyOverlay';
import ProjectsOverlay from './overlays/ProjectsOverlay';
import AchievementsOverlay from './overlays/AchievementsOverlay';
import PersonalityOverlay from './overlays/PersonalityOverlay';
import CTAOverlay from './overlays/CTAOverlay';

// Camera positions per scene [x, y, z]
export const CAMERA_POSITIONS: [number, number, number][] = [
  [0, 0, 8],   // 0 – Intro
  [0, 0, 14],  // 1 – Journey
  [0, 0, 12],  // 2 – Projects
  [0, 0, 14],  // 3 – Achievements
  [0, 0, 8],   // 4 – Personality
  [0, 0, 8],   // 5 – CTA
];

export const SCENE_LABELS = [
  'Intro',
  'Journey',
  'Projects',
  'Achievements',
  'Beyond Code',
  'Connect',
];

// How long (ms) each scene stays before auto-advancing
// CTA (last) gets 0 — it never auto-advances, user decides to close
const SCENE_DURATIONS = [6000, 8000, 8000, 9000, 7000, 0];

interface VideoTourProps {
  onClose: () => void;
}

const VideoTour = ({ onClose }: VideoTourProps) => {
  const [activeScene, setActiveScene] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [transitioning, setTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);       // 0-100 for current scene
  const [paused, setPaused]   = useState(false);

  const progressRef  = useRef<ReturnType<typeof setInterval> | null>(null);
  const autoTimerRef = useRef<ReturnType<typeof setTimeout>  | null>(null);

  // Dismiss loading screen
  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(t);
  }, []);

  const clearTimers = useCallback(() => {
    if (progressRef.current)  clearInterval(progressRef.current);
    if (autoTimerRef.current) clearTimeout(autoTimerRef.current);
  }, []);

  const goTo = useCallback((n: number) => {
    if (transitioning) return;
    setTransitioning(true);
    clearTimers();
    setProgress(0);
    setTimeout(() => {
      setActiveScene(n);
      setTransitioning(false);
    }, 400);
  }, [transitioning, clearTimers]);

  const goNext = useCallback(() => {
    if (activeScene < SCENE_LABELS.length - 1) goTo(activeScene + 1);
  }, [activeScene, goTo]);

  const goPrev = useCallback(() => {
    if (activeScene > 0) goTo(activeScene - 1);
  }, [activeScene, goTo]);

  // ── Auto-advance engine ──────────────────────────────────────────────────
  useEffect(() => {
    if (isLoading) return;
    clearTimers();
    setProgress(0);

    const duration = SCENE_DURATIONS[activeScene];
    if (!duration || paused) return;            // CTA or paused → no timer

    const tickMs   = 50;                        // update progress bar every 50ms
    const ticks    = duration / tickMs;
    let   elapsed  = 0;

    progressRef.current = setInterval(() => {
      elapsed++;
      setProgress(Math.min(100, (elapsed / ticks) * 100));
    }, tickMs);

    autoTimerRef.current = setTimeout(() => {
      goNext();
    }, duration);

    return clearTimers;
  }, [activeScene, isLoading, paused, goNext, clearTimers]);

  // Keyboard navigation (also resets/pauses)
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape')                      onClose();
      if (e.key === 'ArrowRight' || e.key === ' ') goNext();
      if (e.key === 'ArrowLeft')                   goPrev();
      if (e.key === 'p' || e.key === 'P')          setPaused(p => !p);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  });

  const isCTA          = activeScene === SCENE_LABELS.length - 1;
  const showProgress   = !isLoading && !isCTA && SCENE_DURATIONS[activeScene] > 0;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* ── Loading Screen ── */}
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {/* ── Scene progress bar (top of screen) ── */}
      {showProgress && (
        <div className="absolute top-0 left-0 right-0 z-50 h-[2px] bg-white/10">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-indigo-400"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'linear' }}
          />
        </div>
      )}

      {/* ── Top controls ── */}
      {!isLoading && (
        <motion.div
          className="absolute top-4 right-6 z-50 flex items-center gap-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {/* Pause / Play toggle (hidden on CTA) */}
          {!isCTA && (
            <button
              className="text-white/40 hover:text-white/70 text-xs font-mono tracking-widest border border-white/15 hover:border-white/35 px-3 py-1.5 rounded-full transition-all duration-200 backdrop-blur-sm"
              onClick={() => setPaused(p => !p)}
            >
              {paused ? '▶ PLAY' : '⏸ PAUSE'}
            </button>
          )}

          {/* Exit */}
          <button
            className="text-white/60 hover:text-white text-sm font-mono tracking-widest border border-white/20 hover:border-white/50 px-4 py-1.5 rounded-full transition-all duration-200 backdrop-blur-sm"
            onClick={onClose}
          >
            ✕ EXIT
          </button>
        </motion.div>
      )}

      {/* ── Three.js Canvas ── */}
      <Canvas
        camera={{ position: CAMERA_POSITIONS[0], fov: 60 }}
        gl={{ antialias: true, alpha: false }}
        style={{ background: '#050508' }}
      >
        <Suspense fallback={null}>
          <Stars radius={100} depth={60} count={4000} factor={4} saturation={0} fade speed={0.6} />
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]}  intensity={0.8} color="#8b5cf6" />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#6366f1" />

          <CameraController targetPosition={CAMERA_POSITIONS[activeScene]} />

          {activeScene === 0 && <IntroScene />}
          {activeScene === 1 && <JourneyScene />}
          {activeScene === 2 && <ProjectsScene onNext={goNext} />}
          {activeScene === 3 && <AchievementsScene />}
          {activeScene === 4 && <PersonalityScene />}
          {activeScene === 5 && <CTAScene />}

          <Preload all />
        </Suspense>
      </Canvas>

      {/* ── HTML Overlays ── */}
      {!isLoading && (
        <AnimatePresence mode="wait">
          {activeScene === 0 && <IntroOverlay    key="intro"        onNext={goNext} />}
          {activeScene === 1 && <JourneyOverlay  key="journey"      onNext={goNext} onPrev={goPrev} />}
          {activeScene === 2 && <ProjectsOverlay key="projects"     onNext={goNext} onPrev={goPrev} />}
          {activeScene === 3 && <AchievementsOverlay key="ach"      onNext={goNext} onPrev={goPrev} />}
          {activeScene === 4 && <PersonalityOverlay  key="personality" onNext={goNext} onPrev={goPrev} />}
          {activeScene === 5 && <CTAOverlay      key="cta"          onClose={onClose} onPrev={goPrev} />}
        </AnimatePresence>
      )}

      {/* ── Scene dot navigation ── */}
      {!isLoading && (
        <SceneNav scenes={SCENE_LABELS} activeScene={activeScene} onNavigate={goTo} />
      )}

      {/* ── Scene counter bottom-left ── */}
      {!isLoading && (
        <motion.div
          className="absolute bottom-6 left-6 z-40 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span className="text-white/25 text-[11px] font-mono tracking-widest">
            {String(activeScene + 1).padStart(2, '0')} / {String(SCENE_LABELS.length).padStart(2, '0')}
          </span>
          <span className="text-white/20 text-[11px] font-mono">·</span>
          <span className="text-purple-400/50 text-[11px] font-mono tracking-wider uppercase">
            {SCENE_LABELS[activeScene]}
          </span>
        </motion.div>
      )}
    </motion.div>
  );
};

export default VideoTour;
