import React, { FC } from "react";
import { NamedAPIResource } from "pokenode-ts";
import { VoidFuncWithValue } from "src/types";
import { CategoryItem } from "./CategoryItem";

interface Props {
  activeCategory: string;
  setCategory: VoidFuncWithValue;
  categories: NamedAPIResource[];
}

export const Category: FC<Props> = ({
  activeCategory,
  setCategory,
  categories,
}) => {
  if (!categories?.length) return null;

  return (
    <ul className="flex items-center flex-wrap">
      {categories.map(({ url, name }) => (
        <CategoryItem
          key={url}
          name={name}
          isActive={name === activeCategory}
          setCategory={setCategory}
        />
      ))}
    </ul>
  );
};
