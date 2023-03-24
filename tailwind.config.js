/** @type {import('tailwindcss').Config} */
const config = {
  content: ['**/pages/**/*.tsx', '**/components/**/*.tsx'],
  darkMode: 'class',
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};

module.exports = config;
