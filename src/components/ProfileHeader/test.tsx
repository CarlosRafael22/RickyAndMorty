import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Default } from './stories'
import { ProfileHeaderProps } from '.'

describe('<ProfileHeader />', () => {
    it('should render all props passed', () => {
        const props = Default.args as ProfileHeaderProps
        render(<Default {...props} />)

        expect(screen.getByText(props.name)).toBeInTheDocument()
        expect(screen.getByText(new RegExp(props.status!, "i"))).toBeInTheDocument()
        expect(screen.getByText(new RegExp(props.species, "i"))).toBeInTheDocument()

        const image = screen.getByAltText(props.name) as HTMLImageElement
        expect(image.src).toContain(props.image)
    })

    it('should render the status circle color accordingly', () => {
        const props = Default.args as ProfileHeaderProps
        const aliveArgs = { ...props, status: 'Alive' as const }
        const deadArgs = { ...props, status: 'Dead' as const }
        const unknownArgs = { ...props, status: 'unknown' as const }
        
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

    it('should render the image and infos in the correct order according to showAs', () => {
        const props = Default.args as ProfileHeaderProps
        const pageProps = {...props, showAs: 'page' as const }
        const { rerender } = render(<Default {...props} />)

        const image = screen.getByAltText(props.name)
        const infoSection = screen.getByText(props.name).parentNode
        expect(image).toHaveStyle({ order: 1 })
        expect(infoSection).toHaveStyle({ order: 2 })

        rerender(<Default {...pageProps} />)
        expect(image).toHaveStyle({ order: 2 })
        expect(infoSection).toHaveStyle({ order: 1 })
    })
})