import "twin.macro"
import { StaticImage } from "gatsby-plugin-image"
import { Layout, SEO } from "../components"

const IndexPage = () => (
  <Layout>
    <SEO title="Hello" />
    <div tw="w-screen h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-gray-50 to-white">
      <h1>
        <StaticImage
          tw="w-24 h-auto rounded-full"
          src="../images/smetzdev.jpg"
          alt="@smetzdev"
        />
      </h1>
      <ul tw="flex space-x-6 mt-4 text-gray-500">
        <li>
          <a
            tw="hover:text-gray-800 transition-colors"
            href="mailto:hello@smetz.dev"
          >
            Mail
          </a>
        </li>
        <li>
          <a
            tw="hover:text-gray-800 transition-colors"
            href="https://github.com/smetzdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            tw="hover:text-gray-800 transition-colors"
            href="https://twitter.com/smetzdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            tw="hover:text-gray-800 transition-colors"
            href="https://www.instagram.com/smetzdev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Insta
          </a>
        </li>
        <li>
          <a
            tw="hover:text-gray-800 transition-colors"
            href="https://dev.to/smetzdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dev.to
          </a>
        </li>
      </ul>
    </div>
  </Layout>
)

export default IndexPage
