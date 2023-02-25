import React, { ChangeEvent, FC, KeyboardEvent, useState } from "react";

import { PropsTypes } from "@/types/todo-list.type";
import Icon from "@/components/ui/icon";
import {
  getFilterWrapperClassName,
  getListClassName,
  getListItemClassName,
  getListWrapperClassName,
  getTitleClassName,
} from "./todo-list.style";

export const Todolist: FC<PropsTypes> = ({
  title,
  tasks,
  addTask,
  removeTask,
  changeFilter,
}) => {
  const [value, setValue] = useState<string>("");

  const addTaskHandler = () => {
    if (value) {
      addTask(value);
      setValue("");
    }
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      addTaskHandler();
    }
  };

  return (
    <div className="Todolist">
      <div className={getTitleClassName()}>{title}</div>
      <div className="flex">
        <input
          value={value}
          onChange={onChangeHandler}
          onKeyDown={onKeyDownHandler}
        />
        <button onClick={addTaskHandler}>
          <Icon name="Plus" />
        </button>
      </div>
      <ul className={getListWrapperClassName()}>
        {tasks.map(({ id, isDone, task }) => {
          return (
            <li key={id} className={getListClassName()}>
              <input type="checkbox" checked={isDone} />
              <div className={getListItemClassName()}>
                <span>{task}</span>
                <button onClick={() => removeTask(id)}>
                  <Icon name="Delete" />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <div className={getFilterWrapperClassName()}>
        <button onClick={() => changeFilter("all")}>All</button>
        <button onClick={() => changeFilter("active")}>Active</button>
        <button onClick={() => changeFilter("completed")}>Completed</button>
      </div>
    </div>
  );
};
