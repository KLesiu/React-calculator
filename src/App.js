import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import Main from './components/Main';
import History from './components/History';
function App() {
  // Declare states
  const [number,setNumber]=useState('0')
  const [prevNumber,setPrevNumber]=useState('')
  const [start,setStart]=useState(false)
  const [operation,setOperation]=useState('')
  const [counterDot,setCounterDot]=useState(0)
  const [lastOperations,setLastOperations]=useState([])
  const [showHistory,setShowHistory]=useState(false)

  // Get textContent from eventListener and return it when start===false,if start===true add textContent to string at state number
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
  // Get textContent from eventListener and change operation state if textContent==='.' add '.' to number, set prevNumber to the number then set number to 0, reset start state and show result  if user click one more time at any mathematic operation  
  const handleChangeOperation=(e)=>{
 
    if(e.target.textContent==='.'){
      if(parseInt(number)!==parseFloat(number)) return
      if(counterDot===1) return
      setCounterDot(1)
      setStart(true)
      setNumber(`${number}.`)
    }
   
    else{
     
     
      setPrevNumber(number)
      setCounterDot(0)
      setNumber(0)
      setStart(false)
      setOperation(e.target.textContent)
      showResult()
    }
   
  }
  // If number and prevNumber are '' return, if not, return result from current mathematic operation and set to number state, add operation to lastOperations and reset prevNumber, operation and start 
  const showResult=()=>{
   
   if(number===''||prevNumber==='') return
    
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
   setLastOperations([...lastOperations,
    lastOperation(number,prevNumber,operation)])
    setPrevNumber('')
    setOperation('')
    setStart(false)
  
  }
  // Return lastOperation as string
  const lastOperation=(current,prev,operation)=>{
    if(operation==='+'){
      
      return `${prev} ${operation} ${current} = ${parseFloat(prev)+parseFloat(current)}`
    }
    else if(operation==='-'){
    
      return `${prev} ${operation} ${current} = ${parseFloat(prev)-parseFloat(current)}`
    }
    else if(operation==='X'){
      
      return `${prev} ${operation} ${current} = ${parseFloat(prev)*parseFloat(current)}`
    }
    else if(operation==='/'){
   
      return `${prev} ${operation} ${current} = ${parseFloat(prev)/parseFloat(current)}`
    }
  }
  // Reset states: number,prevNumber,start and operation
  const clear=()=>{
    setNumber(0)
    setPrevNumber('')
    setStart(false)
    setOperation('')

  }
  // Reset states: number and start
  const clearCurrentNumber=()=>{
    setNumber(0)
    setStart(false)
  }
  // Get percent from current number
  const getPercent=()=>{
    setNumber(()=>{
      return number/100
    })
  }
  // Get fration from number if number is not 0. Reset prevNumber,operation and start
  const getFraction=()=>{
   
    const fraction=1/parseFloat(number)
    if(fraction === Infinity) return
    setNumber(fraction)
    setPrevNumber('')
    setOperation('')
    setStart(false)
  }
  // Get power from number and reset prevNumber,operation and start
  const getPower=()=>{
    const power=Math.pow(parseFloat(number),2)
    setNumber(power)
    setPrevNumber('')
    setOperation('')
    setStart(false)

  }
  // Get sqrt if number > 0 and reset prevNumber,operation and start, if not return. 
  const getSqrt=()=>{
    if(number<0) return
    const sqrt=Math.sqrt(parseFloat(number))
    setNumber(sqrt)
    setPrevNumber('')
    setOperation('')
    setStart(false)

  }
  // Get opposite number 
  const getNegative=()=>{
    const numberC=document.querySelector('.current').textContent
    
  
    if(parseFloat(numberC)<0){
      
      setNumber(()=>{
       const positive=-parseFloat(numberC)
       return parseFloat(positive)
      })
    } 
    else if(parseFloat(numberC)>0) setNumber(()=>{
      const negative=`-${parseFloat(numberC)}`
      return parseFloat(negative)
    })

  }
  // Get current number and split it. Delete last element and return newNumber, if newNumber==='' set number to 0 and start to false
  const back=()=>{
    if(number===0) return
    const current=document.querySelector('.current').textContent

    const array=current.split('')
    array.pop()
    const newNumber=array.join('')
    if(newNumber===''){
      setNumber(0)
      setStart(false)
    } 
    else  setNumber(newNumber)
   
    
    

  }
  // Set showHistory state
  const getHistory=()=>{
    if(showHistory===false) setShowHistory(true)
    else setShowHistory(false)
  }

  if(showHistory===true){
    return(
      <div className="App">
      <section className='calculator'>
     <Header history={getHistory}  operation={operation} prev={prevNumber} number={number} />
     <Main negative={getNegative} sqrt={getSqrt} power={getPower} fraction={getFraction} back={back} percent={getPercent} clearCurrent={clearCurrentNumber} clear={clear} result={showResult} operation={handleChangeOperation} change={handleChange}   />
     
      </section>
      <History history={lastOperations} />
     </div>
    )
  }
  else{
    return (
      <div className="App">
      <section className='calculator'>
     <Header history={getHistory}  operation={operation} prev={prevNumber} number={number} />
     <Main negative={getNegative} sqrt={getSqrt} power={getPower} fraction={getFraction} back={back} percent={getPercent} clearCurrent={clearCurrentNumber} clear={clear} result={showResult} operation={handleChangeOperation} change={handleChange}   />
  
      </section>
     </div>
      );
  }
 
}

export default App;
