import axios from "axios"
import LoginForm from "../components/Auth/LoginForm"
import { useDispatch, useSelector } from "react-redux"
import { setLoggedInUser } from "../utils/redux/userSlice"
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../utils/constants"

const LoginPage = () => {

    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user.user);
    const navigate = useNavigate();

    const login = async (loginFormData) => {
        try {
            const response = await axios.post(`${API_BASE_URL}auth/login`, {
                email: loginFormData.email,
                password: loginFormData.password
            },
                { // enabling cookies storage and sending
                    withCredentials: true
                })
            const { user } = response.data;
            toast.success(`Welcome back ${user.user.firstName}`)
            dispatch(setLoggedInUser(user))

            return navigate('/')
        } catch (error) {
            console.error(error.response)
        }
    }
    return (
        <>
            {/* toast notification config on login  */}
            {/* <Toaster
                position="top-center"
                toastOptions={{
                    duration: 4000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },
                }}
            /> */}
            <div className="max-w-md mx-auto mt-2
        0 p-6 bg-base-300 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <LoginForm onSuccess={login} />
            </div>
        </>
    )
}

export default LoginPage
