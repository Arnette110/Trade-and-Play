import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Tabs, Tab, Typography, Box } from '@material-ui/core'
import Collection from '../../pages/Collection'
import Packs from '../../pages/Packs'
import ProfileComponent from '../Profile'
import { AuthContext } from '../../Context/AuthContext'

const TabPanel = (props) => {
  const { children, value, index, height, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      style={{
        height: height || 'auto',
        backgroundColor: '#424242',
      }}
      aria-labelledby={`nav-tab-${index}`}
      {...other}>
      {value === index && (
        <Box p={3}>
          <Typography component='div'>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

const a11yProps = (index) => {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  }
}

const LinkTab = (props) => {
  return (
    <Tab
      component={Link}
      onClick={(event) => {
        event.preventDefault()
      }}
      {...props}
    />
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  tabNav: {
    backgroundColor: '#212121',
  },
}))

const NavTabs = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const { user } = useContext(AuthContext)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.tabNav}>
        <Tabs
          variant='fullWidth'
          value={value}
          onChange={handleChange}
          aria-label='nav tabs example'>
          <LinkTab
            label={`${user.username}'s dream team`}
            to='/collection'
            {...a11yProps(0)}
          />
          <LinkTab
            label='draft players from booster pack'
            to='/packs'
            {...a11yProps(1)}
          />
          <LinkTab
            label={`${user.username}'s Profile`}
            to='/profile'
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Collection />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Packs />
      </TabPanel>
      <TabPanel height='800px' value={value} index={2}>
        <ProfileComponent />
      </TabPanel>
    </div>
  )
}

export default NavTabs