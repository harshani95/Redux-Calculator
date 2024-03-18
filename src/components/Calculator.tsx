import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../state/Store.ts';
import {increment, decrement} from '../state/calc/manageSlice.ts';
import './Calclator.css';

const Calculator:React.FC = ()=>{

    const counter = useSelector((state: RootState)=>state.calculator.value);
    const dispatch = useDispatch();
    return(
        <>
        <br />
        <h1 className="text-center count">({counter})</h1>
            <hr/>
            <button onClick={()=>dispatch(increment())} className='btn btn-primary btn-lg btn-1'>+</button>
            &nbsp;
            <button onClick={()=>dispatch(decrement())}  className='btn btn-success btn-lg btn-2'>-</button>
        </>
    )
};
export default Calculator; 