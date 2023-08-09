export type TodolistProps = {
  todoListId: string;
  title: string;
  tasks: TaskType[];
  currentFilter: FilterValues;
  removeTask: (id: string, todolistId: string) => void;
  addTask: (task: string, todolistId: string) => void;
  changeFilter: (filter: FilterValues, todolistId: string) => void;
  changeStatus: (taskId: string, isDone: boolean, todolistId: string) => void;
  removeTodoList: (id: string) => void;
};

export type TaskType = {
  id: string;
  task: string;
  isDone: boolean;
};

export type FilterValues = "all" | "active" | "completed";
