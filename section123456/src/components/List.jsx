const List = ({id,userName,old,gender,phoneNo})=>{
    return(
        <div>
        <p className='userName'>{userName}</p>
        <p className='old'>{old}</p>
        <p className='gender'>{gender}</p>
        <p className='phoneNo'>{phoneNo}</p>
        </div>
    );
};
export default List;