import React, { useState } from "react";
import { Container, TextField, Button } from '@material-ui/core';
import API from '../utils/API';

function PlayerCreate(){

  const [form, setForm] = useState({
    playerId: '',
    season: ''
  })

  function handleInputChange(event) {
    const { name, value } = event.target;
    setForm({...form, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (form.playerId) {
      API.getBio(form.playerId)
        .then(res => console.log(res.data.people[0]))
        .catch(err => console.log(err));
      API.getStats(form.playerId, form.season)
        .then(res => console.log(res.data.stats[0].splits[0]))
        .catch(err => console.log(err));
      }
  };

  return (
    <Container>
      <div>
        <form>
          <TextField id="standard-basic" label="PlayerId" onChange={handleInputChange} name="playerId" />
          <TextField id="standard-basic" label="Season"  onChange={handleInputChange} name="season" />
          <Button variant="contained" onClick={handleFormSubmit}>Submit</Button>
        </form>
      </div>
      <div>
        return JSON here
      </div>
    </Container>
  )
}

export default PlayerCreate;
