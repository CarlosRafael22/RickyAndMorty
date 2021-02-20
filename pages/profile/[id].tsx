import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ProfilePage from '../../src/components/ProfilePage'
import { parseLocation } from '../../src/utils/parsers'

const Page = () => {
    const { query: { id } } = useRouter()
    const [character, setCharacter] = useState<any | null>(null)
    const [origin, setOrigin] = useState<any | null>(null)
    // const [location, setLocation] = useState<any | null>(null)

    console.log('QUERY: ', id)

    useEffect(() => {
        const getData = async () => {
          const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
          console.log(response)
          const data = await response.json()
          console.log(data)
          setCharacter(data)

          const originUrl = data.origin.url
          const locationUrl = data.origin.url
          console.log('AS URLS: ', originUrl, locationUrl)

          const originResponse = await fetch(originUrl)
          console.log(originResponse)
          const originData = await originResponse.json()
          console.log(originData)
          const parsedOrigin = parseLocation(originData)
          console.log(parsedOrigin)
          setOrigin(parsedOrigin)
        }
    
        getData()
      }, [])

    return (
        <>
        {
            (character === null && origin === null) ? (<p>Loading</p>)
            : <ProfilePage character={character} origin={origin} location={origin} />
        }
        </>
    )
}

export default Page