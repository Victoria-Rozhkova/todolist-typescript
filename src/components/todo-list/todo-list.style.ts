import clsx from "clsx";

export const getTitleClassName = () => {
  return "text-center text-2xl my-[10px]";
};

export const getListWrapperClassName = () => {
  return "my-[10px] flex flex-col gap-[6px]";
};

export const getListClassName = (isDone: boolean) => {
  return clsx("flex gap-[15px] w-full", isDone && "opacity-[0.5]");
};

export const getListItemClassName = () => {
  return "flex justify-between w-full";
};

export const getFilterWrapperClassName = () => {
  return "flex justify-between mt-[10px]";
};





export const getActiveFilterClassName = (isActive: boolean) => {
  return clsx(isActive && "bg-[#228B22]");
};
