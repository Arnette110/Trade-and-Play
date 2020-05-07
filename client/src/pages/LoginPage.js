import React, { useState, useContext } from "react";
import {Redirect, Link} from 'react-router-dom'
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
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles(theme => ({
  button: {
    background: "rgb(235,36,39)",
    border: "2px solid",
    borderRadius: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    marginTop: "2rem",
    marginBottom: "2rem",
    "&:hover": {
      color: "rgb(235,36,39)",
      backgroundColor: "white",
      border: "2px solid",
      borderColor: "rgb(235,36,39)",
      borderRadius: 0
    }
  },
  form: {
    width: "50vw",
    maxWidth: "80%"
  }
}));

const LoginPage = props => {
  const [user, setUser] = useState({ username: "", password: "" });
  // const [_id, setId] = useState("")
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const [redirect, setRedirect] = useState('')
// const resetForm = () => {
//   setUser({ username: '', password: '' });
// };

  const onSubmit = e => {
    e.preventDefault();
    AuthService.login(user).then(data => {
      const { isAuthenticated, user, message } = data
      // setId(data)
      
      if (isAuthenticated) {
        authContext.setUser(user);
        authContext.setIsAuthenticated(isAuthenticated);
        setRedirect('/dashboard');
      } else {
        setMessage(message)
      };
    });
  };
  const classes = useStyles()

  if (redirect) return (<Redirect to={redirect}/>)

  return (
    <Jumbotron>
      <Container>
        <form onSubmit={onSubmit}>
          <Paper>
            <AccountCircleIcon fontSize='large' style={{ marginTop: '40px' }} />
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
              <Link to='/register'>
                <Button variant='text' style={{ color: 'blue' }}>
                  register
                </Button>
              </Link>
              <Link to='/home'>
                <Button variant='text' style={{ color: 'blue' }}>
                  Home
                </Button>
              </Link>
            </p>
            {message ? <Message message={message} /> : null}
          </Paper>
        </form>
      </Container>
    </Jumbotron>
  )
};

export default LoginPage;
