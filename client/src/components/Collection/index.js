import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { Container } from '@material-ui/core';
import CardFlip from '../../pages/CardFlip';
// import ItemsCarousel from 'react-items-carousel';
import API from '../../utils/API';

import Swiper from 'react-id-swiper';
import { Container, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 'auto',
    // justifyContent: 'center',
    // textAlign: 'center',
  },
  cardSpacing: {
    // justifyContent: 'center',
    // textAlign: 'center',
  },
  paper: {
    padding: theme.spacing(0),
    // textAlign: 'center',
    // justifyContent: 'center',
    color: theme.palette.text.secondary,
  },
}))

  const params = {
    slidesPerView: 4,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  }



export default function NestedGrid() {
  const classes = useStyles()

  let [apiData, setApiData] = React.useState({
    stats: [],
    bios: []
  })


  function findDbData(){
    let response = {};
    function findAll() {
      return API.findAllStats()
    }
    
    function findAllBios(res) {
      response.stats = res.data;
      console.log(response.stats);
      return API.findAllBios()
    }

    function sendData(res){
      response.bio = res.data;
      console.log(response.bio);
      setApiData({...apiData, stats: response.stats, bios: response.bio})
    }

    return findAll().then(findAllBios).then(sendData)

  }

  useEffect(() => {findDbData()}, []);


  return (
    <div className={classes.root}>
        {/* <Swiper> */}
      
        {apiData.stats.map(el  => {
          let matchedBio = apiData.bios.find((bio) => bio.id === el.id);

          return (<CardFlip frontsideData={matchedBio} backsideData={el} key={el.id}/>)
        })}
      {/* </Swiper> */}
    </div>
  )
}
