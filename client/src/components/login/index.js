import React from 'react'
import { Button } from '@material-ui/core'
import auth0Client from '../../Auth'
export default function Login() {
  const handleGoogle = () => {
    if (!auth0Client.isAuthenticated()) {
      auth0Client.signIn()
    }
  }

  return (
    <div>
      <Button onClick={handleGoogle} variant='outlined' color='inherit'>
        Login
      </Button>
    </div>
  )
}
