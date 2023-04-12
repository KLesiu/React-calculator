import React from "react";
import './styles/Header.css'
const Header=(props)=>{
    
return(
    <header>
        <h1>Standard</h1>
        <h2>History</h2>
        <p className="lastOperation">{props.prev}{props.operation}</p>
        <p className="current">{props.number}</p>
    </header>
)
}
export default Header