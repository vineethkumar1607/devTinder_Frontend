import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedInUser, finishLoading } from "../utils/redux/userSlice";
import axiosInstance from "../utils/axiosInstance";
import Spinner from "../components/Spinner";

const AppLayout = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.user);

  const fetchUser = async () => {
    try {
      const response = await axiosInstance.get("/profile/view");
      const user = response.data;
      dispatch(setLoggedInUser({ user }));
    } catch (err) {
      console.error("Session check failed:", err.message);
    } finally {
      dispatch(finishLoading());
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (isLoading) return <Spinner />;

  return <Outlet />;
};

export default AppLayout;
