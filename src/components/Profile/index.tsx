import { ProfileStyle, TitleStyle, InfoSectionStyle, SubtitleStyle, StatusIndicatorStyle } from './styles'

export type ProfileProps = {
    image: string,
    name: string,
    status: 'Alive' | 'Dead' | 'unknown',
    species: string
}

const Profile = ({ image, name, status, species }: ProfileProps) => {

    return (
        <ProfileStyle>
            <img src={image} width='100%' height='200' alt={name} />
            <InfoSectionStyle>
                <TitleStyle>{name}</TitleStyle>
                <SubtitleStyle> <StatusIndicatorStyle status={status} /> {status} - {species} </SubtitleStyle>
            </InfoSectionStyle>
        </ProfileStyle>
    )
}

export default Profile