import "twin.macro"
import { StaticImage } from "gatsby-plugin-image"
import { Layout, SEO } from "../components"
import { Gravatar } from "../gatsby-components"

// https://de.gravatar.com/site/implement/images/
const gravatarURL =
  "https://www.gravatar.com/avatar/fb6a9efd248314aad6fece7135ecfe0d?size=500"

const IndexPage = () => (
  <Layout>
    <SEO title="Hello" />
    <div tw="w-screen h-screen flex flex-col items-center justify-center text-center bg-gray-900 text-white">
      <h1>
        <Gravatar />
      </h1>
      <ul tw="flex space-x-6 mt-4 text-gray-300">
        {links.map(link => (
          <li key={link.title.toLowerCase()}>
            <a tw="hover:text-primary transition-colors" href={link.href}>
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

const links = [
  {
    title: "Mail",
    href: "mailto:hello@smetz.dev",
  },
  {
    title: "GitHub",
    href: "https://github.com/smetzdev",
  },
  {
    title: "Twitter",
    href: "https://twitter.com/smetzdev",
  },
  {
    title: "Dev.to",
    href: "https://dev.to/smetzdev",
  },
  {
    title: "Insta",
    href: "https://www.instagram.com/smetzdev/",
  },
]

export default IndexPage
