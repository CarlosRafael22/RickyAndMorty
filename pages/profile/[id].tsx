import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ProfilePage from '../../src/components/ProfilePage'
import { requestParsedLocation, requestParsedEpisodes } from '../../src/utils/requests'
import Spinner from '../../src/components/Spinner'

const requestLocationAndSaveState = async (title: string, saveOnState: Function, requestUrl?: string) => {
    if (requestUrl) {
        const parsedLocation = await requestParsedLocation(requestUrl)
        saveOnState({...parsedLocation, title})
    } else {
        saveOnState({ title, name: 'unknown', type: 'unknown', dimension: 'unknown', numberOfResidents: 'unknown'})
    }
}

const getEpisodesIds = (episodesUrls: string[]): number[] => {
  return episodesUrls.map(url => parseInt(url.split('/').pop()!))
}

const Page = () => {
    const { query: { id } } = useRouter()
    const [character, setCharacter] = useState<any | null>(null)
    const [origin, setOrigin] = useState<any | null>(null)
    const [location, setLocation] = useState<any | null>(null)
    const [episodes, setEpisodes] = useState<any[]>([])

    useEffect(() => {
        const getData = async () => {
          const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
          const data = await response.json()
          setCharacter(data)

          // Getting the episodes ids to retrieve information about each
          const episodesIds = getEpisodesIds(data.episode)
          const episodes = await requestParsedEpisodes(episodesIds)
          setEpisodes(episodes)

          const { origin: { url: originUrl } } = data
          const { location: { url: locationUrl } } = data

          // If its the same we dont need to fetch again
          if (originUrl === locationUrl) {
            const parsedOrigin = await requestParsedLocation(originUrl)
            setOrigin({...parsedOrigin, title: 'Origin'})
            setLocation({...parsedOrigin, title: 'Location'})
          } else {
            await requestLocationAndSaveState('Origin', setOrigin, originUrl)
            await requestLocationAndSaveState('Location', setLocation, locationUrl)
          }
        }
    
        getData()
      }, [])
    
    const isRetrievingAllData = character === null && origin === null && location === null && episodes.length === 0

    return (
        <>
        {
            (isRetrievingAllData) ? <Spinner />
            : <ProfilePage character={character} origin={origin} location={location} episodes={episodes} />
        }
        </>
    )
}

export default Page