import React, { useState, useEffect, useRef, useContext } from 'react'
import styles from './Arena.module.css'

// components
import Pokemon from '../Pokemon/Pokemon'
import Actions from '../Actions/Actions'
import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import LogsComponent from '../LogsComponent/LogsComponent'

import { GameContext } from '../../context/gameContext'

// hooks
import usePokemonApi from '../../hooks/usePokemonApi'
import usePokemonNames from '../../hooks/usePokemonNames'

const Arena = () => {

    const { attackDuration, hasFinished, setHasFinished } = useContext(GameContext)

    const leftPokemonRef = useRef(null)
    const rightPokemonRef = useRef(null)

    const [pokemons, setPokemons] = useState({})
    const [currentAttackingPokemon, setCurrentAttackingPokemon] = useState()
    const [winnerPokemon, setWinnerPokemon] = useState()
    const [loading, setLoading] = useState(false)

    const pokemonNames = usePokemonNames()
    const { getPokemonData } = usePokemonApi()

    const animatePokemons = () => {
        if (leftPokemonRef.current && rightPokemonRef.current) {
            if (currentAttackingPokemon === 'left') {
                leftPokemonRef.current.style.animation = `attackFromLeft ${attackDuration}ms ease-in forwards`
                rightPokemonRef.current.style.animation = `shake ${attackDuration}ms forwards`
            } else {
                rightPokemonRef.current.style.animation = `attackFromRight ${attackDuration}ms ease-in forwards`
                leftPokemonRef.current.style.animation = `shake ${attackDuration}ms forwards`
            }
        }
    }

    const initiateAttack = () => {
        animatePokemons()
        const chance = Math.floor(Math.random() * 11)

        if (currentAttackingPokemon === 'left') {
            setPokemons(prevState => {
                const damage = chance >= 8 ? 0 : ((pokemons.left.stats.attack / 2) - ((pokemons.left.stats.attack / 2) * (prevState.right.stats.defense / 100))).toFixed(2)
                return {
                    ...prevState,
                    right: {
                        ...prevState.right,
                        health: damage >= 0 ? prevState.right.health - damage : prevState.right.health,
                        damage_taken: damage >= 0 ? damage : 0
                    }
                }
            })
        } else {
            setPokemons(prevState => {
                const damage = chance >= 8 ? 0 : ((pokemons.right.stats.attack / 2) - ((pokemons.right.stats.attack / 2) * (prevState.left.stats.defense / 100))).toFixed(2)
                return {
                    ...prevState,
                    left: {
                        ...prevState.left,
                        health: damage >= 0 ? prevState.left.health - damage : prevState.left.health,
                        damage_taken: damage >= 0 ? damage : 0
                    }
                }
            })
        }
    }

    // check for winner
    useEffect(() => {
        if (pokemons?.right?.health <= 0) {
            setWinnerPokemon({
                side: 'left',
                name: pokemons.left.name
            })
            // give losing pokemon death animation
            if (rightPokemonRef.current) {
                rightPokemonRef.current.style.animation = "deathAnimation 500ms ease-out forwards";
            }
            setHasFinished(true)
        } else if (pokemons?.left?.health <= 0) {
            setWinnerPokemon({
                side: 'right',
                name: pokemons.right.name
            })
            // give losing pokemon death animation
            if (leftPokemonRef.current) {
                leftPokemonRef.current.style.animation = "deathAnimation 500ms ease-out forwards";
            }
            setHasFinished(true)
        }

    }, [pokemons?.right?.health, pokemons?.left?.health])

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
                const leftPokemonStats = {}
                const rightPokemonStats = {}

                pokemonLeftData?.stats?.forEach(item => {
                    leftPokemonStats[item.stat.name] = item.base_stat
                })
                pokemonRightData?.stats?.forEach(item => {
                    rightPokemonStats[item.stat.name] = item.base_stat
                })

                setPokemons({
                    left: {
                        ...pokemonLeftData,
                        health: leftPokemonStats.hp,
                        stats: leftPokemonStats
                    },
                    right: {
                        ...pokemonRightData,
                        health: rightPokemonStats.hp,
                        stats: rightPokemonStats
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

    // do after attack is finished
    useEffect(() => {
        // allow fadeOut animation to complete
        setTimeout(() => {
            setPokemons(prevState => {
                return {
                    left: {
                        ...prevState.left,
                        damage_taken: undefined
                    },
                    right: {
                        ...prevState.right,
                        damage_taken: undefined
                    }
                }
            })
        }, attackDuration)
    }, [currentAttackingPokemon])

    if (loading) return "loading..."
    return (
        <div className={styles.arena}>
            <div className={styles.arena__logo}>
                <Logo small />
            </div>
            <div className={styles.arena__inner}>
                <div className={styles.arena__header}>
                    <Pokemon
                        ref={leftPokemonRef}
                        {...pokemons?.left}
                    />
                    <div className={styles.arena__header__actions}>
                        <Actions
                            currentAttackingPokemon={currentAttackingPokemon}
                            setCurrentAttackingPokemon={setCurrentAttackingPokemon}
                            initiateAttack={initiateAttack}
                        />
                    </div>
                    <Pokemon
                        ref={rightPokemonRef}
                        {...pokemons?.right}
                    />
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