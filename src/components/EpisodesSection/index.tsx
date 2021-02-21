import { EpisodesSectionStyle, EpisodesHeader, EpisodesInfoSectionStyle, EpisodeInfo, EpisodeName, EpisodeContainer, InfoSpan } from './styles'

export type Episode = {
    name: string,
    episode: string,
    airDate: string
}

export type EpisodesSectionProps = {
    episodes: Episode[]
}

const Episode = ({ name, episode, airDate }: Episode) => {
    return (
        <EpisodeContainer>
            <EpisodeName>{name}</EpisodeName>
            <EpisodeInfo><InfoSpan>Code:</InfoSpan> {episode}</EpisodeInfo>
            <EpisodeInfo><InfoSpan>Air Date:</InfoSpan> {airDate}</EpisodeInfo>
        </EpisodeContainer>
    )
}

const EpisodesSection = ({ episodes }: EpisodesSectionProps) => {

    return (
        <EpisodesSectionStyle>
            <EpisodesHeader>Episodes</EpisodesHeader>
            <EpisodesInfoSectionStyle>
                {episodes.map((episode, index) => (
                    <Episode {...episode} key={`episode_${index}`} />
                ))}
            </EpisodesInfoSectionStyle>
        </EpisodesSectionStyle>
    )
}

export default EpisodesSection