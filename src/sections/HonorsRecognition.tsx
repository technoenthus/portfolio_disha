import { motion } from 'framer-motion';

const HonorsRecognition = () => {
  const achievements = [
    {
      title: "NXP Women in Tech Scholar",
      organization: "NXP Semiconductors",
      year: "2024",
      description: "Selected among top 75 nationwide for prestigious VLSI and semiconductor design program",
      category: "Scholarship",
      icon: "🏆",
      linkedin: "https://www.linkedin.com/posts/disha-malhotra-b72162285_im-honored-to-share-that-ive-been-selected-activity-7262441575136321539-73yu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEVBlgYBxzgH22PcivH2Mp9UN4MG7VNle5M"
    },
    {
      title: "Pre-Finalist",
      organization: "Myntra HackerRamp 2024",
      year: "2024",
      description: "Top 0.23% among 30,000+ participating teams in India's largest fashion-tech hackathon",
      category: "Competition",
      icon: "🥈",
      linkedin: "https://www.linkedin.com/posts/disha-malhotra-b72162285_the-only-limit-to-our-realisation-of-tomorrow-activity-7229569573564432384-wjQf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEVBlgYBxzgH22PcivH2Mp9UN4MG7VNle5M"
    },
    {
      title: "1st Runner-Up",
      organization: "Young Barons Pitch @Greenbucks-Enactus",
      year: "2024",
      description: "Second place among 1,200+ innovative student teams in startup pitch competition",
      category: "Competition",
      icon: "🥈",
      linkedin: "https://www.linkedin.com/posts/disha-malhotra-b72162285_ybep2024-ybep2024-greenbucks-activity-7200443313357824000-DYEL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEVBlgYBxzgH22PcivH2Mp9UN4MG7VNle5M"
    },
    {
      title: "Research Publication",
      organization: "IPSR 2025 Conference, UK",
      year: "2025",
      description: "Paper on 'Detecting Depression and Suicidal Ideation Through Social Media: A Comparative Study' accepted for international conference",
      category: "Research",
      icon: "📄",
      linkedin: "https://www.linkedin.com/posts/vaibhaavtiwari_certificate-ugcPost-7316955320126164992-BYXl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEVBlgYBxzgH22PcivH2Mp9UN4MG7VNle5M"
    },
    {
      title: "Perfect Academic Performance",
      organization: "IGDTUW",
      year: "2024",
      description: "10.00 SGPA in 4th Semester, maintaining 9.48 CGPA overall",
      category: "Academic",
      icon: "🎓",
      linkedin: "https://www.linkedin.com/posts/disha-malhotra-b72162285_%F0%9D%90%86%F0%9D%90%9E%F0%9D%90%AD%F0%9D%90%AD%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%A0-%F0%9D%90%9A-10-%F0%9D%90%92%F0%9D%90%86%F0%9D%90%8F%F0%9D%90%80-%F0%9D%90%AD%F0%9D%90%A1%F0%9D%90%A2%F0%9D%90%AC-%F0%9D%90%AC-activity-7342782209579241472-oxlP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEVBlgYBxzgH22PcivH2Mp9UN4MG7VNle5M"
    },
    {
      title: "Student of the Year 2022",
      organization: "St. Margaret Sr. Sec. School",
      year: "2022",
      description: "Awarded Student of the Year award in 2022. Actively participated in inter-school events and blah ablah",
      category: "Academic",
      icon: "📚",
      linkedin: ""
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
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Honors &</span>
            <br />
            <span className="bg-gradient-to-r from-neon-purple to-neon-indigo bg-clip-text text-transparent">Recognition</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.a
              key={achievement.title}
              href={achievement.linkedin || undefined}
              target={achievement.linkedin ? "_blank" : undefined}
              rel={achievement.linkedin ? "noopener noreferrer" : undefined}
              className="glass-card p-6 rounded-2xl relative group block no-underline cursor-pointer"
              style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, boxShadow: '0 20px 60px rgba(168, 85, 247, 0.3), 0 0 30px rgba(0, 209, 255, 0.15)' }}
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
            </motion.a>
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