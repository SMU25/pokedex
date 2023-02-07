import React, { FC } from "react";
import cn from "classnames";

interface Props {
  name: string;
}

export const CategoryItem: FC<Props> = ({ name }) => (
  <li
    className={cn(
      "bg-blue-light mr-2.5 mb-2.5 py-2 px-4 text-center font-medium border rounded-xl transition-all active:translate-y-0.5",
      {
        "!bg-blue-primary text-white": false,
      }
    )}
  >
    <button>{name}</button>
  </li>
);
