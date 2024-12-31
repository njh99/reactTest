import './Editor.css'
import { useState, useRef } from 'react';
const Editor =({onInsert})=>{
    const [content,setContent] = useState('');
    const [name,setName] = useState('');
    const intputRef = useRef();
    const onSubmit = ()=>{
        if(content===''){
            alert('내용을 입력해주세요');
            intputRef.current.focus();
            return;

        }else if(name===''){
            alert('내용을 입력해주세요');
            intputRef.current.focus();
            return;
        }
        onInsert(content,name);
        setContent('');
        setName('');
    }
    const onChangeContent =(e)=>{
        setContent(e.target.value);
    };
    const onChangeName =(e)=>{
        setName(e.target.value);
    };
    
    const onKeyDown = (e)=>{
        if(e.keyCode === 13){
            onSubmit();
        }
    };

    return(
        <div className="editor">
            <table>
            <tr>
                <td>제목</td>
                <td><input  value={content} ref={intputRef} type="text" onChange={onChangeContent} onKeyDown={onKeyDown} placeholder='제목을 입력해 주세요' /></td>
            </tr>
            <tr>
                <td>작성자</td>
                <td><input value={name} ref={intputRef} type="text" onChange={onChangeName} onKeyDown={onKeyDown} placeholder='이름을 입력하세요'/></td>
            </tr>
            <tr>
                <td>내용</td>
                <td>
                <textarea placeholder='내용을 적어주세요'></textarea>
                </td>
            </tr>
        </table>
            <button onClick={onSubmit}>추가</button>
        </div>
    );
};

export default Editor;