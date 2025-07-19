// src/components/Auth/SignupForm.jsx
import { Formik, Form, Field } from "formik";
import { signupValidationSchema } from "../../utils/formValidators";
import TextInput from "../formFields/TextInput";
import PasswordInput from "../formFields/PasswordInput";
import { useSignup } from "../../hooks/useSignup";

const SignupForm = () => {
    const { initialValues, handleSignupSubmit, formError } = useSignup();

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={signupValidationSchema}
            onSubmit={handleSignupSubmit}
            validateOnChange={true}
            validateOnBlur={true}
        >
            {({ isSubmitting }) => (
                <Form noValidate className="space-y-4">
                    <Field
                        name="firstName"
                        type="text"
                        as={TextInput}
                        label="First Name"
                        placeholder="Enter here..."
                        required
                    />

                    <Field
                        name="lastName"
                        type="text"
                        as={TextInput}
                        label="Last Name"
                        placeholder="Enter here..."
                        required
                    />

                    <Field
                        name="email"
                        type="email"
                        as={TextInput}
                        label="Email"
                        placeholder="your@email.com"
                        required
                    />

                    <Field
                        name="password"
                        type="password"
                        as={PasswordInput}
                        label="Password"
                        placeholder="password"
                        required
                    />

                    {formError && (
                        <div className="text-red-500 text-sm text-center">
                            {formError}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="btn btn-primary w-full mt-4"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Creating account..." : "Sign Up"}
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default SignupForm;