import React from 'react'

import {
  Grid,
  Typography,
  Container,
} from '@material-ui/core'
import Jumbotron from '../components/Jumbotron'
import LearnMore from "../components/LearnMore"

export default function Home() {
  

  return (
    <div>
      <Jumbotron>
        <Grid container>
          <Grid item xs={12}>
            <Container>
              <Typography variant='h1' style={{ overflowWrap: 'inherit' }}>
                Trade{' '}
              </Typography>
              <Typography variant='h3' style={{ overflowWrap: 'inherit' }}>
                &
              </Typography>
              <Typography variant='h1' style={{ overflowWrap: 'inherit' }}>
                Play{' '}
              </Typography>
            </Container>
            <br />
            <LearnMore />
          </Grid>
        </Grid>
      </Jumbotron>
    </div>
  )
}


