import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { Container } from '@material-ui/core';
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
      {apiData.stats.map(el  => {
        let matchedBio = apiData.bios.find((bio) => bio.id === el.id);
        // for (var i = 0; i < apiData.bio.length; i++){
          // console.log("Bio: " , matchedBio.id)
          // console.log("Stat: ", el.id)
          
        //   if (apiData.bio.id === el.stat.id) {
        //     matchedBio = apiData.bio[i];
        //   }
        // }
        // console.log(matchedBio.id);
        return <CardFlip frontsideData={matchedBio} backsideData={el} key={el.id}/>
      })}
  
    </div>
  )
}
