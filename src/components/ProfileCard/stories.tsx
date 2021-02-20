import { Story, Meta } from '@storybook/react'
import ProfileCard, { ProfileCardProps } from '.'

export default {
    title: 'ProfileCard',
    component: ProfileCard
} as Meta

const Template: Story<ProfileCardProps> = (args: ProfileCardProps) => <ProfileCard {...args} />

export const Default = Template.bind({})
Default.args = {
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    name: 'Rick and Morry',
    status: 'Dead',
    species: 'Alien',
    origin: 'Earth',
    location: 'Gaia',
    numberOfEpisodes: 13
}