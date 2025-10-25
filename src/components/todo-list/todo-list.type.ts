import { FilterEnum } from "@/types/todolist/todolist.type";
import { Task } from "@/types/task/tasks.type";

export type TodolistProps = {
  todoListId: string;
  title: string;
  tasks: Task[];
  currentFilter: FilterEnum;
  removeTask: (id: string, todolistId: string) => void;
  addTask: (task: string, todolistId: string) => void;
  changeFilter: (filter: FilterEnum, todolistId: string) => void;
  changeStatus: (taskId: string, isDone: boolean, todolistId: string) => void;
  removeTodoList: (id: string) => void;
  onEditTask: (value: string, id: string, todoListId: string) => void;
  onEditHeading: (value: string, todoListId: string) => void;
};
