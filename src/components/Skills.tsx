import { motion } from 'framer-motion';

const groups = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Figma'],
  },
  {
    title: 'Backend',
    skills: ['Java', 'Spring Boot', 'REST APIs', 'JWT Auth', 'MySQL', 'MongoDB', 'Maven', 'JUnit'],
  },
  {
    title: 'DevOps & Cloud',
    skills: ['Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'AWS EC2', 'Terraform', 'Prometheus', 'Grafana'],
  },
  {
    title: 'Tools & AI',
    skills: ['Git', 'GitHub Copilot', 'Claude AI', 'Cursor', 'Postman', 'VS Code', 'Linux', 'Bash'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-3">Skills</p>
          <h2 className="font-heading font-bold text-white text-4xl">Technical Stack</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
              className="glass glass-hover rounded-2xl p-6"
            >
              <h3
                className="font-heading font-semibold text-sm tracking-widest uppercase mb-5"
                style={{ color: '#4F8EF7', textShadow: '0 0 10px rgba(79,142,247,0.5)' }}
              >
                {g.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="pill-glow text-xs font-medium px-3 py-1.5 rounded-full border border-accent/20 text-slate-300 cursor-default select-none"
                    style={{ background: 'rgba(79,142,247,0.06)' }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
