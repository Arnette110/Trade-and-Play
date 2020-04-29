import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Container } from '@material-ui/core'
import auth0Client from '../Auth'
import logo from '../logo.svg'
import Jumbotron from '../components/Jumbotron'
import Login from '../components/login'
import StarBorderIcon from '@material-ui/icons/StarBorder'

const useStyles = makeStyles({
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    marginTop: 0
  },
  typography: {
    fontSize: '1.5rem'
  }
})

export default function Home() {
  const classes = useStyles()

  return (
    <div>
      <Jumbotron>
        <Grid container>
          <Grid item xs={12}>
            <Container justify='center'>
              <img className={classes.logo} src={logo} alt='my logo'></img>
            </Container>
          </Grid>
          <br />
          <Grid item xs={12}>
            <Container>
              <Typography
                variant='h4'
                style={{ paddingTop: '1rem', fontFamily: 'Roboto Black' }}>
                YOU'RE THE BOSS!
              </Typography>
              <br />
              <Container className={classes.textContainer}>
                <StarBorderIcon fontSize='large' />{' '}
                <Typography className={classes.typography}>
                  Get booster packs to build your team deck
                </Typography>
              </Container>
              <Container className={classes.textContainer}>
                <StarBorderIcon fontSize='large' />{' '}
                <Typography className={classes.typography}>
                  Get booster packs to build your team deck
                </Typography>
              </Container>
            </Container>
          </Grid>
          <Grid item xs={12}>
            <Login />
          </Grid>
        </Grid>
      </Jumbotron>
    </div>
  )
}
