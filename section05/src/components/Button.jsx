function Button({text, color, size}){
    return(
      <>
     <button style={{color: color}}>{text}</button>
      </>
    );
  };

  Button.defaultProps ={
    text:'게시판',
    color:'green'
  };
  export default Button;