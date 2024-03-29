import { ChangeEvent, KeyboardEvent } from "react";

export type AddItemFormProps = {
  placeholder?: string;
  error?: string;
  value?: string;
  onSubmit: (value: string) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
};
