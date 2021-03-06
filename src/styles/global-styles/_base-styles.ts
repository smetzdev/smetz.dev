import tw, { css } from "twin.macro"

export const baseStyles = css`
  body {
    ${tw`text-gray-300 bg-gray-900`}
  }
  *::-moz-selection {
    ${tw`text-gray-900 bg-primary`}
  }

  ::selection {
    ${tw`text-gray-900 bg-primary`}
  }

  a {
    ${tw`transition-colors text-primary-600 hover:text-primary-400`}
  }
`
