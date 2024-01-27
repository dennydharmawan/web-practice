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
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')]
};
