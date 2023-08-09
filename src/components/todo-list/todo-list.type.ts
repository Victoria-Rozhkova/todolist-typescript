export type TodolistProps = {
  todoListId: string;
  title: string;
  tasks: Task[];
  currentFilter: FilterValues;
  removeTask: (id: string, todolistId: string) => void;
  addTask: (task: string, todolistId: string) => void;
  changeFilter: (filter: FilterValues, todolistId: string) => void;
  changeStatus: (taskId: string, isDone: boolean, todolistId: string) => void;
  removeTodoList: (id: string) => void;
  onEditTask: (value: string, id: string, todoListId: string) => void;
  onEditHeading: (value: string, todoListId: string) => void;
};

export type Task = {
  id: string;
  task: string;
  isDone: boolean;
};

export type Tasks = {
  [key: string]: Task[];
};

export type FilterValues = "all" | "active" | "completed";

export type Todo = { id: string; title: string; filter: FilterValues };
