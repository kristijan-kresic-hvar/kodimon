import React from 'react'
import styles from './Logo.module.css'

import kodimonLogo from '../../assets/Kodi-logo.svg'
import kodimonText from '../../assets/kodimon.png'

const Logo = (props) => {
    console.log(props)
    return (
        <div className={`${styles.logo} ${props.small ? styles.logo__small : null}`}>
            <img src={kodimonLogo} alt="page logo illustration" />
            <img src={kodimonText} alt="page logo text illustration" />
        </div>
    )
}

export default Logo