import React, { useState } from "react";
import { Container, TextField, Button, Typography, Grid } from '@material-ui/core';
import API from '../utils/API';

const PlayerCreate = () => {

  const [form, setForm] = useState({
    playerId: '',
    season: '',
    bioObj: {},
    statsObj: {}
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value })
  };

  const getPlayerInfoFromAPI = () => {
    let response = {};
    const getBio = () => {
      return API.getBio(form.playerId)
    }
    
    const getStats = res => {
      response.bio = res.data.people[0];
      return API.getStats(form.playerId, form.season);
    }
  
    const setPlayerInfoToState = (res) => {
      response.stats = res.data.stats[0].splits[0];
      response.stats.id = form.playerId
      setForm({...form, bioObj: response.bio, statsObj: response.stats})
    }

    return getBio()
      .then(getStats)
      .then(setPlayerInfoToState)
      .catch(err => {
        console.log('error', err)
      })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (form.playerId && form.season) {
      getPlayerInfoFromAPI()
    };
  }

  const emptyStateObjs = () => {
    setForm({...form, bioObj: {}, statsObj: {}})
  }

  const handleSubmitToDb = async () => {
    let statCheck = await API.findPlayerStats({id: form.statsObj.id, season: form.statsObj.season})
    let bioCheck = await API.findPlayerBio({id: form.statsObj.id})
    if (statCheck.data === null) {
      console.log('Stat DO NOT EXIST in the database')
      // API.savePlayerStats(form.statsObj)
      if (bioCheck.data) {
        console.log('Bio EXIST in the database')
      }
      else {
        console.log('Stats DO NOT EXIT in the database')
        // API.savePlayerBio(form.bioObj)
      }
    }
    else {
      console.log('Player & Stats EXIST in the database')
    }
    emptyStateObjs()
  }

  const isObjEmpty = (statsObj, bioObj ) => {
    if (Object.keys(statsObj).length === 0 || Object.keys(bioObj).length === 0) {
      return true
    }
    else {
      return false
    }
  }

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <form>
            <TextField id="standard-basic" label="PlayerId" onChange={handleInputChange} name="playerId" helperText="Example: 8474565" required />
            <TextField id="standard-basic" label="Season" onChange={handleInputChange} name="season" helperText="Example: 20182019" required />
            <Button variant="contained" onClick={handleFormSubmit}>Search for Player Data</Button>
            <Button variant="contained" onClick={handleSubmitToDb}
            disabled={isObjEmpty(form.statsObj, form.bioObj) ? true : false }
            >Add Player to DB</Button>
          </form>
        </Grid>
        <Grid item xs={6}>
          <Typography variant='h6'>Player Bio Data</Typography>
          <pre>{JSON.stringify(form.bioObj, null, 2)}</pre>
        </Grid>
        <Grid item xs={6}>
          <Typography variant='h6'>Player Stats Data</Typography>
          <pre>{JSON.stringify(form.statsObj, null, 2)}</pre>
        </Grid>
      </Grid>

    </Container>
  )
}

export default PlayerCreate;
