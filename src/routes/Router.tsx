import React, { FC } from "react";
import { useRoutes } from "react-router-dom";
import { Home, Pokemon, NotFound } from "src/pages";
import { PATHNAMES } from "src/constants/routes";

const ROUTES = [
  {
    element: <Home />,
    path: PATHNAMES.HOME,
  },
  {
    element: <Pokemon />,
    path: PATHNAMES.POKEMON,
  },
  {
    element: <NotFound />,
    path: PATHNAMES.NOT_FOUND,
  },
];

const AppRoutes: FC = () => useRoutes(ROUTES);

export default AppRoutes;
