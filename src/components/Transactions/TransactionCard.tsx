import React from "react";
import './TransactionCard.css' 

interface TransactionCardProp{
  eventMethod: string, // Deposit or Withdraw
  timestamp: string //29 JUN 2022 | 1:02
  amount: number //$123.00
}
function TransactionCard({eventMethod, timestamp, amount}: TransactionCardProp ) {
  var withdrawCash = require('../../icons/withdrawCash.png')
  var depositCash = require('../../icons/depositCash.png')
  return (
    <div className="transaction-wrapper">
      <div className="icon2-wrapper">
        <div className="icon">
            {eventMethod ==="Withdraw"? <img src={withdrawCash} alt="Withdraw Cash" /> : <img src={depositCash} alt="Deposit Cash" />}
        </div>
      </div>
      <div className="info-wrapper">
        <div className="name">{eventMethod}</div>
        <div className="date">{timestamp}</div>
      </div>
      <div className="amount-wrapper">
        <div className="amount">{eventMethod === "Withdraw"? '-': ''}${amount.toLocaleString("en-US")}</div>
      </div>
      <hr/>
    </div>
  );
}

export default TransactionCard;
