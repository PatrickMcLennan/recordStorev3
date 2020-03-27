import React, { FC } from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Switch, useLocation } from "react-router-dom";
import MountTransition from "./MountTransition";

interface IRoutesProps {
  exitBeforeEnter?: boolean;
  initial?: boolean;
}

interface IProps {
  children: any;
  exact: boolean;
  path: string;
  slide?: number;
  slideUp?: number;
}

export const RouteTransition: FC<IProps> = ({
  children,
  exact = false,
  path,
  slide = 0,
  slideUp = 0,
  ...rest
}) => (
  <Route exact={exact}>
    <MountTransition slide={slide} slideUp={slideUp}>
      {children}
    </MountTransition>
  </Route>
);

export const AnimatedRoutes: FC<IRoutesProps> = ({
  children,
  exitBeforeEnter = true,
  initial = false
}: IRoutesProps) => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter={exitBeforeEnter} initial={initial}>
      <Switch location={location} key={location.pathname}>
        {children}
      </Switch>
    </AnimatePresence>
  );
};
