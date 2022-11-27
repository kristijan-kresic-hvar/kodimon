import React, { useContext } from 'react'
import styles from './App.module.css'

import Home from './components/Home/Home'
import Arena from './components/Arena/Arena'

import { GameContext } from './context/gameContext'

const App = () => {

  const { hasStarted } = useContext(GameContext)

  const renderScreen = () => {
    return hasStarted ? <Arena /> : <Home />
  }

  return (
    <div className={styles.app}>
      {renderScreen()}
    </div>
  )
}

export default App