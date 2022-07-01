import { useState, useEffect } from "react";
import InputDepositWithdraw from "./InputDepositWithdraw";
import "./InputStyle.css";
interface DepositWithdrawCompProp {
  handleBalanceChange: (value: number) => void;
  balance: number;
}

const DepositWithdrawComp = ({
  handleBalanceChange,
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
      setMethod("");
    },
    subtract: () => {
      let temp: number = balance;
      temp = temp - inputValue;
      handleBalanceChange(temp);
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
        <InputDepositWithdraw
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

export default DepositWithdrawComp;
