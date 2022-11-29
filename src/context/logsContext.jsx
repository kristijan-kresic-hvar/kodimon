import { createContext, useState } from "react"
import useHelpers from '../hooks/useHelpers'

const LogsContext = createContext()

const LogsContextProvider = (props) => {

    const [logs, setLogs] = useState([])

    const { capitalizeFirstLetter } = useHelpers()

    const addAttackLog = (attacker, defender, damage) => {
        setLogs(prevState => ([
            ...prevState,
            `${capitalizeFirstLetter(attacker)} attacked ${capitalizeFirstLetter(defender)} for ${damage} dmg`
        ]))
    }

    const addDeathLog = (pokemonName) => {
        setLogs(prevState => ([
            ...prevState,
            `${capitalizeFirstLetter(pokemonName)} died`,
            "=============================="
        ]))
    }

    const addAttackMissedLog = (attacker, defender) => {
        setLogs(prevState => ([
            ...prevState,
            `${capitalizeFirstLetter(attacker)} missed ${capitalizeFirstLetter(defender)}`
        ]))
    }

    const clearLogs = () => {
        setLogs([])
    }

    return (
        <LogsContext.Provider value={{
            logs,
            clearLogs,
            addAttackLog,
            addDeathLog,
            addAttackMissedLog
        }}>
            {props.children}
        </LogsContext.Provider>
    )
}

export { LogsContextProvider, LogsContext }