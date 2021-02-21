import { ProfileCardProps } from '../ProfileCard'
import { PageContainer } from './styles'
import ProfileHeader from '../ProfileHeader'
import LocationSection, { LocationSectionProps } from '../LocationSection'
import EpisodesSection, { Episode } from '../EpisodesSection'

export type ProfilePageProps = {
    character: ProfileCardProps,
    location: LocationSectionProps,
    origin: LocationSectionProps,
    episodes: Episode[]
}

const ProfilePage = ({ character, location, origin, episodes }: ProfilePageProps) => {
    const { image, name, status, species } = character
    const profileHeaderProps = { image, name, status, species, showAs: 'page' as const }

    return (
        <PageContainer>
            <ProfileHeader {...profileHeaderProps} />
            <LocationSection {...origin} />
            <LocationSection {...location} />
            <EpisodesSection episodes={episodes} />
        </PageContainer>
    )
}

export default ProfilePage