/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      gridTemplateColumns: {
        auto: 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        ovo: ['Ovo', 'serif'],
      },
      colors: {
        darkTheme: '#11001F',
      },
    },
  },
  darkMode: 'selector',
  plugins: [],
};
