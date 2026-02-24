import { motion } from 'framer-motion';

interface Role {
  title: string;
  organization: string;
  period: string;
  description: string;
  year: string;
}

const allRoles: Role[] = [
  {
    title: "DSA Cohort Lead",
    organization: "CodessCafe",
    period: "2026 - Present",
    description: "Solely mentoring 40 mentees in Data Structures & Algorithms : guiding problem-solving, contest prep, and placement readiness",
    year: "2026",
  },
  {
    title: "TNP Coordinator",
    organization: "IGDTUW",
    period: "Dec 2024 - Present",
    description: "Coordinating training and placement activities for students",
    year: "2024",
  },
  {
    title: "Tech Lead",
    organization: "Protege : The Mentorship Society of IGDTUW",
    period: "2025 - Present",
    description: "Leading technical development and building society's digital presence",
    year: "2025",
  },
  {
    title: "Tech Lead",
    organization: "Zenovate : Startup Society of IGDTUW",
    period: "May 2024 - Present",
    description: "Driving technical initiatives and fostering startup culture",
    year: "2024",
  },
  {
    title: "Mentor",
    organization: "CodessCafe",
    period: "Nov 2025 - Present",
    description: "Mentoring 10+ students in software development and career guidance",
    year: "2025",
  },
  {
    title: "GDG Web Dev Mentor",
    organization: "Google Developer Groups",
    period: "Jan 2025 - Aug 2025",
    description: "Mentored 100+ junior developers in web development technologies",
    year: "2024",
  },
  {
    title: "Event Coordinator",
    organization: "Taarangana : Cultural Fest, IGDTUW",
    period: "Feb 2024",
    description: "Coordinated logistics for the college's cultural festival",
    year: "2024",
  },
  {
    title: "Social Media & Communication Head",
    organization: "St. Margaret Sr. Sec. School",
    period: "2022",
    description: "Led school's digital communication strategy and social presence",
    year: "2022",
  },
  {
    title: "Vice Captain",
    organization: "Sunflower House : St. Margaret Sr. Sec. School",
    period: "2019",
    description: "Led house activities and represented students in leadership",
    year: "2019",
  },
];

const RoleCard = ({ role, delay }: { role: Role; delay: number }) => (
  <motion.div
    className="group relative bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-xl p-4
               hover:border-neon-purple/50 hover:bg-white/[0.07] transition-all duration-300"
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay }}
    viewport={{ once: true }}
    whileHover={{ y: -3, boxShadow: '0 14px 32px rgba(139,92,246,0.18)' }}
  >
    {/* title + period row */}
    <div className="flex items-start justify-between gap-2 mb-1">
      <h3 className="text-sm font-bold text-white group-hover:text-neon-purple transition-colors duration-300 leading-snug">
        {role.title}
      </h3>
      <span className="shrink-0 text-[10px] font-mono text-neon-purple/70 bg-neon-purple/10 border border-neon-purple/25 rounded-full px-2 py-0.5 mt-0.5">
        {role.period}
      </span>
    </div>
    <p className="text-neon-purple/70 text-xs font-semibold mb-2 leading-snug">
      {role.organization}
    </p>
    <p className="text-gray-400 text-xs leading-relaxed break-words">
      {role.description}
    </p>
    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-neon-purple/5 to-neon-indigo/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
  </motion.div>
);

const LeadershipRoles = () => {
  // Build year → roles map (oldest → newest for left-to-right display)
  const yearGroups: Record<string, Role[]> = {};
  allRoles.forEach(role => {
    if (!yearGroups[role.year]) yearGroups[role.year] = [];
    yearGroups[role.year].push(role);
  });
  const sortedYears = Object.keys(yearGroups).sort((a, b) => Number(b) - Number(a));

  return (
    <section id="leadership" className="py-32 bg-gradient-to-b from-near-black to-deep-black overflow-hidden">
      <div className="section-container">

        {/* ── Heading ── */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Leadership &</span>
            <br />
            <span className="text-lavender">Roles</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Leading teams, mentoring peers, and building communities
          </p>
        </motion.div>

        {/* ══════════════════════════════════════════
            DESKTOP  —  Horizontal year-wise timeline
            ══════════════════════════════════════════ */}
        <div className="hidden lg:block">
          <div className="overflow-x-auto pb-6" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(139,92,246,0.3) transparent' }}>
            <div className="flex items-start" style={{ minWidth: 'max-content', padding: '0 2rem 1rem' }}>

              {sortedYears.map((year, yi) => {
                const isLast = yi === sortedYears.length - 1;
                return (
                  <div
                    key={year}
                    className="relative flex flex-col items-center flex-shrink-0"
                    style={{ width: '280px' }}
                  >
                    {/* ── Horizontal connector line ── */}
                    {/* left half */}
                    {yi > 0 && (
                      <div className="absolute top-[28px] left-0 right-1/2 h-px bg-gradient-to-r from-neon-indigo/30 to-neon-purple/80" />
                    )}
                    {/* right half */}
                    {!isLast && (
                      <div className="absolute top-[28px] left-1/2 right-0 h-px bg-gradient-to-r from-neon-purple/80 to-neon-indigo/30" />
                    )}

                    {/* ── Year badge (sits on the line) ── */}
                    <motion.div
                      className="relative z-10 flex flex-col items-center mb-3"
                      initial={{ opacity: 0, scale: 0.6 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: yi * 0.12 }}
                      viewport={{ once: true }}
                    >
                      {/* glow ring */}
                      <motion.div
                        className="absolute w-14 h-14 rounded-full border border-neon-purple/30"
                        animate={{ scale: [1, 1.55], opacity: [0.45, 0] }}
                        transition={{ duration: 2.8, repeat: Infinity, delay: yi * 0.3 }}
                      />
                      <div className="w-14 h-14 rounded-full bg-deep-black border-2 border-neon-purple flex items-center justify-center shadow-lg shadow-neon-purple/25">
                        <span className="text-neon-purple font-extrabold text-xs tracking-wide">{year}</span>
                      </div>
                    </motion.div>

                    {/* ── Short vertical drop to cards ── */}
                    <div className="w-px h-5 bg-gradient-to-b from-neon-purple/70 to-neon-purple/10 mb-0" />

                    {/* ── Role cards for this year ── */}
                    <div className="flex flex-col gap-3 px-3 w-full">
                      {yearGroups[year].map((role, ri) => (
                        <RoleCard
                          key={role.title + role.organization}
                          role={role}
                          delay={yi * 0.1 + ri * 0.06}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}

            </div>
          </div>

          {/* Timeline direction label */}
          <motion.div
            className="flex items-center justify-center gap-3 mt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-neon-purple/50 rounded" />
            <span className="text-gray-600 text-[11px] font-mono tracking-widest uppercase">
              ← Most Recent · Timeline · Earliest
            </span>
            <div className="h-px w-10 bg-gradient-to-r from-neon-purple/50 to-transparent rounded" />
          </motion.div>
        </div>

        {/* ══════════════════════════════════════════
            MOBILE  —  Vertical timeline (year headers)
            ══════════════════════════════════════════ */}
        <div className="lg:hidden">
          {/* Newest-first on mobile */}
          {sortedYears.map((year, yi) => (
            <motion.div
              key={year}
              className="mb-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: yi * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Year label row */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-deep-black border-2 border-neon-purple flex items-center justify-center shrink-0">
                  <span className="text-neon-purple font-extrabold text-[11px]">{year}</span>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-neon-purple/60 to-transparent" />
              </div>

              {/* Cards indented */}
              <div className="pl-3 flex flex-col gap-3 border-l border-neon-purple/20 ml-5">
                {yearGroups[year].map((role, ri) => (
                  <RoleCard
                    key={role.title + role.organization}
                    role={role}
                    delay={ri * 0.06}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LeadershipRoles;
