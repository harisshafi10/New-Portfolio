/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
};