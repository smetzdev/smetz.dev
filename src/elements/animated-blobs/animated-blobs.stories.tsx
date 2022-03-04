import { AnimatedBlobs } from "./index"
import "twin.macro"

export default {
  title: "Elements/AnimatedBlobs",
  component: AnimatedBlobs,
}

export const Base = () => (
  <div tw="fixed bottom-0 right-0 w-1/3 h-1/2 animate-spin animation-duration[20s]">
    <AnimatedBlobs />
  </div>
)
