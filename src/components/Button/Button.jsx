import React from 'react'
import styles from './Button.module.css'

const Button = (props) => {
    return (
        <button
            type="button"
            onClick={props.onClick}
            className={`${styles.button} ${props.animate ? styles.button__animate : null}`}
        >
            {props.children}
        </button>
    )
}

export default Button