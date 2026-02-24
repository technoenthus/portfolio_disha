import { motion } from 'framer-motion';
import aboutImage from '../assets/about.png';

const BeyondTheResume = () => {
  const hobbies = [
    'Drama', 'Traveling', 'Coding', 'Music', 'Running', 'Netowrking'
  ];

  return (
    <section id="beyond-resume" className="py-32 bg-gradient-to-b from-deep-black to-near-black">
      <div className="section-container">
        {/* Centered Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Beyond The</span>
            <br />
            <span className="bg-gradient-to-r from-neon-purple to-neon-indigo bg-clip-text text-transparent">
              Resume
            </span>
          </h2>
        </motion.div>

        {/* Centered Circular Image */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-neon-purple/30">
            <img 
              src={aboutImage} 
              alt="Disha Malhotra" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - About Me */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">About Me</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm a pre-final year B.Tech student in Computer Science (AI) at IGDTUW, passionate about 
                building innovative solutions that make a real impact. My journey in tech has been driven 
                by curiosity and a desire to solve meaningful problems.
              </p>
              <p>
  I’m always in for tech experiments or real-time adventures that push me to think, build, and adapt. Whether it’s shipping features or solving messy problems, I enjoy the rush of figuring things out and making them work.
</p>

              <p>
  When I’m not coding, I’m probably deep diving into history rabbit holes, reading about defence systems and geopolitics (my absolute favorite), or unapologetically sleeping for hours to recharge my brain. 
</p>
            </div>
          </motion.div>

          {/* Right Column - Hobbies & Interests */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Hobbies & Interests</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-neon-purple mb-3">What I Love Doing</h4>
                <div className="flex flex-wrap gap-2">
                  {hobbies.map((hobby, index) => (
                    <span 
                      key={hobby}
                      className="px-3 py-1.5 bg-white/5 border border-neon-purple/20 rounded-lg text-sm text-gray-300 hover:border-neon-purple/40 transition-colors duration-200"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-neon-purple mb-3">Current Focus</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-neon-purple rounded-full mr-3" />
                    Exploring computer vision and its applications in healthcare
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-neon-purple rounded-full mr-3" />
                    Researching about Defence and Cybersecurity
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-neon-purple rounded-full mr-3" />
                    Mentoring junior developers
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-neon-purple rounded-full mr-3" />
                    Building mobile apps for fun
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BeyondTheResume;