/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#bde5e1',
        accent:  '#f88767',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'ui-sans-serif', 'Arial'],
      },
      keyframes: {
        'bg-pan': {
          '0%':   { backgroundPosition: '0% 50%' },
          '50%':  { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'float': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        'gradient-pan': 'bg-pan 8s ease infinite',
        float: 'float 6s ease-in-out infinite',
      },
      boxShadow: {
        glow: '0 0 0 6px rgba(189,229,225,0.35)',
      },
    },
  },
  plugins: [],
};
