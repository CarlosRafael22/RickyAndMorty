import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ProfilePage from '../../src/components/ProfilePage'
import { requestParsedLocation, requestParsedEpisodes } from '../../src/utils/requests'

const requestLocationAndSaveState = async (title: string, saveOnState: Function, requestUrl?: string) => {
    if (requestUrl) {
        const parsedLocation = await requestParsedLocation(requestUrl)
        console.log(parsedLocation)
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
    console.log('QUERRRRYYY: ', useRouter().query)
    const [character, setCharacter] = useState<any | null>(null)
    const [origin, setOrigin] = useState<any | null>(null)
    const [location, setLocation] = useState<any | null>(null)
    const [episodes, setEpisodes] = useState<any[]>([])

    useEffect(() => {
        const getData = async () => {
          const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
          console.log(response)
          const data = await response.json()
          console.log('O DATA DO PROFILE PAGEEE')
          console.log(data)
          setCharacter(data)

          // Getting the episodes ids to retrieve information about each
          console.log(data.episode)
          const episodesIds = getEpisodesIds(data.episode)
          console.log('IDS DOS EPISODES: ', episodesIds)
          const episodes = await requestParsedEpisodes(episodesIds)
          console.log('EPISODES: ', episodes)
          setEpisodes(episodes)

          const originUrl = data.origin.url
          const locationUrl = data.location.url
          console.log('AS URLS: ', originUrl, locationUrl)

          if (originUrl === locationUrl) {
            const parsedOrigin = await requestParsedLocation(originUrl)
            console.log(parsedOrigin)
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
            (isRetrievingAllData) ? (<p>Loading</p>)
            : <ProfilePage character={character} origin={origin} location={location} episodes={episodes} />
        }
        </>
    )
}

export default Page