import React, { useState, useContext } from "react";
import {
  Paper,
  Container,
  FormControl,
  InputLabel,
  Input,
  Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AuthService from '../Services/AuthService';
import Message from '../components/Message';
import { AuthContext } from '../Context/AuthContext';
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
    maxWidth: '80%',
  },
}))

const LoginPage = props => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);
  // const history = useHistory

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    AuthService.login(user).then(data => {
      console.log(data);
      const { isAuthenticated, user, message } = data;
      if (isAuthenticated) {
        authContext.setUser(user);
        authContext.setIsAuthenticated(isAuthenticated);
        props.history.push("/dashboard");
      } else {
        setMessage(message)
        props.history.push('/register')
      };
    });
  };
  const classes = useStyles()

  return (
    <Jumbotron>
      <Container>
        <form onSubmit={onSubmit}>
          <Paper>
            <h3>Please Sign-in</h3>
            <FormControl fullWidth className={classes.form}>
              <InputLabel htmlFor='username'>Username</InputLabel>
              <Input
                id='username'
                type='text'
                name='username'
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
                onChange={onChange}
                placeholder='Enter Password'
              />
            </FormControl>
            <br />
            <Button className={classes.button} type='submit'>
              Sign-in
            </Button>
            <p>
              Don't have account?{' '}
              <Button
                variant='text'
                href='/register'
                style={{ color: 'blue' }}>
                register
              </Button>
            </p>
            {message ? <Message message={message} /> : null}
          </Paper>
        </form>
      </Container>
    </Jumbotron>
  )
};

export default LoginPage;
