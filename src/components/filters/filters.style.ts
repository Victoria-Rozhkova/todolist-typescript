import clsx from "clsx";

export const getFilterWrapperClassName = () => {
  return "flex gap-[4px] justify-between mt-[10px]";
};

export const getActiveFilterClassName = (isActive: boolean) => {
  return clsx(
    "pt-[3px] px-[9px] rounded-md  hover:bg-[#66cdaa]",
    isActive && "bg-[#66cdaa] hover:shadow", !isActive&&'hover:opacity-[0.5]'
  );
};