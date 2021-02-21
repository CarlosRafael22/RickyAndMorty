import { Story, Meta } from '@storybook/react'
import ProfilesSection, { ProfilesSectionProps } from '.'

export default {
    title: 'ProfilesSection',
    component: ProfilesSection
} as Meta

const Template: Story<ProfilesSectionProps> = (args: ProfilesSectionProps) => <ProfilesSection {...args} />

export const Default = Template.bind({})
Default.args = {
    characters: Array(5).fill({
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        location: "Earth (Replacement Dimension)",
        name: "Rick Sanchez",
        number_of_episodes: 41,
        origin: "Earth (C-137)",
        species: "Human",
        status: "Alive"
    })
}