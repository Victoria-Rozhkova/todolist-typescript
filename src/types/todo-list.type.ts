export type PropsTypes = {
  title: string;
  tasks: TaskType[];
};

type TaskType = {
  id: number;
  task: string;
  isDone: boolean;
};
