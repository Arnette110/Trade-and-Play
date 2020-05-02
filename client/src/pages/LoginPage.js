import React, { useState, useContext } from "react";
import AuthService from '../Services/AuthService';
import Message from '../components/Message';
import { AuthContext } from '../Context/AuthContext';

const LoginPage = props => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [_id, setId] = useState("")
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
      setId(data)
      const { isAuthenticated, user, message } = data;
      if (isAuthenticated) {
        authContext.setUser(user);
        authContext.setIsAuthenticated(isAuthenticated);
        props.history.push("/dashboard");
      } else setMessage(message);
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h3>Please sign in</h3>
        <label htmlFor="username" className="sr-only">
          Username:
        </label>
        <input
          type="text"
          name="username"
          onChange={onChange}
          className="form-control"
          placeholder="Enter Username"
        />
        <label htmlFor="password" className="sr-only">
          Password:
        </label>
        <input
          type="password"
          name="password"
          onChange={onChange}
          className="form-control"
          placeholder="Enter Password"
        />
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Log in
        </button>
        <p>
          Dont have account? <a href="/register">Signup</a>
        </p>
      </form>
      {message ? <Message message={message} /> : null}
    </div>
  );
};

export default LoginPage;
