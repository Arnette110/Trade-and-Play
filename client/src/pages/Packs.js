import React from 'react'
import { Grid } from '@material-ui/core'
import Booster from '../components/Booster'
import Forward from '../assets/Forwards.jpg'
import Defensemen from '../assets/Defensemen.jpg'
import Goalie from '../assets/Goalies.jpg'

function Packs() {

    return (
        <Grid container
            alignItems="stretch"
            justify='space-evenly'
            direction='row'
        >
            <Grid item xs={12} sm={8} md={3}>
                <Booster
                    title='Forwards'
                    description="Increase the offensive power of your collection with the top NHL's forwards. The season's top scorers avaialable in a single pack "
                    img={Forward}
                    boosterType='Forward'
                />
            </Grid>
            <Grid item xs={12} sm={8} md={3}>
                <Booster
                    title='Defensemen'
                    description="Your collection can become a defensive powerhouse with the top blue lines. The season's best defensemen avaialable in a single pack"
                    img={Defensemen}
                    boosterType='Defenseman'
                />
            </Grid>
            <Grid item xs={12} sm={8} md={3}>
                <Booster
                    title='Goalies'
                    description="Make your collection untouchable with the best Goalies in the league. The season's best goalies all available in a single pack."
                    img={Goalie}
                    boosterType='Goalie'
                />
            </Grid>
        </Grid>
    )
}



export default Packs;
