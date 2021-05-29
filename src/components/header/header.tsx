import * as React from "react"
import "twin.macro"
/* import { Link } from "gatsby" */

export const Header = ({ siteTitle = "" }: HeaderProps) => (
  <header tw="bg-gatsby-purple mb-6">
    <div tw="container py-6">
      <h1 tw="m-0 text-white">
        {/* <Link to="/" tw="text-white no-underline"> */}
        {siteTitle}
        {/* </Link> */}
      </h1>
    </div>
  </header>
)

export type HeaderProps = {
  siteTitle: string
}
