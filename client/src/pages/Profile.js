// // // import React from "react";
// // // import TextField from '@material-ui/core/TextField';
// // // import MenuItem from '@material-ui/core/MenuItem';

// // // function Profile() {


// // //     const handleChange = (event) => {
// // //         setCurrency(event.target.value);
// // //       };

// // //     const Gender = [
// // //         {
// // //           value: 'M',
// // //           label: 'M',
// // //         },
// // //         {
// // //           value: 'F',
// // //           label: 'F',
// // //         },        
// // //       ];

// // //     function hello () {
// // //         alert('hello')
// // //     }

// // //     return (
// // //   <div>

// // //     <TextField id="standard-basic" label="Name" />

// // //     <TextField
// // //           id="Gender"
// // //           select
// // //           label="Select"
// // //           value={Gender}
// // //           onChange={handleChange}
// // //           helperText="Please select your currency"
// // //         >
// // //           {Gender.map((option) => (
// // //             <MenuItem key={option.value} value={option.value}>
// // //               {option.label}
// // //             </MenuItem>
// // //           ))}
// // //         </TextField>


// // //     <TextField id="standard-basic" label="Standard" />
// // //     <TextField id="standard-basic" label="Standard" />

// // //   </div>
// // //     )
// // // }

// // // export default Profile

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import TextField from '@material-ui/core/TextField';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import MaskedInput from 'react-text-mask';//instal npm i react-text-mask --save

// import Paper from '@material-ui/core/Paper';//grid size



// // css

// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             margin: theme.spacing(2),
//             width: '25ch',

//         },
//     },

//     large: {
//         width: theme.spacing(15),
//         height: theme.spacing(15),

//     },
//     paper: {
//         padding: theme.spacing(2),
//         textAlign: 'center',
//         color: theme.palette.text.secondary,
//         height: 300,
//         margin: 50,

//     },
//     root2: {
//         flexGrow: 1,
//     },
//     SelectSize: {
//         height: 300,
//         margin: 50,
//     }




// }));



// //  mask
// function TextMaskCustom(props) {
//     const { inputRef, ...other } = props;

//     return (
//         <MaskedInput
//             mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
//             className="form-control"
//             //  placeholder="Enter a phone number"
//             guide={false}
//             id="my-input-id"
//             onBlur={() => { }}
//             onChange={() => { }}
//         />
//     );
// }







// export default function Profile() {

//     const classes = useStyles();
//     const [Gender, setGender] = React.useState('');

//     const handleChange = (event) => {
//         setGender(event.target.value);
//     };

//     const [values, setValues] = React.useState({
//         textmask: '(1  )    -    ',

//     });

//     // const handleChangeMask = (event) => {
//     //     setValues({
//     //         ...values,
//     //         [event.target.name]: event.target.value,
//     //     });
//     // };



//     return (



//         <div className={classes.root2}>


//             <Grid container spacing={3}>{/* main grid */}


//                 <Grid item xs={3}>{/* picture */}
//                     <Paper className={classes.paper}>
//                         <div>

//                             <Typography variant="h4" gutterBottom> Carlos H. </Typography>

//                             {/* create a conditional for choosee placeholder o real picture */}
//                             {/* <Avatar alt="Remy Sharp" src=" http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className={classes.large} /> */}

//                             <Avatar alt="Remy Sharp" src="https://avatars1.githubusercontent.com/u/56489980?s=460&u=474c8bfae2757c5101e04e4a5e41e0b078c3d226&v=4" className={classes.large} />

//                             {/* button */}
//                             <input accept="image/*" className={classes.input} style={{ display: 'none' }} id="raised-button-file" multiple type="file" />
//                             <label htmlFor="raised-button-file">
//                                 <Button variant="contained" component="span" >   Upload  </Button>{/* className={classes.button} */}
//                             </label>
//                             {/* button */}

//                         </div>
//                     </Paper>
//                 </Grid>{/* picture */}





//                 <Grid item xs={6}
//                 >{/* form */}

//                     <Paper className={classes.paper}>
//                         <div>
//                             <TextField id="outlined-basic" label="First Name" variant="outlined" item xs={1}  />
//                             </div>
//                             <TextField id="outlined-basic" label="Last Name" variant="outlined" width={30}  />
//                             <div>
//                         </div>
//                         <div >
//                             <FormControl variant="outlined" className={classes.formControl}>
//                                 <InputLabel id="demo-simple-select-outlined-label">Genre</InputLabel>
//                                 <Select
//                                     labelId="demo-simple-select-outlined-label"
//                                     id="demo-simple-select-outlined"
//                                     value={Gender}
//                                     onChange={handleChange}
//                                     label="Gender">
//                                     <MenuItem value="">
//                                         <em>None</em>
//                                     </MenuItem>
//                                     <MenuItem value={"Male"}>Female</MenuItem>
//                                     <MenuItem value={"Female"}>Female</MenuItem>
//                                     className={classes.SelectSize}
//                                 </Select>
//                             </FormControl>

//                             <TextField id="outlined-basic" label="Phone" variant="outlined" />
//                         </div>
//                         <div>
//                             <TextField id="outlined-basic" label="Email" variant="outlined" item xs={1}  />
//                             <TextField id="outlined-basic" label="Location" variant="outlined" width={30}  />
//                         </div>


//                     </Paper>
//                 </Grid>{/* form */}








//             </Grid>{/* main grid */}




//         </div>


//     );
// }

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyrightd © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    // backgroundImage: 'url(https://source.unsplash.com/randdom/?nba)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  large: {
            width: theme.spacing(15),
            height: theme.spacing(15),
    
        },
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />

      <Grid item xs={false} sm={2} md={4} className={classes.image} />

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>

        <div className={classes.paper}>
          {/* <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography> */}
          <div>

            {/* <Typography variant="h4" gutterBottom> Carlos H. </Typography> */}
            <Typography style={{ textAlign: 'center'}} component="h1" variant="h5">
            Carlos h
          </Typography>

            {/* create a conditional for choosee placeholder o real picture */}
            {/* <Avatar alt="Remy Sharp" src=" http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className={classes.large} /> */}

            <Avatar style={{margin: 5 , textAlign: 'center'}}alt="Remy Sharp" src="https://avatars1.githubusercontent.com/u/56489980?s=460&u=474c8bfae2757c5101e04e4a5e41e0b078c3d226&v=4" className={classes.large} />

            {/* button */}
            <input accept="image/*" className={classes.input} style={{ display: 'none' }} id="raised-button-file" multiple type="file" />
            <label htmlFor="raised-button-file">
              <Button style={{margin: 25 , textAlign: 'center'}} variant="contained" component="span" >   Upload  </Button>{/* className={classes.button} */}
            </label>
            {/* button */}

          </div>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="fname"
              label="First Name"
              name="fname"
              //  autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="lname"
              label="last Name"
              name="lname"
              //  autoComplete="email"
             
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
               
            />

{/* <div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Save
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Save
            </Button>
</div> */}

<div>






</div>
            <Grid container>

              <Grid item xs>
                {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
                <Button variant="contained" color="secondary">
  Secondary
</Button>
              </Grid>
              
              <Grid item>
                {/* <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link> */}
                <Button variant="contained" color="secondary">
  Secondary
</Button>
              </Grid>

            </Grid>
            <Box mt={5}>
              {/* // <Copyright /> */}
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}