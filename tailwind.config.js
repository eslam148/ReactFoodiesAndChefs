/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        'main-color': 'rgb(250 136 54)',
        'main-dark-color': '#CF5600'
      },
      clipPath: {
        rhombus: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
      },

    },
  },
  plugins: [],
}

