import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    border: "3px solid blue",
    borderRadius: 10,
    margin: 10,
  },
  media: {
    height: 0,
    marginLeft: 70,
    marginRight: 70,
    border: "3px solid blue",
    borderRadius: 10,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: blue[500],
  },
  deckIcon: {
      maxWidth: 40,
  },
}));

export default function PlayerCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="rarity" className={classes.avatar}>
              Rare
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <Avatar aria-label="rarity" className={classes.avatar}>
              <img alt="deck icon" className={classes.deckIcon} src="data:image/jpeg;base64,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"/>
          </Avatar>
          </IconButton>
        }
        title="Player Name"
        subheader="Season number #"
      />
      <CardMedia
        className={classes.media}
        image="https://nhl.bamcontent.com/images/headshots/current/168x168/8474600.jpg"
        title="Player Portrait"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Short player bio could go in this section!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Player info here
          </Typography>
          <Typography paragraph>
            Player info here
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}