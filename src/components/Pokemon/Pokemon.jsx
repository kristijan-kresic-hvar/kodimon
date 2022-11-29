import React, { memo, useRef, useEffect, forwardRef } from 'react'
import styles from './Pokemon.module.css'

import Wrapper from '../Wrapper/Wrapper'

const Pokemon = forwardRef((props, ref) => {

    const pokemonHealthBarRef = useRef(null)

    const pokemonSpriteUrl = props?.sprites?.other["official-artwork"]?.front_default

    const getHealthBarColor = (value, dark = false) => {
        if (value >= 50) {
            return getComputedStyle(document.documentElement).getPropertyValue(dark ? '--green' : '--green-light')
        } else if (value >= 30 && value < 50) {
            return getComputedStyle(document.documentElement).getPropertyValue(dark ? '--yellow' : '--yellow-light')
        } else if (value < 30) {
            return getComputedStyle(document.documentElement).getPropertyValue(dark ? '--red' : '--red-light')
        }
    }

    const renderCombatStatus = () => {
        if (props.damage_taken > 0) {
            return (
                <div
                    className={styles.pokemon__combat__status}
                >
                    {props.damage_taken}dmg!
                </div>
            )
        } else if (props.damage_taken === 0) {
            return (
                <div
                    className={styles.pokemon__combat__status}
                    style={{
                        color: '#000000'
                    }}
                >
                    Missed!
                </div>
            )
        }
    }

    useEffect(() => {
        if (pokemonHealthBarRef.current) {
            const currentHealth = props.health > 0 ? Math.floor((props.health / props.stats?.hp) * 100) : 0
            pokemonHealthBarRef.current.style.borderColor = getHealthBarColor(currentHealth, true)
            pokemonHealthBarRef.current.querySelector('div').style.width = `${currentHealth}%`
            pokemonHealthBarRef.current.querySelector('div').style.background = getHealthBarColor(currentHealth)
        }
    }, [props.health])

    return (
        <div className={styles.pokemon}>
            {renderCombatStatus()}
            <p style={{ color: `${getHealthBarColor(props.health > 0 ? Math.floor((props.health / props.stats?.hp) * 100) : 0, true)}` }}>{props.health > 0 ? Math.floor((props.health / props.stats?.hp) * 100) : 0} %</p>
            <div ref={pokemonHealthBarRef} className={styles.pokemon__health}>
                <div className={styles.pokemon__health__inner}></div>
            </div>
            <div className={styles.pokemon__info}>
                <h3>{props?.name || "Pokemon"}</h3>
                <img ref={ref} src={pokemonSpriteUrl} alt="pokemon illustration" />
            </div>
            <div className={styles.pokemon__stats}>
                <Wrapper
                    title="Stats"
                    style={{
                        padding: '1rem 1rem 1.5rem 1rem'
                    }}
                >
                    <p>
                        HP: {props.stats?.hp}
                    </p>
                    <p>
                        Attack: {props.stats?.attack}
                    </p>
                    <p>
                        Defense: {props.stats?.defense}
                    </p>
                    <p>
                        Speed: {props.stats?.speed}
                    </p>
                </Wrapper>
            </div>
        </div >
    )
})

export default memo(Pokemon)