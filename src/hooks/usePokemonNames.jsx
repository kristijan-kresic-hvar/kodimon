import pokemon_names from '../pokemon_names'

const usePokemonNames = () => {

    const getPokemonByName = (name) => {
        if (!name) return

        return pokemon_names.find(pokemon_name => pokemon_name === name)?.toLowerCase()
    }

    const getRandomPokemon = () => {
        const random_index = Math.floor(Math.random() * pokemon_names.length)

        return pokemon_names[random_index].toLowerCase()
    }

    return {
        getRandomPokemon,
        getPokemonByName,
    }
}

export default usePokemonNames