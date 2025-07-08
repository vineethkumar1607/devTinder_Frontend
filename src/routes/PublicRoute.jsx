// routes/PublicRoute.jsx
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Spinner from "../components/Spinner";

const PublicRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useSelector((state) => state.user);

  // Wait for user data to load before checking auth
  if (isLoading) return <Spinner />;

  // If already logged in, redirect to home page
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PublicRoute;
