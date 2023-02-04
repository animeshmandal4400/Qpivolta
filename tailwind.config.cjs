/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "bg-dark": "rgba(30,30,30,255)",
        "bg-dark-variant": "#252526",
        "dark-variant": "#292929",
        light: "#4E9F3D",
        "light-variant": "#E0E0E0",
        red: "#ff0000",
        "red-light": "#f64a4a",
      },
    },
  },
  plugins: [],
};
