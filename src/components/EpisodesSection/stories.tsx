import { Story, Meta } from '@storybook/react'
import EpisodesSection, { EpisodesSectionProps }  from '.'

export default {
    title: 'EpisodesSection',
    component: EpisodesSection
} as Meta

const Template: Story<EpisodesSectionProps> = args => (
    <div style={{width: '50%', margin: '0 auto'}}>
        <EpisodesSection {...args} />
    </div>
)

export const Default = Template.bind({})
Default.args = { 
    episodes: [
        {
            name: "Pilot",
            airDate: "December 2, 2013",
            episode: "S01E01",
        },
        {
            name: "Middle",
            airDate: "December 7, 2013",
            episode: "S01E02",
        },
        {
            name: "Finalle",
            airDate: "December 12, 2013",
            episode: "S01E03",
        }
    ]
}