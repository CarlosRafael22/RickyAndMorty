import { ProfileCardProps } from '../components/ProfileCard'
import { LocationSectionProps } from '../components/LocationSection'

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