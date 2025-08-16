import { motion } from 'framer-motion';

export default function Section({ id, children, className = '' }) {
  return (
    <section
      id={id}
      className={`py-12 md:py-20 overflow-hidden ${className}`}
      tabIndex={-1}
      aria-labelledby={`${id}-title`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.7,
          ease: [0.25, 0.1, 0.25, 1] // smoother cubic-bezier easing
        }}
        className="container mx-auto px-4 max-w-6xl"
      >
        {children}
      </motion.div>
    </section>
  );
}
