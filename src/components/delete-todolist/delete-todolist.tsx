import React, { FC } from "react";
import { IconButton } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { DeleteTodolistProps } from "./delete-todolist.type";

const DeleteTodolist: FC<DeleteTodolistProps> = ({ show, onDelete }) => {
  return show ? (
    <div
      className="absolute top-[6px] right-[6px]"
      title="Remove todo list"
      onClick={onDelete}
    >
      <IconButton aria-label="delete" color="error">
        <HighlightOffIcon />
      </IconButton>
    </div>
  ) : null;
};

export default DeleteTodolist;
