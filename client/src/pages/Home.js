import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Container } from '@material-ui/core'
import auth0Client from '../Auth'
import logo from '../Logo.svg'
import Jumbotron from '../components/Jumbotron'
import Login from '../components/login'
import StarBorderIcon from '@material-ui/icons/StarBorder'

const useStyles = makeStyles({
  textContainer: {
    background: 'rgb(235,36,39)',
    border: 0,
    borderRadius: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    marginTop: '5rem',
  },
})

export default function Home() {
  return (
    <div>
      <Jumbotron>
        <Grid container>
          <Grid item xs={12}>
            <Container>
              <img src={logo} alt='my logo'></img>
            </Container>
          </Grid>
          <br />
          <Grid item xs={12}>
            <Container>
              <Typography
                variant='h4'
                style={{ paddingTop: '2rem', fontFamily: 'Roboto Black' }}>
                YOU'RE THE BOSS!
              </Typography>
              <br />
              <Container style={{display: 'flex', justifyContent: 'center'}}>
                <StarBorderIcon fontSize='large'/>{' '}
                <Typography display='inline' variant='h5' style={{}}>
                  Get booster packs to build your team deck
                </Typography>
              </Container>
              <Container>
                <StarBorderIcon fontSize='large' />{' '}
                <Typography display='inline' variant='body1'>
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
