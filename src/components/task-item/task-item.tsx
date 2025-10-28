import React, { FC } from "react";
import clsx from "clsx";
import { purple, green } from "@mui/material/colors";
import { Checkbox, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import EditableTaskTitle from "../edit-item";
import { getListClassName, getListItemClassName } from "./task-item.style";
import { TaskItemProps } from "./task-item.type";

const TaskItem: FC<TaskItemProps> = React.memo((props) => {
  const { task, onChangeIsDone, onEdit, onDelete } = props;

  return (
    <li className={getListClassName()}>
      <Checkbox
        checked={task.isDone}
        onChange={(e) => onChangeIsDone(e.currentTarget.checked)}
        sx={{
          color: purple[800],
          "&.Mui-checked": {
            color: green[600],
          },
        }}
      />
      <div className={getListItemClassName()}>
        <div className={clsx(task.isDone && "line-through opacity-[0.5]")}>
          <EditableTaskTitle title={task.task} onEdit={(value) => onEdit(value)} />
        </div>

        <IconButton
          title="Remove task"
          aria-label="delete"
          size="small"
          onClick={() => onDelete(task)}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </li>
  );
});

export default TaskItem;
