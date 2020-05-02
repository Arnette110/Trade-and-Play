import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
// import logo from '../logo.svg'
// import Logout from '../components/Logout'
import NavBar from '../components/NavBar'
import DashboardTabs from '../components/Dashboard'

const useStyles = makeStyles({
  background: {
    backgroundColor: '#424242',
    height: '100vh',
    width: '100vw'
  },
})

export default function Dashboard() {
    const classes = useStyles()

    return (
        <div className={classes.background}>
            <NavBar/>
            <DashboardTabs/>
        </div>
    )
}
