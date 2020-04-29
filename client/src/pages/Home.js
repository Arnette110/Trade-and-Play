import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Container } from "@material-ui/core"
import auth0Client from "../Auth";



// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     textAlign: "center",
//     overflow: 'hidden',
//     backgroundColor: theme.palette.background.paper,
//   },
  
// }))

export default function Home() {



    // const classes = useStyles()
     const user = auth0Client.getProfile();

     if (!user) {
       return <div>Loading...</div>;
     }


    return (
      <Grid container>
        <Grid item xs={12}>
          <Container>
            {console.log(user)}
            <img src={user.picture} alt={user.picture} />
            <Typography style={{ overflowWrap: "inherit" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              porro hic. Quos modi libero voluptatem odit consequatur aut fugiat
              temporibus pariatur sit, accusantium voluptates ducimus aliquid!
              Rerum dignissimos repellat architecto!
            </Typography>
          </Container>
        </Grid>
      </Grid>
    );
}



