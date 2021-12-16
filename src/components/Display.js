import React from "react";
import { useSelector } from "react-redux";

export default function Display() {
  const calculator = useSelector((state) => state.calculator);

  return (
    <div className="display pixels">
      <div className="pixels"></div>
      <input className="storagedValue" type="text" disabled value={calculator.storagedValueDisplay} />
      <input className="mainValue" type="text" disabled value={calculator.mainValue} />
    </div>
  );
}
