import { StaticImage } from "gatsby-plugin-image"
import "twin.macro"

// https://de.gravatar.com/site/implement/images/
const gravatarURL =
  "https://www.gravatar.com/avatar/fb6a9efd248314aad6fece7135ecfe0d?size=500"

export const Gravatar = () => {
  return (
    <StaticImage
      tw="w-24 h-auto rounded-full"
      src={gravatarURL}
      alt="@smetzdev"
    />
  )
}
