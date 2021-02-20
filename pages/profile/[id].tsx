import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ProfilePage from '../../src/components/ProfilePage'
import { requestParsedLocation } from '../../src/utils/requests'

const requestLocationAndSaveState = async (title: string, saveOnState: Function, requestUrl?: string) => {
    if (requestUrl) {
        const parsedLocation = await requestParsedLocation(requestUrl)
        console.log(parsedLocation)
        saveOnState({...parsedLocation, title})
    } else {
        saveOnState({ title, name: 'unknown', type: 'unknown', dimension: 'unknown', residents: 0})
    }
}

const Page = () => {
    const { query: { id } } = useRouter()
    const [character, setCharacter] = useState<any | null>(null)
    const [origin, setOrigin] = useState<any | null>(null)
    const [location, setLocation] = useState<any | null>(null)

    useEffect(() => {
        const getData = async () => {
          const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
          console.log(response)
          const data = await response.json()
          console.log('O DATA DO PROFILE PAGEEE')
          console.log(data)
          setCharacter(data)

          const originUrl = data.origin.url
          const locationUrl = data.location.url
          console.log('AS URLS: ', originUrl, locationUrl)

          if (originUrl === locationUrl) {
            const parsedOrigin = await requestParsedLocation(originUrl)
            console.log(parsedOrigin)
            setOrigin(parsedOrigin)
            setLocation(parsedOrigin)
          } else {
            await requestLocationAndSaveState('Origin', setOrigin, originUrl)
            await requestLocationAndSaveState('Location', setLocation, locationUrl)
          }
        }
    
        getData()
      }, [])
    
    const hasRetrievedAllData = character === null && origin === null && location === null

    return (
        <>
        {
            (hasRetrievedAllData) ? (<p>Loading</p>)
            : <ProfilePage character={character} origin={origin} location={location} />
        }
        </>
    )
}

export default Page