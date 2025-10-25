import { AddTodolistActionType, RemoveTodolistActionType } from "@/types/reducer/todolist-reducer-type";

export type RemoveTaskActionType = {
    type: 'REMOVE-TASK',
    taskId: string
    todolistId: string
}

export type AddTaskActionType = {
    type: 'ADD-TASK',
    task: string,
    todolistId: string
}

export type ChangeTaskStatusActionType = {
    type: 'CHANGE-TASK-STATUS',
    todolistId: string,
    taskId: string
    isDone: boolean
}

export type ChangeTaskActionType = {
    type: 'CHANGE-TASK',
    todolistId: string,
    taskId: string
    task: string
}

export type TasksActionsType = RemoveTaskActionType
    | AddTaskActionType
    | ChangeTaskStatusActionType
    | ChangeTaskActionType
    | AddTodolistActionType
    | RemoveTodolistActionType
