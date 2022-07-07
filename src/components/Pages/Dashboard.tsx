import React from "react";
import DashboardComponent from "../Dashboard/DashboardComponent";
import { Link, } from "react-router-dom";
import {userProp} from '../../libs/component';

interface DashboardPageProp {
  user: userProp;
  loginState: boolean;
  eventSetLogin: (value: userProp) => void;
}

const PleaseLogin = () => {
  return (
    <div className="logout-page">
      <h3>You are logged out</h3>
      <p>Please navigate to homepage</p>
      <div className="returnHome"><Link to="/">Home</Link></div>
    </div>
  )
}

const Dashboard = ({ user, eventSetLogin, loginState }: DashboardPageProp) => {
  return (
    <>
      {loginState ? <DashboardComponent user={user} eventSetLogin={eventSetLogin} /> : <PleaseLogin />}
    </>
  );
};

export default Dashboard;
