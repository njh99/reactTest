function Button({text, color, size,children}){
  //내부함수(선언식, 표현식, 화살표)
  const onClickButton = (e)=>{
    console.log(e);
    alert(text);

  };

  
  
  
  return(
      <>
     <button onClick={onClickButton} style={{color: color}}>{text}{children}</button>
      </>
    );
  };

  Button.defaultProps ={
    text:'게시판',
    color:'green'
  };
  export default Button;