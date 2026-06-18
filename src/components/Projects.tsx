import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useTilt } from '../hooks/useTilt';

const projects = [
  {
    title: 'CI/CD Automation Pipeline',
    description:
      'End-to-end DevOps pipeline with Jenkins and GitHub Actions. Containerized with Docker, orchestrated via Kubernetes on AWS EC2. Integrated Prometheus + Grafana for live monitoring.',
    tech: ['Jenkins', 'GitHub Actions', 'Docker', 'Kubernetes', 'AWS EC2', 'Prometheus'],
    github: 'https://github.com/rihanrifat342',
  },
  {
    title: 'Spring Boot REST API Platform',
    description:
      'Production-grade RESTful API system using Java and Spring Boot with JWT authentication, MySQL and MongoDB. Optimized queries for 25% API performance improvement.',
    tech: ['Java', 'Spring Boot', 'JWT', 'MySQL', 'MongoDB', 'Docker'],
    github: 'https://github.com/rihanrifat342',
  },
  {
    title: 'Cloud Monitoring Dashboard',
    description:
      'Real-time application monitoring with Prometheus metrics and Grafana dashboards deployed on AWS EC2. Custom alerts and infrastructure-as-code with Terraform.',
    tech: ['Prometheus', 'Grafana', 'Terraform', 'AWS EC2', 'Linux', 'Bash'],
    github: 'https://github.com/rihanrifat342',
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt(10);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
    >
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="glass glass-hover rounded-2xl p-7 h-full flex flex-col cursor-default"
        style={{ transition: 'transform 0.15s ease, border-color 0.3s, box-shadow 0.3s, background 0.3s' }}
      >
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-heading font-semibold text-white text-base leading-snug flex-1 mr-3">
            {project.title}
          </h3>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-accent transition-colors shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={16} />
          </a>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-full border border-accent/15 text-slate-400"
              style={{ background: 'rgba(79,142,247,0.05)' }}
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-accent hover:text-blue-300 font-medium transition-colors"
        >
          <Github size={15} />
          View on GitHub
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-3">Projects</p>
          <h2 className="font-heading font-bold text-white text-4xl">Featured Work</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
