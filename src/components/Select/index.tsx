import React, { FC } from "react";
import ReactSelect from "react-select";
import { VoidFuncWithValue } from "src/types";

interface Option {
  value: string | number;
  label: string;
}

interface Props {
  className?: string;
  options: Option[];
  onSelectOption: VoidFuncWithValue;
}

export const Select: FC<Props> = ({ className, options, onSelectOption }) => {
  const onChange = ({ value }: Option) => onSelectOption(value);

  return (
    <ReactSelect className={className} options={options} onChange={onChange} />
  );
};
