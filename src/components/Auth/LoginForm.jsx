// src/components/Auth/LoginForm.jsx
import { Formik, Form, Field } from "formik";
import { loginValidationSchema } from "../../utils/formValidators";
import TextInput from "../formFields/TextInput";
import PasswordInput from "../formFields/PasswordInput";
import { useLogin } from "../../hooks/useLogin";

const LoginForm = () => {
    const { initialValues, handleLoginSubmit, formError } = useLogin();

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={loginValidationSchema}
            onSubmit={handleLoginSubmit}
            validateOnChange={true}
            validateOnBlur={true}
        >
            {({ isSubmitting }) => (
                <Form noValidate className="space-y-5">
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
                        <div className="text-center text-sm text-red-500 font-medium">
                            {formError}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4zm2 5.3A8 8 0 014 12H0c0 3.04 1.13 5.82 3 7.94l3-2.64z" />
                                </svg>
                                Logging in...
                            </span>
                        ) : "Login"}
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default LoginForm;
