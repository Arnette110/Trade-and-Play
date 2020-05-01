import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
// import logo from '../logo.svg'
// import Logout from '../components/Logout'
import NavBar from '../components/NavBar'
import DashboardTabs from '../components/Dashboard'

export default function Dashboard() {
    return (
        <div>
            <NavBar/>
            <DashboardTabs/>
        </div>
    )
}
