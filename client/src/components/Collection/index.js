import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardFlip from '../../pages/CardFlip';
// import ItemsCarousel from 'react-items-carousel';
import API from '../../utils/API';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 'auto',
    justifyContent: 'center',
    textAlign: 'center',
  },
  cardSpacing: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    justifyContent: 'center',
    color: theme.palette.text.secondary,
  },
}))



export default function NestedGrid() {
  const classes = useStyles()

  const getUserCollection = () => {
    return API.getUserCard()
  }

  const consoleLog = (res) => {
    console.log(res.data)
  }

  getUserCollection()
    .then(consoleLog)

  return (
    <div className={classes.root}>
   
      <CardFlip/>

    </div>
  )
}
