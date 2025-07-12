import * as Yup from "yup"

export const profilevalidation = Yup.object().shape({
    firstName: Yup.string()
        .required("First name is required")
        .min(3, "First name should be atleast minium of 3 characters")
        .max(25, "First name is too long. Only 25 character allowed"),
    lastName: Yup.string()
        .required("Last name is required")
        .min(3, "Last name should be atleast minium of 3 characters")
        .max(25, "Last name is too long. Only 25 character allowed"),
    age: Yup.number()
        .min(18, 'Age Must be at least 18')
        .max(100, 'Maximum age is 100')
        .nullable(),
    gender: Yup.string()
        .nullable(),
    photoUrl: Yup.string()
        .url('Invalid URL format')
        .nullable(),
    about: Yup.string()
        .min(50, 'Too short!. About should be atleast 50 characters')
        .max(500, 'Maximum 500 characters allowed')
        .nullable(),
    skills: Yup.array()
        .max(10, 'Maximum 10 skills allowed')
        .nullable()
})