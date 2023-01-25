import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Context } from "./Context";

function RequireAuth({ children }) {
  const context = useContext(Context);
  let auth = context.user.isAuthenticate;
  let location = useLocation();

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
