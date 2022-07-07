import { useState, useEffect } from "react";
import "./DashboardComponent.css";
import Card from "../../components/Card/Card";
import DepositWithdrawComponent from "../DepositWithdraw/DepositWithdrawInput";

import Transactions from "../Transactions/Transactions";
import { dateConfig } from "../../Methods/methods";
import { userProp, DashboardMethods } from '../../libs/component';

interface DashboardComponentProp {
  user: userProp;
  eventSetLogin: (value: userProp) => void;
}

interface TransactionsProps {
  amount: number; //$123.00
  eventMethod: string; // Deposit or Withdraw
  timestamp: string; //29 JUN 2022 | 1:02
}
export interface transactionArrayShape {
  [key: string]: TransactionsProps[];
}

function DashboardComponent({ user, eventSetLogin }: DashboardComponentProp) {
  const [updatedUser, setUpdatedUser] = useState(user);
  const [balance, setBalance] = useState<number>(user.balance);
  const [eventMethod, setEventMethod] = useState<string>("");
  const [inputAmount, setInputAmount] = useState<number>(0);
  const [transactionArray, setTransactionArray] = useState<TransactionsProps[]>([])
  const [transactionObject, setTransactionObject] = useState<transactionArrayShape>({});
  function updateCurrentUser() {
    let temp: userProp = user;
    temp.balance = balance;
    setUpdatedUser(temp);
  }
  function ConfigureTransactionObject() {
    if (eventMethod !== "") {
      let tempObject = {
        amount: 0,
        eventMethod: "",
        timestamp: "",
      };
      tempObject.amount = inputAmount;
      tempObject.eventMethod = eventMethod;
      tempObject.timestamp = dateConfig.getTimestamp();

      let currentTransactionArray: TransactionsProps[] = [...transactionArray]
      currentTransactionArray.push(tempObject)
      setTransactionArray(currentTransactionArray)
      
      let currentTransactionObject: transactionArrayShape = transactionObject;
      currentTransactionObject[updatedUser.username] = currentTransactionArray;

      setTransactionObject(currentTransactionObject);
      setEventMethod("")
    }
  }

  const useDashboardMethods = (): DashboardMethods[] => [
    {

      eventSetInputAmount: (value: number) => setInputAmount(value),
      eventSetEventMethod: (value: string) => setEventMethod(value),
      eventSetBalance: (value: number) => setBalance(value),
    },
  ];
  const insertDashboardProps = useDashboardMethods()[0]
  

  useEffect(() => {
    updateCurrentUser();
    ConfigureTransactionObject()
    eventSetLogin(updatedUser);
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
          eventSetInputAmount={insertDashboardProps.eventSetInputAmount}
          eventSetEventMethod={insertDashboardProps.eventSetEventMethod}
          eventSetBalance={insertDashboardProps.eventSetBalance}
          balance={balance}
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
