import "twin.macro"
import { ModuleHeadline, ExternalLink } from "../../elements"

export const Intro = ({ Image, socialMediaLinks }: IntroProps) => {
  return (
    <section tw="text-xl sm:text-2xl container">
      <header tw="flex items-center space-x-8">
        <div tw="rounded-full overflow-hidden w-24 h-24 bg-primary inline-block sm:(w-40 h-40)">
          {Image}
        </div>
        <ModuleHeadline as="h1">Hi, I am Sascha</ModuleHeadline>
      </header>
      <article tw="mt-8 leading-relaxed max-w-2xl space-y-4">
        <p>
          I started webdevelopment in 2012 and consider myself a{" "}
          <ExternalLink href="https://www.youtube.com/watch?v=HtTUsOKjWyQ">
            professional
          </ExternalLink>{" "}
          since 2015.
        </p>
        <p>
          I come from a classic WordPress background but would call myself a{" "}
          <ExternalLink href="https://jamstack.org/">jamstack</ExternalLink>
          -enthusiast nowadays.
        </p>
        <p>
          I am currently working for two awesome companies called{" "}
          <ExternalLink href="https://www.gorillafunds.io/">
            Gorilla Funds
          </ExternalLink>{" "}
          and <ExternalLink href="https://azury.one">Azury</ExternalLink>.
        </p>
        <div tw="mt-8!">
          <p>Feel free to read more or reach out:</p>
          <ul tw="flex space-x-4">
            {socialMediaLinks.map((link, key) => (
              <li key={key}>
                <ExternalLink href={link.href} title={link.title}>
                  {link.title}
                </ExternalLink>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  )
}

export type IntroProps = {
  Image: JSX.Element
  socialMediaLinks: {
    title: string
    href: string
  }[]
}
