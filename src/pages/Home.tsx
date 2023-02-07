import React, { FC, useEffect, useCallback } from "react";
import { getTypesAsync, setType, setLimit } from "src/redux/filters/actions";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { Category } from "src/components/Category";
import { Select } from "src/components/Select";
import { Pokemons } from "src/components/Pokemons";
import { Pagination } from "src/components/Pagination";
import { selectType, selectTypes } from "src/redux/filters/selectors";

const LIMIT_OPTIONS = [
  { value: 10, label: "10" },
  { value: 20, label: "20" },
  { value: 50, label: "50" },
];

const Home: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTypesAsync());
  }, [dispatch]);

  const activeType = useAppSelector(selectType);
  const types = useAppSelector(selectTypes);

  const setActiveType = useCallback(
    (type: string) => {
      dispatch(setType(type));
    },
    [dispatch]
  );

  const onSelectOption = useCallback(
    (limit: number) => {
      dispatch(setLimit(limit));
    },
    [dispatch]
  );

  return (
    <div>
      <div className="flex justify-between items-baseline">
        <Category
          activeCategory={activeType}
          setCategory={setActiveType}
          categories={types}
        />
        <Select
          className="max-w-40 w-full ml-16"
          options={LIMIT_OPTIONS}
          onSelectOption={onSelectOption}
        />
      </div>
      <Pokemons isCardLink />
      <Pagination itemsCount={1279} limit={10} />
    </div>
  );
};

export default Home;
