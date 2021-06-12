import tw, { styled } from "twin.macro"

export const ModuleHeadline = styled.h2`
  ${tw`inline-block text-3xl font-semibold text-white`}
  ${tw`before:(content block w-full h-1 bg-primary)`}
  ${tw`after:(content block w-full h-1 bg-primary)`}
  ${tw`sm:(text-5xl before:(h-2 mb-2) after:(h-2 mt-2))`}
`
