import { useState } from "react";
import { validateEmail, validatePassword } from "../utils/formValidators"


const useLoginForm = ({ onSuccess }) => {

    const [loginFormData, setLoginFormData] = useState({ email: "vineeth@gmail.com", password: "Vineeth@123" });
    const [error, setError] = useState({});

    const validateCredentials = () => {
        const newErrors = {};
        newErrors.email = validateEmail(loginFormData.email);
        newErrors.password = validatePassword(loginFormData.password);
        setError(newErrors);
        // If any error string is truthy, return false
        return !Object.values(newErrors).some(Boolean)
    }

    const handleChange = (e) => {
        const { value, name } = e.target
        setLoginFormData((prev) => ({ ...prev, [name]: value }))
        // Clears error when typing
        if (error[name]) {
            setError((prev) => ({ ...prev, [name]: "" }))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateCredentials()) {
            onSuccess(loginFormData)
        }
    }
    return { handleChange, handleSubmit, error, loginFormData }


}

export default useLoginForm
