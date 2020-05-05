
// import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';



// const useStyles = makeStyles((theme) => ({
//   root: {
//     height: '100vh',
//   },

//   paper: {
//     margin: theme.spacing(8, 4),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%',
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
//   large: {
//     width: theme.spacing(15),
//     height: theme.spacing(15),

//   },
// }));





// export default function SignInSide() {
//   const classes = useStyles();

//   return (
//     <Grid container component="main" className={classes.root}>
//       <CssBaseline />

//       <Grid item xs={false} sm={2} md={4} className={classes.image} />

//       <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>

//         <div className={classes.paper}>

//           <div>


//             <Typography style={{ textAlign: 'center' }} component="h1" variant="h5">
//               Carlos h
//           </Typography>

//             {/* create a conditional for choosee placeholder o real picture */}
//             {/* <Avatar alt="Remy Sharp" src=" http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className={classes.large} /> */}

//             {/* <Avatar style={{ margin: 5, textAlign: 'center' }} alt="Remy Sharp" src="https://avatars1.githubusercontent.com/u/56489980?s=460&u=474c8bfae2757c5101e04e4a5e41e0b078c3d226&v=4" className={classes.large} /> */}
//             <Avatar style={{ margin: 5, textAlign: 'center' }} alt="Remy Sharp" src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className={classes.large} />


//             {/* button */}
//             <input accept="image/*" className={classes.input} style={{ display: 'none' }} id="raised-button-file" multiple type="file" />
//             <label htmlFor="raised-button-file">
//               <Button style={{ margin: 25, textAlign: 'center' }} variant="contained" component="span" >   Upload  </Button>{/* className={classes.button} */}
//             </label>
//             {/* button */}

//           </div>
//           <form className={classes.form} noValidate>
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="fname"
//               label="First Name"
//               name="fname"
//               autoFocus
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="lname"
//               label="last Name"
//               name="lname"
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//             />


//             <Grid container>

//               <Grid item xs>
//                 <Button variant="contained" color="primary">
//                   Save
//                 </Button>
//               </Grid>

//               <Grid item>
//                 <Button variant="contained" color="secondary">
//                   Cancel
//                 </Button>
//               </Grid>

//             </Grid>

//           </form>
//         </div>
//       </Grid>
//     </Grid>
//   );
// }

// import React from 'react'
// import axios, { post } from 'axios';

// class SimpleReactFileUpload extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state ={
//       file:null
//     }
//     this.onFormSubmit = this.onFormSubmit.bind(this)
//     this.onChange = this.onChange.bind(this)
//     this.fileUpload = this.fileUpload.bind(this)
//   }
//   onFormSubmit(e){
//     e.preventDefault() // Stop form submit
//     this.fileUpload(this.state.file).then((response)=>{
//       console.log(response.data);
//     })
//   }
//   onChange(e) {
//     this.setState({file:e.target.files[0]})
//   }
//   fileUpload(file){
//     const url = '.';
//     const formData = new FormData();
//     formData.append('.file',file)
//     const config = {
//         headers: {
//             'content-type': 'multipart/form-data'
//         }
//     }
//     return  post(url, formData,config)
//   }

//   render() {
//     return (
//       <form onSubmit={this.onFormSubmit}>
//         <h1>File Upload</h1>
//         <input type="file" onChange={this.onChange} />
//         <button type="submit">Upload</button>
//       </form>
//    )
//   }
// }



// export default SimpleReactFileUpload





import React, { Component } from 'react'
import axios from 'axios';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';




const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
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
    width: '100%',
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





const Profile = ()  => {
 
  const classes = useStyles();




  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />

      <Grid item xs={false} sm={2} md={4} className={classes.image} />

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>

        <div className={classes.paper}>

          <div>


            <Typography style={{ textAlign: 'center' }} component="h1" variant="h5">
              Carlos h
          </Typography>

            {/* create a conditional for choosee placeholder o real picture */}
            {/* <Avatar alt="Remy Sharp" src=" http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className={classes.large} /> */}

            {/* <Avatar style={{ margin: 5, textAlign: 'center' }} alt="Remy Sharp" src="https://avatars1.githubusercontent.com/u/56489980?s=460&u=474c8bfae2757c5101e04e4a5e41e0b078c3d226&v=4" className={classes.large} /> */}
            {/* <Avatar style={{ margin: 5, textAlign: 'center' }} alt="Remy Sharp" src="" className={classes.large} /> */}
            
          
              <div> <Avatar className={classes.avatar} alt="Wim Mostmans" unstyled="true" src='/broken-file.jpg' >{{this.state.username}} </Avatar></div>
        

            {/* button */}
            <input accept="image/*" className={classes.input} style={{ display: 'none' }} id="raised-button-file" multiple type="file" />
            <label htmlFor="raised-button-file">
              <Button style={{ margin: 25, textAlign: 'center' }} variant="contained" component="span" >   Upload  </Button>{/* className={classes.button} */}
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


            <Grid container>

              <Grid item xs>
                <Button variant="contained" color="primary">
                  Save
                </Button>
              </Grid>

              <Grid item>
                <Button variant="contained" color="secondary">
                  Cancel
                </Button>
              </Grid>

            </Grid>

          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default Profile
// //********************** */



// import React, { Component } from 'react'
// import axios from 'axios';
 

// class SimpleReactFileUpload extends Component {

//   state = { selectedFile: null }

//   fileChangedHandler = event => {
//     this.setState({ selectedFile: event.target.files[0] })
//   }
  
 

//   uploadHandler = () => {
//     console.log(this.state.selectedFile)
//     const formData = new FormData()
//     formData.append(
//       'myFile',
//       this.state.selectedFile,
//       this.state.selectedFile.name
//     )
//     axios.post('/client/picturebio', formData)
//   }
  

//   render() {
//     return (
//       <div>
// <input type="file" onChange={this.fileChangedHandler}/>
// <button onClick={this.uploadHandler}>Upload!</button>

//       </div>
//    )
//   }
// }



// export default SimpleReactFileUpload









// import React, { Component } from 'react';
// import axios from 'axios';
 

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       images: [],
//     };
//   }

//   onImageChange = event => {
//     console.log(event.target.files);

//     this.setState({
//       images: event.target.files,
//     });
//   };

//   onSubmit = e => {
//     e.preventDefault();

//     const formData = new FormData();

//     Array.from(this.state.images).forEach(image => {
//       formData.append('files', image);
//     });

//     axios
//       .post('/client/picturebio', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       })
//       .then(res => {
//         console.log(res);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   render() {
//     return (
//       <div className="App">
//         <form onSubmit={this.onSubmit}>
//           <input
//             type="file"
//             name="files"
//             onChange={this.onImageChange}
//             alt="image"
//           />
//           <br />
//           <button type="submit">Send</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default App;