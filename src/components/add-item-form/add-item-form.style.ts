import clsx from "clsx";

export const getInputErrorClassName = (error: string) => {
  return clsx("w-full", error && "border border-[#DC143C]");
};

export const getTextErrorClassName = (error: string) => {
  return clsx(error && "text-[#DC143C]");
};
