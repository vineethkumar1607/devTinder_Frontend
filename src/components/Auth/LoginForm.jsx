import TextInput from "../formFields/TextInput";
import PasswordInput from "../formFields/PasswordInput";
import useLoginForm from "../../hooks/useLoginForm";
import { useState } from "react";

const LoginForm = ({ onSuccess }) => {
    const { handleChange, error, loginFormData } = useLoginForm({ onSuccess });
    const [formError, setFormError] = useState("");

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const hasErrors = Object.values(error).some((err) => err);
        const hasEmptyFields = Object.values(loginFormData).some((val) => !val);

        if (hasEmptyFields) {
            setFormError("Please fill in all required fields.");
            return;
        }

        if (hasErrors) {
            setFormError("Please fix the errors before submitting.");
            return;
        }

        setFormError("");
        await onSuccess(loginFormData, setFormError); // ✅ Pass form error setter
    };

    return (
        <form onSubmit={handleFormSubmit} noValidate>
            <TextInput
                label="Email"
                name="email"
                type="email"
                value={loginFormData.email}
                onChange={handleChange}
                error={error.email}
                placeholder="your@email.com"
                required
            />

            <PasswordInput
                label="Password"
                name="password"
                type="password"
                value={loginFormData.password}
                onChange={handleChange}
                error={error.password}
                placeholder="password"
                required
            />
            <div className="h-6 text-center mb-2">
                {formError && (
                    <p className="text-red-500 font-medium text-sm">{formError}</p>
                )}
            </div>

            <button type="submit" className="btn btn-primary w-full my-6">
                Login
            </button>
        </form>
    );
};

export default LoginForm;
