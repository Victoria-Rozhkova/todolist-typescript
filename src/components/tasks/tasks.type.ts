import { Task } from "@/types/task/tasks.type";

export type TasksProps = {
  tasks: Task[];
  open: boolean;
  setOpen: (open: boolean) => void;
  onEdit: (value: string, taskId: string) => void;
  onChangeIsDone: (isDone: boolean, taskId: string) => void;
  onConfirm: (ask: Task) => void;
};
