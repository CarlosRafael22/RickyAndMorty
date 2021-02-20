import { ProfileStyle, TitleStyle, InfoSectionStyle, SubtitleStyle, StatusIndicatorStyle, LocationSectionStyle, ProfileImage } from './styles'

export type ProfileProps = {
    image: string,
    name: string,
    status: 'Alive' | 'Dead' | 'unknown',
    species: string,
    location: string,
    origin: string,
    number_of_episodes: number
}

const Profile = ({ image, name, status, species, location, origin, number_of_episodes }: ProfileProps) => {

    return (
        <ProfileStyle>
            <ProfileImage src={image} alt={name} />
            <InfoSectionStyle>
                <TitleStyle>{name}</TitleStyle>
                <SubtitleStyle> <StatusIndicatorStyle status={status} data-testid={'status'} /> {status} - {species} </SubtitleStyle>
            </InfoSectionStyle>
            <LocationSectionStyle>
                <SubtitleStyle>ORIGIN: {origin}</SubtitleStyle>
                <SubtitleStyle>LOCATION: {location}</SubtitleStyle>
            </LocationSectionStyle>
            <InfoSectionStyle>
                <SubtitleStyle>Episodes it appeared in: {number_of_episodes} </SubtitleStyle>
            </InfoSectionStyle>
        </ProfileStyle>
    )
}

export default Profile