import React, { FC, KeyboardEvent, useState } from "react";
import { EditItemProps } from "./edit-item.type";

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

  return !editMode ? (
    <span onDoubleClick={activateEditMode}>{title}</span>
  ) : (
    <input className="w-full p-[5px] rounded"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      autoFocus
      onKeyDown={onKeyDownHandler}
      onBlur={onEditHandler}
    />
  );
};

export default EditItem;
