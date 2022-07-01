import React from "react";
import DashboardContainer from "../containers/DashboardLayoutConfiguration/DashboardContainer";
import { Link, } from "react-router-dom";
interface userProp{
  username: any;
  password: any;
  balance?: any;
}
interface DashboardPageProp{
  user: userProp;
  loginState: boolean
  updateUserData: (value: userProp)=> void
} 
const DashboardPage = ({user,updateUserData, loginState}: DashboardPageProp) => {
  return (
    <>
      {loginState ? <DashboardContainer user={user} updateUserData={updateUserData}/> : <><Link to="/">Home</Link>
      </>}
    </>
  );
};

export default DashboardPage;
