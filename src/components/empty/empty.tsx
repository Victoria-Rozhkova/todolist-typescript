import React, { FC } from "react";

const Empty: FC<{ title: string }> = ({ title }) => {
  return <div className="text-center text-gray-400">{title}</div>;
};

export default Empty;
