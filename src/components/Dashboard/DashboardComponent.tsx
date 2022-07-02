import { useState, useEffect } from "react";
import "./DashboardComponent.css";
import Card from "../../components/Card/Card";
import DepositWithdrawComponent from "../DepositWithdrawComponent/DepositWithdrawComponent";
import { userProp } from "../../App";
import Transactions from "../TransactionsComponent/Transactions";
import { dateConfig } from "../../Methods/methods";
interface DashboardComponentProp {
  user: userProp;
  updateUserData: (value: userProp) => void;
}

interface TransactionsProps {
  amount: number; //$123.00
  eventMethod: string; // Deposit or Withdraw
  timestamp: string; //29 JUN 2022 | 1:02
}
export interface transactionArrayShape {
  [key: string]: TransactionsProps[];
}
function DashboardComponent({ user, updateUserData }: DashboardComponentProp) {
  const [updatedUser, setUpdatedUser] = useState(user);
  const [balance, setBalance] = useState<number>(user.balance);
  const [eventMethod, setEventMethod] = useState<string>("");
  const [inputAmount, setInputAmount] = useState<number>(0);
  const [transactionArray, setTransactionArray] = useState<TransactionsProps[]>([])
  const [transactionObject, setTransactionObject] = useState<transactionArrayShape>({});

  function ConfigureTransactionObject() {
    if(eventMethod !== ""){
      let tempObject = {
        amount: 0,
        eventMethod: "",
        timestamp: "",
      };
      tempObject.amount = inputAmount;
      tempObject.eventMethod = eventMethod;
      tempObject.timestamp = dateConfig.getTimestamp();
      let currentTransactionArray: TransactionsProps[] = transactionArray
      currentTransactionArray.push(tempObject)
      setTransactionArray(currentTransactionArray)
      let currentTransactionObject: transactionArrayShape = transactionObject;
      currentTransactionObject[updatedUser.username] = currentTransactionArray;
      setTransactionObject(currentTransactionObject);
      setEventMethod("")
    }
  }

  function handleInputAmount(value: number) {
    setInputAmount(value);
  }
  function handleEventMethod(value: string) {
    setEventMethod(value);
  }
  function handleBalanceChange(value: number) {
    setBalance(value);
  }
  function updateCurrentUser() {
    let temp = user;
    temp.balance = balance;
    setUpdatedUser(temp);
  }
  useEffect(() => {
    updateCurrentUser();
    ConfigureTransactionObject()
    updateUserData(updatedUser);
  }, [balance]);

  return (
    <div className="dashboardContainer">
      <div className="header">
        <p className="date">{dateConfig.currentDate()}</p>
        <p className="account">Account: {user.username}</p>
      </div>
      <div style={{ display: "flex", justifyContent: "center", padding: "1em" }}>
        <Card balance={balance} digits={user.digits} />
      </div>

      <div className="dashboard-bottom-container">
        <DepositWithdrawComponent
          handleBalanceChange={handleBalanceChange}
          handleEventMethod={handleEventMethod}
          balance={balance}
          handleInputAmount={handleInputAmount}
        />
        <div>
          <p className="transaction">Transactions</p>
        </div>
        <Transactions transactionObject={transactionObject} username={updatedUser.username} />
      </div>
    </div>
  );
}

export default DashboardComponent;
