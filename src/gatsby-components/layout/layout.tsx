/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import "twin.macro"
import { GlobalStyles } from "../../styles"

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <GlobalStyles />
      <main>{children}</main>
    </>
  )
}

export type LayoutProps = {
  children: React.ReactNode
}
