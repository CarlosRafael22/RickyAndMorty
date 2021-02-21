import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Default } from './stories'
import { EpisodesSectionProps } from '.'

describe('<EpisodesSection />', () => {
    it('should render all episodes passed', () => {
        const props = Default.args as EpisodesSectionProps
        render(<Default {...props} />)

        expect(screen.getByText(/Episodes/i)).toBeInTheDocument()
        // Check whether all the episodes are shown
        props.episodes.forEach(episode => {
            expect(screen.getByText(episode.name)).toBeInTheDocument()
            expect(screen.getByText(episode.episode)).toBeInTheDocument()
            expect(screen.getByText(episode.airDate)).toBeInTheDocument()
        })
    })
})