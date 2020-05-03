import React, { useState, useRef, useEffect } from 'react'
import {  Paper, Container, FormControl, InputLabel, Input, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AuthService from '../Services/AuthService'
import Message from '../components/Message'
import Jumbotron from '../components/Jumbotron'

const useStyles = makeStyles((theme) => ({
 
  button: {
    background: 'rgb(235,36,39)',
    border: '2px solid',
    borderRadius: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    marginTop: '2rem',
    marginBottom: '2rem',
    '&:hover': {
      color: 'rgb(235,36,39)',
      backgroundColor: 'white',
      border: '2px solid',
      borderColor: 'rgb(235,36,39)',
      borderRadius: 0,
    },
  },
  form: {
    width: '100vw',
    maxWidth: '80%'
  }
  
}))

const SignupPage = (props) => {
  const [user, setUser] = useState({ username: '', password: '', role: '' })
  const [message, setMessage] = useState(null)
  let timerID = useRef(null)

  useEffect(() => {
    return () => {
      clearTimeout(timerID)
    }
  }, [])

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const resetForm = () => {
    setUser({ username: '', password: '', role: '' })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    AuthService.register(user).then((data) => {
      const { message } = data
      setMessage(message)
      resetForm()

      if (!message.msgError) {
        timerID = setTimeout(() => {
          props.history.push('/login')
        }, 2000)
      }
    })
  }

  const classes = useStyles()
  

  return (
    <Jumbotron>
      <Container>
        <form onSubmit={onSubmit}>
          <Paper>
            <h3>Please Register</h3>
            <FormControl fullWidth className={classes.form}>
              <InputLabel htmlFor='username'>Username</InputLabel>
              <Input
                id='username'
                type='text'
                name='username'
                value={user.username}
                onChange={onChange}
                placeholder='Enter Username'
              />
            </FormControl>
            <FormControl fullWidth className={classes.form}>
              <InputLabel htmlFor='password'>Password</InputLabel>
              <Input
                id='password'
                type='password'
                name='password'
                value={user.password}
                onChange={onChange}
                placeholder='Enter Password'
              />
            </FormControl>
            <FormControl fullWidth className={classes.form}>
              <InputLabel htmlFor='role'>Role</InputLabel>
              <Input
                id='role'
                type='text'
                name='role'
                value={user.role}
                onChange={onChange}
                placeholder='Enter role (admin/user)'
              />
            </FormControl>
            <br />
            <Button className={classes.button} type='submit'>
              Register
            </Button>
            <p>
              Already have a account?{' '}
              <Button variant='text' href='/login' style={{ color: 'blue' }}>
                sign-in
              </Button>
            </p>
          </Paper>
          {message ? <Message message={message} /> : null}
        </form>
      </Container>
    </Jumbotron>
  )
}

export default SignupPage
