import React, { FC } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import { TypesColors } from "./types";

const AVATAR_SIZE = 100;

interface Props {
  isLink?: boolean;
  isShownParams?: boolean;
  className?: string;
  avatarClassName?: string;
  titleClassName?: string;
  typesClassName?: string;
}

//CHANGE  - чи все типізловано чи норм імпорти, чи скрізь видалено моки

export const PokemonCard: FC<Props> = ({
  isLink,
  isShownParams,
  className,
  avatarClassName,
  titleClassName,
  typesClassName,
}) => {
  const Component = (
    <div
      className={cn(
        "flex flex-col items-center py-4 px-2 text-center shadow-card-edges",
        className
      )}
    >
      <span className="self-start">
        ID:<span className="ml-1 font-bold">#12</span>
      </span>
      <img
        className={avatarClassName}
        width={AVATAR_SIZE}
        height={AVATAR_SIZE}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Math.round(
          Math.random() * 1279
        )}.png`}
        alt="pok name"
      />
      <div className="w-full capitalize">
        <h4
          className={cn(
            "my-2 text-gray-hard text-xl font-bold",
            titleClassName
          )}
        >
          name
        </h4>
        <ul className={typesClassName}>
          <li className={cn("mt-0.5 rounded text-white", TypesColors.normal)}>
            type
          </li>
        </ul>

        {isShownParams && (
          <div className="mt-2">
            <p>
              <span>height:</span>123<span></span>
            </p>
            <p>
              <span>height:</span>123<span></span>
            </p>
            <p>
              <span>height:</span>123<span></span>
            </p>
          </div>
        )}
      </div>
    </div>
  );

  if (isLink) return <Link to="12">{Component}</Link>;

  return Component;
};
