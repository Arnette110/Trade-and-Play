// React
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Components
import ButtonAppBar from './components/NavBar'
import Collection from './components/Collection'
// Material-ui

// Pages
import NoMatch from "./pages/NoMatch"
import Home from "./pages/Home"
import SignupPage from "./pages/SignupPage"
import LoginPage from "./pages/LoginPage";
// import CardFlip from './pages/CardFlip'
import PlayerCreate from './pages/PlayerCreate'
// Css
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <ButtonAppBar />
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact path={["/createplayer"]}>
            <PlayerCreate />
          </Route>
          <Route exact path={["/collection"]}>
            <Collection />
          </Route>
          <Route exact path={["/signup"]}>
            <SignupPage />
          </Route>
          <Route exact path={["/login"]}>
            <LoginPage />
          </Route>
          <Route exact path={["/nomatch"]}>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App
