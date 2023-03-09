/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './public/**/*.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
