import React, { FC } from "react";
import { PropsTypes } from "@/types/todo-list.type";

export const Todolist: FC<PropsTypes> = ({ title, tasks }) => {
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
            </li>
          );
        })}
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
};
