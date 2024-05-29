import React, { useState } from 'react'

function Toggle() {
    const[data, setData]=useState(false)

    const onHandle=()=>{
        setData(!data);
    };
    
  return (
    <div>
        <button onClick={onHandle}>Click me</button>
        {data?"Hello":"Mounika"}
        
    </div>
  )
}

export default Toggle