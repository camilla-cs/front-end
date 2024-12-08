// import React from "react";
// import { Navigate } from "react-router-dom";

// function ProtectedRoute({ children, adminOnly }) {
//     const token = localStorage.getItem("token");

//     if (!token) {
//         console.log("No token found. Redirecting to login...");
//         return <Navigate to="/login" />;
//     }

//     try {
//         const user = JSON.parse(atob(token.split(".")[1])); // Decode JWT payload
//         console.log("Decoded User:", user);

//         if (adminOnly && !user.isAdmin) {
//             console.log("User is not admin. Redirecting to User Dashboard...");
//             return <Navigate to="/userDashboard" />;
//         }

//         return children;
//     } catch (error) {
//         console.error("Invalid token or decoding failed:", error);
//         return <Navigate to="/login" />;
//     }
// }

// export default ProtectedRoute;

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