const defaultConfig = require('tailwindcss/defaultConfig');
const colors = require('./colors.json');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors,
      fontFamily: {
        display: ['Oswald', ...defaultConfig.theme.fontFamily.sans],
        sans: ['Roboto', ...defaultConfig.theme.fontFamily.sans],
      },
    },
  },
  plugins: [
    // https://github.com/tailwindlabs/tailwindcss-aspect-ratio#readme
    require('@tailwindcss/aspect-ratio'),
    // https://github.com/tailwindlabs/tailwindcss-typography#readme
    require('@tailwindcss/typography'),
    // https://github.com/tailwindlabs/tailwindcss-forms#readme
    require('@tailwindcss/forms'),
  ],
};
