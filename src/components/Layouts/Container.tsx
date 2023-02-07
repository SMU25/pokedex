import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Container: FC<Props> = ({ children }) => {
  return <div className="max-w-7xl mx-auto px-5">{children}</div>;
};
