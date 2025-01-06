import { useState,useRef } from "react";
const Membership = ({onCreate})=>{
   const [userName,setUserName] = useState('');
   const [old,setOld] = useState('');
   const [gender,setGender] = useState('');
   const [phoneNo,setPhoneNo] = useState('');
   const [data,setData] = useState('');
    const intputRef = useRef();


    const onSubmit = ()=>{
        if(userName===''){
            alert('내용을 입력해주세요');
            intputRef.current.focus();
            return;

        }else if(old===''){
            alert('내용을 입력해주세요');
            intputRef.current.focus();
            return;

        }else if(gender===''){
            alert('내용을 입력해주세요');
            intputRef.current.focus();
            return;

        }else if(phoneNo===''){
            alert('내용을 입력해주세요');
            intputRef.current.focus();
            return;

        }
        onCreate(data);
        setData('')
    }
    const onChangeName =(e)=>{
        setUserName(e.target.value);
    };
    const onChangeOld =(e)=>{
        setOld(e.target.value);
    };
    const onChangeGender =(e)=>{
        setGender(e.target.value);
    };
    const onChangePhoneNo =(e)=>{
        setPhoneNo(e.target.value);
    };

    
    return (
        <div>
            <p>이름</p><input value={userName}type="text" ref={intputRef} onChange={onChangeName}/>
            <p>나이</p><input value={old}type="text" onChange={onChangeOld}/>
            <p>성별</p><input value={gender}type="text"onChange={onChangeGender} />
            <p>전화번호</p><input value={phoneNo}type="text"onChange={onChangePhoneNo} /><br />
            <button onClick={onSubmit}>회원등록</button>
        </div>
    );
};
export default Membership;