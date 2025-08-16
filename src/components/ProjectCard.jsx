import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

export default function ProjectCard({ p }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="group relative rounded-xl overflow-hidden border border-black/5 dark:border-white/10 hover:shadow-lg flex flex-col"
    >
      {/* Image always on top */}
      <img
        src={p.image}
        alt=""
        className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Content grows to fill space */}
      <div className="p-4 flex flex-col flex-1">
        <div>
          <div className="font-semibold text-lg">{p.title}</div>
          <p className="opacity-80 line-clamp-2">{p.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-1 rounded-full bg-primary/40 dark:bg-primary/20"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Links always stick to bottom */}
        <div className="mt-auto pt-3 flex gap-3">
          <a
            href={p.links.demo}
            className="inline-flex items-center gap-1 focus-ring"
          >
            Demo <FiExternalLink />
          </a>
          <a
            href={p.links.code}
            className="inline-flex items-center gap-1 focus-ring"
          >
            Code <FiGithub />
          </a>
        </div>
      </div>

      {/* Overlay effect */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
    </motion.div>
  );
}
