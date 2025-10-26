import { FilterEnum } from "@/types/todolist/todolist.type";
import { Task } from "@/types/task/tasks.type";

export type TodolistProps = {
  todoListId: string;
  title: string;
  tasks: Task[];
  currentFilter: FilterEnum;
};
