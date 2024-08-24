/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        teko: ['Teko', 'sans-serif'],
        royal: ['Marcellus SC', 'serif'],
      },
      fontWeight: {
        300: '300',
        400: '400',
        500: '500',
        600: '600',
        700: '700',
      },
      colors: {
        primary: {
          light: '#ffffff', // You can adjust the shades as needed
          DEFAULT: '#D9D9D9', // The main primary color
          dark: '#7A7878',
        },
        secondary:{
          DEFAULT: '#0C0F1C',
        }
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    function ({ addUtilities, theme }) {
      const newFontUtilities = {
        '.font-teko-300': {
          fontFamily: theme('fontFamily.teko'),
          fontWeight: theme('fontWeight.300'),
        },
        '.font-teko-400': {
          fontFamily: theme('fontFamily.teko'),
          fontWeight: theme('fontWeight.400'),
        },
        '.font-teko-500': {
          fontFamily: theme('fontFamily.teko'),
          fontWeight: theme('fontWeight.500'),
        },
        '.font-teko-600': {
          fontFamily: theme('fontFamily.teko'),
          fontWeight: theme('fontWeight.600'),
        },
        '.font-teko-700': {
          fontFamily: theme('fontFamily.teko'),
          fontWeight: theme('fontWeight.700'),
        },
        '.font-royal': {
          fontFamily: theme('fontFamily.royal'),
        },
      };
      addUtilities(newFontUtilities);
    },
  ],
}