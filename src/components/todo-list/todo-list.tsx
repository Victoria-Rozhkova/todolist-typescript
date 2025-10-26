import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";

import {
  AddItemForm,
  DeleteTodolist,
  EditItem,
  Filters,
  Tasks,
} from "@/components";
import { ConfirmDeleteModal } from "@/components/mui";
import { TodolistProps } from "./todo-list.type";
import { FilterTitleEnum, FilterEnum } from "@/types/todolist/todolist.type";
import { Task } from "@/types/task/tasks.type";
import {
  changeTodoListFilterActionCreator,
  changeTodoListTitleActionCreator,
  removeTodoListActionCreator
} from "@/store/todolists-action-creators";
import {
  addTaskActionCreator, changeTaskActionCreator,
  changeTaskStatusActionCreator,
  removeTaskActionCreator
} from "@/store/tasks-action-creators";

const Todolist: FC<TodolistProps> = (props) => {
  const {
    todoListId,
    title,
    tasks,
    currentFilter,
  } = props;
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [openDeletingTodolistModal, setOpenDeletingTodolistModal] =
    useState(false);
  const [openDeletingTaskModal, setOpenDeletingTaskModal] = useState(false);

  const onChangeIsDone = (isDone: boolean, taskId: string) => {
    const action = changeTaskStatusActionCreator(todoListId, taskId, isDone);
    dispatch(action)
  };

  const addTaskHandler = (value: string) => {
    const action = addTaskActionCreator(value, todoListId);
    dispatch(action)
  };

  const changeFilterHandler = (filter: FilterEnum) => {
    const action = changeTodoListFilterActionCreator(todoListId, filter)

    dispatch(action);
  };

  const onEditTaskHandler = (value: string, id: string) => {
    const action = changeTaskActionCreator(todoListId,id,value);

    dispatch(action);
  };

  const onEditHeadingHandler = (value: string) => {
    const action = changeTodoListTitleActionCreator(todoListId,value);
    dispatch(action);
  };

  const onOpenDeletingTodolistModal = () => {
    setOpenDeletingTodolistModal(true);
  };

  const onDeleteTask = (task: Task) => {
    const action = removeTaskActionCreator(task.id, todoListId)
    dispatch(action)

    setOpenDeletingTaskModal(false);
  };

  const onDeleteTodolist = () => {
    const action = removeTodoListActionCreator(todoListId);
    dispatch(action);

    setOpenDeletingTodolistModal(false);
  };

  const filters = [
    { title: FilterTitleEnum.ALL },
    { title: FilterTitleEnum.ACTIVE },
    { title: FilterTitleEnum.COMPLETED},
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
        onEdit={onEditTaskHandler}
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
