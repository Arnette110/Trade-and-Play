import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import CardFlip from '../components/CardFlip';
// import ItemsCarousel from 'react-items-carousel';
import API from '../utils/API';
import { AuthContext } from '../Context/AuthContext'
// import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css'
import {
  Grid,
  Container,
  TextField
} from '@material-ui/core';

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
    // padding: theme.spacing(0),
    textAlign: 'center',
    justifyContent: 'center',
    // color: theme.palette.text.secondary,
  },
  search: {
    backgroundColor: 'white',
    textIndent: '5rem'
  }
}))

const NestedGrid = () => {
  let [apiData, setApiData] = useState({
    cardData: [],
  })
  const [search, setSearch] = useState('')
  const classes = useStyles()
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
      getUserCollection(user.username)
        .then(getCollectionData)
        .then(saveDraftToState);
    }, 500)
    // eslint-disable-next-line
  }, [])

  const getUserCollection = (username) => {
    // Set authcontext set user as argument
    return API.getUserCard(username)
  }

  const getCollectionData = (res) => {
    return API.getCardData(res.data)
  }

  const saveDraftToState = (res) => {
    setApiData({ ...apiData, cardData: res.data })
  }

  const findPlayers = apiData.cardData.filter((e) => {
    return (
      e.bio['fullName'].toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
      e.bio.primaryPosition['name']
        .toLowerCase()
        .indexOf(search.toLowerCase()) !== -1 ||
      e.bio.currentTeam['name']
        .toLowerCase()
        .indexOf(search.toLowerCase()) !== -1
    )
  })
  const handleInputChange = event => {
    setSearch(event.target.value)
  }

  return (
    <div className={classes.root}>
      <Container>
        <form className={classes.form}>
          <div>
            <TextField
              fullWidth
              className={classes.search}
              id='outlined-search'
              placeholder='Search'
              type='search'
              variant='outlined'
              value={search}
              onChange={handleInputChange}
              // margin='normal'
              multiline
            />
          </div>
        </form>
      </Container>
      <br />
      <Grid container spacing={0}>
        {findPlayers.map((el, index) => {
          let concatKey = el._id.concat("_", index)
          return (
            <Grid item xs={12} md={6} lg={4} key={concatKey}>
              <CardFlip data={el} style={{ width: 300 }} />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default NestedGrid