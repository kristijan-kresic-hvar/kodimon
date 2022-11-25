import React from 'react'
import styles from './Arena.module.css'

import Pokemon from '../Pokemon/Pokemon'
import Actions from '../Actions/Actions'
import Logo from '../Logo/Logo'
import Logs from '../Logs/Logs'
import Menu from '../Menu/Menu'

const Arena = () => {
    return (
        <div className={styles.arena}>
            <div className={styles.arena__logo}>
                <Logo small />
            </div>
            <div className={styles.arena__inner}>
                <div className={styles.arena__header}>
                    <Pokemon />
                    <div className={styles.arena__header__actions}>
                        <Actions />
                    </div>
                    <Pokemon />
                </div>
                <div className={styles.arena__footer}>
                    <Menu />
                    <Logs />
                </div>
            </div>
        </div>
    )
}

export default Arena