import { parseLocation, parseCharacters, parseEpisodes } from './parsers'

export const requestParsedLocation = async (url: string) => {
    const originResponse = await fetch(url)
    const originData = await originResponse.json()
    const parsedOrigin = parseLocation(originData)
    return parsedOrigin
}

export const requestParsedCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json()
    const parsedCharacters = parseCharacters(data.results)
    return parsedCharacters
}

export const requestParsedEpisodes = async (episodesIds: number[]) => {
    const response = await fetch(`https://rickandmortyapi.com/api/episode/${episodesIds}`)
    const data = await response.json()
    // If episodesIds only has one id then the return will be an object na not array
    // We put the object in the array for pattern
    const episodes = Array.isArray(data) ? data : [data]
    const parsedEpisodes = parseEpisodes(episodes)
    return parsedEpisodes
  }