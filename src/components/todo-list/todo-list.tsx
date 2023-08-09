import React, { FC, useState } from "react";

import { TodolistProps } from "@/components/todo-list/todo-list.type";
import Icon from "@/components/ui/icon";
import {
  getActiveFilterClassName,
  getFilterWrapperClassName,
  getListClassName,
  getListItemClassName,
  getListWrapperClassName,
  getTitleClassName,
} from "./todo-list.style";
import AddItemForm from "../add-item-form";

export const Todolist: FC<TodolistProps> = ({
  todoListId,
  title,
  tasks,
  addTask,
  removeTask,
  changeFilter,
  changeStatus,
  currentFilter,
  removeTodoList,
}) => {
  const [show, setShow] = useState(false);
  const onChangeCheckboxHandler = (taskId: string, isDone: boolean) => {
    changeStatus(taskId, isDone, todoListId);
  };

  const addTaskHandler = (value: string) => {
    addTask(value, todoListId);
  };

  return (
    <div
      className="Todolist"
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}
    >
      <div className="flex gap-[10px]">
        <div className={getTitleClassName()}>{title}</div>
        {show && (
          <div onClick={() => removeTodoList(todoListId)}>
            <Icon name="Delete" />
          </div>
        )}
      </div>
      <AddItemForm onSubmit={addTaskHandler} />
      <ul className={getListWrapperClassName()}>
        {tasks.map(({ id, isDone, task }) => {
          return (
            <li key={id} className={getListClassName(isDone)}>
              <input
                type="checkbox"
                checked={isDone}
                onChange={(e) =>
                  onChangeCheckboxHandler(id, e.currentTarget.checked)
                }
              />
              <div className={getListItemClassName()}>
                <span>{task}</span>
                <button
                  className="opacity-[1]"
                  onClick={() => removeTask(id, todoListId)}
                >
                  <Icon name="Delete" />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <div className={getFilterWrapperClassName()}>
        <button
          className={getActiveFilterClassName(currentFilter === "all")}
          onClick={() => changeFilter("all", todoListId)}
        >
          All
        </button>
        <button
          className={getActiveFilterClassName(currentFilter === "active")}
          onClick={() => changeFilter("active", todoListId)}
        >
          Active
        </button>
        <button
          className={getActiveFilterClassName(currentFilter === "completed")}
          onClick={() => changeFilter("completed", todoListId)}
        >
          Completed
        </button>
      </div>
    </div>
  );
};
