import React, { useContext, useState, useEffect } from 'react'
import { Button, CssBaseline, TextField, Paper, Grid, Typography, makeStyles, Avatar } from '@material-ui/core';
import { AuthContext } from '../Context/AuthContext'
import API from '../utils/API'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),

  },
}));

const Profile = () => {
  const classes = useStyles();
  const { user } = useContext(AuthContext);

  const [form, setForm] = useState({
    favoriteTeam: '',
    bio: '',
    _id: '',
  })

  useEffect(() => {
    setForm({ ...form, _id: user._id })
  }, [])

  function handleSubmit() {
    console.log(form.favoriteTeam)
    console.log(form.bio)
    API.safeProfile(form)
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value })
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={2} md={4} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <div>
            <Typography style={{ textAlign: 'center' }} component="h1" variant="h5">
              {user.username}
            </Typography>
          </div>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              onChange={handleInputChange}
              fullWidth
              id="favoriteTeam"
              label="Favorite team"
              name="favoriteTeam"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              onChange={handleInputChange}
              name="bio"
              id="standard-multiline-flexible"
              label="User BIO"
              multiline
              rowsMax={4}
            />
            <Grid container>
              <Grid item xs>
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  color="primary"
                  // href='/profile'
                >
                  Save
                </Button>
              </Grid>
              {/* <Grid item>
                <Button variant="contained" color="secondary">
                  Cancel
                </Button>
              </Grid> */}
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default Profile