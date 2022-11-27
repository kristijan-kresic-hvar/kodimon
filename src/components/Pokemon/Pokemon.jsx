import React, { memo } from 'react'
import styles from './Pokemon.module.css'

import Wrapper from '../Wrapper/Wrapper'

const Pokemon = (props) => {

    const availableStats = ["hp", "attack", "defense", "speed"]
    const pokemonSpriteUrl = props?.sprites?.other["official-artwork"]?.front_default

    const statsToShow = props?.stats?.flatMap(item => {
        if (availableStats.includes(item.stat.name.toLowerCase())) return item

        return []
    })

    console.log("Pokemon rendered")
    return (
        <div className={styles.pokemon}>
            <div className={styles.pokemon__health}>
                <p>100%</p>
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