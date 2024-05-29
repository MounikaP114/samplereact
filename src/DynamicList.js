import React from 'react'
import { useState } from 'react';

function DynamicList() {
    const[data,setData]=useState('');
    const[list, setList]=useState([]);

    const onHandle=(e)=>{
        if(data.trim()!==''){
            setList([...list,data])
        }
        setData('')
    }
  return (
    <div>
        <input type='text' value={data} placeholder='enter something' onChange={e=>setData(e.target.value)}></input>
        <button  onClick={onHandle}>submit</button>
        <ul>
            {list.map((item,index)=>(
                <li key={index} style={{listStyle:'none'}}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default DynamicList