import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import Login from '../login'
import Logout from '../Logout'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

export default function ButtonAppBar() {
  const classes = useStyles()
  // const [auth, setAuth] = React.useState(true)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          
            <div>
              <IconButton
                edge='start'
                className={classes.menuButton}
                color='inherit'
                aria-label='menu'
                aria-controls='menu'
                onClick={handleMenu}>
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu'
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}>
                <MenuItem onClick={handleClose}>testing menu</MenuItem>
                <MenuItem onClick={handleClose}>more tests of menu</MenuItem>
              </Menu>
            </div>
          
          <Typography variant='h6' className={classes.title}>
            Menu
          </Typography>
          <Logout />
          <Login />
        </Toolbar>
      </AppBar>
    </div>
  )
}
