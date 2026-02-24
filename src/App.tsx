import { useState, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useSplashScreen } from './hooks/useSplashScreen';

// Components
import SplashScreen from './components/SplashScreen';
import Header from './components/Header';

// Lazy-load the heavy 3D VideoTour so it never blocks the main site
const VideoTour = lazy(() => import('./components/VideoTour/VideoTour'));

// Sections
import Hero from './sections/Hero';
import BeyondTheResume from './sections/BeyondTheResume';
import ProfessionalJourney from './sections/ProfessionalJourney';
import ThingsIveBuilt from './sections/ThingsIveBuilt';
import LeadershipRoles from './sections/LeadershipRoles';
import HonorsRecognition from './sections/HonorsRecognition';
import SkillsSection from './sections/SkillsSection';
import ContactSection from './sections/ContactSection';

function App() {
  const showSplash = useSplashScreen(2500);
  const [showVideoTour, setShowVideoTour] = useState(false);

  return (
    <div className="min-h-screen bg-deep-black text-white overflow-x-hidden">
      {/* ── 3D Video Tour overlay (lazy-loaded, isolated) ── */}
      {showVideoTour && (
        <Suspense fallback={null}>
          <AnimatePresence>
            <VideoTour key="video-tour" onClose={() => setShowVideoTour(false)} />
          </AnimatePresence>
        </Suspense>
      )}

      <AnimatePresence mode="wait">
        {showSplash ? (
          <SplashScreen key="splash" />
        ) : (
          <div key="main">
            <Header />
            <main className="pt-20">
              <Hero onOpenVideoTour={() => setShowVideoTour(true)} />
              <BeyondTheResume />
              <ProfessionalJourney />
              <ThingsIveBuilt />
              <LeadershipRoles />
              <HonorsRecognition />
              <SkillsSection />
              <ContactSection />
            </main>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;