import { v1 } from "uuid";
import {
    AddTodolistActionType, ChangeTodolistFilterActionType,
    ChangeTodolistTitleActionType,
    RemoveTodolistActionType
} from "@/types/reducer/todolist-reducer-type";
import { FilterEnum } from "@/types/todolist/todolist.type";

export const removeTodoListActionCreator = (todolistId: string): RemoveTodolistActionType => {
    return {
        type: 'REMOVE-TODOLIST',
        id: todolistId
    }
}

export const addTodoListActionCreator = (newTodolistTitle: string): AddTodolistActionType => {
    return {
        type: 'ADD-TODOLIST',
        title: newTodolistTitle,
        todolistId: v1()
    }
}

export const changeTodoListTitleActionCreator = (id: string, newTodolistTitle: string): ChangeTodolistTitleActionType => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        id,
        title: newTodolistTitle
    }
}

export const changeTodoListFilterActionCreator = (id: string, filter: FilterEnum): ChangeTodolistFilterActionType => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        id,
        filter
    }
}
