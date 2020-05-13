import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Avatar, Typography } from '@material-ui/core';
import abrKey from '../../utils/abbreviationKey'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    alignLeftAndCenter: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }
}));

const RosterLi = (props) => {
    const classes = useStyles();

    const getAbrName = (key) => {
        key.forEach(el => {
            if (el.fullName === props.data.bio.currentTeam.name) {
                props.data.bio.currentTeam.abrName = el.abrName
            }
        })
    }

    // invoke functions
    getAbrName(abrKey)

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Avatar
                        style={{ width: '100%', height: '100%' }}
                        src={'https://nhl.bamcontent.com/images/headshots/current/168x168/' + props.data.id + '@2x.jpg'}
                    />
                </Grid>
                <Grid item xs={2} className={classes.alignLeftAndCenter}>
                    <Typography variant='h6'>
                        #{props.data.bio.primaryNumber}
                    </Typography>
                    <Typography variant='h6'>
                        {props.data.bio.currentTeam.abrName}
                    </Typography>
                </Grid>
                <Grid item xs={7} className={classes.alignLeftAndCenter}>
                    <Typography gutterBottom variant="h6">
                        {props.data.bio.fullName}
                    </Typography>
                    <Typography gutterBottom variant="subtitle1">
                        {props.data.season}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default RosterLi