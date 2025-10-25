import { Task } from "@/types/task/tasks.type";

export type TaskItemProps = {
  task: Task;
  onChangeIsDone: (isDone: boolean) => void;
  onEdit: (value: string) => void;
  onDelete: (task: Task) => void;
};
