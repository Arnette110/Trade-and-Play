import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, Paper, CardContent, Typography } from '@material-ui/core/Card'

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    maxWidth: 300,
    margin: 'auto',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
})

export default function OutlinedCard({children}) {
  const classes = useStyles(children)
//   const bull = <span className={classes.bullet}> • </span>

  return (
    <Paper elevation={3} className={classes.root} variant='outlined' justify='center'>
      <Card>
        <CardContent>
          <Typography
            component='div'
            className={classes.title}
            color='inherit'
            gutterBottom>
           {children}{' '}
          </Typography>{' '}
          <Typography variant='h5' component='h2'>
            {children}
          </Typography>{' '}
          <Typography className={classes.pos} color='textSecondary'>
            {children}{' '}
          </Typography>{' '}
          <Typography variant='body2' component='p'>
            {children}<br /> {' '}
          </Typography>{' '}
        </CardContent>{' '}
      </Card>
    </Paper>
  )
}
