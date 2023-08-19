import clsx from "clsx";

export const getListClassName = () => {
  return clsx(
    "flex gap-[15px] w-full blink ",
  );
};

export const getListItemClassName = () => {
  return "flex justify-between w-full cursor-pointer";
};
