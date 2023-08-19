import React, { FC } from "react";
import { Button } from "@mui/material";
import { FiltersProps } from "./filters.type";
import {
  getActiveFilterClassName,
  getFilterWrapperClassName,
} from "./filters.style";

const Filters: FC<FiltersProps> = ({ filters, currentFilter, onChange }) => {
  return (
    <div className={getFilterWrapperClassName()}>
      {filters.map(({ title }) => {
        return (
          <Button
            variant={
              currentFilter === title.toLowerCase() ? "contained" : "text"
            }
            color={
              title === "Completed"
                ? "success"
                : title === "Active"
                ? "secondary"
                : "primary"
            }
            key={title}
            className={getActiveFilterClassName(
              currentFilter === title.toLowerCase()
            )}
            onClick={() => onChange(title.toLowerCase())}
          >
            {title}
          </Button>
        );
      })}
    </div>
  );
};

export default Filters;
