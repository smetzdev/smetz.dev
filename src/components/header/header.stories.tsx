import React from "react"
import { Header, HeaderProps } from "./header"

export default {
  title: "Components/Header",
  args: {
    siteTitle: "Site Title",
  },
}

export const Base = (args: HeaderProps) => <Header {...args} />
