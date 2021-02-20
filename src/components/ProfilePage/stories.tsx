import { Story, Meta } from '@storybook/react'
import ProfilePage, { ProfilePageProps }  from '.'

export default {
    title: 'ProfilePage',
    component: ProfilePage
} as Meta

const Template: Story<ProfilePageProps> = args => <ProfilePage {...args} />

export const Default = Template.bind({})
const headerProps = {
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    name: 'Rick and Morry',
    status: 'Dead' as const,
    species: 'Alien'
}

Default.args = { 
    character: {
        ...headerProps,
        origin: 'Earth',
        location: 'Gaia',
        numberOfEpisodes: 13
    }
 }