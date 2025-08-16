import { useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage('theme', 'system');

  useEffect(() => {
    const root = document.documentElement;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const wantDark = theme === 'dark' || (theme === 'system' && prefersDark);
    root.classList.toggle('dark', wantDark);
  }, [theme]);

  return (
    <div className="flex items-center gap-2" aria-label="Theme toggle">
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="p-2 rounded-md focus-ring"
        aria-pressed={theme === 'dark'}
        title="Toggle theme"
      >
        {document.documentElement.classList.contains('dark') ? <FiSun /> : <FiMoon />}
      </button>
    </div>
  );
}
