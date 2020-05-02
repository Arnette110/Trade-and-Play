import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardFlip from '../../pages/CardFlip';
// import ItemsCarousel from 'react-items-carousel';
import API from '../../utils/API';

import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css'
import { Container, Box } from '@material-ui/core';

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

  const params = {
    slidesPerView: '3',
    spaceBetween: 0,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  }

export default function NestedGrid() {
  let [apiData, setApiData] = React.useState({
    cardData: [],
  })
  
  const classes = useStyles()

  // const addHyphenToSeason = (str) => {
  //   if (str.slice(4, 5) !== '-') {
  //       const newStr = str.slice(0, 4) + '-' + str.slice(4, 8)
  //       apiData.cardData[0].season = newStr
  //   }
  // }
  // useEffect(() => {
  //   addHyphenToSeason(apiData.cardData[0].season)
  // }, []);

  const getUserCollection = () => {
    return API.getUserCard()
  }

  const getCollectionData = (res) => {
    console.log(res.data)
    return API.getCardData(res.data)
  }

  const consoleLog = (res) => {
    setApiData({...apiData, cardData: res.data})
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
        { apiData.cardData.map(el  => {
            return (<CardFlip data={el} style={{width: 350}} key={el._id}/>)
        })}
      {/* </Swiper> */}
    </div>
  )
}
