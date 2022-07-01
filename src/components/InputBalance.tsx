import { useState } from "react";

interface InputBalanceProps {
  buttonArray?: string;
  insertMethod?: string;
  eventMethod: (value: string) => void;
  eventHandle: (value: number) => void;
  eventHandleConfig: (value: number) => void;
}

const InputBalance = ({
  insertMethod,
  eventMethod,
  eventHandle,
  eventHandleConfig,
}: InputBalanceProps) => {
  const [value, setValue] = useState<number>(0);
  function triggerEvent() {
    if (insertMethod === "add" || insertMethod === "subtract") {
      eventMethod(insertMethod);
      eventHandle(value);
    } else {
      eventHandleConfig(value);
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
      <button onClick={triggerEvent}>Submit</button>
    </div>
  );
};

export default InputBalance;
