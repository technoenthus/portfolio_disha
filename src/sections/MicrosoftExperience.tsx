import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const MicrosoftExperience = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const gridItems = [
    { title: 'Scalable Architecture', icon: '🏗️', description: 'Building systems that handle millions of users' },
    { title: 'Cloud Integration', icon: '☁️', description: 'Azure-native solutions with global reach' },
    { title: 'AI-Powered Features', icon: '🤖', description: 'Copilot integration and intelligent automation' },
    { title: 'Developer Experience', icon: '⚡', description: 'Tools that empower engineering teams' },
  ];

  return (
    <section 
      ref={ref}
      className="py-32 bg-gradient-to-b from-deep-black via-dark-gray to-near-black relative overflow-hidden"
    >
      {/* Microsoft-inspired geometric background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-microsoft-blue rotate-45" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-microsoft-blue rotate-12" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-microsoft-blue/50" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6 px-6 py-3 glass-card rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-3 h-3 bg-microsoft-blue rounded-sm" />
            <span className="text-microsoft-blue font-mono text-sm tracking-wider">MICROSOFT SWE INTERN</span>
            <span className="text-neon-blue text-xs px-2 py-1 bg-neon-blue/10 rounded">SUMMER 2026</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Engineering</span>
            <span className="text-lavender"> Excellence</span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Joining Microsoft's engineering team to build productivity tools that empower billions of users worldwide.
          </p>
        </motion.div>

        {/* Grid Layout - Microsoft Fluent Design inspired */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {gridItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="glass-card p-8 rounded-xl group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ 
                scale: 1.02, 
                borderColor: "rgba(0, 120, 212, 0.4)",
                boxShadow: "0 8px 32px rgba(0, 120, 212, 0.1)"
              }}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-microsoft-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sliding Panels Effect */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.div
            className="glass-card p-6 rounded-xl"
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            whileHover={{ x: 10 }}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-microsoft-blue/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-microsoft-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Innovation Focus</h4>
              <p className="text-text-secondary text-sm">
                Contributing to next-generation productivity solutions
              </p>
            </div>
          </motion.div>

          <motion.div
            className="glass-card p-6 rounded-xl"
            initial={{ y: 100, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
            whileHover={{ y: -10 }}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-microsoft-blue/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-microsoft-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Global Impact</h4>
              <p className="text-text-secondary text-sm">
                Building for billions of users across the globe
              </p>
            </div>
          </motion.div>

          <motion.div
            className="glass-card p-6 rounded-xl"
            initial={{ x: 100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            whileHover={{ x: -10 }}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-microsoft-blue/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-microsoft-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Technical Excellence</h4>
              <p className="text-text-secondary text-sm">
                Leveraging cutting-edge technologies and best practices
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Upcoming Internship Highlight */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 bg-microsoft-blue/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-microsoft-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Summer 2026 Internship</h3>
            </div>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              Selected for Microsoft's competitive Software Engineering Internship program. 
              Ready to contribute to world-class engineering teams and build solutions that 
              empower every person and organization on the planet to achieve more.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Azure', 'TypeScript', 'React', 'C#', '.NET', 'AI/Copilot'].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-microsoft-blue/10 text-microsoft-blue rounded-lg text-sm font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 120, 212, 0.2)" }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MicrosoftExperience;
