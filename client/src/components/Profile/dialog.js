import React, { useContext, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Button,
  Dialog,
  ListItem,
  List,
  Divider,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  TextField,
  Container
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { AuthContext } from '../../Context/AuthContext'
import API from '../../utils/API'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  edit: {
    background: 'rgb(235,36,39)',
    border: '2px solid',
    borderRadius: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',

    '&:hover': {
      color: 'rgb(235,36,39)',
      backgroundColor: 'white',
      border: '2px solid',
      borderColor: 'rgb(235,36,39)',
      borderRadius: 0,
    },
  },
  dialogPaper: {
    height: '400px',
    minHeight: '80vh',
    maxHeight: '80vh'
  }
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

const FullScreenDialog = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const { user, setUser } = useContext(AuthContext)
  const [form, setForm] = useState({
    favoriteTeam: '',
    bio: '',
    _id: '',
  })

  useEffect(() => {
    setForm({ ...form, _id: user._id })
  }, [form, user._id])

  const handleSubmit = () => {
    API.safeProfile(form)
    setUser({ ...user, bio: form.bio, favoriteTeam: form.favoriteTeam })
    handleClose()
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)

  }

  return (
    <div>
      <Button className={classes.edit} onClick={handleClickOpen}>
        Edit
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Container>
            <Toolbar>
              <Typography variant='h6' className={classes.title}>
                {user.username}
              </Typography>
              <IconButton
                edge='end'
                color='inherit'
                onClick={handleClose}
                aria-label='close'>
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
        <Container>
          <List>
            <ListItem>
              <TextField
                variant='outlined'
                margin='normal'
                onChange={handleInputChange}
                id='favoriteTeam'
                label='Favorite team'
                name='favoriteTeam'
                type='text'
                autoFocus
                multiline
              />
            </ListItem>
            <Divider />
            <ListItem>
              <TextField
                variant='outlined'
                margin='normal'
                fullWidth
                onChange={handleInputChange}
                name='bio'
                id='standard-multiline-flexible'
                label='User Bio'
                multiline
                rowsMax={4}
              />
            </ListItem>
          </List>

          <Button
            autoFocus
            className={classes.edit}
            onClick={handleSubmit}>
            save
          </Button>
        </Container>
      </Dialog>
    </div>
  )
}

export default FullScreenDialog