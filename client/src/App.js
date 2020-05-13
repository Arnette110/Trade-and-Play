// React
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// Components
// Material-ui
// Pages
import NoMatch from './pages/NoMatch'
import Home from './pages/Home'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import Draft from './pages/Draft'
import PlayerCreate from './pages/PlayerCreate'
// Css
import './App.css'
import PrivateRoute from './hocs/PrivateRoute'
import {
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      //black
      main: 'rgb(19,19,19)',
      //dark grey
      secondary: 'rgb(33,33,33)',
    },
    secondary: {
      //red
      main: 'rgb(235,36,39)',
    },
    info: {
      //yellow
      main: 'rgb(255,184,28)',
    },
    success: {
      //green
      main: 'rgb(76, 175, 80)',
      // contrastText: 'rgb(0, 0, 0, 0.87)'
    },
  },
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path={['/', '/home']} component={Home} />
          <PrivateRoute
            exact
            path='/createplayer'
            roles={['admin']}
            component={PlayerCreate}></PrivateRoute>
          <PrivateRoute
            path='/dashboard'
            roles={['user', 'admin']}
            component={Dashboard}></PrivateRoute>
          <PrivateRoute
            path={['/draft']}
            roles={['user', 'admin']}
            component={Draft}
          />
          <Route exact path='/register' component={SignupPage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/nomatch' component={NoMatch} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App