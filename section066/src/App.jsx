import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import { useState } from 'react'

function App() {
  const [count,setCount] = useState(0);




  const onClickButton =(value)=>{
    setCount(count + value*1473)
  };

  return (
    <div className='app'>
     <h1>달러 환율계산</h1>
      <section className='viewer'>
        <Viewer count={count}/>  
      </section>
      <section className='controller'>
        <Controller onClickButton ={onClickButton}/>
      </section>
    </div>
  )
}

export default App
