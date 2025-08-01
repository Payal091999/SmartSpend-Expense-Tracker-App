/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greenish: "#86efac",
        bluish: "#93c5fd",
        purplish: "#d8b4fe",
      },
    },
  },
  plugins: [],
};
