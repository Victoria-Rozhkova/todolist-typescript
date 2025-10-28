import React, {
  ChangeEvent,
  FC,
  KeyboardEvent,
  useEffect,
  useState,
} from "react";
import { Button, TextField } from "@mui/material";
import { Add } from "@mui/icons-material";

import { AddItemFormProps } from "./add-item-form.type";

const AddItemForm: FC<AddItemFormProps> = React.memo((props) => {
  const { error, onKeyDown, onSubmit, placeholder = "" } = props;

  const [value, setValue] = useState<string>("");
  const [errorItem, setErrorItem] = useState<string>("");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (errorItem) {
      setErrorItem("");
    }
  };

  const addTaskHandler = () => {
    if (value.trim() === "") {
      setErrorItem("Field is required");
      return;
    }
    onSubmit(value.trim());
    setValue("");
  };

  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      addTaskHandler();
    }
    onKeyDown?.(e);
  };

  useEffect(() => {
    error && setErrorItem(error);
  }, [error]);

  return (
    <div>
      <TextField
        value={value}
        label={placeholder}
        error={!!errorItem}
        helperText={errorItem}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
      />
      <Button
        onClick={addTaskHandler}
        className="!mt-[10px] !ml-[10px]"
        variant="contained"
      >
        <Add />
      </Button>
    </div>
  );
});

export default AddItemForm;
