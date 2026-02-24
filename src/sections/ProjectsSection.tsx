import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Cooig",
      description: "A campus-first social platform where students can share notes, trade items, and connect through real-time chat.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      link: "https://github.com/Nancytechie/Cooig",
      status: "Active",
      impact: "500+ active users"
    },
    {
      title: "Everybite",
      description: "An AI-powered food scanner that instantly shows a food item's NutriScore and EcoScore, suggests healthier swaps.",
      technologies: ["AI/ML", "Computer Vision", "React", "Python"],
      link: "https://github.com/bushra931/EveryBitee",
      status: "Active",
      impact: "95% accuracy rate"
    },
    {
      title: "EchoSight",
      description: "An assistive device using YOLOv5 and Arduino to detect objects for visually impaired users with real-time audio cues.",
      technologies: ["YOLOv5", "Arduino", "Computer Vision", "IoT"],
      status: "Completed",
      impact: "Real-world deployment"
    },
    {
      title: "Synapse",
      description: "A real-time translator converting Indian Sign Language gestures into clear speech and text.",
      technologies: ["Machine Learning", "Computer Vision", "NLP", "React"],
      link: "https://www.figma.com/proto/rqJbEESel5ZmgCVGOv0nNx/Synapse",
      status: "Prototype",
      impact: "Social impact focus"
    },
    {
      title: "Privacy Policy Summarizer",
      description: "A smart GenAI Chrome Extension that cuts through lengthy privacy policies, highlighting key permissions.",
      technologies: ["GenAI", "Chrome Extension", "JavaScript", "NLP"],
      link: "https://www.loom.com/share/8f7bcf55c8da46acb168c9c0db3c0606",
      status: "Completed",
      impact: "Privacy awareness"
    },
    {
      title: "SafeTrack",
      description: "A navigation app prioritizing safety with crime data-based routing, live location sharing, and emergency alerts.",
      technologies: ["React Native", "Maps API", "Real-time Data", "Firebase"],
      link: "https://github.com/technoenthus/SafeTrack",
      status: "Active",
      impact: "Safety-first navigation"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-near-black to-deep-black">
      <div className="section-container">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Built to</span>
            <br />
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Impact
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real-world solutions addressing meaningful problems through innovative technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -20, rotateX: 5, rotateY: 5, scale: 1.02 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="glass-card p-6 rounded-2xl h-full relative overflow-hidden">
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 text-xs rounded-full ${
                    project.status === 'Active' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : project.status === 'Completed'
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      : 'bg-neon-purple/20 text-neon-purple border border-neon-purple/30'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="mb-4">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Impact</span>
                  <p className="text-neon-blue font-semibold">{project.impact}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-white/5 text-gray-400 rounded border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs text-gray-500">+{project.technologies.length - 3}</span>
                  )}
                </div>

                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neon-blue text-sm font-medium flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    View Project →
                  </motion.a>
                )}

                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;