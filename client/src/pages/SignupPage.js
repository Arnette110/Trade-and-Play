import React from "react";
// import { makeStyles } from '@material-ui/core/styles'
// import { Grid, Typography, Container } from "@material-ui/core";
import { FormControl, TextField, Button, Typography, InputLabel, FormHelperText, Input } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";


// import {
//   Button,
//   TextField,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle
// } from "@material-ui/core";



export default function SignupPage() {
  // const classes = useStyles();

  return (
    <div>
      <form action="/signup" method="post">
        <input type="text" name="username" placeholder="Username" />
        <input type="text" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Signup</button>
      </form>
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
}

