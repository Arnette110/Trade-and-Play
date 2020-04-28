import React from 'react'
import { Grid, useMediaQuery } from '@material-ui/core'
import Booster from '../components/Booster'

function Packs() {
    const isMedium = useMediaQuery('(max-width: 960px');

    return (
        <Grid container
            direction='row'
            justify='center'
            spacing={isMedium ? 0 : 5}>
            <Grid item xs={12} sm={8} md={4}>
                <Booster
                    title='Forwards'
                    description="Increase the offensive power of your collection with the top NHL's forwards. The season's top scorers avaialable in a single pack "
                    img='https://nhl.bamcontent.com/images/photos/316717774/2048x1152/cut.jpg'
                />
            </Grid>
            <Grid item xs={12} sm={8} md={4}>
                <Booster
                    title='Defensemen'
                    description="Your collection can become a defensive powerhouse with the top blue lines. The season's best defensemen avaialable in a single pack"
                    img='https://nhl.bamcontent.com/images/photos/316632660/2048x1152/cut.jpg'
                />
            </Grid>
            <Grid item xs={12} sm={8} md={4}>
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
