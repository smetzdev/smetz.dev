import "twin.macro"
import { Gravatar, Layout, SEO } from "../gatsby-components"

const IndexPage = () => (
  <Layout>
    <SEO title="Hello" />
    <div tw="w-screen h-screen flex flex-col items-center justify-center text-center">
      <h1>
        <Gravatar tw="w-32 h-auto" />
      </h1>
      <ul tw="flex space-x-6 mt-4">
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
