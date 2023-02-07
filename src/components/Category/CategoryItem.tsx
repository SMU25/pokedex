import React from "react";
import cn from "classnames";

export const CategoryItem = () => {
  return (
    <li
      className={cn(
        "bg-blue-light mr-2.5 mb-2.5 py-2 px-4 font-medium border rounded-xl transition-all",
        {
          "!bg-blue-primary text-white": false,
        }
      )}
    >
      <button>
        {Math.round(Math.random() * 10000) +
          Math.round(Math.random() * 1000) +
          Math.random()}
      </button>
    </li>
  );
};
