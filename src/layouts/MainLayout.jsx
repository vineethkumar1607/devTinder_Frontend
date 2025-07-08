// MainLayout.jsx
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axiosInstance from '../utils/axiosInstance';
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedInUser, finishLoading } from '../utils/redux/userSlice';
import Spinner from '../components/Spinner';

const MainLayout = () => {
    const dispatch = useDispatch();
    const { isLoading } = useSelector((state) => state.user)

    const fetchUser = async () => {
        try {
            const response = await axiosInstance.get("/profile/view")
            const user = response.data;
            // console.log(user)
            dispatch(setLoggedInUser({ user }));
        } catch (error) {
            console.error("Session check failed:", error.message);
            // Optional: dispatch(logOutUser());
        } finally {
            dispatch(finishLoading());
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    if (isLoading) return <Spinner />
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default MainLayout;
