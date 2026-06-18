import { motion } from 'framer-motion';
import { useTilt } from '../hooks/useTilt';

const experiences = [
  {
    role: 'DevOps Engineer Intern',
    company: 'AIVariant',
    period: 'Nov 2025 – Feb 2026',
    duration: '4 months',
    location: 'Bengaluru',
    bullets: [
      'Built end-to-end CI/CD pipelines with Jenkins and GitHub Actions for automated build, test, and deploy workflows.',
      'Containerized applications with Docker and orchestrated workloads on Kubernetes — reducing deployment time.',
      'Integrated Prometheus + Grafana for real-time metrics collection and live performance dashboards.',
      'Deployed and managed cloud infrastructure on AWS EC2 for scalable production environments.',
    ],
    tags: ['Jenkins', 'GitHub Actions', 'Docker', 'Kubernetes', 'AWS EC2', 'Prometheus', 'Grafana'],
  },
  {
    role: 'Web Development Intern',
    company: 'Blue Bird Data Solutions',
    period: 'Jan 2025 – Jun 2025',
    duration: '6 months',
    location: 'Mangaluru',
    bullets: [
      'Developed RESTful APIs with Java and Spring Boot for scalable, production-ready backend services.',
      'Optimized MySQL queries improving API response performance by 25%.',
      'Implemented JWT authentication for secure session management across services.',
      'Containerized services with Docker; automated CI/CD via Jenkins and Maven.',
    ],
    tags: ['Java', 'Spring Boot', 'MySQL', 'JWT', 'Docker', 'Jenkins', 'Maven'],
  },
  {
    role: 'Java Backend Developer — Projects',
    company: 'AIET',
    period: 'Jun 2024 – Dec 2024',
    duration: '7 months',
    location: 'Moodbidri',
    bullets: [
      'Architected 10+ RESTful APIs with Spring Boot — full auth, validation, and CRUD across 3 internal projects.',
      'Reduced feature delivery time ~35% by integrating GitHub Copilot and Claude into daily workflows.',
      'Deployed 3+ Dockerized services to AWS EC2, cutting environment setup from 3+ hours to under 10 minutes.',
      'Integrated MySQL and MongoDB with Spring Boot for high-frequency read/write operations.',
    ],
    tags: ['Java', 'Spring Boot', 'Docker', 'AWS EC2', 'MySQL', 'MongoDB', 'GitHub Copilot'],
  },
];

function ExpCard({ exp, index }: { exp: (typeof experiences)[0]; index: number }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt(6);

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: index * 0.15 }}
      className="relative pl-10"
    >
      {/* Timeline dot */}
      <div
        className="dot-pulse absolute left-0 top-6 w-3 h-3 rounded-full border-2 border-accent"
        style={{ background: '#0a0a0f', zIndex: 2 }}
      />

      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="glass glass-hover rounded-2xl p-7"
        style={{ transition: 'transform 0.15s ease, border-color 0.3s, box-shadow 0.3s, background 0.3s' }}
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
          <div>
            <h3 className="font-heading font-semibold text-white text-lg">{exp.role}</h3>
            <p className="text-accent font-medium mt-0.5">{exp.company}</p>
            <p className="text-slate-500 text-sm mt-0.5">{exp.location}</p>
          </div>
          <div className="sm:text-right shrink-0">
            <p className="text-slate-300 text-sm font-medium">{exp.period}</p>
            <p className="text-slate-500 text-xs mt-1">{exp.duration}</p>
          </div>
        </div>

        <ul className="space-y-2 mb-5">
          {exp.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
              <span
                className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full"
                style={{ background: '#4F8EF7', boxShadow: '0 0 6px rgba(79,142,247,0.6)' }}
              />
              {b}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {exp.tags.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-full border border-accent/15 text-slate-400"
              style={{ background: 'rgba(79,142,247,0.05)' }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Experience
          </p>
          <h2 className="font-heading font-bold text-white text-4xl">Work History</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Glowing vertical line */}
          <div
            className="absolute left-[5px] top-6 bottom-0 w-px"
            style={{
              background: 'linear-gradient(to bottom, rgba(79,142,247,0.6), rgba(79,142,247,0.05))',
              boxShadow: '0 0 8px rgba(79,142,247,0.3)',
            }}
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <ExpCard key={exp.role + exp.company} exp={exp} index={i} />
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-3">Education</p>
          <h2 className="font-heading font-bold text-white text-2xl mb-6">Academic Background</h2>
          <div className="glass glass-hover rounded-2xl p-7 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div>
              <h3 className="font-heading font-semibold text-white">
                B.E. — Information Science & Technology
              </h3>
              <p className="text-accent mt-1">Alva's Institute of Engineering and Technology (AIET)</p>
            </div>
            <p className="text-slate-400 text-sm shrink-0">2021 – 2025</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
