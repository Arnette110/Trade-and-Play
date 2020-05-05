// React
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
// Components

// Material-ui

// Pages
import NoMatch from './pages/NoMatch'
import Home from './pages/Home'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'

// import CardFlip from './pages/CardFlip'
import PlayerCreate from './pages/PlayerCreate'
// Css
import './App.css'
import PrivateRoute from './hocs/PrivateRoute'
// import UnPrivateRoute from './hocs/UnPrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={['/', '/home']} component={Home} />
        <PrivateRoute exact path='/createplayer' roles={['admin']}>
          <PlayerCreate />
        </PrivateRoute>
        <PrivateRoute path='/dashboard' roles={['user', 'admin']}>
          <Dashboard />
        </PrivateRoute>
        <Route exact path='/register' component={SignupPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/nomatch' component={NoMatch} />
      </Switch>
    </Router>
  )
}

export default App
