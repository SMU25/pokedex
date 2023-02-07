import React, { FC } from "react";
import { CategoryItem } from "./CategoryItem";

const MOCK = [
  { name: "213" },
  { name: "sadas" },
  { name: "213213123213" },
  { name: "sadas" },
  { name: "21213" },
  { name: "sad" },
  { name: "gdsfasdasd" },
  { name: "21gsffsfs3" },
  { name: "sda" },
  { name: "1" },
  { name: "sadasd" },
  { name: "2sadasdsad13sadsadasdas" },
  { name: "21sadsad3" },
  { name: "21sad3" },
  { name: "21sad3" },
  { name: "2ads13" },
  { name: "2213" },
];

interface Props {}

export const Category: FC<Props> = () => (
  <ul className="flex items-center flex-wrap">
    {MOCK.map(({ name }) => (
      <CategoryItem key={name} name={name} />
    ))}
  </ul>
);
