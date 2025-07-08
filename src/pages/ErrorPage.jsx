// src/pages/ErrorPage.jsx
import { useRouteError, useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    console.error("Error caught by router:", error);

    const handleGoBack = () => {
        navigate(-1); // Goes to the previous page
    };

    const handleRefresh = () => {
        window.location.reload(); // Reloads current page
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-base-200 text-center px-4">
            <h1 className="text-5xl font-bold text-error mb-4">Something went wrong</h1>
            <p className="text-lg text-base-content mb-2">
                We encountered an unexpected error. Please try again later.
            </p>

            {error?.status && (
                <p className="text-sm text-base-content/70 mb-4">
                    <strong>Status:</strong> {error.status} – {error.statusText || "Unexpected Error"}
                </p>
            )}

            <div className="flex gap-4 mt-6">
                <button className="btn btn-outline" onClick={handleGoBack}>
                    ⬅️ Go Back
                </button>
                <button className="btn btn-outline" onClick={handleRefresh}>
                    🔁 Refresh
                </button>
                <button className="btn btn-primary" onClick={() => navigate("/")}>
                    🏠 Go Home
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;
