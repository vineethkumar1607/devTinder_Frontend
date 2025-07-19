// src/hooks/useSignup.js
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { setLoggedInUser } from "../utils/redux/userSlice";
import toast from "react-hot-toast";

export const useSignup = () => {
    const [formError, setFormError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    };

    const handleSignupSubmit = async (values, { setSubmitting }) => {
        try {
            setFormError("");
            console.log("SUBMITTING to backend with:", values);

            const response = await axiosInstance.post("/auth/signup", {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                password: values.password,
            });

            const { user } = response.data;
            dispatch(setLoggedInUser(user));
            toast.success(`Welcome to Devtinder ${user?.firstName || "Developer"}!`);
            navigate('/profile');
            return { success: true };
        } catch (error) {
            console.log("ERROR RESPONSE", error);
            const errorMessage = error.response?.data?.error?.message ||
                              "Something went wrong. Please try again.";
            setFormError(errorMessage);
            return { success: false, error: errorMessage };
        } finally {
            setSubmitting(false);
        }
    };

    return {
        initialValues,
        handleSignupSubmit,
        formError
    };
};