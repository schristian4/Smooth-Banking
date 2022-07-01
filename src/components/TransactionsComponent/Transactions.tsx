import React from 'react'
import './Transactions.css'
import TransactionCard from './TransactionCard'
function Transactions() {
  return (
    <div className='transaction-container'>
      <TransactionCard/>
      <TransactionCard/>
      <TransactionCard/>
      <TransactionCard/>
    </div>
  )
}

export default Transactions 