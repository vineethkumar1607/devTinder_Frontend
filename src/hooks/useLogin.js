// src/hooks/useLogin.js
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoggedInUser } from "../utils/redux/userSlice";
import toast from "react-hot-toast";
import axiosInstance from "../utils/axiosInstance";


export const useLogin = () => {
    const [formError, setFormError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const redirectPath = new URLSearchParams(location.search).get("redirect") || "/";

    const initialValues = {
        email: "",
        password: ""
    };

    const handleLoginSubmit = async (values, { setSubmitting }) => {
        try {
            setFormError("");
            const response = await axiosInstance.post("/auth/login", {
                email: values.email,
                password: values.password,
            });

            const { user } = response.data;
            dispatch(setLoggedInUser(user));
            toast.success(`Welcome back ${user?.user?.firstName || "Developer"}!`);
            navigate(redirectPath);
        } catch (error) {
            console.error("Login failed:", error.message);
            setFormError(
                error.response?.data?.error?.message ||
                "Something went wrong. Please try again."
            );
        } finally {
            setSubmitting(false);
        }
    };

    return {
        initialValues,
        handleLoginSubmit,
        formError
    };
};
