import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
// import CardFlip from '../../pages/CardFlip';
import ItemsCarousel from 'react-items-carousel';

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


  const [activeItemIndex, setActiveItemIndex] = React.useState(0);
  const chevronWidth = 40;

  // function FormRow() {
  //   return (
  //     <React.Fragment>
  //       <Grid className={classes.root} item xs={3}>
  //       <CardFlip/>
  //       </Grid>
  //       <Grid className={classes.root} item xs={3}>
  //       <CardFlip/>
  //       </Grid>
  //       <Grid  className={classes.root}item xs={3}>
  //       <CardFlip/>
  //       </Grid>
  //       <Grid  className={classes.root}item xs={3}>
  //       <CardFlip/>
  //       </Grid>
  //     </React.Fragment>
  //   );
  // }

  return (
    <div className={classes.root}>
      {/* <Container>
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
      </Container> */}

      {/* Scroller code snippet */}
      <Container>
        <div style={{ padding: `20 ${chevronWidth}px` }}>
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={3}
            gutter={20}
            leftChevron={<button>{'<'}</button>}
            rightChevron={<button>{'>'}</button>}
            outsideChevron
            chevronWidth={chevronWidth}
          >
            <div style={{ height: 300, background: '#EEE' }}>First Card</div>
            <div style={{ height: 300, background: '#EEE' }}>Second card</div>
            <div style={{ height: 300, background: '#EEE' }}>Third Card</div>
            <div style={{ height: 300, background: '#EEE' }}>Fourth card</div>
            <div style={{ height: 300, background: '#EEE' }}>Fifth card</div>
            <div style={{ height: 300, background: '#EEE' }}>Sixth card</div>
            <div style={{ height: 300, background: '#EEE' }}>Seventh card</div>
            <div style={{ height: 300, background: '#EEE' }}>Eighth card</div>
            <div style={{ height: 300, background: '#EEE' }}>Ninth card</div>
            <div style={{ height: 300, background: '#EEE' }}>Tenth card</div>
          </ItemsCarousel>
        </div>
      </Container>
      {/* Scroller end code */}

    </div>
  );
}