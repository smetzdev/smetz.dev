import { Link } from "gatsby"
import "twin.macro"
import { StaticImage } from "gatsby-plugin-image"
import { Layout, SEO } from "../components"

const IndexPage = () => (
  <Layout>
    <SEO title="404 - Page not found" />
    <div tw="w-screen h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-gray-50 to-white">
      <h1>
        <StaticImage
          tw="w-24 h-auto rounded-full"
          src="../images/smetzdev.jpg"
          alt="@smetzdev"
        />
      </h1>
      <p tw="text-gray-500 mt-4">
        Page not found...{" "}
        <Link tw="hover:text-gray-800 transition-colors underline" to="/">
          Go to Homepage
        </Link>
      </p>
    </div>
  </Layout>
)

export default IndexPage
