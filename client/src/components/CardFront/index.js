import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
} from '@material-ui/core'
import Icons from '../../utils/logoData';

const useStyles = makeStyles((theme) => ({
  root: {
    border: '5px solid black',
    borderRadius: 10,
    // margin: 10,
    height: 350,
  },
  title: {
    color: 'red'
  }
  ,
  media: {
    height: 0,
    marginLeft: 50,
    marginRight: 50,
    border: '5px solid black',
    borderRadius: 10,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
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
}))
function checkColors(teamName){
  return Icons.find( ({ name }) => name === teamName)
}

export default function PlayerCardFront({data}) {
  
  // console.log(data);
  const currentTeam = checkColors(data.bio.currentTeam.name)
  const classes = useStyles()

  const isCaptain = (data.bio.captain === true);

  return (
    <Card className={classes.root} style={{backgroundColor: currentTeam.colorPrimary, color: currentTeam.textPrimary}}>
      <CardHeader
        subheaderTypographyProps={{color: 'inherit'}}
        style={{title: {color: currentTeam.textPrimary},}}
        avatar={
          <Avatar aria-label='rarity' className={classes.avatar}>
            <img src={Icons.find( ({ name }) => name === data.bio.currentTeam.name).src} 
                alt='deck icon'
                className={classes.deckIcon}/>
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <Avatar aria-label='rarity' className={classes.avatar}>
              <img
                alt='deck icon'
                className={classes.deckIcon}
                src={Icons.find( ({ name }) => name === 'nhlIcon').src}
              />
            </Avatar>
          </IconButton>
        }
        title={data.bio.fullName}
        subheader={data.season}
      />
      <CardMedia
        className={classes.media}
        image={'https://nhl.bamcontent.com/images/headshots/current/168x168/'+ data.id + '.jpg'}
        title='Player Portrait'
      />
      <CardContent>
        <Typography variant='body2' style={{color: currentTeam.textPrimary}} component='p'>
            {data.bio.fullName}{isCaptain ? ' is a captain, and is a ' :  ' is a '} {data.bio.primaryPosition.name} {' for the '} {data.bio.currentTeam.name}{'.'}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton> */}
      </CardActions>
    </Card>
  )
}
