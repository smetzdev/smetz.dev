// @ts-ignore
import React from "react"
import "twin.macro"
import { Blob } from "./_blob"

export const AnimatedBlobs = () => (
  <>
    <Blob tw="top-0 -left-4 w-72 h-72 bg-blue-400" />
    <Blob tw="top-0 -right-4 w-72 h-72 bg-yellow-300 animation-delay[2s]" />
  </>
)
