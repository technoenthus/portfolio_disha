import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import icon from '../assets/home.png';

const Header = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = ['introduction', 'journey', 'projects', 'leadership', 'recognition', 'skills', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      
      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-deep-black/90 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img 
              src={icon} 
              alt="Disha Malhotra" 
              className="w-10 h-10 rounded-full border-2 border-neon-purple/30"
            />
            <div>
              <h1 className="text-lg font-semibold text-white">Disha Malhotra</h1>
            </div>
          </motion.div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Introduction', id: 'introduction' },
              { name: 'Experience', id: 'journey' },
              { name: 'Projects', id: 'projects' },
              { name: 'Leadership', id: 'leadership' },
              { name: 'Achievements', id: 'recognition' },
              { name: 'Skills', id: 'skills' }
            ].map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-200 pb-1 border-b-2 ${
                  activeSection === item.id
                    ? 'text-neon-purple border-neon-purple'
                    : 'text-gray-300 border-transparent hover:text-neon-purple'
                }`}
                whileHover={{ y: -1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.name}
              </motion.button>
            ))}
            <motion.a
              href="#contact"
              className="px-4 py-2 bg-neon-purple/10 text-neon-purple border border-neon-purple/30 rounded-lg text-sm font-medium hover:bg-neon-purple/20 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.a>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;