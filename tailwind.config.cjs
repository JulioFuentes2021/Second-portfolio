/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#64ffda',
      'btnBackground': '#133040',
      'background': '#0a192f',
      'textPrimary': '#ccd6f6',
      'textSecondary': '#8892b0',
      'bgMenu': '#112240'
    },
    extend: {},
  },
  plugins: [],
}