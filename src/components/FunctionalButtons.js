import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { functonalOperation, operation, power } from '../calculatorSlice';
import darthVader from "../assets/images/darth-vader.png"

export default function FunctionalButtons() {
    const calculator = useSelector((state) => state.calculator);
    const dispatch = useDispatch();

    return (
        <div className="functional-buttons">
            <button className="power-button" onClick={() => dispatch(power())}><img width="30px" src={darthVader} alt="logo"/></button>
            <button disabled={calculator.disable} onClick={() => dispatch(functonalOperation("C"))}>C</button>
            <button disabled={calculator.disable} onClick={() => dispatch(functonalOperation("CE"))}>CE</button>
            <button disabled={calculator.disable} onClick={() => dispatch(functonalOperation("backSpace"))}>&#8592;</button>
            <button disabled={calculator.disable} onClick={() => dispatch(functonalOperation("squareRoot"))}>&radic;</button>
            <button disabled={calculator.disable} onClick={() => dispatch(operation("%"))}>%</button>
        </div>
    )
}
