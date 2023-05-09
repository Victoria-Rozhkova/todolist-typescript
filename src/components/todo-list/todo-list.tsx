import React, { ChangeEvent, FC, KeyboardEvent, useState } from "react";

import { PropsTypes } from "@/types/todo-list.type";
import Icon from "@/components/ui/icon";
import {
  getActiveFilterClassName,
  getFilterWrapperClassName,
  getInputErrorClassName,
  getListClassName,
  getListItemClassName,
  getListWrapperClassName,
  getTextErrorClassName,
  getTitleClassName,
} from "./todo-list.style";

export const Todolist: FC<PropsTypes> = ({
  title,
  tasks,
  addTask,
  removeTask,
  changeFilter,
  changeStatus,
  currentFilter,
}) => {
  const [newTaskText, setNewTaskText] = useState<string>("");
  const [error, setError] = useState<string>("");

  const addTaskHandler = () => {
    if (newTaskText.trim() === "") {
      setError("Field is required");
      return;
    }
    addTask(newTaskText.trim());
    setNewTaskText("");
  };
  const onChangeCheckboxHandler = (taskId: string, isDone: boolean) => {
    changeStatus(taskId, isDone);
  };

  const onChangeTaskHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskText(e.target.value);
    setError("");
  };

  const onKeyDownTaskHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      addTaskHandler();
    }
  };

  return (
    <div className="Todolist">
      <div className={getTitleClassName()}>{title}</div>
      <div className="flex">
        <input
          className={getInputErrorClassName(error)}
          value={newTaskText}
          onChange={onChangeTaskHandler}
          onKeyDown={onKeyDownTaskHandler}
        />
        <button onClick={addTaskHandler}>
          <Icon name="Plus" />
        </button>
      </div>
      {error && <p className={getTextErrorClassName(error)}>{error}</p>}
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
                <button className="opacity-[1]" onClick={() => removeTask(id)}>
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
          onClick={() => changeFilter("all")}
        >
          All
        </button>
        <button
          className={getActiveFilterClassName(currentFilter === "active")}
          onClick={() => changeFilter("active")}
        >
          Active
        </button>
        <button
          className={getActiveFilterClassName(currentFilter === "completed")}
          onClick={() => changeFilter("completed")}
        >
          Completed
        </button>
      </div>
    </div>
  );
};
