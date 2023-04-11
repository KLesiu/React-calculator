import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import Main from './components/Main';
function App() {
  const [number,setNumber]=useState(0)
  const [prevNumber,setPrevNumber]=useState('')
  const [start,setStart]=useState(false)
  const [operation,setOperation]=useState('')

  
  const handleChange=(e)=>{
    if(start===false){
      setNumber(e.target.textContent)
      setStart(true)
    }
    else if(start===true){
    
      setNumber(()=>{
        const current=number+e.target.textContent
        return current
      })
    }
   
  }
  const handleChangeOperation=(e)=>{
    if(e.target.textContent==='.'){
      setNumber(`${number}.`)
    }
   
    else{
      setPrevNumber(number)
      setNumber(0)
      setStart(false)
      setOperation(e.target.textContent)
    }
   
  }
  const showResult=()=>{
   
    
    setNumber(()=>{
      
      if(operation==='+'){
        
        return parseFloat(prevNumber)+parseFloat(number)
      }
      else if(operation==='-'){
        
        return parseFloat(prevNumber)-parseFloat(number)
      }
      else if(operation==='X'){
        return parseFloat(prevNumber)*parseFloat(number)
      }
      else if(operation==='/'){
        return parseFloat(prevNumber)/parseFloat(number)
      }
      
    })
    
    setPrevNumber('')
    setOperation('')
  }
  const clear=()=>{
    setNumber(0)
    setPrevNumber('')
    setStart(false)
    setOperation('')

  }
  const clearCurrentNumber=()=>{
    setNumber(0)
    setStart(false)
  }
  const getPercent=()=>{
    setNumber(()=>{
      return number/100
    })
  }
  const back=()=>{
    if(number===0) return
    const array=number.split('')
    array.pop()
    const newNumber=array.join('')
    if(newNumber===''){
      setNumber(0)
      setStart(false)
    } 
    else  setNumber(newNumber)
   
    
    

  }
  return (
    <div className="App">
     <section className='calculator'>
    <Header  operation={operation} prev={prevNumber} number={number} />
    <Main back={back} percent={getPercent} clearCurrent={clearCurrentNumber} clear={clear} result={showResult} operation={handleChangeOperation} change={handleChange}   />
     </section>
    </div>
  );
}

export default App;
