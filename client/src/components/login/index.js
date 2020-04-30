import React from 'react'
import { Typography, Link, Button} from '@material-ui/core'
export default function Login() {

  // const handleGoogle = () => {
  //    if (!auth0Client.isAuthenticated()) {
  //      auth0Client.signIn();
  //    }
  // }

  return (
    <div>
      <Button href="/login" variant="outlined" color="inherit">
       Login
      </Button>
    </div>
  );
}
