import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "./UserContext";

const ProtectedRoute = ({ componentName }) => {
  const { userInfo } = useContext(UserContext);
  const Component = componentName;

  return userInfo.isAuthenticated ? (
    <Component />
  ) : (
    <Redirect to="/" />
  );
};

export default ProtectedRoute;