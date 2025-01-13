/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue}',
    './src/*.vue'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
      }
    },
  },
  plugins: [],
}
