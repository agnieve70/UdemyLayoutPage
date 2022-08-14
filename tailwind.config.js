/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Rubik', 'sans-serif']
    },
    extend: {
      colors: {
        'secondary1': '#26819d',
        'pink1': '#ee1b67',
        'darkblue1': '#040633',
        'yellow1':'#facc15'
      }
    },
    
  },
  plugins: [],
}
