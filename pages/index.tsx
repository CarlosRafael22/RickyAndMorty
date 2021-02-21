import { useEffect, useState } from 'react'
import { ProfileCardProps } from '../src/components/ProfileCard'
import ProfilesSection from '../src/components/ProfilesSection'
import { requestParsedCharacters } from '../src/utils/requests'

const Home = () => {
  const [characters, setCharacters] = useState<ProfileCardProps[]>([])

  useEffect(() => {
    const getData = async () => {
      const parsedCharacters = await requestParsedCharacters()
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
