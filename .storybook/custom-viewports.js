import { theme } from "twin.macro"

export const customViewports = {
  iphone5: {
    name: "Iphone 5/SE",
    styles: {
      width: "320px",
      height: "568px",
    },
    type: "mobile",
  },
  iphoneX: {
    name: "Iphone X",
    styles: {
      width: "375px",
      height: "812px",
    },
    type: "mobile",
  },
  tailwindSM: {
    name: "Tailwind SM",
    styles: {
      width: theme`screens.sm`,
      height: "720px",
    },
    type: "tablet",
  },
  tailwindMD: {
    name: "Tailwind MD",
    styles: {
      width: theme`screens.md`,
      height: "720px",
    },
    type: "tablet",
  },
  tailwindLG: {
    name: "Tailwind LG",
    styles: {
      width: theme`screens.lg`,
      height: "720px",
    },
  },
  tailwindXL: {
    name: "Tailwind XL",
    styles: {
      width: theme`screens.xl`,
      height: "720px",
    },
  },
}
