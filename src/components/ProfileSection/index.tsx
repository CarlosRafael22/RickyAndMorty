import { ProfileSectionStyle } from './styles'
import Profile, { ProfileProps } from '../Profile'

export type ProfileSectionProps = {
    characters: ProfileProps[]
}

const ProfileSection = ({ characters }: ProfileSectionProps) => {

    return (
        <ProfileSectionStyle>
            {characters.map((character, index) => <Profile {...character} key={`profile_${index}`}  />)}
        </ProfileSectionStyle>
    )
}

export default ProfileSection