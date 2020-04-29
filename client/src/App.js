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
// import CardFlip from './pages/CardFlip'
import PlayerCreate from './pages/PlayerCreate'
import Packs from './pages/Packs'
// Css
import './App.css'
// Auth0 callback
import Callback from "./Callback";
import CardFlip from './pages/CardFlip';

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
          <Route exact path={["/packs"]}>
            <Packs />
          </Route>
          <Route exact path={["/cardflip"]}>
            <CardFlip />
          </Route>
          <Route exact path={["/nomatch"]}>
            <NoMatch />
          </Route>
          <Route exact path="/callback" component={Callback}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App
