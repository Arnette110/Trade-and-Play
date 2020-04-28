import React from 'react'
import { Grid } from '@material-ui/core'
import Booster from '../components/Booster'

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
                    img='https://nhl.bamcontent.com/images/photos/316717774/2048x1152/cut.jpg'
                />
            </Grid>
            <Grid item xs={12} sm={8} md={3}>
                <Booster
                    title='Defensemen'
                    description="Your collection can become a defensive powerhouse with the top blue lines. The season's best defensemen avaialable in a single pack"
                    img='https://nhl.bamcontent.com/images/photos/316632660/2048x1152/cut.jpg'
                />
            </Grid>
            <Grid item xs={12} sm={8} md={3}>
                <Booster
                    title='Goalie'
                    description="Make your collection untouchable with the best Goalies in the league. The season's best goalies all available in a single pack."
                    img='https://nhl.bamcontent.com/images/photos/316699102/2048x1152/cut.jpg'
                />
            </Grid>
        </Grid>
    )
}



export default Packs;
