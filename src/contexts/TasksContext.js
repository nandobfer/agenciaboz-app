import { createContext, useState } from "react";

const TasksContext = createContext({});

export default TasksContext;


export const TasksProvider = ({children}) => {
    const [value, setValue] = useState([])

    return (
        <TasksContext.Provider value={{value, setValue}}>
            {children}
        </TasksContext.Provider>
    )
}