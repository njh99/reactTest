import './Controller.css'

const Controller = ({onClickButton})=>{
    const onClickValue =(e)=>{
        onClickButton(Number(e.target.value))
    }
    return(
        <div>
            <p></p>
            <button onClick={onClickValue} value='7'>7</button>
            <button onClick={onClickValue} value='8'>8</button>
            <button onClick={onClickValue} value='9'>9</button><br />
            <button onClick={onClickValue} value='4'>4</button>
            <button onClick={onClickValue} value='5'>5</button>
            <button onClick={onClickValue} value='6'>6</button>
            <button onClick={onClickValue} value='='>=</button><br />
            <button onClick={onClickValue} value='1'>1</button>
            <button onClick={onClickValue} value='2'>2</button>
            <button onClick={onClickValue} value='3'>3</button>
            <button onClick={onClickValue} >0</button>
        
           
        </div>
    );
};
export default Controller;