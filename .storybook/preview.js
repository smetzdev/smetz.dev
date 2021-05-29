import { withGlobalStyles } from "./custom-decorators"
import { customViewports } from "./custom-viewports"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: customViewports,
  },
}
export const decorators = [withGlobalStyles]
