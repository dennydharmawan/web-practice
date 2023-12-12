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
      ...colors
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#432ad8',
          50: '#ecf0ff',
          100: '#dde3ff',
          200: '#c2cbff',
          300: '#9ca7ff',
          400: '#7578ff',
          500: '#635bff',
          600: '#4e36f5',
          700: '#432ad8',
          800: '#3725ae',
          900: '#302689',
          950: '#1e1650',
          foreground: '#FFFFFF'
        },
        secondary: {
          DEFAULT: '#ECE9FE',
          foreground: '#432ad8',
          25: '#FBFAFF',
          50: '#F5F3FF',
          100: '#ECE9FE',
          200: '#DDD6FE',
          300: '#C3B5FD',
          400: '#A48AFB',
          500: '#875BF7',
          600: '#7839EE',
          700: '#6927DA',
          800: '#5720B7',
          900: '#491C96',
          950: '#2E125E'
        },
        accent: {
          DEFAULT: '#18E0F8',
          foreground: '#0F172A',
          50: '#ebffff',
          100: '#cdfdff',
          200: '#a1f8ff',
          300: '#60f1ff',
          400: '#18e0f8',
          500: '#00c3de',
          600: '#00a2c3',
          700: '#087b96',
          800: '#10637a',
          900: '#125267',
          950: '#053647'
        },
        error: {
          default: '#F04438',
          foreground: '#FFFFFF',
          25: '#FFFBFA',
          50: '#FEF3F2',
          100: '#FEE4E2',
          200: '#FECDCA',
          300: '#FDA29B',
          400: '#F97066',
          500: '#F04438',
          600: '#D92D20',
          700: '#B42318',
          800: '#912018',
          900: '#7A271A',
          950: '#55160C'
        },
        warning: {
          DEFAULT: '#F79009',
          foreground: '#FFFFFF',
          25: '#FFFCF5',
          50: '#FFFAEB',
          100: '#FEF0C7',
          200: '#FEDF89',
          300: '#FEC84B',
          400: '#FDB022',
          500: '#F79009',
          600: '#DC6803',
          700: '#B54708',
          800: '#93370D',
          900: '#7A2E0E',
          950: '#4E1D09'
        },
        success: {
          DEFAULT: '#12B76A',
          foreground: '#ffffff',
          25: '#F6FEF9',
          50: '#ECFDF3',
          100: '#DCFAE6',
          200: '#ABEFC6',
          300: '#75E0A7',
          400: '#47CD89',
          500: '#17B26A',
          600: '#079455',
          700: '#067647',
          800: '#085D3A',
          900: '#074D31',
          950: '#053321'
        },
        input: {
          DEFAULT: '#E2E8F0'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
