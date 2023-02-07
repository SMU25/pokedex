import React, { FC } from "react";
import { PokemonCard } from "./PokemonCard";

interface Props {
  isCardLink?: boolean;
}

export const Pokemons: FC<Props> = ({ isCardLink }) => {
  return (
    <div className="grid grid-cols-6 gap-y-8 gap-x-4 mt-14 pb-20">
      <PokemonCard isLink={isCardLink} />
      <PokemonCard isLink={isCardLink} />
      <PokemonCard isLink={isCardLink} />
      <PokemonCard isLink={isCardLink} />
      <PokemonCard isLink={isCardLink} />
      <PokemonCard isLink={isCardLink} />
      <PokemonCard isLink={isCardLink} />
      <PokemonCard isLink={isCardLink} />
      <PokemonCard isLink={isCardLink} />
      <PokemonCard isLink={isCardLink} />
      <PokemonCard isLink={isCardLink} />
      <PokemonCard isLink={isCardLink} />
    </div>
  );
};
