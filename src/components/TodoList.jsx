import React from 'react';
import Head from './Head';

function TodoList ({
    tasks,
    addTask,
    removeItem,
    upTask,
    downTask,
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
                        parentId={task.id}
                        removeItem={removeItem}
                        upTask={upTask}
                        downTask={downTask}
                        isFirst={isFirst}
                        isLast={isLast}
                        />
                        <TodoList 
                        tasks={task.children}
                        addTask={addTask}
                        removeItem={removeItem}
                        upTask={upTask}
                        downTask={downTask}
                        />
                    </div>
                </div>
            )
        })}
    </div>
)
}

export default TodoList;