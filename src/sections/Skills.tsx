import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      skills: [
        { name: "AI / ML", level: 90 },
        { name: "Java", level: 85 },
        { name: "AWS", level: 80 },
        { name: "Flutter", level: 95 }
      ]
    },
    {
      title: "Professional Skills",
      skills: [
        { name: "Public Speaking", level: 95 },
        { name: "Team Work", level: 90 },
        { name: "Problem Solving", level: 85 },
        { name: "Time Management", level: 80 }
      ]
    }
  ];

  const achievements = [
    {
      title: "NXP WIT Scholar",
      description: "Selected in the top 75 nationwide for the prestigious NXP Women in Tech (Batch III) program focused on VLSI and semiconductor design.",
      icon: "⭐"
    },
    {
      title: "Myntra HackerRamp",
      description: "Pre-Finalist in Myntra HackerRamp 2024, among the top 0.23% of 30,000+ teams. Led the team as a semi-finalist.",
      icon: "👑"
    },
    {
      title: "Young Barons Pitch",
      description: "Recognized as 1st Runner-Up in Young Barons Pitch @Greenbucks-Enactus, competing among 1,200+ innovative student teams.",
      icon: "💡"
    },
    {
      title: "IPSR 2025 Paper",
      description: "Paper titled 'Detecting Depression and Suicidal Ideation Through Social Media: A Comparative Study' selected for publication in the proceedings of IPSR2025, an international conference held in the UK.",
      icon: "📚"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-midnight/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">My</span>
            <br />
            <span className="text-lavender">Skills</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Technical expertise and professional capabilities that drive innovation
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="system-card p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-text-primary mb-8 text-center border-b border-lavender/20 pb-4">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1, 
                      duration: 0.4 
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-text-primary font-medium">{skill.name}</span>
                      <span className="text-lavender font-semibold">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-midnight border border-lavender/10 h-2 rounded-sm overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-lavender to-lavender/60 rounded-sm"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                          duration: 1,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-semibold text-text-primary mb-8">
            My <span className="text-lavender">Achievements</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="system-card p-6 text-center group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, rotateY: 5 }}
            >
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h4 className="text-lg font-semibold text-text-primary mb-3 group-hover:text-lavender transition-colors duration-200">
                {achievement.title}
              </h4>
              <p className="text-text-muted text-sm leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;