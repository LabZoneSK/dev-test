/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2C2C2C",
        secondary: "#0B868B",
        explore: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
