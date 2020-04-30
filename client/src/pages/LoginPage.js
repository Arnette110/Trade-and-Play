import React from "react";
// import { makeStyles } from '@material-ui/core/styles'
// import { Grid, Typography, Container } from "@material-ui/core";
import { FormControl, TextField, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import {
//   Button,
//   TextField,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle
// } from "@material-ui/core";

export default function LoginPage() {

  return (
    <div>
      <form action="/login" method="post">
        <input type="text" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <p>
        Dont have an account? <a href="/login">Signup</a>
      </p>
    </div>
  );
}
