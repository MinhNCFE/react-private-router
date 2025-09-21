import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRouter() {
  const isAuth = localStorage.getItem("isAuth") === "true";

  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
}

export default PrivateRouter;
