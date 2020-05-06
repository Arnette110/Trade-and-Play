// React
import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
// Components
// import ButtonAppBar from './components/NavBar'
// import Collection from './components/Collection'
// Material-ui

// Pages
import NoMatch from './pages/NoMatch'
import Home from './pages/Home'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import Draft from './pages/Draft'

// import CardFlip from './pages/CardFlip'
import PlayerCreate from './pages/PlayerCreate'
// Css
import './App.css'
import PrivateRoute from './hocs/PrivateRoute'

function App() {
  return (
    <Router>
      <div>
        <Route exact path={["/", "/home"]} component={Home} />
        <PrivateRoute
          path="/createplayer"
          roles={["admin"]}
          component={PlayerCreate}
        />
        <PrivateRoute
          path={["/dashboard"]}
          roles={["user", "admin"]}
          component={Dashboard}
        />
        <PrivateRoute
          path={['/draft']}
          roles={['user', 'admin']}
          component={Draft}
        />
        <Route exact path="/register" component={SignupPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/nomatch" component={NoMatch} />
      </div>
    </Router>
  );
}

export default App
