import React, { FC, useState } from "react";
import TaskItem from "../task-item";
import { getListWrapperClassName } from "./tasks.style";
import { Task } from "../todo-list";
import { ConfirmDeleteModal } from "../mui";
import { TasksProps } from "./tasks.type";
import Empty from "../empty";

const Tasks: FC<TasksProps> = (props) => {
  const { tasks, onEdit, onChangeIsDone, open, setOpen, onConfirm } = props;

  const [currentTask, setCurrentTask] = useState<Task | null>(null);

  const onOpenModal = (task: Task) => {
    setOpen(true);
    setCurrentTask(task);
  };

  return (
    <ul className={getListWrapperClassName()}>
      {!!tasks.length ? (
        <>
          {tasks.map((task) => {
            return (
              <TaskItem
                key={task.id}
                task={task}
                onEdit={(value) => onEdit(value, task.id)}
                onChangeIsDone={(isDone) => onChangeIsDone(isDone, task.id)}
                onDelete={() => onOpenModal(task)}
              />
            );
          })}
          {currentTask && (
            <ConfirmDeleteModal
              open={open}
              setOpen={setOpen}
              content={`Are you sure you want to delete the task "${currentTask.task}"?`}
              title="Delete task"
              onConfirm={() => onConfirm(currentTask)}
            />
          )}
        </>
      ) : (
        <Empty title="No tasks" />
      )}
    </ul>
  );
};

export default Tasks;
