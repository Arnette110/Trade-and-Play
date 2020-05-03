import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardFlip from '../../pages/CardFlip';
// import ItemsCarousel from 'react-items-carousel';
import API from '../../utils/API';
import { AuthContext } from '../../Context/AuthContext'

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
  const {user} = useContext(AuthContext);

    useEffect(() => {
      // console.log(user)
    }, [user]);

    useEffect(() => {
      getUserCollection()
        .then(getCollectionData)
        .then(consoleLog);
    }, [])

  const getUserCollection = () => {
    // Set authcontext set user as argument
    return API.getUserCard()
  }

  const getCollectionData = (res) => {
    // console.log(res.data)
    return API.getCardData(res.data)
  }

  const consoleLog = (res) => {
    // console.log(res.data)
  }


  return (
    <div className={classes.root}>
   
      <CardFlip/>

    </div>
  )
}
