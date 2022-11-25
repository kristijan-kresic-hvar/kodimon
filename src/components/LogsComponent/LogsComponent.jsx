import React from 'react'
import styles from './LogsComponent.module.css'

import Wrapper from '../Wrapper/Wrapper'

const LogsComponent = () => {
    return (
        <Wrapper
            title="Logs"
            style={{
                minHeight: '300px',
                padding: '1rem .5rem',
                fontWeight: 'bold'
            }}
        >
            <p>Eevee attacked Squirtle for 35.75 dmg</p>
            <p>Squirtle attacked Eevee for 24 dmg</p>
            <p>Eevee missed Squirtle</p>
        </Wrapper>
    )
}

export default LogsComponent