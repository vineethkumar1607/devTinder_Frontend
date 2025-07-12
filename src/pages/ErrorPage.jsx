import { useNavigate } from "react-router-dom";

const ErrorPage = ({ error }) => {
    const navigate = useNavigate();
    
    // Extract error details with defaults
    const status = error?.status || error?.statusCode || 500;
    const userMessage = error?.userMessage || 
                       (status === 404 ? "The page you're looking for doesn't exist" 
                                      : "Something went wrong. Please try again later");
    const technicalMessage = error?.debugMessage || error?.message;

    const handleGoBack = () => navigate(-1);
    const handleRefresh = () => window.location.reload();

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-base-200 text-center px-4">
            {/* Error Status Icon */}
            <div className="text-8xl mb-4">
                {status === 404 ? "🔍" : "⚠️"}
            </div>
            
            {/* Main Error Heading */}
            <h1 className="text-4xl font-bold text-error mb-4">
                {status === 404 ? "Page Not Found" : "Oops!"}
            </h1>
            
            {/* User-friendly Message */}
            <p className="text-xl text-base-content mb-6 max-w-md">
                {userMessage}
            </p>

            {/* Technical Details (Dev Only)
            {process.env.NODE_ENV === 'development' && technicalMessage && (
                <details className="mb-6 text-sm bg-base-300 rounded-lg p-3 max-w-md">
                    <summary className="cursor-pointer">Technical Details</summary>
                    <div className="mt-2 text-left">
                        <p><strong>Error:</strong> {technicalMessage}</p>
                        <p><strong>Status:</strong> {status}</p>
                    </div>
                </details>
            )} */}

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
                <button 
                    className="btn btn-outline gap-2" 
                    onClick={handleGoBack}
                >
                    <span>⬅️</span>
                    Go Back
                </button>
                <button 
                    className="btn btn-outline gap-2" 
                    onClick={handleRefresh}
                >
                    <span>🔄</span>
                    Refresh
                </button>
                <button 
                    className="btn btn-primary gap-2" 
                    onClick={() => navigate("/")}
                >
                    <span>🏠</span>
                    Go Home
                </button>
            </div>

            {/* Support Contact (Optional) */}
            <p className="mt-8 text-base-content/70">
                Need help? <a href="mailto:support@example.com" className="link">Contact support</a>
            </p>
        </div>
    );
};

export default ErrorPage;