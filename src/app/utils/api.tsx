import { useState, useEffect } from "react"
import { POKEMON_API_POKEMON_URL } from "../../constants"
import axios from "axios"

const usePokemons = () => {
    const [pokemons, setPokemons] = useState<[]>([])
    const [nextUrl, setNextUrl] = useState<string | null>(POKEMON_API_POKEMON_URL)

    useEffect(() => {
        fetchPokemon()
    }, [])


    const fetchPokemon = async () => {

        if (nextUrl) {
            const result = await axios.get(nextUrl)
            console.log(result)
        }
    }

    return {
        pokemons
    }
}
export default usePokemons