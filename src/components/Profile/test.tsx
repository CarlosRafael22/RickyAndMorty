import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Default } from './stories'

describe('<Profile />', () => {
    it('should render all props passed', () => {
        render(<Default {...Default.args} />)

        expect(screen.getByText(Default.args.name)).toBeInTheDocument()
        expect(screen.getByText(new RegExp(Default.args.status, "i"))).toBeInTheDocument()
        expect(screen.getByText(new RegExp(Default.args.species, "i"))).toBeInTheDocument()
        expect(screen.getByAltText(Default.args.name).src).toContain(Default.args.image)
    })

    it('should render the status circle color accordingly', () => {
        const aliveArgs = { ...Default.args, status: 'Alive' }
        const deadArgs = { ...Default.args, status: 'Dead' }
        const unknownArgs = { ...Default.args, status: 'unknown' }
        
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