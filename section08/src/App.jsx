import './App.css'
import Header from './components/Header'
import List from './components/List'
import Editor from './components/Editor'
import { useState,useRef } from 'react'

//가상의 데이터(마운트: 서버에서 데이터를 가져온다.(Ajax json))
//목업

const mockData = [
  {
    id: 0,
    isDone: false,
    content: 'React 공부하기',
    date: new Date().getTime(),

  }, 
  {
    id: 1,
    isDone: false,
    content: '스프링부트 공부하기',
    date: new Date().getTime(),

  },
  {
    id: 2,
    isDone: false,
    content: '유튜브 동영상 시청',
    date: new Date().getTime(),

  },
];


function App() {
 const [todos,setTodos] = useState(mockData);
 const idRef = useRef(3);
  //todos 추가할 레코드 처리하는 핸들러함수
  const onInsert = (data)=>{
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: data,
      date: new Date().getTime(),
    };

    setTodos([...todos, newTodo]);
  };

  //todos 수정할 레토드 처리하는 핸들러함수
  const onUpdate = (targetId)=>{
    setTodos(
      todos.map((item)=>{
        return item.id === targetId ? {...item, isDone: !item.isDone} : item;
      })
    );
  };

  //todos 삭제할 레코드 처리하는 핸들러 함수
  const onDelete = (targetId)=>{
    setTodos(todos.filter((item)=>{
      return item.id !== targetId
    }));
  };


  return (
    <div className='app'>
     <Header/>
     <Editor onInsert={onInsert}/>
     <List todos={todos} onUpdate = {onUpdate}/>
    </div>
  )
}

export default App
