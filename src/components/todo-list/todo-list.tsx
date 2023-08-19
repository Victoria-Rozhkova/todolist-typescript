import React, { FC, useState } from "react";

import {
  AddItemForm,
  DeleteTodolist,
  EditItem,
  Filters,
  Tasks,
} from "@/components";
import { ConfirmDeleteModal } from "@/components/mui";
import { FilterValues, Task, TodolistProps } from "./todo-list.type";

const Todolist: FC<TodolistProps> = (props) => {
  const {
    todoListId,
    title,
    tasks,
    addTask,
    removeTask,
    changeFilter,
    changeStatus,
    currentFilter,
    removeTodoList,
    onEditTask,
    onEditHeading,
  } = props;

  const [show, setShow] = useState(false);
  const [openDeletingTodolistModal, setOpenDeletingTodolistModal] =
    useState(false);
  const [openDeletingTaskModal, setOpenDeletingTaskModal] = useState(false);
  const onChangeIsDone = (isDone: boolean, taskId: string) => {
    changeStatus(taskId, isDone, todoListId);
  };

  const addTaskHandler = (value: string) => {
    addTask(value, todoListId);
  };

  const changeFilterHandler = (filter: string) => {
    changeFilter(filter as FilterValues, todoListId);
  };

  const onEditTaskHeandler = (value: string, id: string) => {
    onEditTask(value, id, todoListId);
  };

  const onEditHeadingHandler = (value: string) => {
    onEditHeading(value, todoListId);
  };

  const onOpenDeletingTodolistModal = () => {
    setOpenDeletingTodolistModal(true);
  };

  const onDeleteTask = (task: Task) => {
    removeTask(task.id, todoListId);
    setOpenDeletingTaskModal(false);
  };

  const onDeleteTodolist = () => {
    removeTodoList(todoListId);
    setOpenDeletingTodolistModal(false);
  };

  const filters = [
    { title: "All" },
    { title: "Active" },
    { title: "Completed" },
  ];

  return (
    <div
      className="p-[20px] relative"
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}
    >
      <div className="flex gap-[10px]">
        <EditItem title={title} onEdit={onEditHeadingHandler} />
        <DeleteTodolist show={show} onDelete={onOpenDeletingTodolistModal} />
        <ConfirmDeleteModal
          open={openDeletingTodolistModal}
          setOpen={setOpenDeletingTodolistModal}
          content={`Are you sure you want to delete the task list "${title}"?`}
          title="Delete todo list"
          onConfirm={onDeleteTodolist}
        />
      </div>
      <AddItemForm onSubmit={addTaskHandler} placeholder="Add task" />
      <Tasks
        tasks={tasks}
        open={openDeletingTaskModal}
        setOpen={setOpenDeletingTaskModal}
        onEdit={onEditTaskHeandler}
        onChangeIsDone={onChangeIsDone}
        onConfirm={onDeleteTask}
      />
      <Filters
        currentFilter={currentFilter}
        filters={filters}
        onChange={changeFilterHandler}
      />
    </div>
  );
};

export default Todolist;
