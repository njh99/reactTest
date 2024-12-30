import './App.css'
import Even from './components/Even'
import Viewer from './components/Viewer'
import Controller from './components/controller'
import { useState, useEffect,useRef } from 'react'


function App() {
  const [count,setCount] = useState(0);
  const [input,setInput] = useState('');
  const isMount = useRef(false);
  

  //마운트 될떄, 카운트값이 변경이 될때

  useEffect(()=>{
    if(isMount.current === false){
      isMount.current = true;
      return;
    }
    console.log(`(Update)count: ${count} ${input}`);
  },[count,input]);
  const onClickButton =(value)=>{
    setCount(count + value)
  };
  //input 변화된값 setting
  const onChangeInput = (e)=>{
    setInput(e.target.value)
  };

  return (
    <div className='app'>
     <h1>Simple Counter</h1>
     <section>
      <input type="text" value={input} onChange={onChangeInput}/>
     </section>
      <section className='viewer'>
        <Viewer count={count}/>
        {count % 2 ===0? <Even/>: null}  
      </section>
      <section className='controller'>
        <Controller onClickButton ={onClickButton}/>
      </section>
    </div>
  )
}

export default App
