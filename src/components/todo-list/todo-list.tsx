import React, { FC } from "react";
import { PropsTypes } from "@/types/todo-list.type";

export const Todolist: FC<PropsTypes> = ({
  title,
  tasks,
  removeTask,
  changeFilter,
}) => {
  return (
    <div className="Todolist">
      <div>{title}</div>
      <div>
        <input />
        <button>+</button>
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
