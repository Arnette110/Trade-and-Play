import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography
} from '@material-ui/core';
import Icons from '../../utils/logoData';

const useStyles = makeStyles((theme) => ({
  root: {
    border: "5px solid black",
    borderRadius: 10,
    height: 350,
  },
  media: {
    height: 0,
    marginLeft: 70,
    marginRight: 70,
    border: "5px solid black",
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
    backgroundColor: 'white',
    color: 'white',
  },
  deckIcon: {
    maxWidth: 40,
  },
}));

const checkColors = (teamName) => {
  return Icons.find(({ name }) => name === teamName)
}

const PlayerCardBack = ({ data }) => {
  const classes = useStyles();
  const currentTeam = checkColors(data.bio.currentTeam.name)
  const isGoalie = (data.bio.primaryPosition.name === 'Goalie');

  return (
    <Card className={classes.root} style={{ backgroundColor: currentTeam.colorSecondary, color: currentTeam.textSecondary }}>
      <CardHeader
        subheaderTypographyProps={{ color: 'inherit' }}
        avatar={
          <Avatar aria-label='rarity' className={classes.avatar}>
            <img src={Icons.find(({ name }) => name === data.bio.currentTeam.name).src}
              alt='deck icon'
              className={classes.deckIcon} />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <Avatar aria-label="rarity" className={classes.avatar}>
              <img alt="deck icon" className={classes.deckIcon} src={Icons.find(({ name }) => name === 'nhlIcon').src} />
            </Avatar>
          </IconButton>
        }
        title={data.bio.fullName}
        subheader={data.season}
      />
      <CardContent>
        <Typography variant="body2" style={{ color: currentTeam.textSecondary }} component="p">
          <li>Position: {data.bio.primaryPosition.name}</li>
          <li>Games Played: {data.stat.games}</li>
          <li>{isGoalie ? 'Save Percentage: ' : 'Shots: '} {isGoalie ? data.stat.savePercentage : data.stat.shots}</li>
          <li>{isGoalie ? 'Saves: ' : 'Assists: '} {isGoalie ? data.stat.saves : data.stat.assists}</li>
          <li>{isGoalie ? 'Goals Against: ' : 'Goals: '} {isGoalie ? data.stat.goalsAgainst : data.stat.goals}</li>
          <li>{isGoalie ? 'Average Goals allowed: ' : 'Game Winning Goals: '} {isGoalie ? data.stat.goalAgainstAverage : data.stat.gameWinningGoals}</li>
          <li>{isGoalie ? 'Shots Against: ' : 'Hits: '} {isGoalie ? data.stat.shotsAgainst : data.stat.hits}</li>
          <li>{isGoalie ? 'Wins: ' : 'Over Time Goals: '} {isGoalie ? data.stat.wins : data.stat.overTimeGoals}</li>
          <li>{isGoalie ? 'Power Play Shots: ' : 'Penalty Minutes: '} {isGoalie ? data.stat.powerPlayShots : data.stat.penaltyMinutes}</li>
          <li>Time on Ice: {data.stat.timeOnIce}</li>
          <li>Avg Time on Ice Per Game: {data.stat.timeOnIcePerGame}</li>
          <li>{isGoalie ? 'Shutouts: ' : 'Penalty Minutes: '} {isGoalie ? data.stat.shutouts : data.stat.penaltyMinutes}</li>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      </CardActions>
    </Card>

  );
}

export default PlayerCardBack