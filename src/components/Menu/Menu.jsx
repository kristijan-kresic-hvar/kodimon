import React, { useContext, useEffect } from 'react'
// import styles from './Menu.module.css'

import Wrapper from '../Wrapper/Wrapper'
import Button from '../Button/Button'

import { GameContext } from '../../context/gameContext'

const winMenuStyles = {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    gap: '1rem',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 101,
    transition: 'all 1500ms ease-in-out',
}

const menuStyles = {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    gap: '1rem',
    transition: 'all 1500ms ease-in-out',
}

const Menu = (props) => {

    const { setHasStarted, hasFinished, setHasFinished } = useContext(GameContext)

    const handleGoHome = () => {
        setHasStarted(false)
        setHasFinished(false)
    }

    const handleNewGame = () => {
        props.restart()
    }

    return (
        <Wrapper
            title="Menu"
            style={hasFinished ? winMenuStyles : menuStyles}>
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