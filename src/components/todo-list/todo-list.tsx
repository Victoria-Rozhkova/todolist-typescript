import React, { FC, useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import {
  AddItemForm,
  DeleteTodolist,
  EditableTaskTitle,
  Filters,
  Tasks,
} from "@/components";
import { ConfirmDeleteModal } from "@/components/mui";
import { TodolistProps } from "./todo-list.type";
import { FilterEnum } from "@/types/todolist/todolist.type";
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

const Todolist: FC<TodolistProps> = React.memo((props) => {
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

  const onChangeIsDone = useCallback((isDone: boolean, taskId: string) => {
    const action = changeTaskStatusActionCreator(todoListId, taskId, isDone);
    dispatch(action)
  }, [todoListId, dispatch]);

  const addTask = useCallback((value: string) => {
    const action = addTaskActionCreator(value, todoListId);
    dispatch(action)
  }, [todoListId, dispatch]);

  const changeFilterHandler = useCallback((filter: FilterEnum) => {
    const action = changeTodoListFilterActionCreator(todoListId, filter)

    dispatch(action);
  }, [todoListId, dispatch]);

  const onEditTask = useCallback((value: string, id: string) => {
    const action = changeTaskActionCreator(todoListId,id,value);

    dispatch(action);
  }, [todoListId, dispatch]);

  const onEditTitle = useCallback((value: string) => {
    const action = changeTodoListTitleActionCreator(todoListId, value);
    dispatch(action);
  }, [todoListId, dispatch]);

  const onOpenDeletingTodolistModal = useCallback(() => {
    setOpenDeletingTodolistModal(true);
  }, []);

  const onDeleteTask = useCallback((task: Task) => {
    const action = removeTaskActionCreator(task.id, todoListId)
    dispatch(action)

    setOpenDeletingTaskModal(false);
  }, [todoListId, dispatch]);

  const onDeleteTodolist = useCallback(() => {
    const action = removeTodoListActionCreator(todoListId);
    dispatch(action);

    setOpenDeletingTodolistModal(false);
  }, [todoListId, dispatch]);

  let taskForTodolist = tasks

  if (currentFilter === FilterEnum.ACTIVE) {
    taskForTodolist = taskForTodolist.filter(
        (task) => !task.isDone
    );
  }
  if (currentFilter === FilterEnum.COMPLETED) {
    taskForTodolist = taskForTodolist.filter(
        (task) => task.isDone
    );
  }

  return (
    <div
      className="p-[20px] relative"
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}
    >
      <div className="flex gap-[10px]">
        <EditableTaskTitle title={title} onEdit={onEditTitle} />
        <DeleteTodolist show={show} onDelete={onOpenDeletingTodolistModal} />
        <ConfirmDeleteModal
          open={openDeletingTodolistModal}
          setOpen={setOpenDeletingTodolistModal}
          content={`Are you sure you want to delete the task list "${title}"?`}
          title="Delete todo list"
          onConfirm={onDeleteTodolist}
        />
      </div>
      <AddItemForm onSubmit={addTask} placeholder="Add task" />
      <Tasks
        tasks={taskForTodolist}
        open={openDeletingTaskModal}
        setOpen={setOpenDeletingTaskModal}
        onEdit={onEditTask}
        onChangeIsDone={onChangeIsDone}
        onConfirm={onDeleteTask}
      />
      <Filters
        currentFilter={currentFilter}
        onChange={changeFilterHandler}
      />
    </div>
  );
});

export default Todolist;
