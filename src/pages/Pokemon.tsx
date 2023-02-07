import React, { FC } from "react";
import { PokemonCard } from "src/components/Pokemons/PokemonCard";

interface Props {}

const Pokemon: FC<Props> = () => {
  return (
    <div className="flex justify-center w-full">
      <PokemonCard
        className="w-1/2"
        avatarClassName="w-60 h-60"
        titleClassName="text-2xl"
        typesClassName="w-40 mx-auto text-lg"
        isShownParams
      />
    </div>
  );
};

export default Pokemon;
