import React, { useState } from 'react'
import './style.css'
import Task from './Task';
import{v4 as uuidv4} from 'uuid';
export default function Todolist() {
    const[tasks,settasks]=useState([
        {id:uuidv4(), nom :'SPORT' ,done:false},
        {id:uuidv4(), nom :'MOVIE' ,done:false},
        {id:uuidv4(), nom :'STUDY' ,done:false}

    ]);
    const [task,settask]=useState('');
    const addtask=()=>{
        let ntasks=[...tasks];
        let ntask={};
        ntask.id=uuidv4();
        ntask.nom=task;
        ntasks.push(ntask);
        settasks(ntasks);
        settask('');
    };
    const deletetask=(idp)=>{
        let ntasks=tasks.filter((t)=>{
            return t.id!=idp
        })
        settasks(ntasks); 
    }
  
    const donecomplete=(id)=>{
        settasks(tasks.map(task => task.id===id ? {id:task.id,nom:task.nom,done:true} : task ))
    }
  
  return (
    <div>
        <div className="row justify-content-center">
<div className='mt-5 py-3 col-8 c3' style={{backgroundColor:'whitesmoke'}}>
      <h1 className='title1'>TO DO LIST APP</h1>
      <h6 className='title1'>CHOSE A FAIRE</h6>
      <br />
      <form action="">
        
     <input type="text" placeholder='ENTREZ UNE TACHE:' value={task} onChange={(e)=>{settask(e.target.value)}}  className='form-control inp' />
      <br /> <input type="button"  onClick={addtask} className='buttonn ' value="AJOUTER" />

      </form>
      <br /><br />
      <h2 className='title1'>LISTES DES CHOSES A FAIRE</h2>
      <br />
     <ul>
        {
            tasks.map((t)=>{
                return <li><Task delf={(idp)=>{deletetask(t.id)}} key={t.id} txt={t.nom}  donecomplete = {() => donecomplete(t.id)} done={t.done}/></li> 

            })
        }
     </ul>
     </div>
     </div>
    </div>
  )
}
