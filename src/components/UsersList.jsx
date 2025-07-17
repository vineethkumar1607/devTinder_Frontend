// src/components/UsersList.jsx
import Spinner from "./Spinner";
import ErrorPage from "../pages/ErrorPage";
import Button from "./Button"
import React from "react";



const UsersList = React.memo(({
  data = [],
  isLoading = false,
  error = null,
  title,
  emptyMessage,
  actions = [],
  onActionClick = () => { },
}) => {
  if (isLoading) return <Spinner aria-label="Loading..." size="xl" />;
  if (error) return <ErrorPage error={error} />;

  return (
    <div className="flex justify-center min-h-full">
      <div className="w-3xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="mb-4 flex items-center justify-center">
          <h5 className="text-4xl font-bold text-gray-900 dark:text-white">{title}</h5>
        </div>

        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {data.length > 0 ? (
            data.map((user) => (
              <div key={user._id} className="py-4 sm:py-5 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    alt={`${user.firstName || "User"} image`}
                    height="40"
                    width="40"
                    src={user.photoUrl || "/default-avatar.png"}
                    className="rounded-full"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xl font-medium text-gray-900 dark:text-white">
                      {user.firstName ? `${user.firstName} ${user.lastName}` : user.email}
                    </p>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                      {user.about || "No description"}
                    </p>
                  </div>
                </div>

                <div className="ml-4 flex gap-2">
                  {actions
                    .filter(action => action.show?.(user))
                    .map(({ key, label, variant }) => (
                      <Button
                        key={key}
                        variant={variant}
                        onClick={() => onActionClick(key, user.requestId)}
                      >
                        {label}  {/* Passing label as children */}
                      </Button>
                    ))}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center py-4 text-gray-500 dark:text-gray-400">
              {emptyMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
});

export default UsersList;
