import React from "react";
import MainOperationsButtons from "./MainOperationsButtons";
import FunctionalButtons from "./FunctionalButtons";
import NumericButtons from "./NumericButtons";

export default function Keypad() {
  return (
    <div className="keypad">
      <div className="left-wrapper">
      <FunctionalButtons />
        <NumericButtons />
      </div>
      <div className="right-wrapper">
        <MainOperationsButtons />
      </div>
    </div>
  );
}
