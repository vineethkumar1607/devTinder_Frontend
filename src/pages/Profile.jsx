import React from 'react'

import UpdateProfileForm from '../components/UpdateProfileForm'
import { useSelector } from 'react-redux'

const Profile = () => {

    const userDetails = useSelector((state) => state.user.user)
    console.log(userDetails)
    return (
        <div className=' mx-auto mt- p-6 bg-base-300 rounded-lg shadow-md'>
            <h2 className="text-2xl font-bold mb-6 text-center">Update Profile</h2>
            <UpdateProfileForm userDetails={userDetails} />
        </div>
    )
}

export default Profile
