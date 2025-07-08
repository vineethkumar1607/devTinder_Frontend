// routes/PublicRoute.jsx
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Spinner from "../components/Spinner";

const PublicRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useSelector((state) => state.user);

if (isLoading) return <Spinner />;

if (isAuthenticated) {
  return <Navigate to="/" replace />;
}

  return children;
};

export default PublicRoute;
