/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff0a54',
          light: '#ff477e',
          lighter: '#ff99ac',
        },
        secondary: {
          DEFAULT: '#ff5c8a',
          light: '#f7cad0',
        },
        neutral: {
          dark: '#121212',
          base: '#f7cad0',
        },
      }
    },
  },
  plugins: [],
}