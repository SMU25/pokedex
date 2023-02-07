import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Search } from "src/components/Search";
import logo from "src/assets/images/logo.png";
import { PATHNAMES } from "src/constants/routes";

const LOGO_IMG = {
  SIZE: 40,
  ALT_TEXT: "Logo image",
};

const HEADING = "Pokedex";

export const Header: FC = () => (
  <div className="mb-5 pt-2 pb-3 px-3 shadow-light-bottom-fog">
    <Link to={PATHNAMES.HOME}>
      <div className="flex">
        <img
          width={LOGO_IMG.SIZE}
          height={LOGO_IMG.SIZE}
          src={logo}
          alt={LOGO_IMG.ALT_TEXT}
        />
        <h1 className="ml-1 text-blue-primary text-4xl leading-9 font-bold">
          {HEADING}
        </h1>
      </div>
    </Link>
    <Search className="mt-4" />
  </div>
);
