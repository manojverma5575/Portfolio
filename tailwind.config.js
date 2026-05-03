/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        blue: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
          950: '#0F1F4D',
        },
      },
      animation: {
        'float': 'float 7s ease-in-out infinite',
        'float-slow': 'float 11s ease-in-out infinite',
        'pulse-blue': 'pulseBlue 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'morph': 'morph 10s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'wave': 'wave 1.8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-18px) rotate(1deg)' },
          '66%': { transform: 'translateY(-8px) rotate(-1deg)' },
        },
        pulseBlue: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(37, 99, 235, 0)' },
          '50%': { boxShadow: '0 0 0 12px rgba(37, 99, 235, 0.15)' },
        },
        morph: {
          '0%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        wave: {
          '0%, 60%, 100%': { transform: 'initial' },
          '30%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'grid-blue': 'linear-gradient(rgba(37,99,235,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.06) 1px, transparent 1px)',
        'grid-light': 'linear-gradient(rgba(37,99,235,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.05) 1px, transparent 1px)',
        'shimmer-gradient': 'linear-gradient(90deg, transparent 0%, rgba(96,165,250,0.4) 50%, transparent 100%)',
      },
      backgroundSize: { 'grid': '48px 48px' },
    },
  },
  plugins: [],
}