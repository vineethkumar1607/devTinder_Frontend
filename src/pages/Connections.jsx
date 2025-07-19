import React, { useEffect } from 'react'
import { fetchConnections } from '../utils/redux/connectionsSlice';
import { useDispatch, useSelector } from 'react-redux';
import UsersList from '../components/UsersList';

const Connections = () => {
    const dispatch = useDispatch();
    const {
        connections,
        isLoading,
        error,
        uiStrings
    } = useSelector((state) => state.connections);

    useEffect(() => {
        dispatch(fetchConnections())
    }, [dispatch]);


    return (
        <div className='mt-10'>
            <UsersList
                data={connections}
                isLoading={isLoading}
                error={error?.message || error}
                title={uiStrings?.title || "All Connections"}
                emptyMessage={uiStrings?.emptyMessage || "No connections found"} />
        </div>
    )
}

export default Connections
