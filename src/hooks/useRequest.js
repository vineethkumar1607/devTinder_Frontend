// hooks/useRequestManager.js
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRequestsReceived } from '../utils/redux/requestsReceivedSlice';
import axiosInstance from '../utils/axiosInstance';

export const useRequest = () => {
    const dispatch = useDispatch();
    const { requests, isLoading, error: fetchError, uiStrings } = useSelector(state => state.requests);

    const [requestError, setRequestError] = useState(null);

    useEffect(() => {
        dispatch(fetchRequestsReceived());
    }, [dispatch]);

    const handleRequestReview = useCallback(async (action, userId) => {
        try {
            await axiosInstance.post(`/request/review/${action}/${userId}`);
            setRequestError(null);
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

    const combinedError = fetchError || (requestError ? { message: requestError } : null);

    return {
        processedRequests,
        isLoading,
        error: combinedError,
        uiStrings,
        actions,
        handleRequestReview,
        defaultTitle: "Requests",
        defaultEmptyMessage: "No pending requests"
    };
};