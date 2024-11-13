/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        colorOne: '#d2a56d',
        colorTwo: '#bd7e4a',
        colorThree: '#83502e',
        colorFour: 'black',
        colorFive: '#ffe8cd',
      },
      boxShadow: {
        custom: '0 0 15px #222',
      },
      screens: {
        'about-page': '1400px',
      },
    },
  },
  plugins: [],
};
