import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'rihanrifat342@gmail.com',
    href: 'mailto:rihanrifat342@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/mohammedrihan',
    href: 'https://www.linkedin.com/in/mohammedrihan',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/rihanrifat342',
    href: 'https://github.com/rihanrifat342',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Contact
            </p>
            <h2 className="font-heading font-bold text-white text-4xl mb-4">
              Let's Connect
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-10">
              Actively looking for junior DevOps or Full-Stack roles. If you have an
              opportunity or just want to say hello — reach out.
            </p>
          </motion.div>

          <div className="space-y-4">
            {contacts.map(({ icon: Icon, label, value, href }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-4 p-5 rounded-xl glass glass-hover text-left group"
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{
                    background: 'rgba(79,142,247,0.1)',
                    boxShadow: '0 0 12px rgba(79,142,247,0.15)',
                  }}
                >
                  <Icon size={18} className="text-accent" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-white font-medium text-sm">{label}</p>
                  <p className="text-slate-400 text-sm mt-0.5">{value}</p>
                </div>
                <ArrowRight
                  size={16}
                  className="text-slate-600 group-hover:text-accent group-hover:translate-x-1 transition-all duration-200"
                />
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10"
          >
            <a
              href="mailto:rihanrifat342@gmail.com"
              className="inline-flex items-center gap-2 bg-accent hover:bg-blue-400 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 shadow-glow hover:shadow-glow-lg"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <Mail size={18} />
              Send an Email
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
