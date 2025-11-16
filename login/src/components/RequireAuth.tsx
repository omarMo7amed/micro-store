import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/auth";

export default function RequireAuth({ children }) {
  const isLoggedIn = useAuth();
  const pathname = useLocation();

  if (!isLoggedIn) return <Navigate to="/login" replace />;
  if (isLoggedIn && pathname.pathname === "/login")
    return <Navigate to="/" replace />;

  return children;
}
