import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    marginTop: '20px',
  },
  media: {
    height: '100%',
    width: '100%',
  },
});

function Booster() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <img className={classes.media} alt='Booster Packs' src='https://nhl.bamcontent.com/images/photos/316717774/2048x1152/cut.jpg'/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Forwards
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Increase the offensive ability of your collection with new forwards
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{justifyContent: 'center'}}>
        <Button size="small" color="primary">
          Buy Booster Pack
        </Button>
      </CardActions>
    </Card>
  );
}

export default Booster