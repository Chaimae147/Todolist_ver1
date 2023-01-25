import React from 'react'
import "./style.css"
export default function Task({txt,delf,done,donecomplete}) {
  
  return (

    <div>
      
      <input type="text"  className='ajo'   style={done ? {backgroundColor:'rosybrown',border:'0.2 solid gray',color:'white',fontWeight:'bold'} : {backgroundColor:'white',border:'0.2 solid black'}} readOnly value={txt} /> &nbsp;&nbsp;
      <input type="button"  onClick={delf} className='btn btn-outline-danger' value="SUPPRIMER" />&nbsp;&nbsp;
      <input type="button"  className='btn btn-outline-success' onClick={donecomplete} value="DONE" />

    </div>
  )
}
