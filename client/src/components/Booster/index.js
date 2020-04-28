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
    borderRadius: 'unset'
  },
  media: {
    height: '100%',
    width: '100%',
  },
});

function Booster(props) {
  const classes = useStyles();
  const { title, description, img } = props

  return (
    <Card className={classes.root}>
      <CardActionArea disableRipple disabled>
        <img className={classes.media} alt='Booster Packs' src={img}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{height: '100px'}}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{justifyContent: 'center'}}>
        <Button size="medium" variant="contained" color="primary">
          Buy Booster Pack
        </Button>
      </CardActions>
    </Card>
  );
}

export default Booster