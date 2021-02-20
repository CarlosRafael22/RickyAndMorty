import { Story, Meta } from '@storybook/react'
import ProfileHeader, { ProfileHeaderProps } from '.'

export default {
    title: 'ProfileHeader',
    component: ProfileHeader
} as Meta

const Template: Story<ProfileHeaderProps> = (args: ProfileHeaderProps) => <ProfileHeader {...args} />

export const Default = Template.bind({})
Default.args = {
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    name: 'Rick and Morry',
    status: 'Dead',
    species: 'Alien',
    showAs: 'card'
}