import { useParams, useNavigate } from "react-router-dom"; 
import Header from "../components/Header"; 
import Button from "../components/Button"; 
import Viewer from "../components/Viewer";  
import { getStringedDate } from "../util/get-stringed-date"; 
import { DiaryStateContext } from "../App"; 
import { useState,useContext,useEffect } from "react";
const Diary = () => { 
const params = useParams(); 
const nav = useNavigate();
useEffect(() => {
  const currentDiaryItem = data.find( 
    (item) => String(item.id) === String(params.id) 
  ); 

  if (!currentDiaryItem) { 
    window.alert("존재하지 않는 일기입니다."); 
    nav("/", { replace: true }); 
  } 

  setCurDiaryItem(currentDiaryItem); 
}, [params.id, data]); 

const data = useContext(DiaryStateContext); 
const [curDiaryItem, setCurDiaryItem] = useState();
//마운트될 때 해당되는 id를 찾아서 객체가져오기 

//================================ 

const { createdDate, emotionId, content } = curDiaryItem; 
//날짜를 문자열로 가져오기  
const title = getStringedDate(new Date(createdDate)); 

return ( 
  <div> 
    <Header 
      title={`${title} 기록`} 
      leftChild={ 
        <Button onClick={() => nav(-1)} text={"< 뒤로 가기"} /> 
      } 
      rightChild={ 
        <Button 
          onClick={() => nav(`/edit/${params.id}`)} 
          text={"수정하기"} 
        /> 
      } 
    /> 
    <Viewer emotionId={emotionId} content={content} /> 
  </div> 
); 
}; 

export default Diary; 