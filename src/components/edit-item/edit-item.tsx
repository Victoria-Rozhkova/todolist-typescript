import React, { FC, KeyboardEvent, useState } from "react";
import { TextField } from "@mui/material";
import { EditItemProps } from "./edit-item.type";
import { getTitleClassName } from "./edit-item.style";

const EditItem: FC<EditItemProps> = ({ title, onEdit }) => {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState(title || "");

  const onEditHandler = () => {
    setEditMode(false);
    onEdit(value);
  };

  const activateEditMode = () => {
    setEditMode(true);
    setValue(title);
  };

  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      onEditHandler();
    }
  };

  return (
    <div className={getTitleClassName()}>
      {!editMode ? (
        <span onDoubleClick={activateEditMode}>{title}</span>
      ) : (
        <TextField
          variant="standard"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoFocus
          onKeyDown={onKeyDownHandler}
          onBlur={onEditHandler}
        />
      )}
    </div>
  );
};

export default EditItem;
