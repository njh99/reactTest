import './List.css'
import ListItem from './ListItem';
import { useState,useMemo } from 'react';

const List =({todos,onUpdate,onDelete,name})=>{
    const [search, setSearch] = useState('');
    const onChangeSearch = (e)=>{
        setSearch(e.target.value);
    };

    //useState 해당되는 서치내용을 바꾸면 List 리랜더링이 발생
    //이떄 필터링을 진행한다.

    const getFilterItem = ()=>{
        if(search === ''){
            return todos;
        }
        return todos.filter((item)=>{
            return item.content.toLowerCase().includes(search.toLocaleLowerCase());
        })
    };
    const filterItem = getFilterItem();

    //랜더링이 발생할때마다 전체갯수, 업무를 완료한갯수, 미완료 업무수 출력
    /*const getAnalyzeData = ()=>{
        console.log("getAnalyzeData 호출")
        const totalCount = todos.length;
        //이부분이 시간을 많이 잡아먹는다.
        const todosDone = todos.filter((item)=>{
            return item.idDone === true;
        });
        const doneCount = todosDone.length;
        const notDoneCount = totalCount -doneCount;
        return {totalCount, doneCount,notDoneCount};
    };
    */

    const {totalCount, doneCount,notDoneCount} = useMemo(()=>{
        console.log("getAnalyzeData 호출")
        const totalCount = todos.length;
        //이부분이 시간을 많이 잡아먹는다.
        const todosDone = todos.filter((item)=>{
            return item.idDone === true;
        });
        const doneCount = todosDone.length;
        const notDoneCount = totalCount -doneCount;
        return {totalCount, doneCount,notDoneCount};
    },[todos]);






    return(
        <div className='list'>
            <h4>Todo List😊</h4>
            <input type="text" value={search} onChange={onChangeSearch} placeholder='검색어를 입력하세요'/>
            <div className='item'>
              {filterItem.map((item)=>{
                return <ListItem key={item.id}{...item} onUpdate={onUpdate} onDelete={onDelete}/>;
              })}
            </div>
        </div>
    );
};

export default List;