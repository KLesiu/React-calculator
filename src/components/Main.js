import React from "react";
import './styles/Main.css'

const Main=(props)=>{
 
return(
    <section className="operationBoard">
        <button onClick={props.percent}>%</button>
        <button onClick={props.clearCurrent}>CE</button>
        <button onClick={props.clear}>C</button>
        <button onClick={props.back}>Back</button>
        <button >1/x</button>
        <button >x^2</button>
        <button >Vx</button>
        <button onClick={props.operation}>/</button>
        <button onClick={props.change}>7</button>
        <button onClick={props.change}>8</button>
        <button onClick={props.change}>9</button>
        <button onClick={props.operation}>X</button>
        <button onClick={props.change}>4</button>
        <button onClick={props.change}>5</button>
        <button onClick={props.change}>6</button>
        <button onClick={props.operation}>-</button>
        <button onClick={props.change}>1</button>
        <button onClick={props.change}>2</button>
        <button onClick={props.change}>3</button>
        <button onClick={props.operation}>+</button>
        <button >+/-</button>
        <button onClick={props.change}>0</button>
        <button onClick={props.operation}>.</button>
        <button onClick={props.result} id="equal">=</button>
    </section>
)
}
export default Main