import { Task } from "../todo-list";

export type TaskItemProps = {
  task: Task;
  onChangeIsDone: (isDone: boolean) => void;
  onEdit: (value: string) => void;
  onDelete: (task: Task) => void;
};
