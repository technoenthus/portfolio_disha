import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import aboutImage from '../../assets/home.png';
import amazonGif from '../../assets/amazon.gif';
import msGif from '../../assets/ms.gif';

interface ArcadeVideoTourProps {
  onClose: () => void;
}

type TourMode = 'boot' | 'tour';

type Stage = {
  label: string;
  title: string;
  kicker: string;
  summary: string;
  bullets: string[];
  chips: string[];
  accent: string;
  media?: {
    src: string;
    alt: string;
    caption: string;
  };
};

type SoundCue = 'start' | 'move' | 'level-up' | 'complete' | 'exit';

const STORAGE_KEY = 'arcade-video-tour-progress';

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
  const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
  return `${minutes}:${remainingSeconds}`;
};

const stageToScore = (stageIndex: number, seconds: number) => 1200 + stageIndex * 850 + seconds * 15;

const readSavedProgress = (stageCount: number) => {
  if (typeof window === 'undefined') return null;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as { stageIndex?: number; started?: boolean };
    const stageIndex = typeof parsed.stageIndex === 'number' ? parsed.stageIndex : 0;

    return {
      stageIndex: Math.max(0, Math.min(stageCount - 1, stageIndex)),
      started: parsed.started === true,
    };
  } catch {
    return null;
  }
};

const useArcadeSound = () => {
  const audioContextRef = useRef<AudioContext | null>(null);

  const playSound = useCallback((cue: SoundCue) => {
    try {
      const AudioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;

      if (!audioContextRef.current) {
        audioContextRef.current = new AudioContextClass();
      }

      const context = audioContextRef.current;
      if (context.state === 'suspended') {
        void context.resume();
      }

      const oscillator = context.createOscillator();
      const gainNode = context.createGain();

      const cueMap: Record<SoundCue, { frequency: number; duration: number; type: OscillatorType }> = {
        start: { frequency: 440, duration: 0.12, type: 'square' },
        move: { frequency: 560, duration: 0.08, type: 'triangle' },
        'level-up': { frequency: 740, duration: 0.16, type: 'square' },
        complete: { frequency: 880, duration: 0.2, type: 'triangle' },
        exit: { frequency: 240, duration: 0.14, type: 'sawtooth' },
      };

      const cueConfig = cueMap[cue];
      oscillator.type = cueConfig.type;
      oscillator.frequency.setValueAtTime(cueConfig.frequency, context.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(cueConfig.frequency * 0.7, context.currentTime + cueConfig.duration);

      gainNode.gain.setValueAtTime(0.0001, context.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.035, context.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + cueConfig.duration);

      oscillator.connect(gainNode);
      gainNode.connect(context.destination);
      oscillator.start();
      oscillator.stop(context.currentTime + cueConfig.duration + 0.05);
    } catch {
      // Sound is a progressive enhancement; ignore if the browser blocks Web Audio.
    }
  }, []);

  return playSound;
};

const ArcadeVideoTour = ({ onClose }: ArcadeVideoTourProps) => {
  const reduceMotion = useReducedMotion();
  const playSound = useArcadeSound();

  const stages: Stage[] = useMemo(() => [
    {
      label: 'LEVEL 1',
      title: 'Introduction',
      kicker: 'Who I am',
      summary: 'Pre-final year Computer Science (AI) student at IGDTUW, building across code, teamwork, and real-world problem solving.',
      bullets: [
        'I learn fastest by building, shipping, and iterating.',
        'I enjoy hackathons, internships, side projects, and collaborative teams.',
        'I care about making ideas useful, not just impressive.',
      ],
      chips: ['CS (AI)', 'Builder', 'Team Player', 'Problem Solver'],
      accent: 'from-neon-purple/30 via-neon-indigo/10 to-transparent',
      media: {
        src: aboutImage,
        alt: 'Disha avatar',
        caption: 'Mission profile unlocked',
      },
    },
    {
      label: 'LEVEL 2',
      title: 'Skills & Tech Stack',
      kicker: 'Loadout',
      summary: 'A practical stack that covers mobile, backend, cloud, and collaboration workflows.',
      bullets: [
        'Languages and core CS: Java, Python, Dart, and problem-solving fundamentals.',
        'Mobile and web: Flutter, React, Tailwind CSS, and responsive UI craft.',
        'Backend and cloud: AWS, Firebase, Node.js, MongoDB, and production-minded delivery.',
        'AI / ML: computer vision, NLP, model experimentation, and applied ML projects.',
      ],
      chips: ['Java', 'Python', 'Flutter', 'React', 'AWS', 'Firebase', 'AI / ML', 'Tailwind'],
      accent: 'from-neon-indigo/30 via-neon-purple/10 to-transparent',
    },
    {
      label: 'LEVEL 3',
      title: 'Projects Showcase',
      kicker: 'Side quests cleared',
      summary: 'Selected projects that combine product thinking, execution, and practical impact.',
      bullets: [
        'Cooig: a campus social platform for sharing notes, items, and chat in one place.',
        'YuvaKhel: AI-driven computer vision platform for athlete evaluation from mobile videos.',
        'Everybite: an AI food scanner that surfaces nutrition insights and healthier suggestions.',
      ],
      chips: ['Flutter', 'Firebase', 'Socket.io', 'CV', 'Dart', 'Python', 'Gemini API'],
      accent: 'from-soft-purple/25 via-neon-purple/10 to-transparent',
    },
    {
      label: 'LEVEL 4',
      title: 'Experience',
      kicker: 'Boss fights completed',
      summary: 'Internship experience across Amazon and a confirmed upcoming role at Microsoft.',
      bullets: [
        'Amazon: built a push-based billing system with fault-tolerant processing and 100% unit test coverage for critical flows.',
        'Microsoft: selected for the Software Engineering Internship program for Summer 2026.',
        'The common thread: shipping reliable systems with measurable rigor.',
      ],
      chips: ['Amazon', 'Microsoft', 'AWS Lambda', 'DynamoDB', 'Java', 'CDK'],
      accent: 'from-alexa-blue/25 via-microsoft-blue/10 to-transparent',
      media: {
        src: amazonGif,
        alt: 'Amazon experience animation',
        caption: 'Completed mission at Amazon',
      },
    },
    {
      label: 'LEVEL 5',
      title: 'Achievements / Hackathons',
      kicker: 'Bonus rounds',
      summary: 'Recognition for academic consistency, competition results, and research output.',
      bullets: [
        'NXP Women in Tech Scholar: selected among the top 75 nationwide.',
        'Myntra HackerRamp: pre-finalist among 30,000+ participating teams.',
        'Young Barons Pitch: 1st runner-up among 1,200+ teams.',
        'Research paper accepted at IPSR 2025, plus strong academic performance.',
      ],
      chips: ['Scholarship', 'Hackathon', 'Research', 'Academics', 'Top 0.23%'],
      accent: 'from-yellow-400/20 via-neon-purple/10 to-transparent',
      media: {
        src: msGif,
        alt: 'Recognition animation',
        caption: 'Achievement badge collected',
      },
    },
    {
      label: 'FINAL LEVEL',
      title: 'Contact / Call to Action',
      kicker: 'Mission complete',
      summary: 'If you want to build something useful, ambitious, and polished, let’s talk.',
      bullets: [
        'Use the contact section to reach out for internships, collaborations, or project work.',
        'I like roles where ownership matters and the outcome is concrete.',
        'The tour saves your progress, so you can resume from the last unlocked stage later.',
      ],
      chips: ['Contact', 'Collaboration', 'Internships', 'Open to build'],
      accent: 'from-neon-purple/30 via-neon-indigo/10 to-transparent',
    },
  ], []);

  const [savedProgress, setSavedProgress] = useState(() => readSavedProgress(stages.length));
  const [mode, setMode] = useState<TourMode>(savedProgress && savedProgress.started && savedProgress.stageIndex > 0 ? 'tour' : 'boot');
  const [activeStage, setActiveStage] = useState(savedProgress?.stageIndex ?? 0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const timerRef = useRef<number | null>(null);

  const persistProgress = useCallback((stageIndex: number, started: boolean) => {
    if (typeof window === 'undefined') return;

    try {
      const nextProgress = { stageIndex, started, updatedAt: Date.now() };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextProgress));
      setSavedProgress({ stageIndex, started });
    } catch {
      // Ignore storage failures.
    }
  }, []);

  const showToast = useCallback((message: string, cue: SoundCue = 'move') => {
    setToast(message);
    playSound(cue);
    window.setTimeout(() => setToast(null), 1400);
  }, [playSound]);

  const closeArcade = useCallback(() => {
    setIsClosing(true);
    playSound('exit');
    persistProgress(activeStage, true);

    window.setTimeout(() => {
      onClose();
    }, 160);
  }, [activeStage, onClose, persistProgress, playSound]);

  const startTour = useCallback((resume = false) => {
    const nextStage = resume && savedProgress ? savedProgress.stageIndex : 0;
    setMode('tour');
    setActiveStage(nextStage);
    setElapsedSeconds(0);
    playSound('start');
    persistProgress(nextStage, true);
    showToast(resume ? `RESUME STAGE ${nextStage + 1}` : 'PRESS START', 'start');
  }, [persistProgress, playSound, savedProgress, showToast]);

  const goToStage = useCallback((nextStage: number) => {
    const clamped = Math.max(0, Math.min(stages.length - 1, nextStage));
    if (clamped === activeStage) return;

    setDirection(clamped > activeStage ? 1 : -1);
    setActiveStage(clamped);
    persistProgress(clamped, true);

    if (clamped === stages.length - 1) {
      showToast('MISSION COMPLETE', 'complete');
    } else if (clamped > activeStage) {
      showToast(clamped === 0 ? 'START' : 'LEVEL UP', 'level-up');
    } else {
      showToast('NEXT STAGE', 'move');
    }
  }, [activeStage, persistProgress, showToast, stages.length]);

  const goNext = useCallback(() => {
    if (mode === 'boot') {
      startTour(false);
      return;
    }

    if (activeStage < stages.length - 1) {
      goToStage(activeStage + 1);
    } else {
      persistProgress(activeStage, true);
      showToast('MISSION COMPLETE', 'complete');
    }
  }, [activeStage, goToStage, mode, persistProgress, showToast, stages.length, startTour]);

  const goPrevious = useCallback(() => {
    if (mode === 'boot') return;
    if (activeStage > 0) {
      goToStage(activeStage - 1);
    }
  }, [activeStage, goToStage, mode]);

  const restartCampaign = useCallback(() => {
    setMode('boot');
    setActiveStage(0);
    setElapsedSeconds(0);
    persistProgress(0, false);
    showToast('INSERT COIN', 'start');
  }, [persistProgress, showToast]);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setElapsedSeconds((currentSeconds) => currentSeconds + 1);
    }, 1000);

    return () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (mode === 'tour') {
      persistProgress(activeStage, true);
    }
  }, [activeStage, mode, persistProgress]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeArcade();
        return;
      }

      if (mode === 'boot') {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          startTour(false);
        }
        return;
      }

      if (event.key === 'ArrowRight' || event.key === ' ' || event.key === 'Enter') {
        event.preventDefault();
        goNext();
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        goPrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeArcade, goNext, goPrevious, mode, startTour]);

  const currentStage = stages[activeStage];
  const progressPercent = ((activeStage + 1) / stages.length) * 100;
  const score = stageToScore(activeStage, elapsedSeconds);
  const resumeStageLabel = savedProgress && savedProgress.started ? `LEVEL ${savedProgress.stageIndex + 1}` : null;

  const stageMotion = reduceMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, x: direction > 0 ? 24 : -24, scale: 0.985 },
        animate: { opacity: 1, x: 0, scale: 1 },
        exit: { opacity: 0, x: direction > 0 ? -18 : 18, scale: 0.985 },
      };

  return (
    <motion.div
      className={`fixed inset-0 z-[9999] overflow-hidden bg-deep-black text-white ${isClosing ? 'pointer-events-none' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-deep-black via-midnight/80 to-near-black" />

      <motion.div
        className="absolute -top-28 left-[-8rem] h-80 w-80 rounded-full bg-neon-purple/10 blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, 25, 0], y: [0, 18, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-6rem] right-[-7rem] h-96 w-96 rounded-full bg-neon-indigo/10 blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, -18, 0], y: [0, -24, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="absolute inset-0 bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_4px)] opacity-[0.14] mix-blend-screen pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12),transparent_55%)] pointer-events-none" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="border-b border-white/10 bg-black/25 backdrop-blur-md">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-neon-purple/35 bg-near-black/70 shadow-[0_0_18px_rgba(168,85,247,0.25)]">
                <span className="text-[10px] font-black tracking-[0.24em] text-neon-purple" style={{ fontFamily: '"Press Start 2P", monospace' }}>
                  8-BIT
                </span>
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Arcade Video Tour</div>
                <div className="text-[11px] uppercase tracking-[0.28em] text-gray-400">Portfolio mission log</div>
              </div>
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-gray-300">
                Score {score.toLocaleString()}
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-gray-300">
                XP {activeStage * 120 + elapsedSeconds * 3}
              </div>
              <button
                onClick={closeArcade}
                className="rounded-full border border-neon-purple/35 bg-neon-purple/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-neon-purple transition hover:bg-neon-purple/20"
              >
                Exit Arcade
              </button>
            </div>
          </div>
        </header>

        <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-4 sm:px-6 lg:px-8">
          <div className="mb-4 flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              {stages.map((stage, index) => {
                const isActive = index === activeStage;
                const isUnlocked = index <= activeStage;
                return (
                  <button
                    key={stage.label}
                    onClick={() => mode === 'tour' && goToStage(index)}
                    disabled={mode !== 'tour'}
                    className={`rounded-full border px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] transition ${
                      isActive
                        ? 'border-neon-purple/60 bg-neon-purple/20 text-white shadow-[0_0_18px_rgba(168,85,247,0.16)]'
                        : isUnlocked
                          ? 'border-white/10 bg-white/5 text-gray-300 hover:border-neon-purple/30 hover:text-white'
                          : 'border-white/5 bg-white/3 text-gray-500'
                    }`}
                  >
                    {stage.label}
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-3 gap-3 text-xs text-gray-300 sm:flex sm:items-center sm:gap-5">
              <div className="rounded-xl border border-white/10 bg-black/20 px-3 py-2">
                <div className="text-[10px] uppercase tracking-[0.24em] text-gray-500">Timer</div>
                <div className="mt-1 font-semibold text-white">{formatTime(elapsedSeconds)}</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/20 px-3 py-2">
                <div className="text-[10px] uppercase tracking-[0.24em] text-gray-500">Score</div>
                <div className="mt-1 font-semibold text-white">{score.toLocaleString()}</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/20 px-3 py-2">
                <div className="text-[10px] uppercase tracking-[0.24em] text-gray-500">Stage</div>
                <div className="mt-1 font-semibold text-white">
                  {String(activeStage + 1).padStart(2, '0')} / {String(stages.length).padStart(2, '0')}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4 overflow-hidden rounded-full border border-white/10 bg-white/5">
            <motion.div
              className="h-2 bg-gradient-to-r from-neon-purple via-neon-indigo to-soft-purple"
              style={{ width: `${progressPercent}%` }}
              transition={{ duration: reduceMotion ? 0 : 0.4, ease: 'easeOut' }}
            />
          </div>

          <div className="relative flex flex-1 flex-col gap-4 lg:grid lg:grid-cols-[1.25fr_0.75fr] lg:gap-5">
            <AnimatePresence mode="wait" initial={false}>
              {mode === 'boot' ? (
                <motion.section
                  key="boot-screen"
                  className="relative flex min-h-[calc(100vh-220px)] items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 px-5 py-8 backdrop-blur-xl lg:min-h-0"
                  initial={{ opacity: 0, scale: 0.98, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.15),transparent_55%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent_40%,rgba(99,102,241,0.05))]" />

                  <div className="relative z-10 mx-auto grid w-full max-w-5xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                    <div className="text-center lg:text-left">
                      <div className="mb-4 inline-flex rounded-full border border-neon-purple/25 bg-neon-purple/10 px-4 py-2 text-[11px] uppercase tracking-[0.34em] text-neon-purple" style={{ fontFamily: '"Press Start 2P", monospace' }}>
                        Insert Coin
                      </div>
                      <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                        <span className="block bg-gradient-to-r from-neon-purple via-neon-indigo to-soft-purple bg-clip-text text-transparent">
                          Arcade Video Tour
                        </span>
                      </h1>
                      <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
                        A story-driven portfolio journey with levels, mission states, and a clean retro arcade shell.
                      </p>

                      <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                        <button
                          onClick={() => startTour(false)}
                          className="rounded-xl bg-gradient-to-r from-neon-purple to-neon-indigo px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(168,85,247,0.22)] transition hover:scale-[1.02]"
                        >
                          Press Start
                        </button>
                        {savedProgress?.started && savedProgress.stageIndex > 0 && (
                          <button
                            onClick={() => startTour(true)}
                            className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-neon-purple/35 hover:bg-neon-purple/10"
                          >
                            Resume Mission {resumeStageLabel ? `at ${resumeStageLabel}` : ''}
                          </button>
                        )}
                        <button
                          onClick={closeArcade}
                          className="rounded-xl border border-neon-purple/25 bg-black/20 px-6 py-3 text-sm font-semibold text-neon-purple transition hover:border-neon-purple/45 hover:bg-neon-purple/10"
                        >
                          Exit Arcade
                        </button>
                      </div>

                      <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
                        {['Arrow keys = navigate', 'Space / Enter = next', 'Esc = exit'].map((hint) => (
                          <span key={hint} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-gray-400">
                            {hint}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[1.75rem] border border-white/10 bg-near-black/80 p-4 shadow-[0_0_50px_rgba(0,0,0,0.45)]">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.16),transparent_55%)]" />
                      <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-near-black to-deep-black p-4">
                        <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-gray-400">
                          <span>Player File</span>
                          <span>Ready</span>
                        </div>
                        <motion.div
                          className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-black/30"
                          animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
                          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                        >
                          <img src={aboutImage} alt="Disha profile" className="h-auto w-full object-cover" />
                        </motion.div>
                        <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-gray-300">
                          <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">
                            <div className="text-[10px] uppercase tracking-[0.24em] text-gray-500">Mode</div>
                            <div className="mt-1 font-semibold text-white">Retro</div>
                          </div>
                          <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">
                            <div className="text-[10px] uppercase tracking-[0.24em] text-gray-500">Theme</div>
                            <div className="mt-1 font-semibold text-white">Neon</div>
                          </div>
                          <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">
                            <div className="text-[10px] uppercase tracking-[0.24em] text-gray-500">Status</div>
                            <div className="mt-1 font-semibold text-white">Online</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.section>
              ) : (
                <motion.section
                  key={`stage-${activeStage}`}
                  className="grid min-h-[calc(100vh-220px)] gap-4 lg:min-h-0 lg:grid-cols-[1.1fr_0.9fr]"
                  {...stageMotion}
                  transition={{ duration: reduceMotion ? 0 : 0.34, ease: 'easeOut' }}
                >
                  <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-6 lg:p-8">
                    <div className={`absolute inset-0 bg-gradient-to-br ${currentStage.accent}`} />
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),transparent_35%,rgba(255,255,255,0.02))]" />

                    <div className="relative z-10 flex h-full flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="mb-3 inline-flex rounded-full border border-neon-purple/25 bg-neon-purple/10 px-4 py-2 text-[11px] uppercase tracking-[0.34em] text-neon-purple" style={{ fontFamily: '"Press Start 2P", monospace' }}>
                            {currentStage.label}
                          </div>
                          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{currentStage.title}</h2>
                          <p className="mt-2 text-sm uppercase tracking-[0.3em] text-gray-400">{currentStage.kicker}</p>
                        </div>

                        <div className="hidden rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-right md:block">
                          <div className="text-[10px] uppercase tracking-[0.25em] text-gray-500">Mission Clock</div>
                          <div className="mt-1 text-lg font-semibold text-white">{formatTime(elapsedSeconds)}</div>
                        </div>
                      </div>

                      <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg">
                        {currentStage.summary}
                      </p>

                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {currentStage.bullets.map((bullet) => (
                          <div key={bullet} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm leading-relaxed text-gray-300 backdrop-blur-sm">
                            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-neon-purple align-middle shadow-[0_0_12px_rgba(168,85,247,0.5)]" />
                            {bullet}
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {currentStage.chips.map((chip) => (
                          <span key={chip} className="rounded-full border border-neon-purple/20 bg-neon-purple/10 px-3 py-1.5 text-xs font-medium text-neon-purple">
                            {chip}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
                        <button
                          onClick={goPrevious}
                          disabled={activeStage === 0}
                          className="rounded-xl border border-white/10 bg-black/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-neon-purple/35 hover:bg-neon-purple/10 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                          Previous Stage
                        </button>
                        <button
                          onClick={goNext}
                          className="rounded-xl bg-gradient-to-r from-neon-purple to-neon-indigo px-5 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(168,85,247,0.2)] transition hover:scale-[1.01]"
                        >
                          {activeStage === stages.length - 1 ? 'Mission Complete' : 'Next Stage'}
                        </button>
                        <button
                          onClick={restartCampaign}
                          className="rounded-xl border border-neon-purple/20 bg-white/5 px-5 py-3 text-sm font-semibold text-neon-purple transition hover:border-neon-purple/40 hover:bg-neon-purple/10"
                        >
                          Restart Campaign
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 p-4 backdrop-blur-xl sm:p-5">
                      <div className="mb-4 flex items-center justify-between">
                        <div>
                          <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500">HUD</div>
                          <div className="mt-1 text-lg font-semibold text-white">Stage Navigation</div>
                        </div>
                        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-gray-300">
                          {String(activeStage + 1).padStart(2, '0')} / {String(stages.length).padStart(2, '0')}
                        </div>
                      </div>

                      <div className="space-y-3">
                        {stages.map((stage, index) => {
                          const isActive = index === activeStage;
                          const isUnlocked = index <= activeStage;

                          return (
                            <button
                              key={stage.label}
                              onClick={() => isUnlocked && goToStage(index)}
                              className={`group w-full rounded-2xl border px-4 py-4 text-left transition ${
                                isActive
                                  ? 'border-neon-purple/40 bg-neon-purple/15 shadow-[0_0_20px_rgba(168,85,247,0.16)]'
                                  : isUnlocked
                                    ? 'border-white/10 bg-white/5 hover:border-neon-purple/25 hover:bg-neon-purple/10'
                                    : 'border-white/5 bg-black/10 opacity-40'
                              }`}
                            >
                              <div className="flex items-center justify-between gap-3">
                                <div>
                                  <div className={`text-[10px] uppercase tracking-[0.3em] ${isActive ? 'text-neon-purple' : 'text-gray-500'}`}>
                                    {stage.label}
                                  </div>
                                  <div className="mt-1 text-sm font-semibold text-white">{stage.title}</div>
                                </div>
                                <span className="text-xs uppercase tracking-[0.22em] text-gray-400">
                                  {isActive ? 'Active' : isUnlocked ? 'Unlocked' : 'Locked'}
                                </span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                      {currentStage.media ? (
                        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 p-4 backdrop-blur-xl">
                          <div className="mb-3 text-[10px] uppercase tracking-[0.3em] text-gray-500">Clip / Visual</div>
                          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-deep-black/70">
                            <motion.img
                              src={currentStage.media.src}
                              alt={currentStage.media.alt}
                              className="h-full w-full object-cover"
                              animate={reduceMotion ? undefined : { scale: [1, 1.01, 1] }}
                              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                            />
                          </div>
                          <p className="mt-3 text-sm text-gray-300">{currentStage.media.caption}</p>
                        </div>
                      ) : (
                        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 p-4 backdrop-blur-xl">
                          <div className="mb-3 text-[10px] uppercase tracking-[0.3em] text-gray-500">Mission Feed</div>
                          <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-5">
                            <div className="text-sm leading-relaxed text-gray-300">
                              The tour keeps your portfolio theme intact while stepping through the journey like a playable story.
                            </div>
                            <div className="mt-4 grid grid-cols-2 gap-3 text-center text-xs text-gray-300">
                              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">
                                <div className="text-[10px] uppercase tracking-[0.24em] text-gray-500">Motion</div>
                                <div className="mt-1 font-semibold text-white">Smooth</div>
                              </div>
                              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">
                                <div className="text-[10px] uppercase tracking-[0.24em] text-gray-500">Tone</div>
                                <div className="mt-1 font-semibold text-white">Professional</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 p-4 backdrop-blur-xl">
                        <div className="mb-3 text-[10px] uppercase tracking-[0.3em] text-gray-500">Mission Controls</div>
                        <div className="space-y-3 text-sm text-gray-300">
                          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                            Keyboard: Arrow keys, Space, Enter, Escape.
                          </div>
                          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                            Progress is saved automatically, so reopening resumes the last unlocked level.
                          </div>
                          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                            The final stage points back to your contact section so the story ends with a clear CTA.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
          </div>
        </main>

        <footer className="border-t border-white/10 bg-black/25 px-4 py-3 backdrop-blur-md sm:px-6 lg:px-8">
          <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 text-[11px] uppercase tracking-[0.24em] text-gray-400">
            <span>Arcade mode active</span>
            <span>{mode === 'boot' ? 'Press Start to begin' : currentStage.label}</span>
            <button
              onClick={() => {
                if (activeStage === stages.length - 1) {
                  closeArcade();
                  window.setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }, 60);
                } else {
                  goNext();
                }
              }}
              className="rounded-full border border-neon-purple/25 bg-neon-purple/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-neon-purple transition hover:bg-neon-purple/20"
            >
              {activeStage === stages.length - 1 ? 'Return to Contact' : 'Next Stage'}
            </button>
          </div>
        </footer>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            className="pointer-events-none absolute left-1/2 top-20 z-[10000] -translate-x-1/2 rounded-full border border-neon-purple/30 bg-black/80 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.34em] text-neon-purple shadow-[0_0_24px_rgba(168,85,247,0.2)] backdrop-blur-md"
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            style={{ fontFamily: '"Press Start 2P", monospace' }}
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ArcadeVideoTour;