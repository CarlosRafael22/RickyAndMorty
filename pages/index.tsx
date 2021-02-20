import { useEffect, useState } from 'react'
import { ProfileCardProps } from '../src/components/ProfileCard'
import ProfilesSection from '../src/components/ProfilesSection'

const Home = () => {
  const [characters, setCharacters] = useState<ProfileCardProps[]>([])

  const parseCharacters = (characters: any[]): ProfileCardProps[] => {
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

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character')
      console.log(response)
      const data = await response.json()
      console.log(data)
      const parsedCharacters = parseCharacters(data.results)
      console.log(parsedCharacters.slice(0, 5))
      setCharacters(parsedCharacters)
    }

    getData()
  }, [])

  return (
    <>
    {
      (characters.length === 0) ? <h2>Loading</h2>
      : (
        <ProfilesSection characters={characters} />        
      )
    }
    </>
  )
}

export default Home
