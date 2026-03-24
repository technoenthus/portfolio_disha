import { motion } from 'framer-motion';

interface ComingSoonProps {
  onClose: () => void;
}

const ComingSoon = ({ onClose }: ComingSoonProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-gradient-to-br from-deep-black via-midnight to-near-black overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-neon-indigo/5 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <motion.span
            className="text-neon-purple text-xs font-mono tracking-[0.3em] uppercase mb-4 block"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            • Coming Soon •
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-neon-purple via-neon-indigo to-soft-purple bg-clip-text text-transparent">
              Immersive Experience
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            The 3D video tour is being crafted with care. 
            <br className="hidden md:block" />
            Check back soon for an unforgettable journey through my portfolio!
          </p>
        </motion.div>

        {/* Animation indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="my-16"
        >
          <div className="flex justify-center items-center gap-3">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-neon-purple"
                animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>


        {/* Close button */}
        <motion.button
          onClick={onClose}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 border border-neon-purple/50 text-white font-semibold rounded-lg backdrop-blur-sm hover:border-neon-purple/80 hover:bg-neon-purple/10 transition-all duration-200 text-center"
        >
          ← Back to Portfolio
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ComingSoon;
