/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        'jetbrains-100': ['jetbrains-100'],
        'jetbrains-i-100': ['jetbrains-i-100'],
        'jetbrains-200': ['jetbrains-200'],
        'jetbrains-i-200': ['jetbrains-i-200'],
        'jetbrains-300': ['jetbrains-300'],
        'jetbrains-i-300': ['jetbrains-i-300'],
        'jetbrains-400': ['jetbrains-400'],
        'jetbrains-i-400': ['jetbrains-i-400'],
        'jetbrains-500': ['jetbrains-500'],
        'jetbrains-i-500': ['jetbrains-i-500'],
        'jetbrains-600': ['jetbrains-600'],
        'jetbrains-i-600': ['jetbrains-i-600'],
        'jetbrains-700': ['jetbrains-700'],
        'jetbrains-i-700': ['jetbrains-i-700'],
        'jetbrains-800': ['jetbrains-800'],
        'jetbrains-i-800': ['jetbrains-i-800'],
      },
    },
  },
  plugins: [],
};
