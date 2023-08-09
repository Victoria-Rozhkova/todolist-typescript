import clsx from "clsx";

export const getInputErrorClassName = (error: string) => {
  return clsx("w-full p-[5px] rounded-lg", error && "border border-[#DC143C]");
};

export const getTextErrorClassName = (error: string) => {
  return clsx(error && "text-[#DC143C]");
};
