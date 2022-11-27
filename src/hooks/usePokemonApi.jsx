const usePokemonApi = () => {

    const getPokemonData = async (name, signal = null) => {
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}${name}`, { signal })
            const json = await res.json()
            return json
        }
        catch (error) {
            console.log(error.message)
        }
    }

    return {
        getPokemonData,
    }
}

export default usePokemonApi;