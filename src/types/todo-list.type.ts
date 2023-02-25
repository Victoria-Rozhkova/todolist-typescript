export type PropsTypes = {
  title: string;
  tasks: TaskType[];
  removeTask: (id: string) => void;
  addTask: (task: string) => void;
  changeFilter: (filter: FilterValues) => void;
};

export type TaskType = {
  id: string;
  task: string;
  isDone: boolean;
};

export type FilterValues = "all" | "active" | "completed";
