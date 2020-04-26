import React from 'react'
import { Grid, useMediaQuery } from '@material-ui/core'
import Booster from '../components/Booster'

function Packs() {
    const isMedium = useMediaQuery('(max-width: 960px');

    return (
        <Grid container style={{justifyContent: 'center'}} spacing={isMedium ? 0 : 3}>
            <Grid item xs={12} sm={8} md={3}>
                <Booster/>
            </Grid>
            <Grid item xs={12} sm={8} md={3}>
                <Booster/>
            </Grid>
            <Grid item xs={12} sm={8} md={3}>
                <Booster/>
            </Grid>
        </Grid>
    )
}



export default Packs;
