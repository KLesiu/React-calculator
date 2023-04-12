import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import Main from './components/Main';
function App() {
  const [number,setNumber]=useState('0')
  const [prevNumber,setPrevNumber]=useState('')
  const [start,setStart]=useState(false)
  const [operation,setOperation]=useState('')
  const [counterDot,setCounterDot]=useState(0)

  
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
      if(parseInt(number)!==number) return
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
   
    setPrevNumber('')
    setOperation('')
    setStart(false)
  
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
  const getFraction=()=>{
   
    const fraction=1/parseFloat(number)
    if(fraction === Infinity) return
    console.log(fraction)
    setNumber(fraction)
    setPrevNumber('')
    setOperation('')
    setStart(false)
  }
  const getPower=()=>{
    const power=Math.pow(parseFloat(number),2)
    setNumber(power)
    setPrevNumber('')
    setOperation('')
    setStart(false)

  }
  const getSqrt=()=>{
    if(number<0) return
    const sqrt=Math.sqrt(parseFloat(number))
    setNumber(sqrt)
    setPrevNumber('')
    setOperation('')
    setStart(false)

  }
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
  
  return (
    <div className="App">
     <section className='calculator'>
    <Header  operation={operation} prev={prevNumber} number={number} />
    <Main negative={getNegative} sqrt={getSqrt} power={getPower} fraction={getFraction} back={back} percent={getPercent} clearCurrent={clearCurrentNumber} clear={clear} result={showResult} operation={handleChangeOperation} change={handleChange}   />
     </section>
    </div>
  );
}

export default App;
