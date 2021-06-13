import { Activities, ActivitiesProps } from "./index"
import faker from "faker"

export default {
  title: "Components/Activities",
  args: {
    activities: Array.from({ length: 6 }, () => ({
      title: faker.random.words(3),
      text: faker.lorem.paragraph(),
      href: faker.random.arrayElement(["twitter.com", "github.com", "dev.to"]),
    })),
  },
}

export const Base = (args: ActivitiesProps) => <Activities {...args} />
