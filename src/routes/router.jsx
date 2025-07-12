import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout"; // ✅ NEW
import MainLayout from "../layouts/MainLayout";
import PublicLayout from "../layouts/PublicLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Connections from "../pages/Connections";
import LoginPage from "../pages/LoginPage";
import Profile from "../pages/Profile"
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./publicroute";


export const router = createBrowserRouter([
  {
    element: <AppLayout />, // ✅ Fetches session globally
    children: [
      {
        element: <PublicLayout />,
        children: [
          {
            path: "/login",
            element: (
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            ),
          },
        ],
      },
      {
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: (
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            ),
          },
          {
            path: "connections",
            element: (
              <ProtectedRoute>
                <Connections />
              </ProtectedRoute>
            ),
          },
          {
            path: "profile",
            element: (
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            ),
          },
        ],
      },
    ],
  },
]);
