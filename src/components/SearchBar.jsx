export default function SearchBar({ value, onChange, tags=[], selectedTag, onTag }) {
    return (
      <div className="flex flex-wrap items-center gap-3">
        <input
          type="search" value={value} onChange={e => onChange(e.target.value)}
          placeholder="Search by keyword…" aria-label="Search projects"
          className="px-4 py-2 rounded-md border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-900/80 focus-ring"
        />
        <div className="flex flex-wrap gap-2">
          {['All', ...tags].map(t => (
            <button key={t} onClick={() => onTag(t === 'All' ? null : t)}
                    className={`px-3 py-1 rounded-full border ${selectedTag===t ? 'bg-accent text-white' : 'border-black/10 dark:border-white/10'}`}>
              {t}
            </button>
          ))}
        </div>
      </div>
    );
  }
  