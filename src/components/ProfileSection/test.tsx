import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Default } from './stories'
import { ProfileSectionProps } from '.'


describe('<ProfileSection />', () => {
    it('should render all items passed in characters props', () => {
        const props = Default.args as ProfileSectionProps
        render(<Default {...props} />)

        const numberOfProfiles = props.characters.length
        const characters = props.characters
        expect(screen.queryAllByText(characters[0].name).length).toBe(props.characters.length)
        expect(screen.queryAllByAltText(characters[0].name).length).toBe(numberOfProfiles)
    })
})