import { createContext, useState } from 'react';

export const TaskContext = createContext();

export function TaskProvider ({ children }) {
    const [tasks, setTasks] = useState([]);
    const [boards, setBoards] = useState([]);

    const appendTaskList = (newTask) => {
        setTasks([...tasks, newTask]);
    }

    const deleteTask = (deletedTask) => {
        setTasks(tasks.filter((task) => (task !== deletedTask)));
    }

    const updateCurrentStat = (taskID, newStat) => {
        const updatedTaskList = tasks;
        updatedTaskList[taskID].currentStat = newStat;
        setTasks([...updatedTaskList]);
    }

    const createNewBoard = (newBoard) => {
        setBoards([...boards, newBoard]);
    }


    return (
        <TaskContext.Provider value={{
            tasks,
            boards,
            appendTaskList,
            deleteTask,
            updateCurrentStat,
            createNewBoard,
        }}>
            {children}
        </TaskContext.Provider>
    );
}