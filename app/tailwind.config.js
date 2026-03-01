/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#00033D",
          blue: "#0600AB",
          light: "#0033FF",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
 