import { parseLocation, parseCharacters } from './parsers'

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