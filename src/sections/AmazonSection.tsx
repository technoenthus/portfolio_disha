import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const AmazonSection = () => {
  const [soundWaves, setSoundWaves] = useState<number[]>([]);

  useEffect(() => {
    const waves = Array.from({ length: 20 }, () => Math.random() * 100 + 20);
    setSoundWaves(waves);
  }, []);

  return (
    <section className="py-32 bg-gradient-to-b from-near-black to-deep-black relative overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div className="inline-flex items-center gap-3 mb-6 px-6 py-3 glass-card rounded-full">
            <div className="w-3 h-3 bg-alexa-blue rounded-full animate-pulse" />
            <span className="text-alexa-blue font-mono text-sm tracking-wider">AMAZON ALEXA TEAM</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Voice-Powered</span>
            <br />
            <span className="bg-gradient-to-r from-alexa-blue to-neon-blue bg-clip-text text-transparent">
              Intelligence
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="glass-card p-8 rounded-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-alexa-blue">Smart Properties Impact</h3>
            
            <div className="flex items-end justify-center gap-1 h-32 mb-8">
              {soundWaves.map((height, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-t from-alexa-blue to-neon-blue rounded-full"
                  style={{ width: '8px' }}
                  initial={{ height: 0 }}
                  animate={{
                    height: `${height}px`,
                    scaleY: [1, 1.2, 1],
                  }}
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
                <span className="text-gray-400">Voice Recognition Accuracy</span>
                <span className="text-alexa-blue font-semibold">99.2%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Response Time</span>
                <span className="text-alexa-blue font-semibold">&lt;200ms</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Daily Interactions</span>
                <span className="text-alexa-blue font-semibold">10M+</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div className="glass-card p-6 rounded-xl" whileHover={{ scale: 1.02 }}>
              <h4 className="text-xl font-semibold text-white mb-2">Voice Interface Engineering</h4>
              <p className="text-gray-400 leading-relaxed">
                Developed scalable voice processing pipelines handling millions of daily interactions 
                with sub-200ms response times.
              </p>
            </motion.div>

            <motion.div className="glass-card p-6 rounded-xl" whileHover={{ scale: 1.02 }}>
              <h4 className="text-xl font-semibold text-white mb-2">Smart Properties Platform</h4>
              <p className="text-gray-400 leading-relaxed">
                Built intelligent automation systems for hospitality and enterprise environments.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AmazonSection;