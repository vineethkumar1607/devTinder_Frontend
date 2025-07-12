import * as Yup from "yup";

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format")
    .max(254, "Email too long"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Include at least one uppercase letter")
    .matches(/[0-9]/, "Include at least one number")
    .matches(/[^A-Za-z0-9]/, "Include at least one special character"),
});
