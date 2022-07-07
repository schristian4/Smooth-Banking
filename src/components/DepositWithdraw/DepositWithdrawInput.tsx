import { useState, useEffect } from "react";
import InputUpdateBalance from "../UpdateBalanceInput/UpdateBalanceInput";
import "./DepositWithdrawInput.css";
interface DepositWithdrawCompProp {
  eventSetInputAmount: (value: number) => void;
  eventSetEventMethod: (value: string) => void;
  eventSetBalance: (value: number) => void;
  balance: number;
}

const DepositWithdrawInput = ({
  eventSetInputAmount,
  eventSetEventMethod,
  eventSetBalance,
  balance,
}: DepositWithdrawCompProp) => {
  const [inputValue, setInputValue] = useState<number>(0);
  const [method, setMethod] = useState<string>("");

  interface InsertMethods {
    eventMethod(value: string): void;
    eventHandler(value: number): void;
  }
  const useInsertMethods = (): InsertMethods[] => [
    {
      eventMethod: (value: string) => setMethod(value),
      eventHandler: (value: number) => setInputValue(value),
    },
  ];

  const calculation = {
    add: () => {
      let temp: number = balance;
      temp = temp + inputValue;
      eventSetBalance(temp);
      eventSetEventMethod("Deposit");
      eventSetInputAmount(inputValue)
      setMethod("");
    },
    subtract: () => {
      let temp: number = balance;
      temp = temp - inputValue;
      eventSetBalance(temp);
      eventSetEventMethod("Withdraw");
      eventSetInputAmount(inputValue)
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

  const InputField = () => {
    const insertProp = useInsertMethods();
    return (
      <>
        <InputUpdateBalance
          eventMethod={insertProp[0].eventMethod}
          eventHandle={insertProp[0].eventHandler}
        />
      </>
    );
  };
  useEffect(() => {
    updateConfig(method);
  });

  return (
    <>
      <p className="balance-text">Update Balance: </p>
      {/* <div className="test-balance">{balance}</div> */}
      <InputField />
    </>
  );
};

export default DepositWithdrawInput;
