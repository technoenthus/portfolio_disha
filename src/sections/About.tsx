import { motion } from 'framer-motion';
import aboutImage from '../assets/about.png';

const About = () => {
  return (
    <section id="beyond" className="py-32 bg-gradient-to-b from-deep-black to-near-black relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Beyond the <span className="text-lavender">Resume</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-indigo rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Photo */}
            <motion.div
              className="lg:col-span-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative w-full max-w-sm mx-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div 
                  className="aspect-square rounded-2xl overflow-hidden border border-white/10"
                  style={{ 
                    boxShadow: '0 20px 40px rgba(168, 85, 247, 0.1), 0 0 60px rgba(168, 85, 247, 0.05)'
                  }}
                >
                  <img 
                    src={aboutImage} 
                    alt="Disha Malhotra" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-neon-indigo/5 rounded-2xl" />
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="lg:col-span-8 space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {/* Main Story */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">Hey there! 👋</h3>
                
                <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                  <p>
                    I'm Disha, a Computer Science student at IGDTUW who's passionate about building backend systems 
                    that actually work. Last summer, I shipped a scalable metering pipeline at Amazon that handles 
                    billing for thousands of Alexa devices—the kind of system that needs to be bulletproof.
                  </p>
                  
                  <p>
                    What gets me excited isn't just writing code, but solving real problems. Whether it's designing 
                    APIs that won't break under pressure or debugging distributed systems at 2 AM, I think in terms 
                    of reliability and user impact. This summer, I'm joining Microsoft to tackle new challenges.
                  </p>
                  
                  <p>
                    I learn best by building—hackathons, side projects, and internships have taught me more than 
                    any textbook. I love working with teams, figuring out complex problems, and turning ideas 
                    into systems that people actually use.
                  </p>
                </div>
              </div>

              {/* Beyond Code */}
              <div className="pt-8 border-t border-white/10">
                <h4 className="text-xl font-semibold text-white mb-6">Beyond Code</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div 
                    className="flex items-center gap-4 p-4 glass-card rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-2xl">🎬</div>
                    <div>
                      <div className="text-white font-medium">Horror & Paranormal</div>
                      <div className="text-gray-400 text-sm">Pattern recognition in unexpected places</div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-4 p-4 glass-card rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-2xl">🏏</div>
                    <div>
                      <div className="text-white font-medium">Cricket Strategy</div>
                      <div className="text-gray-400 text-sm">Timing, teamwork, and tactical thinking</div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-4 p-4 glass-card rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-2xl">✍️</div>
                    <div>
                      <div className="text-white font-medium">Tech Writing</div>
                      <div className="text-gray-400 text-sm">Simplifying complex concepts for others</div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-4 p-4 glass-card rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-2xl">🔬</div>
                    <div>
                      <div className="text-white font-medium">New Technologies</div>
                      <div className="text-gray-400 text-sm">Always experimenting with the latest tools</div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="pt-8 border-t border-white/10">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-neon-blue mb-1">2025</div>
                    <div className="text-gray-400 text-sm">Amazon SDE Intern</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-microsoft-blue mb-1">2026</div>
                    <div className="text-gray-400 text-sm">Microsoft SWE Intern</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-neon-purple mb-1">9.48</div>
                    <div className="text-gray-400 text-sm">Current CGPA</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;