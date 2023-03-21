/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '650px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'lightCyan': 'hsl(193, 38%, 86%)',
        'neonGreen': 'hsl(150, 100%, 66%)',
        'greyBlue': 'hsl(217, 19%, 38%)',
        'darkGBlue': 'hsl(217, 19%, 24%)',
        'darkBlue': 'hsl(218, 23%, 16%)'
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      }
    },
  },
  plugins: [],
}