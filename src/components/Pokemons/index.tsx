import React from "react";
import { PokemonCard } from "./PokemonCard";

export const Pokemons = () => {
  return (
    <div className="grid grid-cols-6 gap-y-8 gap-x-4 mt-14 pb-20">
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
    </div>
  );
};
