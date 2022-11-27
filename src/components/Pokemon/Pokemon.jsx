import React, { memo, useRef, useEffect } from 'react'
import styles from './Pokemon.module.css'

import Wrapper from '../Wrapper/Wrapper'

const Pokemon = (props) => {

    const pokemonHealthBarRef = useRef(null)

    const availableStats = ["hp", "attack", "defense", "speed"]
    const pokemonSpriteUrl = props?.sprites?.other["official-artwork"]?.front_default

    const statsToShow = props?.stats?.flatMap(item => {
        if (availableStats.includes(item.stat.name.toLowerCase())) return item

        return []
    })

    const getHealthBarColor = (value, dark = false) => {
        if (value >= 50) {
            return getComputedStyle(document.documentElement).getPropertyValue(dark ? '--green' : '--green-light')
        } else if (value >= 30 && value < 50) {
            return getComputedStyle(document.documentElement).getPropertyValue(dark ? '--yellow' : '--yellow-light')
        } else if (value >= 0 && value < 30) {
            return getComputedStyle(document.documentElement).getPropertyValue(dark ? '--red' : '--red-light')
        }
    }

    useEffect(() => {
        if (pokemonHealthBarRef.current) {
            pokemonHealthBarRef.current.style.borderColor = getHealthBarColor(props.health, true)
            pokemonHealthBarRef.current.querySelector('div').style.width = `${props.health}%`
            pokemonHealthBarRef.current.querySelector('div').style.background = getHealthBarColor(props.health)
        }
    }, [props.health])

    return (
        <div className={styles.pokemon}>
            <p style={{ color: `${getHealthBarColor(props.health, true)}` }}>{props.health} %</p>
            <div ref={pokemonHealthBarRef} className={styles.pokemon__health}>
                <div className={styles.pokemon__health__inner}></div>
            </div>
            <div className={styles.pokemon__info}>
                <h3>{props?.name || "Pokemon"}</h3>
                <img src={pokemonSpriteUrl} alt="pokemon illustration" />
            </div>
            <div className={styles.pokemon__stats}>
                <Wrapper
                    title="Stats"
                    style={{
                        padding: '1rem 1rem 1.5rem 1rem'
                    }}
                >
                    {statsToShow?.map((item, index) => (
                        <p
                            style={{ textTransform: item.stat.name === 'hp' ? 'uppercase' : 'capitalize' }}
                            key={index}
                        >
                            {item.stat.name}: {item.base_stat}
                        </p>
                    ))}
                </Wrapper>
            </div>
        </div>
    )
}

export default memo(Pokemon)