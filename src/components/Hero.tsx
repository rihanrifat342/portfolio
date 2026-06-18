import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import FloatingRing from './FloatingRing';

const roles = ['Frontend Developer', 'DevOps Engineer', 'Full-Stack Builder'];

function useTypewriter(words: string[], speed = 60, pause = 2000) {
  const [text, setText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];

    const tick = () => {
      if (!deleting) {
        setText(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
          setCharIdx((c) => c + 1);
          return;
        }
        setCharIdx((c) => c + 1);
      } else {
        setText(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setWordIdx((w) => (w + 1) % words.length);
          setCharIdx(0);
          return;
        }
        setCharIdx((c) => c - 1);
      }
    };

    const id = setTimeout(tick, deleting ? speed / 2 : speed);
    return () => clearTimeout(id);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-20 z-10"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
          {/* Text side */}
          <div className="flex-1">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-5"
            >
              Based in Dubai, UAE
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="font-heading font-bold text-3d leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
            >
              Mohammed
              <br />
              Rihan
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex items-center gap-2 mb-6 h-10"
            >
              <span className="text-slate-400 font-heading text-xl font-medium">
                Junior{' '}
              </span>
              <span className="text-accent font-heading text-xl font-semibold" style={{ textShadow: '0 0 16px rgba(79,142,247,0.6)' }}>
                {typed}
              </span>
              <span className="cursor-blink text-accent font-heading text-xl font-semibold">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="text-slate-400 text-base leading-relaxed max-w-lg mb-10"
            >
              B.E. Information Science graduate building scalable backend systems and cloud
              infrastructure — with AI as a force multiplier. Open to remote & hybrid roles.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-accent hover:bg-blue-400 text-white font-semibold px-7 py-3 rounded-lg transition-all duration-200 shadow-glow hover:shadow-glow-lg"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 glass glass-hover text-slate-300 hover:text-white font-semibold px-7 py-3 rounded-lg transition-all duration-200"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* Ring side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.9, ease: 'easeOut' }}
            className="hidden lg:flex items-center justify-center"
          >
            <FloatingRing />
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-600 hover:text-accent transition-colors animate-bounce"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
