import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
  Container,
} from '@material-ui/core'

import AccountCircle from '@material-ui/icons/AccountCircle'
import Logout from '../Logout'
import logo from '../../TradeAndPlay_Logo.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  nav: {
    backgroundColor: '#131313',
    color: 'white',
  },
  logo: {
    display: 'flex',
    justifyContent: 'flex-start',
    height: '4rem',
  },
  logout: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: '4rem',
  },
}))

export default function ButtonAppBar() {
  const classes = useStyles()
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
      <nav className={classes.nav}>
        <div className='nav-wrapper'>
          <Container>
            <div className='brand-logo left'>
              <img className={classes.logo} src={logo} alt='logo' />
            </div>
            <Toolbar className='right'>
              <div>
                <IconButton
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleMenu}
                  color='inherit'>
                  <AccountCircle fontSize='large' />
                </IconButton>
                <Menu
                  id='menu-appbar'
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <Logout></Logout>
                </Menu>
              </div>
            </Toolbar>
          </Container>
        </div>
      </nav>
    </div>
  )
}
