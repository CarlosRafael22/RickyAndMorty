import { Story, Meta } from '@storybook/react'
import Spinner from '.'

export default {
    title: 'Spinner',
    component: Spinner
} as Meta

const Template: Story = args => <Spinner {...args} />
export const Default = Template.bind({})