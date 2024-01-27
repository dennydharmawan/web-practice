/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-env node */
/** @type {import('tailwindcss').Config} */
const colors = require('./tailwind.color');

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      black: '#000000',
      paper: 'rgb(var(--background-color) / <alpha-value>)',
      ...colors
    },
    extend: {
      screens: {
        xs: '320px'
      },
      backgroundImage: {
        'grid-white': `url(
          "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.06)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e"
        )`
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')]
};
