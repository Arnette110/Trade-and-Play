import React from 'react'
// Material-ui
// import Container from '@material-ui/core/container'
// Components
import ButtonAppBar from './components/NavBar'
// import PlayerCardFront from './components/CardFront'
// import CardFlip from './pages/CardFlip'
// import Jumbotron from "./components/Jumbotron"
// Pages
import PlayerCreate from './pages/PlayerCreate'
// CSS
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
