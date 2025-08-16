import Section from '../components/Section';
import { skills } from '../data/skills';
import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <Section id="skills">
      <h2
        id="skills-title"
        className="text-3xl md:text-4xl font-display font-bold mb-8"
      >
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
  {skills.map((skill, i) => (
    <motion.div
      key={skill.label}
      className="flex flex-col items-center justify-center 
                 bg-[#bde5e1] dark:bg-[#121212] 
                 shadow-md rounded-xl p-6 cursor-pointer"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, y: -5, boxShadow: '0px 20px 30px rgba(0,0,0,0.2)' }}
      transition={{ delay: i * 0.1, type: 'spring', stiffness: 100 }}
      viewport={{ once: true }}
    >
      <skill.icon className="text-5xl mb-3 text-[#f88767]" />
      <span className="text-lg font-medium">{skill.label}</span>
    </motion.div>
  ))}
</div>

    </Section>
  );
}
