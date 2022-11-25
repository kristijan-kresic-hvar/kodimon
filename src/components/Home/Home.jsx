import React from 'react'
import styles from './Home.module.css'

import Logo from '../Logo/Logo'

const Home = () => {

    const handleNewGame = () => {

    }

    return (
        <div className={styles.home}>
            <Logo />
            <button
                className={styles.newGameButton}
                type="button"
                onClick={handleNewGame}
            >
                New Game
            </button>
        </div>
    )
}

export default Home