import React from 'react'
import { Button } from '@material-ui/core'
import auth0Client from '../../Auth'

export default function Logout() {
  const handleLogout = () => {
    auth0Client.signOut()
    this.props.history.replace('/')
  }

  return (
    <div>
      <Button onClick={handleLogout} variant='outlined' color='inherit'>
        Logout
      </Button>
    </div>
  )
}
