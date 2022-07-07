import React from 'react'
import Home from '../Pages/Home'
import DashboardPage from '../Pages/Dashboard'
import { InsertMethods } from '../../libs/component';

interface ViewHomeOrDashboardProp {
    insertProp: InsertMethods
}
const ViewHomeOrDashboard = ({ insertProp }: ViewHomeOrDashboardProp) => {

    let user = insertProp.state_user
    let isLoggedIn = insertProp.state_isLoggedIn
    let eventSetLogin = insertProp.eventSetLogin
    const VIEW_HOME_OR_DASHBOARD =()=> {
        return isLoggedIn === false ? <Home /> : <DashboardPage user={user} loginState={isLoggedIn} eventSetLogin={eventSetLogin} />
    }
    return(<VIEW_HOME_OR_DASHBOARD/>)
}

export default ViewHomeOrDashboard