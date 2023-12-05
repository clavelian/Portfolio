/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      'mobile': {'min':'360px', 'max':'767px'},
      // => @media (min-width: phone max 428) {...}
      'tablet': {'min':'768px', 'max':'1023px'},
      // => @media (min-width: tablet) { ... }
      'laptop': {'min':'1024px','max':'2400px'},
      // => @media (min-width: laptop & desktop) { ... }
    },
    extend: {
      fontFamily:{
        Mon: "'Montserrat', serif",
        Outift: "'Outfit', serif",
      }
    },
  },
  plugins: [],
}
