import React from 'react'
import styles from './Actions.module.css'

import battleArrow from '../../assets/arrow.svg'
import Button from '../Button/Button'

const Actions = () => {
    return (
        <div className={styles.actions}>
            <img
                src={battleArrow}
                alt="current attacking pokemon illustration arrow"
                aria-hidden
            />
            <Button
                style={{ marginTop: '2rem' }}
                animate="true"
            >
                Attack!
            </Button>
        </div>
    )
}

export default Actions