import React, { FC } from "react";
import { FiltersProps } from "./filters.type";
import {
  getActiveFilterClassName,
  getFilterWrapperClassName,
} from "./filters.style";

const Filters: FC<FiltersProps> = ({ filters, currentFilter, onChange }) => {
  return (
    <div className={getFilterWrapperClassName()}>
      {filters.map(({title}) => {
        return (
          <button key={title}
            className={getActiveFilterClassName(
              currentFilter === title.toLowerCase()
            )}
            onClick={() => onChange(title.toLowerCase())}
          >
            {title}
          </button>
        );
      })}
    </div>
  );
};

export default Filters;
