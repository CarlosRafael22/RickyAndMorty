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

    it('should render the status circle color accordingly', () => {
        const props = Default.args as ProfileProps
        const aliveArgs = { ...props, status: 'Alive' as ProfileProps['status'] }
        const deadArgs = { ...props, status: 'Dead' as ProfileProps['status'] }
        const unknownArgs = { ...props, status: 'unknown' as ProfileProps['status'] }
        
        const {rerender } = render(<Default {...aliveArgs} />)
        expect(screen.getByTestId('status')).toHaveStyle({
            backgroundColor: 'green'
        })
        
        rerender(<Default {...deadArgs} />)
        expect(screen.getByTestId('status')).toHaveStyle({
            backgroundColor: 'red'
        })

        rerender(<Default {...unknownArgs} />)
        expect(screen.getByTestId('status')).toHaveStyle({
            backgroundColor: 'yellow'
        })
    })
})