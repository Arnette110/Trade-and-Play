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
import Typography from '@material-ui/core/Typography';
import MaskedInput from 'react-text-mask';//instal npm i react-text-mask --save
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';//grid size


// css

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
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 300,
        margin: 50,
    },
    root2: {
        flexGrow: 1,
    },




}));



//  mask
function TextMaskCustom(props) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            className="form-control"
            //  placeholder="Enter a phone number"
            guide={false}
            id="my-input-id"
            onBlur={() => { }}
            onChange={() => { }}
        />
    );
}







export default function Profile() {

    const classes = useStyles();
    const [Gender, setGender] = React.useState('');

    const handleChange = (event) => {
        setGender(event.target.value);
    };

    const [values, setValues] = React.useState({
        textmask: '(1  )    -    ',

    });

    const handleChangeMask = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };



    return (



        <div className={classes.root2}>

            <Grid container spacing={3}>{/* main grid */}


                <Grid item xs={3}>{/* picture */}
                    <Paper className={classes.paper}>                        
                        <div>

                            <Typography variant="h4" gutterBottom> Carlos H. </Typography>

                            {/* create a conditional for choosee placeholder o real picture */}
                            {/* <Avatar alt="Remy Sharp" src=" http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className={classes.large} /> */}

                            <Avatar alt="Remy Sharp" src="https://avatars1.githubusercontent.com/u/56489980?s=460&u=474c8bfae2757c5101e04e4a5e41e0b078c3d226&v=4" className={classes.large} />

                            {/* button */}
                            <input accept="image/*" className={classes.input} style={{ display: 'none' }} id="raised-button-file" multiple type="file" />
                            <label htmlFor="raised-button-file">
                                <Button variant="contained" component="span" >   Upload  </Button>{/* className={classes.button} */}
                            </label>
                            {/* button */}

                        </div>
                    </Paper>                     
                </Grid>{/* picture */}

                
             


                    <Grid item xs={6}>{/* form */}
                    
                        <Paper className={classes.paper}> 

                        <TextField id="outlined-basic" label="First Name" variant="outlined" item xs={3}/>
                        <TextField id="outlined-basic" label="Last Name" variant="outlined" item xs={6} />
                        <TextField id="outlined-basic" label="Phone" variant="outlined" />
                        
                        
                        
                        
                        
                        </Paper>
                    </Grid>{/* form */}
              







            </Grid>{/* main grid */}




        </div>


    );
}

