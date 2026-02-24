import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useEffect, useState } from 'react';

const AmazonExperience = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [soundWaves, setSoundWaves] = useState<number[]>([]);

  useEffect(() => {
    if (inView) {
      // Generate random sound wave heights
      const waves = Array.from({ length: 20 }, () => Math.random() * 100 + 20);
      setSoundWaves(waves);
    }
  }, [inView]);

  const pulseRings = [1, 2, 3, 4];

  return (
    <section 
      ref={ref}
      className="py-32 bg-gradient-to-b from-near-black to-deep-black relative overflow-hidden"
    >
      {/* Alexa-inspired ambient background */}
      <div className="absolute inset-0">
        {pulseRings.map((ring) => (
          <motion.div
            key={ring}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-alexa-blue/20"
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? {
              scale: [0, 2, 4],
              opacity: [0, 0.3, 0],
            } : {}}
            transition={{
              duration: 4,
              delay: ring * 0.5,
              repeat: Infinity,
              ease: "easeOut"
            }}
            style={{
              width: `${200 + ring * 100}px`,
              height: `${200 + ring * 100}px`,
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6 px-6 py-3 glass-card rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-3 h-3 bg-alexa-blue rounded-full animate-pulse" />
            <span className="text-alexa-blue font-mono text-sm tracking-wider">AMAZON ALEXA TEAM</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Voice-Powered</span>
            <span className="text-lavender"> Intelligence</span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Building ambient computing experiences that understand, respond, and adapt to millions of users worldwide.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Sound Wave Visualization */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-alexa-blue">Smart Properties Impact</h3>
              
              {/* Sound Wave Animation */}
              <div className="flex items-end justify-center gap-1 h-32 mb-8">
                {soundWaves.map((height, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-t from-alexa-blue to-neon-blue rounded-full"
                    style={{ width: '8px' }}
                    initial={{ height: 0 }}
                    animate={inView ? {
                      height: `${height}px`,
                      scaleY: [1, 1.2, 1],
                    } : {}}
                    transition={{
                      height: { delay: index * 0.05, duration: 0.6 },
                      scaleY: {
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.1,
                      }
                    }}
                  />
                ))}
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Voice Recognition Accuracy</span>
                  <span className="text-alexa-blue font-semibold">99.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Response Time</span>
                  <span className="text-alexa-blue font-semibold">&lt;200ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Daily Interactions</span>
                  <span className="text-alexa-blue font-semibold">10M+</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Experience Details */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.div
              className="glass-card p-6 rounded-xl"
              whileHover={{ scale: 1.02, borderColor: "rgba(0, 202, 255, 0.3)" }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-alexa-blue/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-alexa-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                    <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Voice Interface Engineering</h4>
                  <p className="text-text-secondary leading-relaxed">
                    Developed scalable voice processing pipelines handling millions of daily interactions 
                    with sub-200ms response times.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="glass-card p-6 rounded-xl"
              whileHover={{ scale: 1.02, borderColor: "rgba(0, 202, 255, 0.3)" }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-alexa-blue/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-alexa-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Smart Properties Platform</h4>
                  <p className="text-text-secondary leading-relaxed">
                    Built intelligent automation systems for hospitality and enterprise environments, 
                    enhancing user experience through ambient computing.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="glass-card p-6 rounded-xl"
              whileHover={{ scale: 1.02, borderColor: "rgba(0, 202, 255, 0.3)" }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-alexa-blue/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-alexa-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 11H7v9h2v-9zm4 0h-2v9h2v-9zm4 0h-2v9h2v-9zm2.5-9H18V0h-2v2H8V0H6v2H3.5C2.67 2 2 2.67 2 3.5v1C2 5.33 2.67 6 3.5 6H4v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6h.5c.83 0 1.5-.67 1.5-1.5v-1C22 2.67 21.33 2 20.5 2z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Performance Optimization</h4>
                  <p className="text-text-secondary leading-relaxed">
                    Optimized system architecture reducing latency by 40% and improving 
                    voice recognition accuracy to industry-leading 99.2%.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-white mb-8">Technologies Used</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['AWS Lambda', 'DynamoDB', 'Alexa Skills Kit', 'Node.js', 'Python', 'Machine Learning'].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 glass-card rounded-full text-sm text-alexa-blue"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 202, 255, 0.1)" }}
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

export default AmazonExperience;
