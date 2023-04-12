import React from "react";
import uniqid from 'uniqid'
import './styles/History.css'
const History=(props)=>{
    
    
    const list=props.history.map((element)=>{
       return(
<li key={uniqid()}>{element}</li>
       ) 
    })
    
    return(
        <div className="history">
            <h3>Last operations</h3>
            <ul>
        {list}
            </ul>
        </div>
    )
}
export default History