import { Story, Meta } from '@storybook/react'
import ProfileSection, { ProfileSectionProps } from '.'

export default {
    title: 'ProfileSection',
    component: ProfileSection
} as Meta

const Template: Story<ProfileSectionProps> = (args: ProfileSectionProps) => <ProfileSection {...args} />

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