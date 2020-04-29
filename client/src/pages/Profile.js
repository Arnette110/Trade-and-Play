// import React from "react";
// import TextField from '@material-ui/core/TextField';
// import MenuItem from '@material-ui/core/MenuItem';

// function Profile() {


//     const handleChange = (event) => {
//         setCurrency(event.target.value);
//       };

//     const Gender = [
//         {
//           value: 'M',
//           label: 'M',
//         },
//         {
//           value: 'F',
//           label: 'F',
//         },        
//       ];

//     function hello () {
//         alert('hello')
//     }

//     return (
//   <div>

//     <TextField id="standard-basic" label="Name" />

//     <TextField
//           id="Gender"
//           select
//           label="Select"
//           value={Gender}
//           onChange={handleChange}
//           helperText="Please select your currency"
//         >
//           {Gender.map((option) => (
//             <MenuItem key={option.value} value={option.value}>
//               {option.label}
//             </MenuItem>
//           ))}
//         </TextField>


//     <TextField id="standard-basic" label="Standard" />
//     <TextField id="standard-basic" label="Standard" />

//   </div>
//     )
// }

// export default Profile

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';




const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(2),
            width: '25ch',
        },
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),

    },
}));



//   for the select






export default function SimpleSelect() {

    const classes = useStyles();
    const [Gender, setGender] = React.useState('');

    const handleChange = (event) => {
        setGender(event.target.value);
    };



    return (
        <div>

            {/* picture */}
            <div>

                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                <Avatar alt="Remy Sharp" src="https://avatars1.githubusercontent.com/u/56489980?s=460&u=474c8bfae2757c5101e04e4a5e41e0b078c3d226&v=4" className={classes.large} />
                <Button variant="contained" > Choose File </Button>

            </div>


            {/* form */}
            <div>

                <Grid container justify="space-around">











                    <form className={classes.root} noValidate autoComplete="off">

                        <TextField id="outlined-basic" label="First Name" variant="outlined" />
                        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                        <TextField id="outlined-basic" label="Phone" variant="outlined" />
                        <TextField id="outlined-basic" label="Email" variant="outlined" />

                        <TextField id="outlined-textarea" label="Multiline Placeholder" placeholder="Placeholder" multiline variant="outlined" />



                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={Gender}
                                onChange={handleChange}
                                label="Gender">
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={"Male"}>Ten</MenuItem>
                                <MenuItem value={"Female"}>Twenty</MenuItem>

                            </Select>
                        </FormControl>





                    </form>
                </Grid>
            </div>
        </div>
    );
}

