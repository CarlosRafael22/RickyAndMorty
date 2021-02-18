import { Story, Meta } from '@storybook/react'
import Profile, { ProfileProps } from '.'

export default {
    title: 'Profile',
    component: Profile
} as Meta

const Template: Story<ProfileProps> = args => <Profile {...args} />

export const Default = Template.bind({})
Default.args = {
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    name: 'Rick and Morry',
    status: 'Dead',
    species: 'Alien'
}