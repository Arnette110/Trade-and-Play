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
    cardData: [{
      "_id" : ("5ead98323e21b44128c7b589"),
      "id" : 8474600,
      "season" : "20182019",
      "stat" : {
          "timeOnIce" : "2063:34",
          "assists" : 41,
          "goals" : 15,
          "pim" : 42,
          "shots" : 274,
          "games" : 82,
          "hits" : 53,
          "powerPlayGoals" : 2,
          "powerPlayPoints" : 12,
          "powerPlayTimeOnIce" : "244:30",
          "evenTimeOnIce" : "1606:42",
          "penaltyMinutes" : "42",
          "faceOffPct" : 0,
          "shotPct" : 5.5,
          "gameWinningGoals" : 4,
          "overTimeGoals" : 0,
          "shortHandedGoals" : 0,
          "shortHandedPoints" : 1,
          "shortHandedTimeOnIce" : "212:22",
          "blocked" : 144,
          "plusMinus" : 9,
          "points" : 56,
          "shifts" : 2359,
          "timeOnIcePerGame" : "25:09",
          "evenTimeOnIcePerGame" : "19:35",
          "shortHandedTimeOnIcePerGame" : "02:35",
          "powerPlayTimeOnIcePerGame" : "02:58"
      },
      "bio" : {
          "id" : 8474600,
          "fullName" : "Roman Josi",
          "link" : "/api/v1/people/8474600",
          "firstName" : "Roman",
          "lastName" : "Josi",
          "primaryNumber" : "59",
          "birthDate" : "1990-06-01",
          "currentAge" : 29,
          "birthCity" : "Bern",
          "birthCountry" : "CHE",
          "nationality" : "CHE",
          "height" : "6' 1\"",
          "weight" : 201,
          "active" : true,
          "alternateCaptain" : false,
          "captain" : true,
          "rookie" : false,
          "shootsCatches" : "L",
          "rosterStatus" : "Y",
          "currentTeam" : {
              "id" : 18,
              "name" : "Nashville Predators",
              "link" : "/api/v1/teams/18"
          },
          "primaryPosition" : {
              "code" : "D",
              "name" : "Defenseman",
              "type" : "Defenseman",
              "abbreviation" : "D"
          }
      }
  }],
  })
  
  const classes = useStyles()

  const addHyphenToSeason = (str) => {
    if (str.slice(4, 5) !== '-') {
        const newStr = str.slice(0, 4) + '-' + str.slice(4, 8)
        apiData.cardData[0].season = newStr
    }
  }
  useEffect(() => {
    addHyphenToSeason(apiData.cardData[0].season)
  }, []);

  


  // function findDbData(){
  //   let response = {};
  //   function findAll() {
  //     return API.findAllStats()
  //   }
    
  //   function findAllBios(res) {
  //     response.stats = res.data;
  //     console.log(response.stats);
  //     return API.findAllBios()
  //   }

  //   function sendData(res){
  //     response.bio = res.data;
  //     console.log(response.bio);
  //     setApiData({...apiData, stats: response.stats, bios: response.bio})
  //   }

  //   return findAll().then(findAllBios).then(sendData)

  // }


  const getUserCollection = () => {
    return API.getUserCard()
  }

  const getCollectionData = (res) => {
    console.log(res.data)
    return API.getCardData(res.data)
  }

  const consoleLog = (res) => {
    // setApiData({...apiData, cardData: res.data})
    // console.log(res.data)
  }

    
  useEffect(() => {
    getUserCollection()
    .then(getCollectionData)
    .then(consoleLog)
  }, []);

  return (
    <div className={classes.root}>
      <Swiper {...params}>
        { apiData.cardData.map(el  => {
            return (<div><CardFlip data={el} style={{width: 350}} key={el._id}/></div>)
        })}
        { apiData.cardData.map(el  => {
            return (<div><CardFlip data={el} style={{width: 350}} key={el._id}/></div>)
        })}
        { apiData.cardData.map(el  => {
            return (<div><CardFlip data={el} style={{width: 350}} key={el._id}/></div>)
        })}
        { apiData.cardData.map(el  => {
            return (<div><CardFlip data={el} style={{width: 350}} key={el._id}/></div>)
        })}        
        { apiData.cardData.map(el  => {
            return (<div><CardFlip data={el} style={{width: 350}} key={el._id}/></div>)
        })}        
        { apiData.cardData.map(el  => {
            return (<div><CardFlip data={el} style={{width: 350}} key={el._id}/></div>)
        })}        
        { apiData.cardData.map(el  => {
            return (<div><CardFlip data={el} style={{width: 350}} key={el._id}/></div>)
        })}
      </Swiper>
    </div>
  )
}
