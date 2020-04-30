import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
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
