import React from 'react'
import styles from './Wrapper.module.css'

const Wrapper = (props) => {
    return (
        <div className={styles.wrapper}>
            <h3>{props.title || "Title"}</h3>
            <div
                className={styles.wrapper__inner}
                style={props.style || {}}
            >
                {props.children}
            </div>
        </div>
    )
}

export default Wrapper