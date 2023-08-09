import React, { FC, useState } from "react";

import { Icon } from "@/components/ui";
import { AddItemForm, EditItem, Filters } from "@/components";
import {
  getListClassName,
  getListItemClassName,
  getListWrapperClassName,
  getTitleClassName,
} from "./todo-list.style";
import { FilterValues, TodolistProps } from "./todo-list.type";

const Todolist: FC<TodolistProps> = ({
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
}) => {
  const [show, setShow] = useState(false);
  const onChangeCheckboxHandler = (taskId: string, isDone: boolean) => {
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

  const filters = [
    { title: "All" },
    { title: "Active" },
    { title: "Completed" },
  ];

  return (
    <div
      className="h-full border rounded-lg p-[20px] bg-gray-300 relative"
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}
    >
      <div className="flex gap-[10px]">
        <div className={getTitleClassName()}>
          <EditItem title={title} onEdit={onEditHeadingHandler} />
        </div>
        {show && (
          <div
            className="absolute top-[6px] right-[6px]"
            onClick={() => removeTodoList(todoListId)}
          >
            <Icon name="Delete" />
          </div>
        )}
      </div>
      <AddItemForm onSubmit={addTaskHandler} placeholder="Add task" />
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
                <EditItem
                  title={task}
                  onEdit={(value) => onEditTaskHeandler(value, id)}
                />
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
      <Filters
        currentFilter={currentFilter}
        filters={filters}
        onChange={changeFilterHandler}
      />
    </div>
  );
};

export default Todolist;
