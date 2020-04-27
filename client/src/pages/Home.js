import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  Typography,
  Container,
  Box,
  CardMedia,
  CardContent,
  Paper, GridListTileBar, IconButton,
} from '@material-ui/core'
import Jumbotron from '../components/Jumbotron'
import LearnMore from "../components/LearnMore"

// const useStyles = makeStyles((theme) => ({

//    heroContainer: {
//      height: 800,
//      backgroundImage: `url(${"../assets/images"})`,
//      backgroundSize: 'cover',
//      backgroundPosition: 'center',
//      width: `calc(100vw + 48px)`,
//      margin: -24,
//      padding: 24,
//    }

// }))

// Photo by Mick Haupt on Unsplash

export default function Home() {
  // const classes = useStyles()

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


