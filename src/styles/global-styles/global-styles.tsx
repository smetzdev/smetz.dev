import React from "react"
import { GlobalStyles as TwinMacroGlobalStyles } from "twin.macro"
import { Global } from "@emotion/react"
import { layoutCSS } from "./layout"

export const GlobalStyles = () => (
  <>
    <TwinMacroGlobalStyles />
    <Global styles={layoutCSS} />
  </>
)
