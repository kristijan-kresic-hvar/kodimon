import React, { useContext } from 'react'
// import styles from './LogsComponent.module.css'

import Wrapper from '../Wrapper/Wrapper'

import { LogsContext } from '../../context/logsContext'

const LogsComponent = () => {

    const { logs } = useContext(LogsContext)

    return (
        <Wrapper
            title="Logs"
            style={{
                minHeight: '300px',
                padding: '1rem .5rem',
                fontWeight: 'bold',
                overflowY: 'auto',
                maxHeight: '300px'
            }}
        >
            {logs.map(log => (
                <p>{log}</p>
            ))}
            {!logs.length && <p>Its so silent here...</p>}
        </Wrapper>
    )
}

export default LogsComponent