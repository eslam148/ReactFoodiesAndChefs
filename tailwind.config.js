/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        ledger: ['Ledger', 'serif'],
      },
      colors: {
        'main-color': 'rgb(250 136 54)',
        'main-dark-color': '#CF5600',
        'main-green-color': '#128000',
        
      },
      clipPath: {
        rhombus: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "scale(0.95)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },
      screens: {
        "xl": "1240px",
      }
    },
  },
  plugins: [],
}

