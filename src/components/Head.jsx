import React, {useState} from 'react';

function Head ({
    task,
    addTask,
    removeItem,
    parentId,
}) {

    const [subTask, setSubTask] = useState("")
    return (
        <div>
            <input value={subTask} onChenge={(event) => {setSubTask(event.target.value)}} />
            <button onClick={() => addTask(subTask, parentId)} >Add</button>
            {task && (            
            <button onClick={()=>{removeItem(task.id, task.parentId)}} >Remove</button>

            )}
        </div>
    )
}

export default Head;