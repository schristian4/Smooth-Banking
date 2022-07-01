import React from "react";
import './TransactionCard.css' 
function TransactionCard() {
    var withdrawCash = require('./icons/withdrawCash.png')
  return (
    <div className="transaction-wrapper">
      <div className="icon-wrapper">
        <div className="icon">
            <img src={withdrawCash} alt="" />
        </div>
      </div>
      <div className="info-wrapper">
        <div className="name">Deposit</div>
        <div className="date"> 29 JUN 2022 | 1:02</div>
      </div>
      <div className="amount-wrapper">
        <div className="amount">$123.00</div>
      </div>
      <hr/>
    </div>
  );
}

export default TransactionCard;
