import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10">
      <div className="container mx-auto px-4 max-w-6xl h-16 flex items-center justify-center relative">
        {/* Social icons on the left */}
        <div className="flex items-center gap-3 absolute left-4">
          <a
            className="p-2 rounded focus-ring"
            href="https://github.com/SajalJain-4S-57"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            className="p-2 rounded focus-ring"
            href="https://www.linkedin.com/in/sajal-jain-0a2430318/"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a
            className="p-2 rounded focus-ring"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sajaljain8103@gmail.com"
            aria-label="Email"
          >
            <FiMail />
          </a>
        </div>

        {/* Centered copyright */}
        <p className="text-sm opacity-70 text-center">
          © {new Date().getFullYear()} Sajal Jain
        </p>
      </div>
    </footer>
  );
}
