import clsx from "clsx";

export const getTitleClassName = () => {
  return "text-center text-2xl my-[10px]";
};

export const getListWrapperClassName = () => {
  return "my-[10px] flex flex-col gap-[6px]";
};

export const getListClassName = (isDone: boolean) => {
  return clsx(
    "flex gap-[15px] w-full blink ",
    isDone && "line-through opacity-[0.5]"
  );
};

export const getListItemClassName = () => {
  return "flex justify-between w-full";
};
