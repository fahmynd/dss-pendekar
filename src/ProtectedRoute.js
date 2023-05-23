import React from "react";
import { Route, Navigate } from "react-router-dom";
import _ from "lodash";

function requireAuth(userNameKey) {
  return JSON.parse(localStorage.getItem(userNameKey)).isUserLoggedIn;
}

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (
          _.get(props.location, "userName") &&
          requireAuth(props.location.userName)
        ) {
          return <Component {...props} />;
        } else {
          return (
            <Navigate
              to={{
                pathname: "/",
              }}
            />
          );
        }
      }}
    />
  );
};
