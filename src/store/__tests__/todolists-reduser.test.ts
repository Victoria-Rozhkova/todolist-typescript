import { v1 } from "uuid";
import { todoListsReducer} from "../todolists-reducer";
import {
  addTodoListActionCreator,
  changeTodoListFilterActionCreator,
  changeTodoListTitleActionCreator,
  removeTodoListActionCreator
} from "../todolists-action-creators";
import { FilterEnum, TodoList } from "@/types/todolist/todolist.type";

test("correct todoList should be removed", () => {
  const todoListId1 = v1();
  const todoListId2 = v1();

  const state: TodoList[] = [
    { id: todoListId1, title: "What to learn", filter: FilterEnum.ALL },
    { id: todoListId2, title: "What to buy", filter: FilterEnum.ALL },
  ];

  const expectedState = todoListsReducer(state, removeTodoListActionCreator(todoListId1));

  expect(expectedState.length).toBe(1);
  expect(expectedState[0].id).toBe(todoListId2);
});

test("correct todoList should be added", () => {
  const todoListId1 = v1();
  const todoListId2 = v1();

  const newTodoListTitle = "New todoList";

  const state: TodoList[] = [
    { id: todoListId1, title: "What to learn", filter: FilterEnum.ALL },
    { id: todoListId2, title: "What to buy", filter: FilterEnum.ALL },
  ];

  const expectedState = todoListsReducer(state, addTodoListActionCreator(newTodoListTitle));

  expect(expectedState.length).toBe(3);
  expect(expectedState[0].title).toBe(newTodoListTitle);
});

test("correct todoList should change its name", () => {
  const todoListId = v1();
  const todoListTitle = "TodoList";
  const newTodoListTitle = "New todoList";

  const state: TodoList[] = [
    { id: todoListId, title: todoListTitle, filter: FilterEnum.ALL },
  ];

  const expectedState = todoListsReducer(state, changeTodoListTitleActionCreator(todoListId, newTodoListTitle));

  expect(expectedState.length).toBe(1);
  expect(expectedState[0].title).toBe(newTodoListTitle);
});

test("correct filter of todoList should be changed", () => {
  const todoListId1 = v1();
  const todoListId2 = v1();

  const state: TodoList[] = [
    { id: todoListId1, title: "TodoList", filter: FilterEnum.ALL },
    { id: todoListId2, title: "TodoList", filter: FilterEnum.ALL },
  ];

  const expectedState = todoListsReducer(state, changeTodoListFilterActionCreator(todoListId2, FilterEnum.ACTIVE));

  expect(expectedState[0].filter).toBe(FilterEnum.ALL);
  expect(expectedState[1].filter).toBe(FilterEnum.ACTIVE);
});
