// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // enables class-based dark mode support
  theme: {
    extend: {
      fontFamily: {
        sans: ['"InterVariable"','sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
};
