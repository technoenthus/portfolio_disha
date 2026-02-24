import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  linkType: string;
  status: string;
  impact: string;
  category: 'AI/ML' | 'Mobile' | 'Web' | 'IoT';
}

const ProjectShowcase = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Cooig",
      description: "A campus-first social platform where students can share notes, trade items, and connect through real-time chat, all in one place.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      link: "https://github.com/Nancytechie/Cooig",
      linkType: "GitHub",
      status: "Active",
      impact: "500+ active users",
      category: "Web"
    },
    {
      id: 2,
      title: "Everybite",
      description: "An AI-powered food scanner that instantly shows a food item's NutriScore and EcoScore, suggests healthier swaps, and tailors meal plans.",
      technologies: ["AI/ML", "Computer Vision", "React", "Python"],
      link: "https://github.com/bushra931/EveryBitee",
      linkType: "GitHub",
      status: "Active",
      impact: "95% accuracy rate",
      category: "AI/ML"
    },
    {
      id: 3,
      title: "EchoSight",
      description: "An assistive device using YOLOv5 and Arduino to detect objects for visually impaired users with real-time audio cues.",
      technologies: ["YOLOv5", "Arduino", "Computer Vision", "IoT"],
      linkType: "Private",
      status: "Completed",
      impact: "Real-world deployment",
      category: "IoT"
    },
    {
      id: 4,
      title: "Synapse",
      description: "A real-time translator converting Indian Sign Language gestures into clear speech and text for seamless communication.",
      technologies: ["Machine Learning", "Computer Vision", "NLP", "React"],
      link: "https://www.figma.com/proto/rqJbEESel5ZmgCVGOv0nNx/Synapse",
      linkType: "Figma",
      status: "Prototype",
      impact: "Social impact focus",
      category: "AI/ML"
    },
    {
      id: 5,
      title: "Privacy Policy Summarizer",
      description: "A smart GenAI Chrome Extension that cuts through lengthy privacy policies, highlighting key permissions.",
      technologies: ["GenAI", "Chrome Extension", "JavaScript", "NLP"],
      link: "https://www.loom.com/share/8f7bcf55c8da46acb168c9c0db3c0606",
      linkType: "Demo",
      status: "Completed",
      impact: "Privacy awareness",
      category: "Web"
    },
    {
      id: 6,
      title: "SafeTrack",
      description: "A navigation app prioritizing safety with crime data-based routing, live location sharing, and emergency alerts.",
      technologies: ["React Native", "Maps API", "Real-time Data", "Firebase"],
      link: "https://github.com/technoenthus/SafeTrack",
      linkType: "GitHub",
      status: "Active",
      impact: "Safety-first navigation",
      category: "Mobile"
    }
  ];

  const categoryColors = {
    'AI/ML': 'from-neon-purple to-neon-blue',
    'Mobile': 'from-neon-blue to-alexa-blue',
    'Web': 'from-alexa-blue to-microsoft-blue',
    'IoT': 'from-microsoft-blue to-neon-purple'
  };

  return (
    <section 
      ref={ref}
      className="py-32 bg-gradient-to-b from-near-black to-deep-black relative overflow-hidden"
    >
      {/* Floating tech orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-neon-blue/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
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
            <span className="text-neon-blue font-mono text-sm tracking-wider">PROJECT SHOWCASE</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Built to</span>
            <span className="text-lavender"> Impact</span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Real-world solutions addressing meaningful problems through innovative technology and thoughtful design.
          </p>
        </motion.div>

        {/* 3D Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50, rotateX: 45 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ 
                y: -20, 
                rotateX: 5, 
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              onClick={() => setSelectedProject(project)}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="glass-card p-6 rounded-2xl h-full relative overflow-hidden">
                {/* Category indicator */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${categoryColors[project.category]}`} />
                
                {/* Status badge */}
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
                  <div className="text-2xl opacity-50 group-hover:opacity-100 transition-opacity">
                    {project.category === 'AI/ML' && '🤖'}
                    {project.category === 'Mobile' && '📱'}
                    {project.category === 'Web' && '🌐'}
                    {project.category === 'IoT' && '⚡'}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Impact metric */}
                <div className="mb-4">
                  <span className="text-xs text-text-muted uppercase tracking-wider">Impact</span>
                  <p className="text-neon-blue font-semibold">{project.impact}</p>
                </div>

                {/* Tech stack visualization */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, _techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-2 py-1 text-xs bg-white/5 text-text-secondary rounded border border-white/10"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 212, 255, 0.1)" }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs text-text-muted">+{project.technologies.length - 3}</span>
                  )}
                </div>

                {/* Action button */}
                <motion.div
                  className="flex items-center justify-between"
                  whileHover={{ x: 5 }}
                >
                  {project.link ? (
                    <span className="text-neon-blue text-sm font-medium flex items-center gap-2">
                      🔗 {project.linkType}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  ) : (
                    <span className="text-text-muted text-sm">🔒 Private</span>
                  )}
                </motion.div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="glass-card p-8 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-text-muted hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
              
              <p className="text-text-secondary leading-relaxed mb-6">
                {selectedProject.description}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-sm font-semibold text-neon-blue mb-2">TECHNOLOGIES</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs bg-white/10 text-white rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neon-blue mb-2">IMPACT</h4>
                  <p className="text-white">{selectedProject.impact}</p>
                </div>
              </div>
              
              {selectedProject.link && (
                <motion.a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View {selectedProject.linkType}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectShowcase;

