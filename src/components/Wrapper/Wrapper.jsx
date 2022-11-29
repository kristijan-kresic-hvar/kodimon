import React from 'react'
import styles from './Wrapper.module.css'

const Wrapper = (props) => {
    return (
        <div className={styles.wrapper}>
            <div
                className={styles.wrapper__inner}
                style={props.style || {}}
            >
                <h3>{props.title || "Title"}</h3>
                {props.children}
            </div>
        </div>
    )
}

export default Wrapper