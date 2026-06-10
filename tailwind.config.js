/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy:       '#0B1E5C',
          'navy-mid': '#0B2455',
          'navy-dark':'#060E2D',
          sky:        '#29ABE2',
          'sky-hover':'#1E95CA',
          'sky-light':'#E8F7FD',
          green:      '#4CB847',
          'green-dark':'#2D8B27',
          'green-light':'#E8F5E4',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      animation: {
        'fade-up':    'fadeUp 0.65s ease-out forwards',
        'fade-in':    'fadeIn 0.5s ease-out forwards',
        'float':      'float 6s ease-in-out infinite',
        'spin-slow':  'spin 12s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(22px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
