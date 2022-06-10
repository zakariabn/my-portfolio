/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFA500",
        primary_shade: "#FF8800",
        dark: "#000000e2",
        neutral: "#464646",
      },
      fontFamily: {
        "title-font": ['Inter', "sans-serif"],
      }
    },
  },
  plugins: [],
};
