/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        grit: {
          black: "#111111",
          parchment: "#E3DAC9",
          weld: "#F58220",
          steel: "#D9D4CD"
        }
      },
      fontFamily: {
        western: ['Cinzel', 'serif'],
        header: ['Anton', 'sans-serif'],
        stamp: ['Bebas Neue', 'sans-serif']
      }
    }
  },
  plugins: [],
}
