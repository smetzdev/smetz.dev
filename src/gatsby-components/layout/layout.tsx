/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import "twin.macro"
import { GlobalStyles } from "../../styles"
import { AnimatedBlobs } from "../../elements"

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <GlobalStyles />
      <main tw="py-16 sm:py-0">{children}</main>
      <div tw="hidden lg:(block fixed bottom-0 right-0 w-1/3 h-1/2 animate-spin animation-duration[20s])">
        <AnimatedBlobs />
      </div>
    </>
  )
}

export type LayoutProps = {
  children: React.ReactNode
}
