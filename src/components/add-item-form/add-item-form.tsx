import React, {
  ChangeEvent,
  FC,
  KeyboardEvent,
  useEffect,
  useState,
} from "react";
import {Icon} from "@/components/ui";
import {
  getInputErrorClassName,
  getTextErrorClassName,
} from "./add-item-form.style";
import { AddItemFormProps } from "./add-item-form.type";

const AddItemForm: FC<AddItemFormProps> = (props) => {
  const { error, onKeyDown, onSubmit, placeholder='' } = props;

  const [value, setValue] = useState<string>("");
  const [errorItem, setErrorItem] = useState<string>("");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setErrorItem("");
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
      <div className="flex">
        <input
          className={getInputErrorClassName(errorItem)}
          value={value}
          placeholder={placeholder}
          onChange={onChangeHandler}
          onKeyDown={onKeyDownHandler}
        />
        <button onClick={addTaskHandler}>
          <Icon name="Plus" />
        </button>
      </div>
      {errorItem && (
        <p className={getTextErrorClassName(errorItem)}>{errorItem}</p>
      )}
    </div>
  );
};

export default AddItemForm;
