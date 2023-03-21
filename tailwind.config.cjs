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
        'light-red': 'hsl(0, 100%, 67%)',
        'orange-yellow': 'hsl(39, 100%, 56%)',
        'green-teal': 'hsl(166, 100%, 37%)',
        'co-blue': 'hsl(234, 85%, 45%)',
        'pale-blue': 'hsl(221, 100%, 96%)',
        'light-lavender': 'hsl(241, 100%, 89%)',
        'dark-g-blue': 'hsl(224, 30%, 27%)'
      },
      fontFamily: {
        sans: ['Hanken Grotesk', 'sans-serif'],
      }
    },
  },
  plugins: [],
}