import tw, { styled } from "twin.macro"

export const Button = styled.button<ButtonProps>`
  ${tw`inline-block select-none rounded-default`}
  ${tw`px-4 py-2`}
  ${tw`font-semibold text-primary`}
  ${tw`border border-primary`}
  ${tw`transition-colors`}
  ${tw`hover:(text-gray-900 bg-primary)`}
  ${tw`active:(bg-primary-700 border-primary-700)`}
  ${tw`focus:(outline-none ring-primary-700 ring-2)`}
`

export type ButtonProps = {
  href?: string
}
