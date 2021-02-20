import { useEffect, useState } from 'react'
import { ProfileProps } from '../src/components/Profile'
import ProfileSection from '../src/components/ProfileSection'

const Home = () => {
  const [characters, setCharacters] = useState<ProfileProps[]>([])

  const parseCharacters = (characters: any[]): ProfileProps[] => {
    return characters.map(character => ({
      image: character.image,
      name: character.name,
      status: character.status,
      species: character.species,
      location: character.location.name,
      origin: character.origin.name,
      number_of_episodes: character.episode.length
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
        <ProfileSection characters={characters} />        
      )
    }
    </>
  )
}

export default Home
