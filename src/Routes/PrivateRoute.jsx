import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ children, path, exact = false, redirectPath = "/login", push = false }) => {
  const { isAuth } = useSelector((state) => state.auth);

  return isAuth ? (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  ) : (
    <Redirect to={redirectPath} push={push} />
  );
};
