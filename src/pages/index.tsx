import "twin.macro"
import { Gravatar, Layout, SEO } from "../gatsby-components"
import { Intro } from "../components"
import IntroStories from "../components/intro/intro.stories"

const IndexPage = () => (
  <Layout>
    <SEO title="Hello" />
    <div tw="w-screen h-screen flex items-center">
      <Intro
        Image={<Gravatar tw="w-full h-full" />}
        socialMediaLinks={IntroStories.args.socialMediaLinks}
      />
    </div>
  </Layout>
)

export default IndexPage
