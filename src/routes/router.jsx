// router.jsx
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PublicLayout from "../layouts/PublicLayout"; // ✅ NEW
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Connections from "../pages/Connections";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./publicroute";

export const router = createBrowserRouter([
    {
        element: <PublicLayout />, // Public layout only used for login/signup
        children: [
            {
                path: "/login",
                element: (
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                )
            },
        ],
    },
    {
        element: <MainLayout />, //  Protected layout
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
        ],
    },
]);
