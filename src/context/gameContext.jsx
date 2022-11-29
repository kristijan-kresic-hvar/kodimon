import { createContext, useState, useEffect } from "react"

const GameContext = createContext()

const GameContextProvider = (props) => {

    const [hasStarted, setHasStarted] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)
    const [attackDuration] = useState(1000) // 1 second

    return (
        <GameContext.Provider value={{
            hasStarted,
            setHasStarted,
            hasFinished,
            setHasFinished,
            attackDuration,
        }}>
            {props.children}
        </GameContext.Provider>
    )
}

export { GameContextProvider, GameContext }