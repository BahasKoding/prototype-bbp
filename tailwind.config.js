/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B3C35',
          light: '#A8D5BA'
        },
        secondary: '#FFB800',
        neutral: {
          light: '#F5F5F5',
          dark: '#2C2C2C'
        },
        accent: {
          gold: '#D4AF37',
          emerald: '#004B49'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'elegant': '0 4px 20px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
};