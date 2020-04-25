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


  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (form.playerId && form.season) {
      let bio = await fetch(`https://statsapi.web.nhl.com/api/v1/people/${form.playerId}`)
      let bioData = await bio.json()
      let stats = await fetch(`https://statsapi.web.nhl.com/api/v1/people/${form.playerId}/stats?stats=statsSingleSeason&season=${form.season}`)
      let statsData = await stats.json()
      statsData.stats[0].splits[0].id = form.playerId
      setForm({...form, bioObj: bioData.people[0], statsObj: statsData.stats[0].splits[0]})
    };
  }

  const emptyStateObjs = () => {
    setForm({...form, bioObj: {}, statsObj: {}})
  }

  const handleSubmitToDb = async () => {
    let statCheck = await API.findPlayerStats({id: form.statsObj.id, season: form.statsObj.season})
    if (statCheck.data) {
      console.log('Player already in database')
    }
    else {
      API.savePlayerStats(form.statsObj)
      console.log('Player added to database')
    }
    emptyStateObjs()
    // API.savePlayerBio(form.bioObj)
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
