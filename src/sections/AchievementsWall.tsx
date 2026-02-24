import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const AchievementsWall = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const achievements = [
    {
      id: 1,
      title: "NXP WIT Scholar",
      subtitle: "Top 75 Nationwide",
      description: "Selected for the prestigious NXP Women in Tech (Batch III) program focused on VLSI and semiconductor design.",
      impact: "75/10,000+ applicants",
      category: "Recognition",
      year: "2024",
      icon: "⭐",
      color: "neon-blue"
    },
    {
      id: 2,
      title: "Myntra HackerRamp",
      subtitle: "Pre-Finalist",
      description: "Among the top 0.23% of 30,000+ teams. Led the team as a semi-finalist in India's largest hackathon.",
      impact: "Top 0.23% of 30K teams",
      category: "Competition",
      year: "2024",
      icon: "👑",
      color: "neon-purple"
    },
    {
      id: 3,
      title: "Young Barons Pitch",
      subtitle: "1st Runner-Up",
      description: "Recognized as 1st Runner-Up in Young Barons Pitch @Greenbucks-Enactus, competing among 1,200+ innovative student teams.",
      impact: "1st Runner-Up/1,200+ teams",
      category: "Entrepreneurship",
      year: "2024",
      icon: "💡",
      color: "alexa-blue"
    },
    {
      id: 4,
      title: "IPSR 2025 Paper",
      subtitle: "International Publication",
      description: "Paper on 'Detecting Depression and Suicidal Ideation Through Social Media' selected for IPSR2025 conference in the UK.",
      impact: "International Conference",
      category: "Research",
      year: "2025",
      icon: "📚",
      color: "microsoft-blue"
    }
  ];

  const connections = [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 0, to: 3 }
  ];

  return (
    <section 
      ref={ref}
      className="py-32 bg-gradient-to-b from-deep-black to-near-black relative overflow-hidden"
    >
      {/* Constellation background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          {[...Array(50)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 1000}
              cy={Math.random() * 1000}
              r={Math.random() * 2 + 0.5}
              fill="#00d4ff"
              opacity={Math.random() * 0.5 + 0.2}
            />
          ))}
        </svg>
      </div>

      <div className="section-container relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6 px-6 py-3 glass-card rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-3 h-3 bg-neon-blue rounded-full animate-pulse" />
            <span className="text-neon-blue font-mono text-sm tracking-wider">IMPACT WALL</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Proven</span>
            <span className="text-lavender"> Excellence</span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Recognition and achievements that demonstrate consistent performance at the highest levels.
          </p>
        </motion.div>

        {/* Constellation Layout */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            {connections.map((connection, index) => {
              const positions = [
                { x: '20%', y: '25%' },  // NXP
                { x: '80%', y: '20%' },  // Myntra
                { x: '25%', y: '75%' },  // Young Barons
                { x: '75%', y: '80%' }   // IPSR
              ];
              
              return (
                <motion.line
                  key={index}
                  x1={positions[connection.from].x}
                  y1={positions[connection.from].y}
                  x2={positions[connection.to].x}
                  y2={positions[connection.to].y}
                  stroke="rgba(0, 212, 255, 0.2)"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ delay: 1 + index * 0.2, duration: 1 }}
                />
              );
            })}
          </svg>

          {/* Achievement Cards */}
          <div className="relative" style={{ zIndex: 2 }}>
            {achievements.map((achievement, index) => {
              const positions = [
                'top-0 left-0',      // NXP
                'top-0 right-0',     // Myntra  
                'bottom-0 left-0',   // Young Barons
                'bottom-0 right-0'   // IPSR
              ];

              return (
                <motion.div
                  key={achievement.id}
                  className={`absolute ${positions[index]} w-80 max-w-sm`}
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="glass-card p-6 rounded-2xl group cursor-pointer relative overflow-hidden">
                    {/* Glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-${achievement.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />
                    
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{achievement.icon}</div>
                      <div className="text-right">
                        <span className={`text-xs px-2 py-1 bg-${achievement.color}/20 text-${achievement.color} rounded-full`}>
                          {achievement.category}
                        </span>
                        <p className="text-text-muted text-xs mt-1">{achievement.year}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className={`text-xl font-bold text-white mb-2 group-hover:text-${achievement.color} transition-colors`}>
                      {achievement.title}
                    </h3>
                    
                    <p className={`text-${achievement.color} font-semibold text-sm mb-3`}>
                      {achievement.subtitle}
                    </p>
                    
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {achievement.description}
                    </p>

                    {/* Impact Metric */}
                    <div className="border-t border-white/10 pt-4">
                      <span className="text-xs text-text-muted uppercase tracking-wider">Impact</span>
                      <p className={`text-${achievement.color} font-bold`}>{achievement.impact}</p>
                    </div>

                    {/* Floating particles */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-neon-blue/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-4 left-4 w-1 h-1 bg-neon-purple/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity delay-100" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Central Hub */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="w-32 h-32 glass-card rounded-full flex items-center justify-center relative">
              <div className="text-center">
                <div className="text-2xl mb-2">🎯</div>
                <p className="text-xs text-neon-blue font-semibold">EXCELLENCE</p>
                <p className="text-xs text-text-muted">DRIVEN</p>
              </div>
              
              {/* Rotating ring */}
              <motion.div
                className="absolute inset-0 border-2 border-neon-blue/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Stats Summary */}
        <motion.div
          className="mt-32 grid md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          {[
            { number: "4", label: "Major Achievements", color: "neon-blue" },
            { number: "30K+", label: "Competitors Outperformed", color: "neon-purple" },
            { number: "Top 1%", label: "Consistent Ranking", color: "alexa-blue" },
            { number: "2024-25", label: "Recognition Period", color: "microsoft-blue" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-card p-6 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.7 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className={`text-3xl font-bold text-${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-text-secondary text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsWall;
