import React from 'react';
import { useDispatch } from 'react-redux';
import { removeUserFromFeed } from '../utils/redux/feedSlice';
import axiosInstance from '../utils/axiosInstance';

const FeedUserCard = ({ user }) => {
    if (!user) return null;
    const { _id, firstName, lastName, about, age, gender, skills = [], photoUrl } = user;
    const dispatch = useDispatch();

    const handleFeedResponse = async (status, userId) => {
        try {
            await axiosInstance.post(`/request/send/${status}/${userId}`)
            dispatch(removeUserFromFeed(userId))
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className="card bg-base-100 w-100 shadow-sm hover:shadow-md transition-shadow">
            <figure className='h-64 w-full relative'>
                <img
                    className='w-full h-full object-cover'
                    src={photoUrl}
                    alt={`${firstName} ${lastName}'s profile`}
                />
            </figure>
            <div className="card-body p-6">
                <h2 className="card-title text-2xl mb-1">{firstName} {lastName}</h2>

                <p className="flex items-center gap-1 text-sm text-gray-300 mb-3">
                    {age && <span>{age} years</span>}
                    {gender && <span>{gender.charAt(0).toUpperCase() + gender.slice(1)}</span>}
                </p>

                <p className="mb-4 text-gray-300">{about}</p>

                {skills.length > 0 && (
                    <div className="mb-5">
                        <h3 className="font-medium mb-2">Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="badge badge-outline badge-primary py-2 px-3 rounded-full">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                <div className="card-actions justify-between mt-4">
                    <button className="btn btn-outline btn-error flex-1" onClick={() => handleFeedResponse("ignored", _id)}>Ignore</button>
                    <button className="btn btn-primary flex-1" onClick={() => handleFeedResponse("interested", _id)}>Interested</button>
                </div>
            </div>
        </div>
    );
};

export default FeedUserCard;