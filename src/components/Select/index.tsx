import React, { FC } from "react";
import ReactSelect from "react-select";

interface Option {
  value: string | number;
  label: string;
}

interface Props {
  className?: string;
  options: Option[];
}

export const Select: FC<Props> = ({ className, options }) => {
  return <ReactSelect className={className} options={options} />;
};
