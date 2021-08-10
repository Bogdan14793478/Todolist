import React from 'react';
import Head from './Head';

function TodoList ({
    tasks,
    addTask,
    removeItem,
}) {

return (
    <div>
        {tasks.map((task, index) => {
            let isFirst = index === 0;
            let isLast = index === tasks.length - 1;
            return (
                <div key={task.id}>
                    <p>{task.message}</p>
                    <div style={{ paddingLeft: "30px" }}>
                        <Head 
                        task={task}
                        addTask={addTask}
                        removeItem={removeItem}
                        parentId={task.id}
                        />
                        <TodoList 
                        tasks={tasks.children}
                        addTask={addTask}
                        removeItem={removeItem}
                        />
                    </div>
                </div>
            )
        })}
    </div>
)
}

export default TodoList;