import React from 'react'
import { Button } from '@material-ui/core'
import auth0Client from '../../Auth'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    background: 'rgb(235,36,39)',
    border: 0,
    borderRadius: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    marginTop: '5rem'
  },
})

export default function Login() {
  const handleGoogle = () => {
    if (!auth0Client.isAuthenticated()) {
      auth0Client.signIn()
    }
  }
  const classes = useStyles()

  return (
    <div>
      <Button onClick={handleGoogle} className={classes.root}>
        Sign in or Register
      </Button>
    </div>
  )
}
