import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    background: 'rgb(235,36,39)',
    border: '2px solid',
    borderRadius: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    marginTop: '4rem',
    '&:hover': {
      color: 'rgb(235,36,39)',
      backgroundColor: 'white',
      border: '2px solid',
      borderColor: 'rgb(235,36,39)',
      borderRadius: 0,
    },
  },
})

export default function Login() {
  const classes = useStyles()

  return (
    <div>
      <Link to='/register'>
        <Button variant='outlined' className={classes.root}>
          Sign in or Register
        </Button>
      </Link>
    </div>
  )
}
