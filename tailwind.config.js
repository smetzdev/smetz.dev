const { primary, gray, white } = require("./designtokens/colors")

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary,
        gray,
        white,
      },
    },
  },
  variants: {},
  plugins: [],
}
