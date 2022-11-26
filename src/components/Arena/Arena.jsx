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

    const [leftPokemon, setLeftPokemon] = useState()
    const [rightPokemon, setRightPokemon] = useState()
    const [loading, setLoading] = useState(false)

    const pokemonNames = usePokemonNames()
    const { getPokemonData } = usePokemonApi()

    // get the pokemons
    useEffect(() => {
        if (leftPokemon && rightPokemon) return

        setLoading(true)
        Promise.all([
            getPokemonData(pokemonNames.getRandomPokemon())
                .then(data => setLeftPokemon(data)),
            getPokemonData(pokemonNames.getRandomPokemon())
                .then(data => setRightPokemon(data)),
        ]).finally(() => setLoading(false))
    }, [])

    if (loading || !leftPokemon || !rightPokemon) return "loading..."
    return (
        <div className={styles.arena}>
            <div className={styles.arena__logo}>
                <Logo small />
            </div>
            <div className={styles.arena__inner}>
                <div className={styles.arena__header}>
                    <Pokemon {...leftPokemon} />
                    <div className={styles.arena__header__actions}>
                        <Actions />
                    </div>
                    <Pokemon {...rightPokemon} />
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