import React, { FC } from "react";
import { Button } from "@mui/material";
import { FiltersProps } from "./filters.type";
import { FilterTitleEnum, FilterEnum } from "@/types/todolist/todolist.type";
import {
  getActiveFilterClassName,
  getFilterWrapperClassName,
} from "./filters.style";

const Filters: FC<FiltersProps> = ({ currentFilter, onChange }) => {
  const filters = [
    { title: FilterTitleEnum.ALL },
    { title: FilterTitleEnum.ACTIVE },
    { title: FilterTitleEnum.COMPLETED},
  ];

  return (
    <div className={getFilterWrapperClassName()}>
      {filters.map(({ title }) => {
        return (
          <Button
            variant={
              currentFilter === title.toLowerCase() ? "contained" : "text"
            }
            color={
              title === FilterTitleEnum.COMPLETED
                ? "success"
                : title === FilterTitleEnum.ACTIVE
                ? "secondary"
                : "primary"
            }
            key={title}
            className={getActiveFilterClassName(
              currentFilter === title.toLowerCase()
            )}
            onClick={() => onChange(title.toLowerCase() as FilterEnum)}
          >
            {title}
          </Button>
        );
      })}
    </div>
  );
};

export default Filters;
