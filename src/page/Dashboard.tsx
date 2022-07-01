import React from "react";
import DashboardComponent from "../components/Dashboard/DashboardComponent";

import { Link, } from "react-router-dom";

interface userProp{
  username: any;
  password: any;
  balance?: any;
  digits?: number[]
}
interface DashboardPageProp{
  user: userProp;
  loginState: boolean; 
  updateUserData: (value: userProp)=> void
} 
const PleaseLogin =()=>{
  return (
    <div className="">
      <p>You are logged out</p>
      <p>Please navigate to homepage</p>
      <Link to="/">Home</Link>
    </div>
  )
}
const Dashboard = ({user,updateUserData, loginState }: DashboardPageProp) => {
  return (
    <>
      {loginState ? <DashboardComponent user={user} updateUserData={updateUserData}/> : <PleaseLogin/>}
    </>
  );
};

export default Dashboard;
