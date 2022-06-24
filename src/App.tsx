import React, { useState, useMemo } from 'react';

import './App.css';


function App() {

  interface SubtractBalanceShape {
    eventHandleSubtract: (value: number) => void;
  }

  const SubtractBalance = ({ eventHandleSubtract }: SubtractBalanceShape) => {
    const [value, setValue] = useState<number>(0)
    function triggerEvent() {
      eventHandleSubtract(value)
    }
    return (
      <div className='input-wrapper'>
        <p>Subtract Balance</p>
        <input
          type="number"
          title="Budget"
          name="balance"
          pattern="[0-9]*"
          value={value}
          onChange={(e) =>
            setValue((v: any) =>
              e.target.validity.valid ? e.target.value : v
            )
          }
        />
        <button onClick={triggerEvent}>Submit</button>
      </div>
    )
  }
  
  interface AddBalanceShape {
    eventHandleAdd: (value: number) => void;
  }

  const AddBalance = ({ eventHandleAdd }: AddBalanceShape) => {
    const [value, setValue] = useState<number>(0); 

    function triggerEvent() {
      eventHandleAdd(value)
    }
    console.log(value)
    return (
      <div className='input-wrapper'>
        <p>Add Balance</p>
        <input
          type="number"
          title="Budget"
          name="balance"
          pattern="[0-9]*"
          value={value}
          onChange={(e) =>
            setValue((v: any) =>
              e.target.validity.valid ? e.target.value : v
            )
          }
        />
        <button onClick={triggerEvent}>Submit</button>
      </div>
    )
  }

  interface ConfigBalanceShape {
    eventHandleConfig: (value: number) => void;
  }

  const ConfigBalance = ({ eventHandleConfig }: ConfigBalanceShape) => {
    const [value, setValue] = useState<number>(0)
    function triggerEvent() {
      eventHandleConfig(value)
    }
    return (
      <div className='input-wrapper'>
        <p>Set Initial Balance</p>
        <input
          type="number"
          title="Budget"
          name="balance"
          pattern="[0-9]*"
          value={value}
          onChange={(e) =>
            setValue((v: any) =>
              e.target.validity.valid ? e.target.value : v
            )
          }
        />
        <button onClick={triggerEvent}>Submit</button>
      </div>
    )
  }


  const [balance, setBalance] = useState<string | number>(0)
  const [add, setAdd] = useState<any>(0)
  const [subtract, setSubtract] = useState<any>(0)
  const [method, setMethod] = useState<string>('')
  const [initialConfigStatus, setinitialConfigStatus] = useState('config')
  const HandleBalanceConfig = () => {
    if (balance === 0) {
      return (<>
        <ConfigBalance eventHandleConfig={eventHandleConfig} />
      </>)
    } else {
      return (
        <>
          <AddBalance eventHandleAdd={eventHandleAdd} />
          <SubtractBalance eventHandleSubtract={eventHandleSubtract} />
        </>
      )
    }
  }
  
  const eventHandleConfig = (value: number) => {
    setBalance(value)
  }
  const eventHandleAdd = (value: number) => {
    setAdd(value)
    setMethod('add')
   
  }
  const eventHandleSubtract = (value: number) => {
    setSubtract(value)
    setMethod('subtract') 
  }
  
  const calculation = {
    add: ()=>{
      debugger
      let temp: any = balance; 
      temp = Number.parseInt(temp) + Number.parseInt(add)
      setBalance(temp)
      setMethod('')
    },
    subtract: ()=>{
      debugger
      let temp: any = balance; 
      temp = Number.parseInt(temp) - Number.parseInt(subtract)
      setBalance(temp)
      setMethod('')
    }
  }
  function updateConfig(method: string){
    
    if(method === 'add'){ 
      calculation.add()
    }
    if(method === 'subtract'){
      // review subtract methods
      calculation.subtract()
    }
  }
  const Message = () => {
    let messageContent = ''
    let temp: any = balance
    let fontColor =''
    if(parseInt(temp) < 0){
      messageContent = "Overdraft Alert you have have a negative Balance"
      fontColor = 'red'
    }
    else {
      messageContent = ""
      fontColor = ''
    }
    return(
      <>
        <p style={{color: fontColor}}>{messageContent}</p>
      </>
    )
  }
  useMemo(() => {
    updateConfig(method)
  }, [method])
  
  return (
    <div className="App">
      <h1>Smooth Banking</h1>
      <header className="App-header">
        Current Balance: {balance}
        <HandleBalanceConfig />
        <Message/>
      </header>
    </div>
  );
}

export default App;
