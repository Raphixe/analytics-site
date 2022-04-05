const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          primary: '#da373d',
          test: colors.blue[500]
        }
      },
    },
  },
  plugins: [],
}