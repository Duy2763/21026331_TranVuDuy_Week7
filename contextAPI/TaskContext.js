import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export function useTask() {
    return useContext(TaskContext);
}

export function TaskProvider({children}) {
    const [tasks, setTasks] = useState([
        {key: '1', content: 'To check email'},
        {key: '2', content: 'UI task web page'},
        {key: '3', content: 'Learn javascript basic'},
        {key: '4', content: 'Learn HTML advance'},
        {key: '5', content: 'Medical App UI'},
        {key: '6', content: 'Learn Java'},
    ])

    const [name, setName] = useState('');


    const addTask = (task) => {
        setTasks([
            ...tasks, task
        ])
    }

    const updateName = (name) => {
        setName(name)
    }

    const editTask = (key, content) => {
        const newTask = tasks.map(task => {
            return task.key === key ? {...task, content: content } : task
        })
        setTasks(newTask);
    }

    return (
        <TaskContext.Provider value={{updateName, name, tasks, addTask, editTask}}>
            {children}
        </TaskContext.Provider>
    )
}