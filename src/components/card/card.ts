import tw, { styled } from "twin.macro"

export const Card = styled.article<CardProps>`
  ${tw`block bg-gray-700 rounded-default`}
`

export type CardProps = {
  title?: string
  //if shown as a
  target?: string
  rel?: string
  href?: string
  // if shown as gatsby-link
  to?: string
}
