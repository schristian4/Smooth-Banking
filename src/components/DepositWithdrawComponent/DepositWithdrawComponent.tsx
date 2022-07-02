import { useState, useEffect } from "react";
import InputUpdateBalance from "../InputComponent/InputUpdateBalance";
import "./InputStyle.css";
interface DepositWithdrawCompProp {
  handleBalanceChange: (value: number) => void;
  handleEventMethod: (value: string) => void;
  handleInputAmount: (value: number) => void;
  balance: number;
}

const DepositWithdrawComponent = ({
  handleBalanceChange,
  handleEventMethod,
  handleInputAmount,
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
      handleBalanceChange(temp);
      handleEventMethod("Deposit");
      handleInputAmount(inputValue)
      setMethod("");
    },
    subtract: () => {
      let temp: number = balance;
      temp = temp - inputValue;
      handleBalanceChange(temp);
      handleEventMethod("Withdraw");
      handleInputAmount(inputValue)
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

export default DepositWithdrawComponent;
