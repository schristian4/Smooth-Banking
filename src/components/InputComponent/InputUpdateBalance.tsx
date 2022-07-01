import React, { useState } from "react";

interface InputBalanceProps {
  eventMethod: (value: string) => void;
  eventHandle: (value: number) => void;
}

const InputUpdateBalance = ({
  eventHandle,
  eventMethod,
}: InputBalanceProps) => {
  const [value, setValue] = useState<number>(0);
  function triggerDepositEvent(method: string) {
    eventMethod(method);
  }
  function triggerWithdrawEvent(method: string) {
    eventMethod(method);
  }
  function triggerEvent(insertMethod: string) {
    if (insertMethod === "add") {
      triggerDepositEvent(insertMethod);
      eventHandle(value);
    }
    if (insertMethod === "subtract") {
      triggerWithdrawEvent(insertMethod);
      eventHandle(value);
    }
  }
  return (
    <div className="input-wrapper">
      <input
        type="number"
        title="Budget"
        name="balance"
        pattern="[0-9]*"
        onChange={(e) =>
          setValue((v: any) =>
            parseFloat(e.target.validity.valid ? e.target.value : v)
          )
        }
      />
      <div className="button-wrapper">
        <button className="btn btn-withdraw" onClick={() => triggerEvent("subtract")}>Withdraw</button>
        <button className="btn btn-deposit"onClick={() => triggerEvent("add")}>Deposit</button>
      </div>
    </div>
  );
};

export default InputUpdateBalance;