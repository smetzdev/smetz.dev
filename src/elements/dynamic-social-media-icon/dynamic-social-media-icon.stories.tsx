import "twin.macro"
import { DynamicSocialMediaIcon } from "./index"
import IntroStories from "../../components/intro/intro.stories"

export default {
  title: "Elements/DynamicSocialMediaIcon",
  component: DynamicSocialMediaIcon,
}

export const Base = () => (
  <div>
    <h2 tw="text-2xl">Dynamic Icon</h2>
    <p>These Icons get rendered dynamically, based on the url prop</p>
    <p>The "fallback" icon is a globe</p>
    <div tw="grid grid-cols-3 gap-4 mt-8">
      {socialMediaLinks.map((socialMediaLink, key) => (
        <div
          key={key}
          tw="bg-gray-600 p-8 flex flex-col items-center justify-center"
        >
          <DynamicSocialMediaIcon tw="w-8 h-auto" url={socialMediaLink.href} />
          <p tw="mt-2">{socialMediaLink.title}</p>
        </div>
      ))}
    </div>
  </div>
)

// Helper
const socialMediaLinks = IntroStories.args.socialMediaLinks
