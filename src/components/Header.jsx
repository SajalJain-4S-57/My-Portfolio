import { useMemo, useState } from 'react';
import { FiMenu, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';
import useActiveSection from '../hooks/useActiveSection';
import MobileDrawer from './MobileDrawer';
import { cn } from '../utils/cn';

export default function Header() {
  const sections = useMemo(() => ([
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'contact', label: 'Contact Me', href: '#contact' },
  ]), []);

  const active = useActiveSection(sections.map(s => s.id));
  const [open, setOpen] = useState(false);

  const onDeploy = async () => {
    const hook = import.meta.env.VITE_DEPLOY_HOOK_URL;
    if (!hook) {
      window.alert('Deploy hook not configured yet.');
      return;
    }
    await fetch(hook, { method: 'POST' });
    window.alert('Deployment triggered!');
  };

  return (
    <>
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-neutral-900/70 border-b border-black/5 dark:border-white/10">
        <div className="container mx-auto px-4 max-w-6xl h-16 flex items-center justify-between">
          
          {/* Left side - Logo */}
          <a href="#home" className="font-display text-xl md:text-2xl">
            <span className="text-accent">Sajal Jain</span>
          </a>

          {/* Center - Nav (Desktop only) */}
          <nav className="hidden md:flex items-center gap-6">
            {sections.map(s => (
              <a
                key={s.id}
                href={s.href}
                className={cn(
                  "relative px-2 py-1 rounded focus-ring",
                  active === s.id
                    ? "text-accent font-semibold after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-6 after:bg-accent rounded"
                    : "opacity-80 hover:opacity-100"
                )}
              >
                {s.label}
              </a>
            ))}
          </nav>

          {/* Right side - Socials + ThemeToggle + Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <a
              className="p-2 rounded focus-ring"
              href="https://github.com/SajalJain-4S-57"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub />
            </a>
            <a
              className="p-2 rounded focus-ring"
              href="https://www.linkedin.com/in/sajal-jain-0a2430318/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin />
            </a>
            <a
              className="p-2 rounded focus-ring"
              href="mailto:sajaljain8103@gmail.com"
              onClick={(e) => {
                e.preventDefault();
                const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=sajaljain8103@gmail.com`;
                window.open(gmailUrl, "_blank");
              }}
              aria-label="Email"
            >
              <FiMail />
            </a>
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded focus-ring"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <FiMenu />
            </button>
          </div>
        </div>
      </header>

      {/* Drawer outside header */}
      <MobileDrawer
        open={open}
        onClose={() => setOpen(false)}
        items={sections}
        active={active}
      />
    </>
  );
}
