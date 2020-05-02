import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Collection from '../Collection'
import Packs from '../../pages/Packs'

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
          <LinkTab label='{user name goes here} dream team' href='/collection' {...a11yProps(0)} />
          <LinkTab label='draft players from booster pack' href='/packs' {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Collection/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Packs/>
      </TabPanel>
    </div>
  )
}
