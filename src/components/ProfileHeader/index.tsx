import { ProfileCardProps } from '../ProfileCard'
import { HeaderWrapper, ProfileImage, InfoSectionStyle, TitleStyle, SubtitleStyle, StatusIndicatorStyle } from './styles'

export type ProfileHeaderProps = Pick<ProfileCardProps, 'image' | 'name' | 'status' | 'species'> & {
    showAs: 'page' | 'card'
}

const ProfileHeader = ({ image, name, status, species, showAs }: ProfileHeaderProps) => {

    return (
        <HeaderWrapper>
        <ProfileImage src={image} alt={name} showAs={showAs} />
        <InfoSectionStyle showAs={showAs}>
            <TitleStyle>{name}</TitleStyle>
            <SubtitleStyle> <StatusIndicatorStyle status={status} data-testid={'status'} /> {status} - {species} </SubtitleStyle>
        </InfoSectionStyle>
        </HeaderWrapper>
    )
}

export default ProfileHeader