import { Story, Meta } from '@storybook/react'
import ProfilePage, { ProfilePageProps }  from '.'
import { Default as DefaultEpisodesSection } from '../EpisodesSection/stories'

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

const location = {
    title: 'Location',
    name: 'Earth',
    type: 'Planet',
    dimension: '1st',
    numberOfResidents: 70
}

const origin = {
    title: 'Origin',
    name: 'Citadel of Ricks',
    type: 'Space station',
    dimension: 'unknown',
    numberOfResidents: 5
}

Default.args = { 
    character: {
        ...headerProps,
        id: 13,
        origin: {
            name: 'Gaia',
            url: 'https://rickandmortyapi.com/api/location/20'
        },
        location: {
            name: 'Gaia',
            url: 'https://rickandmortyapi.com/api/location/20'
        },
        numberOfEpisodes: 13
    },
    location,
    origin,
    episodes: DefaultEpisodesSection.args?.episodes
 }