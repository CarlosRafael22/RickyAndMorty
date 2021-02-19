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
})