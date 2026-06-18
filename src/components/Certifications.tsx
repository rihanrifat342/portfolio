import { motion } from 'framer-motion';
import { Award, Cloud, Shield, Database, Code, Server } from 'lucide-react';

const certs = [
  {
    icon: Cloud,
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2024',
  },
  {
    icon: Server,
    title: 'Oracle Cloud Infrastructure 2025',
    issuer: 'Certified GenAI Professional · Oracle',
    year: '2025',
  },
  {
    icon: Shield,
    title: 'Google Cybersecurity',
    issuer: 'Professional Certificate · Google / Coursera',
    year: '2024',
  },
  {
    icon: Code,
    title: 'DevOps Engineer Programme',
    issuer: 'Certificate of Excellence · AIVariant',
    year: '2026',
  },
  {
    icon: Database,
    title: 'Database Management Systems',
    issuer: 'DBMS Part 1 · NPTEL',
    year: '2023',
  },
  {
    icon: Award,
    title: 'Data Science',
    issuer: 'Applied Data Science · Coursera',
    year: '2024',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative z-10 py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Certifications
          </p>
          <h2 className="font-heading font-bold text-white text-4xl">Credentials</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass glass-hover rounded-xl p-5 flex items-start gap-4"
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  background: 'rgba(79,142,247,0.1)',
                  boxShadow: '0 0 12px rgba(79,142,247,0.15)',
                }}
              >
                <c.icon size={17} className="text-accent" />
              </div>
              <div>
                <p className="text-white font-medium text-sm leading-snug">{c.title}</p>
                <p className="text-slate-500 text-xs mt-1 leading-relaxed">{c.issuer}</p>
                <p
                  className="text-xs mt-1.5 font-semibold"
                  style={{ color: 'rgba(79,142,247,0.7)' }}
                >
                  {c.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
