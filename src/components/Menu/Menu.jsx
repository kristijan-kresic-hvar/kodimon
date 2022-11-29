import React, { useContext } from 'react'
// import styles from './Menu.module.css'

import Wrapper from '../Wrapper/Wrapper'
import Button from '../Button/Button'

import { GameContext } from '../../context/gameContext'

const Menu = (props) => {

    const { setHasStarted } = useContext(GameContext)

    const handleGoHome = () => {
        setHasStarted(false)
    }

    const handleNewGame = () => {
        props.restart()
    }

    return (
        <Wrapper
            title="Menu"
            style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '1rem',
                gap: '1rem'
            }}>
            <Button onClick={handleGoHome}>
                Home
            </Button>
            <Button onClick={handleNewGame}>
                New game
            </Button>
            {/* <Button>
                New opponent
            </Button> */}
        </Wrapper>
    )
}

export default Menu