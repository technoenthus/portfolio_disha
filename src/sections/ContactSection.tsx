import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/movazwqa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setShowSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-deep-black to-near-black">
      <div className="section-container">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Ready to</span>
            <br />
            <span className="bg-gradient-to-r from-neon-purple to-neon-indigo bg-clip-text text-transparent">
              Collaborate
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Open to internship opportunities, innovative projects, and meaningful collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              <motion.a
                href="mailto:malhotradisha2710@gmail.com"
                className="flex items-center gap-4 glass-card p-6 rounded-xl group cursor-pointer"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div>
                  <div className="text-neon-purple font-semibold mb-1">Email</div>
                  <div className="text-gray-400 text-sm">malhotradisha2710@gmail.com</div>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/disha-malhotra-b72162285/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass-card p-6 rounded-xl group cursor-pointer"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div>
                  <div className="text-neon-purple font-semibold mb-1">LinkedIn</div>
                  <div className="text-gray-400 text-sm">disha-malhotra-b72162285</div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form 
              onSubmit={handleSubmit}
              className="glass-card p-8 rounded-2xl relative"
            >
              <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2 font-medium">
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
                    <label className="block text-gray-400 text-sm mb-2 font-medium">
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
                  <label className="block text-gray-400 text-sm mb-2 font-medium">
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
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold py-4 rounded-lg disabled:opacity-50"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </div>
              
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute inset-0 bg-deep-black/90 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">✅</div>
                    <h3 className="text-xl font-bold text-neon-blue mb-2">Message Sent!</h3>
                    <p className="text-gray-300">Thanks for reaching out. I'll get back to you soon!</p>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;