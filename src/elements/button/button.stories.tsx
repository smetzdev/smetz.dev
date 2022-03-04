import { Story } from "@storybook/react"
import { Button } from "./index"

export default {
  title: "Elements/Button",
  component: Button,
  args: {
    as: undefined,
    children: "I am a Button",
  },
}

const Template: Story = args => <Button {...args} />

export const Base = Template.bind({})
