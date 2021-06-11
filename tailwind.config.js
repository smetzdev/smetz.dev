const customColors = require("./designtokens/colors")
const { fontFamily, borderRadius } = require("tailwindcss/defaultTheme")

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
      colors: customColors,
      borderRadius: {
        default: borderRadius.xl,
      },
    },
  },
  variants: {},
  plugins: [],
}
