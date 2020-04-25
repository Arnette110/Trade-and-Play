import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardFlip from '../../pages/CardFlip';
import { Container } from '@material-ui/core';

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
  }
  ,
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    justifyContent: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid className={classes.cardSpacing} item xs={3}>
        <CardFlip/>
        </Grid>
        <Grid className={classes.cardSpacing} item xs={3}>
        <CardFlip/>
        </Grid>
        <Grid  className={classes.cardSpacing}item xs={3}>
        <CardFlip/>
        </Grid>
        <Grid  className={classes.cardSpacing}item xs={3}>
        <CardFlip/>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
        <Container>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={0}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={0}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={0}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={0}>
          <FormRow />
        </Grid>
      </Grid>
      </Container>
    </div>
  );
}