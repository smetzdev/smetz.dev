import { iconData } from "./icon-data"

export const getIconName = (url: string): IconName => {
  let iconName

  // If we have an email, the domain name is "mail"
  if (url.includes("@")) iconName = "mail"
  else {
    const { hostname } = new URL(url)
    /*
     * We assume that the hostname looks
     * like one of the following schemas:
     * - domain.tld
     * - subdomain.domain.tld
     */
    const hostnameParts = hostname.split(".")
    iconName = hostnameParts.length === 3 ? hostnameParts[1] : hostnameParts[0]
  }

  /*
   * return iconName if it's a valid iconName
   * else return "globe"
   */
  return socialMediaProviders.indexOf(iconName as IconName) > -1
    ? (iconName as IconName)
    : "globe"
}

// Helper
const socialMediaProviders = Object.keys(iconData) as IconName[]
type IconName = keyof typeof iconData
