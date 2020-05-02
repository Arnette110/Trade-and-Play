// React
import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// Components
import ButtonAppBar from './components/NavBar'
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
// Css
import './App.css'
import PrivateRoute from './hocs/PrivateRoute';
// import UnPrivateRoute from './hocs/UnPrivateRoute';

function App() {

  return (
    <Router>
      <div>
        <ButtonAppBar />
        <Route exact path={["/", "/home"]} component={Home} />
        <PrivateRoute exact path="/createplayer" roles={["admin"]} component={PlayerCreate} />
        <PrivateRoute exact path="/collection" roles={["user", "admin"]} component={Collection} />
        <PrivateRoute path="dashboard" roles={["user", "admin"]} component={Dashboard}/>
        <Route exact path="/register" component={SignupPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/nomatch" component={NoMatch} />
        {/* <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact path={["/dashboard"]}>
            <Dashboard />
          </Route>
          <Route exact path={["/createplayer"]}>
            <PlayerCreate />
          </Route>
          <Route exact path={["/collection"]}>
            <Collection />
          </Route>
          <Route exact path={["/register"]}>
            <SignupPage />
          </Route>
          <Route exact path={["/login"]}>
            <LoginPage />
          </Route>
          <Route exact path={["/nomatch"]}>
            <NoMatch />
          </Route>
        </Switch> */}
      </div>
    </Router>
  );
}

export default App
