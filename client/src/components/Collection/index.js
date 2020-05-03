import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardFlip from '../../pages/CardFlip';
// import ItemsCarousel from 'react-items-carousel';
import API from '../../utils/API';
import { AuthContext } from '../../Context/AuthContext'

// import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css'
import { Grid, Container } from '@material-ui/core';

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

// const params = {
//   slidesPerView: '3',
//   spaceBetween: 0,
//   centeredSlides: true,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   }
// }

export default function NestedGrid() {
  let [apiData, setApiData] = React.useState({
    cardData: [],
  })
  const classes = useStyles()

  const {user} = useContext(AuthContext);

    useEffect(() => {
      console.log(user)
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
    console.log(res.data)
    return API.getCardData(res.data)
  }

  const consoleLog = (res) => {
    setApiData({ ...apiData, cardData: res.data })
    console.log(res.data)
  }

  useEffect(() => {
    getUserCollection()
      .then(getCollectionData)
      .then(consoleLog)
  }, []);

  return (
    <div className={classes.root}>
      {/* <Swiper {...params}> */}
      <Container>
        <Grid container spacing={1}>
          {apiData.cardData.map(el => {
            return (<Grid item xs={12} md={6} lg={4}><CardFlip data={el} style={{ width: 300 }} key={el._id} /></Grid>)
          })}
        </Grid>
      </Container>
      {/* </Swiper> */}
    </div>
  )
}
