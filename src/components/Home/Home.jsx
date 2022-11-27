import React, { useContext } from 'react'
import styles from './Home.module.css'

import Logo from '../Logo/Logo'
import Button from '../Button/Button'

import { GameContext } from '../../context/gameContext'

const Home = () => {

    const { setHasStarted } = useContext(GameContext)

    return (
        <div className={styles.home}>
            <Logo />
            <Button
                animate="true"
                onClick={() => setHasStarted(true)}
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