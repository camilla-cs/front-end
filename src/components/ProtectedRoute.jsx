import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, adminOnly }) {
  const token = localStorage.getItem("token");

  const user = token ? JSON.parse(atob(token.split(".")[1])) : null;

  if (!user) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" />;
  }

  if (adminOnly && !user.isAdmin) {
    // Redirect non-admin users trying to access admin-only routes
    return <Navigate to="/userdashboard" />;
  }

  return children; 
}

export default ProtectedRoute;