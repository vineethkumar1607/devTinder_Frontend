import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRequestsReceived } from '../utils/redux/requestsReceivedSlice';
import UsersList from '../components/UsersList';
import ErrorPage from './ErrorPage';
import axiosInstance from '../utils/axiosInstance';

const Requests = () => {
    const dispatch = useDispatch();
    const { requests, isLoading, error: fetchError, uiStrings } = useSelector(state => state.requests);
    
    const [requestError, setRequestError] = useState(null); // 👈 for review errors

    useEffect(() => {
        dispatch(fetchRequestsReceived());
    }, [dispatch]);

    const handleRequestReview = useCallback(async (action, userId) => {
        try {
            await axiosInstance.post(`/request/review/${action}/${userId}`);
            setRequestError(null); // Clear previous error if any
            dispatch(fetchRequestsReceived());
        } catch (err) {
            const msg = err.response?.data?.message || err.message || "Something went wrong.";
            setRequestError(msg);
        }
    }, [dispatch]);

    const processedRequests = useMemo(() => {
        return requests.map(req => ({
            ...req.senderUser,
            flags: req.flags,
            _id: req.senderUser._id,
            requestId: req._id
        }));
    }, [requests]);

    const actions = [
        {
            key: 'accepted',
            label: 'Accept',
            variant: 'primary',
            show: user => user.flags?.canAccept
        },
        {
            key: 'ignored',
            label: 'Reject',
            variant: 'secondary',
            show: user => user.flags?.canReject
        }
    ];

    // 🔴 Handle errors: show either fetch error or review error
    const combinedError = fetchError || (requestError ? { message: requestError } : null);

    return (
        <div className="mt-10">
            <UsersList
                data={processedRequests}
                isLoading={isLoading}
                error={combinedError} // 👈 pass the error
                title={uiStrings?.title || "Requests"}
                emptyMessage={uiStrings?.emptyMessage || "No pending requests"}
                actions={actions}
                onActionClick={handleRequestReview}
            />
        </div>
    );
};

export default Requests;
