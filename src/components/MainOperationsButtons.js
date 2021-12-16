import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { operation,equal } from '../calculatorSlice';


export default function MainOperationsButtons() {
    const calculator = useSelector((state) => state.calculator);
    const dispatch = useDispatch();

    return (
        <div className="main-operation-buttons">
            <button disabled={calculator.disable} onClick={() => dispatch(operation("/"))}>&#247;</button>
            <button disabled={calculator.disable} onClick={() => dispatch(operation("*"))}>&#215;</button>
            <button disabled={calculator.disable} onClick={() => dispatch(operation("-"))}>&#8722;</button>
            <button disabled={calculator.disable} onClick={() => dispatch(operation("+"))}>&#43;</button>
            <button disabled={calculator.disable} onClick={() => dispatch(equal("="))}>&#61;</button>
        </div>
    )
}
