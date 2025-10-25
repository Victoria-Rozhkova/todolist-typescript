import { v1 } from "uuid";
import { TasksActionsType } from "@/types/reducer/tasks-reducer-type";
import { Task, Tasks } from "@/types/task/tasks.type";

export const tasksReducer = (
    state: Tasks,
    action: TasksActionsType
): Tasks => {
    switch (action.type) {
        case "REMOVE-TASK":{
            const stateCopy = {...state}
            stateCopy[action.todolistId] = stateCopy[action.todolistId].filter((task) => task.id !== action.taskId);

            return stateCopy
        }

        case "ADD-TASK":{
            const stateCopy = {...state}
            const newTask: Task = { id: v1(), task: action.task, isDone: false };
            stateCopy[action.todolistId] = [newTask, ...stateCopy[action.todolistId]];

            return stateCopy
        }

        case "CHANGE-TASK-STATUS":{
            const stateCopy = {...state}
            const task = stateCopy[action.todolistId].find((taskItem) => taskItem.id === action.taskId);
            if (task) {
                task.isDone = action.isDone;
            }

            return stateCopy
        }

        case "CHANGE-TASK": {
            const stateCopy = {...state}

            const task = stateCopy[action.todolistId].find((taskItem) => taskItem.id === action.taskId);
            if (task) {
                task.task = action.task;
            }

            return stateCopy
        }

        case "ADD-TODOLIST": {
            const stateCopy = {...state}
            stateCopy[action.todolistId] = []

            return stateCopy
        }

        case "REMOVE-TODOLIST": {
            const stateCopy = {...state}
            delete stateCopy[action.id]

            return stateCopy
        }

        default:
            throw new Error("Unknown ACTION TYPE");
    }
};
