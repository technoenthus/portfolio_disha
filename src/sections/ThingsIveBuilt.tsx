import { motion } from 'framer-motion';
import { useState } from 'react';

const ThingsIveBuilt = () => {
  const [activeCategory, setActiveCategory] = useState('App Development');
  
  const categories = ['App Development', 'Web Development', 'AI/ML'];
  
  const projects = [
    {
      title: "Cooig",
      description: "Campus-first social platform where students share notes, trade items, and connect through real-time chat. Built to make college life more connected and collaborative.",
      tech: ["Flutter", "Firebase", "FireStorage", "Socket.io", "Dart"],
      link: "https://github.com/Nancytechie/Cooig",
      status: "Live",
      category: "App Development"
    },
    {
      title: "YuvaKhel",
      description: "AI-driven computer-vision platform that evaluates athletes from mobile fitness-test videos, democratizing fair talent identification across India.",
      tech: ["Flutter", "Python", "Dart", "Firebase", "CV"],
      link: "https://github.com/technoenthus/YuvaKhel",
      status: "Live",
      category: "App Development"
    },
    {
      title: "Everybite",
      description: "AI-powered food scanner that instantly shows NutriScore and EcoScore, suggests healthier swaps, and tailors meal plans to your lifestyle. Helping you eat better while caring for the planet.",
      tech: ["Flutter", "Firebase", "Gemnini API", "Dart", "Firestore"],
      link: "https://github.com/bushra931/EveryBitee",
      status: "Live",
      category: "App Development"
    },
    {
      title: "Synapse",
      description: "Advanced neural network platform for deep learning research and experimentation.",
      tech: ["Python", "ML", "Flutter", "MongoDB", "Dart", "Flask"],
      link: "https://github.com/technoenthus/Synapse",
      status: "Live",
      category: "App Development"
    },
    {
      title: "Protege Website",
      description: "Official website for the mentorship society showcasing programs and events, making real time mentor mentee mapping possible.",
      tech: ["React", "Node JS", "Express", "MongoDB", "Tailwind CSS"],
      link: "https://protege-igdtuw.vercel.app/",
      status: "Completed",
      category: "Web Development"
    },
    {
      title: "Shop Now",
      description: "E-commerce platform with modern UI and seamless shopping experience.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      link: "https://technoenthus.github.io/ShopNow/",
      status: "Completed",
      category: "Web Development"
    },
    {
      title: "Serva Sewa Trust",
      description: "Non-profit organization website showcasing community service initiatives.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      link: "https://www.sarvasewatrust.com/",
      status: "Completed",
      category: "Web Development"
    },
    {
      title: "YuvaKhel",
      description: "AI-driven computer-vision platform that evaluates athletes from mobile fitness-test videos, democratizing fair talent identification across India.",
      tech: ["CV", "Machine Learning", "TensorFlow", "Flutter", "Dart"],
      link: "https://github.com/technoenthus/YuvaKhel",
      status: "Live",
      category: "AI/ML"
    },
    {
      title: "Detecting Depression and Suicidal Ideation Through Social Media",
      description: "Comparative study of traditional ML models and transformer architectures for mental health classification.",
      tech: ["DistilBERT", "XLNet", "Random Forest", "XGBoost", "NLP"],
      link: "https://drive.google.com/file/d/1dimxMa8Fac1v7kzifJElLMhL1eTiG77_/view?usp=sharing",
      status: "Live",
      category: "AI/ML"
    },
    {
      title: "Medical Chatbot - BioMistral",
      description: "AI-powered medical chatbot providing healthcare assistance and medical information.",
      tech: ["Python", "NLP", "Machine Learning", "Transformers"],
      link: "https://github.com/technoenthus/Medical-Chatbot---BioMistral",
      status: "Live",
      category: "AI/ML"
    },
    {
      title: "Privacy Policy Summarizer",
      description: "AI-powered tool that analyzes and summarizes lengthy privacy policies into digestible key points.",
      tech: ["Python", "Gemini API", "Tradition vs Transformer Models", "Machine Learning"],
      link: "https://drive.google.com/file/d/1Okb6egDEuF0l-runGRlNqtDVd1FTvM6z/view",
      status: "Live",
      category: "AI/ML"
    },
    {
      title: "EchoSight",
      description: "Designed a cost-effective device for visually impaired individuals using Arduino and YOLOv5.",
      tech: ["TensorFlow", "YOLO", "Arduino Programming"],
      link: null,
      status: "Live",
      category: "AI/ML"
    },
    {
      title: "Credit Risk Prediction",
      description: "Machine learning model for predicting credit risk using lending data analysis and classification algorithms.",
      tech: ["Python", "Pandas", "NumPy", "Machine Learning"],
      link: "https://colab.research.google.com/drive/1jPL1Sc939nfrWBMiNkdIjR8YwhMYmX4A?usp=sharing",
      status: "Live",
      category: "AI/ML"
    }
  ];

  const filteredProjects = projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-32 bg-gradient-to-b from-near-black to-deep-black">
      <div className="section-container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Things I've</span>
            <br />
            <span className="text-lavender">Built</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Turning ideas into reliable systems, one project at a time.
          </p>
        </motion.div>

        {/* Category Selector */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-neon-purple/20 text-neon-purple border-b-2 border-neon-purple'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glass-card p-8 rounded-2xl relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              layout
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-neon-purple rounded-full" />
                  <span className="text-xs font-mono tracking-wider px-2 py-1 rounded bg-green-500/20 text-green-400">
                    Completed
                  </span>
                </div>
                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-neon-purple transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                    </svg>
                  </motion.a>
                )}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
              <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 bg-neon-purple/10 text-neon-purple border border-neon-purple/20 rounded-md text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ThingsIveBuilt;