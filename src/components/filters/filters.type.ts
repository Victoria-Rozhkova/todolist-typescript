import { FilterTitleEnum, FilterEnum } from "@/types/todolist/todolist.type";

export type FiltersProps = {
  filters: { title: FilterTitleEnum }[];
  currentFilter: string;
  onChange: (filter: FilterEnum) => void;
};
