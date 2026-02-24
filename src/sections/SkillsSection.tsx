import { motion } from 'framer-motion';

const SkillsSection = () => {
  const codingSkills = [
    { name: "AI / ML", level: 90 },
    { name: "Java", level: 85 },
    { name: "AWS", level: 80 },
    { name: "Flutter", level: 95 }
  ];

  const professionalSkills = [
    { name: "Public Speaking", level: 95 },
    { name: "Team Work", level: 90 },
    { name: "Problem Solving", level: 85 },
    { name: "Time Management", level: 80 }
  ];

  return (
    <section id="skills" className="py-32 bg-gradient-to-b from-near-black to-deep-black">
      <div className="section-container">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 whitespace-nowrap">
            <span className="bg-gradient-to-r from-neon-purple to-neon-indigo bg-clip-text text-transparent">
              My Skills
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Coding Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Coding Skills</h3>
            <div className="space-y-8">
              {codingSkills.map((skill) => (
                <motion.div 
                  key={skill.name}
                  className="group cursor-pointer"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-lg text-gray-300 font-medium group-hover:text-white transition-colors duration-200">{skill.name}</span>
                    <span className="text-neon-purple font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-lg h-3 overflow-hidden">
                    <motion.div 
                      className="bg-gradient-to-r from-neon-purple to-neon-indigo h-3 rounded-lg"
                      style={{ width: `${skill.level}%` }}
                      whileHover={{ 
                        boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)",
                        filter: "brightness(1.1)"
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Professional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Professional Skills</h3>
            <div className="space-y-8">
              {professionalSkills.map((skill) => (
                <motion.div 
                  key={skill.name}
                  className="group cursor-pointer"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-lg text-gray-300 font-medium group-hover:text-white transition-colors duration-200">{skill.name}</span>
                    <span className="text-neon-purple font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-lg h-3 overflow-hidden">
                    <motion.div 
                      className="bg-gradient-to-r from-neon-purple to-neon-indigo h-3 rounded-lg"
                      style={{ width: `${skill.level}%` }}
                      whileHover={{ 
                        boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)",
                        filter: "brightness(1.1)"
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;