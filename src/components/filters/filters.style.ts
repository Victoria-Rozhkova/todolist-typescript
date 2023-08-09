import clsx from "clsx";

export const getFilterWrapperClassName = () => {
  return "flex justify-between mt-[10px]";
};

export const getActiveFilterClassName = (isActive: boolean) => {
  return clsx(isActive && "bg-[#228B22]");
};