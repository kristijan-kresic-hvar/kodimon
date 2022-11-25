import React from 'react'
import styles from './Logo.module.css'

import kodimonLogo from '../../assets/Kodi-logo.svg'
import kodimonText from '../../assets/kodimon.png'

const Logo = () => {
    return (
        <div className={styles.logo}>
            <img src={kodimonLogo} alt="page logo illustration" />
            <img src={kodimonText} alt="page logo text illustration" />
        </div>
    )
}

export default Logo