import React, { FC } from "react";
import {
  Redirect,
  Route,
  RouteComponentProps,
  RouteChildrenProps
} from "react-router-dom";

import { useIsLoggedIn } from "Hook/useIsLoggedIn";

interface IProps extends RouteComponentProps {}

export const ProtectedRoute: FC<{
  component: FC<IProps>;
  rest: RouteComponentProps;
}> = ({ component: Component, rest }) => {
  const isLoggedIn: boolean = useIsLoggedIn();

  return isLoggedIn ? (
    <Route
      {...rest}
      render={(props: RouteChildrenProps) => <Component {...props} />}
    />
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { referrer: rest.location }
      }}
    />
  );
};

export default ProtectedRoute;
