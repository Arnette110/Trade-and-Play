import React from 'react'
// import CardFlip from './pages/CardFlip'
import ButtonAppBar from './components/NavBar'
import PlayerCardFront from './components/CardFront'
import Container from '@material-ui/core/container'
import Collection from './components/Collection'
import './App.css'
import Jumbotron from "./components/Jumbotron"
import PlayerCreate from './pages/PlayerCreate'

function App() {
  return (
    <div>
      <ButtonAppBar />
      {/* <Login/> */}
      <PlayerCreate />
      <Collection />
    </div>
  )
}

export default App
