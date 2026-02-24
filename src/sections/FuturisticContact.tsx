import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useState } from 'react';

const FuturisticContact = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section 
      ref={ref}
      className="py-32 bg-gradient-to-b from-deep-black to-near-black relative overflow-hidden"
    >
      <div className="section-container relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Ready to</span>
            <br />
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Collaborate
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              <motion.a
                href="mailto:disha.malhotra@email.com"
                className="flex items-center gap-4 glass-card p-6 rounded-xl group cursor-pointer"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="text-3xl">📧</div>
                <div>
                  <div className="text-neon-blue font-semibold mb-1">Email</div>
                  <div className="text-text-secondary text-sm">disha.malhotra@email.com</div>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/disha-malhotra-b72162285/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass-card p-6 rounded-xl group cursor-pointer"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="text-3xl">💼</div>
                <div>
                  <div className="text-alexa-blue font-semibold mb-1">LinkedIn</div>
                  <div className="text-text-secondary text-sm">disha-malhotra-b72162285</div>
                </div>
              </motion.a>

              <motion.a
                href="https://x.com/DishaMa09732526"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass-card p-6 rounded-xl group cursor-pointer"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="text-3xl">🐦</div>
                <div>
                  <div className="text-neon-purple font-semibold mb-1">Twitter</div>
                  <div className="text-text-secondary text-sm">@DishaMa09732526</div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <form 
              onSubmit={handleSubmit}
              className="glass-card p-8 rounded-2xl"
              action="https://formspree.io/f/movazwqa"
              method="POST"
            >
              <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-text-secondary text-sm mb-2 font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 text-white p-4 rounded-lg focus:border-neon-blue focus:outline-none transition-all duration-300"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-text-secondary text-sm mb-2 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 text-white p-4 rounded-lg focus:border-neon-blue focus:outline-none transition-all duration-300"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-text-secondary text-sm mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full bg-white/5 border border-white/10 text-white p-4 rounded-lg focus:border-neon-blue focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                    required
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold py-4 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FuturisticContact;