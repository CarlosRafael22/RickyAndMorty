import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Default } from './stories'
import { ProfilePageProps } from '.'
import { LocationSectionProps } from '../LocationSection'

describe('<ProfilePage />', () => {
    it('should render all ProfileHeader props', () => {
        const props = Default.args as ProfilePageProps
        render(<Default {...props} />)

        expect(screen.getByText(props.character.name)).toBeInTheDocument()
        expect(screen.getByText(new RegExp(props.character.status, "i"))).toBeInTheDocument()
        expect(screen.getByText(new RegExp(props.character.species, "i"))).toBeInTheDocument()

        const image = screen.getByAltText(props.character.name) as HTMLImageElement
        expect(image.src).toContain(props.character.image)
    })

    it('should render the title first and then the image on ProfileHeader', () => {
        const props = Default.args as ProfilePageProps
        render(<Default {...props} />)

        const image = screen.getByAltText(props.character.name)
        const infoSection = screen.getByText(props.character.name).parentNode
        expect(image).toHaveStyle({ order: 2 })
        expect(infoSection).toHaveStyle({ order: 1 })
    })

    it('should render the LocationSection', () => {
        const props = Default.args as ProfilePageProps
        render(<Default {...props} />)

        // Otherwise it will throw -> Type 'LocationSectionProps' cannot be used as an index type
        const origin = props.origin as LocationSectionProps
        const location = props.location as LocationSectionProps
        [location, origin].forEach(properties => {
            expect(screen.getByText(properties!.title)).toBeInTheDocument()
            expect(screen.getByText(new RegExp(properties!.name, 'i'))).toBeInTheDocument()
            expect(screen.getByText(new RegExp(properties!.type, 'i'))).toBeInTheDocument()
            expect(screen.getByText(new RegExp(properties!.dimension, 'i'))).toBeInTheDocument()
            expect(screen.getByText(new RegExp(`${properties!.numberOfResidents}`, 'i'))).toBeInTheDocument()
        })

    })

    it('should render the EpisodesSection', () => {
        const props = Default.args as ProfilePageProps
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