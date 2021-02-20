import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ProfilePage from '../../src/components/ProfilePage'

const Page = () => {
    const { query: { id } } = useRouter()
    const [character, setCharacter] = useState<any | null>(null)
    console.log('QUERY: ', id)

    useEffect(() => {
        const getData = async () => {
          const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
          console.log(response)
          const data = await response.json()
          console.log(data)
          setCharacter(data)
        }
    
        getData()
      }, [])

    return (
        <>
        {
            character === null ? (<p>Loading</p>)
            : <ProfilePage character={character} />
        }
        </>
    )
}

export default Page