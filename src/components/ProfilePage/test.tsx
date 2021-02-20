import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Default } from './stories'
import { ProfilePageProps } from '.'

describe('<ProfilePage />', () => {
    it('should render all props passed', () => {
        const props = Default.args as ProfilePageProps
        render(<Default {...props} />)

        expect(screen.getByText(props.character.name)).toBeInTheDocument()
        expect(screen.getByText(new RegExp(props.character.status, "i"))).toBeInTheDocument()
        expect(screen.getByText(new RegExp(props.character.species, "i"))).toBeInTheDocument()

        const image = screen.getByAltText(props.character.name) as HTMLImageElement
        expect(image.src).toContain(props.character.image)
    })
})