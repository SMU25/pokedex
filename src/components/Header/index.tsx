import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Search } from "src/components/Search";
import { PATHNAMES } from "src/constants/routes";

const HEADING = "Pokedex";

export const Header: FC = () => (
  <div className="mb-5 pb-3 px-3 shadow-light-bottom-fog">
    <Link to={PATHNAMES.HOME}>
      <h1 className="text-blue-primary text-4xl font-bold">{HEADING}</h1>
    </Link>
    <Search className="mt-4" />
  </div>
);
