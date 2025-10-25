import {
    AddTaskActionType,
    ChangeTaskActionType,
    ChangeTaskStatusActionType,
    RemoveTaskActionType
} from "@/types/reducer/tasks-reducer-type";

export const removeTaskActionCreator = (taskId: string, todolistId: string): RemoveTaskActionType => {
    return {
        type: 'REMOVE-TASK',
        taskId,
        todolistId
    }
}

export const addTaskActionCreator = (task: string, todolistId: string): AddTaskActionType => {
    return {
        type: 'ADD-TASK',
        task,
        todolistId
    }
}

export const changeTaskStatusActionCreator = (todolistId: string, taskId: string, isDone: boolean): ChangeTaskStatusActionType => {
    return {
        type: 'CHANGE-TASK-STATUS',
        todolistId,
        taskId,
        isDone
    }
}

export const changeTaskActionCreator = (todolistId: string, taskId: string, task: string): ChangeTaskActionType => {
    return {
        type: 'CHANGE-TASK',
        todolistId,
        taskId,
        task
    }
}
