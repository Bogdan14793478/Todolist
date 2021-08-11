import React, {useState} from 'react';

function Head ({
    task,
    addTask,
    removeItem,
    parentId,
    upTask,
    isFirst,
    isLast,
    downTask,
}) {

    const [subTask, setSubTask] = useState("")
    return (
        <div>
          <input value={subTask} onChange={(event) => {setSubTask(event.target.value);}}></input>            
          <button onClick={() => {addTask(subTask, parentId); setSubTask("");}} >Add</button>
          {task && <button onClick={()=>{removeItem(task.id, task.parentId); setSubTask("")}}  >Remove</button>}
          {!isFirst && <button onClick={()=>{upTask(task.id, task.parentId)}} >Up</button> }
         {!isLast && <button onClick={()=>{downTask(task.id, task.parentId)}} >Down</button>} 
            
        </div>
    )
}

export default Head;