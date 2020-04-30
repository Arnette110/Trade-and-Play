import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@material-ui/core';
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

function Booster(props) {
    const classes = useStyles();
    const { title, description, img } = props

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
                <ConfirmDialog/>
                <RosterDialog
                    boosterType={props.boosterType}
                />
            </CardActions>
        </Card>
    );
}

export default Booster