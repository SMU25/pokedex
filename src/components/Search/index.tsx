import React, { FC, useState } from "react";
import cn from "classnames";
import { ReactComponent as IconSearch } from "src/assets/search.svg";

const PLACEHOLDER_TEXT = "Search pokemons...";

interface Props {
  // searchValue: string;
  className?: string;
}

export const Search: FC<Props> = ({ className }) => {
  const [searchValue, setSearchValue] = useState("");
  const onChangeSearchValue = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => setSearchValue(target.value);

  return (
    <div
      className={cn(
        "flex items-center justify-between w-full border rounded pr-2",
        className
      )}
    >
      <div className="w-full p-2">
        <input
          type="search"
          className="w-full leading-6 outline-0"
          placeholder={PLACEHOLDER_TEXT}
          value={searchValue}
          onChange={onChangeSearchValue}
        />
      </div>
      <button className="h-full rounded-r">
        <IconSearch />
      </button>
    </div>
  );
};
