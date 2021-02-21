import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Default } from './stories'
import { LocationSectionProps } from '.'

describe('<LocationSection />', () => {
    it('should render all props passed', () => {
        const props = Default.args as LocationSectionProps
        render(<Default {...props} />)

        expect(screen.getByText(props.title)).toBeInTheDocument()
        expect(screen.getByText(new RegExp(props.name, 'i'))).toBeInTheDocument()
        expect(screen.getByText(new RegExp(props.type, 'i'))).toBeInTheDocument()
        expect(screen.getByText(new RegExp(props.dimension, 'i'))).toBeInTheDocument()
        expect(screen.getByText(new RegExp(`${props.numberOfResidents}`, 'i'))).toBeInTheDocument()
    })
})