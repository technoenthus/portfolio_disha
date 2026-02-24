import { motion } from 'framer-motion';

const ExperienceSection = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-deep-black to-near-black">
      <div className="section-container">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Professional</span>
            <br />
            <span className="bg-gradient-to-r from-microsoft-blue to-alexa-blue bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Building the future at world-class technology companies
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Microsoft Experience */}
          <motion.div
            className="glass-card p-8 rounded-2xl relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ boxShadow: '0 0 40px rgba(0, 120, 212, 0.1)' }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-microsoft-blue/20 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 grid grid-cols-2 gap-0.5">
                      <div className="bg-microsoft-blue rounded-sm" />
                      <div className="bg-microsoft-blue/60 rounded-sm" />
                      <div className="bg-microsoft-blue/60 rounded-sm" />
                      <div className="bg-microsoft-blue rounded-sm" />
                    </div>
                  </div>
                  <div>
                    <div className="text-microsoft-blue font-mono text-sm tracking-wider">UPCOMING</div>
                    <div className="text-gray-400 text-sm">Summer 2026</div>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Software Engineering Intern</h3>
                <h4 className="text-xl text-microsoft-blue font-semibold mb-6">Microsoft</h4>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Upcoming SWE Intern at Microsoft, selected to contribute to cutting-edge projects and collaborate with industry experts.
                </p>
              </div>
              <motion.div
                className="flex items-center justify-center"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img 
                  src="/src/assets/ms.gif" 
                  alt="Microsoft Animation" 
                  className="w-full h-auto max-w-xs object-contain rounded-lg"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Amazon Experience */}
          <motion.div
            className="glass-card p-8 rounded-2xl relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ boxShadow: '0 0 40px rgba(0, 202, 255, 0.1)' }}
            id="experience"
          >
            {/* Alexa Ambient Motion */}
            <div className="absolute inset-0 pointer-events-none">
              {[1, 2, 3].map((ring) => (
                <motion.div
                  key={ring}
                  className="absolute top-1/2 left-1/4 w-32 h-32 border border-alexa-blue/10 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 4,
                    delay: ring * 0.8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    transform: `translate(-50%, -50%) scale(${1 + ring * 0.3})`,
                  }}
                />
              ))}
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <motion.div
                className="flex items-center justify-center order-2 lg:order-1"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img 
                  src="/src/assets/amazon.gif" 
                  alt="Amazon Animation" 
                  className="w-full h-auto max-w-xs object-contain rounded-lg"
                />
              </motion.div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    className="w-12 h-12 bg-alexa-blue/20 rounded-full flex items-center justify-center relative"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="w-6 h-6 bg-alexa-blue rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute inset-0 border-2 border-alexa-blue/30 rounded-full"
                      animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                  <div>
                    <motion.div 
                      className="text-alexa-blue font-mono text-sm tracking-wider"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      COMPLETED
                    </motion.div>
                    <div className="text-gray-400 text-sm">Summer 2025</div>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Software Development Engineer Intern</h3>
                <h4 className="text-xl text-alexa-blue font-semibold mb-2">Amazon</h4>
                <h5 className="text-lg text-gray-300 mb-6">Alexa Smart Properties Team</h5>
                
                {/* Impact Bullets */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-alexa-blue rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Built scalable push-based metering pipeline for Alexa Smart Properties
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-alexa-blue rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Shipped production feature improving billing reliability for ABS
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-alexa-blue rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Deep-dived into AWS services: Lambda, DynamoDB, S3, CDK
                    </p>
                  </div>
                </div>
                
                {/* Tech Tags with Hierarchy */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {['AWS Lambda', 'DynamoDB', 'S3'].map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1.5 bg-alexa-blue/20 text-alexa-blue border border-alexa-blue/30 rounded-md text-xs font-semibold"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['CDK', 'Backend Engineering', 'Production Code'].map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1.5 bg-alexa-blue/10 text-alexa-blue/80 border border-alexa-blue/20 rounded-md text-xs font-medium"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1 + index * 0.1, duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;