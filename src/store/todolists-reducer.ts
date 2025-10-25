import { FilterEnum, TodoList } from "@/types/todolist/todolist.type";
import { TodolistActionsType } from "@/types/reducer/todolist-reducer-type";

export const todoListsReducer = (
  state: TodoList[],
  action: TodolistActionsType
): TodoList[] => {
  switch (action.type) {
    case "REMOVE-TODOLIST":
      return state.filter((list) => list.id !== action.id);

    case "ADD-TODOLIST": {
      const newTodo: TodoList = {
        id: action.todolistId,
        title: action.title,
        filter: FilterEnum.ALL,
      };

      return [
        newTodo,
        ...state
      ]
    }

    case "CHANGE-TODOLIST-TITLE": {
      const todolist = state.find((todolist) => todolist.id === action.id);
      if (todolist) {
        todolist.title = action.title;
      }

      return [ ...state ]
    }

    case "CHANGE-TODOLIST-FILTER": {
      const todolist = state.find((todolist) => todolist.id === action.id);
      if (todolist) {
        todolist.filter = action.filter;
      }

      return [ ...state ]
    }

    default:
      throw new Error("Unknown ACTION TYPE");
  }
};
