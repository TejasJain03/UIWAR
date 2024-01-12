/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkColor: '#333',
        beigeColor: '#f6f60',
      },
      fontFamily: {
        bangers: ['Bangers', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif'],
        'playfair-display': ['Playfair Display', 'serif'],
        raleway: ['Raleway', 'sans-serif'],
        syncopate: ['Syncopate', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
