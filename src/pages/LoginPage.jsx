import axios from "axios"
import LoginForm from "../components/Auth/LoginForm"
import { useDispatch } from "react-redux"
import { setLoggedInUser } from "../utils/redux/userSlice"
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../utils/constants"

const LoginPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation()
    const redirectPath = new URLSearchParams(location.search).get("redirect") || "/"
    const login = async (loginFormData) => {
        try {

            const response = await axios.post(`${API_BASE_URL}/auth/login`, {
                email: loginFormData.email,
                password: loginFormData.password
            },
                { // enabling cookies storage and sending
                    withCredentials: true
                })

            // sending the user data to the store
            const { user } = response.data;
            toast.success(`Welcome back ${user?.user?.firstName}`)
            dispatch(setLoggedInUser(user))
            // navigate to pevious path or home page
            return navigate(redirectPath)
        } catch (error) {
            console.error("Login failed:", error.message);
            if (error.response?.data?.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error("Something went wrong. Please try again.");
            }
        }
    }
    return (
        <>
            <div className="max-w-md mx-auto mt-20 p-6 bg-base-300 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <LoginForm onSuccess={login} />
            </div>
        </>
    )
}

export default LoginPage
