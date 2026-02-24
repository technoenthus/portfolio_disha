import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Cooig",
      description: "A campus-first social platform where students can share notes, trade items, and connect through real-time chat, all in one place. Built to make college life more connected and collaborative.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      link: "https://github.com/Nancytechie/Cooig",
      linkType: "GitHub",
      status: "Active"
    },
    {
      title: "Everybite",
      description: "An AI-powered food scanner that instantly shows a food item's NutriScore and EcoScore, suggests healthier swaps, and even tailors meal plans to your lifestyle. Helping you eat better while caring for the planet.",
      technologies: ["AI/ML", "Computer Vision", "React", "Python"],
      link: "https://github.com/bushra931/EveryBitee",
      linkType: "GitHub",
      status: "Active"
    },
    {
      title: "EchoSight",
      description: "An assistive device that uses YOLOv5 and Arduino to detect objects around visually impaired users and give real-time audio cues, like having an extra set of eyes, always on.",
      technologies: ["YOLOv5", "Arduino", "Computer Vision", "IoT"],
      link: null,
      linkType: "Private",
      status: "Completed"
    },
    {
      title: "Synapse",
      description: "A real-time translator that converts Indian Sign Language gestures into clear speech and text, making everyday conversations between deaf and hearing communities effortless.",
      technologies: ["Machine Learning", "Computer Vision", "NLP", "React"],
      link: "https://www.figma.com/proto/rqJbEESel5ZmgCVGOv0nNx/Synapse?node-id=4-609&node-type=canvas&t=ywOEofI0eoUVutXa-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A609",
      linkType: "Figma",
      status: "Prototype"
    },
    {
      title: "Privacy Policy Summarizer",
      description: "A smart GenAI tool that cuts through lengthy privacy policies, instantly highlighting the key permissions you're actually agreeing to. Chrome Extension for better user privacy awareness.",
      technologies: ["GenAI", "Chrome Extension", "JavaScript", "NLP"],
      link: "https://www.loom.com/share/8f7bcf55c8da46acb168c9c0db3c0606?sid=d153c67f-27ee-43ed-b5fd-b0db3d345773",
      linkType: "Demo",
      status: "Completed"
    },
    {
      title: "SafeTrack",
      description: "A navigation app that puts safety first, suggesting routes based on crime data, enabling live location sharing, and even offering one-tap police alerts.",
      technologies: ["React Native", "Maps API", "Real-time Data", "Firebase"],
      link: "https://github.com/technoenthus/SafeTrack",
      linkType: "GitHub",
      status: "Active"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Project <span className="text-lavender">Showcase</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Real-world solutions built to solve meaningful problems and make a positive impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="system-card group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* macOS-style window bar */}
              <div className="flex items-center gap-2 p-4 border-b border-lavender/10">
                <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                <div className="ml-auto">
                  <span className={`px-2 py-1 text-xs rounded-sm ${
                    project.status === 'Active' 
                      ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                      : project.status === 'Completed'
                      ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                      : 'bg-lavender/10 text-lavender border border-lavender/20'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-lavender transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-text-muted mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-midnight border border-lavender/20 text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="flex justify-center">
                  {project.link ? (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm text-lavender border border-lavender/30 hover:bg-lavender/10 transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      🔗 {project.linkType}
                    </motion.a>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-4 py-2 text-sm text-text-muted border border-text-muted/20">
                      🔒 Private Repo
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;