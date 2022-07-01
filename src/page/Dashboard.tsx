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
    <div className="logout-page">
      <h3>You are logged out</h3>
      <p>Please navigate to homepage</p>
      <div className="returnHome"><Link to="/">Home</Link></div>
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
