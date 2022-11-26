const usePokemonApi = () => {

    const getPokemonData = async (name) => {
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}${name}`)
            const json = await res.json()
            return json
        }
        catch (error) {
            console.error(error)
        }
    }

    return {
        getPokemonData,
    }
}

export default usePokemonApi;