import { useContext } from "react"
import TasksContext from "../contexts/TasksContext"

export const useTasks = () => {
    const tasksContext = useContext(TasksContext);

    return tasksContext;
}