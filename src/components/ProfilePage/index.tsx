import { ProfileProps } from '../Profile'
import { PageContainer } from './styles'
import ProfileHeader from '../ProfileHeader'

export type ProfilePageProps = {
    character: ProfileProps
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