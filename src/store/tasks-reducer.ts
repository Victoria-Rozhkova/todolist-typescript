import { v1 } from "uuid";
import { TasksActionsType } from "@/types/reducer/tasks-reducer-type";
import { Task, Tasks } from "@/types/task/tasks.type";
import { todoListId1, todoListId2 } from "@/store/todolists-reducer";

const initialState: Tasks = {
    [todoListId1]: [
    { id: v1(), task: "CSS", isDone: true },
    { id: v1(), task: "HTML", isDone: true },
    { id: v1(), task: "JS", isDone: true },
    { id: v1(), task: "React", isDone: true },
    { id: v1(), task: "Vue", isDone: true },
],
    [todoListId2]: [
    { id: v1(), task: "Book", isDone: false },
    { id: v1(), task: "Milk", isDone: true },
],
}

export const tasksReducer = (
    state: Tasks = initialState,
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
            const tasks = stateCopy[action.todolistId]
            stateCopy[action.todolistId] = tasks.map(task=>task.id === action.taskId ? {...task, isDone: action.isDone} : task)

            return stateCopy
        }

        case "CHANGE-TASK": {
            const stateCopy = {...state}
            const tasks = stateCopy[action.todolistId]
            stateCopy[action.todolistId] = tasks.map(task=>task.id === action.taskId ? {...task, task: action.task} : task)

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
            return state
    }
};
