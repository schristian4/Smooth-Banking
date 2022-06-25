import { useState, useEffect } from "react";
import InputBalance from "./components/InputBalance";
import ViewLayout from "./components/ViewLayout";
import "./App.css";

interface InsertMethodProps {
  insertType: string;
}

function App() {
  const [balance, setBalance] = useState<number>(0);
  const [inputValue, setInputValue] = useState<number>(0);
  const [method, setMethod] = useState<string>("");

  // const HandleBalanceConfig = () => {
  //   if (balance === 0) {
  //     return (
  //       <>
  //         <InputBalance
  //           insertMethod=""
  //           eventMethod={eventMethod}
  //           eventHandle={eventHandle}
  //           eventHandleConfig={eventHandleConfig}
  //         />
  //       </>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <InputBalance
  //           insertMethod="add"
  //           eventMethod={eventMethod}
  //           eventHandle={eventHandle}
  //           eventHandleConfig={eventHandleConfig}
  //         />
  //         <InputBalance
  //           insertMethod="subtract"
  //           eventMethod={eventMethod}
  //           eventHandle={eventHandle}
  //           eventHandleConfig={eventHandleConfig}
  //         />
  //       </>
  //     );
  //   }
  // };
  interface InsertMethods {
    insertType: string;
    eventMethod(value: string): void;
    eventHandler(value: number): void;
    eventHandleConfig(value: number): void;
  }

  const useInsertMethods = (): InsertMethods[] => [
    {
      insertType: "",
      eventMethod: (value: string) => setMethod(value),
      eventHandler: (value: number) => setInputValue(value),
      eventHandleConfig: (value: number) => setBalance(value),
    },
  ];

  interface InputBalanceProps {
    insertType: string;
  }
  const InputField = ({ insertType }: InputBalanceProps) => {
    const insertProp = useInsertMethods();
    return (
      <>
        <InputBalance
          insertMethod={insertType}
          eventMethod={insertProp[0].eventMethod}
          eventHandle={insertProp[0].eventHandler}
          eventHandleConfig={insertProp[0].eventHandleConfig}
        />
      </>
    );
  };

  // const eventMethod = (value: string) => {
  //   setMethod(value);
  // };
  // const eventHandle = (value: number) => {
  //   setInputValue(value);
  // };
  // const eventHandleConfig = (value: number) => {
  //   setBalance(value);
  // };

  const calculation = {
    add: () => {
      let temp: number = balance;
      temp = temp + inputValue;
      setBalance(temp);
      setMethod("");
    },
    subtract: () => {
      let temp: number = balance;
      temp = temp - inputValue;
      setBalance(temp);
      setMethod("");
    },
  };

  function updateConfig(method: string) {
    if (method === "add") {
      calculation.add();
    }
    if (method === "subtract") {
      calculation.subtract();
    }
  }
  const Message = () => {
    let messageContent = "";
    let temp: any = balance;
    let fontColor = "";
    if (parseInt(temp) < 0) {
      messageContent = "Overdraft Alert you have have a negative Balance";
      fontColor = "red";
    } else {
      messageContent = "";
      fontColor = "";
    }
    return (
      <>
        <p style={{ color: fontColor }}>{messageContent}</p>
      </>
    );
  };

  useEffect(() => {
    updateConfig(method);
  }, [method]);

  return (
    <div className="App">
      <h1>Smooth Banking</h1>
      <header className="App-header">
        Current Balance: {balance}
        {/* <HandleBalanceConfig /> */}
        <Message />
        <InputField insertType="add" />
        <InputField insertType="subtract" />
        {/* <ViewLayout>
        
          </ViewLayout> */}
      </header>
    </div>
  );
}

export default App;
