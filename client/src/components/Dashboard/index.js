import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Tabs, Tab, Typography, Box } from '@material-ui/core'
import Collection from '../Collection'
import Packs from '../../pages/Packs'
import ProfileComponent from '../Profile'
import { AuthContext } from '../../Context/AuthContext'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      style={{
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

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  }
}

function LinkTab(props) {
  return (
    <Tab
      component='a'
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

export default function NavTabs() {
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
            href='/collection'
            {...a11yProps(0)}
          />
          <LinkTab
            label='draft players from booster pack'
            href='/packs'
            {...a11yProps(1)}
          />
          <LinkTab
            label={`${user.username}'s Profile`}
            href='/profile'
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
      <TabPanel value={value} index={2}>
        <ProfileComponent />
      </TabPanel>
    </div>
  )
}
