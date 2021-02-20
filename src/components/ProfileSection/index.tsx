import { ProfileSectionStyle } from './styles'
import Profile, { ProfileProps } from '../Profile'

export type ProfileSectionProps = {
    characters: ProfileProps[]
}

const ProfileSection = ({ characters }: ProfileSectionProps) => {

    return (
        <ProfileSectionStyle>
            {characters.map(character => <Profile {...character}  />)}
        </ProfileSectionStyle>
    )
}

export default ProfileSection