// src/pages/LoginPage.jsx
import { useState } from "react";
import LoginForm from "../components/Auth/LoginForm";
import SignupForm from "../components/Auth/SignupForm";

const AuthenticationPage = () => {
    const [isLoginForm, setIsLoginForm] = useState(true);

    const toggleForm = () => setIsLoginForm(!isLoginForm);

    return (
    <div className="min-h-[calc(100vh-65px)] bg-base-100 flex items-center justify-center">
            <div className="w-full max-w-md bg-base-300 rounded-xl shadow-lg px-6 py-8 sm:px-8 sm:py-10 mx-4">
                <h2 className="text-2xl font-bold text-center mb-6">
                    {isLoginForm ? "Login" : "Sign Up"}
                </h2>

                {isLoginForm ? <LoginForm /> : <SignupForm />}

                <div className="text-center mt-6 text-sm">
                    {isLoginForm ? (
                        <p>
                            Don’t have an account?{" "}
                            <span
                                onClick={toggleForm}
                                className="font-bold text-primary cursor-pointer hover:underline"
                            >
                                Sign up
                            </span>
                        </p>
                    ) : (
                        <p>
                            Already registered?{" "}
                            <span
                                onClick={toggleForm}
                                className="font-bold text-primary cursor-pointer hover:underline"
                            >
                                Sign in
                            </span>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthenticationPage;
