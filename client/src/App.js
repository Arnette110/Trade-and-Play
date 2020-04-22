import React from 'react'
import logo from './logo.svg'
import ButtonAppBar from './components/NavBar'
import PlayerCard from './components/Card'
import Container from '@material-ui/core/container'
// import Login from './components/login'
import './App.css'

function App() {
  return (
    <div>
      <ButtonAppBar />
      {/* <Login/> */}

      {/* This area is just for testing purposes, as Card will be called on a collections page. */}
      <Container>
        <PlayerCard/>
      </Container>
    </div>
  )
}

export default App
