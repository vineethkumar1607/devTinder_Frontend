import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Connections from "../pages/Connections";
import LoginPage from "../pages/LoginPage";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "connections",
                element: <Connections />
            },
            {
                path: "login",
                element: <LoginPage />
            }
        ]
    }
])