import { Intro, IntroProps } from "./index"

export default {
  title: "Components/Intro",
  args: {
    Image: <img src="https://picsum.photos/500/500" alt="Dummy" />,
    socialMediaLinks: [
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
    ],
  },
}

export const Base = (args: IntroProps) => <Intro {...args} />
