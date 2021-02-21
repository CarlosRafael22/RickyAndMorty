import { ProfileSectionStyle } from './styles'
import ProfileCard, { ProfileCardProps } from '../ProfileCard'

export type ProfilesSectionProps = {
    characters: ProfileCardProps[]
}

const ProfileSection = ({ characters }: ProfilesSectionProps) => {

    return (
        <ProfileSectionStyle>
            {characters.map((character, index) => <ProfileCard {...character} key={`profile_${index}`}  />)}
        </ProfileSectionStyle>
    )
}

export default ProfileSection