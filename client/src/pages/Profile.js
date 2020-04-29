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
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(10),
        },
    },
}));

export default function ComposedTextField() {
    const [name, setName] = React.useState('Composed TextField');
    const classes = useStyles();

    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">

            <FormControl variant="outlined">
                    <InputLabel htmlFor="component-outlined">First Name</InputLabel>
                    <OutlinedInput id="component-outlined" value={name} onChange={handleChange} label="Name" />
                </FormControl>

                <FormControl variant="outlined">
                    <InputLabel htmlFor="component-outlined">Last Name</InputLabel>
                    <OutlinedInput id="component-outlined" value={name} onChange={handleChange} label="Name" />
                </FormControl>

                <FormControl variant="outlined">
                    <InputLabel htmlFor="component-outlined">Phone Number</InputLabel>
                    <OutlinedInput id="component-outlined" value={name} onChange={handleChange} label="Name" />
                </FormControl>

                <FormControl variant="outlined">
                    <InputLabel htmlFor="component-outlined">Email</InputLabel>
                    <OutlinedInput id="component-outlined" value={name} onChange={handleChange} label="Name" />
                </FormControl>

                <FormControl variant="outlined">
                    <InputLabel htmlFor="component-outlined">Location</InputLabel>
                    <OutlinedInput id="component-outlined" value={name} onChange={handleChange} label="Name" />
                </FormControl>

      



                <FormControl>
                    <InputLabel htmlFor="component-simple">Name</InputLabel>
                    <Input id="component-simple" value={name} onChange={handleChange} />
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="component-helper">Name</InputLabel>
                    <Input
                        id="component-helper"
                        value={name}
                        onChange={handleChange}
                        aria-describedby="component-helper-text"
                    />
                    <FormHelperText id="component-helper-text">Some important helper text</FormHelperText>
                </FormControl>


                <FormControl disabled>
                    <InputLabel htmlFor="component-disabled">Name</InputLabel>
                    <Input id="component-disabled" value={name} onChange={handleChange} />
                    <FormHelperText>Disabled</FormHelperText>
                </FormControl>


                <FormControl error>
                    <InputLabel htmlFor="component-error">Name</InputLabel>
                    <Input
                        id="component-error"
                        value={name}
                        onChange={handleChange}
                        aria-describedby="component-error-text"
                    />
                    <FormHelperText id="component-error-text">Error</FormHelperText>
                </FormControl>


                <FormControl variant="outlined">
                    <InputLabel htmlFor="component-outlined">Namex</InputLabel>
                    <OutlinedInput id="component-outlined" value={name} onChange={handleChange} label="Name" />
                </FormControl>

                <FormControl variant="filled">
                    <InputLabel htmlFor="component-filled">Name</InputLabel>
                    <FilledInput id="component-filled" value={name} onChange={handleChange} />
                </FormControl>
            </form>
        </div>
    );
}