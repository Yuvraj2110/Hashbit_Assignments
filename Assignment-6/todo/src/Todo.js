import React, { useState } from 'react'
import ListItem from './ListItem';

function Todo() {
    const [list, setList] = useState([]);
    const [value, setvalue] = useState('');

    const addItem=()=>{
        let newItem=[Math.floor(Math.random()*10000),value];
        
        setList([...list,newItem]);
        setvalue("");
    }
    const deleteItem=(idx)=>{
        let curr=list.filter((curr,i)=>{return curr[0]!=idx});
        setList(curr);        
    }
  return (
    <>
    <div>
        {list && list.map((ele)=>{
            let idx=list.lastIndexOf(ele);
            return <div key={idx}><ListItem item={ele} deleteItem={deleteItem}/></div>
            
        })}
    </div>
        <input type='text' placeholder='Enter task' value={value} onChange={(e)=>{setvalue(e.target.value)}}/>
        <button onClick={addItem}> Add to list</button>
    </>
  )
}

export default Todo