import React, { useState } from "react";
import { Container, TextField, Button, Typography, Grid } from '@material-ui/core';
import API from '../utils/API';

function PlayerCreate() {

  const [form, setForm] = useState({
    playerId: '',
    season: '',
    bioObj: {},
    statsObj: {}
  })

  function handleInputChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value })
  };


  async function handleFormSubmit(event) {
    event.preventDefault();
    if (form.playerId && form.season) {
      let bio = await fetch(`https://statsapi.web.nhl.com/api/v1/people/${form.playerId}`)
      let bioData = await bio.json()
      let stats = await fetch(`https://statsapi.web.nhl.com/api/v1/people/${form.playerId}/stats?stats=statsSingleSeason&season=${form.season}`)
      let statsData = await stats.json()
      statsData.stats[0].splits[0].id = form.playerId
      setForm({...form, bioObj: bioData.people[0], statsObj: statsData.stats[0].splits[0]})
      API.savePlayer(form.statsObj)
    };
  }
  // function addIdAndSetForm(obj) {
  //   let stats = obj
  //   stats.id = form.playerId
  //   console.log('stats: ', stats)
  //   setForm({ ...form, statsObj: stats })
  // }
  // function handleFormSubmit(event) {
  //   event.preventDefault();
  //   if (form.playerId && form.season) {
  //     // gets Bio information
  //     API.getBio(form.playerId)
  //       .then(res => setForm({ ...form, bioObj: res.data.people[0] }))
  //       .catch(err => console.log(err));
  //     // gets player stats
  //     API.getStats(form.playerId, form.season)
  //       .then(res => addIdAndSetForm(res.data.stats[0].splits[0]))
  //       .catch(err => console.log(err));
  //   }
  // };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <form>
            <TextField id="standard-basic" label="PlayerId" onChange={handleInputChange} name="playerId" required />
            <TextField id="standard-basic" label="Season" onChange={handleInputChange} name="season" required />
            <Button variant="contained" onClick={handleFormSubmit}>Submit</Button>
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
