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

export const signupValidationSchema = Yup.object({
  firstName: Yup.string()
    .required("First name is required")
    .min(3, "First name must be between 3 and 25 characters.")
    .max(25, "First name must be between 3 and 25 characters."),
  lastName: Yup.string()
    .required("Last name is required")
    .min(3, "Last name must be between 3 and 25 characters.")
    .max(25, "Last name must be between 3 and 25 characters."),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format.")
    .max(254, "Email is too long. Maximum 254 characters."),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters.")
    .matches(/[A-Z]/, "Password must include at least one uppercase letter.")
    .matches(/[0-9]/, "Password must include at least one number.")
    .matches(/[^A-Za-z0-9]/, "Password must include at least one special character."),
});
