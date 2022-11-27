import React from 'react'
// import styles from './Menu.module.css'

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
                gap: '1rem'
            }}>
            <Button>
                Home
            </Button>
            <Button>
                New game
            </Button>
            {/* <Button>
                New opponent
            </Button> */}
        </Wrapper>
    )
}

export default Menu