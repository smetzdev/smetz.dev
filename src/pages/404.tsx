import { Link } from "gatsby"
import "twin.macro"
import { Gravatar, Layout, SEO } from "../gatsby-components"

const IndexPage = () => (
  <Layout>
    <SEO title="404 - Page not found" />
    <div tw="w-screen h-screen flex flex-col items-center justify-center text-center">
      <h1>
        <Gravatar />
      </h1>
      <p tw="mt-4">
        Page not found...{" "}
        <Link tw="hover:text-primary transition-colors underline" to="/">
          Go to Homepage
        </Link>
      </p>
    </div>
  </Layout>
)

export default IndexPage
