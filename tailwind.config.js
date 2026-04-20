/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FBF7F0',
        blush: '#F2C4CE',
        rose: '#E8A0AF',
        dustyrose: '#C97D8A',
        gold: '#C9A84C',
        lightgold: '#E8D5A3',
        champagne: '#F7EED3',
        sage: '#8FAE88',
        charcoal: '#2C2C2C',
        warmgray: '#7A7068',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #E8D5A3 50%, #C9A84C 100%)',
        'blush-gradient': 'linear-gradient(135deg, #F2C4CE 0%, #FBF7F0 100%)',
      },
    },
  },
  plugins: [],
}
