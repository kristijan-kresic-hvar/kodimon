import React from 'react'
import styles from './Menu.module.css'

import Wrapper from '../Wrapper/Wrapper'
import Button from '../Button/Button'

const Menu = () => {
    return (
        <Wrapper
            title="Menu"
            style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '1rem',
            }}>
            <Button
                style={{ marginBottom: '1rem' }}
            >
                Home
            </Button>
            <Button
                style={{ marginBottom: '1rem' }}
            >
                New game
            </Button>
            <Button>
                New opponent
            </Button>
        </Wrapper>
    )
}

export default Menu