import React from 'react'
import styles from './Home.module.css'

import Logo from '../Logo/Logo'
import Button from '../Button/Button'

const Home = () => {

    const handleNewGame = () => {

    }

    return (
        <div className={styles.home}>
            <Logo />
            <Button
                animate
                onClick={handleNewGame}
                style={{
                    marginTop: '2rem'
                }}
            >
                New Game
            </Button>
        </div>
    )
}

export default Home