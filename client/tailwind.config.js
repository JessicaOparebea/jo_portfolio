/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Inspiration: ['Inspiration', 'cursive'],
        Iceberg: ['Iceberg', 'sans-serif'],
        InriaSerif: ['Inria Serif', 'serif'],
        RibeyeMarrow: ['Ribeye Marrow', 'serif'],
        RhodiumLibre: ['Rhodium Libre', 'serif']
      }
    }
  },
  plugins: []
}
