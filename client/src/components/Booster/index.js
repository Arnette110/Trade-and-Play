import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, Typography, Grid } from '@material-ui/core';
import ConfirmDialog from '../ConfirmDialog'
import RosterDialog from '../RosterDialog'

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

function Booster({ title, description, img, boosterType }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea disabled>
                <img className={classes.media} alt='Booster Packs' src={img} />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        style={{ height: '100px' }}
                    >
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions
                style={{ justifyContent: 'space-evenly' }}
            >
                <Grid container>
                    <Grid item xs={12} style={{marginBottom: 10}}>
                        <RosterDialog
                            boosterType={boosterType}
                        />
                    </Grid>
                    <Grid item xs={12} style={{marginBottom: 10}}>
                        <ConfirmDialog label='First Round Draft' pick='first' boosterType={boosterType} />
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    );
}

export default Booster