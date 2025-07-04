import TextInput from "../formFields/TextInput"
import PasswordInput from "../formFields/PasswordInput";
import useLoginForm from "../../hooks/useLoginForm";


const LoginForm = ({ onSuccess }) => {

    const { handleChange, handleSubmit, error, loginFormData } = useLoginForm({ onSuccess })
    return (
        <>

            <form onSubmit={handleSubmit}>
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
                <button type="submit" className="btn btn-primary w-full my-6">
                    Login
                </button>
            </form>

        </>
    )
}

export default LoginForm
