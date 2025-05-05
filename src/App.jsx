import React from 'react'
import TicTacToe from './components/TicTacToe'
import { Route, Routes } from 'react-router'
import SplashScreen from './pages/SplashScreen'
import Layout from './components/Layout'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />} >
        <Route path='/' element={<SplashScreen />}/>
        <Route path='/game' element={<TicTacToe />}/>
      </Route>
    </Routes>
    
  )
}

export default App