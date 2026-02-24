import { motion } from 'framer-motion';

const Experience = () => {
  const education = [
    {
      title: "B.Tech in Computer Science (AI)",
      institution: "IGDTUW",
      period: "2023 - 2027",
      description: "CGPA - 9.48 (Current) | Perfect 10.00 SGPA in 4th Semester",
      type: "education"
    },
    {
      title: "High School",
      institution: "St. Margaret Sr. Sec. School",
      period: "2019 - 2023",
      description: "Class XII - 94.6% | Class X - 94.8%",
      type: "education"
    }
  ];

  const experience = [
    {
      title: "Upcoming SWE Intern",
      company: "Microsoft",
      period: "Summer 2026",
      description: "Selected for Software Engineering Internship at Microsoft.",
      type: "experience"
    },
    {
      title: "Amazon SDE Intern",
      company: "Amazon",
      period: "June 2025 - July 2025",
      description: "Worked as a Software Development Engineering Intern at Amazon under the team Alexa Smart Properties.",
      type: "experience"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-midnight/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            My <span className="text-lavender">Journey</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Education and professional experience shaping my path in technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-text-primary mb-8 text-center">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="system-card p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <svg className="w-5 h-5 text-lavender" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lavender text-sm font-medium">{edu.period}</span>
                  </div>
                  <h4 className="text-xl font-semibold text-text-primary mb-2">
                    {edu.title}
                  </h4>
                  <h5 className="text-lg text-text-muted mb-3 font-medium">
                    {edu.institution}
                  </h5>
                  <p className="text-text-muted leading-relaxed">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-text-primary mb-8 text-center">
              Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  className="system-card p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <svg className="w-5 h-5 text-lavender" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lavender text-sm font-medium">{exp.period}</span>
                  </div>
                  <h4 className="text-xl font-semibold text-text-primary mb-2">
                    {exp.title}
                  </h4>
                  <h5 className="text-lg text-text-muted mb-3 font-medium">
                    {exp.company}
                  </h5>
                  <p className="text-text-muted leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;