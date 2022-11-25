import React from 'react'
import styles from './App.module.css'

import Home from './components/Home/Home'
import Arena from './components/Arena/Arena'

const App = () => {
  return (
    <div className={styles.app}>
      {/* <Home /> */}
      <Arena />
    </div>
  )
}

export default App