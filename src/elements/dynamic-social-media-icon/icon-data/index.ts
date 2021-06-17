import { iconDataProps } from "./icon-data"

import { globe } from "./globe"
import { instagram } from "./instagram"
import { mail } from "./mail"
import { twitter } from "./twitter"
import { github } from "./github"
import { dev } from "./dev"

export const iconData = {
  globe,
  instagram,
  mail,
  twitter,
  github,
  dev,
}

export type iconDataObject = {
  [key: string]: iconDataProps
}
