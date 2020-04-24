import React from 'react'
// import logo from './logo.svg'
import ButtonAppBar from './components/NavBar'
import PlayerCreate from './pages/PlayerCreate'
// import Login from './components/login'
import './App.css'

function App() {
  return (
    <div>
      <ButtonAppBar />
      {/* <Login/> */}
      <PlayerCreate />
    </div>
  )
}

export default App
