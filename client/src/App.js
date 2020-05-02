// React
import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// Components
// import ButtonAppBar from './components/NavBar'
import Collection from './components/Collection'
// Material-ui

// Pages
import NoMatch from "./pages/NoMatch"
import Home from "./pages/Home"
import SignupPage from "./pages/SignupPage"
import LoginPage from "./pages/LoginPage";
import Dashboard from './pages/Dashboard'

// import CardFlip from './pages/CardFlip'
import PlayerCreate from './pages/PlayerCreate'
import Packs from './pages/Packs'
// Css
import './App.css'
import PrivateRoute from './hocs/PrivateRoute';
// import UnPrivateRoute from './hocs/UnPrivateRoute';

function App() {

  return (
    <Router>
      <div>
        <Route exact path={["/", "/home"]} component={Home} />
        <PrivateRoute exact path="/createplayer" roles={["admin"]} component={PlayerCreate} />
        <PrivateRoute exact path="/collection" roles={["user", "admin"]} component={Collection} />
        <PrivateRoute path="/dashboard" roles={["user", "admin"]}>
          <Dashboard/>
        </PrivateRoute>
        <Route exact path="/register" component={SignupPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/nomatch" component={NoMatch} />
      </div>
    </Router>
  );
}

export default App
