import React from "react"
import { GlobalStyles } from "../src/styles"

export const withGlobalStyles = Story => (
  <>
    <GlobalStyles />
    {Story()}
  </>
)
