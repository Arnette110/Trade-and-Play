import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Avatar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export default function RosterLi() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Avatar
                        style={{width: '100%', height: '100%'}}
                        src='https://nhl.bamcontent.com/images/headshots/current/168x168/8478427@2x.jpg'
                    />
                </Grid>
                <Grid item xs={2}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}
                >
                    <Typography variant='h6'>
                        #20
                    </Typography>
                    <Typography variant='h6'>
                        CAR
                    </Typography>
                </Grid>
                <Grid item xs={7}>
                    <Grid item xs>
                        <Typography gutterBottom variant="h6">
                            Sebastian Aho
                        </Typography>
                        <Typography gutterBottom variant="subtitle1">
                            2018-2019
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
