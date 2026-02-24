import { motion } from 'framer-motion';

const HonorsRecognition = () => {
  const achievements = [
    {
      title: "NXP Women in Tech Scholar",
      organization: "NXP Semiconductors",
      year: "2024",
      description: "Selected among top 75 nationwide for prestigious VLSI and semiconductor design program",
      category: "Scholarship",
      icon: "🏆"
    },
    {
      title: "Pre-Finalist",
      organization: "Myntra HackerRamp 2024",
      year: "2024", 
      description: "Top 0.23% among 30,000+ participating teams in India's largest fashion-tech hackathon",
      category: "Competition",
      icon: "🥈"
    },
    {
      title: "1st Runner-Up",
      organization: "Young Barons Pitch @Greenbucks-Enactus",
      year: "2024",
      description: "Second place among 1,200+ innovative student teams in startup pitch competition",
      category: "Competition", 
      icon: "🥈"
    },
    {
      title: "Research Publication",
      organization: "IPSR 2025 Conference, UK",
      year: "2025",
      description: "Paper on 'Detecting Depression and Suicidal Ideation Through Social Media: A Comparative Study' accepted for international conference",
      category: "Research",
      icon: "📄"
    },
    {
      title: "Perfect Academic Performance",
      organization: "IGDTUW",
      year: "2024",
      description: "10.00 SGPA in 4th Semester, maintaining 9.48 CGPA overall",
      category: "Academic",
      icon: "🎓"
    },
    {
      title: "Student of the Year 2022",
      organization: "St. Margaret Sr. Sec. School",
      year: "2022",
      description: "Awarded Student of the Year award in 2022. Actively participated in inter-school events and blah ablah",
      category: "Academic",
      icon: "📚"
    }
  ];

  return (
    <section id="recognition" className="py-32 bg-gradient-to-b from-deep-black to-near-black">
      <div className="section-container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6 px-6 py-3 glass-card rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-3 h-3 bg-neon-blue rounded-full animate-pulse" />
            <span className="text-neon-blue font-mono text-sm tracking-wider">HONORS</span>
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Honors &</span>
            <br />
            <span className="text-lavender">Recognition</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Achievements that reflect dedication, excellence, and impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="glass-card p-6 rounded-2xl relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-mono tracking-wider mb-4 ${
                  achievement.category === 'Scholarship' ? 'bg-purple-500/20 text-purple-400' :
                  achievement.category === 'Competition' ? 'bg-yellow-500/20 text-yellow-400' :
                  achievement.category === 'Research' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-green-500/20 text-green-400'
                }`}>
                  {achievement.category}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 text-center">{achievement.title}</h3>
              <h4 className="text-neon-blue font-semibold mb-2 text-center">{achievement.organization}</h4>
              <div className="text-gray-400 text-sm font-mono text-center mb-4">{achievement.year}</div>
              <p className="text-gray-300 text-sm leading-relaxed text-center">{achievement.description}</p>

              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          className="mt-20 grid md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-neon-blue mb-2">75</div>
            <div className="text-gray-400 text-sm">Top nationwide selection</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">0.23%</div>
            <div className="text-gray-400 text-sm">Among 30,000+ teams</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">9.48</div>
            <div className="text-gray-400 text-sm">Current CGPA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">1</div>
            <div className="text-gray-400 text-sm">International publication</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HonorsRecognition;