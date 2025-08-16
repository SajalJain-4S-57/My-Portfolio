import { useMemo, useState } from 'react';
import Section from '../components/Section';
import SearchBar from '../components/SearchBar';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  const [q, setQ] = useState('');
  const allTags = useMemo(() => [...new Set(projects.flatMap(p => p.tags))], []);
  const [tag, setTag] = useState(null);
  const [visible, setVisible] = useState(6);

  const filtered = projects.filter(p => {
    const matchQ = [p.title, p.description, ...p.tags].join(' ').toLowerCase().includes(q.toLowerCase());
    const matchT = tag ? p.tags.includes(tag) : true;
    return matchQ && matchT;
  });

  return (
    <Section id="projects">
      <h2 id="projects-title" className="text-3xl md:text-4xl font-display font-bold mb-6">Projects</h2>
      <SearchBar value={q} onChange={setQ} tags={allTags} selectedTag={tag} onTag={setTag} />

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.slice(0, visible).map(p => <ProjectCard key={p.title} p={p} />)}
      </div>

      {filtered.length > visible && (
        <div className="mt-8 text-center">
          <button className="px-5 py-2 rounded-full border border-black/10 dark:border-white/10 hover:shadow focus-ring"
                  onClick={() => setVisible(v => v + 6)}>
            Show more
          </button>
        </div>
      )}
      {visible > 6 && (
        <div className="mt-4 text-center">
          <button className="text-sm opacity-80 underline focus-ring" onClick={() => setVisible(6)}>Show less</button>
        </div>
      )}
    </Section>
  );
}
