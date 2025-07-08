import { useDispatch } from "react-redux"
import axiosInstance from "../utils/axiosInstance"
import { logoutUser } from "../utils/redux/userSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export  const useAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const logout = async () => {
        try {
            await axiosInstance.post("/auth/logout");
            dispatch(logoutUser());
            toast.success("You have been logged out");
            navigate("/login")
        } catch (error) {
            toast.error("logout failed. please try again")
        }
    }
    return { logout }

}