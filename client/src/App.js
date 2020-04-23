import React from 'react'
// import CardFlip from './pages/CardFlip'
import ButtonAppBar from './components/NavBar'
import PlayerCardFront from './components/CardFront'
import Container from '@material-ui/core/container'
import './App.css'
import Jumbotron from "./components/Jumbotron"

function App() {
  return (
    <div>
      <ButtonAppBar />
      <Jumbotron/>
      {/* <Container>
        <PlayerCardFront/>
      </Container> */}
    </div>
  )
}

export default App
