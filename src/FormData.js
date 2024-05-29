import React, { useState } from 'react'

function FormData() {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[msg,setMessage]=useState('')
    
    const clearData=()=>{
        setName("")
        setEmail("")
        setMessage("")
    }

  return (
    <div>
            <input type='text' value={name} placeholder='Name' onChange={e=>setName(e.target.value)}></input><br/>
            <input type='text' value={email} placeholder='Email'onChange={e=>setEmail(e.target.value)}></input><br/>
            <input type='text'value={msg} placeholder='Message'onChange={e=>setMessage(e.target.value)}></input><br/>
            <button onClick={clearData}>clear</button><br/>
           Name: {name}<br/>
           Email: {email}<br/>
           Message: { msg}<br/>
    </div>
  )
}

export default FormData