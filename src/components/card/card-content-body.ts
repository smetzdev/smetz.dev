import tw, { styled } from "twin.macro"

export const CardContentBody = styled.div<CardContentBodyProps>`
  ${({ noMarginTop, noMarginBottom }) => [
    !noMarginTop && tw`mt-4`,
    !noMarginBottom && tw`mb-8`,
  ]}
`

export type CardContentBodyProps = {
  // Should be used if there is no element before the content
  noMarginTop?: boolean
  // Should be usef if there is no element after the content
  noMarginBottom?: boolean
}
