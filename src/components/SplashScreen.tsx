import { motion } from 'framer-motion';

const SplashScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-midnight flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-semibold text-text-primary mb-4">
            Disha Malhotra
          </h1>
          
          <motion.p
            className="text-lg text-text-muted opacity-70"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
          >
            Engineer by profession • Explorer by passion
          </motion.p>
        </motion.div>

        {/* Abstract system pattern */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="grid-pattern w-full h-full" />
        </motion.div>

        {/* Subtle geometric elements */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.05 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="w-96 h-96 border border-lavender/20 rotate-45" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;