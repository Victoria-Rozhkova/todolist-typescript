import React, { ChangeEvent, FC, KeyboardEvent, useState } from "react";
import { PropsTypes } from "@/types/todo-list.type";

export const Todolist: FC<PropsTypes> = ({
  title,
  tasks,
  addTask,
  removeTask,
  changeFilter,
}) => {
  const [value, setValue] = useState<string>("");

  const addTaskHandler = () => {
    addTask(value);
    setValue("");
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
      <div>{title}</div>
      <div>
        <input
          value={value}
          onChange={onChangeHandler}
          onKeyDown={onKeyDownHandler}
        />
        <button onClick={addTaskHandler}>+</button>
      </div>
      <ul>
        {tasks.map(({ id, isDone, task }) => {
          return (
            <li key={id}>
              <input type="checkbox" checked={isDone} />
              <span>{task}</span>
              <button onClick={() => removeTask(id)}>X</button>
            </li>
          );
        })}
      </ul>
      <div>
        <button onClick={() => changeFilter("all")}>All</button>
        <button onClick={() => changeFilter("active")}>Active</button>
        <button onClick={() => changeFilter("completed")}>Completed</button>
      </div>
    </div>
  );
};
