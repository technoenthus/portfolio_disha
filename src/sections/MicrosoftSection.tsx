import { motion } from 'framer-motion';

const MicrosoftSection = () => {
  const features = [
    { title: 'Scalable Architecture', icon: '🏗️', description: 'Building systems that handle millions of users' },
    { title: 'Cloud Integration', icon: '☁️', description: 'Azure-native solutions with global reach' },
    { title: 'AI-Powered Features', icon: '🤖', description: 'Copilot integration and intelligent automation' },
    { title: 'Developer Experience', icon: '⚡', description: 'Tools that empower engineering teams' },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-deep-black via-dark-gray to-near-black">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div className="inline-flex items-center gap-3 mb-6 px-6 py-3 glass-card rounded-lg">
            <div className="w-3 h-3 bg-microsoft-blue rounded-sm" />
            <span className="text-microsoft-blue font-mono text-sm tracking-wider">MICROSOFT SWE INTERN</span>
            <span className="text-neon-blue text-xs px-2 py-1 bg-neon-blue/10 rounded">SUMMER 2026</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Engineering</span>
            <br />
            <span className="bg-gradient-to-r from-microsoft-blue to-neon-blue bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="glass-card p-8 rounded-xl group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-microsoft-blue transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="glass-card p-8 rounded-2xl max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Summer 2026 Internship</h3>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Selected for Microsoft's Software Engineering Internship program. 
lesssgoooo productivity solutions that empower billions of users worldwide.          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Azure', 'TypeScript', 'React', 'C#', '.NET', 'AI/Copilot'].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-microsoft-blue/10 text-microsoft-blue rounded-lg text-sm font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MicrosoftSection;