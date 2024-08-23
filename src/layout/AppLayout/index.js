import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Layout = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Layout;
