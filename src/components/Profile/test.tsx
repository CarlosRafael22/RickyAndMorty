import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Default } from './stories'
import { ProfileProps } from '.'

describe('<Profile />', () => {
    it('should render all props passed', () => {
        const props = Default.args as ProfileProps
        render(<Default {...props} />)

        expect(screen.getByText(props.name!)).toBeInTheDocument()
        expect(screen.getByText(new RegExp(props.status!, "i"))).toBeInTheDocument()
        expect(screen.getByText(new RegExp(props.species, "i"))).toBeInTheDocument()

        const image = screen.getByAltText(props.name) as HTMLImageElement
        expect(image.src).toContain(props.image)
        expect(screen.getByText(new RegExp(props.origin, "i"))).toBeInTheDocument()
        expect(screen.getByText(new RegExp(props.location, "i"))).toBeInTheDocument()

        const episodesText = `Episodes it appeared in: ${props.numberOfEpisodes}`
        expect(screen.getByText(new RegExp(episodesText, "i"))).toBeInTheDocument()
    })
})