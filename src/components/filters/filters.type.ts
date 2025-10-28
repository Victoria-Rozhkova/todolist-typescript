import { FilterEnum } from "@/types/todolist/todolist.type";

export type FiltersProps = {
  currentFilter: string;
  onChange: (filter: FilterEnum) => void;
};
