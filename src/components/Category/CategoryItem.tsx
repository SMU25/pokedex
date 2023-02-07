import React, { FC } from "react";
import cn from "classnames";
import { VoidFuncWithValue } from "src/types";

interface Props {
  name: string;
  isActive: boolean;
  setCategory: VoidFuncWithValue;
}

export const CategoryItem: FC<Props> = ({ name, isActive, setCategory }) => {
  const setActiveCategory = () => setCategory(name);

  return (
    <li
      className={cn(
        "bg-blue-light mr-2.5 mb-2.5 py-2 px-4  text-center  border rounded-lg cursor-pointer transition-all active:translate-y-0.5",
        {
          "!bg-blue-primary text-white": isActive,
        }
      )}
    >
      <button className="capitalize font-medium" onClick={setActiveCategory}>
        {name}
      </button>
    </li>
  );
};
