import React from 'react'
import styles from './Button.module.css'

const disabledStyle = {
    opacity: '0.5',
    cursor: 'not-allowed',
    pointerEvents: 'none'
}

const Button = (props) => {

    return (
        <button
            type="button"
            onClick={props.onClick}
            className={`${styles.button} ${props.animate ? styles.button__animate : null}`}
            {...props}
            style={props.disabled ? disabledStyle : {}}
        >
            {props.children}
        </button>
    )
}

export default Button