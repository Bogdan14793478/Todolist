import '../App.css'
import React, {useState} from 'react';
import Head from './Head'
import TodoList from './TodoList'

function Todo() {
  const [uniqueId, setUniqueId] = useState(1);
  const [tasks, setTasks] = useState([]);

    const findById = (data, id) => {
        for(let element of data) {
            if (element.id === id) {
                return element;
            }
            if(element.children) {
                let diseredElement = findById(element.children, id);
                if(diseredElement) {
                    return diseredElement;
                }
            }
        } 
        return false;
    }

    const addTask = (subTask, parentId) => {
        let clonededTasks = [...tasks];
        let newTask = {
            id: uniqueId,
            parentId: null,
            message: subTask,
            children: [],
        };

        if(typeof parentId === "undefined") {
            clonededTasks.push(newTask)
        } else{
            let desiredTask = findById(clonededTasks, parentId);
            newTask.parentId = parentId;
            desiredTask.children.push(newTask);
        } 

        setUniqueId(uniqueId + 1);
        setTasks(clonededTasks);
        console.log(tasks)
    }

    const removeItem = (id, parentId) => {
        let clonededTasks = [...tasks];
        if (parentId) {
          let parentTask = findById(clonededTasks, parentId);
          parentTask.children = parentTask.children.filter(
            (child) => child.id !== id
          );
        } else {
          clonededTasks = clonededTasks.filter((task) => task.id !== id);
        }
        setTasks(clonededTasks);
      };

      const upTask = (id, parentId) => {
        let clonededTasks = [...tasks];
        if(parentId){
            let parentTask = findById(clonededTasks, parentId);
            let index = parentTask.children.findIndex((task)=>task.id === id);
            let findTask = parentTask.children[index];
            parentTask.children[index] = parentTask.children[index-1];
            parentTask.children[index-1] = findTask;
        } else {
            let index = clonededTasks.findIndex((task)=>task.id === id);
            let findTask = clonededTasks[index];
            clonededTasks[index] = clonededTasks[index-1];
            clonededTasks[index-1] = findTask;
        }
        setTasks(clonededTasks);
      }

      const downTask = (id, parentId) => {
       let clonededTasks = [...tasks];
       if(parentId){
           let parentTask = findById(clonededTasks, parentId);
           let index = parentTask.children.findIndex((task) => task.id === id);
           let findTask = parentTask.children[index];
           parentTask.children[index] = parentTask.children[index + 1];
           parentTask.children[index + 1] = findTask;
       } else {
           let index = clonededTasks.findIndex((task) => task.id === id);
           let findTask = clonededTasks[index];
           clonededTasks[index] = clonededTasks[index + 1];
           clonededTasks[index + 1] = findTask
       }
       
       
       setTasks(clonededTasks);
      }

    return (
        <div>
        <div style={{ paddingLeft: "50px" }}>
            <Head addTask={addTask}
            upTask={upTask}
            downTask={downTask}
            />
            
        </div>
        <div>
            <TodoList 
            tasks={tasks}
            addTask={addTask}
            removeItem={removeItem}
            upTask={upTask}
            downTask={downTask}
            />
        </div>
        </div>
    )
}

export default Todo;