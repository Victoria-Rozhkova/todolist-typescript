export type PropsTypes = {
  title: string;
  tasks: TaskType[];
  removeTask: (id: number) => void;
  changeFilter: (filter: FilterValues) => void;
};

type TaskType = {
  id: number;
  task: string;
  isDone: boolean;
};

export type FilterValues = "all" | "active" | "completed";
