
import { useEffect, useState } from "react"

import FeedUserCard from "../components/FeedUserCard"
import Spinner from "../components/Spinner";
import ErrorPage from "../pages/ErrorPage"
import { useDispatch, useSelector } from "react-redux"
import { fetchFeedUsers } from "../utils/redux/feedSlice"

const Home = () => {

    const dispatch = useDispatch();
    const { usersFeed, isLoading, error } = useSelector((state) => state.feed)

    useEffect(() => {
        dispatch(fetchFeedUsers())
    }, []);

    if (isLoading) {
        return <Spinner />
    }
    if (error) {
        <ErrorPage error={error} />
    }
    return (
        usersFeed.length > 0 ? (
            <div className="flex justify-center my-12">
                <FeedUserCard user={usersFeed[0]} />
            </div>
        ) : (
            <div className="text-center my-12 text-gray-500">No users found.</div>
        )
    )
}

export default Home
