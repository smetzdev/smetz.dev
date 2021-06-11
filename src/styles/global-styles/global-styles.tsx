// @ts-ignore
import React from "react"
import { GlobalStyles as TwinMacroGlobalStyles } from "twin.macro"
import { Global } from "@emotion/react"
import { baseStyles } from "./_base-styles"
import "@fontsource/inter/latin.css"

export const GlobalStyles = () => (
  <>
    <TwinMacroGlobalStyles />
    <Global styles={baseStyles} />
  </>
)
