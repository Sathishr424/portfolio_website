/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif']
      },
      colors: {
        'black-custom': '#353537',
        'gray-custom': '#7B7B7D',
        'green-custom': '#6DB432',
        'light-green-custom': '#8BC064',
      }
    },
  },
  plugins: [],
}

