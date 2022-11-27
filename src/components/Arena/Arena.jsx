import React, { useState, useEffect } from 'react'
import styles from './Arena.module.css'

// components
import Pokemon from '../Pokemon/Pokemon'
import Actions from '../Actions/Actions'
import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import LogsComponent from '../LogsComponent/LogsComponent'

// hooks
import usePokemonApi from '../../hooks/usePokemonApi'
import usePokemonNames from '../../hooks/usePokemonNames'

const Arena = () => {

    const [pokemons, setPokemons] = useState({})
    const [currentAttackingPokemon, setCurrentAttackingPokemon] = useState()
    const [winnerPokemon, setWinnerPokemon] = useState()
    const [loading, setLoading] = useState(false)

    const pokemonNames = usePokemonNames()
    const { getPokemonData } = usePokemonApi()

    // get the pokemons
    useEffect(() => {
        if (Object.keys(pokemons)?.length) return

        const controller = new AbortController()
        const signal = controller.signal

        setLoading(true)
        Promise.all([
            getPokemonData(pokemonNames.getRandomPokemon(), signal),
            getPokemonData(pokemonNames.getRandomPokemon(), signal)
        ])
            .then(([pokemonLeftData, pokemonRightData]) => {
                setPokemons({
                    left: {
                        ...pokemonLeftData,
                        health: 100
                    },
                    right: {
                        ...pokemonRightData,
                        health: 100
                    }
                })

                const leftPokemonSpeed = pokemonLeftData?.stats?.find(item => item.stat.name === "speed")?.base_stat
                const rightPokemonSpeed = pokemonRightData?.stats?.find(item => item.stat.name === "speed")?.base_stat

                if (leftPokemonSpeed > rightPokemonSpeed) return setCurrentAttackingPokemon('left')

                setCurrentAttackingPokemon('right')
            })
            .finally(() => setLoading(false))

        return () => controller.abort()
    }, [])

    if (loading) return "loading..."
    return (
        <div className={styles.arena}>
            <div className={styles.arena__logo}>
                <Logo small />
            </div>
            <div className={styles.arena__inner}>
                <div className={styles.arena__header}>
                    <Pokemon {...pokemons?.left} />
                    <div className={styles.arena__header__actions}>
                        <Actions
                            currentAttackingPokemon={currentAttackingPokemon}
                            setCurrentAttackingPokemon={setCurrentAttackingPokemon}
                        />
                    </div>
                    <Pokemon {...pokemons?.right} />
                </div>
                <div className={styles.arena__footer}>
                    <div>
                        <Menu />
                    </div>

                    <div
                        style={{ flex: 2, width: '50%', maxWidth: '700px', minWidth: '300px' }}
                    >
                        <LogsComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Arena