const colors = require("tailwindcss/colors")

module.exports = {
  primary: {
    50: "#FFF4E1",
    100: "#FFE2B4",
    200: "#FFCF84",
    300: "#FFBB52",
    400: "#FFAC2E",
    500: "#FF9E13",
    600: "#FF9111",
    700: "#EB570C",
    800: "#F4730E",
    900: "#EB570C",
    // DEFAULT has to be a string to work in tailwind
    // prettier-ignore
    "DEFAULT": "#FF9111",
  },
  gray: colors.trueGray,
}
