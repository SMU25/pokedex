import React, { FC } from "react";
import { Category } from "src/components/Category";
import { Select } from "src/components/Select";
import { Pokemons } from "src/components/Pokemons";
import { Pagination } from "src/components/Pagination";

const options = [
  { value: 10, label: "10" },
  { value: 20, label: "20" },
  { value: 50, label: "50" },
];

const Home: FC = () => {
  return (
    <div>
      <div className="flex justify-between items-baseline">
        <Category />
        <Select className="max-w-40 w-full ml-16" options={options} />
      </div>
      <Pokemons isCardLink />
      <Pagination itemsCount={1279} limit={10} />
    </div>
  );
};

export default Home;
