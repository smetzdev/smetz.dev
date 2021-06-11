const { primary, gray, white } = require("./designtokens/colors")
const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
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
