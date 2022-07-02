
import "./Transactions.css";
import TransactionCard from "./TransactionCard";
import { transactionArrayShape } from "../Dashboard/DashboardComponent";

interface TransactionsProps{ 
  transactionObject: transactionArrayShape, 
  username: string
}
const Transactions = ({ transactionObject, username}: TransactionsProps) => {
  function renderTransactions(username: string) {
    if (Object.keys(transactionObject).length > 0) {
      return transactionObject[username].map((x, i) => {
        return (
          <TransactionCard
            key={i}
            eventMethod={x.eventMethod}
            timestamp={x.timestamp}
            amount={x.amount}
          />
        );
      });
    }
  }

  return <div className="transaction-container">{renderTransactions(username)}</div>;
};

export default Transactions;
