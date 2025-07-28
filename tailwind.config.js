/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      // Fix for the oklab issue (removes 'in oklab' from gradient)
      gradientColorStops: {
        'from-green': '#86efac',
        'via-blue': '#93c5fd',
        'to-purple': '#d8b4fe',
      },
    },
  },
  plugins: [],
}
