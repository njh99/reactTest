import './App.css'
import { useReducer,createContext, useRef } from 'react'
import Membership from './components/Membership';
import Header from './components/Header';
import List from './components/List';
const mockdata = [
{
  id: 1,
  userName:'유저1',
  old :24,
  gender : '남자',
  phoneNo: '010-2732-2241'
},{
  id: 2,
  userName:'유저2',
  old :27,
  gender : '여자',
  phoneNo: '010-2674-0093'
},{
  id: 3,
  userName:'유저3',
  old :30,
  gender : '남자',
  phoneNo: '010-3784-2834'
},
];
const reducer = (state,action)=>{
  switch(action.type){
    case "CREATE": 
      return [action.data,...state];
    default: return state;
  }
}




function App() {
const [data, dispatch] = useReducer(reducer,mockdata);
const idRef = useRef(4);

  const onCreate = ( name,old,gen,phone)=>{
    dispatch({
      type: "CREATE",
      data:{
        id: idRef.current++,
        userName: name,
        old: old,
        gender: gen,
        phoneNo: phone,
      }
    });
  }

  return (
    <>
      <Header/>
      <List data={data.id}{...data}/>
      <Membership onCreate={onCreate}/>
    </>
  )
}

export default App
