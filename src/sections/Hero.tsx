import { motion } from 'framer-motion';
import aboutImage from '../assets/about.png';

interface HeroProps {
  onOpenVideoTour: () => void;
}

const Hero = ({ onOpenVideoTour }: HeroProps) => {
  return (
    <section id="introduction" className="flex items-center relative overflow-hidden bg-gradient-to-br from-deep-black via-midnight to-near-black" style={{ height: '100vh' }}>
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            className="lg:col-span-7 max-w-3xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Name - Two Lines */}
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="text-2xl text-gray-400 font-light mb-2">I am</div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-neon-purple via-neon-indigo to-soft-purple bg-clip-text text-transparent">
                  Disha Malhotra
                </span>
              </h1>
            </motion.div>
            
            {/* Subtitle */}
            <motion.p 
              className="text-4xl md:text-5xl text-neon-purple font-medium mb-10 tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Engineering Student
            </motion.p>

            {/* Description */}
            <motion.p 
              className="text-lg text-gray-300 mb-10 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              I'm a pre-final year B.Tech student in Computer Science (AI) at IGDTUW, living somewhere between code and caffeine. 
              I'm someone who learns best by doing, be it through hackathons, internships, or building side projects. 
              I enjoy working in teams, figuring things out, and turning ideas into something useful.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-indigo text-white font-semibold rounded-lg text-center"
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 0 30px rgba(168, 85, 247, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Get In Touch
              </motion.a>
              
              <motion.button
                onClick={onOpenVideoTour}
                className="px-8 py-4 border border-neon-purple/30 text-white font-semibold rounded-lg backdrop-blur-sm hover:border-neon-purple/50 hover:bg-neon-purple/10 transition-all duration-200 text-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                🎬 Video Tour
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Image - Edge Aligned */}
          <motion.div
            className="lg:col-span-5 flex justify-center items-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <img
              src={aboutImage}
              alt="Disha Malhotra"
              className="w-auto object-contain object-bottom"
              style={{ height: '88vh' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;