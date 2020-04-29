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

// export default Profile;



import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
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



            </div>


            {/* form */}
            <div>


                <form className={classes.root} noValidate autoComplete="off">

                    <TextField id="outlined-basic" label="prueba" variant="outlined" />

                    <TextField id="outlined-textarea" label="Multiline Placeholder" placeholder="Placeholder" multiline variant="outlined" />

                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={Gender}
                            onChange={handleChange}
                            label="Gender"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"Male"}>Ten</MenuItem>
                            <MenuItem value={"Female"}>Twenty</MenuItem>

                        </Select>
                    </FormControl>





                </form>
            </div>
        </div>
    );
}