import React from "react";
import { useDispatch , useSelector} from "react-redux";
import { mainValue,dot } from "../calculatorSlice";

export default function NumericButtons() {
  const calculator = useSelector((state) => state.calculator);
  const dispatch = useDispatch();

  return (
    <div className="numeric-buttons">
      <button disabled={calculator.disable} onClick={() => dispatch(mainValue("1"))}>1</button>
      <button disabled={calculator.disable} onClick={() => dispatch(mainValue("2"))}>2</button>
      <button disabled={calculator.disable} onClick={() => dispatch(mainValue("3"))}>3</button>
      <button disabled={calculator.disable} onClick={() => dispatch(mainValue("4"))}>4</button>
      <button disabled={calculator.disable} onClick={() => dispatch(mainValue("5"))}>5</button>
      <button disabled={calculator.disable} onClick={() => dispatch(mainValue("6"))}>6</button>
      <button disabled={calculator.disable} onClick={() => dispatch(mainValue("7"))}>7</button>
      <button disabled={calculator.disable} onClick={() => dispatch(mainValue("8"))}>8</button>
      <button disabled={calculator.disable} onClick={() => dispatch(mainValue("9"))}>9</button>
      <button disabled={calculator.disable} onClick={() => dispatch(mainValue("-"))}>-</button>
      <button disabled={calculator.disable} onClick={() => dispatch(mainValue("0"))}>0</button>
      <button disabled={calculator.disable} onClick={() => dispatch(mainValue("."))}>.</button>
    </div>
  );
}
