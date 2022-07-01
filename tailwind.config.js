/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': 'Rosario, sans-serif'
      },
      colors: {
        'primary': '#0B868B'
      }
    },
  },
  plugins: [],
}
