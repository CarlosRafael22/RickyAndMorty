import { ProfileCardProps } from '../ProfileCard'
import { PageContainer } from './styles'
import ProfileHeader from '../ProfileHeader'

export type ProfilePageProps = {
    character: ProfileCardProps
}

const ProfilePage = ({ character }: ProfilePageProps) => {
    const { image, name, status, species } = character
    const profileHeaderProps = { image, name, status, species, showAs: 'page' as const }

    return (
        <PageContainer>
            <ProfileHeader {...profileHeaderProps} />
        </PageContainer>
    )
}

export default ProfilePage