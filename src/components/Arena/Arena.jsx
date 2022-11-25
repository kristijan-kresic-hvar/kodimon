import React from 'react'
import styles from './Arena.module.css'

import Pokemon from '../Pokemon/Pokemon'
import Actions from '../Actions/Actions'
import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import LogsComponent from '../LogsComponent/LogsComponent'

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
                    <div>
                        <Menu />
                    </div>

                    <div
                        style={{ flex: 2, width: '50%', maxWidth: '700px', minWidth: '300px' }}
                    >
                        <LogsComponent />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Arena