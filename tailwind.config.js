/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')({ nocompatible: true })],
};
