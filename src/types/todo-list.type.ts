export type PropsTypes = {
  title: string;
  tasks: TaskType[];
  currentFilter: FilterValues;
  removeTask: (id: string) => void;
  addTask: (task: string) => void;
  changeFilter: (filter: FilterValues) => void;
  changeStatus: (taskId: string, isDone: boolean) => void;
};

export type TaskType = {
  id: string;
  task: string;
  isDone: boolean;
};

export type FilterValues = "all" | "active" | "completed";
