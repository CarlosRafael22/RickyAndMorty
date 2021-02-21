import { ProfileCardProps } from '../components/ProfileCard'
import { LocationSectionProps } from '../components/LocationSection'
import { Episode } from '../components/EpisodesSection'

export const parseCharacters = (characters: any[]): ProfileCardProps[] => {
    return characters.map(character => ({
        id: character.id,
        image: character.image,
        name: character.name,
        status: character.status,
        species: character.species,
        location: character.location,
        origin: character.origin,
        numberOfEpisodes: character.episode.length
    }))
}

export const parseLocation = (location: any): Omit<LocationSectionProps, 'title'> => {
    return {
      name: location.name,
      type: location.type,
      dimension: location.dimension,
      numberOfResidents: location.residents.length
    }
  }

export const parseEpisodes = (episodes: any[]): Episode[] => {
  return episodes.map(episode => ({
    name: episode.name,
    episode: episode.episode,
    airDate: episode.air_date
  }))
}