import React from 'react'
import { Button } from '@material-ui/core'
import auth0Client from '../../Auth'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
  root: {
    background: 'rgb(235,36,39)',
    border: '2px solid',
    borderRadius: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    '&:hover': {
      color: 'rgb(235,36,39)',
      backgroundColor: 'white',
      border: '2px solid',
      borderColor: 'rgb(235,36,39)',
      borderRadius: 0,
    },
  },
})

export default function Logout() {
  const handleLogout = () => {
    auth0Client.signOut()
    this.props.history.replace('/')
  }

  const classes = useStyles()

  return (
    <div>
      <Button
        onClick={handleLogout}
        variant='outlined'
        className={classes.root}>
        sign out
      </Button>
    </div>
  )
}
