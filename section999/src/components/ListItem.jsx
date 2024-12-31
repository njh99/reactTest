import './ListItem.css'

const ListItem =({id,isDone,content,date,onUpdate,onDelete,name})=>{
  const onChange=()=>{
    onUpdate(id);
  };
  const onClickItem = ()=>{
    onDelete(id);
  };
    return(
        <div className='listItem'>
          <input onChange={onChange} checked={isDone}   type="checkbox"/>
          <p className='content'>{content}</p>
          <p className='name'>{name}</p>
          <p className='date'>{new Date(date).toLocaleDateString()}</p>
          <button onClick={onClickItem}>삭제</button>
        </div>
    );
};

export default ListItem;