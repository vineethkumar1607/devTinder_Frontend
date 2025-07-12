import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginValidationSchema } from "../../utils/formValidators";
import { useState } from "react";
import TextInput from "../formFields/TextInput";
import PasswordInput from "../formFields/PasswordInput";

const LoginForm = ({ onSuccess }) => {
    const [formError, setFormError] = useState("");

    const initialValues = {
        email: "",
        password: ""
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            setFormError(""); // clear any previous error
            await onSuccess(values, setFormError); // login and pass error handler
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={loginValidationSchema}
            onSubmit={handleSubmit}
            validateOnChange={true}
            validateOnBlur={true}
        >
            {({ isSubmitting }) => (
                <Form noValidate>
                    <Field
                        name="email"
                        type="email"
                        as={TextInput}
                        label="Email"
                        placeholder="your@email.com"
                        required
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mb-2" />

                    <Field
                        name="password"
                        type="password"
                        as={PasswordInput}
                        label="Password"
                        placeholder="password"
                        required
                    />
                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm mb-2" />

                    <div className="h-6 text-center mb-2">
                        {formError && (
                            <p className="text-red-500 font-medium text-sm">{formError}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-full my-6"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Logging in..." : "Login"}
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default LoginForm;
