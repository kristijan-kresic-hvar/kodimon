import { createContext, useState, useEffect } from "react"

const GameContext = createContext()

const GameContextProvider = (props) => {

    const [hasStarted, setHasStarted] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)
    const [attackDuration] = useState(1000) // 1 second
    const [missChance] = useState(20) // 20%

    return (
        <GameContext.Provider value={{
            hasStarted,
            setHasStarted,
            hasFinished,
            setHasFinished,
            attackDuration,
            missChance
        }}>
            {props.children}
        </GameContext.Provider>
    )
}

export { GameContextProvider, GameContext }