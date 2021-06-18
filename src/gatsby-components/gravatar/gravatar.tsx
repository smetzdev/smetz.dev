import { StaticImage } from "gatsby-plugin-image"
import "twin.macro"

// https://de.gravatar.com/site/implement/images/
const gravatarURL =
  "https://www.gravatar.com/avatar/fb6a9efd248314aad6fece7135ecfe0d?size=250"

export const Gravatar = ({ className }: GravatarProps) => {
  return (
    <StaticImage
      tw="rounded-full"
      className={className}
      src={gravatarURL}
      alt="@smetzdev"
    />
  )
}

export type GravatarProps = {
  className?: string
}
