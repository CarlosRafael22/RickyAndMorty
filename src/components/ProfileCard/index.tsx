import { useRouter } from 'next/router'
import { ProfileStyle, InfoSectionStyle, SubtitleStyle, LocationSectionStyle } from './styles'
import ProfileHeader from '../ProfileHeader'

export type ProfileCardProps = {
    id: number,
    image: string,
    name: string,
    status: 'Alive' | 'Dead' | 'unknown',
    species: string,
    location: string,
    origin: string,
    numberOfEpisodes: number
}

const Profile = ({ id, image, name, status, species, location, origin, numberOfEpisodes }: ProfileCardProps) => {
    const router = useRouter()
    const profileHeaderProps = { image, name, status, species, showAs: 'card' as const }

    const goToProfilePage = () => {
        router.push(`profile/${id}`)
    }

    return (
        <ProfileStyle onClick={goToProfilePage}>
            <ProfileHeader {...profileHeaderProps} />
            <LocationSectionStyle>
                <SubtitleStyle>ORIGIN: {origin}</SubtitleStyle>
                <SubtitleStyle>LOCATION: {location}</SubtitleStyle>
            </LocationSectionStyle>
            <InfoSectionStyle>
                <SubtitleStyle>Episodes it appeared in: {numberOfEpisodes} </SubtitleStyle>
            </InfoSectionStyle>
        </ProfileStyle>
    )
}

export default Profile