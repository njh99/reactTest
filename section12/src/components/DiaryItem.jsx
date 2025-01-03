import {getEmotionImage} from "../util/get-emotion-image"
import Button from "./Button";
import './DiaryItem.css';
import { useNavigate } from "react-router-dom";
const DiaryItem = ({id,emotionId,createdDate,content})=>{
    const nav= useNavigate();
    return(
        <div className="diaryItem">
            <div onClick={()=>{nav(`/diary/${id}`)}} className="img_section">
                <img src={getEmotionImage(emotionId)} alt="" />
            </div>
            <div onClick={()=>{nav(`/diary/${id}`)}} className="info_section">
                <p>{new Date(createdDate).toDateString()}</p>
                <p>{content}</p>
            </div>
            <div onClick={()=>{nav(`/edit/${id}`)}} className="button_section">
            <Button text={"수정하기"}/>
            </div>        
        </div>
        
    );
};
export default DiaryItem;