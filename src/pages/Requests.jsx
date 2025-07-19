// Requests.js

import UsersList from '../components/UsersList';
import { useRequest } from '../hooks/useRequest';

const Requests = () => {
    const {
        processedRequests,
        isLoading,
        error,
        uiStrings,
        actions,
        handleRequestReview,
        defaultTitle,
        defaultEmptyMessage
    } = useRequest();

    return (
        <div className="mt-10">
            <UsersList
                data={processedRequests}
                isLoading={isLoading}
                error={error}
                title={uiStrings?.title || defaultTitle}
                emptyMessage={uiStrings?.emptyMessage || defaultEmptyMessage}
                actions={actions}
                onActionClick={handleRequestReview}
            />
        </div>
    );
};

export default Requests;