import axios from "axios"
import LoginForm from "../components/Auth/LoginForm"

const LoginPage = () => {

    const login = (loginFormData) => {
        try {
            const response = axios.post("http://localhost:7777/auth/login", {
                email: loginFormData.email,
                password: loginFormData.password
            },
                { // enabling cookies storage and sending
                    withCredentials: true
                })

            console.log("Login:", response.data)
            console.log("Login:", response.headers)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div className="max-w-md mx-auto  p-6 bg-base-300 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <LoginForm onSuccess={login} />
        </div>
    )
}

export default LoginPage
