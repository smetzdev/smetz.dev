import "twin.macro"
import { iconData } from "./icon-data"
import { getIconName } from "./get-icon-name"

export const DynamicSocialMediaIcon = ({
  url,
  ...props
}: DynamicSocialMediaIconProps) => {
  const iconName = getIconName(url)
  const { width, height, Paths } = iconData[iconName]
  return (
    <svg
      {...props}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      {Paths}
    </svg>
  )
}

export type DynamicSocialMediaIconProps = {
  url: string
}
