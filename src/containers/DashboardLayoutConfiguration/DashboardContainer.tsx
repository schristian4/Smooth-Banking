import {useState, useEffect} from "react";
import "./DashboardContainer.css";
import Card from "../../components/Card/Card";
import DepositWithdrawComp from "../../components/DepositWithdrawComponent/DepositWithdrawComp";
import Transactions from "../../components/TransactionsComponent/Transactions";
import { userProp } from "../../App";

interface DashboardContainerProp{
  user: userProp;
  updateUserData: (value: userProp)=>void
} 
// function DashboardContainer({user}: DashboardContainerProp) {
function DashboardContainer({user, updateUserData}: DashboardContainerProp) {
  const [updatedUser, setUpdatedUser] = useState(user)
  const [balance, setBalance] = useState<number>(user.balance)
  
  function getCurrentDate() {
    let dateObj = new Date();
    let weekday = dateObj.toLocaleString("default", { weekday: "long" });
    let weekdayNumber: number = dateObj.getDay();
    let shortMonthName = new Intl.DateTimeFormat("en-US", { month: "short" })
      .format;
    let shortName = shortMonthName(dateObj);
    return `${weekday}, ${weekdayNumber} ${shortName}`;
  }
  function handleBalanceChange(value: number){
    setBalance(value)
  }
  function updateCurrentUser(){
    let temp = user; 
    temp.balance = balance
    setUpdatedUser(temp)
  }
  useEffect(() => {
    updateCurrentUser()
    updateUserData(updatedUser)
  }, [balance])
  
  return (
    <div className="dashboardContainer">
      <div className="header">
        <p className="date">{getCurrentDate()}</p>
        <p className="account">Account: {user.username}</p>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "1em" }}
      >
        <Card balance={balance}/>
      </div>
    
      <div className="dashboard-bottom-container">
        <DepositWithdrawComp handleBalanceChange={handleBalanceChange} balance={balance}/>
        {/* <div>
          <p className="transaction">Transactions</p>
        </div> */}
        {/* <Transactions /> */}
        {/* <Transactions/> */}
      </div>
    </div>
  );
}

export default DashboardContainer;
