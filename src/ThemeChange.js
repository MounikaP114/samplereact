import React, { useState } from 'react'

function ThemeChange() {
    const[theme,setTheme]=useState(false)
  return (
    <div style={ {backgroundColor:theme? '#333': '#FFF', padding:'150px',color: theme? '#FFF': '#333'}}>
        <p>this is theme change demo</p>
        <button onClick={e=>setTheme(!theme)}>Switched to {theme?'Light':'Dark'}Mode</button><br/>
        
    </div>
    
  )
}

export default ThemeChange