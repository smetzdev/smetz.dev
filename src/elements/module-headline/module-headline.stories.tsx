import { Story } from "@storybook/react"
import { ModuleHeadline } from "./index"

export default {
  title: "Elements/ModuleHeadline",
  component: ModuleHeadline,
  args: {
    children: "Module Headline",
  },
}

const Template: Story = ({ children }) => (
  <ModuleHeadline>{children}</ModuleHeadline>
)

export const Base = Template.bind({})

export const LongHeadline = Template.bind({})
LongHeadline.args = {
  children:
    "Iam a really long headline, who would do something like that? More people than you might think!",
}
