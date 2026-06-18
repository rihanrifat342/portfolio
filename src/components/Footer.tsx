import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.05] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-heading font-bold text-white">
            Mohammed Rihan<span style={{ color: '#4F8EF7', textShadow: '0 0 8px rgba(79,142,247,0.6)' }}>.</span>
          </p>
          <p className="text-slate-600 text-sm mt-1">Junior Frontend & DevOps Engineer</p>
        </div>

        <div className="flex items-center gap-5">
          {[
            { Icon: Mail, href: 'mailto:rihanrifat342@gmail.com', label: 'Email' },
            { Icon: Linkedin, href: 'https://www.linkedin.com/in/mohammedrihan', label: 'LinkedIn' },
            { Icon: Github, href: 'https://github.com/rihanrifat342', label: 'GitHub' },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="text-slate-600 hover:text-accent transition-colors duration-200"
              style={{ transition: 'color 0.2s, filter 0.2s' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.filter = 'drop-shadow(0 0 6px rgba(79,142,247,0.7))';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.filter = 'none';
              }}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <p className="text-slate-700 text-xs">&copy; {new Date().getFullYear()} Mohammed Rihan</p>
      </div>
    </footer>
  );
}
