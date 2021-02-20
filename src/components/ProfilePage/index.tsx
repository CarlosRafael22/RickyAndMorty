import { ProfileCardProps } from '../ProfileCard'
import { PageContainer } from './styles'
import ProfileHeader from '../ProfileHeader'
import LocationSection, { LocationSectionProps } from '../LocationSection'

export type ProfilePageProps = {
    character: ProfileCardProps,
    location: LocationSectionProps,
    origin: LocationSectionProps
}

const ProfilePage = ({ character, location, origin }: ProfilePageProps) => {
    const { image, name, status, species } = character
    const profileHeaderProps = { image, name, status, species, showAs: 'page' as const }

    return (
        <PageContainer>
            <ProfileHeader {...profileHeaderProps} />
            <LocationSection {...origin} />
            <LocationSection {...location} />
        </PageContainer>
    )
}

export default ProfilePage