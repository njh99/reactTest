import './ListItem.css'

const ListItem =({id,isDone,content,date,onUpdate,onDelete})=>{
  const onChange=()=>{
    onUpdate(id);
  };
  const onClickIteml = ()=>{
    onDelete(id);
  };
    return(
        <div className='listItem'>
          <input onChange={onChange} checked={isDone}   type="checkbox"/>
          <p className='content'>{content}</p>
          <p className='date'>{new Date(date).toLocaleDateString()}</p>
          <button onClick={onClickIteml}>삭제</button>
        </div>
    );
};

export default ListItem;