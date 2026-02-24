import { motion } from 'framer-motion';

const AchievementsSection = () => {
  const achievements = [
    {
      title: "NXP WIT Scholar",
      subtitle: "Top 75 Nationwide",
      description: "Selected for the prestigious NXP Women in Tech (Batch III) program focused on VLSI and semiconductor design.",
      impact: "75/10,000+ applicants",
      year: "2024",
      icon: "⭐"
    },
    {
      title: "Myntra HackerRamp",
      subtitle: "Pre-Finalist",
      description: "Among the top 0.23% of 30,000+ teams. Led the team as a semi-finalist in India's largest hackathon.",
      impact: "Top 0.23% of 30K teams",
      year: "2024",
      icon: "👑"
    },
    {
      title: "Young Barons Pitch",
      subtitle: "1st Runner-Up",
      description: "Recognized as 1st Runner-Up in Young Barons Pitch @Greenbucks-Enactus, competing among 1,200+ teams.",
      impact: "1st Runner-Up/1,200+ teams",
      year: "2024",
      icon: "💡"
    },
    {
      title: "IPSR 2025 Paper",
      subtitle: "International Publication",
      description: "Paper on 'Detecting Depression and Suicidal Ideation Through Social Media' selected for IPSR2025 conference in the UK.",
      impact: "International Conference",
      year: "2025",
      icon: "📚"
    }
  ];

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
            <span className="text-white">Proven</span>
            <br />
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Recognition and achievements that demonstrate consistent performance at the highest levels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="glass-card p-6 text-center group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-neon-blue transition-colors">
                {achievement.title}
              </h4>
              <p className="text-neon-blue font-semibold text-sm mb-3">
                {achievement.subtitle}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {achievement.description}
              </p>
              <div className="border-t border-white/10 pt-4">
                <span className="text-xs text-gray-500 uppercase tracking-wider">Impact</span>
                <p className="text-neon-blue font-bold">{achievement.impact}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 grid md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { number: "4", label: "Major Achievements" },
            { number: "30K+", label: "Competitors Outperformed" },
            { number: "Top 1%", label: "Consistent Ranking" },
            { number: "2024-25", label: "Recognition Period" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-card p-6 rounded-xl"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl font-bold text-neon-blue mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;