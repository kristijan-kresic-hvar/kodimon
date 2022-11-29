import React, { useContext } from 'react'
import styles from './App.module.css'

import Home from './components/Home/Home'
import Arena from './components/Arena/Arena'

import { GameContext } from './context/gameContext'
import { LogsContextProvider } from './context/logsContext'

const App = () => {

  const { hasStarted } = useContext(GameContext)

  const renderScreen = () => {
    return hasStarted ? (
      <LogsContextProvider>
        <Arena />
      </LogsContextProvider>
    ) : <Home />
  }

  return (
    <div className={styles.app}>
      {renderScreen()}
    </div>
  )
}

export default App