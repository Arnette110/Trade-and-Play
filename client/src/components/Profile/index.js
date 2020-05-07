import React, { useContext, useState, useEffect } from 'react'
import {
  Button,
  CssBaseline,
  TextField,
  Paper,
  Grid,
  Typography,
  makeStyles,
  Avatar,
  Divider,
} from '@material-ui/core'
import { AuthContext } from '../../Context/AuthContext'
import Profile from '../../pages/Profile'
import FullScreenDialog from '../Profile/dialog'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '70vh'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  header: {
    margin: 'auto',
    padding: '5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.secondary,
    color: 'white'
  },
  submit: {
    marginTop: '10rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}))

export default function ProfileComponent() {
  const { user } = useContext(AuthContext)
  const classes = useStyles()

  return (
    <Grid container component='main' className={classes.root}>
      <Grid item xs={false} sm={2} md={4} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.header}>
          <Typography component='h1' variant='h3'>
            Hello {user.username}
          </Typography>
        </div>
        <div className={classes.paper}>
          <Typography component='span' variant='h5'>
            My Favorite Team
          </Typography>
          <Typography component='p' variant='body1'>
            {user.favoriteTeam}
          </Typography>
        </div>
        <div className={classes.paper}>
          <Typography component='h2' variant='h5'>
            My Bio
          </Typography>
          <Typography component='p' variant='body1'>
            {user.bio}
          </Typography>
        </div>
        <div className={classes.submit}>
          <FullScreenDialog/>
        </div>
      </Grid>
    </Grid>
  )
}
