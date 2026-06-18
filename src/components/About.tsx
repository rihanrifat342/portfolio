import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Zap } from 'lucide-react';

const stats = [
  { label: 'Internships', value: '2+' },
  { label: 'APIs Built', value: '10+' },
  { label: 'Technologies', value: '20+' },
];

export default function About() {
  return (
    <section id="about" className="relative z-10 py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-3">About Me</p>
          <h2 className="font-heading font-bold text-white text-4xl mb-12">
            The Story So Far
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Bio card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass glass-hover rounded-2xl p-8"
          >
            <div className="space-y-4 text-slate-400 leading-relaxed text-[15px]">
              <p>
                I'm Mohammed Rihan — a B.E. Information Science graduate from AIET (2025) based in
                Dubai, UAE. I bridge backend engineering and cloud operations, building everything
                from REST APIs to Kubernetes clusters.
              </p>
              <p>
                My edge is AI-native development: using GitHub Copilot, Claude, and Cursor to
                deliver at a pace that surprises senior engineers. I've reduced feature delivery
                time by ~35% through AI-augmented workflows.
              </p>
              <p>
                Actively seeking junior DevOps or Full-Stack roles. Open to hybrid and remote
                opportunities globally.
              </p>
            </div>

            <div className="flex gap-6 mt-8 pt-6 border-t border-white/[0.06]">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-heading font-bold text-2xl text-glow">{s.value}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            {[
              {
                icon: GraduationCap,
                title: 'B.E. Information Science & Technology',
                sub: "Alva's Institute of Engineering and Technology · 2021–2025",
              },
              {
                icon: MapPin,
                title: 'Dubai, UAE',
                sub: 'Open to Hybrid & Remote · Targeting Junior DevOps / Full-Stack',
              },
              {
                icon: Zap,
                title: 'AI-Native Developer',
                sub: 'GitHub Copilot · Claude · Cursor — shipping 35% faster with AI',
              },
            ].map(({ icon: Icon, title, sub }) => (
              <div
                key={title}
                className="glass glass-hover rounded-xl p-5 flex items-start gap-4"
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(79,142,247,0.12)', boxShadow: '0 0 12px rgba(79,142,247,0.15)' }}
                >
                  <Icon size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{title}</p>
                  <p className="text-slate-500 text-xs mt-1 leading-relaxed">{sub}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
