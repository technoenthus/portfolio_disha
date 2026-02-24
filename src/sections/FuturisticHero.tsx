import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

const FuturisticHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const floatingElements = [
    { id: 1, x: '10%', y: '20%', delay: 0, size: 'w-2 h-2' },
    { id: 2, x: '85%', y: '15%', delay: 1, size: 'w-1 h-1' },
    { id: 3, x: '15%', y: '70%', delay: 2, size: 'w-3 h-3' },
    { id: 4, x: '90%', y: '60%', delay: 0.5, size: 'w-2 h-2' },
    { id: 5, x: '5%', y: '45%', delay: 1.5, size: 'w-1 h-1' },
  ];

  return (
    <section 
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-deep-black to-near-black"
    >
      {/* Floating Elements */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className={`floating-element ${element.size} bg-neon-blue rounded-full opacity-30`}
          style={{ left: element.x, top: element.y }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4 + element.delay,
            repeat: Infinity,
            delay: element.delay,
          }}
        />
      ))}

      {/* Wireframe Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-neon-blue text-sm font-mono tracking-wider uppercase">
                Aspiring Software Engineer
              </span>
            </motion.div>

            <motion.h1 
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="text-white">Disha</span>
              <br />
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Malhotra
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-text-secondary mb-8 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Building scalable systems at{' '}
              <span className="text-alexa-blue font-semibold">Amazon</span> and{' '}
              <span className="text-microsoft-blue font-semibold">Microsoft</span>.
              <br />
              <em className="text-neon-blue">Bridging imagination and reality through code.</em>
            </motion.p>

            <motion.div
              className="flex gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold rounded-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 212, 255, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
              
              <motion.button
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.05, 
                  borderColor: "rgba(0, 212, 255, 0.5)",
                  backgroundColor: "rgba(0, 212, 255, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get Resume
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right: 3D Photo Effect */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <motion.div
              className="relative"
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Photo Container with 3D Effect */}
              <motion.div
                className="relative w-80 h-80 rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Placeholder for photo - replace with actual image */}
                <div className="w-full h-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center border border-white/20 backdrop-blur-sm">
                  <span className="text-white/60 text-lg font-mono">[Your Photo Here]</span>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 rounded-2xl" />
              </motion.div>

              {/* Floating Tech Elements around photo */}
              <motion.div
                className="absolute -top-4 -right-4 tech-orb"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-xs text-neon-blue">AI</span>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 tech-orb"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-xs text-neon-purple">ML</span>
              </motion.div>
              
              <motion.div
                className="absolute top-1/2 -right-8 tech-orb"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-xs text-alexa-blue">AWS</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          className="w-px h-16 bg-gradient-to-b from-neon-blue to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <p className="text-xs text-text-muted mt-2 font-mono">SCROLL</p>
      </motion.div>
    </section>
  );
};

export default FuturisticHero;