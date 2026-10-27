import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  Github,
  Download,
  MapPin,
} from 'lucide-react';

const roles = [
  'Software Developer',
  'Python Developer',
  'Java Developer',
  'DevOps Engineer',
];

function useTypewriter(words: string[]) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    let delay = deleting ? 45 : 85;

    if (!deleting && text === currentWord) {
      delay = 1500;
    }

    const timer = window.setTimeout(() => {
      if (!deleting && text === currentWord) {
        setDeleting(true);
      } else if (deleting && text === '') {
        setDeleting(false);
        setWordIndex((previous) => (previous + 1) % words.length);
      } else if (deleting) {
        setText(currentWord.substring(0, text.length - 1));
      } else {
        setText(currentWord.substring(0, text.length + 1));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [text, deleting, wordIndex, words]);

  return text;
}

export default function Hero() {
  const typedRole = useTypewriter(roles);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#0a0a0f] px-6 pb-20 pt-28 text-white sm:px-10 lg:px-16"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          {/* Location */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-2 text-sm text-blue-300">
            <MapPin size={16} />
            <span>Based in Bengaluru, India</span>
          </div>

          {/* Introduction */}
          <p className="mb-3 text-lg text-gray-400">
            Hello, I'm
          </p>

          <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
            Mohammed
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Rihan.
            </span>
          </h1>

          {/* Animated role */}
          <div className="mb-6 flex min-h-10 flex-wrap items-center gap-2 text-lg sm:text-xl md:text-2xl">
            <span className="text-gray-400">Junior</span>

            <span className="font-semibold text-blue-400">
              {typedRole}
            </span>

            <span className="animate-pulse text-cyan-300">|</span>
          </div>

          {/* Description */}
          <p className="mb-8 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            Information Science graduate passionate about building
            reliable software, developing Python applications, and
            exploring DevOps, cloud infrastructure, and automation.
            Always learning and ready to solve real-world problems.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500"
            >
              View Projects
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:border-blue-400 hover:text-blue-400"
            >
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div className="mt-9 flex items-center gap-5">
            <a
              href="https://github.com/rihanrifat342"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-gray-400 transition hover:text-white"
            >
              <Github size={23} />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-sm font-semibold text-gray-400 transition hover:text-blue-400"
            >
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-blue-400"
            >
              <Download size={17} />
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right content: profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-5 rounded-full bg-blue-500/20 blur-3xl" />

            {/* Image border */}
            <div className="relative rounded-3xl border border-blue-400/30 bg-gradient-to-br from-blue-500/20 to-cyan-400/5 p-2 shadow-2xl shadow-blue-900/20">
              <img
                src="/images/mohammed-rihan.jpg"
                alt="Mohammed Rihan"
                className="h-72 w-64 rounded-2xl object-cover object-top sm:h-96 sm:w-80"
                onError={(event) => {
                  event.currentTarget.style.display = 'none';
                }}
              />

              {/* Bottom label */}
              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/10 bg-[#0a0a0f]/90 p-4 backdrop-blur-md">
                <p className="font-semibold text-white">
                  Mohammed Rihan
                </p>
                <p className="mt-1 text-sm text-blue-300">
                  Developer · Problem Solver
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -right-4 top-8 rounded-xl border border-white/10 bg-[#15151f] px-4 py-3 shadow-xl sm:-right-10"
            >
              <p className="text-xs text-gray-400">Currently learning</p>
              <p className="mt-1 font-semibold text-cyan-300">
                DevOps & Cloud
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-gray-500 transition hover:text-blue-400"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ArrowDown size={23} />
        </motion.div>
      </a>
    </section>
  );
}