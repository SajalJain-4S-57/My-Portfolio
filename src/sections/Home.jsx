import { motion } from 'framer-motion';
import ProfilePhoto from '../components/ProfilePhoto';
import { FiDownload } from 'react-icons/fi';

export default function Home() {
  return (
    <section id="home" className="pt-24 pb-20 relative overflow-hidden">
      {/* Animated gradient header background */}
      <div className="absolute -z-10 inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_200%] animate-gradient-pan opacity-20 dark:opacity-15" />
      {/* Optional floating blobs */}
      <div className="absolute -z-10 top-20 -left-16 w-72 h-72 bg-primary/30 dark:bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute -z-10 bottom-10 -right-16 w-72 h-72 bg-accent/30 dark:bg-accent/20 rounded-full blur-3xl animate-float" />

      <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center gap-6">
  <div className="flex justify-center">
    <ProfilePhoto className="w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-80" />
  </div>
  <div className="text-center md:text-left">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
      Hi, I’m <span className="text-accent">Sajal Jain</span> — Frontend Developer crafting fast, accessible web apps.
    </h1>
    <p className="mt-4 text-base sm:text-lg opacity-80 max-w-2xl mx-auto md:mx-0">
      I focus on clean, maintainable code, responsive design, and seamless user experiences.
    </p>
    <div className="mt-8 flex gap-4 flex-wrap justify-center md:justify-start">
      <a
        href="/resume.pdf"
        download
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-semibold shadow hover:shadow-lg transition focus-ring"
        aria-label="Download resume PDF"
      >
        <FiDownload /> Download Resume
      </a>
      <a
        href="#projects"
        className="px-6 py-3 rounded-full border border-black/10 dark:border-white/10 hover:shadow focus-ring"
      >
        View Projects
      </a>
    </div>
  </div>
</div>

    </section>
  );
}