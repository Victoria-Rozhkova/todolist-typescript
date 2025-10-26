import { FilterEnum, TodoList } from "@/types/todolist/todolist.type";
import { TodolistActionsType } from "@/types/reducer/todolist-reducer-type";
import {v1} from "uuid";

export const todoListId1 = v1();
export const todoListId2 = v1();

const initialState: TodoList[] = [
  { id: todoListId1, title: "What to learn", filter: FilterEnum.ALL },
  { id: todoListId2, title: "What to buy", filter: FilterEnum.ALL },
]

export const todoListsReducer = (
  state: TodoList[] = initialState,
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
      return state
  }
};
